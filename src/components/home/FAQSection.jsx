import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What types of leather do you use for your jackets?",
    answer: "We select only top-tier Grade-A hides, including 1.1mm–1.3mm drum-dyed Full-Grain Cowhide, buttery Italian Lambskin Nappa, velvety Goat Suede, and authentic Shearling sheepskin fleece for thermal warmth and lifetime durability."
  },
  {
    id: 2,
    question: "Do your motorcycle leather jackets include CE-approved armor?",
    answer: "Yes, our motorcycle and racing apparel collection features integrated reinforced armor pockets designed for removable CE-Level 1 and Level 2 shoulder, elbow, and spine impact protectors."
  },
  {
    id: 3,
    question: "Can I place custom made-to-measure or bespoke orders?",
    answer: "Absolutely. Our bespoke atelier provides anatomical custom sizing, custom hardware choices (antique brass, matte black, gunmetal YKK), personalized embossed patches, and quilted interior silk lining."
  },
  {
    id: 4,
    question: "What is the difference between Full-Grain and Top-Grain leather?",
    answer: "Full-Grain is the strongest and most authentic hide layer, preserving natural grain and developing a rich vintage patina over time. Top-Grain is lightly buffed for a sleek, uniform finish while maintaining exceptional softness."
  },
  {
    id: 5,
    question: "Do you offer Private Label OEM & Bulk Wholesale manufacturing?",
    answer: "Yes, Leader Corporation is a certified global OEM/ODM manufacturer for international fashion labels, motorcycle clubs, and luxury retailers with flexible MOQs, laser precision cutting, and fast sample turnarounds."
  },
  {
    id: 6,
    question: "How do I care for and condition my Leader leather jacket?",
    answer: "Store your jacket on a wide contoured wooden hanger in a cool, dry area. Clean gently with a damp microfiber cloth and apply a natural beeswax or lanolin leather conditioner once or twice yearly to preserve natural suppleness."
  },
  {
    id: 7,
    question: "Are your tanneries environmentally certified?",
    answer: "Yes, our partnering tanneries are certified by the Leather Working Group (LWG) with Gold ratings, operating with zero-chrome vegetable tanning, organic oils, and 100% closed-loop wastewater recycling systems."
  },
  {
    id: 8,
    question: "What international compliance standards do you adhere to?",
    answer: "We strictly comply with ISO 9001 quality management, BSCI ethical workplace audits, REACH EU non-toxic chemical standards, and EN 17092 European motorcycle protective garment standards."
  },
  {
    id: 9,
    question: "What are your worldwide shipping and delivery timeframes?",
    answer: "In-stock orders dispatch within 24–48 hours with DHL/FedEx Express (3–5 days worldwide delivery). Custom bespoke orders take 10–14 crafting days, while commercial OEM container shipments take 3–4 weeks."
  },
  {
    id: 10,
    question: "What is your warranty and craftsmanship guarantee?",
    answer: "Leader Corporation guarantees all hardware, seams, and zippers with a lifetime craftsmanship warranty. Unworn catalog pieces can be returned or exchanged within 30 days of delivery."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const col1 = faqs.slice(0, 5);
  const col2 = faqs.slice(5, 10);

  const renderFaqItem = (faq) => {
    const isOpen = openId === faq.id;

    return (
      <div
        key={faq.id}
        className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'bg-white border-[var(--accent)]/40 shadow-lg shadow-[var(--secondary)]/5'
            : 'bg-white/60 hover:bg-white border-[var(--secondary)]/10 hover:border-[var(--secondary)]/20'
        }`}
      >
        <button
          onClick={() => toggle(faq.id)}
          className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 cursor-pointer"
          aria-expanded={isOpen}
        >
          <span
            className={`text-sm md:text-base font-bold tracking-tight transition-colors ${
              isOpen ? 'text-[var(--accent)]' : 'text-[var(--secondary)]'
            }`}
          >
            {faq.question}
          </span>
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
              isOpen
                ? 'bg-[var(--accent)] text-white rotate-180'
                : 'bg-[var(--secondary)]/5 text-[var(--secondary)]'
            }`}
          >
            <ChevronDown size={16} strokeWidth={2.2} />
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="px-5 pb-6 md:px-6 md:pb-6 pt-0">
                <p className="text-xs md:text-sm text-[var(--secondary)]/70 leading-relaxed border-t border-[var(--secondary)]/5 pt-4">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="w-full bg-[var(--primary)] py-[6%] border-t border-[var(--secondary)]/10">
      <div className="w-[92%] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-3 flex items-center gap-2">
            <HelpCircle size={15} /> FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[var(--secondary)] tracking-tight">
            EVERYTHING YOU NEED TO KNOW
          </h2>
          <p className="text-xs md:text-sm text-[var(--secondary)]/60 max-w-xl mt-3">
            Have questions about our leather grades, bespoke tailoring, OEM production, or international shipping? Find your answers below.
          </p>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-5">
            {col1.map(renderFaqItem)}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 md:gap-5">
            {col2.map(renderFaqItem)}
          </div>
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-14 p-6 md:p-8 rounded-2xl bg-[var(--secondary)] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-1">
              Still have questions about our leather jackets?
            </h4>
            <p className="text-xs md:text-sm text-white/70">
              Our leather specialists and master tailors are here to assist with custom sizing & OEM quotes.
            </p>
          </div>
          <button className="px-8 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all flex-shrink-0 hover:scale-105 shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
