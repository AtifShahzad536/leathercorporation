import React, { useRef, useEffect, useState, useMemo, Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Eye, Layers, RotateCw, ZoomIn, Box } from 'lucide-react';

function SceneGraphParser({ url, selectedMeshId, onMeshesDetected, isolateSelected }) {
  const { scene } = useGLTF(url);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    const detected = [];
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        const geom = child.geometry;
        const vertexCount = geom.attributes.position ? geom.attributes.position.count : 0;
        const triangleCount = geom.index ? Math.round(geom.index.count / 3) : Math.round(vertexCount / 3);
        const hasUV = Boolean(geom.attributes.uv);

        const meshId = child.name || child.uuid;
        const mat = child.material;

        detected.push({
          meshId,
          name: child.name ? child.name.replace(/[_-]/g, ' ') : 'Mesh Part',
          region: guessRegionName(child.name),
          vertexCount,
          triangleCount,
          uvMapped: hasUV,
          materialName: mat?.name || 'Default Material',
          defaultColor: mat?.color ? '#' + mat.color.getHexString() : '#0A192F',
          defaultRoughness: mat?.roughness ?? 0.6,
          defaultMetalness: mat?.metalness ?? 0.05,
          defaultFabric: 'micro_interlock',
          isCustomizable: true,
          allowsDecals: true,
          allowsPattern: true,
          allowsText: true
        });
      }
    });

    onMeshesDetected(detected);
  }, [clonedScene, onMeshesDetected]);

  // Apply visual highlight to selected mesh
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        const isSelected = (child.name || child.uuid) === selectedMeshId;

        if (isolateSelected && selectedMeshId) {
          child.visible = isSelected;
        } else {
          child.visible = true;
        }

        if (isSelected) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#F26522'),
            emissive: new THREE.Color('#F26522'),
            emissiveIntensity: 0.5,
            roughness: 0.3,
            wireframe: false
          });
        }
      }
    });
  }, [clonedScene, selectedMeshId, isolateSelected]);

  return (
    <primitive
      object={clonedScene}
      position={[0, 0, 0]}
    />
  );
}

function guessRegionName(name = '') {
  const l = name.toLowerCase();
  if (l.includes('front') || l.includes('chest') || l.includes('torso')) return 'front_body';
  if (l.includes('back') || l.includes('rear') || l.includes('spine')) return 'back_body';
  if (l.includes('sleeve_l') || l.includes('left_sleeve') || l.includes('arm_l')) return 'left_sleeve';
  if (l.includes('sleeve_r') || l.includes('right_sleeve') || l.includes('arm_r')) return 'right_sleeve';
  if (l.includes('collar') || l.includes('neck') || l.includes('rib')) return 'collar';
  if (l.includes('cuff') || l.includes('wrist')) return 'cuffs';
  if (l.includes('button') || l.includes('placket')) return 'buttons';
  if (l.includes('zipper') || l.includes('zip')) return 'zipper';
  if (l.includes('pocket')) return 'pockets';
  if (l.includes('waist') || l.includes('belt')) return 'waistband';
  if (l.includes('stripe') || l.includes('piping') || l.includes('trim')) return 'stripes';
  return 'torso';
}

export default function MeshInspector3D({ modelUrl, selectedMeshId, onMeshesDetected }) {
  const [isolateSelected, setIsolateSelected] = useState(false);
  const [wireframe, setWireframe] = useState(false);
  const [cameraView, setCameraView] = useState('front');

  if (!modelUrl) {
    return (
      <div className="w-full h-80 bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center justify-center text-slate-500 p-6 text-center">
        <Box size={40} className="text-slate-600 mb-3" />
        <span className="text-sm font-bold text-slate-400 block mb-1">No 3D Model Loaded</span>
        <span className="text-xs">Upload a .GLB / .GLTF sportswear file to inspect geometry and scene graph.</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[420px] bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-2xl">
      
      {/* Top HUD Controls */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto px-3 py-1 bg-slate-900/90 backdrop-blur border border-slate-700/80 rounded-md text-xs font-mono text-emerald-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>INSPECTOR LIVE VIEW</span>
        </div>

        <div className="pointer-events-auto flex items-center gap-1.5 bg-slate-900/90 backdrop-blur p-1 rounded-md border border-slate-700/80">
          <button
            type="button"
            onClick={() => setIsolateSelected(!isolateSelected)}
            title="Isolate Selected Mesh Part"
            className={`px-2.5 py-1 text-xs font-bold rounded transition cursor-pointer ${
              isolateSelected ? 'bg-[#F26522] text-white' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            Isolate
          </button>
        </div>
      </div>

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 3]} intensity={1.5} />
        <directionalLight position={[-3, -2, -2]} intensity={0.6} />

        <OrbitControls enableDamping dampingFactor={0.08} minDistance={0.8} maxDistance={5} />

        <Suspense fallback={
          <Html center>
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-900 text-white rounded text-xs border border-slate-700 shadow-xl">
              <div className="w-4 h-4 border-2 border-[#F26522] border-t-transparent rounded-full animate-spin" />
              <span>Parsing 3D Mesh Nodes...</span>
            </div>
          </Html>
        }>
          <SceneGraphParser
            url={modelUrl}
            selectedMeshId={selectedMeshId}
            onMeshesDetected={onMeshesDetected}
            isolateSelected={isolateSelected}
          />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.6} scale={2} blur={1.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
