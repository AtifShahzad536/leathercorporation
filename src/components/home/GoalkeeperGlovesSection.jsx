import React from 'react';

export default function GoalkeeperGlovesSection() {
  const videos = [
    "https://www.select-sport.com/cdn/shop/videos/c/vp/05b072ff0f6547d0ac4a35024391ff3f/05b072ff0f6547d0ac4a35024391ff3f.HD-1080p-7.2Mbps-22875215.mp4?v=0",
    "https://www.select-sport.com/cdn/shop/videos/c/vp/a15a4f58c7c84e6a8ff37c206633d943/a15a4f58c7c84e6a8ff37c206633d943.HD-1080p-7.2Mbps-75294252.mp4?v=0"
  ];

  return (
    <section className="w-full mx-auto my-16">
      <div className="w-[92%] mx-auto flex flex-col md:flex-row gap-6 h-auto md:h-[650px]">
        {/* Left - Large Text Card (60% Weight) */}
        <div
          className="flex-[3] flex flex-col items-start justify-center p-12 md:p-20 rounded-[24px] relative overflow-hidden"
          style={{ backgroundColor: "var(--secondary)" }}
        >
           {/* Subtle Star Detail */}
           <div className="absolute top-10 right-10 opacity-5">
             <svg width="200" height="200" viewBox="0 0 24 24" fill="white">
               <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
             </svg>
           </div>

          <h3 className="text-[var(--accent)] font-bold text-[10px] tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
             <span className="w-8 h-[1px] bg-[var(--accent)]" /> 2025 HERITAGE SERIES
          </h3>

          <h2
            className="text-white font-black text-4xl md:text-7xl uppercase leading-[0.8] mb-10 tracking-tighter"
            style={{ fontFamily: "'Arial Black', sans-serif" }}
          >
            SIGNATURE BIKER<br />
            <span className="text-[var(--accent)] italic">JACKETS</span>
          </h2>

          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12">
            We proudly present our signature motorcycle and street jacket range, crafted with 1.2mm hand-buffed full-grain cowhide, ergonomic expansion gussets, and removable CE-approved armor protection for uncompromising safety and road presence.
          </p>

          <button
            className="px-12 py-5 bg-[var(--accent)] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-2xl"
          >
            See all leather jackets
          </button>
        </div>

        {/* Right - Dual Video Stack (40% Weight) */}
        <div className="flex-[2] flex flex-col gap-6">
          {videos.map((src, idx) => (
            <div key={idx} className="flex-1 relative overflow-hidden rounded-[24px] bg-[var(--secondary)] group shadow-xl">
               <video
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[var(--secondary)]/20 transition-opacity group-hover:opacity-0" />
              
              {/* Optional Label */}
              <div className="absolute bottom-6 left-6">
                <span className="text-white text-[8px] font-bold tracking-widest uppercase opacity-80 bg-black/40 px-2 py-1 rounded">
                   {idx === 0 ? '1.2MM FULL GRAIN' : 'CE-ARMOR READY'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}