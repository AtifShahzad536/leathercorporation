import * as THREE from 'three';

const textureCache = new Map();

/**
 * Generates an efficient procedural canvas bump/normal texture for realistic PBR fabric relief.
 */
export function getFabricBumpTexture(fabricId) {
  if (textureCache.has(`fabric_${fabricId}`)) {
    return textureCache.get(`fabric_${fabricId}`);
  }

  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 256, 256);

  if (fabricId === 'pinhole_mesh') {
    // Air-mesh eyelet perforations
    ctx.fillStyle = '#404040';
    for (let y = 8; y < 256; y += 16) {
      for (let x = (y % 32 === 0 ? 8 : 16); x < 256; x += 16) {
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#a0a0a0';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  } else if (fabricId === 'ripstop_nylon') {
    // Crosshatch reinforced grid
    ctx.strokeStyle = '#505050';
    ctx.lineWidth = 2;
    for (let i = 0; i < 256; i += 32) {
      ctx.beginPath();
      ctx.moveTo(i, 0); ctx.lineTo(i, 256);
      ctx.moveTo(0, i); ctx.lineTo(256, i);
      ctx.stroke();
    }
  } else if (fabricId === 'pro_dazzle_polyester') {
    // High-density vertical rib sheen lines
    ctx.strokeStyle = '#909090';
    ctx.lineWidth = 1;
    for (let x = 0; x < 256; x += 4) {
      ctx.beginPath();
      ctx.moveTo(x, 0); ctx.lineTo(x, 256);
      ctx.stroke();
    }
  } else if (fabricId === 'heavy_cotton_fleece') {
    // Soft fleece grain noise
    const imgData = ctx.getImageData(0, 0, 256, 256);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 35;
      const v = Math.min(255, Math.max(0, 128 + noise));
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
    }
    ctx.putImageData(imgData, 0, 0);
  } else {
    // Standard micro-interlock diagonal twill capillary channels
    ctx.strokeStyle = '#707070';
    ctx.lineWidth = 1;
    for (let i = -256; i < 512; i += 6) {
      ctx.beginPath();
      ctx.moveTo(i, 0); ctx.lineTo(i + 256, 256);
      ctx.stroke();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(8, 8);
  texture.generateMipmaps = true;

  textureCache.set(`fabric_${fabricId}`, texture);
  return texture;
}

/**
 * Creates dynamic pattern texture applied to fabric UV
 */
export function getPatternTexture(patternId, baseColor = '#0A192F', patternColor = '#F5A623', scale = 1.0) {
  const cacheKey = `pat_${patternId}_${baseColor}_${patternColor}_${scale}`;
  if (textureCache.has(cacheKey)) {
    return textureCache.get(cacheKey);
  }

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Base Fill
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 512, 512);

  if (patternId === 'pinstripe') {
    ctx.strokeStyle = patternColor;
    ctx.lineWidth = 4 * scale;
    const step = 32 * scale;
    for (let x = 0; x <= 512; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
    }
  } else if (patternId === 'digital_camo') {
    ctx.fillStyle = patternColor;
    const blockSize = Math.max(8, 24 * scale);
    for (let y = 0; y < 512; y += blockSize) {
      for (let x = 0; x < 512; x += blockSize) {
        if (Math.random() > 0.6) {
          ctx.globalAlpha = Math.random() > 0.5 ? 0.75 : 0.4;
          ctx.fillRect(x, y, blockSize, blockSize);
        }
      }
    }
    ctx.globalAlpha = 1.0;
  } else if (patternId === 'hex_grid') {
    ctx.strokeStyle = patternColor;
    ctx.lineWidth = 2 * scale;
    const r = 24 * scale;
    const dx = r * 1.732;
    const dy = r * 1.5;
    for (let y = 0; y < 512 + r; y += dy) {
      const row = Math.floor(y / dy);
      const xOffset = (row % 2) * (dx / 2);
      for (let x = 0; x < 512 + r; x += dx) {
        ctx.beginPath();
        for (let a = 0; a < 6; a++) {
          const angle = (Math.PI / 3) * a;
          const px = x + xOffset + r * Math.cos(angle);
          const py = y + r * Math.sin(angle);
          if (a === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
      }
    }
  } else if (patternId === 'raglan_splice') {
    ctx.fillStyle = patternColor;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(512, 512);
    ctx.lineTo(512, 0);
    ctx.closePath();
    ctx.fill();
  } else if (patternId === 'gradient') {
    const grad = ctx.createLinearGradient(0, 512, 0, 0);
    grad.addColorStop(0, patternColor);
    grad.addColorStop(1, baseColor);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  texture.needsUpdate = true;

  textureCache.set(cacheKey, texture);
  return texture;
}
