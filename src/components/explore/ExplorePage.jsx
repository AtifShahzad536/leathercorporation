import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, Compass, BookOpen, ShieldCheck, Sparkles,
  Droplet, Sun, Wind, Award, ChevronRight, CheckCircle2, Ruler
} from 'lucide-react';
import SizeChartModal from '../products/SizeChartModal';

export default function ExplorePage({
  initialTab = 'care',
  onNavigateHome = () => { },
  onNavigateProducts = () => { },
  onNavigateInquiry = () => { }
}) {
  const [activeTab, setActiveTab] = useState('care'); // 'care' | 'grades' | 'process' | 'lookbook'
  const [sizeModalOpen, setSizeModalOpen] = useState(false);

  // Map category names or hash query to valid tab keys
  const mapTabKey = (tab) => {
    if (!tab) return 'care';
    const lower = tab.toLowerCase();
    if (lower.includes('care')) return 'care';
    if (lower.includes('grade') || lower.includes('grain')) return 'grades';
    if (lower.includes('process') || lower.includes('lab') || lower.includes('tannery')) return 'process';
    if (lower.includes('lookbook') || lower.includes('2025') || lower.includes('collection')) return 'lookbook';
    if (lower.includes('size') || lower.includes('fit') || lower.includes('guide')) return 'guide';
    return lower;
  };

  useEffect(() => {
    const target = mapTabKey(initialTab);
    if (target === 'guide') {
      setSizeModalOpen(true);
      setActiveTab('care');
    } else {
      setActiveTab(target);
    }
  }, [initialTab]);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    window.location.hash = `explore?tab=${tabKey}`;
  };

  const careTips = [
    {
      icon: <Droplet className="text-blue-500" size={22} />,
      title: 'Moisture & Water Protection',
      description: 'Never soak genuine leather. If caught in heavy rain, allow the jacket to dry naturally on a wide-shouldered wooden hanger at room temperature. Keep away from direct radiators or heat blowers.'
    },
    {
      icon: <Sun className="text-amber-500" size={22} />,
      title: 'Conditioning & Nourishing',
      description: 'Apply a high-grade beeswax or natural lanolin leather balm twice a year. This maintains the essential oils, prevents surface cracking, and preserves natural hide flexibility.'
    },
    {
      icon: <Wind className="text-emerald-500" size={22} />,
      title: 'Breathable Storage',
      description: 'Always store leather jackets in breathable fabric garment bags, never in sealed plastic covers. Leather is a living material that requires air circulation to prevent mildew.'
    },
    {
      icon: <ShieldCheck className="text-purple-500" size={22} />,
      title: 'Spot Cleaning & Dirt Removal',
      description: 'Wipe away road grime and bug splatter immediately with a damp microfiber cloth. For stubborn grease, use a pH-neutral specialist leather cleaner.'
    }
  ];

  const gradeHierarchy = [
    {
      grade: 'Full-Grain Leather',
      badge: 'TOP TIER • LEADER EXCLUSIVE',
      quality: 'Gold Standard (100% Intact Grain)',
      desc: 'The complete natural hide without sanding or buffing. Retains natural markings, maximum tensile strength, and develops a rich patina over decades of wear.',
      durability: '25+ Years Lifetime',
      usedIn: 'All Leader Corporation Biker, Moto & Bespoke Jackets'
    },
    {
      grade: 'Top-Grain Leather',
      badge: 'PREMIUM COMMERCIAL',
      quality: 'Surface Lightly Sanded',
      desc: 'Outer layer is gently buffed to remove surface blemishes, then treated for a uniform finish. Softer initially, but thinner and does not develop full natural patina.',
      durability: '10 - 15 Years Lifetime',
      usedIn: 'Mid-tier Fashion Jackets & Handbags'
    },
    {
      grade: 'Genuine / Split Leather',
      badge: 'ECONOMY GRADE',
      quality: 'Lower Hide Layers',
      desc: 'Created from the fibrous split layers beneath the grain, coated with polyurethane to simulate grain texture. Prone to peeling and cracking under stress.',
      durability: '2 - 4 Years Lifetime',
      usedIn: 'Fast-Fashion Mass Retail'
    },
    {
      grade: 'Bonded / Faux Leather',
      badge: 'SYNTHETIC / SCRAP',
      quality: 'Shredded Hide Pulp + Plastic',
      desc: 'Made from leftover leather scraps bonded with synthetic polyurethane. Zero breathability, tears easily, and non-biodegradable.',
      durability: '< 1 Year',
      usedIn: 'Not Used by Leader Corporation'
    }
  ];

  const craftSteps = [
    { step: '01', title: 'Raw Hide Selection & Curing', desc: 'Hand-selecting the top 5% ethical hides with zero tick marks or structural flaws.' },
    { step: '02', title: 'LWG Eco-Drum Tanning', desc: 'Environmentally certified chromium and vegetable drum tanning for optimal softness and temper.' },
    { step: '03', title: 'Deep Aniline Penetration', desc: 'Drum-dyeing hides completely through so any future scuffs maintain rich uniform color.' },
    { step: '04', title: 'Precision CNC Laser Cutting', desc: 'Computerized laser cutting ensures 0.1mm pattern tolerance and symmetrical alignment.' },
    { step: '05', title: 'Master Artisan Hand-Stitching', desc: 'Stitched by master craftsmen with bonded nylon threads and reinforced stress seams.' },
    { step: '06', title: '12-Point Inspection & Test', desc: 'Rigorous tensile pull test, zipper glide friction check, and CE armor fit certification.' }
  ];

  const lookbookImages = [
    { src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop', title: 'Heritage Biker II', year: '2025/2026 Collection' },
    { src: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800&auto=format&fit=crop', title: 'Veloce Cafe Racer', year: 'Milan Runway' },
    { src: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=800&auto=format&fit=crop', title: 'Merino Aviator B-3', year: 'Alpine Winter Series' },
    { src: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800&auto=format&fit=crop', title: 'Calf Suede Harrington', year: 'Spring Atelier' },
    { src: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop', title: 'Femme Moto Asymmetric', year: 'Contour Tailoring' },
    { src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop', title: 'Bespoke Atelier 1-of-1', year: 'Private Client Commission' }
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
          <span className="text-[var(--secondary)] font-bold">EXPLORE & LEATHER LAB</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[var(--secondary)] rounded-[3px] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
              <Compass size={14} /> KNOWLEDGE & INNOVATION LAB
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">
              THE LEADER LEATHER KNOWLEDGE HUB
            </h1>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl">
              Understand the science, heritage, and anatomy behind genuine luxury leather apparel. From hide grading and tannery science to daily maintenance and bespoke sizing masterclasses.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3">
          <div className="flex gap-1.5 bg-white p-1 rounded-[3px] border border-gray-200 shadow-sm overflow-x-auto no-scrollbar">
            <button
              onClick={() => handleTabClick('care')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer whitespace-nowrap ${activeTab === 'care'
                  ? 'bg-[var(--secondary)] text-white shadow-sm'
                  : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
                }`}
            >
              Leather Care Guide
            </button>
            <button
              onClick={() => handleTabClick('grades')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer whitespace-nowrap ${activeTab === 'grades'
                  ? 'bg-[var(--secondary)] text-white shadow-sm'
                  : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
                }`}
            >
              Hide Grades & Anatomy
            </button>
            <button
              onClick={() => handleTabClick('process')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer whitespace-nowrap ${activeTab === 'process'
                  ? 'bg-[var(--secondary)] text-white shadow-sm'
                  : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
                }`}
            >
              Tannery & Craft Process
            </button>
            <button
              onClick={() => handleTabClick('lookbook')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer whitespace-nowrap ${activeTab === 'lookbook'
                  ? 'bg-[var(--secondary)] text-white shadow-sm'
                  : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
                }`}
            >
              2025/2026 Lookbook
            </button>
          </div>

          <button
            onClick={() => setSizeModalOpen(true)}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider rounded-[3px] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Ruler size={13} />
            <span>Size & Fit Guide</span>
          </button>
        </div>

        {/* Tab 1: Care Guide */}
        {activeTab === 'care' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careTips.map((tip, idx) => (
                <div key={idx} className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[3px] bg-gray-50 border border-gray-100 flex items-center justify-center">
                      {tip.icon}
                    </div>
                    <h3 className="text-sm font-black uppercase text-[var(--secondary)]">{tip.title}</h3>
                  </div>
                  <p className="text-xs text-[var(--secondary)]/80 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-[3px] p-5 text-xs text-amber-900 leading-relaxed">
              <strong>Master Artisan Advice:</strong> Genuine full-grain leather is naturally resilient. Treat your jacket like fine mechanical watchwork — avoid harsh chemicals, machine washing, or dry-cleaning solvent dips that strip away the natural hide oils.
            </div>
          </div>
        )}

        {/* Tab 2: Grades & Anatomy */}
        {activeTab === 'grades' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {gradeHierarchy.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-white border rounded-[3px] p-6 shadow-sm flex flex-col justify-between space-y-4 ${idx === 0 ? 'border-[var(--accent)] ring-1 ring-[var(--accent)]/30' : 'border-[var(--secondary)]/10'
                    }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-[2px] ${idx === 0 ? 'bg-[var(--accent)] text-white' : 'bg-gray-100 text-gray-700'
                        }`}>
                        {item.badge}
                      </span>
                      <span className="text-xs font-bold text-emerald-600">{item.durability}</span>
                    </div>
                    <h3 className="text-base font-black uppercase text-[var(--secondary)]">{item.grade}</h3>
                    <p className="text-xs text-gray-500 font-semibold">{item.quality}</p>
                    <p className="text-xs text-[var(--secondary)]/80 leading-relaxed pt-1">{item.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500">
                    <strong>Standard Application:</strong> {item.usedIn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Tannery Craft Process */}
        {activeTab === 'process' && (
          <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                FROM RAW HIDE TO MASTERPIECE
              </span>
              <h3 className="text-lg font-black uppercase text-[var(--secondary)]">
                The 6-Stage Leader Atelier Manufacturing Protocol
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {craftSteps.map((step) => (
                <div key={step.step} className="p-4 bg-gray-50 rounded-[3px] border border-gray-200 space-y-2">
                  <span className="text-2xl font-black text-[var(--accent)]">{step.step}</span>
                  <h4 className="text-xs font-black uppercase text-[var(--secondary)]">{step.title}</h4>
                  <p className="text-xs text-[var(--secondary)]/75 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Lookbook Gallery */}
        {activeTab === 'lookbook' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lookbookImages.map((item, idx) => (
                <div key={idx} className="group bg-white border border-[var(--secondary)]/10 rounded-[3px] overflow-hidden shadow-sm">
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-wider block">{item.year}</span>
                      <h4 className="text-sm font-black uppercase">{item.title}</h4>
                    </div>
                  </div>
                  <div className="p-3.5 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-gray-500">Leader Bespoke Atelier</span>
                    <button
                      onClick={() => onNavigateProducts()}
                      className="text-xs font-bold text-[var(--accent)] hover:underline uppercase"
                    >
                      Shop Similar &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Size Chart Modal */}
        <SizeChartModal
          isOpen={sizeModalOpen}
          onClose={() => setSizeModalOpen(false)}
          onNavigateBespoke={() => {
            setSizeModalOpen(false);
            onNavigateInquiry();
          }}
        />

      </div>
    </div>
  );
}
