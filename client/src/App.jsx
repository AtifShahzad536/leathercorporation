import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Ticker from './components/home/Ticker';
import ProductShowcase from './components/home/ProductShowcase';
import Footer from './components/layout/Footer';
import MyTraining from './components/home/MyTraining';
import GoalkeeperGlovesSection from './components/home/GoalkeeperGlovesSection';
import ClothingSection from './components/home/ClothingSection';
import SizeChartSection from './components/home/SizeChartSection';
import EverythingSection from './components/home/EverythingSection';
import TextSlider from './components/home/TextSlider';
import SustainabilitySection from './components/home/SustainabilitySection';
import FootballHistorySlider from './components/home/FootballHistorySlider';
import BlogSection from './components/home/BlogSection';
import FAQSection from './components/home/FAQSection';
import ProSpecsSection from './components/home/ProSpecsSection';
import LiveChatWidget from './components/layout/LiveChatWidget';
import FreeShippingBadge from './components/layout/FreeShippingBadge';
import CookieConsent from './components/layout/CookieConsent';
import CartDrawer from './components/cart/CartDrawer';
import { CartProvider } from './context/CartContext';
import { CMSProvider } from './context/CMSContext';
import { allProducts } from './data/productsData';
import { fullCatalog296, sportSlugToCategory, categoryToSportSlug } from './data/fullCatalog296';

// Lazy load non-homepage subpages so initial main page payload is ultra-fast
const StylesPage = lazy(() => import('./components/styles/StylesPage'));
const ExplorePage = lazy(() => import('./components/explore/ExplorePage'));
const CompliancePage = lazy(() => import('./components/compliance/CompliancePage'));
const CertificationPage = lazy(() => import('./components/certification/CertificationPage'));
const AboutPage = lazy(() => import('./components/about/AboutPage'));
const InquiryPage = lazy(() => import('./components/inquiry/InquiryPage'));
const SportsCategoryHubPage = lazy(() => import('./components/templates/SportsCategoryHubPage'));
const ProductDetailLandingTemplate = lazy(() => import('./components/templates/ProductDetailLandingTemplate'));
const LegalPolicyPage = lazy(() => import('./components/pages/LegalPolicyPage'));
const SizingChartPage = lazy(() => import('./components/pages/SizingChartPage'));
const ReviewsPage = lazy(() => import('./components/pages/ReviewsPage'));
const RegisterClubPage = lazy(() => import('./components/pages/RegisterClubPage'));
const HowToOrderPage = lazy(() => import('./components/pages/HowToOrderPage'));
const TeamNameGeneratorPage = lazy(() => import('./components/pages/TeamNameGeneratorPage'));
const PortfolioPage = lazy(() => import('./components/pages/PortfolioPage'));
const UniformBuilderPage = lazy(() => import('./components/pages/UniformBuilderPage'));
const CricketUniformsPage = lazy(() => import('./components/pages/CricketUniformsPage'));
const TennisApparelPage = lazy(() => import('./components/pages/TennisApparelPage'));
const FieldHockeyPage = lazy(() => import('./components/pages/FieldHockeyPage'));
const SportsGlovesPage = lazy(() => import('./components/pages/SportsGlovesPage'));
const LeadTimeGuidePage = lazy(() => import('./components/pages/LeadTimeGuidePage'));

const mapExploreTab = (tab) => {
  if (!tab) return 'fabrics';
  const l = tab.toLowerCase();
  if (l.includes('lookbook') || l.includes('2026')) return 'lookbook';
  if (l.includes('sublimat') || l.includes('tech')) return 'sublimation';
  if (l.includes('embroid') || l.includes('twill') || l.includes('tackle')) return 'embroidery';
  if (l.includes('size') || l.includes('fit') || l.includes('guide')) return 'guide';
  return 'fabrics';
};

