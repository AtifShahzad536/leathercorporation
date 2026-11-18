import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Sparkles } from "lucide-react";
import { useCMS } from "../../context/CMSContext";

const defaultSlides = [
  {
    year: "1994",
    title: "ATHLETIC CUT & SEW",
    subtitle: "HAMLO FOUNDATION",
    description:
      "HAMLO SPORTS started as an athletic manufacturing atelier in Sialkot, Pakistan. Crafting high-tension flatlock stitched uniforms, heavy-drill training gear, and field-tested athletic apparel engineered for endurance.",
    image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=1000&q=80",
    accent: "#F26522",
  },
  {
    year: "2006",
    title: "DYE-SUBLIMATION",
    subtitle: "MOLECULAR COLOR REVOLUTION",
    description:
      "Pioneered Japanese industrial dye-sublimation print engines across team uniforms. Molecularly bonding Pantone colors, custom typography, and team crests directly into technical 220 GSM micro-interlock poly with zero cracking or fading.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80",
    accent: "#F26522",
  },
  {
    year: "2015",
    title: "LASER TACKLE TWILL",
    subtitle: "COLLEGIATE 3D APPLIQUÉ",
    description:
      "Installed multi-head laser embroidery cutting for collegiate varsity lettering and multi-layer zigzag tackle twill, bringing authentic MLB and NCAA standard baseball and hockey jerseys to club rosters worldwide.",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=1000&q=80",
    accent: "#F26522",
  },
  {
    year: "2020",
    title: "GLOBAL AIR CORRIDORS",
    subtitle: "DIRECT DDP USA & EU",
    description:
      "Launched direct door-to-door air freight with pre-cleared customs and duties (DDP). Delivering custom sublimated uniform sets directly to US high schools, colleges, and club directors with zero customs delays.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=80",
    accent: "#F26522",
  },
  {
    year: "2024",
    title: "12H 3D MOCKUP LAB",
    subtitle: "PRECISION DIGITAL ARTWORK",
    description:
      "Revolutionized team uniform ordering with our 12-hour 3D digital mockup turnaround. Coaches inspect true-scale typography, roster numbering, and Pantone color accuracy before a single stitch is sewn.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
    accent: "#F26522",
  },
  {
    year: "2026",
    title: "HAMLO PRO FACTORY",
    subtitle: "COMPLETE TEAM DIRECT OUTFITTER",
    description:
      "Full 12-discipline sport production spanning Baseball, Basketball, Football, Soccer, Esports, Wrestling, and Hockey. Over 296 verified performance cuts delivered factory-direct with no minimum order requirements.",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1000&q=80",
    accent: "#F26522",
  },
];

