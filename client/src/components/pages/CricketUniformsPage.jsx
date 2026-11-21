import React, { useState } from 'react';
import { Check, Clock, ShieldCheck, ArrowRight, Award, MessageSquare, Send } from 'lucide-react';
import SEO from '../common/SEO';
import TrustBar from '../common/TrustBar';
import { useCMS } from '../../context/CMSContext';

const CRICKET_PRODUCTS = [
  {
    name: 'Custom Sublimated T20 Cricket Jerseys',
    price: '$34.99',
    moq: '15 Sets',
    fabric: '160 GSM Micro-Mesh Poly Interlock',
    desc: 'Lightweight, ultra-breathable moisture-wicking cricket jerseys with mandarin or polo collar. Unlimited vibrant sublimated colors, sponsor logos, and player numbers.',
    img: 'https://images.unsplash.com/photo-1531415074868-036b107e775a?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Custom Cricket Match Trousers & Pants',
    price: '$29.99',
    moq: '15 Pairs',
    fabric: '220 GSM 4-Way Stretch Performance Knit',
    desc: 'Ergonomic cricket match pants with deep side pockets, elastic drawstring waistband, reinforced knee panels, and custom team side trim piping.',
    img: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Traditional Custom Cricket Test Whites Set',
    price: '$59.99',
    moq: '15 Sets',
    fabric: '180 GSM Premium Anti-Pilling Poly Blend',
    desc: 'Classic cream or pristine white cricket polo jersey and matching pants with embroidered club chest crest and contrast collar tipping.',
    img: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Custom Sleeveless Cricket Slipover Sweaters',
    price: '$38.99',
    moq: '15 Pcs',
    fabric: '260 GSM Cable-Knit Thermal Polyester',
    desc: 'Traditional V-neck cable knit cricket slipover vests for chilly morning overs. Ribbed waistband and neckband with your team accent stripes.',
    img: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=600&q=80'
  }
];

