const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const Media = require('../models/Media');
const { protect } = require('../middleware/auth');
const fs = require('fs');
const path = require('path');
const os = require('os');

const router = express.Router();

const isServerless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NOW_REGION);

// Ensure upload directories exist only in local persistent environment
const tempUploadDir = isServerless ? os.tmpdir() : path.join(__dirname, '../../uploads');
const localMediaDir = isServerless ? path.join(os.tmpdir(), 'media') : path.join(__dirname, '../../uploads/media');
const clientPublicUploads = !isServerless ? path.join(__dirname, '../../../client/public/uploads') : null;
const adminPublicUploads = !isServerless ? path.join(__dirname, '../../../admin/public/uploads') : null;

if (!isServerless) {
  [tempUploadDir, localMediaDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      try { fs.mkdirSync(dir, { recursive: true }); } catch (e) {}
    }
  });
}

// Multer storage using destination function so NO synchronous mkdir is called at require time
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const targetDir = isServerless ? os.tmpdir() : tempUploadDir;
    if (!fs.existsSync(targetDir)) {
      try { fs.mkdirSync(targetDir, { recursive: true }); } catch (e) {}
    }
    cb(null, targetDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '';
    const cleanBase = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    cb(null, `${Date.now()}-${cleanBase}${ext}`);
  }
});

const upload = multer({
  storage,
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
  const isVideo = file.mimetype.startsWith('video/') || /\.(mp4|webm|mov|mkv|avi|wmv)$/i.test(file.originalname);
  const resourceType = isVideo ? 'video' : 'image';

  let fileUrl = '';
  let publicId = '';
  let width = null;
  let height = null;
  let format = path.extname(file.originalname).replace('.', '').toLowerCase() || (isVideo ? 'webm' : 'jpg');
  let size = file.size;
  let storageType = 'cloudinary';

  // 1. Try Cloudinary
  try {
    const conf = cloudinary.config();
    if (conf.cloud_name && conf.api_key && conf.api_secret) {
      const uploadOptions = {
        folder,
        resource_type: resourceType,
      };

      if (isVideo) {
        // Automatically transcode and optimize video to WebM
        uploadOptions.format = 'webm';
        uploadOptions.video_codec = 'auto';
        uploadOptions.quality = 'auto';
        uploadOptions.chunk_size = 6000000; // 6MB chunking for large video files
      }

      const result = await cloudinary.uploader.upload_large(file.path, uploadOptions);

      fileUrl = result.secure_url;
      publicId = result.public_id;
      width = result.width;
      height = result.height;
      format = result.format || (isVideo ? 'webm' : 'jpg');
      size = result.bytes;
      storageType = 'cloudinary';

      if (fs.existsSync(file.path)) {
        try { fs.unlinkSync(file.path); } catch (e) {}
      }
    } else {
      throw new Error('Cloudinary credentials not configured in server environment');
    }
  } catch (cldErr) {
    console.warn(`⚠️ Cloudinary upload failed (${cldErr.message}). Saving to persistent local storage.`);

    // 2. Reliable Local Storage Fallback
    const ext = path.extname(file.originalname) || (isVideo ? '.mp4' : '.jpg');
    const cleanBase = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = `${Date.now()}-${cleanBase}${ext}`;

    if (!isServerless) {
      const destLocal = path.join(localMediaDir, filename);
      try { fs.copyFileSync(file.path, destLocal); } catch (e) {}
      if (clientPublicUploads) {
        try { fs.copyFileSync(file.path, path.join(clientPublicUploads, filename)); } catch (e) {}
      }
      if (adminPublicUploads) {
        try { fs.copyFileSync(file.path, path.join(adminPublicUploads, filename)); } catch (e) {}
      }
    }

    if (fs.existsSync(file.path)) {
      try { fs.unlinkSync(file.path); } catch (e) {}
    }

    fileUrl = `/uploads/${filename}`;
    publicId = `local-${filename}`;
    storageType = 'local';
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

  return { media, storage: storageType };
}

// GET /api/media/signature - Get signed Cloudinary upload params for direct browser uploads (bypasses Vercel 4.5MB limit)
router.get('/signature', protect, (req, res) => {
  try {
    const conf = cloudinary.config();
    if (!conf.cloud_name || !conf.api_key || !conf.api_secret) {
      return res.status(500).json({ 
        success: false, 
        message: 'Cloudinary credentials missing in server environment variables (CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET).' 
      });
    }

    const timestamp = Math.round(new Date().getTime() / 1000);
    const folder = req.query.folder || 'hamlo-sports';
    const isVideo = req.query.type === 'video';

    // Cloudinary signature parameters
    const paramsToSign = {
      folder,
      timestamp,
    };

    const signature = cloudinary.utils.api_sign_request(paramsToSign, conf.api_secret);

    res.json({
      success: true,
      data: {
        signature,
        timestamp,
        apiKey: conf.api_key,
        cloudName: conf.cloud_name,
        folder,
        isVideo,
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/media/record - Record a direct Cloudinary upload in MongoDB
router.post('/record', protect, async (req, res) => {
  try {
    const { url, publicId, type, format, size, width, height, folder, filename } = req.body;
    if (!url) {
      return res.status(400).json({ success: false, message: 'URL is required' });
    }

    const media = await Media.create({
      filename: filename || path.basename(url),
      url,
      publicId: publicId || `cld-${Date.now()}`,
      type: type || 'video',
      folder: folder || 'hamlo-sports',
      size: size || 0,
      width: width || null,
      height: height || null,
      format: format || 'webm',
    });

    res.status(201).json({ success: true, data: media });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/media/upload - Upload to Cloudinary (with automatic local fallback)
router.post('/upload', protect, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const folder = req.body.folder || 'hamlo-sports';
    const { media, storage: storageType } = await processFileUpload(req.file, folder);

    res.status(201).json({ 
      success: true, 
      data: media, 
      storage: storageType,
      message: storageType === 'cloudinary' 
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
      if (!isServerless) {
        const localFile = path.join(localMediaDir, filename);
        const clientFile = clientPublicUploads ? path.join(clientPublicUploads, filename) : null;
        const adminFile = adminPublicUploads ? path.join(adminPublicUploads, filename) : null;

        [localFile, clientFile, adminFile].filter(Boolean).forEach(f => {
          if (fs.existsSync(f)) {
            try { fs.unlinkSync(f); } catch (e) {}
          }
        });
      }
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
