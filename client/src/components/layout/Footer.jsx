import React, { useState, useEffect } from 'react';

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const IconYoutube = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);
const IconX = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const IconTikTok = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.88-4.46V8.76a8.28 8.28 0 0 0 4.89 1.58V6.89c-.33 0-.67-.07-1-.2z"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const getSocialIcon = (platform = '') => {
  const p = platform.toLowerCase();
  if (p.includes('instagram')) return <IconInstagram />;
  if (p.includes('facebook')) return <IconFacebook />;
  if (p.includes('youtube')) return <IconYoutube />;
  if (p.includes('twitter') || p.includes('x')) return <IconX />;
  if (p.includes('tiktok')) return <IconTikTok />;
  if (p.includes('whatsapp')) return <IconWhatsApp />;
  if (p.includes('linkedin')) return <IconLinkedIn />;
  return <IconInstagram />;
};

const footerSections = [
  {
    title: 'Sport Uniforms',
    links: [
      { label: 'Baseball Uniforms', href: '/custom-baseball-uniforms/', page: 'products', param: 'Baseball' },
      { label: 'Basketball Uniforms', href: '/custom-basketball-uniforms/', page: 'products', param: 'Basketball' },
      { label: 'Football Uniforms', href: '/custom-football-uniforms/', page: 'products', param: 'Football' },
      { label: 'Soccer Kits & Jerseys', href: '/custom-soccer-uniforms/', page: 'products', param: 'Soccer' },
      { label: 'Cricket Uniforms', href: '/custom-cricket-uniforms/', page: 'cricket' },
      { label: 'Ice Hockey Sweaters', href: '/custom-ice-hockey-uniforms/', page: 'products', param: 'Ice Hockey' },
      { label: 'Lacrosse Uniforms', href: '/custom-lacrosse-uniforms/', page: 'products', param: 'Lacrosse' },
      { label: 'Volleyball Uniforms', href: '/custom-volleyball-uniforms/', page: 'products', param: 'Volleyball' },
      { label: 'Wrestling Singlets', href: '/custom-wrestling-singlets/', page: 'products', param: 'Wrestling' },
      { label: 'Flag Football Uniforms', href: '/custom-flag-football-uniforms/', page: 'products', param: 'Flag Football' },
      { label: 'Softball Uniforms', href: '/custom-softball-uniforms/', page: 'products', param: 'Softball' },
      { label: 'Esports Apparel', href: '/custom-esports-apparel/', page: 'products', param: 'Esports' },
    ]
  },
  {
    title: 'Design & Cuts',
    links: [
      { label: '3D Interactive Builder', href: '/builder/', page: 'builder' },
      { label: 'Styles & Silhouette Guide', href: '/styles/', page: 'styles' },
      { label: 'Performance Fabrics Hub', href: '/explore/', page: 'explore' },
      { label: 'Youth & Adult Size Charts', href: '/sizing-chart/', page: 'sizing-chart' },
      { label: 'Team Name & Mascot Generator', href: '/team-name-generator/', page: 'team-name-generator' },
      { label: 'Production Turnaround Times', href: '/how-long-do-custom-uniforms-take/', page: 'lead-time' },
    ]
  },
  {
    title: 'Factory & Trust',
    links: [
      { label: 'About HAMLO SPORTS', href: '/about-us/', page: 'about' },
      { label: 'Ethical Labor & Compliance', href: '/compliance/', page: 'compliance' },
      { label: 'ISO 9001 & OEKO-TEX Certs', href: '/certification/', page: 'certification' },
      { label: 'Customer Reviews & Feedback', href: '/reviews/', page: 'reviews' },
      { label: 'Custom Uniforms Portfolio', href: '/portfolio/', page: 'portfolio' },
      { label: 'HTML Site Directory', href: '/sitemap/', page: 'sitemap' },
    ]
  },
  {
    title: 'Partner With Us',
    links: [
      { label: 'Register Your Club (VIP Discounts)', href: '/register-club/', page: 'register-club' },
      { label: 'How Team Ordering Works', href: '/start-custom-orders/', page: 'how-to-order' },
      { label: 'Request Free 3D Proof & Quote', href: '/request-a-quote/', page: 'inquiry' },
      { label: 'Contact Sialkot Export Desk', href: '/contact/', page: 'inquiry' },
    ]
  }
];

