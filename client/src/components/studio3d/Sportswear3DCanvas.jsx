import React, { useRef, useEffect, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, Float, Html, Center, TransformControls } from '@react-three/drei';
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
    setDetectedMeshes,
    setMeshCenters,
    setModelBounds
  } = useStudioStore();

  // Populate detected meshes and 3D surface centers for procedural jersey
  useEffect(() => {
    setModelBounds({
      center: [0, 0.45, 0],
      size: [0.8, 1.0, 0.35],
      min: [-0.4, -0.05, -0.17],
      max: [0.4, 0.95, 0.17]
    });

    setDetectedMeshes([
      { id: 'mesh_front_body', label: 'Front Torso', region: 'front_body', defaultColor: primaryColor },
      { id: 'mesh_back_body', label: 'Back Body', region: 'back_body', defaultColor: primaryColor },
      { id: 'mesh_left_sleeve', label: 'Left Sleeve', region: 'left_sleeve', defaultColor: secondaryColor },
      { id: 'mesh_right_sleeve', label: 'Right Sleeve', region: 'right_sleeve', defaultColor: secondaryColor },
      { id: 'mesh_collar', label: 'Collar & Neck Rib', region: 'collar', defaultColor: secondaryColor },
      { id: 'mesh_cuffs', label: 'Sleeve Cuffs', region: 'cuffs', defaultColor: accentColor },
      { id: 'mesh_side_panels', label: 'Side Vent Panels', region: 'side_panels', defaultColor: secondaryColor }
    ]);

    setMeshCenters({
      mesh_front_body: { center: [0, 0.45, 0.08], size: [0.6, 0.8, 0.25], surfacePosition: [0, 0.45, 0.22], rotation: [0, 0, 0] },
      mesh_back_body: { center: [0, 0.45, -0.08], size: [0.6, 0.8, 0.25], surfacePosition: [0, 0.45, -0.22], rotation: [0, Math.PI, 0] },
      mesh_left_sleeve: { center: [-0.48, 0.72, 0], size: [0.25, 0.38, 0.25], surfacePosition: [-0.48, 0.72, 0.18], rotation: [0, -Math.PI / 4, 0] },
      mesh_right_sleeve: { center: [0.48, 0.72, 0], size: [0.25, 0.38, 0.25], surfacePosition: [0.48, 0.72, 0.18], rotation: [0, Math.PI / 4, 0] },
      mesh_collar: { center: [0, 0.89, 0], size: [0.36, 0.08, 0.36], surfacePosition: [0, 0.89, 0.20], rotation: [0, 0, 0] },
      mesh_cuffs: { center: [-0.48, 0.55, 0], size: [0.25, 0.1, 0.25], surfacePosition: [-0.48, 0.55, 0.18], rotation: [0, 0, 0] },
      mesh_side_panels: { center: [-0.32, 0.45, 0], size: [0.08, 0.8, 0.22], surfacePosition: [-0.32, 0.45, 0.22], rotation: [0, 0, 0] }
    });
  }, [setDetectedMeshes, setMeshCenters, setModelBounds, primaryColor, secondaryColor, accentColor]);

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
        emissive: new THREE.Color('#000000'),
        emissiveIntensity: 0
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
    setDetectedMeshes,
    setMeshCenters,
    setModelBounds,
    setTextItems,
    textItems
  } = useStudioStore();

  // Create an isolated clone where EVERY mesh has its own unique, cloned material instance,
  // and center the model neatly at [0, 0.2, 0]
  const { clonedScene, boundingInfo } = useMemo(() => {
    if (!scene) return { clonedScene: null, boundingInfo: null };
    const clone = scene.clone(true);

    const box = new THREE.Box3().setFromObject(clone);
    const center = new THREE.Vector3();
    box.getCenter(center);
    const size = new THREE.Vector3();
    box.getSize(size);

    // Center model at [0, 0.2, 0]
    clone.position.set(-center.x, -center.y + 0.2, -center.z);

    clone.traverse((child) => {
      if (child.isMesh) {
        // Crucial: ensure each mesh has its own independent material instance
        child.material = child.material ? child.material.clone() : new THREE.MeshStandardMaterial();
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return {
      clonedScene: clone,
      boundingInfo: {
        center: new THREE.Vector3(0, 0.2, 0),
        size,
        min: new THREE.Vector3(-size.x / 2, 0.2 - size.y / 2, -size.z / 2),
        max: new THREE.Vector3(size.x / 2, 0.2 + size.y / 2, size.z / 2)
      }
    };
  }, [scene]);

  // Dynamically detect all meshes and compute 3D surface centers for text snapping ONCE per model
  useEffect(() => {
    if (!clonedScene || !boundingInfo) return;
    const detected = [];
    const centers = {};
    const dummy = new THREE.Object3D();

    clonedScene.updateMatrixWorld(true);

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

        child.geometry.computeBoundingBox();
        const bb = child.geometry.boundingBox.clone();
        bb.applyMatrix4(child.matrixWorld);

        const mCenter = new THREE.Vector3();
        bb.getCenter(mCenter);
        const mSize = new THREE.Vector3();
        bb.getSize(mSize);

        const isRear = mCenter.z < boundingInfo.center.z;
        const testRay = new THREE.Raycaster(
          new THREE.Vector3(mCenter.x, mCenter.y, isRear ? mCenter.z - 2.0 : mCenter.z + 2.0),
          new THREE.Vector3(0, 0, isRear ? 1.0 : -1.0)
        );
        const hits = testRay.intersectObject(child, true);
        let surfPos, rot;
        if (hits.length > 0) {
          const hit = hits[0];
          const wNorm = hit.face.normal.clone().transformDirection(child.matrixWorld).normalize();
          surfPos = hit.point.clone().addScaledVector(wNorm, 0.003);
          dummy.position.copy(surfPos);
          dummy.up.set(0, 1, 0);
          if (Math.abs(wNorm.y) > 0.90) dummy.up.set(0, 0, -1);
          dummy.lookAt(surfPos.clone().add(wNorm));
          rot = [dummy.rotation.x, dummy.rotation.y, dummy.rotation.z];
        } else {
          surfPos = new THREE.Vector3(mCenter.x, mCenter.y, isRear ? bb.min.z - 0.003 : bb.max.z + 0.003);
          rot = [0, isRear ? Math.PI : 0, 0];
        }

        centers[meshId] = {
          center: [
            Math.round(mCenter.x * 1000) / 1000,
            Math.round(mCenter.y * 1000) / 1000,
            Math.round(mCenter.z * 1000) / 1000
          ],
          size: [
            Math.round(mSize.x * 1000) / 1000,
            Math.round(mSize.y * 1000) / 1000,
            Math.round(mSize.z * 1000) / 1000
          ],
          surfacePosition: [
            Math.round(surfPos.x * 1000) / 1000,
            Math.round(surfPos.y * 1000) / 1000,
            Math.round(surfPos.z * 1000) / 1000
          ],
          rotation: [
            Math.round(rot[0] * 1000) / 1000,
            Math.round(rot[1] * 1000) / 1000,
            Math.round(rot[2] * 1000) / 1000
          ]
        };
      }
    });

    if (detected.length > 0) {
      setDetectedMeshes(detected);
    }
    setMeshCenters(centers);

    const boundsData = {
      center: [boundingInfo.center.x, boundingInfo.center.y, boundingInfo.center.z],
      size: [boundingInfo.size.x, boundingInfo.size.y, boundingInfo.size.z],
      min: [boundingInfo.min.x, boundingInfo.min.y, boundingInfo.min.z],
      max: [boundingInfo.max.x, boundingInfo.max.y, boundingInfo.max.z]
    };
    setModelBounds(boundsData);

    // Auto-fit initial text items onto this model surface!
    const frontZ = boundingInfo.max.z + 0.003;
    const backZ = boundingInfo.min.z - 0.003;
    const frontY = boundingInfo.center.y + (boundingInfo.size.y * 0.1);
    const autoScale = Math.min(0.85, Math.max(0.28, boundingInfo.size.x * 0.85));

    const currentItems = textItems || [];
    const updated = currentItems.map((item) => {
      if (item.id === 'team_name') {
        return {
          ...item,
          position: [0, Math.round(frontY * 1000) / 1000, Math.round(frontZ * 1000) / 1000],
          rotation: [0, 0, 0],
          scale: autoScale,
          visible: true
        };
      }
      if (item.id === 'player_number') {
        return {
          ...item,
          position: [0, Math.round((frontY - (boundingInfo.size.y * 0.18)) * 1000) / 1000, Math.round(frontZ * 1000) / 1000],
          rotation: [0, 0, 0],
          scale: Math.round(autoScale * 0.75 * 100) / 100,
          visible: false
        };
      }
      if (item.id === 'player_name') {
        return {
          ...item,
          position: [0, Math.round(frontY * 1000) / 1000, Math.round(backZ * 1000) / 1000],
          rotation: [0, Math.PI, 0],
          scale: autoScale,
          visible: false
        };
      }
      return item;
    });
    setTextItems(updated);
  }, [clonedScene, boundingInfo, activeModel, setDetectedMeshes, setMeshCenters, setModelBounds, setTextItems]);

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
          child.material.emissive.set('#000000');
          child.material.emissiveIntensity = 0;
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
  const { isDragging3D } = useStudioStore();

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
      enabled={!isDragging3D}
      autoRotate={autoRotate && !isDragging3D}
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

