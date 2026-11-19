import React from 'react';
import { 
  Camera, Compass, RotateCw, RotateCcw, 
  Layers, Check, Eye, HelpCircle, Box
} from 'lucide-react';
import { useStudioStore } from './useStudioStore';

export default function StudioLeftPanel() {
  const {
    selectedMeshId,
    setSelectedMesh,
    viewAngle,
    setViewAngle,
    resetCamera,
    meshCustomizations,
    primaryColor,
    secondaryColor,
    accentColor
  } = useStudioStore();

  const CAMERA_VIEWS = [
    { id: 'perspective', label: '3D Angle', icon: Compass },
    { id: 'front', label: 'Front View', icon: Eye },
    { id: 'back', label: 'Back View', icon: RotateCw },
    { id: 'left', label: 'Left Profile', icon: Camera },
    { id: 'right', label: 'Right Profile', icon: Camera }
  ];

  const GARMENT_PARTS = [
    { id: 'mesh_front_body', label: 'Front Torso', defaultColor: primaryColor },
    { id: 'mesh_back_body', label: 'Back Body', defaultColor: primaryColor },
    { id: 'mesh_left_sleeve', label: 'Left Sleeve', defaultColor: secondaryColor },
    { id: 'mesh_right_sleeve', label: 'Right Sleeve', defaultColor: secondaryColor },
    { id: 'mesh_collar', label: 'Collar Rib', defaultColor: secondaryColor },
    { id: 'mesh_side_panels', label: 'Side Panels', defaultColor: secondaryColor }
  ];

  return (
    <aside className="w-full h-full flex flex-col justify-between bg-[#0E1322] border-r border-white/10 text-white select-none overflow-y-auto p-3 gap-3">
      
      {/* ── SECTION 1: STUDIO CAMERA PRESETS ── */}
      <div className="space-y-2">
        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
          <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-white/80">
            <Camera size={13} className="text-[var(--accent)]" />
            <span>Camera Angles</span>
          </div>
          <button
            onClick={resetCamera}
            title="Reset to 3D Orbit Angle"
            className="text-[9px] font-bold text-white/50 hover:text-[var(--accent)] flex items-center gap-1 cursor-pointer transition uppercase"
          >
            <RotateCcw size={10} /> Reset
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {CAMERA_VIEWS.map(v => {
            const Icon = v.icon;
            const isActive = viewAngle === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setViewAngle(v.id)}
                className={`w-full px-2.5 py-1.5 rounded-[4px] text-left text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[var(--accent)] text-white font-black shadow-xs'
                    : 'bg-[#141B2D] text-white/75 hover:bg-[#1C253E] hover:text-white border border-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={12} className={isActive ? 'text-white' : 'text-white/40'} />
                  <span>{v.label}</span>
                </div>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── SECTION 2: GARMENT REGIONS EXPLORER ── */}
      <div className="space-y-2 flex-1">
        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
          <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-white/80">
            <Layers size={13} className="text-[var(--accent)]" />
            <span>Garment Regions</span>
          </div>
          {selectedMeshId ? (
            <button
              onClick={() => setSelectedMesh(null)}
              className="text-[9px] font-black text-[var(--accent)] hover:underline uppercase cursor-pointer"
            >
              All Parts
            </button>
          ) : (
            <span className="text-[8px] font-black text-emerald-400 uppercase bg-emerald-500/10 px-1 py-0.5 rounded border border-emerald-500/20">
              Full Kit
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          {GARMENT_PARTS.map(part => {
            const isSelected = selectedMeshId === part.id;
            const currentColor = meshCustomizations[part.id]?.color || part.defaultColor;
            return (
              <button
                key={part.id}
                onClick={() => setSelectedMesh(isSelected ? null : part.id)}
                className={`w-full px-2.5 py-1.5 rounded-[4px] text-left text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-orange-500/15 border border-[var(--accent)] text-white font-black shadow-xs'
                    : 'bg-[#141B2D] hover:bg-[#1C253E] text-white/70 hover:text-white border border-white/5'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className="w-3 h-3 rounded-full border border-black/30 flex-shrink-0 shadow-2xs"
                    style={{ backgroundColor: currentColor }}
                  />
                  <span className="truncate">{part.label}</span>
                </div>
                {isSelected && <Check size={12} className="text-[var(--accent)] font-black flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── SECTION 3: 3D NAVIGATION CONTROLS HELPER ── */}
      <div className="bg-[#141A2D] rounded-[4px] border border-white/10 p-2.5 space-y-1.5">
        <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-white/50">
          <HelpCircle size={11} className="text-[var(--accent)]" />
          <span>IDE Gestures</span>
        </div>
        <ul className="text-[10px] text-white/60 space-y-1 font-medium leading-tight">
          <li className="flex items-center justify-between">
            <span>Rotate 360°</span>
            <kbd className="px-1 py-0.5 bg-black/40 rounded text-[9px] font-mono text-white/80">Left Drag</kbd>
          </li>
          <li className="flex items-center justify-between">
            <span>Pan Camera</span>
            <kbd className="px-1 py-0.5 bg-black/40 rounded text-[9px] font-mono text-white/80">Right Drag</kbd>
          </li>
          <li className="flex items-center justify-between">
            <span>Zoom</span>
            <kbd className="px-1 py-0.5 bg-black/40 rounded text-[9px] font-mono text-white/80">Scroll</kbd>
          </li>
        </ul>
      </div>

    </aside>
  );
}
