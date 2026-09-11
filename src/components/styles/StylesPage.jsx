import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Sparkles, Shield, Compass, 
  Layers, CheckCircle, ChevronRight, BookOpen, Building2, Flame
} from 'lucide-react';
import { leatherTypes } from '../../data/productsData';

export const leatherStylesData = [
  {
    id: 'biker-moto',
    title: 'Biker & Motorcycle Jackets',
    tagline: 'Asymmetrical Zippers • CE-Armor Pockets • Heavy Cowhide',
    description: 'Engineered for maximum abrasion resistance and timeless attitude. Featuring heavy 1.2-1.3mm drum-dyed full-grain cowhide, bi-swing back gussets for riding posture, and reinforced elbow/shoulder impact zones.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=900&auto=format&fit=crop',
    categoryFilter: 'MOTORCYCLE & RACING',
    features: ['1.2mm Drum-Dyed Cowhide', 'CE-Level 2 Armor Pockets', 'YKK Heavy Gauge Brass Hardware', 'Action Back Expansion Pleats'],
    popularFor: 'Street Riders, Touring Enthusiasts, Rocker Subculture'
  },
  {
    id: 'cafe-racer',
    title: 'Cafe Racer & Minimalist Moto',
    tagline: 'Mandarin Snap Collar • Center Zipper • Streamlined Profile',
    description: 'Born in the 1960s British cafe racing scene. Sleek, clean front styling with zippered chest pockets and pre-curved sleeves designed to cut wind with zero excess bulk.',
    image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=900&auto=format&fit=crop',
    categoryFilter: "MEN'S JACKETS",
    features: ['Washed Lambskin or Steerhide', 'Racer Snap Tab Collar', 'Zippered Ventilated Cuffs', 'Diamond Stitched Shoulders'],
    popularFor: 'Urban Commuting, Minimalist Styling, Casual Layering'
  },
  {
    id: 'aviator-bomber',
    title: 'Aviator & B-3 Shearling Flight',
    tagline: 'Genuine Merino Sheepskin • Thermal Insulation • Vintage Patina',
    description: 'Inspired by WWII high-altitude flight crews. Crafted from thick genuine sheepskin wool shearling or supple goat nappa with ribbed wool cuffs and fur-lined collar.',
    image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=900&auto=format&fit=crop',
    categoryFilter: "MEN'S JACKETS",
    features: ['Genuine 15mm Sheepskin Shearling', 'Dual Buckled Throat Latches', 'Heavy Duty Antiqued Metal Zip', 'Weatherproof Hide Exterior'],
    popularFor: 'Sub-Zero Winter Weather, Heritage Aviator Collectors'
  },
  {
    id: 'suede-overshirts',
    title: 'Luxury Suede & Harrington',
    tagline: 'Velvety Goat Suede • Lightweight Drape • Contemporary Elegance',
    description: 'Precision shaved goat and calf suede offering an impossibly soft hand feel. Ideal for luxury smart-casual tailoring, spring transition wear, and effortless luxury.',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=900&auto=format&fit=crop',
    categoryFilter: "MEN'S JACKETS",
    features: ['Ultra-Supple 0.7mm Goat Suede', 'Hydrophobic Stain Resistant Finish', 'Silk-Touch Bemberg Lining', 'Horn Button Closures'],
    popularFor: 'Smart Casual Business, Luxury Lounging, Summer Evenings'
  },
  {
    id: 'blazers-trench',
    title: 'Tailored Leather Blazers & Trench',
    tagline: 'Structured Lapels • Italian Nappa • Formal Outerwear',
    description: 'Sartorial tailoring meets premium leather craft. Hand-cut panels structured with horsehair canvas interlining for a drape indistinguishable from bespoke suit jacket tailoring.',
    image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=900&auto=format&fit=crop',
    categoryFilter: "WOMEN'S JACKETS",
    features: ['0.8mm Italian Lambskin Nappa', 'Full Canvas Structured Chest', 'Double Back Vent', 'Hand-Bound Buttonholes'],
    popularFor: 'Executive Fashion, Evening Events, Bespoke Suiting'
  },
  {
    id: 'racing-suits',
    title: 'Professional 1-Piece & 2-Piece Racing Suits',
    tagline: 'FIM Track Homologated • Kangaroo Leather • Aerodynamic Hump',
    description: 'Elite track racing suits engineered with tear-resistant kangaroo and bovine leather, accordion stretch ergonomics, and external dual-density shoulder/knee titanium sliders.',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=900&auto=format&fit=crop',
    categoryFilter: 'MOTORCYCLE & RACING',
    features: ['Kangaroo & Bovine 1.3mm Hide', 'Kevlar Reinforced Stretch Panels', 'Hydrobag Hydration Hump', 'CE Level 2 Triple Armor'],
    popularFor: 'MotoGP / Track Racing, Superbike Clubs, OEM Race Teams'
  }
];