// ── Interactive 3D Draggable Text Item Component ──
function TextDecalPlane({ item, modelGroupRef }) {
  const meshRef = useRef();
  const { camera, gl } = useThree();
  const {
    selectedTextId,
    setSelectedTextId,
    updateTextItem,
    setIsDragging3D,
    show3DGizmo
  } = useStudioStore();

  const isSelected = selectedTextId === item.id;
  const isDraggingRef = useRef(false);
  const dummyObj = useMemo(() => new THREE.Object3D(), []);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);

  // Generate crisp dynamic text texture from HTML5 Canvas
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    const isNum = item.type === 'number';
    canvas.width = isNum ? 512 : 1024;
    canvas.height = isNum ? 512 : 256;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const fontSize = isNum ? 340 : 120;
    const fontFam = item.font || 'Impact';

    ctx.font = `900 ${fontSize}px "${fontFam}", sans-serif`;

    // Outline Stroke
    if (item.strokeWidth > 0 && item.strokeColor) {
      ctx.strokeStyle = item.strokeColor;
      ctx.lineWidth = item.strokeWidth * (isNum ? 6 : 4);
      ctx.lineJoin = 'round';
      ctx.strokeText(item.text || '', cx, cy);
    }

    // Text Fill
    ctx.fillStyle = item.color || '#F5A623';
    ctx.fillText(item.text || '', cx, cy);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
    return tex;
  }, [item.text, item.font, item.color, item.strokeColor, item.strokeWidth, item.type]);

  const isNum = item.type === 'number';
  const planeWidth = (isNum ? 0.32 : 0.65) * (item.scale || 1.0);
  const planeHeight = (isNum ? 0.32 : 0.18) * (item.scale || 1.0);

  // Combine surface normal alignment with user in-plane rotation angle
  const finalRotation = useMemo(() => {
    const d = new THREE.Object3D();
    if (item.rotation) {
      d.rotation.set(item.rotation[0], item.rotation[1], item.rotation[2]);
    }
    if (item.angle) {
      d.rotateZ(THREE.MathUtils.degToRad(item.angle));
    }
    return [d.rotation.x, d.rotation.y, d.rotation.z];
  }, [item.rotation, item.angle]);

  // Surface raycasting directly onto model geometry
  const projectToModelSurface = (clientX, clientY) => {
    if (!modelGroupRef?.current || !gl?.domElement) return null;
    const rect = gl.domElement.getBoundingClientRect();
    const ndcX = ((clientX - rect.left) / rect.width) * 2 - 1;
    const ndcY = -((clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera);
    const intersects = raycaster.intersectObjects(modelGroupRef.current.children, true);

    // Find first valid mesh that is part of the apparel/model (not a decal)
    const hit = intersects.find((h) => h.object?.isMesh && !h.object.userData?.isTextDecal && !h.object.userData?.isLogoDecal);
    if (!hit) return null;

    const worldNormal = hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize();
    const pos = hit.point.clone().addScaledVector(worldNormal, 0.003);

    dummyObj.position.copy(pos);
    dummyObj.up.set(0, 1, 0);
    if (Math.abs(worldNormal.y) > 0.90) {
      dummyObj.up.set(0, 0, -1);
    }
    dummyObj.lookAt(pos.clone().add(worldNormal));

    const baseRot = [dummyObj.rotation.x, dummyObj.rotation.y, dummyObj.rotation.z];

    if (item.angle) {
      dummyObj.rotateZ(THREE.MathUtils.degToRad(item.angle));
    }

    return {
      pos,
      rotWithAngle: dummyObj.rotation,
      baseRot,
      meshId: hit.object.name || hit.object.uuid
    };
  };

  // Direct Pointer Dragging
  const handlePointerDown = (e) => {
    e.stopPropagation();
    setSelectedTextId(item.id);
    isDraggingRef.current = true;
    setIsDragging3D(true);
    gl.domElement.style.cursor = 'grabbing';
  };

  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (!isDraggingRef.current) return;
      const hit = projectToModelSurface(e.clientX, e.clientY);
      if (hit) {
        if (meshRef.current) {
          meshRef.current.position.copy(hit.pos);
          meshRef.current.rotation.copy(hit.rotWithAngle);
        }
        updateTextItem(item.id, {
          position: [
            Math.round(hit.pos.x * 1000) / 1000,
            Math.round(hit.pos.y * 1000) / 1000,
            Math.round(hit.pos.z * 1000) / 1000
          ],
          rotation: [
            Math.round(hit.baseRot[0] * 1000) / 1000,
            Math.round(hit.baseRot[1] * 1000) / 1000,
            Math.round(hit.baseRot[2] * 1000) / 1000
          ],
          targetMeshId: hit.meshId
        });
      }
    };

    const handleGlobalUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging3D(false);
        if (gl?.domElement) gl.domElement.style.cursor = 'grab';
      }
    };

    window.addEventListener('pointermove', handleGlobalMove);
    window.addEventListener('pointerup', handleGlobalUp);
    return () => {
      window.removeEventListener('pointermove', handleGlobalMove);
      window.removeEventListener('pointerup', handleGlobalUp);
    };
  }, [camera, gl, modelGroupRef, item.id, item.angle, updateTextItem, setIsDragging3D]);

  if (!item.visible) return null;

  return (
    <>
      <mesh
        ref={meshRef}
        position={item.position}
        rotation={finalRotation}
        userData={{ isTextDecal: true }}
        onPointerDown={handlePointerDown}
        onPointerOver={(e) => {
          e.stopPropagation();
          gl.domElement.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          if (!isDraggingRef.current) gl.domElement.style.cursor = 'default';
        }}
      >
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial
          map={texture}
          transparent={true}
          opacity={1.0}
          depthTest={true}
          depthWrite={false}
          polygonOffset={true}
          polygonOffsetFactor={-3}
          polygonOffsetUnits={-3}
          side={THREE.FrontSide}
          toneMapped={false}
        />
      </mesh>

      {/* Optional 3D Transform Gizmo */}
      {show3DGizmo && isSelected && meshRef.current && (
        <TransformControls
          object={meshRef}
          mode="translate"
          size={0.5}
          onMouseDown={() => setIsDragging3D(true)}
          onMouseUp={() => {
            setIsDragging3D(false);
            if (meshRef.current) {
              updateTextItem(item.id, {
                position: [
                  Math.round(meshRef.current.position.x * 1000) / 1000,
                  Math.round(meshRef.current.position.y * 1000) / 1000,
                  Math.round(meshRef.current.position.z * 1000) / 1000
                ]
              });
            }
          }}
        />
      )}
    </>
  );
}

