import React, { useState, useEffect } from 'react';
import api from '../api/client';
import { 
  Upload, FileSpreadsheet, Mail, CheckCircle, Clock, AlertTriangle, 
  Trash2, Play, Pause, RefreshCw, FileText, Send, Sparkles, ChevronRight,
  Zap, Loader2, Check, X
} from 'lucide-react';

export default function EmailLeadsPage() {
  const [lists, setLists] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [stats, setStats] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState(null);
  const [selectedListDetail, setSelectedListDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  // Manual Dispatch State
  const [sendingBatch, setSendingBatch] = useState(false);
  const [batchResult, setBatchResult] = useState(null);

  // Send Test Email Modal State
  const [showTestModal, setShowTestModal] = useState(false);
  const [testSending, setTestSending] = useState(false);
  const [testEmail, setTestEmail] = useState('');
  const [testTemplateId, setTestTemplateId] = useState('');
  const [testResult, setTestResult] = useState(null);

  // New Template state
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [templateForm, setTemplateForm] = useState({ name: '', subject: '', htmlBody: '' });

  const fetchData = async () => {
    try {
      const [listsRes, templatesRes, statsRes] = await Promise.all([
        api.get('/email/lists'),
        api.get('/email/templates'),
        api.get('/email/stats'),
      ]);

      if (listsRes.data.success) setLists(listsRes.data.data);
      if (templatesRes.data.success) setTemplates(templatesRes.data.data);
      if (statsRes.data.success) setStats(statsRes.data.data);
    } catch (err) {
      console.error('Failed to fetch email data', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSendBatchNow = async () => {
    setSendingBatch(true);
    setBatchResult(null);
    try {
      const res = await api.post('/email/send-batch');
      setBatchResult({ type: res.data.success ? 'success' : 'error', text: res.data.message });
      fetchData();
    } catch (err) {
      setBatchResult({ type: 'error', text: err.response?.data?.message || err.message });
    } finally {
      setSendingBatch(false);
    }
  };

  const handleSendTestEmail = async (e) => {
    e.preventDefault();
    if (!testEmail) return;
    setTestSending(true);
    setTestResult(null);
    try {
      const res = await api.post('/email/test-send', {
        to: testEmail,
        templateId: testTemplateId || undefined,
      });
      setTestResult({ type: 'success', text: res.data.message });
      fetchData();
    } catch (err) {
      setTestResult({ type: 'error', text: err.response?.data?.message || err.message });
    } finally {
      setTestSending(false);
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setUploading(true);
    setUploadMessage(null);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const res = await api.post('/email/lists/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (res.data.success) {
        setUploadMessage({ type: 'success', text: res.data.message });
        setSelectedFile(null);
        fetchData();
      }
    } catch (err) {
      setUploadMessage({ type: 'error', text: err.response?.data?.message || 'Upload failed' });
    } finally {
      setUploading(false);
    }
  };

  const handleToggleStatus = async (list) => {
    const nextStatus = list.status === 'active' ? 'paused' : 'active';
    try {
      await api.patch(`/email/lists/${list._id}/status`, { status: nextStatus });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteList = async (id) => {
    if (!window.confirm('Are you sure you want to delete this list and all its contacts?')) return;
    try {
      await api.delete(`/email/lists/${id}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleViewDetails = async (id) => {
    try {
      const res = await api.get(`/email/lists/${id}`);
      if (res.data.success) setSelectedListDetail(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveTemplate = async (e) => {
    e.preventDefault();
    try {
      await api.post('/email/templates', templateForm);
      setShowTemplateModal(false);
      setTemplateForm({ name: '', subject: '', htmlBody: '' });
      fetchData();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to save template');
    }
  };

  return (
    <div className="space-y-8">
      
      {/* ── TOP HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            Email Marketing & Lead Automation
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Excel Lead Ingestion • Daily 10 Automated Emails • Alternating Templates • Continuous Pipeline Check
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleSendBatchNow}
            disabled={sendingBatch}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm cursor-pointer disabled:opacity-50 transition"
          >
            {sendingBatch ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span>Sending 10 Leads...</span>
              </>
            ) : (
              <>
                <Zap size={14} />
                <span>Dispatch Batch Now</span>
              </>
            )}
          </button>

          <button
            onClick={() => { setShowTestModal(true); setTestResult(null); }}
            className="px-3.5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm cursor-pointer transition"
          >
            <Mail size={14} /> Send Test Email
          </button>

          <button
            onClick={() => setShowTemplateModal(true)}
            className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm cursor-pointer transition"
          >
            <Sparkles size={14} /> New Template
          </button>

          <button
            onClick={fetchData}
            title="Refresh Email Pipeline"
            className="p-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg shadow-xs cursor-pointer"
          >
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      {/* ── BATCH EXECUTION RESULT BANNER ── */}
      {batchResult && (
        <div className={`p-4 rounded-xl text-xs font-bold flex items-center justify-between gap-3 shadow-sm ${batchResult.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          <div className="flex items-center gap-2">
            {batchResult.type === 'success' ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
            <span>{batchResult.text}</span>
          </div>
          <button onClick={() => setBatchResult(null)} className="text-slate-400 hover:text-slate-700">
            <X size={14} />
          </button>
        </div>
      )}

      {/* ── SPECIAL ALERT: SYSTEM CHECKS DAILY IF NEW LIST IS NEEDED ── */}
      {stats?.needsLeadsList && (
        <div className="p-5 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl text-white shadow-lg flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
            <AlertTriangle size={24} className="text-white animate-bounce" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-white text-red-700 font-black text-[10px] uppercase rounded tracking-wider">
                System Requirement
              </span>
              <h3 className="font-black text-base uppercase tracking-tight">
                PLEASE NEED LEADS LIST!
              </h3>
            </div>
            <p className="text-xs text-white/90 mt-1 leading-relaxed">
              All uploaded lead lists have finished sending or no active list was found. The automated daily script needs contacts to dispatch the next 10 daily emails. Please upload an Excel or CSV file below to resume the campaign.
            </p>
          </div>
        </div>
      )}

      {/* ── METRIC STATS CARDS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Leads Pending</span>
            <Clock size={18} className="text-amber-500" />
          </div>
          <div className="text-2xl font-black text-slate-900">{stats?.totalPending || 0}</div>
          <span className="text-[11px] text-slate-500 mt-1 block">Awaiting automated queue</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Emails Sent Today</span>
            <Send size={18} className="text-[#F26522]" />
          </div>
          <div className="text-2xl font-black text-slate-900">{stats?.sentToday || 0} / 10</div>
          <span className="text-[11px] text-slate-500 mt-1 block">Daily automated quota</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Sent Lifetime</span>
            <CheckCircle size={18} className="text-green-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{stats?.totalSent || 0}</div>
          <span className="text-[11px] text-slate-500 mt-1 block">Successfully delivered</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Active Templates</span>
            <Mail size={18} className="text-indigo-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{templates.length}</div>
          <span className="text-[11px] text-slate-500 mt-1 block">Alternating rotation active</span>
        </div>
      </div>

      {/* ── EXCEL UPLOAD SECTION ── */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
        <h2 className="text-base font-black text-slate-900 uppercase tracking-tight flex items-center gap-2 mb-2">
          <FileSpreadsheet size={18} className="text-green-600" />
          <span>Upload Excel Lead File (.xlsx, .xls, .csv)</span>
        </h2>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed">
          Upload your contact lists here. The parser automatically extracts emails from columns named <code>email</code>, <code>Email</code>, <code>name</code>, and <code>company</code>.
        </p>

        {uploadMessage && (
          <div className={`mb-6 p-4 rounded-lg text-xs font-semibold flex items-center gap-2 ${uploadMessage.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
            {uploadMessage.type === 'success' ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
            <span>{uploadMessage.text}</span>
          </div>
        )}

        <form onSubmit={handleFileUpload} className="flex flex-col sm:flex-row items-center gap-4">
          <label className="flex-1 w-full flex items-center justify-center px-6 py-6 border-2 border-dashed border-slate-300 hover:border-[#F26522] rounded-xl cursor-pointer bg-slate-50/50 hover:bg-slate-50 transition group">
            <div className="text-center">
              <Upload size={24} className="mx-auto text-slate-400 group-hover:text-[#F26522] mb-1" />
              <span className="text-xs font-bold text-slate-700 block">
                {selectedFile ? selectedFile.name : 'Choose Excel / CSV file from computer'}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Supports .xlsx, .xls, .csv up to 10MB
              </span>
            </div>
            <input
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="hidden"
            />
          </label>

          <button
            type="submit"
            disabled={!selectedFile || uploading}
            className="w-full sm:w-auto px-8 py-5 bg-[#F26522] hover:bg-[#d95316] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition disabled:opacity-50 cursor-pointer flex-shrink-0"
          >
            {uploading ? 'Processing File...' : 'Ingest Leads'}
          </button>
        </form>
      </div>

      {/* ── UPLOADED LISTS TABLE ── */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-black text-sm uppercase tracking-tight text-slate-900">
            Uploaded Lead Batches ({lists.length})
          </h3>
          <span className="text-xs text-slate-500 font-medium">Daily automated cron picks from active list</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 uppercase font-black tracking-wider text-[10px] border-b border-slate-200">
              <tr>
                <th className="py-3 px-5">File Name</th>
                <th className="py-3 px-5">Total Leads</th>
                <th className="py-3 px-5">Sent</th>
                <th className="py-3 px-5">Pending</th>
                <th className="py-3 px-5">Progress</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {lists.map((l) => {
                const percent = Math.round((l.sentCount / (l.totalEmails || 1)) * 100);
                return (
                  <tr key={l._id} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-5 font-bold text-slate-900 flex items-center gap-2">
                      <FileSpreadsheet size={15} className="text-green-600 flex-shrink-0" />
                      <span>{l.fileName}</span>
                    </td>
                    <td className="py-3.5 px-5 font-mono">{l.totalEmails}</td>
                    <td className="py-3.5 px-5 font-mono text-green-700 font-bold">{l.sentCount}</td>
                    <td className="py-3.5 px-5 font-mono text-amber-700 font-bold">{l.pendingCount}</td>
                    <td className="py-3.5 px-5">
                      <div className="w-28 bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#F26522] h-full" style={{ width: `${percent}%` }} />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">{percent}%</span>
                    </td>
                    <td className="py-3.5 px-5">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${l.status === 'active' ? 'bg-green-100 text-green-800' : l.status === 'completed' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
                        {l.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-right space-x-2">
                      <button
                        onClick={() => handleToggleStatus(l)}
                        title={l.status === 'active' ? 'Pause List' : 'Activate List'}
                        className="p-1.5 rounded hover:bg-slate-200 text-slate-600 cursor-pointer"
                      >
                        {l.status === 'active' ? <Pause size={14} /> : <Play size={14} />}
                      </button>
                      <button
                        onClick={() => handleViewDetails(l._id)}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[11px] font-bold cursor-pointer"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDeleteList(l._id)}
                        className="p-1.5 rounded hover:bg-red-100 text-red-600 cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {lists.length === 0 && (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-slate-400">
                    No lead files uploaded yet. Choose an Excel file above to begin.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── EMAIL TEMPLATES LIST (ROTATING) ── */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-black text-sm uppercase tracking-tight text-slate-900">
              Active Marketing Templates ({templates.length})
            </h3>
            <p className="text-xs text-slate-500">
              The daily script alternates between these templates (10 users receive rotating different emails).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((tpl) => (
            <div key={tpl._id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-black text-xs uppercase text-slate-800">{tpl.name}</h4>
                  <span className="text-[10px] font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded font-bold">
                    Sent {tpl.sendCount || 0}x
                  </span>
                </div>
                <div className="text-xs text-slate-600 font-semibold mb-2">
                  Subject: <span className="font-normal text-slate-700">{tpl.subject}</span>
                </div>
                <div className="text-[11px] text-slate-500 line-clamp-3 bg-white p-2.5 rounded border border-slate-200 font-mono">
                  {tpl.htmlBody.replace(/<[^>]*>/g, ' ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TEMPLATE MODAL ── */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-2xl">
            <h3 className="font-black text-base uppercase text-slate-900 mb-4">
              Add Alternating Email Template
            </h3>
            <form onSubmit={handleSaveTemplate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Template Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Free 3D Mockup Offer"
                  value={templateForm.name}
                  onChange={(e) => setTemplateForm({ ...templateForm, name: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#F26522]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Email Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Supports placeholders: {{name}}, {{company}}"
                  value={templateForm.subject}
                  onChange={(e) => setTemplateForm({ ...templateForm, subject: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#F26522]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">HTML Body Content</label>
                <textarea
                  rows="8"
                  required
                  placeholder="HTML email template with placeholders: {{name}}, {{email}}, {{company}}"
                  value={templateForm.htmlBody}
                  onChange={(e) => setTemplateForm({ ...templateForm, htmlBody: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#F26522]"
                />
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowTemplateModal(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-600 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#F26522] text-white rounded-lg text-xs font-black uppercase tracking-wider shadow cursor-pointer"
                >
                  Save Template
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── LIST CONTACTS MODAL ── */}
      {selectedListDetail && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[85vh] flex flex-col p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <h3 className="font-black text-sm uppercase text-slate-900">
                  {selectedListDetail.fileName} Contacts ({selectedListDetail.emails?.length || 0})
                </h3>
                <span className="text-xs text-slate-500 font-medium">Individual dispatch status</span>
              </div>
              <button
                onClick={() => setSelectedListDetail(null)}
                className="text-slate-400 hover:text-slate-700 font-bold text-sm cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="overflow-y-auto flex-1 my-4">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-500 sticky top-0">
                  <tr>
                    <th className="p-2.5">Email</th>
                    <th className="p-2.5">Name</th>
                    <th className="p-2.5">Company</th>
                    <th className="p-2.5">Status</th>
                    <th className="p-2.5">Template</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {selectedListDetail.emails?.slice(0, 100).map((e, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-2.5 font-mono">{e.email}</td>
                      <td className="p-2.5">{e.name || '-'}</td>
                      <td className="p-2.5">{e.company || '-'}</td>
                      <td className="p-2.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${e.status === 'sent' ? 'bg-green-100 text-green-800' : e.status === 'failed' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'}`}>
                          {e.status}
                        </span>
                      </td>
                      <td className="p-2.5 text-[11px] text-slate-500">{e.templateUsed || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {selectedListDetail.emails?.length > 100 && (
                <div className="p-3 text-center text-xs text-slate-400">
                  Showing first 100 of {selectedListDetail.emails.length} leads
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── SEND TEST EMAIL MODAL ── */}
      {showTestModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#F26522] flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase text-slate-900">
                    Verify & Send Test Email
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium">Live SMTP Delivery Diagnostics</span>
                </div>
              </div>
              <button
                onClick={() => setShowTestModal(false)}
                className="text-slate-400 hover:text-slate-700 font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {testResult && (
              <div className={`p-3.5 rounded-lg text-xs font-semibold flex items-center gap-2 ${testResult.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {testResult.type === 'success' ? <CheckCircle size={16} className="flex-shrink-0 text-emerald-600" /> : <AlertTriangle size={16} className="flex-shrink-0 text-red-600" />}
                <span className="break-all">{testResult.text}</span>
              </div>
            )}

            <form onSubmit={handleSendTestEmail} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Recipient Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. yourname@domain.com"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#F26522]"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  A verification email will be dispatched immediately via Gmail SMTP.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Email Template
                </label>
                <select
                  value={testTemplateId}
                  onChange={(e) => setTestTemplateId(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#F26522] bg-white"
                >
                  <option value="">Standard SMTP Verification Ping</option>
                  {templates.map(t => (
                    <option key={t._id} value={t._id}>{t.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowTestModal(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-600 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={testSending || !testEmail}
                  className="px-6 py-2 bg-[#F26522] hover:bg-[#d95316] text-white rounded-lg text-xs font-black uppercase tracking-wider shadow cursor-pointer disabled:opacity-50 flex items-center gap-2"
                >
                  {testSending ? (
                    <>
                      <Loader2 size={13} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      <span>Send Now</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
