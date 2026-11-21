import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import {
  Sparkles, Check, ArrowRight, ShieldCheck, Clock, RotateCw,
  Layers, Palette, Type, Upload, Send, Award, Phone, Mail,
  MessageSquare, Copy, Download, Share2, CheckCircle2,
  Undo2, Redo2, RotateCcw, Maximize2, Minimize2, ChevronDown,
  Eye, Compass, Sliders, Settings2
} from 'lucide-react';
import SEO from '../common/SEO';
import { useCMS, API_BASE } from '../../context/CMSContext';
import Sportswear3DCanvas from '../studio3d/Sportswear3DCanvas';
import StudioLeftPanel from '../studio3d/StudioLeftPanel';
import StudioControlPanel from '../studio3d/StudioControlPanel';
import Artwork2DEditorModal from '../studio3d/Artwork2DEditorModal';
import { useStudioStore } from '../studio3d/useStudioStore';

export const SPORTS_LIST = [
  { id: 'baseball', name: 'Baseball', icon: '⚾', cuts: ['Full Button Jersey', 'Two-Button Henley', 'V-Neck Pullover', 'Sleeveless Vest'] },
  { id: 'basketball', name: 'Basketball', icon: '🏀', cuts: ['Standard Tank', 'Reversible Jersey', 'Wide-Shoulder Cut', 'Collegiate Pro Fit'] },
  { id: 'football', name: 'Football', icon: '🏈', cuts: ['Cuffed Sleeve Game Jersey', 'Full Pad Compression Fit', 'Practice Mesh Jersey'] },
  { id: 'flag-football', name: 'Flag Football', icon: '🚩', cuts: ['Sleeveless Pinnie', 'Fitted Short Sleeve', 'Quarter Zip Pullover'] },
  { id: 'soccer', name: 'Soccer', icon: '⚽', cuts: ['V-Neck Match Jersey', 'Polo Collar Kit', 'Long Sleeve Keeper Set', 'Training Bib'] },
  { id: 'ice-hockey', name: 'Ice Hockey', icon: '🏒', cuts: ['Game Day Pro Sweater', 'Two-Tone Practice Jersey', 'Reversible Sweater', 'Goalie Cut'] },
  { id: 'lacrosse', name: 'Lacrosse', icon: '🥍', cuts: ['Game Jersey', 'Reversible Practice Pinnie', 'Long Sleeve Shooter Shirt'] },
  { id: 'rugby', name: 'Rugby', icon: '🏉', cuts: ['Tackle-Tough Pro Match Jersey', 'Mandarin Collar Fit', 'Reinforced Scrimmage Top'] },
  { id: 'cricket', name: 'Cricket', icon: '🏏', cuts: ['Sublimated T20 Jersey', 'Traditional Match Polo', 'Sleeveless Slipover Sweater'] },
  { id: 'tennis', name: 'Tennis', icon: '🎾', cuts: ['Performance Team Polo', 'Racerback Tank', 'Warm-up Quarter Zip'] },
  { id: 'field-hockey', name: 'Field Hockey', icon: '🏑', cuts: ['Fitted Match Singlet', 'Sleeveless Top', 'Goalkeeper Padded Smock'] },
  { id: 'esports', name: 'Esports', icon: '🎮', cuts: ['Performance Pro Hoodie', 'V-Neck Gamer Jersey', 'Sublimated Zip Windbreaker'] },
  { id: 'volleyball', name: 'Volleyball', icon: '🏐', cuts: ['Cap Sleeve Jersey', 'Sleeveless Top', 'Contrasting Libero Jersey'] },
  { id: 'softball', name: 'Softball', icon: '🥎', cuts: ['Two-Button Fastpitch Jersey', 'Full Button Jersey', 'Sleeveless Racerback'] },
  { id: 'wrestling', name: 'Wrestling', icon: '🤼', cuts: ['Folkstyle High-Cut Singlet', 'Freestyle Low-Cut Singlet', 'Two-Piece Fight Short & Top'] }
];

