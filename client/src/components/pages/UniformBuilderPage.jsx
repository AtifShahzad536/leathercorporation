import React, { useState, useMemo } from 'react';
import { 
  Sparkles, Check, ArrowRight, ShieldCheck, Clock, RotateCw, 
  Layers, Palette, Type, Upload, Send, Award, Phone, Mail, MessageSquare 
} from 'lucide-react';
import SEO from '../common/SEO';
import TrustBar from '../common/TrustBar';
import { useCMS } from '../../context/CMSContext';

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

const COLOR_PALETTES = [
  { name: 'Navy & Athletic Gold', primary: '#0A192F', secondary: '#F5A623', accent: '#FFFFFF' },
  { name: 'Royal Blue & White', primary: '#0047AB', secondary: '#FFFFFF', accent: '#D72638' },
  { name: 'Scarlet Red & Black', primary: '#C8102E', secondary: '#111111', accent: '#FFFFFF' },
  { name: 'Forest Green & Vegas Gold', primary: '#1E4620', secondary: '#C5B358', accent: '#FFFFFF' },
  { name: 'Deep Purple & Bright Gold', primary: '#4B0082', secondary: '#FFD700', accent: '#FFFFFF' },
  { name: 'Stealth Black & Neon Volt', primary: '#121212', secondary: '#CEFF00', accent: '#FFFFFF' },
  { name: 'Graphite Grey & Orange', primary: '#333333', secondary: '#F26522', accent: '#FFFFFF' },
  { name: 'Carolina Blue & Navy', primary: '#7BAFD4', secondary: '#0C2340', accent: '#FFFFFF' },
  { name: 'Maroon & Vegas Gold', primary: '#6A1A24', secondary: '#D4AF37', accent: '#FFFFFF' },
  { name: 'Custom Hex Codes', primary: '#1E1B6E', secondary: '#F26522', accent: '#FFFFFF' }
];

const PATTERNS = [
  { id: 'solid', name: 'Clean Solid Color' },
  { id: 'pinstripe', name: 'Traditional Pinstripes' },
  { id: 'gradient', name: 'Dynamic Ombre Fade' },
  { id: 'digital-camo', name: 'Military Digital Camo' },
  { id: 'raglan-splice', name: 'Modern Raglan Splice' },
  { id: 'hoops', name: 'Horizontal Rugby Hoops' }
];

