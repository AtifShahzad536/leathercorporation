import React, { useState } from 'react';
import { 
  Palette, Layers, Sparkles, Type, Upload, Ruler, 
  RotateCcw, Undo2, Redo2, Check, ArrowRight, ArrowLeft, ShieldCheck, 
  Trash2, ChevronDown, Sliders, ExternalLink, HelpCircle, CheckCircle2
} from 'lucide-react';
import { 
  useStudioStore, 
  COLOR_PALETTES, 
  FABRIC_PRESETS, 
  PATTERN_LIST, 
  FONTS_LIST 
} from './useStudioStore';

export default function StudioControlPanel({ onSaveDesign, isSubmitting = false }) {
  const {
    activeModel,
    selectedMeshId,
    meshCustomizations,
    globalPalette,
    primaryColor,
    secondaryColor,
    accentColor,
    activeFabric,
    activePattern,
    patternColor,
    patternScale,
    nameNumber,
    logos,
    rosterCount,
    selectedSizes,
    decorationMethod,
    undo,
    redo,
    resetDesign,
    setSelectedMesh,
    setMeshColor,
    setAllMeshesColor,
    setGlobalPalette,
    setPrimaryColor,
    setSecondaryColor,
    setAccentColor,
    setActiveFabric,
    setMeshFabric,
    setActivePattern,
    setPatternColor,
    setPatternScale,
    setNameNumber,
    addLogo,
    removeLogo,
    setIs2DEditorOpen,
    setRosterCount,
    setSelectedSizes,
    setDecorationMethod
  } = useStudioStore();

  const [activeTab, setActiveTab] = useState('colors'); // 'colors' | 'fabrics' | 'patterns' | 'typography' | 'logos' | 'roster'

  const TABS = [
    { id: 'colors', label: 'Colors', icon: Palette, title: 'Color Palette & Region Shading' },
    { id: 'fabrics', label: 'Fabrics', icon: Layers, title: 'PBR Fabric Texture Simulation' },
    { id: 'patterns', label: 'Patterns', icon: Sparkles, title: 'Sublimated Technical Dye Patterns' },
    { id: 'typography', label: 'Lettering', icon: Type, title: 'Team Typography & Numbering' },
    { id: 'logos', label: 'Logos', icon: Upload, title: 'Custom Emblems & 2D Studio' },
    { id: 'roster', label: 'Quote', icon: Ruler, title: 'Team Roster & Factory Direct Pricing' }
  ];

  const currentTab = TABS.find(t => t.id === activeTab) || TABS[0];

  const currentMeshColor = selectedMeshId 
    ? (meshCustomizations[selectedMeshId]?.color || primaryColor)
    : primaryColor;

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      addLogo({
        url: event.target.result,
        name: file.name,
        placement: 'chest'
      });
    };
    reader.readAsDataURL(file);
  };

  const calculatedUnitPrice = (44.99 * (rosterCount >= 100 ? 0.8 : rosterCount >= 50 ? 0.88 : rosterCount >= 25 ? 0.92 : 1) + (decorationMethod === 'twill' ? 10 : decorationMethod === 'both' ? 6 : 0));
  const calculatedTotalPrice = calculatedUnitPrice * rosterCount;

  return (
    <aside className="w-full h-full flex flex-col bg-[#0E1322] border-l border-white/10 text-white select-none overflow-hidden">
      
      {/* ── 1. IDE PROPERTY TABS (6 COMPACT TABS WITH ICONS) ── */}
      <div className="bg-[#141A2D] p-1.5 border-b border-white/10 flex-shrink-0">
        <div className="grid grid-cols-6 gap-1">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                title={tab.title}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-[4px] transition cursor-pointer text-center ${
                  isActive
                    ? 'bg-[var(--accent)] text-white shadow-xs font-black'
                    : 'bg-[#0E1322] hover:bg-[#1C253E] text-white/60 hover:text-white border border-white/5'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : 'text-white/50'} />
                <span className="text-[9px] font-bold uppercase tracking-tight mt-0.5 truncate w-full">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 2. SUB-HEADER: ACTIVE TAB TITLE ── */}
      <div className="px-4 py-2 bg-[#101627] border-b border-white/10 flex items-center justify-between flex-shrink-0">
        <span className="text-[10px] font-black uppercase tracking-wider text-[var(--accent)] truncate">
          {currentTab.title}
        </span>
        <span className="text-[9px] font-mono text-white/40 uppercase">
          Studio IDE
        </span>
      </div>

      {/* ── 3. SCROLLABLE TAB WORKSPACE (INNER SCROLL ONLY) ── */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        
        {/* ════ TAB 1: COLORS ════ */}
        {activeTab === 'colors' && (
          <div className="space-y-4">
            
            {/* Active Editing Target */}
            <div className="p-3 bg-[#141B2D] rounded-[4px] border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 block">
                    Editing Region
                  </span>
                  <h4 className="text-xs font-black uppercase text-white truncate">
                    {selectedMeshId ? selectedMeshId.replace(/^mesh_/, '').replace(/_/g, ' ') : 'Full Uniform Base'}
                  </h4>
                </div>

                <button
                  onClick={() => setAllMeshesColor(currentMeshColor)}
                  className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-[9px] font-black uppercase rounded border border-white/15 transition cursor-pointer"
                >
                  Apply All Parts
                </button>
              </div>

              {/* Color Picker & Hex value */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-xs font-bold text-white/70 uppercase">
                  Custom HEX:
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={currentMeshColor}
                    onChange={(e) => {
                      if (selectedMeshId) setMeshColor(selectedMeshId, e.target.value);
                      else setPrimaryColor(e.target.value);
                    }}
                    className="w-7 h-7 rounded border border-white/20 p-0 cursor-pointer shadow-xs bg-transparent"
                  />
                  <input
                    type="text"
                    value={currentMeshColor}
                    onChange={(e) => {
                      if (selectedMeshId) setMeshColor(selectedMeshId, e.target.value);
                      else setPrimaryColor(e.target.value);
                    }}
                    className="w-20 px-2 py-0.5 text-xs font-mono font-bold text-white uppercase border border-white/15 rounded bg-[#0E1322]"
                  />
                </div>
              </div>

              {/* Quick Swatches */}
              <div className="pt-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 block mb-1">
                  Athletic Swatches
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    '#0A192F', '#0047AB', '#002D62', '#7BAFD4', '#C8102E', 
                    '#8B0000', '#1E4620', '#005A36', '#4B0082', '#121212', 
                    '#333333', '#F5A623', '#FFD700', '#F26522', '#FFFFFF'
                  ].map(hex => (
                    <button
                      key={hex}
                      onClick={() => {
                        if (selectedMeshId) setMeshColor(selectedMeshId, hex);
                        else setPrimaryColor(hex);
                      }}
                      style={{ backgroundColor: hex }}
                      className={`w-6 h-6 rounded-[3px] border transition-transform cursor-pointer shadow-2xs hover:scale-110 ${
                        currentMeshColor.toLowerCase() === hex.toLowerCase() ? 'ring-2 ring-[var(--accent)] border-white scale-105' : 'border-white/20'
                      }`}
                      title={hex}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Curated Collegiate Team Combinations */}
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-white/60 block mb-1.5">
                Collegiate Team Combinations
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {COLOR_PALETTES.map((pal, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGlobalPalette(pal)}
                    className={`p-2.5 rounded-[4px] border flex items-center justify-between gap-2 text-left transition cursor-pointer ${
                      globalPalette.name === pal.name
                        ? 'border-[var(--accent)] bg-orange-500/10 font-bold'
                        : 'border-white/5 bg-[#141B2D] hover:bg-[#1C253E] text-white/80'
                    }`}
                  >
                    <span className="text-xs truncate">{pal.name}</span>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <span className="w-3.5 h-3.5 rounded-full border border-black/30" style={{ backgroundColor: pal.primary }} />
                      <span className="w-3.5 h-3.5 rounded-full border border-black/30" style={{ backgroundColor: pal.secondary }} />
                      <span className="w-3.5 h-3.5 rounded-full border border-black/30" style={{ backgroundColor: pal.accent }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ════ TAB 2: FABRICS ════ */}
        {activeTab === 'fabrics' && (
          <div className="space-y-3">
            <div className="p-2.5 bg-blue-500/10 rounded border border-blue-500/20 text-[11px] text-blue-200 leading-snug">
              ✨ <strong>PBR Normal Map Simulation:</strong> Automatically configures weave roughness, micro-perforations, and specular light bounce.
            </div>

            <div className="grid grid-cols-1 gap-2">
              {Object.values(FABRIC_PRESETS).map(fab => {
                const isSelected = activeFabric === fab.id;
                return (
                  <div
                    key={fab.id}
                    onClick={() => setActiveFabric(fab.id)}
                    className={`p-3 rounded-[4px] border transition cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[var(--accent)] bg-orange-500/10 font-bold'
                        : 'border-white/5 bg-[#141B2D] hover:bg-[#1C253E]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-black uppercase tracking-wider text-[var(--accent)] bg-black/40 px-1.5 py-0.5 rounded border border-orange-500/30">
                          {fab.gsm}
                        </span>
                        {isSelected && <CheckCircle2 size={14} className="text-[var(--accent)]" />}
                      </div>

                      <h4 className="text-xs font-black uppercase text-white mb-0.5">
                        {fab.name}
                      </h4>

                      <p className="text-[10px] text-white/60 leading-tight">
                        {fab.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ════ TAB 3: PATTERNS ════ */}
        {activeTab === 'patterns' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2">
              {PATTERN_LIST.map(pat => {
                const isSelected = activePattern === pat.id;
                return (
                  <button
                    key={pat.id}
                    onClick={() => setActivePattern(pat.id)}
                    className={`p-3 rounded-[4px] border text-left transition cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[var(--accent)] bg-orange-500/10 font-bold'
                        : 'border-white/5 bg-[#141B2D] hover:bg-[#1C253E] text-white/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold text-white">{pat.name}</span>
                      {isSelected && <Check size={13} className="text-[var(--accent)] font-black" />}
                    </div>
                    <p className="text-[10px] text-white/50 leading-tight">{pat.desc}</p>
                  </button>
                );
              })}
            </div>

            {activePattern !== 'solid' && (
              <div className="p-3 bg-[#141B2D] rounded-[4px] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white/70 uppercase">Pattern Accent Color</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={patternColor}
                      onChange={(e) => setPatternColor(e.target.value)}
                      className="w-7 h-7 rounded border border-white/20 p-0 cursor-pointer bg-transparent"
                    />
                    <span className="font-mono text-xs font-bold text-white uppercase">
                      {patternColor}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white/60 uppercase text-[10px]">Pattern Density Scale</span>
                    <span className="font-mono text-xs text-[var(--accent)] font-bold">{patternScale.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.1"
                    value={patternScale}
                    onChange={(e) => setPatternScale(parseFloat(e.target.value))}
                    className="w-full accent-[var(--accent)] cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* ════ TAB 4: LETTERING & NUMBERS ════ */}
        {activeTab === 'typography' && (
          <div className="space-y-4">
            <div className="space-y-3">
              <div>
                <label className="block text-[10px] font-black text-white/60 uppercase mb-1">
                  Team Name (Chest Front)
                </label>
                <input
                  type="text"
                  value={nameNumber.teamName}
                  onChange={(e) => setNameNumber({ teamName: e.target.value })}
                  placeholder="e.g. WILDCATS"
                  className="w-full px-3 py-1.5 text-xs border border-white/15 rounded bg-[#141B2D] text-white font-black uppercase focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-white/60 uppercase mb-1">
                  Player Name (Back Nameplate)
                </label>
                <input
                  type="text"
                  value={nameNumber.playerName}
                  onChange={(e) => setNameNumber({ playerName: e.target.value })}
                  placeholder="e.g. WILLIAMS"
                  className="w-full px-3 py-1.5 text-xs border border-white/15 rounded bg-[#141B2D] text-white font-black uppercase focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-black text-white/60 uppercase mb-1">
                    Back Number
                  </label>
                  <input
                    type="text"
                    maxLength={3}
                    value={nameNumber.playerNumber}
                    onChange={(e) => setNameNumber({ playerNumber: e.target.value })}
                    className="w-full px-3 py-1.5 text-base border border-white/15 rounded bg-[#141B2D] text-white font-black text-center focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-white/60 uppercase mb-1">
                    Font Family
                  </label>
                  <select
                    value={nameNumber.font}
                    onChange={(e) => setNameNumber({ font: e.target.value })}
                    className="w-full px-2.5 py-2 text-xs border border-white/15 rounded bg-[#141B2D] text-white font-bold focus:border-[var(--accent)] focus:outline-none cursor-pointer"
                  >
                    {FONTS_LIST.map(f => (
                      <option key={f.id} value={f.id} className="bg-[#0E1322] text-white">{f.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-3 bg-[#141B2D] rounded-[4px] border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-white/70 uppercase">Text Color</span>
                  <input
                    type="color"
                    value={nameNumber.textColor}
                    onChange={(e) => setNameNumber({ textColor: e.target.value })}
                    className="w-6 h-6 rounded border border-white/20 p-0 cursor-pointer bg-transparent"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-white/70 uppercase">Stroke Outline</span>
                  <input
                    type="color"
                    value={nameNumber.strokeColor}
                    onChange={(e) => setNameNumber({ strokeColor: e.target.value })}
                    className="w-6 h-6 rounded border border-white/20 p-0 cursor-pointer bg-transparent"
                  />
                </div>
              </div>

              <button
                onClick={() => setIs2DEditorOpen(true)}
                className="w-full py-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:brightness-110 text-white text-xs font-black uppercase rounded shadow-xs transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <ExternalLink size={13} />
                <span>Launch 2D Graphic Canvas Editor</span>
              </button>
            </div>
          </div>
        )}

        {/* ════ TAB 5: LOGOS & ARTWORK ════ */}
        {activeTab === 'logos' && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-white/15 rounded-[4px] p-5 text-center hover:border-[var(--accent)] transition-colors bg-[#141B2D]/50">
              <Upload size={24} className="mx-auto text-[var(--accent)] mb-1.5" />
              <p className="text-xs font-black uppercase text-white mb-0.5">
                Upload Crest or Sponsor Logo
              </p>
              <span className="text-[9px] text-white/40 block mb-2.5">
                PNG, SVG, or JPG (up to 20MB)
              </span>
              <label className="px-4 py-1.5 bg-[var(--accent)] hover:brightness-110 text-white text-[10px] font-black uppercase rounded transition cursor-pointer inline-block shadow-xs">
                Select Image File
                <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
              </label>
            </div>

            {/* Uploaded Logos List */}
            {logos.length > 0 && (
              <div className="space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-white/50 block">
                  Active Attached Emblems ({logos.length})
                </span>
                {logos.map((logo) => (
                  <div key={logo.id} className="p-2.5 bg-[#141B2D] rounded-[4px] border border-white/10 flex items-center justify-between gap-2">
                    <img src={logo.url} alt="Logo" className="w-8 h-8 object-contain rounded bg-white p-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-white truncate block">{logo.name || 'Emblem'}</span>
                      <span className="text-[9px] text-white/40 uppercase">{logo.placement || 'Chest'}</span>
                    </div>
                    <button
                      onClick={() => removeLogo(logo.id)}
                      className="p-1 text-white/40 hover:text-red-400 transition cursor-pointer"
                      title="Remove Logo"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => setIs2DEditorOpen(true)}
              className="w-full py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-black uppercase rounded border border-white/15 flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <ExternalLink size={13} className="text-[var(--accent)]" />
              <span>Position Emblems in 2D Studio</span>
            </button>
          </div>
        )}

        {/* ════ TAB 6: ROSTER & QUOTE ════ */}
        {activeTab === 'roster' && (
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="uppercase text-white/60 text-[10px]">Roster Quantity:</span>
                <span className="text-sm font-black text-[var(--accent)]">{rosterCount} Sets</span>
              </div>
              <input
                type="range"
                min="15"
                max="250"
                step="5"
                value={rosterCount}
                onChange={(e) => setRosterCount(parseInt(e.target.value, 10))}
                className="w-full accent-[var(--accent)] cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-white/40 font-bold mt-1">
                <span>15 (MOQ)</span>
                <span>50 sets (8% OFF)</span>
                <span>100 sets (12% OFF)</span>
                <span>200+ (20% OFF)</span>
              </div>
            </div>

            {/* Decoration Method */}
            <div>
              <label className="block text-[10px] font-black text-white/60 uppercase mb-1">
                Decoration Application
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'sublimation', label: 'All-Over Dye' },
                  { id: 'twill', label: 'Tackle Twill' },
                  { id: 'both', label: 'Hybrid Pro' }
                ].map(d => (
                  <button
                    key={d.id}
                    onClick={() => setDecorationMethod(d.id)}
                    className={`py-1.5 px-1 text-center text-[10px] font-black uppercase rounded border transition cursor-pointer ${
                      decorationMethod === d.id
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-xs'
                        : 'border-white/10 text-white/70 hover:bg-white/5'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Breakdown Inputs */}
            <div>
              <label className="block text-[10px] font-black text-white/60 uppercase mb-1">
                Size Breakdown (Roster Estimate)
              </label>
              <div className="grid grid-cols-5 gap-1 text-center">
                {['YL', 'S', 'M', 'L', 'XL'].map(sz => (
                  <div key={sz} className="p-1.5 bg-[#141B2D] rounded border border-white/10">
                    <span className="text-[9px] font-bold text-white/50 block mb-0.5">{sz}</span>
                    <input
                      type="number"
                      min="0"
                      value={selectedSizes[sz] || 0}
                      onChange={(e) => {
                        setSelectedSizes({
                          ...selectedSizes,
                          [sz]: parseInt(e.target.value, 10) || 0
                        });
                      }}
                      className="w-full text-center text-xs font-black border border-white/15 rounded py-0.5 bg-[#0E1322] text-white"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* ── 4. FIXED BOTTOM ESTIMATE & SUBMIT CTA ── */}
      <div className="p-3.5 bg-[#141A2D] border-t border-white/10 flex items-center justify-between gap-3 flex-shrink-0">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 block">
            Factory Rate (Sialkot Direct)
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-[var(--accent)]">
              ${calculatedUnitPrice.toFixed(2)}
            </span>
            <span className="text-[10px] text-white/60 font-semibold">
              / set (${calculatedTotalPrice.toFixed(2)} total)
            </span>
          </div>
        </div>

        <button
          onClick={onSaveDesign}
          disabled={isSubmitting}
          className="px-5 py-2.5 bg-[var(--accent)] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider rounded-[4px] shadow-lg transition cursor-pointer flex items-center gap-1.5 flex-shrink-0"
        >
          {isSubmitting ? 'Saving...' : 'Get Free Proof'}
          <ArrowRight size={13} />
        </button>
      </div>

    </aside>
  );
}
