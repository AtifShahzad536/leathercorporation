import React, { useState, useEffect } from 'react';
import api from '../api/client';
import {
  Settings, Share2, Phone, Mail, MapPin, Globe, Check,
  Plus, Trash2, Eye, EyeOff, Save, RefreshCw, AlertCircle,
  Sparkles, ExternalLink, Tag, Clock, Megaphone
} from 'lucide-react';

export default function SiteSettingsManager() {
  const [activeTab, setActiveTab] = useState('social');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Settings state
  const [socialLinks, setSocialLinks] = useState([
    { id: 'instagram', platform: 'Instagram', url: 'https://instagram.com/hamlosports', icon: 'Instagram', isActive: true },
    { id: 'facebook', platform: 'Facebook', url: 'https://facebook.com/hamlosports', icon: 'Facebook', isActive: true },
    { id: 'youtube', platform: 'YouTube', url: 'https://youtube.com/@hamlosports', icon: 'Youtube', isActive: true },
    { id: 'twitter', platform: 'X / Twitter', url: 'https://x.com/hamlosports', icon: 'Twitter', isActive: true },
    { id: 'whatsapp', platform: 'WhatsApp Desk', url: 'https://wa.me/923105464116', icon: 'MessageCircle', isActive: true },
    { id: 'tiktok', platform: 'TikTok', url: 'https://tiktok.com/@hamlosports', icon: 'Video', isActive: false },
    { id: 'linkedin', platform: 'LinkedIn', url: 'https://linkedin.com/company/hamlosports', icon: 'Linkedin', isActive: false }
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    salesEmail: 'sale@hamlosportswear.site',
    supportEmail: 'support@hamlosportswear.site',
    phone: '+92 310 5464116',
    whatsapp: '923105464116',
    address: 'HAMLO SPORTS Factory, Small Industrial Estate, Sialkot, Punjab, Pakistan',
    hours: 'Mon - Sat: 8:00 AM - 8:00 PM PKT / Direct DDP Air Worldwide'
  });

  const [announcementBar, setAnnouncementBar] = useState({
    enabled: true,
    text: 'CUSTOM SPORTSWEAR & ATHLETIC UNIFORMS MANUFACTURER • FACTORY DIRECT',
    badgeText: 'Free 3D Mockup',
    badgeLink: '/builder',
    secondaryText: 'FREE US & EU DDP AIR SHIPPING INCLUDED • ZERO TARIFFS'
  });

  const [clubProgramDefaults, setClubProgramDefaults] = useState({
    defaultDiscountPercentage: 20,
    defaultTier: 'Gold Partner Club (20%)',
    codePrefix: 'HAMLO-CLUB-',
    autoApprove: false,
    perksDescription: 'Permanent 20% volume discount on custom athletic uniforms, free 12h 3D mockups, priority factory production queue, zero MOQ re-orders.'
  });

  // State for Add Social Media Modal/Row
  const [newSocial, setNewSocial] = useState({
    platform: 'Instagram',
    url: '',
    isActive: true
  });
  const [showAddSocial, setShowAddSocial] = useState(false);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await api.get('/settings');
      if (res.data.success && res.data.data) {
        const d = res.data.data;
        if (d.social_links) setSocialLinks(d.social_links);
        if (d.company_info) setCompanyInfo(prev => ({ ...prev, ...d.company_info }));
        if (d.announcement_bar) setAnnouncementBar(prev => ({ ...prev, ...d.announcement_bar }));
        if (d.club_program_defaults) setClubProgramDefaults(prev => ({ ...prev, ...d.club_program_defaults }));
      }
    } catch (err) {
      console.error('Failed to load settings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSaveAllSettings = async () => {
    setSaving(true);
    try {
      const payload = {
        settings: {
          social_links: socialLinks,
          company_info: companyInfo,
          announcement_bar: announcementBar,
          club_program_defaults: clubProgramDefaults
        }
      };
      const res = await api.post('/settings/bulk', payload);
      if (res.data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const handleToggleSocialActive = (idx) => {
    setSocialLinks(prev => prev.map((s, i) => i === idx ? { ...s, isActive: !s.isActive } : s));
  };

  const handleSocialUrlChange = (idx, newUrl) => {
    setSocialLinks(prev => prev.map((s, i) => i === idx ? { ...s, url: newUrl } : s));
  };

  const handleDeleteSocial = (idx) => {
    if (!window.confirm('Remove this social media link?')) return;
    setSocialLinks(prev => prev.filter((_, i) => i !== idx));
  };

  const handleAddNewSocial = () => {
    if (!newSocial.url.trim()) {
      alert('Please enter a valid profile URL');
      return;
    }
    const id = newSocial.platform.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now();
    setSocialLinks(prev => [...prev, {
      id,
      platform: newSocial.platform,
      url: newSocial.url.trim(),
      icon: newSocial.platform,
      isActive: newSocial.isActive
    }]);
    setNewSocial({ platform: 'Instagram', url: '', isActive: true });
    setShowAddSocial(false);
  };

  return (
    <div className="h-full flex flex-col overflow-hidden bg-slate-50 text-slate-800 font-sans">
      
      {/* ── TOP HEADER ── */}
      <div className="p-6 bg-white border-b border-slate-200 shadow-xs shrink-0 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 bg-[#1E1B6E]/10 text-[#1E1B6E] rounded-md">
              <Settings size={18} />
            </span>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Site, Social Media & Global Settings
            </h1>
          </div>
          <p className="text-xs text-slate-500">
            Configure social media profile links, hide/show platforms, customer support info, and club program defaults.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {saveSuccess && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              <Check size={14} />
              <span>Saved Successfully!</span>
            </span>
          )}

          <button
            onClick={handleSaveAllSettings}
            disabled={saving}
            className="px-4 py-2 bg-[#F26522] hover:bg-orange-600 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition shadow-xs cursor-pointer disabled:opacity-50"
          >
            {saving ? <RefreshCw size={14} className="animate-spin" /> : <Save size={14} />}
            <span>{saving ? 'Saving...' : 'Save All Settings'}</span>
          </button>
        </div>
      </div>

      {/* ── TABS NAVIGATION ── */}
      <div className="px-6 bg-white border-b border-slate-200 flex items-center gap-2 overflow-x-auto shrink-0">
        {[
          { id: 'social', label: 'Social Media Profiles & URLs', icon: Share2 },
          { id: 'contact', label: 'Company Contact & Factory', icon: Phone },
          { id: 'announcement', label: 'Top Bar Announcement Banner', icon: Megaphone },
          { id: 'club', label: 'Club Program Global Defaults', icon: Tag }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3.5 px-3 text-xs font-semibold border-b-2 flex items-center gap-2 transition cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'border-[#1E1B6E] text-[#1E1B6E]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon size={14} className={isActive ? 'text-[#F26522]' : 'text-slate-400'} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── TAB CONTENT BODY ── */}
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        {loading ? (
          <div className="h-64 flex flex-col items-center justify-center text-slate-400">
            <RefreshCw size={24} className="animate-spin mb-2 text-[#1E1B6E]" />
            <span className="text-xs">Loading configuration settings...</span>
          </div>
        ) : (
          <div className="max-w-4xl space-y-6">
            
            {/* ── TAB 1: SOCIAL MEDIA PROFILES ── */}
            {activeTab === 'social' && (
              <div className="bg-white rounded-lg border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Active Social Media Profiles
                    </h3>
                    <p className="text-xs text-slate-500">
                      Add, update, or hide social media links shown in the website footer and header.
                    </p>
                  </div>

                  <button
                    onClick={() => setShowAddSocial(true)}
                    className="px-3 py-1.5 bg-[#1E1B6E] hover:bg-indigo-900 text-white rounded text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Plus size={13} />
                    <span>Add New Social Platform</span>
                  </button>
                </div>

                {/* Add Social Modal/Inline Form */}
                {showAddSocial && (
                  <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800">New Social Media Platform</span>
                      <button onClick={() => setShowAddSocial(false)} className="text-xs text-slate-400 hover:text-slate-700">Cancel</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Platform Name</label>
                        <select
                          value={newSocial.platform}
                          onChange={e => setNewSocial(prev => ({ ...prev, platform: e.target.value }))}
                          className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded text-xs font-medium text-slate-800"
                        >
                          <option value="Instagram">Instagram</option>
                          <option value="Facebook">Facebook</option>
                          <option value="TikTok">TikTok</option>
                          <option value="YouTube">YouTube</option>
                          <option value="X / Twitter">X / Twitter</option>
                          <option value="WhatsApp Desk">WhatsApp Desk</option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="Pinterest">Pinterest</option>
                          <option value="Custom">Custom Platform</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Profile / Page URL</label>
                        <div className="flex gap-2">
                          <input
                            type="url"
                            placeholder="https://instagram.com/yourhandle"
                            value={newSocial.url}
                            onChange={e => setNewSocial(prev => ({ ...prev, url: e.target.value }))}
                            className="flex-1 px-2.5 py-1.5 bg-white border border-slate-200 rounded text-xs font-mono text-slate-800"
                          />
                          <button
                            type="button"
                            onClick={handleAddNewSocial}
                            className="px-3 py-1.5 bg-[#F26522] hover:bg-orange-600 text-white rounded text-xs font-bold cursor-pointer"
                          >
                            Add Platform
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Social Items List */}
                <div className="divide-y divide-slate-100">
                  {socialLinks.map((s, idx) => (
                    <div key={s.id || idx} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-slate-50/50 transition">
                      <div className="flex items-center gap-3 min-w-[160px]">
                        <span className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs shrink-0">
                          {s.platform.charAt(0)}
                        </span>
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">{s.platform}</span>
                          <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                            s.isActive ? 'text-emerald-600' : 'text-slate-400'
                          }`}>
                            {s.isActive ? 'Visible on Website' : 'Hidden'}
                          </span>
                        </div>
                      </div>

                      {/* URL Edit Input */}
                      <div className="flex-1 max-w-xl">
                        <input
                          type="url"
                          value={s.url}
                          onChange={e => handleSocialUrlChange(idx, e.target.value)}
                          placeholder="https://..."
                          className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                        />
                      </div>

                      {/* Visibility Toggle & Delete Action */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleToggleSocialActive(idx)}
                          className={`px-2.5 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 transition cursor-pointer ${
                            s.isActive
                              ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                              : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200'
                          }`}
                          title={s.isActive ? 'Click to Hide on Website' : 'Click to Show on Website'}
                        >
                          {s.isActive ? <Eye size={13} /> : <EyeOff size={13} />}
                          <span>{s.isActive ? 'Active' : 'Hidden'}</span>
                        </button>

                        {s.url && (
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-slate-400 hover:text-[#1E1B6E] rounded hover:bg-slate-100 transition"
                            title="Test Link in New Tab"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => handleDeleteSocial(idx)}
                          className="p-1.5 text-slate-400 hover:text-red-600 rounded hover:bg-red-50 transition cursor-pointer"
                          title="Delete Social Media Link"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── TAB 2: COMPANY CONTACT & FACTORY INFO ── */}
            {activeTab === 'contact' && (
              <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-5 space-y-5">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Company Contact & Factory Details
                  </h3>
                  <p className="text-xs text-slate-500">
                    These contact points are displayed across quotes, customer inquiries, and the website footer.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Sales Email
                    </label>
                    <input
                      type="email"
                      value={companyInfo.salesEmail}
                      onChange={e => setCompanyInfo(prev => ({ ...prev, salesEmail: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Support / Inquiry Email
                    </label>
                    <input
                      type="email"
                      value={companyInfo.supportEmail}
                      onChange={e => setCompanyInfo(prev => ({ ...prev, supportEmail: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Direct WhatsApp Number (digits only, e.g. 923105464116)
                    </label>
                    <input
                      type="text"
                      value={companyInfo.whatsapp}
                      onChange={e => setCompanyInfo(prev => ({ ...prev, whatsapp: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number (Formatted Display)
                    </label>
                    <input
                      type="text"
                      value={companyInfo.phone}
                      onChange={e => setCompanyInfo(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Physical Factory & HQ Address
                    </label>
                    <input
                      type="text"
                      value={companyInfo.address}
                      onChange={e => setCompanyInfo(prev => ({ ...prev, address: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Factory Operating Hours & Export Schedule
                    </label>
                    <input
                      type="text"
                      value={companyInfo.hours}
                      onChange={e => setCompanyInfo(prev => ({ ...prev, hours: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB 3: ANNOUNCEMENT BANNER ── */}
            {activeTab === 'announcement' && (
              <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-5 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Top Header Announcement Promo Bar
                    </h3>
                    <p className="text-xs text-slate-500">
                      Top ticker banner appearing at the very top of all website pages.
                    </p>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={announcementBar.enabled}
                      onChange={e => setAnnouncementBar(prev => ({ ...prev, enabled: e.target.checked }))}
                      className="w-4 h-4 text-[#F26522] rounded focus:ring-[#F26522]"
                    />
                    <span className="text-xs font-bold text-slate-700">
                      {announcementBar.enabled ? 'Banner Visible' : 'Banner Disabled'}
                    </span>
                  </label>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Main Banner Text
                    </label>
                    <input
                      type="text"
                      value={announcementBar.text}
                      onChange={e => setAnnouncementBar(prev => ({ ...prev, text: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 font-medium focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Highlighted Badge Callout Text
                      </label>
                      <input
                        type="text"
                        value={announcementBar.badgeText}
                        onChange={e => setAnnouncementBar(prev => ({ ...prev, badgeText: e.target.value }))}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Badge Target URL / Page
                      </label>
                      <input
                        type="text"
                        value={announcementBar.badgeLink}
                        onChange={e => setAnnouncementBar(prev => ({ ...prev, badgeLink: e.target.value }))}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Secondary Free Shipping & Tariff Guarantee Note
                    </label>
                    <input
                      type="text"
                      value={announcementBar.secondaryText}
                      onChange={e => setAnnouncementBar(prev => ({ ...prev, secondaryText: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                  </div>

                  {/* Live Preview Box */}
                  <div className="pt-2">
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Live Header Preview
                    </span>
                    <div className="bg-[#1E1B6E] text-white px-4 py-2 rounded text-xs flex items-center justify-between overflow-hidden">
                      <span className="truncate">{announcementBar.text}</span>
                      <span className="px-2 py-0.5 bg-[#F26522] text-white rounded text-[10px] font-bold">
                        {announcementBar.badgeText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB 4: CLUB PROGRAM GLOBAL DEFAULTS ── */}
            {activeTab === 'club' && (
              <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-5 space-y-5">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Club Partner Program Global Defaults
                  </h3>
                  <p className="text-xs text-slate-500">
                    Default discount rates and program parameters used when athletic clubs register on the website.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Default Discount Rate (%)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="5"
                        max="50"
                        value={clubProgramDefaults.defaultDiscountPercentage}
                        onChange={e => setClubProgramDefaults(prev => ({ ...prev, defaultDiscountPercentage: Number(e.target.value) }))}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                      />
                      <Percent size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Default Tier Name
                    </label>
                    <input
                      type="text"
                      value={clubProgramDefaults.defaultTier}
                      onChange={e => setClubProgramDefaults(prev => ({ ...prev, defaultTier: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Promo Code Prefix
                    </label>
                    <input
                      type="text"
                      value={clubProgramDefaults.codePrefix}
                      onChange={e => setClubProgramDefaults(prev => ({ ...prev, codePrefix: e.target.value.toUpperCase() }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono font-bold text-[#1E1B6E] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Club Perks & Guarantee Description
                    </label>
                    <textarea
                      rows={3}
                      value={clubProgramDefaults.perksDescription}
                      onChange={e => setClubProgramDefaults(prev => ({ ...prev, perksDescription: e.target.value }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Save Button Bar */}
            <div className="pt-2 flex items-center justify-end">
              <button
                type="button"
                onClick={handleSaveAllSettings}
                disabled={saving}
                className="px-6 py-2.5 bg-[#F26522] hover:bg-orange-600 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition shadow-xs cursor-pointer disabled:opacity-50"
              >
                {saving ? <RefreshCw size={14} className="animate-spin" /> : <Save size={14} />}
                <span>{saving ? 'Saving...' : 'Save All Settings'}</span>
              </button>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
