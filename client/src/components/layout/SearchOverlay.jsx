import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, TrendingUp, ArrowRight, Sparkles, Tag, ShieldCheck, ChevronRight } from 'lucide-react';
import { fullCatalog296, categoryToSportSlug } from '../../data/fullCatalog296';

// High-intent sportswear search tags
const POPULAR_SEARCHES = [
  { label: 'Baseball Uniforms', sport: 'BASEBALL' },
  { label: 'Basketball Jerseys', sport: 'BASKETBALL' },
  { label: 'Football Game Sets', sport: 'FOOTBALL' },
  { label: 'Soccer Kits', sport: 'SOCCER' },
  { label: 'Ice Hockey Sweaters', sport: 'ICE HOCKEY' },
  { label: 'Wrestling Singlets', sport: 'WRESTLING' },
  { label: 'Flag Football', sport: 'FLAG FOOTBALL' },
  { label: 'Sublimated Hoodies', query: 'Hoodie' },
  { label: 'Baseball Pants', query: 'Pants' }
];

// Featured uniforms to showcase when search box is empty
const FEATURED_PRODUCTS = [
  fullCatalog296.find(p => p.slug === 'custom-full-button-baseball-jerseys') || fullCatalog296[0],
  fullCatalog296.find(p => p.category === 'BASKETBALL') || fullCatalog296[1],
  fullCatalog296.find(p => p.category === 'FOOTBALL') || fullCatalog296[2],
  fullCatalog296.find(p => p.category === 'SOCCER') || fullCatalog296[3]
].filter(Boolean);

