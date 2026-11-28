import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Building2, Globe, Award, ShieldCheck, 
  Sparkles, Mail, Phone, MapPin, Users, HeartHandshake, MessageSquare,
  Leaf, Newspaper, CheckCircle, Clock, Truck, Shield, Layers, Zap
} from 'lucide-react';
import SEO from '../common/SEO';

export default function AboutPage({ 
  initialTab = 'story',
  onTabChange = () => {},
  onNavigateHome = () => {}, 
  onNavigateProducts = () => {}, 
  onNavigateInquiry = () => {} 
}) {
  // Map category names or hash query to valid tab keys
  const mapTabKey = (tab) => {
    if (!tab) return 'story';
    const lower = tab.toLowerCase();
    if (lower.includes('ethics') || lower.includes('ethical') || lower.includes('sourc') || lower.includes('charity')) return 'ethics';
    if (lower.includes('sublimat') || lower.includes('tannery') || lower.includes('craft') || lower.includes('tech') || lower.includes('lab')) return 'tech';
    if (lower.includes('sustainab') || lower.includes('oeko') || lower.includes('certified') || lower.includes('csr') || lower.includes('enviroment')) return 'sustainability';
    if (lower.includes('export') || lower.includes('global')) return 'exports';
    if (lower.includes('press') || lower.includes('news')) return 'press';
    if (lower.includes('contact') || lower.includes('headquarter')) return 'contact';
    if (lower.includes('about') || lower.includes('story') || lower.includes('heritage') || lower.includes('factory')) return 'story';
    return lower;
  };

  const [activeTab, setActiveTab] = useState(() => mapTabKey(initialTab)); 

  useEffect(() => {
    const target = mapTabKey(initialTab);
    setActiveTab(target);
  }, [initialTab]);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    onTabChange(tabKey);
    window.history.pushState({}, '', `/about/?tab=${tabKey}`);
  };

  const milestones = [
    { year: '1994', title: 'Founding of Sialkot Athletic Atelier', desc: 'Established in Sialkot, Pakistan, crafting heavy drill-cotton uniforms and hand-stitched athletic equipment.' },
    { year: '2006', title: 'Japanese Industrial Dye-Sublimation', desc: 'Introduced high-definition wide-format sublimation printers, eliminating heavy screen prints for breathable performance wear.' },
    { year: '2015', title: 'Laser Tackle Twill & Collegiate Expansion', desc: 'Integrated multi-head laser cutting systems to manufacture authentic zigzag tackle twill uniforms for US & European teams.' },
    { year: '2026', title: 'HAMLO SPORTS Factory Direct to 40+ Nations', desc: 'Over 296 verified product cuts across 12 athletic disciplines, serving high schools, colleges, and club directors with zero minimum order quantities.' }
  ];

  const stats = [
    { number: '1994', label: 'FOUNDING YEAR' },
    { number: '40+', label: 'EXPORT COUNTRIES' },
    { number: '500K+', label: 'UNIFORMS PRODUCED' },
    { number: '100%', label: 'OEKO-TEX CERTIFIED' }
  ];

  const exportCountries = [
    { region: 'North America', markets: 'United States, Canada', share: '45%' },
    { region: 'Western Europe', markets: 'United Kingdom, Germany, France, Netherlands', share: '30%' },
    { region: 'Australia & NZ', markets: 'Australia, New Zealand', share: '15%' },
    { region: 'Middle East & Asia', markets: 'UAE, Qatar, Japan, South Korea', share: '10%' }
  ];

  const pressNews = [
    {
      date: 'February 2026',
      tag: 'TECH UPGRADE',
      title: 'HAMLO SPORTS Expands 12-Hour 3D Digital Mockup Engine for Coaches',
      desc: 'Enabling athletic directors and league organizers to approve photorealistic 3D uniform renders, roster spelling, and Pantone color accuracy before fabric cutting.'
    },
    {
      date: 'December 2025',
      tag: 'SUSTAINABILITY',
      title: 'Facility Attains OEKO-TEX Standard 100 Eco-Passport for All Sublimation Inks',
      desc: 'Third-party validation certifying that 100% of inks and synthetic fibers used in HAMLO SPORTS garments are non-toxic, skin-safe, and free from heavy metals.'
    },
    {
      date: 'August 2025',
      tag: 'LOGISTICS',
      title: 'Direct DDP Express Corridors Launched for US High Schools & Travel Clubs',
      desc: 'Eliminates all import tariffs and customs clearance delays with guaranteed 2–3 week doorstep delivery across continental USA.'
    }
  ];

  return (
    <>
      <SEO
        title="About HAMLO SPORTS - Sialkot Manufacturing Heritage"
        description="Learn about our three-decade sporting goods heritage in Sialkot, Pakistan, ethical manufacturing, OEKO-TEX certified sublimation, and direct-to-team values."
        canonical="/about-us/"
        keywords="about hamlo sports, sialkot sportswear manufacturer, custom uniform factory, ethical athletic manufacturing"
      />
      <div className="w-full bg-[#f8f9fa] min-h-screen text-[var(--secondary)] py-8">
      <div className="w-[96%] max-w-[1800px] mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[var(--secondary)]/60">
          <button onClick={onNavigateHome} className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft size={12} /> HOME
          </button>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">ABOUT HAMLO SPORTS</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[var(--secondary)] rounded-[4px] p-8 md:p-14 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
              <Sparkles size={14} /> THREE DECADES OF ATHLETIC EXCELLENCE
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-3">
              ABOUT HAMLO SPORTS
            </h1>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl font-light">
              Since 1994, HAMLO SPORTS has engineered, manufactured, and exported custom sublimated athletic uniforms and teamwear from Sialkot, Pakistan to champions, collegiate programs, and sports leagues across the globe.
            </p>
          </div>
          <div className="absolute right-[-40px] bottom-[-40px] opacity-10 pointer-events-none">
            <Building2 size={340} />
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[var(--secondary)]/15 pb-4">
          {[
            { key: 'story', label: 'OUR STORY & TIMELINE' },
            { key: 'tech', label: 'SUBLIMATION LAB' },
            { key: 'sustainability', label: 'SUSTAINABILITY' },
            { key: 'ethics', label: 'FACTORY ETHICS' },
            { key: 'exports', label: 'GLOBAL EXPORTS' },
            { key: 'press', label: 'PRESS & NEWS' },
            { key: 'contact', label: 'CONTACT FACTORY' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={`px-4 py-2.5 rounded-[3px] text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-[var(--secondary)] text-white shadow-md'
                  : 'bg-white text-[var(--secondary)]/70 hover:bg-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: STORY & STATS */}
        {activeTab === 'story' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 text-center shadow-sm">
                  <span className="text-3xl sm:text-4xl font-black text-[var(--secondary)] font-mono block mb-1">
                    {s.number}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-[var(--accent)] uppercase">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-6">
              <h2 className="text-2xl font-black uppercase text-[var(--secondary)]">Manufacturing Heritage & Milestones</h2>
              <div className="space-y-6 border-l-2 border-[var(--accent)] pl-6">
                {milestones.map((m, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[var(--accent)] border-2 border-white shadow" />
                    <span className="text-xs font-mono font-bold text-[var(--accent)] block">{m.year}</span>
                    <h3 className="text-base font-bold uppercase text-[var(--secondary)] mt-0.5">{m.title}</h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed max-w-2xl">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TECH */}
        {activeTab === 'tech' && (
          <div className="bg-white p-8 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-6">
            <h2 className="text-2xl font-black uppercase text-[var(--secondary)] mb-2">Sialkot Sublimation & Engineering Lab</h2>
            <p className="text-xs text-[var(--secondary)]/75 leading-relaxed max-w-3xl">
              Our integrated manufacturing campus in Sialkot combines warp knitting, laser cutting, automated multi-head embroidery, and wide-format dye sublimation under one roof. We test every production batch for burst strength, stretch recovery, and wash durability before dispatch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
              <div className="p-5 border border-neutral-200 rounded-[3px]">
                <Zap size={22} className="text-[var(--accent)] mb-2" />
                <h3 className="font-bold text-sm uppercase text-[var(--secondary)] mb-1">12-Hour Mockup Turnaround</h3>
                <p className="text-xs text-neutral-600">Digital artwork teams render accurate team crests, player names, and Pantone swatches within 12 hours.</p>
              </div>
              <div className="p-5 border border-neutral-200 rounded-[3px]">
                <ShieldCheck size={22} className="text-[var(--accent)] mb-2" />
                <h3 className="font-bold text-sm uppercase text-[var(--secondary)] mb-1">4-Thread Coverstitch Seams</h3>
                <p className="text-xs text-neutral-600">Reinforced flatlock stitching ensures zero chafing and extreme tear resistance in high-contact sports.</p>
              </div>
              <div className="p-5 border border-neutral-200 rounded-[3px]">
                <Layers size={22} className="text-[var(--accent)] mb-2" />
                <h3 className="font-bold text-sm uppercase text-[var(--secondary)] mb-1">Zero Minimum Orders (No MOQ)</h3>
                <p className="text-xs text-neutral-600">Single athlete replacements or 5,000-piece league programs receive the exact same factory-direct quality.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SUSTAINABILITY */}
        {activeTab === 'sustainability' && (
          <div className="bg-white p-8 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-4">
            <h2 className="text-2xl font-black uppercase text-[var(--secondary)]">Eco-Friendly Sportswear Production</h2>
            <p className="text-xs text-[var(--secondary)]/75 leading-relaxed max-w-3xl">
              Dye-sublimation produces zero hazardous effluent runoff compared to legacy wet-dye processes. We use OEKO-TEX certified water-based inks and offer recycled polyester (rPET) options derived from post-consumer recycled plastic bottles.
            </p>
          </div>
        )}

        {/* TAB 4: FACTORY ETHICS */}
        {activeTab === 'ethics' && (
          <div className="bg-white p-8 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-6">
            <div className="max-w-3xl">
              <span className="text-[10px] font-mono text-[var(--accent)] font-bold tracking-widest uppercase">Ethical Manufacturing Principles</span>
              <h2 className="text-2xl font-black uppercase text-[var(--secondary)] mt-1">Fair Labor, Worker Welfare & Zero Child Labor</h2>
              <p className="text-xs text-[var(--secondary)]/75 leading-relaxed mt-2">
                HAMLO SPORTS operates on uncompromising ethical principles across our Sialkot manufacturing facilities. We ensure fair living wages, 48-hour maximum work weeks, comprehensive healthcare coverage, and modern climate-controlled working conditions for all master cutters, sublimation technicians, and stitching staff.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-5 bg-neutral-50 rounded-[4px] border border-neutral-200">
                <ShieldCheck className="text-[var(--accent)] mb-2" size={24} />
                <h3 className="font-bold text-sm uppercase text-[var(--secondary)]">Zero Child Labor</h3>
                <p className="text-xs text-neutral-600 mt-1">Strict 18+ age verification with government biometric ID validation before facility onboarding.</p>
              </div>
              <div className="p-5 bg-neutral-50 rounded-[4px] border border-neutral-200">
                <HeartHandshake className="text-[var(--accent)] mb-2" size={24} />
                <h3 className="font-bold text-sm uppercase text-[var(--secondary)]">Fair Living Wages</h3>
                <p className="text-xs text-neutral-600 mt-1">Wages significantly above regional statutory minimums with performance incentives and social security.</p>
              </div>
              <div className="p-5 bg-neutral-50 rounded-[4px] border border-neutral-200">
                <CheckCircle className="text-[var(--accent)] mb-2" size={24} />
                <h3 className="font-bold text-sm uppercase text-[var(--secondary)]">Workplace Safety</h3>
                <p className="text-xs text-neutral-600 mt-1">High-efficiency ventilation, eye-protection PPE, fire suppression systems, and clean drinking water filtration.</p>
              </div>
              <div className="p-5 bg-neutral-50 rounded-[4px] border border-neutral-200">
                <Award className="text-[var(--accent)] mb-2" size={24} />
                <h3 className="font-bold text-sm uppercase text-[var(--secondary)]">Global Audit Ready</h3>
                <p className="text-xs text-neutral-600 mt-1">Full traceability and audit-ready supply chain meeting US high school, NCAA, and club league procurement standards.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-neutral-500">Need formal compliance certificates or factory audit sheets for your school district or athletic department?</span>
              <button
                onClick={() => onNavigateInquiry('Factory Ethics & Compliance Audit Documentation')}
                className="px-6 py-2.5 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white font-bold text-xs uppercase tracking-wider rounded-[3px] shadow transition cursor-pointer"
              >
                Request Audit Documentation
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: EXPORTS */}
        {activeTab === 'exports' && (
          <div className="bg-white p-8 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-6">
            <h2 className="text-2xl font-black uppercase text-[var(--secondary)]">Global Export Corridors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {exportCountries.map((c, idx) => (
                <div key={idx} className="p-5 bg-neutral-50 rounded-[4px] border border-neutral-200">
                  <span className="text-xl font-mono font-bold text-[var(--accent)]">{c.share}</span>
                  <h3 className="font-bold text-sm uppercase text-[var(--secondary)] mt-1">{c.region}</h3>
                  <p className="text-xs text-neutral-600 mt-1">{c.markets}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: PRESS */}
        {activeTab === 'press' && (
          <div className="space-y-4">
            {pressNews.map((n, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono text-[var(--accent)] font-bold">{n.date}</span>
                  <span className="text-[9px] bg-neutral-100 text-[var(--secondary)] font-bold px-2 py-0.5 rounded">{n.tag}</span>
                </div>
                <h2 className="text-base font-bold uppercase text-[var(--secondary)] mb-1">{n.title}</h2>
                <p className="text-xs text-neutral-600 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 6: CONTACT */}
        {activeTab === 'contact' && (
          <div className="bg-white p-8 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-6">
            <h2 className="text-2xl font-black uppercase text-[var(--secondary)]">Factory Direct Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="text-[var(--accent)] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-xs uppercase text-[var(--secondary)]">Headquarters & Manufacturing</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">Sialkot Export Zone, Punjab, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-[var(--accent)] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-xs uppercase text-[var(--secondary)]">B2B Team Quotes</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">sale@hamlosportswear.site</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-[var(--accent)] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-xs uppercase text-[var(--secondary)]">Direct WhatsApp Desk</h3>
                  <a href="https://wa.me/923105464116" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--accent)] hover:underline font-bold mt-0.5 block">+92 310 5464116</a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100">
              <button
                onClick={() => onNavigateInquiry()}
                className="px-8 py-3.5 bg-[var(--accent)] hover:bg-[var(--secondary)] text-white font-bold text-xs uppercase tracking-wider rounded-[3px] shadow transition cursor-pointer"
              >
                Open B2B Quotation Form
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
    </>
  );
}