// ── Interactive 3D Draggable Logo / Emblem Component ──
function LogoDecalPlane({ item, modelGroupRef }) {
  const meshRef = useRef();
  const { camera, gl } = useThree();
  const {
    selectedLogoId,
    setSelectedLogoId,
    updateLogo,
    setIsDragging3D
  } = useStudioStore();

  const isSelected = selectedLogoId === item.id;
  const isDraggingRef = useRef(false);
  const dummyObj = useMemo(() => new THREE.Object3D(), []);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const [aspectRatio, setAspectRatio] = useState(1);

  // Load logo texture
  const texture = useMemo(() => {
    if (!item.url) return null;
    const loader = new THREE.TextureLoader();
    const tex = loader.load(item.url, (loadedTex) => {
      if (loadedTex.image?.width && loadedTex.image?.height) {
        setAspectRatio(loadedTex.image.width / loadedTex.image.height);
      }
    });
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [item.url]);

  const baseSize = 0.35 * (item.scale || 1.0);
  const planeWidth = aspectRatio >= 1 ? baseSize : baseSize * aspectRatio;
  const planeHeight = aspectRatio >= 1 ? baseSize / aspectRatio : baseSize;

  // Combine surface normal alignment with user in-plane rotation angle
  const finalRotation = useMemo(() => {
    const d = new THREE.Object3D();
    if (item.rotation) {
      d.rotation.set(item.rotation[0], item.rotation[1], item.rotation[2]);
    }
    if (item.angle) {
      d.rotateZ(THREE.MathUtils.degToRad(item.angle));
    }
    return [d.rotation.x, d.rotation.y, d.rotation.z];
  }, [item.rotation, item.angle]);

  // Surface raycasting directly onto model geometry
  const projectToModelSurface = (clientX, clientY) => {
    if (!modelGroupRef?.current || !gl?.domElement) return null;
    const rect = gl.domElement.getBoundingClientRect();
    const ndcX = ((clientX - rect.left) / rect.width) * 2 - 1;
    const ndcY = -((clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera);
    const intersects = raycaster.intersectObjects(modelGroupRef.current.children, true);

    const hit = intersects.find((h) => h.object?.isMesh && !h.object.userData?.isTextDecal && !h.object.userData?.isLogoDecal);
    if (!hit) return null;

    const worldNormal = hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize();
    const pos = hit.point.clone().addScaledVector(worldNormal, 0.0035);

    dummyObj.position.copy(pos);
    dummyObj.up.set(0, 1, 0);
    if (Math.abs(worldNormal.y) > 0.90) {
      dummyObj.up.set(0, 0, -1);
    }
    dummyObj.lookAt(pos.clone().add(worldNormal));

    const baseRot = [dummyObj.rotation.x, dummyObj.rotation.y, dummyObj.rotation.z];

    if (item.angle) {
      dummyObj.rotateZ(THREE.MathUtils.degToRad(item.angle));
    }

    return {
      pos,
      rotWithAngle: dummyObj.rotation,
      baseRot,
      meshId: hit.object.name || hit.object.uuid
    };
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setSelectedLogoId(item.id);
    isDraggingRef.current = true;
    setIsDragging3D(true);
    gl.domElement.style.cursor = 'grabbing';
  };

  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (!isDraggingRef.current) return;
      const hit = projectToModelSurface(e.clientX, e.clientY);
      if (hit) {
        if (meshRef.current) {
          meshRef.current.position.copy(hit.pos);
          meshRef.current.rotation.copy(hit.rotWithAngle);
        }
        updateLogo(item.id, {
          position: [
            Math.round(hit.pos.x * 1000) / 1000,
            Math.round(hit.pos.y * 1000) / 1000,
            Math.round(hit.pos.z * 1000) / 1000
          ],
          rotation: [
            Math.round(hit.baseRot[0] * 1000) / 1000,
            Math.round(hit.baseRot[1] * 1000) / 1000,
            Math.round(hit.baseRot[2] * 1000) / 1000
          ],
          targetMeshId: hit.meshId
        });
      }
    };

    const handleGlobalUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging3D(false);
        if (gl?.domElement) gl.domElement.style.cursor = 'grab';
      }
    };

    window.addEventListener('pointermove', handleGlobalMove);
    window.addEventListener('pointerup', handleGlobalUp);
    return () => {
      window.removeEventListener('pointermove', handleGlobalMove);
      window.removeEventListener('pointerup', handleGlobalUp);
    };
  }, [camera, gl, modelGroupRef, item.id, item.angle, updateLogo, setIsDragging3D]);

  if (!item.visible || !texture) return null;

  return (
    <mesh
      ref={meshRef}
      position={item.position || [0, 0.2, 0.15]}
      rotation={finalRotation}
      userData={{ isLogoDecal: true }}
      onPointerDown={handlePointerDown}
      onPointerOver={(e) => {
        e.stopPropagation();
        gl.domElement.style.cursor = 'grab';
      }}
      onPointerOut={() => {
        if (!isDraggingRef.current) gl.domElement.style.cursor = 'default';
      }}
    >
      <planeGeometry args={[planeWidth, planeHeight]} />
      <meshBasicMaterial
        map={texture}
        transparent={true}
        opacity={1.0}
        depthTest={true}
        depthWrite={false}
        polygonOffset={true}
        polygonOffsetFactor={-3}
        polygonOffsetUnits={-3}
        side={THREE.FrontSide}
        toneMapped={false}
      />
    </mesh>
  );
}

