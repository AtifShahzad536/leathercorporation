import React, { useState, useEffect, useRef } from 'react';
import { Search, X, TrendingUp, ArrowRight } from 'lucide-react';

/* ─── Suggestion pool (drawn from leather jacket collection) ─────────────────── */
const ALL_SUGGESTIONS = [
  // Jackets
  'Classic Biker Jackets', 'Cafe Racer Jackets', 'Bomber & Flight Jackets',
  'Suede Harrington Jackets', 'Trench & Overcoats', 'Shearling Aviator Jackets',
  'Women\'s Moto Jackets', 'Cropped Leather Jackets', 'Leather Blazers',
  // Moto & Racing
  'CE-Armored Biker Jackets', 'Leather Riding Vests', '2-Piece Racing Suits',
  // Leather Materials & Finishes
  'Full Grain Cowhide', 'Lambskin Nappa', 'Distressed Vintage Leather',
  'Italian Suede', 'Vegetable Tanned Leather',
  // Custom & Care
  'Bespoke Made to Measure', 'OEM Private Label', 'Custom Patches & Hardware',
  'Leather Care Kit & Conditioner', 'Leather Riding Gloves',
  // General & Heritage
  'Heritage 2025 Collection', 'LWG Sustainability', 'Leader Leather Tannery',
  'Size & Fit Guide', 'Lookbook 2025', 'About Leader Corporation', 'Contact Us'
];

const POPULAR = [
  'Biker Jackets', 'Cafe Racer', 'Bomber Jackets',
  'Shearling Aviator', 'Lambskin Nappa', 'Custom OEM'
];

const SearchOverlay = ({ isOpen, onClose }) => {
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
    ).slice(0, 7);
    setSuggestions(filtered);
  };

  /* Keyboard navigation */
  const handleKeyDown = (e) => {
    if (!suggestions.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((p) => Math.min(p + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((p) => Math.max(p - 1, -1));
    } else if (e.key === 'Enter' && activeIdx >= 0) {
      setQuery(suggestions[activeIdx]);
      setSuggestions([]);
    }
  };

  const pickSuggestion = (s) => {
    setQuery(s);
    setSuggestions([]);
    inputRef.current?.focus();
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
              className="p-1.5 rounded-full hover:bg-[var(--secondary)]/5 transition-colors flex-shrink-0"
            >
              <X size={18} className="text-[var(--secondary)]/40" />
            </button>
          )}

          {/* Close */}
          <button
            onClick={onClose}
            className="ml-1 p-2 rounded-full border border-[var(--secondary)]/10 hover:bg-[var(--secondary)]/5 transition-colors flex-shrink-0"
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
                  className={`flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer transition-colors group ${
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
                    className="px-4 py-2 border border-[var(--secondary)]/10 rounded-full text-xs font-medium
                               tracking-wide text-[var(--secondary)]/60 hover:border-[var(--accent)] hover:text-white
                               hover:bg-[var(--accent)] transition-all duration-200"
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
