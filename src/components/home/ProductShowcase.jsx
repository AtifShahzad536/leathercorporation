import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Shield, Sparkles, ArrowRight, X, Check, Star } from 'lucide-react';

const categories = [
  'ALL JACKETS',
  'BIKER & MOTO',
  'BOMBER & AVIATOR',
  'SUEDE & HARINGTON',
  "WOMEN'S COLLECTION"
];

const products = [
  {
    id: 1,
    category: 'BIKER & MOTO',
    name: 'Vanguard Cafe Racer',
    badge: '1.2MM FULL-GRAIN',
    price: '$480',
    leather: 'Aniline Cowhide',
    finish: 'Hand-Buffed Antique Tan',
    image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 48,
    features: ['Snap mandarin collar', 'YKK antique brass zippers', 'CE-Level 2 armor pockets', 'Breathable satin lining'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#78350F', '#1F2937']
  },
  {
    id: 2,
    category: 'BIKER & MOTO',
    name: 'Ironhide Double Rider',
    badge: 'CE-ARMOR READY',
    price: '$540',
    leather: 'Heavyweight Steerhide',
    finish: 'Matte Oil-Pull Black',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    reviews: 62,
    features: ['Asymmetrical heavy zip', 'Diamond-quilted shoulder reinforcement', 'Adjustable waist belt', 'Action-back shoulder pleats'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#111827', '#374151']
  },
  {
    id: 3,
    category: 'BOMBER & AVIATOR',
    name: 'B-3 Arctic Shearling Bomber',
    badge: 'GENUINE SHEEPSKIN',
    price: '$690',
    leather: 'Nappa Sheepskin',
    finish: 'Plush Natural Wool Fleece',
    image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 35,
    features: ['Thick 15mm shearling fleece', 'Twin collar throat latches', 'Heavy-duty storm flap', 'Reinforced leather seam tapes'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#451A03', '#1F2937']
  },
  {
    id: 4,
    category: 'BOMBER & AVIATOR',
    name: 'A-2 Flight Heritage Bomber',
    badge: 'VINTAGE FLIGHT',
    price: '$460',
    leather: 'Drum-Dyed Lambskin',
    finish: 'Dark Chocolate Semi-Aniline',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: 41,
    features: ['Ribbed wool cuffs & waistband', 'Snap-down collar points', 'Dual entry flap pockets', 'Custom jacquard lining'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#3E2723', '#212121']
  },
  {
    id: 5,
    category: 'SUEDE & HARINGTON',
    name: 'Riviera Goat Suede Overshirt',
    badge: 'ITALIAN GOAT SUEDE',
    price: '$420',
    leather: 'Velvety Soft Suede',
    finish: 'Cognac Silk-Touch Nap',
    image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 29,
    features: ['Natural horn buttons', 'Flap chest utility pockets', 'Tailored unlined silhouette', 'Precision double needle stitching'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#9A3412', '#78350F', '#1E293B']
  },
  {
    id: 6,
    category: "WOMEN'S COLLECTION",
    name: 'Astrid Cropped Moto Jacket',
    badge: 'SUPPLE NAPPA',
    price: '$450',
    leather: 'Italian Lambskin Nappa',
    finish: 'Polished Obsidian Black',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    reviews: 54,
    features: ['Anatomical cropped waist', 'Polished nickel YKK zippers', 'Gusseted zipped cuffs', 'Supple featherlight drape'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#111827', '#831843']
  },
  {
    id: 7,
    category: "WOMEN'S COLLECTION",
    name: 'Eleonora Shearling Aviator',
    badge: 'LUXURY SHEARLING',
    price: '$680',
    leather: 'Spanish Merino Shearling',
    finish: 'Cognac Suede with Cream Wool',
    image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 38,
    features: ['Contoured feminine silhouette', 'Exposed shearling lapels', 'Side buckle cinch tabs', 'Ultra-soft thermal insulation'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#78350F', '#18181B']
  },
  {
    id: 8,
    category: 'SUEDE & HARINGTON',
    name: 'Monaco Suede Harrington',
    badge: 'HERITAGE CASUAL',
    price: '$460',
    leather: 'Italian Suede & Ribbed Knit',
    finish: 'Sand Dune Suede',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: 31,
    features: ['Classic standing collar with dual buttons', 'Umbrella back yoke', 'Two-way front zipper', 'Raglan sleeve freedom'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#D97706', '#334155']
  }
];

export default function ProductShowcase({ onSeeAll = () => {} }) {
  const [activeCategory, setActiveCategory] = useState('ALL JACKETS');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === 'ALL JACKETS'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="w-full bg-[var(--primary)] py-[6%] border-t border-[var(--secondary)]/10 relative">
      <div className="w-[92%] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-3 flex items-center gap-2">
              <Sparkles size={15} /> CURATED MASTERWORKS
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-[var(--secondary)] tracking-tight">
              SIGNATURE COLLECTION
            </h2>
            <p className="text-xs md:text-sm text-[var(--secondary)]/60 max-w-lg mt-2">
              Explore our master-crafted leather jackets. Built with drum-dyed full grain hides, precision 3D tailoring, and heritage hardware.
            </p>
          </div>

          {/* Category Filter Pills & See All button */}
          <div className="flex items-center gap-3">
            <div className="flex overflow-x-auto scrollbar-hide gap-1.5 sm:gap-2 pb-1 max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-[3px] text-[9.5px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap flex-shrink-0 ${
                    activeCategory === cat
                      ? 'bg-[var(--secondary)] text-white shadow-md shadow-[var(--secondary)]/20 scale-105'
                      : 'bg-white border border-[var(--secondary)]/10 text-[var(--secondary)]/70 hover:border-[var(--accent)] hover:text-[var(--accent)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              onClick={onSeeAll}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold text-xs uppercase tracking-wider rounded-[3px] shadow-sm transition-all whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              <span>Full Catalog</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Product Grid — 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group bg-white rounded-[3px] overflow-hidden border border-[var(--secondary)]/10 hover:border-[var(--accent)]/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between relative"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-5" />

                  {/* Badge */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <span className="bg-[var(--secondary)]/90 backdrop-blur-md text-white text-[7.5px] sm:text-[9px] font-bold tracking-widest uppercase px-2 py-1 sm:px-3 sm:py-1.5 rounded-[3px] border border-white/20">
                      {product.badge}
                    </span>
                  </div>

                  {/* Quick View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-3 py-1.5 sm:px-5 sm:py-2.5 bg-white/95 text-[var(--secondary)] font-bold text-[9px] sm:text-xs uppercase tracking-widest rounded-[3px] shadow-xl hover:bg-[var(--accent)] hover:text-white transition-all flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
                    >
                      <Eye size={12} className="sm:w-3.5 sm:h-3.5" /> Quick View
                    </button>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-3 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    {/* Rating & Leather Type */}
                    <div className="flex items-center justify-between text-[9px] sm:text-[11px] text-[var(--secondary)]/60 mb-1">
                      <span className="uppercase font-bold tracking-wider text-[var(--accent)] truncate max-w-[65%]">
                        {product.leather}
                      </span>
                      <div className="flex items-center gap-0.5 sm:gap-1 font-bold text-amber-500 flex-shrink-0">
                        <Star size={10} className="sm:w-3 sm:h-3" fill="currentColor" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-base font-black text-[var(--secondary)] group-hover:text-[var(--accent)] transition-colors leading-tight line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[9.5px] sm:text-xs text-[var(--secondary)]/60 mt-0.5 sm:mt-1 line-clamp-1">
                      {product.finish}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-3 sm:mt-5 pt-2 sm:pt-4 border-t border-[var(--secondary)]/5 flex items-center justify-between">
                    <div>
                      <span className="text-[7.5px] sm:text-[10px] text-[var(--secondary)]/50 uppercase tracking-widest block font-medium">Bespoke</span>
                      <span className="text-xs sm:text-lg font-black text-[var(--secondary)]">{product.price}</span>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-[3px] bg-[var(--secondary)]/5 hover:bg-[var(--accent)] hover:text-white text-[var(--secondary)] flex items-center justify-center transition-all duration-300 group/btn cursor-pointer"
                      aria-label="View product details"
                    >
                      <ArrowRight size={13} className="sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Masterworks Footer CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={onSeeAll}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-[var(--secondary)]/20 hover:border-[var(--accent)] text-[var(--secondary)] hover:text-[var(--accent)] font-bold text-xs uppercase tracking-widest rounded-[3px] shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <span>Explore All 16+ Leather Masterpieces</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Bespoke Banner */}
        <div className="mt-10 p-8 md:p-10 rounded-[3px] bg-gradient-to-r from-[var(--secondary)] to-[#2d2894] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
            <Shield size={320} />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-white/10 text-[var(--accent)] text-[10px] font-bold tracking-widest uppercase rounded-[3px] mb-3">
              OEM & PRIVATE LABEL MANUFACTURING
            </span>
            <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
              Looking for Custom Club Jackets or Bulk OEM Production?
            </h4>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              Leader Corporation manufactures custom branded motorcycle apparel, racing suits, and private label fashion lines with worldwide export delivery and laser pattern precision.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4">
            <button 
              onClick={onSeeAll}
              className="px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold text-xs uppercase tracking-widest rounded-[3px] transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              Open Full Products Catalog
            </button>
            <button 
              onClick={onSeeAll}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-[3px] border border-white/20 transition-all cursor-pointer"
            >
              Bespoke Fit Guide
            </button>
          </div>
        </div>

      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-[var(--secondary)]/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[3px] max-w-3xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-[3px] bg-white/80 hover:bg-white text-[var(--secondary)] flex items-center justify-center shadow-md transition-colors"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              {/* Modal Left Image */}
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-gray-100 relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-[var(--secondary)]/90 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-[3px]">
                  {selectedProduct.badge}
                </span>
              </div>

              {/* Modal Right Content */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-2xl font-black text-[var(--secondary)] mt-1 mb-2">
                    {selectedProduct.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-black text-[var(--secondary)]">
                      {selectedProduct.price}
                    </span>
                    <span className="text-xs bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-[3px] border border-emerald-200">
                      In Stock / Bespoke Ready
                    </span>
                  </div>

                  <p className="text-xs text-[var(--secondary)]/70 mb-4 leading-relaxed">
                    Crafted from {selectedProduct.leather.toLowerCase()} with a {selectedProduct.finish.toLowerCase()}. Designed for lifetime comfort, wind protection, and distinct character.
                  </p>

                  {/* Features List */}
                  <div className="mb-5">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-[var(--secondary)] mb-2">
                      Key Specifications
                    </h5>
                    <ul className="space-y-1.5">
                      {selectedProduct.features.map((feat, i) => (
                        <li key={i} className="text-xs text-[var(--secondary)]/80 flex items-center gap-2">
                          <Check size={13} className="text-[var(--accent)] flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Available Sizes */}
                  <div className="mb-6">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-[var(--secondary)] mb-2">
                      Available Sizes (Custom Fit Available)
                    </h5>
                    <div className="flex gap-1.5 flex-wrap">
                      {selectedProduct.sizes.map((s) => (
                        <span key={s} className="px-3 py-1 border border-[var(--secondary)]/20 rounded-[3px] text-xs font-semibold text-[var(--secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-pointer transition-colors">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Inquire CTA Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full py-3.5 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold text-xs uppercase tracking-widest rounded-[3px] transition-all shadow-lg hover:shadow-xl"
                >
                  Inquire For Order & Custom Tailoring
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
