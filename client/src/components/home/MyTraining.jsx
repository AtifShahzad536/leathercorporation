import React from 'react';
import { Sparkles, ShieldCheck, Clock, Award, ArrowRight } from 'lucide-react';

const MyTraining = ({ onExplore = () => {} }) => {
  return (
    <section className="w-full py-6 sm:py-10">
      <div className="w-[96%] max-w-[1800px] mx-auto">
        {/* Full-Width Midnight Blue Content Banner */}
        <div className="w-full bg-[var(--secondary)] text-white relative overflow-hidden rounded-[4px] p-8 sm:p-14 md:p-20 shadow-2xl">
          {/* Subtle Background Glow & Accent lines */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Badge */}
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--accent)] mb-3 inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-xs">
              <Sparkles size={14} className="animate-pulse" /> SIALKOT FACTORY DIRECT
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase mb-4 sm:mb-6 leading-tight">
              CUSTOM TEAM UNIFORMS
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-2xl font-light">
              HAMLO SPORTS engineers pro-grade dye-sublimated athletic uniforms for youth academies, travel ball clubs, high schools, and competitive leagues. Tailored from 180–220 GSM moisture-wicking interlock fabrics with reinforced 4-thread coverstitch seams.
            </p>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-10 text-left">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-white/95">
                <ShieldCheck size={18} className="text-[var(--accent)] flex-shrink-0" />
                <span>No Minimum Orders</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-white/95">
                <Clock size={18} className="text-[var(--accent)] flex-shrink-0" />
                <span>Free 12h 3D Mockup</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-white/95">
                <Award size={18} className="text-[var(--accent)] flex-shrink-0" />
                <span>DDP Duties Paid</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-white/95">
                <ShieldCheck size={18} className="text-[var(--accent)] flex-shrink-0" />
                <span>Free Remake Guarantee</span>
              </div>
            </div>

            {/* CTA Action Button */}
            <button
              onClick={() => onExplore('inquiry')}
              className="inline-flex items-center gap-3 bg-[var(--accent)] hover:bg-white hover:text-[var(--secondary)] text-white font-black text-xs sm:text-sm tracking-widest py-4 px-8 sm:px-12 rounded-[4px] shadow-2xl transition-all duration-300 cursor-pointer uppercase hover:scale-105 active:scale-95"
            >
              <span>REQUEST FREE 3D DIGITAL PROOF</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTraining;
