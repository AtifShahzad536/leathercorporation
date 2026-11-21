import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fullCatalog296, sportSlugToCategory } from '../src/data/fullCatalog296.js';
import { sportsCategories } from '../src/data/sportsCategoriesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.hamlosportswear.site';
const DIST_DIR = path.resolve(__dirname, '../dist');
const TEMPLATE_FILE = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_FILE)) {
  console.error('Error: dist/index.html not found. Run "vite build" first.');
  process.exit(1);
}

const template = fs.readFileSync(TEMPLATE_FILE, 'utf8');

// Helper to escape HTML characters
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Helper to clean meta description (under 160 characters, no quotes)
function cleanDesc(text) {
  if (!text) return 'Custom sublimated team uniforms factory direct from Sialkot, Pakistan. 15-set low MOQ, free 12-hour 3D mockups, DDP shipping across the USA.';
  const cleaned = text.replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();
  return cleaned.length > 158 ? cleaned.substring(0, 155) + '...' : cleaned;
}

// Generate pre-rendered HTML by injecting custom meta tags into the template
function generateHtml({
  title,
  description,
  canonicalPath,
  image = `${BASE_URL}/hamlo-athletes-lineup.png`,
  schema = null
}) {
  const cleanPath = canonicalPath.replace(/^\/+|\/+$/g, '');
  const canonicalUrl = cleanPath ? `${BASE_URL}/${cleanPath}/` : `${BASE_URL}/`;
  const siteTitle = title.toLowerCase().includes('hamlo') ? title : `${title} | HAMLO SPORTS`;
  const metaDesc = cleanDesc(description);

  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(siteTitle)}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/s,
    `<meta name="description" content="${escapeHtml(metaDesc)}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/s,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace OpenGraph URL, Title, Description, Image
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:title" content="${escapeHtml(siteTitle)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:description" content="${escapeHtml(metaDesc)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:image" content="${escapeHtml(image)}" />`
  );

  // Replace Twitter Title, Description, Image
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:title" content="${escapeHtml(siteTitle)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:description" content="${escapeHtml(metaDesc)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`
  );

  // Inject additional Page-Specific JSON-LD Schema if provided
  if (schema) {
    const schemaScript = `\n  <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`;
    html = html.replace('</head>', `${schemaScript}\n</head>`);
  }

  return html;
}

// Write file ensuring directory exists
function writeRoute(routePath, html) {
  const clean = routePath.replace(/^\/+|\/+$/g, '');
  const targetDir = clean ? path.join(DIST_DIR, clean) : DIST_DIR;
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
}

console.log('🚀 Starting SEO Pre-rendering for HAMLO SPORTS...');
let count = 0;

// 1. Root / Homepage
const homeHtml = generateHtml({
  title: 'Custom Team Uniforms | Hamlo Sports Wear Sialkot',
  description: 'Factory-direct custom team uniforms and sublimated athletic apparel manufactured in Sialkot, Pakistan. 15-set low MOQ, free 12-hour 3D mockups, 8–12 day production, and DDP delivery across the USA.',
  canonicalPath: '',
  image: `${BASE_URL}/hamlo-athletes-lineup.png`
});
writeRoute('', homeHtml);
count++;

// 2. 12 Sport Category Hub Pages
for (const [slug, sportName] of Object.entries(sportSlugToCategory)) {
  const catData = sportsCategories.find(c => c.slug === slug);
  const catDesc = catData?.description || `Pro-grade custom ${sportName.toLowerCase()} uniforms, jerseys, pants, and team outerwear with premium tackle twill and dye-sublimation factory-direct from Sialkot.`;
  const catImage = catData?.image || `${BASE_URL}/hamlo-athletes-lineup.png`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Custom ${sportName} Uniforms & Apparel`,
    description: catDesc,
    url: `${BASE_URL}/${slug}/`
  };

  const catHtml = generateHtml({
    title: `Custom ${sportName} Uniforms & Sublimated Team Apparel | HAMLO SPORTS`,
    description: catDesc,
    canonicalPath: slug,
    image: catImage,
    schema
  });
  writeRoute(slug, catHtml);
  count++;
}

