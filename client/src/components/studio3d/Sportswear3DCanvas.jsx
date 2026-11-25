import React, { useRef, useEffect, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, Float, Html, Center, TransformControls } from '@react-three/drei';
import * as THREE from 'three';
import { DecalGeometry } from 'three/examples/jsm/geometries/DecalGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { useStudioStore, FABRIC_PRESETS } from './useStudioStore';
import { getFabricBumpTexture, getPatternTexture } from './FabricTextures';
import { decalPipeline } from './DecalCanvasPipeline';
import {
  RotateCw, RotateCcw, Plus, Minus, X, Move, Check, Eye, Maximize2, Minimize2, ZoomIn, ZoomOut,
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
    textItems,
    modelBounds,
    setSelectedTextId,
    setSelectedLogoId,
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
    // Clicking on garment cloth deselects text/logos; text is selected ONLY when clicked directly on its glyphs
    setSelectedTextId(null);
    setSelectedLogoId(null);
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
  const apiBase = (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
    ? 'http://localhost:5000'
    : 'https://leathercorporation-jmrv.vercel.app';
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
    setFrontSurface,
    setTextItems,
    textItems,
    logos,
    modelBounds,
    setSelectedTextId,
    setSelectedLogoId
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

        // Try raycasting from FRONT (+Z towards -Z) first so visible surface faces camera
        const frontTestRay = new THREE.Raycaster(
          new THREE.Vector3(mCenter.x, mCenter.y, boundingInfo.max.z + 2.0),
          new THREE.Vector3(0, 0, -1)
        );
        const frontHits = frontTestRay.intersectObject(child, true);
        let surfPos, rot;

        if (frontHits.length > 0) {
          const hit = frontHits[0];
          const wNorm = hit.face.normal.clone().transformDirection(child.matrixWorld).normalize();
          surfPos = hit.point.clone();
          dummy.position.copy(surfPos);
          dummy.up.set(0, 1, 0);
          if (Math.abs(wNorm.y) > 0.90) dummy.up.set(0, 0, -1);
          dummy.lookAt(surfPos.clone().add(wNorm));
          rot = [dummy.rotation.x, dummy.rotation.y, dummy.rotation.z];
        } else {
          // If no front hit (e.g. back only mesh), test from back
          const backTestRay = new THREE.Raycaster(
            new THREE.Vector3(mCenter.x, mCenter.y, boundingInfo.min.z - 2.0),
            new THREE.Vector3(0, 0, 1)
          );
          const backHits = backTestRay.intersectObject(child, true);
          if (backHits.length > 0) {
            const hit = backHits[0];
            const wNorm = hit.face.normal.clone().transformDirection(child.matrixWorld).normalize();
            surfPos = hit.point.clone();
            dummy.position.copy(surfPos);
            dummy.up.set(0, 1, 0);
            if (Math.abs(wNorm.y) > 0.90) dummy.up.set(0, 0, -1);
            dummy.lookAt(surfPos.clone().add(wNorm));
            rot = [dummy.rotation.x, dummy.rotation.y, dummy.rotation.z];
          } else {
            surfPos = new THREE.Vector3(mCenter.x, mCenter.y, bb.max.z);
            rot = [0, 0, 0];
          }
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

    // Cast ray to find exact physical front surface of the model (avoids 11-inch air gap!)
    const modelFrontY = boundingInfo.center.y + (boundingInfo.size.y * 0.1);
    const modelFrontRay = new THREE.Raycaster(
      new THREE.Vector3(0, modelFrontY, boundingInfo.max.z + 2.0),
      new THREE.Vector3(0, 0, -1)
    );
    const modelFrontHits = modelFrontRay.intersectObjects(clonedScene.children, true);
    let frontPos = new THREE.Vector3(0, modelFrontY, boundingInfo.center.z + 0.15);
    let frontRot = [0, 0, 0];
    let frontMeshId = null;

    if (modelFrontHits.length > 0) {
      const hit = modelFrontHits[0];
      const wNorm = hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize();
      frontPos = hit.point.clone();
      dummy.position.copy(frontPos);
      dummy.up.set(0, 1, 0);
      if (Math.abs(wNorm.y) > 0.90) dummy.up.set(0, 0, -1);
      dummy.lookAt(frontPos.clone().add(wNorm));
      frontRot = [dummy.rotation.x, dummy.rotation.y, dummy.rotation.z];
      frontMeshId = hit.object.name || hit.object.uuid;
    }

    // Cast ray to find physical back surface
    const modelBackRay = new THREE.Raycaster(
      new THREE.Vector3(0, modelFrontY, boundingInfo.min.z - 2.0),
      new THREE.Vector3(0, 0, 1)
    );
    const modelBackHits = modelBackRay.intersectObjects(clonedScene.children, true);
    let backPos = new THREE.Vector3(0, modelFrontY, boundingInfo.center.z - 0.15);
    let backRot = [0, Math.PI, 0];
    let backMeshId = null;

    if (modelBackHits.length > 0) {
      const hit = modelBackHits[0];
      const wNorm = hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize();
      backPos = hit.point.clone();
      dummy.position.copy(backPos);
      dummy.up.set(0, 1, 0);
      if (Math.abs(wNorm.y) > 0.90) dummy.up.set(0, 0, -1);
      dummy.lookAt(backPos.clone().add(wNorm));
      backRot = [dummy.rotation.x, dummy.rotation.y, dummy.rotation.z];
      backMeshId = hit.object.name || hit.object.uuid;
    }

    setFrontSurface({
      position: [Math.round(frontPos.x * 1000) / 1000, Math.round(frontPos.y * 1000) / 1000, Math.round(frontPos.z * 1000) / 1000],
      rotation: [Math.round(frontRot[0] * 1000) / 1000, Math.round(frontRot[1] * 1000) / 1000, Math.round(frontRot[2] * 1000) / 1000],
      meshId: null
    });

    // Auto-fit initial text items directly onto physical model surface
    const autoScale = Math.min(0.85, Math.max(0.28, boundingInfo.size.x * 0.85));

    const currentItems = textItems || [];
    const updated = currentItems.map((item) => {
      if (item.id === 'team_name') {
        return {
          ...item,
          position: [Math.round(frontPos.x * 1000) / 1000, Math.round(frontPos.y * 1000) / 1000, Math.round(frontPos.z * 1000) / 1000],
          rotation: [Math.round(frontRot[0] * 1000) / 1000, Math.round(frontRot[1] * 1000) / 1000, Math.round(frontRot[2] * 1000) / 1000],
          targetMeshId: null,
          scale: autoScale,
          visible: true
        };
      }
      if (item.id === 'player_number') {
        return {
          ...item,
          position: [Math.round(frontPos.x * 1000) / 1000, Math.round((frontPos.y - (boundingInfo.size.y * 0.16)) * 1000) / 1000, Math.round(frontPos.z * 1000) / 1000],
          rotation: [Math.round(frontRot[0] * 1000) / 1000, Math.round(frontRot[1] * 1000) / 1000, Math.round(frontRot[2] * 1000) / 1000],
          targetMeshId: null,
          scale: Math.round(autoScale * 0.75 * 100) / 100,
          visible: item.visible ?? false
        };
      }
      if (item.id === 'player_name') {
        return {
          ...item,
          position: [Math.round(backPos.x * 1000) / 1000, Math.round(backPos.y * 1000) / 1000, Math.round(backPos.z * 1000) / 1000],
          rotation: [Math.round(backRot[0] * 1000) / 1000, Math.round(backRot[1] * 1000) / 1000, Math.round(backRot[2] * 1000) / 1000],
          targetMeshId: null,
          scale: autoScale,
          visible: item.visible ?? false
        };
      }
      return item;
    });
    setTextItems(updated);
  }, [clonedScene, boundingInfo, activeModel, setDetectedMeshes, setMeshCenters, setModelBounds, setFrontSurface, setTextItems]);

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
        // Clicking on garment cloth deselects text/logos; text is selected ONLY when clicked directly on its glyphs
        setSelectedTextId(null);
        setSelectedLogoId(null);
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

// ── Camera Controller for Smooth Orbit Interpolation & Dynamic Framing ──
function CameraRig({ viewAngle, cameraResetCount, autoRotate }) {
  const { camera } = useThree();
  const controlsRef = useRef();
  const { isDragging3D, modelBounds } = useStudioStore();

  const modelCenterY = modelBounds?.center?.[1] ?? 0.2;
  const maxDim = modelBounds?.size
    ? Math.max(modelBounds.size[0], modelBounds.size[1], modelBounds.size[2])
    : 0.8;
  const camDist = Math.max(1.25, maxDim * 2.2);

  const targetPositions = useMemo(() => ({
    front: [0, modelCenterY, camDist],
    back: [0, modelCenterY, -camDist],
    left: [-camDist, modelCenterY, 0],
    right: [camDist, modelCenterY, 0],
    top: [0, modelCenterY + camDist, 0.2],
    perspective: [camDist * 0.45, modelCenterY + (maxDim * 0.25), camDist * 0.9]
  }), [modelCenterY, camDist, maxDim]);

  useEffect(() => {
    const targetPos = targetPositions[viewAngle] || targetPositions.perspective;
    camera.position.set(...targetPos);
    camera.lookAt(0, modelCenterY, 0);
    if (controlsRef.current) {
      controlsRef.current.target.set(0, modelCenterY, 0);
      controlsRef.current.update();
    }
  }, [viewAngle, cameraResetCount, camera, targetPositions, modelCenterY]);

  // Handle window/container resize to prevent off-center shifts
  useEffect(() => {
    const handleResize = () => {
      if (controlsRef.current) {
        controlsRef.current.target.set(0, modelCenterY, 0);
        controlsRef.current.update();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [modelCenterY]);

  return (
    <OrbitControls
      ref={controlsRef}
      enabled={!isDragging3D}
      autoRotate={autoRotate && !isDragging3D}
      autoRotateSpeed={2.5}
      enableDamping
      dampingFactor={0.08}
      minDistance={0.8}
      maxDistance={4.5}
      maxPolarAngle={Math.PI / 1.7}
      minPolarAngle={Math.PI / 6}
    />
  );
}

// Helper to cull any inward-facing or inner-lining triangles from DecalGeometry
function cullDecalInnerTriangles(geom, outwardNormal, minDot = 0.25) {
  if (!geom || !geom.attributes.position || geom.attributes.position.count === 0) return null;
  const pos = geom.attributes.position;
  const norm = geom.attributes.normal;
  const uv = geom.attributes.uv;

  const newPos = [];
  const newNorm = [];
  const newUv = [];

  const n0 = new THREE.Vector3();
  const n1 = new THREE.Vector3();
  const n2 = new THREE.Vector3();
  const triNorm = new THREE.Vector3();

  for (let i = 0; i < pos.count; i += 3) {
    if (norm) {
      n0.fromBufferAttribute(norm, i);
      n1.fromBufferAttribute(norm, i + 1);
      n2.fromBufferAttribute(norm, i + 2);
      triNorm.copy(n0).add(n1).add(n2).normalize();
    } else {
      const v0 = new THREE.Vector3().fromBufferAttribute(pos, i);
      const v1 = new THREE.Vector3().fromBufferAttribute(pos, i + 1);
      const v2 = new THREE.Vector3().fromBufferAttribute(pos, i + 2);
      triNorm.subVectors(v1, v0).cross(new THREE.Vector3().subVectors(v2, v0)).normalize();
    }

    // Keep ONLY faces facing outward in the projector direction
    if (triNorm.dot(outwardNormal) >= minDot) {
      for (let k = 0; k < 3; k++) {
        newPos.push(pos.getX(i + k), pos.getY(i + k), pos.getZ(i + k));
        if (norm) newNorm.push(norm.getX(i + k), norm.getY(i + k), norm.getZ(i + k));
        if (uv) newUv.push(uv.getX(i + k), uv.getY(i + k));
      }
    }
  }

  if (newPos.length === 0) return null;
  const result = new THREE.BufferGeometry();
  result.setAttribute('position', new THREE.Float32BufferAttribute(newPos, 3));
  if (newNorm.length > 0) result.setAttribute('normal', new THREE.Float32BufferAttribute(newNorm, 3));
  if (newUv.length > 0) result.setAttribute('uv', new THREE.Float32BufferAttribute(newUv, 2));
  return result;
}

// ── Shared Multi-Mesh Surface Decal Geometry Builder ──
function buildDecalGeometry(modelGroup, posVec, orientEuler, sizeVec, angle = 0, modelBounds = null) {
  if (!modelGroup) return null;
  const p = Array.isArray(posVec) ? new THREE.Vector3(...posVec) : (posVec ? posVec.clone() : new THREE.Vector3());
  let rotEuler = Array.isArray(orientEuler)
    ? new THREE.Euler(...orientEuler)
    : orientEuler instanceof THREE.Euler
      ? orientEuler.clone()
      : new THREE.Euler(orientEuler?.x || 0, orientEuler?.y || 0, orientEuler?.z || 0);

  const centerZ = modelBounds?.center?.[2] || 0;

  // Check if decal is back-facing (p.z is negative, or rotation around Y or X is near PI)
  const isBack = p.z < (centerZ - 0.01) ||
                 Math.abs(rotEuler.y - Math.PI) < 1.2 ||
                 Math.abs(rotEuler.y + Math.PI) < 1.2 ||
                 Math.abs(rotEuler.x - Math.PI) < 1.2;

  // 1. Automatic Surface Snapping:
  // Raycast straight into the physical model at (p.x, p.y) to find the exact exterior surface Z and surface normal
  const ray = new THREE.Raycaster(
    new THREE.Vector3(p.x, p.y, isBack ? -3.0 : 3.0),
    new THREE.Vector3(0, 0, isBack ? 1 : -1)
  );

  const allHits = ray.intersectObjects(modelGroup.children, true).filter(
    (h) => h.object?.isMesh &&
           !h.object.userData?.isTextDecal &&
           !h.object.userData?.isLogoDecal &&
           !h.object.name?.startsWith('E_') &&
           (h.object.geometry?.attributes?.position?.count || 0) > 40
  );

  // Exterior-only hit filter: normal must face against ray direction, and point must be on exterior side
  const exteriorHits = allHits.filter((h) => {
    const wNorm = h.face.normal.clone().transformDirection(h.object.matrixWorld).normalize();
    if (isBack) {
      return wNorm.z < -0.2 && h.point.z <= (centerZ + 0.02);
    } else {
      return wNorm.z > 0.2 && h.point.z >= (centerZ - 0.02);
    }
  });

  if (exteriorHits.length > 0) {
    const hit = exteriorHits[0];
    p.copy(hit.point);
    const worldNorm = hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize();

    // Dampen sharp fly-seam or zipper crease X tilt near the garment centerline
    const centerX = modelBounds?.center?.[0] || 0;
    const centerDist = Math.abs(p.x - centerX);
    if (centerDist < 0.08) {
      worldNorm.x *= (centerDist / 0.08);
      worldNorm.normalize();
    }

    const dummy = new THREE.Object3D();
    dummy.position.copy(p);

    if (isBack) {
      dummy.rotation.set(0, Math.PI, 0);
      if (Math.abs(worldNorm.z) > 0.1) {
        dummy.rotation.x = -Math.atan2(worldNorm.y, Math.abs(worldNorm.z));
      }
      if (angle) {
        dummy.rotateZ(THREE.MathUtils.degToRad(-angle));
      }
    } else {
      dummy.up.set(0, 1, 0);
      if (Math.abs(worldNorm.y) > 0.90) {
        dummy.up.set(0, 0, -1);
      }
      dummy.lookAt(p.clone().add(worldNorm));
      if (angle) {
        dummy.rotateZ(THREE.MathUtils.degToRad(angle));
      }
    }
    rotEuler = dummy.rotation;
  } else {
    // If no direct hit at this Y (e.g. above front waistband or below hem),
    // search nearby Y offsets to clamp to the nearest valid exterior surface
    for (const dy of [-0.015, -0.03, -0.05, 0.015, 0.03]) {
      const fallbackRay = new THREE.Raycaster(
        new THREE.Vector3(p.x, p.y + dy, isBack ? -3.0 : 3.0),
        new THREE.Vector3(0, 0, isBack ? 1 : -1)
      );
      const fbHits = fallbackRay.intersectObjects(modelGroup.children, true).filter(
        (h) => h.object?.isMesh &&
               !h.object.userData?.isTextDecal &&
               !h.object.userData?.isLogoDecal &&
               !h.object.name?.startsWith('E_') &&
               (h.object.geometry?.attributes?.position?.count || 0) > 40
      );
      const fbExterior = fbHits.filter((h) => {
        const wNorm = h.face.normal.clone().transformDirection(h.object.matrixWorld).normalize();
        if (isBack) {
          return wNorm.z < -0.2 && h.point.z <= (centerZ + 0.02);
        } else {
          return wNorm.z > 0.2 && h.point.z >= (centerZ - 0.02);
        }
      });
      if (fbExterior.length > 0) {
        const hit = fbExterior[0];
        p.copy(hit.point);
        const worldNorm = hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize();
        const centerX = modelBounds?.center?.[0] || 0;
        const centerDist = Math.abs(p.x - centerX);
        if (centerDist < 0.08) {
          worldNorm.x *= (centerDist / 0.08);
          worldNorm.normalize();
        }

        const dummy = new THREE.Object3D();
        dummy.position.copy(p);
        if (isBack) {
          dummy.rotation.set(0, Math.PI, 0);
          if (Math.abs(worldNorm.z) > 0.1) dummy.rotation.x = -Math.atan2(worldNorm.y, Math.abs(worldNorm.z));
          if (angle) dummy.rotateZ(THREE.MathUtils.degToRad(-angle));
        } else {
          dummy.up.set(0, 1, 0);
          if (Math.abs(worldNorm.y) > 0.90) dummy.up.set(0, 0, -1);
          dummy.lookAt(p.clone().add(worldNorm));
          if (angle) dummy.rotateZ(THREE.MathUtils.degToRad(angle));
        }
        rotEuler = dummy.rotation;
        break;
      }
    }
  }

  // 2. Outward projection normal & conforming depth bounding box
  const outwardNormal = new THREE.Vector3(0, 0, 1).applyEuler(rotEuler);
  const effectiveDepth = Math.max(0.20, Math.min(sizeVec.z || 0.24, 0.35));
  const effectiveSize = new THREE.Vector3(sizeVec.x, sizeVec.y, effectiveDepth);
  const decalBox = new THREE.Box3().setFromCenterAndSize(p, effectiveSize);
  const validGeoms = [];

  const centerX = modelBounds?.center?.[0] || 0;
  const distFromCenter = p.x - centerX;
  const isLeftSide = distFromCenter < -0.025;
  const isRightSide = distFromCenter > 0.025;

  modelGroup.traverse((child) => {
    if (
      child.isMesh &&
      !child.userData?.isTextDecal &&
      !child.userData?.isLogoDecal &&
      !child.name?.startsWith('E_') && // exclude accessory drawstrings
      (child.geometry?.attributes?.position?.count || 0) > 40
    ) {
      if (!child.geometry) return;
      if (!child.geometry.boundingBox) child.geometry.computeBoundingBox();
      const childBox = child.geometry.boundingBox.clone().applyMatrix4(child.matrixWorld);

      // Prevent decal placed on one limb from projecting across onto the opposite limb (e.g. left leg onto right leg)
      const childCenterX = (childBox.min.x + childBox.max.x) / 2;
      const childDist = childCenterX - centerX;
      if (isLeftSide && childDist > 0.03) return;
      if (isRightSide && childDist < -0.03) return;

      if (decalBox.intersectsBox(childBox)) {
        try {
          const rawGeom = new DecalGeometry(child, p, rotEuler, effectiveSize);
          if (rawGeom && rawGeom.attributes.position && rawGeom.attributes.position.count > 0) {
            // Strictly cull any inward-facing or inner-lining triangles, allowing smooth cylinder wrapping
            const culledGeom = cullDecalInnerTriangles(rawGeom, outwardNormal, -0.20);
            if (culledGeom && culledGeom.attributes.position && culledGeom.attributes.position.count > 0) {
              validGeoms.push(culledGeom);
            }
          }
        } catch (e) {}
      }
    }
  });

  if (validGeoms.length === 0) return null;
  if (validGeoms.length === 1) return validGeoms[0];
  try {
    return mergeGeometries(validGeoms);
  } catch (e) {
    return validGeoms[0];
  }
}

// ── Interactive On-Model Transform Gizmo (Figma / IDE Style with Corner Resize & Top Rotate) ──
function DecalTransformGizmo({
  position,
  rotation,
  angle = 0,
  scale = 1.0,
  width = 0.3,
  height = 0.1,
  label = 'Text',
  onScaleChange,
  onAngleChange,
  onDeselect,
  onStartMove,
  setIsDragging3D
}) {
  const boxRef = useRef(null);
  const { size } = useThree();

  // Convert 3D physical meters directly to CSS pixels in Drei's <Html distanceFactor={1.8}>
  // Formula: CSS_pixels = 3D_meters * (canvas_height / distanceFactor)
  // This ensures the dashed bounding box tightly hugs the actual text glyphs with minimal 2px padding
  const pxPerMeter = (size?.height || 600) / 1.8;
  const boxWidth = Math.max(14, Math.round(width * pxPerMeter) + 4);
  const boxHeight = Math.max(10, Math.round(height * pxPerMeter) + 4);

  // 1. Interactive Corner Resize Handlers (Chhota / Bara / Scale)
  const handleResizePointerDown = (e, corner) => {
    e.stopPropagation();
    e.preventDefault();
    if (!boxRef.current) return;

    const rect = boxRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const initialDist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
    const initialScale = scale;

    setIsDragging3D(true);

    const onPointerMove = (moveEv) => {
      moveEv.stopPropagation();
      const curDist = Math.hypot(moveEv.clientX - centerX, moveEv.clientY - centerY);
      const ratio = curDist / Math.max(initialDist, 10);
      const nextScale = Math.round(Math.min(2.5, Math.max(0.25, initialScale * ratio)) * 100) / 100;
      onScaleChange(nextScale);
    };

    const onPointerUp = (upEv) => {
      upEv.stopPropagation();
      setIsDragging3D(false);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  // 2. Interactive Top Circular Knob Rotate Handler (Rotate / Ghumayein)
  const handleRotatePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!boxRef.current) return;

    const rect = boxRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const initialMouseAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    const initialAngle = angle;

    setIsDragging3D(true);

    const onPointerMove = (moveEv) => {
      moveEv.stopPropagation();
      const curMouseAngle = Math.atan2(moveEv.clientY - centerY, moveEv.clientX - centerX) * (180 / Math.PI);
      const delta = curMouseAngle - initialMouseAngle;
      let nextAngle = Math.round(initialAngle + delta);

      // Normalize to [-180, 180]
      while (nextAngle > 180) nextAngle -= 360;
      while (nextAngle < -180) nextAngle += 360;

      // Magnetic snap within 3 degrees
      [-180, -90, -45, 0, 45, 90, 180].forEach((snap) => {
        if (Math.abs(nextAngle - snap) <= 3) {
          nextAngle = snap;
        }
      });

      onAngleChange(nextAngle);
    };

    const onPointerUp = (upEv) => {
      upEv.stopPropagation();
      setIsDragging3D(false);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  // 3. Move drag on bounding box body
  const handleBoxPointerDown = (e) => {
    if (e.target.closest('button') || e.target.closest('[data-handle]')) return;
    e.stopPropagation();
    if (onStartMove) {
      onStartMove(e);
    }
  };

  return (
    <Html
      position={[position.x, position.y, position.z]}
      center
      distanceFactor={1.8}
      zIndexRange={[100, 0]}
      style={{
        pointerEvents: 'none',
        userSelect: 'none'
      }}
    >
      <div
        ref={boxRef}
        style={{
          width: `${boxWidth}px`,
          height: `${boxHeight}px`,
          transform: `rotate(${angle}deg)`,
          transformOrigin: 'center center',
          pointerEvents: 'auto'
        }}
        className="relative group cursor-move select-none rounded-[2px] border border-dashed border-[#F26522] bg-[#F26522]/5 transition-colors hover:bg-[#F26522]/10 shadow-[0_0_0_1px_rgba(255,255,255,0.7)]"
        onPointerDown={handleBoxPointerDown}
      >
        {/* Top Rotation Stem & Circular Knob (Snug, compact) */}
        <div
          data-handle="rotate"
          style={{
            position: 'absolute',
            top: '-14px',
            left: '50%',
            transform: 'translateX(-50%)',
            pointerEvents: 'auto'
          }}
          className="flex flex-col items-center"
          onPointerDown={handleRotatePointerDown}
        >
          <div
            className="w-3.5 h-3.5 rounded-full bg-white border border-[#F26522] text-[#F26522] hover:bg-orange-50 hover:scale-115 shadow-xs flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform"
            title="Drag to Rotate (Ghumayein)"
          >
            <RotateCw size={8} className="stroke-[2.5]" />
          </div>
          <div className="w-[1px] h-[4px] bg-[#F26522]" />
        </div>

        {/* 4 Compact Corner Resize Handles */}
        <div
          data-handle="scale-tl"
          onPointerDown={(e) => handleResizePointerDown(e, 'tl')}
          style={{ position: 'absolute', top: '-3px', left: '-3px', pointerEvents: 'auto' }}
          className="w-2 h-2 bg-white border border-[#F26522] rounded-full shadow-xs cursor-nwse-resize hover:scale-125 transition-transform"
          title="Drag to Resize"
        />
        <div
          data-handle="scale-tr"
          onPointerDown={(e) => handleResizePointerDown(e, 'tr')}
          style={{ position: 'absolute', top: '-3px', right: '-3px', pointerEvents: 'auto' }}
          className="w-2 h-2 bg-white border border-[#F26522] rounded-full shadow-xs cursor-nesw-resize hover:scale-125 transition-transform"
          title="Drag to Resize"
        />
        <div
          data-handle="scale-bl"
          onPointerDown={(e) => handleResizePointerDown(e, 'bl')}
          style={{ position: 'absolute', bottom: '-3px', left: '-3px', pointerEvents: 'auto' }}
          className="w-2 h-2 bg-white border border-[#F26522] rounded-full shadow-xs cursor-nesw-resize hover:scale-125 transition-transform"
          title="Drag to Resize"
        />
        <div
          data-handle="scale-br"
          onPointerDown={(e) => handleResizePointerDown(e, 'br')}
          style={{ position: 'absolute', bottom: '-3px', right: '-3px', pointerEvents: 'auto' }}
          className="w-2 h-2 bg-white border border-[#F26522] rounded-full shadow-xs cursor-nwse-resize hover:scale-125 transition-transform"
          title="Drag to Resize"
        />
      </div>
    </Html>
  );
}

// ── Interactive 3D Draggable Text Item Component (Conforming DecalGeometry) ──
function TextDecalPlane({ item, modelGroupRef }) {
  const { camera, gl } = useThree();
  const {
    selectedTextId,
    setSelectedTextId,
    setSelectedMesh,
    setActiveControlTab,
    updateTextItem,
    setIsDragging3D,
    modelRevision,
    modelBounds
  } = useStudioStore();

  const isSelected = selectedTextId === item.id;
  const isDraggingRef = useRef(false);
  const dummyObj = useMemo(() => new THREE.Object3D(), []);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const [liveHit, setLiveHit] = useState(null);
  const liveHitRef = useRef(null);

  // Current active position and rotation (live while dragging, else from item)
  const currentPos = useMemo(() => {
    if (liveHit?.pos) return liveHit.pos;
    if (Array.isArray(item.position)) return new THREE.Vector3(...item.position);
    return item.position || new THREE.Vector3(0, 0.25, 0.15);
  }, [liveHit, item.position]);

  const currentRotation = useMemo(() => {
    if (liveHit?.rotWithAngle) return liveHit.rotWithAngle;
    const d = new THREE.Object3D();
    if (item.rotation) {
      d.rotation.set(item.rotation[0], item.rotation[1], item.rotation[2]);
    }
    if (item.angle) {
      d.rotateZ(THREE.MathUtils.degToRad(item.angle));
    }
    return d.rotation;
  }, [liveHit, item.rotation, item.angle]);

  // Surface Normal Vector for Hit-Test Proxy Placement & Camera Facing Check
  const normalVec = useMemo(() => {
    const v = new THREE.Vector3(0, 0, 1);
    v.applyEuler(currentRotation);
    return v;
  }, [currentRotation]);

  const [facingCamera, setFacingCamera] = useState(true);
  useFrame(() => {
    if (!camera) return;
    const toCam = camera.position.clone().sub(currentPos).normalize();
    const facing = normalVec.dot(toCam) > 0.05;
    if (facing !== facingCamera) {
      setFacingCamera(facing);
    }
  });

  const isNum = item.type === 'number';
  const isStacked = Boolean(item.stacked && item.text && item.text.trim().includes(' '));

  // Detect whether current placement is on a limb (leg or sleeve) vs chest/torso
  const centerX = modelBounds?.center?.[0] || 0;
  const currentX = currentPos?.x ?? 0;
  const distFromCenter = Math.abs(currentX - centerX);
  const isOnLimb = distFromCenter > 0.035;

  // Generate dynamic canvas texture and tight glyph bounds
  const canvasRef = useRef(null);
  const { texture, widthRatio, heightRatio } = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = isStacked ? 512 : (isNum ? 512 : 256);
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    canvasRef.current = canvas;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const cx = canvas.width / 2;
    const fontFam = item.font || 'Impact';

    let glyphWidth = 200;
    let glyphHeight = 80;

    if (isStacked) {
      // Split into 2 stacked lines
      const words = (item.text || '').trim().split(/\s+/);
      let line1 = '';
      let line2 = '';
      if (words.length === 2) {
        line1 = words[0];
        line2 = words[1];
      } else {
        const mid = Math.ceil(words.length / 2);
        line1 = words.slice(0, mid).join(' ');
        line2 = words.slice(mid).join(' ');
      }

      const targetFontSize = 190;
      const maxLineWidth = canvas.width - 60; // 30px side padding
      ctx.font = `900 ${targetFontSize}px "${fontFam}", sans-serif`;
      const w1 = ctx.measureText(line1).width;
      const w2 = ctx.measureText(line2).width;
      const maxW = Math.max(w1, w2, 1);
      const actualFontSize = maxW > maxLineWidth
        ? Math.floor(targetFontSize * (maxLineWidth / maxW))
        : targetFontSize;

      ctx.font = `900 ${actualFontSize}px "${fontFam}", sans-serif`;
      const lineGap = actualFontSize * 1.05;
      const cy1 = (canvas.height / 2) - (lineGap / 2);
      const cy2 = (canvas.height / 2) + (lineGap / 2);

      const m1 = ctx.measureText(line1);
      const m2 = ctx.measureText(line2);
      const width1 = (m1.actualBoundingBoxLeft !== undefined && m1.actualBoundingBoxRight !== undefined)
        ? (m1.actualBoundingBoxLeft + m1.actualBoundingBoxRight)
        : m1.width;
      const width2 = (m2.actualBoundingBoxLeft !== undefined && m2.actualBoundingBoxRight !== undefined)
        ? (m2.actualBoundingBoxLeft + m2.actualBoundingBoxRight)
        : m2.width;
      glyphWidth = Math.max(width1, width2);
      glyphHeight = actualFontSize * 2.1;

      [ { text: line1, y: cy1 }, { text: line2, y: cy2 } ].forEach(({ text, y }) => {
        if (item.strokeWidth > 0 && item.strokeColor) {
          ctx.strokeStyle = item.strokeColor;
          ctx.lineWidth = item.strokeWidth * 5;
          ctx.lineJoin = 'round';
          ctx.strokeText(text, cx, y);
        }
        ctx.fillStyle = item.color || '#F5A623';
        ctx.fillText(text, cx, y);
      });
    } else {
      // Single line text with precise glyph bounding box measurement
      const cy = canvas.height / 2;
      const fontSize = isNum ? 340 : 130;
      const maxTextWidth = canvas.width - 60; // 30px side padding

      ctx.font = `900 ${fontSize}px "${fontFam}", sans-serif`;
      const metrics = ctx.measureText(item.text || '');
      const actualFontSize = metrics.width > maxTextWidth
        ? Math.floor(fontSize * (maxTextWidth / metrics.width))
        : fontSize;
      ctx.font = `900 ${actualFontSize}px "${fontFam}", sans-serif`;

      const finalMetrics = ctx.measureText(item.text || '');
      const measuredW = (finalMetrics.actualBoundingBoxLeft !== undefined && finalMetrics.actualBoundingBoxRight !== undefined)
        ? (finalMetrics.actualBoundingBoxLeft + finalMetrics.actualBoundingBoxRight)
        : finalMetrics.width;
      const measuredH = (finalMetrics.actualBoundingBoxAscent !== undefined && finalMetrics.actualBoundingBoxDescent !== undefined)
        ? (finalMetrics.actualBoundingBoxAscent + finalMetrics.actualBoundingBoxDescent)
        : (actualFontSize * 0.85);

      const strokePad = (item.strokeWidth > 0 && item.strokeColor) ? (item.strokeWidth * (isNum ? 6 : 4)) : 0;
      glyphWidth = measuredW + strokePad;
      glyphHeight = measuredH + strokePad;

      if (item.strokeWidth > 0 && item.strokeColor) {
        ctx.strokeStyle = item.strokeColor;
        ctx.lineWidth = strokePad;
        ctx.lineJoin = 'round';
        ctx.strokeText(item.text || '', cx, cy);
      }

      ctx.fillStyle = item.color || '#F5A623';
      ctx.fillText(item.text || '', cx, cy);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;

    // Tight ratio of the actual drawn text glyphs compared to full canvas
    const wRatio = Math.min(1.0, Math.max(0.05, (glyphWidth + 4) / canvas.width));
    const hRatio = Math.min(1.0, Math.max(0.05, (glyphHeight + 4) / canvas.height));

    return {
      texture: tex,
      widthRatio: wRatio,
      heightRatio: hRatio
    };
  }, [item.text, item.font, item.color, item.strokeColor, item.strokeWidth, item.type, isStacked]);

  // Dimension calculations:
  // On a limb (leg or sleeve), base size is calibrated to the physical printable width of the limb
  // so text NEVER spills past the limb's silhouette into empty space!
  let baseWidth, baseHeight;
  if (isNum) {
    baseWidth = isOnLimb ? 0.16 : 0.26;
    baseHeight = isOnLimb ? 0.16 : 0.26;
  } else if (isStacked) {
    baseWidth = isOnLimb ? 0.18 : 0.28;
    baseHeight = isOnLimb ? 0.18 : 0.24;
  } else {
    // Single line text
    baseWidth = isOnLimb ? 0.19 : 0.36;
    baseHeight = isOnLimb ? 0.065 : 0.11;
  }

  const scaleVal = item.scale || 1.0;
  // Bounded scale on limbs: prevents horizontal projection from exceeding visible leg cylinder
  const maxLimbWidth = 0.21; // physical width of leg
  const rawWidth = baseWidth * scaleVal;
  const planeWidth = isOnLimb ? Math.min(rawWidth, maxLimbWidth) : rawWidth;
  const planeHeight = baseHeight * scaleVal;
  const projDepth = 0.28;

  // Tight physical bounds of the actual text on the model surface
  const tightWidth = planeWidth * (widthRatio || 1.0);
  const tightHeight = planeHeight * (heightRatio || 1.0);

  const sizeVec = useMemo(() => new THREE.Vector3(planeWidth, planeHeight, projDepth), [planeWidth, planeHeight, projDepth]);

  // Build true conforming 3D DecalGeometry on underlying mesh surface(s)
  const decalGeom = useMemo(() => {
    if (!modelGroupRef?.current) return null;
    return buildDecalGeometry(
      modelGroupRef.current,
      currentPos,
      currentRotation,
      sizeVec,
      item.angle || 0,
      modelBounds
    );
  }, [modelGroupRef, currentPos, currentRotation, sizeVec, modelRevision, item.angle, modelBounds]);

  // Surface raycasting directly onto model geometry
  const projectToModelSurface = (clientX, clientY) => {
    if (!modelGroupRef?.current || !gl?.domElement) return null;
    const rect = gl.domElement.getBoundingClientRect();
    const ndcX = ((clientX - rect.left) / rect.width) * 2 - 1;
    const ndcY = -((clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera);
    const intersects = raycaster.intersectObjects(modelGroupRef.current.children, true);

    const centerX = modelBounds?.center?.[0] || 0;
    const centerZ = modelBounds?.center?.[2] || 0;

    const hit = intersects.find((h) => {
      if (!h.object?.isMesh || h.object.userData?.isTextDecal || h.object.userData?.isLogoDecal || h.object.name?.startsWith('E_')) {
        return false;
      }
      if ((h.object.geometry?.attributes?.position?.count || 0) <= 40) return false;
      const wNorm = h.face.normal.clone().transformDirection(h.object.matrixWorld).normalize();
      // Must face towards camera
      if (wNorm.dot(raycaster.ray.direction) >= -0.15) return false;
      // Must face outward from body center (exclude interior lining / inner cavities)
      const radVec = new THREE.Vector2(h.point.x - centerX, h.point.z - centerZ).normalize();
      const norm2D = new THREE.Vector2(wNorm.x, wNorm.z);
      if (radVec.dot(norm2D) < -0.1) return false;
      return true;
    });
    if (!hit) return null;

    const worldNormal = hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize();
    const pos = hit.point.clone();

    // Dampen sharp fly-seam or zipper crease X tilt near the centerline
    const centerDist = Math.abs(pos.x - centerX);
    if (centerDist < 0.08) {
      worldNormal.x *= (centerDist / 0.08);
      worldNormal.normalize();
    }

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
      rotWithAngle: dummyObj.rotation.clone(),
      baseRot,
      meshId: hit.object.name || hit.object.uuid
    };
  };

  const handlePointerDown = (e) => {
    // Exact Word / Glyph Hit-Testing: check pixel transparency at click coordinate
    if (e.uv && canvasRef.current) {
      const u = e.uv.x;
      const v = e.uv.y;
      const canvasX = Math.floor(u * canvasRef.current.width);
      const canvasY = Math.floor((1 - v) * canvasRef.current.height);
      if (canvasX >= 0 && canvasX < canvasRef.current.width && canvasY >= 0 && canvasY < canvasRef.current.height) {
        try {
          const ctx = canvasRef.current.getContext('2d', { willReadFrequently: true });
          const alpha = ctx.getImageData(canvasX, canvasY, 1, 1).data[3];
          if (alpha < 15) {
            // Click was in transparent cloth space outside text words!
            // Do not select text, deselect and let event proceed to cloth
            setSelectedTextId(null);
            return;
          }
        } catch (err) {}
      }
    }

    e.stopPropagation();
    setSelectedTextId(item.id);
    setSelectedMesh(null);
    setActiveControlTab('typography');
    isDraggingRef.current = true;
    setIsDragging3D(true);
    gl.domElement.style.cursor = 'grabbing';
  };

  const handlePointerOver = (e) => {
    if (e.uv && canvasRef.current) {
      const u = e.uv.x;
      const v = e.uv.y;
      const canvasX = Math.floor(u * canvasRef.current.width);
      const canvasY = Math.floor((1 - v) * canvasRef.current.height);
      if (canvasX >= 0 && canvasX < canvasRef.current.width && canvasY >= 0 && canvasY < canvasRef.current.height) {
        try {
          const ctx = canvasRef.current.getContext('2d', { willReadFrequently: true });
          const alpha = ctx.getImageData(canvasX, canvasY, 1, 1).data[3];
          if (alpha < 15) {
            if (!isDraggingRef.current) gl.domElement.style.cursor = 'default';
            return;
          }
        } catch (err) {}
      }
    }
    e.stopPropagation();
    gl.domElement.style.cursor = 'grab';
  };

  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (!isDraggingRef.current) return;
      const hit = projectToModelSurface(e.clientX, e.clientY);
      if (hit) {
        liveHitRef.current = hit;
        setLiveHit(hit);
      }
    };

    const handleGlobalUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging3D(false);
        if (gl?.domElement) gl.domElement.style.cursor = 'grab';
        if (liveHitRef.current) {
          const lh = liveHitRef.current;
          updateTextItem(item.id, {
            position: [
              Math.round(lh.pos.x * 1000) / 1000,
              Math.round(lh.pos.y * 1000) / 1000,
              Math.round(lh.pos.z * 1000) / 1000
            ],
            rotation: [
              Math.round(lh.baseRot[0] * 1000) / 1000,
              Math.round(lh.baseRot[1] * 1000) / 1000,
              Math.round(lh.baseRot[2] * 1000) / 1000
            ],
            targetMeshId: null
          });
          liveHitRef.current = null;
        }
        setLiveHit(null);
      }
    };

    window.addEventListener('pointermove', handleGlobalMove);
    window.addEventListener('pointerup', handleGlobalUp);
    return () => {
      window.removeEventListener('pointermove', handleGlobalMove);
      window.removeEventListener('pointerup', handleGlobalUp);
    };
  }, [camera, gl, modelGroupRef, item.id, item.angle, updateTextItem, setIsDragging3D]);

  if (!item.visible || !decalGeom) return null;

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Conforming Surface Decal Mesh */}
      <mesh
        geometry={decalGeom}
        userData={{ isTextDecal: true }}
        onPointerDown={handlePointerDown}
        onPointerOver={handlePointerOver}
        onPointerOut={() => {
          if (!isDraggingRef.current) gl.domElement.style.cursor = 'default';
        }}
      >
        <meshStandardMaterial
          map={texture}
          transparent={true}
          opacity={1.0}
          depthTest={true}
          depthWrite={false}
          polygonOffset={true}
          polygonOffsetFactor={-4}
          polygonOffsetUnits={-4}
          roughness={0.6}
          metalness={0.05}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* 2. Elevated Invisible Hit-Test Proxy Mesh (Exact glyph bounds) */}
      <mesh
        position={[
          currentPos.x + normalVec.x * 0.008,
          currentPos.y + normalVec.y * 0.008,
          currentPos.z + normalVec.z * 0.008
        ]}
        rotation={currentRotation}
        onPointerDown={handlePointerDown}
        onPointerOver={handlePointerOver}
        onPointerOut={() => {
          if (!isDraggingRef.current) gl.domElement.style.cursor = 'default';
        }}
      >
        <planeGeometry args={[tightWidth, tightHeight]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} side={THREE.DoubleSide} />
      </mesh>

      {/* 3. On-Model Figma/IDE Transform Controls (Snug bounding box hugging actual text glyphs) */}
      {isSelected && facingCamera && (
        <DecalTransformGizmo
          position={currentPos}
          rotation={currentRotation}
          angle={item.angle || 0}
          scale={item.scale || 1.0}
          width={tightWidth}
          height={tightHeight}
          label={item.text || item.label || 'Team Text'}
          onScaleChange={(newScale) => updateTextItem(item.id, { scale: newScale })}
          onAngleChange={(newAngle) => updateTextItem(item.id, { angle: newAngle })}
          onDeselect={() => setSelectedTextId(null)}
          onStartMove={handlePointerDown}
          setIsDragging3D={setIsDragging3D}
        />
      )}
    </group>
  );
}

