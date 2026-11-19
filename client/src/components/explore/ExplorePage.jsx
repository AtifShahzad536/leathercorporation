import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, Compass, BookOpen, ShieldCheck, Sparkles,
  Droplet, Sun, Wind, Award, ChevronRight, CheckCircle2, Ruler, Layers, Zap
} from 'lucide-react';
import SizeChartModal from '../products/SizeChartModal';

export default function ExplorePage({
  initialTab = 'fabrics',
  onTabChange = () => { },
  onNavigateHome = () => { },
  onNavigateProducts = () => { },
  onNavigateInquiry = () => { }
}) {
  // Map category names or hash query to valid tab keys
  const mapTabKey = (tab) => {
    if (!tab) return 'fabrics';
    const lower = tab.toLowerCase();
    if (lower.includes('fabric') || lower.includes('spec') || lower.includes('grade')) return 'fabrics';
    if (lower.includes('sublimat') || lower.includes('tech') || lower.includes('color')) return 'sublimation';
    if (lower.includes('embroid') || lower.includes('tackle') || lower.includes('twill') || lower.includes('craft') || lower.includes('process')) return 'embroidery';
    if (lower.includes('lookbook') || lower.includes('2026') || lower.includes('collection')) return 'lookbook';
    if (lower.includes('size') || lower.includes('fit') || lower.includes('guide')) return 'guide';
    return lower;
  };

  const [activeTab, setActiveTab] = useState(() => {
    const t = mapTabKey(initialTab);
    return t === 'guide' ? 'fabrics' : t;
  });
  const [sizeModalOpen, setSizeModalOpen] = useState(() => mapTabKey(initialTab) === 'guide');

  useEffect(() => {
    const target = mapTabKey(initialTab);
    if (target === 'guide') {
      setSizeModalOpen(true);
      setActiveTab('fabrics');
    } else {
      setActiveTab(target);
    }
  }, [initialTab]);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    onTabChange(tabKey);
    window.history.pushState({}, '', `/explore/?tab=${tabKey}`);
  };

  const fabricSpecs = [
    {
      name: 'Micro-Interlock Polyester',
      gsm: '160 - 180 GSM',
      bestFor: 'Soccer, Esports, Basketball Shooter Shirts',
      properties: 'Ultra-lightweight, 4-way stretch, anti-snag smooth finish with moisture-wicking capillary channels.'
    },
    {
      name: 'Pinhole Air-Mesh',
      gsm: '180 - 200 GSM',
      bestFor: 'Baseball Jerseys, Basketball Reversibles',
      properties: 'Micro-perforated breathable weave allowing maximum airflow and instant sweat evaporation in high-heat matches.'
    },
    {
      name: 'Heavyweight Combat Spandex',
      gsm: '220 - 280 GSM',
      bestFor: 'Wrestling Singlets, Football Yokes, Rugby Tops',
      properties: 'Reinforced elastane-poly blend offering extreme tensile grab resistance, flatlock zero-chafing seams, and muscle compression.'
    },
    {
      name: 'Pro-Brite Dazzle Polyester',
      gsm: '200 - 240 GSM',
      bestFor: 'Collegiate Football Shoulders & Basketball Trims',
      properties: 'High-sheen reflective abrasion-resistant textile engineered to handle tackle collisions and shoulder pad friction.'
    }
  ];

  const sublimationSteps = [
    {
      step: '01',
      title: 'Pantone Color Calibration & Vector Proof',
      desc: 'Designs and team rosters are mapped using CMYK digital RIP software to match exact school and club Pantone palettes.'
    },
    {
      step: '02',
      title: 'High-Definition Japanese Heat Transfer',
      desc: 'Printed on specialized Japanese transfer paper using OEKO-TEX certified water-based dye inks at 1440 DPI resolution.'
    },
    {
      step: '03',
      title: 'Molecular Fiber Fusion (205°C / 400°F)',
      desc: 'Heat press sublimes solid ink into gas under high pressure, permanently infusing dye into fabric fibers with zero cracking or fading.'
    },
    {
      step: '04',
      title: 'Laser Precision Cutting & Assembly',
      desc: 'CNC camera-guided laser cutters cut panels to exact millimeter tolerance before 4-thread industrial coverstitching.'
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen text-[var(--secondary)] py-8">
      <div className="w-[96%] max-w-[1800px] mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[var(--secondary)]/60">
          <button onClick={onNavigateHome} className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft size={12} /> HOME
          </button>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">ATHLETIC KNOWLEDGE & FABRIC LAB</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[var(--secondary)] rounded-[4px] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
              <Sparkles size={14} /> HAMLO SPORTS ENGINEERING
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-3">
              ATHLETIC PERFORMANCE HUB
            </h1>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl font-light">
              Understand the science behind custom sublimated sportswear. From 160–280 GSM technical interlock fabrics and molecular dye fusion to multi-layer zigzag tackle twill and collegiate athlete sizing.
            </p>
          </div>

          <div className="absolute right-[-40px] bottom-[-40px] opacity-10 pointer-events-none">
            <Layers size={340} />
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--secondary)]/15 pb-4">
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'fabrics', label: 'FABRIC SPECIFICATIONS' },
              { key: 'sublimation', label: 'SUBLIMATION TECH' },
              { key: 'embroidery', label: 'TACKLE TWILL & EMBROIDERY' },
              { key: 'lookbook', label: '2026 UNIFORM LOOKBOOK' }
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

          <button
            onClick={() => setSizeModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--secondary)] text-white font-bold text-xs uppercase tracking-wider rounded-[3px] shadow transition-all cursor-pointer"
          >
            <Ruler size={14} />
            <span>Athletic Size Chart</span>
          </button>
        </div>

        {/* TAB 1: FABRICS */}
        {activeTab === 'fabrics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {fabricSpecs.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm hover:border-[var(--accent)] transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest">{item.gsm}</span>
                    <span className="text-[10px] bg-neutral-100 text-[var(--secondary)] font-semibold px-2 py-0.5 rounded">OEKO-TEX PASSED</span>
                  </div>
                  <h3 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">{item.name}</h3>
                  <p className="text-xs text-[var(--secondary)]/70 leading-relaxed mb-3">{item.properties}</p>
                  <div className="text-[11px] font-bold text-[var(--secondary)]/90 pt-3 border-t border-neutral-100">
                    <span className="text-[var(--accent)]">Recommended For:</span> {item.bestFor}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[4px] border border-[var(--secondary)]/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-black uppercase text-[var(--secondary)] mb-1">Need a Custom GSM or Proprietary Blend?</h4>
                <p className="text-xs text-[var(--secondary)]/70">We source and knit custom poly-spandex formulations for professional leagues and large club franchises.</p>
              </div>
              <button
                onClick={() => onNavigateInquiry('Fabric Consultation')}
                className="px-6 py-3 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white font-bold text-xs uppercase tracking-wider rounded-[3px] transition cursor-pointer flex-shrink-0"
              >
                Inquire Fabric Swatch Kit
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: SUBLIMATION */}
        {activeTab === 'sublimation' && (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm">
              <h3 className="text-2xl font-black uppercase text-[var(--secondary)] mb-2">Dye-Sublimation vs Screen Printing</h3>
              <p className="text-xs text-[var(--secondary)]/75 leading-relaxed max-w-3xl mb-8">
                Unlike screen printing or vinyl transfers which sit on top of fabric and peel or crack over time, dye-sublimation transforms inks into gas under 205°C heat, infusing the design directly into the polyester molecules. The result is completely weightless, breathable, and permanently vibrant uniforms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {sublimationSteps.map((step, idx) => (
                  <div key={idx} className="p-5 bg-neutral-50 rounded-[4px] border border-neutral-200">
                    <span className="text-2xl font-black text-[var(--accent)] font-mono">{step.step}</span>
                    <h4 className="font-bold text-sm uppercase text-[var(--secondary)] mt-2 mb-2">{step.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EMBROIDERY & TACKLE TWILL */}
        {activeTab === 'embroidery' && (
          <div className="bg-white p-8 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-6">
            <div>
              <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest">PRO TEAM GRADE</span>
              <h3 className="text-2xl font-black uppercase text-[var(--secondary)] mb-2">Collegiate Tackle Twill & 3D Appliqué</h3>
              <p className="text-xs text-[var(--secondary)]/75 leading-relaxed max-w-3xl">
                For baseball full-button jerseys, hockey sweaters, and championship outerwear, we offer laser-cut tackle twill letters and numbers sewn with dense zigzag edge stitching that withstands 100+ industrial athletic washes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
              <div className="p-5 border border-neutral-200 rounded-[3px]">
                <h4 className="font-black text-sm uppercase text-[var(--secondary)] mb-2">Single-Layer Twill</h4>
                <p className="text-xs text-neutral-600">Clean classic laser-cut twill numbering stitched directly onto the jersey for clean lightweight movement.</p>
              </div>
              <div className="p-5 border border-neutral-200 rounded-[3px]">
                <h4 className="font-black text-sm uppercase text-[var(--secondary)] mb-2">Double-Layer Zigzag Twill</h4>
                <p className="text-xs text-neutral-600">Dual-color contrasted twill with collegiate drop-shadow styling, identical to NCAA and MLB uniforms.</p>
              </div>
              <div className="p-5 border border-neutral-200 rounded-[3px]">
                <h4 className="font-black text-sm uppercase text-[var(--secondary)] mb-2">High-Density 3D Embroidery</h4>
                <p className="text-xs text-neutral-600">Direct raised embroidery on caps, team hoodies, and jacket chest logos up to 100,000 stitches per crest.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: LOOKBOOK */}
        {activeTab === 'lookbook' && (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm text-center">
              <h3 className="text-2xl font-black uppercase text-[var(--secondary)] mb-2">2026 Athletic Uniform Lookbook</h3>
              <p className="text-xs text-[var(--secondary)]/70 max-w-xl mx-auto mb-6">
                Discover our latest cuts, ergonomic athletic paneling, and sublimated team kits across Baseball, Basketball, Football, Soccer, Esports, Wrestling, and Hockey.
              </p>
              <button
                onClick={() => onNavigateInquiry('Download Digital Lookbook 2026')}
                className="px-8 py-3.5 bg-[var(--accent)] text-white font-bold text-xs uppercase tracking-wider rounded-[3px] shadow hover:bg-[var(--secondary)] transition cursor-pointer"
              >
                Request Digital PDF Catalog & Fabric Ring
              </button>
            </div>
          </div>
        )}

      </div>

      <SizeChartModal isOpen={sizeModalOpen} onClose={() => setSizeModalOpen(false)} />
    </div>
  );
}
