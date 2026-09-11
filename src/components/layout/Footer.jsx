import React from 'react';

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

const footerLinks = {
  Products: ['Biker & Moto Jackets', 'Bomber & Flight Jackets', 'Cafe Racer Series', 'Suede & Harrington', 'Shearling Aviators', 'Women\'s Collection'],
  'Leather Craft': ['Full Grain Cowhide', 'Lambskin Nappa', 'Italian Goat Suede', 'Distressed Finishes', 'CE Armor Protection'],
  Explore: ['About Leader Corporation', 'LWG Sustainability', 'Tannery Standards', 'Craftsmanship Lab', 'Leather Care Guide'],
  'Partner With Us': ['Private Label OEM', 'Wholesale Inquiries', 'Bespoke Made to Measure', 'Club & Brand Orders', 'Contact Us'],
};

const Footer = ({ onNavigate = () => {} }) => {
  return (
    <footer className="w-full bg-[var(--secondary)] text-white">
      {/* Top Section */}
      <div className="w-[92%] mx-auto pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">

          {/* Brand Column */}
          <div className="md:col-span-2">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 mb-6 cursor-pointer"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img 
                  src="/logo_silverstar1.png" 
                  alt="Leader Corporation" 
                  className="w-full h-full object-contain brightness-0 invert" 
                />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">LEADER CORPORATION</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-[280px]">
              Since 1947, Leader Corporation has been engineering and exporting world-class genuine leather jackets, motorsport apparel, and bespoke luxury outerwear trusted globally.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: <IconInstagram />, label: 'Instagram' },
                { icon: <IconFacebook />, label: 'Facebook' },
                { icon: <IconYoutube />, label: 'YouTube' },
                { icon: <IconX />, label: 'X / Twitter' },
              ].map(({ icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-[3px] border border-white/20 flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all duration-200 group cursor-pointer"
                >
                  <span className="group-hover:scale-110 transition-transform">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="md:col-span-1">
              <h4 className="text-xs font-black tracking-[0.2em] uppercase mb-5 text-white">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        if (section === 'Products') {
                          onNavigate('products', link);
                        } else if (section === 'Leather Craft') {
                          onNavigate('styles');
                        } else if (section === 'Explore') {
                          if (link.includes('About')) onNavigate('about');
                          else if (link.includes('Sustainability') || link.includes('Standards')) onNavigate('compliance');
                          else onNavigate('explore');
                        } else if (section === 'Partner With Us') {
                          if (link.includes('Contact')) onNavigate('about');
                          else onNavigate('inquiry');
                        }
                      }}
                      className="text-sm text-white/60 hover:text-[var(--accent)] transition-colors duration-200 tracking-wide text-left cursor-pointer"
                    >
                      {link}
                    </button>
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
              <p className="text-sm text-gray-400">Get exclusive lookbooks, bespoke manufacturing insights, and new jacket drops.</p>
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
        <div className="w-[92%] mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30 tracking-wide">
            © {new Date().getFullYear()} Leader Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Cookie Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-xs text-white/30 hover:text-white transition-colors tracking-wide">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
