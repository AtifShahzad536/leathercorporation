import React, { useState } from 'react';
import { 
  ArrowLeft, Award, ShieldCheck, CheckCircle2, 
  FileCheck, ExternalLink, Download, Search, Sparkles
} from 'lucide-react';

export default function CertificationPage({ 
  onNavigateHome = () => {}, 
  onNavigateInquiry = () => {} 
}) {
  const [searchCert, setSearchCert] = useState('');

  const certifications = [
    {
      id: 'OEKO-TEX-100',
      title: 'OEKO-TEX® Standard 100 Class I (Dye Inks & Textiles)',
      certNumber: 'OEKO-TEST-2024-8842',
      issuingBody: 'Hohenstein Textile Testing Institute (Germany)',
      validity: 'Valid through 2027',
      category: 'Non-Toxic Chemical Safety & Skin Purity',
      description: 'Certifies that all sublimation inks, paper coatings, and synthetic knit textiles are strictly free from harmful substances and safe for intensive sweating athlete contact.',
      badges: ['Non-Toxic', 'Zero Skin Irritation', 'Eco Passport']
    },
    {
      id: 'ISO-9001',
      title: 'ISO 9001:2015 Athletic Apparel Quality Management',
      certNumber: 'QMS-ISO-9001-PK-0883',
      issuingBody: 'Bureau Veritas Quality International (BVQI)',
      validity: 'Annual Surveillance Verified',
      category: 'Manufacturing Precision & Zero Defect QC',
      description: 'Comprehensive quality management across pattern grading, digital color calibration, seam burst tolerance, and final barcode packaging.',
      badges: ['Zero Defect Policy', 'Traceable Batch QR', 'BVQI Audited']
    },
    {
      id: 'SMETA-SEDEX',
      title: 'SEDEX / SMETA 4-Pillar Ethical Factory Audit',
      certNumber: 'SMETA-4P-2024-4410',
      issuingBody: 'SGS International Inspection Services',
      validity: 'Sedex Advance Approved',
      category: 'Social Responsibility & Fair Living Wages',
      description: 'Third-party social audit evaluating worker rights, occupational safety, zero child labor enforcement, fair wages, and environmental stewardship.',
      badges: ['Fair Living Wage', 'Zero Child Labor', 'Safe Facilities']
    },
    {
      id: 'BSCI-CODE',
      title: 'amfori BSCI Code of Conduct Compliance',
      certNumber: 'BSCI-HAMLO-2024-712',
      issuingBody: 'amfori Trade Association (Brussels)',
      validity: 'Grade A Audited Facility',
      category: 'Workplace Health, Fire Safety & Fair Hours',
      description: 'Demonstrates world-class workplace conditions, fair overtime compensation, emergency egress compliance, and grievance resolution channels.',
      badges: ['Grade A Facility', 'Worker Healthcare', 'amfori Certified']
    },
    {
      id: 'AATCC-COLOR',
      title: 'AATCC Wash Durability & Colorfastness Certification',
      certNumber: 'AATCC-LAB-2024-9102',
      issuingBody: 'Textile Research & Testing Center (TRTC)',
      validity: 'Batch Laboratory Verified',
      category: '100+ High-Heat Wash Color Resistance',
      description: 'Validates that dye-sublimated graphics and numerals resist cracking, peeling, color bleeding, or fading under repeated industrial athletic wash cycles.',
      badges: ['Grade 4.5+ Washfast', 'Fade Proof', 'No Bleed']
    },
    {
      id: 'CPSIA-USA',
      title: 'CPSIA & California Prop 65 Compliance (USA Standards)',
      certNumber: 'CPSIA-US-SAFETY-3310',
      issuingBody: 'Intertek Consumer Testing Services',
      validity: 'Active Federal Compliance',
      category: 'Youth Sports Safety Compliance',
      description: 'Certifies that all youth garments, drawstrings, zippers, and printing components strictly comply with US Consumer Product Safety Commission rules.',
      badges: ['Lead & Phthalate Free', 'Youth Safe', 'CPSIA Approved']
    }
  ];

  const filteredCerts = certifications.filter(c => 
    c.title.toLowerCase().includes(searchCert.toLowerCase()) ||
    c.category.toLowerCase().includes(searchCert.toLowerCase()) ||
    c.certNumber.toLowerCase().includes(searchCert.toLowerCase())
  );

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen text-[var(--secondary)] py-8">
      <div className="w-[96%] max-w-[1800px] mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[var(--secondary)]/60">
          <button onClick={onNavigateHome} className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft size={12} /> HOME
          </button>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">CERTIFICATIONS & ACCREDITATIONS</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[var(--secondary)] rounded-[4px] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
              <Award size={14} /> FACTORY CREDENTIALS
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-3">
              OFFICIAL CERTIFICATIONS
            </h1>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl font-light">
              HAMLO SPORTS maintains active third-party certifications across non-toxic dye inks (OEKO-TEX), quality control (ISO 9001), social accountability (BSCI / SMETA), and US youth apparel safety (CPSIA).
            </p>
          </div>
          <div className="absolute right-[-30px] bottom-[-30px] opacity-10 pointer-events-none">
            <Award size={320} />
          </div>
        </div>

        {/* Search Certs */}
        <div className="bg-white p-4 rounded-[4px] border border-[var(--secondary)]/10 flex items-center gap-3">
          <Search size={18} className="text-[var(--secondary)]/50" />
          <input
            type="text"
            value={searchCert}
            onChange={(e) => setSearchCert(e.target.value)}
            placeholder="Search certification by title, body (OEKO-TEX, ISO, BSCI), or category..."
            className="w-full text-xs font-medium focus:outline-none text-[var(--secondary)] placeholder:text-neutral-400"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div key={cert.id} className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm flex flex-col justify-between hover:border-[var(--accent)] transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-[var(--accent)] uppercase">{cert.certNumber}</span>
                  <span className="text-[9px] bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded">{cert.validity}</span>
                </div>
                <h3 className="text-base font-black uppercase text-[var(--secondary)] mb-1 leading-snug">{cert.title}</h3>
                <span className="text-[10px] text-[var(--secondary)]/60 font-semibold block mb-3">{cert.issuingBody}</span>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">{cert.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                  {cert.badges.map((b, bIdx) => (
                    <span key={bIdx} className="text-[9px] bg-neutral-100 text-[var(--secondary)] font-bold px-2 py-0.5 rounded">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="bg-white p-8 rounded-[4px] border border-[var(--secondary)]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-black uppercase text-[var(--secondary)] mb-1">Request Verified Audit Certificates</h4>
            <p className="text-xs text-[var(--secondary)]/70">Need original high-resolution PDF certificate copies for institutional vendor onboarding? Contact our compliance department.</p>
          </div>
          <button
            onClick={() => onNavigateInquiry('Certificate Verification Request')}
            className="px-6 py-3 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white font-bold text-xs uppercase tracking-wider rounded-[3px] transition cursor-pointer flex-shrink-0"
          >
            Contact Compliance Desk
          </button>
        </div>

      </div>
    </div>
  );
}
