const express = require('express');
const SiteSetting = require('../models/SiteSetting');
const { protect } = require('../middleware/auth');

const router = express.Router();

const DEFAULT_SETTINGS = {
  social_links: [
    { id: 'instagram', platform: 'Instagram', url: 'https://instagram.com/hamlosports', icon: 'Instagram', isActive: true },
    { id: 'facebook', platform: 'Facebook', url: 'https://facebook.com/hamlosports', icon: 'Facebook', isActive: true },
    { id: 'youtube', platform: 'YouTube', url: 'https://youtube.com/@hamlosports', icon: 'Youtube', isActive: true },
    { id: 'twitter', platform: 'X / Twitter', url: 'https://x.com/hamlosports', icon: 'Twitter', isActive: true },
    { id: 'whatsapp', platform: 'WhatsApp', url: 'https://wa.me/923105464116', icon: 'MessageCircle', isActive: true },
    { id: 'tiktok', platform: 'TikTok', url: 'https://tiktok.com/@hamlosports', icon: 'Video', isActive: false },
    { id: 'linkedin', platform: 'LinkedIn', url: 'https://linkedin.com/company/hamlosports', icon: 'Linkedin', isActive: false }
  ],
  company_info: {
    salesEmail: 'sale@hamlosportswear.site',
    supportEmail: 'support@hamlosportswear.site',
    phone: '+92 310 5464116',
    whatsapp: '923105464116',
    address: 'HAMLO SPORTS Factory, Small Industrial Estate, Sialkot, Punjab, Pakistan',
    hours: 'Mon - Sat: 8:00 AM - 8:00 PM PKT / Direct DDP Air Worldwide'
  },
  announcement_bar: {
    enabled: true,
    text: 'CUSTOM SPORTSWEAR & ATHLETIC UNIFORMS MANUFACTURER • FACTORY DIRECT',
    badgeText: 'Free 3D Mockup',
    badgeLink: '/builder',
    secondaryText: 'FREE US & EU DDP AIR SHIPPING INCLUDED • ZERO TARIFFS'
  },
  club_program_defaults: {
    defaultDiscountPercentage: 20,
    defaultTier: 'Gold Partner Club (20%)',
    codePrefix: 'HAMLO-CLUB-',
    autoApprove: false,
    perksDescription: 'Permanent 20% volume discount on custom athletic uniforms, free 12h 3D mockups, priority factory production queue, zero MOQ re-orders.'
  }
};

// GET /api/settings - Get all settings (public, with fallback defaults)
router.get('/', async (req, res) => {
  try {
    const settings = await SiteSetting.find();
    const settingsMap = { ...DEFAULT_SETTINGS };
    settings.forEach(s => { 
      settingsMap[s.key] = s.value; 
    });
    res.json({ success: true, data: settingsMap });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/settings/bulk - Bulk update multiple settings (admin only)
router.post('/bulk', protect, async (req, res) => {
  try {
    const { settings } = req.body;
    if (!settings || typeof settings !== 'object') {
      return res.status(400).json({ success: false, message: 'Invalid settings payload' });
    }

    const updates = Object.entries(settings).map(([key, value]) =>
      SiteSetting.findOneAndUpdate(
        { key },
        { key, value },
        { new: true, upsert: true }
      )
    );
    await Promise.all(updates);

    res.json({ success: true, message: 'All settings saved successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/settings/:key - Get single setting (public)
router.get('/:key', async (req, res) => {
  try {
    const setting = await SiteSetting.findOne({ key: req.params.key });
    if (!setting) {
      if (DEFAULT_SETTINGS[req.params.key]) {
        return res.json({ success: true, data: { key: req.params.key, value: DEFAULT_SETTINGS[req.params.key] } });
      }
      return res.status(404).json({ success: false, message: 'Setting not found' });
    }
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
