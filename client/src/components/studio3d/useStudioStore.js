import { create } from 'zustand';

export const FABRIC_PRESETS = {
  micro_interlock: {
    id: 'micro_interlock',
    name: 'Micro-Interlock Polyester',
    gsm: '160 - 180 GSM',
    roughness: 0.55,
    metalness: 0.05,
    bumpScale: 0.04,
    description: 'Smooth, ultra-lightweight, 4-way stretch with moisture capillary channels for fast-paced team sports.'
  },
  pinhole_mesh: {
    id: 'pinhole_mesh',
    name: 'Pinhole Air-Mesh',
    gsm: '180 - 200 GSM',
    roughness: 0.65,
    metalness: 0.02,
    bumpScale: 0.08,
    description: 'Micro-perforated breathable weave allowing maximum airflow and instant heat dissipation in high-temperature matches.'
  },
  pro_dazzle_polyester: {
    id: 'pro_dazzle_polyester',
    name: 'Pro-Brite Dazzle Polyester',
    gsm: '200 - 240 GSM',
    roughness: 0.25,
    metalness: 0.18,
    bumpScale: 0.02,
    description: 'High-sheen reflective abrasion-resistant textile engineered to handle tackle collisions and friction.'
  },
  heavy_cotton_fleece: {
    id: 'heavy_cotton_fleece',
    name: 'Brushed Cotton-Rich Fleece',
    gsm: '320 - 360 GSM',
    roughness: 0.88,
    metalness: 0.0,
    bumpScale: 0.06,
    description: 'Ultra-soft dense insulating weave with brushed interior for sideline hoodies and championship outerwear.'
  },
  compression_spandex: {
    id: 'compression_spandex',
    name: 'Power-Flex Poly-Spandex',
    gsm: '220 - 260 GSM',
    roughness: 0.35,
    metalness: 0.08,
    bumpScale: 0.03,
    description: 'Second-skin anatomical compression fabric for wrestling singlets, volleyball shorts, and padded base layers.'
  },
  ripstop_nylon: {
    id: 'ripstop_nylon',
    name: 'Tactical Ripstop Nylon',
    gsm: '190 - 220 GSM',
    roughness: 0.45,
    metalness: 0.12,
    bumpScale: 0.07,
    description: 'Crosshatch grid reinforcement preventing rips and tears during extreme athletic collisions.'
  }
};

export const COLOR_PALETTES = [
  { name: 'Navy & Athletic Gold', primary: '#0A192F', secondary: '#F5A623', accent: '#FFFFFF' },
  { name: 'Royal Blue & White', primary: '#0047AB', secondary: '#FFFFFF', accent: '#D72638' },
  { name: 'Scarlet Red & Black', primary: '#C8102E', secondary: '#111111', accent: '#FFFFFF' },
  { name: 'Forest Green & Vegas Gold', primary: '#1E4620', secondary: '#C5B358', accent: '#FFFFFF' },
  { name: 'Deep Purple & Bright Gold', primary: '#4B0082', secondary: '#FFD700', accent: '#FFFFFF' },
  { name: 'Stealth Black & Neon Volt', primary: '#121212', secondary: '#CEFF00', accent: '#FFFFFF' },
  { name: 'Graphite Grey & Orange', primary: '#333333', secondary: '#F26522', accent: '#FFFFFF' },
  { name: 'Carolina Blue & Navy', primary: '#7BAFD4', secondary: '#0C2340', accent: '#FFFFFF' },
  { name: 'Maroon & Vegas Gold', primary: '#6A1A24', secondary: '#D4AF37', accent: '#FFFFFF' },
  { name: 'Classic Monochrome', primary: '#FFFFFF', secondary: '#111111', accent: '#777777' }
];

export const PATTERN_LIST = [
  { id: 'solid', name: 'Clean Solid Color', desc: 'Sleek monolithic colorway without background patterns.' },
  { id: 'pinstripe', name: 'Collegiate Pinstripes', desc: 'Classic parallel vertical needle stripes, ideal for baseball & softball.' },
  { id: 'digital_camo', name: 'Military Digital Camo', desc: 'Tactical pixelated sub-surface camouflage gradient.' },
  { id: 'hex_grid', name: 'Hexagonal Tech Honeycomb', desc: 'Futuristic geometric micro-cells for esports & soccer kits.' },
  { id: 'raglan_splice', name: 'Raglan Diagonal Splice', desc: 'Dynamic shoulder-to-hip contrasting color block.' },
  { id: 'gradient', name: 'Sublimated Ombre Fade', desc: 'Smooth horizontal tone transition from dark hem to light shoulders.' }
];

