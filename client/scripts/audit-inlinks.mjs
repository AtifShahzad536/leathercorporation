import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_URL = 'https://www.hamlosportswear.site';

// Recursively find all index.html files in dist
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file === 'index.html') {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(DIST_DIR);
console.log(`Found ${htmlFiles.length} HTML files in dist/`);

// Map each file to its canonical URL
function fileToUrl(filePath) {
  const rel = path.relative(DIST_DIR, path.dirname(filePath)).replace(/\\/g, '/');
  const clean = rel.replace(/^\/+|\/+$/g, '');
  return clean ? `${BASE_URL}/${clean}/` : `${BASE_URL}/`;
}

// Track inlinks for all discovered URLs
const inlinkCounts = new Map();
for (const file of htmlFiles) {
  inlinkCounts.set(fileToUrl(file), 0);
}

// Extract all <a href="..."> links from each HTML file
const hrefRegex = /<a\s+(?:[^>]*?\s+)?href=["']([^"']+)["']/gi;

for (const file of htmlFiles) {
  const fromUrl = fileToUrl(file);
  const content = fs.readFileSync(file, 'utf8');
  let match;
  const seenTargets = new Set();

  while ((match = hrefRegex.exec(content)) !== null) {
    let href = match[1].trim();
    // Normalize href
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://wa.me') || href.startsWith('#')) {
      continue;
    }
    if (href.startsWith(BASE_URL)) {
      href = href.replace(BASE_URL, '');
    }
    const clean = href.replace(/^\/+|\/+$/g, '').split('?')[0].split('#')[0];
    const targetUrl = clean ? `${BASE_URL}/${clean}/` : `${BASE_URL}/`;

    if (inlinkCounts.has(targetUrl) && targetUrl !== fromUrl && !seenTargets.has(targetUrl)) {
      seenTargets.add(targetUrl);
      inlinkCounts.set(targetUrl, inlinkCounts.get(targetUrl) + 1);
    }
  }
}

// Analyze inlink counts
let orphanCount = 0;
let minInlinks = Infinity;
let maxInlinks = 0;
const orphanList = [];

for (const [url, count] of inlinkCounts.entries()) {
  if (count === 0) {
    orphanCount++;
    orphanList.push(url);
  }
  if (count < minInlinks) minInlinks = count;
  if (count > maxInlinks) maxInlinks = count;
}

console.log('\n========================================');
console.log('REAL CRAWLER INLINK AUDIT RESULTS:');
console.log('========================================');
console.log(`Total URLs Audited: ${inlinkCounts.size}`);
console.log(`Orphan Pages (0 incoming links): ${orphanCount}`);
console.log(`Minimum Incoming Links per Page: ${minInlinks}`);
console.log(`Maximum Incoming Links per Page: ${maxInlinks}`);

if (orphanList.length > 0) {
  console.log('Orphan URLs:', orphanList);
} else {
  console.log('🎉 100% PASS: ZERO ORPHAN PAGES FOUND ON THE ENTIRE WEBSITE!');
}

// Inspect a few sample URLs
console.log('\nSample Inlink Counts:');
const sampleUrls = [
  'https://www.hamlosportswear.site/',
  'https://www.hamlosportswear.site/custom-softball-uniforms/custom-softball-jogger-pants/',
  'https://www.hamlosportswear.site/custom-ice-hockey-uniforms/custom-ice-hockey-two-tone-jerseys/',
  'https://www.hamlosportswear.site/custom-rugby-uniforms/custom-rugby-pullover-hoodies/',
  'https://www.hamlosportswear.site/custom-tennis-apparel/',
  'https://www.hamlosportswear.site/contact/',
  'https://www.hamlosportswear.site/builder/',
  'https://www.hamlosportswear.site/sizing-chart/'
];

for (const u of sampleUrls) {
  console.log(`  ${u} -> ${inlinkCounts.get(u)} inlinks`);
}
