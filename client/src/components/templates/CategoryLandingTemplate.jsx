import React, { useState } from 'react';
import { Calculator, Calendar, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import TrustBar from '../common/TrustBar';
import QuoteFormBlock from '../common/QuoteFormBlock';

export default function CategoryLandingTemplate({
  sportName = 'Soccer',
  heroHeadline = 'No Minimum Order. Custom Soccer Uniforms Before Your First Whistle.',
  startingJerseyPrice = '$34.99',
  startingSetPrice = '$69.99',
  onNavigateInquiry = () => {},
  onSelectProduct = () => {}
}) {
  // Volume tiers as per Hamco benchmark
  const priceTiers = [
    { qty: '1 - 24', jersey: '$44.99', set: '$79.99', note: 'Base tier' },
    { qty: '25 - 50', jersey: '$42.99', set: '$74.99', note: 'Save $5 / set' },
    { qty: '51 - 100', jersey: '$39.99', set: '$72.99', note: 'Save $7 / set' },
    { qty: '101+', jersey: '$34.99', set: '$69.99', note: 'Best Value' }
  ];

  // Interactive Price Calculator state
  const [calcQty, setCalcQty] = useState(25);
  const [calcType, setCalcType] = useState('set'); // 'jersey' or 'set'

  const calculateTotal = () => {
    let pricePerUnit = 0;
    if (calcType === 'set') {
      if (calcQty >= 101) pricePerUnit = 69.99;
      else if (calcQty >= 51) pricePerUnit = 72.99;
      else if (calcQty >= 25) pricePerUnit = 74.99;
      else pricePerUnit = 79.99;
    } else {
      if (calcQty >= 101) pricePerUnit = 34.99;
      else if (calcQty >= 51) pricePerUnit = 39.99;
      else if (calcQty >= 25) pricePerUnit = 42.99;
      else pricePerUnit = 44.99;
    }
    return {
      unit: pricePerUnit,
      total: (pricePerUnit * calcQty).toFixed(2)
    };
  };

  const calcResult = calculateTotal();

  // Deadline Calculator state
  const [gameDate, setGameDate] = useState('');
  const getApprovalDeadline = () => {
    if (!gameDate) return null;
    const d = new Date(gameDate);
    d.setDate(d.getDate() - 33); // 33-day production & shipping benchmark rule
    return d.toDateString();
  };

  const faqs = [
    {
      q: `What is the turnaround time for custom ${sportName} uniforms?`,
      a: `Free 3D digital mockups are ready within 12 hours. Standard factory production is 2 to 3 weeks following design approval. Rush options available.`
    },
    {
      q: `Do you charge extra for custom names, player numbers, or sponsor logos?`,
      a: `Never. Full dye-sublimation includes unlimited team colors, full-chest crests, sponsor branding, individual player names, and numbers at no additional setup charge.`
    },
    {
      q: `Can we re-order small quantities later if we add a new player?`,
      a: `Yes! Once your team pattern is digitized in our factory system, we save your color codes and design files forever. Reorders are quick with no artwork fees.`
    },
    {
      q: `What fabric is used for ${sportName} kits?`,
      a: `We use athletic 160-220 GSM moisture-wicking interlock polyester with reinforced flat-lock coverstitch seams for optimal agility and durability.`
    }
  ];

  return (
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)]">
      
      {/* ── 1. HERO + QUICK ANSWER BOX ────────────────────────────────────────── */}
      <section className="relative w-full bg-[var(--secondary)] text-white py-16 md:py-24 border-b border-white/10">
        <div className="w-[96%] max-w-[1800px] max-w-6xl mx-auto flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-4">
            <span>Direct Sialkot Factory • Sublimation Specialists</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white max-w-4xl leading-tight mb-4">
            {heroHeadline}
          </h1>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-white/80 mb-6">
            <span className="flex items-center gap-1.5">
              <Check size={16} className="text-[var(--accent)]" /> Free 3D Mockup within 12 Hours
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={16} className="text-[var(--accent)]" /> Production Ready in 2-3 Weeks
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={16} className="text-[var(--accent)]" /> Factory Direct Pricing
            </span>
          </div>

          {/* Quick Answer Paragraph for SEO & User */}
          <div className="bg-white/5 border border-white/15 rounded-[3px] p-4 sm:p-6 max-w-3xl text-xs sm:text-sm text-white/85 leading-relaxed text-left">
            <p className="font-medium">
              Looking for professional custom {sportName} uniforms? Starting at <strong className="text-white underline">{startingJerseyPrice}</strong> per jersey and <strong className="text-white underline">{startingSetPrice}</strong> for complete match sets (Jersey + Shorts). Prices include custom colors, unlimited sponsor logos, player names, and numbers with zero setup fees.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="#calculator-section"
              className="px-6 py-3.5 sm:px-8 sm:py-4 bg-[var(--accent)] text-white font-bold text-xs uppercase tracking-widest rounded-[3px] shadow-xl hover:opacity-95 transition cursor-pointer"
            >
              Calculate Team Price
            </a>
            <a
              href="#quote-form-section"
              className="px-6 py-3.5 sm:px-8 sm:py-4 bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-[3px] hover:bg-white/20 transition cursor-pointer"
            >
              Get Free 12-Hr Mockup
            </a>
          </div>

        </div>
      </section>

      {/* ── 2. TRUST BAR ───────────────────────────────────────────────────────── */}
      <TrustBar />

      {/* ── 3. PRICE TABLE (AT THE TOP AS PER BENCHMARK) ────────────────────────── */}
      <section className="w-[96%] max-w-[1800px] max-w-5xl mx-auto my-12 sm:my-16">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            TRANSPARENT VOLUME TIERS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[var(--secondary)] mt-1">
            CUSTOM {sportName.toUpperCase()} UNIFORM PRICING
          </h2>
          <p className="text-xs text-[var(--secondary)]/60 mt-1">
            Factory direct pricing per player. Shipping charges apply, duties paid.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-[3px] border border-[var(--secondary)]/10 shadow-lg">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[var(--secondary)] text-white text-[11px] uppercase tracking-wider">
                <th className="py-4 px-6">Product</th>
                <th className="py-4 px-4">1 - 24</th>
                <th className="py-4 px-4">25 - 50</th>
                <th className="py-4 px-4">51 - 100</th>
                <th className="py-4 px-4 bg-[var(--accent)] text-white font-black">101+ (Best)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--secondary)]/10 font-medium">
              <tr className="hover:bg-neutral-50">
                <td className="py-4 px-6 font-bold text-[var(--secondary)]">Game Jersey (Sublimated)</td>
                <td className="py-4 px-4">$44.99</td>
                <td className="py-4 px-4">$42.99</td>
                <td className="py-4 px-4">$39.99</td>
                <td className="py-4 px-4 font-bold text-[var(--accent)]">$34.99</td>
              </tr>
              <tr className="hover:bg-neutral-50 bg-neutral-50/50">
                <td className="py-4 px-6 font-bold text-[var(--secondary)]">Complete Set (Jersey + Shorts)</td>
                <td className="py-4 px-4">$79.99</td>
                <td className="py-4 px-4 text-emerald-600 font-semibold">$74.99</td>
                <td className="py-4 px-4 text-emerald-600 font-semibold">$72.99</td>
                <td className="py-4 px-4 font-bold text-[var(--accent)]">$69.99</td>
              </tr>
            </tbody>
          </table>
          <div className="p-4 bg-neutral-100/60 text-[11px] text-[var(--secondary)]/65 border-t border-[var(--secondary)]/10 flex flex-wrap justify-between gap-2">
            <span>✓ Sublimated names, numbers & team logos included</span>
            <span>✓ Prices verified for 2026 Season</span>
          </div>
        </div>
      </section>

      {/* ── 4. DO CALCULATORS (PRICE & DEADLINE ENGINE) ─────────────────────────── */}
      <section id="calculator-section" className="w-[96%] max-w-[1800px] max-w-5xl mx-auto my-12 sm:my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Calculator 1: Team Uniform Price Calculator */}
          <div className="bg-white rounded-[3px] border border-[var(--secondary)]/10 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-bold uppercase tracking-wider mb-2">
                <Calculator size={16} /> Instant Team Estimate
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)] mb-4">
                Price Calculator
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[var(--secondary)]/70 mb-1">
                    Select Product:
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCalcType('set')}
                      className={`flex-1 py-2 text-xs font-bold uppercase rounded-[3px] border transition cursor-pointer ${
                        calcType === 'set'
                          ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]'
                          : 'bg-white text-[var(--secondary)]/70 border-neutral-300'
                      }`}
                    >
                      Jersey + Shorts Set
                    </button>
                    <button
                      onClick={() => setCalcType('jersey')}
                      className={`flex-1 py-2 text-xs font-bold uppercase rounded-[3px] border transition cursor-pointer ${
                        calcType === 'jersey'
                          ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]'
                          : 'bg-white text-[var(--secondary)]/70 border-neutral-300'
                      }`}
                    >
                      Jersey Only
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[var(--secondary)]/70 mb-1">
                    Number of Players: ({calcQty} uniforms)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="1"
                    value={calcQty}
                    onChange={(e) => setCalcQty(Number(e.target.value))}
                    className="w-full accent-[var(--accent)] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                    <span>10 (Min)</span>
                    <span>50</span>
                    <span>100</span>
                    <span>150+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-500 block uppercase">
                  Estimated Total:
                </span>
                <span className="text-2xl font-black text-[var(--secondary)]">
                  ${calcResult.total}
                </span>
                <span className="text-[10px] text-emerald-600 block font-bold">
                  (${calcResult.unit} / player)
                </span>
              </div>

              <a
                href="#quote-form-section"
                className="px-5 py-2.5 bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] hover:opacity-90 transition cursor-pointer"
              >
                Lock This Price
              </a>
            </div>
          </div>

          {/* Calculator 2: Deadline Calculator */}
          <div className="bg-white rounded-[3px] border border-[var(--secondary)]/10 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-bold uppercase tracking-wider mb-2">
                <Calendar size={16} /> Schedule Peace of Mind
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)] mb-4">
                Deadline Calculator
              </h3>
              <p className="text-xs text-[var(--secondary)]/70 mb-4 leading-relaxed">
                Coach ki sab se bari tension: "Time par milega?". Enter the date you need uniforms in hand to find your exact proof approval cut-off:
              </p>

              <div className="mb-4">
                <label className="block text-[11px] font-bold uppercase text-[var(--secondary)]/70 mb-1">
                  When is your first match / tournament?
                </label>
                <input
                  type="date"
                  value={gameDate}
                  onChange={(e) => setGameDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-[3px] border border-neutral-300 text-xs text-[var(--secondary)] font-medium focus:border-[var(--accent)] focus:outline-none cursor-pointer"
                />
              </div>

              {gameDate && (
                <div className="p-3.5 bg-amber-50 rounded-[3px] border border-amber-200 text-xs text-amber-900 leading-relaxed mb-4">
                  <strong>Approval Deadline:</strong> To guarantee delivery before {new Date(gameDate).toLocaleDateString()}, design proofs must be approved by <span className="underline font-black">{getApprovalDeadline()}</span> (33 days before match rule).
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                12-Hour 3D Proof turnaround.
              </span>
              <a
                href="#quote-form-section"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent)] hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Request Proof Today</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. BUYER-TYPE CONTENT (SEO ENGINE: Youth, High School, Club) ───────── */}
      <section className="w-[96%] max-w-[1800px] max-w-5xl mx-auto my-12 sm:my-16">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            TAILORED SOLUTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[var(--secondary)] mt-1">
            BUILT FOR YOUR LEVEL OF COMPETITION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-[3px] border border-[var(--secondary)]/10 shadow-md">
            <h3 className="text-base font-black uppercase text-[var(--secondary)] mb-2">
              Youth & Rec Leagues
            </h3>
            <p className="text-xs text-[var(--secondary)]/70 leading-relaxed mb-4">
              Combine your entire league into a single order to qualify for the 101+ tier ($69.99/set). Free size exchanges on mid-season growth spurts.
            </p>
            <span className="text-[11px] font-bold text-[var(--accent)] block">
              Example: 8 teams × 12 players = 96 sets at volume rates.
            </span>
          </div>

          <div className="p-6 bg-white rounded-[3px] border border-[var(--secondary)]/10 shadow-md">
            <h3 className="text-base font-black uppercase text-[var(--secondary)] mb-2">
              High School & Varsity
            </h3>
            <p className="text-xs text-[var(--secondary)]/70 leading-relaxed mb-4">
              Home, Away, and Goalkeeper kits on a single invoice. School Purchase Orders (POs) accepted with net terms for verified athletic departments.
            </p>
            <span className="text-[11px] font-bold text-[var(--accent)] block">
              Full NFHS / regulation compliant numbering and sleeve specs.
            </span>
          </div>

          <div className="p-6 bg-white rounded-[3px] border border-[var(--secondary)]/10 shadow-md">
            <h3 className="text-base font-black uppercase text-[var(--secondary)] mb-2">
              Competitive Club & Travel
            </h3>
            <p className="text-xs text-[var(--secondary)]/70 leading-relaxed mb-4">
              Multiple age brackets (U10 through U19) unified under your official club palette. Sideline hoodies, tracksuits, and gear bags included.
            </p>
            <span className="text-[11px] font-bold text-[var(--accent)] block">
              Permanent digital vector storage for seamless annual reorders.
            </span>
          </div>
        </div>
      </section>

      {/* ── 6. FAQS ───────────────────────────────────────────────────────────── */}
      <section className="w-[96%] max-w-[1800px] max-w-4xl mx-auto my-12 sm:my-16">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            FREQUENT QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
            EVERYTHING YOU NEED TO KNOW
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-5 bg-white rounded-[3px] border border-[var(--secondary)]/10">
              <h3 className="text-sm font-bold text-[var(--secondary)] mb-2 flex items-center gap-2">
                <HelpCircle size={15} className="text-[var(--accent)] flex-shrink-0" />
                {faq.q}
              </h3>
              <p className="text-xs text-[var(--secondary)]/70 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. FOOTER QUOTE MACHINE (THE CONVERSION ENGINE) ─────────────────────── */}
      <QuoteFormBlock defaultSport={sportName} />

    </div>
  );
}

