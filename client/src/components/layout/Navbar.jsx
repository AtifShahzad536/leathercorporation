import React, { useState } from 'react';
import { Search, Globe, ChevronDown, Menu, ShoppingBag, Sparkles, Building2, Phone, Mail } from 'lucide-react';
import MobileMenu from './MobileMenu';
import SearchOverlay from './SearchOverlay';
import NavbarDropdown from './NavbarDropdown';
import { useCart } from '../../context/CartContext';

const Navbar = ({ onNavigate = () => {} }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, setCartOpen } = useCart();

  // 12 Direct sports disciplines shown right underneath the header
  const directSports = [
    { name: 'BASEBALL', label: 'Baseball' },
    { name: 'BASKETBALL', label: 'Basketball' },
    { name: 'FOOTBALL', label: 'Football' },
    { name: 'FLAG FOOTBALL', label: 'Flag Football' },
    { name: 'SOCCER', label: 'Soccer' },
    { name: 'ESPORTS', label: 'Esports' },
    { name: 'ICE HOCKEY', label: 'Ice Hockey' },
    { name: 'LACROSSE', label: 'Lacrosse' },
    { name: 'RUGBY', label: 'Rugby' },
    { name: 'SOFTBALL', label: 'Softball' },
    { name: 'VOLLEYBALL', label: 'Volleyball' },
    { name: 'WRESTLING', label: 'Wrestling' },
    { name: 'CRICKET', label: 'Cricket' }
  ];

  const drawerData = {
    'STYLES': {
      categories: [
        {
          name: 'TOP TEAM SPORTS',
          subCategories: [
            { name: 'BASEBALL JERSEYS', image: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=150&auto=format&fit=crop' },
            { name: 'BASKETBALL REVERSIBLES', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=150&auto=format&fit=crop' },
            { name: 'FOOTBALL JERSEYS', image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'ATHLETIC CUTS',
          subCategories: [
            { name: 'PRO GAMER JERSEYS', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=150&auto=format&fit=crop' },
            { name: 'AIR-KNIT SWEATERS', image: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=150&auto=format&fit=crop' },
            { name: 'WRESTLING SINGLETS', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'WARMUPS & OUTERWEAR',
          subCategories: [
            { name: 'TRACKSUITS & HOODIES', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=150&auto=format&fit=crop' },
            { name: 'CAGE JACKETS', image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'ACCESSORIES',
          subCategories: [
            { name: 'SUBLIMATED SOCKS', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=150&auto=format&fit=crop' },
            { name: 'TEAM GEAR BAGS', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=150&auto=format&fit=crop' }
          ]
        }
      ],
      bottomImage: [
        {
          src: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=800&auto=format&fit=crop',
          alt: 'Baseball Series',
          badge: '',
          title: 'Baseball Series'
        },
        {
          src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
          alt: 'Basketball Series',
          badge: '',
          title: 'Basketball Series'
        }
      ]
    },
    EXPLORE: {
      categories: [
        'FABRIC SPECIFICATIONS', 'ATHLETIC SIZE GUIDE', 'SUBLIMATION TECH', 'CUSTOM EMBROIDERY', 'LOOKBOOK 2026'
      ],
      hideChevrons: true,
      bottomImage: {
        src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
        alt: 'Sportswear Craftsmanship',
        isRawImage: true
      }
    },
    'ABOUT US': {
      categories: [
        'ABOUT OUR FACTORY', 'SUBLIMATION LAB', 'OEKO-TEX CERTIFIED', 'GLOBAL EXPORTS',
        'PRESS & NEWS', 'FACTORY ETHICS', 'CONTACT US'
      ],
      hideChevrons: true,
      bottomImage: {
        src: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15f?q=80&w=800&auto=format&fit=crop',
        alt: 'Sustainable Manufacturing',
        title: 'Eco-Friendly Manufacturing',
        isRawImage: true,
        noRotate: true
      }
    },
    'PARTNER WITH US': {
      categories: [
        {
          name: 'OEM & PRIVATE LABEL',
          subCategories: [
            { name: 'Custom Uniform Manufacturing' },
            { name: 'Sports League Apparel' },
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

  // PRODUCTS removed, STYLES kept in header!
  const navLinks = [
    '3D BUILDER',
    'REGISTER CLUB',
    'STYLES',
    'EXPLORE',
    'PARTNER WITH US',
    'COMPLIANCE',
    'CERTIFICATION',
    'ABOUT US'
  ];

  const getSportHref = (sportName) => {
    switch (sportName) {
      case 'BASEBALL': return '/custom-baseball-uniforms/';
      case 'BASKETBALL': return '/custom-basketball-uniforms/';
      case 'FOOTBALL': return '/custom-football-uniforms/';
      case 'FLAG FOOTBALL': return '/custom-flag-football-uniforms/';
      case 'SOCCER': return '/custom-soccer-uniforms/';
      case 'ESPORTS': return '/custom-esports-apparel/';
      case 'ICE HOCKEY': return '/custom-ice-hockey-uniforms/';
      case 'LACROSSE': return '/custom-lacrosse-uniforms/';
      case 'RUGBY': return '/custom-rugby-uniforms/';
      case 'SOFTBALL': return '/custom-softball-uniforms/';
      case 'VOLLEYBALL': return '/custom-volleyball-uniforms/';
      case 'WRESTLING': return '/custom-wrestling-singlets/';
      case 'CRICKET': return '/custom-cricket-uniforms/';
      default: return '/';
    }
  };

  const getNavLinkHref = (link) => {
    switch (link) {
      case '3D BUILDER': return '/builder/';
      case 'REGISTER CLUB': return '/register-club/';
      case 'STYLES': return '/styles/';
      case 'EXPLORE': return '/explore/';
      case 'PARTNER WITH US': return '/request-a-quote/';
      case 'COMPLIANCE': return '/compliance/';
      case 'CERTIFICATION': return '/certification/';
      case 'ABOUT US': return '/about-us/';
      default: return '/';
    }
  };

  const handleNavLinkClick = (link) => {
    if (link === '3D BUILDER') {
      onNavigate('builder');
    } else if (link === 'REGISTER CLUB') {
      onNavigate('register-club');
    } else if (link === 'STYLES') {
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
      {/* ── 1. TOP UTILITY BAR (Edge-to-Edge full width alignment) ─────────── */}
      <div className="w-full bg-[var(--secondary)] text-white border-b border-white/10 py-1.5 z-[100] relative overflow-x-hidden">
        <div className="w-[96%] max-w-[1800px] mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left Tagline */}
          <div className="flex items-center gap-2 text-[9px] sm:text-[10.5px] font-semibold tracking-wider uppercase text-white/80 whitespace-nowrap min-w-0 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse flex-shrink-0" />
            <span className="hidden sm:inline">CUSTOM SPORTSWEAR & ATHLETIC UNIFORMS MANUFACTURER • FACTORY DIRECT</span>
            <span className="sm:hidden truncate">FACTORY DIRECT SPORTSWEAR</span>
          </div>

          {/* Right Utility Links */}
          <div className="flex items-center gap-2.5 sm:gap-5 text-[9px] sm:text-[10.5px] tracking-wider uppercase font-medium text-white/70 whitespace-nowrap flex-shrink-0">
            <a
              href="/request-a-quote/"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                  e.preventDefault();
                  onNavigate('inquiry');
                }
              }}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <Sparkles size={11} className="text-[var(--accent)]" />
              <span>Free 3D Mockup</span>
            </a>
            <div className="w-[1px] h-3 bg-white/20 hidden sm:block" />
            <a
              href="/request-a-quote/"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                  e.preventDefault();
                  onNavigate('inquiry');
                }
              }}
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Building2 size={11} className="text-[var(--accent)]" />
              <span className="hidden md:inline">B2B Team Quotes</span>
              <span className="md:hidden">B2B Quotes</span>
            </a>
            <div className="w-[1px] h-3 bg-white/20 hidden md:block" />
            <a
              href="https://wa.me/923105464116"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-white/90"
              title="WhatsApp Direct Desk"
            >
              <Phone size={11} className="text-[var(--accent)]" />
              <span>+92 310 5464116</span>
            </a>
            <div className="w-[1px] h-3 bg-white/20 hidden lg:block" />
            <a
              href="mailto:sale@hamlosportswear.site"
              className="hidden lg:flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-white/90"
              title="Official Sales Desk"
            >
              <Mail size={11} className="text-[var(--accent)]" />
              <span>sale@hamlosportswear.site</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── 2. MAIN HEADER (Edge-to-edge max width) ───────────────────── */}
      <nav 
        className="w-full bg-[var(--primary)] text-[var(--secondary)] border-b border-[var(--secondary)]/10 sticky top-0 z-[90]"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="w-[96%] max-w-[1800px] mx-auto flex items-center justify-between h-16 md:h-20 gap-2 xl:gap-4">
          
          {/* Brand Logo & Name */}
          <a 
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group flex-shrink-0"
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                e.preventDefault();
                onNavigate('home');
              }
            }}
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 relative flex-shrink-0">
              <img
                src="/logo_silverstar.png"
                alt="HAMLO SPORTS"
                width="48"
                height="48"
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-black text-sm sm:text-base xl:text-lg text-[var(--secondary)] tracking-tight leading-none uppercase">
                HAMLO
              </span>
              <span className="text-[7.5px] sm:text-[8.5px] font-bold text-[var(--accent)] tracking-[0.25em] uppercase leading-none mt-1">
                SPORTS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links — Compact & Responsive */}
          <div className="hidden lg:flex items-center gap-2 lg:gap-2.5 xl:gap-3.5 2xl:gap-5 h-full flex-nowrap">
            {navLinks.map((link, idx) => (
              <div
                key={link}
                className="relative flex items-center h-full gap-0.5 cursor-pointer group flex-shrink-0"
                onMouseEnter={() => {
                  if (drawerData[link]) {
                    setActiveDropdown(link);
                  } else {
                    setActiveDropdown(null);
                  }
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={getNavLinkHref(link)}
                  className="flex items-center gap-0.5 xl:gap-1 h-full whitespace-nowrap"
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                      e.preventDefault();
                      handleNavLinkClick(link);
                    }
                  }}
                >
                  <span className={`nav-link text-[10px] xl:text-[11px] font-bold tracking-tight xl:tracking-wider whitespace-nowrap transition-all duration-300 ${activeDropdown === link ? 'text-[var(--accent)] font-black' : 'text-[var(--secondary)]'}`}>
                    {link}
                  </span>
                  {drawerData[link] && (
                    <ChevronDown
                      size={11}
                      className={`flex-shrink-0 transition-transform duration-300 ${activeDropdown === link ? 'rotate-180 text-[var(--accent)]' : 'group-hover:rotate-180 text-[var(--secondary)]'}`}
                    />
                  )}
                </a>

                {/* Dropdown for link */}
                <NavbarDropdown
                  isOpen={activeDropdown === link}
                  activeLink={link}
                  data={drawerData[link]}
                  onClose={() => setActiveDropdown(null)}
                  onSelectCategory={(catName) => {
                    if (link === 'PARTNER WITH US') onNavigate('inquiry', catName);
                    else if (link === 'EXPLORE') onNavigate('explore', catName);
                    else if (link === 'ABOUT US') onNavigate('about', catName);
                    else if (link === 'STYLES') onNavigate('styles', catName);
                    else onNavigate('styles');
                    setActiveDropdown(null);
                  }}
                  alignRight={idx >= navLinks.length - 2}
                />
              </div>
            ))}
          </div>

          {/* Right Action Icons & Get Quote Button */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 xl:gap-3 flex-shrink-0">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 sm:p-2 rounded-full hover:bg-[var(--secondary)]/5 text-[var(--secondary)] transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>

            {/* Cart Icon with badge */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-1.5 sm:p-2 rounded-full hover:bg-[var(--secondary)]/5 text-[var(--secondary)] transition-colors cursor-pointer"
              aria-label="Inquiry Cart"
            >
              <ShoppingBag size={16} className="sm:w-[18px] sm:h-[18px]" />
              {totalItems > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[var(--accent)] text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>

            {/* GET QUOTE CTA Button */}
            <button
              onClick={() => onNavigate('inquiry')}
              className="hidden sm:inline-flex items-center px-3 py-1.5 xl:px-4 xl:py-2 bg-[var(--accent)] text-white font-bold text-[10px] xl:text-[11px] uppercase tracking-wider rounded-[3px] hover:opacity-90 transition-all shadow-sm flex-shrink-0 cursor-pointer whitespace-nowrap"
            >
              GET QUOTE
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 rounded-[3px] hover:bg-[var(--secondary)]/10 text-[var(--secondary)] cursor-pointer"
              aria-label="Open mobile menu"
            >
              <Menu size={22} />
            </button>
          </div>

        </div>
      </nav>

      {/* ── 3. DIRECT SPORTS & CATEGORIES BAR ── */}
      <div className="w-full bg-white border-b border-[var(--secondary)]/15 shadow-xs z-[80] sticky top-16 md:top-20">
        <div className="w-[96%] max-w-[1800px] mx-auto flex items-center justify-between gap-1 sm:gap-2 py-2 overflow-x-auto no-scrollbar whitespace-nowrap">
          <div className="flex items-center justify-between w-full gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
            {directSports.map((sport) => (
              <a
                key={sport.name}
                href={getSportHref(sport.name)}
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                    e.preventDefault();
                    if (sport.name === 'CRICKET') onNavigate('cricket');
                    else onNavigate('products', sport.name);
                  }
                }}
                className="relative px-1 sm:px-2 py-1.5 text-[9px] sm:text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-[var(--secondary)]/85 hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer flex-shrink-0 group inline-block"
              >
                <span>{sport.label}</span>
                {/* Clean underline on hover instead of orange background */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ────────────────────────────────────────── */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        drawerData={drawerData}
        navLinks={navLinks}
        directSports={directSports}
        onNavigate={(page, param) => {
          onNavigate(page, param);
          setMobileMenuOpen(false);
        }}
      />

      {/* ── SEARCH OVERLAY ─────────────────────────────────────── */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(product) => {
          setSearchOpen(false);
          onNavigate('product-detail', product);
        }}
        onSelectCategory={(sport) => {
          setSearchOpen(false);
          onNavigate('sports-hub', sport);
        }}
        onSelectSearch={(term) => {
          setSearchOpen(false);
          onNavigate('sports-hub', term);
        }}
      />
    </>
  );
};

export default Navbar;
