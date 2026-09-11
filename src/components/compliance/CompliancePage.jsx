import React from 'react';
import { 
  ArrowLeft, ShieldCheck, CheckCircle, FileText, 
  Leaf, Award, Lock, Download, Sparkles, Building2
} from 'lucide-react';

export default function CompliancePage({ 
  onNavigateHome = () => {}, 
  onNavigateInquiry = () => {} 
}) {
  const compliancePillars = [
    {
      title: 'REACH (EU) Chemical Compliance',
      regId: 'EC No. 1907/2006',
      desc: 'All leather hides, finishes, dyes, and metallic hardware pass strict European REACH regulations. Completely free of carcinogenic AZO dyes, toxic phthalates, and restricted heavy metals.',
      specs: [
        'Hexavalent Chromium (Cr VI) < 3 ppm (Limit of Detection)',
        'Zero Aromatic Amines & Formaldehyde',
        'Lead & Nickel-free Electroplated Zippers & Snaps',
        'Direct testing via SATRA & SGS Certified Laboratories'
      ]
    },
    {
      title: 'CE EN 17092 Protective PPE Standard',
      regId: 'EU PPE Regulation 2016/425',
      desc: 'Motorcycle jackets engineered to pass rigorous abrasion, tear resistance, and seam tensile rupture testing across zones 1, 2, and 3 for street and track riders.',
      specs: [
        'Class AAA (Track Racing) & Class AA (Touring) Validated',
        'Impact Cut & Abrasion Resistance Darmstadt Machine Tested',
        'Triple Interlock Safety Seams (5 Stitches per cm)',
        'CE-Level 1 & Level 2 Armor Pocket Fit Compliant'
      ]
    },
    {
      title: 'Environmental & Water Stewardship',
      regId: 'Closed-Loop Effluent Treatment (ETP)',
      desc: 'State-of-the-art biological and chemical Effluent Treatment Plant recycling 85% of industrial water before neutral biological return to municipal channels.',
      specs: [
        'LWG Gold Tannery Audit Standards Applied',
        'Zero Hazardous Chemical Discharge (ZDHC Level 3)',
        'Solar Energy Hybrid Powered Tannery Roasting Drums',
        '100% Biodegradable Vegetable Tanning Extracts Option'
      ]
    },
    {
      title: 'Ethical Workplace & BSCI Code of Conduct',
      regId: 'ILO International Labor Standards',
      desc: 'Strict adherence to global fair labor rights, workplace safety, healthcare provisions, fair living wages, and zero tolerance for forced or underage labor.',
      specs: [
        'Zero Child Labor Guarantee (18+ Age Verification)',
        'Comprehensive Worker Health, PPE & Ventilation Protocols',
        'Equal Opportunity Workplace & Fair Gender Representation',
        'Annual Third-Party Social Audits (SMETA / SEDEX)'
      ]
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
          <span className="text-[var(--secondary)] font-bold">GLOBAL COMPLIANCE & SAFETY</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[var(--secondary)] rounded-[3px] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
              <ShieldCheck size={14} /> INTERNATIONAL STATUTORY STANDARDS
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">
              GLOBAL COMPLIANCE & ETHICAL RIGOR
            </h1>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl">
              Leader Corporation operates at the vanguard of chemical safety, environmental stewardship, CE motorcycle PPE testing, and ethical human rights compliance for top global brands.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {compliancePillars.map((p, idx) => (
            <div key={idx} className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded-[2px] border border-[var(--accent)]/20">
                    {p.regId}
                  </span>
                  <ShieldCheck size={18} className="text-emerald-600" />
                </div>
                <h3 className="text-base font-black uppercase text-[var(--secondary)]">{p.title}</h3>
                <p className="text-xs text-[var(--secondary)]/80 leading-relaxed mt-2">{p.desc}</p>
              </div>

              <div className="pt-3 border-t border-gray-100 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--secondary)]/60 block">
                  Mandatory Audit Metrics:
                </span>
                <ul className="space-y-1.5">
                  {p.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs text-[var(--secondary)]/90">
                      <CheckCircle size={13} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Chemical Testing Matrix Table */}
        <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
            <div className="w-8 h-8 rounded-[3px] bg-[var(--secondary)] text-white flex items-center justify-center">
              <FileText size={16} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black uppercase text-[var(--secondary)]">
                Mandatory Laboratory Chemical Thresholds
              </h3>
              <span className="text-[11px] text-gray-500">Every production drum lot tested prior to export shipment release</span>
            </div>
          </div>

          <div className="overflow-x-auto no-scrollbar border border-gray-200 rounded-[3px]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[var(--secondary)] text-white text-[10.5px] font-bold uppercase tracking-wider">
                  <th className="p-3 border-r border-white/10">Tested Substance</th>
                  <th className="p-3 border-r border-white/10">Test Standard</th>
                  <th className="p-3 border-r border-white/10">International Threshold</th>
                  <th className="p-3 border-r border-white/10">Leader Lab Benchmark</th>
                  <th className="p-3">Audit Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-medium text-[var(--secondary)]/85">
                <tr className="bg-white">
                  <td className="p-3 font-bold border-r border-gray-100">Hexavalent Chromium (Cr VI)</td>
                  <td className="p-3 border-r border-gray-100">ISO 17075-1 / DIN 53314</td>
                  <td className="p-3 border-r border-gray-100">&lt; 3.0 mg/kg (ppm)</td>
                  <td className="p-3 font-bold text-emerald-600 border-r border-gray-100">Not Detected (0.0 ppm)</td>
                  <td className="p-3 font-bold text-emerald-700">100% Pass ✓</td>
                </tr>
                <tr className="bg-gray-50/60">
                  <td className="p-3 font-bold border-r border-gray-100">Azo Dyes (Banned Amines)</td>
                  <td className="p-3 border-r border-gray-100">EN ISO 17234-1</td>
                  <td className="p-3 border-r border-gray-100">&lt; 30 mg/kg</td>
                  <td className="p-3 font-bold text-emerald-600 border-r border-gray-100">Zero (0.0 mg/kg)</td>
                  <td className="p-3 font-bold text-emerald-700">100% Pass ✓</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold border-r border-gray-100">Formaldehyde Release</td>
                  <td className="p-3 border-r border-gray-100">ISO 17226-1</td>
                  <td className="p-3 border-r border-gray-100">&lt; 75 mg/kg</td>
                  <td className="p-3 font-bold text-emerald-600 border-r border-gray-100">&lt; 15 mg/kg</td>
                  <td className="p-3 font-bold text-emerald-700">100% Pass ✓</td>
                </tr>
                <tr className="bg-gray-50/60">
                  <td className="p-3 font-bold border-r border-gray-100">Lead (Pb) &amp; Heavy Metals</td>
                  <td className="p-3 border-r border-gray-100">CPSC-CH-E1001-08.3</td>
                  <td className="p-3 border-r border-gray-100">&lt; 90 ppm</td>
                  <td className="p-3 font-bold text-emerald-600 border-r border-gray-100">&lt; 5 ppm</td>
                  <td className="p-3 font-bold text-emerald-700">100% Pass ✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* B2B Export Callout */}
        <div className="p-6 bg-gradient-to-r from-[var(--secondary)] to-[#201c64] rounded-[3px] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <span className="text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-wider block">
              OEM & PRIVATE LABEL BRAND PARTNERS
            </span>
            <h4 className="text-sm sm:text-base font-black uppercase">Need Official Laboratory Compliance Dossiers for Import Customs?</h4>
            <p className="text-xs text-white/70">We provide certified lab test certificates with every commercial container shipment.</p>
          </div>
          <button
            onClick={() => onNavigateInquiry('Compliance & Laboratory Test Dossier Request')}
            className="px-5 py-3 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-all cursor-pointer whitespace-nowrap"
          >
            Request Compliance Pack &rarr;
          </button>
        </div>

      </div>
    </div>
  );
}
