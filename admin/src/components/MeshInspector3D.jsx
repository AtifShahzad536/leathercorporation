import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Center } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Box, AlertCircle, RefreshCw, Check } from 'lucide-react';

// URL resolver to ensure GLB assets always point to backend storage
export function resolveModelUrl(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:') || url.startsWith('data:')) {
    return url;
  }
  const apiBase = import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace(/\/api\/?$/, '')
    : 'http://localhost:5000';
  return `${apiBase}${url.startsWith('/') ? '' : '/'}${url}`;
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

function RenderScene({ scene, selectedMeshId, isolateSelected }) {
  // Apply visual highlight to selected mesh
  useEffect(() => {
    if (!scene) return;
    scene.traverse((child) => {
      if (child.isMesh) {
        if (!child.userData.origMaterial) {
          child.userData.origMaterial = child.material ? child.material.clone() : new THREE.MeshStandardMaterial({ color: 0x0a192f });
        }
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
        } else {
          child.material = child.userData.origMaterial;
        }
      }
    });
  }, [scene, selectedMeshId, isolateSelected]);

  return <primitive object={scene} position={[0, 0, 0]} />;
}

export default function MeshInspector3D({ modelUrl, selectedMeshId, onMeshesDetected }) {
  const [isolateSelected, setIsolateSelected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [parsedScene, setParsedScene] = useState(null);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const resolvedUrl = useMemo(() => resolveModelUrl(modelUrl), [modelUrl]);

  useEffect(() => {
    if (!resolvedUrl) {
      setLoading(false);
      setParsedScene(null);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setLoadError(null);

    const loader = new GLTFLoader();
    loader.load(
      resolvedUrl,
      (gltf) => {
        if (!isMounted) return;

        const scene = gltf.scene || gltf.scenes?.[0];
        if (!scene) {
          setLoadError('No scene found in 3D file.');
          setLoading(false);
          return;
        }

        const detected = [];
        scene.traverse((child) => {
          if (child.isMesh) {
            const geom = child.geometry;
            const vertexCount = geom?.attributes?.position ? geom.attributes.position.count : 0;
            const triangleCount = geom?.index ? Math.round(geom.index.count / 3) : Math.round(vertexCount / 3);
            const hasUV = Boolean(geom?.attributes?.uv);

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

        if (onMeshesDetected) {
          onMeshesDetected(detected);
        }

        setParsedScene(scene);
        setLoading(false);
      },
      undefined,
      (err) => {
        if (!isMounted) return;
        console.warn('GLTFLoader error on modelUrl:', resolvedUrl, err);
        setLoadError(
          err?.message?.includes('Unexpected token')
            ? 'Backend returned non-binary response. Ensure the backend server is running on port 5000.'
            : (err?.message || 'Failed to load or parse 3D file.')
        );
        setLoading(false);
      }
    );

    return () => {
      isMounted = false;
    };
  }, [resolvedUrl, onMeshesDetected, reloadTrigger]);

  if (!modelUrl) {
    return (
      <div className="w-full h-80 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-500 p-6 text-center">
        <Box size={36} className="text-slate-400 mb-2.5" />
        <span className="text-sm font-medium text-slate-700 block mb-1">No 3D Model Loaded</span>
        <span className="text-xs text-slate-500 max-w-sm">Upload a .GLB / .GLTF sportswear file to inspect geometry and map meshes.</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[420px] bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] rounded-xl border border-slate-200 overflow-hidden shadow-xs">

      {/* Top HUD Controls */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto px-2.5 py-1 bg-white/90 backdrop-blur border border-slate-200 rounded-md text-[11px] font-medium text-slate-700 flex items-center gap-2 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Interactive 3D Preview</span>
        </div>

        <div className="pointer-events-auto flex items-center gap-1.5 bg-white/90 backdrop-blur p-1 rounded-md border border-slate-200 shadow-xs">
          <button
            type="button"
            onClick={() => setIsolateSelected(!isolateSelected)}
            title="Isolate Selected Mesh Part"
            className={`px-2.5 py-1 text-xs font-medium rounded transition cursor-pointer ${isolateSelected ? 'bg-[#1E1B6E] text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            {isolateSelected ? 'Show All' : 'Isolate Mesh'}
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 backdrop-blur-xs text-slate-700 p-4">
          <div className="w-6 h-6 border-2 border-[#1E1B6E] border-t-transparent rounded-full animate-spin mb-2" />
          <span className="text-xs font-medium text-slate-600">Loading 3D Meshes...</span>
        </div>
      )}

      {/* Error Fallback */}
      {loadError && !loading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95 text-slate-600 p-6 text-center">
          <AlertCircle size={32} className="text-amber-500 mb-2" />
          <h4 className="text-sm font-medium text-slate-800 mb-1">
            Could Not Load 3D Asset
          </h4>
          <p className="text-xs text-slate-500 max-w-sm mb-3">
            {loadError}
          </p>
          <button
            type="button"
            onClick={() => setReloadTrigger(t => t + 1)}
            className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium rounded border border-slate-200 flex items-center gap-1.5 transition cursor-pointer shadow-xs"
          >
            <RefreshCw size={12} />
            <span>Retry Preview</span>
          </button>
        </div>
      )}

      {/* Three.js Canvas */}
      {parsedScene && (
        <Canvas
          camera={{ position: [0, 0.3, 2.4], fov: 42 }}
          gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[3, 4, 3]} intensity={1.4} />
          <directionalLight position={[-3, -2, -2]} intensity={0.6} />

          <OrbitControls enableDamping dampingFactor={0.08} minDistance={0.8} maxDistance={5} />

          <Center position={[0, 0, 0]}>
            <RenderScene
              scene={parsedScene}
              selectedMeshId={selectedMeshId}
              isolateSelected={isolateSelected}
            />
          </Center>
          <ContactShadows position={[0, -0.7, 0]} opacity={0.35} scale={2.4} blur={1.8} color="#64748B" />
        </Canvas>
      )}

    </div>
  );
}
