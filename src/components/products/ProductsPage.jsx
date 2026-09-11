import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, SlidersHorizontal, X, ArrowRight, Star, 
  Check, Eye, Sparkles, Grid3X3, LayoutList,
  RotateCcw, ShieldCheck, Award, ArrowLeft, ShoppingBag, Plus, Minus, Ruler
} from 'lucide-react';
import { allProducts, categories, leatherTypes } from '../../data/productsData';
import { useCart } from '../../context/CartContext';
import SizeChartModal from './SizeChartModal';

export default function ProductsPage({ 
  initialCategory = 'ALL JACKETS', 
  initialSearch = '',
  onNavigateHome = () => {},
  onNavigateCategory = () => {},
  onNavigateInquiry = () => {}
}) {
  const { addToCart, setCartOpen, toastMessage } = useCart();

  // Filter states
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLeathers, setSelectedLeathers] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1200]);
  const [onlyBestsellers, setOnlyBestsellers] = useState(false);
  const [onlyNew, setOnlyNew] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  // UI states
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalSize, setModalSize] = useState('M');
  const [modalColor, setModalColor] = useState('');
  const [modalQty, setModalQty] = useState(1);
  const [sizeChartOpen, setSizeChartOpen] = useState(false);

  // Sync with prop changes if parent updates
  useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    if (initialSearch) setSearchQuery(initialSearch);
  }, [initialSearch]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Update modal state on product open
  const openQuickView = (product) => {
    setSelectedProduct(product);
    setModalSize(product.sizes?.[0] || 'M');
    setModalColor(product.colorNames?.[0] || 'Standard Finish');
    setModalQty(1);
  };

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      // Category filter
      if (selectedCategory && selectedCategory !== 'ALL JACKETS') {
        const catNorm = selectedCategory.toUpperCase();
        const pCatNorm = (p.category || '').toUpperCase();
        const pGenNorm = (p.gender || '').toUpperCase();
        const pNameNorm = (p.name || '').toUpperCase();

        const matchDirect = pCatNorm.includes(catNorm) || pGenNorm.includes(catNorm);
        const matchKeyword = 
          (catNorm.includes("MEN") && (pGenNorm.includes("MEN") || p.gender === "MEN'S JACKETS")) ||
          (catNorm.includes("WOMEN") && (pGenNorm.includes("WOMEN") || p.gender === "WOMEN'S JACKETS")) ||
          (catNorm.includes("BIKER") && (pCatNorm.includes("BIKER") || pNameNorm.includes("RACER") || pNameNorm.includes("RIDER"))) ||
          (catNorm.includes("BOMBER") && (pCatNorm.includes("BOMBER") || pCatNorm.includes("AVIATOR") || pNameNorm.includes("BOMBER"))) ||
          (catNorm.includes("SHEARLING") && (pCatNorm.includes("SHEARLING") || p.leather.includes("Shearling"))) ||
          (catNorm.includes("SUEDE") && (pCatNorm.includes("SUEDE") || p.leather.includes("Suede"))) ||
          (catNorm.includes("RACING") && (pCatNorm.includes("RACING") || pCatNorm.includes("MOTORCYCLE")));

        if (!matchDirect && !matchKeyword) {
          return false;
        }
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = 
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.leather.toLowerCase().includes(q) ||
          p.finish.toLowerCase().includes(q) ||
          p.badge.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q);
        if (!match) return false;
      }

      // Price range
      if (p.price < priceRange[0] || p.price > priceRange[1]) {
        return false;
      }

      // Leather types
      if (selectedLeathers.length > 0) {
        if (!selectedLeathers.includes(p.leather)) return false;
      }

      // Sizes
      if (selectedSizes.length > 0) {
        const hasSize = p.sizes?.some((s) => selectedSizes.includes(s));
        if (!hasSize) return false;
      }

      // Bestseller only
      if (onlyBestsellers && !p.isBestseller) return false;

      // New arrivals only
      if (onlyNew && !p.isNew) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return a.id - b.id; // 'featured'
    });
  }, [selectedCategory, searchQuery, priceRange, selectedLeathers, selectedSizes, onlyBestsellers, onlyNew, sortBy]);

  // Active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'ALL JACKETS') count++;
    if (searchQuery.trim()) count++;
    if (selectedLeathers.length > 0) count += selectedLeathers.length;
    if (selectedSizes.length > 0) count += selectedSizes.length;
    if (priceRange[0] > 0 || priceRange[1] < 1200) count++;
    if (onlyBestsellers) count++;
    if (onlyNew) count++;
    return count;
  }, [selectedCategory, searchQuery, selectedLeathers, selectedSizes, priceRange, onlyBestsellers, onlyNew]);

  const clearAllFilters = () => {
    setSelectedCategory('ALL JACKETS');
    setSearchQuery('');
    setSelectedLeathers([]);
    setSelectedSizes([]);
    setPriceRange([0, 1200]);
    setOnlyBestsellers(false);
    setOnlyNew(false);
    setSortBy('featured');
  };

  const toggleLeather = (type) => {
    setSelectedLeathers((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleSize = (sz) => {
    setSelectedSizes((prev) =>
      prev.includes(sz) ? prev.filter((s) => s !== sz) : [...prev, sz]
    );
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen text-[var(--secondary)]">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[300] bg-[var(--secondary)] text-white px-5 py-3 rounded-[3px] shadow-2xl border border-[var(--accent)] flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
              <Check size={14} />
            </div>
            <span className="text-xs font-bold tracking-wide">{toastMessage}</span>
            <button
              onClick={() => setCartOpen(true)}
              className="ml-2 px-2.5 py-1 bg-[var(--accent)] text-white text-[10px] font-black uppercase tracking-wider rounded-[2px]"
            >
              View Cart
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TOP HEADER / BREADCRUMB ─────────────────────────────────────────── */}
      <div className="bg-[var(--primary)] border-b border-[var(--secondary)]/10 pt-6 pb-8">
        <div className="w-[92%] mx-auto">
          {/* Breadcrumb row */}
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[var(--secondary)]/60 mb-3">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft size={12} /> HOME
            </button>
            <span>/</span>
            <span className="text-[var(--secondary)] font-bold">PRODUCTS CATALOG</span>
            {selectedCategory !== 'ALL JACKETS' && (
              <>
                <span>/</span>
                <span className="text-[var(--accent)] font-bold">{selectedCategory}</span>
              </>
            )}
          </div>

          {/* Main Title & Description */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[var(--accent)] mb-1">
                <Sparkles size={14} /> LEADER BESPOKE & OEM ATELIER
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--secondary)]">
                {selectedCategory === 'ALL JACKETS' ? 'LEATHER JACKETS & APPAREL' : selectedCategory}
              </h1>
              <p className="text-xs sm:text-sm text-[var(--secondary)]/70 max-w-2xl mt-1 leading-relaxed">
                Drum-dyed full-grain hides, 100% lambskin nappa, merino shearling, and CE-armored racing suits. Available for instant individual purchase or bespoke wholesale OEM production.
              </p>
            </div>

            {/* Top Quick Search Bar */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="relative">
                <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--secondary)]/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by jacket name, leather, hide or spec..."
                  className="w-full pl-10 pr-9 py-2.5 bg-white border border-[var(--secondary)]/15 rounded-[3px] text-xs md:text-sm text-[var(--secondary)] placeholder-[var(--secondary)]/40 focus:outline-none focus:border-[var(--accent)] transition-colors shadow-sm"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--secondary)]/40 hover:text-[var(--secondary)]"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TOOLBAR: Category Pills (No ugly scrollbar), Sort & View Mode ─── */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[var(--secondary)]/10 py-3 shadow-sm">
        <div className="w-[92%] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Category Filter Pills — Styled with .no-scrollbar / .scrollbar-hide so NO thick OS scrollbar appears */}
          <div className="flex overflow-x-auto no-scrollbar scrollbar-hide gap-1.5 pb-0 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-[3px] text-[10px] md:text-[11px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[var(--secondary)] text-white shadow-sm'
                    : 'bg-gray-50 border border-[var(--secondary)]/10 text-[var(--secondary)]/70 hover:border-[var(--accent)] hover:text-[var(--accent)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Toolbar Controls */}
          <div className="flex items-center justify-between md:justify-end gap-3 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden px-3 py-1.5 bg-white border border-[var(--secondary)]/20 rounded-[3px] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-gray-50 cursor-pointer"
            >
              <SlidersHorizontal size={14} />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 bg-[var(--accent)] text-white text-[10px] font-black rounded-[3px] flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Results Count */}
            <span className="text-[11px] font-bold text-[var(--secondary)]/60 tracking-wider uppercase hidden sm:inline-block">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Design' : 'Designs'}
            </span>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-[var(--secondary)]/50 hidden xl:inline-block">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-[var(--secondary)]/15 rounded-[3px] px-2.5 py-1.5 text-xs font-semibold text-[var(--secondary)] focus:outline-none focus:border-[var(--accent)] cursor-pointer"
              >
                <option value="featured">Featured / Curated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center border border-[var(--secondary)]/15 rounded-[3px] overflow-hidden bg-white">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 transition-colors cursor-pointer ${viewMode === 'grid' ? 'bg-[var(--secondary)] text-white' : 'text-[var(--secondary)]/60 hover:text-[var(--secondary)]'}`}
                title="Grid View"
              >
                <Grid3X3 size={15} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 transition-colors cursor-pointer ${viewMode === 'list' ? 'bg-[var(--secondary)] text-white' : 'text-[var(--secondary)]/60 hover:text-[var(--secondary)]'}`}
                title="List View"
              >
                <LayoutList size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT AREA (Sidebar + Grid) ────────────────────────────── */}
      <div className="w-[92%] mx-auto py-8">
        <div className="flex gap-8 items-start">

          {/* ── DESKTOP SIDEBAR FILTER PANEL ──────────────────────────────── */}
          <aside className="hidden lg:block w-72 flex-shrink-0 bg-white border border-[var(--secondary)]/10 rounded-[3px] p-5 sticky top-36 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--secondary)]/10">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-[var(--accent)]" />
                <h3 className="text-xs font-black tracking-widest uppercase text-[var(--secondary)]">
                  Filter Catalog
                </h3>
              </div>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-[10px] font-bold text-[var(--accent)] hover:underline uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw size={11} /> Reset
                </button>
              )}
            </div>

            {/* Price Limit */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-[var(--secondary)]">
                  Price Limit (USD)
                </span>
                <span className="text-xs font-black text-[var(--accent)]">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1200"
                step="20"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-full accent-[var(--accent)] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--secondary)]/50 font-bold mt-1">
                <span>$0</span>
                <span>$600</span>
                <span>$1200</span>
              </div>
            </div>

            {/* Leather Material */}
            <div>
              <h4 className="text-[11px] font-bold tracking-wider uppercase text-[var(--secondary)] mb-2.5">
                Leather Hide & Grade
              </h4>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 thin-scrollbar">
                {leatherTypes.map((type) => {
                  const checked = selectedLeathers.includes(type);
                  return (
                    <label 
                      key={type} 
                      className="flex items-center gap-2 text-xs text-[var(--secondary)]/80 hover:text-[var(--secondary)] cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleLeather(type)}
                        className="rounded-[2px] text-[var(--accent)] focus:ring-0 cursor-pointer"
                      />
                      <span className={`text-[11px] leading-tight ${checked ? 'font-bold text-[var(--secondary)]' : ''}`}>
                        {type}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="text-[11px] font-bold tracking-wider uppercase text-[var(--secondary)]">
                  Standard Sizes
                </h4>
                <button
                  onClick={() => setSizeChartOpen(true)}
                  className="text-[10px] font-bold text-[var(--accent)] hover:underline uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  <Ruler size={11} /> Size Chart
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'].map((sz) => {
                  const active = selectedSizes.includes(sz);
                  return (
                    <button
                      key={sz}
                      onClick={() => toggleSize(sz)}
                      className={`py-1.5 text-xs font-bold rounded-[3px] border transition-colors cursor-pointer ${
                        active
                          ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]'
                          : 'bg-white text-[var(--secondary)]/70 border-[var(--secondary)]/15 hover:border-[var(--accent)]'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Attributes */}
            <div>
              <h4 className="text-[11px] font-bold tracking-wider uppercase text-[var(--secondary)] mb-2.5">
                Special Attributes
              </h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs text-[var(--secondary)]/80 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={onlyBestsellers}
                    onChange={(e) => setOnlyBestsellers(e.target.checked)}
                    className="rounded-[2px] text-[var(--accent)] focus:ring-0 cursor-pointer"
                  />
                  <span className="text-[11px] font-medium">Bestseller Designs Only</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-[var(--secondary)]/80 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={onlyNew}
                    onChange={(e) => setOnlyNew(e.target.checked)}
                    className="rounded-[2px] text-[var(--accent)] focus:ring-0 cursor-pointer"
                  />
                  <span className="text-[11px] font-medium">2025 New Releases</span>
                </label>
              </div>
            </div>

            {/* Dedicated B2B Inquiry Box */}
            <div className="p-4 bg-gradient-to-br from-[var(--secondary)] to-[#2d2894] rounded-[3px] text-white space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">
                <Award size={13} /> B2B & BESPOKE ATELIER
              </div>
              <h5 className="text-xs font-black uppercase leading-tight">
                Wholesale OEM / Brand Orders?
              </h5>
              <p className="text-[10px] text-white/75 leading-relaxed">
                Need private label manufacturing or bespoke club jackets with custom embroidery?
              </p>
              <button
                onClick={() => onNavigateInquiry()}
                className="w-full py-2.5 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold text-[10px] uppercase tracking-widest rounded-[3px] transition-all cursor-pointer shadow-md"
              >
                Open B2B Inquiry Page
              </button>
            </div>
          </aside>

          {/* ── PRODUCTS MAIN CONTENT ────────────────────────────────────── */}
          <main className="flex-1 w-full min-w-0">

            {/* Active Filters Bar */}
            {activeFilterCount > 0 && (
              <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-3 mb-6 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--secondary)]/50 mr-1">
                  Active Filters:
                </span>

                {selectedCategory !== 'ALL JACKETS' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-[var(--secondary)] text-[11px] font-bold rounded-[3px]">
                    Category: {selectedCategory}
                    <X size={12} className="cursor-pointer hover:text-red-500" onClick={() => setSelectedCategory('ALL JACKETS')} />
                  </span>
                )}

                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-[var(--secondary)] text-[11px] font-bold rounded-[3px]">
                    Search: "{searchQuery}"
                    <X size={12} className="cursor-pointer hover:text-red-500" onClick={() => setSearchQuery('')} />
                  </span>
                )}

                {priceRange[1] < 1200 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-[var(--secondary)] text-[11px] font-bold rounded-[3px]">
                    Up to ${priceRange[1]}
                    <X size={12} className="cursor-pointer hover:text-red-500" onClick={() => setPriceRange([0, 1200])} />
                  </span>
                )}

                {selectedLeathers.map((l) => (
                  <span key={l} className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-[var(--secondary)] text-[11px] font-bold rounded-[3px]">
                    {l}
                    <X size={12} className="cursor-pointer hover:text-red-500" onClick={() => toggleLeather(l)} />
                  </span>
                ))}

                {selectedSizes.map((s) => (
                  <span key={s} className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-[var(--secondary)] text-[11px] font-bold rounded-[3px]">
                    Size: {s}
                    <X size={12} className="cursor-pointer hover:text-red-500" onClick={() => toggleSize(s)} />
                  </span>
                ))}

                {onlyBestsellers && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-[var(--secondary)] text-[11px] font-bold rounded-[3px]">
                    Bestsellers
                    <X size={12} className="cursor-pointer hover:text-red-500" onClick={() => setOnlyBestsellers(false)} />
                  </span>
                )}

                {onlyNew && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-[var(--secondary)] text-[11px] font-bold rounded-[3px]">
                    New 2025
                    <X size={12} className="cursor-pointer hover:text-red-500" onClick={() => setOnlyNew(false)} />
                  </span>
                )}

                <button
                  onClick={clearAllFilters}
                  className="ml-auto text-[11px] font-bold text-[var(--accent)] hover:underline uppercase tracking-wider cursor-pointer"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-12 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 bg-gray-100 rounded-[3px] flex items-center justify-center mx-auto text-[var(--secondary)]/40">
                  <Search size={30} />
                </div>
                <h3 className="text-xl font-black uppercase text-[var(--secondary)]">
                  No Matching Masterpieces Found
                </h3>
                <p className="text-xs sm:text-sm text-[var(--secondary)]/60 max-w-md mx-auto">
                  We couldn't find any products matching your specific combination of filters. Try broadening your criteria or reset your filters.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 bg-[var(--secondary)] text-white font-bold text-xs uppercase tracking-widest rounded-[3px] hover:bg-[var(--accent)] transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* ── VIEW MODE 1: GRID VIEW ─────────────────────────────────── */}
            {viewMode === 'grid' && filteredProducts.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="group bg-white rounded-[3px] overflow-hidden border border-[var(--secondary)]/10 hover:border-[var(--accent)]/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between relative"
                  >
                    {/* Image Area */}
                    <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Gradient Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-5" />

                      {/* Top Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        <span className="bg-[var(--secondary)]/90 backdrop-blur-md text-white text-[7.5px] sm:text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-[3px] border border-white/20">
                          {product.badge}
                        </span>
                        {product.isNew && (
                          <span className="bg-[var(--accent)] text-white text-[7.5px] sm:text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-[3px]">
                            NEW 2025
                          </span>
                        )}
                      </div>

                      {/* Quick View Button on Image */}
                      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 px-3">
                        <button
                          onClick={() => openQuickView(product)}
                          className="px-3 py-2 bg-white/95 text-[var(--secondary)] font-bold text-[9.5px] sm:text-[11px] uppercase tracking-wider rounded-[3px] shadow-xl hover:bg-[var(--accent)] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <Eye size={13} /> Quick View
                        </button>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                      <div>
                        {/* Category & Rating */}
                        <div className="flex items-center justify-between text-[9px] sm:text-[10.5px] text-[var(--secondary)]/60 mb-1">
                          <span className="uppercase font-bold tracking-wider text-[var(--accent)] truncate max-w-[65%]">
                            {product.leather}
                          </span>
                          <div className="flex items-center gap-0.5 font-bold text-amber-500 flex-shrink-0">
                            <Star size={10} className="sm:w-3 sm:h-3" fill="currentColor" />
                            <span>{product.rating}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xs sm:text-base font-black text-[var(--secondary)] group-hover:text-[var(--accent)] transition-colors leading-snug line-clamp-1">
                          {product.name}
                        </h3>

                        {/* Finish */}
                        <p className="text-[9.5px] sm:text-xs text-[var(--secondary)]/60 mt-0.5 line-clamp-1">
                          {product.finish}
                        </p>

                        {/* Color Swatches */}
                        {product.colors && (
                          <div className="flex items-center gap-1.5 mt-2">
                            {product.colors.map((c, ci) => (
                              <span
                                key={ci}
                                className="w-2.5 h-2.5 rounded-full border border-gray-300"
                                style={{ backgroundColor: c }}
                                title={product.colorNames?.[ci] || 'Color'}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Price & Dual Action Row (Buy / Add to Cart + B2B Inquiry) */}
                      <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-[var(--secondary)]/5 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[7.5px] sm:text-[9px] text-[var(--secondary)]/50 uppercase tracking-widest block font-medium">Bespoke Price</span>
                            <span className="text-xs sm:text-lg font-black text-[var(--secondary)]">${product.price}</span>
                          </div>

                          <button
                            onClick={() => openQuickView(product)}
                            className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 text-white text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider rounded-[3px] flex items-center gap-1 transition-all cursor-pointer shadow-sm"
                          >
                            <ShoppingBag size={11} />
                            <span>Buy / Cart</span>
                          </button>
                        </div>

                        {/* B2B Wholesale / Bespoke Link */}
                        <button
                          onClick={() => onNavigateInquiry(product)}
                          className="w-full py-1 text-[9px] sm:text-[10px] font-bold text-[var(--secondary)]/60 hover:text-[var(--accent)] uppercase tracking-wider flex items-center justify-center gap-1 transition-colors border-t border-gray-100 pt-1.5 cursor-pointer"
                        >
                          <span>B2B Wholesale / Custom Quote &rarr;</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* ── VIEW MODE 2: LIST VIEW ─────────────────────────────────── */}
            {viewMode === 'list' && filteredProducts.length > 0 && (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[3px] border border-[var(--secondary)]/10 hover:border-[var(--accent)]/40 p-4 transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row gap-5 items-center"
                  >
                    {/* Left Image */}
                    <div className="w-full md:w-44 aspect-square md:aspect-[4/5] bg-gray-100 rounded-[3px] overflow-hidden flex-shrink-0 relative group">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 bg-[var(--secondary)]/90 text-white text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-[3px]">
                        {product.badge}
                      </span>
                    </div>

                    {/* Middle Details */}
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">
                          {product.category}
                        </span>
                        <span>•</span>
                        <span className="text-[10px] font-semibold text-[var(--secondary)]/60 uppercase">
                          {product.leather}
                        </span>
                        <div className="ml-auto flex items-center gap-1 font-bold text-amber-500 text-xs">
                          <Star size={12} fill="currentColor" />
                          <span>{product.rating}</span>
                          <span className="text-[var(--secondary)]/40 font-normal">({product.reviews})</span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-xl font-black text-[var(--secondary)]">
                        {product.name}
                      </h3>

                      <p className="text-xs text-[var(--secondary)]/70 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.features?.map((f, fi) => (
                          <span key={fi} className="px-2 py-0.5 bg-gray-50 border border-gray-200 text-[10px] font-medium text-[var(--secondary)]/80 rounded-[3px]">
                            {f}
                          </span>
                        ))}
                      </div>

                      {/* Sizes */}
                      <div className="flex items-center gap-2 text-xs pt-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--secondary)]/60">
                          Sizes:
                        </span>
                        <div className="flex gap-1 flex-wrap">
                          {product.sizes?.map((s) => (
                            <span key={s} className="px-2 py-0.5 bg-gray-100 text-[10px] font-bold text-[var(--secondary)] rounded-[3px]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Action & Price */}
                    <div className="w-full md:w-56 flex-shrink-0 flex md:flex-col justify-between items-end md:items-end pt-3 md:pt-0 border-t md:border-t-0 border-[var(--secondary)]/10 gap-2">
                      <div className="text-left md:text-right">
                        <span className="text-[9px] text-[var(--secondary)]/50 uppercase tracking-widest block font-medium">Bespoke Price</span>
                        <span className="text-xl font-black text-[var(--secondary)]">${product.price} USD</span>
                      </div>

                      <div className="flex flex-col gap-1.5 w-full md:w-auto">
                        <button
                          onClick={() => {
                            addToCart(product, 'M', product.colorNames?.[0] || 'Original', 1);
                            setCartOpen(true);
                          }}
                          className="px-4 py-2 bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                        >
                          <ShoppingBag size={13} />
                          <span>Add to Cart</span>
                        </button>
                        <button
                          onClick={() => onNavigateInquiry(product)}
                          className="px-4 py-2 border border-[var(--secondary)]/20 hover:border-[var(--accent)] text-[var(--secondary)] hover:text-[var(--accent)] text-[11px] font-bold uppercase tracking-wider rounded-[3px] transition-all text-center cursor-pointer"
                        >
                          B2B Quote
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

          </main>
        </div>
      </div>

      {/* ── MOBILE FILTER SLIDEOVER DRAWER ─────────────────────────────────── */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFilterOpen(false)}
              className="fixed inset-0 z-[150] bg-black cursor-pointer"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-[160] w-full max-w-xs sm:max-w-sm bg-white p-6 overflow-y-auto shadow-2xl flex flex-col justify-between thin-scrollbar"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-5">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal size={16} className="text-[var(--accent)]" />
                    <h3 className="text-sm font-black tracking-widest uppercase text-[var(--secondary)]">
                      Catalog Filters
                    </h3>
                  </div>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-1.5 rounded-[3px] bg-gray-100 hover:bg-gray-200 cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Price Slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider">Price Limit</span>
                    <span className="text-xs font-black text-[var(--accent)]">${priceRange[0]} - ${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1200"
                    step="20"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full accent-[var(--accent)] cursor-pointer"
                  />
                </div>

                {/* Leather Types */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5">Leather Types</h4>
                  <div className="space-y-2">
                    {leatherTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 text-xs cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={selectedLeathers.includes(type)}
                          onChange={() => toggleLeather(type)}
                          className="rounded-[2px] text-[var(--accent)] cursor-pointer"
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5">Sizes</h4>
                  <div className="grid grid-cols-4 gap-1.5">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => toggleSize(sz)}
                        className={`py-1.5 text-xs font-bold rounded-[3px] border cursor-pointer ${
                          selectedSizes.includes(sz)
                            ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]'
                            : 'bg-white text-[var(--secondary)]/70 border-gray-200'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                <div className="mb-6 space-y-2">
                  <label className="flex items-center gap-2 text-xs cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={onlyBestsellers}
                      onChange={(e) => setOnlyBestsellers(e.target.checked)}
                      className="rounded-[2px] text-[var(--accent)] cursor-pointer"
                    />
                    <span>Bestseller Designs Only</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={onlyNew}
                      onChange={(e) => setOnlyNew(e.target.checked)}
                      className="rounded-[2px] text-[var(--accent)] cursor-pointer"
                    />
                    <span>New 2025 Releases</span>
                  </label>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-gray-200 flex gap-2">
                <button
                  onClick={clearAllFilters}
                  className="w-1/2 py-2.5 border border-gray-300 text-xs font-bold uppercase tracking-wider rounded-[3px] cursor-pointer"
                >
                  Reset
                </button>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-1/2 py-2.5 bg-[var(--secondary)] text-white text-xs font-bold uppercase tracking-widest rounded-[3px] cursor-pointer"
                >
                  View ({filteredProducts.length})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── QUICK VIEW / PRODUCT DETAIL MODAL ────────────────────────────── */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-[var(--secondary)]/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[3px] max-w-3xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] overflow-y-auto thin-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-[3px] bg-white/80 hover:bg-white text-[var(--secondary)] flex items-center justify-center shadow-md transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              {/* Left Image */}
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-gray-100 relative min-h-[300px]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-[var(--secondary)]/90 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-[3px]">
                  {selectedProduct.badge}
                </span>
              </div>

              {/* Right Content */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-2xl font-black text-[var(--secondary)] mt-1 mb-2">
                    {selectedProduct.name}
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-black text-[var(--secondary)]">
                      ${selectedProduct.price} USD
                    </span>
                    <span className="text-xs bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-[3px] border border-emerald-200">
                      In Stock / Fast Shipping
                    </span>
                  </div>

                  <p className="text-xs text-[var(--secondary)]/70 mb-4 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Size Selector */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-[var(--secondary)]">
                        Select Size: <span className="text-[var(--accent)]">{modalSize}</span>
                      </h5>
                      <button
                        onClick={() => setSizeChartOpen(true)}
                        className="text-[10px] font-bold text-[var(--accent)] hover:underline uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                      >
                        <Ruler size={12} /> Size Chart
                      </button>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      {selectedProduct.sizes?.map((s) => (
                        <button
                          key={s}
                          onClick={() => setModalSize(s)}
                          className={`px-3 py-1.5 rounded-[3px] text-xs font-bold transition-all cursor-pointer ${
                            modalSize === s
                              ? 'bg-[var(--secondary)] text-white'
                              : 'bg-gray-100 text-[var(--secondary)] hover:bg-gray-200'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selector (if present) */}
                  {selectedProduct.colorNames && selectedProduct.colorNames.length > 0 && (
                    <div className="mb-4">
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                        Finish / Color: <span className="text-[var(--secondary)] font-normal">{modalColor || selectedProduct.colorNames[0]}</span>
                      </h5>
                      <div className="flex gap-2">
                        {selectedProduct.colorNames.map((cName, ci) => (
                          <button
                            key={cName}
                            onClick={() => setModalColor(cName)}
                            className={`px-2.5 py-1 border rounded-[3px] text-[10px] font-semibold cursor-pointer transition-colors ${
                              (modalColor || selectedProduct.colorNames[0]) === cName
                                ? 'border-[var(--accent)] bg-[var(--accent)]/5 text-[var(--accent)] font-bold'
                                : 'border-gray-200 text-gray-600'
                            }`}
                          >
                            {cName}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity */}
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--secondary)]">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-[3px]">
                      <button
                        onClick={() => setModalQty(Math.max(1, modalQty - 1))}
                        className="px-2.5 py-1 hover:bg-gray-100 text-gray-600 cursor-pointer"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-3 text-xs font-bold">{modalQty}</span>
                      <button
                        onClick={() => setModalQty(modalQty + 1)}
                        className="px-2.5 py-1 hover:bg-gray-100 text-gray-600 cursor-pointer"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-4">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-[var(--secondary)] mb-1.5">
                      Key Specifications
                    </h5>
                    <ul className="space-y-1">
                      {selectedProduct.features?.map((feat, i) => (
                        <li key={i} className="text-xs text-[var(--secondary)]/80 flex items-center gap-2">
                          <Check size={13} className="text-[var(--accent)] flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dual Action Buttons */}
                <div className="space-y-2 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct, modalSize, modalColor || selectedProduct.colorNames?.[0] || 'Standard', modalQty);
                      setSelectedProduct(null);
                      setCartOpen(true);
                    }}
                    className="w-full py-3.5 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold text-xs uppercase tracking-widest rounded-[3px] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag size={15} />
                    <span>Add to Cart (${selectedProduct.price * modalQty} USD)</span>
                  </button>

                  <button
                    onClick={() => {
                      const p = selectedProduct;
                      setSelectedProduct(null);
                      onNavigateInquiry(p);
                    }}
                    className="w-full py-2.5 border border-[var(--secondary)]/20 hover:border-[var(--secondary)] text-[var(--secondary)] font-bold text-[11px] uppercase tracking-wider rounded-[3px] transition-colors cursor-pointer"
                  >
                    Request B2B Wholesale / Bespoke Custom Fit Quote &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── SIZE CHART MODAL ──────────────────────────────────────────────── */}
      <SizeChartModal
        isOpen={sizeChartOpen}
        onClose={() => setSizeChartOpen(false)}
        onNavigateBespoke={() => {
          setSizeChartOpen(false);
          onNavigateInquiry();
        }}
      />

    </div>
  );
}