// ── Interactive 3D Draggable Logo / Emblem Component (Conforming DecalGeometry) ──
function LogoDecalPlane({ item, modelGroupRef }) {
  const { camera, gl } = useThree();
  const {
    selectedLogoId,
    setSelectedLogoId,
    setSelectedMesh,
    setActiveControlTab,
    updateLogo,
    setIsDragging3D,
    modelRevision,
    modelBounds
  } = useStudioStore();

  const isSelected = selectedLogoId === item.id;
  const isDraggingRef = useRef(false);
  const dummyObj = useMemo(() => new THREE.Object3D(), []);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const [aspectRatio, setAspectRatio] = useState(1);
  const [texture, setTexture] = useState(null);
  const [liveHit, setLiveHit] = useState(null);
  const liveHitRef = useRef(null);

  // Load logo texture reliably with proper state updates
  useEffect(() => {
    if (!item.url) {
      setTexture(null);
      return;
    }
    let isCancelled = false;
    const loader = new THREE.TextureLoader();
    loader.load(
      item.url,
      (loadedTex) => {
        if (isCancelled) return;
        loadedTex.colorSpace = THREE.SRGBColorSpace;
        loadedTex.needsUpdate = true;
        if (loadedTex.image?.width && loadedTex.image?.height) {
          setAspectRatio(loadedTex.image.width / loadedTex.image.height);
        }
        setTexture(loadedTex);
      },
      undefined,
      (err) => console.error('Logo texture load error:', err)
    );
    return () => {
      isCancelled = true;
    };
  }, [item.url]);

  const baseSize = 0.32 * (item.scale || 1.0);
  const planeWidth = aspectRatio >= 1 ? baseSize : baseSize * aspectRatio;
  const planeHeight = aspectRatio >= 1 ? baseSize / aspectRatio : baseSize;
  const projDepth = 0.08;
  const sizeVec = useMemo(() => new THREE.Vector3(planeWidth, planeHeight, projDepth), [planeWidth, planeHeight, projDepth]);

  // Current active position and rotation (live while dragging, else from item)
  const currentPos = useMemo(() => {
    if (liveHit?.pos) return liveHit.pos;
    if (Array.isArray(item.position)) return new THREE.Vector3(...item.position);
    return item.position || new THREE.Vector3(0, 0.25, 0.15);
  }, [liveHit, item.position]);

  const currentRotation = useMemo(() => {
    if (liveHit?.rotWithAngle) return liveHit.rotWithAngle;
    const d = new THREE.Object3D();
    if (item.rotation) {
      d.rotation.set(item.rotation[0], item.rotation[1], item.rotation[2]);
    }
    if (item.angle) {
      d.rotateZ(THREE.MathUtils.degToRad(item.angle));
    }
    return d.rotation;
  }, [liveHit, item.rotation, item.angle]);

  // Surface Normal Vector for Hit-Test Proxy Placement & Camera Facing Check
  const normalVec = useMemo(() => {
    const v = new THREE.Vector3(0, 0, 1);
    v.applyEuler(currentRotation);
    return v;
  }, [currentRotation]);

  const [facingCamera, setFacingCamera] = useState(true);
  useFrame(() => {
    if (!camera) return;
    const toCam = camera.position.clone().sub(currentPos).normalize();
    const facing = normalVec.dot(toCam) > 0.05;
    if (facing !== facingCamera) {
      setFacingCamera(facing);
    }
  });

  // Build true conforming 3D DecalGeometry across model mesh surface(s)
  const decalGeom = useMemo(() => {
    if (!modelGroupRef?.current || !texture) return null;
    return buildDecalGeometry(
      modelGroupRef.current,
      currentPos,
      currentRotation,
      sizeVec,
      item.angle || 0,
      modelBounds
    );
  }, [modelGroupRef, currentPos, currentRotation, sizeVec, texture, modelRevision, item.angle, modelBounds]);

  // Surface raycasting directly onto model geometry
  const projectToModelSurface = (clientX, clientY) => {
    if (!modelGroupRef?.current || !gl?.domElement) return null;
    const rect = gl.domElement.getBoundingClientRect();
    const ndcX = ((clientX - rect.left) / rect.width) * 2 - 1;
    const ndcY = -((clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera);
    const intersects = raycaster.intersectObjects(modelGroupRef.current.children, true);

    const centerX = modelBounds?.center?.[0] || 0;
    const centerZ = modelBounds?.center?.[2] || 0;

    const hit = intersects.find((h) => {
      if (!h.object?.isMesh || h.object.userData?.isTextDecal || h.object.userData?.isLogoDecal || h.object.name?.startsWith('E_')) {
        return false;
      }
      if ((h.object.geometry?.attributes?.position?.count || 0) <= 40) return false;
      const wNorm = h.face.normal.clone().transformDirection(h.object.matrixWorld).normalize();
      // Must face towards camera
      if (wNorm.dot(raycaster.ray.direction) >= -0.15) return false;
      // Must face outward from body center (exclude interior lining / inner cavities)
      const radVec = new THREE.Vector2(h.point.x - centerX, h.point.z - centerZ).normalize();
      const norm2D = new THREE.Vector2(wNorm.x, wNorm.z);
      if (radVec.dot(norm2D) < -0.1) return false;
      return true;
    });
    if (!hit) return null;

    const worldNormal = hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize();
    const pos = hit.point.clone();

    // Dampen sharp fly-seam or zipper crease X tilt near the centerline
    const centerDist = Math.abs(pos.x - centerX);
    if (centerDist < 0.08) {
      worldNormal.x *= (centerDist / 0.08);
      worldNormal.normalize();
    }

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
      rotWithAngle: dummyObj.rotation.clone(),
      baseRot,
      meshId: hit.object.name || hit.object.uuid
    };
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setSelectedLogoId(item.id);
    setSelectedMesh(null);
    setActiveControlTab('logos');
    isDraggingRef.current = true;
    setIsDragging3D(true);
    gl.domElement.style.cursor = 'grabbing';
  };

  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (!isDraggingRef.current) return;
      const hit = projectToModelSurface(e.clientX, e.clientY);
      if (hit) {
        liveHitRef.current = hit;
        setLiveHit(hit);
      }
    };

    const handleGlobalUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging3D(false);
        if (gl?.domElement) gl.domElement.style.cursor = 'grab';
        if (liveHitRef.current) {
          const lh = liveHitRef.current;
          updateLogo(item.id, {
            position: [
              Math.round(lh.pos.x * 1000) / 1000,
              Math.round(lh.pos.y * 1000) / 1000,
              Math.round(lh.pos.z * 1000) / 1000
            ],
            rotation: [
              Math.round(lh.baseRot[0] * 1000) / 1000,
              Math.round(lh.baseRot[1] * 1000) / 1000,
              Math.round(lh.baseRot[2] * 1000) / 1000
            ],
            targetMeshId: null
          });
          liveHitRef.current = null;
        }
        setLiveHit(null);
      }
    };

    window.addEventListener('pointermove', handleGlobalMove);
    window.addEventListener('pointerup', handleGlobalUp);
    return () => {
      window.removeEventListener('pointermove', handleGlobalMove);
      window.removeEventListener('pointerup', handleGlobalUp);
    };
  }, [camera, gl, modelGroupRef, item.id, item.angle, updateLogo, setIsDragging3D]);

  if (!item.visible || !texture || !decalGeom) return null;

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Conforming Decal Mesh */}
      <mesh
        geometry={decalGeom}
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
        <meshStandardMaterial
          map={texture}
          transparent={true}
          opacity={1.0}
          depthTest={true}
          depthWrite={false}
          polygonOffset={true}
          polygonOffsetFactor={-4}
          polygonOffsetUnits={-4}
          roughness={0.6}
          metalness={0.1}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* 2. Elevated Invisible Hit-Test Proxy Mesh (+8mm normal offset) */}
      <mesh
        position={[
          currentPos.x + normalVec.x * 0.008,
          currentPos.y + normalVec.y * 0.008,
          currentPos.z + normalVec.z * 0.008
        ]}
        rotation={currentRotation}
        onPointerDown={handlePointerDown}
        onPointerOver={(e) => {
          e.stopPropagation();
          gl.domElement.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          if (!isDraggingRef.current) gl.domElement.style.cursor = 'default';
        }}
      >
        <planeGeometry args={[planeWidth * 1.08, planeHeight * 1.08]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} side={THREE.DoubleSide} />
      </mesh>

      {/* 3. On-Model Figma/IDE Transform Controls */}
      {isSelected && facingCamera && (
        <DecalTransformGizmo
          position={currentPos}
          rotation={currentRotation}
          angle={item.angle || 0}
          scale={item.scale || 1.0}
          width={planeWidth}
          height={planeHeight}
          label={item.name || 'Emblem'}
          onScaleChange={(newScale) => updateLogo(item.id, { scale: newScale })}
          onAngleChange={(newAngle) => updateLogo(item.id, { angle: newAngle })}
          onDeselect={() => setSelectedLogoId(null)}
          onStartMove={handlePointerDown}
          setIsDragging3D={setIsDragging3D}
        />
      )}
    </group>
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
    setSelectedTextId,
    setSelectedLogoId,
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
        camera={{ position: [0, 0.2, 1.8], fov: 42 }}
        onPointerMissed={() => {
          setSelectedTextId(null);
          setSelectedLogoId(null);
        }}
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
