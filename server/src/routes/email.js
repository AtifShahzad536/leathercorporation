const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const os = require('os');
const EmailList = require('../models/EmailList');
const EmailTemplate = require('../models/EmailTemplate');
const EmailLog = require('../models/EmailLog');
const parseExcelFile = require('../utils/parseExcel');
const { protect } = require('../middleware/auth');

const router = express.Router();

const isServerless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NOW_REGION);

const emailStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const targetDir = isServerless ? os.tmpdir() : path.join(__dirname, '../../uploads');
    if (!fs.existsSync(targetDir)) {
      try { fs.mkdirSync(targetDir, { recursive: true }); } catch (e) {}
    }
    cb(null, targetDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '';
    cb(null, `email-${Date.now()}${ext}`);
  }
});

const upload = multer({
  storage: emailStorage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (['.xlsx', '.xls', '.csv'].includes(ext)) return cb(null, true);
    cb(new Error('Only Excel (.xlsx, .xls) or CSV files allowed'));
  },
});

// ── EMAIL LISTS ──

// GET /api/email/lists - All lists (returns status & whether new leads are needed)
router.get('/lists', protect, async (req, res) => {
  try {
    const lists = await EmailList.find()
      .select('-emails')
      .sort('-createdAt');
    
    // Check if any active list exists with pending leads
    const hasActivePending = lists.some(l => l.status === 'active' && l.pendingCount > 0);
    
    res.json({
      success: true,
      data: lists,
      needsLeadsList: !hasActivePending,
      alertMessage: !hasActivePending ? '⚠️ All email lead lists completed or none active. Please upload a new leads list.' : null
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/email/lists/:id - Single list with emails
router.get('/lists/:id', protect, async (req, res) => {
  try {
    const list = await EmailList.findById(req.params.id);
    if (!list) return res.status(404).json({ success: false, message: 'List not found' });
    res.json({ success: true, data: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/email/lists/upload - Upload Excel file
router.post('/lists/upload', protect, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const emails = parseExcelFile(req.file.path);
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    if (emails.length === 0) {
      return res.status(400).json({ success: false, message: 'No valid emails found in file. Ensure file contains an "email" column.' });
    }

    const list = await EmailList.create({
      fileName: req.file.originalname,
      totalEmails: emails.length,
      pendingCount: emails.length,
      emails,
    });

    res.status(201).json({
      success: true,
      message: `Successfully extracted and uploaded ${emails.length} leads from ${req.file.originalname}`,
      data: {
        id: list._id,
        fileName: list.fileName,
        totalEmails: list.totalEmails,
        pendingCount: list.pendingCount,
        status: list.status,
      },
    });
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH /api/email/lists/:id/status - Pause/Resume list
router.patch('/lists/:id/status', protect, async (req, res) => {
  try {
    const list = await EmailList.findById(req.params.id);
    if (!list) return res.status(404).json({ success: false, message: 'Not found' });

    list.status = req.body.status;
    await list.save();

    res.json({ success: true, data: { id: list._id, status: list.status } });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/email/lists/:id - Delete list
router.delete('/lists/:id', protect, async (req, res) => {
  try {
    await EmailList.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'List deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ── EMAIL TEMPLATES ──

// GET /api/email/templates
router.get('/templates', protect, async (req, res) => {
  try {
    const templates = await EmailTemplate.find().sort('-createdAt');
    res.json({ success: true, data: templates });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/email/templates
router.post('/templates', protect, async (req, res) => {
  try {
    const template = await EmailTemplate.create(req.body);
    res.status(201).json({ success: true, data: template });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PUT /api/email/templates/:id
router.put('/templates/:id', protect, async (req, res) => {
  try {
    const template = await EmailTemplate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!template) return res.status(404).json({ success: false, message: 'Template not found' });
    res.json({ success: true, data: template });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/email/templates/:id
router.delete('/templates/:id', protect, async (req, res) => {
  try {
    await EmailTemplate.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Template deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ── EMAIL LOGS ──

// GET /api/email/logs
router.get('/logs', protect, async (req, res) => {
  try {
    const { page = 1, limit = 50, status } = req.query;
    const filter = {};
    if (status) filter.status = status;

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const total = await EmailLog.countDocuments(filter);
    const logs = await EmailLog.find(filter)
      .sort('-createdAt')
      .skip(skip)
      .limit(parseInt(limit, 10));

    res.json({
      success: true,
      data: logs,
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

// GET /api/email/stats - Email dashboard metrics
router.get('/stats', protect, async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalSent = await EmailLog.countDocuments({ status: 'sent' });
    const sentToday = await EmailLog.countDocuments({ status: 'sent', createdAt: { $gte: today } });
    const totalFailed = await EmailLog.countDocuments({ status: 'failed' });

    const activeLists = await EmailList.find({ status: 'active' });
    const totalPending = activeLists.reduce((sum, l) => sum + l.pendingCount, 0);
    const needsLeadsList = totalPending === 0;

    // Last 30 days send history
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const dailySends = await EmailLog.aggregate([
      { $match: { createdAt: { $gte: thirtyDaysAgo }, status: 'sent' } },
      { $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        count: { $sum: 1 },
      }},
      { $sort: { _id: 1 } },
    ]);

    res.json({
      success: true,
      data: {
        totalSent,
        sentToday,
        totalFailed,
        totalPending,
        needsLeadsList,
        dailySends,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
