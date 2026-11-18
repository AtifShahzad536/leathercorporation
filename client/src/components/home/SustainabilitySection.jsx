import React from 'react';
import { motion } from 'framer-motion';
import { useCMS } from '../../context/CMSContext';

export default function SustainabilitySection({ onExplore = () => { } }) {
  const { homeContent } = useCMS();
  const sust = homeContent?.sustainability || {};

  const leftImage = sust.leftImage || "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80";
  const leftTagline = sust.leftTagline || "OEKO-TEX CERTIFIED RECYCLED POLY";
  const leftHeading = sust.leftHeading || "ENVIRONMENTAL TRANSITION";

  const rightImage = sust.rightImage || "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1400&q=80";
  const rightTagline = sust.rightTagline || "LAB-TESTED TENSILE DURABILITY";
  const rightHeading = sust.rightHeading || "HAMLO LAB";

  return (
    <section className="relative w-full overflow-hidden bg-black border-y border-[var(--secondary)]/15 z-10">
      <div className="w-full">
        {/* Full Edge-to-Edge Container: 0 rounded corners, 0 left/right margin */}
        <div className="flex flex-col md:flex-row h-auto md:h-[650px] w-full rounded-none border-none relative bg-black">

          {/* Left Side: Eco Teamwear Transition */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            onClick={() => onExplore('compliance')}
            className="relative w-full md:w-1/2 h-[420px] md:h-full group cursor-pointer border-r-0 md:border-r-2 border-white/90 overflow-hidden"
          >
            <img
              src={leftImage}
              alt="Sustainable Teamwear & Recycled Interlock"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary)]/90 via-black/40 to-transparent group-hover:from-[var(--secondary)]/80 transition-colors duration-500" />

            <div className="absolute bottom-12 left-8 md:left-12 right-8 md:right-12 z-10">
              <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-[var(--accent)] mb-2 block">
                {leftTagline}
              </span>
              <h3 className="text-white font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
                {leftHeading.includes(' ') ? (
                  <>
                    {leftHeading.split(' ').slice(0, -1).join(' ')} <br />
                    {leftHeading.split(' ').slice(-1).join('')}
                  </>
                ) : (
                  leftHeading
                )}
              </h3>
              <div className="w-20 h-1.5 bg-[var(--accent)] shadow-lg" />
            </div>
          </motion.div>

          {/* Center Diamond Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block pointer-events-auto">
            <motion.div
              initial={{ scale: 0, rotate: 45 }}
              whileInView={{ scale: 1, rotate: 45 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 15, delay: 0.3 }}
              className="relative w-64 h-64 border-2 border-white shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden bg-black group/hub"
            >
              <div className="absolute inset-[-50%] -rotate-45 flex flex-col items-center justify-center p-8 text-center text-white">
                <div
                  className="absolute inset-0 bg-[var(--accent)] z-0"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                />
                <div
                  className="absolute inset-0 bg-[var(--secondary)] z-0"
                  style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                />
                <div
                  className="absolute inset-0 bg-white/40 z-10"
                  style={{ clipPath: 'polygon(0 0, 2px 0, 100% 100%, calc(100% - 2px) 100%)' }}
                />

                <div className="relative z-20 flex flex-col items-center">
                  <p className="font-black text-[10px] tracking-[0.3em] mb-2 uppercase opacity-90 text-white">
                    COMMITMENT
                  </p>
                  <h4 className="font-black text-base leading-tight mb-5 max-w-[150px] uppercase tracking-tight text-white drop-shadow">
                    ECO-PERFORMANCE INNOVATION
                  </h4>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onExplore('certification');
                    }}
                    className="bg-white text-[var(--secondary)] font-black text-[10px] tracking-widest px-5 py-2 hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 cursor-pointer uppercase shadow-lg"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: HAMLO LAB */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            onClick={() => onExplore('certification')}
            className="relative w-full md:w-1/2 h-[420px] md:h-full group cursor-pointer overflow-hidden"
          >
            <img
              src={rightImage}
              alt="HAMLO Sports Performance Lab"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/75 transition-colors duration-500" />

            {/* Right Header Box */}
            <div className="absolute top-12 left-8 md:left-auto md:right-12 z-10 text-left md:text-right">
              <div className="relative inline-block px-8 py-4 overflow-hidden mb-4 border-2 border-white shadow-2xl">
                <div
                  className="absolute inset-0 bg-[var(--accent)]"
                  style={{ clipPath: 'polygon(0 0, 65% 0, 35% 100%, 0% 100%)' }}
                />
                <div
                  className="absolute inset-0 bg-[var(--secondary)]"
                  style={{ clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 35% 100%)' }}
                />
                <span className="relative z-10 text-white font-black text-2xl uppercase tracking-[0.25em]">
                  {rightHeading}
                </span>
              </div>

              <p className="text-white/90 font-medium text-sm md:text-base tracking-wide max-w-[400px] md:ml-auto leading-relaxed drop-shadow">
                {rightTagline}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
