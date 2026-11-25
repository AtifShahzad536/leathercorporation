import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCMS } from '../../context/CMSContext';

const Hero = ({ onExplore = () => {} }) => {
  const { homeContent } = useCMS();
  const hero = homeContent?.hero || {};

  const videoSrc = hero.videoUrl || '/leaderheros.mp4';

  // Responsive poster: w=720 on mobile vs w=960 on desktop (optimized with q=70 & auto=format)
  const mobilePoster = 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=70&w=720&auto=format&fit=crop';
  const desktopPoster = hero.posterImage || 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=70&w=960&auto=format&fit=crop';

  const badgeText = hero.badge || 'CUSTOM SPORTSWEAR & ATHLETIC UNIFORMS MANUFACTURER';
  const headingText = hero.title || 'PRO-GRADE DYE-SUBLIMATED UNIFORMS & TEAM APPAREL FACTORY DIRECT';
  const buttonLabel = hero.buttonText || 'Explore 2026 Sports Uniforms Collection';

  return (
    <section className="relative w-full overflow-hidden bg-[var(--secondary)] min-h-[460px] h-[75svh] md:h-[100svh]">

      {/* ── High-Priority Responsive LCP Image (Immediately discoverable, Eager, High Priority) ── */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none">
        <source
          media="(max-width: 768px)"
          srcSet={mobilePoster}
        />
        <source
          media="(min-width: 769px)"
          srcSet={desktopPoster}
        />
        <img
          src={mobilePoster}
          alt="HAMLO SPORTS Pro-Grade Athletic Uniforms & Teamwear"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Dynamic Video (plays smoothly above background image once loaded) */}
      <video
        key={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        preload="metadata"
        poster={mobilePoster}
        src={videoSrc}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-[1]"
      >
        <track kind="captions" src="data:text/vtt,WEBVTT" label="English" default={false} />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--secondary)]/50 backdrop-brightness-90 z-[2]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-[8%]">
        <div className="w-[96%] max-w-[1800px] mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4 w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[var(--accent)] text-[9px] md:text-xs font-bold uppercase tracking-widest border border-white/20">
              {badgeText}
            </div>

            <h1 className="text-white font-black tracking-wider uppercase text-center text-[13px] md:text-2xl lg:text-3xl max-w-4xl leading-tight">
              {headingText}
            </h1>
  
            <motion.button
              onClick={onExplore}
              whileHover={{ scale: 1.05, backgroundColor: '#F26522', color: '#1E1B6E', borderColor: '#F26522' }}
              whileTap={{ scale: 0.97 }}
              className="border border-white bg-transparent text-white font-bold tracking-widest uppercase text-[9px] md:text-sm px-5 py-2.5 md:px-10 md:py-4 transition-all duration-300 shadow-xl cursor-pointer"
            >
              {buttonLabel}
            </motion.button>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
