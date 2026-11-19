import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EmailLeadsPage from './pages/EmailLeadsPage';
import ProductsManager from './pages/ProductsManager';
import MediaLibrary from './pages/MediaLibrary';
import HomePageManager from './pages/HomePageManager';
import PagesManager from './pages/PagesManager';
import InquiriesManager from './pages/InquiriesManager';
import Model3DManager from './pages/Model3DManager';
import { 
  LayoutDashboard, Mail, Package, Image as ImageIcon, 
  Layers, LogOut, ExternalLink, ShieldCheck, Home, 
  Search, Bell, ChevronRight, Menu, X, User, Settings,
  MessageSquare, Box
} from 'lucide-react';

export default function App() {
  const { user, token, loading, logout } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-slate-700">
        <div className="w-10 h-10 rounded-xl bg-[#1E1B6E] text-white flex items-center justify-center font-medium text-lg shadow-sm mb-3">
          H
        </div>
        <span className="text-xs text-slate-500 font-normal">
          Loading Hamlo Management Console...
        </span>
      </div>
    );
  }

  if (!token || !user) {
    return <LoginPage />;
  }

  const navItems = [
    { 
      group: 'Overview',
      items: [
        { id: 'dashboard', label: 'Operations Dashboard', icon: LayoutDashboard }
      ]
    },
    {
      group: 'Quotes & Inquiries',
      items: [
        { id: 'inquiries', label: 'Customer Quotes & Inquiries', icon: MessageSquare },
        { id: 'leads', label: 'Email Marketing & Leads', icon: Mail },
      ]
    },
    {
      group: 'Customizer & Catalog',
      items: [
        { id: 'models3d', label: '3D Customizer Models', icon: Box },
        { id: 'products', label: 'Uniform Products Catalog', icon: Package },
        { id: 'homePage', label: 'Home Page CMS', icon: Home },
        { id: 'pages', label: 'Content Pages', icon: Layers },
        { id: 'media', label: 'Media Assets Vault', icon: ImageIcon },
      ]
    }
  ];

  const currentTitle = {
    dashboard: 'Operations Dashboard & Analytics',
    models3d: '3D Customizer Models & Mesh Management',
    inquiries: 'Customer Quotes & Inquiries Inbox',
    homePage: 'Home Page CMS & Showcase',
    products: 'Custom Sports Uniforms Catalog',
    pages: 'Website Pages & Compliance',
    media: 'Media Asset Vault',
    leads: 'Email Marketing & Leads Management'
  }[currentPage];

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-50 flex font-sans text-slate-800 antialiased selection:bg-[#F26522] selection:text-white">
      
      {/* ── LEFT FIXED SIDEBAR ── */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-slate-700 flex flex-col justify-between border-r border-slate-200 shadow-sm transition-transform duration-200 md:static md:translate-x-0 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        
        {/* Brand Top Header */}
        <div>
          <div className="h-16 px-5 flex items-center justify-between border-b border-slate-200 bg-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1E1B6E] text-white flex items-center justify-center font-medium text-sm shadow-xs">
                H
              </div>
              <div>
                <span className="font-semibold text-sm tracking-tight text-slate-900 block leading-tight">
                  HAMLO <span className="text-[#F26522]">SPORTS</span>
                </span>
                <span className="text-[11px] text-slate-500 block font-normal">
                  Production Admin
                </span>
              </div>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden p-1.5 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="p-3.5 overflow-y-auto max-h-[calc(100vh-140px)] space-y-5 custom-scrollbar">
            {navItems.map((group, gIdx) => (
              <div key={gIdx} className="space-y-1">
                <span className="px-2.5 text-[11px] font-medium tracking-wider text-slate-400 uppercase block">
                  {group.group}
                </span>

                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-slate-100 text-[#1E1B6E] font-medium border border-slate-200/80 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-normal'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon 
                          size={16} 
                          className={`transition-colors duration-150 ${
                            isActive ? 'text-[#F26522]' : 'text-slate-400 group-hover:text-slate-600'
                          }`} 
                        />
                        <span className="tracking-normal">{item.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Bottom Profile Widget */}
        <div className="p-3.5 border-t border-slate-200 bg-slate-50/50">
          <div className="flex items-center justify-between gap-2.5 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2.5 truncate">
              <div className="w-7 h-7 rounded-md bg-[#1E1B6E]/10 text-[#1E1B6E] flex items-center justify-center font-medium text-xs flex-shrink-0">
                A
              </div>
              <div className="truncate">
                <span className="text-xs font-medium text-slate-800 block truncate leading-tight">
                  {user?.name || 'Administrator'}
                </span>
                <span className="text-[11px] text-slate-500 block truncate font-normal">
                  {user?.email || 'admin@hamlosports.com'}
                </span>
              </div>
            </div>

            <button
              onClick={logout}
              title="Sign Out"
              className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition cursor-pointer flex-shrink-0"
            >
              <LogOut size={15} />
            </button>
          </div>
        </div>

      </aside>

      {/* ── MAIN VIEWPORT ── */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden relative">
        
        {/* ── STICKY TOPBAR HEADER ── */}
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-40 px-6 sm:px-8 flex items-center justify-between flex-shrink-0">
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
            >
              <Menu size={18} />
            </button>

            <div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-normal">
                <span>Console</span>
                <ChevronRight size={11} />
                <span className="text-slate-600 font-medium capitalize">{currentPage}</span>
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-slate-900 leading-tight">
                {currentTitle}
              </h2>
            </div>
          </div>

          {/* Quick Actions & Live Links */}
          <div className="flex items-center gap-3">
            <a
              href="http://localhost:5175/builder/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium rounded-lg border border-slate-200 transition shadow-xs group"
              title="Open Customer 3D Customization Studio"
            >
              <Box size={14} className="text-[#F26522]" />
              <span>Customer 3D Studio</span>
              <ExternalLink size={11} className="text-slate-400 group-hover:text-slate-600" />
            </a>

            <div className="h-5 w-[1px] bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-slate-500 font-normal hidden lg:inline">
                API Connected
              </span>
            </div>
          </div>

        </header>

        {/* ── SCROLLABLE WORKSPACE CONTENT ── */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 sm:p-8">
          <div className="max-w-7xl mx-auto pb-12">
            {currentPage === 'dashboard' && <DashboardPage onNavigate={setCurrentPage} />}
            {currentPage === 'models3d' && <Model3DManager />}
            {currentPage === 'inquiries' && <InquiriesManager />}
            {currentPage === 'homePage' && <HomePageManager />}
            {currentPage === 'products' && <ProductsManager />}
            {currentPage === 'leads' && <EmailLeadsPage />}
            {currentPage === 'media' && <MediaLibrary />}
            {currentPage === 'pages' && <PagesManager />}
          </div>
        </div>

      </div>

    </div>
  );
}