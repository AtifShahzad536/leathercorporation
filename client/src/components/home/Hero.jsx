import React from 'react';
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
    <section className="relative w-full overflow-hidden bg-[var(--secondary)] h-[44svh] min-h-[260px] max-h-[360px] sm:h-[55svh] sm:min-h-[340px] sm:max-h-[460px] md:h-[100svh] md:min-h-[520px] md:max-h-none">

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
          className="w-full h-full object-cover object-center"
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover object-center z-[1]"
      >
        <track kind="captions" src="data:text/vtt,WEBVTT" label="English" default={false} />
      </video>

      {/* Overlay - Gradient on mobile to keep top of video bright and clear */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary)]/85 via-[var(--secondary)]/40 to-[var(--secondary)]/20 md:bg-[var(--secondary)]/50 md:backdrop-brightness-90 z-[2]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-4 sm:pb-6 md:pb-[8%]">
        <div className="w-[96%] max-w-[1800px] mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 w-full">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-md text-[var(--accent)] text-[8px] sm:text-[9px] md:text-xs font-bold uppercase tracking-wider sm:tracking-widest border border-white/20">
              {badgeText}
            </div>

            <h1 className="text-white font-black tracking-wide sm:tracking-wider uppercase text-center text-[11px] sm:text-base md:text-2xl lg:text-3xl max-w-xs sm:max-w-xl md:max-w-4xl leading-tight sm:leading-snug">
              {headingText}
            </h1>
  
            <button
              onClick={onExplore}
              className="border border-white bg-transparent text-white font-bold tracking-wider sm:tracking-widest uppercase text-[8.5px] sm:text-xs md:text-sm px-4 py-1.5 sm:px-6 sm:py-2.5 md:px-10 md:py-4 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 hover:bg-[#F26522] hover:text-[#1E1B6E] hover:border-[#F26522] active:scale-95"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
