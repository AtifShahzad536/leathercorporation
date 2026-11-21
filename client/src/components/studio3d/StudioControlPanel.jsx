import React, { useState } from 'react';
import { 
  Palette, Layers, Sparkles, Type, Upload, Ruler, 
  RotateCcw, Undo2, Redo2, Check, ArrowRight, ShieldCheck, 
  Trash2, ChevronDown, Sliders, ExternalLink, HelpCircle, CheckCircle2,
  Move, Plus, Eye, EyeOff, RotateCw
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
    detectedMeshes,
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
    selectedLogoId,
    setSelectedLogoId,
    textItems,
    selectedTextId,
    setSelectedTextId,
    addCustomText,
    updateTextItem,
    removeTextItem,
    snapTextToMesh,
    applyPlacementPreset,
    addLogo,
    updateLogo,
    removeLogo,
    snapLogoToMesh,
    applyLogoPlacementPreset,
    show3DGizmo,
    setShow3DGizmo,
    meshCenters,
    rosterCount,
    selectedSizes,
    decorationMethod,
    undo,
    redo,
    resetDesign,
    viewAngle,
    setViewAngle,
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
    setIs2DEditorOpen,
    setRosterCount,
    setSelectedSizes,
    setDecorationMethod,
    activeControlTab,
    setActiveControlTab
  } = useStudioStore();

  const activeTab = activeControlTab || 'colors';
  const setActiveTab = setActiveControlTab;

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
    ? (meshCustomizations[selectedMeshId]?.color || '#0A192F')
    : primaryColor;

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      addLogo({
        url: event.target.result,
        name: file.name,
        placement: selectedMeshId ? activeTargetLabel : 'Chest'
      });
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const calculatedUnitPrice = (44.99 * (rosterCount >= 100 ? 0.8 : rosterCount >= 50 ? 0.88 : rosterCount >= 25 ? 0.92 : 1) + (decorationMethod === 'twill' ? 10 : decorationMethod === 'both' ? 6 : 0));
  const calculatedTotalPrice = calculatedUnitPrice * rosterCount;

  const selectedPart = (detectedMeshes || []).find(m => m.id === selectedMeshId);
  const activeTargetLabel = selectedPart 
    ? (selectedPart.id !== selectedPart.label ? `${selectedPart.label} (${selectedPart.id})` : selectedPart.label)
    : (selectedMeshId ? selectedMeshId.replace(/^mesh_/, '').replace(/[_-]/g, ' ') : 'Entire Model');

  const activeTextItem = (textItems || []).find(i => i.id === selectedTextId) || textItems?.[0];
  const activeLogo = (logos || []).find(l => l.id === selectedLogoId) || logos?.[0];

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
              <div className="flex items-center justify-between gap-2">
                <div className="truncate">
                  <span className="text-[10px] text-slate-500 font-normal block">
                    Active Target:
                  </span>
                  <h4 className="text-xs font-medium text-slate-800 truncate" title={activeTargetLabel}>
                    {activeTargetLabel}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {selectedMeshId && (
                    <button
                      onClick={() => setSelectedMesh(null)}
                      className="px-2 py-0.5 bg-white hover:bg-slate-100 text-slate-600 text-[11px] font-normal rounded border border-slate-200 transition cursor-pointer shadow-2xs"
                    >
                      Deselect
                    </button>
                  )}
                  <button
                    onClick={() => setAllMeshesColor(currentMeshColor)}
                    className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 text-xs font-normal rounded border border-slate-200 transition cursor-pointer shadow-2xs"
                  >
                    Apply to All
                  </button>
                </div>
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
                      else setAllMeshesColor(e.target.value);
                    }}
                    className="w-7 h-7 rounded border border-slate-300 p-0 cursor-pointer bg-white"
                  />
                  <input
                    type="text"
                    value={currentMeshColor}
                    onChange={(e) => {
                      if (selectedMeshId) setMeshColor(selectedMeshId, e.target.value);
                      else setAllMeshesColor(e.target.value);
                    }}
                    className="w-20 px-2 py-0.5 text-xs font-mono font-medium text-slate-800 uppercase border border-slate-200 rounded bg-white text-center"
                  />
                </div>
              </div>

              {/* Active Palette Quick Picks for Selected Part */}
              {selectedMeshId && (
                <div className="pt-1 border-t border-slate-200">
                  <span className="text-[10px] text-slate-500 font-normal block mb-1.5">
                    Match Team Theme Palette:
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setMeshColor(selectedMeshId, globalPalette.primary)}
                      className="p-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 flex items-center gap-1.5 text-left cursor-pointer transition text-[11px]"
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-300 flex-shrink-0" style={{ backgroundColor: globalPalette.primary }} />
                      <span className="truncate text-slate-700">Primary</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMeshColor(selectedMeshId, globalPalette.secondary)}
                      className="p-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 flex items-center gap-1.5 text-left cursor-pointer transition text-[11px]"
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-300 flex-shrink-0" style={{ backgroundColor: globalPalette.secondary }} />
                      <span className="truncate text-slate-700">Secondary</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMeshColor(selectedMeshId, globalPalette.accent)}
                      className="p-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 flex items-center gap-1.5 text-left cursor-pointer transition text-[11px]"
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-300 flex-shrink-0" style={{ backgroundColor: globalPalette.accent }} />
                      <span className="truncate text-slate-700">Accent</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Quick Swatches */}
              <div className="pt-1 border-t border-slate-200">
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
                        else setAllMeshesColor(hex);
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
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-slate-700">
                  Curated Team Colorways
                </span>
                <span className="text-[10px] text-slate-400 font-normal">
                  Applies full team theme
                </span>
              </div>
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

        {/* ════ TAB 4: LETTERING & 3D DRAGGABLE TEXT ════ */}
        {activeTab === 'typography' && (
          <div className="space-y-4">

            {/* 1. Selected Part Placement Callout */}
            {selectedMeshId ? (
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-between gap-2 shadow-2xs">
                <div className="truncate">
                  <span className="text-[10px] text-orange-700 font-normal block">
                    Active Selected Part:
                  </span>
                  <h4 className="text-xs font-semibold text-slate-800 truncate" title={activeTargetLabel}>
                    {activeTargetLabel}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => snapTextToMesh(selectedTextId, selectedMeshId)}
                  className="px-2.5 py-1.5 bg-[#F26522] hover:bg-[#E05310] text-white rounded text-xs font-medium flex items-center gap-1.5 cursor-pointer shadow-xs transition flex-shrink-0"
                  title="Snap this text directly onto the selected part"
                >
                  <Move size={12} />
                  <span>Place on Part</span>
                </button>
              </div>
            ) : (
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-500 font-normal flex items-center gap-2">
                <HelpCircle size={14} className="text-slate-400 flex-shrink-0" />
                <span>Tip: Select any part from the left panel to snap text onto it.</span>
              </div>
            )}

            {/* 2. Text Layers Switcher */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-700">
                  Text Layers ({textItems.length})
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const newId = addCustomText('CUSTOM TEXT', selectedMeshId);
                    if (newId) {
                      setSelectedTextId(newId);
                      if (viewAngle === 'back') {
                        setViewAngle('back');
                      }
                    }
                  }}
                  className="px-2 py-0.5 bg-orange-50 hover:bg-orange-100 text-[#F26522] border border-orange-200 rounded text-[11px] font-medium flex items-center gap-1 cursor-pointer transition shadow-2xs"
                >
                  <Plus size={12} /> Add New Text
                </button>
              </div>

              <div className="space-y-1 max-h-48 overflow-y-auto pr-0.5">
                {textItems.map((item) => {
                  const isCurrent = (selectedTextId || textItems[0]?.id) === item.id;
                  const isItemBack = (item.position?.[2] < -0.01) || item.id === 'player_name' || Math.abs((item.rotation?.[1] || 0) - Math.PI) < 1.0;
                  return (
                    <div
                      key={item.id}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded text-xs transition border ${
                        isCurrent
                          ? 'bg-orange-50/90 border-orange-300 text-orange-950 font-medium shadow-xs ring-1 ring-orange-200'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 font-normal'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedTextId(item.id);
                          if (!item.visible) {
                            updateTextItem(item.id, { visible: true });
                          }
                          if (isItemBack) {
                            setViewAngle('back');
                          } else if (item.id === 'team_name' || item.type === 'team_name') {
                            setViewAngle('front');
                          }
                        }}
                        className="flex-1 text-left flex items-center gap-1.5 truncate cursor-pointer"
                        title={item.label || item.text}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.visible ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                        <span className="truncate">{item.type === 'team_name' ? 'Team Name' : item.type === 'number' ? 'Number' : item.type === 'player_name' ? 'Player Name' : (item.text || 'Custom')}</span>
                        <span className="text-[9px] px-1 py-0.2 bg-slate-100 text-slate-500 rounded border border-slate-200 ml-auto flex-shrink-0">
                          {isItemBack ? 'Back' : 'Front'}
                        </span>
                      </button>

                      <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            updateTextItem(item.id, { visible: !item.visible });
                          }}
                          title={item.visible ? 'Hide from 3D Model' : 'Show on 3D Model'}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer transition"
                        >
                          {item.visible ? <Eye size={12} className="text-emerald-600" /> : <EyeOff size={12} />}
                        </button>
                        {item.type === 'custom' && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeTextItem(item.id);
                            }}
                            title="Delete text layer"
                            className="p-1 rounded text-red-400 hover:text-red-600 hover:bg-red-50 cursor-pointer transition"
                          >
                            <Trash2 size={12} />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Active Text Element Editor */}
            {activeTextItem && (
              <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-800 truncate pr-2">
                    Edit: {activeTextItem.label || activeTextItem.text}
                  </span>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => updateTextItem(activeTextItem.id, { visible: !activeTextItem.visible })}
                      title={activeTextItem.visible ? 'Hide from 3D Model' : 'Show on 3D Model'}
                      className="p-1 rounded text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 cursor-pointer transition"
                    >
                      {activeTextItem.visible ? <Eye size={13} className="text-emerald-600" /> : <EyeOff size={13} />}
                    </button>
                    {activeTextItem.type === 'custom' && (
                      <button
                        type="button"
                        onClick={() => removeTextItem(activeTextItem.id)}
                        title="Delete this custom text"
                        className="p-1 rounded text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer transition"
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Text String Input */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">
                    Text Content:
                  </label>
                  <input
                    type="text"
                    value={activeTextItem.text}
                    onChange={(e) => updateTextItem(activeTextItem.id, { text: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded bg-white text-slate-800 font-medium uppercase focus:border-[var(--accent)] focus:outline-none"
                    placeholder="ENTER TEXT"
                  />
                </div>

                {/* Single Line vs Stacked Words Toggle */}
                {activeTextItem.text && activeTextItem.text.trim().includes(' ') && (
                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-slate-600 font-medium">Layout:</span>
                    <div className="flex rounded border border-slate-200 overflow-hidden bg-slate-100 p-0.5">
                      <button
                        type="button"
                        onClick={() => updateTextItem(activeTextItem.id, { stacked: false })}
                        className={`px-2.5 py-1 text-[10px] font-bold rounded transition cursor-pointer ${
                          !activeTextItem.stacked ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        Single Line
                      </button>
                      <button
                        type="button"
                        onClick={() => updateTextItem(activeTextItem.id, { stacked: true })}
                        className={`px-2.5 py-1 text-[10px] font-bold rounded transition cursor-pointer ${
                          activeTextItem.stacked ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        Stacked (2 Lines)
                      </button>
                    </div>
                  </div>
                )}

                {/* Font Selector */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">
                    Athletic Font:
                  </label>
                  <select
                    value={activeTextItem.font || 'Impact'}
                    onChange={(e) => updateTextItem(activeTextItem.id, { font: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded bg-white text-slate-800 font-medium focus:border-[var(--accent)] focus:outline-none cursor-pointer"
                  >
                    {FONTS_LIST.map(f => (
                      <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                  </select>
                </div>

                {/* Colors (Fill & Outline) */}
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-normal text-slate-600">Fill:</span>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="color"
                        value={activeTextItem.color || '#F5A623'}
                        onChange={(e) => updateTextItem(activeTextItem.id, { color: e.target.value })}
                        className="w-6 h-6 rounded border border-slate-300 p-0 cursor-pointer bg-white"
                      />
                      <span className="text-[10px] font-mono uppercase text-slate-700">{activeTextItem.color || '#F5A623'}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-normal text-slate-600">Stroke:</span>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="color"
                        value={activeTextItem.strokeColor || '#000000'}
                        onChange={(e) => updateTextItem(activeTextItem.id, { strokeColor: e.target.value })}
                        className="w-6 h-6 rounded border border-slate-300 p-0 cursor-pointer bg-white"
                      />
                      <span className="text-[10px] font-mono uppercase text-slate-700">{activeTextItem.strokeColor || '#000000'}</span>
                    </div>
                  </div>
                </div>

                {/* Stroke Thickness Slider */}
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-600 font-normal">Outline Thickness:</span>
                    <span className="font-mono text-slate-800 font-medium">{activeTextItem.strokeWidth || 2}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="6"
                    step="1"
                    value={activeTextItem.strokeWidth ?? 2}
                    onChange={(e) => updateTextItem(activeTextItem.id, { strokeWidth: parseInt(e.target.value) })}
                    className="w-full accent-[var(--accent)] cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* 4. 3D Position & Drag Controls */}
            {activeTextItem && (
              <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-800">
                    3D Drag & Drop Position
                  </span>
                  <button
                    type="button"
                    onClick={() => setShow3DGizmo(!show3DGizmo)}
                    className={`px-2 py-0.5 rounded text-[11px] font-normal border transition cursor-pointer ${
                      show3DGizmo
                        ? 'bg-orange-500 text-white border-orange-600 shadow-2xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {show3DGizmo ? '3D Arrows: ON' : '3D Arrows: OFF'}
                  </button>
                </div>

                <div className="p-2 bg-emerald-50/80 border border-emerald-200 rounded text-[11px] text-emerald-800 flex items-center gap-1.5 font-normal">
                  <span>🖱️ <strong>Direct Drag:</strong> Click and drag the text directly on the 3D model with your mouse!</span>
                </div>

                {/* Quick Presets */}
                <div>
                  <span className="text-[10px] text-slate-500 font-normal block mb-1">
                    Quick Placement Presets:
                  </span>
                  <div className="grid grid-cols-3 gap-1">
                    <button
                      type="button"
                      onClick={() => applyPlacementPreset(activeTextItem.id, 'front_chest')}
                      className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-700 cursor-pointer"
                    >
                      Front Chest
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPlacementPreset(activeTextItem.id, 'front_center')}
                      className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-700 cursor-pointer"
                    >
                      Front Center
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPlacementPreset(activeTextItem.id, 'back_name')}
                      className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-700 cursor-pointer"
                    >
                      Back Name
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPlacementPreset(activeTextItem.id, 'left_leg')}
                      className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-700 cursor-pointer"
                    >
                      Left Side
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPlacementPreset(activeTextItem.id, 'right_leg')}
                      className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-700 cursor-pointer"
                    >
                      Right Side
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPlacementPreset(activeTextItem.id, 'waistband')}
                      className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-700 cursor-pointer"
                    >
                      Top / Hem
                    </button>
                  </div>
                </div>

                {/* X Coordinate Slider (Left / Right) */}
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-600 font-normal">Horizontal (Left ↔ Right):</span>
                    <span className="font-mono text-slate-800 font-medium">{(activeTextItem.position?.[0] ?? 0).toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="-0.4"
                    max="0.4"
                    step="0.01"
                    value={activeTextItem.position?.[0] ?? 0}
                    onChange={(e) => {
                      const pos = [...(activeTextItem.position || [0, 0.3, 0.2])];
                      pos[0] = parseFloat(e.target.value);
                      updateTextItem(activeTextItem.id, { position: pos });
                    }}
                    className="w-full accent-[var(--accent)] cursor-pointer"
                  />
                </div>

                {/* Y Coordinate Slider (Up / Down) */}
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-600 font-normal">Vertical (Down ↕ Up):</span>
                    <span className="font-mono text-slate-800 font-medium">{(activeTextItem.position?.[1] ?? 0.3).toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="-0.2"
                    max="0.75"
                    step="0.01"
                    value={activeTextItem.position?.[1] ?? 0.3}
                    onChange={(e) => {
                      const pos = [...(activeTextItem.position || [0, 0.3, 0.2])];
                      pos[1] = parseFloat(e.target.value);
                      updateTextItem(activeTextItem.id, { position: pos });
                    }}
                    className="w-full accent-[var(--accent)] cursor-pointer"
                  />
                </div>

                {/* Scale / Size Slider */}
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-600 font-normal">Scale / Font Size:</span>
                    <span className="font-mono text-slate-800 font-medium">{(activeTextItem.scale || 0.6).toFixed(2)}x</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateTextItem(activeTextItem.id, { scale: Math.max(0.2, (activeTextItem.scale || 0.6) - 0.05) })}
                      className="w-6 h-6 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded text-xs font-bold text-slate-700 cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="0.2"
                      max="2.2"
                      step="0.05"
                      value={activeTextItem.scale || 0.6}
                      onChange={(e) => updateTextItem(activeTextItem.id, { scale: parseFloat(e.target.value) })}
                      className="flex-1 accent-[var(--accent)] cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={() => updateTextItem(activeTextItem.id, { scale: Math.min(2.2, (activeTextItem.scale || 0.6) + 0.05) })}
                      className="w-6 h-6 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded text-xs font-bold text-slate-700 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* In-Plane Rotation Angle Slider */}
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-600 font-normal">Rotation Angle:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-800 font-medium">{activeTextItem.angle || 0}°</span>
                      {(activeTextItem.angle || 0) !== 0 && (
                        <button
                          type="button"
                          onClick={() => updateTextItem(activeTextItem.id, { angle: 0 })}
                          className="text-[10px] text-slate-500 hover:text-slate-800 underline cursor-pointer"
                        >
                          Reset 0°
                        </button>
                      )}
                    </div>
                  </div>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    step="5"
                    value={activeTextItem.angle || 0}
                    onChange={(e) => updateTextItem(activeTextItem.id, { angle: parseInt(e.target.value, 10) })}
                    className="w-full accent-[var(--accent)] cursor-pointer"
                  />
                </div>
              </div>
            )}

            <button
              onClick={() => setIs2DEditorOpen(true)}
              className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium rounded shadow-xs transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <ExternalLink size={13} />
              <span>Open 2D Graphic Canvas</span>
            </button>
          </div>
        )}

        {/* ════ TAB 5: LOGOS & ARTWORK ════ */}
        {activeTab === 'logos' && (
          <div className="space-y-4">
            {/* 1. Selected Part Placement Callout */}
            {selectedMeshId ? (
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-between gap-2 shadow-2xs">
                <div className="truncate">
                  <span className="text-[10px] text-orange-700 font-normal block">
                    Active Selected Part:
                  </span>
                  <h4 className="text-xs font-semibold text-slate-800 truncate" title={activeTargetLabel}>
                    {activeTargetLabel}
                  </h4>
                </div>
                {activeLogo && (
                  <button
                    type="button"
                    onClick={() => snapLogoToMesh(activeLogo.id, selectedMeshId)}
                    className="px-2.5 py-1.5 bg-[#F26522] hover:bg-[#E05310] text-white rounded text-xs font-medium flex items-center gap-1.5 cursor-pointer shadow-xs transition flex-shrink-0"
                    title="Snap logo directly onto the selected part"
                  >
                    <Move size={12} />
                    <span>Place on Part</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-500 font-normal flex items-center gap-2">
                <HelpCircle size={14} className="text-slate-400 flex-shrink-0" />
                <span>Tip: Select any part from the left panel to snap your logo onto that specific region.</span>
              </div>
            )}

            {/* 2. File Upload Box */}
            <div className="border-2 border-dashed border-slate-300 rounded p-4 text-center hover:border-slate-400 transition-colors bg-slate-50/50">
              <Upload size={22} className="mx-auto text-slate-400 mb-1" />
              <p className="text-xs font-medium text-slate-700 mb-0.5">
                Upload Team Crest or Sponsor Logo
              </p>
              <span className="text-[11px] text-slate-400 block mb-2.5">
                PNG, SVG, or JPG (transparent background recommended)
              </span>
              <label className="px-4 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium rounded transition cursor-pointer inline-block shadow-xs">
                Choose Logo File
                <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
              </label>
            </div>

            {/* 3. Attached Emblems Switcher */}
            {logos.length > 0 && (
              <div className="space-y-1.5">
                <span className="text-xs font-medium text-slate-700 block">
                  Attached Emblems ({logos.length})
                </span>
                <div className="space-y-1.5">
                  {logos.map((logo) => {
                    const isCurrent = (activeLogo?.id) === logo.id;
                    return (
                      <div
                        key={logo.id}
                        onClick={() => setSelectedLogoId(logo.id)}
                        className={`p-2 rounded border transition cursor-pointer flex items-center justify-between gap-2 ${
                          isCurrent
                            ? 'bg-orange-50/90 border-orange-300 ring-1 ring-orange-200 shadow-2xs'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <img
                          src={logo.url}
                          alt="Logo"
                          className="w-8 h-8 object-contain rounded bg-white border border-slate-200 p-0.5 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-medium text-slate-800 truncate block">
                            {logo.name || 'Emblem'}
                          </span>
                          <span className="text-[10px] text-slate-500 capitalize">
                            {logo.targetMeshId ? `Part: ${logo.targetMeshId}` : (logo.placement || 'Front')}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              updateLogo(logo.id, { visible: !logo.visible });
                            }}
                            className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                            title={logo.visible ? 'Hide emblem' : 'Show emblem'}
                          >
                            {logo.visible ? <Eye size={13} className="text-emerald-600" /> : <EyeOff size={13} />}
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeLogo(logo.id);
                            }}
                            className="p-1 text-slate-400 hover:text-red-600 cursor-pointer"
                            title="Remove emblem"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 4. Active Logo Controls (Resize, Rotate, Drag, Presets) */}
            {activeLogo && (
              <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-800">
                    Logo 3D Controls
                  </span>
                  <span className="text-[11px] text-orange-700 font-medium">
                    {activeLogo.name || 'Active Logo'}
                  </span>
                </div>

                <div className="p-2 bg-emerald-50/80 border border-emerald-200 rounded text-[11px] text-emerald-800 flex items-center gap-1.5 font-normal">
                  <span>🖱️ <strong>Direct 3D Drag:</strong> Click & drag the logo anywhere on the 3D model with your mouse, even across different parts!</span>
                </div>

                {/* Scale / Size Slider (Chota / Bara) */}
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-600 font-normal">Logo Size / Scale:</span>
                    <span className="font-mono text-slate-800 font-medium">{(activeLogo.scale || 0.45).toFixed(2)}x</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateLogo(activeLogo.id, { scale: Math.max(0.1, (activeLogo.scale || 0.45) - 0.05) })}
                      className="w-6 h-6 flex items-center justify-center bg-white hover:bg-slate-200 border border-slate-200 rounded text-xs font-bold text-slate-700 cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="0.1"
                      max="1.8"
                      step="0.05"
                      value={activeLogo.scale || 0.45}
                      onChange={(e) => updateLogo(activeLogo.id, { scale: parseFloat(e.target.value) })}
                      className="flex-1 accent-[var(--accent)] cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={() => updateLogo(activeLogo.id, { scale: Math.min(1.8, (activeLogo.scale || 0.45) + 0.05) })}
                      className="w-6 h-6 flex items-center justify-center bg-white hover:bg-slate-200 border border-slate-200 rounded text-xs font-bold text-slate-700 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Rotation Angle Slider */}
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-600 font-normal">Rotation Angle:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-800 font-medium">{activeLogo.angle || 0}°</span>
                      {(activeLogo.angle || 0) !== 0 && (
                        <button
                          type="button"
                          onClick={() => updateLogo(activeLogo.id, { angle: 0 })}
                          className="text-[10px] text-slate-500 hover:text-slate-800 underline cursor-pointer"
                        >
                          Reset 0°
                        </button>
                      )}
                    </div>
                  </div>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    step="5"
                    value={activeLogo.angle || 0}
                    onChange={(e) => updateLogo(activeLogo.id, { angle: parseInt(e.target.value, 10) })}
                    className="w-full accent-[var(--accent)] cursor-pointer"
                  />
                </div>

                {/* Quick Placement Presets */}
                <div>
                  <span className="text-[10px] text-slate-500 font-normal block mb-1">
                    Quick Placement Presets:
                  </span>
                  <div className="grid grid-cols-3 gap-1">
                    <button
                      type="button"
                      onClick={() => applyLogoPlacementPreset(activeLogo.id, 'chest_left')}
                      className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-700 cursor-pointer"
                    >
                      Left Chest/Leg
                    </button>
                    <button
                      type="button"
                      onClick={() => applyLogoPlacementPreset(activeLogo.id, 'front_center')}
                      className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-700 cursor-pointer"
                    >
                      Front Center
                    </button>
                    <button
                      type="button"
                      onClick={() => applyLogoPlacementPreset(activeLogo.id, 'chest_right')}
                      className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-700 cursor-pointer"
                    >
                      Right Chest/Leg
                    </button>
                    <button
                      type="button"
                      onClick={() => applyLogoPlacementPreset(activeLogo.id, 'back_center')}
                      className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-700 cursor-pointer"
                    >
                      Back Center
                    </button>
                    <button
                      type="button"
                      onClick={() => applyLogoPlacementPreset(activeLogo.id, 'left_side')}
                      className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-700 cursor-pointer"
                    >
                      Left Side
                    </button>
                    <button
                      type="button"
                      onClick={() => applyLogoPlacementPreset(activeLogo.id, 'right_side')}
                      className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-700 cursor-pointer"
                    >
                      Right Side
                    </button>
                  </div>
                </div>

                {/* Horizontal Coordinate Slider */}
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-600 font-normal">Horizontal (Left ↔ Right):</span>
                    <span className="font-mono text-slate-800 font-medium">{(activeLogo.position?.[0] ?? 0).toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="-0.4"
                    max="0.4"
                    step="0.01"
                    value={activeLogo.position?.[0] ?? 0}
                    onChange={(e) => {
                      const pos = [...(activeLogo.position || [0, 0.2, 0.15])];
                      pos[0] = parseFloat(e.target.value);
                      updateLogo(activeLogo.id, { position: pos });
                    }}
                    className="w-full accent-[var(--accent)] cursor-pointer"
                  />
                </div>

                {/* Vertical Coordinate Slider */}
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-600 font-normal">Vertical (Down ↕ Up):</span>
                    <span className="font-mono text-slate-800 font-medium">{(activeLogo.position?.[1] ?? 0.2).toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="-0.2"
                    max="0.75"
                    step="0.01"
                    value={activeLogo.position?.[1] ?? 0.2}
                    onChange={(e) => {
                      const pos = [...(activeLogo.position || [0, 0.2, 0.15])];
                      pos[1] = parseFloat(e.target.value);
                      updateLogo(activeLogo.id, { position: pos });
                    }}
                    className="w-full accent-[var(--accent)] cursor-pointer"
                  />
                </div>
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