const mapAboutTab = (tab) => {
  if (!tab) return 'story';
  const l = tab.toLowerCase();
  if (l.includes('tannery') || l.includes('lab') || l.includes('tech') || l.includes('sublimat')) return 'tech';
  if (l.includes('oeko') || l.includes('sustainab') || l.includes('certified')) return 'sustainability';
  if (l.includes('export') || l.includes('global')) return 'exports';
  if (l.includes('press') || l.includes('news')) return 'press';
  if (l.includes('ethics') || l.includes('sourc') || l.includes('factory ethics')) return 'ethics';
  if (l.includes('contact') || l.includes('headquarter')) return 'contact';
  return 'story';
};

function MainApp() {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [activeSport, setActiveSport] = useState('BASEBALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [inquiryProductSlug, setInquiryProductSlug] = useState('');
  const [exploreTab, setExploreTab] = useState('fabrics');
  const [aboutTab, setAboutTab] = useState('story');
  const [stylesFilter, setStylesFilter] = useState('ALL');
  const [policyTab, setPolicyTab] = useState('privacy');
  const [activeProductDetail, setActiveProductDetail] = useState(null);

  // Sync state with URL pathname & hash
  const parseRoute = () => {
    const pathname = window.location.pathname.replace(/^\/|\/$/g, '');
    const hash = (window.location.hash || '').replace(/^#\/?/, '');
    const routeString = pathname || hash;

    // Check for product detail routes:
    // e.g. custom-baseball-uniforms/custom-full-button-baseball-jerseys OR product/<slug>
    const parts = routeString.split('/').filter(Boolean);

    if (parts.length >= 2 && (parts[0].startsWith('custom-') || parts[0] === 'product')) {
      const prodSlug = parts[parts.length - 1];
      const cleanSlug = prodSlug.toLowerCase().trim();
      const parentSport = sportSlugToCategory[parts[0]] || 'BASEBALL';

      const found = fullCatalog296.find(p => p.slug === cleanSlug) ||
                    fullCatalog296.find(p => p.slug === cleanSlug.replace(/s$/, '') || p.slug.replace(/s$/, '') === cleanSlug) ||
                    fullCatalog296.find(p => cleanSlug.includes(p.slug) || p.slug.includes(cleanSlug)) ||
                    allProducts.find(p => p.slug === cleanSlug || String(p.id) === cleanSlug);

      if (found) {
        setActiveProductDetail(found);
        setActiveSport(found.category || parentSport);
        document.title = `${found.name} | Custom ${found.sport || found.category} Uniforms | HAMLO SPORTS`;
      } else {
        const readable = prodSlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        const sportFallback = fullCatalog296.find(p => p.category === parentSport) || fullCatalog296[0];
        setActiveProductDetail({
          name: readable,
          slug: prodSlug,
          sport: parentSport.charAt(0).toUpperCase() + parentSport.slice(1).toLowerCase(),
          category: parentSport,
          price: sportFallback ? `$${sportFallback.price}` : '$34.99',
          image: sportFallback ? sportFallback.image : 'https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029834/hamlosports/products/baseball/custom-full-button-baseball-jerseys.png'
        });
        setActiveSport(parentSport);
        document.title = `${readable} | Custom ${parentSport} Uniforms | HAMLO SPORTS`;
      }
      setCurrentPage('product-detail');
      return;
    }

    if (routeString.startsWith('product/')) {
      const slug = decodeURIComponent(routeString.replace(/^product\//, ''));
      const cleanSlug = slug.toLowerCase().trim();
      const found = fullCatalog296.find(p => p.slug === cleanSlug) ||
                    fullCatalog296.find(p => p.slug === cleanSlug.replace(/s$/, '') || p.slug.replace(/s$/, '') === cleanSlug) ||
                    fullCatalog296.find(p => cleanSlug.includes(p.slug) || p.slug.includes(cleanSlug)) ||
                    allProducts.find(p => p.slug === cleanSlug || String(p.id) === cleanSlug || p.name.toLowerCase() === cleanSlug);
      if (found) {
        setActiveProductDetail(found);
        setActiveSport(found.category || 'BASEBALL');
        document.title = `${found.name} | Custom ${found.sport || found.category} Uniforms | HAMLO SPORTS`;
      } else {
        const readable = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        const fallbackProd = fullCatalog296[0];
        setActiveProductDetail({
          name: readable,
          slug: slug,
          sport: 'Baseball',
          category: 'BASEBALL',
          price: `$${fallbackProd.price}`,
          image: fallbackProd.image
        });
        document.title = `${readable} | Custom Uniforms | HAMLO SPORTS`;
      }
      setCurrentPage('product-detail');
      return;
    }

    // Check for sport category pages:
    // e.g. custom-baseball-uniforms or sport/BASEBALL or products?category=...
    if (sportSlugToCategory[routeString] || routeString.startsWith('sport/') || routeString.startsWith('products')) {
      let sport = 'BASEBALL';
      if (sportSlugToCategory[routeString]) {
        sport = sportSlugToCategory[routeString];
      } else if (routeString.startsWith('sport/')) {
        sport = decodeURIComponent(routeString.replace(/^sport\//, '')).toUpperCase();
      } else {
        const searchStr = routeString.includes('?') ? routeString.split('?')[1] : '';
        const params = new URLSearchParams(searchStr);
        if (params.get('category')) {
          const raw = decodeURIComponent(params.get('category')).toUpperCase();
          if (raw.includes('BASKETBALL')) sport = 'BASKETBALL';
          else if (raw.includes('SOCCER')) sport = 'SOCCER';
          else if (raw.includes('FOOTBALL') && !raw.includes('FLAG')) sport = 'FOOTBALL';
          else if (raw.includes('FLAG')) sport = 'FLAG FOOTBALL';
          else if (raw.includes('ESPORTS')) sport = 'ESPORTS';
          else if (raw.includes('HOCKEY')) sport = 'ICE HOCKEY';
          else if (raw.includes('WRESTLING')) sport = 'WRESTLING';
          else if (raw.includes('VOLLEYBALL')) sport = 'VOLLEYBALL';
          else if (raw.includes('SOFTBALL')) sport = 'SOFTBALL';
          else if (raw.includes('RUGBY')) sport = 'RUGBY';
          else if (raw.includes('LACROSSE')) sport = 'LACROSSE';
          else sport = 'BASEBALL';
        }
      }
      setActiveSport(sport);
      setCurrentPage('sports-hub');
      document.title = `Custom ${sport} Uniforms & Jerseys - Sialkot Factory Direct | HAMLO SPORTS`;
      return;
    }

    if (routeString.startsWith('styles')) {
      setCurrentPage('styles');
      document.title = 'Sportswear Styles & Apparel Cuts | HAMLO SPORTS';
      const searchStr = window.location.search || (routeString.includes('?') ? routeString.split('?')[1] : '');
      const hashStr = window.location.hash || '';
      const combined = `${searchStr}&${hashStr.replace('#', '')}`;
      const params = new URLSearchParams(combined);
      if (params.get('style')) {
        setStylesFilter(decodeURIComponent(params.get('style')));
      } else {
        setStylesFilter('ALL');
      }
    } else if (routeString.startsWith('explore')) {
      setCurrentPage('explore');
      document.title = 'Explore Performance Materials & Technologies | HAMLO SPORTS';
      const searchStr = window.location.search || (routeString.includes('?') ? routeString.split('?')[1] : '');
      const hashStr = window.location.hash || '';
      let tabParam = null;
      if (searchStr) {
        const params = new URLSearchParams(searchStr);
        tabParam = params.get('tab');
      }
      if (!tabParam && hashStr) {
        const cleanHash = hashStr.replace(/^#\/?/, '');
        const hashQuery = cleanHash.includes('?') ? cleanHash.split('?')[1] : (cleanHash.startsWith('tab=') ? cleanHash : '');
        if (hashQuery) {
          const hashParams = new URLSearchParams(hashQuery);
          tabParam = hashParams.get('tab');
        }
      }
      const resolved = mapExploreTab(tabParam);
      if (resolved === 'guide') {
        setCurrentPage('sizing-chart');
        document.title = 'Sports Uniform Sizing Chart & Measuring Guide | HAMLO SPORTS';
        return;
      }
      setExploreTab(resolved);
      if (window.location.hash && window.location.hash.includes('explore')) {
        window.history.replaceState({}, '', `/explore/?tab=${resolved}`);
      }
    } else if (routeString.startsWith('compliance')) {
      setCurrentPage('compliance');
      document.title = 'Compliance & Ethical Factory Standards | HAMLO SPORTS';
    } else if (routeString.startsWith('certification')) {
      setCurrentPage('certification');
      document.title = 'Export Quality Certifications (ISO / OEKO-TEX) | HAMLO SPORTS';
    } else if (routeString.startsWith('about')) {
      setCurrentPage('about');
      document.title = 'About HAMLO SPORTS | Sialkot Manufacturing Heritage';
      const searchStr = window.location.search || (routeString.includes('?') ? routeString.split('?')[1] : '');
      const hashStr = window.location.hash || '';
      let tabParam = null;
      if (searchStr) {
        const params = new URLSearchParams(searchStr);
        tabParam = params.get('tab');
      }
      if (!tabParam && hashStr) {
        const cleanHash = hashStr.replace(/^#\/?/, '');
        const hashQuery = cleanHash.includes('?') ? cleanHash.split('?')[1] : (cleanHash.startsWith('tab=') ? cleanHash : '');
        if (hashQuery) {
          const hashParams = new URLSearchParams(hashQuery);
          tabParam = hashParams.get('tab');
        }
      }
      const resolved = mapAboutTab(tabParam);
      setAboutTab(resolved);
      if (window.location.hash && window.location.hash.includes('about')) {
        window.history.replaceState({}, '', `/about/?tab=${resolved}`);
      }
    } else if (routeString.startsWith('privacy-policy')) {
      setPolicyTab('privacy');
      setCurrentPage('legal-policy');
      document.title = 'Privacy & Data Protection Policy | HAMLO SPORTS';
    } else if (routeString.startsWith('terms-conditions') || routeString.startsWith('terms')) {
      setPolicyTab('terms');
      setCurrentPage('legal-policy');
      document.title = 'Terms & Conditions of Sale | HAMLO SPORTS';
    } else if (routeString.startsWith('refund-policy') || routeString.startsWith('return-policy')) {
      setPolicyTab('refund');
      setCurrentPage('legal-policy');
      document.title = '100% Free Remake & Refund Policy | HAMLO SPORTS';
    } else if (routeString.startsWith('shipping-policy') || routeString.startsWith('shipping')) {
      setPolicyTab('shipping');
      setCurrentPage('legal-policy');
      document.title = 'Nationwide Shipping & Delivery Policy | HAMLO SPORTS';
    } else if (routeString.startsWith('disclaimer')) {
      setPolicyTab('disclaimer');
      setCurrentPage('legal-policy');
      document.title = 'Legal Disclaimer & Intellectual Property | HAMLO SPORTS';
    } else if (routeString.startsWith('sizing-chart') || routeString.startsWith('size-chart') || routeString === 'sizes') {
      setCurrentPage('sizing-chart');
      document.title = 'Sports Uniform Sizing Chart & Measuring Guide | HAMLO SPORTS';
    } else if (routeString.startsWith('reviews') || routeString.startsWith('hamco-sports-reviews') || routeString.startsWith('customer-reviews')) {
      setCurrentPage('reviews');
      document.title = 'Customer Reviews & Team Testimonials | HAMLO SPORTS';
    } else if (routeString.startsWith('register-club') || routeString.startsWith('register-team')) {
      setCurrentPage('register-club');
      document.title = 'Register Your Club & Unlock Permanent Volume Discounts | HAMLO SPORTS';
    } else if (routeString.startsWith('start-custom-orders') || routeString.startsWith('how-to-order') || routeString.startsWith('custom-orders')) {
      setCurrentPage('how-to-order');
      document.title = 'Get a Free Quote & Start Your Custom Order | HAMLO SPORTS';
    } else if (routeString.startsWith('team-name-generator')) {
      setCurrentPage('team-name-generator');
      document.title = 'Free Team Name & Mascot Generator | 12 Sports | HAMLO SPORTS';
    } else if (routeString.startsWith('portfolio') || routeString.startsWith('gallery')) {
      setCurrentPage('portfolio');
      document.title = 'Custom Team Uniform Designs by Sport | Portfolio | HAMLO SPORTS';
    } else if (routeString.startsWith('builder') || routeString.startsWith('3d-builder') || routeString.startsWith('customizer')) {
      setCurrentPage('builder');
      document.title = '3D Custom Sports Jersey Builder | Hamlo Sports Wear';
    } else if (routeString.startsWith('custom-cricket-uniforms') || routeString === 'cricket') {
      setCurrentPage('cricket');
      document.title = 'Custom Cricket Uniforms & T20 Jerseys USA | Hamlo Sports Wear';
    } else if (routeString.startsWith('custom-tennis-apparel') || routeString === 'tennis') {
      setCurrentPage('tennis');
      document.title = 'Custom Tennis Apparel & Team Polos USA | Hamlo Sports Wear';
    } else if (routeString.startsWith('custom-field-hockey-uniforms') || routeString === 'field-hockey') {
      setCurrentPage('field-hockey');
      document.title = 'Custom Field Hockey Uniforms & Kilts USA | Hamlo Sports Wear';
    } else if (routeString.startsWith('custom-sports-gloves') || routeString.startsWith('gloves') || routeString.startsWith('goalkeeper-gloves')) {
      setCurrentPage('gloves');
      document.title = 'Custom Sports Gloves & Goalkeeper Gloves | Hamlo Sports Wear';
    } else if (routeString.startsWith('how-long-do-custom-uniforms-take') || routeString.startsWith('lead-time') || routeString.startsWith('turnaround')) {
      setCurrentPage('lead-time');
      document.title = 'How Long Do Custom Uniforms Take? | Hamlo Sports Wear';
    } else if (routeString.startsWith('inquiry') || routeString.startsWith('checkout') || routeString.startsWith('request-a-quote') || routeString.startsWith('contact')) {
      setCurrentPage('inquiry');
      document.title = 'Request a 12-Hour 3D Team Mockup & B2B Quote | HAMLO SPORTS';
      const searchStr = routeString.includes('?') ? routeString.split('?')[1] : '';
      const params = new URLSearchParams(searchStr);
      if (params.get('product')) {
        setInquiryProductSlug(decodeURIComponent(params.get('product')));
      }
    } else {
      setCurrentPage('home');
      document.title = 'Hamlo Sports Wear — Custom Team Uniforms | Factory-Direct, Sialkot';
    }
  };

  useEffect(() => {
    parseRoute();
    window.addEventListener('hashchange', parseRoute);
    window.addEventListener('popstate', parseRoute);
    return () => {
      window.removeEventListener('hashchange', parseRoute);
      window.removeEventListener('popstate', parseRoute);
    };
  }, []);

  const navigateTo = (page, param1 = '', param2 = '') => {
    setCurrentPage(page);

    if (page === 'product-detail') {
      const product = param1;
      setActiveProductDetail(product);
      setCurrentPage('product-detail');
      const catSlug = product.categorySlug || categoryToSportSlug[product.category] || categoryToSportSlug[activeSport] || 'custom-baseball-uniforms';
      const prodSlug = product.slug || 'custom-game-jersey';
      
      // Update clean HTML5 History URL + Title
      const cleanPath = `/${catSlug}/${prodSlug}/`;
      window.history.pushState({}, '', cleanPath);
      document.title = `${product.name} | Custom ${product.sport || product.category || activeSport} Uniforms | HAMLO SPORTS`;
    } else if (page === 'sports-hub' || page === 'products') {
      let targetSport = 'BASEBALL';
      if (param1) {
        const raw = param1.toUpperCase();
        if (raw.includes('BASKETBALL')) targetSport = 'BASKETBALL';
        else if (raw.includes('SOCCER')) targetSport = 'SOCCER';
        else if (raw.includes('FOOTBALL') && !raw.includes('FLAG')) targetSport = 'FOOTBALL';
        else if (raw.includes('FLAG')) targetSport = 'FLAG FOOTBALL';
        else if (raw.includes('ESPORTS')) targetSport = 'ESPORTS';
        else if (raw.includes('HOCKEY')) targetSport = 'ICE HOCKEY';
        else if (raw.includes('WRESTLING')) targetSport = 'WRESTLING';
        else if (raw.includes('VOLLEYBALL')) targetSport = 'VOLLEYBALL';
        else if (raw.includes('SOFTBALL')) targetSport = 'SOFTBALL';
        else if (raw.includes('RUGBY')) targetSport = 'RUGBY';
        else if (raw.includes('LACROSSE')) targetSport = 'LACROSSE';
        else targetSport = 'BASEBALL';
      }
      setActiveSport(targetSport);
      setCurrentPage('sports-hub');
      const catSlug = categoryToSportSlug[targetSport] || 'custom-baseball-uniforms';
      
      // Push clean path like /custom-baseball-uniforms/
      const cleanPath = `/${catSlug}/`;
      window.history.pushState({}, '', cleanPath);
      document.title = `Custom ${targetSport} Uniforms & Jerseys - Sialkot Factory Direct | HAMLO SPORTS`;
    } else if (page === 'styles') {
      const styleParam = param1 || 'ALL';
      setStylesFilter(styleParam);
      const url = styleParam && styleParam !== 'ALL' ? `/styles/?style=${encodeURIComponent(styleParam)}` : '/styles/';
      window.history.pushState({}, '', url);
      document.title = 'Sportswear Styles & Cuts | HAMLO SPORTS';
    } else if (page === 'explore') {
      const tab = mapExploreTab(param1);
      if (tab === 'guide') {
        window.history.pushState({}, '', '/sizing-chart/');
        document.title = 'Sports Uniform Sizing Chart | HAMLO SPORTS';
        setCurrentPage('sizing-chart');
        return;
      }
      setExploreTab(tab);
      const url = `/explore/?tab=${tab}`;
      window.history.pushState({}, '', url);
      document.title = 'Explore Performance Materials | HAMLO SPORTS';
    } else if (page === 'compliance') {
      window.history.pushState({}, '', '/compliance/');
      document.title = 'Compliance & Ethical Factory Standards | HAMLO SPORTS';
    } else if (page === 'certification') {
      window.history.pushState({}, '', '/certification/');
      document.title = 'Export Quality Certifications | HAMLO SPORTS';
    } else if (page === 'about') {
      const tab = mapAboutTab(param1);
      setAboutTab(tab);
      const url = `/about/?tab=${tab}`;
      window.history.pushState({}, '', url);
      document.title = 'About HAMLO SPORTS | Sialkot Manufacturing';
    } else if (page === 'legal-policy') {
      const tab = param1 || 'privacy';
      setPolicyTab(tab);
      const pathMap = {
        privacy: '/privacy-policy/',
        terms: '/terms-conditions/',
        refund: '/refund-policy/',
        shipping: '/shipping-policy/',
        disclaimer: '/disclaimer/'
      };
      window.history.pushState({}, '', pathMap[tab] || '/privacy-policy/');
      document.title = 'Legal & Order Policies | HAMLO SPORTS';
    } else if (page === 'sizing-chart') {
      window.history.pushState({}, '', '/sizing-chart/');
      document.title = 'Sports Uniform Sizing Chart | HAMLO SPORTS';
    } else if (page === 'reviews') {
      window.history.pushState({}, '', '/reviews/');
      document.title = 'Customer Reviews & Team Testimonials | HAMLO SPORTS';
    } else if (page === 'register-club') {
      window.history.pushState({}, '', '/register-club/');
      document.title = 'Register Your Club & Unlock Volume Discounts | HAMLO SPORTS';
    } else if (page === 'how-to-order') {
      window.history.pushState({}, '', '/start-custom-orders/');
      document.title = 'How to Start Custom Orders | HAMLO SPORTS';
    } else if (page === 'team-name-generator') {
      window.history.pushState({}, '', '/team-name-generator/');
      document.title = 'Free Team Name Generator | HAMLO SPORTS';
    } else if (page === 'portfolio') {
      window.history.pushState({}, '', '/portfolio/');
      document.title = 'Custom Team Uniform Designs by Sport | HAMLO SPORTS';
    } else if (page === 'builder') {
      window.history.pushState({}, '', '/builder/');
      document.title = '3D Custom Sports Jersey Builder | Hamlo Sports Wear';
    } else if (page === 'cricket') {
      window.history.pushState({}, '', '/custom-cricket-uniforms/');
      document.title = 'Custom Cricket Uniforms & T20 Jerseys USA | Hamlo Sports Wear';
    } else if (page === 'tennis') {
      window.history.pushState({}, '', '/custom-tennis-apparel/');
      document.title = 'Custom Tennis Apparel & Team Polos USA | Hamlo Sports Wear';
    } else if (page === 'field-hockey') {
      window.history.pushState({}, '', '/custom-field-hockey-uniforms/');
      document.title = 'Custom Field Hockey Uniforms & Kilts USA | Hamlo Sports Wear';
    } else if (page === 'gloves') {
      window.history.pushState({}, '', '/custom-sports-gloves/');
      document.title = 'Custom Sports Gloves & Goalkeeper Gloves | Hamlo Sports Wear';
    } else if (page === 'lead-time') {
      window.history.pushState({}, '', '/how-long-do-custom-uniforms-take/');
      document.title = 'How Long Do Custom Uniforms Take? | Hamlo Sports Wear';
    } else if (page === 'inquiry' || page === 'checkout') {
      const productSlug = typeof param1 === 'object' ? (param1.slug || param1.name) : param1;
      setInquiryProductSlug(productSlug || '');
      window.history.pushState({}, '', productSlug ? `/inquiry/?product=${encodeURIComponent(productSlug)}` : '/inquiry/');
      document.title = 'Request a 12-Hour 3D Team Mockup & B2B Quote | HAMLO SPORTS';
    } else {
      window.history.pushState({}, '', '/');
      document.title = 'Hamlo Sports Wear — Custom Team Uniforms | Factory-Direct, Sialkot';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`flex flex-col bg-[var(--primary)] ${currentPage === 'builder' ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
      <Navbar onNavigate={navigateTo} />

      {/* ── SUBPAGES SUSPENSE CONTAINER (LAZY LOADED) ── */}
      <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" /></div>}>
        {/* ── 1. PRODUCT DETAIL PAGE (HAMCO AUDIT REAL-COST COMPARISON & 3 VIEWS) ── */}
        {currentPage === 'product-detail' && (
          <ProductDetailLandingTemplate
            product={activeProductDetail}
            productName={activeProductDetail?.name || 'Pro Custom Athletic Game Jersey'}
            sport={activeProductDetail?.sport || activeProductDetail?.category || activeSport || 'Baseball'}
            basePrice={activeProductDetail?.price ? (String(activeProductDetail.price).startsWith('$') ? activeProductDetail.price : `$${activeProductDetail.price}`) : '$34.99'}
            images={activeProductDetail?.images && activeProductDetail.images.length > 0
              ? activeProductDetail.images.map(img => typeof img === 'string' ? img : img.url)
              : [activeProductDetail?.image].filter(Boolean)
            }
            onNavigateInquiry={(prod) => navigateTo('inquiry', prod)}
            onNavigateProduct={(prod) => navigateTo('product-detail', prod)}
          />
        )}

        {/* ── 2. NEW COMPLETE SPORTS CATEGORY HUB (EXACT HAMCO SCREENSHOT BENCHMARK) ── */}
        {currentPage === 'sports-hub' && (
          <SportsCategoryHubPage
            activeSport={activeSport}
            onSelectSport={(sport) => {
              setActiveSport(sport);
              window.location.hash = `sport/${encodeURIComponent(sport)}`;
            }}
            onSelectProduct={(p) => navigateTo('product-detail', p)}
            onNavigateInquiry={(item) => navigateTo('inquiry', item)}
          />
        )}

        {currentPage === 'styles' && (
          <StylesPage
            initialStyle={stylesFilter}
            onFilterChange={(f) => setStylesFilter(f)}
            onNavigateHome={() => navigateTo('home')}
            onNavigateProducts={(cat) => navigateTo('sports-hub', cat)}
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'explore' && (
          <ExplorePage
            key={exploreTab}
            initialTab={exploreTab}
            onTabChange={(tab) => {
              setExploreTab(tab);
              window.history.pushState({}, '', `/explore/?tab=${tab}`);
            }}
            onNavigateHome={() => navigateTo('home')}
            onNavigateProducts={() => navigateTo('sports-hub')}
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'compliance' && (
          <CompliancePage
            onNavigateHome={() => navigateTo('home')}
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'certification' && (
          <CertificationPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            key={aboutTab}
            initialTab={aboutTab}
            onTabChange={(tab) => {
              setAboutTab(tab);
              window.history.pushState({}, '', `/about/?tab=${tab}`);
            }}
            onNavigateHome={() => navigateTo('home')}
            onNavigateProducts={() => navigateTo('sports-hub')}
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'inquiry' && (
          <InquiryPage
            initialProductSlug={inquiryProductSlug}
            onNavigateHome={() => navigateTo('home')}
            onNavigateProducts={() => navigateTo('sports-hub')}
          />
        )}

        {currentPage === 'legal-policy' && (
          <LegalPolicyPage
            initialTab={policyTab}
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'sizing-chart' && (
          <SizingChartPage
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'register-club' && (
          <RegisterClubPage
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'how-to-order' && (
          <HowToOrderPage
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'team-name-generator' && (
          <TeamNameGeneratorPage
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
            onNavigateProduct={(prod) => navigateTo('product-detail', prod)}
          />
        )}

        {currentPage === 'builder' && (
          <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
            <UniformBuilderPage
              onNavigateInquiry={(p) => navigateTo('inquiry', p)}
            />
          </div>
        )}

        {currentPage === 'cricket' && (
          <CricketUniformsPage
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'tennis' && (
          <TennisApparelPage
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'field-hockey' && (
          <FieldHockeyPage
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'gloves' && (
          <SportsGlovesPage
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}

        {currentPage === 'lead-time' && (
          <LeadTimeGuidePage
            onNavigateInquiry={(p) => navigateTo('inquiry', p)}
          />
        )}
      </Suspense>

      {currentPage === 'home' && (
        <main className="flex-1">
          <Hero onExplore={() => navigateTo('sports-hub', 'BASEBALL')} />
          <Ticker />
          <ProductShowcase 
            onSeeAll={(sport) => navigateTo('sports-hub', sport || 'BASEBALL')} 
            onSelectCategory={(sport) => navigateTo('sports-hub', sport)}
            onSelectProduct={(p) => navigateTo('product-detail', p)}
          />
          <ProSpecsSection onExplore={(category) => navigateTo('sports-hub', category || 'BASEBALL')} />
          <MyTraining />
          <GoalkeeperGlovesSection onExplore={() => navigateTo('sports-hub', 'SOCCER')} />
          <ClothingSection onExplore={(productTitle) => navigateTo('inquiry', productTitle)} />
          <SizeChartSection onNavigateInquiry={(productTitle) => navigateTo('inquiry', productTitle)} />
          <EverythingSection />
          <TextSlider />
          <SustainabilitySection />
          <FootballHistorySlider />
          <BlogSection />
          <FAQSection />
        </main>
      )}

      {currentPage !== 'builder' && <Footer onNavigate={navigateTo} />}
      {currentPage !== 'builder' && <CookieConsent />}
      {currentPage !== 'builder' && <FreeShippingBadge onNavigateInquiry={(item) => navigateTo('inquiry', item)} />}
      {currentPage !== 'builder' && <LiveChatWidget onNavigateInquiry={(item) => navigateTo('inquiry', item)} />}

      <CartDrawer
        onNavigateInquiry={(productTitle) => navigateTo('inquiry', productTitle)}
        onContinueShopping={() => navigateTo('sports-hub')}
      />
    </div>
  );
}

export default function App() {
  return (
    <CMSProvider>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </CMSProvider>
  );
}