// 3. 296 Product Landing Pages
for (const prod of fullCatalog296) {
  const route = prod.canonical ? prod.canonical.replace(/^\/|\/$/g, '') : `${prod.categorySlug}/${prod.slug}`;
  const prodDesc = prod.features && prod.features.length > 0 
    ? `${prod.name}: ${prod.features[0]}. Factory-direct starting at $${prod.price}. Sialkot manufacturer with 12-hour free 3D mockups and DDP USA shipping.`
    : `Custom ${prod.name} manufactured factory-direct in Sialkot, Pakistan. Low MOQ, free 3D digital mockup, high-performance sublimated fabrics.`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: prod.name,
    image: prod.image,
    description: cleanDesc(prodDesc),
    brand: {
      '@type': 'Brand',
      name: 'HAMLO SPORTS'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: prod.price ? String(prod.price) : '44.99',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/${route}/`
    }
  };

  const prodHtml = generateHtml({
    title: `${prod.name} | Custom ${prod.sport} Uniforms | HAMLO SPORTS`,
    description: prodDesc,
    canonicalPath: route,
    image: prod.image,
    schema
  });
  writeRoute(route, prodHtml);
  count++;
}

// 4. Static Essential Pages
const staticPages = [
  {
    path: 'custom-cricket-uniforms',
    title: 'Custom Cricket Uniforms & Sublimated T20 Jerseys USA',
    desc: 'Custom sublimated cricket jerseys, white match flannels, colored T20 kits, and training gear factory-direct from Sialkot, Pakistan.'
  },
  {
    path: 'custom-tennis-apparel',
    title: 'Custom Tennis Apparel, Polos & Team Uniforms USA',
    desc: 'High-performance custom tennis polos, skirts, warmup jackets and moisture-wicking club apparel manufactured factory-direct.'
  },
  {
    path: 'custom-field-hockey-uniforms',
    title: 'Custom Field Hockey Uniforms, Kilts & Kits USA',
    desc: 'Custom sublimated field hockey jerseys, kilts, scrimmage vests and team tracksuits manufactured in Sialkot with fast US delivery.'
  },
  {
    path: 'custom-sports-gloves',
    title: 'Custom Sports Gloves & Goalkeeper Gloves Factory Direct',
    desc: 'Professional German-latex goalkeeper gloves, batting gloves, and receiver gloves made to custom team specifications.'
  },
  {
    path: 'builder',
    title: '3D Custom Sports Uniform & Jersey Builder',
    desc: 'Design your custom team jerseys in real-time 3D. Choose colors, add custom numbers, logos, and get a free instant proof in 12 hours.'
  },
  {
    path: '3d-builder',
    title: '3D Interactive Uniform Design Studio',
    desc: 'Design and customize 3D team sports uniforms in real-time with instant 360-degree rotation and custom color placements.'
  },
  {
    path: 'how-long-do-custom-uniforms-take',
    title: 'How Long Do Custom Uniforms Take? Production & Delivery Guide',
    desc: 'Everything you need to know about custom uniform turnaround times: 12-hour 3D proofs, 8-12 day production, and 3-5 day air delivery.'
  },
  {
    path: 'request-a-quote',
    title: 'Request a Free 12-Hour 3D Mockup & Wholesale Quote',
    desc: 'Get a free digital 3D proof and factory-direct volume pricing within 2 to 4 business hours. No commitment required.'
  },
  {
    path: 'start-custom-orders',
    title: 'Start Your Custom Team Order - Factory Direct',
    desc: 'Simple step-by-step custom uniform ordering for coaches, athletic directors, and team managers. Low 15-set MOQ.'
  },
  {
    path: 'sizing-chart',
    title: 'Sports Uniform Sizing Chart & Measuring Guide',
    desc: 'Comprehensive size charts for Youth (YS-YXL) and Adult (XS-4XL) jerseys, pants, and shorts across 12 sports.'
  },
  {
    path: 'reviews',
    title: 'Customer Reviews & Team Testimonials',
    desc: 'Read authentic feedback and reviews from youth leagues, high schools, travel teams, and club coaches across North America.'
  },
  {
    path: 'hamco-sports-reviews',
    title: 'Verified Client Reviews & Quality Ratings',
    desc: 'Real customer reviews on fabric durability, stitch strength, sublimation color accuracy, and delivery timelines.'
  },
  {
    path: 'register-club',
    title: 'Register Your Club for Permanent Volume Discounts',
    desc: 'Lock in permanent tier-4 factory pricing and dedicated design priority for your multi-team athletic organization.'
  },
  {
    path: 'team-name-generator',
    title: 'Free Team Name & Mascot Generator | 12 Sports',
    desc: 'Generate thousands of creative team names and mascot ideas for baseball, basketball, soccer, football, and esports clubs.'
  },
  {
    path: 'portfolio',
    title: 'Custom Team Uniform Showcase & Recent Work',
    desc: 'Explore completed custom uniforms manufactured for youth tournaments, high schools, and amateur leagues across the USA.'
  },
  {
    path: 'about-us',
    title: 'About HAMLO SPORTS - Sialkot Manufacturing Heritage',
    desc: 'Learn about our third-generation sporting goods heritage in Sialkot, Pakistan, ethical manufacturing, and direct-to-team values.'
  },
  {
    path: 'contact',
    title: 'Contact HAMLO SPORTS - Factory Direct Support & Quotes',
    desc: 'Connect with our team via WhatsApp (+923105464116) or email (sale@hamlosportswear.site) for fast, direct support.'
  },
  {
    path: 'styles',
    title: 'Sportswear Styles, Cuts & Athletic Uniform Catalog',
    desc: 'Browse our full catalog of athletic cuts: crew neck, v-neck, full button, sleeveless, and multi-panel options.'
  },
  {
    path: 'explore',
    title: 'Explore Performance Fabrics & Sublimation Technology',
    desc: 'Learn about our moisture-wicking interlock knits, anti-bacterial treatments, and high-definition Italian sublimation inks.'
  },
  {
    path: 'compliance',
    title: 'Compliance, Safety & Ethical Factory Standards',
    desc: 'Our zero-child-labor guarantee, fair living wages, and environmental standards certified for international export.'
  },
  {
    path: 'certification',
    title: 'ISO & OEKO-TEX Export Quality Certifications',
    desc: 'View our ISO 9001 quality management and OEKO-TEX Standard 100 non-toxic ink certifications.'
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy & Data Protection',
    desc: 'How HAMLO SPORTS protects your personal information, design files, and order details with end-to-end encryption.'
  },
  {
    path: 'terms-conditions',
    title: 'Terms & Conditions of Sale',
    desc: 'Clear, transparent commercial terms covering production timelines, approvals, payment methods, and delivery terms.'
  },
  {
    path: 'refund-policy',
    title: '100% Free Remake & Refund Policy',
    desc: 'Our ironclad quality guarantee: If we make an error on sizing, colors, or spelling, we remake the garment 100% free.'
  },
  {
    path: 'shipping-policy',
    title: 'DDP Shipping & Global Air Delivery Policy',
    desc: 'All USA shipments are delivered DDP (Delivered Duty Paid) via DHL or FedEx Express with zero surprise customs fees.'
  },
  {
    path: 'disclaimer',
    title: 'Legal Disclaimer & Trademarks',
    desc: 'Legal notices regarding trademarks, proprietary custom designs, and independent factory-direct manufacturing.'
  }
];

for (const p of staticPages) {
  const pageHtml = generateHtml({
    title: `${p.title} | HAMLO SPORTS`,
    description: p.desc,
    canonicalPath: p.path,
    image: `${BASE_URL}/hamlo-athletes-lineup.png`
  });
  writeRoute(p.path, pageHtml);
  count++;
}

console.log(`✅ Successfully generated ${count} pre-rendered SEO pages into dist/!`);
