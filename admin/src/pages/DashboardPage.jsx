import React, { useState, useEffect } from 'react';
import api from '../api/client';
import { 
  Package, Layers, Mail, Clock, CheckCircle2, 
  MessageSquare, Box, ArrowUpRight, RefreshCw, 
  ChevronRight, Calendar, User, Eye, Sparkles, Award
} from 'lucide-react';
import { 
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, 
  Tooltip, ResponsiveContainer, CartesianGrid, Legend 
} from 'recharts';

export default function DashboardPage({ onNavigate }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchDashboard = async () => {
    try {
      setRefreshing(true);
      const res = await api.get('/analytics/dashboard');
      if (res.data.success) {
        setData(res.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch dashboard metrics', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const stats = data?.stats;

  const statusBadges = {
    new: { label: 'New Lead', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    in_progress: { label: 'In Review', bg: 'bg-blue-50 text-blue-700 border-blue-200' },
    quoted: { label: 'Quote Sent', bg: 'bg-purple-50 text-purple-700 border-purple-200' },
    closed: { label: 'Closed', bg: 'bg-slate-100 text-slate-700 border-slate-200' },
  };

  return (
    <div className="space-y-6">
      
      {/* ── TOP HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
            Operations & Studio Dashboard
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            Real-time overview of customer inquiries, 3D customization volume, and catalog status.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchDashboard}
            disabled={refreshing}
            className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg shadow-xs flex items-center gap-1.5 transition cursor-pointer"
          >
            <RefreshCw size={13} className={refreshing ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Club Registration & Discount Program Banner */}
      <div className="bg-gradient-to-r from-[#1E1B6E] to-indigo-900 text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-indigo-950">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#F26522] shrink-0">
            <Award size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-tight">
              Club Registrations & Discount Program
            </h3>
            <p className="text-xs text-white/70 mt-0.5">
              Review athletic team applications, assign factory volume discounts (15%–30%), and generate club promo codes.
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('clubs')}
          className="px-4 py-2 bg-[#F26522] hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
        >
          <span>Manage Club Registrations</span>
          <ChevronRight size={14} />
        </button>
      </div>

      {/* ── 4 KEY METRIC CARDS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Customer Inquiries & Quotes */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium text-slate-500">Quotes & Inquiries</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[#1E1B6E] flex items-center justify-center">
              <MessageSquare size={16} />
            </div>
          </div>
          <div className="text-2xl font-semibold text-slate-900">
            {stats?.totalInquiries ?? 0}
          </div>
          <div className="mt-2.5 flex items-center justify-between text-xs text-slate-500">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              {stats?.newInquiries ?? 0} new leads
            </span>
            <button 
              onClick={() => onNavigate('inquiries')} 
              className="text-[#1E1B6E] font-medium hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>Inbox</span>
              <ChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* 3D Customizer Sessions */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium text-slate-500">3D Designs Created</span>
            <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F26522] flex items-center justify-center">
              <Box size={16} />
            </div>
          </div>
          <div className="text-2xl font-semibold text-slate-900">
            {stats?.totalCustomDesigns ?? 0}
          </div>
          <div className="mt-2.5 flex items-center justify-between text-xs text-slate-500">
            <span>Customer Studio</span>
            <button 
              onClick={() => onNavigate('models3d')} 
              className="text-[#F26522] font-medium hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>Models</span>
              <ChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* Live Catalog Uniforms */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium text-slate-500">Catalog Products</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Package size={16} />
            </div>
          </div>
          <div className="text-2xl font-semibold text-slate-900">
            {stats?.totalProducts ?? 296}
          </div>
          <div className="mt-2.5 flex items-center justify-between text-xs text-slate-500">
            <span>12 Sports Covered</span>
            <button 
              onClick={() => onNavigate('products')} 
              className="text-[#1E1B6E] font-medium hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>Catalog</span>
              <ChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* 3D Models in Vault */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium text-slate-500">3D Models Configured</span>
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
              <Layers size={16} />
            </div>
          </div>
          <div className="text-2xl font-semibold text-slate-900">
            {stats?.totalModels3D ?? 0}
          </div>
          <div className="mt-2.5 flex items-center justify-between text-xs text-slate-500">
            <span className="text-emerald-700 font-medium">
              {stats?.publishedModels3D ?? 0} Published
            </span>
            <button 
              onClick={() => onNavigate('models3d')} 
              className="text-[#1E1B6E] font-medium hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>Manage</span>
              <ChevronRight size={12} />
            </button>
          </div>
        </div>

      </div>

      {/* ── CHARTS SECTION ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Chart 1: 14-Day Activity Trend (8 cols) */}
        <div className="lg:col-span-8 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Studio Customizations & Inquiries Trend
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                14-day tracking of customer 3D customizer requests and general quote inquiries.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1E1B6E]" />
                <span>Inquiries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F26522]" />
                <span>3D Custom Designs</span>
              </div>
            </div>
          </div>

          <div className="h-64 w-full">
            {data?.activityTimeline && data.activityTimeline.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.activityTimeline} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorInquiries" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1E1B6E" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#1E1B6E" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorDesigns" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F26522" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#F26522" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis dataKey="label" stroke="#94A3B8" fontSize={11} tickLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} allowDecimals={false} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FFFFFF', 
                      borderColor: '#E2E8F0', 
                      borderRadius: '8px', 
                      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                      fontSize: '12px' 
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="inquiries" 
                    name="Inquiries" 
                    stroke="#1E1B6E" 
                    strokeWidth={2} 
                    fillOpacity={1} 
                    fill="url(#colorInquiries)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="customDesigns" 
                    name="3D Custom Designs" 
                    stroke="#F26522" 
                    strokeWidth={2} 
                    fillOpacity={1} 
                    fill="url(#colorDesigns)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 text-xs">
                <Clock size={28} className="mb-2 text-slate-300" />
                <span>No activity logged in the last 14 days.</span>
              </div>
            )}
          </div>
        </div>

        {/* Chart 2: Products by Sport Discipline (4 cols) */}
        <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-semibold text-slate-900">
                Catalog by Sport
              </h3>
              <span className="text-[11px] text-slate-500 font-normal">Products Count</span>
            </div>
            <p className="text-xs text-slate-500 font-normal mb-4">
              Breakdown of uniform cuts in factory catalog.
            </p>

            <div className="h-60 w-full">
              {data?.sportsDistribution && data.sportsDistribution.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={data.sportsDistribution.slice(0, 6)} 
                    layout="vertical"
                    margin={{ top: 5, right: 15, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F1F5F9" />
                    <XAxis type="number" stroke="#94A3B8" fontSize={10} tickLine={false} />
                    <YAxis 
                      type="category" 
                      dataKey="sport" 
                      stroke="#64748B" 
                      fontSize={11} 
                      tickLine={false}
                      width={70}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#FFFFFF', 
                        borderColor: '#E2E8F0', 
                        borderRadius: '8px', 
                        fontSize: '12px' 
                      }} 
                    />
                    <Bar dataKey="products" name="Products" fill="#1E1B6E" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 text-xs">
                  <span>No products found in catalog.</span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="w-full mt-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-medium border border-slate-200 transition cursor-pointer flex items-center justify-center gap-1"
          >
            <span>View All Products</span>
            <ChevronRight size={13} />
          </button>
        </div>

      </div>

      {/* ── TABLES SECTION: RECENT INQUIRIES & RECENT 3D MODELS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Recent Quotes & Inquiries Table (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Recent Customer Quotes & Inquiries
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                Incoming custom uniform and team quote requests.
              </p>
            </div>
            <button
              onClick={() => onNavigate('inquiries')}
              className="text-xs text-[#1E1B6E] font-medium hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>View All</span>
              <ChevronRight size={13} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-4 font-medium">Customer / Club</th>
                  <th className="py-2.5 px-4 font-medium">Sport</th>
                  <th className="py-2.5 px-4 font-medium">Quantity</th>
                  <th className="py-2.5 px-4 font-medium">Status</th>
                  <th className="py-2.5 px-4 font-medium text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {data?.recentInquiries && data.recentInquiries.length > 0 ? (
                  data.recentInquiries.map((inq) => {
                    const badge = statusBadges[inq.status] || statusBadges.new;
                    const dateStr = new Date(inq.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    });

                    return (
                      <tr key={inq._id} className="hover:bg-slate-50/70 transition">
                        <td className="py-3 px-4">
                          <span className="font-medium text-slate-900 block truncate max-w-[160px]">
                            {inq.name}
                          </span>
                          <span className="text-[11px] text-slate-500 block truncate max-w-[160px]">
                            {inq.company || inq.email}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded text-[11px] font-normal bg-slate-100 text-slate-700">
                            {inq.sport || 'General'}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-normal text-slate-600">
                          {inq.quantity ? `${inq.quantity} sets` : '—'}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${badge.bg}`}>
                            {badge.label}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-slate-400 font-normal">
                          {dateStr}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-slate-400 text-xs">
                      No customer inquiries recorded yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active 3D Models Table (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  3D Studio Models
                </h3>
                <p className="text-xs text-slate-500 font-normal">
                  Production GLB models linked to customizer.
                </p>
              </div>
              <button
                onClick={() => onNavigate('models3d')}
                className="text-xs text-[#1E1B6E] font-medium hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                <span>Manage</span>
                <ChevronRight size={13} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-4 font-medium">Model</th>
                    <th className="py-2.5 px-4 font-medium">Sport</th>
                    <th className="py-2.5 px-4 font-medium">Meshes</th>
                    <th className="py-2.5 px-4 font-medium text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {data?.recentModels && data.recentModels.length > 0 ? (
                    data.recentModels.map((m) => (
                      <tr key={m._id} className="hover:bg-slate-50/70 transition">
                        <td className="py-3 px-4">
                          <span className="font-medium text-slate-900 block truncate max-w-[140px]">
                            {m.name}
                          </span>
                          <span className="text-[11px] text-slate-500 block truncate">
                            {m.cut}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded text-[11px] font-normal bg-slate-100 text-slate-700">
                            {m.sport}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-600 font-normal">
                          {m.meshes?.length || 0} parts
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${
                            m.isPublished 
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}>
                            {m.isPublished ? 'Live' : 'Draft'}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="py-8 text-center text-slate-400 text-xs">
                        No 3D models uploaded yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-3.5 border-t border-slate-200 bg-slate-50/50">
            <button
              onClick={() => onNavigate('models3d')}
              className="w-full py-2 bg-white hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-medium border border-slate-200 transition cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Box size={14} className="text-[#F26522]" />
              <span>Configure 3D Models & Mesh Inspector</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}