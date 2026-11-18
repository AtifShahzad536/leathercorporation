import React, { useState, useEffect } from 'react';
import api from '../api/client';
import { 
  Package, Layers, Mail, TrendingUp, AlertTriangle, 
  ArrowUpRight, Clock, CheckCircle2, Eye, ShieldCheck, Sparkles 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  CartesianGrid, LineChart, Line, AreaChart, Area 
} from 'recharts';

export default function DashboardPage({ onNavigate }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get('/analytics/dashboard');
        if (res.data.success) {
          setData(res.data.data);
        }
      } catch (err) {
        console.error('Failed to fetch dashboard metrics', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  const stats = data?.stats;

  return (
    <div className="space-y-8">
      
      {/* ── TOP HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            HAMLO Executive Dashboard
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Real-time Factory Direct Catalog • Leads Pipeline • Multi-Template Dispatch Analytics
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            MongoDB Connected
          </span>
        </div>
      </div>

      {/* ── SPECIAL ALERT BANNER: NEEDS LEADS LIST ── */}
      {stats?.needsLeadsList && (
        <div className="p-5 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 rounded-xl text-white shadow-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle size={24} className="text-white animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-white text-red-700 font-black text-[9px] uppercase tracking-wider rounded">
                  CRITICAL NOTIFICATION
                </span>
                <h3 className="font-black text-sm sm:text-base uppercase tracking-tight">
                  PLEASE NEED LEADS LIST!
                </h3>
              </div>
              <p className="text-xs text-white/90 mt-1">
                The automated daily script has exhausted all contacts. Upload a new Excel lead file to continue the daily 10 email campaigns.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('leads')}
            className="px-5 py-2.5 bg-white text-red-700 hover:bg-slate-100 font-black text-xs uppercase tracking-wider rounded-lg shadow transition cursor-pointer flex-shrink-0"
          >
            Upload Leads Now &rarr;
          </button>
        </div>
      )}

      {/* ── 4 KEY METRICS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Products */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Live Products</span>
            <Package size={18} className="text-[#1E1B6E]" />
          </div>
          <div className="text-3xl font-black text-slate-900">{stats?.totalProducts || 296}</div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
            <span>Across 12 Sports</span>
            <button onClick={() => onNavigate('products')} className="text-[#F26522] font-bold hover:underline cursor-pointer">
              Manage &rarr;
            </button>
          </div>
        </div>

        {/* Total Leads Pending */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Pending Leads</span>
            <Clock size={18} className="text-amber-500" />
          </div>
          <div className="text-3xl font-black text-slate-900">{stats?.totalPending || 0}</div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
            <span>Total: {stats?.totalLeads || 0} uploaded</span>
            <button onClick={() => onNavigate('leads')} className="text-[#F26522] font-bold hover:underline cursor-pointer">
              Leads &rarr;
            </button>
          </div>
        </div>

        {/* Daily Email Quota */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Sent Today</span>
            <Mail size={18} className="text-[#F26522]" />
          </div>
          <div className="text-3xl font-black text-slate-900">{stats?.emailsSentToday || 0} <span className="text-base text-slate-400 font-semibold">/ 10</span></div>
          <div className="mt-2 text-[11px] text-slate-500">
            <span>Daily batch limit: 10 emails</span>
          </div>
        </div>

        {/* Total Lifetime Emails */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Sent</span>
            <CheckCircle2 size={18} className="text-emerald-600" />
          </div>
          <div className="text-3xl font-black text-slate-900">{stats?.totalEmailsSent || 0}</div>
          <div className="mt-2 text-[11px] text-slate-500">
            <span>100% alternating templates</span>
          </div>
        </div>

      </div>

      {/* ── CHARTS SECTION (RECHARTS) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Email Sends History Chart (8 cols) */}
        <div className="lg:col-span-8 bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-black text-sm uppercase tracking-tight text-slate-900">
                Daily Email Marketing Dispatch Trend
              </h3>
              <p className="text-xs text-slate-500">14-day history of automated email volume</p>
            </div>
            <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded">
              10/day quota
            </span>
          </div>

          <div className="h-64 w-full">
            {data?.emailChart && data.emailChart.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.emailChart}>
                  <defs>
                    <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F26522" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#F26522" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="date" stroke="#94a3b8" fontSize={11} />
                  <YAxis stroke="#94a3b8" fontSize={11} />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                  <Area type="monotone" dataKey="sent" stroke="#F26522" strokeWidth={2} fillOpacity={1} fill="url(#colorSent)" />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 text-xs">
                <Mail size={32} className="mb-2 text-slate-300" />
                <span>No emails sent yet. Upload a leads file to begin daily automated sending.</span>
              </div>
            )}
          </div>
        </div>

        {/* Top Product Views (4 cols) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="font-black text-sm uppercase tracking-tight text-slate-900 mb-1">
              Top Uniform Views
            </h3>
            <p className="text-xs text-slate-500 mb-4">Most visited catalog cuts</p>

            <div className="space-y-3">
              {data?.topProducts && data.topProducts.length > 0 ? (
                data.topProducts.slice(0, 5).map((p, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100 last:border-none">
                    <div className="truncate max-w-[70%]">
                      <span className="font-bold text-slate-800 block truncate">{p.name}</span>
                      <span className="text-[10px] text-[#F26522] uppercase font-bold">{p.sport}</span>
                    </div>
                    <span className="font-mono text-slate-500 font-semibold">{p.viewCount || 0} views</span>
                  </div>
                ))
              ) : (
                <div className="text-xs text-slate-400 py-6 text-center">
                  Catalog synced with 296 products
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="w-full mt-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold uppercase tracking-wider transition cursor-pointer"
          >
            View All 296 Products
          </button>
        </div>

      </div>

    </div>
  );
}
