import React, { useState, useEffect } from 'react';
import api from '../api/client';
import { Layers, Edit3, Eye, CheckCircle2, ChevronDown, ChevronRight, Save } from 'lucide-react';

export default function PagesManager() {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const defaultPagesList = [
    { slug: 'home', title: 'Home Page' },
    { slug: 'explore', title: 'Explore & Knowledge Hub' },
    { slug: 'compliance', title: 'Compliance & OEKO-TEX' },
    { slug: 'certification', title: 'ISO 9001 Certification' },
    { slug: 'about', title: 'About HAMLO SPORTS' },
  ];

  const fetchPage = async (slug) => {
    try {
      const res = await api.get(`/pages/${slug}`);
      if (res.data.success) {
        setSelectedPage(res.data.data);
      }
    } catch (err) {
      // If page doesn't exist yet in DB, initialize template
      setSelectedPage({
        slug,
        title: defaultPagesList.find(p => p.slug === slug)?.title || slug,
        metaTitle: `${slug.toUpperCase()} | HAMLO SPORTS`,
        metaDescription: `Custom sportswear and athletic uniforms factory-direct from Sialkot.`,
        sections: [
          {
            sectionKey: 'hero',
            order: 0,
            isVisible: true,
            heading: 'PRO-GRADE DYE-SUBLIMATED UNIFORMS & TEAM APPAREL',
            subheading: 'CUSTOM SPORTSWEAR & ATHLETIC UNIFORMS MANUFACTURER',
            content: 'Manufactured factory-direct in Sialkot, Pakistan. Zero minimum order quantity.',
            ctaText: 'START CUSTOM ORDER',
            ctaLink: '#inquiry',
          },
          {
            sectionKey: 'ticker',
            order: 1,
            isVisible: true,
            heading: 'TOP TICKER STRIP',
            content: 'FREE 12H 3D MOCKUPS • ZERO MINIMUMS • 2-3 WEEKS FACTORY TURNAROUND',
          }
        ]
      });
    }
  };

  useEffect(() => {
    fetchPage('home');
  }, []);

  const handleSavePage = async () => {
    setSaving(true);
    setSaveMessage('');
    try {
      const res = await api.put(`/pages/${selectedPage.slug}`, selectedPage);
      if (res.data.success) {
        setSaveMessage('✅ Page sections saved successfully to MongoDB!');
        setTimeout(() => setSaveMessage(''), 3000);
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to save page');
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateSection = (idx, field, val) => {
    const updated = { ...selectedPage };
    updated.sections[idx][field] = val;
    setSelectedPage(updated);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            Dynamic Page Sections Editor
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Edit Headings, Subheadings, Banners & Media across Public Pages
          </p>
        </div>

        <button
          onClick={handleSavePage}
          disabled={saving}
          className="px-5 py-2.5 bg-[#F26522] hover:bg-[#d95316] text-white rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow cursor-pointer disabled:opacity-50"
        >
          <Save size={16} />
          <span>{saving ? 'Saving...' : 'Save Page Content'}</span>
        </button>
      </div>

      {saveMessage && (
        <div className="p-3 bg-green-50 border border-green-200 text-green-800 text-xs font-bold rounded-lg">
          {saveMessage}
        </div>
      )}

      {/* Pages Selector Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none">
        {defaultPagesList.map((p) => (
          <button
            key={p.slug}
            onClick={() => fetchPage(p.slug)}
            className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider whitespace-nowrap cursor-pointer transition ${selectedPage?.slug === p.slug ? 'bg-[#1E1B6E] text-white shadow-xs' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'}`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Page Sections Form */}
      {selectedPage && (
        <div className="space-y-6">
          
          {/* SEO Metadata Box */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-black text-xs uppercase tracking-wider text-slate-700">
              Page SEO & Meta Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Meta Title</label>
                <input
                  type="text"
                  value={selectedPage.metaTitle || ''}
                  onChange={(e) => setSelectedPage({ ...selectedPage, metaTitle: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2 text-xs focus:outline-none focus:border-[#F26522]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Meta Description</label>
                <input
                  type="text"
                  value={selectedPage.metaDescription || ''}
                  onChange={(e) => setSelectedPage({ ...selectedPage, metaDescription: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2 text-xs focus:outline-none focus:border-[#F26522]"
                />
              </div>
            </div>
          </div>

          {/* Sections List */}
          <div className="space-y-4">
            <h3 className="font-black text-xs uppercase tracking-wider text-slate-700">
              Live Sections ({selectedPage.sections?.length || 0})
            </h3>

            {selectedPage.sections?.map((sec, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-black text-xs uppercase text-[#F26522] tracking-wider font-mono">
                    Section: {sec.sectionKey}
                  </span>
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sec.isVisible}
                      onChange={(e) => handleUpdateSection(idx, 'isVisible', e.target.checked)}
                      className="rounded text-[#F26522] focus:ring-0"
                    />
                    <span>Visible on Website</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Main Heading</label>
                    <input
                      type="text"
                      value={sec.heading || ''}
                      onChange={(e) => handleUpdateSection(idx, 'heading', e.target.value)}
                      className="w-full border border-slate-300 rounded-lg p-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#F26522]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Subheading / Badge</label>
                    <input
                      type="text"
                      value={sec.subheading || ''}
                      onChange={(e) => handleUpdateSection(idx, 'subheading', e.target.value)}
                      className="w-full border border-slate-300 rounded-lg p-2 text-xs text-slate-700 focus:outline-none focus:border-[#F26522]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Body Content / Description</label>
                  <textarea
                    rows="3"
                    value={sec.content || ''}
                    onChange={(e) => handleUpdateSection(idx, 'content', e.target.value)}
                    className="w-full border border-slate-300 rounded-lg p-2 text-xs text-slate-700 focus:outline-none focus:border-[#F26522]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">CTA Button Text</label>
                    <input
                      type="text"
                      value={sec.ctaText || ''}
                      onChange={(e) => handleUpdateSection(idx, 'ctaText', e.target.value)}
                      className="w-full border border-slate-300 rounded-lg p-2 text-xs text-slate-700 focus:outline-none focus:border-[#F26522]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">CTA Button Link</label>
                    <input
                      type="text"
                      value={sec.ctaLink || ''}
                      onChange={(e) => handleUpdateSection(idx, 'ctaLink', e.target.value)}
                      className="w-full border border-slate-300 rounded-lg p-2 text-xs text-slate-700 focus:outline-none focus:border-[#F26522]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
