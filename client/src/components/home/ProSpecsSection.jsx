import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * ProSpecsSection Component
 * Reference: hamcospo.com benchmark
 * Theme: HAMLO SPORTS (Cream #FAF9F6, Deep Navy #1E1B6E, Radiant Orange #F26522)
 * Features 3 comprehensive pillars:
 * 1. SPORT-SPECIFIC FABRICS ("The Right Weight for the Right Game")
 * 2. 4-METHOD DECORATION ("Sublimation, Twill, Embroidery, Screen")
 * 3. FULL-RANGE SIZING ("Men's, Women's, Youth. XS to 4XL.")
 */

const specsCards = [
  {
    badge: 'SPORT-SPECIFIC FABRICS',
    title: 'The Right Weight for the Right Game',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    description:
      'Basketball runs 160 to 180 GSM air-mesh polyester. Softball game pants run 220 GSM performance polyester. Wrestling singlets run 92/8 poly-spandex. Every sport gets the weight and weave it actually needs, not a generic catch-all fabric.',
    tags: ['Air-Mesh Polyester', 'Performance Polyester', '92/8 Poly-Spandex', '4-Thread Coverstitch']
  },
  {
    badge: '4-METHOD DECORATION',
    title: 'Sublimation, Twill, Embroidery, Screen',
    image: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=800&q=80',
    description:
      'Full dye sublimation builds the base design and side panels. Tackle twill, embroidery, and screen printing are added where the garment calls for them, because we choose the method for each garment. Sublimated names, numbers, and logos are included.',
    tags: ['Sublimation', 'Tackle Twill', '3D Embroidery', 'High-Density Screen']
  },
  {
    badge: 'FULL-RANGE SIZING',
    title: "Men's, Women's, Youth. XS to 4XL.",
    image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80',
    description:
      "Men's, women's, and youth cuts, with adult sizes from XS to 4XL and youth sizes from YS to YXL. Need something outside the chart? We make custom sizes to your players' own measurements with zero custom-size fees.",
    tags: ["Men's Cut", "Women's Cut", "Youth Sizing", 'Custom Fit Sizing']
  }
];

export default function ProSpecsSection({ onExplore = () => {} }) {
  return (
    <section className="w-full bg-[var(--primary)] text-[var(--secondary)] py-16 sm:py-24 border-b border-[var(--secondary)]/10 relative overflow-hidden select-none">
      <div className="w-[96%] max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--secondary)] leading-tight mb-4">
            BUILT ON THE SAME SPECS PRO PROGRAMS DEMAND
          </h2>
          <p className="text-xs sm:text-base text-[var(--secondary)]/75 max-w-2xl mx-auto font-light leading-relaxed">
            Every fabric, weight, and decoration method is matched to the sport. Game-day jerseys engineered to breathe. The right build for the right field.
          </p>
        </div>

        {/* 3 Columns Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {specsCards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-white rounded-[5px] overflow-hidden shadow-lg border border-[var(--secondary)]/12 flex flex-col group hover:shadow-2xl hover:border-[var(--accent)]/50 transition-all duration-300"
            >
              {/* Top Banner Image with Zoom on Hover */}
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden bg-neutral-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  {/* Badge matching HAMLO theme (Radiant Orange) */}
                  <div className="mb-4">
                    <span className="inline-block bg-[var(--accent)] text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-[3px] shadow-sm">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)] tracking-tight leading-snug mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[var(--secondary)]/75 font-normal leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Pill Tags matching Hamco with HAMLO Theme */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                  {card.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-[var(--secondary)] group-hover:bg-[var(--secondary)]/5 transition-colors border border-neutral-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
