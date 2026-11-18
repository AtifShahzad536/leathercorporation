import React, { useState, useEffect, useRef } from 'react';
import { useCMS } from '../../context/CMSContext';

export default function GoalkeeperGlovesSection({ onExplore = () => {} }) {
  const { homeContent } = useCMS();
  const data = homeContent?.goalkeeperGloves || {};
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const tagline = data.tagline || '2026 TEAM UNIFORMS & SUBLIMATION';
  const heading = data.heading || 'CUSTOM TEAM JERSEYS';
  const description = data.description || 'Equip your roster with factory-direct pro uniforms. Featuring 220 GSM moisture-wicking interlock fabrics, precision dye-sublimation with infinite color options, and reinforced bar-tack stitching engineered for peak athlete endurance.';
  const buttonText = data.buttonText || 'See all sports uniforms';
  const videos = [
    data.video1 || "/leaderheros.mp4",
    data.video2 || "/herovideo.mp4"
  ];

  return (
    <section ref={sectionRef} className="w-full mx-auto my-8 sm:my-16">
      <div className="w-[96%] max-w-[1800px] mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 h-auto md:h-[650px]">
        {/* Left - Large Text Card (60% Weight) */}
        <div
          className="flex-[3] flex flex-col items-start justify-center p-6 sm:p-12 md:p-20 rounded-[3px] relative overflow-hidden"
          style={{ backgroundColor: "var(--secondary)" }}
        >
           {/* Subtle Star Detail */}
           <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
             <svg width="200" height="200" viewBox="0 0 24 24" fill="white">
               <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
             </svg>
           </div>

          <h3 className="text-[var(--accent)] font-bold text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-6 flex items-center gap-2 sm:gap-3">
             <span className="w-5 sm:w-8 h-[1px] bg-[var(--accent)]" /> {tagline}
          </h3>

          <h2
            className="text-white font-black text-3xl sm:text-5xl md:text-7xl uppercase leading-[0.9] sm:leading-[0.8] mb-4 sm:mb-8 tracking-tighter"
            style={{ fontFamily: "'Arial Black', sans-serif" }}
          >
            {heading.includes(' ') ? (
              <>
                {heading.split(' ').slice(0, -1).join(' ')}<br />
                <span className="text-[var(--accent)] italic">{heading.split(' ').slice(-1).join('')}</span>
              </>
            ) : (
              <span className="text-[var(--accent)]">{heading}</span>
            )}
          </h2>

          <p className="text-white/70 text-xs sm:text-base md:text-xl font-light leading-relaxed max-w-2xl mb-6 sm:mb-12">
            {description}
          </p>

          <button
            onClick={onExplore}
            className="px-6 py-3 sm:px-12 sm:py-5 bg-[var(--accent)] text-white font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] rounded-[3px] hover:scale-105 transition-all shadow-2xl cursor-pointer"
          >
            {buttonText}
          </button>
        </div>

        {/* Right - Dual Video Stack */}
        <div className="flex-[2] flex flex-row md:flex-col gap-3 sm:gap-6 h-[190px] sm:h-[260px] md:h-full">
          {videos.map((src, idx) => (
            <div key={idx} className="flex-1 relative rounded-[3px] overflow-hidden group shadow-lg bg-black">
              <video
                key={src}
                autoPlay={isVisible}
                loop
                muted
                playsInline
                aria-hidden="true"
                preload="none"
                poster={idx === 0 ? "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=70&w=600&auto=format&fit=crop" : "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=70&w=600&auto=format&fit=crop"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={isVisible ? src : undefined}
              >
                <track kind="captions" src="data:text/vtt,WEBVTT" label="English" default={false} />
              </video>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