const Footer = ({ onNavigate = () => {} }) => {
  const [socialLinks, setSocialLinks] = useState([
    { platform: 'Instagram', url: 'https://instagram.com/hamlosports', isActive: true },
    { platform: 'Facebook', url: 'https://facebook.com/hamlosports', isActive: true },
    { platform: 'YouTube', url: 'https://youtube.com/@hamlosports', isActive: true },
    { platform: 'X / Twitter', url: 'https://x.com/hamlosports', isActive: true },
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    salesEmail: 'sale@hamlosportswear.site',
    phone: '+92 310 5464116',
    whatsapp: '923105464116'
  });

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(json => {
        if (json.success && json.data) {
          if (json.data.social_links && Array.isArray(json.data.social_links)) {
            const active = json.data.social_links.filter(s => s.isActive && s.url);
            if (active.length > 0) setSocialLinks(active);
          }
          if (json.data.company_info) {
            setCompanyInfo(prev => ({ ...prev, ...json.data.company_info }));
          }
        }
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="w-full bg-[var(--secondary)] text-white">
      {/* Top Section */}
      <div className="w-[96%] max-w-[1800px] mx-auto pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">

          {/* Brand Column */}
          <div className="md:col-span-2">
            <a 
              href="/"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                  e.preventDefault();
                  onNavigate('home');
                }
              }}
              className="flex items-center gap-3 mb-6 cursor-pointer"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img 
                  src="/logo_silverstar.png" 
                  alt="HAMLO SPORTS" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap text-white">HAMLO</span>
                <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#FB923C]">SPORTS</span>
              </div>
            </a>
            <p className="text-sm text-white/70 leading-relaxed mb-4 max-w-[320px]">
              Direct from Sialkot, Pakistan. HAMLO SPORTS manufactures world-class custom team uniforms, pro-grade dye-sublimation, and performance sportswear engineered for schools, clubs, and professional leagues.
            </p>
            <div className="space-y-1 mb-6 text-xs text-white/90 font-medium">
              <div>Sales: <a href={`mailto:${companyInfo.salesEmail || 'sale@hamlosportswear.site'}`} className="text-orange-400 hover:text-orange-300 hover:underline font-bold">{companyInfo.salesEmail || 'sale@hamlosportswear.site'}</a></div>
              <div>WhatsApp / Phone: <a href={`https://wa.me/${(companyInfo.whatsapp || '923105464116').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 hover:underline font-bold">{companyInfo.phone || '+92 310 5464116'}</a></div>
            </div>
            {/* Social Icons (Dynamic from Admin Settings) */}
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((s, idx) => (
                <a
                  key={s.id || s.platform || idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="w-9 h-9 rounded-[3px] border border-white/20 flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all duration-200 group cursor-pointer"
                  title={s.platform}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {getSocialIcon(s.platform)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((sec) => (
            <div key={sec.title} className="md:col-span-1">
              <h3 className="text-xs font-black tracking-[0.2em] uppercase mb-5 text-white">{sec.title}</h3>
              <ul className="space-y-2.5">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                          e.preventDefault();
                          onNavigate(link.page, link.param);
                        }
                      }}
                      className="text-xs sm:text-sm text-white/70 hover:text-orange-400 transition-colors duration-200 tracking-wide block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-black tracking-tight uppercase mb-1">Stay In Touch</h4>
              <p className="text-sm text-gray-400">Get exclusive team uniform catalogs, bespoke manufacturing insights, and seasonal sports apparel drops.</p>
            </div>
            <div className="flex w-full md:w-auto shadow-xl">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 text-white text-sm px-5 py-3 border border-white/10 focus:outline-none focus:border-[var(--accent)] transition-colors w-full md:w-72 placeholder:text-white/30"
              />
              <button className="bg-[var(--accent)] text-white px-6 py-3 text-xs font-black tracking-widest hover:bg-[var(--accent)]/90 transition-colors whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-[96%] max-w-[1800px] mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/75 tracking-wide">
            © {new Date().getFullYear()} HAMLO SPORTS. All rights reserved. Sialkot Export Manufacturing Direct.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            {[
              { label: 'Privacy Policy', tab: 'privacy' },
              { label: 'Terms & Conditions', tab: 'terms' },
              { label: 'Refund & Remake Policy', tab: 'refund' },
              { label: 'Shipping & Delivery', tab: 'shipping' },
              { label: 'Legal Disclaimer', tab: 'disclaimer' },
            ].map(({ label, tab }) => (
              <a
                key={label}
                href={`/${tab === 'privacy' ? 'privacy-policy' : tab === 'terms' ? 'terms-conditions' : tab === 'refund' ? 'refund-policy' : tab === 'shipping' ? 'shipping-policy' : 'disclaimer'}/`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('legal-policy', tab);
                }}
                className="text-xs text-white/75 hover:text-white transition-colors tracking-wide underline-offset-2 hover:underline cursor-pointer"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
