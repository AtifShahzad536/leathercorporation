import React from 'react';
import { Sparkles, Check, ArrowRight, Clock, ShieldCheck, Truck, Layers, MessageSquare } from 'lucide-react';
import TrustBar from '../common/TrustBar';

export default function HowToOrderPage({ onNavigateInquiry = () => {} }) {
  const steps = [
    {
      num: '01',
      title: 'Submit Your Team Details & Artwork',
      desc: 'Send us your team colors, vector crest, or even a rough sketch. Let us know your sport, estimated player count, and opening game deadline.',
      badge: 'Takes 2 Minutes'
    },
    {
      num: '02',
      title: 'Get Free 3D Proofs Within 12 Hours',
      desc: 'Our in-house design artists generate a multi-angle 3D digital mockup showing front, back, and detail closeups in your exact pantone shades.',
      badge: 'Zero Obligation'
    },
    {
      num: '03',
      title: 'Make Unlimited Revisions Until Perfect',
      desc: 'Request adjustments to striping, typography, sleeve logos, or colors with zero fee. Nothing enters cutting until you sign off on final proofs.',
      badge: '100% Free Design'
    },
    {
      num: '04',
      title: 'Factory-Direct Sialkot Production',
      desc: 'Your uniforms enter dye-sublimation, computerized cutting, and heavy-duty 4-thread coverstitching in our own export facility in Sialkot, Pakistan.',
      badge: '2 to 3 Weeks'
    },
    {
      num: '05',
      title: 'Express Doorstep Delivery',
      desc: 'Every team package ships via air freight with full online tracking. US orders include pre-cleared customs with all duties and tariffs absorbed.',
      badge: '3 to 5 Days Transit'
    }
  ];

  return (
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[var(--secondary)] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="w-[96%] max-w-[1400px] mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-2 block">
            HOW CUSTOM TEAM ORDERING WORKS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white mb-3">
            Get a Free Quote & Start Your Custom Order
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            From your first sketch to game day on the field. Transparent, reliable, and backed by our 100% Free Remake Guarantee.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* 5 Steps Grid */}
      <div className="w-[96%] max-w-[1200px] mx-auto my-14 sm:my-20 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            STEP-BY-STEP PROCESS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[var(--secondary)] mt-1">
            5 Simple Steps from Concept to Game Day
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((st, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-[3px] border border-neutral-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[var(--accent)] transition">
              <div className="flex items-start gap-5">
                <span className="text-3xl sm:text-4xl font-black text-[var(--accent)] font-mono leading-none">
                  {st.num}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-base sm:text-lg font-black uppercase text-[var(--secondary)]">
                      {st.title}
                    </h3>
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
                      {st.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light max-w-2xl">
                    {st.desc}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={() => onNavigateInquiry({ name: `Step ${st.num} Inquiry`, sport: 'General' })}
                  className="px-5 py-2.5 bg-neutral-100 hover:bg-[var(--secondary)] hover:text-white text-[var(--secondary)] text-xs font-bold uppercase tracking-wider rounded-[3px] transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Start Step {st.num}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 sm:p-12 bg-white rounded-[3px] border-2 border-[var(--accent)] shadow-xl text-center space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            READY TO GEAR UP?
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)]">
            Let's build your 3D digital design proof today
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed font-light">
            No upfront payment is required. You review and approve your complete 3D mockups before placing your production order.
          </p>
          <button
            onClick={() => onNavigateInquiry({ name: 'Start Custom Order', sport: 'General' })}
            className="px-8 py-4 bg-[var(--accent)] hover:opacity-95 text-white text-xs font-black uppercase tracking-widest rounded-[3px] transition shadow-lg cursor-pointer"
          >
            Request Free 3D Mockup Now
          </button>
        </div>
      </div>
    </div>
  );
}
