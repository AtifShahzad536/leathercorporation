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

// E-E-A-T & Factory Verified Specifications Table (High-Density AI Citability Block)
function buildEeatFactTable() {
  return `
    <section aria-label="Verified Factory Specifications &amp; E-E-A-T Authority">
      <h2>Factory Direct Manufacturing Specifications &amp; Quality Standards</h2>
      <p class="speakable-summary"><strong>Engineered &amp; Fact-Checked by:</strong> Muhammad Atif, Master Apparel Production Engineer (B.Sc. Textile Engineering, National Textile University; 18+ Years Manufacturing Pedigree in Sialkot, Pakistan). Formulated in strict compliance with NFHS, NCAA, and USSSA athletic apparel regulations.</p>
      <table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%; margin-top: 12px; margin-bottom: 24px;">
        <thead>
          <tr style="background: rgba(0,0,0,0.05); text-align: left;">
            <th>Specification Pillar</th>
            <th>Factory Direct Standard</th>
            <th>Verification Authority &amp; Certifications</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Manufacturer Entity</strong></td>
            <td>HAMLO SPORTS (PVT) LTD</td>
            <td>Sialkot Chamber of Commerce &amp; Industry (SCCI) Member ID: A-49281</td>
          </tr>
          <tr>
            <td><strong>Factory Location</strong></td>
            <td>Sialkot Export Industrial Zone, Sialkot 51310, Punjab, Pakistan</td>
            <td>Geo Coordinates: 32.4945° N, 74.5229° E (Google Maps Verified)</td>
          </tr>
          <tr>
            <td><strong>Minimum Order Quantity (MOQ)</strong></td>
            <td>15 sets per design (Re-orders: 1 set with permanent locked-in tier pricing)</td>
            <td>HAMLO SPORTS B2B Factory Direct Policy</td>
          </tr>
          <tr>
            <td><strong>Digital 3D Design Mockup</strong></td>
            <td>12 Business Hours SLA (100% Free with Unlimited Revisions)</td>
            <td>Dedicated Computer-Aided Design (CAD) Art Desk</td>
          </tr>
          <tr>
            <td><strong>Production Turnaround Time</strong></td>
            <td>8 to 12 Business Days from Final Mockup Approval</td>
            <td>Integrated Factory Tailoring &amp; Sublimation Ateliers</td>
          </tr>
          <tr>
            <td><strong>US Nationwide Delivery</strong></td>
            <td>3 to 5 Business Days via Expedited Air (DHL Express / FedEx Priority)</td>
            <td>Delivered Duty Paid (DDP Terms — Zero Customs Tariffs for US Buyers)</td>
          </tr>
          <tr>
            <td><strong>Decoration Technologies</strong></td>
            <td>100% Molecular Dye-Sublimation, Multi-Layer Tackle Twill, 3D Silicone, Flatlock Stitching</td>
            <td>High-Definition 1440 DPI Sublimation Printers &amp; Laser Cutters</td>
          </tr>
          <tr>
            <td><strong>Sublimation Inks &amp; Safety</strong></td>
            <td>OEKO-TEX Standard 100 Class 1 Certified (Zero Toxins, Lead-Free, Baby-Safe)</td>
            <td>OEKO-TEX Association Ecological Textile Certification</td>
          </tr>
          <tr>
            <td><strong>Quality Management System</strong></td>
            <td>ISO 9001:2015 Quality Management System Certification</td>
            <td>International Organization for Standardization (Audited 2024–2027)</td>
          </tr>
          <tr>
            <td><strong>Quality &amp; Remake Guarantee</strong></td>
            <td>100% Free Remake Policy on Any Manufacturing Discrepancy</td>
            <td>Zero-Risk Coach Satisfaction Guarantee (30-Day Window)</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

// Comprehensive Semantic FAQ Section (For Search Engine AI Snippets & SGE Citations)
function buildFaqHtml() {
  return `
    <section aria-label="Frequently Asked Questions (FAQ)" itemscope itemtype="https://schema.org/FAQPage">
      <h2>Frequently Asked Questions — Custom Team Uniforms</h2>
      
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">How long does a custom HAMLO SPORTS uniform order take from first contact to delivery?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">A standard HAMLO SPORTS team order is finished and ready within 8 to 12 business days following your final digital mockup sign-off, followed by 3 to 5 business days of expedited air delivery directly to your doorstep in the USA. Our digital artwork desk returns high-precision 3D mockups within 12 hours on business days with unlimited free revisions.</p>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">What is the minimum order quantity (MOQ) for custom team uniforms?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">Our minimum order quantity is just 15 sets for initial team orders. Re-orders and mid-season additions have zero minimums with permanent locked-in tier pricing and zero setup charges.</p>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Do you provide free 3D digital mockups before ordering?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">Yes, we provide 100% complimentary 3D digital design mockups within 12 business hours. You can inspect your team colors, roster numbers, typography, and sponsor logos in 360-degree 3D before committing to production.</p>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">How does DDP shipping work for customers in the United States?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">All shipments to the United States are dispatched via DHL Express or FedEx Express under DDP (Delivered Duty Paid) terms. All customs duties, export tariffs, and airport clearance fees are pre-paid by HAMLO SPORTS, ensuring zero surprise fees at delivery.</p>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">What is the difference between dye-sublimation and tackle twill lettering?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">Dye-sublimation fuses ink directly into the polyester knit at 400°F, creating lightweight, breathable graphics that never crack, peel, or fade. Tackle twill stitches multi-layered woven twill fabric onto the garment with zig-zag embroidery for collegiate and pro-level dimensional texture.</p>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">What is HAMLO SPORTS's remake and quality guarantee?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">We offer an ironclad 100% Free Remake Guarantee. If any uniform has a manufacturing defect, incorrect player spelling, wrong size compared to our approved size chart, or color mismatch, we remake and express-air-ship the replacement free of charge.</p>
        </div>
      </div>
    </section>
  `;
}

// Universal Sitewide Footer Navigation (included on ALL 335 pre-rendered pages)
function buildSitewideNav() {
  return `
    <footer aria-label="Sitewide Directory">
      <nav aria-label="All Sports Categories">
        <h3>All Sports Uniform Categories</h3>
        <ul>
          <li><a href="/custom-baseball-uniforms/">Custom Baseball Uniforms</a></li>
          <li><a href="/custom-basketball-uniforms/">Custom Basketball Uniforms</a></li>
          <li><a href="/custom-football-uniforms/">Custom Football Uniforms</a></li>
          <li><a href="/custom-soccer-uniforms/">Custom Soccer Uniforms</a></li>
          <li><a href="/custom-esports-apparel/">Custom Esports Apparel</a></li>
          <li><a href="/custom-ice-hockey-uniforms/">Custom Ice Hockey Uniforms</a></li>
          <li><a href="/custom-lacrosse-uniforms/">Custom Lacrosse Uniforms</a></li>
          <li><a href="/custom-rugby-uniforms/">Custom Rugby Uniforms</a></li>
          <li><a href="/custom-softball-uniforms/">Custom Softball Uniforms</a></li>
          <li><a href="/custom-volleyball-uniforms/">Custom Volleyball Uniforms</a></li>
          <li><a href="/custom-wrestling-singlets/">Custom Wrestling Singlets</a></li>
          <li><a href="/custom-flag-football-uniforms/">Custom Flag Football Uniforms</a></li>
          <li><a href="/custom-cricket-uniforms/">Custom Cricket Uniforms</a></li>
          <li><a href="/custom-tennis-apparel/">Custom Tennis Apparel</a></li>
          <li><a href="/custom-field-hockey-uniforms/">Custom Field Hockey Uniforms</a></li>
          <li><a href="/custom-sports-gloves/">Custom Sports &amp; Goalkeeper Gloves</a></li>
        </ul>
      </nav>

      <nav aria-label="Team Ordering Tools">
        <h3>Design &amp; Team Ordering Tools</h3>
        <ul>
          <li><a href="/builder/">3D Interactive Uniform Builder</a></li>
          <li><a href="/3d-builder/">3D Uniform Design Studio</a></li>
          <li><a href="/request-a-quote/">Request Free 3D Proof &amp; Wholesale Quote</a></li>
          <li><a href="/start-custom-orders/">How Team Ordering Works</a></li>
          <li><a href="/sizing-chart/">Youth &amp; Adult Size Charts &amp; Measuring Guide</a></li>
          <li><a href="/register-club/">Register Your Club for Permanent B2B Tier Discounts</a></li>
          <li><a href="/team-name-generator/">Free Team Name &amp; Mascot Generator</a></li>
          <li><a href="/how-long-do-custom-uniforms-take/">Production Timelines &amp; Delivery Deadlines</a></li>
          <li><a href="/styles/">Sportswear Styles &amp; Performance Cuts</a></li>
          <li><a href="/explore/">Performance Fabrics &amp; Sublimation Technology</a></li>
        </ul>
      </nav>

      <nav aria-label="Company Heritage &amp; Reviews">
        <h3>About HAMLO SPORTS</h3>
        <ul>
          <li><a href="/about-us/">About Us — Sialkot Manufacturing Heritage</a></li>
          <li><a href="/compliance/">Compliance, Ethical Labor &amp; Fair Living Wages</a></li>
          <li><a href="/certification/">ISO 9001 &amp; OEKO-TEX Standard 100 Certifications</a></li>
          <li><a href="/reviews/">Customer Reviews &amp; Team Testimonials</a></li>
          <li><a href="/hamco-sports-reviews/">Verified Quality Ratings &amp; Client Feedback</a></li>
          <li><a href="/portfolio/">Custom Team Uniform Showcase &amp; Recent Work</a></li>
          <li><a href="/contact/">Contact Our Sialkot Production Desk</a></li>
        </ul>
      </nav>

      <nav aria-label="Policies &amp; Legal">
        <h3>Customer Policies &amp; Guarantees</h3>
        <ul>
          <li><a href="/shipping-policy/">Fast US Nationwide Delivery (DDP Air Shipping)</a></li>
          <li><a href="/refund-policy/">100% Free Remake &amp; Quality Guarantee</a></li>
          <li><a href="/terms-conditions/">Commercial Terms &amp; Conditions</a></li>
          <li><a href="/privacy-policy/">Privacy &amp; Data Protection Policy</a></li>
          <li><a href="/disclaimer/">Legal Disclaimer &amp; Trademarks</a></li>
        </ul>
      </nav>

      <section aria-label="Direct Factory Contact">
        <h3>Direct Factory Contact</h3>
        <p>Email: <a href="mailto:sale@hamlosportswear.site">sale@hamlosportswear.site</a> | Phone / WhatsApp: <a href="https://wa.me/923105464116">+92 310 5464116</a> | Sialkot, Pakistan</p>
      </section>
    </footer>
  `;
}

// Generate pre-rendered HTML by injecting custom meta tags, clean Schema, and semantic body content
function generateHtml({
  title,
  description,
  canonicalPath,
  image = `${BASE_URL}/hamlo-athletes-lineup.png`,
  schema = null,
  semanticBodyHtml = ''
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

  // Replace or inject JSON-LD Schema (clean single-block graph)
  if (schema) {
    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`;
    if (html.includes('<script type="application/ld+json">')) {
      html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, schemaScript);
    } else {
      html = html.replace('</head>', `  ${schemaScript}\n</head>`);
    }
  }

  // Inject Rich Semantic Body Content for Search Engine Crawlers & Accessibility
  if (semanticBodyHtml) {
    const srOnlyWrapped = `<!-- SEO_SEMANTIC_BODY_START -->\n    <div class="sr-only" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;">\n${semanticBodyHtml}\n    </div>\n    <!-- SEO_SEMANTIC_BODY_END -->`;

    if (html.includes('<!-- SEO_SEMANTIC_BODY_START -->')) {
      html = html.replace(
        /<!-- SEO_SEMANTIC_BODY_START -->[\s\S]*?<!-- SEO_SEMANTIC_BODY_END -->/,
        srOnlyWrapped
      );
    } else if (html.includes('<div class="sr-only"')) {
      html = html.replace(
        /<div class="sr-only"[\s\S]*?<\/div>\s*<\/div>/,
        `${srOnlyWrapped}\n  </div>`
      );
    }
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

console.log('🚀 Starting SEO & GEO Pre-rendering for HAMLO SPORTS with Complete E-E-A-T & Schema Graphs...');
let count = 0;
const sitemapUrls = [];

// Helper to track URLs for sitemap
function trackUrl(routePath, priority = '0.8', changefreq = 'weekly') {
  const clean = routePath.replace(/^\/+|\/+$/g, '');
  const fullUrl = clean ? `${BASE_URL}/${clean}/` : `${BASE_URL}/`;
  sitemapUrls.push({ url: fullUrl, priority, changefreq });
}

// ==============================================================================
// 1. Root / Homepage
// ==============================================================================
const homeFeaturedProducts = [];
for (const slug of Object.keys(sportSlugToCategory)) {
  const sportProds = fullCatalog296.filter(p => p.categorySlug === slug).slice(0, 3);
  homeFeaturedProducts.push(...sportProds);
}

const homeFeaturedHtml = `
  <section aria-label="Featured Custom Sports Uniforms">
    <h2>Featured Factory Direct Custom Team Uniforms</h2>
    <ul>
      ${homeFeaturedProducts.map(p => {
        const route = p.canonical ? p.canonical.replace(/^\/|\/$/g, '') : `${p.categorySlug}/${p.slug}`;
        return `<li><a href="/${route}/"><strong>${escapeHtml(p.name)}</strong></a> — Starting at $${p.price || '44.99'}. Custom sublimated in Sialkot with low 15-set MOQ.</li>`;
      }).join('\n      ')}
    </ul>
  </section>
`;

const homeSemanticHtml = `
  <header>
    <h1>HAMLO SPORTS — Factory Direct Custom Team Uniforms &amp; Athletic Apparel Manufacturer</h1>
    <p class="speakable-summary">Professional custom sports uniforms and sublimated athletic apparel manufactured factory-direct in Sialkot, Pakistan. 15-set low MOQ, free 12-hour 3D digital mockups, 8–12 day production turnaround, and DDP air delivery across the USA.</p>
    <nav aria-label="Quick Actions">
      <a href="/builder/">3D Interactive Uniform Builder</a> |
      <a href="/request-a-quote/">Request Free Quote &amp; 3D Proof</a> |
      <a href="/start-custom-orders/">How to Start a Team Order</a> |
      <a href="/sizing-chart/">Youth &amp; Adult Size Charts</a> |
      <a href="/contact/">Contact Our Sialkot Export Desk</a>
    </nav>
  </header>

  <nav aria-label="Primary Sports Uniform Categories">
    <h2>Custom Team Uniforms by Sport</h2>
    <ul>
      ${sportsCategories.map(cat => `
        <li>
          <a href="/${cat.slug}/"><strong>Custom ${escapeHtml(cat.name)}</strong></a> — ${escapeHtml(cat.description || '')}
        </li>
      `).join('\n      ')}
      <li><a href="/custom-cricket-uniforms/"><strong>Custom Cricket Uniforms</strong></a> — Sublimated T20 jerseys, flannels, and club cricket kits.</li>
      <li><a href="/custom-tennis-apparel/"><strong>Custom Tennis Apparel</strong></a> — Performance polos, skirts, warmup jackets, and club apparel.</li>
      <li><a href="/custom-field-hockey-uniforms/"><strong>Custom Field Hockey Uniforms</strong></a> — Sublimated jerseys, kilts, scrimmage vests, and team tracksuits.</li>
      <li><a href="/custom-sports-gloves/"><strong>Custom Sports &amp; Goalkeeper Gloves</strong></a> — German-latex goalkeeper gloves, batting gloves, and receiver gloves.</li>
    </ul>
  </nav>

  ${homeFeaturedHtml}

  ${buildEeatFactTable()}

  ${buildFaqHtml()}

  ${buildSitewideNav()}
`;

const homeHtml = generateHtml({
  title: 'Custom Team Uniforms | Hamlo Sports Wear Sialkot',
  description: 'Factory-direct custom team uniforms and sublimated athletic apparel manufactured in Sialkot, Pakistan. 15-set low MOQ, free 12-hour 3D mockups, 8–12 day production, and DDP delivery across the USA.',
  canonicalPath: '',
  image: `${BASE_URL}/hamlo-athletes-lineup.png`,
  semanticBodyHtml: homeSemanticHtml
});
writeRoute('', homeHtml);
trackUrl('', '1.0', 'daily');
count++;

// ==============================================================================
// 2. 12 Primary Sport Category Hub Pages
// ==============================================================================
for (const [slug, sportName] of Object.entries(sportSlugToCategory)) {
  const catData = sportsCategories.find(c => c.slug === slug);
  const catDesc = catData?.description || `Pro-grade custom ${sportName.toLowerCase()} uniforms, jerseys, pants, and team outerwear with premium tackle twill and dye-sublimation factory-direct from Sialkot.`;
  const catImage = catData?.image || `${BASE_URL}/hamlo-athletes-lineup.png`;

  const prodsInSport = fullCatalog296.filter(p => p.categorySlug === slug);

  const catSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${BASE_URL}/${slug}/#webpage`,
        url: `${BASE_URL}/${slug}/`,
        name: `Custom ${sportName} Uniforms & Sublimated Team Apparel | HAMLO SPORTS`,
        description: catDesc,
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        breadcrumb: { '@id': `${BASE_URL}/${slug}/#breadcrumb` },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.speakable-summary']
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/${slug}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: `Custom ${sportName} Uniforms`, item: `${BASE_URL}/${slug}/` }
        ]
      },
      {
        '@type': 'ItemList',
        name: `Custom ${sportName} Uniforms Collection`,
        numberOfItems: prodsInSport.length,
        itemListElement: prodsInSport.map((p, idx) => {
          const pRoute = p.canonical ? p.canonical.replace(/^\/|\/$/g, '') : `${p.categorySlug}/${p.slug}`;
          return {
            '@type': 'ListItem',
            position: idx + 1,
            name: p.name,
            url: `${BASE_URL}/${pRoute}/`
          };
        })
      },
      {
        '@type': 'FAQPage',
        '@id': `${BASE_URL}/${slug}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `What is the turnaround time for custom ${sportName} uniforms?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Custom ${sportName} uniform orders take 8 to 12 business days in production following digital 3D proof sign-off, plus 3 to 5 business days for expedited air delivery directly to your door in the United States.`
            }
          },
          {
            '@type': 'Question',
            name: `What is the minimum order quantity (MOQ) for ${sportName} uniforms?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `The minimum order quantity is just 15 sets for new custom ${sportName} uniform orders. Re-orders and mid-season fill-ins have zero minimums with permanent locked-in volume pricing.`
            }
          },
          {
            '@type': 'Question',
            name: `Are HAMLO SPORTS ${sportName} uniforms compliant with high school (NFHS) rules?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes. All HAMLO SPORTS custom ${sportName} uniforms are engineered in strict compliance with NFHS and NCAA regulations, including number sizing, logo placements, and body fabric dimensions.`
            }
          }
        ]
      }
    ]
  };

  const catSemanticHtml = `
    <header>
      <nav aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li><span>Custom ${escapeHtml(sportName)} Uniforms</span></li>
        </ol>
      </nav>
      <h1>Custom ${escapeHtml(sportName)} Uniforms, Team Jerseys &amp; Performance Apparel</h1>
      <p class="speakable-summary">${escapeHtml(catDesc)} Factory direct from Sialkot, Pakistan. Low 15-set MOQ, complimentary 12-hour 3D digital mockups, 8–12 business day production, and DDP delivery across the United States.</p>
      <nav aria-label="Category Tools">
        <a href="/builder/">Customize ${escapeHtml(sportName)} in 3D Builder</a> |
        <a href="/request-a-quote/">Request Free Quote &amp; 3D Proof</a> |
        <a href="/sizing-chart/">${escapeHtml(sportName)} Size Chart &amp; Fit Guide</a> |
        <a href="/start-custom-orders/">How Team Ordering Works</a>
      </nav>
    </header>

    <main aria-label="${escapeHtml(sportName)} Team Uniforms Catalog">
      <h2>Complete Collection of Custom ${escapeHtml(sportName)} Uniforms &amp; Gear (${prodsInSport.length} Models)</h2>
      <ul>
        ${prodsInSport.map(p => {
          const route = p.canonical ? p.canonical.replace(/^\/|\/$/g, '') : `${p.categorySlug}/${p.slug}`;
          const feat = p.features && p.features.length > 0 ? p.features[0] : 'Pro-grade sublimated performance fabric';
          return `
            <li>
              <a href="/${route}/"><strong>${escapeHtml(p.name)}</strong></a> — Starting at $${p.price || '44.99'}. ${escapeHtml(feat)}. Low 15-set MOQ, free 3D digital mockup, DDP US delivery.
            </li>
          `;
        }).join('\n        ')}
      </ul>
    </main>

    ${buildEeatFactTable()}

    ${buildSitewideNav()}
  `;

  const catHtml = generateHtml({
    title: `Custom ${sportName} Uniforms & Sublimated Team Apparel | HAMLO SPORTS`,
    description: catDesc,
    canonicalPath: slug,
    image: catImage,
    schema: catSchema,
    semanticBodyHtml: catSemanticHtml
  });
  writeRoute(slug, catHtml);
  trackUrl(slug, '0.9', 'weekly');
  count++;
}

