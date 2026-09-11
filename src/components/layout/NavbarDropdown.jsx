import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const NavbarDropdown = ({ isOpen, activeLink, data, onClose, alignRight = false }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);

  if (!data) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key={activeLink}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`absolute top-full ${alignRight ? 'right-0' : 'left-0'} mt-0 z-[100] flex ${alignRight ? 'flex-row-reverse' : 'flex-row'}`}
          onMouseLeave={() => {
            setActiveCategoryIndex(null);
            onClose();
          }}
        >
          {/* Level 1: Main Categories Card */}
          <div className="w-72 bg-[var(--primary)] border border-[var(--secondary)]/10 shadow-[0_10px_40px_rgba(30,27,110,0.12)] py-4 overflow-hidden rounded-[3px]">
            <ul className="flex flex-col">
              {data.categories?.map((cat, idx) => {
                const isObj = typeof cat === 'object';
                const name = isObj ? cat.name : cat;
                const hasSubs = isObj && cat.subCategories?.length > 0;
                const isActive = activeCategoryIndex === idx;

                return (
                  <li 
                    key={idx} 
                    className={`px-6 py-3 cursor-pointer flex items-center justify-between transition-colors ${isActive ? 'bg-[var(--secondary)]/5' : 'hover:bg-[var(--secondary)]/5'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (hasSubs) {
                        setActiveCategoryIndex(isActive ? null : idx);
                      }
                    }}
                  >
                    <span className={`text-[13px] font-medium tracking-wider uppercase transition-colors ${isActive ? 'text-[var(--accent)] font-bold' : 'text-[var(--secondary)]/80'}`}>
                      {name}
                    </span>
                    {hasSubs && (
                      <ChevronRight size={14} className={`transition-transform duration-300 ${isActive ? 'translate-x-1 text-[var(--accent)]' : 'text-[var(--secondary)]/30'}`} />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Level 2: Flyout Card (Text Only) */}
          <AnimatePresence>
            {activeCategoryIndex !== null && data.categories[activeCategoryIndex]?.subCategories && (
              <motion.div
                initial={{ opacity: 0, x: alignRight ? 10 : -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: alignRight ? 10 : -10 }}
                transition={{ duration: 0.2 }}
                className={`w-64 bg-[var(--primary)] border-[var(--secondary)]/10 shadow-[20px_10px_40px_rgba(30,27,110,0.12)] ${alignRight ? 'mr-[-1px] rounded-[3px] border-l border-t border-b' : 'ml-[-1px] rounded-[3px] border-r border-t border-b'} py-6 px-8`}
              >
                <div className="mb-4 border-b border-[var(--secondary)]/5 pb-2">
                  <h4 className="text-[10px] font-bold text-[var(--accent)] tracking-[0.2em] uppercase">
                    {data.categories[activeCategoryIndex].name}
                  </h4>
                </div>
                <ul className="flex flex-col gap-3">
                  {data.categories[activeCategoryIndex].subCategories.map((sub, sIdx) => (
                    <li 
                      key={sIdx} 
                      className="group cursor-pointer"
                    >
                      <span className="text-[13px] font-medium text-[var(--secondary)]/60 group-hover:text-[var(--secondary)] transition-colors leading-tight">
                        {sub.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarDropdown;
