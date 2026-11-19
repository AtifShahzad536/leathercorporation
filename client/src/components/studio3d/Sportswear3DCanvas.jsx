import React, { useRef, useEffect, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, Float, Html, Center } from '@react-three/drei';
import * as THREE from 'three';
import { useStudioStore, FABRIC_PRESETS } from './useStudioStore';
import { getFabricBumpTexture, getPatternTexture } from './FabricTextures';
import { decalPipeline } from './DecalCanvasPipeline';
import {
  RotateCw, Eye, Maximize2, Minimize2, ZoomIn, ZoomOut,
  Sparkles, Layers, ShieldCheck, Camera, Compass
} from 'lucide-react';

// ── Built-in Procedural Athletic Jersey Geometry Component ──
function ProceduralJerseyModel({ onSelectMesh, selectedMeshId, hoveredMeshId, onHoverMesh }) {
  const {
    meshCustomizations,
    primaryColor,
    secondaryColor,
    accentColor,
    activeFabric,
    activePattern,
    patternColor,
    patternScale,
    nameNumber,
    logos,
    isWireframe,
    setDetectedMeshes
  } = useStudioStore();

  // Populate detected meshes for procedural jersey
  useEffect(() => {
    setDetectedMeshes([
      { id: 'mesh_front_body', label: 'Front Torso', region: 'front_body', defaultColor: primaryColor },
      { id: 'mesh_back_body', label: 'Back Body', region: 'back_body', defaultColor: primaryColor },
      { id: 'mesh_left_sleeve', label: 'Left Sleeve', region: 'left_sleeve', defaultColor: secondaryColor },
      { id: 'mesh_right_sleeve', label: 'Right Sleeve', region: 'right_sleeve', defaultColor: secondaryColor },
      { id: 'mesh_collar', label: 'Collar & Neck Rib', region: 'collar', defaultColor: secondaryColor },
      { id: 'mesh_cuffs', label: 'Sleeve Cuffs', region: 'cuffs', defaultColor: accentColor },
      { id: 'mesh_side_panels', label: 'Side Vent Panels', region: 'side_panels', defaultColor: secondaryColor }
    ]);
  }, [setDetectedMeshes, primaryColor, secondaryColor, accentColor]);

  const [decalFrontTex, setDecalFrontTex] = useState(null);
  const [decalBackTex, setDecalBackTex] = useState(null);

  // Update dynamic decal textures for Front & Back
  useEffect(() => {
    let isMounted = true;
    const updateDecals = async () => {
      await decalPipeline.draw({
        viewAngle: 'front',
        nameNumber,
        logos,
        primaryColor,
        secondaryColor,
        accentColor
      });
      if (isMounted) {
        setDecalFrontTex(decalPipeline.getTexture().clone());
      }

      await decalPipeline.draw({
        viewAngle: 'back',
        nameNumber,
        logos,
        primaryColor,
        secondaryColor,
        accentColor
      });
      if (isMounted) {
        setDecalBackTex(decalPipeline.getTexture().clone());
      }
    };
    updateDecals();
    return () => { isMounted = false; };
  }, [nameNumber, logos, primaryColor, secondaryColor, accentColor]);

  // Compute materials for each mesh
  const materials = useMemo(() => {
    const bumpMap = getFabricBumpTexture(activeFabric);
    const fabricCfg = FABRIC_PRESETS[activeFabric] || FABRIC_PRESETS.micro_interlock;

    const getMatProps = (meshKey, fallbackColor) => {
      const cfg = meshCustomizations[meshKey] || {};
      const color = cfg.color || fallbackColor;
      const isSelected = selectedMeshId === meshKey;
      const isHovered = hoveredMeshId === meshKey;

      let map = null;
      if (activePattern && activePattern !== 'solid') {
        map = getPatternTexture(activePattern, color, patternColor, patternScale);
      }

      return {
        color: new THREE.Color(color),
        roughness: cfg.roughness ?? fabricCfg.roughness,
        metalness: cfg.metalness ?? fabricCfg.metalness,
        bumpMap,
        bumpScale: fabricCfg.bumpScale,
        map,
        wireframe: isWireframe,
        emissive: isSelected ? new THREE.Color('#F26522') : (isHovered ? new THREE.Color('#1E1B6E') : new THREE.Color('#000000')),
        emissiveIntensity: isSelected ? 0.35 : (isHovered ? 0.2 : 0)
      };
    };

    return {
      front: getMatProps('mesh_front_body', primaryColor),
      back: getMatProps('mesh_back_body', primaryColor),
      leftSleeve: getMatProps('mesh_left_sleeve', secondaryColor),
      rightSleeve: getMatProps('mesh_right_sleeve', secondaryColor),
      collar: getMatProps('mesh_collar', secondaryColor),
      cuffs: getMatProps('mesh_cuffs', accentColor),
      sides: getMatProps('mesh_side_panels', secondaryColor)
    };
  }, [meshCustomizations, primaryColor, secondaryColor, accentColor, activeFabric, activePattern, patternColor, patternScale, selectedMeshId, hoveredMeshId, isWireframe]);

  const handlePointerDown = (e, meshId) => {
    e.stopPropagation();
    onSelectMesh(meshId);
  };

  const handlePointerOver = (e, meshId) => {
    e.stopPropagation();
    onHoverMesh(meshId);
  };

  const handlePointerOut = () => {
    onHoverMesh(null);
  };

  return (
    <group position={[0, -0.15, 0]}>
      {/* 1. FRONT TORSO (Chest & Abdomen Curved Panel) */}
      <mesh
        position={[0, 0.45, 0.08]}
        onPointerDown={(e) => handlePointerDown(e, 'mesh_front_body')}
        onPointerOver={(e) => handlePointerOver(e, 'mesh_front_body')}
        onPointerOut={handlePointerOut}
      >
        <cylinderGeometry args={[0.42, 0.38, 0.88, 32, 1, false, Math.PI * 0.75, Math.PI * 0.5]} />
        <meshStandardMaterial {...materials.front} side={THREE.DoubleSide} />
      </mesh>

      {/* Front Decal Overlay Layer (Floating right in front of chest) */}
      {decalFrontTex && (
        <mesh position={[0, 0.46, 0.16]}>
          <planeGeometry args={[0.55, 0.72]} />
          <meshBasicMaterial map={decalFrontTex} transparent opacity={0.96} depthWrite={false} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* 2. BACK TORSO */}
      <mesh
        position={[0, 0.45, -0.08]}
        onPointerDown={(e) => handlePointerDown(e, 'mesh_back_body')}
        onPointerOver={(e) => handlePointerOver(e, 'mesh_back_body')}
        onPointerOut={handlePointerOut}
      >
        <cylinderGeometry args={[0.42, 0.38, 0.88, 32, 1, false, -Math.PI * 0.25, Math.PI * 0.5]} />
        <meshStandardMaterial {...materials.back} side={THREE.DoubleSide} />
      </mesh>

      {/* Back Decal Overlay Layer (Player Name & Large Number) */}
      {decalBackTex && (
        <mesh position={[0, 0.46, -0.16]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[0.55, 0.72]} />
          <meshBasicMaterial map={decalBackTex} transparent opacity={0.96} depthWrite={false} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* 3. LEFT SLEEVE */}
      <mesh
        position={[-0.48, 0.72, 0]}
        rotation={[0, 0, Math.PI / 4.2]}
        onPointerDown={(e) => handlePointerDown(e, 'mesh_left_sleeve')}
        onPointerOver={(e) => handlePointerOver(e, 'mesh_left_sleeve')}
        onPointerOut={handlePointerOut}
      >
        <cylinderGeometry args={[0.16, 0.13, 0.38, 24]} />
        <meshStandardMaterial {...materials.leftSleeve} />
      </mesh>

      {/* 4. RIGHT SLEEVE */}
      <mesh
        position={[0.48, 0.72, 0]}
        rotation={[0, 0, -Math.PI / 4.2]}
        onPointerDown={(e) => handlePointerDown(e, 'mesh_right_sleeve')}
        onPointerOver={(e) => handlePointerOver(e, 'mesh_right_sleeve')}
        onPointerOut={handlePointerOut}
      >
        <cylinderGeometry args={[0.16, 0.13, 0.38, 24]} />
        <meshStandardMaterial {...materials.rightSleeve} />
      </mesh>

      {/* 5. COLLAR & RIBBED NECK TRIM */}
      <mesh
        position={[0, 0.89, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        onPointerDown={(e) => handlePointerDown(e, 'mesh_collar')}
        onPointerOver={(e) => handlePointerOver(e, 'mesh_collar')}
        onPointerOut={handlePointerOut}
      >
        <torusGeometry args={[0.18, 0.025, 16, 32]} />
        <meshStandardMaterial {...materials.collar} />
      </mesh>

      {/* 6. SIDE ATHLETIC VENT PANELS */}
      <mesh
        position={[-0.32, 0.45, 0]}
        onPointerDown={(e) => handlePointerDown(e, 'mesh_side_panels')}
        onPointerOver={(e) => handlePointerOver(e, 'mesh_side_panels')}
        onPointerOut={handlePointerOut}
      >
        <boxGeometry args={[0.04, 0.82, 0.22]} />
        <meshStandardMaterial {...materials.sides} />
      </mesh>

      <mesh
        position={[0.32, 0.45, 0]}
        onPointerDown={(e) => handlePointerDown(e, 'mesh_side_panels')}
        onPointerOver={(e) => handlePointerOver(e, 'mesh_side_panels')}
        onPointerOut={handlePointerOut}
      >
        <boxGeometry args={[0.04, 0.82, 0.22]} />
        <meshStandardMaterial {...materials.sides} />
      </mesh>
    </group>
  );
}

// URL resolver to ensure GLB assets always point to backend storage
export function resolveModelUrl(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:') || url.startsWith('data:')) {
    return url;
  }
  const apiBase = (typeof window !== 'undefined' && window.location.hostname === 'localhost')
    ? 'http://localhost:5000'
    : '';
  return `${apiBase}${url.startsWith('/') ? '' : '/'}${url}`;
}

// Error Boundary for Custom 3D Models
class ModelErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.warn('Custom 3D model failed to load, falling back to procedural jersey:', err?.message);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

// Smart display label generator for arbitrary 3D model meshes
function formatMeshLabel(child, index, activeModelMeshes) {
  const meshId = child.name || child.uuid;
  
  if (Array.isArray(activeModelMeshes)) {
    const configured = activeModelMeshes.find(m => m.meshId === meshId);
    if (configured?.name && configured.name.trim()) {
      return configured.name.trim();
    }
    if (configured?.region) {
      const regionLabels = {
        front_body: 'Front Torso / Crown',
        back_body: 'Back Torso',
        left_sleeve: 'Left Sleeve',
        right_sleeve: 'Right Sleeve',
        collar: 'Collar Rib',
        cuffs: 'Sleeve Cuffs',
        side_panels: 'Side Panels',
        buttons: 'Buttons / Fasteners',
        zipper: 'Zipper Placket',
        stripes: 'Accent Trim',
        waistband: 'Waistband',
        pockets: 'Pockets'
      };
      if (regionLabels[configured.region]) {
        return regionLabels[configured.region];
      }
    }
  }

  const raw = (child.name || '').toLowerCase();
  if (raw.includes('visor') || raw.includes('brim') || raw.includes('peak')) return 'Visor / Brim';
  if (raw.includes('crown') || raw.includes('dome')) return 'Crown Panels';
  if (raw.includes('button') || raw.includes('pin')) return 'Top Button';
  if (raw.includes('strap') || raw.includes('buckle') || raw.includes('snapback') || raw.includes('velcro')) return 'Back Closure Strap';
  if (raw.includes('sweatband') || raw.includes('inner')) return 'Inner Sweatband';
  if (raw.includes('eyelet') || raw.includes('vent')) return 'Vent Eyelets';
  if (raw.includes('front') || raw.includes('chest')) return 'Front Torso';
  if (raw.includes('back') || raw.includes('rear')) return 'Back Body';
  if (raw.includes('sleeve_l') || raw.includes('left_sleeve') || raw.includes('arm_l')) return 'Left Sleeve';
  if (raw.includes('sleeve_r') || raw.includes('right_sleeve') || raw.includes('arm_r')) return 'Right Sleeve';
  if (raw.includes('collar') || raw.includes('neck') || raw.includes('rib')) return 'Collar & Neck Rib';
  if (raw.includes('cuff') || raw.includes('wrist')) return 'Sleeve Cuffs';
  if (raw.includes('side') || raw.includes('vent')) return 'Side Vent Panels';
  if (raw.includes('waist') || raw.includes('belt')) return 'Waistband';
  if (raw.includes('stripe') || raw.includes('piping') || raw.includes('trim')) return 'Accent Trim';

  if (child.name && !/^node[-_]?\d+/i.test(child.name) && !/^object[-_]?\d+/i.test(child.name) && !/^mesh[-_]?\d+/i.test(child.name)) {
    const formatted = child.name
      .replace(/^mesh[_-]/i, '')
      .replace(/[_-]/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .trim();
    if (formatted) {
      return formatted.replace(/\b\w/g, c => c.toUpperCase());
    }
  }

  return `Mesh Part ${index + 1}`;
}

// ── Uploaded Custom GLTF/GLB Model Renderer ──
function CustomGlbModel({ url, onSelectMesh, selectedMeshId, hoveredMeshId, onHoverMesh }) {
  const resolvedUrl = useMemo(() => resolveModelUrl(url), [url]);
  const { scene } = useGLTF(resolvedUrl);
  const {
    activeModel,
    meshCustomizations,
    activeFabric,
    isWireframe,
    setDetectedMeshes
  } = useStudioStore();

  // Create an isolated clone where EVERY mesh has its own unique, cloned material instance
  const clonedScene = useMemo(() => {
    if (!scene) return null;
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child.isMesh) {
        // Crucial: ensure each mesh has its own independent material instance
        child.material = child.material ? child.material.clone() : new THREE.MeshStandardMaterial();
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  // Dynamically detect all meshes from 3D scene graph and publish to store ONCE per model
  useEffect(() => {
    if (!clonedScene) return;
    const detected = [];
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        const meshId = child.name || child.uuid;
        const label = formatMeshLabel(child, detected.length, activeModel?.meshes);
        const matColor = child.material?.color 
          ? '#' + child.material.color.getHexString() 
          : '#0A192F';

        detected.push({
          id: meshId,
          label,
          region: child.name,
          defaultColor: matColor
        });
      }
    });

    if (detected.length > 0) {
      setDetectedMeshes(detected);
    }
  }, [clonedScene, activeModel, setDetectedMeshes]);

  // Apply per-mesh custom styling (strictly isolated per mesh)
  useEffect(() => {
    if (!clonedScene) return;
    const bumpMap = getFabricBumpTexture(activeFabric);
    const fabricCfg = FABRIC_PRESETS[activeFabric] || FABRIC_PRESETS.micro_interlock;

    clonedScene.traverse((child) => {
      if (child.isMesh) {
        const meshId = child.name || child.uuid;
        const cfg = meshCustomizations[meshId] || {};
        // Strictly read from this mesh's custom settings
        const color = cfg.color || '#0A192F';
        const isSelected = selectedMeshId === meshId;
        const isHovered = hoveredMeshId === meshId;

        if (child.material) {
          child.material.color.set(color);
          child.material.roughness = cfg.roughness ?? fabricCfg.roughness;
          child.material.metalness = cfg.metalness ?? fabricCfg.metalness;
          child.material.bumpMap = bumpMap;
          child.material.bumpScale = fabricCfg.bumpScale;
          child.material.wireframe = isWireframe;
          child.material.emissive.set(isSelected ? '#F26522' : (isHovered ? '#1E1B6E' : '#000000'));
          child.material.emissiveIntensity = isSelected ? 0.35 : (isHovered ? 0.2 : 0);
          child.material.needsUpdate = true;
        }
      }
    });
  }, [clonedScene, meshCustomizations, activeFabric, isWireframe, selectedMeshId, hoveredMeshId]);

  return (
    <primitive
      object={clonedScene}
      onPointerDown={(e) => {
        e.stopPropagation();
        onSelectMesh(e.object.name || e.object.uuid);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHoverMesh(e.object.name || e.object.uuid);
      }}
      onPointerOut={() => onHoverMesh(null)}
    />
  );
}

// ── Camera Controller for Smooth Orbit Interpolation & 360 Turntable ──
function CameraRig({ viewAngle, cameraResetCount, autoRotate }) {
  const { camera } = useThree();
  const controlsRef = useRef();

  const targetPositions = useMemo(() => ({
    front: [0, 0.4, 2.3],
    back: [0, 0.4, -2.3],
    left: [-2.3, 0.4, 0],
    right: [2.3, 0.4, 0],
    top: [0, 2.5, 0.3],
    perspective: [0.8, 0.55, 2.1]
  }), []);

  useEffect(() => {
    const targetPos = targetPositions[viewAngle] || targetPositions.perspective;
    camera.position.set(...targetPos);
    camera.lookAt(0, 0.4, 0);
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0.4, 0);
      controlsRef.current.update();
    }
  }, [viewAngle, cameraResetCount, camera, targetPositions]);

  // Handle window/container resize to prevent off-center shifts
  useEffect(() => {
    const handleResize = () => {
      if (controlsRef.current) {
        controlsRef.current.target.set(0, 0.4, 0);
        controlsRef.current.update();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <OrbitControls
      ref={controlsRef}
      autoRotate={autoRotate}
      autoRotateSpeed={2.5}
      enableDamping
      dampingFactor={0.08}
      minDistance={1.0}
      maxDistance={4.5}
      maxPolarAngle={Math.PI / 1.7}
      minPolarAngle={Math.PI / 6}
    />
  );
}

// ── Main Exported 3D Studio Canvas ──
export default function Sportswear3DCanvas({ className = '' }) {
  const {
    activeModel,
    selectedMeshId,
    hoveredMeshId,
    viewAngle,
    cameraResetCount,
    autoRotate,
    environmentPreset,
    isFullscreen,
    setSelectedMesh,
    setHoveredMesh,
    setViewAngle,
    toggleAutoRotate,
    toggleWireframe,
    toggleFullscreen
  } = useStudioStore();

  const containerRef = useRef();

  // Snapshot Capture for Quote & Cart
  const handleCaptureSnapshot = () => {
    const canvas = containerRef.current?.querySelector('canvas');
    if (!canvas) return null;
    return canvas.toDataURL('image/png', 0.95);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-0 overflow-hidden select-none bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] ${className}`}
    >
      {/* Minimal Top-Right Status & Fullscreen Exit */}
      {isFullscreen && (
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={toggleFullscreen}
            className="px-3 py-1.5 bg-white/95 hover:bg-white text-slate-800 rounded border border-slate-200 text-xs font-medium transition flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Minimize2 size={13} /> Exit Fullscreen
          </button>
        </div>
      )}

      {/* Subtle Bottom Viewport Helper */}
      <div className="absolute bottom-3 left-4 z-10 pointer-events-none opacity-60 flex items-center gap-2 text-xs font-normal text-slate-500">
        <span>360° Interactive Viewport</span>
      </div>

      {/* ── THREE.JS WEBGL RENDER CANVAS ── */}
      <Canvas
        shadows
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1
        }}
        camera={{ position: [0, 0.4, 2.3], fov: 42 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <CameraRig viewAngle={viewAngle} cameraResetCount={cameraResetCount} autoRotate={autoRotate} />

        {/* Ambient & Studio 3-Point Lighting */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 4, 3]} intensity={1.5} castShadow shadow-mapSize={1024} />
        <directionalLight position={[-3, 2, -2]} intensity={0.8} />
        <directionalLight position={[0, -2, 2]} intensity={0.4} />

        <Environment preset={environmentPreset || 'city'} />

        {/* Garment Geometry */}
        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            {activeModel?.modelUrl ? (
              <Center position={[0, 0.2, 0]}>
                <CustomGlbModel
                  url={activeModel.modelUrl}
                  onSelectMesh={setSelectedMesh}
                  selectedMeshId={selectedMeshId}
                  hoveredMeshId={hoveredMeshId}
                  onHoverMesh={setHoveredMesh}
                />
              </Center>
            ) : (
              <ProceduralJerseyModel
                onSelectMesh={setSelectedMesh}
                selectedMeshId={selectedMeshId}
                hoveredMeshId={hoveredMeshId}
                onHoverMesh={setHoveredMesh}
              />
            )}
          </group>

          {/* Realistic Floor Contact Shadow */}
          <ContactShadows
            position={[0, -0.65, 0]}
            opacity={0.3}
            scale={2.6}
            blur={2.0}
            far={1.4}
            color="#64748B"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
