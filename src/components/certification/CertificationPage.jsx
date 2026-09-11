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
      id: 'LWG-GOLD',
      title: 'Leather Working Group (LWG) Gold Rated',
      certNumber: 'LWG-AUD-2024-7742',
      issuingBody: 'Leather Working Group Ltd (UK)',
      validity: 'Valid through 2027',
      category: 'Environmental Stewardship & Tannery Audit',
      description: 'Audits environmental performance across water usage, energy efficiency, chrome recycling, air emissions, and waste reduction protocols.',
      badges: ['Water Conservation', 'Waste Recycling', 'Gold Standard']
    },
    {
      id: 'ISO-9001',
      title: 'ISO 9001:2015 Quality Management System',
      certNumber: 'QMS-ISO-9001-PK-0883',
      issuingBody: 'Bureau Veritas Quality International (BVQI)',
      validity: 'Annual Surveillance Passed',
      category: 'Quality Assurance & Precision Manufacturing',
      description: 'Comprehensive quality control protocols governing raw hide grading, CNC laser tolerance, stitch density verification, and final packaging.',
      badges: ['Zero Defect Policy', 'Traceable Batch QR', 'BVQI Audited']
    },
    {
      id: 'CE-PPE',
      title: 'CE EN 17092 & EN 1621-1/2 Armor Standards',
      certNumber: 'CE-PPE-SATRA-2023-9021',
      issuingBody: 'SATRA Technology Europe Ltd (Ireland / UK)',
      validity: 'Active EU Type-Examination',
      category: 'Motorcycle Protective Apparel PPE',
      description: 'Full certification testing for seam burst tensile strength, Darmstadt abrasion resistance, and CE-Level 1 and Level 2 memory-elastomer armor protectors.',
      badges: ['Class AAA / AA / A', 'Level 2 Armor', 'Impact Absorption']
    },
    {
      id: 'OEKO-TEX',
      title: 'OEKO-TEX® Leather Standard Class I & II',
      certNumber: 'OEKO-TEX-LEAD-2024-5519',
      issuingBody: 'Hohenstein Textile Testing Institute (Germany)',
      validity: 'Annual Re-Certification Verified',
      category: 'Skin-Contact Chemical Purity',
      description: 'Certifies that leather apparel and linings are free of any harmful residual chemicals, making them safe for direct skin contact across all climates.',
      badges: ['Non-Toxic', 'Skin-Safe Dyes', 'Eco-Passport']
    },
    {
      id: 'SMETA-SEDEX',
      title: 'SEDEX / SMETA 4-Pillar Social Audit',
      certNumber: 'SMETA-4P-2024-4410',
      issuingBody: 'SGS International Inspection Services',
      validity: 'Sedex Advance Member Approved',
      category: 'Social Accountability & Ethical Labor',
      description: 'Third-party social audit evaluating labor standards, worker health & safety, environmental management, and fair business ethics.',
      badges: ['Fair Living Wage', 'Zero Child Labor', 'Safe Facilities']
    },
    {
      id: 'BSCI-CODE',
      title: 'BSCI Code of Conduct Audited Facility',
      certNumber: 'BSCI-ID-1109-2024',
      issuingBody: 'amfori BSCI Trade Association',
      validity: 'Grade A Compliance Rating',
      category: 'Global Trade & Workplace Ethics',
      description: 'Demonstrates robust social compliance, worker grievance mechanisms, fire safety, and emergency response capabilities.',
      badges: ['amfori Member', 'Grade A Rating', 'Ethical Sourcing']
    }
  ];

  const filteredCerts = certifications.filter(c => 
    c.title.toLowerCase().includes(searchCert.toLowerCase()) ||
    c.category.toLowerCase().includes(searchCert.toLowerCase()) ||
    c.certNumber.toLowerCase().includes(searchCert.toLowerCase())
  );

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen text-[var(--secondary)] py-8">
      <div className="w-[92%] mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[var(--secondary)]/60">
          <button onClick={onNavigateHome} className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft size={12} /> HOME
          </button>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">INTERNATIONAL CERTIFICATIONS</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[var(--secondary)] rounded-[3px] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
              <Award size={14} /> ACCREDITED TANNERY & ATELIER
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">
              GLOBAL CERTIFICATIONS & AUDITS
            </h1>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl">
              Leader Corporation is audited and certified by the world’s leading regulatory authorities for quality management, motorcycle PPE safety, environmental sustainability, and ethical social compliance.
            </p>
          </div>
        </div>

        {/* Search & Filter Header */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-[3px] border border-[var(--secondary)]/10 shadow-sm">
          <div className="relative flex-1 max-w-md">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchCert}
              onChange={(e) => setSearchCert(e.target.value)}
              placeholder="Search certificates (e.g. LWG, ISO, CE, SATRA)..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
            />
          </div>

          <button
            onClick={() => onNavigateInquiry('Certificate Verification & Audit Pack Request')}
            className="px-4 py-2 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <FileCheck size={14} />
            <span>Request Verified Audit Pack</span>
          </button>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="w-10 h-10 rounded-[3px] bg-gradient-to-br from-[var(--secondary)] to-[#2d2894] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Award size={20} />
                  </div>
                  <span className="text-[9.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-[2px] border border-emerald-200">
                    {cert.validity}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                    {cert.category}
                  </span>
                  <h3 className="text-sm font-black uppercase text-[var(--secondary)] mt-0.5 leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <div className="p-2.5 bg-gray-50 rounded-[3px] border border-gray-100 text-[11px] space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cert / Audit ID:</span>
                    <span className="font-bold text-[var(--secondary)]">{cert.certNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Auditor:</span>
                    <span className="font-semibold text-[var(--secondary)]">{cert.issuingBody}</span>
                  </div>
                </div>

                <p className="text-xs text-[var(--secondary)]/75 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                {cert.badges.map((b, bIdx) => (
                  <span key={bIdx} className="text-[9.5px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-[2px]">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Audit Verification Banner */}
        <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-wider block">
              ENTERPRISE BUYER ASSURANCE
            </span>
            <h3 className="text-base font-black uppercase text-[var(--secondary)]">
              Direct Audit Dossier & Test Certificate Verification
            </h3>
            <p className="text-xs text-[var(--secondary)]/75 leading-relaxed">
              We provide authenticated laboratory certificates, SGS test records, and LWG scorecards directly to your customs brokerage and compliance officers.
            </p>
          </div>

          <button
            onClick={() => onNavigateInquiry('Direct Factory Audit Pack Request')}
            className="px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition-all cursor-pointer whitespace-nowrap shadow-md"
          >
            Inquire Audit Documents &rarr;
          </button>
        </div>

      </div>
    </div>
  );
}
