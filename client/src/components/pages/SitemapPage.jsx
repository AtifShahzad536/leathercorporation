import React, { memo } from 'react';
import SEO from '../common/SEO';
import TrustBar from '../common/TrustBar';
import { fullCatalog296 } from '../../data/fullCatalog296';
import { ArrowLeft, ExternalLink, MapPin, Award, ShieldCheck, Shirt, Compass, FileText, CheckCircle } from 'lucide-react';

const coreCategories = [
  { name: 'Baseball Uniforms', slug: 'custom-baseball-uniforms' },
  { name: 'Basketball Uniforms', slug: 'custom-basketball-uniforms' },
  { name: 'Football Uniforms', slug: 'custom-football-uniforms' },
  { name: 'Soccer Uniforms & Kits', slug: 'custom-soccer-uniforms' },
  { name: 'Esports Apparel', slug: 'custom-esports-apparel' },
  { name: 'Ice Hockey Uniforms', slug: 'custom-ice-hockey-uniforms' },
  { name: 'Lacrosse Uniforms', slug: 'custom-lacrosse-uniforms' },
  { name: 'Rugby Uniforms', slug: 'custom-rugby-uniforms' },
  { name: 'Softball Uniforms', slug: 'custom-softball-uniforms' },
  { name: 'Volleyball Uniforms', slug: 'custom-volleyball-uniforms' },
  { name: 'Wrestling Singlets', slug: 'custom-wrestling-singlets' },
  { name: 'Flag Football Uniforms', slug: 'custom-flag-football-uniforms' },
];

const secondaryCategories = [
  { name: 'Custom Cricket Uniforms', slug: 'custom-cricket-uniforms' },
  { name: 'Custom Tennis Apparel', slug: 'custom-tennis-apparel' },
  { name: 'Custom Field Hockey Uniforms', slug: 'custom-field-hockey-uniforms' },
  { name: 'Custom Sports & Goalkeeper Gloves', slug: 'custom-sports-gloves' },
];

const designAndOrderTools = [
  { name: '3D Interactive Uniform Builder', slug: 'builder' },
  { name: 'Request Free 3D Proof & Quote', slug: 'request-a-quote' },
  { name: 'Register Club for VIP Discounts', slug: 'register-club' },
  { name: 'How Team Ordering Works', slug: 'start-custom-orders' },
  { name: 'Youth & Adult Sizing Chart Guide', slug: 'sizing-chart' },
  { name: 'Sportswear Styles & Apparel Cuts', slug: 'styles' },
  { name: 'Performance Fabrics & Technology', slug: 'explore' },
  { name: 'Free Team Name & Mascot Generator', slug: 'team-name-generator' },
  { name: 'Production Lead Times & Turnaround', slug: 'how-long-do-custom-uniforms-take' },
  { name: 'Custom Team Uniform Portfolio', slug: 'portfolio' },
];

const trustAndCompanyPages = [
  { name: 'About HAMLO SPORTS (Sialkot Factory Heritage)', slug: 'about-us' },
  { name: 'Compliance & Ethical Fair Labor Standards', slug: 'compliance' },
  { name: 'ISO 9001 & OEKO-TEX Standard 100 Certifications', slug: 'certification' },
  { name: 'Customer Reviews & Team Testimonials', slug: 'reviews' },
  { name: 'Verified Client Feedback & Ratings', slug: 'hamco-sports-reviews' },
  { name: 'Contact Our Sialkot Export Desk', slug: 'contact' },
];

const policiesAndLegal = [
  { name: 'US Nationwide Shipping & DDP Air Delivery', slug: 'shipping-policy' },
  { name: '100% Free Remake & Quality Guarantee', slug: 'refund-policy' },
  { name: 'Terms & Conditions of Sale', slug: 'terms-conditions' },
  { name: 'Privacy & Data Protection Policy', slug: 'privacy-policy' },
  { name: 'Legal Disclaimer & Trademarks', slug: 'disclaimer' },
];

