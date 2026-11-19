import React from 'react';
import { 
  Camera, Compass, RotateCw, RotateCcw, 
  Layers, Check, Eye, HelpCircle
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
    secondaryColor
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
    <aside className="w-full h-full flex flex-col justify-between bg-slate-50 border-r border-slate-200 text-slate-800 select-none overflow-y-auto p-3 gap-3">
      
      {/* ── SECTION 1: CAMERA VIEWS ── */}
      <div className="space-y-2">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
            <Camera size={13} className="text-slate-500" />
            <span>Camera Angles</span>
          </div>
          <button
            onClick={resetCamera}
            title="Reset to 3D Orbit Angle"
            className="text-[11px] font-normal text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer transition"
          >
            <RotateCcw size={10} />
            <span>Reset</span>
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
                className={`w-full px-2.5 py-1.5 rounded text-left text-xs transition flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 font-medium shadow-xs border border-slate-200'
                    : 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-normal border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={13} className={isActive ? 'text-[var(--accent)]' : 'text-slate-400'} />
                  <span>{v.label}</span>
                </div>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── SECTION 2: GARMENT REGIONS / PARTS ── */}
      <div className="space-y-2 flex-1">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
            <Layers size={13} className="text-slate-500" />
            <span>Garment Parts</span>
          </div>
          {selectedMeshId ? (
            <button
              onClick={() => setSelectedMesh(null)}
              className="text-[11px] font-normal text-[var(--accent)] hover:underline cursor-pointer"
            >
              Select All
            </button>
          ) : (
            <span className="text-[10px] font-normal text-slate-500 bg-slate-200/60 px-1.5 py-0.5 rounded">
              Entire Uniform
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
                className={`w-full px-2.5 py-1.5 rounded text-left text-xs transition flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-orange-50/80 border border-orange-300 text-orange-950 font-medium shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 font-normal border border-slate-200/70'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className="w-3 h-3 rounded-full border border-slate-300 flex-shrink-0 shadow-2xs"
                    style={{ backgroundColor: currentColor }}
                  />
                  <span className="truncate">{part.label}</span>
                </div>
                {isSelected && <Check size={12} className="text-[var(--accent)] flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── SECTION 3: NAVIGATION CONTROLS HELPER ── */}
      <div className="bg-white rounded border border-slate-200 p-2.5 space-y-1.5 text-slate-600">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
          <HelpCircle size={12} className="text-slate-400" />
          <span>Mouse & Touch Controls</span>
        </div>
        <ul className="text-[11px] space-y-1 font-normal leading-tight text-slate-500">
          <li className="flex items-center justify-between">
            <span>Rotate 360°</span>
            <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-600 font-mono">Left Click</kbd>
          </li>
          <li className="flex items-center justify-between">
            <span>Pan Camera</span>
            <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-600 font-mono">Right Click</kbd>
          </li>
          <li className="flex items-center justify-between">
            <span>Zoom</span>
            <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-600 font-mono">Scroll</kbd>
          </li>
        </ul>
      </div>

    </aside>
  );
}
