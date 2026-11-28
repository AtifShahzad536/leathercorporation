import React, { useState } from 'react';
import { Check, Clock, ShieldCheck, ArrowRight, Award, Send } from 'lucide-react';
import SEO from '../common/SEO';
import TrustBar from '../common/TrustBar';
import { useCMS } from '../../context/CMSContext';

export default function SportsGlovesPage({ onNavigateInquiry = () => {} }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', club: '', qty: '15' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { submitInquiry } = useCMS();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'N/A',
        sport: 'Sports Gloves',
        quantity: parseInt(formData.qty) || 15,
        message: `CUSTOM SPORTS GLOVES / GOALKEEPER GLOVES INQUIRY:
Club/Team: ${formData.club}
Pairs: ${formData.qty} pairs
Product: Pro German Latex Match Goalkeeper Gloves`,
        source: 'custom_sports_gloves'
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">
      <SEO
        title="Custom Sports Gloves & Goalkeeper Gloves USA | Hamlo Sports Wear"
        description="Custom goalkeeper gloves and athletic sports gloves manufactured factory-direct in Sialkot, Pakistan. 4mm German Contact Latex, negative cut, sublimated wrist straps. Low 15-pair MOQ, DDP USA shipping."
        canonical="https://www.hamlosportswear.site/custom-sports-gloves/"
        keywords="custom sports gloves, goalkeeper gloves, custom soccer goalkeeper gloves, custom batting gloves, factory direct sports gloves Sialkot"
      />

      <section className="bg-[var(--secondary)] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="w-[96%] max-w-[1800px] mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
            SIALKOT FACTORY DIRECT GLOVE CRAFTSMANSHIP
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-3">
            CUSTOM SPORTS GLOVES & GOALKEEPER GLOVES
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl font-light leading-relaxed mb-6">
            Pro-grade German contact latex goalkeeper gloves, football receiver gloves, and baseball batting gloves with custom club crests, silicone grip textures, and personalized wrist wraps.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[11px] font-semibold text-white/80 mb-8">
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Check size={14} className="text-[var(--accent)]" /> 4mm German Contact Latex
            </span>
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Clock size={14} className="text-[var(--accent)]" /> Low 15-Pair MOQ
            </span>
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[var(--accent)]" /> Removable Finger Protection
            </span>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm">
            <h2 className="text-base font-black uppercase text-[var(--secondary)] mb-2">Pro Match Goalkeeper Gloves</h2>
            <p className="text-xs text-neutral-600 mb-4 leading-relaxed">Negative cut or roll finger palm with 4mm German Contact Latex, 3D embossed silicone punch zone, and sublimated latex wrist strap.</p>
            <div className="text-sm font-black text-[var(--accent)]">From $36.99 / pair</div>
          </div>
          <div className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm">
            <h2 className="text-base font-black uppercase text-[var(--secondary)] mb-2">Custom Football Receiver Gloves</h2>
            <p className="text-xs text-neutral-600 mb-4 leading-relaxed">Ultra-tack silicone palms, 4-way stretch poly-spandex backhand, and interlocking team logo graphics across both palms.</p>
            <div className="text-sm font-black text-[var(--accent)]">From $24.99 / pair</div>
          </div>
          <div className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm">
            <h2 className="text-base font-black uppercase text-[var(--secondary)] mb-2">Custom Batting & Equipment Gloves</h2>
            <p className="text-xs text-neutral-600 mb-4 leading-relaxed">Pittards sheepskin leather palms with reinforced thumb padding, neoprene wrist cuffs, and embroidered club logos.</p>
            <div className="text-sm font-black text-[var(--accent)]">From $26.99 / pair</div>
          </div>
        </div>
      </section>

      <section className="w-[96%] max-w-[800px] mx-auto my-14 sm:my-20 bg-white p-8 rounded-[4px] border border-[var(--secondary)]/15 shadow-xl">
        <h2 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)] text-center mb-6">
          Request Custom Sports Gloves Sample & Volume Pricing
        </h2>
        {submitted ? (
          <div className="p-4 bg-emerald-50 text-emerald-800 text-center rounded text-xs font-bold">
            Sports glove inquiry dispatched! Our glove master will email sample specifications and 3D mockups within 12 hours.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Coach / Keeper Name"
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                className="w-full px-3 py-2 border rounded text-xs"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                className="w-full px-3 py-2 border rounded text-xs"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Club / Academy Name"
                value={formData.club}
                onChange={e => setFormData(p => ({ ...p, club: e.target.value }))}
                className="w-full px-3 py-2 border rounded text-xs"
              />
              <input
                type="number"
                min="15"
                placeholder="Quantity (Pairs, Min 15)"
                value={formData.qty}
                onChange={e => setFormData(p => ({ ...p, qty: e.target.value }))}
                className="w-full px-3 py-2 border rounded text-xs"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-[var(--accent)] text-white font-black text-xs uppercase tracking-wider rounded hover:opacity-95 transition"
            >
              {submitting ? 'Submitting...' : 'Request Glove Proof & Volume Quote'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
