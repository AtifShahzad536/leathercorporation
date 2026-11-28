import React, { useState, useMemo } from 'react';
import { Eye, ArrowRight, Check, Award, Filter } from 'lucide-react';
import TrustBar from '../common/TrustBar';
import SEO from '../common/SEO';
import { fullCatalog296 } from '../../data/fullCatalog296';

export default function PortfolioPage({ onNavigateInquiry = () => {}, onNavigateProduct = () => {} }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const sports = [
    'ALL', 'BASEBALL', 'BASKETBALL', 'FOOTBALL', 'FLAG FOOTBALL',
    'ICE HOCKEY', 'SOCCER', 'LACROSSE', 'RUGBY',
    'SOFTBALL', 'VOLLEYBALL', 'WRESTLING', 'ESPORTS'
  ];

  const portfolioItems = useMemo(() => {
    let items = fullCatalog296;
    if (activeFilter !== 'ALL') {
      items = fullCatalog296.filter(p => (p.sport || p.category || '').toUpperCase().includes(activeFilter));
    }
    return items.slice(0, 24);
  }, [activeFilter]);

  return (
    <>
      <SEO
        title="Custom Team Uniform Showcase & Recent Work | HAMLO SPORTS"
        description="Explore authentic custom sublimation proofs, tackle twill embroidery details, and complete game-day kits manufactured direct from our facility in Sialkot, Pakistan."
        canonical="/portfolio/"
        keywords="custom sportswear portfolio, custom uniform proofs, sublimation jersey showcase, team uniforms gallery"
      />
      <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[var(--secondary)] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="w-[96%] max-w-[1400px] mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-2 block">
            FACTORY SHOWCASE & REAL TEAM ARTWORK
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white mb-3">
            Custom Team Uniform Designs by Sport
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Explore authentic sublimation proofs, tackle-twill embroidery details, and complete game-day kits manufactured direct from our facility in Sialkot, Pakistan.
          </p>
        </div>
      </section>

      <TrustBar />

      <div className="w-[96%] max-w-[1400px] mx-auto my-12 sm:my-16">
        
        {/* Sport Filter Bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 pb-4 border-b border-neutral-200">
          {sports.map(s => (
            <button
              key={s}
              onClick={() => setActiveFilter(s)}
              className={`px-4 py-2 rounded-[3px] text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                activeFilter === s 
                  ? 'bg-[var(--secondary)] text-white shadow-md' 
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-[var(--accent)]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onNavigateProduct(item)}
              className="bg-white rounded-[3px] border border-neutral-200 overflow-hidden shadow-xs hover:border-[var(--accent)] hover:shadow-lg transition flex flex-col justify-between group cursor-pointer p-3"
            >
              <div className="aspect-[4/5] bg-neutral-50 rounded mb-2 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--accent)] block">
                  {item.sport || item.category}
                </span>
                <h2 className="text-xs font-black uppercase text-[var(--secondary)] line-clamp-2 leading-tight group-hover:text-[var(--accent)] transition mb-1">
                  {item.name}
                </h2>
                <span className="text-xs font-black text-[var(--secondary)] block mb-3">
                  {item.price}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigateProduct(item);
                  }}
                  className="w-full py-1.5 bg-neutral-100 group-hover:bg-[var(--secondary)] group-hover:text-white text-[var(--secondary)] text-[10px] font-bold uppercase tracking-wider rounded transition cursor-pointer"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 bg-[var(--secondary)] text-white rounded-[3px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-1">
              CUSTOM DESIGN SERVICE
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
              Want our designers to build a mockup with your team logo?
            </h3>
            <p className="text-xs text-white/70 mt-1">
              Send your colors and emblem. We reply with high-resolution 3D proofs within 12 hours.
            </p>
          </div>
          <button
            onClick={() => onNavigateInquiry({ name: 'Portfolio Custom Mockup Request', sport: 'General' })}
            className="px-8 py-3.5 bg-[var(--accent)] text-white text-xs font-black uppercase tracking-wider rounded-[3px] hover:opacity-90 transition flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Request Free 3D Proof</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
    </>
  );
}