// ==============================================================================
// 3. 296 Product Landing Pages (Rich Internal Cross-links to Siblings & Hub)
// ==============================================================================
for (const prod of fullCatalog296) {
  const route = prod.canonical ? prod.canonical.replace(/^\/|\/$/g, '') : `${prod.categorySlug}/${prod.slug}`;
  const prodDesc = prod.features && prod.features.length > 0 
    ? `${prod.name}: ${prod.features[0]}. Factory-direct starting at $${prod.price}. Sialkot manufacturer with 12-hour free 3D mockups and DDP USA shipping.`
    : `Custom ${prod.name} manufactured factory-direct in Sialkot, Pakistan. Low MOQ, free 3D digital mockup, high-performance sublimated fabrics.`;

  // All sibling products in the same sport category for lateral internal links
  const siblings = fullCatalog296.filter(p => p.categorySlug === prod.categorySlug && p.id !== prod.id);

  const prodSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${BASE_URL}/${route}/#product`,
        name: prod.name,
        image: prod.image,
        description: cleanDesc(prodDesc),
        brand: {
          '@type': 'Brand',
          name: 'HAMLO SPORTS'
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'HAMLO SPORTS',
          url: BASE_URL
        },
        sku: `HAMLO-${(prod.sport || 'TEAM').toUpperCase().replace(/[^A-Z0-9]/g, '-')}-${prod.slug.toUpperCase()}`,
        mpn: `HAMLO-${prod.slug.toUpperCase()}`,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '48',
          bestRating: '5',
          worstRating: '1'
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: prod.price ? String(prod.price) : '44.99',
          priceValidUntil: '2027-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          url: `${BASE_URL}/${route}/`,
          seller: {
            '@type': 'Organization',
            name: 'HAMLO SPORTS'
          },
          shippingDetails: {
            '@type': 'OfferShippingDetails',
            shippingRate: {
              '@type': 'MonetaryAmount',
              value: '0',
              currency: 'USD'
            },
            shippingDestination: {
              '@type': 'DefinedRegion',
              addressCountry: 'US'
            },
            deliveryTime: {
              '@type': 'ShippingDeliveryTime',
              handlingTime: {
                '@type': 'QuantitativeValue',
                minValue: 8,
                maxValue: 12,
                unitCode: 'd'
              },
              transitTime: {
                '@type': 'QuantitativeValue',
                minValue: 3,
                maxValue: 5,
                unitCode: 'd'
              }
            }
          },
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'US',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 30,
            returnMethod: 'https://schema.org/ReturnByMail',
            returnFees: 'https://schema.org/FreeReturn'
          }
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/${route}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: `Custom ${prod.sport} Uniforms`, item: `${BASE_URL}/${prod.categorySlug}/` },
          { '@type': 'ListItem', position: 3, name: prod.name, item: `${BASE_URL}/${route}/` }
        ]
      }
    ]
  };

  const prodSemanticHtml = `
    <header>
      <nav aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="/${prod.categorySlug}/">Custom ${escapeHtml(prod.sport)} Uniforms</a></li>
          <li><span>${escapeHtml(prod.name)}</span></li>
        </ol>
      </nav>
      <h1>${escapeHtml(prod.name)}</h1>
      <p class="speakable-summary">Custom team ${escapeHtml(prod.name)} engineered factory-direct in our Sialkot, Pakistan manufacturing facility. Starting at <strong>$${prod.price || '44.99'}</strong> with a low 15-set team MOQ. Includes complimentary 12-hour 3D digital mockups, 8–12 business day production turnaround, and DDP nationwide delivery across the United States.</p>
      <nav aria-label="Ordering Actions">
        <a href="/builder/">Customize ${escapeHtml(prod.name)} in 3D Builder</a> |
        <a href="/request-a-quote/">Request Free 3D Digital Mockup &amp; Quote</a> |
        <a href="/sizing-chart/">View Sizing Chart &amp; Fit Guide</a> |
        <a href="/start-custom-orders/">How Team Ordering Works</a> |
        <a href="/shipping-policy/">US Nationwide DDP Air Shipping Details</a>
      </nav>
    </header>

    <main>
      <article>
        <h2>Product Specifications &amp; Factory Features</h2>
        <ul>
          <li><strong>Pricing:</strong> Starting at $${prod.price || '44.99'} (Tier 1: 1–24 units). Volume discounts available up to 45% off.</li>
          <li><strong>Minimum Order Quantity:</strong> 15 sets / units. Free re-orders with zero setup fees.</li>
          <li><strong>Turnaround Time:</strong> 8–12 business days production + 3–5 days DHL / FedEx Express air delivery.</li>
          <li><strong>Decoration Technology:</strong> 100% molecular dye-sublimation with vibrant, permanent Italian inks that never peel, crack, or fade. Optional collegiate tackle twill lettering and embroidered patches.</li>
          ${(prod.features || []).map(f => `<li>${escapeHtml(f)}</li>`).join('\n          ')}
        </ul>
      </article>

      <section aria-label="Related Teamwear">
        <h2>Related Custom ${escapeHtml(prod.sport)} Uniforms &amp; Apparel</h2>
        <p>Explore matching jerseys, shorts, pants, warmup hoodies, and team accessories in our <a href="/${prod.categorySlug}/">Custom ${escapeHtml(prod.sport)} Uniforms</a> collection:</p>
        <ul>
          ${siblings.map(sib => {
            const sibRoute = sib.canonical ? sib.canonical.replace(/^\/|\/$/g, '') : `${sib.categorySlug}/${sib.slug}`;
            return `<li><a href="/${sibRoute}/"><strong>${escapeHtml(sib.name)}</strong></a> — Starting at $${sib.price || '44.99'}. Factory-direct Sialkot.</li>`;
          }).join('\n          ')}
        </ul>
        <p><a href="/${prod.categorySlug}/">&larr; Return to All Custom ${escapeHtml(prod.sport)} Uniforms</a></p>
      </section>
    </main>

    ${buildEeatFactTable()}

    ${buildSitewideNav()}
  `;

  const prodHtml = generateHtml({
    title: `${prod.name} | Custom ${prod.sport} Uniforms | HAMLO SPORTS`,
    description: prodDesc,
    canonicalPath: route,
    image: prod.image,
    schema: prodSchema,
    semanticBodyHtml: prodSemanticHtml
  });
  writeRoute(route, prodHtml);
  trackUrl(route, '0.8', 'weekly');
  count++;
}

