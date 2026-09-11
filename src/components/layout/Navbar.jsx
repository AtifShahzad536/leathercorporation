import React, { useState } from 'react';
import { Search, Globe, ChevronDown, Menu, ShoppingBag, Sparkles, Building2, BookOpen } from 'lucide-react';
import MobileMenu from './MobileMenu';
import SearchOverlay from './SearchOverlay';
import NavbarDropdown from './NavbarDropdown';
import { useCart } from '../../context/CartContext';

const Navbar = ({ onNavigate = () => {} }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, setCartOpen } = useCart();

  const drawerData = {
    PRODUCTS: {
      categories: [
        {
          name: "MEN'S JACKETS",
          subCategories: [
            { name: 'CLASSIC BIKER JACKETS', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=150&auto=format&fit=crop' },
            { name: 'CAFE RACER JACKETS', image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=150&auto=format&fit=crop' },
            { name: 'BOMBER & FLIGHT JACKETS', image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=150&auto=format&fit=crop' },
            { name: 'SUEDE & HARINGTON', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=150&auto=format&fit=crop' },
            { name: 'TRENCH & OVERCOATS', image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: "WOMEN'S JACKETS",
          subCategories: [
            { name: 'MOTO & BIKER JACKETS', image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=150&auto=format&fit=crop' },
            { name: 'CROPPED LEATHER JACKETS', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=150&auto=format&fit=crop' },
            { name: 'SHEARLING & AVIATOR', image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=150&auto=format&fit=crop' },
            { name: 'LEATHER BLAZERS', image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'MOTORCYCLE & RACING',
          subCategories: [
            { name: 'CE-ARMORED BIKER JACKETS', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=150&auto=format&fit=crop' },
            { name: 'RACING LEATHER SUITS', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=150&auto=format&fit=crop' },
            { name: 'RIDING LEATHER VESTS', image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'LEATHER FINISHES',
          subCategories: [
            { name: 'FULL GRAIN COWHIDE', image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=150&auto=format&fit=crop' },
            { name: 'LAMBSKIN NAPPA', image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=150&auto=format&fit=crop' },
            { name: 'DISTRESSED VINTAGE', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'CUSTOM & BESPOKE',
          subCategories: [
            { name: 'MADE TO MEASURE', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=150&auto=format&fit=crop' },
            { name: 'OEM & PRIVATE LABEL', image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=150&auto=format&fit=crop' }
          ]
        }
      ],
      bottomImage: {
        src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
        alt: 'Leader Leather Jackets',
        badge: 'NEW',
        title: 'HERITAGE 2025 COLLECTION'
      }
    },
    'LEATHER STYLES': {
      categories: [
        {
          name: 'BIKER & MOTO',
          subCategories: [
            { name: 'DOUBLE RIDER JACKETS', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=150&auto=format&fit=crop' },
            { name: 'CAFE RACER JACKETS', image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=150&auto=format&fit=crop' },
            { name: 'DIAMOND QUILTED', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=150&auto=format&fit=crop' },
            { name: 'RETRO DISTRESSED', image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'AVIATOR & BOMBER',
          subCategories: [
            { name: 'B3 SHEEPSKIN BOMBER', image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=150&auto=format&fit=crop' },
            { name: 'MA-1 LEATHER BOMBER', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=150&auto=format&fit=crop' },
            { name: 'A2 FLIGHT JACKET', image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'CASUAL & SUEDE',
          subCategories: [
            { name: 'GOAT SUEDE OVERSHIRTS', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=150&auto=format&fit=crop' },
            { name: 'LEATHER BLAZERS', image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=150&auto=format&fit=crop' },
            { name: 'TRENCH & DUSTER COATS', image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'ACCESSORIES',
          subCategories: [
            { name: 'LEATHER RIDING GLOVES', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=150&auto=format&fit=crop' },
            { name: 'LEATHER BAGS & DUFFLES', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=150&auto=format&fit=crop' }
          ]
        }
      ],
      bottomImage: [
        {
          src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
          alt: 'Biker Jackets',
          badge: '',
          title: 'Biker Series'
        },
        {
          src: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=800&auto=format&fit=crop',
          alt: 'Bomber & Flight',
          badge: '',
          title: 'Bomber Series'
        }
      ]
    },
    EXPLORE: {
      categories: [
        'LEATHER CARE GUIDE', 'SIZE & FIT GUIDE', 'LEATHER GRADES & GRAINS', 'LEADER LEATHER LAB', 'LOOKBOOK 2025'
      ],
      hideChevrons: true,
      bottomImage: {
        src: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=800&auto=format&fit=crop',
        alt: 'Leather Craftsmanship',
        isRawImage: true
      }
    },
    'ABOUT US': {
      categories: [
        'ABOUT LEADER CORPORATION', 'OUR TANNERY & CRAFT', 'LWG SUSTAINABILITY', 'GLOBAL EXPORTS',
        'PRESS & NEWS', 'ETHICAL SOURCING', 'CONTACT US'
      ],
      hideChevrons: true,
      bottomImage: {
        src: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15f?q=80&w=800&auto=format&fit=crop',
        alt: 'Sustainable Leather Tanning',
        title: 'Sustainable Leather Tanning',
        isRawImage: true,
        noRotate: true
      }
    },
    'PARTNER WITH US': {
      categories: [
        {
          name: 'OEM & PRIVATE LABEL',
          subCategories: [
            { name: 'Custom Jacket Manufacturing' },
            { name: 'Motorcycle Brand Apparel' },
            { name: 'Wholesale & Export Supply' }
          ]
        },
        'BESPOKE & CLUB ORDERS'
      ],
      bottomImage: {
        src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
        alt: 'OEM Manufacturing',
        title: 'GLOBAL OEM PARTNERSHIP'
      }
    }
  };

  const navLinks = [
    'PRODUCTS',
    'LEATHER STYLES',
    'EXPLORE',
    'PARTNER WITH US',
    'COMPLIANCE',
    'CERTIFICATION',
    'ABOUT US'
  ];

  const handleNavLinkClick = (link) => {
    if (link === 'PRODUCTS') {
      onNavigate('products', 'ALL JACKETS');
    } else if (link === 'LEATHER STYLES') {
      onNavigate('styles');
    } else if (link === 'EXPLORE') {
      onNavigate('explore');
    } else if (link === 'PARTNER WITH US') {
      onNavigate('inquiry');
    } else if (link === 'COMPLIANCE') {
      onNavigate('compliance');
    } else if (link === 'CERTIFICATION') {
      onNavigate('certification');
    } else if (link === 'ABOUT US') {
      onNavigate('about');
    }
    setActiveDropdown(null);
  };

  return (
    <>
      {/* ── TOP UTILITY & ANNOUNCEMENT BAR (Matches theme) ───────────────── */}
      <div className="w-full bg-[var(--secondary)] text-white border-b border-white/10 py-1.5 z-50">
        <div className="w-[92%] mx-auto flex items-center justify-between gap-4">
          
          {/* Left Tagline */}
          <div className="flex items-center gap-2 text-[9.5px] sm:text-[10.5px] font-semibold tracking-wider uppercase text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse flex-shrink-0" />
            <span className="hidden sm:inline">EST. 1947 • MASTER LEATHER APPAREL & BESPOKE ATELIER</span>
            <span className="sm:hidden">LEADER LEATHER ATELIER</span>
          </div>

          {/* Right Action Buttons: Catalog & B2B Quote */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Catalog Button in Topbar */}
            <button
              onClick={() => onNavigate('products')}
              className="px-2.5 py-1 bg-white/10 hover:bg-[var(--accent)] text-white text-[9.5px] sm:text-[10.5px] font-bold tracking-wider uppercase rounded-[3px] transition-all flex items-center gap-1 cursor-pointer border border-white/15"
            >
              <BookOpen size={11} />
              <span>Catalog</span>
            </button>

            {/* B2B Quote / Wholesale Button in Topbar */}
            <button
              onClick={() => onNavigate('inquiry')}
              className="px-2.5 py-1 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white text-[9.5px] sm:text-[10.5px] font-bold tracking-wider uppercase rounded-[3px] transition-all flex items-center gap-1 cursor-pointer shadow-sm"
            >
              <Building2 size={11} />
              <span>B2B Quote</span>
            </button>
          </div>

        </div>
      </div>

      {/* ── MAIN STICKY NAVIGATION BAR ───────────────────────────────────── */}
      <nav className="sticky top-0 z-50 w-full bg-[var(--primary)]/95 backdrop-blur-sm border-b border-[var(--secondary)]/10">
        <div className="w-[92%] mx-auto h-16 md:h-20 flex items-center justify-between">

          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group cursor-pointer flex-shrink-0"
          >
            <div className="relative w-9 h-9 md:w-11 md:h-11 flex items-center justify-center overflow-hidden">
              <img
                src="/logo_silverstar1.png"
                alt="Leader Corporation"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Desktop Navigation Links — hidden below lg */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 h-full flex-nowrap">
            {navLinks.map((link, idx) => (
              <div
                key={link}
                className="relative flex items-center h-full gap-1 cursor-pointer group flex-shrink-0"
                onMouseEnter={() => {
                  if (drawerData[link]) {
                    setActiveDropdown(link);
                  } else {
                    setActiveDropdown(null);
                  }
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div 
                  className="flex items-center gap-1 h-full whitespace-nowrap"
                  onClick={() => handleNavLinkClick(link)}
                >
                  <span className={`nav-link text-[10px] xl:text-[11px] font-semibold tracking-[0.08em] xl:tracking-[0.12em] whitespace-nowrap transition-all duration-300 ${activeDropdown === link ? 'text-[var(--accent)] font-bold' : 'text-[var(--secondary)]'}`}>
                    {link}
                  </span>
                  {drawerData[link] && (
                    <ChevronDown
                      size={13}
                      className={`flex-shrink-0 transition-transform duration-300 ${activeDropdown === link ? 'rotate-180 text-[var(--accent)]' : 'group-hover:rotate-180 text-[var(--secondary)]'}`}
                    />
                  )}
                </div>

                {/* Dropdown specific to this link */}
                <NavbarDropdown
                  isOpen={activeDropdown === link}
                  activeLink={link}
                  data={drawerData[link]}
                  onClose={() => setActiveDropdown(null)}
                  onSelectCategory={(catName) => {
                    if (link === 'PARTNER WITH US') {
                      onNavigate('inquiry', catName);
                    } else if (link === 'EXPLORE') {
                      onNavigate('explore', catName);
                    } else if (link === 'ABOUT US') {
                      onNavigate('about', catName);
                    } else if (link === 'LEATHER STYLES') {
                      onNavigate('styles', catName);
                    } else {
                      onNavigate('products', catName);
                    }
                    setActiveDropdown(null);
                  }}
                  alignRight={idx >= navLinks.length - 3}
                />
              </div>
            ))}
          </div>

          {/* Right Section: International, Search & Cart */}
          <div className="flex items-center gap-3 md:gap-4 lg:gap-5 flex-shrink-0">
            {/* Language — desktop only */}
            <div className="hidden lg:flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
              <div className="w-5 h-5 rounded-[3px] overflow-hidden flex items-center justify-center bg-blue-600">
                <Globe size={14} className="text-white" />
              </div>
              <span className="text-[13px] font-semibold flex items-center gap-1 text-[var(--secondary)]">
                International <ChevronDown size={12} />
              </span>
            </div>

            {/* Search Icon */}
            <button
              id="search-toggle"
              className="p-2 hover:bg-gray-100 rounded-[3px] transition-colors cursor-pointer"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
            >
              <Search size={20} strokeWidth={1.5} className="md:w-[22px] md:h-[22px] text-[var(--secondary)]" />
            </button>

            {/* Shopping Cart Button with live Badge */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-[3px] transition-colors cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} className="md:w-[22px] md:h-[22px] text-[var(--secondary)]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--accent)] text-white text-[9px] font-black rounded-full flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger for mobile */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-[3px] hover:bg-gray-100 transition-colors gap-[5px] cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.8} className="text-[var(--secondary)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / Tablet Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        drawerData={drawerData}
        onNavigate={(page, cat) => {
          onNavigate(page, cat);
          setMobileMenuOpen(false);
        }}
      />

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectSearch={(term) => {
          onNavigate('products', 'ALL JACKETS', term);
          setSearchOpen(false);
        }}
      />
    </>
  );
};

export default Navbar;