export default function HistorySlider() {
  const [current, setCurrent] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false);
  const timelineRef = useRef(null);
  const { homeContent } = useCMS();

  const slides = (homeContent?.footballHistory?.slides && homeContent.footballHistory.slides.length > 0)
    ? homeContent.footballHistory.slides
    : defaultSlides;

  // Make sure current doesn't overflow if slides length changes
  const activeIndex = current < slides.length ? current : 0;

  const goTo = (index) => {
    if (index === activeIndex) return;
    setIsExpanded(false);
    setCurrent(index);
  };

  const prev = () => goTo(activeIndex > 0 ? activeIndex - 1 : slides.length - 1);
  const next = () => goTo(activeIndex < slides.length - 1 ? activeIndex + 1 : 0);

  const slide = slides[activeIndex] || slides[0];

  useEffect(() => {
    if (timelineRef.current) {
      const activeEl = timelineRef.current.children[activeIndex];
      if (activeEl) {
        const container = timelineRef.current;
        const offset = activeEl.offsetLeft - (container.clientWidth / 2) + (activeEl.clientWidth / 2);
        container.scrollTo({ left: offset, behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  return (
    <section className="relative w-full bg-[var(--primary)] text-[var(--secondary)] py-16 sm:py-24 border-b border-[var(--secondary)]/10 overflow-hidden select-none">

      {/* Giant Background Watermark Year */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={`${slide.year || '2026'}-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.04, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-black text-[28vw] md:text-[22rem] leading-none text-[var(--secondary)]"
          >
            {slide.year || '2026'}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="w-[96%] max-w-[1800px] mx-auto relative z-10">

        {/* ── TOP SECTION: PURE TRANSPARENT PRODUCT ON LEFT + TEXT ON RIGHT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-16">
          
          {/* Transparent Product Visual Stage */}
          <div className="lg:col-span-7 flex items-center justify-center order-1 relative min-h-[320px] sm:min-h-[440px] md:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${slide.year || 'era'}-${activeIndex}-img`}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="relative w-full max-w-[480px] aspect-square flex items-center justify-center"
              >
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/15 blur-2xl rounded-full pointer-events-none" />

                <img
                  src={slide.image}
                  alt="HAMLO SPORTS Custom Athletic Uniform Showcase"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] select-none pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text & Content Block */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${slide.year || 'era'}-${activeIndex}-text`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-[var(--accent)] mb-3">
                  <Sparkles size={14} />
                  <span>{slide.subtitle || 'PERFORMANCE INNOVATION'}</span>
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[var(--secondary)] uppercase tracking-tight leading-none mb-6">
                  {slide.title}
                </h2>

                <p className={`text-sm sm:text-base text-[var(--secondary)]/75 font-normal leading-relaxed mb-6 ${!isExpanded ? 'line-clamp-4 sm:line-clamp-none' : ''}`}>
                  {slide.description}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={prev}
                    aria-label="Previous Era"
                    className="w-12 h-12 rounded-full border border-[var(--secondary)]/20 hover:border-[var(--accent)] bg-white hover:bg-[var(--accent)] text-[var(--secondary)] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
                  >
                    <FiChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next Era"
                    className="w-12 h-12 rounded-full border border-[var(--secondary)]/20 hover:border-[var(--accent)] bg-white hover:bg-[var(--accent)] text-[var(--secondary)] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
                  >
                    <FiChevronRight size={20} />
                  </button>

                  <span className="text-xs font-mono font-bold text-[var(--secondary)]/80 ml-3">
                    {slide.year} MILESTONE
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ── BOTTOM HORIZONTAL TIMELINE BAR ── */}
        <div className="w-full pt-8 border-t border-[var(--secondary)]/15 relative">
          <div className="hidden sm:block absolute top-8 left-0 right-0 h-[2px] bg-[var(--secondary)]/10 z-0" />
          
          <div
            ref={timelineRef}
            className="flex items-center justify-between gap-4 sm:gap-6 overflow-x-auto scrollbar-hide py-2 relative z-10 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {slides.map((s, i) => {
              const isActive = i === activeIndex;

              return (
                <button
                  key={s.year + i}
                  onClick={() => goTo(i)}
                  className={`group flex flex-col items-center flex-shrink-0 cursor-pointer transition-all duration-300 px-3 sm:px-4 py-2 min-h-[44px] ${
                    isActive ? 'scale-105 opacity-100' : 'opacity-85 hover:opacity-100'
                  }`}
                >
                  <div className="relative mb-3 flex items-center justify-center">
                    <div className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-[var(--accent)] ring-4 ring-[var(--accent)]/30 scale-125' 
                        : 'bg-[var(--secondary)]/50 group-hover:bg-[var(--secondary)]'
                    }`} />
                  </div>

                  <span className={`text-xl sm:text-2xl md:text-3xl font-black font-mono tracking-tight transition-colors duration-300 ${
                    isActive ? 'text-[var(--accent)]' : 'text-[var(--secondary)]/85 group-hover:text-[var(--secondary)]'
                  }`}>
                    {s.year}
                  </span>

                  <span className={`text-[9.5px] font-bold uppercase tracking-wider mt-1 text-center whitespace-nowrap transition-colors duration-300 ${
                    isActive ? 'text-[var(--secondary)]' : 'text-[var(--secondary)]/75'
                  }`}>
                    {(s.title || '').split(' ')[0] || s.year || 'ERA'}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
