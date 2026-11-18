import React from 'react';
import { useCMS } from '../../context/CMSContext';

const Ticker = () => {
  const { homeContent } = useCMS();
  const items = homeContent?.ticker?.items || [
    "DYE-SUBLIMATION SPECIALISTS",
    "CUSTOM BASEBALL UNIFORMS",
    "PRO BASKETBALL KITS",
    "HEAVYWEIGHT FOOTBALL JERSEYS",
    "AERODYNE SOCCER APPAREL",
    "CUSTOM ESPORTS HOODIES",
    "ICE HOCKEY AIR-KNIT SWEATERS",
    "FACTORY DIRECT B2B WHOLESALE",
    "FREE 3D DIGITAL MOCKUPS"
  ];

  return (
    <div className="w-full bg-[var(--secondary)]/[0.03] border-y border-[var(--secondary)]/10 py-6 overflow-hidden flex whitespace-nowrap">
      <div className="ticker-scroll flex items-center">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-3xl md:text-5xl font-black tracking-tighter mx-8 text-[var(--secondary)] hover:text-outline transition-colors duration-300 pointer-events-none"
          >
            {item}
          </span>
        ))}
        {/* Duplicate for seamless infinite scroll */}
        {items.map((item, index) => (
          <span
            key={`dup-${index}`}
            className="text-3xl md:text-5xl font-black tracking-tighter mx-8 text-[var(--secondary)] hover:text-outline transition-colors duration-300 pointer-events-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
