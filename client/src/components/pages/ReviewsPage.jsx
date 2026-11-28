import React from 'react';
import { Star, ShieldCheck, Check, MessageSquare, ArrowRight, Award } from 'lucide-react';
import TrustBar from '../common/TrustBar';

export default function ReviewsPage({ onNavigateInquiry = () => {} }) {
  const reviews = [
    {
      coach: 'Coach Mark Sullivan',
      role: 'Varsity Ice Hockey Head Coach',
      location: 'Minnesota, USA',
      sport: 'Ice Hockey',
      rating: 5,
      date: 'October 2026',
      title: 'Dye-sublimation match was 100% identical between jerseys and socks',
      content: 'We ordered 32 home and away match jerseys plus matching sublimated socks for our varsity squad. The colors came out in the exact same pantone shade across both garments. Goalie cuts fit over our tenders body armor without any tight binding. Delivery arrived 4 days ahead of our tournament cutoff.'
    },
    {
      coach: 'Dave Henderson',
      role: 'Athletic Director & Baseball Coach',
      location: 'Texas, USA',
      sport: 'Baseball',
      rating: 5,
      date: 'September 2026',
      title: 'Accepted our School District PO with zero hassle',
      content: 'Dealing factory-direct with HAMLO SPORTS saved our booster club over $1,200 compared to local sporting goods retailers. They accepted our Net 30 school purchase order immediately and delivered multi-angle 3D proofs within 8 hours. The full button placket and reinforced knees on the pants are phenomenal quality.'
    },
    {
      coach: 'Coach Sarah Jenkins',
      role: 'Club Director, Premier Strikers FC',
      location: 'California, USA',
      sport: 'Soccer',
      rating: 5,
      date: 'November 2026',
      title: 'Our 14 youth teams combined for the 101+ price tier',
      content: 'We put all 14 club age divisions onto a single order. Even though every division had unique sponsor logos and accent colors, HAMLO SPORTS pooled our total to give every single parent the $29.99 rate. Breathable micro-interlock fabric holds up wash after wash.'
    },
    {
      coach: 'Marcus Brody',
      role: 'Men’s League Basketball Commissioner',
      location: 'Illinois, USA',
      sport: 'Basketball',
      rating: 5,
      date: 'August 2026',
      title: 'Reversible jerseys eliminated color conflicts completely',
      content: 'Running an 8-team rec league used to be a nightmare with color conflicts. We ordered 2-in-1 reversible jerseys for all 96 players. Lightweight, zero transparency between the layers, and the tackle-twill numbers look straight out of the pros.'
    },
    {
      coach: 'Jason Kowalski',
      role: 'Head Wrestling Coach',
      location: 'Pennsylvania, USA',
      sport: 'Wrestling',
      rating: 5,
      date: 'October 2026',
      title: 'Singlets passed NFHS gear inspection with flying colors',
      content: 'Heavyweight 280 GSM poly-spandex with silicone leg grippers that never ride up. Our wrestlers tested them through grueling dual meets and district qualifiers. Zero chafing and the flat-lock stitching is indestructible.'
    },
    {
      coach: 'Tyler Vance',
      role: 'Esports Program Director',
      location: 'Washington, USA',
      sport: 'Esports',
      rating: 5,
      date: 'November 2026',
      title: 'Sponsor logo resolution on stage and on stream was razor-sharp',
      content: 'We have 6 tech sponsors with intricate multi-color gradients. The sublimation detail on our tournament hoodies and jerseys showed up pin-sharp on Twitch and on stage at LAN finals. Will be ordering again for our spring roster.'
    }
  ];

  return (
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[var(--secondary)] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="w-[96%] max-w-[1400px] mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-2 block">
            VERIFIED COACH & TEAM TESTIMONIALS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white mb-3">
            HAMLO SPORTS Customer Reviews
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Trusted by over 10,000 teams, varsity athletic directors, and club associations across North America since 2011.
          </p>

          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="text-sm font-black text-white">4.9 / 5.0 Overall Rating</span>
            <span className="text-xs text-white/60">• 100% Free Remake Backed</span>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Reviews Grid */}
      <div className="w-[96%] max-w-[1400px] mx-auto my-14 sm:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[3px] border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-[var(--accent)] transition">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified Team Order
                  </span>
                </div>

                <h2 className="text-sm font-black uppercase text-[var(--secondary)] mb-2 leading-snug">
                  "{rev.title}"
                </h2>
                <p className="text-xs text-neutral-600 leading-relaxed mb-6 font-light">
                  {rev.content}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px]">
                <div>
                  <strong className="block text-[var(--secondary)] font-bold">{rev.coach}</strong>
                  <span className="text-neutral-500 text-[10px]">{rev.role} • {rev.location}</span>
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-neutral-100 rounded text-neutral-700">
                  {rev.sport}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-14 p-8 bg-[var(--secondary)] text-white rounded-[3px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-1">
              JOIN THOUSANDS OF WINNING TEAMS
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
              Ready to outfit your team factory-direct?
            </h3>
            <p className="text-xs text-white/70 mt-1">
              Get a custom 3D design proof within 12 hours. Zero minimum order limits.
            </p>
          </div>
          <button
            onClick={() => onNavigateInquiry({ name: 'Review Page Referral', sport: 'General' })}
            className="px-8 py-3.5 bg-[var(--accent)] text-white text-xs font-black uppercase tracking-wider rounded-[3px] hover:opacity-90 transition flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Start My Free Mockup</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
