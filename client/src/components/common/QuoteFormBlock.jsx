import React, { useState } from 'react';
import { Send, CheckCircle, Clock, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export default function QuoteFormBlock({ defaultSport = 'Soccer', defaultProduct = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { submitInquiry } = useCMS();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    teamDetails: defaultProduct ? `Interested in: ${defaultProduct}` : `Sport: ${defaultSport}`
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitInquiry({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        sport: defaultSport || 'Athletic',
        product: defaultProduct || '',
        message: formData.teamDetails,
        source: 'quote_form_block',
      });
    } catch (err) {
      console.error('Error submitting quote block:', err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="quote-form-section" className="w-full bg-[var(--secondary)] text-white py-16 md:py-24 border-t border-white/10">
      <div className="w-[96%] max-w-[1800px] max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[var(--accent)] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles size={13} />
            <span>FREE 3D DIGITAL MOCKUP IN 12 HOURS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            GET YOUR FACTORY DIRECT QUOTE
          </h2>
          <p className="text-xs md:text-sm text-white/70 max-w-lg mx-auto mt-2 font-light">
            Tell us about your team or league. A dedicated production specialist replies within 1 hour during business hours with exact pricing and 3D mockups.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/5 border border-emerald-500/30 rounded-[3px] p-8 md:p-12 text-center flex flex-col items-center">
            <CheckCircle size={48} className="text-emerald-400 mb-4" />
            <h3 className="text-2xl font-black uppercase text-white mb-2">Quote Request Received!</h3>
            <p className="text-sm text-white/80 max-w-md mb-6">
              Thank you {formData.fullName}! Our design team has already queued your request. You will receive your 3D digital mockup and official invoice estimate via email shortly.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-[var(--accent)] font-bold uppercase tracking-wider">
              <Clock size={14} /> Average response time: under 45 minutes
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-[3px] p-6 sm:p-10 shadow-2xl text-[var(--secondary)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--secondary)]/70 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Coach David Miller"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-[3px] border border-neutral-300 focus:border-[var(--accent)] focus:outline-none text-xs sm:text-sm text-[var(--secondary)] font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--secondary)]/70 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="coach@team.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-[3px] border border-neutral-300 focus:border-[var(--accent)] focus:outline-none text-xs sm:text-sm text-[var(--secondary)] font-medium"
                />
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--secondary)]/70 mb-1.5">
                Phone Number (WhatsApp for faster mockups) *
              </label>
              <input
                type="tel"
                required
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-[3px] border border-neutral-300 focus:border-[var(--accent)] focus:outline-none text-xs sm:text-sm text-[var(--secondary)] font-medium"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--secondary)]/70 mb-1.5">
                Tell Us About Your Team & Quantity *
              </label>
              <textarea
                rows={3}
                required
                placeholder="e.g. 25 Soccer Uniforms (Jersey + Shorts) in Navy/Gold with team crest. Need by March 15th."
                value={formData.teamDetails}
                onChange={(e) => setFormData({ ...formData, teamDetails: e.target.value })}
                className="w-full px-4 py-3 rounded-[3px] border border-neutral-300 focus:border-[var(--accent)] focus:outline-none text-xs sm:text-sm text-[var(--secondary)] font-medium"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-[var(--accent)] disabled:opacity-50 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-[3px] hover:opacity-95 transition-all shadow-xl cursor-pointer"
            >
              {submitting ? 'Submitting Request...' : 'Get My Free Quote & 3D Mockup'}
            </button>

            <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between text-[10px] text-neutral-500 gap-2">
              <span className="flex items-center gap-1">
                <Clock size={12} className="text-[var(--accent)]" /> A real production specialist replies within 1 hour.
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck size={12} className="text-emerald-600" /> Sialkot Factory Direct • 100% Satisfaction Guarantee
              </span>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
