import * as THREE from 'three';

class DecalCanvasPipeline {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 2048;
    this.canvas.height = 2048;
    this.ctx = this.canvas.getContext('2d');
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.generateMipmaps = true;
    this.loadedImages = new Map();
  }

  getTexture() {
    return this.texture;
  }

  async draw({
    viewAngle = 'front', // 'front' | 'back'
    nameNumber = {},
    logos = [],
    primaryColor = '#0A192F',
    secondaryColor = '#F5A623',
    accentColor = '#FFFFFF'
  }) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, 2048, 2048);

    const {
      teamName = 'HAMLO SPORTS',
      playerName = 'CHAMPION',
      playerNumber = '26',
      font = 'Impact',
      textColor = '#F5A623',
      strokeColor = '#000000',
      strokeWidth = 4,
      hasFrontName = true,
      hasFrontNumber = true,
      hasBackName = true,
      hasBackNumber = true
    } = nameNumber;

    if (viewAngle === 'front') {
      // ── FRONT VIEW DECAL CANVAS (Centered at 1024, 1024) ──

      // 1. Front Team Name
      if (hasFrontName && teamName) {
        ctx.save();
        ctx.font = `900 130px ${font}, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = textColor;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth * 3;
        ctx.shadowColor = 'rgba(0,0,0,0.4)';
        ctx.shadowBlur = 10;
        ctx.strokeText(teamName.toUpperCase(), 1024, 780);
        ctx.fillText(teamName.toUpperCase(), 1024, 780);
        ctx.restore();
      }

      // 2. Front Center Number
      if (hasFrontNumber && playerNumber) {
        ctx.save();
        ctx.font = `900 320px ${font}, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = textColor;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth * 4;
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 12;
        ctx.strokeText(playerNumber, 1024, 1180);
        ctx.fillText(playerNumber, 1024, 1180);
        ctx.restore();
      }

      // 3. Hamlo Authentic Lower Jocktag Badge
      ctx.save();
      ctx.fillStyle = '#111111';
      ctx.strokeStyle = secondaryColor;
      ctx.lineWidth = 4;
      ctx.roundRect(924, 1750, 200, 60, 6);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 22px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('HAMLO SPORTS', 1024, 1785);
      ctx.restore();

      // 4. Draw Custom Logos on Front
      for (const logo of logos.filter(l => l.placement === 'chest' || !l.placement)) {
        await this.drawSingleLogo(ctx, logo, 1024, 520);
      }
    } else {
      // ── BACK VIEW DECAL CANVAS ──

      // 1. Back Player Nameplate
      if (hasBackName && playerName) {
        ctx.save();
        ctx.font = `900 110px ${font}, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = textColor;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth * 3;
        ctx.strokeText(playerName.toUpperCase(), 1024, 680);
        ctx.fillText(playerName.toUpperCase(), 1024, 680);
        ctx.restore();
      }

      // 2. Large Back Number
      if (hasBackNumber && playerNumber) {
        ctx.save();
        ctx.font = `900 480px ${font}, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = textColor;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth * 5;
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 15;
        ctx.strokeText(playerNumber, 1024, 1200);
        ctx.fillText(playerNumber, 1024, 1200);
        ctx.restore();
      }

      // 3. Draw Back Logos
      for (const logo of logos.filter(l => l.placement === 'back')) {
        await this.drawSingleLogo(ctx, logo, 1024, 480);
      }
    }

    this.texture.needsUpdate = true;
  }

  async drawSingleLogo(ctx, logo, defaultX, defaultY) {
    if (!logo.url) return;
    try {
      let img = this.loadedImages.get(logo.url);
      if (!img) {
        img = await new Promise((resolve, reject) => {
          const i = new Image();
          i.crossOrigin = 'anonymous';
          i.onload = () => resolve(i);
          i.onerror = reject;
          i.src = logo.url;
        });
        this.loadedImages.set(logo.url, img);
      }

      const targetX = logo.x != null ? logo.x * 2048 : defaultX;
      const targetY = logo.y != null ? logo.y * 2048 : defaultY;
      const baseW = 280 * (logo.scale || 1.0);
      const aspect = img.height / (img.width || 1);
      const baseH = baseW * aspect;

      ctx.save();
      ctx.translate(targetX, targetY);
      if (logo.rotation) {
        ctx.rotate((logo.rotation * Math.PI) / 180);
      }
      ctx.drawImage(img, -baseW / 2, -baseH / 2, baseW, baseH);
      ctx.restore();
    } catch (e) {
      console.warn('Could not draw logo in DecalCanvasPipeline:', e.message);
    }
  }

  dispose() {
    this.texture.dispose();
    this.loadedImages.clear();
  }
}

export const decalPipeline = new DecalCanvasPipeline();