// ==============================================================================
// 4. 4 Secondary Sport Category Hub Pages (Cricket, Tennis, Field Hockey, Gloves)
// ==============================================================================
const secondarySportPages = [
  {
    path: 'custom-cricket-uniforms',
    sport: 'Cricket',
    title: 'Custom Cricket Uniforms & Sublimated T20 Jerseys USA',
    desc: 'Custom sublimated cricket jerseys, white match flannels, colored T20 kits, and training gear factory-direct from Sialkot, Pakistan.'
  },
  {
    path: 'custom-tennis-apparel',
    sport: 'Tennis',
    title: 'Custom Tennis Apparel, Polos & Team Uniforms USA',
    desc: 'High-performance custom tennis polos, skirts, warmup jackets and moisture-wicking club apparel manufactured factory-direct.'
  },
  {
    path: 'custom-field-hockey-uniforms',
    sport: 'Field Hockey',
    title: 'Custom Field Hockey Uniforms, Kilts & Kits USA',
    desc: 'Custom sublimated field hockey jerseys, kilts, scrimmage vests and team tracksuits manufactured in Sialkot with fast US delivery.'
  },
  {
    path: 'custom-sports-gloves',
    sport: 'Sports Gloves',
    title: 'Custom Sports Gloves & Goalkeeper Gloves Factory Direct',
    desc: 'Professional German-latex goalkeeper gloves, batting gloves, and receiver gloves made to custom team specifications.'
  }
];

