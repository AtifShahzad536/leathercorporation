import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const slides = [
  {
    year: "1947",
    title: "THE FOUNDATION",
    subtitle: "LEADER LEATHER ATELIER",
    description:
      "In 1947, Leader Corporation was founded as a dedicated artisan leather workshop. Hand-cutting patterns and sewing full-grain leather jackets with exceptional stitch tension, setting the standard for lifetime durability.",
    image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=800&q=80",
    accent: "#F26522",
  },
  {
    year: "1968",
    title: "MOTORCYCLE LEATHERS",
    subtitle: "ROAD & TRACK ERA",
    description:
      "Leader Corporation pioneered heavy-duty double-rider motorcycle jackets and road racing suits. Engineered with reinforced seams and impact abrasion resistance for motorsport riders across Europe.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
    accent: "#F26522",
  },
  {
    year: "1985",
    title: "GLOBAL EXPORTS",
    subtitle: "WORLDWIDE OEM",
    description:
      "Leader Corporation expanded direct exports of premium leather outerwear to leading fashion labels in North America and Western Europe, establishing its reputation as a world-class OEM manufacturer.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    accent: "#F26522",
  },
  {
    year: "1999",
    title: "VEGETABLE TANNING",
    subtitle: "ORGANIC INNOVATION",
    description:
      "Introduced artisan vegetable tanning and drum-dyed full-grain finishing, eliminating harsh chemicals while producing hides that develop rich, distinctive patinas over decades of wear.",
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80",
    accent: "#F26522",
  },
  {
    year: "2014",
    title: "3D ERGONOMIC FIT",
    subtitle: "PRECISION TAILORING",
    description:
      "Combined master hand-craftsmanship with computer-aided 3D anatomical tailoring and laser cutting, delivering jackets with glove-like articulation and zero arm restriction.",
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&q=80",
    accent: "#F26522",
  },
  {
    year: "2020",
    title: "LWG GOLD CERTIFIED",
    subtitle: "SUSTAINABLE TANNERY",
    description:
      "Achieved 100% Leather Working Group (LWG) environmental certification across partnering tanneries, ensuring zero wastewater discharge and sustainable solar energy usage.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15f?w=800&q=80",
    accent: "#F26522",
  },
  {
    year: "2025",
    title: "75+ YEAR LEGACY",
    subtitle: "TIMELESS LUXURY",
    description:
      "Over seven decades of mastery. Today, Leader Corporation remains the definitive choice for bespoke outerwear, motorcycle jackets, and international luxury fashion collaborations.",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&q=80",
    accent: "#F26522",
  },
];

export default function HistorySlider() {
  const [current, setCurrent] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false);
  const timelineRef = useRef(null);
  const mobileTimelineRef = useRef(null);

  const goTo = (index) => {
    if (index === current) return;
    setIsExpanded(false);
    setCurrent(index);
  };

  const prev = () => goTo(current > 0 ? current - 1 : slides.length - 1);
  const next = () => goTo(current < slides.length - 1 ? current + 1 : 0);

  const slide = slides[current];

  // Scroll active year into view on mobile
  useEffect(() => {
    if (mobileTimelineRef.current) {
      const activeEl = mobileTimelineRef.current.children[current];
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [current]);

  return (
    <section className="relative w-full min-h-[90svh] bg-[var(--primary)] flex items-center py-20 overflow-hidden">

      {/* Background Watermark Year */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={slide.year}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-black text-[25vw] md:text-[20rem] leading-none text-[var(--secondary)]"
          >
            {slide.year}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="w-[92%] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 h-full">

          {/* Column 1: Vertical Timeline (approx 10%) */}
          <div className="hidden lg:flex flex-col items-center relative h-[500px]">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 w-px bg-[var(--secondary)]/10" />
            <motion.div
              className="absolute top-0 w-px bg-[var(--accent)]"
              animate={{ height: `${(current / (slides.length - 1)) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Year Markers */}
            <div className="flex flex-col justify-between h-full relative z-10">
              {slides.map((s, i) => (
                <button
                  key={s.year}
                  onClick={() => goTo(i)}
                  className="group relative flex items-center justify-center py-4 outline-none"
                >
                  {/* Dot */}
                  <motion.div
                    animate={{
                      scale: i === current ? 1.5 : 1,
                      backgroundColor: i === current ? "var(--accent)" : "rgba(30, 27, 110, 0.2)"
                    }}
                    className="w-3 h-3 rounded-full transition-colors"
                  />

                  {/* Year Label */}
                  <span className={`absolute left-8 text-sm font-bold tracking-widest transition-all duration-300 whitespace-nowrap ${i === current ? 'text-[var(--secondary)] scale-110' : 'text-[var(--secondary)]/30 group-hover:text-[var(--secondary)]/60'}`}>
                    {s.year}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Horizontal Timeline (visible only on md and below) */}
          <div
            ref={mobileTimelineRef}
            className="flex lg:hidden w-full overflow-x-auto scrollbar-hide gap-10 pb-6 border-b border-[var(--secondary)]/10 mb-8 px-[4%]"
          >
            {slides.map((s, i) => (
              <button
                key={`mob-${s.year}`}
                onClick={() => goTo(i)}
                className={`flex-shrink-0 text-xl font-black tracking-tighter transition-all duration-300 ${i === current ? 'text-[var(--accent)] scale-110' : 'text-[var(--secondary)]/30'}`}
              >
                {s.year}
              </button>
            ))}
          </div>

          {/* Column 2: Text Content (approx 40%) */}
          <div className="flex-1 flex flex-col justify-center max-w-xl order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="uppercase tracking-[0.3em] font-black text-[var(--accent)] text-[10px] md:text-xs mb-4">
                  {slide.subtitle}
                </p>
                <h2 className="text-4xl md:text-6xl font-black text-[var(--secondary)] leading-none mb-8">
                  {slide.title}
                </h2>

                <div className="relative">
                  <p className={`text-sm md:text-base text-[var(--secondary)]/70 leading-relaxed transition-all duration-300 ${!isExpanded ? 'line-clamp-4' : ''}`}>
                    {slide.description}
                  </p>
                  {slide.description.length > 150 && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-4 text-[10px] md:text-xs font-black tracking-widest uppercase text-[var(--secondary)] hover:text-[var(--accent)] transition-all flex items-center gap-2"
                    >
                      {isExpanded ? (
                        <>SEE LESS <FiChevronUp /></>
                      ) : (
                        <>SEE MORE <FiChevronDown /></>
                      )}
                    </button>
                  )}
                </div>

                {/* Navigation Arrows for content area */}
                <div className="flex items-center gap-4 mt-12">
                  <button onClick={prev} className="w-12 h-12 rounded-full border border-[var(--secondary)]/10 flex items-center justify-center hover:bg-[var(--secondary)] hover:text-white transition-all duration-300">
                    <FiChevronUp size={20} className="rotate-[-90deg] lg:rotate-0" />
                  </button>
                  <button onClick={next} className="w-12 h-12 rounded-full border border-[var(--secondary)]/10 flex items-center justify-center hover:bg-[var(--secondary)] hover:text-white transition-all duration-300">
                    <FiChevronDown size={20} className="rotate-[-90deg] lg:rotate-0" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 3: Visual Visual (approx 50%) */}
          <div className="flex-[1.2] flex items-center justify-center order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.year}
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.1, x: -50 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="relative w-full aspect-square md:max-w-2xl"
              >
                {/* Floating Shadow */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[5%] bg-black/10 blur-2xl rounded-full" />

                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}