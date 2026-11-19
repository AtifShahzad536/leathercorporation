import React, { useState, useEffect } from 'react';
import api from '../api/client';
import { 
  Inbox, Search, Filter, Mail, Phone, Building, Calendar, 
  Clock, CheckCircle, AlertCircle, Trash2, MessageSquare, 
  Send, RefreshCw, ChevronRight, User, ExternalLink 
} from 'lucide-react';

export default function InquiriesManager() {
  const [inquiries, setInquiries] = useState([]);
  const [counts, setCounts] = useState({ all: 0, new: 0, in_progress: 0, quoted: 0, closed: 0 });
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [internalNotes, setInternalNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const params = { status: statusFilter };
      if (search) params.search = search;
      const res = await api.get('/inquiries', { params });
      if (res.data.success) {
        setInquiries(res.data.data);
        setCounts(res.data.counts);
        if (selectedInquiry) {
          const fresh = res.data.data.find(i => i._id === selectedInquiry._id);
          if (fresh) setSelectedInquiry(fresh);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, [statusFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchInquiries();
  };

  const handleSelect = (item) => {
    setSelectedInquiry(item);
    setInternalNotes(item.notes || '');
  };

  const handleUpdateStatus = async (id, newStatus) => {
    setUpdating(true);
    try {
      const res = await api.patch(`/inquiries/${id}/status`, { status: newStatus });
      if (res.data.success) {
        fetchInquiries();
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update status');
    } finally {
      setUpdating(false);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedInquiry) return;
    setUpdating(true);
    try {
      const res = await api.patch(`/inquiries/${selectedInquiry._id}/status`, { notes: internalNotes });
      if (res.data.success) {
        setSelectedInquiry(res.data.data);
        alert('Notes saved!');
      }
    } catch (err) {
      alert('Failed to save notes');
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this inquiry?')) return;
    try {
      await api.delete(`/inquiries/${id}`);
      if (selectedInquiry?._id === id) setSelectedInquiry(null);
      fetchInquiries();
    } catch (err) {
      console.error(err);
    }
  };

  const statusBadges = {
    new: { label: 'New Lead', bg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    in_progress: { label: 'In Review', bg: 'bg-blue-100 text-blue-800 border-blue-200' },
    quoted: { label: 'Quote Sent', bg: 'bg-purple-100 text-purple-800 border-purple-200' },
    closed: { label: 'Closed / Deal', bg: 'bg-slate-100 text-slate-700 border-slate-200' },
  };

  return (
    <div className="space-y-6">
      
      {/* ── TOP HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
            Customer Inquiries & Custom Quotes Desk
          </h1>
          <p className="text-xs text-slate-500 font-normal mt-0.5">
            Real-time inquiries from website forms, contact requests, and 3D customizer submissions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchInquiries}
            className="px-3.5 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-medium shadow-xs cursor-pointer flex items-center gap-2"
          >
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
            <span>Refresh Leads</span>
          </button>
        </div>
      </div>

      {/* ── FILTER CHIPS & SEARCH BAR ── */}
      <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {[
            { id: 'all', label: 'All Inquiries', count: counts.all },
            { id: 'new', label: 'New', count: counts.new, color: 'text-emerald-600' },
            { id: 'in_progress', label: 'In Review', count: counts.in_progress },
            { id: 'quoted', label: 'Quote Sent', count: counts.quoted },
            { id: 'closed', label: 'Closed', count: counts.closed },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap cursor-pointer transition flex items-center gap-1.5 ${
                statusFilter === tab.id 
                  ? 'bg-[#1E1B6E] text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] font-medium px-1.5 py-0.2 rounded ${
                statusFilter === tab.id ? 'bg-[#F26522] text-white' : 'bg-slate-200 text-slate-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="w-full md:w-72 relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, email, club..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:border-[#F26522]"
          />
        </form>
      </div>

      {/* ── 2-COLUMN DESK: LIST (LEFT) + DETAILS (RIGHT) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Inquiries Table / List (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between text-xs">
            <span className="font-bold text-slate-700">Inbox ({inquiries.length} Messages)</span>
            <span className="text-slate-400 font-mono">Sorted by Most Recent</span>
          </div>

          <div className="divide-y divide-slate-100 max-h-[680px] overflow-y-auto custom-scrollbar">
            {inquiries.map((inq) => {
              const isSelected = selectedInquiry?._id === inq._id;
              const badge = statusBadges[inq.status] || statusBadges.new;

              return (
                <div
                  key={inq._id}
                  onClick={() => handleSelect(inq)}
                  className={`p-4 transition cursor-pointer flex flex-col justify-between gap-2.5 ${
                    isSelected ? 'bg-indigo-50/60 border-l-4 border-l-[#F26522]' : 'hover:bg-slate-50/80'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-sm text-slate-900">{inq.name}</span>
                      {inq.company && (
                        <span className="text-[10px] text-slate-400 font-medium font-mono">
                          • {inq.company}
                        </span>
                      )}
                    </div>
                    
                    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border ${badge.bg}`}>
                      {badge.label}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {inq.message}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span className="font-bold text-[#F26522] uppercase tracking-wider text-[10px]">
                      {inq.sport} • {inq.quantity} pcs
                    </span>
                    <span className="font-mono text-[10px]">
                      {new Date(inq.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              );
            })}

            {inquiries.length === 0 && (
              <div className="py-16 text-center text-slate-400 text-xs">
                <Inbox size={32} className="mx-auto mb-2 text-slate-300" />
                <span>No inquiries received yet. New messages from the public website will stream in here automatically.</span>
              </div>
            )}
          </div>
        </div>

        {/* Selected Inquiry Detail Stage (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6 sticky top-24">
          {selectedInquiry ? (
            <div className="space-y-6">
              
              {/* Top Contact Details Card */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Lead Details
                  </span>
                  <button
                    onClick={() => handleDelete(selectedInquiry._id)}
                    className="text-slate-400 hover:text-red-600 text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 size={13} /> Delete
                  </button>
                </div>

                <h3 className="text-xl font-black text-slate-900 leading-tight">
                  {selectedInquiry.name}
                </h3>
                {selectedInquiry.company && (
                  <span className="text-xs text-slate-500 font-bold block mt-0.5">
                    {selectedInquiry.company}
                  </span>
                )}
              </div>

              {/* Contact Chips */}
              <div className="space-y-2 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Mail size={15} className="text-[#F26522]" />
                  <a href={`mailto:${selectedInquiry.email}`} className="font-mono hover:underline font-bold text-indigo-700">
                    {selectedInquiry.email}
                  </a>
                </div>

                {selectedInquiry.phone && (
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <Phone size={15} className="text-[#F26522]" />
                    <a href={`tel:${selectedInquiry.phone}`} className="font-mono hover:underline font-bold">
                      {selectedInquiry.phone}
                    </a>
                  </div>
                )}

                <div className="flex items-center gap-2.5 text-slate-700 pt-1 border-t border-slate-200/60 text-[11px]">
                  <Clock size={14} className="text-slate-400" />
                  <span className="text-slate-500">
                    Submitted: {new Date(selectedInquiry.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Order Scope */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Sport Discipline</span>
                  <strong className="text-slate-800 text-sm block mt-0.5">{selectedInquiry.sport}</strong>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Requested Qty</span>
                  <strong className="text-slate-800 text-sm font-mono block mt-0.5">{selectedInquiry.quantity} Units</strong>
                </div>
              </div>

              {/* Full Message */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Client Requirements Message
                </label>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed whitespace-pre-wrap font-sans">
                  {selectedInquiry.message}
                </div>
              </div>

              {/* Status Update Control */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Change Workflow Status
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'new', label: 'Mark as New' },
                    { id: 'in_progress', label: 'Mark In Review' },
                    { id: 'quoted', label: 'Quote Delivered' },
                    { id: 'closed', label: 'Order Won / Closed' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      disabled={updating || selectedInquiry.status === btn.id}
                      onClick={() => handleUpdateStatus(selectedInquiry._id, btn.id)}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition cursor-pointer border ${
                        selectedInquiry.status === btn.id 
                          ? 'bg-[#1E1B6E] text-white border-[#1E1B6E] shadow-xs' 
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Internal Notes */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Internal Factory Notes
                  </label>
                  <button
                    onClick={handleSaveNotes}
                    className="text-[11px] font-bold text-[#F26522] hover:underline cursor-pointer"
                  >
                    Save Notes
                  </button>
                </div>
                <textarea
                  rows="3"
                  value={internalNotes}
                  onChange={(e) => setInternalNotes(e.target.value)}
                  placeholder="Record customer preferences, quote amount, PANTONE colors..."
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#F26522]"
                />
              </div>

            </div>
          ) : (
            <div className="py-24 text-center text-slate-400 text-xs">
              <MessageSquare size={36} className="mx-auto mb-2 text-slate-300" />
              <span>Select any inquiry from the left list to review specs, change order status or record factory notes.</span>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