for (const p of secondarySportPages) {
  const secondarySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${BASE_URL}/${p.path}/#webpage`,
        url: `${BASE_URL}/${p.path}/`,
        name: `${p.title} | HAMLO SPORTS`,
        description: p.desc,
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        breadcrumb: { '@id': `${BASE_URL}/${p.path}/#breadcrumb` },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.speakable-summary']
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/${p.path}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: p.title, item: `${BASE_URL}/${p.path}/` }
        ]
      }
    ]
  };

  const secondarySemanticHtml = `
    <header>
      <nav aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li><span>${escapeHtml(p.title)}</span></li>
        </ol>
      </nav>
      <h1>${escapeHtml(p.title)}</h1>
      <p class="speakable-summary">${escapeHtml(p.desc)} Engineered with high-performance moisture-wicking fabrics in Sialkot, Pakistan with a 15-set low MOQ, free 12-hour 3D digital mockups, and DDP nationwide delivery across the United States.</p>
      <nav aria-label="Ordering Actions">
        <a href="/builder/">3D Interactive Uniform Builder</a> |
        <a href="/request-a-quote/">Request Free Quote &amp; 3D Mockup</a> |
        <a href="/sizing-chart/">Sizing Chart &amp; Fit Guide</a> |
        <a href="/start-custom-orders/">How Team Ordering Works</a> |
        <a href="/contact/">Contact Our Sialkot Export Desk</a>
      </nav>
    </header>

    <main>
      <article>
        <h2>Pro-Grade Manufacturing Specifications</h2>
        <p>Every uniform and glove is built to collegiate and professional athletic standards. We use OEKO-TEX Standard 100 certified non-toxic Italian inks, reinforced double-needle stitching, and custom club sizing.</p>
      </article>
    </main>

    ${buildEeatFactTable()}

    ${buildSitewideNav()}
  `;

  const pageHtml = generateHtml({
    title: `${p.title} | HAMLO SPORTS`,
    description: p.desc,
    canonicalPath: p.path,
    image: `${BASE_URL}/hamlo-athletes-lineup.png`,
    schema: secondarySchema,
    semanticBodyHtml: secondarySemanticHtml
  });
  writeRoute(p.path, pageHtml);
  trackUrl(p.path, '0.85', 'weekly');
  count++;
}

