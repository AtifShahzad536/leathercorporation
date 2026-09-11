import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Ticker from './components/home/Ticker';
import ProductShowcase from './components/home/ProductShowcase';
import Footer from './components/layout/Footer';
import MyTraining from './components/home/MyTraining';
import GoalkeeperGlovesSection from './components/home/GoalkeeperGlovesSection';
import ClothingSection from './components/home/ClothingSection';
import EverythingSection from './components/home/EverythingSection';
import SustainabilitySection from './components/home/SustainabilitySection';
import FootballHistorySlider from './components/home/FootballHistorySlider';
import BlogSection from './components/home/BlogSection';
import FAQSection from './components/home/FAQSection';
import CookieConsent from './components/layout/CookieConsent';
import ProductsPage from './components/products/ProductsPage';
import StylesPage from './components/styles/StylesPage';
import ExplorePage from './components/explore/ExplorePage';
import CompliancePage from './components/compliance/CompliancePage';
import CertificationPage from './components/certification/CertificationPage';
import AboutPage from './components/about/AboutPage';
import InquiryPage from './components/inquiry/InquiryPage';
import CheckoutPage from './components/checkout/CheckoutPage';
import CartDrawer from './components/cart/CartDrawer';
import { CartProvider } from './context/CartContext';

function MainApp() {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [selectedCategory, setSelectedCategory] = useState('ALL JACKETS');
  const [searchQuery, setSearchQuery] = useState('');
  const [inquiryProductSlug, setInquiryProductSlug] = useState('');
  const [exploreTab, setExploreTab] = useState('care');
  const [aboutTab, setAboutTab] = useState('story');
  const [stylesFilter, setStylesFilter] = useState('ALL');

  // Sync state with URL hash
  const parseHash = () => {
    const hash = window.location.hash || '';
    if (hash.startsWith('#products')) {
      setCurrentPage('products');
      const params = new URLSearchParams(hash.replace(/^#products\??/, ''));
      if (params.get('category')) {
        setSelectedCategory(decodeURIComponent(params.get('category')));
      } else {
        setSelectedCategory('ALL JACKETS');
      }
      if (params.get('search')) {
        setSearchQuery(decodeURIComponent(params.get('search')));
      }
    } else if (hash.startsWith('#styles')) {
      setCurrentPage('styles');
      const params = new URLSearchParams(hash.replace(/^#styles\??/, ''));
      if (params.get('style')) {
        setStylesFilter(decodeURIComponent(params.get('style')));
      } else {
        setStylesFilter('ALL');
      }
    } else if (hash.startsWith('#explore')) {
      setCurrentPage('explore');
      const params = new URLSearchParams(hash.replace(/^#explore\??/, ''));
      if (params.get('tab')) {
        setExploreTab(decodeURIComponent(params.get('tab')));
      }
    } else if (hash.startsWith('#compliance')) {
      setCurrentPage('compliance');
    } else if (hash.startsWith('#certification')) {
      setCurrentPage('certification');
    } else if (hash.startsWith('#about')) {
      setCurrentPage('about');
      const params = new URLSearchParams(hash.replace(/^#about\??/, ''));
      if (params.get('tab')) {
        setAboutTab(decodeURIComponent(params.get('tab')));
      }
    } else if (hash.startsWith('#inquiry')) {
      setCurrentPage('inquiry');
      const params = new URLSearchParams(hash.replace(/^#inquiry\??/, ''));
      if (params.get('product')) {
        setInquiryProductSlug(decodeURIComponent(params.get('product')));
      }
    } else if (hash.startsWith('#checkout')) {
      setCurrentPage('checkout');
    } else {
      setCurrentPage('home');
    }
  };

  useEffect(() => {
    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigateTo = (page, param1 = '', param2 = '') => {
    setCurrentPage(page);

    if (page === 'products') {
      const category = param1 || 'ALL JACKETS';
      const search = param2 || '';
      setSelectedCategory(category);
      setSearchQuery(search);

      const params = new URLSearchParams();
      if (category && category !== 'ALL JACKETS') params.set('category', category);
      if (search) params.set('search', search);
      const queryStr = params.toString();
      window.location.hash = queryStr ? `products?${queryStr}` : 'products';
    } else if (page === 'styles') {
      const styleParam = param1 || 'ALL';
      setStylesFilter(styleParam);
      window.location.hash = styleParam && styleParam !== 'ALL' ? `styles?style=${encodeURIComponent(styleParam)}` : 'styles';
    } else if (page === 'explore') {
      const tab = param1 || 'care';
      setExploreTab(tab);
      const cleanTab = tab.toLowerCase();
      let tabKey = 'care';
      if (cleanTab.includes('care')) tabKey = 'care';
      else if (cleanTab.includes('grade') || cleanTab.includes('grain')) tabKey = 'grades';
      else if (cleanTab.includes('process') || cleanTab.includes('lab') || cleanTab.includes('tannery')) tabKey = 'process';
      else if (cleanTab.includes('lookbook') || cleanTab.includes('2025')) tabKey = 'lookbook';
      else if (cleanTab.includes('size') || cleanTab.includes('fit') || cleanTab.includes('guide')) tabKey = 'guide';
      
      window.location.hash = `explore?tab=${tabKey}`;
    } else if (page === 'compliance') {
      window.location.hash = 'compliance';
    } else if (page === 'certification') {
      window.location.hash = 'certification';
    } else if (page === 'about') {
      const tab = param1 || 'story';
      setAboutTab(tab);
      const cleanTab = tab.toLowerCase();
      let tabKey = 'story';
      if (cleanTab.includes('about') || cleanTab.includes('story') || cleanTab.includes('heritage')) tabKey = 'story';
      else if (cleanTab.includes('tannery') || cleanTab.includes('craft')) tabKey = 'tannery';
      else if (cleanTab.includes('sustainab') || cleanTab.includes('lwg') || cleanTab.includes('csr') || cleanTab.includes('enviroment')) tabKey = 'sustainability';
      else if (cleanTab.includes('export') || cleanTab.includes('global')) tabKey = 'exports';
      else if (cleanTab.includes('press') || cleanTab.includes('news')) tabKey = 'press';
      else if (cleanTab.includes('sourc') || cleanTab.includes('ethical') || cleanTab.includes('charity')) tabKey = 'sourcing';
      else if (cleanTab.includes('contact') || cleanTab.includes('headquarter')) tabKey = 'contact';

      window.location.hash = `about?tab=${tabKey}`;
    } else if (page === 'inquiry') {
      const productSlug = typeof param1 === 'object' ? (param1.slug || param1.name) : param1;
      setInquiryProductSlug(productSlug || '');
      window.location.hash = productSlug ? `inquiry?product=${encodeURIComponent(productSlug)}` : 'inquiry';
    } else if (page === 'checkout') {
      window.location.hash = 'checkout';
    } else {
      window.location.hash = '';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--primary)]">
      <Navbar onNavigate={navigateTo} />

      {currentPage === 'products' && (
        <ProductsPage
          initialCategory={selectedCategory}
          initialSearch={searchQuery}
          onNavigateHome={() => navigateTo('home')}
          onNavigateCategory={(cat) => navigateTo('products', cat)}
          onNavigateInquiry={(product) => navigateTo('inquiry', product)}
        />
      )}

      {currentPage === 'styles' && (
        <StylesPage
          initialStyle={stylesFilter}
          onNavigateHome={() => navigateTo('home')}
          onNavigateProducts={(cat) => navigateTo('products', cat)}
          onNavigateInquiry={(p) => navigateTo('inquiry', p)}
        />
      )}

      {currentPage === 'explore' && (
        <ExplorePage
          initialTab={exploreTab}
          onNavigateHome={() => navigateTo('home')}
          onNavigateProducts={() => navigateTo('products')}
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
          initialTab={aboutTab}
          onNavigateHome={() => navigateTo('home')}
          onNavigateProducts={() => navigateTo('products')}
          onNavigateInquiry={(p) => navigateTo('inquiry', p)}
        />
      )}

      {currentPage === 'inquiry' && (
        <InquiryPage
          initialProductSlug={inquiryProductSlug}
          onNavigateHome={() => navigateTo('home')}
          onNavigateProducts={() => navigateTo('products')}
        />
      )}

      {currentPage === 'checkout' && (
        <CheckoutPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateProducts={() => navigateTo('products')}
        />
      )}

      {currentPage === 'home' && (
        <main className="flex-1">
          <Hero onExplore={() => navigateTo('products')} />
          <Ticker />
          <ProductShowcase onSeeAll={() => navigateTo('products')} />
          <MyTraining />
          <GoalkeeperGlovesSection onExplore={() => navigateTo('products', 'MOTORCYCLE & RACING')} />
          <ClothingSection onExplore={(productTitle) => navigateTo('inquiry', productTitle)} />
          <EverythingSection />
          <SustainabilitySection />
          <FootballHistorySlider />
          <BlogSection />
          <FAQSection />
        </main>
      )}

      <Footer onNavigate={navigateTo} />
      <CookieConsent />

      {/* Cart Drawer */}
      <CartDrawer
        onNavigateCheckout={() => navigateTo('checkout')}
        onContinueShopping={() => navigateTo('products')}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