const SearchOverlay = ({ 
  isOpen, 
  onClose, 
  onSelectProduct = () => {}, 
  onSelectCategory = () => {},
  onSelectSearch = () => {} 
}) => {
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef(null);

  // Focus input on open & manage scroll lock
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIdx(-1);
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKey = (e) => { 
      if (e.key === 'Escape') onClose(); 
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Real-time product & category search
  const { matchingProducts, matchingCategory } = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return { matchingProducts: [], matchingCategory: null };
    }

    // Check if query matches a sport category name
    const foundSport = Object.keys(categoryToSportSlug).find(sport => 
      sport.toLowerCase().includes(q) ||
      categoryToSportSlug[sport].toLowerCase().includes(q)
    );

    // Filter products across full 296 catalog
    const prods = fullCatalog296.filter(p => {
      const nameMatch = p.name.toLowerCase().includes(q);
      const catMatch = (p.category || '').toLowerCase().includes(q);
      const sportMatch = (p.sport || '').toLowerCase().includes(q);
      const fabricMatch = (p.fabric || '').toLowerCase().includes(q);
      const finishMatch = (p.finish || '').toLowerCase().includes(q);
      return nameMatch || catMatch || sportMatch || fabricMatch || finishMatch;
    }).slice(0, 8);

    return { 
      matchingProducts: prods, 
      matchingCategory: foundSport || null 
    };
  }, [query]);

  // Product click handler
  const handleProductClick = (product) => {
    onSelectProduct(product);
    onSelectSearch(product.name);
    onClose();
  };

  // Category click handler
  const handleCategoryClick = (sport) => {
    onSelectCategory(sport);
    onClose();
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (activeIdx >= 0 && matchingProducts[activeIdx]) {
        handleProductClick(matchingProducts[activeIdx]);
      } else if (matchingCategory) {
        handleCategoryClick(matchingCategory);
      } else if (matchingProducts.length > 0) {
        handleProductClick(matchingProducts[0]);
      }
      return;
    }

    if (!matchingProducts.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((prev) => Math.min(prev + 1, matchingProducts.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((prev) => Math.max(prev - 1, -1));
    }
  };

  return (
    <>
      {/* ── BACKDROP ─────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[200] bg-[var(--secondary)]/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* ── SEARCH PANEL ────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 right-0 z-[205] bg-white text-[var(--secondary)] shadow-2xl border-b border-neutral-200
          transition-all duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        {/* Search input bar */}
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 flex items-center gap-3 h-[74px] sm:h-[88px]">
          <Search
            size={22}
            strokeWidth={2.2}
            className="text-[var(--accent)] flex-shrink-0"
          />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIdx(-1);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search custom uniforms, fabrics, sports (e.g. Baseball, Reversible, Mesh)..."
            className="flex-1 text-base sm:text-xl font-bold text-[var(--secondary)] placeholder:text-neutral-400 placeholder:font-normal
                       bg-transparent outline-none border-none tracking-wide"
            autoComplete="off"
            spellCheck="false"
          />

          {/* Clear input button */}
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setActiveIdx(-1);
                inputRef.current?.focus();
              }}
              className="p-1.5 rounded-full hover:bg-neutral-100 transition-colors flex-shrink-0 cursor-pointer"
              title="Clear search"
            >
              <X size={18} className="text-neutral-400 hover:text-neutral-700" />
            </button>
          )}

          {/* Close overlay button */}
          <button
            onClick={onClose}
            className="ml-1 p-2 rounded-[3px] border border-neutral-200 hover:bg-neutral-100 transition-colors flex-shrink-0 cursor-pointer flex items-center gap-1.5 text-xs font-bold"
            aria-label="Close search"
          >
            <span className="hidden sm:inline text-neutral-500 font-semibold">ESC</span>
            <X size={18} className="text-[var(--secondary)]" />
          </button>
        </div>

        {/* Thin divider */}
        <div className="h-px bg-neutral-100" />

        {/* ── CONTENT CONTAINER ────────────────────────────────────────── */}
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-5 max-h-[75vh] overflow-y-auto">

          {/* 1. Category Quick-Match Banner (if user typed a sport name) */}
          {matchingCategory && (
            <div 
              onClick={() => handleCategoryClick(matchingCategory)}
              className="mb-4 p-3 sm:p-4 rounded-[3px] bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 flex items-center justify-between cursor-pointer hover:border-[var(--accent)] transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[var(--secondary)]">
                  Explore All Custom {matchingCategory} Uniforms & Outerwear
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-[var(--accent)] text-white">
                  Factory Direct
                </span>
              </div>
              <span className="text-xs font-bold text-[var(--accent)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View Category Hub <ArrowRight size={14} />
              </span>
            </div>
          )}

          {/* 2. Live Matching Products (when user is typing) */}
          {query.trim().length > 0 && matchingProducts.length > 0 && (
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-100">
                <span className="text-[11px] font-black tracking-widest text-neutral-400 uppercase">
                  Matching Products ({matchingProducts.length})
                </span>
                <span className="text-[10px] text-neutral-400 font-medium">
                  Use &uarr; &darr; to navigate, Enter to view
                </span>
              </div>

              <div className="divide-y divide-neutral-100">
                {matchingProducts.map((p, idx) => (
                  <div
                    key={p.slug || p.id}
                    onClick={() => handleProductClick(p)}
                    className={`flex items-center justify-between p-2.5 sm:p-3 rounded-[3px] cursor-pointer transition-all duration-150 group ${
                      idx === activeIdx 
                        ? 'bg-neutral-100 border-l-4 border-[var(--accent)] pl-3' 
                        : 'hover:bg-neutral-50'
                    }`}
                  >
                    {/* Left: Thumbnail & Info */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-neutral-100 rounded-[3px] p-1 flex items-center justify-center flex-shrink-0 border border-neutral-200/60 overflow-hidden">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-black tracking-wider uppercase px-1.5 py-0.5 rounded bg-[var(--secondary)] text-white">
                            {p.sport || p.category}
                          </span>
                          {p.badge && (
                            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--accent)]">
                              {p.badge}
                            </span>
                          )}
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-[var(--secondary)] truncate group-hover:text-[var(--accent)] transition-colors">
                          {p.name}
                        </h4>

                        <p className="text-[11px] text-neutral-500 truncate max-w-[280px] sm:max-w-md">
                          {p.fabric || '100% Pro-Performance Dye-Sublimation Interlock'}
                        </p>
                      </div>
                    </div>

                    {/* Right: Price & CTA */}
                    <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0 text-right pl-3">
                      <div>
                        <div className="text-xs sm:text-sm font-black text-[var(--secondary)]">
                          ${typeof p.price === 'number' ? p.price.toFixed(2) : p.price}
                        </div>
                        <div className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider">
                          Zero MOQ â€¢ DDP
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-[var(--accent)] group-hover:text-white flex items-center justify-center transition-colors">
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Empty Search / Popular Tags & Featured Uniforms */}
          {query.trim().length === 0 && (
            <div className="space-y-6">
              {/* Popular sports tags */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={15} className="text-[var(--accent)]" />
                  <span className="text-[11px] font-black tracking-[0.15em] text-neutral-400 uppercase">
                    Popular Sports & Categories
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        if (item.sport) {
                          handleCategoryClick(item.sport);
                        } else if (item.query) {
                          setQuery(item.query);
                          inputRef.current?.focus();
                        }
                      }}
                      className="px-3.5 py-2 border border-neutral-200 rounded-[3px] text-xs font-bold
                                 tracking-wide text-[var(--secondary)] hover:border-[var(--accent)] hover:text-white
                                 hover:bg-[var(--accent)] transition-all duration-200 cursor-pointer flex items-center gap-1.5"
                    >
                      <Tag size={12} className="opacity-60" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Uniforms grid */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles size={15} className="text-amber-500" />
                    <span className="text-[11px] font-black tracking-[0.15em] text-neutral-400 uppercase">
                      Featured Custom Uniforms
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-400 uppercase font-semibold">
                    Full Dye-Sublimation
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {FEATURED_PRODUCTS.map((prod) => (
                    <div
                      key={prod.slug || prod.id}
                      onClick={() => handleProductClick(prod)}
                      className="p-3 bg-neutral-50 hover:bg-white rounded-[3px] border border-neutral-200/80 hover:border-[var(--accent)] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div className="w-full h-24 bg-white rounded-[3px] p-2 flex items-center justify-center mb-2.5 overflow-hidden">
                        <img 
                          src={prod.image} 
                          alt={prod.name} 
                          className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>

                      <div>
                        <span className="text-[9px] font-black uppercase text-[var(--accent)] block tracking-wider mb-0.5">
                          {prod.sport || prod.category}
                        </span>
                        <h5 className="text-xs font-bold text-[var(--secondary)] line-clamp-2 leading-tight mb-2 group-hover:text-[var(--accent)] transition-colors">
                          {prod.name}
                        </h5>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-neutral-200/50 text-[11px]">
                        <span className="font-black text-[var(--secondary)]">
                          ${typeof prod.price === 'number' ? prod.price.toFixed(2) : prod.price}
                        </span>
                        <span className="text-[var(--accent)] font-bold text-[10px] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          View &rarr;
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. No Results state */}
          {query.trim().length > 0 && matchingProducts.length === 0 && !matchingCategory && (
            <div className="py-10 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                <Search size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--secondary)]">
                  No custom uniforms found for &ldquo;<span className="text-[var(--accent)]">{query}</span>&rdquo;
                </h4>
                <p className="text-xs text-neutral-500 mt-1 max-w-md mx-auto">
                  Try searching for a sport like &ldquo;Baseball&rdquo;, &ldquo;Basketball&rdquo;, &ldquo;Soccer&rdquo;, or &ldquo;Jersey&rdquo;.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap justify-center gap-2">
                {['Baseball', 'Basketball', 'Football', 'Soccer', 'Ice Hockey', 'Wrestling'].map((sport) => (
                  <button
                    key={sport}
                    onClick={() => handleCategoryClick(sport.toUpperCase())}
                    className="px-3 py-1.5 rounded-[3px] bg-neutral-100 hover:bg-[var(--accent)] hover:text-white text-xs font-bold text-[var(--secondary)] transition-colors cursor-pointer"
                  >
                    View {sport} &rarr;
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default SearchOverlay;