// ==============================================================================
// 5. 22 Static Essential Pages (Tools, Customer Service, Legal & Policies)
// ==============================================================================
const staticPages = [
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
  const staticSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': p.path === 'about-us' ? 'AboutPage' : p.path === 'contact' ? 'ContactPage' : 'WebPage',
        '@id': `${BASE_URL}/${p.path}/#webpage`,
        url: `${BASE_URL}/${p.path}/`,
        name: `${p.title} | HAMLO SPORTS`,
        description: p.desc,
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        breadcrumb: { '@id': `${BASE_URL}/${p.path}/#breadcrumb` },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.speakable-summary']
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/${p.path}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: p.title, item: `${BASE_URL}/${p.path}/` }
        ]
      }
    ]
  };

  const staticSemanticHtml = `
    <header>
      <nav aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li><span>${escapeHtml(p.title)}</span></li>
        </ol>
      </nav>
      <h1>${escapeHtml(p.title)}</h1>
      <p class="speakable-summary">${escapeHtml(p.desc)} HAMLO SPORTS — Factory direct custom team uniforms manufactured in Sialkot, Pakistan. 15-set low MOQ, free 12-hour 3D mockups, and DDP nationwide US delivery.</p>
      <nav aria-label="Quick Actions">
        <a href="/builder/">3D Interactive Uniform Builder</a> |
        <a href="/request-a-quote/">Request Free Quote &amp; 3D Proof</a> |
        <a href="/start-custom-orders/">How to Start a Team Order</a> |
        <a href="/sizing-chart/">Youth &amp; Adult Size Charts</a> |
        <a href="/contact/">Contact Our Sialkot Export Desk</a>
      </nav>
    </header>

    <main>
      <article>
        <h2>Factory Direct Services &amp; Guarantees</h2>
        <p>HAMLO SPORTS produces competition-grade uniforms for school athletic programs, travel clubs, and adult recreational leagues across the USA. Every order includes complimentary 12-hour digital mockups, zero setup fees, and 100% free remake guarantee.</p>
      </article>
    </main>

    ${buildEeatFactTable()}

    ${buildSitewideNav()}
  `;

  const pageHtml = generateHtml({
    title: `${p.title} | HAMLO SPORTS`,
    description: p.desc,
    canonicalPath: p.path,
    image: `${BASE_URL}/hamlo-athletes-lineup.png`,
    schema: staticSchema,
    semanticBodyHtml: staticSemanticHtml
  });
  writeRoute(p.path, pageHtml);
  trackUrl(p.path, p.path === 'builder' || p.path === 'contact' || p.path === 'request-a-quote' ? '0.9' : '0.7', 'monthly');
  count++;
}

// ==============================================================================
// 6. Generate Complete & Valid sitemap.xml
// ==============================================================================
const today = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(item => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
const publicDir = path.resolve(__dirname, '../public');
if (fs.existsSync(publicDir)) {
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
}

console.log(`✅ Successfully generated ${count} pre-rendered SEO & GEO pages into dist/!`);
console.log(`✅ Synchronized sitemap.xml with ${sitemapUrls.length} canonical URLs into dist/ and public/!`);
