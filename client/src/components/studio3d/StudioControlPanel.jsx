import React, { useState } from 'react';
import { 
  Palette, Layers, Sparkles, Type, Upload, Ruler, 
  RotateCcw, Undo2, Redo2, Check, ArrowRight, ShieldCheck, 
  Trash2, ChevronDown, Sliders, ExternalLink, HelpCircle
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

  const MESH_REGIONS = [
    { id: 'mesh_front_body', label: 'Front Torso & Chest', defaultColor: primaryColor },
    { id: 'mesh_back_body', label: 'Back Torso & Shoulders', defaultColor: primaryColor },
    { id: 'mesh_left_sleeve', label: 'Left Sleeve', defaultColor: secondaryColor },
    { id: 'mesh_right_sleeve', label: 'Right Sleeve', defaultColor: secondaryColor },
    { id: 'mesh_collar', label: 'Collar & Neck Ribbing', defaultColor: secondaryColor },
    { id: 'mesh_side_panels', label: 'Athletic Vent Side Panels', defaultColor: secondaryColor }
  ];

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

  return (
    <div className="w-full bg-white rounded-[5px] border border-[var(--secondary)]/15 shadow-xl flex flex-col overflow-hidden">
      
      {/* ── TOP TABS BAR ── */}
      <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-2 py-1.5 overflow-x-auto gap-1">
        {[
          { id: 'colors', label: 'Colors', icon: Palette },
          { id: 'fabrics', label: 'Fabric PBR', icon: Layers },
          { id: 'patterns', label: 'Patterns', icon: Sparkles },
          { id: 'typography', label: 'Lettering', icon: Type },
          { id: 'logos', label: 'Logos', icon: Upload },
          { id: 'roster', label: 'Roster & Quote', icon: Ruler }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-black uppercase rounded-[3px] transition cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[var(--secondary)] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black hover:bg-neutral-200/70'
              }`}
            >
              <Icon size={13} className={isActive ? 'text-[var(--accent)]' : 'text-neutral-500'} />
              <span>{tab.label}</span>
            </button>
          );
        })}

        {/* Undo / Redo & Reset Quick Tools */}
        <div className="flex items-center gap-1 border-l border-neutral-300 pl-2 ml-1">
          <button
            onClick={undo}
            title="Undo (Ctrl+Z)"
            className="p-1.5 rounded hover:bg-neutral-200 text-neutral-600 hover:text-black transition cursor-pointer"
          >
            <Undo2 size={13} />
          </button>
          <button
            onClick={redo}
            title="Redo"
            className="p-1.5 rounded hover:bg-neutral-200 text-neutral-600 hover:text-black transition cursor-pointer"
          >
            <Redo2 size={13} />
          </button>
          <button
            onClick={resetDesign}
            title="Reset Design to Default"
            className="p-1.5 rounded hover:bg-neutral-200 text-neutral-600 hover:text-red-600 transition cursor-pointer"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* ── TAB CONTENT BODY ── */}
      <div className="p-5 sm:p-6 space-y-6">
        
        {/* TAB 1: COLORS */}
        {activeTab === 'colors' && (
          <div className="space-y-6">
            
            {/* Region Target Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  Target Garment Region
                </label>
                <button
                  onClick={() => setSelectedMesh(null)}
                  className={`text-[10px] font-bold uppercase ${
                    !selectedMeshId ? 'text-[var(--accent)] font-black' : 'text-neutral-500 hover:underline'
                  } cursor-pointer`}
                >
                  Apply to Full Kit
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {MESH_REGIONS.map(m => {
                  const isSelected = selectedMeshId === m.id;
                  const c = meshCustomizations[m.id]?.color || m.defaultColor;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMesh(m.id)}
                      className={`p-2.5 rounded-[3px] border text-left transition flex items-center justify-between gap-2 cursor-pointer ${
                        isSelected
                          ? 'border-[var(--secondary)] bg-neutral-100 ring-2 ring-[var(--secondary)]/20 font-black'
                          : 'border-neutral-200 hover:bg-neutral-50 text-neutral-700 font-bold'
                      }`}
                    >
                      <span className="text-xs truncate">{m.label}</span>
                      <span
                        className="w-4 h-4 rounded-full border border-black/20 flex-shrink-0"
                        style={{ backgroundColor: c }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color Swatch & Custom HEX */}
            <div className="p-4 bg-neutral-50 rounded-[4px] border border-neutral-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-[var(--secondary)]">
                  {selectedMeshId ? `Editing: ${selectedMeshId.replace(/^mesh_/, '').replace(/_/g, ' ')}` : 'Main Torso Color'}
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={currentMeshColor}
                    onChange={(e) => {
                      if (selectedMeshId) setMeshColor(selectedMeshId, e.target.value);
                      else setPrimaryColor(e.target.value);
                    }}
                    className="w-8 h-8 rounded border border-neutral-300 p-0 cursor-pointer"
                  />
                  <span className="font-mono text-xs font-bold text-neutral-600 uppercase">
                    {currentMeshColor}
                  </span>
                </div>
              </div>

              {/* Preset Quick Swatches */}
              <div className="flex flex-wrap gap-1.5 pt-1">
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
                    className="w-7 h-7 rounded border border-black/20 hover:scale-110 transition-transform cursor-pointer shadow-xs"
                    title={hex}
                  />
                ))}
              </div>
            </div>

            {/* Collegiate Preset Palettes */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                Authentic Collegiate Team Palettes
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {COLOR_PALETTES.map((pal, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGlobalPalette(pal)}
                    className={`p-2.5 rounded-[3px] border flex items-center justify-between gap-3 text-left transition cursor-pointer ${
                      globalPalette.name === pal.name
                        ? 'border-[var(--accent)] bg-orange-50/40 ring-1 ring-[var(--accent)]'
                        : 'border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    <span className="text-xs font-bold text-[var(--secondary)] truncate">{pal.name}</span>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <span className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: pal.primary }} />
                      <span className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: pal.secondary }} />
                      <span className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: pal.accent }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: FABRIC PBR MATERIALS */}
        {activeTab === 'fabrics' && (
          <div className="space-y-4">
            <div className="p-3 bg-amber-50 rounded border border-amber-200 text-xs text-amber-900 leading-relaxed font-medium">
              💡 <strong>PBR Material Realism:</strong> Selecting a fabric updates micro-weave normal bump maps, specular roughness, and surface light reflection on the 3D model.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.values(FABRIC_PRESETS).map(fab => {
                const isSelected = activeFabric === fab.id;
                return (
                  <div
                    key={fab.id}
                    onClick={() => setActiveFabric(fab.id)}
                    className={`p-4 rounded-[4px] border transition cursor-pointer space-y-2 ${
                      isSelected
                        ? 'border-[var(--secondary)] bg-neutral-100 ring-2 ring-[var(--secondary)]/20 shadow-sm'
                        : 'border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                        {fab.gsm}
                      </span>
                      {isSelected && <Check size={14} className="text-emerald-600 font-bold" />}
                    </div>

                    <h4 className="text-xs font-black uppercase text-[var(--secondary)]">
                      {fab.name}
                    </h4>

                    <p className="text-[11px] text-neutral-600 leading-relaxed">
                      {fab.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: PATTERNS */}
        {activeTab === 'patterns' && (
          <div className="space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
              Sublimated Dye Patterns
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PATTERN_LIST.map(pat => {
                const isSelected = activePattern === pat.id;
                return (
                  <button
                    key={pat.id}
                    onClick={() => setActivePattern(pat.id)}
                    className={`p-3 rounded-[3px] border text-left transition cursor-pointer ${
                      isSelected
                        ? 'border-[var(--secondary)] bg-neutral-100 ring-2 ring-[var(--secondary)]/20 font-black'
                        : 'border-neutral-200 hover:bg-neutral-50 text-neutral-700 font-bold'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs">{pat.name}</span>
                      {isSelected && <Check size={14} className="text-emerald-600" />}
                    </div>
                    <p className="text-[10px] text-neutral-500 font-normal leading-tight">{pat.desc}</p>
                  </button>
                );
              })}
            </div>

            {activePattern !== 'solid' && (
              <div className="p-4 bg-neutral-50 rounded-[4px] border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--secondary)] uppercase">Pattern Accent Color</span>
                  <input
                    type="color"
                    value={patternColor}
                    onChange={(e) => setPatternColor(e.target.value)}
                    className="w-8 h-8 rounded border border-neutral-300 p-0 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-neutral-600 uppercase">Pattern Density Scale</span>
                    <span className="font-mono">{patternScale.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.1"
                    value={patternScale}
                    onChange={(e) => setPatternScale(parseFloat(e.target.value))}
                    className="w-full accent-[var(--accent)]"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: NAMES & NUMBERS */}
        {activeTab === 'typography' && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-1">
                  Team Name (Chest)
                </label>
                <input
                  type="text"
                  value={nameNumber.teamName}
                  onChange={(e) => setNameNumber({ teamName: e.target.value })}
                  placeholder="e.g. WILDCATS"
                  className="w-full px-3 py-2 text-xs border border-neutral-300 rounded font-bold uppercase focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-1">
                  Player Name (Back)
                </label>
                <input
                  type="text"
                  value={nameNumber.playerName}
                  onChange={(e) => setNameNumber({ playerName: e.target.value })}
                  placeholder="e.g. WILLIAMS"
                  className="w-full px-3 py-2 text-xs border border-neutral-300 rounded font-bold uppercase focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-1">
                  Sample Number
                </label>
                <input
                  type="text"
                  maxLength={3}
                  value={nameNumber.playerNumber}
                  onChange={(e) => setNameNumber({ playerNumber: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-neutral-300 rounded font-black text-center text-lg focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-1">
                  Collegiate Font
                </label>
                <select
                  value={nameNumber.font}
                  onChange={(e) => setNameNumber({ font: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-neutral-300 rounded font-bold focus:border-[var(--accent)] focus:outline-none"
                >
                  {FONTS_LIST.map(f => (
                    <option key={f.id} value={f.id}>{f.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 rounded-[4px] border border-neutral-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[var(--secondary)] uppercase">Text Fill</span>
                <input
                  type="color"
                  value={nameNumber.textColor}
                  onChange={(e) => setNameNumber({ textColor: e.target.value })}
                  className="w-8 h-8 rounded border border-neutral-300 p-0 cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[var(--secondary)] uppercase">Stroke Outline</span>
                <input
                  type="color"
                  value={nameNumber.strokeColor}
                  onChange={(e) => setNameNumber({ strokeColor: e.target.value })}
                  className="w-8 h-8 rounded border border-neutral-300 p-0 cursor-pointer"
                />
              </div>
            </div>

            <button
              onClick={() => setIs2DEditorOpen(true)}
              className="w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 text-[var(--secondary)] text-xs font-bold uppercase rounded-[3px] border border-neutral-300 flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <ExternalLink size={13} className="text-[var(--accent)]" />
              <span>Open 2D Graphic Canvas Editor</span>
            </button>
          </div>
        )}

        {/* TAB 5: LOGOS */}
        {activeTab === 'logos' && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-neutral-300 rounded-[4px] p-6 text-center hover:border-[var(--accent)] transition-colors">
              <Upload size={24} className="mx-auto text-[var(--accent)] mb-2" />
              <p className="text-xs font-bold uppercase text-[var(--secondary)] mb-1">
                Upload School Crest or Sponsor Logo
              </p>
              <span className="text-[10px] text-neutral-500 block mb-3">
                Supports transparent PNG, SVG, or high-res JPG (up to 20MB)
              </span>
              <label className="px-5 py-2 bg-[var(--secondary)] text-white text-xs font-black uppercase rounded-[3px] hover:bg-[var(--accent)] transition cursor-pointer inline-block">
                Choose File
                <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
              </label>
            </div>

            {/* Uploaded Logos List */}
            {logos.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                  Uploaded Emblems ({logos.length})
                </span>
                {logos.map((logo) => (
                  <div key={logo.id} className="p-3 bg-neutral-50 rounded border border-neutral-200 flex items-center justify-between gap-3">
                    <img src={logo.url} alt="Logo" className="w-10 h-10 object-contain rounded bg-white border border-neutral-200 p-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-[var(--secondary)] truncate block">{logo.name || 'Custom Logo'}</span>
                      <span className="text-[10px] text-neutral-500 uppercase">{logo.placement || 'Left Chest'}</span>
                    </div>
                    <button
                      onClick={() => removeLogo(logo.id)}
                      className="p-1.5 text-neutral-400 hover:text-red-600 transition cursor-pointer"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 6: ROSTER & QUOTE */}
        {activeTab === 'roster' && (
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="uppercase text-neutral-600">Roster Quantity:</span>
                <span className="text-base font-black text-[var(--accent)]">{rosterCount} Team Sets</span>
              </div>
              <input
                type="range"
                min="15"
                max="250"
                step="5"
                value={rosterCount}
                onChange={(e) => setRosterCount(parseInt(e.target.value, 10))}
                className="w-full accent-[var(--accent)]"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 font-bold mt-1">
                <span>15 (MOQ)</span>
                <span>50 sets (8% OFF)</span>
                <span>100 sets (12% OFF)</span>
                <span>200+ (20% OFF)</span>
              </div>
            </div>

            {/* Decoration Method */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-1.5">
                Decoration Application
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'sublimation', label: 'All-Over Dye' },
                  { id: 'twill', label: 'Tackle Twill' },
                  { id: 'both', label: 'Hybrid Pro' }
                ].map(d => (
                  <button
                    key={d.id}
                    onClick={() => setDecorationMethod(d.id)}
                    className={`py-2 px-1 text-center text-xs font-bold uppercase rounded-[3px] border transition cursor-pointer ${
                      decorationMethod === d.id
                        ? 'border-[var(--secondary)] bg-[var(--secondary)] text-white shadow-xs'
                        : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Breakdown Inputs */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-1.5">
                Estimated Size Breakdown
              </label>
              <div className="grid grid-cols-5 gap-1.5 text-center">
                {['YL', 'S', 'M', 'L', 'XL'].map(sz => (
                  <div key={sz} className="p-1.5 bg-neutral-50 rounded border border-neutral-200">
                    <span className="text-[10px] font-bold text-neutral-500 block mb-0.5">{sz}</span>
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
                      className="w-full text-center text-xs font-black border border-neutral-300 rounded py-0.5"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* ── BOTTOM DOCK: INSTANT ESTIMATE & SAVE ── */}
      <div className="p-5 bg-neutral-100 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
            Factory Direct Unit Rate (USD)
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[var(--secondary)]">
              ${(44.99 * (rosterCount >= 100 ? 0.8 : rosterCount >= 50 ? 0.88 : 1)).toFixed(2)}
            </span>
            <span className="text-xs text-neutral-500 font-semibold">
              / set (${((44.99 * (rosterCount >= 100 ? 0.8 : rosterCount >= 50 ? 0.88 : 1)) * rosterCount).toFixed(2)} total)
            </span>
          </div>
        </div>

        <button
          onClick={onSaveDesign}
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 bg-[var(--accent)] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider rounded-[3px] shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Submitting CAD Proof...' : 'Claim Free 12-Hour 3D Mockup'}
          <ArrowRight size={14} />
        </button>
      </div>

    </div>
  );
}
