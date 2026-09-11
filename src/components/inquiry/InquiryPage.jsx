import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ShieldCheck, Building2, Send, Check, 
  MessageSquare, Sparkles, Award, FileText, Phone, Mail, Globe, Ruler
} from 'lucide-react';
import { allProducts, leatherTypes } from '../../data/productsData';
import SizeChartModal from '../products/SizeChartModal';

export default function InquiryPage({ 
  initialProductSlug = '', 
  onNavigateHome = () => {}, 
  onNavigateProducts = () => {} 
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [sizeChartOpen, setSizeChartOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'United States',
    orderType: 'Private Label OEM Manufacturing',
    quantityTier: '20 - 50 Units (Small Batch Brand)',
    preferredLeather: 'Full-Grain Cowhide (1.2mm)',
    armorRequirement: 'CE-Level 2 Certified Armor Pockets',
    hardwarePreference: 'YKK Antique Brass Heavy Duty',
    targetDeliveryMonth: 'Within 4-6 Weeks',
    notes: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (initialProductSlug) {
      const found = allProducts.find(
        (p) => p.slug === initialProductSlug || p.name.toLowerCase() === initialProductSlug.toLowerCase()
      );
      if (found) setSelectedProduct(found);
    }
  }, [initialProductSlug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = 'INQ-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(id);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen text-[var(--secondary)] py-8">
      <div className="w-[92%] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[var(--secondary)]/60 mb-6">
          <button onClick={onNavigateHome} className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft size={12} /> HOME
          </button>
          <span>/</span>
          <button onClick={onNavigateProducts} className="hover:text-[var(--accent)] transition-colors cursor-pointer">
            PRODUCTS
          </button>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">B2B & BESPOKE INQUIRY</span>
        </div>

        {/* Header Hero Banner */}
        <div className="bg-[var(--secondary)] rounded-[3px] p-8 md:p-12 text-white mb-8 relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
            <Building2 size={360} />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
              <Sparkles size={14} /> EXPORT ATELIER & PRIVATE LABEL
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">
              B2B WHOLESALE & BESPOKE TAILORING DESK
            </h1>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl">
              Leader Corporation provides end-to-end custom leather apparel manufacturing for international motorcycle brands, fashion ateliers, racing clubs, and bespoke individual clients worldwide.
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        {submitted ? (
          <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-8 md:p-14 text-center max-w-2xl mx-auto shadow-xl space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Check size={36} />
            </div>

            <div>
              <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest block mb-1">
                INQUIRY REGISTERED SUCCESSFULLY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)]">
                Inquiry Reference: {inquiryId}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--secondary)]/70 max-w-md mx-auto mt-2">
                Thank you, <strong>{formData.fullName}</strong>. Our Export Director and Master Tailor will prepare your customized quotation and technical specifications pack within 4 hours.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-[3px] p-4 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Target Category:</span>
                <span className="font-bold text-[var(--secondary)]">{formData.orderType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Estimated Batch:</span>
                <span className="font-bold text-[var(--secondary)]">{formData.quantityTier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Selected Leather:</span>
                <span className="font-bold text-[var(--secondary)]">{formData.preferredLeather}</span>
              </div>
              {selectedProduct && (
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Design Reference:</span>
                  <span className="font-bold text-[var(--accent)]">{selectedProduct.name}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={onNavigateProducts}
                className="px-6 py-3 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white font-bold text-xs uppercase tracking-widest rounded-[3px] transition-all cursor-pointer"
              >
                Return to Products Catalog
              </button>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-[3px] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} /> WhatsApp Export Desk
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Form */}
            <div className="flex-1 w-full bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-8 shadow-sm">
              
              {/* Product Reference Card (if coming from a product) */}
              {selectedProduct && (
                <div className="mb-6 p-4 bg-gray-50 rounded-[3px] border border-[var(--accent)]/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="w-12 h-14 object-cover rounded-[2px] bg-gray-200"
                    />
                    <div>
                      <span className="text-[9px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                        Selected Design Reference
                      </span>
                      <h4 className="text-sm font-black uppercase text-[var(--secondary)]">
                        {selectedProduct.name}
                      </h4>
                      <p className="text-[10px] text-gray-500">{selectedProduct.leather} • ${selectedProduct.price} base</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="text-xs text-gray-400 hover:text-red-500 font-semibold uppercase tracking-wider"
                  >
                    Change
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Client & Business Profile */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[var(--secondary)] mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Building2 size={15} className="text-[var(--accent)]" />
                    1. Client & Company Profile
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Full Name / Contact Person *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Company / Brand / Club Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Vance Moto Apparel Ltd."
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Business Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="buyer@domain.com"
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Phone / WhatsApp (with Country Code) *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Order Scope & Production Tier */}
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[var(--secondary)] flex items-center gap-2">
                      <FileText size={15} className="text-[var(--accent)]" />
                      2. Order Scope & Manufacturing Volume
                    </h3>
                    <button
                      type="button"
                      onClick={() => setSizeChartOpen(true)}
                      className="text-[10px] font-bold text-[var(--accent)] hover:underline uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <Ruler size={12} /> Size & Measuring Chart
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Project Scope *
                      </label>
                      <select
                        value={formData.orderType}
                        onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] bg-white focus:outline-none focus:border-[var(--accent)]"
                      >
                        <option value="Private Label OEM Manufacturing">Private Label OEM Brand Manufacturing</option>
                        <option value="Bespoke Made-to-Measure Single Unit">Bespoke Made-to-Measure (Individual Custom Fit)</option>
                        <option value="Motorcycle Club / Team Custom Order">Motorcycle Club / Team Batch Order</option>
                        <option value="Export Sample / Prototype Development">Export Sample / Prototype Development</option>
                        <option value="Bulk Tannery Leather Supply">Bulk Drum-Dyed Leather Hide Supply</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Estimated Batch Quantity *
                      </label>
                      <select
                        value={formData.quantityTier}
                        onChange={(e) => setFormData({ ...formData, quantityTier: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] bg-white focus:outline-none focus:border-[var(--accent)]"
                      >
                        <option value="1 Unit (Individual Bespoke Order)">1 Unit (Individual Bespoke Order)</option>
                        <option value="5 - 15 Units (Sample / Club Run)">5 - 15 Units (Sample / Club Run)</option>
                        <option value="20 - 50 Units (Small Batch Brand)">20 - 50 Units (Small Batch Brand)</option>
                        <option value="100 - 500 Units (Commercial Wholesale)">100 - 500 Units (Commercial Wholesale)</option>
                        <option value="1000+ Units (Full Container Export)">1000+ Units (Full Container Export)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Preferred Leather Hide & Tanning *
                      </label>
                      <select
                        value={formData.preferredLeather}
                        onChange={(e) => setFormData({ ...formData, preferredLeather: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] bg-white focus:outline-none focus:border-[var(--accent)]"
                      >
                        {leatherTypes.map((lt) => (
                          <option key={lt} value={lt}>{lt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Armor & Safety Certification
                      </label>
                      <select
                        value={formData.armorRequirement}
                        onChange={(e) => setFormData({ ...formData, armorRequirement: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] bg-white focus:outline-none focus:border-[var(--accent)]"
                      >
                        <option value="CE-Level 2 Certified Armor Pockets">CE-Level 2 Armor Pockets (Shoulder/Elbow/Spine)</option>
                        <option value="CE-Level 1 Standard Protection">CE-Level 1 Standard Protection</option>
                        <option value="Fashion / Street Non-Armored">Fashion / Street Wear (No Armor Pockets)</option>
                        <option value="Full FIM Track Racing Suit Specs">Full FIM Track Racing Specs (Titanium Plates & Sliders)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Detailed Specifications & Notes */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[var(--secondary)] mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Sparkles size={15} className="text-[var(--accent)]" />
                    3. Custom Branding & Technical Notes
                  </h3>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                      Custom Hardware, Brand Embroidery, Lining or Size Distribution Notes
                    </label>
                    <textarea
                      rows="3"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Please include details such as logo placement, custom zipper pulls, satin vs thermal quilted lining, target delivery timeline, and delivery port..."
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-black text-xs uppercase tracking-[0.2em] rounded-[3px] shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} />
                  <span>Submit Formal Manufacturing Inquiry</span>
                </button>
              </form>
            </div>

            {/* Right Information & Direct Desk Panel */}
            <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
              
              {/* WhatsApp Quick Desk */}
              <div className="p-5 bg-gradient-to-br from-emerald-900 to-[#064e3b] text-white rounded-[3px] shadow-md space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/30 flex items-center justify-center">
                    <MessageSquare size={16} className="text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-300 block">Instant Chat</span>
                    <h4 className="text-xs font-black uppercase">Direct Export WhatsApp</h4>
                  </div>
                </div>
                <p className="text-[11px] text-white/80 leading-relaxed">
                  Connect with our Chief Tannery Engineer for instant quotes, swatches, and factory video tours.
                </p>
                <a
                  href="https://wa.me/923000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded-[3px] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Open WhatsApp</span>
                </a>
              </div>

              {/* Manufacturing Capabilities Box */}
              <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-5 shadow-sm space-y-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-[var(--secondary)] flex items-center gap-1.5">
                  <Award size={14} className="text-[var(--accent)]" />
                  Tannery & Export Credentials
                </h4>

                <ul className="space-y-2.5 text-xs text-[var(--secondary)]/80">
                  <li className="flex items-start gap-2">
                    <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>LWG Gold Tannery</strong> compliant environmental drum processing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>CE EN 17092</strong> AAA/AA/A certified motorcycle garment patterns.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Laser Cutting & 3D Tailoring</strong> for zero deviation bulk runs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Worldwide Air & Sea Freight</strong> DDP / FOB / CIF export terms.</span>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-5 shadow-sm space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-[var(--secondary)]/70">
                  <Mail size={13} className="text-[var(--accent)]" />
                  <span>exports@leadercorporation.com</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--secondary)]/70">
                  <Phone size={13} className="text-[var(--accent)]" />
                  <span>+92 (52) 111-LEADER</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--secondary)]/70">
                  <Globe size={13} className="text-[var(--accent)]" />
                  <span>Exports to 48+ Countries Worldwide</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ── EMBEDDED INTERACTIVE SIZE & MEASURING GUIDE SECTION ────────────── */}
        <div className="mt-12 bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[3px] bg-[var(--secondary)] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Ruler size={20} />
              </div>
              <div>
                <span className="text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-widest block">
                  PRECISION TAILORING BENCHMARK
                </span>
                <h3 className="text-base sm:text-lg font-black uppercase text-[var(--secondary)]">
                  International Size Chart & Measurement Guide
                </h3>
              </div>
            </div>

            {/* Quick action button to trigger modal popup */}
            <button
              type="button"
              onClick={() => setSizeChartOpen(true)}
              className="px-3.5 py-2 bg-gray-100 hover:bg-[var(--secondary)] hover:text-white text-[var(--secondary)] text-xs font-bold uppercase tracking-wider rounded-[3px] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles size={13} />
              <span>Full Screen View</span>
            </button>
          </div>

          {/* Embedded Table Component */}
          <EmbeddedSizeChartSection 
            onSelectSize={(sizeText) => {
              setFormData((prev) => ({
                ...prev,
                notes: prev.notes ? `${prev.notes}\nTarget Sizing: ${sizeText}` : `Target Sizing: ${sizeText}`
              }));
            }}
          />
        </div>

      </div>

      {/* Size Chart Modal */}
      <SizeChartModal
        isOpen={sizeChartOpen}
        onClose={() => setSizeChartOpen(false)}
        onNavigateBespoke={() => setSizeChartOpen(false)}
      />
    </div>
  );
}

// ── EMBEDDED SIZE CHART SUB-COMPONENT ───────────────────────────────────────
function EmbeddedSizeChartSection({ onSelectSize }) {
  const [activeTab, setActiveTab] = useState('mens'); // 'mens' | 'womens' | 'guide'
  const [unit, setUnit] = useState('inches'); // 'inches' | 'cm'
  const [copiedSize, setCopiedSize] = useState('');

  const mensInches = [
    { size: 'XS', chest: '36 - 38', shoulder: '17.5', sleeve: '24.5', length: '25.0', waist: '32 - 34' },
    { size: 'S',  chest: '38 - 40', shoulder: '18.0', sleeve: '25.0', length: '25.5', waist: '34 - 36' },
    { size: 'M',  chest: '40 - 42', shoulder: '18.5', sleeve: '25.5', length: '26.0', waist: '36 - 38' },
    { size: 'L',  chest: '42 - 44', shoulder: '19.0', sleeve: '26.0', length: '26.5', waist: '38 - 40' },
    { size: 'XL', chest: '44 - 46', shoulder: '19.5', sleeve: '26.5', length: '27.0', waist: '40 - 42' },
    { size: 'XXL',chest: '46 - 48', shoulder: '20.0', sleeve: '27.0', length: '27.5', waist: '42 - 44' },
    { size: '3XL',chest: '48 - 50', shoulder: '20.5', sleeve: '27.5', length: '28.0', waist: '44 - 46' },
  ];

  const mensCm = [
    { size: 'XS', chest: '91 - 96', shoulder: '44.5', sleeve: '62.2', length: '63.5', waist: '81 - 86' },
    { size: 'S',  chest: '96 - 101', shoulder: '45.7', sleeve: '63.5', length: '64.8', waist: '86 - 91' },
    { size: 'M',  chest: '101 - 107', shoulder: '47.0', sleeve: '64.8', length: '66.0', waist: '91 - 96' },
    { size: 'L',  chest: '107 - 112', shoulder: '48.3', sleeve: '66.0', length: '67.3', waist: '96 - 101' },
    { size: 'XL', chest: '112 - 117', shoulder: '49.5', sleeve: '67.3', length: '68.6', waist: '101 - 107' },
    { size: 'XXL',chest: '117 - 122', shoulder: '50.8', sleeve: '68.6', length: '69.8', waist: '107 - 112' },
    { size: '3XL',chest: '122 - 127', shoulder: '52.1', sleeve: '69.8', length: '71.1', waist: '112 - 117' },
  ];

  const womensInches = [
    { size: 'XS', bust: '32 - 34', shoulder: '15.0', sleeve: '23.0', length: '21.5', waist: '26 - 28' },
    { size: 'S',  bust: '34 - 36', shoulder: '15.5', sleeve: '23.5', length: '22.0', waist: '28 - 30' },
    { size: 'M',  bust: '36 - 38', shoulder: '16.0', sleeve: '24.0', length: '22.5', waist: '30 - 32' },
    { size: 'L',  bust: '38 - 40', shoulder: '16.5', sleeve: '24.5', length: '23.0', waist: '32 - 34' },
    { size: 'XL', bust: '40 - 42', shoulder: '17.0', sleeve: '25.0', length: '23.5', waist: '34 - 36' },
    { size: 'XXL',bust: '42 - 44', shoulder: '17.5', sleeve: '25.5', length: '24.0', waist: '36 - 38' },
  ];

  const womensCm = [
    { size: 'XS', bust: '81 - 86', shoulder: '38.1', sleeve: '58.4', length: '54.6', waist: '66 - 71' },
    { size: 'S',  bust: '86 - 91', shoulder: '39.4', sleeve: '59.7', length: '55.9', waist: '71 - 76' },
    { size: 'M',  bust: '91 - 96', shoulder: '40.6', sleeve: '61.0', length: '57.2', waist: '76 - 81' },
    { size: 'L',  bust: '96 - 101', shoulder: '41.9', sleeve: '62.2', length: '58.4', waist: '81 - 86' },
    { size: 'XL', bust: '101 - 107', shoulder: '43.2', sleeve: '63.5', length: '59.7', waist: '86 - 91' },
    { size: 'XXL',bust: '107 - 112', shoulder: '44.5', sleeve: '64.8', length: '61.0', waist: '91 - 96' },
  ];

  const handleRowClick = (row) => {
    const sizeStr = `${activeTab === 'mens' ? "Men's" : "Women's"} Size ${row.size} (${unit === 'inches' ? row.chest || row.bust + '" Chest/Bust' : row.chest || row.bust + 'cm Chest/Bust'})`;
    onSelectSize(sizeStr);
    setCopiedSize(row.size);
    setTimeout(() => setCopiedSize(''), 2500);
  };

  return (
    <div className="pt-4 space-y-4">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Tab Buttons */}
        <div className="flex gap-1 bg-gray-100 p-1 rounded-[3px]">
          <button
            type="button"
            onClick={() => setActiveTab('mens')}
            className={`px-3 py-1.5 rounded-[2px] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'mens'
                ? 'bg-[var(--secondary)] text-white shadow-sm'
                : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
            }`}
          >
            Men's Jackets
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('womens')}
            className={`px-3 py-1.5 rounded-[2px] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'womens'
                ? 'bg-[var(--secondary)] text-white shadow-sm'
                : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
            }`}
          >
            Women's Jackets
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('guide')}
            className={`px-3 py-1.5 rounded-[2px] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'guide'
                ? 'bg-[var(--secondary)] text-white shadow-sm'
                : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
            }`}
          >
            Measuring Guide
          </button>
        </div>

        {/* Unit Buttons */}
        {activeTab !== 'guide' && (
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--secondary)]/70">
            <span className="text-[10px] uppercase tracking-wider">Unit of Measure:</span>
            <div className="flex border border-gray-200 rounded-[3px] overflow-hidden bg-gray-50">
              <button
                type="button"
                onClick={() => setUnit('inches')}
                className={`px-3 py-1 text-xs font-bold cursor-pointer transition-colors ${
                  unit === 'inches' ? 'bg-[var(--secondary)] text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                Inches (IN)
              </button>
              <button
                type="button"
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 text-xs font-bold cursor-pointer transition-colors ${
                  unit === 'cm' ? 'bg-[var(--secondary)] text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                Centimeters (CM)
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Men's Table */}
      {activeTab === 'mens' && (
        <div className="space-y-3">
          <div className="overflow-x-auto no-scrollbar border border-[var(--secondary)]/15 rounded-[3px]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[var(--secondary)] text-white text-[10.5px] font-black uppercase tracking-wider">
                  <th className="p-3 border-r border-white/10">Size Tag</th>
                  <th className="p-3 border-r border-white/10">Chest ({unit === 'inches' ? 'in' : 'cm'})</th>
                  <th className="p-3 border-r border-white/10">Shoulder Width</th>
                  <th className="p-3 border-r border-white/10">Sleeve Length</th>
                  <th className="p-3 border-r border-white/10">Back Length</th>
                  <th className="p-3 border-r border-white/10">Waist Span</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-medium text-[var(--secondary)]/85">
                {(unit === 'inches' ? mensInches : mensCm).map((row, idx) => (
                  <tr 
                    key={row.size} 
                    className={`hover:bg-amber-50/60 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}
                  >
                    <td className="p-3 font-black text-[var(--secondary)] border-r border-gray-100">{row.size}</td>
                    <td className="p-3 font-bold text-[var(--accent)] border-r border-gray-100">{row.chest}</td>
                    <td className="p-3 border-r border-gray-100">{row.shoulder}</td>
                    <td className="p-3 border-r border-gray-100">{row.sleeve}</td>
                    <td className="p-3 border-r border-gray-100">{row.length}</td>
                    <td className="p-3 border-r border-gray-100">{row.waist}</td>
                    <td className="p-3 text-right">
                      <button
                        type="button"
                        onClick={() => handleRowClick(row)}
                        className="px-2 py-1 bg-gray-100 hover:bg-[var(--accent)] hover:text-white text-[10px] font-bold uppercase rounded-[2px] transition-colors cursor-pointer"
                      >
                        {copiedSize === row.size ? 'Added ✓' : '+ Add to Notes'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-500 italic">
            * Click "+ Add to Notes" on any size row above to auto-append that sizing requirement directly into your inquiry notes field.
          </p>
        </div>
      )}

      {/* Women's Table */}
      {activeTab === 'womens' && (
        <div className="space-y-3">
          <div className="overflow-x-auto no-scrollbar border border-[var(--secondary)]/15 rounded-[3px]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[var(--secondary)] text-white text-[10.5px] font-black uppercase tracking-wider">
                  <th className="p-3 border-r border-white/10">Size Tag</th>
                  <th className="p-3 border-r border-white/10">Bust ({unit === 'inches' ? 'in' : 'cm'})</th>
                  <th className="p-3 border-r border-white/10">Shoulder Width</th>
                  <th className="p-3 border-r border-white/10">Sleeve Length</th>
                  <th className="p-3 border-r border-white/10">Back Length</th>
                  <th className="p-3 border-r border-white/10">Waist Span</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-medium text-[var(--secondary)]/85">
                {(unit === 'inches' ? womensInches : womensCm).map((row, idx) => (
                  <tr 
                    key={row.size} 
                    className={`hover:bg-amber-50/60 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}
                  >
                    <td className="p-3 font-black text-[var(--secondary)] border-r border-gray-100">{row.size}</td>
                    <td className="p-3 font-bold text-[var(--accent)] border-r border-gray-100">{row.bust}</td>
                    <td className="p-3 border-r border-gray-100">{row.shoulder}</td>
                    <td className="p-3 border-r border-gray-100">{row.sleeve}</td>
                    <td className="p-3 border-r border-gray-100">{row.length}</td>
                    <td className="p-3 border-r border-gray-100">{row.waist}</td>
                    <td className="p-3 text-right">
                      <button
                        type="button"
                        onClick={() => handleRowClick(row)}
                        className="px-2 py-1 bg-gray-100 hover:bg-[var(--accent)] hover:text-white text-[10px] font-bold uppercase rounded-[2px] transition-colors cursor-pointer"
                      >
                        {copiedSize === row.size ? 'Added ✓' : '+ Add to Notes'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-500 italic">
            * Women's silhouettes feature ergonomic tapering designed for motorcycle riding or fitted outerwear silhouettes.
          </p>
        </div>
      )}

      {/* Measuring Guide */}
      {activeTab === 'guide' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          <div className="p-3.5 bg-gray-50 rounded-[3px] border border-gray-200 space-y-1">
            <h5 className="font-bold text-[var(--secondary)] uppercase text-xs flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[var(--secondary)] text-white text-[10px] flex items-center justify-center">1</span>
              Chest / Bust Circumference
            </h5>
            <p className="text-[11px] text-gray-600 pl-5 leading-relaxed">
              Wrap the tape around the fullest part of your chest/bust under armpits, keeping the tape level.
            </p>
          </div>

          <div className="p-3.5 bg-gray-50 rounded-[3px] border border-gray-200 space-y-1">
            <h5 className="font-bold text-[var(--secondary)] uppercase text-xs flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[var(--secondary)] text-white text-[10px] flex items-center justify-center">2</span>
              Shoulder Breadth
            </h5>
            <p className="text-[11px] text-gray-600 pl-5 leading-relaxed">
              Measure straight across the upper back from left shoulder seam point to right shoulder point.
            </p>
          </div>

          <div className="p-3.5 bg-gray-50 rounded-[3px] border border-gray-200 space-y-1">
            <h5 className="font-bold text-[var(--secondary)] uppercase text-xs flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[var(--secondary)] text-white text-[10px] flex items-center justify-center">3</span>
              Sleeve Length
            </h5>
            <p className="text-[11px] text-gray-600 pl-5 leading-relaxed">
              With arm slightly bent at elbow, measure from the shoulder seam point down to wrist bone.
            </p>
          </div>

          <div className="p-3.5 bg-gray-50 rounded-[3px] border border-gray-200 space-y-1">
            <h5 className="font-bold text-[var(--secondary)] uppercase text-xs flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[var(--secondary)] text-white text-[10px] flex items-center justify-center">4</span>
              Back Torso Length
            </h5>
            <p className="text-[11px] text-gray-600 pl-5 leading-relaxed">
              Measure down center back from base of collar seam to desired lower hem edge.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
