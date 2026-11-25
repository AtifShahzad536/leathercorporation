import React, { useState, useEffect } from 'react';
import api from '../api/client';
import { 
  Award, Search, Filter, Mail, Phone, Building, Calendar, 
  CheckCircle, AlertCircle, Trash2, MessageSquare, Tag,
  Percent, ExternalLink, RefreshCw, ChevronRight, Eye,
  Copy, Check, Send, Download, ShieldCheck, Sparkles, X,
  User, MapPin, Hash, Shirt, Clock
} from 'lucide-react';

export default function ClubRegistrationsPage() {
  const [clubs, setClubs] = useState([]);
  const [counts, setCounts] = useState({ all: 0, new: 0, contacted: 0, approved: 0, archived: 0 });
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedClub, setSelectedClub] = useState(null);
  const [discountModalClub, setDiscountModalClub] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [updating, setUpdating] = useState(false);

  // Discount Form State inside Modal
  const [discountForm, setDiscountForm] = useState({
    discountPercentage: 20,
    discountTier: 'Gold Partner Club (20%)',
    discountCode: '',
    discountStatus: 'active',
    discountNotes: '',
    status: 'approved',
    assignedRep: 'Senior Sports Uniform Specialist'
  });

  const fetchClubs = async () => {
    setLoading(true);
    try {
      const params = { status: statusFilter };
      if (search) params.search = search;
      const res = await api.get('/clubs', { params });
      if (res.data.success) {
        setClubs(res.data.data);
        if (res.data.counts) setCounts(res.data.counts);
      }
    } catch (err) {
      console.error('Failed to fetch club registrations:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClubs();
  }, [statusFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchClubs();
  };

  const openDiscountModal = (club) => {
    const cleanClubCode = (club.clubName || 'CLUB')
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .slice(0, 8);
    const defaultPct = club.discountPercentage || 20;
    const generatedCode = club.discountCode || `HAMLO-${cleanClubCode}-${defaultPct}`;

    setDiscountForm({
      discountPercentage: defaultPct,
      discountTier: club.discountTier || `${defaultPct === 20 ? 'Gold Partner Club' : 'Club Partner'} (${defaultPct}%)`,
      discountCode: generatedCode,
      discountStatus: club.discountStatus || 'active',
      discountNotes: club.discountNotes || 'Permanent volume discount on all sublimated team jerseys, pants, and gear. Free 12h 3D mockups included.',
      status: 'approved',
      assignedRep: club.assignedRep || 'Senior Sports Uniform Specialist'
    });
    setDiscountModalClub(club);
  };

  const handlePresetPercentage = (pct, tierName) => {
    const cleanClubCode = (discountModalClub?.clubName || 'CLUB')
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .slice(0, 8);

    setDiscountForm(prev => ({
      ...prev,
      discountPercentage: pct,
      discountTier: tierName || `${pct}% Volume Tier`,
      discountCode: `HAMLO-${cleanClubCode}-${pct}`
    }));
  };

  const handleSaveDiscountAndApprove = async () => {
    if (!discountModalClub) return;
    setUpdating(true);
    try {
      const res = await api.patch(`/clubs/${discountModalClub._id}`, {
        status: discountForm.status,
        discountPercentage: Number(discountForm.discountPercentage),
        discountCode: discountForm.discountCode,
        discountTier: discountForm.discountTier,
        discountStatus: discountForm.discountStatus,
        discountNotes: discountForm.discountNotes,
        assignedRep: discountForm.assignedRep
      });
      if (res.data.success) {
        // Refresh local list
        setClubs(prev => prev.map(c => c._id === discountModalClub._id ? res.data.data : c));
        if (selectedClub?._id === discountModalClub._id) {
          setSelectedClub(res.data.data);
        }
        setDiscountModalClub(null);
        alert(`Success! ${discountModalClub.clubName} has been approved with a ${discountForm.discountPercentage}% discount code (${discountForm.discountCode}).`);
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update club discount');
    } finally {
      setUpdating(false);
    }
  };

  const handleDeleteClub = async (id, clubName) => {
    if (!window.confirm(`Are you sure you want to permanently delete registration for "${clubName}"?`)) return;
    try {
      await api.delete(`/clubs/${id}`);
      setClubs(prev => prev.filter(c => c._id !== id));
      if (selectedClub?._id === id) setSelectedClub(null);
      if (discountModalClub?._id === id) setDiscountModalClub(null);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete club registration');
    }
  };

  const generateWelcomeMessage = (club, form) => {
    const name = club.contactName || 'Coach';
    const cName = club.clubName || 'Your Club';
    const pct = form.discountPercentage || 20;
    const code = form.discountCode || `HAMLO-CLUB-${pct}`;

    return `🏆 Congratulations Coach ${name}!\n\n` +
      `We are thrilled to welcome ${cName} into the HAMLO SPORTS Official Club Partner Program!\n\n` +
      `Your exclusive team perks have been activated:\n` +
      `• Exclusive Team Discount: ${pct}% OFF all custom uniforms & sportswear\n` +
      `• Your Club Promo Code: ${code}\n` +
      `• Priority Factory Production Queue (Direct from Sialkot factory)\n` +
      `• Free 12-Hour 3D Digital Artwork Mockups with unlimited revisions\n` +
      `• Permanent volume rate with ZERO Minimum Order Quantity (0 MOQ) on re-orders\n\n` +
      `To start your season's order or request your free 3D design proof, reply directly here or email sale@hamlosportswear.site. Welcome to the HAMLO family!`;
  };

  const copyToClipboard = (text, type = 'code') => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2000);
    }
  };

  const statusConfig = {
    new: { label: 'New Registration', bg: 'bg-amber-100 text-amber-800 border-amber-200' },
    contacted: { label: 'In Touch / Contacted', bg: 'bg-blue-100 text-blue-800 border-blue-200' },
    approved: { label: 'Approved Partner', bg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    archived: { label: 'Archived', bg: 'bg-slate-100 text-slate-700 border-slate-200' }
  };

  return (
    <div className="h-full flex flex-col overflow-hidden bg-slate-50 text-slate-800 font-sans">
      
      {/* ── TOP STATS & ACTIONS HEADER ── */}
      <div className="p-6 bg-white border-b border-slate-200 shadow-xs shrink-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1.5 bg-[#1E1B6E]/10 text-[#1E1B6E] rounded-md">
                <Award size={18} />
              </span>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Club Registrations & Discount Management
              </h1>
            </div>
            <p className="text-xs text-slate-500">
              Manage athletic club partnerships, review roster applications, and grant custom factory discount codes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchClubs}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-xs font-medium transition cursor-pointer"
              title="Refresh Registrations"
            >
              <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Quick KPI Stat Widgets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-5">
          <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-3">
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">Total Clubs</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-bold text-slate-900">{counts.all || 0}</span>
              <span className="text-[11px] text-slate-400">Applications</span>
            </div>
          </div>

          <div className="bg-amber-50/60 border border-amber-200/60 rounded-lg p-3">
            <span className="text-[11px] font-medium text-amber-700 uppercase tracking-wider block">Needs Review</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-bold text-amber-900">{counts.new || 0}</span>
              <span className="text-[11px] text-amber-600 font-medium">Pending Approval</span>
            </div>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-200/60 rounded-lg p-3">
            <span className="text-[11px] font-medium text-emerald-700 uppercase tracking-wider block">Approved & Active</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-bold text-emerald-900">{counts.approved || 0}</span>
              <span className="text-[11px] text-emerald-600 font-medium">Discount Granted</span>
            </div>
          </div>

          <div className="bg-[#1E1B6E]/5 border border-[#1E1B6E]/15 rounded-lg p-3">
            <span className="text-[11px] font-medium text-[#1E1B6E] uppercase tracking-wider block">Volume Program</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-bold text-[#1E1B6E]">20% - 30%</span>
              <span className="text-[11px] text-slate-500">Factory Tiers</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
            {[
              { id: 'all', label: `All Clubs (${counts.all || 0})` },
              { id: 'new', label: `Pending Review (${counts.new || 0})` },
              { id: 'contacted', label: `In Touch (${counts.contacted || 0})` },
              { id: 'approved', label: `Approved (${counts.approved || 0})` },
              { id: 'archived', label: `Archived (${counts.archived || 0})` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`px-3 py-1.5 rounded-md text-xs whitespace-nowrap font-medium transition cursor-pointer ${
                  statusFilter === tab.id
                    ? 'bg-[#1E1B6E] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSearchSubmit} className="relative min-w-[280px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search club, coach, sport, or ID..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1E1B6E] focus:bg-white transition"
            />
          </form>
        </div>
      </div>

      {/* ── MAIN CONTENT TABLE & LIST ── */}
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        {loading ? (
          <div className="h-64 flex flex-col items-center justify-center text-slate-400">
            <RefreshCw size={24} className="animate-spin mb-2 text-[#1E1B6E]" />
            <span className="text-xs">Loading registered clubs and discount tiers...</span>
          </div>
        ) : clubs.length === 0 ? (
          <div className="h-64 flex flex-col items-center justify-center text-slate-400 bg-white rounded-lg border border-slate-200 p-8 text-center">
            <Award size={36} className="text-slate-300 mb-2" />
            <h3 className="text-sm font-semibold text-slate-700">No Club Registrations Found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              {search 
                ? `No registrations match your search "${search}". Try adjusting the filter or search keywords.`
                : 'When athletic clubs, schools, or academies register on the website, they will appear here.'}
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-semibold">
                    <th className="py-3 px-4">Club / Team</th>
                    <th className="py-3 px-4">Coach / Contact</th>
                    <th className="py-3 px-4">Sport & Scope</th>
                    <th className="py-3 px-4">Logo Artwork</th>
                    <th className="py-3 px-4">Assigned Discount</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {clubs.map(club => {
                    const isApproved = club.status === 'approved';
                    const hasDiscount = Boolean(club.discountPercentage && club.discountCode);
                    const cleanPhone = (club.phone || '').replace(/[^0-9]/g, '');

                    return (
                      <tr key={club._id} className="hover:bg-slate-50/60 transition group">
                        
                        {/* Club & ID */}
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-slate-900 group-hover:text-[#1E1B6E] transition">
                            {club.clubName}
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                            <span className="font-mono text-slate-400">{club.registrationId}</span>
                            <span>•</span>
                            <span className="bg-slate-100 px-1.5 py-0.2 rounded text-slate-600 font-medium">
                              {club.orgType || 'Club'}
                            </span>
                          </div>
                        </td>

                        {/* Coach Contact */}
                        <td className="py-3.5 px-4">
                          <div className="font-medium text-slate-800">{club.contactName}</div>
                          <div className="text-[11px] text-slate-500">{club.role || 'Head Coach'}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <a 
                              href={`mailto:${club.email}`}
                              className="text-slate-400 hover:text-[#1E1B6E] transition"
                              title={`Email: ${club.email}`}
                            >
                              <Mail size={12} />
                            </a>
                            {cleanPhone && (
                              <a 
                                href={`https://wa.me/${cleanPhone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-emerald-600 transition"
                                title={`WhatsApp: ${club.phone}`}
                              >
                                <Phone size={12} />
                              </a>
                            )}
                            <span className="text-[11px] text-slate-500 font-mono">{club.phone}</span>
                          </div>
                        </td>

                        {/* Sport & Scope */}
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-[#F26522] uppercase tracking-wide text-[11px]">
                            {club.sport}
                          </div>
                          <div className="text-[11px] text-slate-600 mt-0.5">
                            {club.totalTeams} Teams • {club.totalPlayers} Players
                          </div>
                          {club.teamColors && (
                            <div className="text-[10px] text-slate-400 truncate max-w-[150px]">
                              Colors: {club.teamColors}
                            </div>
                          )}
                        </td>

                        {/* Logo Artwork Preview */}
                        <td className="py-3.5 px-4">
                          {club.logoUrl ? (
                            <div className="flex items-center gap-2">
                              <a 
                                href={club.logoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded border border-slate-200 bg-white p-0.5 flex items-center justify-center overflow-hidden hover:border-[#F26522] transition shadow-2xs group/img"
                              >
                                <img 
                                  src={club.logoUrl} 
                                  alt={club.clubName} 
                                  className="w-full h-full object-contain group-hover/img:scale-110 transition-transform" 
                                />
                              </a>
                              <a 
                                href={club.logoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[11px] text-[#1E1B6E] hover:underline flex items-center gap-0.5 font-medium"
                              >
                                <span>View</span>
                                <ExternalLink size={10} />
                              </a>
                            </div>
                          ) : (
                            <span className="text-[11px] text-slate-400 italic">No file attached</span>
                          )}
                        </td>

                        {/* Assigned Discount Details */}
                        <td className="py-3.5 px-4">
                          {hasDiscount && isApproved ? (
                            <div className="space-y-0.5">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                <Percent size={10} />
                                <span>{club.discountPercentage}% OFF Active</span>
                              </span>
                              <div className="text-[11px] font-mono text-slate-700 font-medium">
                                Code: <span className="bg-slate-100 px-1 py-0.5 rounded text-[#1E1B6E] font-bold">{club.discountCode}</span>
                              </div>
                              <div className="text-[10px] text-slate-500">{club.discountTier}</div>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                                <AlertCircle size={10} />
                                <span>Discount Pending</span>
                              </span>
                              <button
                                onClick={() => openDiscountModal(club)}
                                className="block text-[11px] text-[#F26522] hover:text-orange-700 font-bold hover:underline cursor-pointer"
                              >
                                + Set Discount Code
                              </button>
                            </div>
                          )}
                        </td>

                        {/* Status Badge */}
                        <td className="py-3.5 px-4">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                            statusConfig[club.status]?.bg || 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}>
                            {statusConfig[club.status]?.label || club.status}
                          </span>
                        </td>

                        {/* Submission Date */}
                        <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap text-[11px]">
                          {new Date(club.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            
                            {/* Primary Discount Action Button */}
                            <button
                              onClick={() => openDiscountModal(club)}
                              className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1 transition cursor-pointer ${
                                isApproved
                                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                  : 'bg-[#F26522] hover:bg-orange-600 text-white shadow-xs'
                              }`}
                              title="Assign or modify discount percentage & code"
                            >
                              <Percent size={11} strokeWidth={2.5} />
                              <span>{isApproved ? 'Edit Discount' : 'Assign Discount'}</span>
                            </button>

                            {/* View Full Info Drawer Button */}
                            <button
                              onClick={() => setSelectedClub(club)}
                              className="p-1.5 text-slate-500 hover:text-[#1E1B6E] hover:bg-slate-100 rounded transition cursor-pointer"
                              title="View Full Application"
                            >
                              <Eye size={14} />
                            </button>

                            {/* Delete Action */}
                            <button
                              onClick={() => handleDeleteClub(club._id, club.clubName)}
                              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition cursor-pointer"
                              title="Delete Registration"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ── MODAL 1: ASSIGN DISCOUNT & APPROVE CLUB PARTNER ── */}
      {discountModalClub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-2xl w-full my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="bg-[#1E1B6E] text-white p-5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-1 bg-white/10 rounded">
                    <Award size={18} className="text-[#F26522]" />
                  </span>
                  <h3 className="text-base font-bold">
                    Assign Club Discount & Approve Partner
                  </h3>
                </div>
                <p className="text-xs text-white/70 mt-1">
                  Configure volume discount perks for <span className="text-white font-semibold">{discountModalClub.clubName}</span> ({discountModalClub.sport})
                </p>
              </div>
              <button 
                onClick={() => setDiscountModalClub(null)}
                className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
              
              {/* Coach & Club Summary Bar */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Coach / Contact</span>
                  <span className="font-bold text-slate-800">{discountModalClub.contactName}</span> ({discountModalClub.role || 'Coach'})
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Contact Email</span>
                  <span className="font-mono text-slate-700">{discountModalClub.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Estimated Players</span>
                  <span className="font-bold text-[#F26522]">{discountModalClub.totalPlayers || '15-30'}</span> ({discountModalClub.totalTeams || '1-2'} Teams)
                </div>
              </div>

              {/* 1. Quick Percentage Preset Buttons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Discount Percentage
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { pct: 10, tier: 'Starter Club (10%)' },
                    { pct: 15, tier: 'Silver Squad (15%)' },
                    { pct: 20, tier: 'Gold Partner Club (20%)', popular: true },
                    { pct: 25, tier: 'Platinum Academy (25%)' },
                    { pct: 30, tier: 'VIP Factory Direct (30%)' },
                  ].map(p => (
                    <button
                      key={p.pct}
                      type="button"
                      onClick={() => handlePresetPercentage(p.pct, p.tier)}
                      className={`py-2.5 px-2 rounded-lg border text-center transition cursor-pointer relative ${
                        discountForm.discountPercentage === p.pct
                          ? 'border-[#F26522] bg-orange-50/50 text-[#F26522] font-bold shadow-xs ring-2 ring-[#F26522]/20'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {p.popular && (
                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#F26522] text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-tighter">
                          Popular
                        </span>
                      )}
                      <div className="text-base font-extrabold">{p.pct}%</div>
                      <div className="text-[10px] text-slate-500 truncate">{p.tier.split(' ')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Custom Percent & Tier Name Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Custom Percentage (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="5"
                      max="50"
                      value={discountForm.discountPercentage}
                      onChange={e => handlePresetPercentage(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                    <Percent size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Discount Tier Label
                  </label>
                  <input
                    type="text"
                    value={discountForm.discountTier}
                    onChange={e => setDiscountForm(prev => ({ ...prev, discountTier: e.target.value }))}
                    placeholder="e.g. Gold Partner Club (20%)"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                  />
                </div>
              </div>

              {/* 3. Promo Code Configuration */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Club Discount Promo Code (Used at Checkout / Inquiries)
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={discountForm.discountCode}
                      onChange={e => setDiscountForm(prev => ({ ...prev, discountCode: e.target.value.toUpperCase() }))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-mono font-bold tracking-wider text-[#1E1B6E] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                    />
                    <Tag size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(discountForm.discountCode, 'code')}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
                  >
                    {copiedCode ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Coaches will enter this unique code to apply their approved factory pricing rate.
                </p>
              </div>

              {/* 4. Partnership Status & Representative */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Partnership Status
                  </label>
                  <select
                    value={discountForm.status}
                    onChange={e => setDiscountForm(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                  >
                    <option value="approved">Approved & Active (Recommended)</option>
                    <option value="contacted">In Discussion / Contacted</option>
                    <option value="new">Pending Review</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Assigned Account Representative
                  </label>
                  <input
                    type="text"
                    value={discountForm.assignedRep}
                    onChange={e => setDiscountForm(prev => ({ ...prev, assignedRep: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E1B6E]"
                  />
                </div>
              </div>

              {/* 5. Ready-to-Send Welcome & Discount Message Generator */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#F26522]" />
                    <span>Instant Welcome & Discount Notification</span>
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(generateWelcomeMessage(discountModalClub, discountForm), 'message')}
                      className="text-xs text-[#1E1B6E] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                    >
                      {copiedMessage ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                      <span>{copiedMessage ? 'Copied Full Note' : 'Copy Note'}</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded p-3 text-[11px] font-mono text-slate-600 whitespace-pre-wrap max-h-36 overflow-y-auto">
                  {generateWelcomeMessage(discountModalClub, discountForm)}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {discountModalClub.phone && (
                    <a
                      href={`https://wa.me/${discountModalClub.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(generateWelcomeMessage(discountModalClub, discountForm))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-semibold flex items-center gap-1.5 transition shadow-xs"
                    >
                      <Phone size={12} />
                      <span>Send Code via WhatsApp</span>
                    </a>
                  )}

                  <a
                    href={`mailto:${discountModalClub.email}?subject=${encodeURIComponent(`HAMLO SPORTS Club Partner Approval - ${discountForm.discountPercentage}% Discount Code [${discountForm.discountCode}]`)}&body=${encodeURIComponent(generateWelcomeMessage(discountModalClub, discountForm))}`}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-md text-xs font-semibold flex items-center gap-1.5 transition shadow-xs"
                  >
                    <Mail size={12} />
                    <span>Send via Email</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Modal Footer Buttons */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setDiscountModalClub(null)}
                className="px-4 py-2 text-slate-600 hover:text-slate-900 text-xs font-medium cursor-pointer"
              >
                Cancel
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={updating}
                  onClick={handleSaveDiscountAndApprove}
                  className="px-5 py-2 bg-[#F26522] hover:bg-orange-600 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition shadow-xs cursor-pointer disabled:opacity-50"
                >
                  <CheckCircle size={14} />
                  <span>{updating ? 'Saving Changes...' : 'Save & Grant Discount'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ── MODAL 2: FULL APPLICATION DETAILS DRAWER ── */}
      {selectedClub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-2xl w-full my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Drawer Header */}
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#F26522]">{selectedClub.registrationId}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-white/90">{selectedClub.orgType}</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  {selectedClub.clubName}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedClub(null)}
                className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Application Detail Content */}
            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto custom-scrollbar text-xs">
              
              {/* Discount Status Callout */}
              <div className={`p-4 rounded-lg border flex items-center justify-between gap-4 ${
                selectedClub.status === 'approved'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}>
                <div>
                  <span className="font-bold text-sm block">
                    {selectedClub.status === 'approved' 
                      ? `Approved Partner: ${selectedClub.discountPercentage || 20}% OFF` 
                      : 'Pending Review & Discount Grant'}
                  </span>
                  <span className="text-[11px] opacity-80">
                    {selectedClub.discountCode 
                      ? `Promo Code: ${selectedClub.discountCode} (${selectedClub.discountTier})` 
                      : 'No discount code has been generated for this club yet.'}
                  </span>
                </div>

                <button
                  onClick={() => {
                    const c = selectedClub;
                    setSelectedClub(null);
                    openDiscountModal(c);
                  }}
                  className="px-3 py-1.5 bg-[#F26522] hover:bg-orange-600 text-white rounded font-bold text-xs shadow-xs shrink-0 cursor-pointer"
                >
                  {selectedClub.status === 'approved' ? 'Edit Discount' : 'Assign Discount'}
                </button>
              </div>

              {/* Grid 1: Club & Organization Info */}
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <Building size={13} className="text-slate-400" />
                  <span>Club & Sport Overview</span>
                </h4>
                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Sport Discipline</span>
                    <span className="font-bold text-[#F26522] text-sm uppercase">{selectedClub.sport}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">League / Division</span>
                    <span className="font-semibold text-slate-800">{selectedClub.league || 'Independent'}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 block text-[10px] uppercase">Club Description / Mission</span>
                    <span className="text-slate-700">{selectedClub.description || 'No description provided.'}</span>
                  </div>
                </div>
              </div>

              {/* Grid 2: Contact Details */}
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <User size={13} className="text-slate-400" />
                  <span>Coach / Primary Contact Person</span>
                </h4>
                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Name & Role</span>
                    <span className="font-semibold text-slate-900">{selectedClub.contactName} ({selectedClub.role || 'Head Coach'})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Preferred Contact</span>
                    <span className="font-medium text-slate-700">{selectedClub.preferredContact || 'Email'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Email</span>
                    <a href={`mailto:${selectedClub.email}`} className="text-[#1E1B6E] hover:underline font-mono">
                      {selectedClub.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Phone / WhatsApp</span>
                    <span className="font-mono text-slate-800">{selectedClub.phone}</span>
                  </div>
                </div>
              </div>

              {/* Grid 3: Uniform Needs & Artwork */}
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <Shirt size={13} className="text-slate-400" />
                  <span>Roster Scope & Uniform Requirements</span>
                </h4>
                <div className="space-y-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Total Teams</span>
                      <span className="font-bold text-slate-800">{selectedClub.totalTeams}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Total Players</span>
                      <span className="font-bold text-slate-800">{selectedClub.totalPlayers}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Team Colors</span>
                      <span className="font-semibold text-slate-800">{selectedClub.teamColors || 'N/A'}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Garments & Uniform Needs</span>
                    <span className="text-slate-700 block mt-0.5">{selectedClub.uniformNeeds || 'Standard team uniform sets'}</span>
                  </div>

                  {selectedClub.logoUrl && (
                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={selectedClub.logoUrl} 
                          alt="Logo Artwork" 
                          className="w-12 h-12 object-contain bg-white rounded border border-slate-200 p-1" 
                        />
                        <div>
                          <span className="font-semibold text-slate-800 block">Uploaded Club Artwork</span>
                          <span className="text-[10px] text-slate-400">High-resolution logo file ready for 3D proofing</span>
                        </div>
                      </div>

                      <a
                        href={selectedClub.logoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-medium text-xs flex items-center gap-1 transition"
                      >
                        <ExternalLink size={12} />
                        <span>Open Artwork</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Grid 4: Address Details */}
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <MapPin size={13} className="text-slate-400" />
                  <span>Shipping & Billing Address</span>
                </h4>
                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <p className="text-slate-700">
                    {selectedClub.address ? `${selectedClub.address}, ` : ''}
                    {selectedClub.city ? `${selectedClub.city}, ` : ''}
                    {selectedClub.state ? `${selectedClub.state} ` : ''}
                    {selectedClub.zip ? `${selectedClub.zip}, ` : ''}
                    {selectedClub.country || 'USA'}
                  </p>
                  {selectedClub.isTaxExempt && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-medium text-[10px]">
                      Tax Exempt Organization
                    </span>
                  )}
                </div>
              </div>

            </div>

            {/* Drawer Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleDeleteClub(selectedClub._id, selectedClub.clubName)}
                className="text-xs text-red-600 hover:underline font-medium cursor-pointer"
              >
                Delete This Application
              </button>

              <button
                type="button"
                onClick={() => setSelectedClub(null)}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-900 transition cursor-pointer"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
