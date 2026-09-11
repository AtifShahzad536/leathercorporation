import React from 'react';

const Ticker = () => {
  const items = [
    "100% GENUINE LEATHER",
    "MASTER CRAFTSMANSHIP",
    "BESPOKE TAILORING",
    "GLOBAL LEATHER EXPORTS",
    "PREMIUM FULL GRAIN",
    "ITALIAN LAMBSKIN NAPPA",
    "HAND-STITCHED PERFECTION",
    "CE-ARMORED BIKER GEAR"
  ];

  return (
    <div className="w-full bg-[var(--secondary)]/[0.03] border-y border-[var(--secondary)]/10 py-6 overflow-hidden flex whitespace-nowrap">
      <div className="ticker-scroll flex items-center">
        {items.map((item, index) => (
          <span 
            key={index} 
            className="text-4xl md:text-5xl font-black tracking-tighter mx-10 text-[var(--secondary)] hover:text-outline transition-colors duration-300 pointer-events-none"
          >
            {item}
          </span>
        ))}
        {/* Duplicate for seamless infinite scroll */}
        {items.map((item, index) => (
          <span 
            key={`dup-${index}`} 
            className="text-4xl md:text-5xl font-black tracking-tighter mx-10 text-[var(--secondary)] hover:text-outline transition-colors duration-300 pointer-events-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