export default function StylesPage({ 
  initialStyle = 'ALL',
  onNavigateHome = () => {}, 
  onNavigateProducts = () => {}, 
  onNavigateInquiry = () => {} 
}) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  useEffect(() => {
    if (initialStyle && initialStyle !== 'ALL') {
      const lower = initialStyle.toLowerCase();
      if (lower.includes('biker') || lower.includes('moto') || lower.includes('rider')) setActiveFilter('biker-moto');
      else if (lower.includes('racer') || lower.includes('cafe')) setActiveFilter('cafe-racer');
      else if (lower.includes('aviator') || lower.includes('bomber') || lower.includes('shearling')) setActiveFilter('aviator-bomber');
      else if (lower.includes('suede') || lower.includes('harrington')) setActiveFilter('suede-overshirts');
      else if (lower.includes('blazer') || lower.includes('trench')) setActiveFilter('blazers-trench');
      else if (lower.includes('race') || lower.includes('suit')) setActiveFilter('racing-suits');
      else setActiveFilter('ALL');
    } else {
      setActiveFilter('ALL');
    }
  }, [initialStyle]);

  const handleFilterClick = (filterKey) => {
    setActiveFilter(filterKey);
    window.location.hash = filterKey !== 'ALL' ? `styles?style=${filterKey}` : 'styles';
  };

  const displayedStyles = activeFilter === 'ALL' 
    ? leatherStylesData 
    : leatherStylesData.filter(s => s.id === activeFilter);

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen text-[var(--secondary)] py-8">
      <div className="w-[92%] mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[var(--secondary)]/60">
          <button onClick={onNavigateHome} className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft size={12} /> HOME
          </button>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">LEATHER STYLES & SILHOUETTES</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[var(--secondary)] rounded-[3px] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
              <Compass size={14} /> ATELIER SILHOUETTE ARCHIVE
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">
              SIGNATURE LEATHER STYLES & GRAINS
            </h1>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl">
              Explore Leader Corporation’s iconic leather silhouettes — from CE-armored track racing armor to velvety soft goat suede overshirts and hand-burnished vintage cafe racers.
            </p>
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-[3px] border border-gray-200 shadow-sm overflow-x-auto no-scrollbar">
          {[
            { id: 'ALL', label: 'All Silhouettes' },
            { id: 'biker-moto', label: 'Biker & Motorcycle' },
            { id: 'cafe-racer', label: 'Cafe Racer' },
            { id: 'aviator-bomber', label: 'Aviator & Bomber' },
            { id: 'suede-overshirts', label: 'Suede & Harrington' },
            { id: 'blazers-trench', label: 'Blazers & Trench' },
            { id: 'racing-suits', label: 'Track Racing Suits' }
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => handleFilterClick(pill.id)}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === pill.id
                  ? 'bg-[var(--secondary)] text-white shadow-sm'
                  : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Style Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedStyles.map((style) => (
            <div
              key={style.id}
              className="bg-white border border-[var(--secondary)]/10 rounded-[3px] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group"
            >
              {/* Image with Tag */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={style.image} 
                  alt={style.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                    {style.tagline}
                  </span>
                  <h3 className="text-base font-black uppercase">{style.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[var(--secondary)]/75 leading-relaxed">
                  {style.description}
                </p>

                {/* Key Spec Badges */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--secondary)]/60 block">
                    Signature Craftsmanship:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {style.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[10.5px] text-[var(--secondary)]/90 font-medium">
                        <CheckCircle size={11} className="text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => onNavigateProducts(style.categoryFilter)}
                    className="flex-1 py-2.5 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Catalog</span>
                    <ArrowRight size={13} />
                  </button>
                  <button
                    onClick={() => onNavigateInquiry(style.title)}
                    className="px-3 py-2.5 bg-gray-100 hover:bg-gray-200 text-[var(--secondary)] text-xs font-bold uppercase rounded-[3px] transition-colors cursor-pointer"
                    title="Inquire Wholesale or Custom"
                  >
                    B2B OEM
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leather Finishes & Hide Guide Banner */}
        <div className="bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-[3px] bg-[var(--secondary)] text-white flex items-center justify-center">
              <Layers size={16} />
            </div>
            <div>
              <span className="text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-wider block">
                IN-HOUSE TANNERY GRADES
              </span>
              <h3 className="text-base sm:text-lg font-black uppercase text-[var(--secondary)]">
                Available Leather Hides & Finishing Options
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {leatherTypes.map((hide, idx) => (
              <div 
                key={idx} 
                className="p-3 bg-gray-50 rounded-[3px] border border-gray-200 text-center hover:border-[var(--accent)] transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] mx-auto mb-2" />
                <h5 className="text-xs font-bold uppercase text-[var(--secondary)] mb-1">{hide}</h5>
                <span className="text-[10px] text-gray-500 block">Drum Dyed • 100% Genuine</span>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-6 p-4 bg-gradient-to-r from-[var(--secondary)] to-[#1f1b63] rounded-[3px] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xs sm:text-sm font-black uppercase">Looking for Bespoke Pattern Engineering or Private Label?</h4>
              <p className="text-[11px] text-white/70">Our master patternmakers cut custom templates for moto brands and bespoke ateliers.</p>
            </div>
            <button
              onClick={() => onNavigateInquiry('Custom Leather Pattern Engineering')}
              className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition-all cursor-pointer whitespace-nowrap"
            >
              Start Custom Inquiry &rarr;
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
