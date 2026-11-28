import React, { useState, useEffect, useRef } from 'react';
import api from '../api/client';
import { 
  Upload, FileSpreadsheet, Mail, CheckCircle, Clock, AlertTriangle, 
  Trash2, Play, Pause, RefreshCw, FileText, Send, Sparkles, ChevronRight,
  Zap, Loader2, Check, X, ShieldCheck, Link2, Globe, Key, Lock, ExternalLink
} from 'lucide-react';

export default function EmailLeadsPage() {
  const [lists, setLists] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [stats, setStats] = useState(null);
  const [connectors, setConnectors] = useState({ hostinger: null, gmail: null });
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState(null);
  const [selectedListDetail, setSelectedListDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  // Manual Dispatch State
  const [sendingBatch, setSendingBatch] = useState(false);
  const [batchResult, setBatchResult] = useState(null);
  const [seedingTemplates, setSeedingTemplates] = useState(false);

  // Connectors Modal State
  const [showConnectorsModal, setShowConnectorsModal] = useState(false);
  const [connectingHostinger, setConnectingHostinger] = useState(false);
  const [connectingGmail, setConnectingGmail] = useState(false);
  const [connectorResult, setConnectorResult] = useState(null);
  const [gmailConnectMode, setGmailConnectMode] = useState('app_password'); // 'oauth' or 'app_password'
  const [showHostingerPass, setShowHostingerPass] = useState(false);
  const [showGmailPass, setShowGmailPass] = useState(false);

  const [hostingerForm, setHostingerForm] = useState({
    user: 'sale@hamlosportswear.site',
    pass: 'Hamlo903@',
    host: 'smtp.hostinger.com',
    port: '465',
    secure: true,
    dailyQuota: 12,
  });

  const [gmailForm, setGmailForm] = useState({
    user: 'hamlosportswear@gmail.com',
    pass: '',
    host: 'smtp.gmail.com',
    port: '587',
    secure: false,
    dailyQuota: 12,
  });

  // Automated Daily Dispatch Countdown Timer (Target: 9:00 AM EST / 14:00 UTC)
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00', totalMs: 0 });
  const [autoRunEnabled, setAutoRunEnabled] = useState(true);
  const lastTriggeredDateRef = useRef(null);
  const [contactsFilter, setContactsFilter] = useState('all');

  // Send Test Email Modal State
  const [showTestModal, setShowTestModal] = useState(false);
  const [testSending, setTestSending] = useState(false);
  const [testEmail, setTestEmail] = useState('');
  const [testTemplateId, setTestTemplateId] = useState('');
  const [testChannel, setTestChannel] = useState('hostinger');
  const [testResult, setTestResult] = useState(null);

  // New Template state
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [templateForm, setTemplateForm] = useState({ name: '', subject: '', htmlBody: '' });

  const fetchConnectors = async () => {
    try {
      const res = await api.get('/email/connectors');
      if (res.data.success) {
        setConnectors(res.data.data);
        if (res.data.data.hostinger?.email) {
          setHostingerForm(prev => ({
            ...prev,
            user: res.data.data.hostinger.email,
            host: res.data.data.hostinger.host || 'smtp.hostinger.com',
            port: String(res.data.data.hostinger.port || '465'),
          }));
        }
        if (res.data.data.gmail?.email) {
          setGmailForm(prev => ({
            ...prev,
            user: res.data.data.gmail.email,
          }));
        }
      }
    } catch (err) {
      console.warn('Failed to fetch connectors:', err.message);
    }
  };

  const fetchData = async () => {
    try {
      const [listsRes, templatesRes, statsRes] = await Promise.all([
        api.get('/email/lists'),
        api.get('/email/templates'),
        api.get('/email/stats'),
      ]);

      if (listsRes.data.success) setLists(listsRes.data.data);
      if (templatesRes.data.success) setTemplates(templatesRes.data.data);
      if (statsRes.data.success) {
        setStats(statsRes.data.data);
        if (statsRes.data.data.channels) {
          setConnectors(statsRes.data.data.channels);
        }
      }
      fetchConnectors();
    } catch (err) {
      console.error('Failed to fetch email data', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    // Check for Google OAuth callback params in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('oauth') === 'success') {
      setBatchResult({ type: 'success', text: '🎉 Google Workspace / Gmail successfully connected via OAuth2!' });
      window.history.replaceState({}, document.title, window.location.pathname);
      fetchConnectors();
    } else if (urlParams.get('oauth') === 'error') {
      setBatchResult({ type: 'error', text: 'Google OAuth connection failed: ' + (urlParams.get('message') || 'Unknown error') });
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // ── LIVE COUNTDOWN TIMER TO 9:00 AM EST (14:00 UTC) ──
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      // Target: 14:00:00 UTC
      const target = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        14, 0, 0, 0
      ));

      if (now >= target) {
        target.setUTCDate(target.getUTCDate() + 1);
      }

      const diff = Math.max(0, target.getTime() - now.getTime());
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        totalMs: diff,
      });

      // When timer hits 0 (diff <= 1000 ms), auto-trigger batch execution
      const todayStr = now.toISOString().slice(0, 10);
      if (diff <= 1000 && autoRunEnabled && lastTriggeredDateRef.current !== todayStr) {
        lastTriggeredDateRef.current = todayStr;
        console.log('[AUTO-DISPATCH] ⏰ Daily timer reached 00:00:00! Automatically firing daily 12-lead batch...');
        handleSendBatchNow();
      }
    };

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(timerInterval);
  }, [autoRunEnabled]);

  const handleSendBatchNow = async () => {
    setSendingBatch(true);
    setBatchResult(null);
    try {
      const res = await api.post('/email/send-batch');
      setBatchResult({ type: res.data.success ? 'success' : 'error', text: res.data.message });
      fetchData();
      if (selectedListDetail?._id) {
        handleViewDetails(selectedListDetail._id);
      }
    } catch (err) {
      setBatchResult({ type: 'error', text: err.response?.data?.message || err.message });
    } finally {
      setSendingBatch(false);
    }
  };

  const handleSeedDefaultTemplates = async () => {
    setSeedingTemplates(true);
    try {
      const res = await api.post('/email/templates/seed-defaults');
      if (res.data.success) {
        setBatchResult({ type: 'success', text: res.data.message || '10 Marketing Templates Synced Successfully!' });
        fetchData();
      }
    } catch (err) {
      setBatchResult({ type: 'error', text: err.response?.data?.message || err.message });
    } finally {
      setSeedingTemplates(false);
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
        channel: testChannel,
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

  const handleConnectHostinger = async (e) => {
    e.preventDefault();
    setConnectingHostinger(true);
    setConnectorResult(null);
    try {
      const res = await api.post('/email/connect-smtp', {
        channel: 'hostinger',
        ...hostingerForm,
        port: Number(hostingerForm.port),
      });
      setConnectorResult({ type: 'success', text: res.data.message || 'Hostinger connected successfully!' });
      fetchConnectors();
      fetchData();
    } catch (err) {
      setConnectorResult({ type: 'error', text: err.response?.data?.message || err.message });
    } finally {
      setConnectingHostinger(false);
    }
  };

  const handleConnectGmailSmtp = async (e) => {
    e.preventDefault();
    setConnectingGmail(true);
    setConnectorResult(null);
    try {
      const res = await api.post('/email/connect-smtp', {
        channel: 'gmail',
        ...gmailForm,
        port: Number(gmailForm.port),
      });
      setConnectorResult({ type: 'success', text: res.data.message || 'Gmail connected successfully!' });
      fetchConnectors();
      fetchData();
    } catch (err) {
      setConnectorResult({ type: 'error', text: err.response?.data?.message || err.message });
    } finally {
      setConnectingGmail(false);
    }
  };

  const handleConnectGoogleOAuth = async () => {
    setConnectingGmail(true);
    setConnectorResult(null);
    try {
      const res = await api.get('/email/oauth/google/url');
      if (res.data.success && res.data.url) {
        window.location.href = res.data.url;
      } else {
        setConnectorResult({ 
          type: 'error', 
          text: res.data.message || 'Google OAuth is not configured with client ID / secret in server environment. Please use 16-character App Password option.' 
        });
      }
    } catch (err) {
      setConnectorResult({ type: 'error', text: err.response?.data?.message || err.message });
    } finally {
      setConnectingGmail(false);
    }
  };

  const handleDisconnectChannel = async (channel) => {
    if (!window.confirm(`Are you sure you want to disconnect ${channel === 'hostinger' ? 'Hostinger' : 'Gmail'}?`)) return;
    try {
      const res = await api.post('/email/disconnect', { channel });
      setConnectorResult({ type: 'success', text: res.data.message });
      fetchConnectors();
      fetchData();
    } catch (err) {
      setConnectorResult({ type: 'error', text: err.response?.data?.message || err.message });
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
            Excel Lead Ingestion • Daily 24 Leads at 9:00 AM EST • Dual Senders: Hostinger (12/day) + Gmail (12/day) • Alternating Templates
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => { setShowConnectorsModal(true); setConnectorResult(null); fetchConnectors(); }}
            className="px-3.5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm cursor-pointer transition"
          >
            <Link2 size={14} /> Mail Connectors
            {(connectors?.hostinger?.connected || connectors?.gmail?.connected) && (
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            )}
          </button>

          <button
            onClick={handleSendBatchNow}
            disabled={sendingBatch}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm cursor-pointer disabled:opacity-50 transition"
          >
            {sendingBatch ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span>Sending 24 Leads...</span>
              </>
            ) : (
              <>
                <Zap size={14} />
                <span>⚡ Dispatch Dual Batch (24 Leads) Now</span>
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
              All uploaded lead lists have finished sending or no active list was found. The automated daily script needs contacts to dispatch the next 24 daily emails (12 Hostinger + 12 Gmail). Please upload an Excel or CSV file below to resume the campaign.
            </p>
          </div>
        </div>
      )}

      {/* ── LIVE DIGITAL DISPATCH COUNTDOWN & DUAL PIPELINE BANNER ── */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-2xl p-6 text-white border border-indigo-900/40 shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Schedule Info */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-[#F26522] flex items-center justify-center flex-shrink-0 border border-orange-500/30 mt-0.5">
              <Clock size={24} className="animate-pulse" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                  Dual Pipeline Countdown Timer
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono border border-slate-700">
                  Daily 9:00 AM EST (14:00 UTC)
                </span>
              </div>
              <h3 className="font-black text-lg uppercase tracking-tight text-white mt-1">
                Next Automated Dual Batch Dispatch (24 Leads)
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed max-w-xl">
                Rozana Subha USA time per <strong>24 leads</strong> ko automatically emails jayengi: 12 leads via Hostinger aur 12 leads via Gmail with alternating different templates.
              </p>

              {/* Senders Channel Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mt-3">
                <button
                  type="button"
                  onClick={() => { setShowConnectorsModal(true); setConnectorResult(null); }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold border transition cursor-pointer shadow-xs ${connectors?.hostinger?.connected ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/80' : 'bg-rose-950/70 border-rose-500/50 text-rose-300 hover:bg-rose-900/80'}`}
                >
                  <span className={`w-2 h-2 rounded-full ${connectors?.hostinger?.connected ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                  <span className="text-slate-300">Hostinger (12/day):</span>
                  <span className="font-mono">{connectors?.hostinger?.email || 'sale@hamlosportswear.site'}</span>
                  <span className={`text-[9px] uppercase ml-1 px-1.5 py-0.5 rounded font-black tracking-wider ${connectors?.hostinger?.connected ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}`}>
                    {connectors?.hostinger?.connected ? 'Connected ✓' : 'Connect'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => { setShowConnectorsModal(true); setConnectorResult(null); }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold border transition cursor-pointer shadow-xs ${connectors?.gmail?.connected ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/80' : 'bg-amber-950/70 border-amber-500/50 text-amber-300 hover:bg-amber-900/80'}`}
                >
                  <span className={`w-2 h-2 rounded-full ${connectors?.gmail?.connected ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  <span className="text-slate-300">Gmail (12/day):</span>
                  <span className="font-mono">{connectors?.gmail?.email || 'hamlosportswear@gmail.com'}</span>
                  <span className={`text-[9px] uppercase ml-1 px-1.5 py-0.5 rounded font-black tracking-wider ${connectors?.gmail?.connected ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}`}>
                    {connectors?.gmail?.connected ? 'Connected ✓' : 'Connect'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* ── LIVE DIGITAL COUNTDOWN CLOCK ── */}
          <div className="flex items-center gap-2.5 bg-slate-900/90 border border-slate-800 p-3 rounded-xl self-start lg:self-auto shadow-inner">
            <div className="text-center min-w-[58px]">
              <div className="font-mono text-2xl sm:text-3xl font-black bg-slate-800 text-white px-2.5 py-1.5 rounded-lg border border-slate-700 shadow-inner">
                {timeLeft.hours}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-1 block">Hours</span>
            </div>
            <span className="text-xl sm:text-2xl font-black text-[#F26522] animate-pulse pb-4">:</span>
            <div className="text-center min-w-[58px]">
              <div className="font-mono text-2xl sm:text-3xl font-black bg-slate-800 text-white px-2.5 py-1.5 rounded-lg border border-slate-700 shadow-inner">
                {timeLeft.minutes}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-1 block">Minutes</span>
            </div>
            <span className="text-xl sm:text-2xl font-black text-[#F26522] animate-pulse pb-4">:</span>
            <div className="text-center min-w-[58px]">
              <div className="font-mono text-2xl sm:text-3xl font-black bg-slate-800 text-orange-400 px-2.5 py-1.5 rounded-lg border border-slate-700 shadow-inner">
                {timeLeft.seconds}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-1 block">Seconds</span>
            </div>
          </div>

          {/* Action Button & Toggle */}
          <div className="flex flex-col gap-2 flex-shrink-0">
            <button
              onClick={handleSendBatchNow}
              disabled={sendingBatch}
              className="px-5 py-3 bg-[#F26522] hover:bg-[#d95316] text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-50 transition"
            >
              {sendingBatch ? <Loader2 size={15} className="animate-spin" /> : <Zap size={15} />}
              <span>⚡ Dispatch 24 Leads Now</span>
            </button>
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Dual Auto-Run on Zero: <strong className="text-emerald-400">Active</strong></span>
            </div>
          </div>

        </div>
      </div>

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
          <div className="text-2xl font-black text-slate-900">{stats?.sentToday || 0} / {stats?.dailyQuota || 24}</div>
          <span className="text-[11px] text-slate-500 mt-1 block">Dual Quota (12 Hostinger + 12 Gmail)</span>
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
                    <td className="py-3.5 px-5 font-mono">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <Check size={12} className="text-emerald-600 stroke-[3]" />
                        <span>{l.sentCount} sent</span>
                      </span>
                    </td>
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
                      {l.status === 'active' && l.pendingCount > 0 && (
                        <button
                          onClick={handleSendBatchNow}
                          disabled={sendingBatch}
                          title="Immediately dispatch next 12 leads from this active list"
                          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-bold cursor-pointer inline-flex items-center gap-1 shadow-2xs disabled:opacity-50"
                        >
                          {sendingBatch ? <Loader2 size={11} className="animate-spin" /> : <Zap size={11} />}
                          <span>Send Now</span>
                        </button>
                      )}
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="font-black text-sm uppercase tracking-tight text-slate-900">
              Active Marketing Templates ({templates.length})
            </h3>
            <p className="text-xs text-slate-500">
              The daily script alternates between these templates (12 recipients per day receive rotating emails with direct product links).
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSeedDefaultTemplates}
              disabled={seedingTemplates}
              className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition"
            >
              {seedingTemplates ? <Loader2 size={13} className="animate-spin" /> : <Sparkles size={13} />}
              <span>Sync 10 Pro Templates</span>
            </button>
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
      {selectedListDetail && (() => {
        const total = selectedListDetail.emails?.length || 0;
        const sentCount = selectedListDetail.emails?.filter(e => e.status === 'sent').length || 0;
        const pendingCount = selectedListDetail.emails?.filter(e => e.status === 'pending').length || 0;
        const failedCount = selectedListDetail.emails?.filter(e => e.status === 'failed').length || 0;

        const filteredList = (selectedListDetail.emails || []).filter(e => {
          if (contactsFilter === 'sent') return e.status === 'sent';
          if (contactsFilter === 'pending') return e.status === 'pending';
          if (contactsFilter === 'failed') return e.status === 'failed';
          return true;
        });

        return (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[85vh] flex flex-col p-6 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="font-black text-sm uppercase text-slate-900 flex items-center gap-2">
                    <FileSpreadsheet size={16} className="text-green-600" />
                    <span>{selectedListDetail.fileName} Contacts ({total})</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <button
                      onClick={() => setContactsFilter('all')}
                      className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer transition ${contactsFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                      All ({total})
                    </button>
                    <button
                      onClick={() => setContactsFilter('sent')}
                      className={`px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1 cursor-pointer transition ${contactsFilter === 'sent' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}`}
                    >
                      <CheckCircle size={12} />
                      <span>✓ Sent ({sentCount})</span>
                    </button>
                    <button
                      onClick={() => setContactsFilter('pending')}
                      className={`px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1 cursor-pointer transition ${contactsFilter === 'pending' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}`}
                    >
                      <Clock size={12} />
                      <span>⏳ Pending ({pendingCount})</span>
                    </button>
                    {failedCount > 0 && (
                      <button
                        onClick={() => setContactsFilter('failed')}
                        className={`px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1 cursor-pointer transition ${contactsFilter === 'failed' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-700 hover:bg-rose-100'}`}
                      >
                        <X size={12} />
                        <span>✕ Failed ({failedCount})</span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {pendingCount > 0 && (
                    <button
                      onClick={handleSendBatchNow}
                      disabled={sendingBatch}
                      className="px-3.5 py-1.5 bg-[#F26522] hover:bg-[#d95316] text-white rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow cursor-pointer disabled:opacity-50"
                    >
                      {sendingBatch ? <Loader2 size={13} className="animate-spin" /> : <Zap size={13} />}
                      <span>Send 24 Leads Now</span>
                    </button>
                  )}
                  <button
                    onClick={() => { setSelectedListDetail(null); setContactsFilter('all'); }}
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg font-bold text-sm cursor-pointer"
                  >
                    ✕ Close
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto flex-1 my-4">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-500 sticky top-0 border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">Email</th>
                      <th className="p-2.5">Name</th>
                      <th className="p-2.5">Company</th>
                      <th className="p-2.5">Sender</th>
                      <th className="p-2.5">Status</th>
                      <th className="p-2.5">Sent Template</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {filteredList.slice(0, 100).map((e, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition">
                        <td className="p-2.5 font-mono font-medium text-slate-900">{e.email}</td>
                        <td className="p-2.5 font-semibold text-slate-800">{e.name || '-'}</td>
                        <td className="p-2.5 text-slate-600">{e.company || '-'}</td>
                        <td className="p-2.5 text-[11px]">
                          {e.senderChannel ? (
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono font-bold ${e.senderChannel === 'hostinger' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-blue-50 text-blue-800 border border-blue-200'}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${e.senderChannel === 'hostinger' ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                              <span>{e.senderChannel === 'hostinger' ? 'Hostinger' : 'Gmail'}</span>
                            </span>
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                        <td className="p-2.5">
                          {e.status === 'sent' ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs">
                              <CheckCircle size={14} className="text-emerald-600 flex-shrink-0" />
                              <span>✓ Sent & Delivered</span>
                            </span>
                          ) : e.status === 'failed' ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-200" title={e.errorMessage}>
                              <X size={14} className="text-rose-600 flex-shrink-0" />
                              <span>✕ Failed</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                              <Clock size={13} className="text-amber-500 flex-shrink-0" />
                              <span>⏳ Pending Queue</span>
                            </span>
                          )}
                        </td>
                        <td className="p-2.5 text-[11px] text-slate-500">
                          {e.templateUsed ? (
                            <span className="font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                              {e.templateUsed}
                            </span>
                          ) : '-'}
                        </td>
                      </tr>
                    ))}
                    {filteredList.length === 0 && (
                      <tr>
                        <td colSpan="5" className="p-8 text-center text-slate-400">
                          No contacts found for filter: <strong className="text-slate-600 uppercase">{contactsFilter}</strong>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                {filteredList.length > 100 && (
                  <div className="p-3 text-center text-xs text-slate-400">
                    Showing first 100 of {filteredList.length} leads
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}

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
                  Sender Email Channel *
                </label>
                <select
                  value={testChannel}
                  onChange={(e) => setTestChannel(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#F26522] bg-white font-medium"
                >
                  <option value="hostinger">Hostinger Business: sale@hamlosportswear.site (Active ✓)</option>
                  <option value="gmail">Google Gmail: hamlosportswear@gmail.com</option>
                </select>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  {testChannel === 'hostinger' 
                    ? 'Dispatched directly via smtp.hostinger.com:465 with SSL encryption.' 
                    : 'Dispatched via smtp.gmail.com:587 (Requires connected Gmail).'}
                </span>
              </div>

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

      {/* ── MAIL CONNECTORS MODAL (HOSTINGER & GMAIL) ── */}
      {showConnectorsModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl space-y-6 my-8 border border-slate-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center">
                  <Link2 size={20} />
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase tracking-tight text-slate-900 flex items-center gap-2">
                    Mail Senders Connectors
                    <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded-full uppercase">
                      Dual Senders Pipeline
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Hostinger Business Mail (12/day) aur Google Workspace / Gmail (12/day) connect karein ta ke daily 24 automated emails dispatch hon.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowConnectorsModal(false)}
                className="text-slate-400 hover:text-slate-700 font-bold text-lg p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Diagnostic Alert Banner */}
            {connectorResult && (
              <div className={`p-4 rounded-xl text-xs font-bold flex items-center justify-between gap-3 shadow-xs ${connectorResult.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'}`}>
                <div className="flex items-center gap-2.5">
                  {connectorResult.type === 'success' ? <CheckCircle size={18} className="text-emerald-600 flex-shrink-0" /> : <AlertTriangle size={18} className="text-rose-600 flex-shrink-0" />}
                  <span>{connectorResult.text}</span>
                </div>
                <button onClick={() => setConnectorResult(null)} className="text-slate-400 hover:text-slate-700">
                  <X size={14} />
                </button>
              </div>
            )}

            {/* Two Connector Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* ── CARD 1: HOSTINGER BUSINESS MAIL ── */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs">
                        H
                      </div>
                      <div>
                        <h4 className="font-black text-sm text-slate-900 uppercase">Hostinger Mail</h4>
                        <span className="text-[10px] text-slate-500 font-medium">Domain Business SMTP</span>
                      </div>
                    </div>
                    {connectors?.hostinger?.connected ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                        <Check size={12} className="text-emerald-600" /> CONNECTED
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-200 text-slate-600">
                        DISCONNECTED
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    Hostinger business mailbox credentials enter karein. System live verify karega aur instant database me connect kar dega:
                  </p>

                  <form onSubmit={handleConnectHostinger} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                        Hostinger Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={hostingerForm.user}
                        onChange={(e) => setHostingerForm({ ...hostingerForm, user: e.target.value })}
                        className="w-full border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 bg-white font-mono focus:border-emerald-500 focus:outline-none"
                        placeholder="sale@hamlosportswear.site"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                        Mail Password
                      </label>
                      <div className="relative">
                        <input
                          type={showHostingerPass ? 'text' : 'password'}
                          required
                          value={hostingerForm.pass}
                          onChange={(e) => setHostingerForm({ ...hostingerForm, pass: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg p-2.5 pr-9 text-xs text-slate-900 bg-white font-mono focus:border-emerald-500 focus:outline-none"
                          placeholder="Hamlo903@"
                        />
                        <button
                          type="button"
                          onClick={() => setShowHostingerPass(!showHostingerPass)}
                          className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 text-xs font-bold"
                        >
                          {showHostingerPass ? 'Hide' : 'Show'}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-500 mb-0.5">SMTP Host</label>
                        <input
                          type="text"
                          value={hostingerForm.host}
                          onChange={(e) => setHostingerForm({ ...hostingerForm, host: e.target.value })}
                          className="w-full border border-slate-300 rounded p-1.5 text-xs bg-white text-slate-700 font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-500 mb-0.5">Port (SSL)</label>
                        <input
                          type="text"
                          value={hostingerForm.port}
                          onChange={(e) => setHostingerForm({ ...hostingerForm, port: e.target.value })}
                          className="w-full border border-slate-300 rounded p-1.5 text-xs bg-white text-slate-700 font-mono"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-2">
                      <button
                        type="submit"
                        disabled={connectingHostinger}
                        className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-50 transition"
                      >
                        {connectingHostinger ? (
                          <>
                            <Loader2 size={13} className="animate-spin" />
                            <span>Verifying...</span>
                          </>
                        ) : (
                          <>
                            <Zap size={13} />
                            <span>⚡ Verify & Connect Hostinger</span>
                          </>
                        )}
                      </button>

                      {connectors?.hostinger?.connected && (
                        <button
                          type="button"
                          onClick={() => handleDisconnectChannel('hostinger')}
                          className="px-3 py-2.5 border border-rose-300 text-rose-700 hover:bg-rose-50 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition"
                        >
                          Disconnect
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[10px] text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0" />
                  <span>Verified credentials encrypt directly into your database. Daily quota: 12 leads.</span>
                </div>
              </div>

              {/* ── CARD 2: GMAIL / GOOGLE WORKSPACE ── */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs">
                        G
                      </div>
                      <div>
                        <h4 className="font-black text-sm text-slate-900 uppercase">Gmail / Google Workspace</h4>
                        <span className="text-[10px] text-slate-500 font-medium">OAuth2 & Direct App Password</span>
                      </div>
                    </div>
                    {connectors?.gmail?.connected ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                        <Check size={12} className="text-emerald-600" /> CONNECTED
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-200 text-slate-600">
                        DISCONNECTED
                      </span>
                    )}
                  </div>

                  {/* Mode Selector Tabs */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-slate-200 rounded-lg mb-4 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setGmailConnectMode('app_password')}
                      className={`py-1.5 rounded-md transition ${gmailConnectMode === 'app_password' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      App Password (SMTP)
                    </button>
                    <button
                      type="button"
                      onClick={() => setGmailConnectMode('oauth')}
                      className={`py-1.5 rounded-md transition ${gmailConnectMode === 'oauth' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      Google OAuth2 (1-Click)
                    </button>
                  </div>

                  {gmailConnectMode === 'oauth' ? (
                    /* OAuth 2.0 Tab */
                    <div className="space-y-4 py-2">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        ChatGPT connector ki tarah Google Login ke zariye 1-click authorization se Gmail account connect karein:
                      </p>

                      <div className="p-4 bg-white border border-slate-200 rounded-xl text-center space-y-3">
                        <button
                          type="button"
                          onClick={handleConnectGoogleOAuth}
                          disabled={connectingGmail}
                          className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold shadow-xs hover:shadow transition flex items-center justify-center gap-3 cursor-pointer"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                          <span>Sign in with Google to Connect</span>
                        </button>
                        <p className="text-[10px] text-slate-400">
                          Note: Requires GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET configured in server .env.
                        </p>
                      </div>

                      {connectors?.gmail?.connected && (
                        <div className="pt-2 text-right">
                          <button
                            type="button"
                            onClick={() => handleDisconnectChannel('gmail')}
                            className="px-3 py-2 border border-rose-300 text-rose-700 hover:bg-rose-50 rounded-lg text-xs font-bold uppercase cursor-pointer"
                          >
                            Disconnect Gmail
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* App Password SMTP Tab */
                    <form onSubmit={handleConnectGmailSmtp} className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                          Gmail Address
                        </label>
                        <input
                          type="email"
                          required
                          value={gmailForm.user}
                          onChange={(e) => setGmailForm({ ...gmailForm, user: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 bg-white font-mono focus:border-blue-500 focus:outline-none"
                          placeholder="hamlosportswear@gmail.com"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1 flex items-center justify-between">
                          <span>16-Char Google App Password</span>
                          <a
                            href="https://myaccount.google.com/apppasswords"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1 font-bold lowercase text-[10px]"
                          >
                            <span>Generate App Password</span>
                            <ExternalLink size={10} />
                          </a>
                        </label>
                        <div className="relative">
                          <input
                            type={showGmailPass ? 'text' : 'password'}
                            required
                            value={gmailForm.pass}
                            onChange={(e) => setGmailForm({ ...gmailForm, pass: e.target.value })}
                            className="w-full border border-slate-300 rounded-lg p-2.5 pr-9 text-xs text-slate-900 bg-white font-mono focus:border-blue-500 focus:outline-none"
                            placeholder="xxxx xxxx xxxx xxxx"
                          />
                          <button
                            type="button"
                            onClick={() => setShowGmailPass(!showGmailPass)}
                            className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 text-xs font-bold"
                          >
                            {showGmailPass ? 'Hide' : 'Show'}
                          </button>
                        </div>
                        <span className="text-[10px] text-slate-500 mt-1 block">
                          Tip: Google Account &gt; Security &gt; 2-Step Verification &gt; App Passwords se 16-character code generate karein.
                        </span>
                      </div>

                      <div className="pt-2 flex items-center justify-between gap-2">
                        <button
                          type="submit"
                          disabled={connectingGmail || !gmailForm.pass}
                          className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-50 transition"
                        >
                          {connectingGmail ? (
                            <>
                              <Loader2 size={13} className="animate-spin" />
                              <span>Verifying...</span>
                            </>
                          ) : (
                            <>
                              <Zap size={13} />
                              <span>⚡ Verify & Connect Gmail</span>
                            </>
                          )}
                        </button>

                        {connectors?.gmail?.connected && (
                          <button
                            type="button"
                            onClick={() => handleDisconnectChannel('gmail')}
                            className="px-3 py-2.5 border border-rose-300 text-rose-700 hover:bg-rose-50 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition"
                          >
                            Disconnect
                          </button>
                        )}
                      </div>
                    </form>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-200 text-[10px] text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-blue-600 flex-shrink-0" />
                  <span>Google Workspace / Gmail delivers directly to inbox. Daily quota: 12 leads.</span>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                Dono accounts connect hone ke baad rozana kul <strong>24 leads</strong> dispatch hongi (12 Hostinger + 12 Gmail).
              </span>
              <button
                type="button"
                onClick={() => setShowConnectorsModal(false)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
