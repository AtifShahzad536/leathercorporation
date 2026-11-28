import React, { useState, useEffect, useRef } from 'react';
import api from '../api/client';
import { 
  Upload, FileSpreadsheet, Mail, CheckCircle, Clock, AlertTriangle, 
  Trash2, Play, Pause, RefreshCw, FileText, Send, Sparkles, ChevronRight,
  Zap, Loader2, Check, X, ShieldCheck, Link2, Globe, Key, Lock, ExternalLink, Terminal, RotateCcw
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
  const [oauthConfig, setOauthConfig] = useState({ clientId: '', clientSecret: '' });
  const [savingOauthConfig, setSavingOauthConfig] = useState(false);
  const [showOauthSetup, setShowOauthSetup] = useState(false);
  const [previewModalTemplate, setPreviewModalTemplate] = useState(null);

  // Live Dual Engine Runtime Console State
  const [liveEngineState, setLiveEngineState] = useState({
    isRunning: false,
    processed: 0,
    total: 0,
    sent: 0,
    failed: 0,
    currentLead: null,
    logs: [],
  });
  const [consoleExpanded, setConsoleExpanded] = useState(true);
  const [autoScrollLogs, setAutoScrollLogs] = useState(true);
  const terminalScrollRef = useRef(null);

  const getCategoryTag = (name = '') => {
    const lower = name.toLowerCase();
    if (lower.includes('baseball') || lower.includes('softball')) return 'Baseball';
    if (lower.includes('football')) return 'Football';
    if (lower.includes('basketball')) return 'Basketball';
    if (lower.includes('soccer')) return 'Soccer';
    if (lower.includes('wrestling')) return 'Wrestling';
    if (lower.includes('track') || lower.includes('cross country')) return 'Track & Field';
    if (lower.includes('volleyball')) return 'Volleyball';
    if (lower.includes('lacrosse')) return 'Lacrosse';
    if (lower.includes('club') || lower.includes('wholesale')) return 'Club Partner';
    return 'General Pro';
  };

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

  const fetchLiveLogs = async () => {
    try {
      const res = await api.get('/email/live-logs');
      if (res.data.success && res.data.data) {
        setLiveEngineState(res.data.data);
      }
    } catch (err) {}
  };

  const handleClearTerminalLogs = async () => {
    try {
      await api.post('/email/clear-live-logs');
      fetchLiveLogs();
    } catch (err) {}
  };

  // Poll live engine logs
  useEffect(() => {
    fetchLiveLogs();
    const intervalTime = (sendingBatch || liveEngineState.isRunning) ? 1000 : 3500;
    const interval = setInterval(fetchLiveLogs, intervalTime);
    return () => clearInterval(interval);
  }, [sendingBatch, liveEngineState.isRunning]);

  // Auto-scroll terminal logs
  useEffect(() => {
    if (autoScrollLogs && terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [liveEngineState.logs, autoScrollLogs]);

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
        console.log('[AUTO-DISPATCH] ⏰ Daily timer reached 00:00:00! Automatically firing daily 24-lead batch (12 Hostinger + 12 Gmail)...');
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
    setConsoleExpanded(true);
    fetchLiveLogs();
    try {
      const res = await api.post('/email/send-batch', { limit: 24 });
      setBatchResult({ type: res.data.success ? 'success' : 'error', text: res.data.message });
      fetchData();
      fetchLiveLogs();
      if (selectedListDetail?._id) {
        handleViewDetails(selectedListDetail._id);
      }
    } catch (err) {
      setBatchResult({ type: 'error', text: err.response?.data?.message || err.message });
    } finally {
      setSendingBatch(false);
      fetchLiveLogs();
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
    if (e && e.preventDefault) e.preventDefault();
    if (!selectedFile) {
      alert('Please choose an Excel (.xlsx, .xls) or CSV file first.');
      return;
    }

    setUploading(true);
    setUploadMessage(null);
    console.log('[UPLOAD] Starting upload of:', selectedFile.name, selectedFile.size, 'bytes');

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const res = await api.post('/email/lists/upload', formData, {
        headers: { 'Content-Type': undefined } // Let browser boundary calculate automatically
      });
      console.log('[UPLOAD] Success response:', res.data);
      if (res.data.success) {
        setUploadMessage({ type: 'success', text: res.data.message });
        setSelectedFile(null);
        fetchData();
      }
    } catch (err) {
      console.error('[UPLOAD] Error:', err);
      const errMsg = err.response?.data?.message || err.message || 'Upload failed';
      setUploadMessage({ type: 'error', text: errMsg });
    } finally {
      setUploading(false);
    }
  };

  const handleResetStats = async () => {
    if (!window.confirm('Reset all sent email history and counters back to 0?')) return;
    try {
      const res = await api.post('/email/stats/reset');
      setBatchResult({ type: 'success', text: res.data.message });
      fetchData();
    } catch (err) {
      setBatchResult({ type: 'error', text: err.response?.data?.message || err.message });
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
          text: res.data.message || 'Google OAuth is not configured with client ID / secret. Enter them below to activate 1-click connect.' 
        });
        setShowOauthSetup(true);
      }
    } catch (err) {
      setConnectorResult({ type: 'error', text: err.response?.data?.message || err.message });
      setShowOauthSetup(true);
    } finally {
      setConnectingGmail(false);
    }
  };

  const handleSaveGoogleOAuthConfig = async (e) => {
    e.preventDefault();
    if (!oauthConfig.clientId || !oauthConfig.clientSecret) return;
    setSavingOauthConfig(true);
    setConnectorResult(null);
    try {
      const res = await api.post('/email/oauth/google/config', oauthConfig);
      setConnectorResult({ type: 'success', text: res.data.message || 'Google OAuth credentials saved!' });
      setShowOauthSetup(false);
    } catch (err) {
      setConnectorResult({ type: 'error', text: err.response?.data?.message || err.message });
    } finally {
      setSavingOauthConfig(false);
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1E1B6E] to-indigo-600 text-white flex items-center justify-center shadow-sm">
              <Mail size={18} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                Email Marketing & Leads Management
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Dual Dispatch Engine • Hostinger (12/day) + Gmail (12/day) = 24 Leads/Day • 10 Pro Templates
              </p>
            </div>
          </div>
        </div>

        {/* Clean, Non-Clustered Action Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => { setShowConnectorsModal(true); setConnectorResult(null); fetchConnectors(); }}
            className="px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xs cursor-pointer transition"
          >
            <Link2 size={14} className="text-indigo-600" />
            <span>Mail Connectors</span>
            {(connectors?.hostinger?.connected || connectors?.gmail?.connected) && (
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => { setShowTestModal(true); setTestResult(null); }}
            className="px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xs cursor-pointer transition"
          >
            <Send size={14} className="text-slate-500" />
            <span>Send Test</span>
          </button>

          <button
            onClick={() => setShowTemplateModal(true)}
            className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs cursor-pointer transition"
          >
            <Sparkles size={14} />
            <span>+ New Template</span>
          </button>

          <button
            onClick={handleResetStats}
            title="Reset Sent Stats & Delivery History back to 0"
            className="px-3 py-2 bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-slate-700 hover:text-rose-600 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs cursor-pointer transition"
          >
            <RotateCcw size={14} className="text-rose-500" />
            <span>Reset Sent (0)</span>
          </button>

          <button
            onClick={fetchData}
            title="Refresh Email Pipeline"
            className="p-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 rounded-xl shadow-xs cursor-pointer transition"
          >
            <RefreshCw size={15} />
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
        <div className="p-5 bg-gradient-to-r from-rose-50 via-red-50 to-orange-50 border border-rose-200/90 rounded-2xl text-slate-800 shadow-xs flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 border border-rose-200 flex items-center justify-center flex-shrink-0 mt-0.5">
            <AlertTriangle size={20} className="animate-bounce" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-rose-600 text-white font-black text-[10px] uppercase rounded-md tracking-wider">
                Action Needed
              </span>
              <h3 className="font-black text-sm uppercase tracking-tight text-rose-900">
                Please Upload A Leads List
              </h3>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              All uploaded lead lists have completed sending or no active list was found. The automated daily script needs contacts to dispatch the next 24 daily emails (12 Hostinger + 12 Gmail). Please upload an Excel (.xlsx) or CSV file below.
            </p>
          </div>
        </div>
      )}

      {/* ── LIVE DIGITAL DISPATCH COUNTDOWN & DUAL PIPELINE HERO CARD ── */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm relative overflow-hidden">
        {/* Brand Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#F26522] via-indigo-600 to-emerald-500" />
        
        <div className="p-6 sm:p-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Pipeline Info & Connectors (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Dual Engine Active
                </span>
                <span className="text-[11px] bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-mono font-bold border border-slate-200">
                  Target: 9:00 AM EST (14:00 UTC)
                </span>
              </div>

              <div>
                <h3 className="font-black text-lg sm:text-xl uppercase tracking-tight text-slate-900">
                  Next Automated Dual Batch Dispatch (24 Leads)
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Rozana Subha <strong>24 leads</strong> ko automatically emails dispatch hoti hain: 12 leads via Hostinger + 12 leads via Gmail alternating 10 pro marketing templates.
                </p>
              </div>

              {/* Senders Channel Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {/* Hostinger Card */}
                <div 
                  onClick={() => { setShowConnectorsModal(true); setConnectorResult(null); }}
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer group shadow-2xs"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${connectors?.hostinger?.connected ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                    <div className="min-w-0">
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">Hostinger (12/day)</div>
                      <div className="text-xs font-mono font-bold text-slate-800 truncate" title={connectors?.hostinger?.email || 'sale@hamlosportswear.site'}>
                        {connectors?.hostinger?.email || 'sale@hamlosportswear.site'}
                      </div>
                    </div>
                  </div>
                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md tracking-wider flex-shrink-0 ml-2 ${connectors?.hostinger?.connected ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-rose-100 text-rose-800 border border-rose-200'}`}>
                    {connectors?.hostinger?.connected ? 'ACTIVE' : 'SETUP'}
                  </span>
                </div>

                {/* Gmail Card */}
                <div 
                  onClick={() => { setShowConnectorsModal(true); setConnectorResult(null); }}
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer group shadow-2xs"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${connectors?.gmail?.connected ? 'bg-blue-500' : 'bg-amber-500'}`} />
                    <div className="min-w-0">
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">Gmail (12/day)</div>
                      <div className="text-xs font-mono font-bold text-slate-800 truncate" title={connectors?.gmail?.email || 'hamlosportswear@gmail.com'}>
                        {connectors?.gmail?.email || 'hamlosportswear@gmail.com'}
                      </div>
                    </div>
                  </div>
                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md tracking-wider flex-shrink-0 ml-2 ${connectors?.gmail?.connected ? 'bg-blue-100 text-blue-800 border border-blue-200' : 'bg-amber-100 text-amber-800 border border-amber-200'}`}>
                    {connectors?.gmail?.connected ? 'ACTIVE' : 'SETUP'}
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Column: Digital Countdown Clock (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center p-4 bg-slate-950 rounded-2xl border border-slate-800 shadow-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
                <Clock size={12} className="text-[#F26522]" /> Countdown to 9 AM EST
              </span>
              <div className="flex items-center gap-1.5 font-mono">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black bg-slate-900 text-white px-2.5 py-1.5 rounded-xl border border-slate-800 shadow-inner min-w-[52px]">
                    {timeLeft.hours}
                  </div>
                  <span className="text-[9px] font-black uppercase text-slate-400 mt-1 block tracking-wider">HRS</span>
                </div>
                <span className="text-xl font-black text-[#F26522] pb-4">:</span>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black bg-slate-900 text-white px-2.5 py-1.5 rounded-xl border border-slate-800 shadow-inner min-w-[52px]">
                    {timeLeft.minutes}
                  </div>
                  <span className="text-[9px] font-black uppercase text-slate-400 mt-1 block tracking-wider">MIN</span>
                </div>
                <span className="text-xl font-black text-[#F26522] pb-4">:</span>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black bg-slate-900 text-[#F26522] px-2.5 py-1.5 rounded-xl border border-slate-800 shadow-inner min-w-[52px]">
                    {timeLeft.seconds}
                  </div>
                  <span className="text-[9px] font-black uppercase text-slate-400 mt-1 block tracking-wider">SEC</span>
                </div>
              </div>
            </div>

            {/* Right Column: Unified Primary Dispatch Action Button (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col items-stretch justify-center gap-2">
              <button
                onClick={handleSendBatchNow}
                disabled={sendingBatch}
                className="w-full py-3.5 px-5 bg-gradient-to-r from-[#F26522] to-orange-600 hover:from-[#d95316] hover:to-orange-700 text-white rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition cursor-pointer disabled:opacity-50"
              >
                {sendingBatch ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Dispatching 24 Leads...</span>
                  </>
                ) : (
                  <>
                    <Zap size={18} className="fill-white" />
                    <span>Dispatch 24 Leads Now</span>
                  </>
                )}
              </button>
              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Dual Engine: 12 Hostinger + 12 Gmail • Fast Parallel</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── LIVE REAL-TIME DISPATCH ENGINE CONSOLE (TERMINAL) ── */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden transition-all">
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Mac style window controls */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block border border-rose-600/50" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/50" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/50" />
            </div>

            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-[#F26522]" />
              <span className="font-mono text-xs font-black uppercase tracking-wider text-slate-200">
                Dual Dispatch Engine // Live Console Stream
              </span>
            </div>

            {liveEngineState.isRunning ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Running • Dispatching...</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 border border-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span>Standby / Ready</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Auto scroll toggle */}
            <button
              onClick={() => setAutoScrollLogs(!autoScrollLogs)}
              className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition cursor-pointer ${autoScrollLogs ? 'bg-slate-800 text-emerald-400 border-slate-700' : 'bg-slate-900 text-slate-500 border-slate-800'}`}
              title="Toggle Auto Scroll to latest log"
            >
              Auto-Scroll: {autoScrollLogs ? 'ON' : 'OFF'}
            </button>

            {/* Clear logs */}
            <button
              onClick={handleClearTerminalLogs}
              className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition cursor-pointer"
            >
              Clear
            </button>

            {/* Minimize / Expand */}
            <button
              onClick={() => setConsoleExpanded(!consoleExpanded)}
              className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition cursor-pointer"
            >
              {consoleExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
        </div>

        {/* Live Progress Bar if active */}
        {liveEngineState.isRunning && (
          <div className="bg-slate-950/80 px-4 py-2 border-b border-slate-800/80 flex items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 flex-1">
              <span className="text-slate-400 text-[10px] uppercase font-bold">Progress:</span>
              <div className="flex-1 max-w-md bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                <div 
                  className="bg-gradient-to-r from-[#F26522] to-emerald-400 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${Math.round(((liveEngineState.processed || 0) / (liveEngineState.total || 1)) * 100)}%` }}
                />
              </div>
              <span className="text-emerald-400 font-bold text-[11px]">
                {liveEngineState.processed || 0}/{liveEngineState.total || 24}
              </span>
            </div>
            {liveEngineState.currentLead && (
              <span className="text-[11px] text-slate-300 truncate max-w-xs">
                Active: <span className="text-amber-400">{liveEngineState.currentLead}</span>
              </span>
            )}
          </div>
        )}

        {/* Terminal Body */}
        {consoleExpanded && (
          <div 
            ref={terminalScrollRef}
            className="p-4 max-h-72 overflow-y-auto font-mono text-[11px] leading-relaxed space-y-1 bg-slate-950/95 scroll-smooth select-text"
          >
            {(!liveEngineState.logs || liveEngineState.logs.length === 0) ? (
              <div className="text-slate-500 py-3 text-center">
                Waiting for dispatch operations... Click "Dispatch 24 Leads Now" or wait for 9:00 AM EST timer.
              </div>
            ) : (
              liveEngineState.logs.map((log) => {
                let badgeClass = 'text-slate-400';
                if (log.level === 'hostinger') badgeClass = 'text-emerald-400 font-bold bg-emerald-950/70 border border-emerald-800/50 px-1.5 py-0.5 rounded';
                if (log.level === 'gmail') badgeClass = 'text-blue-400 font-bold bg-blue-950/70 border border-blue-800/50 px-1.5 py-0.5 rounded';
                if (log.level === 'success') badgeClass = 'text-emerald-300 font-bold';
                if (log.level === 'warn') badgeClass = 'text-amber-300 font-bold';
                if (log.level === 'error') badgeClass = 'text-rose-400 font-bold';
                if (log.level === 'info') badgeClass = 'text-sky-300';

                return (
                  <div key={log.id} className="flex items-start gap-2 hover:bg-slate-900/60 px-1.5 py-0.5 rounded transition">
                    <span className="text-slate-600 select-none flex-shrink-0 text-[10px] mt-0.5">
                      [{log.time}]
                    </span>
                    <span className={`break-all ${badgeClass}`}>
                      {log.message}
                    </span>
                  </div>
                );
              })
            )}

            <div className="flex items-center gap-1 text-slate-500 pt-1 text-[10px]">
              <span className="text-emerald-500 font-bold">&gt;</span>
              <span>dual-engine@hamlo-sports:~</span>
              <span className="inline-block w-1.5 h-3 bg-emerald-400 animate-pulse ml-0.5" />
            </div>
          </div>
        )}
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
          <div className={`mb-6 p-4 rounded-xl text-xs font-semibold flex items-center justify-between gap-3 shadow-xs ${uploadMessage.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
            <div className="flex items-center gap-2">
              {uploadMessage.type === 'success' ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
              <span>{uploadMessage.text}</span>
            </div>
            <button
              type="button"
              onClick={() => setUploadMessage(null)}
              className="text-slate-400 hover:text-slate-700 cursor-pointer p-1"
            >
              <X size={14} />
            </button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <label className={`flex-1 w-full flex items-center justify-center px-6 py-6 border-2 border-dashed rounded-xl cursor-pointer transition group ${
            selectedFile ? 'border-emerald-500 bg-emerald-50/40' : 'border-slate-300 hover:border-[#F26522] bg-slate-50/50 hover:bg-slate-50'
          }`}>
            <div className="text-center">
              {selectedFile ? (
                <>
                  <CheckCircle size={26} className="mx-auto text-emerald-600 mb-1" />
                  <span className="text-xs font-black text-emerald-900 block">
                    {selectedFile.name}
                  </span>
                  <span className="text-[10px] text-emerald-600 block mt-0.5">
                    Ready to ingest • {(selectedFile.size / 1024).toFixed(1)} KB
                  </span>
                </>
              ) : (
                <>
                  <Upload size={24} className="mx-auto text-slate-400 group-hover:text-[#F26522] mb-1" />
                  <span className="text-xs font-bold text-slate-700 block">
                    Choose Excel / CSV file from computer
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Supports .xlsx, .xls, .csv up to 15MB
                  </span>
                </>
              )}
            </div>
            <input
              type="file"
              accept=".xlsx,.xls,.csv"
              onClick={(e) => { e.target.value = null; }}
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setSelectedFile(e.target.files[0]);
                  setUploadMessage(null);
                }
              }}
              className="hidden"
            />
          </label>

          <div className="flex flex-col gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={handleFileUpload}
              disabled={!selectedFile || uploading}
              className="w-full sm:w-auto px-8 py-5 bg-[#F26522] hover:bg-[#d95316] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
            >
              {uploading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Processing File...</span>
                </>
              ) : (
                <>
                  <Upload size={16} />
                  <span>Ingest Leads</span>
                </>
              )}
            </button>

            {selectedFile && !uploading && (
              <button
                type="button"
                onClick={() => setSelectedFile(null)}
                className="text-[11px] font-bold text-rose-600 hover:text-rose-700 hover:underline text-center cursor-pointer"
              >
                ✕ Remove & choose another
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── UPLOADED LISTS TABLE ── */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-green-50 text-green-700 border border-green-200 flex items-center justify-center flex-shrink-0">
              <FileSpreadsheet size={16} />
            </div>
            <div>
              <h3 className="font-black text-sm uppercase tracking-tight text-slate-900">
                Uploaded Lead Batches ({lists.length})
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Automated daily cron dispatches 24 contacts from the active batch queue
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs self-start sm:self-auto">
            Active Batch Priority: First Active List
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 text-slate-500 uppercase font-black tracking-wider text-[10px] border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-5">Batch File Name</th>
                <th className="py-3.5 px-4 text-center">Total Leads</th>
                <th className="py-3.5 px-4 text-center">Delivered</th>
                <th className="py-3.5 px-4 text-center">Pending</th>
                <th className="py-3.5 px-5">Progress</th>
                <th className="py-3.5 px-4 text-center">Batch Status</th>
                <th className="py-3.5 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {lists.map((l) => {
                const percent = Math.round((l.sentCount / (l.totalEmails || 1)) * 100);
                return (
                  <tr key={l._id} className="hover:bg-slate-50/80 transition">
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-green-50 text-green-700 border border-green-200/60 flex items-center justify-center flex-shrink-0">
                          <FileSpreadsheet size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{l.fileName}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">
                            Uploaded {new Date(l.createdAt || Date.now()).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center font-mono font-bold text-slate-900">
                      {l.totalEmails}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-emerald-800 font-mono font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                        <Check size={12} className="text-emerald-600 stroke-[3]" />
                        <span>{l.sentCount} sent</span>
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center font-mono font-bold">
                      {l.pendingCount > 0 ? (
                        <span className="inline-block text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 shadow-2xs">
                          {l.pendingCount}
                        </span>
                      ) : (
                        <span className="text-slate-400">0</span>
                      )}
                    </td>
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-28 sm:w-36 bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200/60">
                          <div 
                            className="bg-gradient-to-r from-[#F26522] to-amber-500 h-full rounded-full transition-all duration-300" 
                            style={{ width: `${percent}%` }} 
                          />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-slate-600 min-w-[32px]">
                          {percent}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-2xs ${
                        l.status === 'active' 
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                          : l.status === 'completed' 
                            ? 'bg-blue-50 text-blue-800 border border-blue-200' 
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}>
                        {l.status === 'active' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                        <span>{l.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleViewDetails(l._id)}
                          className="px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded-lg text-[11px] font-bold transition cursor-pointer shadow-2xs"
                        >
                          View Leads
                        </button>
                        <button
                          onClick={() => handleToggleStatus(l)}
                          title={l.status === 'active' ? 'Pause Batch' : 'Activate Batch'}
                          className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition cursor-pointer"
                        >
                          {l.status === 'active' ? <Pause size={14} /> : <Play size={14} />}
                        </button>
                        <button
                          onClick={() => handleDeleteList(l._id)}
                          title="Delete Batch"
                          className="p-1.5 rounded-lg border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-600 transition cursor-pointer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {lists.length === 0 && (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-slate-400 font-medium">
                    No lead files uploaded yet. Choose an Excel or CSV file above to begin.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── EMAIL TEMPLATES TABLE (ROTATING) ── */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/40">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center flex-shrink-0">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="font-black text-sm uppercase tracking-tight text-slate-900">
                  Active Marketing Templates ({templates.length})
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  Alternating across 24 daily leads with direct product links and 3D Uniform Studio
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleSeedDefaultTemplates}
              disabled={seedingTemplates}
              className="px-3.5 py-2 bg-slate-900 hover:bg-black text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs cursor-pointer disabled:opacity-50 transition"
            >
              {seedingTemplates ? <Loader2 size={13} className="animate-spin" /> : <Sparkles size={13} className="text-amber-400" />}
              <span>Sync 10 Pro Templates</span>
            </button>

            <button
              onClick={() => setShowTemplateModal(true)}
              className="px-3.5 py-2 bg-[#F26522] hover:bg-[#d95316] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs cursor-pointer transition"
            >
              <span>+ Custom Template</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 text-slate-500 uppercase font-black tracking-wider text-[10px] border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-5 w-12 text-center">#</th>
                <th className="py-3.5 px-5">Template Name</th>
                <th className="py-3.5 px-5">Sport / Segment</th>
                <th className="py-3.5 px-5">Subject Line</th>
                <th className="py-3.5 px-4 text-center">Lifetime Sends</th>
                <th className="py-3.5 px-4 text-center">Rotation Status</th>
                <th className="py-3.5 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {templates.map((tpl, idx) => {
                const category = getCategoryTag(tpl.name);
                let catBadge = 'bg-slate-100 text-slate-700 border-slate-200';
                if (category === 'Baseball') catBadge = 'bg-amber-50 text-amber-800 border-amber-200';
                if (category === 'Basketball') catBadge = 'bg-orange-50 text-orange-800 border-orange-200';
                if (category === 'Soccer') catBadge = 'bg-emerald-50 text-emerald-800 border-emerald-200';
                if (category === 'Wrestling') catBadge = 'bg-rose-50 text-rose-800 border-rose-200';
                if (category === 'Lacrosse') catBadge = 'bg-purple-50 text-purple-800 border-purple-200';
                if (category === 'Club Partner') catBadge = 'bg-blue-50 text-blue-800 border-blue-200';

                return (
                  <tr key={tpl._id} className="hover:bg-slate-50/80 transition group">
                    <td className="py-3.5 px-5 text-center font-mono font-bold text-slate-400 text-[11px]">
                      {String(idx + 1).padStart(2, '0')}
                    </td>
                    <td className="py-3.5 px-5 font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-indigo-600 flex-shrink-0" />
                        <span>{tpl.name}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-5">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border shadow-2xs ${catBadge}`}>
                        {category}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-slate-600 max-w-sm">
                      <span className="line-clamp-1 font-medium" title={tpl.subject}>
                        {tpl.subject}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-800">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] border border-slate-200">
                        {tpl.sendCount || 0}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-right">
                      <button
                        onClick={() => setPreviewModalTemplate(tpl)}
                        className="px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded-lg text-[11px] font-bold tracking-wide transition cursor-pointer shadow-2xs"
                      >
                        Preview
                      </button>
                    </td>
                  </tr>
                );
              })}
              {templates.length === 0 && (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-slate-400 font-medium">
                    No marketing templates found. Click "Sync 10 Pro Templates" to populate defaults.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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

                        <div className="p-2.5 bg-amber-50/80 border border-amber-200/80 rounded-lg text-left text-[11px] text-amber-900 space-y-1">
                          <div className="font-bold flex items-center gap-1 text-amber-800">
                            <AlertTriangle size={13} className="text-amber-600 flex-shrink-0" />
                            <span>Important for Google OAuth:</span>
                          </div>
                          <p className="text-[10px] leading-relaxed text-amber-700">
                            Google Cloud project me <strong>Gmail API</strong> enable hona zaroori hai.{' '}
                            <a 
                              href="https://console.developers.google.com/apis/api/gmail.googleapis.com/overview?project=1066347869958" 
                              target="_blank" 
                              rel="noreferrer"
                              className="text-blue-600 underline font-bold inline-flex items-center gap-0.5"
                            >
                              Gmail API Enable Link <ExternalLink size={10} />
                            </a>
                            <br />
                            <em>Tip: Agar Cloud setup nahi karna chahte to upar <strong>App Password (SMTP)</strong> tab se connect karein.</em>
                          </p>
                        </div>
                        
                        <div className="pt-2 text-left">
                          <button
                            type="button"
                            onClick={() => setShowOauthSetup(!showOauthSetup)}
                            className="text-[11px] text-blue-600 hover:underline font-bold flex items-center gap-1 cursor-pointer"
                          >
                            <span>{showOauthSetup ? '▲ Hide Client ID & Secret Setup' : '▼ Configure / Paste Google Client ID & Secret'}</span>
                          </button>

                          {showOauthSetup && (
                            <form onSubmit={handleSaveGoogleOAuthConfig} className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5 text-left">
                              <span className="text-[10px] text-slate-500 font-semibold block">
                                Google Cloud Console se copy ki hui Client ID aur Secret yahan paste karein:
                              </span>
                              <div>
                                <label className="block text-[10px] font-bold uppercase text-slate-600 mb-0.5">Google Client ID</label>
                                <input
                                  type="text"
                                  required
                                  value={oauthConfig.clientId}
                                  onChange={(e) => setOauthConfig({ ...oauthConfig, clientId: e.target.value })}
                                  placeholder="xxxxxx.apps.googleusercontent.com"
                                  className="w-full border border-slate-300 rounded p-1.5 text-xs bg-white text-slate-900 font-mono"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold uppercase text-slate-600 mb-0.5">Google Client Secret</label>
                                <input
                                  type="password"
                                  required
                                  value={oauthConfig.clientSecret}
                                  onChange={(e) => setOauthConfig({ ...oauthConfig, clientSecret: e.target.value })}
                                  placeholder="GOCSPX-xxxxxx"
                                  className="w-full border border-slate-300 rounded p-1.5 text-xs bg-white text-slate-900 font-mono"
                                />
                              </div>
                              <button
                                type="submit"
                                disabled={savingOauthConfig}
                                className="w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
                              >
                                {savingOauthConfig ? 'Saving...' : '💾 Save Google Credentials'}
                              </button>
                            </form>
                          )}
                        </div>
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

      {/* ── TEMPLATE HTML LIVE PREVIEW MODAL ── */}
      {previewModalTemplate && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase text-slate-900">
                    {previewModalTemplate.name}
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Subject: {previewModalTemplate.subject}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setPreviewModalTemplate(null)}
                className="text-slate-400 hover:text-slate-700 font-bold p-1 rounded-lg hover:bg-slate-200 cursor-pointer text-sm"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100">
              <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-2 overflow-hidden">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: previewModalTemplate.htmlBody
                      .replace(/{{name}}/gi, 'John Coach')
                      .replace(/{{company}}/gi, 'Varsity Athletic Program')
                      .replace(/{{email}}/gi, 'coach@varsity.com')
                  }} 
                />
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 flex items-center justify-between bg-white">
              <span className="text-xs text-slate-500">
                Sample render with mock lead details: John Coach / Varsity Athletic Program.
              </span>
              <button
                onClick={() => setPreviewModalTemplate(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
