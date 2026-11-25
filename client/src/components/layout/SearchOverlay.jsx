import React, { useState, useEffect, useRef } from 'react';
import { Search, X, TrendingUp, ArrowRight } from 'lucide-react';
import { fullCatalog296, categoryToSportSlug } from '../../data/fullCatalog296';

/* ─── Suggestion pool: Sports disciplines & real sportswear products ─────────── */
const ALL_SUGGESTIONS = [
  // 12 Sport Categories
  'Custom Baseball Uniforms',
  'Custom Basketball Uniforms',
  'Custom Football Uniforms',
  'Custom Soccer Uniforms',
  'Custom Ice Hockey Uniforms',
  'Custom Lacrosse Uniforms',
  'Custom Rugby Uniforms',
  'Custom Softball Uniforms',
  'Custom Volleyball Uniforms',
  'Custom Wrestling Singlets',
  'Custom Flag Football Uniforms',
  'Custom Esports Apparel',
  // Popular Real Products from 296 Catalog
  ...Array.from(new Set(fullCatalog296.map(p => p.name)))
];

const POPULAR = [
  'Baseball Uniforms',
  'Basketball Jerseys',
  'Football Uniforms',
  'Soccer Kits',
  'Ice Hockey Sweaters',
  'Wrestling Singlets',
  'Flag Football'
];

const SearchOverlay = ({ 
  isOpen, 
  onClose, 
  onSelectProduct = () => {},
  onSelectCategory = () => {},
  onSelectSearch = () => {} 
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef(null);

  /* Focus input when overlay opens */
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSuggestions([]);
      setActiveIdx(-1);
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* Escape key */
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  /* Filter suggestions */
  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setActiveIdx(-1);
    if (val.trim().length === 0) {
      setSuggestions([]);
      return;
    }
    const filtered = ALL_SUGGESTIONS.filter((s) =>
      s.toLowerCase().includes(val.toLowerCase())
    ).slice(0, 8);
    setSuggestions(filtered);
  };

  /* Navigation handler: detects product or category */
  const pickSuggestion = (term) => {
    if (!term) return;

    // 1. Check if exact or close match to product in catalog
    const matchedProduct = fullCatalog296.find(
      p => p.name.toLowerCase() === term.toLowerCase() || p.slug === term
    ) || fullCatalog296.find(
      p => p.name.toLowerCase().includes(term.toLowerCase())
    );

    // 2. Check if matches a sport discipline
    const termUpper = term.toUpperCase();
    const matchedSport = Object.keys(categoryToSportSlug).find(sport => 
      termUpper.includes(sport) ||
      sport.includes(termUpper) ||
      categoryToSportSlug[sport].toLowerCase().includes(term.toLowerCase())
    );

    if (matchedProduct && matchedProduct.name.toLowerCase() === term.toLowerCase()) {
      onSelectProduct(matchedProduct);
    } else if (matchedSport) {
      onSelectCategory(matchedSport);
    } else if (matchedProduct) {
      onSelectProduct(matchedProduct);
    } else {
      onSelectSearch(term);
    }

    onClose();
  };

  /* Keyboard navigation */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (activeIdx >= 0 && suggestions[activeIdx]) {
        pickSuggestion(suggestions[activeIdx]);
      } else if (query.trim()) {
        pickSuggestion(query.trim());
      }
      return;
    }
    if (!suggestions.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((p) => Math.min(p + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((p) => Math.max(p - 1, -1));
    }
  };

  const showSuggestions = suggestions.length > 0;
  const showPopular = query.trim().length === 0;

  return (
    <>
      {/* ── Backdrop ─────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[200] bg-[var(--secondary)]/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* ── Panel ────────────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 right-0 z-[205] bg-[var(--primary)] shadow-2xl
          transition-all duration-[350ms] ease-[cubic-bezier(0.19,1,0.22,1)]
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        {/* Search bar row */}
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 flex items-center gap-3 h-[72px] sm:h-[90px]">
          <Search
            size={22}
            strokeWidth={1.8}
            className="text-[var(--secondary)]/40 flex-shrink-0"
          />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search for products, gear, sports…"
            className="flex-1 text-base sm:text-xl font-medium text-[var(--secondary)] placeholder-[var(--secondary)]/20
                       bg-transparent outline-none border-none tracking-wide"
            autoComplete="off"
            spellCheck="false"
          />

          {/* Clear */}
          {query && (
            <button
              onClick={() => { setQuery(''); setSuggestions([]); inputRef.current?.focus(); }}
              className="p-1.5 rounded-[3px] hover:bg-[var(--secondary)]/5 transition-colors flex-shrink-0 cursor-pointer"
            >
              <X size={18} className="text-[var(--secondary)]/40" />
            </button>
          )}

          {/* Close */}
          <button
            onClick={onClose}
            className="ml-1 p-2 rounded-[3px] border border-[var(--secondary)]/10 hover:bg-[var(--secondary)]/5 transition-colors flex-shrink-0 cursor-pointer"
            aria-label="Close search"
          >
            <X size={18} className="text-[var(--secondary)]" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mx-4 sm:mx-0" />

        {/* ── Suggestions / Popular ──────────────────────────────────── */}
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 pb-6">

          {/* Live suggestions */}
          {showSuggestions && (
            <ul className="pt-3">
              {suggestions.map((s, i) => (
                <li
                  key={s}
                  className={`flex items-center justify-between px-3 py-3 rounded-[3px] cursor-pointer transition-colors group ${
                    i === activeIdx ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                  onMouseDown={(e) => { e.preventDefault(); pickSuggestion(s); }}
                >
                  <div className="flex items-center gap-3">
                    <Search size={15} className="text-gray-300 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-800 tracking-wide">
                      {/* Bold the matching part */}
                      {s.toLowerCase().startsWith(query.toLowerCase()) ? (
                        <>
                          <strong className="text-black font-bold">{s.slice(0, query.length)}</strong>
                          {s.slice(query.length)}
                        </>
                      ) : s}
                    </span>
                  </div>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-black transition-colors" />
                </li>
              ))}
            </ul>
          )}

          {/* Popular searches (shown when input is empty) */}
          {showPopular && (
            <div className="pt-5">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={14} className="text-gray-400" />
                <span className="text-[11px] font-bold tracking-[0.15em] text-gray-400 uppercase">
                  Popular searches
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {POPULAR.map((term) => (
                  <button
                    key={term}
                    onMouseDown={(e) => { e.preventDefault(); pickSuggestion(term); }}
                    className="px-4 py-2 border border-[var(--secondary)]/10 rounded-[3px] text-xs font-medium
                               tracking-wide text-[var(--secondary)]/60 hover:border-[var(--accent)] hover:text-white
                               hover:bg-[var(--accent)] transition-all duration-200 cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* No results */}
          {!showPopular && !showSuggestions && query.trim().length > 0 && (
            <p className="pt-6 text-sm text-gray-400 tracking-wide">
              No results for "<span className="text-black font-semibold">{query}</span>"
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchOverlay;