export default function UniformBuilderPage({ onNavigateInquiry = () => {} }) {
  const [selectedSport, setSelectedSport] = useState(SPORTS_LIST[0]);
  const [selectedCut, setSelectedCut] = useState(SPORTS_LIST[0].cuts[0]);
  const [selectedPalette, setSelectedPalette] = useState(COLOR_PALETTES[0]);
  const [primaryColor, setPrimaryColor] = useState(COLOR_PALETTES[0].primary);
  const [secondaryColor, setSecondaryColor] = useState(COLOR_PALETTES[0].secondary);
  const [selectedPattern, setSelectedPattern] = useState(PATTERNS[0].id);
  const [viewAngle, setViewAngle] = useState('front'); // front, back, side

  // Personalization details
  const [teamName, setTeamName] = useState('EAGLES');
  const [playerName, setPlayerName] = useState('JOHNSON');
  const [playerNumber, setPlayerNumber] = useState('23');
  const [decorationMethod, setDecorationMethod] = useState('sublimation'); // sublimation, twill, both
  const [rosterCount, setRosterCount] = useState(20);

  // Form Submission
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { submitInquiry } = useCMS();

  // Price Calculation
  const unitRate = useMemo(() => {
    let base = 44.99;
    if (selectedSport.id === 'hockey') base = 49.99;
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

  const handlePaletteSelect = (pal) => {
    setSelectedPalette(pal);
    setPrimaryColor(pal.primary);
    setSecondaryColor(pal.secondary);
  };

  const handleSubmit3DOrder = async (e) => {
    e.preventDefault();
    if (!contactEmail) return;
    setSubmitting(true);
    try {
      await submitInquiry({
        name: contactName || 'Coach / Team Manager',
        email: contactEmail,
        phone: contactPhone || 'Not provided',
        sport: selectedSport.name,
        quantity: rosterCount,
        message: `3D UNIFORM BUILDER SPECIFICATION:
Sport: ${selectedSport.name}
Cut: ${selectedCut}
Primary Color: ${primaryColor}
Secondary Accent: ${secondaryColor}
Pattern: ${selectedPattern}
Team Name: ${teamName}
Sample Back Name: ${playerName} #${playerNumber}
Decoration: ${decorationMethod.toUpperCase()}
Roster Size: ${rosterCount} sets
Estimated Unit Price: $${unitRate.toFixed(2)} ($${totalEstimate.toFixed(2)} total)`,
        source: '3d_uniform_builder_usa'
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">
      <SEO
        title="3D Custom Sports Jersey Builder | Design Team Uniforms Online"
        description="Build and design custom team sports jerseys online in 3D. Choose cuts, colors, sublimation patterns, tackle twill lettering, and player rosters. Free 12-hour factory mockup directly from Hamlo Sports Wear."
        canonical="https://hamlosportswear.site/builder/"
        keywords="3d custom sports jersey builder, 3d uniform builder usa, custom sportswear usa, factory direct custom sportswear, custom team uniforms factory direct, design jerseys online"
      />

      {/* Hero Header */}
      <section className="bg-[var(--secondary)] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="w-[96%] max-w-[1800px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-2">
            <Sparkles size={14} />
            <span>INTERACTIVE 3D CAD ENGINE • SIALKOT FACTORY DIRECT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3">
            3D CUSTOM SPORTS JERSEY & UNIFORM BUILDER
          </h1>

          <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-light leading-relaxed mb-6">
            Configure your team's exact cut, pantone colors, patterns, and player lettering in real time. We turn your 3D customizer build into a complimentary production-ready 3D CAD mockup within 12 hours.
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

      {/* Main 3D Customizer Interface */}
      <section className="w-[96%] max-w-[1800px] mx-auto my-10 sm:my-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 3D Visualizer Canvas (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-[5px] border border-[var(--secondary)]/15 shadow-xl p-6 sm:p-8 flex flex-col justify-between sticky top-24">
            
            {/* Canvas Header & View Angle Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-neutral-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                  Live 3D Render
                </span>
                <h3 className="text-lg font-black uppercase text-[var(--secondary)]">
                  {selectedSport.name} — {selectedCut}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 bg-neutral-100 p-1 rounded">
                <button
                  onClick={() => setViewAngle('front')}
                  className={`px-3 py-1 text-xs font-bold uppercase rounded transition cursor-pointer ${viewAngle === 'front' ? 'bg-[var(--secondary)] text-white shadow' : 'text-neutral-600 hover:text-black'}`}
                >
                  Front View
                </button>
                <button
                  onClick={() => setViewAngle('back')}
                  className={`px-3 py-1 text-xs font-bold uppercase rounded transition cursor-pointer ${viewAngle === 'back' ? 'bg-[var(--secondary)] text-white shadow' : 'text-neutral-600 hover:text-black'}`}
                >
                  Back View
                </button>
                <button
                  onClick={() => setViewAngle('side')}
                  className={`px-3 py-1 text-xs font-bold uppercase rounded transition cursor-pointer ${viewAngle === 'side' ? 'bg-[var(--secondary)] text-white shadow' : 'text-neutral-600 hover:text-black'}`}
                >
                  Side Profile
                </button>
              </div>
            </div>

            {/* Interactive 3D Jersey Simulation Canvas */}
            <div className="relative aspect-[4/4] sm:aspect-[4/3] bg-gradient-to-b from-neutral-50 to-neutral-200/60 rounded-[4px] my-6 flex items-center justify-center p-6 overflow-hidden border border-neutral-200">
              
              {/* Watermark */}
              <div className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest text-neutral-400/80">
                HAMLO 3D CAD ENGINE v2.4
              </div>

              {/* Dynamic Jersey Visual SVG Model */}
              <div className="relative w-full max-w-[380px] aspect-[3/4] flex items-center justify-center drop-shadow-2xl transition-all duration-300">
                
                {/* SVG Silhouette with live dynamic colors and text */}
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  <defs>
                    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={primaryColor} />
                      <stop offset="100%" stopColor={primaryColor} stopOpacity="0.88" />
                    </linearGradient>
                    <pattern id="pinstripePat" width="20" height="20" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="20" stroke={secondaryColor} strokeWidth="1.5" strokeOpacity="0.4" />
                    </pattern>
                  </defs>

                  {/* Jersey Sleeves Left & Right */}
                  <path d="M 50 110 L 130 50 L 130 150 L 30 180 Z" fill={secondaryColor} stroke="#000000" strokeWidth="2" />
                  <path d="M 350 110 L 270 50 L 270 150 L 370 180 Z" fill={secondaryColor} stroke="#000000" strokeWidth="2" />
                  
                  {/* Sleeve Accent Stripes */}
                  <line x1="45" y1="130" x2="130" y2="70" stroke={primaryColor} strokeWidth="6" />
                  <line x1="355" y1="130" x2="270" y2="70" stroke={primaryColor} strokeWidth="6" />

                  {/* Main Jersey Torso Body */}
                  <path d="M 130 50 Q 200 85 270 50 L 290 440 L 110 440 Z" fill="url(#bodyGrad)" stroke="#000000" strokeWidth="2.5" />

                  {/* Optional Pattern Overlay */}
                  {selectedPattern === 'pinstripe' && (
                    <path d="M 130 50 Q 200 85 270 50 L 290 440 L 110 440 Z" fill="url(#pinstripePat)" />
                  )}

                  {/* Collar Trim */}
                  <path d="M 155 58 Q 200 115 245 58" fill="none" stroke={secondaryColor} strokeWidth="10" strokeLinecap="round" />

                  {/* Front View Content */}
                  {viewAngle === 'front' && (
                    <>
                      {/* Chest Team Name */}
                      <text
                        x="200"
                        y="200"
                        textAnchor="middle"
                        fill={secondaryColor}
                        stroke="#000000"
                        strokeWidth="1.5"
                        fontWeight="900"
                        fontSize="36"
                        letterSpacing="4"
                        style={{ fontFamily: 'Impact, sans-serif' }}
                      >
                        {teamName || 'TEAM NAME'}
                      </text>

                      {/* Front Center Number */}
                      <text
                        x="200"
                        y="300"
                        textAnchor="middle"
                        fill={secondaryColor}
                        stroke="#000000"
                        strokeWidth="2"
                        fontWeight="900"
                        fontSize="75"
                        letterSpacing="2"
                        style={{ fontFamily: 'Impact, sans-serif' }}
                      >
                        {playerNumber || '00'}
                      </text>

                      {/* Hamlo Authentic Badge */}
                      <rect x="182" y="415" width="36" height="12" rx="2" fill={secondaryColor} />
                      <text x="200" y="424" textAnchor="middle" fill={primaryColor} fontSize="7" fontWeight="bold">HAMLO</text>
                    </>
                  )}

                  {/* Back View Content */}
                  {viewAngle === 'back' && (
                    <>
                      {/* Player Nameplate */}
                      <text
                        x="200"
                        y="160"
                        textAnchor="middle"
                        fill={secondaryColor}
                        stroke="#000000"
                        strokeWidth="1.5"
                        fontWeight="900"
                        fontSize="28"
                        letterSpacing="3"
                        style={{ fontFamily: 'Impact, sans-serif' }}
                      >
                        {playerName || 'PLAYER'}
                      </text>

                      {/* Large Back Number */}
                      <text
                        x="200"
                        y="295"
                        textAnchor="middle"
                        fill={secondaryColor}
                        stroke="#000000"
                        strokeWidth="3"
                        fontWeight="900"
                        fontSize="115"
                        letterSpacing="3"
                        style={{ fontFamily: 'Impact, sans-serif' }}
                      >
                        {playerNumber || '00'}
                      </text>
                    </>
                  )}

                  {/* Side Profile Content */}
                  {viewAngle === 'side' && (
                    <>
                      <line x1="200" y1="80" x2="200" y2="440" stroke={secondaryColor} strokeWidth="16" />
                      <text x="200" y="270" textAnchor="middle" fill="#FFFFFF" fontWeight="900" fontSize="16" transform="rotate(90 200 270)">
                        {teamName}
                      </text>
                    </>
                  )}
                </svg>

              </div>

              {/* View Rotation Indicator */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-[3px] border border-neutral-300 text-[10px] font-bold text-neutral-700 flex items-center gap-1.5 shadow-xs">
                <RotateCw size={12} className="text-[var(--accent)]" /> {viewAngle.toUpperCase()} ORIENTATION
              </div>

              {/* Decoration Label */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-[3px] border border-neutral-300 text-[10px] font-bold text-neutral-700 shadow-xs">
                {decorationMethod === 'sublimation' ? 'FULL DYE-SUBLIMATED' : decorationMethod === 'twill' ? 'STITCHED TACKLE TWILL' : 'HYBRID TWILL + SUBLIMATION'}
              </div>
            </div>

            {/* Quick Summary Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-neutral-200 text-xs">
              <div>
                <span className="text-[10px] text-neutral-400 uppercase font-bold block">Sport:</span>
                <strong className="text-[var(--secondary)]">{selectedSport.name}</strong>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 uppercase font-bold block">Silhouette:</span>
                <strong className="text-[var(--secondary)] truncate block">{selectedCut}</strong>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 uppercase font-bold block">Estimate (ea):</span>
                <strong className="text-emerald-700 text-sm font-black">${unitRate.toFixed(2)}</strong>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 uppercase font-bold block">Total ({rosterCount} pcs):</span>
                <strong className="text-[var(--secondary)] text-sm font-black">${totalEstimate.toFixed(2)}</strong>
              </div>
            </div>
          </div>

          {/* Builder Controls & Customization Panel (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Sport Selector */}
            <div className="bg-white p-5 rounded-[4px] border border-[var(--secondary)]/15 shadow-sm">
              <label className="text-xs font-black uppercase text-[var(--secondary)] flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-[10px]">1</span>
                Select Sport Category:
              </label>
              <div className="grid grid-cols-3 gap-1.5 max-h-48 overflow-y-auto pr-1">
                {SPORTS_LIST.map((sp) => (
                  <button
                    key={sp.id}
                    onClick={() => handleSportChange(sp)}
                    className={`p-2 rounded text-left text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${selectedSport.id === sp.id ? 'bg-[var(--secondary)] text-white shadow' : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border border-neutral-200'}`}
                  >
                    <span>{sp.icon}</span>
                    <span className="truncate">{sp.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Silhouette Cut */}
            <div className="bg-white p-5 rounded-[4px] border border-[var(--secondary)]/15 shadow-sm">
              <label className="text-xs font-black uppercase text-[var(--secondary)] flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-[10px]">2</span>
                Garment Silhouette / Cut:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {selectedSport.cuts.map((cut) => (
                  <button
                    key={cut}
                    onClick={() => setSelectedCut(cut)}
                    className={`p-2.5 rounded text-left text-xs font-bold transition cursor-pointer ${selectedCut === cut ? 'bg-[var(--accent)] text-white shadow' : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border border-neutral-200'}`}
                  >
                    {cut}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Color Palette & Custom Hex */}
            <div className="bg-white p-5 rounded-[4px] border border-[var(--secondary)]/15 shadow-sm">
              <label className="text-xs font-black uppercase text-[var(--secondary)] flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-[10px]">3</span>
                Team Colors & Accents:
              </label>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {COLOR_PALETTES.map((pal, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePaletteSelect(pal)}
                    className={`p-2 rounded border text-left flex items-center gap-2 transition cursor-pointer ${selectedPalette.name === pal.name ? 'border-[var(--accent)] bg-neutral-50 ring-1 ring-[var(--accent)]' : 'border-neutral-200 hover:border-neutral-300'}`}
                  >
                    <div className="flex -space-x-1 flex-shrink-0">
                      <span className="w-4 h-4 rounded-full border border-white" style={{ backgroundColor: pal.primary }} />
                      <span className="w-4 h-4 rounded-full border border-white" style={{ backgroundColor: pal.secondary }} />
                    </div>
                    <span className="text-[10px] font-bold text-neutral-700 truncate">{pal.name}</span>
                  </button>
                ))}
              </div>

              {/* Custom Color Pickers */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-100">
                <div>
                  <span className="text-[10px] font-bold uppercase text-neutral-500 block mb-1">Body Color:</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-8 h-8 rounded border border-neutral-300 cursor-pointer"
                    />
                    <span className="text-xs font-mono font-bold text-neutral-700">{primaryColor.toUpperCase()}</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-neutral-500 block mb-1">Accent / Text:</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-8 h-8 rounded border border-neutral-300 cursor-pointer"
                    />
                    <span className="text-xs font-mono font-bold text-neutral-700">{secondaryColor.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Pattern & Graphics */}
            <div className="bg-white p-5 rounded-[4px] border border-[var(--secondary)]/15 shadow-sm">
              <label className="text-xs font-black uppercase text-[var(--secondary)] flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-[10px]">4</span>
                Sublimation Pattern Style:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {PATTERNS.map((pat) => (
                  <button
                    key={pat.id}
                    onClick={() => setSelectedPattern(pat.id)}
                    className={`p-2 rounded text-center text-[10.5px] font-bold transition cursor-pointer ${selectedPattern === pat.id ? 'bg-[var(--secondary)] text-white' : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border border-neutral-200'}`}
                  >
                    {pat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Team Personalization Details */}
            <div className="bg-white p-5 rounded-[4px] border border-[var(--secondary)]/15 shadow-sm">
              <label className="text-xs font-black uppercase text-[var(--secondary)] flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-[10px]">5</span>
                Lettering & Roster Details:
              </label>
              
              <div className="space-y-3">
                <div>
                  <span className="text-[10px] font-bold uppercase text-neutral-500 block mb-1">Team Crest / Chest Script:</span>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    maxLength={14}
                    placeholder="E.g. WILDCATS"
                    className="w-full px-3 py-2 border border-neutral-300 rounded text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-neutral-500 block mb-1">Sample Back Name:</span>
                    <input
                      type="text"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      maxLength={12}
                      placeholder="JOHNSON"
                      className="w-full px-3 py-2 border border-neutral-300 rounded text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-neutral-500 block mb-1">Sample Number:</span>
                    <input
                      type="text"
                      value={playerNumber}
                      onChange={(e) => setPlayerNumber(e.target.value)}
                      maxLength={3}
                      placeholder="23"
                      className="w-full px-3 py-2 border border-neutral-300 rounded text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>
                </div>

                {/* Decoration Selection */}
                <div>
                  <span className="text-[10px] font-bold uppercase text-neutral-500 block mb-1.5">Decoration Technique:</span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setDecorationMethod('sublimation')}
                      className={`p-2 rounded text-[10px] font-bold uppercase cursor-pointer border ${decorationMethod === 'sublimation' ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]' : 'bg-neutral-50 text-neutral-700 border-neutral-200'}`}
                    >
                      Sublimation (Included)
                    </button>
                    <button
                      onClick={() => setDecorationMethod('twill')}
                      className={`p-2 rounded text-[10px] font-bold uppercase cursor-pointer border ${decorationMethod === 'twill' ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]' : 'bg-neutral-50 text-neutral-700 border-neutral-200'}`}
                    >
                      Tackle Twill (+$10)
                    </button>
                    <button
                      onClick={() => setDecorationMethod('both')}
                      className={`p-2 rounded text-[10px] font-bold uppercase cursor-pointer border ${decorationMethod === 'both' ? 'bg-[var(--secondary)] text-white border-[var(--secondary)]' : 'bg-neutral-50 text-neutral-700 border-neutral-200'}`}
                    >
                      Hybrid Both (+$6)
                    </button>
                  </div>
                </div>

                {/* Roster Size Slider */}
                <div className="pt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold uppercase text-neutral-500">Estimated Team Roster:</span>
                    <strong className="text-xs font-black text-[var(--secondary)]">{rosterCount} Uniform Sets</strong>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="150"
                    step="1"
                    value={rosterCount}
                    onChange={(e) => setRosterCount(Number(e.target.value))}
                    className="w-full accent-[var(--accent)] cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-neutral-400">
                    <span>15 Low MOQ</span>
                    <span>50 Club</span>
                    <span>100 League</span>
                    <span>150+ Bulk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Instant 12-Hour 3D CAD Mockup Request Form */}
            <div className="bg-gradient-to-br from-[var(--secondary)] to-[#15124b] text-white p-6 rounded-[5px] shadow-xl">
              <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-bold uppercase mb-1">
                <Clock size={15} /> Free 12-Hour Factory Proof
              </div>
              <h3 className="text-lg font-black uppercase text-white mb-2">
                Lock This 3D Build & Receive Proof
              </h3>
              <p className="text-xs text-white/70 mb-4 leading-relaxed">
                Submit your contact details and our export pattern masters will generate an official 3D CAD vector proof with your exact club pantone shades within 12 hours. Zero commitment required.
              </p>

              {submitted ? (
                <div className="p-4 bg-emerald-600/30 border border-emerald-400 rounded text-center">
                  <Check className="mx-auto text-emerald-400 mb-2" size={24} />
                  <strong className="text-xs font-black uppercase text-white block">3D Specification Received!</strong>
                  <span className="text-[11px] text-white/80 block mt-1">Our production team will email your high-res 3D proof and exact quote within 12 hours.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit3DOrder} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Your Name (Coach / Director)"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-xs text-white placeholder-white/50 focus:outline-none focus:border-[var(--accent)]"
                  />
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Coach / Team Email Address"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-xs text-white placeholder-white/50 focus:outline-none focus:border-[var(--accent)]"
                  />
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="Phone / WhatsApp (Optional)"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-xs text-white placeholder-white/50 focus:outline-none focus:border-[var(--accent)]"
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-[var(--accent)] hover:opacity-95 text-white font-black text-xs uppercase tracking-wider rounded transition cursor-pointer shadow-lg flex items-center justify-center gap-2"
                  >
                    {submitting ? 'Rendering Proof...' : 'Request Free 12-Hour 3D Proof'}
                    <Send size={13} />
                  </button>
                  <span className="text-[9.5px] text-white/60 block text-center font-light">
                    Factory direct Sialkot. 15-set low MOQ. Duties pre-cleared for USA delivery.
                  </span>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

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