export default function UniformBuilderPage({ onNavigateInquiry = () => { } }) {
  const [selectedSport, setSelectedSport] = useState(SPORTS_LIST[0]);
  const [selectedCut, setSelectedCut] = useState(SPORTS_LIST[0].cuts[0]);

  // Mobile layout switcher: 'dock' | 'stage' | 'inspector'
  const [mobileTab, setMobileTab] = useState('stage');

  // Submission Form State
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedDesign, setSubmittedDesign] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const { submitInquiry } = useCMS();
  const {
    activeModel,
    setActiveModel,
    rosterCount,
    decorationMethod,
    exportConfig,
    is2DEditorOpen,
    setIs2DEditorOpen,
    autoRotate,
    toggleAutoRotate,
    isWireframe,
    toggleWireframe,
    isFullscreen,
    toggleFullscreen,
    undo,
    redo,
    resetDesign
  } = useStudioStore();

  // Fetch available published 3D models for this sport from API
  useEffect(() => {
    let isMounted = true;
    const fetchModels = async () => {
      try {
        const sportParam = encodeURIComponent(selectedSport.id);
        
        // 1. Fetch from configured API_BASE
        let res = null;
        try {
          res = await axios.get(`${API_BASE}/models3d?sport=${sportParam}`);
        } catch (err) {
          // If API_BASE failed or returned error, try direct production backend
          if (!API_BASE.includes('leathercorporation-jmrv.vercel.app')) {
            try {
              res = await axios.get(`https://leathercorporation-jmrv.vercel.app/api/models3d?sport=${sportParam}`);
            } catch (fallbackErr) {
              console.warn('Fallback models3d fetch failed:', fallbackErr?.message);
            }
          }
        }

        // Validate that response is a valid JSON object with data array (guards against HTML error responses)
        if (
          isMounted &&
          res &&
          res.data &&
          typeof res.data === 'object' &&
          res.data.success &&
          Array.isArray(res.data.data) &&
          res.data.data.length > 0
        ) {
          // If a model matches the selected cut, use it; otherwise use the first published model for this sport
          const matchingCut = res.data.data.find(
            m => m.cut && selectedCut && m.cut.toLowerCase() === selectedCut.toLowerCase()
          );
          setActiveModel(matchingCut || res.data.data[0]);
        } else if (isMounted) {
          setActiveModel(null);
        }
      } catch (err) {
        if (isMounted) setActiveModel(null);
      }
    };
    fetchModels();
    return () => { isMounted = false; };
  }, [selectedSport, selectedCut, setActiveModel]);

  // Pricing calculation
  const unitRate = useMemo(() => {
    let base = 44.99;
    if (selectedSport.id === 'ice-hockey') base = 49.99;
    if (selectedSport.id === 'football') base = 48.99;
    if (selectedSport.id === 'soccer') base = 39.99;
    if (selectedSport.id === 'wrestling') base = 39.99;

    let discount = 1.0;
    if (rosterCount >= 101) discount = 0.80;
    else if (rosterCount >= 51) discount = 0.88;
    else if (rosterCount >= 25) discount = 0.92;

    let twillAddon = 0;
    if (decorationMethod === 'twill') twillAddon = 10;
    if (decorationMethod === 'both') twillAddon = 6;

    return Math.round((base * discount + twillAddon) * 100) / 100;
  }, [selectedSport, rosterCount, decorationMethod]);

  const totalEstimate = useMemo(() => {
    return Math.round((unitRate * rosterCount) * 100) / 100;
  }, [unitRate, rosterCount]);

  const handleSportChange = (sport) => {
    setSelectedSport(sport);
    setSelectedCut(sport.cuts[0]);
  };

  const handleOpenQuoteModal = () => {
    setQuoteModalOpen(true);
  };

  const handleSubmit3DOrder = async (e) => {
    e.preventDefault();
    if (!contactEmail) return;
    setSubmitting(true);
    try {
      const cfg = exportConfig();

      // 1. Save 3D Design to database
      let designCode = `HAMLO-${selectedSport.id.slice(0, 3).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;
      try {
        const designPayload = {
          sport: selectedSport.name,
          cut: selectedCut,
          modelId: activeModel?._id || null,
          configuration: cfg,
          rosterCount,
          estimatedUnitPrice: unitRate,
          estimatedTotalPrice: totalEstimate,
          customerInfo: {
            name: contactName,
            email: contactEmail,
            phone: contactPhone,
            organization
          }
        };
        let designRes = null;
        try {
          designRes = await axios.post(`${API_BASE}/models3d/designs`, designPayload);
        } catch (postErr) {
          if (!API_BASE.includes('leathercorporation-jmrv.vercel.app')) {
            designRes = await axios.post(`https://leathercorporation-jmrv.vercel.app/api/models3d/designs`, designPayload);
          } else {
            throw postErr;
          }
        }
        if (designRes?.data?.data?.designCode) {
          designCode = designRes.data.data.designCode;
        }
      } catch (err) {
        console.warn('Design save error, continuing with fallback code:', err.message);
      }

      // 2. Submit Inquiry for Lead Desk & Email Dispatch
      await submitInquiry({
        name: contactName || 'Coach / Team Manager',
        email: contactEmail,
        phone: contactPhone || '+92 310 5464116',
        sport: selectedSport.name,
        quantity: rosterCount,
        message: `3D UNIFORM CUSTOMIZATION SPECIFICATION [DESIGN CODE: ${designCode}]
Sport: ${selectedSport.name}
Cut: ${selectedCut}
Roster Size: ${rosterCount} sets
Fabric Preset: ${cfg.activeFabric}
Sublimation Pattern: ${cfg.activePattern}
Team Name: ${cfg.nameNumber?.teamName}
Sample Back Roster: ${cfg.nameNumber?.playerName} #${cfg.nameNumber?.playerNumber}
Colors: Primary ${cfg.primaryColor}, Secondary ${cfg.secondaryColor}, Accent ${cfg.accentColor}
Logos Attached: ${cfg.logos?.length || 0}
Estimated Unit Price: $${unitRate.toFixed(2)} ($${totalEstimate.toFixed(2)} total)`,
        source: '3d_customization_studio'
      });

      setSubmittedDesign({
        code: designCode,
        sport: selectedSport.name,
        cut: selectedCut,
        rosterCount,
        totalEstimate
      });
      setQuoteModalOpen(false);
    } catch (err) {
      console.error('Error submitting 3D order:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopyCode = () => {
    if (submittedDesign?.code) {
      navigator.clipboard.writeText(submittedDesign.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-slate-100 text-slate-800 select-none relative">
      <SEO
        title="3D Custom Sports Jersey Builder | Studio Customizer | HAMLO SPORTS"
        description="Design custom sports uniforms online with professional real-time Three.js 3D visualization, PBR fabrics, 2D graphic editor, and factory-direct proofs from Sialkot."
        canonical="https://hamlosportswear.site/builder/"
        keywords="3d custom sports jersey builder, 3d uniform customizer, custom team uniforms factory direct Sialkot, sublimation 3d studio"
      />

      {/* ── 1. TOP COMMAND RIBBON (LIGHT THEME, CLEAN NORMAL WEIGHT FONTS) ── */}
      <header className="h-12 bg-white border-b border-slate-200 px-3 sm:px-4 flex items-center justify-between gap-2 text-slate-800 flex-shrink-0 z-20">

        {/* Left: Studio Name & Selectors */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="hidden sm:flex items-center gap-2 pr-3 border-r border-slate-200">
            <span className="font-semibold text-xs tracking-tight text-slate-900">
              HAMLO <span className="text-[var(--accent)] font-medium">3D Studio</span>
            </span>
          </div>

          {/* Sport Dropdown */}
          <div className="relative">
            <select
              value={selectedSport.id}
              onChange={(e) => {
                const sp = SPORTS_LIST.find(s => s.id === e.target.value);
                if (sp) handleSportChange(sp);
              }}
              className="bg-slate-50 hover:bg-slate-100 text-slate-800 font-normal text-xs pl-2.5 pr-7 py-1.5 rounded border border-slate-200 focus:border-[var(--accent)] focus:outline-none cursor-pointer transition shadow-2xs appearance-none"
            >
              {SPORTS_LIST.map(sport => (
                <option key={sport.id} value={sport.id} className="text-slate-800">
                  {sport.icon} {sport.name}
                </option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Silhouette Cut Dropdown */}
          <div className="relative">
            <select
              value={selectedCut}
              onChange={(e) => setSelectedCut(e.target.value)}
              className="bg-slate-50 hover:bg-slate-100 text-slate-800 font-normal text-xs pl-2.5 pr-7 py-1.5 rounded border border-slate-200 focus:border-[var(--accent)] focus:outline-none cursor-pointer transition shadow-2xs appearance-none max-w-[130px] sm:max-w-[210px] truncate"
            >
              {selectedSport.cuts.map(cut => (
                <option key={cut} value={cut} className="text-slate-800">
                  {cut}
                </option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Center: Action Tools (Undo/Redo/Reset + 360/Wireframe/2D Studio/Fullscreen) */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="flex items-center gap-0.5 bg-slate-50 p-0.5 rounded border border-slate-200">
            <button
              onClick={undo}
              title="Undo"
              className="p-1 rounded hover:bg-white text-slate-500 hover:text-slate-900 transition cursor-pointer"
            >
              <Undo2 size={13} />
            </button>
            <button
              onClick={redo}
              title="Redo"
              className="p-1 rounded hover:bg-white text-slate-500 hover:text-slate-900 transition cursor-pointer"
            >
              <Redo2 size={13} />
            </button>
            <button
              onClick={resetDesign}
              title="Reset Design"
              className="p-1 rounded hover:bg-white text-slate-500 hover:text-red-500 transition cursor-pointer"
            >
              <RotateCcw size={13} />
            </button>
          </div>

          <div className="w-[1px] h-5 bg-slate-200" />

          <div className="flex items-center gap-1 bg-slate-50 p-0.5 rounded border border-slate-200">
            <button
              onClick={toggleAutoRotate}
              title="Toggle 360° Rotation"
              className={`px-2 py-1 rounded text-xs transition flex items-center gap-1 cursor-pointer ${autoRotate ? 'bg-white text-slate-900 font-medium shadow-2xs border border-slate-200' : 'text-slate-600 hover:bg-white hover:text-slate-900 font-normal'
                }`}
            >
              <RotateCw size={12} className={autoRotate ? 'animate-spin' : ''} />
              <span>360°</span>
            </button>

            <button
              onClick={toggleWireframe}
              title="Toggle Wireframe View"
              className={`px-2 py-1 rounded text-xs transition flex items-center gap-1 cursor-pointer ${isWireframe ? 'bg-white text-slate-900 font-medium shadow-2xs border border-slate-200' : 'text-slate-600 hover:bg-white hover:text-slate-900 font-normal'
                }`}
            >
              <Layers size={12} />
              <span>Wireframe</span>
            </button>

            <button
              onClick={() => setIs2DEditorOpen(true)}
              title="Open 2D Vector Graphic Studio"
              className="px-2 py-1 rounded text-xs text-slate-600 hover:bg-white hover:text-slate-900 transition flex items-center gap-1 cursor-pointer font-normal"
            >
              <Palette size={12} className="text-[var(--accent)]" />
              <span>2D Studio</span>
            </button>

            <button
              onClick={toggleFullscreen}
              title="Toggle Fullscreen"
              className="p-1 rounded hover:bg-white text-slate-500 hover:text-slate-900 transition cursor-pointer"
            >
              {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>
          </div>
        </div>

        {/* Right: Live Price & Primary CTA */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="hidden sm:flex flex-col text-right">
            <div className="flex items-baseline gap-1 justify-end">
              <span className="text-xs font-semibold text-slate-900">${unitRate.toFixed(2)}</span>
              <span className="text-[10px] text-slate-500 font-normal">/set</span>
            </div>
            <span className="text-[10px] text-slate-500 font-normal">{rosterCount} sets estimate</span>
          </div>

          <button
            onClick={handleOpenQuoteModal}
            className="px-3 sm:px-4 py-1.5 bg-[var(--accent)] hover:brightness-105 text-white font-medium text-xs rounded shadow-xs transition cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles size={12} />
            <span>Get Free Proof</span>
          </button>
        </div>
      </header>

      {/* ── 2. MAIN 3-PANEL IDE STAGE (LIGHT THEME, ZERO WINDOW SCROLL) ── */}
      <main className="flex-1 min-h-0 flex flex-row overflow-hidden relative">

        {/* PANEL 1: LEFT DOCK (Camera Angles + Garment Parts) */}
        {!isFullscreen && (
          <div className={`h-full flex-shrink-0 z-10 ${mobileTab === 'dock' ? 'fixed inset-x-0 bottom-12 top-12 z-30 flex w-full' : 'hidden md:flex w-56'
            }`}>
            <StudioLeftPanel />
          </div>
        )}

        {/* PANEL 2: CENTER 3D STAGE (Clean Studio Backdrop) */}
        <div className={`flex-1 h-full min-w-0 relative flex flex-col bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] overflow-hidden ${mobileTab !== 'stage' && 'hidden md:flex'
          }`}>

          {/* Subtle Stage Top Indicator */}
          <div className="absolute top-3 left-4 z-10 pointer-events-none flex items-center gap-2">
            <h2 className="text-xs font-medium text-slate-600">
              {selectedSport.name} <span className="text-slate-400">•</span> {selectedCut}
            </h2>
          </div>

          <Sportswear3DCanvas />
        </div>

        {/* PANEL 3: RIGHT PROPERTIES INSPECTOR */}
        {!isFullscreen && (
          <div className={`h-full flex-shrink-0 z-10 ${mobileTab === 'inspector' ? 'fixed inset-x-0 bottom-12 top-12 z-30 flex w-full' : 'hidden md:flex w-80 lg:w-96 xl:w-[420px]'
            }`}>
            <StudioControlPanel
              onSaveDesign={handleOpenQuoteModal}
              isSubmitting={submitting}
            />
          </div>
        )}

      </main>

      {/* ── MOBILE QUICK VIEW SWITCHER DOCK (VISIBLE ON SMALL SCREENS) ── */}
      <div className="md:hidden h-12 bg-white border-t border-slate-200 flex items-center justify-around px-2 flex-shrink-0 z-20">
        <button
          onClick={() => setMobileTab('dock')}
          className={`flex-1 py-1.5 flex flex-col items-center gap-0.5 text-[10px] transition ${mobileTab === 'dock' ? 'text-[var(--accent)] font-medium' : 'text-slate-500 font-normal'
            }`}
        >
          <Compass size={14} />
          <span>Views & Parts</span>
        </button>

        <button
          onClick={() => setMobileTab('stage')}
          className={`flex-1 py-1.5 flex flex-col items-center gap-0.5 text-[10px] transition ${mobileTab === 'stage' ? 'text-[var(--accent)] font-medium' : 'text-slate-500 font-normal'
            }`}
        >
          <Eye size={14} />
          <span>3D View</span>
        </button>

        <button
          onClick={() => setMobileTab('inspector')}
          className={`flex-1 py-1.5 flex flex-col items-center gap-0.5 text-[10px] transition ${mobileTab === 'inspector' ? 'text-[var(--accent)] font-medium' : 'text-slate-500 font-normal'
            }`}
        >
          <Sliders size={14} />
          <span>Customize</span>
        </button>
      </div>

      {/* ── 3. 2D VECTOR GRAPHIC STUDIO MODAL ── */}
      <Artwork2DEditorModal
        isOpen={is2DEditorOpen}
        onClose={() => setIs2DEditorOpen(false)}
      />

      {/* ── 4. QUOTE & 3D PROOF MODAL (LIGHT THEME) ── */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-[400] bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white text-slate-800 rounded shadow-xl border border-slate-200 overflow-hidden">

            <div className="px-6 py-4 bg-slate-50 text-slate-800 flex items-center justify-between border-b border-slate-200">
              <div>
                <span className="text-[10px] font-medium text-[var(--accent)] block">
                  Factory Direct Sialkot • 12-Hour Mockup
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Request 3D Custom Uniform Mockup
                </h3>
              </div>
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 transition cursor-pointer text-sm font-normal"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit3DOrder} className="p-6 space-y-4">
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs text-slate-600 flex justify-between">
                <span>Selected: <strong className="text-slate-900 font-medium">{selectedSport.name} ({selectedCut})</strong></span>
                <span>Roster: <strong className="text-[var(--accent)] font-medium">{rosterCount} sets (${totalEstimate.toFixed(2)})</strong></span>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name / Coach Name *
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Coach Marcus Davis"
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded text-slate-800 font-normal focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Team / School / Club Name
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. West Coast Baseball Academy"
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded text-slate-800 font-normal focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="coach@teamdomain.com"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded text-slate-800 font-normal focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded text-slate-800 font-normal focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-[var(--accent)] hover:brightness-105 text-white font-medium text-xs rounded shadow-xs transition cursor-pointer flex items-center justify-center gap-2"
                >
                  {submitting ? 'Preparing Mockup Request...' : 'Submit & Receive 3D Mockup'}
                  <Send size={13} />
                </button>
              </div>

              <span className="text-[11px] text-slate-500 text-center block font-normal">
                No upfront commitment. Official 3D production mockup sent to email & WhatsApp within 12 hours.
              </span>
            </form>

          </div>
        </div>
      )}

      {/* ── 5. SUCCESS CONFIRMATION MODAL OVERLAY (LIGHT THEME) ── */}
      {submittedDesign && (
        <div className="fixed inset-0 z-[500] bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white text-slate-800 rounded border border-slate-200 p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">3D Design Saved Successfully</h3>
                <p className="text-xs text-slate-500 font-normal">
                  Design Code: <strong className="text-slate-800 font-mono">{submittedDesign.code}</strong>
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded border border-slate-200 font-normal">
              Your custom <strong>{submittedDesign.sport} ({submittedDesign.cut})</strong> design has been assigned to our Sialkot pattern team. You will receive your official 3D production mockup within 12 business hours.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-1 flex-wrap">
              <button
                onClick={handleCopyCode}
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-normal text-xs rounded transition cursor-pointer flex items-center gap-1.5 border border-slate-200"
              >
                <Copy size={13} /> {copiedCode ? 'Copied!' : 'Copy Code'}
              </button>
              <a
                href={`https://wa.me/923105464116?text=${encodeURIComponent(`Hello HAMLO SPORTS! I just designed a custom uniform on your 3D Studio [Design Code: ${submittedDesign.code}]. Please share my production proof.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs rounded transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                <MessageSquare size={13} /> WhatsApp Fast Track
              </a>
              <button
                onClick={() => setSubmittedDesign(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium text-xs rounded transition cursor-pointer"
              >
                Back to Studio
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
