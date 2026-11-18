const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const Media = require('../models/Media');
const { protect } = require('../middleware/auth');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Ensure upload directories exist
const tempUploadDir = path.join(__dirname, '../../uploads');
const localMediaDir = path.join(__dirname, '../../uploads/media');
const clientPublicUploads = path.join(__dirname, '../../../client/public/uploads');
const adminPublicUploads = path.join(__dirname, '../../../admin/public/uploads');

[tempUploadDir, localMediaDir, clientPublicUploads, adminPublicUploads].forEach(dir => {
  if (!fs.existsSync(dir)) {
    try { fs.mkdirSync(dir, { recursive: true }); } catch (e) {}
  }
});

// Multer temp storage
const upload = multer({
  dest: tempUploadDir,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp|avif|svg|mp4|webm|mov/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname || mimetype) return cb(null, true);
    cb(new Error('Only images and videos allowed'));
  },
});

// GET /api/media - List all media (admin)
router.get('/', protect, async (req, res) => {
  try {
    const { type, page = 1, limit = 30 } = req.query;
    const filter = {};
    if (type) filter.type = type;

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const total = await Media.countDocuments(filter);
    const media = await Media.find(filter).sort('-createdAt').skip(skip).limit(parseInt(limit, 10));

    res.json({
      success: true,
      data: media,
      pagination: {
        total,
        page: parseInt(page, 10),
        pages: Math.ceil(total / parseInt(limit, 10)),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Helper: Process single file upload (Cloudinary with Local Fallback)
async function processFileUpload(file, folder = 'hamlo-sports') {
  const isVideo = file.mimetype.startsWith('video/');
  const resourceType = isVideo ? 'video' : 'image';

  let fileUrl = '';
  let publicId = '';
  let width = null;
  let height = null;
  let format = path.extname(file.originalname).replace('.', '').toLowerCase() || (isVideo ? 'mp4' : 'jpg');
  let size = file.size;
  let storage = 'cloudinary';

  // 1. Try Cloudinary
  try {
    if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder,
        resource_type: resourceType,
      });

      fileUrl = result.secure_url;
      publicId = result.public_id;
      width = result.width;
      height = result.height;
      format = result.format;
      size = result.bytes;
      storage = 'cloudinary';

      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
    } else {
      throw new Error('Cloudinary not configured');
    }
  } catch (cldErr) {
    console.warn(`⚠️ Cloudinary upload failed (${cldErr.message}). Saving to persistent local storage.`);

    // 2. Reliable Local Storage Fallback
    const ext = path.extname(file.originalname) || (isVideo ? '.mp4' : '.jpg');
    const cleanBase = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = `${Date.now()}-${cleanBase}${ext}`;

    const destLocal = path.join(localMediaDir, filename);
    const destClient = path.join(clientPublicUploads, filename);
    const destAdmin = path.join(adminPublicUploads, filename);

    fs.copyFileSync(file.path, destLocal);
    try { fs.copyFileSync(file.path, destClient); } catch (e) {}
    try { fs.copyFileSync(file.path, destAdmin); } catch (e) {}

    if (fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }

    // Direct access URL via backend or relative /uploads path
    fileUrl = `http://localhost:5000/uploads/${filename}`;
    publicId = `local-${filename}`;
    storage = 'local';
  }

  const media = await Media.create({
    filename: file.originalname,
    url: fileUrl,
    publicId,
    type: isVideo ? 'video' : 'image',
    folder,
    size,
    width,
    height,
    format,
  });

  return { media, storage };
}

// POST /api/media/upload - Upload to Cloudinary (with automatic local fallback)
router.post('/upload', protect, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const folder = req.body.folder || 'hamlo-sports';
    const { media, storage } = await processFileUpload(req.file, folder);

    res.status(201).json({ 
      success: true, 
      data: media, 
      storage,
      message: storage === 'cloudinary' 
        ? 'Uploaded to Cloudinary CDN successfully' 
        : 'Uploaded to Local Server Storage (Cloudinary API key lacks write permission)'
    });
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      try { fs.unlinkSync(req.file.path); } catch (e) {}
    }
    console.error('Media upload error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/media/upload-multiple - Upload multiple files (admin)
router.post('/upload-multiple', protect, upload.array('files', 20), async (req, res) => {
  try {
    const folder = req.body.folder || 'hamlo-sports';
    const results = [];

    for (const file of req.files) {
      const { media } = await processFileUpload(file, folder);
      results.push(media);
    }

    res.status(201).json({ success: true, count: results.length, data: results });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/media/:id - Delete from Cloudinary + DB (admin)
router.delete('/:id', protect, async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ success: false, message: 'Not found' });

    if (media.publicId && media.publicId.startsWith('local-')) {
      const filename = media.publicId.replace('local-', '');
      const localFile = path.join(localMediaDir, filename);
      const clientFile = path.join(clientPublicUploads, filename);
      const adminFile = path.join(adminPublicUploads, filename);

      [localFile, clientFile, adminFile].forEach(f => {
        if (fs.existsSync(f)) {
          try { fs.unlinkSync(f); } catch (e) {}
        }
      });
    } else if (media.publicId) {
      try {
        await cloudinary.uploader.destroy(media.publicId, {
          resource_type: media.type === 'video' ? 'video' : 'image',
        });
      } catch (cErr) {
        console.warn('Cloudinary destroy warning:', cErr.message);
      }
    }

    await Media.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Media deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
