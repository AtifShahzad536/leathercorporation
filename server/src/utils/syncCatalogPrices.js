const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const connectDB = require('../config/db');
const Product = require('../models/Product');

async function syncPrices() {
  try {
    console.log('🔄 Connecting to MongoDB Atlas...');
    await connectDB();

    const fcUrl = 'file:///' + path.resolve(__dirname, '../../../client/src/data/fullCatalog296.js').replace(/\\/g, '/');
    const { fullCatalog296 } = await import(fcUrl);

    const faqsPath = path.resolve(__dirname, '../../../client/src/data/productFaqs296.json');
    const fs = require('fs');
    const allFaqs = fs.existsSync(faqsPath) ? JSON.parse(fs.readFileSync(faqsPath, 'utf8')) : {};

    console.log(`📦 Loaded ${fullCatalog296.length} products with 4-tier pricing and ${Object.keys(allFaqs).length} FAQ entries.`);

    let updatedCount = 0;
    let createdCount = 0;

    for (const p of fullCatalog296) {
      const filter = { slug: p.slug };
      const productFaqs = allFaqs[p.slug]?.faqs || [];

      const updateData = {
        name: p.name,
        slug: p.slug,
        sport: p.sport || p.category || 'Athletic',
        category: p.category || p.sport || 'Uniforms',
        price: p.price,
        tierPrices: p.tierPrices,
        volumeTiers: p.volumeTiers,
        images: [{ url: p.image, alt: p.name, publicId: p.cloudinaryPublicId || '' }],
        description: p.description || `${p.name} - Custom sublimated uniform manufactured factory-direct.`,
        fabric: p.fabric || '180-220 GSM Moisture-Wicking Performance Polyester',
        badge: p.badge || 'PRO SPEC',
        sizes: p.sizes || ['YS', 'YM', 'YL', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
        features: p.features || [],
        faqs: productFaqs,
        rating: p.rating || 4.8,
        isActive: true,
      };

      const result = await Product.updateOne(
        filter,
        { $set: updateData },
        { upsert: true }
      );

      if (result.upsertedCount > 0) {
        createdCount++;
      } else {
        updatedCount++;
      }
    }

    console.log(`✅ Synchronization Complete!`);
    console.log(`   - Existing products updated with new 4-tier prices: ${updatedCount}`);
    console.log(`   - New products inserted: ${createdCount}`);
    console.log(`   - Total processed: ${updatedCount + createdCount}`);

    process.exit(0);
  } catch (err) {
    console.error('❌ Sync failed:', err);
    process.exit(1);
  }
}

syncPrices();
