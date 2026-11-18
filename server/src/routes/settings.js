const express = require('express');
const SiteSetting = require('../models/SiteSetting');
const { protect } = require('../middleware/auth');

const router = express.Router();

// GET /api/settings - Get all settings (public)
router.get('/', async (req, res) => {
  try {
    const settings = await SiteSetting.find();
    const settingsMap = {};
    settings.forEach(s => { settingsMap[s.key] = s.value; });
    res.json({ success: true, data: settingsMap });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/settings/:key - Get single setting (public)
router.get('/:key', async (req, res) => {
  try {
    const setting = await SiteSetting.findOne({ key: req.params.key });
    if (!setting) return res.status(404).json({ success: false, message: 'Setting not found' });
    res.json({ success: true, data: setting });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/settings/:key - Create or update setting (admin)
router.put('/:key', protect, async (req, res) => {
  try {
    const setting = await SiteSetting.findOneAndUpdate(
      { key: req.params.key },
      { key: req.params.key, value: req.body.value, description: req.body.description },
      { new: true, upsert: true, runValidators: true }
    );
    res.json({ success: true, data: setting });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/settings/:key - Delete setting (admin)
router.delete('/:key', protect, async (req, res) => {
  try {
    await SiteSetting.findOneAndDelete({ key: req.params.key });
    res.json({ success: true, message: 'Setting deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
