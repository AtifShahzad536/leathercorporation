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
import { useCMS } from '../../context/CMSContext';
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
        const res = await axios.get(`/api/models3d?sport=${encodeURIComponent(selectedSport.id)}`);
        if (isMounted && res.data.success && res.data.data.length > 0) {
          setActiveModel(res.data.data[0]);
        } else if (isMounted) {
          setActiveModel(null); // Fallback to parametric 3D model
        }
      } catch (err) {
        if (isMounted) setActiveModel(null);
      }
    };
    fetchModels();
    return () => { isMounted = false; };
  }, [selectedSport, setActiveModel]);

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
        const designRes = await axios.post('/api/models3d/designs', {
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
        });
        if (designRes.data?.data?.designCode) {
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
    <div className="w-full h-full flex flex-col overflow-hidden bg-[#0A0E1A] text-white select-none relative">
      <SEO
        title="3D Custom Sports Jersey Builder | Studio Customizer | HAMLO SPORTS"
        description="Design custom sports uniforms online with professional real-time Three.js 3D visualization, PBR fabrics, 2D Konva graphic editor, and 12-hour factory proof from Sialkot."
        canonical="https://hamlosportswear.site/builder/"
        keywords="3d custom sports jersey builder, 3d uniform customizer, custom team uniforms factory direct Sialkot, sublimation 3d studio"
      />

      {/* ── 1. IDE TOP COMMAND RIBBON (FIXED HEIGHT, NO SCROLL) ── */}
      <header className="h-12 md:h-13 bg-[#111625] border-b border-white/10 px-3 sm:px-4 flex items-center justify-between gap-2 text-white flex-shrink-0 z-20">

        {/* Left: Studio Branding & Dropdown Selectors */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="hidden sm:flex items-center gap-2 pr-3 border-r border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="font-black text-xs uppercase tracking-wider text-white">
              3D STUDIO <span className="text-[var(--accent)] text-[10px] font-mono">IDE</span>
            </span>
          </div>

          {/* Sport Discipline Dropdown */}
          <div className="relative">
            <select
              value={selectedSport.id}
              onChange={(e) => {
                const sp = SPORTS_LIST.find(s => s.id === e.target.value);
                if (sp) handleSportChange(sp);
              }}
              className="bg-[#1A2238] hover:bg-[#202945] text-white font-bold text-xs pl-2.5 pr-7 py-1.5 rounded-[4px] border border-white/15 focus:border-[var(--accent)] focus:outline-none cursor-pointer transition shadow-xs appearance-none"
            >
              {SPORTS_LIST.map(sport => (
                <option key={sport.id} value={sport.id} className="bg-[#111625] text-white py-1">
                  {sport.icon} {sport.name}
                </option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
          </div>

          {/* Silhouette Cut Dropdown */}
          <div className="relative">
            <select
              value={selectedCut}
              onChange={(e) => setSelectedCut(e.target.value)}
              className="bg-[#1A2238] hover:bg-[#202945] text-white font-bold text-xs pl-2.5 pr-7 py-1.5 rounded-[4px] border border-white/15 focus:border-[var(--accent)] focus:outline-none cursor-pointer transition shadow-xs appearance-none max-w-[130px] sm:max-w-[210px] truncate"
            >
              {selectedSport.cuts.map(cut => (
                <option key={cut} value={cut} className="bg-[#111625] text-white py-1">
                  {cut}
                </option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
          </div>
        </div>

        {/* Center: Action Tools (Undo/Redo/Reset + 360/Wireframe/2D Studio/Fullscreen) */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="flex items-center gap-0.5 bg-[#1A2238] p-0.5 rounded-[4px] border border-white/10">
            <button
              onClick={undo}
              title="Undo (Ctrl+Z)"
              className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white transition cursor-pointer"
            >
              <Undo2 size={13} />
            </button>
            <button
              onClick={redo}
              title="Redo"
              className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white transition cursor-pointer"
            >
              <Redo2 size={13} />
            </button>
            <button
              onClick={resetDesign}
              title="Reset to Factory Baseline"
              className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-red-400 transition cursor-pointer"
            >
              <RotateCcw size={13} />
            </button>
          </div>

          <div className="w-[1px] h-5 bg-white/10" />

          <div className="flex items-center gap-1 bg-[#1A2238] p-0.5 rounded-[4px] border border-white/10">
            <button
              onClick={toggleAutoRotate}
              title="Toggle 360° Turntable Rotation"
              className={`px-2 py-1 rounded text-[11px] font-bold transition flex items-center gap-1 cursor-pointer ${autoRotate ? 'bg-[var(--accent)] text-white shadow-xs' : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
            >
              <RotateCw size={12} className={autoRotate ? 'animate-spin' : ''} />
              <span>360°</span>
            </button>

            <button
              onClick={toggleWireframe}
              title="Toggle Wireframe CAD Mode"
              className={`px-2 py-1 rounded text-[11px] font-bold transition flex items-center gap-1 cursor-pointer ${isWireframe ? 'bg-[var(--accent)] text-white shadow-xs' : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
            >
              <Layers size={12} />
              <span>Wireframe</span>
            </button>

            <button
              onClick={() => setIs2DEditorOpen(true)}
              title="Open 2D Vector Graphic Studio"
              className="px-2 py-1 rounded text-[11px] font-bold text-white/80 hover:bg-white/10 hover:text-white transition flex items-center gap-1 cursor-pointer"
            >
              <Palette size={12} className="text-[var(--accent)]" />
              <span>2D Studio</span>
            </button>

            <button
              onClick={toggleFullscreen}
              title="Toggle Fullscreen Viewport"
              className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white transition cursor-pointer"
            >
              {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>
          </div>
        </div>

        {/* Right: Live Price & Primary CTA */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="hidden sm:flex flex-col text-right">
            <div className="flex items-baseline gap-1 justify-end">
              <span className="text-xs font-black text-[var(--accent)]">${unitRate.toFixed(2)}</span>
              <span className="text-[10px] text-white/50 font-medium">/set</span>
            </div>
            <span className="text-[9px] font-mono text-emerald-400 font-semibold">{rosterCount} sets MOQ</span>
          </div>

          <button
            onClick={handleOpenQuoteModal}
            className="px-3 sm:px-4 py-1.5 bg-[var(--accent)] hover:brightness-110 text-white font-black text-[11px] sm:text-xs uppercase tracking-wider rounded-[4px] shadow-md transition cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles size={12} />
            <span>Get 3D Proof</span>
          </button>
        </div>
      </header>

      {/* ── 2. MAIN 3-PANEL IDE STAGE (ZERO WINDOW SCROLL, EXACT 100% CONTAINER FIT) ── */}
      <main className="flex-1 min-h-0 flex flex-row overflow-hidden relative">

        {/* PANEL 1: LEFT DOCK (Camera Angles + Garment Regions Explorer) */}
        <div className={`h-full flex-shrink-0 z-10 ${mobileTab === 'dock' ? 'fixed inset-x-0 bottom-12 top-12 z-30 flex w-full' : 'hidden md:flex w-56'
          }`}>
          <StudioLeftPanel />
        </div>

        {/* PANEL 2: CENTER 3D STAGE (High-End Three.js WebGL Viewport) */}
        <div className={`flex-1 h-full min-w-0 relative flex flex-col bg-gradient-to-b from-[#141B2D] via-[#0D1220] to-[#080A12] overflow-hidden ${mobileTab !== 'stage' && 'hidden md:flex'
          }`}>

          {/* Subtle Stage Top Banner */}
          <div className="absolute top-3 left-4 z-10 pointer-events-none flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-xs font-black uppercase text-white/90 tracking-wider">
              {selectedSport.name} <span className="text-white/40">•</span> {selectedCut}
            </h2>
          </div>

          <Sportswear3DCanvas />
        </div>

        {/* PANEL 3: RIGHT PROPERTIES INSPECTOR (Tabbed Customization Engine) */}
        <div className={`h-full flex-shrink-0 z-10 ${mobileTab === 'inspector' ? 'fixed inset-x-0 bottom-12 top-12 z-30 flex w-full' : 'hidden md:flex w-80 lg:w-96 xl:w-[420px]'
          }`}>
          <StudioControlPanel
            onSaveDesign={handleOpenQuoteModal}
            isSubmitting={submitting}
          />
        </div>

      </main>

      {/* ── MOBILE QUICK VIEW SWITCHER DOCK (VISIBLE ONLY ON SMALL SCREENS) ── */}
      <div className="md:hidden h-12 bg-[#0E1322] border-t border-white/10 flex items-center justify-around px-2 flex-shrink-0 z-20">
        <button
          onClick={() => setMobileTab('dock')}
          className={`flex-1 py-1.5 flex flex-col items-center gap-0.5 text-[10px] font-bold uppercase transition ${mobileTab === 'dock' ? 'text-[var(--accent)] font-black' : 'text-white/60'
            }`}
        >
          <Compass size={14} />
          <span>Parts & Views</span>
        </button>

        <button
          onClick={() => setMobileTab('stage')}
          className={`flex-1 py-1.5 flex flex-col items-center gap-0.5 text-[10px] font-bold uppercase transition ${mobileTab === 'stage' ? 'text-[var(--accent)] font-black' : 'text-white/60'
            }`}
        >
          <Eye size={14} />
          <span>3D Stage</span>
        </button>

        <button
          onClick={() => setMobileTab('inspector')}
          className={`flex-1 py-1.5 flex flex-col items-center gap-0.5 text-[10px] font-bold uppercase transition ${mobileTab === 'inspector' ? 'text-[var(--accent)] font-black' : 'text-white/60'
            }`}
        >
          <Sliders size={14} />
          <span>Inspector</span>
        </button>
      </div>

      {/* ── 3. 2D VECTOR GRAPHIC STUDIO MODAL ── */}
      <Artwork2DEditorModal
        isOpen={is2DEditorOpen}
        onClose={() => setIs2DEditorOpen(false)}
      />

      {/* ── 4. QUOTE & 3D PROOF MODAL ── */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-[400] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#0E1322] text-white rounded-[6px] shadow-2xl border border-white/15 overflow-hidden">

            <div className="px-6 py-4 bg-[#141A2D] text-white flex items-center justify-between border-b border-white/10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] block">
                  Factory Direct Sialkot • 12-Hour Proof
                </span>
                <h3 className="text-base font-black uppercase tracking-tight text-white">
                  Request 3D Custom Uniform Mockup
                </h3>
              </div>
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="text-white/70 hover:text-white transition cursor-pointer text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit3DOrder} className="p-6 space-y-4">
              <div className="p-3 bg-[#141B2D] rounded border border-white/10 text-xs text-white/80 flex justify-between">
                <span>Selected: <strong className="text-white">{selectedSport.name} ({selectedCut})</strong></span>
                <span>Roster: <strong className="text-[var(--accent)]">{rosterCount} sets (${totalEstimate.toFixed(2)})</strong></span>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 uppercase mb-1">
                  Full Name / Coach Name *
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Coach Marcus Davis"
                  className="w-full px-3 py-2 text-xs bg-[#141B2D] border border-white/15 rounded text-white font-semibold focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 uppercase mb-1">
                  Team / School / Club Name
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. West Coast Baseball Academy"
                  className="w-full px-3 py-2 text-xs bg-[#141B2D] border border-white/15 rounded text-white font-semibold focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="coach@teamdomain.com"
                    className="w-full px-3 py-2 text-xs bg-[#141B2D] border border-white/15 rounded text-white font-semibold focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 text-xs bg-[#141B2D] border border-white/15 rounded text-white font-semibold focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-[var(--accent)] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider rounded-[3px] shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
                >
                  {submitting ? 'Generating 3D CAD Proof...' : 'Submit & Receive 3D Mockup'}
                  <Send size={13} />
                </button>
              </div>

              <span className="text-[10px] text-white/50 text-center block">
                Zero commitment. Official 3D production proof sent to your email & WhatsApp within 12 hours.
              </span>
            </form>

          </div>
        </div>
      )}

          {/* ── 5. SUCCESS CONFIRMATION MODAL OVERLAY ── */}
          {submittedDesign && (
            <div className="fixed inset-0 z-[500] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
              <div className="w-full max-w-lg bg-[#111625] text-white rounded-[6px] border border-white/20 p-6 space-y-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase text-white">3D Design Saved Successfully!</h3>
                    <p className="text-xs text-white/70">
                      Design Code: <strong className="text-emerald-400 font-mono text-sm">{submittedDesign.code}</strong>
                    </p>
                  </div>
                </div>

                <p className="text-xs text-white/80 leading-relaxed bg-[#1A2238] p-3 rounded border border-white/10">
                  Your custom <strong>{submittedDesign.sport} ({submittedDesign.cut})</strong> design has been assigned to our Sialkot pattern team. You will receive your official 3D production mockup within 12 business hours.
                </p>

                <div className="flex items-center justify-end gap-3 pt-2 flex-wrap">
                  <button
                    onClick={handleCopyCode}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase rounded-[4px] transition cursor-pointer flex items-center gap-1.5"
                  >
                    <Copy size={13} /> {copiedCode ? 'Copied!' : 'Copy Code'}
                  </button>
                  <a
                    href={`https://wa.me/923105464116?text=${encodeURIComponent(`Hello HAMLO SPORTS! I just designed a custom uniform on your 3D Studio [Design Code: ${submittedDesign.code}]. Please share my production proof.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase rounded-[4px] transition cursor-pointer flex items-center gap-1.5"
                  >
                    <MessageSquare size={13} /> WhatsApp Fast Track
                  </a>
                  <button
                    onClick={() => setSubmittedDesign(null)}
                    className="px-4 py-2 bg-[var(--accent)] hover:brightness-110 text-white font-bold text-xs uppercase rounded-[4px] transition cursor-pointer"
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
