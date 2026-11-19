import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "How long does a custom HAMLO SPORTS uniform order actually take from first contact to delivery?",
    answer: "A standard HAMLO SPORTS team order is finished and ready within 2 to 3 weeks following your final digital mockup sign-off, followed by 3 to 5 business days of expedited air delivery directly to your doorstep. Our digital artwork desk returns high-precision 3D mockups within 12 hours on business days. The typical order roadmap unfolds seamlessly: on Day 1, submit your roster counts, preferred colors, and team crest; on Day 1 or 2, inspect your complimentary 3D mockup; Days 2 through 7 allow unlimited revisions until everything aligns with your vision; followed by 2 to 3 weeks of precision factory tailoring and free insured shipping. Facing a tight opening-day deadline? Inquire about priority rush production—we accommodate urgent schedules whenever floor capacity permits."
  },
  {
    id: 2,
    question: "Is there genuinely no minimum order quantity, even for a single jersey?",
    answer: "Yes, exactly zero minimums. Whether you need a single reversible basketball jersey for an incoming AAU transfer, an individual replacement wrestling singlet for an athlete returning mid-season, or an entire multi-tiered athletic program outfitted from youth to varsity, we accommodate your exact headcount. Our volume pricing tiers (1–24, 25–50, 51–100, and 100+ pieces) reward larger rosters with substantial per-piece discounts, while complimentary doorstep air shipping and free design mockups remain standard across every order size."
  },
  {
    id: 3,
    question: "How does the $500 introductory order incentive work?",
    answer: "Any school, club, or collegiate athletic program placing their inaugural HAMLO SPORTS order of $5,000 or more receives an immediate $500 credit deducted from their quote total at their regular tier pricing. Orders below the $5,000 threshold still enjoy our industry-leading perks—zero order minimums, free 12-hour 3D mockups, and 100% free door-to-door delivery. Simply specify your sport, roster size, and team colors when requesting your quote, and our sales desk will apply the $500 deduction upfront."
  },
  {
    id: 4,
    question: "Which sports does HAMLO SPORTS manufacture for, and what technical fabrics are used?",
    answer: "We engineer pro-grade apparel across 12 athletic disciplines covering game-day, training, sideline, and travel requirements. Each discipline is engineered with sport-tailored performance substrates:\n• Baseball & Softball: 140–160 GSM full dye-sublimated jerseys (160–180 GSM when reinforced with tackle twill) paired with heavy-duty 220 GSM four-way stretch polyester pants.\n• Basketball: 160–180 GSM micro-perforated air-mesh polyester engineered for optimal airflow, regulation number sizing, and full reversible options.\n• Football & Flag Football: Heavy-gauge dazzle yokes, compression elastane side panels, and moisture-wicking interlock mesh, with integrated or standalone game pants.\n• Soccer & Rugby: 160–200 GSM tear-resistant interlock knits with ergonomic flatlock anti-chafing seams.\n• Wrestling: Pro 92/8 poly-spandex compression singlets with moisture-shedding gripper hems.\n• Ice Hockey, Lacrosse, Volleyball, & Esports: Purpose-matched technical textiles ranging from 330 GSM air-knit hockey sweaters to ultra-light athletic jerseys. Every fabric is paired with the optimal embellishment method—molecular dye-sublimation, collegiate laser tackle twill, 3D embroidery, or high-density screen printing."
  },
  {
    id: 5,
    question: "Can HAMLO SPORTS engineer uniforms strictly to our league or association rules?",
    answer: "Absolutely. Whether your team competes under NFHS, NCAA, Little League, USSSA, USA Volleyball, or local scholastic sanctioning bodies, our pattern engineers calibrate jersey length, sleeve regulations, number heights, and sponsor placements strictly to your rulebook specifications. Simply notify us of your sanctioning league during the design phase, and our team ensures full on-field regulatory compliance."
  },
  {
    id: 6,
    question: "Can I order matching sideline jackets, warm-ups, hoodies, bags, and tees in the exact same dye batch?",
    answer: "Yes, and we strongly encourage it for programs striving for a seamless, professional sideline presence. By producing your match jerseys, game shorts, warm-up pullovers, technical joggers, travel tracksuits, equipment duffel bags, and coaching polos in a unified production run, all garments undergo the exact same molecular dye batch. This guarantees 100% Pantone color consistency across every fabric type—ensuring athletic gold, deep navy, royal blue, and radiant orange look identical under both daylight and arena stadium floodlights."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-[var(--secondary)]/10 select-none">
      <div className="w-[96%] max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent)] flex items-center justify-center gap-1.5 mb-2">
            <HelpCircle size={14} /> FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[var(--secondary)] tracking-tight leading-tight">
            EVERYTHING YOU NEED TO KNOW
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto mt-3 font-normal leading-relaxed">
            Direct answers on turnaround times, zero minimum orders, technical fabrics, sanctioning rules, and single-dye-batch team branding.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-[var(--secondary)]/15 rounded-[5px] overflow-hidden bg-[var(--primary)] transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--secondary)]/5 transition-colors"
                >
                  <span className="text-sm sm:text-base font-black uppercase text-[var(--secondary)] leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[var(--accent)] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden border-t border-[var(--secondary)]/10 bg-white"
                    >
                      <div className="p-5 sm:p-6 text-xs sm:text-sm text-[var(--secondary)]/85 leading-relaxed font-normal whitespace-pre-line space-y-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[var(--secondary)] text-white rounded-[5px] flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-xl">
          <div>
            <div className="inline-block px-2.5 py-1 bg-[var(--accent)] text-white text-[9px] font-black uppercase tracking-wider rounded-[3px] mb-2">
              Factory Direct Support
            </div>
            <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white mb-1">
              Have a specific program requirement or rush deadline?
            </h3>
            <p className="text-xs text-white/75 font-normal">
              Our Sialkot production and artwork desk replies within 1 hour during standard hours.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 flex-wrap">
            <a
              href="https://wa.me/923105464116?text=Hello%20HAMLO%20SPORTS!%20I%20have%20a%20question%20about%20team%20uniforms."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs uppercase tracking-wider rounded-[5px] transition cursor-pointer shadow"
            >
              WhatsApp Support
            </a>
            <a
              href="#inquiry"
              className="px-5 py-3 bg-[var(--accent)] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider rounded-[5px] transition cursor-pointer shadow"
            >
              Get Free Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