// ── Interactive 3D Text Layer Container ──
function Interactive3DTextLayer({ modelGroupRef }) {
  const { textItems } = useStudioStore();
  return (
    <group position={[0, 0, 0]}>
      {(textItems || []).map((item) => (
        <TextDecalPlane key={item.id} item={item} modelGroupRef={modelGroupRef} />
      ))}
    </group>
  );
}

// ── Interactive 3D Logos Layer Container ──
function Interactive3DLogosLayer({ modelGroupRef }) {
  const { logos } = useStudioStore();
  return (
    <group position={[0, 0, 0]}>
      {(logos || []).map((logo) => (
        <LogoDecalPlane key={logo.id} item={logo} modelGroupRef={modelGroupRef} />
      ))}
    </group>
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
  const modelGroupRef = useRef();

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

        {/* Garment Geometry & Surface Decal Layer */}
        <Suspense fallback={null}>
          <group ref={modelGroupRef} position={[0, 0, 0]}>
            {activeModel?.modelUrl ? (
              <CustomGlbModel
                url={activeModel.modelUrl}
                onSelectMesh={setSelectedMesh}
                selectedMeshId={selectedMeshId}
                hoveredMeshId={hoveredMeshId}
                onHoverMesh={setHoveredMesh}
              />
            ) : (
              <ProceduralJerseyModel
                onSelectMesh={setSelectedMesh}
                selectedMeshId={selectedMeshId}
                hoveredMeshId={hoveredMeshId}
                onHoverMesh={setHoveredMesh}
              />
            )}
          </group>

          {/* 3D Interactive Draggable & Positionable Text Layer (Surface Clamped) */}
          <Interactive3DTextLayer modelGroupRef={modelGroupRef} />

          {/* 3D Interactive Draggable & Positionable Logos Layer (Surface Clamped) */}
          <Interactive3DLogosLayer modelGroupRef={modelGroupRef} />

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