export const FONTS_LIST = [
  { id: 'Impact', name: 'Pro Collegiate Impact' },
  { id: 'Arial Black', name: 'Athletic Block' },
  { id: 'Trebuchet MS', name: 'Modern Aerodynamic' },
  { id: 'Courier New', name: 'Vintage Stencil' },
  { id: 'Georgia', name: 'Classic Roman' }
];

export const useStudioStore = create((set, get) => ({
  // Model & Mesh
  activeModel: null,
  detectedMeshes: [], // [{ id, label, region, defaultColor }]
  selectedMeshId: null, // null = all meshes or global
  hoveredMeshId: null,
  meshCustomizations: {}, // { [meshId]: { color, fabric, roughness, metalness, pattern, patternColor, patternScale } }

  // Global Colors
  globalPalette: COLOR_PALETTES[0],
  primaryColor: COLOR_PALETTES[0].primary,
  secondaryColor: COLOR_PALETTES[0].secondary,
  accentColor: COLOR_PALETTES[0].accent,

  // Global Fabric & Pattern
  activeFabric: 'micro_interlock',
  activePattern: 'solid',
  patternColor: '#F5A623',
  patternScale: 1.0,

  // Names, Numbers & Typography
  nameNumber: {
    teamName: 'HAMLO SPORTS',
    playerName: 'CHAMPION',
    playerNumber: '26',
    font: 'Impact',
    textColor: '#F5A623',
    strokeColor: '#000000',
    strokeWidth: 2,
    hasFrontName: true,
    hasFrontNumber: true,
    hasBackName: true,
    hasBackNumber: true
  },

  // Logos & Decals
  logos: [], // [{ id, url, name, placement: 'chest'|'back'|'left_sleeve'|'right_sleeve', x, y, scale, rotation }]

  // Camera & View
  viewAngle: 'front', // 'front' | 'back' | 'left' | 'right' | 'top' | 'perspective'
  cameraResetCount: 0,
  autoRotate: false,
  environmentPreset: 'city', // 'city', 'studio', 'sunset', 'park'
  isWireframe: false,
  isFullscreen: false,

  // 2D Canvas Editor Modal
  is2DEditorOpen: false,

  // Roster & Pricing
  rosterCount: 20,
  selectedSizes: { YL: 2, S: 4, M: 6, L: 5, XL: 3 },
  decorationMethod: 'sublimation', // 'sublimation', 'twill', 'both'

  // History Stacks (Undo / Redo)
  history: [],
  historyIndex: -1,

  // ── Actions ──
  saveSnapshot: () => {
    const state = get();
    const snapshot = {
      meshCustomizations: { ...state.meshCustomizations },
      primaryColor: state.primaryColor,
      secondaryColor: state.secondaryColor,
      accentColor: state.accentColor,
      activeFabric: state.activeFabric,
      activePattern: state.activePattern,
      patternColor: state.patternColor,
      patternScale: state.patternScale,
      nameNumber: { ...state.nameNumber },
      logos: [...state.logos]
    };
    const newHistory = state.history.slice(0, state.historyIndex + 1);
    newHistory.push(snapshot);
    if (newHistory.length > 30) newHistory.shift();
    set({ history: newHistory, historyIndex: newHistory.length - 1 });
  },

  undo: () => {
    const { history, historyIndex } = get();
    if (historyIndex > 0) {
      const prev = history[historyIndex - 1];
      set({ ...prev, historyIndex: historyIndex - 1 });
    }
  },

  redo: () => {
    const { history, historyIndex } = get();
    if (historyIndex < history.length - 1) {
      const next = history[historyIndex + 1];
      set({ ...next, historyIndex: historyIndex + 1 });
    }
  },

  setActiveModel: (model) => {
    set({ activeModel: model, selectedMeshId: null });
    const state = get();
    const primary = state.primaryColor || '#0A192F';
    const secondary = state.secondaryColor || '#F5A623';
    const accent = state.accentColor || '#FFFFFF';

    if (model?.meshes && Array.isArray(model.meshes) && model.meshes.length > 0) {
      const parts = model.meshes.map((m, idx) => ({
        id: m.meshId,
        label: m.name || `Part ${idx + 1}`,
        region: m.region || 'torso',
        defaultColor: m.defaultColor || (idx === 0 ? primary : (idx === 1 ? secondary : accent))
      }));
      set({ detectedMeshes: parts });

      const initCustom = {};
      parts.forEach(m => {
        initCustom[m.id] = {
          color: m.defaultColor,
          fabric: model.defaultFabric || state.activeFabric,
          roughness: 0.6,
          metalness: 0.05,
          pattern: 'solid',
          patternColor: secondary,
          patternScale: 1.0
        };
      });
      set({ meshCustomizations: initCustom });
    } else {
      set({ detectedMeshes: [], meshCustomizations: {} });
    }
    get().saveSnapshot();
  },

  setDetectedMeshes: (meshes) => {
    set({ detectedMeshes: meshes });
    const state = get();
    const updatedCustom = { ...state.meshCustomizations };
    let hasChanges = false;
    const primary = state.primaryColor || '#0A192F';
    const secondary = state.secondaryColor || '#F5A623';
    const accent = state.accentColor || '#FFFFFF';

    meshes.forEach((m, idx) => {
      if (!updatedCustom[m.id] || !updatedCustom[m.id].color) {
        // Compute smart initial color based on mesh name/region
        const lower = (m.id + ' ' + (m.label || '') + ' ' + (m.region || '')).toLowerCase();
        let assignedColor = primary;

        if (
          lower.includes('eyelet') || lower.includes('button') || lower.includes('string') || 
          lower.includes('cord') || lower.includes('stripe') || lower.includes('piping') || 
          lower.includes('accent') || lower.includes('e_1') || lower.includes('e_2') ||
          lower.includes('e 1') || lower.includes('e 2')
        ) {
          assignedColor = accent;
        } else if (
          lower.includes('sleeve') || lower.includes('arm') || lower.includes('collar') || 
          lower.includes('neck') || lower.includes('rib') || lower.includes('cuff') || 
          lower.includes('waist') || lower.includes('belt') || lower.includes('side') || 
          lower.includes('vent') || lower.includes('visor') || lower.includes('brim') ||
          lower.includes('d_1') || lower.includes('d_2') || lower.includes('b_2') || lower.includes('b_3') ||
          lower.includes('d 1') || lower.includes('d 2') || lower.includes('b 2') || lower.includes('b 3')
        ) {
          assignedColor = secondary;
        } else if (meshes.length > 2 && idx > 0) {
          assignedColor = idx % 2 === 1 ? secondary : accent;
        }

        updatedCustom[m.id] = {
          color: m.defaultColor && m.defaultColor !== '#ffffff' ? m.defaultColor : assignedColor,
          fabric: state.activeFabric,
          roughness: 0.6,
          metalness: 0.05,
          pattern: 'solid',
          patternColor: secondary,
          patternScale: 1.0
        };
        hasChanges = true;
      }
    });
    if (hasChanges) {
      set({ meshCustomizations: updatedCustom });
    }
  },

  setSelectedMesh: (meshId) => set({ selectedMeshId: meshId }),
  setHoveredMesh: (meshId) => set({ hoveredMeshId: meshId }),

  setMeshColor: (meshId, color) => {
    if (!meshId) return;
    get().saveSnapshot();
    set((state) => {
      const existing = state.meshCustomizations[meshId] || {};
      return {
        meshCustomizations: {
          ...state.meshCustomizations,
          [meshId]: {
            ...existing,
            color
          }
        }
      };
    });
  },

  setAllMeshesColor: (color) => {
    get().saveSnapshot();
    set((state) => {
      const updated = {};
      const allParts = state.detectedMeshes && state.detectedMeshes.length > 0 
        ? state.detectedMeshes 
        : Object.keys(state.meshCustomizations).map(id => ({ id }));

      allParts.forEach(m => {
        const id = m.id || m;
        updated[id] = {
          ...(state.meshCustomizations[id] || {}),
          color
        };
      });
      return { meshCustomizations: updated, primaryColor: color };
    });
  },

  setGlobalPalette: (palette) => {
    get().saveSnapshot();
    set((state) => {
      const meshes = state.detectedMeshes || [];
      const updated = { ...state.meshCustomizations };

      meshes.forEach((m, idx) => {
        const id = m.id;
        const lower = (id + ' ' + (m.label || '') + ' ' + (m.region || '')).toLowerCase();

        // 1. Accent details: drawstrings, eyelets, buttons, stripes, trim, cords
        if (
          lower.includes('eyelet') || lower.includes('button') || lower.includes('string') || 
          lower.includes('cord') || lower.includes('stripe') || lower.includes('piping') || 
          lower.includes('accent') || lower.includes('e_1') || lower.includes('e_2') ||
          lower.includes('e 1') || lower.includes('e 2')
        ) {
          updated[id] = { ...(updated[id] || {}), color: palette.accent };
        }
        // 2. Secondary contrast: waistband, sleeves, collar, cuffs, side panels, visor
        else if (
          lower.includes('sleeve') || lower.includes('arm') || lower.includes('collar') || 
          lower.includes('neck') || lower.includes('rib') || lower.includes('cuff') || 
          lower.includes('waist') || lower.includes('belt') || lower.includes('side') || 
          lower.includes('vent') || lower.includes('visor') || lower.includes('brim') ||
          lower.includes('d_1') || lower.includes('d_2') || lower.includes('b_2') || lower.includes('b_3') ||
          lower.includes('d 1') || lower.includes('d 2') || lower.includes('b 2') || lower.includes('b 3')
        ) {
          updated[id] = { ...(updated[id] || {}), color: palette.secondary };
        }
        // 3. Fallback for generic multi-mesh models without keyword matches
        else if (meshes.length > 3 && idx >= 2) {
          updated[id] = { ...(updated[id] || {}), color: idx % 2 === 0 ? palette.secondary : palette.accent };
        }
        // 4. Primary base (torso, main body, legs, crown)
        else {
          updated[id] = { ...(updated[id] || {}), color: palette.primary };
        }
      });

      return {
        globalPalette: palette,
        primaryColor: palette.primary,
        secondaryColor: palette.secondary,
        accentColor: palette.accent,
        meshCustomizations: updated,
        nameNumber: {
          ...state.nameNumber,
          textColor: palette.secondary,
          strokeColor: '#000000'
        }
      };
    });
  },

  setPrimaryColor: (color) => {
    const state = get();
    if (state.selectedMeshId) {
      state.setMeshColor(state.selectedMeshId, color);
      return;
    }
    state.setAllMeshesColor(color);
  },

  setSecondaryColor: (color) => {
    get().saveSnapshot();
    set((state) => ({
      secondaryColor: color,
      nameNumber: { ...state.nameNumber, textColor: color }
    }));
  },

  setActiveFabric: (fabricId) => {
    get().saveSnapshot();
    const preset = FABRIC_PRESETS[fabricId] || FABRIC_PRESETS.micro_interlock;
    set((state) => {
      const updated = { ...state.meshCustomizations };
      Object.keys(updated).forEach(k => {
        updated[k] = {
          ...updated[k],
          fabric: fabricId,
          roughness: preset.roughness,
          metalness: preset.metalness
        };
      });
      return { activeFabric: fabricId, meshCustomizations: updated };
    });
  },

  setMeshFabric: (meshId, fabricId) => {
    get().saveSnapshot();
    const preset = FABRIC_PRESETS[fabricId] || FABRIC_PRESETS.micro_interlock;
    set((state) => {
      const updated = { ...state.meshCustomizations };
      if (!updated[meshId]) updated[meshId] = {};
      updated[meshId] = {
        ...updated[meshId],
        fabric: fabricId,
        roughness: preset.roughness,
        metalness: preset.metalness
      };
      return { meshCustomizations: updated };
    });
  },

  setActivePattern: (patternId) => {
    get().saveSnapshot();
    set({ activePattern: patternId });
  },

  setPatternColor: (patternColor) => {
    get().saveSnapshot();
    set({ patternColor });
  },

  setPatternScale: (patternScale) => {
    set({ patternScale });
  },

  setNameNumber: (partial) => {
    set((state) => ({
      nameNumber: { ...state.nameNumber, ...partial }
    }));
  },

  addLogo: (logo) => {
    get().saveSnapshot();
    set((state) => ({
      logos: [...state.logos, { id: 'logo_' + Date.now(), scale: 1, rotation: 0, x: 0.5, y: 0.35, placement: 'chest', ...logo }]
    }));
  },

  updateLogo: (id, partial) => {
    set((state) => ({
      logos: state.logos.map(l => l.id === id ? { ...l, ...partial } : l)
    }));
  },

  removeLogo: (id) => {
    get().saveSnapshot();
    set((state) => ({
      logos: state.logos.filter(l => l.id !== id)
    }));
  },

  setViewAngle: (angle) => {
    set((state) => ({
      viewAngle: angle,
      cameraResetCount: state.cameraResetCount + 1
    }));
  },

  resetCamera: () => {
    set((state) => ({
      viewAngle: 'perspective',
      cameraResetCount: state.cameraResetCount + 1
    }));
  },

  setEnvironmentPreset: (env) => set({ environmentPreset: env }),
  toggleAutoRotate: () => set((state) => ({ autoRotate: !state.autoRotate })),
  toggleWireframe: () => set((state) => ({ isWireframe: !state.isWireframe })),
  toggleFullscreen: () => set((state) => ({ isFullscreen: !state.isFullscreen })),
  setIs2DEditorOpen: (isOpen) => set({ is2DEditorOpen: isOpen }),

  setRosterCount: (count) => set({ rosterCount: Math.max(1, count) }),
  setSelectedSizes: (sizes) => set({ selectedSizes: sizes }),
  setDecorationMethod: (method) => set({ decorationMethod: method }),

  resetDesign: () => {
    get().saveSnapshot();
    const defaultPal = COLOR_PALETTES[0];
    set({
      globalPalette: defaultPal,
      primaryColor: defaultPal.primary,
      secondaryColor: defaultPal.secondary,
      accentColor: defaultPal.accent,
      activeFabric: 'micro_interlock',
      activePattern: 'solid',
      logos: [],
      nameNumber: {
        teamName: 'HAMLO SPORTS',
        playerName: 'CHAMPION',
        playerNumber: '26',
        font: 'Impact',
        textColor: defaultPal.secondary,
        strokeColor: '#000000',
        strokeWidth: 2,
        hasFrontName: true,
        hasFrontNumber: true,
        hasBackName: true,
        hasBackNumber: true
      }
    });
  },

  exportConfig: () => {
    const s = get();
    return {
      activeModelId: s.activeModel?._id,
      meshCustomizations: s.meshCustomizations,
      globalPalette: s.globalPalette,
      primaryColor: s.primaryColor,
      secondaryColor: s.secondaryColor,
      accentColor: s.accentColor,
      activeFabric: s.activeFabric,
      activePattern: s.activePattern,
      patternColor: s.patternColor,
      patternScale: s.patternScale,
      nameNumber: s.nameNumber,
      logos: s.logos,
      rosterCount: s.rosterCount,
      selectedSizes: s.selectedSizes,
      decorationMethod: s.decorationMethod
    };
  },

  loadConfig: (cfg) => {
    if (!cfg) return;
    set({
      meshCustomizations: cfg.meshCustomizations || {},
      globalPalette: cfg.globalPalette || COLOR_PALETTES[0],
      primaryColor: cfg.primaryColor || '#0A192F',
      secondaryColor: cfg.secondaryColor || '#F5A623',
      accentColor: cfg.accentColor || '#FFFFFF',
      activeFabric: cfg.activeFabric || 'micro_interlock',
      activePattern: cfg.activePattern || 'solid',
      patternColor: cfg.patternColor || '#F5A623',
      patternScale: cfg.patternScale || 1.0,
      nameNumber: cfg.nameNumber || {
        teamName: 'HAMLO SPORTS',
        playerName: 'CHAMPION',
        playerNumber: '26',
        font: 'Impact',
        textColor: '#F5A623',
        strokeColor: '#000000'
      },
      logos: cfg.logos || [],
      rosterCount: cfg.rosterCount || 20,
      selectedSizes: cfg.selectedSizes || { M: 10, L: 10 }
    });
    get().saveSnapshot();
  }
}));