const SitemapPage = memo(({ onNavigateHome, onNavigateCategory, onNavigateProduct }) => {
  // Group 296 products by category
  const productsBySport = {};
  coreCategories.forEach(c => {
    productsBySport[c.name] = fullCatalog296.filter(p => p.categorySlug === c.slug);
  });

  return (
    <>
      <SEO
        title="Complete HTML Sitemap & Product Directory"
        description="Comprehensive directory of all custom sports uniforms, sublimated athletic apparel, 3D builder tools, and factory specifications from HAMLO SPORTS Sialkot."
        canonical="/sitemap/"
      />

      <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen py-10 sm:py-16">
        <div className="w-[96%] max-w-[1400px] mx-auto space-y-12">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[var(--secondary)]/60">
            <button onClick={onNavigateHome} className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer">
              <ArrowLeft size={12} /> HOME
            </button>
            <span>/</span>
            <span className="text-[var(--secondary)] font-bold">HTML SITEMAP DIRECTORY</span>
          </div>

          {/* Hero Banner */}
          <div className="bg-[var(--secondary)] rounded-[4px] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
                <Compass size={14} /> COMPLETE WEBSITE TAXONOMY
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-3">
                HTML SITEMAP & DIRECTORY
              </h1>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl font-light">
                Direct navigational access to all 16 sport disciplines, 296+ factory-direct uniform models, 3D design proof tools, and compliance dossiers manufactured in Sialkot, Pakistan.
              </p>
            </div>
          </div>

          <TrustBar />

          {/* Section 1: Core Sport Category Hubs */}
          <section className="bg-white p-6 sm:p-8 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-6">
            <div className="border-b border-neutral-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)] flex items-center gap-2">
                <Shirt className="text-[var(--accent)]" size={22} />
                Primary Sport Uniform Category Hubs (12 Sports)
              </h2>
              <p className="text-xs text-neutral-600 mt-1">High-competition team uniform categories engineered factory-direct with low 15-set MOQs and 12-hour 3D proofs.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {coreCategories.map((c) => (
                <a
                  key={c.slug}
                  href={`/${c.slug}/`}
                  className="p-4 bg-neutral-50 hover:bg-neutral-100 rounded border border-neutral-200 hover:border-[var(--accent)] transition-all flex items-center justify-between group"
                >
                  <span className="text-xs font-bold uppercase text-[var(--secondary)] group-hover:text-[var(--accent)] transition-colors">
                    {c.name}
                  </span>
                  <ExternalLink size={13} className="text-neutral-400 group-hover:text-[var(--accent)]" />
                </a>
              ))}
            </div>
          </section>

          {/* Section 2: Secondary Sport Categories */}
          <section className="bg-white p-6 sm:p-8 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-6">
            <div className="border-b border-neutral-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)] flex items-center gap-2">
                <Shirt className="text-[var(--accent)]" size={22} />
                Secondary Sportswear & Specialty Gear
              </h2>
              <p className="text-xs text-neutral-600 mt-1">Specialized athletic apparel lines manufactured to collegiate and professional athletic standards.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {secondaryCategories.map((c) => (
                <a
                  key={c.slug}
                  href={`/${c.slug}/`}
                  className="p-4 bg-neutral-50 hover:bg-neutral-100 rounded border border-neutral-200 hover:border-[var(--accent)] transition-all flex items-center justify-between group"
                >
                  <span className="text-xs font-bold uppercase text-[var(--secondary)] group-hover:text-[var(--accent)] transition-colors">
                    {c.name}
                  </span>
                  <ExternalLink size={13} className="text-neutral-400 group-hover:text-[var(--accent)]" />
                </a>
              ))}
            </div>
          </section>

          {/* Section 3: Tools, Commercial, Trust & Legal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tools */}
            <div className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-4">
              <h2 className="text-lg font-black uppercase text-[var(--secondary)] border-b pb-3 flex items-center gap-2">
                <Compass className="text-[var(--accent)]" size={18} />
                Design & Team Tools
              </h2>
              <ul className="space-y-2.5">
                {designAndOrderTools.map((t) => (
                  <li key={t.slug}>
                    <a
                      href={`/${t.slug}/`}
                      className="text-xs text-[var(--secondary)]/80 hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                    >
                      <CheckCircle size={12} className="text-[var(--accent)] flex-shrink-0" />
                      <span>{t.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust & Company */}
            <div className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-4">
              <h2 className="text-lg font-black uppercase text-[var(--secondary)] border-b pb-3 flex items-center gap-2">
                <Award className="text-[var(--accent)]" size={18} />
                Factory & Governance
              </h2>
              <ul className="space-y-2.5">
                {trustAndCompanyPages.map((t) => (
                  <li key={t.slug}>
                    <a
                      href={`/${t.slug}/`}
                      className="text-xs text-[var(--secondary)]/80 hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                    >
                      <CheckCircle size={12} className="text-[var(--accent)] flex-shrink-0" />
                      <span>{t.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div className="bg-white p-6 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-4">
              <h2 className="text-lg font-black uppercase text-[var(--secondary)] border-b pb-3 flex items-center gap-2">
                <FileText className="text-[var(--accent)]" size={18} />
                Customer Policies
              </h2>
              <ul className="space-y-2.5">
                {policiesAndLegal.map((t) => (
                  <li key={t.slug}>
                    <a
                      href={`/${t.slug}/`}
                      className="text-xs text-[var(--secondary)]/80 hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                    >
                      <CheckCircle size={12} className="text-[var(--accent)] flex-shrink-0" />
                      <span>{t.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Section 4: All 296 Product Landing Pages Grouped by Sport */}
          <section className="bg-white p-6 sm:p-8 rounded-[4px] border border-[var(--secondary)]/10 shadow-sm space-y-8">
            <div className="border-b border-neutral-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)] flex items-center gap-2">
                <Shirt className="text-[var(--accent)]" size={22} />
                Complete Product Catalog (296 Custom Uniform Models)
              </h2>
              <p className="text-xs text-neutral-600 mt-1">Every individual team jersey, pant, hoodie, and uniform kit indexed with factory specifications and tiered wholesale pricing.</p>
            </div>

            <div className="space-y-8">
              {coreCategories.map((c) => {
                const prods = productsBySport[c.name] || [];
                return (
                  <div key={c.slug} className="space-y-3">
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                      <h3 className="text-sm font-black uppercase text-[var(--secondary)] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                        {c.name} ({prods.length} Models)
                      </h3>
                      <a href={`/${c.slug}/`} className="text-[11px] font-bold text-[var(--accent)] hover:underline uppercase">
                        View Category Hub &rarr;
                      </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                      {prods.map((p) => {
                        const route = p.canonical ? p.canonical.replace(/^\/|\/$/g, '') : `${p.categorySlug}/${p.slug}`;
                        return (
                          <a
                            key={p.id || p.slug}
                            href={`/${route}/`}
                            className="p-2.5 bg-neutral-50 hover:bg-neutral-100 rounded border border-neutral-200/60 hover:border-[var(--accent)] transition-all block group"
                          >
                            <span className="text-xs font-semibold text-[var(--secondary)] group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                              {p.name}
                            </span>
                            <span className="text-[10px] text-neutral-500 block mt-0.5">
                              Starting at ${p.price || '34.99'} • Min 15 Sets
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </div>
    </>
  );
});

export default SitemapPage;
