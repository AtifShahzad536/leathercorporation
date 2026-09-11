import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SustainabilitySection() {
  const [activeIdx, setActiveIdx] = useState(0); // 0: Left expanded, 1: Right expanded

  const springTransition = {
    type: "spring",
    stiffness: 120,
    damping: 20,
    mass: 1
  };

  const cards = [
    {
      id: 0,
      title: "SUSTAINABLE TANNERIES",
      subtitle: "LWG GOLD CERTIFIED",
      description: "We are pioneering ecological leathercraft across our outerwear range — utilizing zero-chrome vegetable tanning, organic oils, and closed-loop water treatment facilities.",
      button: "OUR ECO INITIATIVES",
      image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=1200&auto=format&fit=crop",
      accent: "var(--accent)"
    },
    {
      id: 1,
      title: "LEADER LEATHER LAB",
      subtitle: "MATERIAL SCIENCE",
      description: "Where artisan pattern engineering meets tensile strength calibration and abrasion resistance testing to craft heirloom leather jackets.",
      button: "EXPLORE THE DATA",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop",
      accent: "var(--secondary)"
    }
  ];

  return (
    <section className="w-full bg-[var(--primary)] py-24 overflow-hidden">
      <div className="w-[92%] mx-auto flex flex-col md:flex-row gap-6 h-[800px] md:h-[650px] relative">
        
        {cards.map((card, idx) => {
          const isActive = activeIdx === idx;
          const isLeft = idx === 0;

          return (
            <motion.div
              key={card.id}
              onClick={() => setActiveIdx(idx)}
              animate={{ 
                flex: isActive ? 4.5 : 1,
                borderRadius: "24px"
              }}
              transition={springTransition}
              className={`relative overflow-hidden cursor-pointer group bg-[var(--secondary)] shadow-2xl transition-shadow hover:shadow-[0_20px_50px_rgba(30,27,110,0.15)]`}
            >
              <motion.img
                src={card.image}
                alt={card.title}
                animate={{ 
                    scale: isActive ? 1.05 : 1.3,
                    x: isActive ? "0%" : isLeft ? "-15%" : "15%"
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
              {/* Solid Branded Overlay */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-[var(--secondary)]/30' : 'bg-[var(--secondary)]/60'}`} />
              
              <div className={`absolute inset-0 p-10 md:p-20 flex flex-col transition-all duration-700 ${isActive ? 'justify-end' : 'justify-center items-center'}`}>
                {/* Unified Content Container */}
                <motion.div
                   animate={{ 
                     rotate: isActive ? 0 : (isLeft ? -90 : 90),
                     scale: isActive ? 1 : 0.9
                   }}
                   transition={springTransition}
                   className={`flex flex-col ${isActive ? 'items-start text-left' : 'items-center'}`}
                >
                  {/* Subtitle/Indicator */}
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0.4 }}
                    className={isActive ? 'mb-6' : 'mb-4'}
                  >
                    {isActive ? (
                      <span className="inline-block px-4 py-1.5 bg-white text-[var(--secondary)] text-[10px] font-bold tracking-[0.3em] uppercase rounded-full">
                          {card.subtitle}
                      </span>
                    ) : (
                      <div className="w-12 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" />
                    )}
                  </motion.div>

                  {/* Main Title */}
                  <h3 className={`text-white font-black uppercase leading-[0.85] tracking-tighter transition-all duration-700 ${isActive ? 'text-4xl md:text-7xl mb-8' : 'text-3xl opacity-40'}`}>
                      {isActive ? (
                        <>
                          {card.title.split(' ')[0]}<br />
                          <span className="text-[var(--accent)]">{card.title.split(' ')[1]}</span>
                        </>
                      ) : (
                        card.title
                      )}
                  </h3>

                  {/* Expanded Only Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-start"
                      >
                        <p className="text-white/80 text-lg font-light leading-relaxed mb-10 max-w-md text-left">
                            {card.description}
                        </p>
                        <button className="px-10 py-5 bg-[var(--accent)] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:scale-105 transition-transform shadow-xl">
                            {card.button}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Interaction Indicator */}
              {!isActive && (
                <div className="absolute top-10 flex flex-col items-center w-full">
                    <div className="w-1 h-16 bg-white/20 rounded-full relative overflow-hidden">
                        <motion.div 
                            animate={{ y: [0, 40, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-full h-8 bg-[var(--accent)]"
                        />
                    </div>
                </div>
              )}
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
