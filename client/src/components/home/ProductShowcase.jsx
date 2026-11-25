import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { sportsCategories } from '../../data/sportsCategoriesData';
import { useCMS } from '../../context/CMSContext';

/**
 * Full-Screen Masonry Bento Gallery - Color Palette Unified with HAMLO SPORTS Theme
 * - Background: Off-white cream (var(--primary): #FAF9F6) seamlessly matching the whole page
 * - Text Titles: Bold Navy Blue (var(--secondary): #1E1B6E)
 * - Highlights & Accents: Radiant Orange (var(--accent): #F26522)
 * - Image Cards: Clean rounded-2xl with subtle navy/accent borders and high-impact sport imagery
 */

export default function ProductShowcase({
  onSeeAll = () => {},
  onSelectCategory = () => {}
}) {
  const { homeContent } = useCMS();
  const displayCategories = homeContent?.categories && homeContent.categories.length > 0 
    ? homeContent.categories 
    : sportsCategories;

  const handleCategoryClick = (sport) => {
    if (onSelectCategory && typeof onSelectCategory === 'function') {
      onSelectCategory(sport.name.toUpperCase());
    } else if (onSeeAll && typeof onSeeAll === 'function') {
      onSeeAll(sport.name.toUpperCase());
    }
  };

  // Bento span configurations for dynamic visual variety across all 12 sports
  const bentoSpans = [
    "md:col-span-2 md:row-span-2 min-h-[380px] md:min-h-[500px]", // 0: Big Hero (Baseball)
    "md:col-span-1 md:row-span-1 min-h-[240px]",                  // 1: Compact (Basketball)
    "md:col-span-1 md:row-span-1 min-h-[240px]",                  // 2: Compact (Esports)
    "md:col-span-2 md:row-span-1 min-h-[240px]",                  // 3: Wide Banner (Football)
    "md:col-span-1 md:row-span-2 min-h-[380px] md:min-h-[500px]", // 4: Tall Vertical (Wrestling)
    "md:col-span-1 md:row-span-1 min-h-[240px]",                  // 5: Compact (Flag Football)
    "md:col-span-2 md:row-span-1 min-h-[240px]",                  // 6: Wide Banner (Soccer)
    "md:col-span-1 md:row-span-1 min-h-[240px]",                  // 7: Compact (Ice Hockey)
    "md:col-span-1 md:row-span-1 min-h-[240px]",                  // 8: Compact (Lacrosse)
    "md:col-span-2 md:row-span-1 min-h-[240px]",                  // 9: Wide Banner (Rugby)
    "md:col-span-1 md:row-span-1 min-h-[240px]",                  // 10: Compact (Softball)
    "md:col-span-1 md:row-span-1 min-h-[240px]",                  // 11: Compact (Volleyball)
  ];

  return (
    <section className="w-full bg-[var(--primary)] text-[var(--secondary)] py-16 sm:py-24 border-b border-[var(--secondary)]/10 relative overflow-hidden select-none">
      
      {/* Background Ambience: Subtle theme glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 -right-48 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[96%] max-w-[1800px] mx-auto relative z-10">
        
        {/* Section Header matching site typography */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-[10px] md:text-xs font-black tracking-[0.35em] uppercase text-[var(--accent)] flex items-center gap-2 mb-2">
              <Sparkles size={13} /> SIALKOT FACTORY DIRECT
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[var(--secondary)] leading-none">
              CATEGORIES
            </h2>
          </div>

          <button
            onClick={() => handleCategoryClick({ name: 'BASEBALL' })}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--secondary)]/20 hover:border-[var(--accent)] bg-[var(--secondary)] hover:bg-[var(--accent)] text-white font-black text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer self-start sm:self-auto shadow-md hover:shadow-lg"
          >
            <span>All 12 Disciplines</span>
            <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>

        {/* ── BENTO MASONRY GALLERY ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 auto-rows-[240px]">
          {displayCategories.map((sport, index) => {
            const spanClass = bentoSpans[index % bentoSpans.length];
            const formattedIndex = (index + 1).toString().padStart(2, '0');

            return (
              <motion.div
                key={sport.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={() => handleCategoryClick(sport)}
                className={`relative rounded-[5px] overflow-hidden cursor-pointer group shadow-xl border border-[var(--secondary)]/15 bg-neutral-900 ${spanClass} flex flex-col justify-end p-6 sm:p-8`}
              >
                {/* High-Resolution Action Image with Parallax Zoom */}
                <img
                  src={sport.image}
                  alt={`HAMLO SPORTS Custom ${sport.name} Athletic Uniform Category`}
                  loading={index < 2 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
                />

                {/* Dark Vignette Overlay with Navy Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary)]/95 via-black/40 to-black/10 group-hover:from-[var(--secondary)]/90 transition-all duration-300" />

                {/* Top Corner: Number & Hover Arrow */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
                  <span className="font-mono text-xs font-bold text-white/60 group-hover:text-[var(--accent)] transition-colors">
                    {formattedIndex}
                  </span>

                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Bottom Center / Left: ONLY THE CATEGORY NAME - Responsive fluid sizing so long names never clip */}
                <div className="relative z-10 w-full overflow-hidden">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight leading-tight drop-shadow-2xl group-hover:text-white transition-colors break-words">
                    {sport.name}
                  </h3>
                  
                  {/* Radiant Orange Accent Line on Hover */}
                  <div className="w-0 group-hover:w-14 h-1 bg-[var(--accent)] mt-2 rounded-full transition-all duration-500 shadow-sm" />
                </div>

                {/* Accent Border Ring on Hover */}
                <div className="absolute inset-0 rounded-[5px] border-2 border-transparent group-hover:border-[var(--accent)] transition-colors duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