export default function CricketUniformsPage({ onNavigateInquiry = () => {} }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    teamName: '',
    quantity: '20',
    notes: 'Need custom cricket uniforms with club crest and player numbers.'
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { submitInquiry } = useCMS();

  const handleCricketQuote = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        sport: 'Cricket',
        quantity: parseInt(formData.quantity) || 20,
        message: `CUSTOM CRICKET UNIFORMS USA INQUIRY:
Club Name: ${formData.teamName}
Quantity: ${formData.quantity} sets
Requirements: ${formData.notes}`,
        source: 'custom_cricket_uniforms_usa'
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
        title="Custom Cricket Uniforms USA | Factory-Direct Sialkot | Hamlo Sports Wear"
        description="Custom cricket uniforms, sublimated T20 jerseys, and traditional match whites for American cricket clubs and leagues. 15-set low MOQ, 12-hour 3D mockups, 8–12 day turnaround, DDP USA shipping."
        canonical="https://www.hamlosportswear.site/custom-cricket-uniforms/"
        keywords="custom cricket uniforms usa, custom cricket jerseys usa, custom cricket whites, t20 cricket uniforms, cricket team apparel manufacturer, sialkot cricket uniforms"
      />

      {/* Hero */}
      <section className="bg-[var(--secondary)] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="w-[96%] max-w-[1800px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
            <span>UNCONTESTED LEADER IN AMERICAN CRICKET TEAMWEAR</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-3">
            CUSTOM CRICKET UNIFORMS & JERSEYS USA
          </h1>

          <p className="text-base sm:text-xl font-bold text-white/90 max-w-2xl mb-3">
            Full dye-sublimated T20 jerseys, match whites, and team slipovers direct from Sialkot makers.
          </p>

          <p className="text-xs sm:text-sm text-white/70 max-w-2xl font-light leading-relaxed mb-6">
            Equipping adult recreational cricket leagues, Major League Cricket (MLC) academies, and collegiate cricket clubs across California, Texas, New York, Florida, and nationwide. Low 15-set minimum order, 12-hour free 3D proofs, and 8–12 day production.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-[11px] font-semibold text-white/80 mb-8">
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Check size={14} className="text-[var(--accent)]" /> Low 15-Set Team MOQ
            </span>
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Clock size={14} className="text-[var(--accent)]" /> Free 12-Hour 3D CAD Mockup
            </span>
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[var(--accent)]" /> DDP Pre-Cleared US Shipping
            </span>
          </div>

          <a
            href="#cricket-quote"
            className="px-8 py-4 bg-[var(--accent)] text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-[3px] shadow-2xl hover:opacity-95 transition cursor-pointer"
          >
            REQUEST FREE 3D CRICKET MOCKUP
          </a>
        </div>
      </section>

      <TrustBar />

      {/* Product Showcase */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            MATCH-TESTED SILHOUETTES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[var(--secondary)] mt-1">
            Pro Cricket Teamwear Cuts
          </h2>
          <p className="text-xs sm:text-sm text-[var(--secondary)]/60 max-w-xl mx-auto mt-2">
            Manufactured in Sialkot, Pakistan—the world's historic hub for cricket manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRICKET_PRODUCTS.map((prod, idx) => (
            <div key={idx} className="bg-white rounded-[5px] border border-[var(--secondary)]/10 shadow-md p-4 flex flex-col justify-between group hover:border-[var(--accent)] transition">
              <div>
                <div className="aspect-[4/5] bg-neutral-100 rounded mb-3 overflow-hidden">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <h3 className="text-sm font-black uppercase text-[var(--secondary)] mb-1 group-hover:text-[var(--accent)]">
                  {prod.name}
                </h3>
                <p className="text-xs text-neutral-600 line-clamp-3 mb-3 leading-relaxed">
                  {prod.desc}
                </p>
                <div className="text-[11px] text-neutral-500 font-semibold mb-3">
                  <span className="block">Fabric: {prod.fabric}</span>
                  <span className="block text-emerald-700 font-bold">MOQ: {prod.moq}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-neutral-400 font-bold uppercase block">Starting at</span>
                  <strong className="text-base font-black text-[var(--secondary)]">{prod.price}</strong>
                </div>
                <a
                  href="#cricket-quote"
                  className="px-3.5 py-2 bg-[var(--accent)] text-white text-xs font-black uppercase tracking-wider rounded transition hover:opacity-90 cursor-pointer"
                >
                  Quote Kit
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            FACTORY-DIRECT TRANSPARENCY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
            USA Cricket Volume Pricing (Per Player)
          </h2>
        </div>

        <div className="overflow-x-auto bg-white rounded-[4px] border border-[var(--secondary)]/15 shadow-lg">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[var(--secondary)] text-white text-[11px] uppercase tracking-wider">
                <th className="py-4 px-6 w-2/5">CRICKET GARMENT</th>
                <th className="py-4 px-4">15 TO 24</th>
                <th className="py-4 px-4">25 TO 50</th>
                <th className="py-4 px-4">51 TO 100</th>
                <th className="py-4 px-4 bg-[var(--accent)] text-white font-black">101+</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 font-medium">
              <tr>
                <td className="py-4 px-6 font-bold text-[var(--secondary)]">Sublimated T20 Jersey (Short or Long Sleeve)</td>
                <td className="py-4 px-4">$34.99</td>
                <td className="py-4 px-4">$31.99</td>
                <td className="py-4 px-4">$28.99</td>
                <td className="py-4 px-4 font-bold text-[var(--accent)]">$24.99</td>
              </tr>
              <tr className="bg-neutral-50/50">
                <td className="py-4 px-6 font-bold text-[var(--secondary)]">Full T20 Kit (Sublimated Jersey + Match Pants)</td>
                <td className="py-4 px-4">$59.99</td>
                <td className="py-4 px-4">$54.99</td>
                <td className="py-4 px-4">$49.99</td>
                <td className="py-4 px-4 font-bold text-[var(--accent)]">$42.99</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-bold text-[var(--secondary)]">Traditional Test Whites Set (Embroidered Polo + Pants)</td>
                <td className="py-4 px-4">$59.99</td>
                <td className="py-4 px-4">$54.99</td>
                <td className="py-4 px-4">$49.99</td>
                <td className="py-4 px-4 font-bold text-[var(--accent)]">$42.99</td>
              </tr>
              <tr className="bg-neutral-50/50">
                <td className="py-4 px-6 font-bold text-[var(--secondary)]">Cable Knit Sleeveless Slipover Vest</td>
                <td className="py-4 px-4">$38.99</td>
                <td className="py-4 px-4">$34.99</td>
                <td className="py-4 px-4">$31.99</td>
                <td className="py-4 px-4 font-bold text-[var(--accent)]">$26.99</td>
              </tr>
            </tbody>
          </table>
          <div className="p-4 bg-neutral-100 text-[11.5px] text-[var(--secondary)]/85 border-t border-[var(--secondary)]/10">
            * All cricket jerseys include unlimited sublimated team colors, sponsor chest logos, club badges, player names and numbers with zero setup charges. DDP USA delivery included.
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="cricket-quote" className="w-[96%] max-w-[900px] mx-auto my-14 sm:my-20 bg-white p-8 sm:p-12 rounded-[5px] border border-[var(--secondary)]/15 shadow-xl">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            FAST B2B QUOTATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
            Request Cricket Team Mockup & Price Quote
          </h2>
          <p className="text-xs text-neutral-600 mt-2">
            Our Sialkot design desk returns your official 3D cricket proof within 12 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-300 rounded text-center">
            <Check className="mx-auto text-emerald-600 mb-2" size={32} />
            <h3 className="text-base font-black uppercase text-emerald-900">Inquiry Dispatched Successfully!</h3>
            <p className="text-xs text-emerald-800 mt-1">A cricket uniform specialist will email your free 3D mockups and locked volume invoice within 12 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleCricketQuote} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">Your Full Name:</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                  placeholder="E.g. Coach David / Captain Ali"
                  className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-xs focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">Email Address:</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                  placeholder="coach@cricketclub.com"
                  className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-xs focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">Club / League Name:</label>
                <input
                  type="text"
                  required
                  value={formData.teamName}
                  onChange={(e) => setFormData(p => ({ ...p, teamName: e.target.value }))}
                  placeholder="E.g. Texas Cricket Academy"
                  className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-xs focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">Roster Quantity (Sets):</label>
                <input
                  type="number"
                  min="15"
                  required
                  value={formData.quantity}
                  onChange={(e) => setFormData(p => ({ ...p, quantity: e.target.value }))}
                  className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-xs focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">Color Scheme & Uniform Notes:</label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData(p => ({ ...p, notes: e.target.value }))}
                placeholder="Mention shirt collar preference (polo vs mandarin), team colors, and target in-hand date..."
                className="w-full px-3.5 py-2.5 border border-neutral-300 rounded text-xs focus:outline-none focus:border-[var(--accent)]"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 bg-[var(--accent)] text-white font-black text-xs uppercase tracking-wider rounded hover:opacity-95 transition cursor-pointer shadow-lg flex items-center justify-center gap-2"
            >
              {submitting ? 'Submitting Inquiry...' : 'Get Instant 3D Proof & Volume Quote'}
              <Send size={14} />
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
