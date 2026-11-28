import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, SlidersHorizontal, X, ArrowRight, Star, 
  Check, Eye, Sparkles, Grid3X3, LayoutList,
  RotateCcw, ShieldCheck, Award, ArrowLeft, ShoppingBag, Plus, Minus, Ruler
} from 'lucide-react';
import { allProducts, categories, fabricTypes } from '../../data/productsData';
import { useCart } from '../../context/CartContext';
import SizeChartModal from './SizeChartModal';

export default function ProductsPage({ 
  initialCategory = 'ALL SPORTSWEAR', 
  initialSearch = '',
  onNavigateHome = () => {},
  onNavigateCategory = () => {},
  onNavigateInquiry = () => {},
  onOpenProductDetail = () => {}
}) {
  const { addToCart, setCartOpen } = useCart();

  // Filter states
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'ALL SPORTSWEAR');
  const [selectedFabrics, setSelectedFabrics] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [onlyBestsellers, setOnlyBestsellers] = useState(false);
  const [onlyNew, setOnlyNew] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  // UI states
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalSize, setModalSize] = useState('L');
  const [modalColor, setModalColor] = useState('');
  const [modalQty, setModalQty] = useState(15);
  const [sizeChartOpen, setSizeChartOpen] = useState(false);

  // Sync with prop changes if parent updates
  useEffect(() => {
    if (initialCategory) {
      const norm = initialCategory.toUpperCase();
      setSelectedCategory(norm.includes('JACKET') ? 'ALL SPORTSWEAR' : norm);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialSearch) setSearchQuery(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openQuickView = (product) => {
    setSelectedProduct(product);
    setModalSize(product.sizes?.[0] || 'L');
    setModalColor(product.colorNames?.[0] || 'Team Colors');
    setModalQty(product.minOrderQty || 15);
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      // Category filter
      if (selectedCategory && selectedCategory !== 'ALL SPORTSWEAR' && selectedCategory !== 'ALL JACKETS') {
        const catNorm = selectedCategory.toUpperCase();
        const pCatNorm = (p.category || '').toUpperCase();
        const pSportNorm = (p.sport || '').toUpperCase();
        const pNameNorm = (p.name || '').toUpperCase();

        const match = 
          pCatNorm.includes(catNorm) || 
          pSportNorm.includes(catNorm) || 
          pNameNorm.includes(catNorm) ||
          (catNorm.includes('SOCCER') && (pCatNorm.includes('SOCCER') || pSportNorm.includes('SOCCER'))) ||
          (catNorm.includes('FOOTBALL') && (pCatNorm.includes('FOOTBALL') || pSportNorm.includes('FOOTBALL'))) ||
          (catNorm.includes('BASEBALL') && (pCatNorm.includes('BASEBALL') || pSportNorm.includes('BASEBALL'))) ||
          (catNorm.includes('BASKETBALL') && (pCatNorm.includes('BASKETBALL') || pSportNorm.includes('BASKETBALL'))) ||
          (catNorm.includes('ESPORTS') && (pCatNorm.includes('ESPORTS') || pSportNorm.includes('ESPORTS'))) ||
          (catNorm.includes('WRESTLING') && (pCatNorm.includes('WRESTLING') || pSportNorm.includes('WRESTLING'))) ||
          (catNorm.includes('HOCKEY') && (pCatNorm.includes('HOCKEY') || pSportNorm.includes('HOCKEY'))) ||
          (catNorm.includes('VOLLEYBALL') && (pCatNorm.includes('VOLLEYBALL') || pSportNorm.includes('VOLLEYBALL'))) ||
          (catNorm.includes('SOFTBALL') && (pCatNorm.includes('SOFTBALL') || pSportNorm.includes('SOFTBALL'))) ||
          (catNorm.includes('RUGBY') && (pCatNorm.includes('RUGBY') || pSportNorm.includes('RUGBY'))) ||
          (catNorm.includes('LACROSSE') && (pCatNorm.includes('LACROSSE') || pSportNorm.includes('LACROSSE')));

        if (!match) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = 
          (p.name && p.name.toLowerCase().includes(q)) ||
          (p.category && p.category.toLowerCase().includes(q)) ||
          (p.sport && p.sport.toLowerCase().includes(q)) ||
          (p.fabric && p.fabric.toLowerCase().includes(q)) ||
          (p.finish && p.finish.toLowerCase().includes(q)) ||
          (p.badge && p.badge.toLowerCase().includes(q)) ||
          (p.description && p.description.toLowerCase().includes(q));
        if (!match) return false;
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
      return a.id - b.id;
    });
  }, [selectedCategory, searchQuery, selectedSizes, onlyBestsellers, onlyNew, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory('ALL SPORTSWEAR');
    setSearchQuery('');
    setSelectedFabrics([]);
    setSelectedSizes([]);
    setPriceRange([0, 150]);
    setOnlyBestsellers(false);
    setOnlyNew(false);
    setSortBy('featured');
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="w-full bg-[var(--primary)] min-h-screen text-[var(--secondary)] pb-20">
      
      {/* ── TOP BREADCRUMB & HEADER ───────────────────────────────── */}
      <section className="w-full bg-[var(--secondary)] text-white py-10 border-b border-white/10">
        <div className="w-[96%] max-w-[1800px] mx-auto">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
            <button onClick={onNavigateHome} className="hover:text-white transition cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span className="text-[var(--accent)] font-black">
              {selectedCategory}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[var(--accent)] uppercase block mb-1">
                OEM FACTORY DIRECT CATALOG
              </span>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                {selectedCategory === 'ALL SPORTSWEAR' ? 'CUSTOM SPORTS UNIFORMS & GEAR' : `CUSTOM ${selectedCategory} UNIFORMS`}
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-md font-light leading-relaxed">
              Sublimated team jerseys, matching shorts, and pro-stitched numbers direct from our Sialkot manufacturing facility.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT (SIDEBAR + PRODUCTS GRID) ────────────────── */}
      <div className="w-[96%] max-w-[1800px] mx-auto mt-8 sm:mt-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0 bg-white rounded-[3px] border border-[var(--secondary)]/10 p-6 shadow-sm space-y-6">
            
            {/* Search Input */}
            <div>
              <h2 className="text-[11px] font-bold tracking-wider uppercase text-[var(--secondary)] mb-2">
                Search Uniforms
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Football, Baseball, Dri-Fit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-neutral-300 rounded-[3px] focus:border-[var(--accent)] focus:outline-none"
                />
                <Search size={14} className="absolute left-3 top-2.5 text-neutral-400" />
              </div>
            </div>

            {/* Sport Categories */}
            <div>
              <h2 className="text-[11px] font-bold tracking-wider uppercase text-[var(--secondary)] mb-2.5">
                Sport Categories
              </h2>
              <div className="space-y-1 max-h-60 overflow-y-auto no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-1.5 rounded-[3px] text-xs font-bold uppercase transition flex items-center justify-between cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[var(--secondary)] text-white'
                        : 'text-[var(--secondary)]/70 hover:bg-neutral-100 hover:text-[var(--secondary)]'
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <Check size={13} className="text-[var(--accent)]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Standard Sizes */}
            <div>
              <h2 className="text-[11px] font-bold tracking-wider uppercase text-[var(--secondary)] mb-2.5">
                Athletic Sizes
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {['YS', 'YM', 'YL', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'].map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleSize(s)}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-[3px] border transition cursor-pointer ${
                      selectedSizes.includes(s)
                        ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                        : 'bg-white border-neutral-300 text-[var(--secondary)]/70 hover:border-neutral-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* B2B Factory Card */}
            <div className="p-4 bg-[var(--secondary)] text-white rounded-[3px] space-y-2">
              <span className="text-[9px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                SIALKOT FACTORY DIRECT
              </span>
              <h3 className="text-xs font-black uppercase">Free 3D Mockup in 12 Hours</h3>
              <p className="text-[10px] text-white/70 leading-relaxed">
                Send your team logos & colors. Our design engineers will generate a multi-angle 3D proof before production.
              </p>
              <button
                onClick={() => onNavigateInquiry('Custom Team Mockup')}
                className="w-full py-2 bg-[var(--accent)] text-white text-[10px] font-bold uppercase tracking-wider rounded-[3px] hover:opacity-90 transition cursor-pointer"
              >
                Request Free Mockup
              </button>
            </div>

          </aside>

          {/* Right Product Grid */}
          <main className="flex-1 w-full">
            
            {/* View Mode & Sort Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--secondary)]/10 text-xs">
              <div className="text-[var(--secondary)]/70 font-semibold">
                Showing <strong className="text-[var(--secondary)]">{filteredProducts.length}</strong> Uniform Designs
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 bg-white border border-neutral-300 rounded-[3px] text-xs font-semibold text-[var(--secondary)] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid — Exact Same Original Card Style */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    className="group bg-white rounded-[3px] overflow-hidden border border-[var(--secondary)]/10 hover:border-[var(--accent)]/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between relative"
                  >
                    {/* Image Area */}
                    <div 
                      className="relative w-full aspect-[4/5] bg-neutral-100 overflow-hidden cursor-pointer"
                      onClick={() => onOpenProductDetail(product)}
                    >
                      <img
                        src={product.image}
                        alt="HAMLO SPORTS Custom Athletic Uniform Product"
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-5" />

                      {/* Top Badge */}
                      <div className="absolute top-2 left-2">
                        <span className="bg-[var(--secondary)]/90 backdrop-blur-md text-white text-[7.5px] sm:text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-[3px] border border-white/20">
                          {product.badge}
                        </span>
                      </div>

                      {/* Quick View Button */}
                      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 px-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openQuickView(product);
                          }}
                          className="px-3 py-1.5 bg-white/95 text-[var(--secondary)] font-bold text-[9.5px] sm:text-[11px] uppercase tracking-wider rounded-[3px] shadow-xl hover:bg-[var(--accent)] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <Eye size={13} /> Quick View
                        </button>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between text-[9px] sm:text-[10.5px] text-[var(--secondary)]/60 mb-1">
                          <span className="uppercase font-bold tracking-wider text-[var(--accent)] truncate max-w-[65%]">
                            {product.category}
                          </span>
                          <div className="flex items-center gap-0.5 font-bold text-amber-500 flex-shrink-0">
                            <Star size={10} className="sm:w-3 sm:h-3" fill="currentColor" />
                            <span>{product.rating}</span>
                          </div>
                        </div>

                        {/* Title - Click opens detail landing page */}
                        <h3 
                          onClick={() => onOpenProductDetail(product)}
                          className="text-xs sm:text-base font-black text-[var(--secondary)] group-hover:text-[var(--accent)] transition-colors leading-snug line-clamp-1 cursor-pointer"
                        >
                          {product.name}
                        </h3>

                        <p className="text-[9.5px] sm:text-xs text-[var(--secondary)]/60 mt-0.5 line-clamp-1">
                          {product.finish || product.fabric}
                        </p>
                      </div>

                      {/* Price & Dual Action Row */}
                      <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-[var(--secondary)]/5 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[7.5px] sm:text-[9px] text-[var(--secondary)]/50 uppercase tracking-widest block font-medium">Starting from</span>
                            <span className="text-xs sm:text-lg font-black text-[var(--secondary)]">${product.price}</span>
                          </div>

                          <button
                            onClick={() => onOpenProductDetail(product)}
                            className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[var(--accent)] hover:opacity-90 text-white text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider rounded-[3px] flex items-center gap-1 transition-all cursor-pointer shadow-sm"
                          >
                            <span>View Details</span>
                            <ArrowRight size={11} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-12 text-center space-y-3">
                <h4 className="text-lg font-black uppercase text-[var(--secondary)]">
                  No Uniforms Found for {selectedCategory}
                </h4>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                  We manufacture custom uniforms for every sport. Click below to view all sportswear or request a custom quote.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 bg-[var(--secondary)] text-white text-xs font-bold uppercase rounded-[3px] hover:bg-[var(--accent)] transition cursor-pointer"
                >
                  View All Sports Categories
                </button>
              </div>
            )}

          </main>

        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[3px] max-w-2xl w-full p-6 relative shadow-2xl flex flex-col md:flex-row gap-6"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="w-full md:w-1/2 aspect-square rounded-[3px] overflow-hidden bg-neutral-100">
                <img src={selectedProduct.image} alt="HAMLO SPORTS Custom Team Uniform Modal View" className="w-full h-full object-cover" />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[var(--accent)] uppercase">{selectedProduct.category}</span>
                  <h3 className="text-xl font-black text-[var(--secondary)] mt-1 mb-2">{selectedProduct.name}</h3>
                  <div className="text-2xl font-black text-[var(--secondary)] mb-4">${selectedProduct.price} <span className="text-xs font-normal text-neutral-500">/ player</span></div>
                  <p className="text-xs text-neutral-600 mb-4">{selectedProduct.description}</p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      const p = selectedProduct;
                      setSelectedProduct(null);
                      onOpenProductDetail(p);
                    }}
                    className="w-full py-3 bg-[var(--secondary)] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] hover:bg-[var(--accent)] transition cursor-pointer"
                  >
                    View Full Product Details & Pricing
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
