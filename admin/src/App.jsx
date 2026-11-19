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
  Search, Bell, ChevronRight, Menu, X, Sparkles, User, Settings,
  MessageSquare, Box
} from 'lucide-react';

export default function App() {
  const { user, token, loading, logout } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0D14] flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1E1B6E] to-[#F26522] flex items-center justify-center font-black text-xl shadow-2xl animate-pulse mb-4">
          H
        </div>
        <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
          Initializing Hamlo Enterprise Engine...
        </span>
      </div>
    );
  }

  if (!token || !user) {
    return <LoginPage />;
  }

  const navItems = [
    { 
      group: 'OVERVIEW',
      items: [
        { id: 'dashboard', label: 'Executive Dashboard', icon: LayoutDashboard }
      ]
    },
    {
      group: 'INBOX & LEADS',
      items: [
        { id: 'inquiries', label: 'Customer Inquiries & Quotes', icon: MessageSquare },
        { id: 'leads', label: 'Email Marketing & Leads', icon: Mail },
      ]
    },
    {
      group: 'CMS & STORE MANAGEMENT',
      items: [
        { id: 'models3d', label: '3D Studio & Mesh Inspector', icon: Box },
        { id: 'homePage', label: 'Home Page CMS & Media', icon: Home },
        { id: 'products', label: 'Uniform Products Catalog', icon: Package },
        { id: 'pages', label: 'Other Pages CMS', icon: Layers },
        { id: 'media', label: 'Cloudinary Media Library', icon: ImageIcon },
      ]
    }
  ];

  const currentTitle = {
    dashboard: 'Executive Overview & Live Telemetry',
    models3d: '3D Sportswear Models, Mesh Inspector & Region Studio',
    inquiries: 'Customer Inquiries & B2B Custom Quotes Inbox',
    homePage: 'Home Page CMS, Videos & Infinite Marquee',
    products: 'Custom Sports Uniforms Catalog',
    pages: 'Knowledge Hub, Compliance & About Pages',
    media: 'Cloudinary High-Definition Media Asset Vault',
    leads: 'Automated Lead Ingestion & 10-Daily Dispatch Desk'
  }[currentPage];

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#F8FAFC] flex font-sans text-slate-800 antialiased selection:bg-[#F26522] selection:text-white">
      
      {/* ── LEFT FIXED SIDEBAR (Zero jitter, independent scroll) ── */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0F1422] text-white flex flex-col justify-between border-r border-slate-800/80 shadow-2xl transition-transform duration-300 md:static md:translate-x-0 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        
        {/* Brand Top Header */}
        <div>
          <div className="h-20 px-6 flex items-center justify-between border-b border-slate-800/80 bg-[#0B0F19]/60">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F26522] to-[#ff8c53] text-white flex items-center justify-center font-black text-lg shadow-[0_0_20px_rgba(242,101,34,0.4)]">
                H
              </div>
              <div>
                <span className="font-black text-sm tracking-tight text-white block uppercase leading-none">
                  HAMLO <span className="text-[#F26522]">SPORTS</span>
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-slate-400 block mt-1 uppercase font-semibold">
                  Factory Console v2.6
                </span>
              </div>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden p-1.5 text-slate-400 hover:text-white rounded-lg cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Items (Clean Custom Scrollbar) */}
          <div className="p-4 overflow-y-auto max-h-[calc(100vh-175px)] space-y-6 custom-scrollbar">
            {navItems.map((group, gIdx) => (
              <div key={gIdx} className="space-y-1.5">
                <span className="px-3 text-[10px] font-mono font-bold tracking-[0.2em] text-slate-500 uppercase block">
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
                      className={`w-full group flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#1E1B6E] text-white shadow-lg shadow-[#1E1B6E]/30 border border-indigo-500/40'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon 
                          size={17} 
                          className={`transition-colors duration-200 ${
                            isActive ? 'text-[#F26522]' : 'text-slate-400 group-hover:text-white'
                          }`} 
                        />
                        <span className="tracking-wide">{item.label}</span>
                      </div>

                      {item.badge && (
                        <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          isActive 
                            ? 'bg-[#F26522] text-white' 
                            : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-300'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Bottom Profile Widget */}
        <div className="p-4 border-t border-slate-800/80 bg-[#0B0F19]/80">
          <div className="flex items-center justify-between gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2.5 truncate">
              <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-700/50 text-[#F26522] flex items-center justify-center font-black text-xs flex-shrink-0">
                A
              </div>
              <div className="truncate">
                <span className="text-xs font-bold text-white block truncate leading-tight">
                  {user?.name || 'Atif Admin'}
                </span>
                <span className="text-[10px] text-slate-400 block truncate font-mono">
                  {user?.email}
                </span>
              </div>
            </div>

            <button
              onClick={logout}
              title="Logout"
              className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition cursor-pointer flex-shrink-0"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

      </aside>

      {/* ── MAIN VIEWPORT (STICKY HEADER + INDEPENDENT SCROLL AREA) ── */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden relative">
        
        {/* ── STICKY TOPBAR HEADER (Glassmorphic blur, stays glued to top) ── */}
        <header className="h-20 bg-white/85 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40 px-6 sm:px-10 flex items-center justify-between flex-shrink-0 transition-all">
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
            >
              <Menu size={20} />
            </button>

            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                <span>Console</span>
                <ChevronRight size={12} />
                <span className="text-[#F26522]">{currentPage}</span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight leading-none mt-1">
                {currentTitle}
              </h2>
            </div>
          </div>

          {/* Quick Actions & Live Link */}
          <div className="flex items-center gap-3">
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-[#F26522] hover:text-white text-slate-700 text-xs font-bold rounded-lg border border-slate-200 hover:border-[#F26522] transition shadow-xs group"
            >
              <ExternalLink size={13} className="text-[#F26522] group-hover:text-white" />
              <span>Public Live Site</span>
            </a>

            <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono font-bold text-slate-500 uppercase hidden lg:inline">
                Sialkot API Desk: Online
              </span>
            </div>
          </div>

        </header>

        {/* ── SCROLLABLE WORKSPACE CONTENT (Independent smooth scroll with modern scrollbar) ── */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 sm:p-10 scroll-smooth">
          <div className="max-w-7xl mx-auto pb-16">
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
