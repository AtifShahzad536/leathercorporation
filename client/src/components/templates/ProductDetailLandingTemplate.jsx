import React, { useState, useEffect, useMemo } from 'react';
import {
  Check, ArrowRight, ShieldCheck, Clock, Calculator,
  HelpCircle, Sparkles, Award, Phone, Mail, FileText, ChevronRight,
  Layers, Package, AlertCircle, MessageSquare, Info
} from 'lucide-react';
import SEO from '../common/SEO';
import TrustBar from '../common/TrustBar';
import ProgressiveImage from '../common/ProgressiveImage';
import { useCMS } from '../../context/CMSContext';
import { fullCatalog296 } from '../../data/fullCatalog296';
import productFaqs296 from '../../data/productFaqs296.json';
import productFullText296 from '../../data/productFullText296.json';
import { 
  getSportPricingTable, 
  getSportDecorationData, 
  getPlayoffSchedule, 
  getCareInstructions 
} from '../../data/sportEditorialGuides';

/**
 * 15-Block Product Detail Landing Page
 * Following Hamco Detail Page Content Guide & "Beat-Hamco Improved Version"
 * Includes: 3 Views Gallery, 7 Feature Bullets, Fabric Specs Table, 4 Tiers Volume Table,
 * Real-Cost 2-Invoice Comparison, 4 Decoration Methods, 3 Size Charts, 4 Guarantee Blocks,
 * In-Page Price Calculator, Related Upsells, 6 Product-Specific FAQs, Inspiration Gallery & Quote Machine.
 */
