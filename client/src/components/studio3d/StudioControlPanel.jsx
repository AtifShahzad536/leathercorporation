import React, { useState } from 'react';
import { 
  Palette, Layers, Sparkles, Type, Upload, Ruler, 
  RotateCcw, Undo2, Redo2, Check, ArrowRight, ShieldCheck, 
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
    { id: 'roster', label: 'Quote', icon: Ruler, title: 'Team Roster & Pricing' }
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
    <aside className="w-full h-full flex flex-col bg-white border-l border-slate-200 text-slate-800 select-none overflow-hidden">
      
      {/* ── 1. PROPERTY TABS (6 CLEAN SEGMENTED TABS) ── */}
      <div className="bg-slate-100 p-1 border-b border-slate-200 flex-shrink-0">
        <div className="grid grid-cols-6 gap-1">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                title={tab.title}
                className={`flex flex-col items-center justify-center py-1.5 px-1 rounded transition cursor-pointer text-center ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs font-medium border border-slate-200/80'
                    : 'bg-transparent hover:bg-slate-200/60 text-slate-600 hover:text-slate-900 font-normal'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-[var(--accent)]' : 'text-slate-400'} />
                <span className="text-[10px] mt-0.5 truncate w-full">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 2. SUB-HEADER: ACTIVE TAB TITLE ── */}
      <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between flex-shrink-0">
        <span className="text-xs font-medium text-slate-700 truncate">
          {currentTab.title}
        </span>
        <span className="text-[11px] text-slate-400 font-normal">
          Customizer
        </span>
      </div>

      {/* ── 3. SCROLLABLE TAB WORKSPACE (LIGHT THEME, CLEAN NORMAL FONTS) ── */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        
        {/* ════ TAB 1: COLORS ════ */}
        {activeTab === 'colors' && (
          <div className="space-y-4">
            
            {/* Active Editing Target */}
            <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-normal block">
                    Active Target:
                  </span>
                  <h4 className="text-xs font-medium text-slate-800 capitalize truncate">
                    {selectedMeshId ? selectedMeshId.replace(/^mesh_/, '').replace(/_/g, ' ') : 'Entire Uniform Base'}
                  </h4>
                </div>

                <button
                  onClick={() => setAllMeshesColor(currentMeshColor)}
                  className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 text-xs font-normal rounded border border-slate-200 transition cursor-pointer shadow-2xs"
                >
                  Apply to All Parts
                </button>
              </div>

              {/* Color Picker & Hex value */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                <span className="text-xs font-normal text-slate-600">
                  Custom Hex Color:
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={currentMeshColor}
                    onChange={(e) => {
                      if (selectedMeshId) setMeshColor(selectedMeshId, e.target.value);
                      else setPrimaryColor(e.target.value);
                    }}
                    className="w-7 h-7 rounded border border-slate-300 p-0 cursor-pointer bg-white"
                  />
                  <input
                    type="text"
                    value={currentMeshColor}
                    onChange={(e) => {
                      if (selectedMeshId) setMeshColor(selectedMeshId, e.target.value);
                      else setPrimaryColor(e.target.value);
                    }}
                    className="w-20 px-2 py-0.5 text-xs font-mono font-medium text-slate-800 uppercase border border-slate-200 rounded bg-white text-center"
                  />
                </div>
              </div>

              {/* Quick Swatches */}
              <div className="pt-1">
                <span className="text-[10px] text-slate-500 font-normal block mb-1.5">
                  Popular Team Colors:
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
                      className={`w-6 h-6 rounded border transition-transform cursor-pointer shadow-2xs hover:scale-110 ${
                        currentMeshColor.toLowerCase() === hex.toLowerCase() ? 'ring-2 ring-[var(--accent)] border-white scale-105' : 'border-slate-300'
                      }`}
                      title={hex}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Curated Team Palettes */}
            <div>
              <span className="text-xs font-medium text-slate-700 block mb-1.5">
                Curated Team Color Combinations
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {COLOR_PALETTES.map((pal, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGlobalPalette(pal)}
                    className={`p-2.5 rounded border flex items-center justify-between gap-2 text-left transition cursor-pointer ${
                      globalPalette.name === pal.name
                        ? 'border-orange-400 bg-orange-50/60 font-medium text-slate-900 shadow-2xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-normal'
                    }`}
                  >
                    <span className="text-xs truncate">{pal.name}</span>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-2xs" style={{ backgroundColor: pal.primary }} />
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-2xs" style={{ backgroundColor: pal.secondary }} />
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-2xs" style={{ backgroundColor: pal.accent }} />
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
            <div className="p-2.5 bg-blue-50 rounded border border-blue-200 text-xs text-blue-900 font-normal leading-relaxed">
              Tactile fabric weave simulation with realistic surface roughness and light response.
            </div>

            <div className="grid grid-cols-1 gap-2">
              {Object.values(FABRIC_PRESETS).map(fab => {
                const isSelected = activeFabric === fab.id;
                return (
                  <div
                    key={fab.id}
                    onClick={() => setActiveFabric(fab.id)}
                    className={`p-3 rounded border transition cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-orange-400 bg-orange-50/60 shadow-2xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 font-medium">
                          {fab.gsm}
                        </span>
                        {isSelected && <CheckCircle2 size={15} className="text-[var(--accent)]" />}
                      </div>

                      <h4 className="text-xs font-medium text-slate-900 mb-0.5">
                        {fab.name}
                      </h4>

                      <p className="text-[11px] text-slate-500 font-normal leading-tight">
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
                    className={`p-3 rounded border text-left transition cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-orange-400 bg-orange-50/60 shadow-2xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-medium text-slate-900">{pat.name}</span>
                      {isSelected && <Check size={14} className="text-[var(--accent)]" />}
                    </div>
                    <p className="text-[11px] text-slate-500 font-normal leading-tight">{pat.desc}</p>
                  </button>
                );
              })}
            </div>

            {activePattern !== 'solid' && (
              <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-normal text-slate-600">Pattern Accent Color:</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={patternColor}
                      onChange={(e) => setPatternColor(e.target.value)}
                      className="w-7 h-7 rounded border border-slate-300 p-0 cursor-pointer bg-white"
                    />
                    <span className="font-mono text-xs font-medium text-slate-700 uppercase">
                      {patternColor}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-600 font-normal">Pattern Density:</span>
                    <span className="font-mono text-xs text-[var(--accent)] font-medium">{patternScale.toFixed(1)}x</span>
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
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Team Name (Front Chest)
                </label>
                <input
                  type="text"
                  value={nameNumber.teamName}
                  onChange={(e) => setNameNumber({ teamName: e.target.value })}
                  placeholder="e.g. WILDCATS"
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded bg-white text-slate-800 font-medium uppercase focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Player Name (Back Nameplate)
                </label>
                <input
                  type="text"
                  value={nameNumber.playerName}
                  onChange={(e) => setNameNumber({ playerName: e.target.value })}
                  placeholder="e.g. WILLIAMS"
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded bg-white text-slate-800 font-medium uppercase focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Back Number
                  </label>
                  <input
                    type="text"
                    maxLength={3}
                    value={nameNumber.playerNumber}
                    onChange={(e) => setNameNumber({ playerNumber: e.target.value })}
                    className="w-full px-3 py-1.5 text-base border border-slate-300 rounded bg-white text-slate-800 font-medium text-center focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Lettering Font
                  </label>
                  <select
                    value={nameNumber.font}
                    onChange={(e) => setNameNumber({ font: e.target.value })}
                    className="w-full px-2.5 py-2 text-xs border border-slate-300 rounded bg-white text-slate-800 font-medium focus:border-[var(--accent)] focus:outline-none cursor-pointer"
                  >
                    {FONTS_LIST.map(f => (
                      <option key={f.id} value={f.id} className="text-slate-800">{f.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-normal text-slate-600">Text Fill</span>
                  <input
                    type="color"
                    value={nameNumber.textColor}
                    onChange={(e) => setNameNumber({ textColor: e.target.value })}
                    className="w-6 h-6 rounded border border-slate-300 p-0 cursor-pointer bg-white"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-normal text-slate-600">Outline Stroke</span>
                  <input
                    type="color"
                    value={nameNumber.strokeColor}
                    onChange={(e) => setNameNumber({ strokeColor: e.target.value })}
                    className="w-6 h-6 rounded border border-slate-300 p-0 cursor-pointer bg-white"
                  />
                </div>
              </div>

              <button
                onClick={() => setIs2DEditorOpen(true)}
                className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium rounded shadow-xs transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <ExternalLink size={13} />
                <span>Open 2D Graphic Canvas</span>
              </button>
            </div>
          </div>
        )}

        {/* ════ TAB 5: LOGOS & ARTWORK ════ */}
        {activeTab === 'logos' && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-slate-300 rounded p-5 text-center hover:border-slate-400 transition-colors bg-slate-50/50">
              <Upload size={22} className="mx-auto text-slate-400 mb-1.5" />
              <p className="text-xs font-medium text-slate-700 mb-0.5">
                Upload Team Crest or Sponsor Logo
              </p>
              <span className="text-[11px] text-slate-400 block mb-2.5">
                PNG, SVG, or JPG (transparent background recommended)
              </span>
              <label className="px-4 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium rounded transition cursor-pointer inline-block shadow-xs">
                Choose File
                <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
              </label>
            </div>

            {/* Uploaded Logos List */}
            {logos.length > 0 && (
              <div className="space-y-1.5">
                <span className="text-xs font-medium text-slate-600 block">
                  Attached Emblems ({logos.length})
                </span>
                {logos.map((logo) => (
                  <div key={logo.id} className="p-2.5 bg-slate-50 rounded border border-slate-200 flex items-center justify-between gap-2">
                    <img src={logo.url} alt="Logo" className="w-8 h-8 object-contain rounded bg-white border border-slate-200 p-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium text-slate-800 truncate block">{logo.name || 'Emblem'}</span>
                      <span className="text-[10px] text-slate-500 capitalize">{logo.placement || 'Chest'}</span>
                    </div>
                    <button
                      onClick={() => removeLogo(logo.id)}
                      className="p-1 text-slate-400 hover:text-red-600 transition cursor-pointer"
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
              className="w-full py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium rounded border border-slate-200 flex items-center justify-center gap-1.5 transition cursor-pointer shadow-2xs"
            >
              <ExternalLink size={13} className="text-slate-500" />
              <span>Position Emblems in 2D Studio</span>
            </button>
          </div>
        )}

        {/* ════ TAB 6: ROSTER & QUOTE ════ */}
        {activeTab === 'roster' && (
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs font-medium mb-1">
                <span className="text-slate-600">Roster Quantity:</span>
                <span className="text-sm font-semibold text-[var(--accent)]">{rosterCount} Sets</span>
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
              <div className="flex justify-between text-[10px] text-slate-500 font-normal mt-1">
                <span>15 (MOQ)</span>
                <span>50 sets (8% off)</span>
                <span>100 sets (12% off)</span>
                <span>200+ (20% off)</span>
              </div>
            </div>

            {/* Decoration Method */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Lettering & Decoration Method
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'sublimation', label: 'Dye Sublimation' },
                  { id: 'twill', label: 'Tackle Twill' },
                  { id: 'both', label: 'Hybrid Pro' }
                ].map(d => (
                  <button
                    key={d.id}
                    onClick={() => setDecorationMethod(d.id)}
                    className={`py-1.5 px-1 text-center text-xs font-normal rounded border transition cursor-pointer ${
                      decorationMethod === d.id
                        ? 'border-orange-400 bg-orange-50 font-medium text-orange-950 shadow-2xs'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Breakdown Inputs */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Size Breakdown (Estimate)
              </label>
              <div className="grid grid-cols-5 gap-1 text-center">
                {['YL', 'S', 'M', 'L', 'XL'].map(sz => (
                  <div key={sz} className="p-1.5 bg-slate-50 rounded border border-slate-200">
                    <span className="text-[10px] font-medium text-slate-500 block mb-0.5">{sz}</span>
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
                      className="w-full text-center text-xs font-medium border border-slate-300 rounded py-0.5 bg-white text-slate-800"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* ── 4. FIXED BOTTOM ESTIMATE & SUBMIT CTA ── */}
      <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 flex-shrink-0">
        <div>
          <span className="text-[10px] text-slate-500 font-normal block">
            Factory Direct Estimate
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-semibold text-slate-900">
              ${calculatedUnitPrice.toFixed(2)}
            </span>
            <span className="text-xs text-slate-500 font-normal">
              / set (${calculatedTotalPrice.toFixed(2)} total)
            </span>
          </div>
        </div>

        <button
          onClick={onSaveDesign}
          disabled={isSubmitting}
          className="px-5 py-2.5 bg-[var(--accent)] hover:brightness-105 text-white font-medium text-xs rounded shadow-xs transition cursor-pointer flex items-center gap-1.5 flex-shrink-0"
        >
          {isSubmitting ? 'Saving...' : 'Get Free Proof'}
          <ArrowRight size={13} />
        </button>
      </div>

    </aside>
  );
}
