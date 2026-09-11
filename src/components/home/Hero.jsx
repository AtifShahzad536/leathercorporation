import React from 'react';
import { motion } from 'framer-motion';

const VIDEO_URL = '/leaderhero.mp4';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--secondary)] h-[38svh] md:h-[100svh]">

      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1920&auto=format&fit=crop"
        src={VIDEO_URL}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--secondary)]/45 backdrop-brightness-90" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-[8%]">
        <div className="w-[92%] mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4 w-full"
          >
            <h1 className="text-white font-bold tracking-widest uppercase text-center text-[11px] md:text-xl max-w-3xl leading-relaxed">
              MASTER CRAFTSMEN OF LUXURY LEATHER JACKETS & MOTORCYCLE APPAREL
            </h1>
  
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#F26522', color: '#1E1B6E', borderColor: '#F26522' }}
              whileTap={{ scale: 0.97 }}
              className="border border-white bg-transparent text-white font-semibold tracking-widest uppercase text-[9px] md:text-sm px-4 py-2 md:px-10 md:py-4 transition-all duration-300 shadow-xl"
            >
              Explore 2025/2026 Heritage Leather Collection
            </motion.button>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;