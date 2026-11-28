import React, { useState } from 'react';
import { Check, Clock, ShieldCheck, ArrowRight, Award, Send } from 'lucide-react';
import SEO from '../common/SEO';
import TrustBar from '../common/TrustBar';
import { useCMS } from '../../context/CMSContext';

export default function FieldHockeyPage({ onNavigateInquiry = () => {} }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', team: '', qty: '18' });
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
        sport: 'Field Hockey',
        quantity: parseInt(formData.qty) || 18,
        message: `CUSTOM FIELD HOCKEY UNIFORMS USA INQUIRY:
Team/Program: ${formData.team}
Quantity: ${formData.qty} sets
Product: Sublimated Match Tops, Kilts & Goalie Smocks`,
        source: 'custom_field_hockey_uniforms'
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
        title="Custom Field Hockey Uniforms & Kilts USA | Hamlo Sports Wear"
        description="Factory-direct custom field hockey uniforms, racerback singlets, team kilts, socks, and padded goalie smocks. Low 15-set MOQ, 8–12 day turnaround, DDP USA shipping."
        canonical="https://www.hamlosportswear.site/custom-field-hockey-uniforms/"
        keywords="custom field hockey uniforms, custom field hockey kilts, field hockey jerseys, field hockey goalie smocks, custom field hockey apparel"
      />

      <section className="bg-[var(--secondary)] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="w-[96%] max-w-[1800px] mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
            NCAA & NFHS COMPLIANT FIELD HOCKEY UNIFORMS
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-3">
            CUSTOM FIELD HOCKEY UNIFORMS & KILTS USA
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl font-light leading-relaxed mb-6">
            Dye-sublimated racerback jerseys, team kilts/skorts, and high-impact goalie smocks engineered for school and club competition. Low 15-set minimum order, free 12-hour 3D proofs.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[11px] font-semibold text-white/80 mb-8">
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Check size={14} className="text-[var(--accent)]" /> Low 15-Set Team MOQ
            </span>
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Clock size={14} className="text-[var(--accent)]" /> 12h Free 3D Proof
            </span>
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[var(--accent)]" /> 8–12 Day Production
            </span>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm">
            <h2 className="text-base font-black uppercase text-[var(--secondary)] mb-2">Racerback Field Hockey Jerseys</h2>
            <p className="text-xs text-neutral-600 mb-4 leading-relaxed">Full dye-sublimated 160 GSM athletic polyester with moisture-wicking capillary channels and pad-compatible armholes.</p>
            <div className="text-sm font-black text-[var(--accent)]">From $34.99 / each</div>
          </div>
          <div className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm">
            <h2 className="text-base font-black uppercase text-[var(--secondary)] mb-2">Custom Field Hockey Kilts & Skorts</h2>
            <p className="text-xs text-neutral-600 mb-4 leading-relaxed">Box pleat or athletic A-line cut with integrated compression undershorts and reinforced waistband.</p>
            <div className="text-sm font-black text-[var(--accent)]">From $29.99 / each</div>
          </div>
          <div className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm">
            <h2 className="text-base font-black uppercase text-[var(--secondary)] mb-2">Padded Goalkeeper Smocks</h2>
            <p className="text-xs text-neutral-600 mb-4 leading-relaxed">Oversized cut designed to fit comfortably over chest protectors and arm guards without binding.</p>
            <div className="text-sm font-black text-[var(--accent)]">From $44.99 / each</div>
          </div>
        </div>
      </section>

      <section className="w-[96%] max-w-[800px] mx-auto my-14 sm:my-20 bg-white p-8 rounded-[4px] border border-[var(--secondary)]/15 shadow-xl">
        <h2 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)] text-center mb-6">
          Request Field Hockey 3D Mockup & Volume Quote
        </h2>
        {submitted ? (
          <div className="p-4 bg-emerald-50 text-emerald-800 text-center rounded text-xs font-bold">
            Field hockey uniform request received! A designer will send your 3D digital proof in 12 hours.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Coach / Athletic Director Name"
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
                placeholder="School / Club Program Name"
                value={formData.team}
                onChange={e => setFormData(p => ({ ...p, team: e.target.value }))}
                className="w-full px-3 py-2 border rounded text-xs"
              />
              <input
                type="number"
                min="15"
                placeholder="Roster Size (Min 15)"
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
              {submitting ? 'Submitting...' : 'Request 12-Hour 3D Proof'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