export default function ProductDetailLandingTemplate({
  product = null,
  productName = 'Custom Soccer Standard Uniform Set',
  sport = 'Soccer',
  basePrice = '$79.99',
  images = [],
  onNavigateInquiry = () => { },
  onNavigateProduct = () => { }
}) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Dynamic Sport Category normalization
  const normSport = (sport || product?.sport || product?.category || 'BASEBALL').toUpperCase();

  // Sport editorial guides, pricing comparison and decoration matrices
  const sportPricing = useMemo(() => getSportPricingTable(normSport), [normSport]);
  const decorationData = useMemo(() => getSportDecorationData(normSport, product?.price || basePrice), [normSport, product, basePrice]);
  const playoffSchedule = useMemo(() => getPlayoffSchedule(), []);
  const careInstructions = useMemo(() => getCareInstructions(normSport), [normSport]);

  // Dynamic Product Full Text (Descriptions, Feature Bullets, Fabric Specs)
  const productData = useMemo(() => {
    const slug = product?.slug;
    return (slug && productFullText296[slug]) ? productFullText296[slug] : null;
  }, [product]);

  const productDescription = useMemo(() => {
    return product?.description || productData?.description || `${productName} manufactured factory-direct in Sialkot, Pakistan.`;
  }, [product, productData, productName]);

  const productFeatures = useMemo(() => {
    if (product?.features && Array.isArray(product.features) && product.features.length > 0) {
      return product.features;
    }
    if (productData?.highlights && Array.isArray(productData.highlights) && productData.highlights.length > 0) {
      return productData.highlights;
    }
    return [
      '100% Full dye-sublimation: colors, crests, and pinstripes never crack or peel',
      'Custom team lettering & player back numbers included at zero setup fee',
      'Technical moisture-wicking athletic polyester wicks perspiration away instantaneously',
      'Reinforced flat-lock seams eliminate friction and underarm skin chafing',
      'Inclusive sizing spectrum spanning Youth YS through Adult 4XL',
      'Zero minimum order limits; volume pricing scaled for team rosters',
      'Rapid 12-hour 3D digital mockup turnaround before production begins'
    ];
  }, [product, productData]);

  const productFabricSpecs = useMemo(() => {
    if (productData?.fabricSpecs) return productData.fabricSpecs;
    return {
      fabric: product?.fabric || 'Performance Poly Interlock',
      weight: '180 - 220 GSM',
      stitch: '4-Thread Flat-Lock',
      care: 'Machine Wash Cold, Hang Dry'
    };
  }, [product, productData]);

  // Fetch live products from backend MongoDB database for this sport, with fallback to fullCatalog296
  const [dbProducts, setDbProducts] = useState([]);
  useEffect(() => {
    let isMounted = true;
    fetch(`/api/products?sport=${encodeURIComponent(normSport)}&limit=100`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (isMounted && data?.data && data.data.length > 0) {
          setDbProducts(data.data);
        }
      })
      .catch(() => {});
    return () => { isMounted = false; };
  }, [normSport]);

  // Master product list for current sport
  const sportProducts = useMemo(() => {
    if (dbProducts && dbProducts.length > 0) {
      return dbProducts.map(p => ({
        id: p._id || p.id,
        name: p.name,
        slug: p.slug,
        sport: p.sport || normSport,
        category: p.category || normSport,
        price: typeof p.price === 'number' ? `$${p.price.toFixed(2)}` : (p.price || '$34.99'),
        rawPrice: typeof p.price === 'number' ? p.price : parseFloat(String(p.price).replace(/[^0-9.]/g, '')) || 34.99,
        image: p.images?.[0]?.url || p.images?.[0] || p.image,
        images: (p.images && p.images.length > 0) ? p.images.map(img => typeof img === 'string' ? img : img.url) : [p.image]
      })).filter(p => p.image);
    }

    return fullCatalog296.filter(p => {
      const s = (p.sport || p.category || '').toUpperCase();
      if (normSport === 'FOOTBALL') return s.includes('FOOTBALL') && !s.includes('FLAG');
      if (normSport === 'FLAG FOOTBALL') return s.includes('FLAG');
      return s.includes(normSport) || normSport.includes(s);
    }).map(p => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      sport: p.sport || normSport,
      category: p.category || normSport,
      price: typeof p.price === 'number' ? `$${p.price.toFixed(2)}` : (p.price || '$34.99'),
      rawPrice: typeof p.price === 'number' ? p.price : parseFloat(String(p.price).replace(/[^0-9.]/g, '')) || 34.99,
      image: p.image,
      images: [p.image]
    }));
  }, [normSport, dbProducts]);

  // Multi-Angle Gallery Images (100% genuine sport images, zero Unsplash dummy photos)
  const displayImages = useMemo(() => {
    const validPropImages = (images || []).filter(img => typeof img === 'string' && img && !img.includes('unsplash.com'));
    if (validPropImages.length >= 3) return validPropImages;

    const primaryImg = product?.image || validPropImages[0] || sportProducts[0]?.image;
    const otherSportImgs = sportProducts
      .filter(p => p.image && p.image !== primaryImg)
      .map(p => p.image);

    const views = [primaryImg];
    if (otherSportImgs[0]) views.push(otherSportImgs[0]);
    if (otherSportImgs[1]) views.push(otherSportImgs[1]);

    while (views.length < 3 && primaryImg) {
      views.push(primaryImg);
    }
    return views.filter(Boolean);
  }, [images, product, sportProducts]);

  // Safe active image index
  const safeActiveImageIdx = activeImageIdx < displayImages.length ? activeImageIdx : 0;

  // 1. Dynamic Volume Price Table (Block 7) based on this specific product's exact published tiers
  const parsedPrice = parseFloat(String(product?.price || basePrice).replace(/[^0-9.]/g, '')) || 49.99;

  const volumeTiers = useMemo(() => {
    // If product has exact 4-tier volume prices from DB / catalog:
    const t1Jersey = product?.tierPrices?.tier1 ?? product?.volumeTiers?.[0]?.price ?? parsedPrice;
    const t2Jersey = product?.tierPrices?.tier2 ?? product?.volumeTiers?.[1]?.price ?? (
      // fallback calculation
      Math.abs(t1Jersey - 49.99) < 1 ? 44.99 :
      Math.abs(t1Jersey - 89.99) < 1 ? 84.99 :
      Math.abs(t1Jersey - 44.99) < 1 ? 42.99 :
      Math.max(12, Math.round((t1Jersey * 0.90) * 100) / 100)
    );
    const t3Jersey = product?.tierPrices?.tier3 ?? product?.volumeTiers?.[2]?.price ?? (
      Math.abs(t1Jersey - 49.99) < 1 ? 42.99 :
      Math.abs(t1Jersey - 89.99) < 1 ? 82.99 :
      Math.abs(t1Jersey - 44.99) < 1 ? 41.99 :
      Math.max(10, Math.round((t1Jersey * 0.85) * 100) / 100)
    );
    const t4Jersey = product?.tierPrices?.tier4 ?? product?.volumeTiers?.[3]?.price ?? (
      Math.abs(t1Jersey - 49.99) < 1 ? 39.99 :
      Math.abs(t1Jersey - 89.99) < 1 ? 79.99 :
      Math.abs(t1Jersey - 44.99) < 1 ? 36.99 :
      Math.max(8, Math.round((t1Jersey * 0.78) * 100) / 100)
    );

    const t1Set = Math.round((t1Jersey * 1.75) * 100) / 100;
    const t2Set = Math.round((t2Jersey * 1.75) * 100) / 100;
    const t3Set = Math.round((t3Jersey * 1.75) * 100) / 100;
    const t4Set = Math.round((t4Jersey * 1.75) * 100) / 100;

    return [
      { qty: '1 to 24', jersey: `$${t1Jersey.toFixed(2)}`, set: `$${t1Set.toFixed(2)}`, save: 'Base price', note: '-' },
      { qty: '25 to 50', jersey: `$${t2Jersey.toFixed(2)}`, set: `$${t2Set.toFixed(2)}`, save: t1Jersey > t2Jersey ? `Save $${(t1Jersey - t2Jersey).toFixed(2)} / each` : 'Standard', note: '-' },
      { qty: '51 to 100', jersey: `$${t3Jersey.toFixed(2)}`, set: `$${t3Set.toFixed(2)}`, save: t1Jersey > t3Jersey ? `Save $${(t1Jersey - t3Jersey).toFixed(2)} / each` : 'Standard', note: '-' },
      { qty: '101+', jersey: `$${t4Jersey.toFixed(2)}`, set: `$${t4Set.toFixed(2)}`, save: t1Jersey > t4Jersey ? `Save $${(t1Jersey - t4Jersey).toFixed(2)} / each` : 'Standard', note: 'Best Value' }
    ];
  }, [parsedPrice, product]);

  // 2. Dynamic In-Page Price Calculator (Block 18)
  const [calcQty, setCalcQty] = useState(25);
  const [calcFormat, setCalcFormat] = useState('jersey');
  const getCalcRate = () => {
    let rate = 0;
    if (calcFormat === 'set') {
      if (calcQty >= 101) rate = parseFloat(volumeTiers[3].set.replace('$', ''));
      else if (calcQty >= 51) rate = parseFloat(volumeTiers[2].set.replace('$', ''));
      else if (calcQty >= 25) rate = parseFloat(volumeTiers[1].set.replace('$', ''));
      else rate = parseFloat(volumeTiers[0].set.replace('$', ''));
    } else {
      if (calcQty >= 101) rate = parseFloat(volumeTiers[3].jersey.replace('$', ''));
      else if (calcQty >= 51) rate = parseFloat(volumeTiers[2].jersey.replace('$', ''));
      else if (calcQty >= 25) rate = parseFloat(volumeTiers[1].jersey.replace('$', ''));
      else rate = parseFloat(volumeTiers[0].jersey.replace('$', ''));
    }
    return {
      unit: rate.toFixed(2),
      total: (calcQty * rate).toFixed(2)
    };
  };
  const calcResult = getCalcRate();

  // 3. Decoration Methods (Block 9)
  const decorationMethods = [
    {
      title: 'Full Dye-Sublimation',
      desc: 'Ink is molecularly infused into the polyester knit. Zero crack, peel, or color fade over years of washing.',
      bestFor: 'Complete patterns, gradient fades, multi-sponsor logos',
      priceStatus: 'Included in Base Price'
    },
    {
      title: 'Pro Tackle Twill',
      desc: 'Heavy-duty stitched fabric lettering and numbers offering authentic collegiate 3D texture.',
      bestFor: 'Back numbers, front team script, captain badges',
      priceStatus: '+$5/name, +$5/number'
    },
    {
      title: 'High-Density Embroidery',
      desc: 'Raised multi-thread needlework with over 15,000 stitches for durable, prominent texture.',
      bestFor: 'Left chest club crests, sleeve tournament patches',
      priceStatus: 'From $3.50 / crest'
    },
    {
      title: 'Silicone Screen Printing',
      desc: 'Elastic ink layer formulated to flex naturally with compression fabrics without cracking.',
      bestFor: 'Sleeve sponsor branding & travel apparel',
      priceStatus: 'Volume Quote'
    }
  ];

  // 4. Guarantees (Block 11)
  const guarantees = [
    { title: 'Free Remake Guarantee', desc: 'If there is any factory printing error, spelling mistake, or wrong size, report within 30 days and we remake and reship free.' },
    { title: 'Free 3D Mockup in 12h', desc: 'Unlimited digital revisions until your coaches and booster club are 100% satisfied before any fabric is cut.' },
    { title: 'Approval Before Production', desc: 'Nothing enters printing without your final signed proof and approved size roster.' },
    { title: 'Sialkot Factory Direct', desc: 'Zero middlemen broker fees. You deal directly with the export manufacturing facility.' }
  ];

  // 5. Related Upsells (Block 13 - COMPLETE THE ROSTER)
  // Dynamically pulled from real sport catalog (socks, hoodies, bags, jackets, pants)
  const upsells = useMemo(() => {
    if (!sportProducts || sportProducts.length === 0) return [];

    const otherProducts = sportProducts.filter(p => 
      p.slug !== product?.slug && p.name !== productName
    );

    const priorityKeywords = [
      ['sock'],
      ['hoodie', 'pullover', 'fleece'],
      ['jacket', 'parka', 'bomber'],
      ['bag', 'duffle', 'backpack', 'cinch', 'equipment'],
      ['pant', 'jogger', 'shell', 'short'],
      ['warmup', 'beanie', 'compression', 't-shirt']
    ];

    const selected = [];
    const usedIds = new Set();

    for (const group of priorityKeywords) {
      const match = otherProducts.find(p => 
        !usedIds.has(p.id) && group.some(kw => p.name.toLowerCase().includes(kw))
      );
      if (match) {
        selected.push({
          id: match.id,
          name: match.name,
          price: match.price.startsWith('from') ? match.price : `from ${match.price}`,
          img: match.image,
          slug: match.slug,
          rawProduct: match
        });
        usedIds.add(match.id);
      }
      if (selected.length === 4) break;
    }

    if (selected.length < 4) {
      for (const p of otherProducts) {
        if (!usedIds.has(p.id)) {
          selected.push({
            id: p.id,
            name: p.name,
            price: p.price.startsWith('from') ? p.price : `from ${p.price}`,
            img: p.image,
            slug: p.slug,
            rawProduct: p
          });
          usedIds.add(p.id);
        }
        if (selected.length === 4) break;
      }
    }

    return selected;
  }, [sportProducts, product, productName]);

  // 6. Specific FAQs (Block 14) — Loaded dynamically per product with anti-spam rephrased content
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = useMemo(() => {
    // 1. If product from MongoDB has its own faqs array
    if (product?.faqs && Array.isArray(product.faqs) && product.faqs.length > 0) {
      return product.faqs;
    }
    // 2. If matched from productFullText296 or productFaqs296 by slug
    const fFromFull = product?.slug && productFullText296[product.slug]?.faqs;
    if (fFromFull && fFromFull.length > 0) {
      return fFromFull;
    }
    if (product?.slug && productFaqs296[product.slug]?.faqs?.length > 0) {
      return productFaqs296[product.slug].faqs;
    }
    // 3. Fallback default FAQs if not found
    return [
      {
        q: `What is the exact turnaround time for this ${sport} uniform set?`,
        a: `Free 3D digital mockups are delivered within 12 hours. Once your design proof and roster size sheet are approved, standard factory production is 10 to 12 working days, followed by 3 to 5 business days express DHL/FedEx shipping directly to your doorstep.`
      },
      {
        q: `Are player names, numbers, and sponsor logos included in the base price?`,
        a: `Yes! Full dye-sublimation includes unlimited team colors, high-resolution club crests, individual player names, numbers, and sponsor logos at zero additional setup charge.`
      },
      {
        q: `What if a new player joins our team mid-season? Can we re-order just 1 jersey?`,
        a: `Yes. We save your vector artwork, color pantones, and pattern templates permanently. You can re-order 1 single replacement or new player set at your team's volume rate.`
      },
      {
        q: `What if there is an error in spelling, number, or sizing upon delivery?`,
        a: `Our 100% Free Remake Policy covers you. If our production team made an error that deviates from your approved proof, we will remake the affected uniforms immediately and air-freight them at no cost.`
      },
      {
        q: `Do you ship to the USA with duties pre-cleared (DDP)?`,
        a: `Yes. All shipments to the USA are handled under DDP (Delivered Duty Paid) terms. You never have to worry about surprise customs clearance fees or import paperwork.`
      },
      {
        q: `Do you accept official School or University Purchase Orders (POs)?`,
        a: `Yes. We routinely work with public school districts, athletic directors, collegiate clubs, and military recreational departments. Net 30 terms are available on official POs.`
      }
    ];
  }, [product, sport]);

  // 7. Inspiration Gallery (Block 15 - POPULAR DESIGN CONCEPTS)
  // Dynamically populated from actual sport jerseys and uniforms
  const [activeColorFilter, setActiveColorFilter] = useState('ALL');
  const inspirationDesigns = useMemo(() => {
    if (!sportProducts || sportProducts.length === 0) return [];

    const jerseyKeywords = ['jersey', 'uniform', 'singlet', 'kit', 'set', 'top', 'pinnie', 'game', 'home', 'away'];
    let jerseys = sportProducts.filter(p => 
      jerseyKeywords.some(kw => p.name.toLowerCase().includes(kw))
    );

    if (jerseys.length < 6) {
      jerseys = sportProducts;
    }

    const colorCycle = ['BLUE', 'RED', 'GOLD', 'BLACK', 'BLUE', 'RED', 'GOLD', 'BLACK'];

    return jerseys.slice(0, 8).map((p, idx) => {
      const lower = p.name.toLowerCase();
      let assignedColor = colorCycle[idx % colorCycle.length];
      if (lower.includes('blue') || lower.includes('home') || lower.includes('navy')) assignedColor = 'BLUE';
      else if (lower.includes('red') || lower.includes('away') || lower.includes('scarlet')) assignedColor = 'RED';
      else if (lower.includes('gold') || lower.includes('yellow') || lower.includes('two-tone')) assignedColor = 'GOLD';
      else if (lower.includes('black') || lower.includes('dark') || lower.includes('practice') || lower.includes('stealth')) assignedColor = 'BLACK';

      const cleanName = p.name.replace(new RegExp(`Custom\\s+(${sport})?\\s*`, 'i'), '').trim() || p.name;

      return {
        id: p.id,
        name: cleanName,
        fullName: p.name,
        color: assignedColor,
        img: p.image,
        price: p.price,
        slug: p.slug,
        rawProduct: p
      };
    });
  }, [sportProducts, sport]);

  const filteredInspiration = useMemo(() => {
    if (activeColorFilter === 'ALL') return inspirationDesigns;
    const filtered = inspirationDesigns.filter(d => d.color === activeColorFilter);
    return filtered.length > 0 ? filtered : inspirationDesigns.slice(0, 4);
  }, [activeColorFilter, inspirationDesigns]);

  // Helper to add upsell directly to Quote form
  const handleAddUpsellToQuote = (u) => {
    setFormData(prev => ({
      ...prev,
      teamDetails: `${prev.teamDetails}\n+ Include: ${u.name} (${u.price})`
    }));
    const el = document.getElementById('quote-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // 8. Quote Form State
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { submitInquiry } = useCMS();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    teamDetails: `Inquiry for: ${productName} (${sport})`
  });

  const handleDetailQuoteSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitInquiry({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        sport: sport,
        product: productName,
        quantity: calcQty || 25,
        message: `${formData.teamDetails} | Estimated: $${calcResult.total} (${calcQty} players, ${calcFormat})`,
        source: 'product_detail_page',
      });
    } catch (err) {
      console.error('Error submitting product quote:', err);
    } finally {
      setSubmitting(false);
      setQuoteSubmitted(true);
    }
  };

  const whatsAppNumber = '923105464116';
  const buildWhatsAppLink = (customMsg) => {
    const text = customMsg || `Hello HAMLO SPORTS!\n\nI want to request a free 3D digital mockup & B2B team quote for:\n• Product: ${productName}\n• Sport: ${sport}\n• Price Tier: ${basePrice}\n• Estimated Roster Size: ${calcQty} players (${calcFormat === 'set' ? 'Full Uniform Set' : 'Jersey Only'})\n• Estimated Total: $${calcResult.total}\n\nPlease share the 3D proof and team pricing details.`;
    return `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <SEO
        title={`Custom ${sport} ${productName} - Factory Direct Price | HAMLO SPORTS`}
        description={`Custom ${sport.toLowerCase()} ${productName.toLowerCase()} with team names, numbers and logos included. Sialkot factory-direct, free mockup, sizes YS-4XL.`}
        canonical={`/custom-${sport.toLowerCase()}-uniforms/`}
      />

      <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">

        {/* ── BLOCK 1: TOP OFFER BANNER ────────────────────────────────────────── */}
        <div className="w-full bg-[var(--secondary)] text-white py-2 text-[10px] sm:text-xs uppercase font-bold tracking-widest text-center border-b border-white/10">
          <div className="w-[96%] max-w-[1800px] mx-auto flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>FACTORY DIRECT SIALKOT • FREE 12-HOUR 3D MOCKUP • DDP DELIVERY (DUTIES PRE-PAID)</span>
          </div>
        </div>

        {/* ── BLOCK 2: BREADCRUMB + SINGLE H1 ──────────────────────────────────── */}
        <div className="w-[96%] max-w-[1800px] mx-auto py-4 text-xs text-[var(--secondary)]/60 font-medium border-b border-[var(--secondary)]/10">
          <span>Home</span> / <span>Custom {sport} Uniforms</span> / <strong className="text-[var(--secondary)]">{productName}</strong>
        </div>

        {/* ── BLOCK 3 & 4: 3-VIEW GALLERY + INTRO + 7 FEATURE BULLETS ─────────── */}
        <section className="w-[96%] max-w-[1800px] mx-auto my-8 sm:my-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* 3-View Image Gallery (Front, Back, Side) */}
            <div>
              <div className="relative aspect-[4/5] bg-neutral-100 rounded-[3px] overflow-hidden shadow-xl border border-[var(--secondary)]/10 mb-3">
                <ProgressiveImage
                  src={displayImages[safeActiveImageIdx] || product?.image || sportProducts[0]?.image}
                  alt={`${productName} - View ${safeActiveImageIdx + 1} - HAMLO SPORTS`}
                  className="w-full h-full object-cover"
                  priority={true}
                />
                <span className="absolute top-4 left-4 bg-[var(--secondary)] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-[3px]">
                  FACTORY DIRECT KIT
                </span>
              </div>

              {/* Thumbnails with explicit angle labels */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {displayImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIdx(i)}
                    className={`aspect-[4/3] rounded-[3px] overflow-hidden border-2 transition cursor-pointer relative ${safeActiveImageIdx === i ? 'border-[var(--accent)] shadow-md' : 'border-neutral-200 opacity-70 hover:opacity-100'
                      }`}
                  >
                    <img src={img} alt="HAMLO SPORTS Custom Uniform Angle View" className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 left-1 bg-black/70 text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">
                      {i === 0 ? 'Front View' : i === 1 ? 'Back View' : 'Full Match Set'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Intro + Product Metadata */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] block mb-1">
                  OFFICIAL TEAM MATCH SET
                </span>

                {/* Single Clean H1 as per SEO Guide */}
                <h1 className="text-2xl sm:text-4xl font-black uppercase text-[var(--secondary)] leading-tight mb-3">
                  {productName}
                </h1>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-[var(--secondary)]">
                    {basePrice}
                  </span>
                  <span className="text-xs text-neutral-500 font-semibold uppercase">
                    per complete set (Jersey + Pant / Shorts)
                  </span>
                </div>

                {/* Benefit-Driven Narrative Intro Paragraph */}
                <p className="text-xs sm:text-sm text-[var(--secondary)]/80 leading-relaxed font-light mb-6">
                  {productDescription}
                </p>

                {/* Exactly 6-8 Benefit-Driven Feature Bullets */}
                <div className="space-y-2 mb-6">
                  {productFeatures.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[var(--secondary)]/85">
                      <Check size={14} className="text-emerald-600 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Fabric Specs Table (Page 11 Improved Feature) */}
                <div className="bg-white rounded-[3px] border border-[var(--secondary)]/10 p-4 mb-6 shadow-xs">
                  <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--secondary)] mb-2 flex items-center gap-1.5">
                    <Layers size={13} className="text-[var(--accent)]" /> Factory Fabric Specifications
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10.5px] text-neutral-600">
                    <div><span className="font-bold text-[var(--secondary)] block">Fabric:</span> {productFabricSpecs.fabric}</div>
                    <div><span className="font-bold text-[var(--secondary)] block">Weight:</span> {productFabricSpecs.weight}</div>
                    <div><span className="font-bold text-[var(--secondary)] block">Stitch:</span> {productFabricSpecs.stitch}</div>
                    <div><span className="font-bold text-[var(--secondary)] block">Care:</span> {productFabricSpecs.care}</div>
                  </div>
                </div>

                {/* ── BLOCK 5: 4 TRUST BADGES ROW ─────────────────────────────────── */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 border-y border-[var(--secondary)]/10 mb-6 text-[10.5px] font-bold text-[var(--secondary)] uppercase">
                  <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[var(--accent)]" /> Quality Checked</div>
                  <div className="flex items-center gap-1.5"><Clock size={14} className="text-[var(--accent)]" /> 12h Free Mockup</div>
                  <div className="flex items-center gap-1.5"><Check size={14} className="text-[var(--accent)]" /> On-Time Delivery</div>
                  <div className="flex items-center gap-1.5"><Award size={14} className="text-[var(--accent)]" /> Factory Direct</div>
                </div>

                {/* ── B2B CTA BUTTONS: DIRECT INQUIRY & DIRECT WHATSAPP ───────────────── */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Inquiry Page Button */}
                  <button
                    onClick={() => onNavigateInquiry({ name: productName, sport, price: basePrice })}
                    className="flex-1 py-4 bg-[var(--accent)] text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-[3px] flex items-center justify-center gap-2 shadow-xl hover:opacity-95 transition cursor-pointer"
                  >
                    <span>Request Free 12h 3D Mockup</span>
                    <ArrowRight size={16} />
                  </button>

                  {/* Direct WhatsApp Button */}
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-[3px] flex items-center justify-center gap-2 shadow-xl transition cursor-pointer flex-shrink-0"
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp Factory</span>
                  </a>
                </div>

                {/* Quick anchor scroll to form below */}
                <div className="mt-2 text-center">
                  <a
                    href="#quote-section"
                    className="text-[10px] uppercase font-bold text-[var(--secondary)]/60 hover:text-[var(--accent)] tracking-wider inline-flex items-center gap-1"
                  >
                    Or fill out quick in-page spec form &darr;
                  </a>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── BLOCK 7: 4-TIER VOLUME PRICE TABLE (PAGE 5 SPEC) ──────────────────── */}
        <section className="w-[96%] max-w-[1800px] mx-auto my-12 sm:my-16">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
              TRANSPARENT VOLUME TIERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
              PER-PLAYER VOLUME PRICING
            </h2>
            <p className="text-xs text-[var(--secondary)]/60 mt-1">
              All prices include sublimated names, numbers, and sponsor logos. Shipping charges apply (duties pre-paid).
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-[3px] border border-[var(--secondary)]/10 shadow-lg">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[var(--secondary)] text-white text-[11px] uppercase tracking-wider">
                  <th className="py-4 px-6">Quantity Roster Tier</th>
                  <th className="py-4 px-4">Game Jersey Only</th>
                  <th className="py-4 px-4">Complete Uniform Set</th>
                  <th className="py-4 px-4">You Save</th>
                  <th className="py-4 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--secondary)]/10 font-medium">
                {volumeTiers.map((tier, idx) => (
                  <tr key={idx} className={`hover:bg-neutral-50 ${tier.note === 'Best Value' ? 'bg-amber-50/50' : ''}`}>
                    <td className="py-4 px-6 font-bold text-[var(--secondary)]">{tier.qty} Players</td>
                    <td className="py-4 px-4">{tier.jersey}</td>
                    <td className="py-4 px-4 font-black text-[var(--secondary)]">{tier.set}</td>
                    <td className="py-4 px-4 text-emerald-600 font-semibold">{tier.save}</td>
                    <td className="py-4 px-4">
                      {tier.note === 'Best Value' ? (
                        <span className="bg-[var(--accent)] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">
                          Best Value
                        </span>
                      ) : (
                        <span className="text-neutral-400 text-xs">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-4 bg-neutral-100/70 text-[11px] text-[var(--secondary)]/70 flex flex-wrap justify-between items-center border-t border-[var(--secondary)]/10">
              <span>✓ Optional Pro Tackle Twill: +$5 per player name, +$5 per number</span>
              <span>✓ Permanent vector storage for single-player reorders</span>
            </div>
          </div>
        </section>

        {/* ── BLOCK 8: REAL-COST COMPARISON (2 INVOICES - PAGE 5 SPEC) ─────────── */}
        <section className="w-[96%] max-w-[1800px] mx-auto my-12 sm:my-16">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
              HONEST INVOICE BREAKDOWN
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
              25 UNIFORMS: TWO INVOICES
            </h2>
            <p className="text-xs text-[var(--secondary)]/60 max-w-md mx-auto mt-1">
              Don't just look at jersey prices - look at the entire invoice. Notice how reseller fees inflate typical team budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-[3px] border border-[var(--secondary)]/10 p-6 sm:p-8 shadow-xl">
            {/* Typical Reseller Invoice */}
            <div className="p-5 bg-neutral-50 rounded border border-neutral-200">
              <h3 className="text-sm font-black uppercase text-neutral-700 mb-4 pb-2 border-b border-neutral-200">
                Typical US Retailer / Distributor
              </h3>
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex justify-between"><span>25 Match Sets (@ $75.00)</span><span>$1,875.00</span></div>
                <div className="flex justify-between text-red-600"><span>Player Names & Back Numbers ($5/player)</span><span>+$125.00</span></div>
                <div className="flex justify-between text-red-600"><span>Vector Redraw & Screen Setup Fee</span><span>+$75.00</span></div>
                <div className="flex justify-between text-red-600"><span>Multi-Color Sponsor Logo Surcharge</span><span>+$50.00</span></div>
                <div className="pt-3 border-t border-neutral-300 flex justify-between font-black text-sm text-neutral-900">
                  <span>Total Due:</span><span>$2,125.00</span>
                </div>
              </div>
            </div>

            {/* HAMLO SPORTS Factory Direct Invoice */}
            <div className="p-5 bg-emerald-50/50 rounded border-2 border-emerald-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-emerald-200">
                  <h3 className="text-sm font-black uppercase text-emerald-950">
                    HAMLO SPORTS Sialkot Factory Direct
                  </h3>
                  <span className="text-[10px] font-black uppercase bg-emerald-600 text-white px-2 py-0.5 rounded">
                    All-Inclusive
                  </span>
                </div>
                <div className="space-y-2 text-xs text-neutral-700 font-medium">
                  <div className="flex justify-between"><span>25 Match Sets (@ $74.99 Tier)</span><span>$1,874.75</span></div>
                  <div className="flex justify-between text-emerald-700"><span>Player Names & Numbers</span><span>$0.00 (Included)</span></div>
                  <div className="flex justify-between text-emerald-700"><span>Artwork & Digitizing Setup</span><span>$0.00 (Included)</span></div>
                  <div className="flex justify-between text-emerald-700"><span>Unlimited Sponsor Logos</span><span>$0.00 (Included)</span></div>
                  <div className="pt-3 border-t border-emerald-300 flex justify-between font-black text-sm text-emerald-950">
                    <span>Total Due:</span><span className="text-emerald-700">$1,874.75</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-2.5 bg-emerald-600 text-white text-[11px] font-bold text-center rounded">
                Direct Factory Savings: $250.25 on this single team order!
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOCK 9: 4 DECORATION METHODS (PAGE 6 SPEC) ───────────────────────── */}
        <section className="w-[96%] max-w-[1800px] mx-auto my-12 sm:my-16">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
              EXPERT EMBELLISHMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
              4 DECORATION METHODS EXPLAINED
            </h2>
            <p className="text-xs text-[var(--secondary)]/60 max-w-md mx-auto mt-1">
              Our in-house design artists select the ideal embellishment method for your artwork at zero confusion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {decorationMethods.map((m, idx) => (
              <div key={idx} className="p-5 bg-white rounded-[3px] border border-[var(--secondary)]/10 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-black uppercase text-[var(--secondary)] mb-2">{m.title}</h3>
                  <p className="text-xs text-[var(--secondary)]/70 mb-4 leading-relaxed">{m.desc}</p>
                </div>
                <div className="pt-3 border-t border-neutral-100 text-[10px]">
                  <span className="text-neutral-500 block mb-1">Best For: <strong>{m.bestFor}</strong></span>
                  <span className="text-[var(--accent)] font-black uppercase">{m.priceStatus}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOCK 9B: CHOOSE YOUR DECORATION: SUBLIMATED, TACKLE TWILL, OR BOTH ── */}
        <section className="w-[96%] max-w-[1800px] mx-auto my-12 sm:my-16">
          <div className="bg-white rounded-[3px] border border-[var(--secondary)]/10 p-6 sm:p-10 shadow-lg">
            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                PREMIUM EMBELLISHMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1 mb-2">
                {decorationData.heading}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-4xl">
                {decorationData.intro}
              </p>
            </div>

            <div className="overflow-x-auto mb-6 border border-neutral-200 rounded-[3px]">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[var(--secondary)] text-white text-[10.5px] uppercase tracking-wider">
                    <th className="py-3 px-4 w-1/4">DECORATION OPTIONS</th>
                    <th className="py-3 px-4 w-3/8">SUBLIMATED</th>
                    <th className="py-3 px-4 w-3/8">TACKLE TWILL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {decorationData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-neutral-50/50' : ''}>
                      <td className="py-3.5 px-4 font-bold text-[var(--secondary)]">{row.property}</td>
                      <td className="py-3.5 px-4 text-neutral-700">{row.sublimated}</td>
                      <td className="py-3.5 px-4 font-semibold text-[var(--secondary)]">{row.twill}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-2 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
              <p>{decorationData.explanation1}</p>
              <p>{decorationData.explanation2}</p>
            </div>
          </div>
        </section>

        {/* ── BLOCK 10: 3 SIZE CHARTS (MEN, WOMEN, YOUTH - PAGE 6 SPEC) ─────────── */}
        <section className="w-[96%] max-w-[1800px] mx-auto my-12 sm:my-16">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
              ACCURATE FIT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
              ATHLETIC SIZING CHARTS (INCHES)
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Tip: If players fall between sizes, we recommend ordering one size up for athletic layering.
            </p>
          </div>

          <div className="bg-white rounded-[3px] border border-[var(--secondary)]/10 p-6 shadow-md overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[var(--secondary)] text-white uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-4">Size Tag</th>
                  <th className="py-3 px-4">Youth Chest</th>
                  <th className="py-3 px-4">Men's / Adult Chest</th>
                  <th className="py-3 px-4">Women's Chest</th>
                  <th className="py-3 px-4">Waist (Inches)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 font-medium text-neutral-700">
                <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">YS / XS</td><td className="py-3 px-4">26 - 28"</td><td className="py-3 px-4">32 - 34"</td><td className="py-3 px-4">30 - 32"</td><td className="py-3 px-4">22 - 25"</td></tr>
                <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">YM / S</td><td className="py-3 px-4">28 - 30"</td><td className="py-3 px-4">35 - 37"</td><td className="py-3 px-4">33 - 35"</td><td className="py-3 px-4">26 - 29"</td></tr>
                <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">YL / M</td><td className="py-3 px-4">31 - 33"</td><td className="py-3 px-4">38 - 40"</td><td className="py-3 px-4">36 - 38"</td><td className="py-3 px-4">30 - 33"</td></tr>
                <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">YXL / L</td><td className="py-3 px-4">34 - 36"</td><td className="py-3 px-4">41 - 43"</td><td className="py-3 px-4">39 - 41"</td><td className="py-3 px-4">34 - 37"</td></tr>
                <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">XL - 4XL</td><td className="py-3 px-4">-</td><td className="py-3 px-4">44 - 58"</td><td className="py-3 px-4">42 - 50"</td><td className="py-3 px-4">38 - 52"</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── BLOCK 11: 4 GUARANTEE BLOCKS (PAGE 6 SPEC) ────────────────────────── */}
        <section className="w-[96%] max-w-[1800px] mx-auto my-12 sm:my-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((g, idx) => (
              <div key={idx} className="p-5 bg-white rounded-[3px] border-l-4 border-l-[var(--accent)] border border-[var(--secondary)]/10 shadow-sm">
                <h3 className="text-xs font-black uppercase text-[var(--secondary)] mb-1.5">{g.title}</h3>
                <p className="text-[11px] text-[var(--secondary)]/70 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOCK 12: IN-PAGE QUICK PRICE CALCULATOR (BEAT-HAMCO SPEC) ────────── */}
        <section className="w-[96%] max-w-[1800px] mx-auto my-12 sm:my-16">
          <div className="bg-white rounded-[3px] border border-[var(--secondary)]/10 p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-bold uppercase mb-1">
                <Calculator size={15} /> Quick Order Estimator
              </div>
              <h3 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">
                Calculate {productName} Total
              </h3>
              <p className="text-xs text-neutral-600 mb-4">
                Slide to your team roster size to see exact instant factory pricing.
              </p>

              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setCalcFormat('set')}
                  className={`flex-1 py-1.5 text-xs font-bold uppercase rounded-[3px] border cursor-pointer ${calcFormat === 'set' ? 'bg-[var(--secondary)] text-white' : 'bg-white text-neutral-600 border-neutral-300'
                    }`}
                >
                  Full Set (Jersey + Shorts)
                </button>
                <button
                  onClick={() => setCalcFormat('jersey')}
                  className={`flex-1 py-1.5 text-xs font-bold uppercase rounded-[3px] border cursor-pointer ${calcFormat === 'jersey' ? 'bg-[var(--secondary)] text-white' : 'bg-white text-neutral-600 border-neutral-300'
                    }`}
                >
                  Jersey Only
                </button>
              </div>

              <input
                type="range"
                min="10"
                max="150"
                step="1"
                value={calcQty}
                onChange={(e) => setCalcQty(Number(e.target.value))}
                className="w-full accent-[var(--accent)] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                <span>10 Players</span>
                <span>{calcQty} Roster</span>
                <span>150+ Players</span>
              </div>
            </div>

            <div className="w-full md:w-auto p-6 bg-neutral-50 rounded border border-neutral-200 text-center flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase text-neutral-500">Estimated Total:</span>
              <span className="text-3xl font-black text-[var(--secondary)] mb-1">${calcResult.total}</span>
              <span className="text-xs font-bold text-emerald-600 mb-4">(${calcResult.unit} per player)</span>

              <div className="flex flex-col gap-2 w-full">
                <button
                  onClick={() => onNavigateInquiry({
                    name: `${productName} (${calcQty} Sets)`,
                    sport,
                    price: `$${calcResult.unit}/player`
                  })}
                  className="px-6 py-2.5 bg-[var(--accent)] text-white text-xs font-black uppercase tracking-wider rounded-[3px] hover:opacity-90 transition cursor-pointer"
                >
                  Lock Price on Quote
                </button>
                <a
                  href={buildWhatsAppLink(`Hello HAMLO SPORTS! I calculated an estimate for ${calcQty} players of ${productName} ($${calcResult.total} total, $${calcResult.unit}/player). Can you prepare our free 3D design proof?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-emerald-600 text-white text-[11px] font-black uppercase tracking-wider rounded-[3px] hover:bg-emerald-700 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare size={14} /> WhatsApp This Estimate
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOCK 12B: COMPREHENSIVE TEAM UNIFORM BUYER'S & EDITORIAL GUIDE ─── */}
        <section className="w-[96%] max-w-[1800px] mx-auto my-12 sm:my-16 space-y-10">
          
          {/* Volume Mix & Match Notice */}
          <div className="p-5 bg-amber-50/80 border border-amber-200 rounded-[3px] text-xs text-amber-950 leading-relaxed flex items-start gap-3">
            <Info size={18} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block uppercase tracking-wider font-black text-amber-900 mb-1">
                Mix & Match Uniform Order Policy
              </strong>
              <span>{sportPricing.note}</span>
            </div>
          </div>

          {/* Youth Club & High School Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 bg-white rounded-[3px] border-l-4 border-l-[var(--accent)] border border-[var(--secondary)]/10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-1">
                  YOUTH ASSOCIATIONS & TRAVEL CLUBS
                </span>
                <h3 className="text-lg sm:text-xl font-black uppercase text-[var(--secondary)] mb-3">
                  Youth Club {normSport} Uniforms & Jerseys
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                  Youth clubs, academies, and community associations can group multiple age divisions into a single HAMLO SPORTS production order—even if each division features unique color schemes or team artwork. Ordering 15 jerseys across three age divisions totals 45 match sweaters, qualifying your entire organization for the 25–50 tier at $44.99 each ($2,024.55 total).
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Youth cuts span YXS through YXL, while adult XS to 4XL fit seamlessly on the same invoice for coaching staff and senior rosters. We recommend checking chest, waist, and hip measurements against our Youth Size Matrix prior to collecting orders from parents.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-[3px] border-l-4 border-l-[var(--secondary)] border border-[var(--secondary)]/10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--secondary)] block mb-1">
                  VARSITY, JV & ATHLETIC DIRECTORS
                </span>
                <h3 className="text-lg sm:text-xl font-black uppercase text-[var(--secondary)] mb-3">
                  High School {normSport} Programs & Purchase Orders
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                  Varsity and JV athletic programs can bundle primary home kits, road away jerseys, training pullovers, and sideline warmups onto a single HAMLO SPORTS order so all rosters maximize bulk pricing together. We gladly accept official school district and booster club Purchase Orders (POs) with standard Net 30 terms.
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  A standard high school program package includes home and away match jerseys, sublimated socks, and reversible scrimmage tops for daily practice. Submit your official school pantone colors and vector crest, and our design team will render high-definition 3D proofs within 12 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Beer League & Adult Rec */}
          <div className="p-6 sm:p-8 bg-white rounded-[3px] border-l-4 border-l-emerald-600 border border-[var(--secondary)]/10 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 block mb-1">
              ADULT REC & MEN'S LEAGUES
            </span>
            <h3 className="text-lg sm:text-xl font-black uppercase text-[var(--secondary)] mb-3">
              Adult Rec & Men's League {normSport} Kits
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
              A single HAMLO SPORTS quote can cover your individual rec team or an entire adult league. The cumulative count across all participating teams determines the tier pricing, even when every club features its own custom artwork and striping. A 14-skater rec roster ordering custom game jerseys at $49.99 each totals $699.86 with all sublimated graphics and numbers included.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Adding stitched tackle-twill player names and numbers (+ $10/jersey) brings the total to $839.86. If an 8-team adult league orders 15 jerseys per team (120 total), everyone drops into the top 101+ tier at $39.99 per jersey ($4,798.80 total).
            </p>
          </div>

          {/* Specialized Cuts & Full Kit Bundles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 bg-white rounded-[3px] border border-[var(--secondary)]/10 shadow-sm">
              <h3 className="text-lg sm:text-xl font-black uppercase text-[var(--secondary)] mb-3">
                Specialized Cuts, Women's Patterns & Captain Letters
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                Oversized goalie and pad cuts are tailored with expanded arm and chest gussets to fit over body armor at zero additional price premium. HAMLO SPORTS manufactures anatomically graded patterns for men, women, and youth athletes on the same order, ideal for co-ed leagues and competitive girls' athletic programs.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Captain 'C' and alternate 'A' markers are precision-positioned on the chest—available in seamless dye-sublimation or multi-layer tackle twill embroidery. Authentic sewn-in reinforced fight straps (tie-downs) can be included upon request.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-[3px] border border-[var(--secondary)]/10 shadow-sm">
              <h3 className="text-lg sm:text-xl font-black uppercase text-[var(--secondary)] mb-3">
                Practice Gear, Warmups and Full Package Sets
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                A turnkey HAMLO SPORTS team kit combines home and away match jerseys, custom dye-sublimated socks, and heavy-duty pants or shells into one coordinated design aesthetic. Single-layer practice sweaters begin at $49.99 (1–24 pieces), while dual-layer reversible practice jerseys offer home/away scrimmages in one garment from $89.99.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Custom pant shells start at $44.99, shielding breezers in team colors and emblems. Complete your club identity with our winter sideline parkas ($69.99) and moisture-wicking team travel hoodies ($46.99).
              </p>
            </div>
          </div>

          {/* When to Order Before Playoffs (Timeline Schedule Table) */}
          <div className="p-6 sm:p-8 bg-[var(--secondary)] text-white rounded-[3px] shadow-xl border border-white/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] block mb-1">
                  PRODUCTION & TOURNAMENT DEADLINES
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                  When to Order Before Tournaments & Playoffs
                </h3>
              </div>
              <p className="text-xs text-white/70 max-w-md">
                Approve your design with HAMLO SPORTS at least 33 days before your tournament or playoff date. Standard production takes 2 to 3 weeks, express air shipping takes 3 to 5 days, keeping a week margin for late roster additions.
              </p>
            </div>

            <div className="overflow-x-auto mb-6 bg-white/5 rounded border border-white/10">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-white/10 text-white text-[11px] uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-black">Tournament or Playoff Date</th>
                    <th className="py-3.5 px-4 font-black text-[var(--accent)]">Approve Your Design By</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 font-medium">
                  {playoffSchedule.map((sched, sIdx) => (
                    <tr key={sIdx} className="hover:bg-white/5">
                      <td className="py-3 px-4 font-bold text-white">{sched.tournamentDate}</td>
                      <td className="py-3 px-4 text-emerald-400 font-bold">{sched.approveByDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-white/80">
                The quote form asks for your in-hands date. Already past your approve-by date? Free rush production available upon request.
              </span>
              <a 
                href="#quote-section" 
                className="px-6 py-2.5 bg-[var(--accent)] hover:bg-white hover:text-[var(--secondary)] text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition cursor-pointer flex-shrink-0"
              >
                Get Free 3D Proof &rarr;
              </a>
            </div>
          </div>

        </section>

        {/* ── BLOCK 13: UPSELLS / RELATED PRODUCTS (PAGE 7 SPEC) ────────────────── */}
        <section className="w-[96%] max-w-[1800px] mx-auto my-12 sm:my-16">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
              COMPLETE THE ROSTER
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
              COMMONLY ORDERED WITH THIS UNIFORM
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {upsells.map((u, idx) => (
              <div key={idx} className="bg-white p-3.5 sm:p-4 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm flex flex-col justify-between group hover:border-[var(--accent)] hover:shadow-md transition-all duration-300">
                <div 
                  className="h-64 sm:h-72 lg:h-80 w-full bg-gradient-to-b from-neutral-50 to-neutral-100/50 rounded mb-3 overflow-hidden cursor-pointer flex items-center justify-center p-4 relative"
                  onClick={() => u.rawProduct && onNavigateProduct(u.rawProduct)}
                >
                  <img 
                    src={u.img} 
                    alt={`${u.name} - HAMLO SPORTS`} 
                    className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105" 
                    loading="lazy"
                  />
                </div>
                <h3 
                  className="text-xs font-black uppercase text-[var(--secondary)] line-clamp-2 min-h-[32px] mb-2 cursor-pointer hover:text-[var(--accent)] transition-colors leading-tight"
                  onClick={() => u.rawProduct && onNavigateProduct(u.rawProduct)}
                >
                  {u.name}
                </h3>
                <div className="flex items-center justify-between pt-2.5 border-t border-neutral-100 text-xs mt-auto">
                  <span className="font-bold text-[var(--secondary)]">{u.price}</span>
                  <button 
                    onClick={() => handleAddUpsellToQuote(u)}
                    className="text-[10px] font-bold text-[var(--accent)] uppercase hover:underline cursor-pointer"
                  >
                    Add to Quote &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOCK 14: 6 PRODUCT-SPECIFIC FAQS (PAGE 7 SPEC) ──────────────────── */}
        <section className="w-[96%] max-w-[1800px] mx-auto my-12 sm:my-16">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
              CLEAR ANSWERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-[3px] border border-[var(--secondary)]/10 overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-black text-xs uppercase text-[var(--secondary)] flex items-center justify-between cursor-pointer hover:bg-neutral-50"
                  >
                    <span>{faq.q}</span>
                    <span className="text-base text-[var(--accent)] font-bold">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 pt-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── BLOCK 15: INSPIRATION GALLERY + 4-FIELD QUOTE MACHINE (PAGE 7 SPEC) ─ */}
        <section id="quote-section" className="w-[96%] max-w-[1800px] mx-auto my-16 sm:my-24">

          {/* Inspiration Gallery with Color Filters */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                  DESIGN INSPIRATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
                  POPULAR {sport.toUpperCase()} DESIGN CONCEPTS
                </h2>
              </div>

              {/* Filter by color */}
              <div className="flex gap-1.5 flex-wrap">
                {['ALL', 'BLUE', 'RED', 'GOLD', 'BLACK'].map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveColorFilter(c)}
                    className={`px-3 py-1 rounded-[3px] text-[10px] font-bold uppercase transition cursor-pointer ${activeColorFilter === c ? 'bg-[var(--secondary)] text-white' : 'bg-white border border-neutral-300 text-neutral-600'
                      }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {filteredInspiration.map((design, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-2 rounded-[3px] border border-neutral-200 text-center group hover:border-[var(--accent)] transition cursor-pointer"
                  onClick={() => design.rawProduct && onNavigateProduct(design.rawProduct)}
                >
                  <div className="aspect-[3/4] sm:aspect-[4/5] bg-neutral-50 rounded mb-1.5 overflow-hidden flex items-center justify-center p-2 relative">
                    <img 
                      src={design.img} 
                      alt={`${design.fullName || design.name} - HAMLO SPORTS Sublimated Design Concept`} 
                      className="w-full h-full object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-105" 
                    />
                  </div>
                  <strong className="text-[10px] font-black uppercase text-[var(--secondary)] block line-clamp-1 group-hover:text-[var(--accent)]">
                    {design.name}
                  </strong>
                  <span className="text-[8.5px] text-neutral-400 uppercase font-semibold">
                    Front / Back Sublimated
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* The High-Converting Quote Machine Form */}
          <div className="bg-[var(--secondary)] text-white rounded-[3px] p-8 sm:p-12 shadow-2xl border border-white/10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] block mb-1">
                  DIRECT SIALKOT FACTORY INVOICE
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-2">
                  REQUEST YOUR FREE 3D PROOF & QUOTE
                </h2>
                <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto">
                  A dedicated production engineer replies within 1 hour during business hours with exact team pricing and 3D digital artwork.
                </p>
              </div>

              {quoteSubmitted ? (
                <div className="p-8 text-center bg-white/10 rounded border border-emerald-400">
                  <Check size={44} className="text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-xl font-black uppercase text-white mb-1">Inquiry Dispatched!</h3>
                  <p className="text-xs text-white/80 max-w-md mx-auto">
                    Thank you {formData.fullName}! Your free 3D digital mockup for <strong>{productName}</strong> is being prepared by our artwork desk.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDetailQuoteSubmit} className="bg-white rounded-[3px] p-6 sm:p-8 text-[var(--secondary)] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Coach David Miller"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-[3px] text-xs font-medium focus:border-[var(--accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="coach@team.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-[3px] text-xs font-medium focus:border-[var(--accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-[3px] text-xs font-medium focus:border-[var(--accent)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Team Details & Quantity *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. 25 Sets in Navy/Gold with team crest. Target in-hand date March 15th."
                      value={formData.teamDetails}
                      onChange={(e) => setFormData({ ...formData, teamDetails: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-[3px] text-xs font-medium focus:border-[var(--accent)] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 py-4 bg-[var(--accent)] disabled:opacity-50 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-[3px] hover:opacity-95 shadow-xl cursor-pointer"
                    >
                      {submitting ? 'SUBMITTING TO FACTORY...' : 'GET MY FREE QUOTE & 3D MOCKUP →'}
                    </button>

                    <a
                      href={buildWhatsAppLink(`Hello HAMLO SPORTS!\n\nI want to request a free 3D design proof for:\n- Product: ${productName}\n- Contact: ${formData.fullName || 'Team Coach'} (${formData.phone || ''})\n- Team Notes: ${formData.teamDetails}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-[3px] flex items-center justify-center gap-2 shadow-xl transition cursor-pointer flex-shrink-0"
                    >
                      <MessageSquare size={16} /> WhatsApp Factory
                    </a>
                  </div>

                  <div className="pt-2 text-center text-[10px] text-neutral-400">
                    A real production specialist replies within 1 hour. No obligation, 100% free digital mockups.
                  </div>
                </form>
              )}
            </div>
          </div>

        </section>

        {/* ── TRUST BAR ───────────────────────────────────────────────────────── */}
        <TrustBar />

      </div>
    </>
  );
}
