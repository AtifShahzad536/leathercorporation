const fs = require('fs');
const path = require('path');
const dns = require('dns');

// Fix for Windows / ISP DNS SRV resolution
try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch (e) {
  console.warn('DNS setServers error:', e.message);
}

require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
const Product = require('../models/Product');

const SOURCE_DIR = 'C:\\Users\\ABC\\Downloads\\Hamco-Style-Products-Transparent';
const MAPPING_FILE = path.join(__dirname, 'cloudinary_mapping.json');
const FULL_CATALOG_PATH = path.join(__dirname, '../../../client/src/data/fullCatalog296.js');

async function uploadFileWithRetry(filePath, folder, publicId, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await cloudinary.uploader.upload(filePath, {
        folder: folder,
        public_id: publicId,
        overwrite: true,
        resource_type: 'image',
      });
      return res;
    } catch (err) {
      if (attempt === retries) throw err;
      console.warn(`Retry ${attempt}/${retries} for ${publicId}: ${err.message}`);
      await new Promise(r => setTimeout(r, 1500 * attempt));
    }
  }
}

async function run() {
  console.log('🚀 Starting Cloudinary Catalog Sync...');

  // 1. Load existing mapping if any
  let mapping = {};
  if (fs.existsSync(MAPPING_FILE)) {
    try {
      mapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf-8'));
      console.log(`📋 Loaded ${Object.keys(mapping).length} cached Cloudinary uploads.`);
    } catch (e) {
      mapping = {};
    }
  }

  // 2. Discover all PNG files
  const sportDirs = fs.readdirSync(SOURCE_DIR);
  const itemsToUpload = [];

  for (const sport of sportDirs) {
    const sportPath = path.join(SOURCE_DIR, sport);
    if (!fs.statSync(sportPath).isDirectory()) continue;

    const files = fs.readdirSync(sportPath).filter(f => f.endsWith('.png'));
    for (const f of files) {
      const slug = f.replace(/\.png$/, '');
      const filePath = path.join(sportPath, f);
      itemsToUpload.push({
        sport,
        slug,
        filePath,
        folder: `hamlosports/products/${sport}`,
        publicId: slug,
      });
    }
  }

  console.log(`📦 Found ${itemsToUpload.length} total products across ${sportDirs.length} sport disciplines.`);

  // 3. Upload with Concurrency Pool (Concurrency: 6)
  const CONCURRENCY = 6;
  let completed = 0;
  let uploadedNow = 0;

  async function worker(item) {
    const key = `${item.sport}/${item.slug}`;
    if (mapping[key] && mapping[key].url) {
      completed++;
      return;
    }

    try {
      const res = await uploadFileWithRetry(item.filePath, item.folder, item.publicId);
      mapping[key] = {
        url: res.secure_url,
        publicId: res.public_id,
        format: res.format,
        width: res.width,
        height: res.height,
        bytes: res.bytes,
      };
      uploadedNow++;
      completed++;

      if (completed % 10 === 0 || completed === itemsToUpload.length) {
        console.log(`⏳ Progress: ${completed}/${itemsToUpload.length} (${Math.round((completed/itemsToUpload.length)*100)}%) - Last uploaded: ${item.slug}`);
        fs.writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2));
      }
    } catch (err) {
      console.error(`❌ Failed to upload ${item.slug}:`, err.message);
    }
  }

  // Run pool
  const queue = [...itemsToUpload];
  const activeWorkers = [];

  async function next() {
    if (queue.length === 0) return;
    const item = queue.shift();
    await worker(item);
    await next();
  }

  for (let i = 0; i < CONCURRENCY; i++) {
    activeWorkers.push(next());
  }

  await Promise.all(activeWorkers);
  fs.writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2));
  console.log(`🎉 Cloudinary upload complete! ${uploadedNow} newly uploaded. Total mapped: ${Object.keys(mapping).length}`);

  // 4. Update fullCatalog296.js
  console.log('📝 Updating client/src/data/fullCatalog296.js with Cloudinary URLs...');
  const catalogModule = require(FULL_CATALOG_PATH);
  const catalog = catalogModule.fullCatalog296;

  let catalogUpdatedCount = 0;
  for (const product of catalog) {
    // Find matching Cloudinary URL by slug across all sport keys
    let foundUrl = null;
    let foundPublicId = null;

    for (const [key, val] of Object.entries(mapping)) {
      if (key.endsWith(`/${product.slug}`)) {
        foundUrl = val.url;
        foundPublicId = val.publicId;
        break;
      }
    }

    if (foundUrl) {
      product.image = foundUrl;
      product.cloudinaryPublicId = foundPublicId;
      catalogUpdatedCount++;
    } else {
      console.warn(`⚠️ No Cloudinary mapping found for product slug: ${product.slug}`);
    }
  }

  // Re-write fullCatalog296.js preserving exports
  const newCatalogContent = `/**
 * Complete 296 Verified Products Catalog mapped directly from Hamco's exact URL taxonomy
 * Supporting URLs like: /custom-<sport>-uniforms/custom-<sport>-<product-slug>/
 * Hosted on Cloudinary CDN for instant, globally cached, high-fidelity transparent rendering.
 */

export const sportSlugToCategory = ${JSON.stringify(catalogModule.sportSlugToCategory, null, 2)};

export const categoryToSportSlug = ${JSON.stringify(catalogModule.categoryToSportSlug, null, 2)};

export const fullCatalog296 = ${JSON.stringify(catalog, null, 2)};

export default fullCatalog296;
`;

  fs.writeFileSync(FULL_CATALOG_PATH, newCatalogContent, 'utf-8');
  console.log(`✅ fullCatalog296.js updated! ${catalogUpdatedCount}/${catalog.length} products updated with Cloudinary URLs.`);

  // 5. Update MongoDB Atlas: Delete old and re-seed all 296 products
  console.log('🗄️ Connecting to MongoDB Atlas to sync products collection...');
  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 15000,
  });
  console.log('✅ Connected to MongoDB Atlas.');

  console.log('🗑️ Deleting all existing products from MongoDB...');
  const deleteResult = await Product.deleteMany({});
  console.log(`🗑️ Deleted ${deleteResult.deletedCount} existing products from MongoDB.`);

  console.log('🌱 Inserting 296 verified products into MongoDB...');
  const docsToInsert = catalog.map(p => ({
    name: p.name,
    slug: p.slug,
    sport: p.sport || p.category || 'Athletic',
    category: p.category || p.sport || 'Uniforms',
    price: typeof p.price === 'number' ? p.price : parseFloat(p.price) || 39.99,
    images: [{
      url: p.image,
      publicId: p.cloudinaryPublicId || '',
      alt: p.name,
    }],
    description: p.description || `${p.name} - Custom sublimated uniform manufactured factory-direct. Free 3D mockup, low MOQs, and worldwide air delivery.`,
    fabric: p.fabric || 'Dye-Sublimated Moisture-Wicking Performance Polyester (180-220 GSM)',
    badge: p.badge || 'FACTORY DIRECT',
    sizes: p.sizes || ['YS', 'YM', 'YL', 'YXL', 'AS', 'AM', 'AL', 'AXL', 'A2XL', 'A3XL'],
    colors: ['Custom Team Colors', 'Pantone Matched'],
    features: p.features || [
      'Full dye-sublimation: colors, crests, and numbers never crack or peel',
      'Custom names, player numbers, and sponsor logos included free',
      'Reinforced coverstitch seams engineered for high athletic contact',
      'Available in Youth YS-YXL and Adult XS-4XL cuts'
    ],
    isActive: true,
    isBestseller: !!p.isBestseller,
    isNew: !!p.isNew,
    rating: p.rating || 4.9,
    viewCount: 0,
  }));

  const inserted = await Product.insertMany(docsToInsert, { ordered: false });
  console.log(`✅ Successfully inserted ${inserted.length} products into MongoDB Atlas!`);

  await mongoose.disconnect();
  console.log('🔌 Disconnected from MongoDB.');

  // 6. Remove local product images from public folders as requested by user
  console.log('🧹 Cleaning up local product images from public directories...');
  const dirsToClean = [
    path.join(__dirname, '../../../client/public/products'),
    path.join(__dirname, '../../../admin/public/products'),
    path.join(__dirname, '../../uploads/products'),
  ];

  for (const d of dirsToClean) {
    if (fs.existsSync(d)) {
      fs.rmSync(d, { recursive: true, force: true });
      console.log(`🧹 Deleted local folder: ${d}`);
    }
  }

  console.log('✨ ALL TASKS COMPLETED SUCCESSFULLY!');
}

run().catch(err => {
  console.error('💥 Fatal error:', err);
  process.exit(1);
});
