import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ShieldCheck, Building2, Send, Check, 
  MessageSquare, Sparkles, Award, FileText, Phone, Mail, Globe, Users, Clock
} from 'lucide-react';
import { allProducts } from '../../data/productsData';
import { fullCatalog296 } from '../../data/fullCatalog296';
import { useCMS } from '../../context/CMSContext';

export default function InquiryPage({ 
  initialProductSlug = '', 
  onNavigateHome = () => {}, 
  onNavigateProducts = () => {} 
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const { submitInquiry } = useCMS();

  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    country: 'United States',
    sportCategory: 'Baseball',
    quantityTier: '25 to 50 Sets (Standard Team)',
    uniformType: 'Full Game Sets (Jersey + Pant + Socks)',
    fabricRequirement: '220 GSM Pro-Cool Moisture Wicking Polyester',
    decorationMethod: 'Full Dye-Sublimation (Included)',
    targetDeadline: 'Within 3 to 4 Weeks',
    notes: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (initialProductSlug) {
      const found = fullCatalog296.find(
        (p) => p.slug === initialProductSlug || p.name.toLowerCase() === initialProductSlug.toLowerCase()
      ) || allProducts.find(
        (p) => p.slug === initialProductSlug || p.name.toLowerCase() === initialProductSlug.toLowerCase()
      );
      if (found) {
        setSelectedProduct(found);
        setFormData((prev) => ({
          ...prev,
          sportCategory: found.sport || found.category || 'Baseball'
        }));
      } else {
        const readable = initialProductSlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        setSelectedProduct({
          name: readable,
          slug: initialProductSlug,
          category: 'BASEBALL',
          sport: 'Baseball',
          price: 34.99,
          fabric: 'Pro-Grade Moisture-Wicking Polyester (180-220 GSM)',
          image: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=800&q=80'
        });
      }
    }
  }, [initialProductSlug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const id = 'HAMLO-B2B-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(id);

    try {
      await submitInquiry({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.organization,
        sport: formData.sportCategory,
        product: selectedProduct ? selectedProduct.name : 'Custom Team Uniform',
        quantity: parseInt(formData.quantityTier, 10) || 25,
        message: `Uniform: ${formData.uniformType} | Fabric: ${formData.fabricRequirement} | Deco: ${formData.decorationMethod} | Deadline: ${formData.targetDeadline} | Notes: ${formData.notes || 'None'}`,
        source: 'website_inquiry_page',
      });
    } catch (err) {
      console.error('Error submitting inquiry to API:', err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const buildWhatsAppText = () => {
    const text = `Hello HAMLO SPORTS!\nI want to request a B2B factory quote:\n- Name: ${formData.fullName || 'Team Coach'}\n- Organization: ${formData.organization || 'Athletic Club'}\n- Sport: ${formData.sportCategory}\n- Quantity: ${formData.quantityTier}\n- Package: ${formData.uniformType}\n- Reference Product: ${selectedProduct ? selectedProduct.name : 'Custom Team Uniform'}\n\nPlease share the 3D mockup and factory pricing.`;
    return `https://wa.me/923000000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen text-[var(--secondary)] py-8">
      <div className="w-[96%] max-w-[1800px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[var(--secondary)]/60 mb-6">
          <button onClick={onNavigateHome} className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft size={12} /> HOME
          </button>
          <span>/</span>
          <button onClick={onNavigateProducts} className="hover:text-[var(--accent)] transition-colors cursor-pointer">
            SPORTS CATALOG
          </button>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">B2B QUOTE & 3D MOCKUP DESK</span>
        </div>

        {/* Header Hero Banner */}
        <div className="bg-[var(--secondary)] rounded-[3px] p-8 md:p-12 text-white mb-8 relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
            <Building2 size={360} />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
              <Sparkles size={14} /> SIALKOT FACTORY DIRECT • NO MIDDLEMEN
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">
              B2B TEAM QUOTE & 12-HR 3D MOCKUP REQUEST
            </h1>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl">
              Get an instant volume quotation and free multi-angle 3D digital mockup for your school, club, travel team, or brand. Direct export pricing with all player names, numbers, and sponsor logos included.
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
                QUOTE REQUEST REGISTERED
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)]">
                Reference ID: {inquiryId}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--secondary)]/70 max-w-md mx-auto mt-2">
                Thank you, <strong>{formData.fullName}</strong>. Our dedicated sportswear production desk will send your customized volume proposal and digital mockup within <strong>12 hours</strong>.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-[3px] p-4 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Sport Category:</span>
                <span className="font-bold text-[var(--secondary)]">{formData.sportCategory}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Batch Volume:</span>
                <span className="font-bold text-[var(--secondary)]">{formData.quantityTier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Package Format:</span>
                <span className="font-bold text-[var(--secondary)]">{formData.uniformType}</span>
              </div>
              {selectedProduct && (
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Design Template:</span>
                  <span className="font-bold text-[var(--accent)]">{selectedProduct.name}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={onNavigateProducts}
                className="px-6 py-3 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white font-bold text-xs uppercase tracking-widest rounded-[3px] transition-all cursor-pointer"
              >
                Return to Sports Catalog
              </button>
              <a
                href={buildWhatsAppText()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-[3px] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} /> Open Live WhatsApp Chat
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Form */}
            <div className="flex-1 w-full bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-8 shadow-sm">
              
              {/* Product Reference Card */}
              {selectedProduct && (
                <div className="mb-6 p-4 bg-gray-50 rounded-[3px] border border-[var(--accent)]/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={selectedProduct.image} 
                      alt="HAMLO SPORTS Selected Uniform Blueprint" 
                      className="w-12 h-14 object-cover rounded-[2px] bg-gray-200"
                    />
                    <div>
                      <span className="text-[9px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                        Selected Uniform Blueprint
                      </span>
                      <h4 className="text-sm font-black uppercase text-[var(--secondary)]">
                        {selectedProduct.name}
                      </h4>
                      <p className="text-[10px] text-gray-500">{selectedProduct.sport || selectedProduct.category} • Starting ${selectedProduct.price}</p>
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
                
                {/* 1. Coach / Team Profile */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[var(--secondary)] mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Users size={15} className="text-[var(--accent)]" />
                    1. Coach / Team / Organization Profile
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Full Name / Coach Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Coach David Miller"
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        School / Club / League Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. West Coast Baseball Academy"
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Email Address (for 3D Mockup & Quote) *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="coach@teamdomain.com"
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Phone / WhatsApp (Direct Updates) *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 234-5678"
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Order Scope & Quantity */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[var(--secondary)] mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Building2 size={15} className="text-[var(--accent)]" />
                    2. Uniform Scope & Estimated Batch Size
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Sport Discipline
                      </label>
                      <select
                        value={formData.sportCategory}
                        onChange={(e) => setFormData({ ...formData, sportCategory: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)] bg-white"
                      >
                        <option value="Baseball">Baseball</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Football">Football</option>
                        <option value="Flag Football">Flag Football</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Ice Hockey">Ice Hockey</option>
                        <option value="Esports">Esports</option>
                        <option value="Lacrosse">Lacrosse</option>
                        <option value="Rugby">Rugby</option>
                        <option value="Softball">Softball</option>
                        <option value="Volleyball">Volleyball</option>
                        <option value="Wrestling">Wrestling</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Estimated Batch Quantity
                      </label>
                      <select
                        value={formData.quantityTier}
                        onChange={(e) => setFormData({ ...formData, quantityTier: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)] bg-white"
                      >
                        <option value="1 to 24 Sets (Single Team)">1 to 24 Sets (Single Team)</option>
                        <option value="25 to 50 Sets (Standard Team)">25 to 50 Sets (Standard Team - Save $5/ea)</option>
                        <option value="51 to 100 Sets (Multiple Squads)">51 to 100 Sets (Multiple Squads - Save $7/ea)</option>
                        <option value="101+ Sets (Full League / Best Value)">101+ Sets (Full League / Best Value)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Package Format
                      </label>
                      <select
                        value={formData.uniformType}
                        onChange={(e) => setFormData({ ...formData, uniformType: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)] bg-white"
                      >
                        <option value="Full Game Sets (Jersey + Pant + Socks)">Full Game Sets (Jersey + Pant + Socks)</option>
                        <option value="Game Jerseys Only">Game Jerseys Only</option>
                        <option value="Pants / Shorts Only">Pants / Shorts Only</option>
                        <option value="Warmup Hoodies & Cage Jackets">Warmup Hoodies & Cage Jackets</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                        Decoration Preference
                      </label>
                      <select
                        value={formData.decorationMethod}
                        onChange={(e) => setFormData({ ...formData, decorationMethod: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)] bg-white"
                      >
                        <option value="Full Dye-Sublimation (Included)">Full Dye-Sublimation (Included - $0 extra)</option>
                        <option value="Pro Tackle Twill Stitched (+ $5/player)">Pro Tackle Twill Stitched (+ $5/player)</option>
                        <option value="Embroidery & Sublimation Combo">Embroidery & Sublimation Combo</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Team Colors, Roster & Notes */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[var(--secondary)] mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <FileText size={15} className="text-[var(--accent)]" />
                    3. Team Colors, Design Idea & Roster Details
                  </h3>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">
                      Team Colors, Logo placement, or Tournament Deadline Date
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Primary colors: Navy Blue and Gold. We have our logo vector ready. Game opening is next month on June 20th."
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[var(--accent)] hover:opacity-90 disabled:opacity-50 text-white font-black text-xs uppercase tracking-widest rounded-[3px] shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={14} />
                    <span>{submitting ? 'Submitting to Factory Desk...' : 'Request Free 3D Mockup & Volume Quote'}</span>
                  </button>

                  <a
                    href={buildWhatsAppText()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-[3px] flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageSquare size={14} />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>

              </form>
            </div>

            {/* Right Factory Guarantees */}
            <div className="w-full lg:w-80 space-y-4">
              
              {/* WhatsApp Fast Track Box */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-[3px] p-5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800">
                  <MessageSquare size={18} className="text-emerald-600 flex-shrink-0" />
                  <h4 className="text-xs font-black uppercase tracking-wider">Fast WhatsApp Desk</h4>
                </div>
                <p className="text-xs text-emerald-900/80 leading-relaxed">
                  Chat directly with our Sialkot factory production head. Send logos, sketches, or previous uniforms for instant review.
                </p>
                <a
                  href={buildWhatsAppText()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-[3px] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Open WhatsApp (+92)</span>
                </a>
              </div>

              {/* Manufacturing Capabilities Box */}
              <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-5 shadow-sm space-y-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-[var(--secondary)] flex items-center gap-1.5">
                  <Award size={14} className="text-[var(--accent)]" />
                  Direct Factory Guarantees
                </h4>

                <ul className="space-y-2.5 text-xs text-[var(--secondary)]/80">
                  <li className="flex items-start gap-2">
                    <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Free 12-Hour 3D Mockup</strong> with custom team roster & sponsor logos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>33-Day Delivery Benchmark</strong> right to your school/club door.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Free Remake Guarantee</strong> covering any spelling, number, or sizing flaw.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>School Purchase Orders (POs)</strong> with Net 30 terms accepted.</span>
                  </li>
                </ul>
              </div>

              {/* Direct Contacts */}
              <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-5 shadow-sm space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-[var(--secondary)]/70">
                  <Mail size={13} className="text-[var(--accent)]" />
                  <span>export@hamlosports.com</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--secondary)]/70">
                  <Phone size={13} className="text-[var(--accent)]" />
                  <span>Direct Export Desk: +92 (52) 111-HAMLO</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--secondary)]/70">
                  <Globe size={13} className="text-[var(--accent)]" />
                  <span>Sialkot, Pakistan • Exporting to 35+ Countries</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
