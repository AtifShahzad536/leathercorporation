import React from 'react';
import { 
  ArrowLeft, ShieldCheck, CheckCircle, FileText, 
  Leaf, Award, Lock, Download, Sparkles, Building2, Layers
} from 'lucide-react';
import SEO from '../common/SEO';

export default function CompliancePage({ 
  onNavigateHome = () => {}, 
  onNavigateInquiry = () => {} 
}) {
  const compliancePillars = [
    {
      title: 'OEKO-TEX® Standard 100 Non-Toxic Inks',
      regId: 'Annex 4 - Product Class I (Baby & Direct Skin)',
      desc: 'All dye-sublimation inks and disperse color pigments pass rigorous OEKO-TEX Standard 100 toxicological testing. 100% free of prohibited AZO colorants, formaldehyde, heavy metals, and allergen-dispersed dyes.',
      specs: [
        'Zero Aromatic Amines & Allergenic Disperse Dyes',
        'pH Neutral (Tested Skin-Friendly for Sweating Athletes)',
        'Heavy Metals (Cadmium, Lead, Mercury, Nickel) < Limit of Detection',
        'Certified Safe for Youth, High School & Professional Competition'
      ]
    },
    {
      title: 'Athletic Fabric Performance & Colorfastness (AATCC / ISO)',
      regId: 'ISO 105-C06 / AATCC 61 Wash Durability',
      desc: 'Every production lot of 180–280 GSM polyester-spandex undergoes mechanical testing for tensile pull resistance, burst pressure, and high-heat wash colorfastness.',
      specs: [
        'Grade 4.5+ Colorfastness to Perspiration (AATCC 15)',
        'Grade 5.0 Resistance to Sublimation Bleed & Dye Migration',
        '4-Thread Flatlock Seam Tensile Rupture > 180 Newtons',
        'Anti-Snag & Anti-Pilling ASTM D3512 Class 4 Verification'
      ]
    },
    {
      title: 'Ethical Workplace, BSCI & SMETA Code of Conduct',
      regId: 'ILO Core Labor Standards & Sedex Advance',
      desc: 'Our Sialkot manufacturing facilities strictly enforce zero tolerance for child labor, fair living wages, medical insurance, occupational safety training, and clean ergonomic workstations.',
      specs: [
        'Strict 18+ Age Verification & Zero Child Labor Policy',
        'Fair Overtime Compensation & 48-Hour Standard Work Week',
        'Factory Medical Aid, Clean Filtered Drinking Water & Fire Drills',
        'Annual Third-Party Social Audits by SGS / Sedex'
      ]
    },
    {
      title: 'Clean Energy & Water-Smart Dyeing Protocols',
      regId: 'Zero Water Waste Dye-Sublimation',
      desc: 'Dye-sublimation printing is fundamentally an eco-friendly process that utilizes zero wastewater discharge compared to traditional reactive textile dye houses.',
      specs: [
        '95%+ Reduction in Industrial Water Usage vs Traditional Dyeing',
        'Solar Roof-Mounted Inverter Arrays Powering Sublimation Presses',
        '100% Recycled Transfer Paper Waste Repurposed Industrially',
        'Post-Consumer Recycled (rPET) Poly Blends Available on Request'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Compliance, Safety & Ethical Factory Standards | HAMLO SPORTS"
        description="Learn about HAMLO SPORTS compliance, OEKO-TEX Standard 100 non-toxic certified inks, fair labor standards, and ISO 9001 quality assurance in Sialkot."
        canonical="/compliance/"
        keywords="compliance, ethical sportswear manufacturer, OEKO-TEX certified, fair trade athletic apparel, Sialkot sports manufacturer"
      />
      <div className="w-full bg-[#f8f9fa] min-h-screen text-[var(--secondary)] py-8">
      <div className="w-[96%] max-w-[1800px] mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[var(--secondary)]/60">
          <button onClick={onNavigateHome} className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft size={12} /> HOME
          </button>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">SPORTSWEAR COMPLIANCE & SAFETY</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[var(--secondary)] rounded-[4px] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
              <ShieldCheck size={14} /> INTERNATIONAL ATHLETIC STANDARDS
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-3">
              GLOBAL COMPLIANCE & ETHICAL FACTORY RIGOR
            </h1>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl font-light">
              From OEKO-TEX certified skin-safe Swiss sublimation inks to ISO washfastness calibrations and BSCI-compliant social labor standards, HAMLO SPORTS builds teamwear with absolute manufacturing integrity.
            </p>
          </div>
          <div className="absolute right-[-30px] bottom-[-30px] opacity-10 pointer-events-none">
            <ShieldCheck size={320} />
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {compliancePillars.map((p, idx) => (
            <div key={idx} className="bg-white p-7 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[var(--accent)] tracking-widest uppercase block mb-1">
                  {p.regId}
                </span>
                <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-3">
                  {p.title}
                </h2>
                <p className="text-xs text-[var(--secondary)]/75 leading-relaxed mb-5 font-normal">
                  {p.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-neutral-100">
                  {p.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-[var(--secondary)]/90">
                      <CheckCircle size={14} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Report Banner */}
        <div className="bg-white p-8 rounded-[4px] border border-[var(--secondary)]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-lg font-black uppercase text-[var(--secondary)] mb-1">
              Need a School District or League Compliance Packet?
            </h2>
            <p className="text-xs text-[var(--secondary)]/70 max-w-2xl">
              We furnish verified lab test reports for dye toxicity, lead/phthalate CPSIA compliance certificates, and factory Sedex audit summaries for institutional purchasing directors.
            </p>
          </div>
          <button
            onClick={() => onNavigateInquiry('Compliance Dossier Request')}
            className="px-6 py-3 bg-[var(--accent)] hover:bg-[var(--secondary)] text-white font-bold text-xs uppercase tracking-wider rounded-[3px] transition cursor-pointer flex-shrink-0 shadow"
          >
            Request Compliance Packet
          </button>
        </div>

      </div>
    </div>
    </>
  );
}
