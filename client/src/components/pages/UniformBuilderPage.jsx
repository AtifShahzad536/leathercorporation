import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { 
  Sparkles, Check, ArrowRight, ShieldCheck, Clock, RotateCw, 
  Layers, Palette, Type, Upload, Send, Award, Phone, Mail, 
  MessageSquare, Copy, Download, Share2, CheckCircle2 
} from 'lucide-react';
import SEO from '../common/SEO';
import TrustBar from '../common/TrustBar';
import { useCMS } from '../../context/CMSContext';
import Sportswear3DCanvas from '../studio3d/Sportswear3DCanvas';
import StudioControlPanel from '../studio3d/StudioControlPanel';
import Artwork2DEditorModal from '../studio3d/Artwork2DEditorModal';
import { useStudioStore } from '../studio3d/useStudioStore';

const SPORTS_LIST = [
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

export default function UniformBuilderPage({ onNavigateInquiry = () => {} }) {
  const [selectedSport, setSelectedSport] = useState(SPORTS_LIST[0]);
  const [selectedCut, setSelectedCut] = useState(SPORTS_LIST[0].cuts[0]);

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
    setIs2DEditorOpen
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
          setActiveModel(null); // Fallback to built-in parametric 3D model
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
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">
      <SEO
        title="3D Custom Sports Jersey Builder | Studio Customizer | HAMLO SPORTS"
        description="Design custom sports uniforms online with professional real-time Three.js 3D visualization, PBR fabrics, 2D Konva graphic editor, and 12-hour factory proof from Sialkot."
        canonical="https://hamlosportswear.site/builder/"
        keywords="3d custom sports jersey builder, 3d uniform customizer, custom team uniforms factory direct Sialkot, sublimation 3d studio"
      />

      {/* Hero Header */}
      <section className="bg-[var(--secondary)] text-white py-10 sm:py-14 border-b border-white/10">
        <div className="w-[96%] max-w-[1800px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-2">
            <Sparkles size={14} />
            <span>REAL THREE.JS 3D CUSTOMIZATION STUDIO • FACTORY DIRECT SIALKOT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3">
            3D SPORTSWEAR CUSTOMIZATION STUDIO
          </h1>

          <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-light leading-relaxed mb-6">
            Configure real-time 3D garments with mesh detection, tactile PBR fabrics, 2D graphic canvas editing, player rosters, and Pantone color accuracy.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-[11px] font-semibold text-white/80">
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Check size={14} className="text-[var(--accent)]" /> Low 15-Set Team Minimum
            </span>
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Clock size={14} className="text-[var(--accent)]" /> Free 12-Hour 3D Proof
            </span>
            <span className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/15 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[var(--accent)]" /> DDP Doorstep US Delivery
            </span>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Success Confirmation Banner if Design Submitted */}
      {submittedDesign && (
        <section className="w-[96%] max-w-[1800px] mx-auto my-6 p-6 sm:p-8 bg-emerald-50 border border-emerald-300 rounded-[5px] text-emerald-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={24} className="text-emerald-600 flex-shrink-0" />
              <h3 className="text-xl font-black uppercase tracking-tight">
                3D Custom Design Saved Successfully!
              </h3>
            </div>
            <p className="text-xs text-emerald-900/80 max-w-2xl leading-relaxed">
              Your 3D CAD design has been registered under Design Code: <strong>{submittedDesign.code}</strong>. Our Sialkot pattern engineering team will generate your complimentary 3D production proof within 12 business hours.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap flex-shrink-0">
            <button
              onClick={handleCopyCode}
              className="px-4 py-2.5 bg-white border border-emerald-300 text-emerald-900 font-bold text-xs uppercase rounded-[3px] shadow-xs flex items-center gap-1.5 hover:bg-emerald-100 transition cursor-pointer"
            >
              <Copy size={13} /> {copiedCode ? 'Copied Code!' : 'Copy Design Code'}
            </button>
            <a
              href={`https://wa.me/923105464116?text=${encodeURIComponent(`Hello HAMLO SPORTS! I just designed a custom uniform on your 3D Studio [Design Code: ${submittedDesign.code}]. Please share my production proof.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs uppercase rounded-[3px] shadow transition cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquare size={14} /> WhatsApp Fast Track
            </a>
          </div>
        </section>
      )}

      {/* Sport & Cut Quick Switcher Bar */}
      <section className="w-[96%] max-w-[1800px] mx-auto mt-8 mb-4">
        <div className="bg-white p-4 rounded-[5px] border border-[var(--secondary)]/15 shadow-sm space-y-4">
          
          {/* Sports Icon Scrollable Rail */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block mb-2">
              Select Sport Discipline (15 Pro Codes)
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {SPORTS_LIST.map(sport => {
                const isSelected = selectedSport.id === sport.id;
                return (
                  <button
                    key={sport.id}
                    onClick={() => handleSportChange(sport)}
                    className={`px-3.5 py-2 rounded-[3px] border text-xs font-black uppercase whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--secondary)] text-white border-[var(--secondary)] shadow-sm'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    <span>{sport.icon}</span>
                    <span>{sport.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cuts Available for Selected Sport */}
          <div className="pt-3 border-t border-neutral-100 flex items-center gap-3 flex-wrap">
            <span className="text-[11px] font-bold text-neutral-500 uppercase">
              Available Silhouette Cuts:
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {selectedSport.cuts.map(cut => {
                const isSelected = selectedCut === cut;
                return (
                  <button
                    key={cut}
                    onClick={() => setSelectedCut(cut)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--accent)] text-white font-black shadow-xs'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {cut}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Main 3D Customizer Interface */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-6 sm:my-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 3D Visualizer Canvas (Left 7 Cols) */}
          <div className="lg:col-span-7 sticky top-24 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                  Three.js Real-Time Viewport
                </span>
                <h2 className="text-xl font-black uppercase text-[var(--secondary)]">
                  {selectedSport.name} — {selectedCut}
                </h2>
              </div>
              <span className="text-xs text-neutral-500 font-medium">
                Drag to rotate • Pinch / Scroll to zoom
              </span>
            </div>

            <Sportswear3DCanvas />
          </div>

          {/* Studio Control Dock (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <StudioControlPanel
              onSaveDesign={handleOpenQuoteModal}
              isSubmitting={submitting}
            />
          </div>

        </div>
      </section>

      {/* 2D Konva Graphic Canvas Editor Modal */}
      <Artwork2DEditorModal
        isOpen={is2DEditorOpen}
        onClose={() => setIs2DEditorOpen(false)}
      />

      {/* Quote & 3D Proof Request Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-[400] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-[5px] shadow-2xl border border-neutral-300 overflow-hidden">
            
            <div className="px-6 py-4 bg-[var(--secondary)] text-white flex items-center justify-between border-b border-white/10">
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
              <div className="p-3 bg-neutral-50 rounded border border-neutral-200 text-xs text-neutral-600 flex justify-between">
                <span>Selected: <strong>{selectedSport.name} ({selectedCut})</strong></span>
                <span>Roster: <strong>{rosterCount} sets (${totalEstimate.toFixed(2)})</strong></span>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Full Name / Coach Name *
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Coach Marcus Davis"
                  className="w-full px-3 py-2 text-xs border border-neutral-300 rounded font-semibold focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Team / School / Club Name
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. West Coast Baseball Academy"
                  className="w-full px-3 py-2 text-xs border border-neutral-300 rounded font-semibold focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="coach@teamdomain.com"
                    className="w-full px-3 py-2 text-xs border border-neutral-300 rounded font-semibold focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 text-xs border border-neutral-300 rounded font-semibold focus:border-[var(--accent)] focus:outline-none"
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

              <span className="text-[10px] text-neutral-500 text-center block">
                Zero commitment. Official 3D production proof sent to your email & WhatsApp within 12 hours.
              </span>
            </form>

          </div>
        </div>
      )}

      {/* SEO Content Block: Why 3D Uniform Builders Win */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-14 sm:my-20 p-8 sm:p-12 bg-white rounded-[5px] border border-[var(--secondary)]/10 shadow-sm space-y-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            FACTORY-DIRECT AMERICAN TEAMWEAR
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] mt-1">
            Why Coaches Choose Hamlo Sports Wear's 3D Jersey Customizer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-600 leading-relaxed">
          <div className="p-4 bg-neutral-50 rounded border border-neutral-200">
            <h3 className="font-black text-sm uppercase text-[var(--secondary)] mb-2 flex items-center gap-1.5">
              <Award size={15} className="text-[var(--accent)]" /> Direct From Sialkot Makers
            </h3>
            <p>
              Unlike US dealers who act as middlemen and markup imported goods by 150%, Hamlo Sports Wear operates direct export production in Sialkot, Pakistan. You configure your custom sportswear in 3D and deal directly with the actual manufacturing facility.
            </p>
          </div>

          <div className="p-4 bg-neutral-50 rounded border border-neutral-200">
            <h3 className="font-black text-sm uppercase text-[var(--secondary)] mb-2 flex items-center gap-1.5">
              <Clock size={15} className="text-[var(--accent)]" /> Rapid 8–12 Day Production
            </h3>
            <p>
              While domestic brokers take 4 to 6 weeks, our direct factory pipeline builds your custom sublimated jerseys and tackle-twill lettered uniforms in just 8 to 12 working days, followed by 3 to 5 days express air shipping to your door anywhere in the USA.
            </p>
          </div>

          <div className="p-4 bg-neutral-50 rounded border border-neutral-200">
            <h3 className="font-black text-sm uppercase text-[var(--secondary)] mb-2 flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-[var(--accent)]" /> Low 15-Set Team MOQ
            </h3>
            <p>
              We specialize in youth travel clubs, high school varsity programs, and adult rec leagues. With our low 15-set team minimum, you unlock full pro-grade customization—including unlimited colors, numbers, and sponsor logos—without bloated inventory requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
