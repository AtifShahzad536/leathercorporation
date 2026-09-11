import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Building2, Globe, Award, ShieldCheck, 
  Sparkles, Mail, Phone, MapPin, Users, HeartHandshake, MessageSquare,
  Leaf, Newspaper, CheckCircle, Clock, Truck, Shield
} from 'lucide-react';

export default function AboutPage({ 
  initialTab = 'story',
  onNavigateHome = () => {}, 
  onNavigateProducts = () => {}, 
  onNavigateInquiry = () => {} 
}) {
  const [activeTab, setActiveTab] = useState('story'); 

  // Map category names or hash query to valid tab keys
  const mapTabKey = (tab) => {
    if (!tab) return 'story';
    const lower = tab.toLowerCase();
    if (lower.includes('about') || lower.includes('story') || lower.includes('heritage')) return 'story';
    if (lower.includes('tannery') || lower.includes('craft')) return 'tannery';
    if (lower.includes('sustainab') || lower.includes('lwg') || lower.includes('csr') || lower.includes('enviroment')) return 'sustainability';
    if (lower.includes('export') || lower.includes('global')) return 'exports';
    if (lower.includes('press') || lower.includes('news')) return 'press';
    if (lower.includes('sourc') || lower.includes('ethical') || lower.includes('charity')) return 'sourcing';
    if (lower.includes('contact') || lower.includes('headquarter')) return 'contact';
    return lower;
  };

  useEffect(() => {
    const target = mapTabKey(initialTab);
    setActiveTab(target);
  }, [initialTab]);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    window.location.hash = `about?tab=${tabKey}`;
  };

  const milestones = [
    { year: '1947', title: 'Founding of Artisanal Tannery', desc: 'Established as an artisanal hide tanning and hand-tooling workshop dedicated to full-grain cowhides.' },
    { year: '1975', title: 'European Motorcycle Apparel Boom', desc: 'Pioneered custom double-rider biker jacket manufacturing for European motorcycle clubs and racing teams.' },
    { year: '2005', title: 'LWG Modernization & Laser Cutting', desc: 'Integrated CNC laser pattern cutting and an eco-friendly closed-loop effluent treatment plant.' },
    { year: '2025', title: 'Global Export Leader in 48+ Nations', desc: 'Trusted manufacturing atelier for luxury moto brands, bespoke ateliers, and private label apparel lines globally.' }
  ];

  const stats = [
    { number: '1947', label: 'FOUNDING YEAR' },
    { number: '48+', label: 'EXPORT COUNTRIES' },
    { number: '250K+', label: 'JACKETS CRAFTED' },
    { number: '100%', label: 'GENUINE LEATHER' }
  ];

  const exportCountries = [
    { region: 'North America', markets: 'United States, Canada', share: '38%' },
    { region: 'Western Europe', markets: 'Germany, UK, Italy, France, Spain', share: '32%' },
    { region: 'Asia-Pacific', markets: 'Japan, Australia, South Korea', share: '18%' },
    { region: 'Middle East & GCC', markets: 'UAE, Saudi Arabia, Qatar', share: '12%' }
  ];

  const pressNews = [
    {
      date: 'January 2026',
      tag: 'INDUSTRY AWARD',
      title: 'Leader Corporation Awarded LWG Gold Excellence in Environmental Tanning',
      desc: 'Recognized for 85% closed-loop industrial water recycling and zero-hazardous chemical discharge compliance.'
    },
    {
      date: 'November 2025',
      tag: 'GLOBAL TRADE',
      title: 'Expansion of Automated CNC Laser Cutting Line for OEM Brands',
      desc: 'Upgraded high-precision nesting lasers delivering 0.1mm tolerance for international motorcycle apparel lines.'
    },
    {
      date: 'August 2025',
      tag: 'INNOVATION',
      title: 'Ultra-Lightweight Kangaroo Racing Leather Suit Certified for FIM Tracks',
      desc: 'High-tensile kangaroo hide patterns validated for maximum tear strength and aerodynamic airflow.'
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen text-[var(--secondary)] py-8">
      <div className="w-[92%] mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[var(--secondary)]/60">
          <button onClick={onNavigateHome} className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft size={12} /> HOME
          </button>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">ABOUT LEADER CORPORATION</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[var(--secondary)] rounded-[3px] p-8 md:p-14 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
              <Sparkles size={14} /> 75+ YEARS OF ARTISANAL MASTERY
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">
              THE HERITAGE OF LEADER LEATHER ATELIER
            </h1>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl">
              From our heritage roots in 1947 to becoming a premier global export partner, Leader Corporation represents the pinnacle of luxury leather apparel, motorcycle armor engineering, and bespoke tailoring.
            </p>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-[3px] border border-gray-200 shadow-sm overflow-x-auto no-scrollbar">
          {[
            { key: 'story', label: 'About & Heritage' },
            { key: 'tannery', label: 'Our Tannery & Craft' },
            { key: 'sustainability', label: 'LWG Sustainability' },
            { key: 'exports', label: 'Global Exports' },
            { key: 'press', label: 'Press & News' },
            { key: 'sourcing', label: 'Ethical Sourcing' },
            { key: 'contact', label: 'Contact Us' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.key
                  ? 'bg-[var(--secondary)] text-white shadow-sm'
                  : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── TAB 1: STORY & HERITAGE ──────────────────────────────────────── */}
        {activeTab === 'story' && (
          <div className="space-y-8">
            {/* Numerical Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, idx) => (
                <div key={idx} className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 text-center shadow-sm">
                  <span className="text-2xl sm:text-4xl font-black text-[var(--accent)] block tracking-tight">
                    {s.number}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--secondary)]/70 mt-1 block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Historical Milestone Timeline */}
            <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-10 shadow-sm space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <span className="text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                  CHRONICLE OF EXCELLENCE
                </span>
                <h3 className="text-lg sm:text-xl font-black uppercase text-[var(--secondary)]">
                  75+ Years of Leather Evolution & Global Trust
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {milestones.map((m, idx) => (
                  <div key={idx} className="p-5 bg-gray-50 rounded-[3px] border border-gray-200 space-y-2 relative">
                    <span className="text-xs font-black text-[var(--accent)] bg-white px-2 py-0.5 rounded-[2px] border border-gray-200 inline-block">
                      {m.year}
                    </span>
                    <h4 className="text-xs font-black uppercase text-[var(--secondary)]">{m.title}</h4>
                    <p className="text-[11px] text-[var(--secondary)]/75 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: OUR TANNERY & CRAFT ───────────────────────────────────── */}
        {activeTab === 'tannery' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-10 shadow-sm">
            <div className="space-y-4">
              <span className="text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                IN-HOUSE DRUM DYEING & PATTERNMAKING
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)]">
                Master Craftsmen of Luxury Leather Jackets & Motorcycling Apparel
              </h2>
              <p className="text-xs sm:text-sm text-[var(--secondary)]/80 leading-relaxed">
                Unlike ordinary garment factories that purchase off-the-shelf leather hides, Leader Corporation operates fully integrated tanning and drum-dyeing drums. This allows us to control the exact thickness (from 0.7mm buttery lambskin to 1.3mm heavyweight race cowhide), tensile tear strength, and rich aniline color penetration from day one.
              </p>
              <p className="text-xs sm:text-sm text-[var(--secondary)]/80 leading-relaxed">
                Every seam is sewn with heavy bonded nylon threads, stress-tested hardware from YKK, and ergonomically sculpted panels that drape effortlessly on the body.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigateProducts()}
                  className="px-5 py-2.5 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors cursor-pointer"
                >
                  Explore Catalog
                </button>
                <button
                  onClick={() => onNavigateInquiry('Factory Tour & Bespoke Commission')}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-[var(--secondary)] text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors cursor-pointer"
                >
                  B2B OEM Inquiry
                </button>
              </div>
            </div>

            <div className="relative h-80 sm:h-96 rounded-[3px] overflow-hidden bg-gray-200 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop" 
                alt="Leader Tannery & Master Craftsmen" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Leader Atelier Tannery • Master Hand Tailoring Workshop
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: LWG SUSTAINABILITY ────────────────────────────────────── */}
        {activeTab === 'sustainability' && (
          <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[3px] bg-emerald-700 text-white flex items-center justify-center">
                <Leaf size={22} />
              </div>
              <div>
                <span className="text-[9.5px] font-bold text-emerald-700 uppercase tracking-wider block">
                  ECO-FRIENDLY ENVIRONMENTAL FOOTPRINT
                </span>
                <h3 className="text-lg font-black uppercase text-[var(--secondary)]">
                  LWG Gold Tannery Standards & Closed-Loop Recycling
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--secondary)]/80 leading-relaxed max-w-3xl">
              We believe luxury leathercraft must coexist harmoniously with environmental responsibility. Our tannery features a closed-loop effluent treatment plant (ETP), solar roasting facilities, and biodegradable vegetable tanning options.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 bg-emerald-50/60 rounded-[3px] border border-emerald-200 space-y-2">
                <h4 className="text-xs font-black uppercase text-emerald-900">85% Water Recycled</h4>
                <p className="text-xs text-emerald-800/80">Biological and tertiary filtration cleans wastewater for safe re-use in tanning cycles.</p>
              </div>
              <div className="p-5 bg-emerald-50/60 rounded-[3px] border border-emerald-200 space-y-2">
                <h4 className="text-xs font-black uppercase text-emerald-900">Zero Toxic AZO Dyes</h4>
                <p className="text-xs text-emerald-800/80">Full REACH EU compliance with non-toxic, skin-safe drum dyes.</p>
              </div>
              <div className="p-5 bg-emerald-50/60 rounded-[3px] border border-emerald-200 space-y-2">
                <h4 className="text-xs font-black uppercase text-emerald-900">Solar Thermal Drums</h4>
                <p className="text-xs text-emerald-800/80">Renewable energy arrays provide zero-carbon drying for raw hides.</p>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 4: GLOBAL EXPORTS ────────────────────────────────────────── */}
        {activeTab === 'exports' && (
          <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[3px] bg-[var(--secondary)] text-white flex items-center justify-center">
                <Globe size={22} />
              </div>
              <div>
                <span className="text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                  INTERNATIONAL FREIGHT & LOGISTICS
                </span>
                <h3 className="text-lg font-black uppercase text-[var(--secondary)]">
                  Exporting to 48+ Nations Worldwide
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--secondary)]/80 leading-relaxed max-w-3xl">
              We ship sea containers and expedited air cargo shipments to leading brands, distributors, and racing clubs with complete DDP, FOB, and CIF terms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {exportCountries.map((c, idx) => (
                <div key={idx} className="p-5 bg-gray-50 rounded-[3px] border border-gray-200 space-y-1.5">
                  <span className="text-xs font-black text-[var(--accent)]">{c.share} Global Volume</span>
                  <h4 className="text-xs font-black uppercase text-[var(--secondary)]">{c.region}</h4>
                  <p className="text-[11px] text-gray-500">{c.markets}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 5: PRESS & NEWS ─────────────────────────────────────────── */}
        {activeTab === 'press' && (
          <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[3px] bg-[var(--secondary)] text-white flex items-center justify-center">
                <Newspaper size={22} />
              </div>
              <div>
                <span className="text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                  MEDIA & INDUSTRY RECOGNITION
                </span>
                <h3 className="text-lg font-black uppercase text-[var(--secondary)]">
                  Press Releases & Atelier Announcements
                </h3>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {pressNews.map((item, idx) => (
                <div key={idx} className="p-5 bg-gray-50 rounded-[3px] border border-gray-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-[var(--accent)] bg-red-50 px-2 py-0.5 rounded-[2px] border border-[var(--accent)]/20 uppercase">
                      {item.tag}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                  </div>
                  <h4 className="text-sm font-black uppercase text-[var(--secondary)]">{item.title}</h4>
                  <p className="text-xs text-[var(--secondary)]/75 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 6: ETHICAL SOURCING ─────────────────────────────────────── */}
        {activeTab === 'sourcing' && (
          <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[3px] bg-[var(--secondary)] text-white flex items-center justify-center">
                <HeartHandshake size={22} />
              </div>
              <div>
                <span className="text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                  FAIR LABOR & RESPONSIBLE SOURCING
                </span>
                <h3 className="text-lg font-black uppercase text-[var(--secondary)]">
                  Ethical Supply Chain & Human Rights Assurance
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-gray-50 rounded-[3px] border border-gray-200 space-y-2">
                <h4 className="text-xs font-black uppercase text-[var(--secondary)] flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-emerald-600" /> Zero Child Labor
                </h4>
                <p className="text-xs text-gray-600">Strict 18+ age verification and biological ID checks across all manufacturing and tannery divisions.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-[3px] border border-gray-200 space-y-2">
                <h4 className="text-xs font-black uppercase text-[var(--secondary)] flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-emerald-600" /> Fair Living Wages & Healthcare
                </h4>
                <p className="text-xs text-gray-600">Comprehensive health insurance, ergonomic climate-controlled workstations, and fair compensation.</p>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 7: CONTACT US ───────────────────────────────────────────── */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 shadow-sm space-y-3">
                <div className="w-9 h-9 rounded-[3px] bg-[var(--secondary)] text-white flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <h4 className="text-xs font-black uppercase text-[var(--secondary)]">Headquarters & Tannery</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Leader Corporation Industrial Park, Tannery Road, Sialkot 51310, Pakistan.
                </p>
              </div>

              <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 shadow-sm space-y-3">
                <div className="w-9 h-9 rounded-[3px] bg-[var(--secondary)] text-white flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <h4 className="text-xs font-black uppercase text-[var(--secondary)]">Export & Corporate Email</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  exports@leadercorporation.com<br />
                  info@leadercorporation.com
                </p>
              </div>

              <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 shadow-sm space-y-3">
                <div className="w-9 h-9 rounded-[3px] bg-emerald-700 text-white flex items-center justify-center">
                  <MessageSquare size={18} />
                </div>
                <h4 className="text-xs font-black uppercase text-[var(--secondary)]">Direct WhatsApp Desk</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  +92 (300) 000-0000<br />
                  Available 24/7 for International Buyers
                </p>
                <a
                  href="https://wa.me/923000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline inline-block pt-1"
                >
                  Start Instant Chat &rarr;
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-8 shadow-sm">
              <h3 className="text-sm font-black uppercase text-[var(--secondary)] mb-4">Send a Direct Message to Our Factory HQ</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Message dispatched to Leader Corporation HQ.'); }} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input required type="text" placeholder="Your Name" className="px-3 py-2 text-xs border border-gray-300 rounded-[3px]" />
                <input required type="email" placeholder="Your Email" className="px-3 py-2 text-xs border border-gray-300 rounded-[3px]" />
                <textarea rows="3" placeholder="How can we assist you?" className="col-span-1 sm:col-span-2 px-3 py-2 text-xs border border-gray-300 rounded-[3px]" />
                <button type="submit" className="col-span-1 sm:col-span-2 py-3 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white text-xs font-bold uppercase rounded-[3px] transition-colors cursor-pointer">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
