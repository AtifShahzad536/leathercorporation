const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const os = require('os');
const cloudinary = require('../config/cloudinary');
const Model3D = require('../models/Model3D');
const CustomDesign = require('../models/CustomDesign');
const { protect } = require('../middleware/auth');

const router = express.Router();

const isServerless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NOW_REGION);
const modelsUploadDir = isServerless ? path.join(os.tmpdir(), 'models3d') : path.join(__dirname, '../../uploads/models3d');

if (!fs.existsSync(modelsUploadDir)) {
  try { fs.mkdirSync(modelsUploadDir, { recursive: true }); } catch (e) {}
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(modelsUploadDir)) {
      try { fs.mkdirSync(modelsUploadDir, { recursive: true }); } catch (e) {}
    }
    cb(null, modelsUploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const cleanBase = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    cb(null, `${Date.now()}-${cleanBase}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB for detailed 3D models & 4K textures
  fileFilter: (req, file, cb) => {
    const allowed = /glb|gltf|bin|png|jpg|jpeg|webp|svg|hdr|json/;
    const ext = path.extname(file.originalname).toLowerCase().replace('.', '');
    if (allowed.test(ext)) {
      return cb(null, true);
    }
    cb(new Error('Supported 3D file formats: .glb, .gltf, .bin, .png, .jpg, .webp, .hdr'));
  }
});

// GET /api/models3d - Public: list published 3D models
router.get('/', async (req, res) => {
  try {
    const { sport, cut } = req.query;
    const filter = { isPublished: true };
    if (sport) filter.sport = new RegExp(`^${sport}$`, 'i');
    if (cut) filter.cut = new RegExp(cut, 'i');

    const models = await Model3D.find(filter).sort('-createdAt');
    res.json({ success: true, count: models.length, data: models });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/models3d/admin - Admin: list all models
router.get('/admin', protect, async (req, res) => {
  try {
    const models = await Model3D.find().sort('-createdAt');
    res.json({ success: true, count: models.length, data: models });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/models3d/:id - Public: get single model
router.get('/:id', async (req, res) => {
  try {
    const model = await Model3D.findById(req.params.id);
    if (!model) {
      return res.status(404).json({ success: false, message: '3D Model not found' });
    }
    res.json({ success: true, data: model });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/models3d/upload - Admin: upload 3D model or texture file (Cloudinary CDN with local fallback)
router.post('/upload', protect, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    let fileUrl = '';
    let storageType = 'cloudinary';
    const ext = path.extname(req.file.originalname).toLowerCase().replace('.', '');
    const isImage = /^(png|jpg|jpeg|webp|svg)$/.test(ext);
    const resourceType = isImage ? 'image' : 'raw';

    try {
      const conf = cloudinary.config();
      if (conf.cloud_name && conf.api_key && conf.api_secret) {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'hamlo-sports/models3d',
          resource_type: resourceType,
          use_filename: true,
          unique_filename: true,
        });

        fileUrl = result.secure_url;
        storageType = 'cloudinary';

        // Clean up temporary local upload file
        if (fs.existsSync(req.file.path)) {
          try { fs.unlinkSync(req.file.path); } catch (e) {}
        }
      } else {
        throw new Error('Cloudinary credentials not configured in server/.env');
      }
    } catch (cldErr) {
      console.warn(`⚠️ Cloudinary 3D upload failed (${cldErr.message}). Falling back to local storage.`);
      fileUrl = `/uploads/models3d/${req.file.filename}`;
      storageType = 'local';
    }

    res.json({
      success: true,
      storage: storageType,
      data: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
        url: fileUrl
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/models3d - Admin: create new 3D model registration
router.post('/', protect, async (req, res) => {
  try {
    const {
      name, sport, cut, modelUrl, thumbnailUrl,
      fileSize, meshes, cameraConfig, lightingConfig,
      availableFabrics, availablePatterns, isDefault, isPublished
    } = req.body;

    if (!name || !sport || !modelUrl) {
      return res.status(400).json({ success: false, message: 'Name, sport, and modelUrl are required' });
    }

    if (isDefault) {
      await Model3D.updateMany({ sport }, { isDefault: false });
    }

    const newModel = await Model3D.create({
      name,
      sport: sport.toLowerCase(),
      cut: cut || 'Standard Cut',
      modelUrl,
      thumbnailUrl: thumbnailUrl || '',
      fileSize: fileSize || 0,
      meshes: meshes || [],
      cameraConfig: cameraConfig || { position: [0, 0, 2.5], target: [0, 0, 0], fov: 45 },
      lightingConfig: lightingConfig || { ambientIntensity: 0.8, dirIntensity: 1.5, envPreset: 'city' },
      availableFabrics,
      availablePatterns,
      isDefault: Boolean(isDefault),
      isPublished: isPublished !== false,
      version: 1
    });

    res.status(201).json({ success: true, data: newModel });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT /api/models3d/:id - Admin: update model configuration
router.put('/:id', protect, async (req, res) => {
  try {
    const model = await Model3D.findById(req.params.id);
    if (!model) {
      return res.status(404).json({ success: false, message: '3D Model not found' });
    }

    if (req.body.isDefault && !model.isDefault) {
      await Model3D.updateMany({ sport: model.sport }, { isDefault: false });
    }

    const updated = await Model3D.findByIdAndUpdate(
      req.params.id,
      { $set: req.body, $inc: { version: 1 } },
      { new: true, runValidators: true }
    );

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE /api/models3d/:id - Admin: delete model
router.delete('/:id', protect, async (req, res) => {
  try {
    const model = await Model3D.findByIdAndDelete(req.params.id);
    if (!model) {
      return res.status(404).json({ success: false, message: '3D Model not found' });
    }
    res.json({ success: true, message: '3D Model deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── CUSTOM DESIGN PRESERVATION & RESTORE API ──

// POST /api/models3d/designs - Customer: save custom design
router.post('/designs', async (req, res) => {
  try {
    const {
      sport, cut, modelId, productSlug, configuration,
      previewImage, rosterCount, estimatedUnitPrice,
      estimatedTotalPrice, customerInfo
    } = req.body;

    const codeSuffix = Math.floor(10000 + Math.random() * 90000);
    const designCode = `HAMLO-${(sport || 'KIT').toUpperCase().slice(0, 3)}-${codeSuffix}`;

    const newDesign = await CustomDesign.create({
      designCode,
      modelId: modelId || null,
      productSlug: productSlug || '',
      sport: sport || 'baseball',
      cut: cut || 'Standard Cut',
      configuration: configuration || {},
      previewImage: previewImage || '',
      rosterCount: Number(rosterCount) || 20,
      estimatedUnitPrice: Number(estimatedUnitPrice) || 44.99,
      estimatedTotalPrice: Number(estimatedTotalPrice) || 899.80,
      customerInfo: customerInfo || {},
      status: 'submitted'
    });

    res.status(201).json({
      success: true,
      data: {
        designCode: newDesign.designCode,
        id: newDesign._id,
        createdAt: newDesign.createdAt
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/models3d/designs/:code - Customer: load saved design by code
router.get('/designs/:code', async (req, res) => {
  try {
    const design = await CustomDesign.findOne({ designCode: req.params.code.toUpperCase().trim() })
      .populate('modelId');

    if (!design) {
      return res.status(404).json({ success: false, message: 'Custom design not found with code: ' + req.params.code });
    }

    res.json({ success: true, data: design });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
