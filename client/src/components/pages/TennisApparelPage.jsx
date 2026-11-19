import React, { useState } from 'react';
import { Check, Clock, ShieldCheck, ArrowRight, Award, Send } from 'lucide-react';
import SEO from '../common/SEO';
import TrustBar from '../common/TrustBar';
import { useCMS } from '../../context/CMSContext';

export default function TennisApparelPage({ onNavigateInquiry = () => {} }) {
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
        sport: 'Tennis',
        quantity: parseInt(formData.qty) || 15,
        message: `CUSTOM TENNIS APPAREL USA INQUIRY:
Club/School: ${formData.club}
Quantity: ${formData.qty} pieces
Product: Custom Sublimated Tennis Polos & Team Apparel`,
        source: 'custom_tennis_apparel_usa'
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
        title="Custom Tennis Apparel USA | Team Polos & Skirts | Hamlo Sports Wear"
        description="Custom tennis apparel for varsity high school teams, collegiate clubs, and academies. Sublimated performance polos, tennis skirts, warmups, and jackets. Low 15-set MOQ, 8–12 day production, DDP USA shipping."
        canonical="https://hamlosportswear.site/custom-tennis-apparel/"
        keywords="custom tennis apparel usa, custom tennis polos, custom tennis team uniforms, custom tennis skirts, collegiate tennis apparel, tennis warm-up jackets"
      />

      <section className="bg-[var(--secondary)] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="w-[96%] max-w-[1800px] mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
            COLLEGIATE & VARSITY TENNIS PERFORMANCE
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-3">
            CUSTOM TENNIS APPAREL & TEAM POLOS USA
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl font-light leading-relaxed mb-6">
            Equip your tennis roster with lightweight 140 GSM micro-pique sublimated polos, 4-way stretch skirts, and sideline track warmups. Low 15-set minimum order, 12-hour 3D proof turnaround, and fast DDP US delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[11px] font-semibold text-white/80 mb-8">
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Check size={14} className="text-[var(--accent)]" /> Low 15-Piece MOQ
            </span>
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Clock size={14} className="text-[var(--accent)]" /> 12h Free 3D Proof
            </span>
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[var(--accent)]" /> UV 50+ Sun Protection
            </span>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm">
            <h3 className="text-base font-black uppercase text-[var(--secondary)] mb-2">Custom Sublimated Team Polos</h3>
            <p className="text-xs text-neutral-600 mb-4 leading-relaxed">140 GSM moisture-wicking micro-pique fabric with self-fabric collar, 3-button placket, and sublimated team colors.</p>
            <div className="text-sm font-black text-[var(--accent)]">From $32.99 / each</div>
          </div>
          <div className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm">
            <h3 className="text-base font-black uppercase text-[var(--secondary)] mb-2">Custom Tennis Skirts & Skorts</h3>
            <p className="text-xs text-neutral-600 mb-4 leading-relaxed">Built-in compression shorts with ball pockets, wide non-rolling elastic waistband, and anti-chafing flatlock seams.</p>
            <div className="text-sm font-black text-[var(--accent)]">From $28.99 / each</div>
          </div>
          <div className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm">
            <h3 className="text-base font-black uppercase text-[var(--secondary)] mb-2">Tennis Sideline Warm-Up Jackets</h3>
            <p className="text-xs text-neutral-600 mb-4 leading-relaxed">Water-resistant, breathable windbreaker jackets with full-zip front, raglan sleeves, and custom embroidered club crests.</p>
            <div className="text-sm font-black text-[var(--accent)]">From $46.99 / each</div>
          </div>
        </div>
      </section>

      <section className="w-[96%] max-w-[800px] mx-auto my-14 sm:my-20 bg-white p-8 rounded-[4px] border border-[var(--secondary)]/15 shadow-xl">
        <h2 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)] text-center mb-6">
          Request Tennis Team 3D Mockup & Volume Quote
        </h2>
        {submitted ? (
          <div className="p-4 bg-emerald-50 text-emerald-800 text-center rounded text-xs font-bold">
            Thank you! Your tennis apparel inquiry is logged. A specialist will send your 3D proof within 12 hours.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Coach / Captain Name"
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
                placeholder="School / Tennis Club Name"
                value={formData.club}
                onChange={e => setFormData(p => ({ ...p, club: e.target.value }))}
                className="w-full px-3 py-2 border rounded text-xs"
              />
              <input
                type="number"
                min="15"
                placeholder="Quantity (Sets, Min 15)"
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
              {submitting ? 'Submitting...' : 'Get Free 3D Proof & Quote'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
