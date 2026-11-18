import React, { useState, useEffect, useMemo } from 'react';
import { 
  Check, ArrowRight, Star, ShieldCheck, Clock, Calculator, 
  Calendar, HelpCircle, ChevronRight, Eye, Sparkles, Layers,
  Phone, Mail, MessageSquare, Info, AlertCircle, Award
} from 'lucide-react';
import TrustBar from '../common/TrustBar';
import { useCMS } from '../../context/CMSContext';
import { fullCatalog296 } from '../../data/fullCatalog296';

export default function SportsCategoryHubPage({
  activeSport = 'BASEBALL',
  onSelectSport = () => {},
  onSelectProduct = () => {},
  onNavigateInquiry = () => {}
}) {
  const [dbProducts, setDbProducts] = useState([]);

  // Fetch live products from backend MongoDB database, with fallback to fullCatalog296
  useEffect(() => {
    let isMounted = true;
    const normSport = (activeSport || 'BASEBALL').toUpperCase();
    fetch(`/api/products?sport=${encodeURIComponent(normSport)}&limit=100`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (isMounted && data?.data && data.data.length > 0) {
          setDbProducts(data.data);
        }
      })
      .catch(() => {});
    return () => { isMounted = false; };
  }, [activeSport]);

  // Master product list for current activeSport
  const sportProducts = useMemo(() => {
    const norm = (activeSport || 'BASEBALL').toUpperCase();
    
    if (dbProducts && dbProducts.length > 0) {
      return dbProducts.map(p => ({
        id: p._id || p.id,
        name: p.name,
        slug: p.slug,
        sport: p.sport || norm,
        category: p.category || norm,
        categorySlug: p.categorySlug || `custom-${norm.toLowerCase().replace(/\s+/g, '-')}-uniforms`,
        price: typeof p.price === 'number' ? `$${p.price.toFixed(2)}` : (p.price || '$44.99'),
        image: p.images?.[0]?.url || p.images?.[0] || p.image,
        images: (p.images && p.images.length > 0) ? p.images.map(img => typeof img === 'string' ? img : img.url) : [p.image],
        badge: p.badge || (p.isBestseller ? 'TOP SELLER' : p.isNew ? 'NEW ARRIVAL' : 'PRO FIT'),
        fabric: p.fabric || '100% Moisture-Wicking Poly Interlock',
        desc: p.description || `${p.name} factory direct manufactured in Sialkot, Pakistan.`,
        sizes: p.sizes || ['YXS', 'YS', 'YM', 'YL', 'YXL', 'AS', 'AM', 'AL', 'AXL', '2XL', '3XL'],
        colors: p.colors || ['Custom Team Colors']
      }));
    }

    return fullCatalog296.filter(p => {
      const s = (p.sport || p.category || '').toUpperCase();
      if (norm === 'FOOTBALL') {
        return s.includes('FOOTBALL') && !s.includes('FLAG');
      }
      return s.includes(norm) || norm.includes(s);
    });
  }, [dbProducts, activeSport]);

  // 1. Jersey Cuts (Section 4)
  const jerseyCuts = useMemo(() => {
    const list = sportProducts.filter(p => 
      /jersey|shirt|polo|top|tank|singlet/i.test(p.name)
    );
    return (list.length > 0 ? list : sportProducts).slice(0, 6).map(p => ({
      ...p,
      img: p.image || p.images?.[0]
    }));
  }, [sportProducts]);

  // 2. Mockups Gallery (Section 8)
  const mockupIdeas = useMemo(() => {
    return sportProducts.slice(0, 12).map((p) => ({
      ...p,
      cut: p.badge || (/pant|short/i.test(p.name) ? 'Bottoms' : /hoodie|jacket/i.test(p.name) ? 'Outerwear' : 'Game Jersey'),
      img: p.image || p.images?.[0]
    }));
  }, [sportProducts]);

  // 3. Pants, Sideline & Bags (Section 9)
  const gameDayItems = useMemo(() => {
    const list = sportProducts.filter(p => 
      /pant|short|kilt|bottom|uniforms set|package/i.test(p.name)
    );
    return (list.length > 0 ? list : sportProducts).slice(0, 8).map(p => ({
      ...p,
      desc: p.fabric || `${p.name} with reinforced athletic construction`,
      img: p.image || p.images?.[0]
    }));
  }, [sportProducts]);

  const sidelineItems = useMemo(() => {
    const list = sportProducts.filter(p => 
      /hoodie|jacket|sweatshirt|pullover|wind|warmup|vest/i.test(p.name)
    );
    return (list.length > 0 ? list : sportProducts).slice(0, 8).map(p => ({
      ...p,
      img: p.image || p.images?.[0]
    }));
  }, [sportProducts]);

  const accessoryItems = useMemo(() => {
    const list = sportProducts.filter(p => 
      /bag|backpack|duffle|sock|glove|stirrup/i.test(p.name)
    );
    return (list.length > 0 ? list : sportProducts).slice(0, 4).map(p => ({
      ...p,
      img: p.image || p.images?.[0]
    }));
  }, [sportProducts]);

  // 4. Calculator State
  const [calcQty, setCalcQty] = useState(25);
  const [calcProductType, setCalcProductType] = useState('set');
  const getCalcRate = () => {
    if (calcProductType === 'set') {
      if (calcQty >= 101) return { unit: 69.99, total: (calcQty * 69.99).toFixed(2) };
      if (calcQty >= 51) return { unit: 72.99, total: (calcQty * 72.99).toFixed(2) };
      if (calcQty >= 25) return { unit: 74.99, total: (calcQty * 74.99).toFixed(2) };
      return { unit: 79.99, total: (calcQty * 79.99).toFixed(2) };
    } else {
      if (calcQty >= 101) return { unit: 29.99, total: (calcQty * 29.99).toFixed(2) };
      if (calcQty >= 51) return { unit: 37.99, total: (calcQty * 37.99).toFixed(2) };
      if (calcQty >= 25) return { unit: 39.99, total: (calcQty * 39.99).toFixed(2) };
      return { unit: 41.99, total: (calcQty * 41.99).toFixed(2) };
    }
  };
  const calcRate = getCalcRate();

  const [gameDate, setGameDate] = useState('');
  const getApprovalCutoff = () => {
    if (!gameDate) return null;
    const d = new Date(gameDate);
    d.setDate(d.getDate() - 33);
    return d.toDateString();
  };

  // 5. Expandable FAQs (Section 12)
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q: `HOW MUCH DOES EACH ${activeSport} JERSEY COST PER PLAYER?`, a: `Game jerseys start at $41.99 for 1 to 24 pieces, down to $29.99 at 101+ quantities. Full sets (Jersey + Pant + Socks) range from $92.99 down to $79.99. Sublimated player names, numbers, and sponsor logos are 100% included.` },
    { q: `IS THERE A MINIMUM ORDER QUANTITY (MOQ)?`, a: `No minimum order. You can order as few as 1 jersey or outfit an entire league of 500+ players. Reorders for single new players throughout the season are honored at your team volume rate.` },
    { q: `HOW LONG DOES AN ORDER TAKE TO DELIVER?`, a: `Free 3D digital mockups are ready within 12 hours. Once you approve your artwork and size breakdown, standard factory production is 2 to 3 weeks, followed by 3 to 5 business days for express DHL/FedEx delivery.` },
    { q: `CAN YOU RUSH OUR ORDER FOR AN UPCOMING TOURNAMENT?`, a: `Yes! When factory capacity allows, we provide expedited rush production at no extra surcharge. Let us know your tournament date and our scheduling desk will lock in your slot.` },
    { q: `WHERE ARE YOUR UNIFORMS MANUFACTURED?`, a: `Direct from our state-of-the-art export manufacturing facility in Sialkot, Pakistan — the global capital of athletic goods. We eliminate middlemen markups.` },
    { q: `WILL THE UNIFORMS LOOK LIKE WHAT I PICTURED?`, a: `100% guaranteed. We produce digital color swatches and multi-angle 3D digital mockups. Nothing enters cutting or printing until you give explicit written approval.` },
    { q: `WHAT IF SOMETHING IS WRONG WITH OUR ORDER?`, a: `Our Free Remake Guarantee covers you. If there is any spelling error, incorrect number, wrong size, or factory defect, report it within 30 days and we will remake and ship the replacements free of charge.` },
    { q: `DO YOU ACCEPT SCHOOL PURCHASE ORDERS (POs)?`, a: `Yes. We work extensively with high schools, booster clubs, universities, and military recreation departments. We accept official Purchase Orders with Net 30 terms.` }
  ];

  // 6. Quote Form State (Section 14)
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);
  const { submitInquiry } = useCMS();
  const [quoteData, setQuoteData] = useState({
    fullName: '',
    email: '',
    phone: '',
    teamDetails: `Custom ${activeSport} Uniforms inquiry`
  });

  const handleHubQuoteSubmit = async (e) => {
    e.preventDefault();
    setQuoteSubmitting(true);
    try {
      await submitInquiry({
        name: quoteData.fullName,
        email: quoteData.email,
        phone: quoteData.phone,
        sport: activeSport,
        message: quoteData.teamDetails,
        source: 'sports_hub_quote_form',
      });
    } catch (err) {
      console.error('Error submitting inquiry:', err);
    } finally {
      setQuoteSubmitting(false);
      setQuoteSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">
      
      {/* ── 1. HERO SECTION (NO DUPLICATE SUB-NAVBAR) ───────────────────────── */}
      <section className="relative w-full bg-[var(--secondary)] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="w-[96%] max-w-[1800px] mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
            <span>NO MINIMUM ORDER • SIALKOT FACTORY DIRECT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-3 leading-tight">
            CUSTOM {activeSport} JERSEYS & UNIFORMS
          </h1>

          <p className="text-base sm:text-xl font-bold text-white/90 max-w-2xl mb-3">
            No minimum order. {activeSport} jerseys before your opening game.
          </p>

          <p className="text-xs sm:text-sm text-white/70 max-w-2xl font-light leading-relaxed mb-6">
            Jerseys and full sets for school, travel, and tournament leagues. Ready 2 to 3 weeks after you approve your free design proof. Custom {activeSport.toLowerCase()} jerseys starting from <strong>$34.99</strong> per player with sublimated names, numbers, and sponsor logos included.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-[11px] font-semibold text-white/80 mb-8">
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Check size={14} className="text-[var(--accent)]" /> Free mockup within 12 hours
            </span>
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Check size={14} className="text-[var(--accent)]" /> Mix items to reach your volume tier
            </span>
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Check size={14} className="text-[var(--accent)]" /> Free rush when production allows
            </span>
          </div>

          <a
            href="#quote-form"
            className="px-8 py-4 bg-[var(--accent)] text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-[3px] shadow-2xl hover:opacity-95 transition cursor-pointer"
          >
            GET MY FREE QUOTE
          </a>
          <span className="text-[10px] text-white/60 mt-3 font-light">
            A real production specialist replies within 1 hour during business hours. Nothing is made until you approve your design.
          </span>
        </div>
      </section>

      {/* ── 2. TRUST BAR STRIP (Full w-[96%] max-w-[1800px] alignment) ───────────────────── */}
      <TrustBar />

      {/* ── 3. JERSEY CUTS SHOWCASE: FULL BUTTON TO SLEEVELESS ─────────────── */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            AVAILABLE CUTS & SILHOUETTES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[var(--secondary)] mt-1">
            JERSEY CUTS: FULL BUTTON TO SLEEVELESS
          </h2>
          <p className="text-xs sm:text-sm text-[var(--secondary)]/60 max-w-xl mx-auto mt-2">
            Full button baseball jerseys and two-button jerseys start from $44.99 per player. V-neck and round neck jerseys start from $41.99.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {jerseyCuts.map((cut) => (
            <div
              key={cut.id || cut.slug || cut.name}
              onClick={() => onSelectProduct(cut)}
              className="group bg-white rounded-[5px] overflow-hidden border border-[var(--secondary)]/10 hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-xl flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[4/5] bg-neutral-50/80 overflow-hidden flex items-center justify-center p-4">
                <img
                  src={cut.image || cut.img}
                  alt={cut.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 bg-[var(--secondary)] text-white text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-[3px] shadow">
                  {cut.badge || 'TOP SELLER'}
                </span>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[var(--secondary)] group-hover:text-[var(--accent)] transition-colors leading-snug mb-1">
                    {cut.name}
                  </h3>
                  <p className="text-xs text-[var(--secondary)]/65 line-clamp-2 leading-relaxed">
                    {cut.desc || cut.fabric || 'Custom dye-sublimated moisture-wicking team jersey.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-bold block leading-none mb-1">
                      Starting at
                    </span>
                    <strong className="text-base sm:text-lg font-black text-[var(--secondary)] leading-none block">
                      {cut.price}
                    </strong>
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); onSelectProduct(cut); }}
                    className="px-3.5 py-2 bg-[var(--accent)] hover:bg-[var(--secondary)] text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm flex-shrink-0"
                  >
                    <span>View Details</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. FULL SETS WITH PANTS & SOCKS PRICING TABLE ─────────────────── */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            TRANSPARENT VOLUME PACKAGES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
            FULL SETS WITH PANTS AND SOCKS
          </h2>
          <p className="text-xs text-[var(--secondary)]/60 mt-1">
            Sublimated names, numbers, and logos included. Pro tackle twill available at +$5/player.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-[3px] border border-[var(--secondary)]/10 shadow-lg">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[var(--secondary)] text-white text-[11px] uppercase tracking-wider">
                <th className="py-4 px-6">Product Package</th>
                <th className="py-4 px-4">1 to 24</th>
                <th className="py-4 px-4">25 to 50</th>
                <th className="py-4 px-4">51 to 100</th>
                <th className="py-4 px-4 bg-[var(--accent)] text-white font-black">101+ (Best Tier)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--secondary)]/10 font-medium">
              <tr className="hover:bg-neutral-50">
                <td className="py-4 px-6 font-bold text-[var(--secondary)]">V-Neck & Round Neck Game Jerseys</td>
                <td className="py-4 px-4">$41.99</td>
                <td className="py-4 px-4">$39.99</td>
                <td className="py-4 px-4">$37.99</td>
                <td className="py-4 px-4 font-bold text-[var(--accent)]">$29.99</td>
              </tr>
              <tr className="hover:bg-neutral-50 bg-neutral-50/50">
                <td className="py-4 px-6 font-bold text-[var(--secondary)]">Full Button Uniform Sets (Jersey + Pant + Sock)</td>
                <td className="py-4 px-4">$92.99</td>
                <td className="py-4 px-4 text-emerald-600 font-semibold">$89.99</td>
                <td className="py-4 px-4 text-emerald-600 font-semibold">$84.99</td>
                <td className="py-4 px-4 font-bold text-[var(--accent)]">$79.99</td>
              </tr>
            </tbody>
          </table>
          <div className="p-4 bg-neutral-100 text-[11px] text-[var(--secondary)]/70 flex justify-between items-center border-t border-[var(--secondary)]/10">
            <span>✓ Mix jerseys, pants, and outerwear to reach your higher volume tier</span>
            <span>✓ Verified 2026 Factory Prices</span>
          </div>
        </div>
      </section>

      {/* ── 5. DUAL CALCULATOR SUITE ──────────────────────────────────────── */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Price Calculator */}
          <div className="bg-white rounded-[3px] border border-[var(--secondary)]/10 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-bold uppercase mb-2">
                <Calculator size={15} /> Instant Volume Estimator
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)] mb-4">
                Team Uniform Price Calculator
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">
                    Select Uniform Format:
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCalcProductType('set')}
                      className={`flex-1 py-2 text-xs font-bold uppercase rounded-[3px] border cursor-pointer ${
                        calcProductType === 'set' ? 'bg-[var(--secondary)] text-white' : 'bg-white text-neutral-600 border-neutral-300'
                      }`}
                    >
                      Complete Set (Jersey + Pant)
                    </button>
                    <button
                      onClick={() => setCalcProductType('jersey')}
                      className={`flex-1 py-2 text-xs font-bold uppercase rounded-[3px] border cursor-pointer ${
                        calcProductType === 'jersey' ? 'bg-[var(--secondary)] text-white' : 'bg-white text-neutral-600 border-neutral-300'
                      }`}
                    >
                      Jersey Only
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">
                    Roster Count: ({calcQty} players)
                  </label>
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
                    <span>10 Min</span>
                    <span>50</span>
                    <span>100</span>
                    <span>150+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-neutral-400 block">Total Estimate:</span>
                <span className="text-2xl font-black text-[var(--secondary)]">${calcRate.total}</span>
                <span className="text-[10px] text-emerald-600 font-bold block">(${calcRate.unit} / player)</span>
              </div>
              <a
                href="#quote-form"
                className="px-5 py-2.5 bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] hover:opacity-90 transition cursor-pointer"
              >
                Lock Quote
              </a>
            </div>
          </div>

          {/* Deadline Calculator */}
          <div className="bg-white rounded-[3px] border border-[var(--secondary)]/10 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-bold uppercase mb-2">
                <Calendar size={15} /> Production Scheduling
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)] mb-4">
                Deadline Calculator: Will Your Uniforms Arrive In Time?
              </h3>
              <p className="text-xs text-neutral-600 mb-4 leading-relaxed">
                Will your uniforms arrive before opening game day? Select your target in-hand date to discover your proof cut-off:
              </p>

              <div className="mb-4">
                <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">
                  Target In-Hand Date:
                </label>
                <input
                  type="date"
                  value={gameDate}
                  onChange={(e) => setGameDate(e.target.value)}
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-[3px] text-xs font-semibold focus:outline-none focus:border-[var(--accent)] cursor-pointer"
                />
              </div>

              {gameDate && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 leading-relaxed mb-4">
                  <strong>Approval Cut-Off:</strong> You must approve your 3D digital proof by <span className="underline font-black">{getApprovalCutoff()}</span> to ensure delivery before game day.
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-medium">12-Hour 3D mockups.</span>
              <a
                href="#quote-form"
                className="text-[var(--accent)] font-bold uppercase tracking-wider hover:underline"
              >
                Request Mockup Now &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. LONG EDITORIAL & BUYER GUIDES ───────────────────────────────── */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20 space-y-8">
        
        <div className="p-6 sm:p-8 bg-white rounded-[3px] border-l-4 border-l-[var(--accent)] border border-[var(--secondary)]/10 shadow-sm">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[var(--secondary)] mb-2">
            Youth {activeSport} Jerseys For Travel Teams
          </h3>
          <p className="text-xs sm:text-sm text-[var(--secondary)]/75 leading-relaxed mb-3">
            Youth sizes run YS to YXL and adult sizes XS to 4XL, so players of different ages fit into one order. A youth jersey costs the same as an adult jersey. When a new player joins mid-season, order one more jersey at your team's original volume tier rate.
          </p>
        </div>

        <div className="p-6 sm:p-8 bg-white rounded-[3px] border-l-4 border-l-[var(--secondary)] border border-[var(--secondary)]/10 shadow-sm">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[var(--secondary)] mb-2">
            High School & Athletic Programs
          </h3>
          <p className="text-xs sm:text-sm text-[var(--secondary)]/75 leading-relaxed mb-3">
            Athletic directors running varsity and JV often need home and away jerseys, pants, dugout warm-ups, and varsity jackets for the same season. Put them all on one quote. There are no setup fees or hidden charges, and we accept official school purchase orders (POs).
          </p>
        </div>

        <div className="p-6 sm:p-8 bg-white rounded-[3px] border-l-4 border-l-emerald-600 border border-[var(--secondary)]/10 shadow-sm">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[var(--secondary)] mb-2">
            Leagues: Many Teams, One United Order
          </h3>
          <p className="text-xs sm:text-sm text-[var(--secondary)]/75 leading-relaxed mb-3">
            Put every team in your youth league, rec league, or travel program on one single quote. Each team still gets its own distinct colors and team name. The total across all your teams sets the price tier, down to $29.99 per player at 101+.
          </p>
        </div>

        <div className="p-6 sm:p-8 bg-white rounded-[3px] border-l-4 border-l-amber-500 border border-[var(--secondary)]/10 shadow-sm">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[var(--secondary)] mb-2">
            Sublimated vs Tackle Twill Jerseys
          </h3>
          <p className="text-xs sm:text-sm text-[var(--secondary)]/75 leading-relaxed mb-3">
            Full dye-sublimation dyes your design into the fabric itself. There is no print layer on top to crack or peel, and you can use as many colors, gradients, and pinstripes as you want. Tackle twill embroidery sews raised letters and numbers onto the jersey for an authentic collegiate aesthetic.
          </p>
        </div>

      </section>

      {/* ── 7. DESIGN IDEAS TO START FROM ──────────────────────────────────── */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            INSPIRATION & PATTERNS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[var(--secondary)] mt-1">
            DESIGN IDEAS TO START FROM
          </h2>
          <p className="text-xs sm:text-sm text-[var(--secondary)]/60 max-w-xl mx-auto mt-2">
            These designs are grouped by jersey cut. Name the one you like in the notes on your quote form, and our designers will customize it with your colors and vector logo.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {mockupIdeas.map((mockup, idx) => (
            <div 
              key={mockup.id || mockup.slug || idx} 
              onClick={() => onSelectProduct(mockup)}
              className="group bg-white rounded-[3px] border border-[var(--secondary)]/10 hover:border-[var(--accent)]/50 overflow-hidden shadow-sm hover:shadow-lg transition p-3 text-center cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-[4/5] bg-neutral-50/70 rounded mb-2 overflow-hidden flex items-center justify-center p-2.5">
                <img 
                  src={mockup.image || mockup.img} 
                  alt={mockup.name} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" 
                  loading="lazy"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-[var(--accent)] block mb-1">
                  {mockup.cut || mockup.sport || activeSport}
                </span>
                <strong className="text-xs font-black text-[var(--secondary)] line-clamp-1 group-hover:text-[var(--accent)] transition-colors">
                  {mockup.name}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. PANTS, SIDELINE, TRAINING GEAR & BAGS ───────────────────────── */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            COMPLETE ROSTER OUTFITTING
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[var(--secondary)] mt-1">
            PANTS, SIDELINE WEAR, TRAINING GEAR AND BAGS
          </h2>
        </div>

        {/* Tab 1: Game Day Pants */}
        <div className="mb-12">
          <h3 className="text-base font-black uppercase text-[var(--secondary)] mb-4 pb-2 border-b border-[var(--secondary)]/15 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[var(--accent)] rounded-full" /> GAME DAY PANTS & COMPLETE PACKAGES
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {gameDayItems.map((item, idx) => (
              <div 
                key={item.id || item.slug || idx} 
                onClick={() => onSelectProduct(item)}
                className="group bg-white p-3 rounded-[3px] border border-[var(--secondary)]/10 hover:border-[var(--accent)]/50 transition shadow-sm flex flex-col justify-between cursor-pointer"
              >
                <div className="aspect-[4/5] bg-neutral-50/70 rounded mb-2 overflow-hidden flex items-center justify-center p-2.5">
                  <img 
                    src={item.image || item.img} 
                    alt={item.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" 
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-[var(--secondary)] line-clamp-1 group-hover:text-[var(--accent)] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-neutral-500 mb-2 line-clamp-1">{item.desc || item.fabric || 'Reinforced Athletic Fit'}</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                  <span className="text-xs font-black text-[var(--secondary)]">{item.price}</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onSelectProduct(item); }} 
                    className="text-[9px] font-bold text-[var(--accent)] uppercase hover:underline"
                  >
                    Details &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab 2: Sideline Outerwear */}
        <div className="mb-12">
          <h3 className="text-base font-black uppercase text-[var(--secondary)] mb-4 pb-2 border-b border-[var(--secondary)]/15 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[var(--accent)] rounded-full" /> SIDELINE HOODIES & JACKETS
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {sidelineItems.map((item, idx) => (
              <div 
                key={item.id || item.slug || idx} 
                onClick={() => onSelectProduct(item)}
                className="group bg-white p-3 rounded-[3px] border border-[var(--secondary)]/10 hover:border-[var(--accent)]/50 transition shadow-sm flex flex-col justify-between cursor-pointer"
              >
                <div className="aspect-[4/5] bg-neutral-50/70 rounded mb-2 overflow-hidden flex items-center justify-center p-2.5">
                  <img 
                    src={item.image || item.img} 
                    alt={item.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" 
                    loading="lazy"
                  />
                </div>
                <h4 className="text-xs font-black uppercase text-[var(--secondary)] line-clamp-1 mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {item.name}
                </h4>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                  <span className="text-xs font-black text-[var(--secondary)]">{item.price}</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onSelectProduct(item); }} 
                    className="text-[9px] font-bold text-[var(--accent)] uppercase hover:underline"
                  >
                    Details &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab 3: Accessories & Gear Bags */}
        <div>
          <h3 className="text-base font-black uppercase text-[var(--secondary)] mb-4 pb-2 border-b border-[var(--secondary)]/15 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[var(--accent)] rounded-full" /> TEAM ACCESSORIES & GEAR BAGS
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {accessoryItems.map((item, idx) => (
              <div 
                key={item.id || item.slug || idx} 
                onClick={() => onSelectProduct(item)}
                className="group bg-white p-3 rounded-[3px] border border-[var(--secondary)]/10 hover:border-[var(--accent)]/50 transition shadow-sm flex flex-col justify-between cursor-pointer"
              >
                <div className="aspect-[4/5] bg-neutral-50/70 rounded mb-2 overflow-hidden flex items-center justify-center p-2.5">
                  <img 
                    src={item.image || item.img} 
                    alt={item.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" 
                    loading="lazy"
                  />
                </div>
                <h4 className="text-xs font-black uppercase text-[var(--secondary)] line-clamp-1 mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {item.name}
                </h4>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                  <span className="text-xs font-black text-[var(--secondary)]">{item.price}</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onSelectProduct(item); }} 
                    className="text-[9px] font-bold text-[var(--accent)] uppercase hover:underline"
                  >
                    Details &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── 9. SIZING & FIT ────────────────────────────────────────────────── */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            PERFECT FIT GUARANTEE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
            SIZING, FIT & PLAYER COMFORT
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Youth YS through Adult 4XL. Custom tailored lengths available at zero charge.
          </p>
        </div>

        <div className="bg-white rounded-[3px] border border-[var(--secondary)]/10 p-6 sm:p-8 shadow-md overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[var(--secondary)] text-white uppercase text-[10px] tracking-wider">
                <th className="py-3 px-4">Size</th>
                <th className="py-3 px-4">Chest (Inches)</th>
                <th className="py-3 px-4">Waist (Inches)</th>
                <th className="py-3 px-4">Hip (Inches)</th>
                <th className="py-3 px-4">Player Fit Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 font-medium text-neutral-700">
              <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">YS / YM</td><td className="py-3 px-4">26 - 30"</td><td className="py-3 px-4">22 - 25"</td><td className="py-3 px-4">26 - 30"</td><td className="py-3 px-4 text-neutral-500">Youth Rookie</td></tr>
              <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">YL / YXL</td><td className="py-3 px-4">32 - 34"</td><td className="py-3 px-4">26 - 28"</td><td className="py-3 px-4">32 - 34"</td><td className="py-3 px-4 text-neutral-500">Junior High Roster</td></tr>
              <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">S / M</td><td className="py-3 px-4">36 - 40"</td><td className="py-3 px-4">30 - 34"</td><td className="py-3 px-4">36 - 40"</td><td className="py-3 px-4 text-neutral-500">High School Varsity</td></tr>
              <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">L / XL</td><td className="py-3 px-4">42 - 46"</td><td className="py-3 px-4">36 - 40"</td><td className="py-3 px-4">42 - 46"</td><td className="py-3 px-4 text-neutral-500">College / Adult Pro</td></tr>
              <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">2XL - 4XL</td><td className="py-3 px-4">48 - 58"</td><td className="py-3 px-4">42 - 52"</td><td className="py-3 px-4">48 - 58"</td><td className="py-3 px-4 text-neutral-500">Heavyweight Cut</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 10. YOUR ORDER AT A GLANCE TABLE ───────────────────────────────── */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <h3 className="text-xl font-black uppercase text-[var(--secondary)] mb-4">
          YOUR ORDER AT A GLANCE
        </h3>
        <div className="bg-white rounded-[3px] border border-[var(--secondary)]/10 overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-neutral-100">
              <tr className="bg-neutral-50/50"><td className="py-3 px-4 font-bold text-[var(--secondary)] w-1/3">Price Per Player</td><td className="py-3 px-4 text-neutral-700">Jerseys from $41.99 (1-24) down to $29.99 (101+). Names, numbers, and logos included.</td></tr>
              <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">Minimum Order</td><td className="py-3 px-4 text-neutral-700">None. Order 1 jersey or 500 sets for a whole league.</td></tr>
              <tr className="bg-neutral-50/50"><td className="py-3 px-4 font-bold text-[var(--secondary)]">Production Timing</td><td className="py-3 px-4 text-neutral-700">Ready 2 to 3 weeks after you approve your design, plus 3 to 5 days express shipping.</td></tr>
              <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">3D Mockup</td><td className="py-3 px-4 text-neutral-700">Free, within 12 hours, with unlimited changes.</td></tr>
              <tr className="bg-neutral-50/50"><td className="py-3 px-4 font-bold text-[var(--secondary)]">Rush Orders</td><td className="py-3 px-4 text-neutral-700">Free on request when factory production allows.</td></tr>
              <tr><td className="py-3 px-4 font-bold text-[var(--secondary)]">Origin</td><td className="py-3 px-4 text-neutral-700">Sialkot Factory Direct. Quality guaranteed.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 11. QUESTIONS COACHES ASK (EXPANDABLE FAQS) ────────────────────── */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            HELP CENTER
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
            QUESTIONS COACHES ASK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-white rounded-[3px] border border-[var(--secondary)]/10 overflow-hidden shadow-sm">
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

      {/* ── 12. RED BANNER CALL TO ACTION ──────────────────────────────────── */}
      <section className="w-full bg-[var(--accent)] text-white py-12 text-center">
        <div className="w-[96%] max-w-[1800px] mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-2">
            READY TO OUTFIT YOUR {activeSport} TEAM?
          </h2>
          <p className="text-xs sm:text-sm text-white/90 mb-6">
            No minimum order. Free professional 3D digital mockup within 12 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#quote-form" className="px-8 py-3.5 bg-[var(--secondary)] text-white font-black text-xs uppercase tracking-widest rounded-[3px] hover:opacity-90 shadow-xl cursor-pointer">
              GET MY FREE QUOTE
            </a>
            <button onClick={() => onNavigateInquiry(`Urgent ${activeSport} Inquiry`)} className="px-8 py-3.5 bg-white text-[var(--secondary)] font-black text-xs uppercase tracking-widest rounded-[3px] hover:bg-neutral-100 shadow-xl cursor-pointer">
              TALK TO PRODUCTION DESK
            </button>
          </div>
        </div>
      </section>

      {/* ── 13. TWO-COLUMN QUOTE MACHINE ───────────────────────────────────── */}
      <section id="quote-form" className="w-full bg-[var(--secondary)] text-white py-16 sm:py-24 border-t border-white/10">
        <div className="w-[96%] max-w-[1800px] mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-2">
              PLAN YOUR {activeSport} ORDER WITH HAMLO SPORTS
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto">
              Send us your team colors, sizes, and deadline. Our production team will plan the order with you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left: Talk to a Real Person */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black uppercase text-white">
                TALK TO A REAL PERSON
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                A real person replies within 1 hour during business hours (Monday to Saturday, 9am to 6pm PKT / ET). You'll get a confirmation email in seconds.
              </p>

              <div className="p-4 bg-white/5 border border-white/10 rounded-[3px] flex items-center gap-3">
                <Clock size={24} className="text-[var(--accent)] flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-black uppercase text-white">1-Hour Response</h4>
                  <span className="text-[10px] text-white/60">During business hours</span>
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-[3px] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[var(--accent)]" />
                  <span className="text-xs font-bold text-white">Direct Production Hotline</span>
                </div>
                <span className="text-xs font-black text-[var(--accent)]">+92 (300) 000-0000</span>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-[3px] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[var(--accent)]" />
                  <span className="text-xs font-bold text-white">Factory Sales Email</span>
                </div>
                <span className="text-xs text-white/80">export@hamlosports.com</span>
              </div>

              {/* Badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-semibold text-white/80">
                <span className="flex items-center gap-1.5"><Check size={14} className="text-[var(--accent)]" /> No Minimum Order</span>
                <span className="flex items-center gap-1.5"><Check size={14} className="text-[var(--accent)]" /> Free 3D Mockups</span>
                <span className="flex items-center gap-1.5"><Check size={14} className="text-[var(--accent)]" /> 2 to 3 Weeks Delivery</span>
                <span className="flex items-center gap-1.5"><Check size={14} className="text-[var(--accent)]" /> Free Remake Guarantee</span>
              </div>
            </div>

            {/* Right: The High-Converting Quote Form */}
            <div className="bg-white rounded-[3px] p-6 sm:p-8 text-[var(--secondary)] shadow-2xl">
              <h3 className="text-xl font-black uppercase text-[var(--secondary)] mb-1">
                GET YOUR FREE QUOTE OR SAMPLE
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Quote requests and sample requests both go here. A real person replies within 1 hour.
              </p>

              {quoteSubmitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded border border-emerald-300">
                  <Check size={40} className="text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-lg font-black uppercase text-emerald-900 mb-1">Quote Dispatched!</h4>
                  <p className="text-xs text-emerald-800">
                    Thank you {quoteData.fullName}! Your free 3D digital proof and factory pricing breakdown have been queued.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleHubQuoteSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Coach David Miller"
                      value={quoteData.fullName}
                      onChange={(e) => setQuoteData({ ...quoteData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-[3px] text-xs font-medium focus:border-[var(--accent)] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="coach@team.com"
                        value={quoteData.email}
                        onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-[3px] text-xs font-medium focus:border-[var(--accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={quoteData.phone}
                        onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-[3px] text-xs font-medium focus:border-[var(--accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Tell Us About Your Team *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="What sport? How many players? Want a free sample? Tell us what you're looking for..."
                      value={quoteData.teamDetails}
                      onChange={(e) => setQuoteData({ ...quoteData, teamDetails: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-[3px] text-xs font-medium focus:border-[var(--accent)] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={quoteSubmitting}
                    className="w-full py-4 bg-[var(--accent)] disabled:opacity-50 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-[3px] hover:opacity-95 shadow-xl cursor-pointer"
                  >
                    {quoteSubmitting ? 'SUBMITTING REQUEST...' : 'GET MY FREE QUOTE →'}
                  </button>

                  <span className="text-[10px] text-neutral-400 text-center block pt-1">
                    A real person will respond within 1 hour during business hours.
                  </span>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
