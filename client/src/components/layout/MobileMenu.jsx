import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronDown, Globe } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────
   SlideAccordion
   Uses scrollHeight (measured on the inner div) so the CSS transition always
   goes from 0 → exact pixel value. Never eases over a large empty range.
   Works on every mobile browser, including old Safari.
──────────────────────────────────────────────────────────────────────────*/
const SlideAccordion = ({ isOpen, children, style = {} }) => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    if (isOpen) {
      const h = inner.scrollHeight;
      outer.style.height = h + 'px';
      
      // Once transition finishes, set height -> auto so nested accordions can grow
      const timer = setTimeout(() => {
        if (outer.style.height !== '0px') {
          outer.style.height = 'auto';
        }
      }, 380);
      return () => clearTimeout(timer);
    } else {
      // Snap current live height → 0 so the transition plays even mid-animation
      outer.style.height = outer.offsetHeight + 'px';
      // Force reflow so the browser registers the "from" value
      void outer.offsetHeight; // eslint-disable-line
      outer.style.height = '0px';
    }
  }, [isOpen]);

  return (
    <div
      ref={outerRef}
      style={{
        overflow: 'hidden',
        height: 0,
        transition: 'height 380ms cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'height',
        ...style,
      }}
    >
      <div ref={innerRef} style={{ opacity: 1 }}>
        {children}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────
   NavItem — one top-level nav link + its category list
──────────────────────────────────────────────────────────────────────────*/
const NavItem = ({ link, data, isExpanded, onToggle, linkIdx, isMenuOpen, onNavigate }) => {
  const cats = data?.categories || [];
  const hasSubs = !!data;

  const handleClick = () => {
    if (hasSubs) {
      onToggle(link);
    } else {
      if (link === 'PRODUCTS') {
        onNavigate('products', 'ALL JACKETS');
      } else if (link === 'LEATHER STYLES') {
        onNavigate('styles');
      } else if (link === 'EXPLORE') {
        onNavigate('explore');
      } else if (link === 'PARTNER WITH US') {
        onNavigate('inquiry');
      } else if (link === 'REGISTER CLUB') {
        onNavigate('register-club');
      } else if (link === 'COMPLIANCE') {
        onNavigate('compliance');
      } else if (link === 'CERTIFICATION') {
        onNavigate('certification');
      } else if (link === 'ABOUT US') {
        onNavigate('about');
      }
    }
  };

  return (
    <li
      style={{
        borderBottom: '1px solid var(--secondary-light, #f3f4f6)',
        opacity: isMenuOpen ? 1 : 0,
        transform: isMenuOpen ? 'translateY(0)' : 'translateY(14px)',
        transition: `opacity 360ms ease ${60 + linkIdx * 45}ms,
                     transform 360ms cubic-bezier(0.4,0,0.2,1) ${60 + linkIdx * 45}ms`,
      }}
    >
      {/* Top-level button */}
      <button
        onClick={handleClick}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '15px 0',
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          fontSize: 12.5, fontWeight: 700,
          letterSpacing: '0.13em', color: 'var(--secondary)',
        }}>
          {link}
        </span>
        {hasSubs && (
          <ChevronDown
            size={17}
            strokeWidth={1.8}
            style={{
              color: 'var(--secondary)', opacity: 0.3, flexShrink: 0,
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 360ms cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        )}
      </button>

      {/* Level-1 accordion (category list) */}
      {hasSubs && (
        <SlideAccordion isOpen={isExpanded}>
          <CategoryList
            cats={cats}
            linkKey={link}
            onNavigate={onNavigate}
          />
        </SlideAccordion>
      )}
    </li>
  );
};

/* ─────────────────────────────────────────────────────────────────────────
   CategoryList — list of categories under a nav item
──────────────────────────────────────────────────────────────────────────*/
const CategoryList = ({ cats, linkKey, onNavigate }) => {
  const [expandedCat, setExpandedCat] = useState(null);

  const toggleCat = useCallback((key) => {
    setExpandedCat(prev => prev === key ? null : key);
  }, []);

  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 12px 0' }}>
      {cats.map((cat, idx) => {
        const isObj = typeof cat === 'object';
        const catName = isObj ? cat.name : cat;
        const subCats = isObj && cat.subCategories ? cat.subCategories : [];
        const catKey = `${linkKey}-${catName}`;
        const isCatOpen = expandedCat === catKey;

        return (
          <li key={idx} style={{ borderLeft: '2px solid var(--secondary)', marginLeft: 4 }}>
            {subCats.length > 0 ? (
              <>
                {/* Category button */}
                <button
                  onClick={() => toggleCat(catKey)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 4px 10px 16px',
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontSize: 12, fontWeight: 600,
                    letterSpacing: '0.07em', color: 'var(--secondary)',
                  }}>
                    {catName}
                  </span>
                  <ChevronDown
                    size={13}
                    strokeWidth={2}
                    style={{
                      color: isCatOpen ? 'var(--accent)' : 'var(--secondary)', opacity: isCatOpen ? 1 : 0.2, flexShrink: 0,
                      transform: isCatOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 320ms cubic-bezier(0.4,0,0.2,1), color 200ms',
                    }}
                  />
                </button>

                {/* Level-2 accordion (sub-categories) */}
                <SlideAccordion isOpen={isCatOpen} style={{ marginLeft: 16 }}>
                  <SubCatList subCats={subCats} onNavigate={onNavigate} />
                </SlideAccordion>
              </>
            ) : (
              /* Plain category (no sub-items) */
              <div 
                onClick={() => {
                  if (linkKey === 'EXPLORE') {
                    onNavigate('explore', catName);
                  } else if (linkKey === 'ABOUT US') {
                    onNavigate('about', catName);
                  } else if (linkKey === 'PARTNER WITH US') {
                    onNavigate('inquiry', catName);
                  } else if (linkKey === 'LEATHER STYLES') {
                    onNavigate('styles', catName);
                  } else {
                    onNavigate('products', catName);
                  }
                }}
                style={{ padding: '10px 0 10px 16px', cursor: 'pointer' }}
              >
                <span style={{
                  fontSize: 12, fontWeight: 500,
                  letterSpacing: '0.07em', color: 'var(--secondary)',
                }}>
                  {catName}
                </span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

/* ─────────────────────────────────────────────────────────────────────────
   SubCatList — the innermost list (e.g. FOOTBALLS, HANDBALLS inside BALLS)
──────────────────────────────────────────────────────────────────────────*/
const SubCatList = ({ subCats, onNavigate }) => (
  <ul style={{ listStyle: 'none', margin: 0, padding: '2px 0 8px 0' }}>
    {subCats.map((sub, si) => (
      <li
        key={si}
        onClick={() => onNavigate('products', sub.name)}
        style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '7px 0 7px 16px',
          borderLeft: '1px solid var(--secondary)',
          cursor: 'pointer',
        }}
      >
        {sub.image && (
          <div style={{
            width: 30, height: 30, flexShrink: 0,
            borderRadius: 3, overflow: 'hidden', background: '#f9fafb',
          }}>
            <img
              src={sub.image} alt="HAMLO SPORTS Custom Sport Subcategory" loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}
        <span style={{
          fontSize: 11.5, fontWeight: 500,
          letterSpacing: '0.06em', color: 'var(--secondary)', opacity: 0.6,
        }}>
          {sub.name}
        </span>
      </li>
    ))}
  </ul>
);

/* ─────────────────────────────────────────────────────────────────────────
   MobileMenu
──────────────────────────────────────────────────────────────────────────*/
const MobileMenu = ({ isOpen, onClose, navLinks, drawerData, directSports = [], onNavigate = () => {} }) => {
  const [expandedLink, setExpandedLink] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { if (isOpen) setMounted(true); }, [isOpen]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleLink = useCallback((link) => {
    setExpandedLink(prev => prev === link ? null : link);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* ── Backdrop (High z-index to overlay sticky navbars) ── */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9998,
          background: 'rgba(30, 27, 110, 0.65)',
          opacity: isOpen ? 1 : 0,
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 320ms ease',
        }}
      />

      {/* ── Full-Height Drawer Sheet (zIndex 9999 renders cleanly above all sticky bars) ── */}
      <div
        style={{
          position: 'fixed', top: 0, bottom: 0, left: 0, right: 0,
          zIndex: 9999,
          height: '100dvh',
          background: 'var(--primary, #FAF9F6)',
          boxShadow: '0 0 50px rgba(0,0,0,0.3)',
          display: 'flex', flexDirection: 'column',
          transform: isOpen ? 'translateY(0%)' : 'translateY(100%)',
          transition: 'transform 420ms cubic-bezier(0.32, 0.72, 0, 1)',
          willChange: 'transform',
          overscrollBehavior: 'contain',
        }}
      >
        {/* Safe-Area Header: Logo + Brand + Close Button */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: 'calc(14px + env(safe-area-inset-top, 0px)) 20px 14px',
          background: 'var(--primary, #FAF9F6)',
          borderBottom: '1px solid var(--secondary-light, #f3f4f6)',
          flexShrink: 0,
        }}>
          <div 
            onClick={() => { onNavigate('home'); onClose(); }}
            style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer' }}
          >
            <div style={{ position: 'relative', width: 32, height: 32, flexShrink: 0 }}>
              <img
                src="/logo_silverstar.png"
                alt="HAMLO SPORTS"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 16, fontWeight: 900, letterSpacing: '-0.02em', color: 'var(--secondary, #1E1B6E)', lineHeight: 1 }}>
                HAMLO SPORTS
              </span>
              <span style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent, #F26522)', textTransform: 'uppercase', marginTop: 3 }}>
                SIALKOT FACTORY DIRECT
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              width: 38, height: 38, borderRadius: 6,
              background: 'var(--secondary, #1E1B6E)', color: '#fff', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 180ms',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(30, 27, 110, 0.2)'
            }}
          >
            <X size={20} strokeWidth={2} style={{ color: '#fff' }} />
          </button>
        </div>

        {/* Quick Sports Categories Scroll Strip */}
        {directSports.length > 0 && (
          <div style={{
            background: '#ffffff',
            borderBottom: '1px solid #f3f4f6',
            padding: '8px 16px',
            overflowX: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexShrink: 0,
            WebkitOverflowScrolling: 'touch'
          }}>
            {directSports.map((s) => (
              <button
                key={s.name}
                onClick={() => {
                  onNavigate('sports-hub', s.name);
                  onClose();
                }}
                style={{
                  padding: '6px 12px',
                  borderRadius: 4,
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: 'var(--secondary-light, #f8f9fa)',
                  color: 'var(--secondary, #1E1B6E)',
                  border: '1px solid #e5e7eb',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        {/* Scrollable list */}
        <div
          style={{
            overflowY: 'auto', flex: 1,
            padding: '8px 20px 90px',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link, idx) => (
              <NavItem
                key={link}
                link={link}
                data={drawerData[link]}
                isExpanded={expandedLink === link}
                onToggle={toggleLink}
                linkIdx={idx}
                isMenuOpen={isOpen}
                onNavigate={onNavigate}
              />
            ))}
          </ul>

          {/* Quick B2B CTA button inside drawer */}
          <div style={{ marginTop: 24 }}>
            <button
              onClick={() => { onNavigate('inquiry'); onClose(); }}
              style={{
                width: '100%',
                padding: '14px 20px',
                background: 'var(--accent, #F26522)',
                color: '#ffffff',
                border: 'none',
                borderRadius: 5,
                fontWeight: 900,
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(242, 101, 34, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8
              }}
            >
              Request Free 3D Mockup & Quote
            </button>
          </div>

          {/* Language & Export Info */}
          <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <div style={{
                width: 22, height: 22, borderRadius: 4, background: '#1E1B6E',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Globe size={12} color="#fff" />
              </div>
              <span style={{
                fontSize: 11.5, fontWeight: 600,
                letterSpacing: '0.07em', color: '#4b5563',
                display: 'flex', alignItems: 'center', gap: 3,
              }}>
                International (USD $) <ChevronDown size={11} />
              </span>
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', letterSpacing: '0.1em' }}>
              GLOBAL DDP
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
