const express = require('express');
const Page = require('../models/Page');
const { protect } = require('../middleware/auth');

const router = express.Router();

// GET /api/pages - List all pages (public)
router.get('/', async (req, res) => {
  try {
    const pages = await Page.find().select('slug title updatedAt').sort('slug');
    res.json({ success: true, data: pages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/pages/:slug - Get single page with all sections (public)
router.get('/:slug', async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });
    if (!page) {
      return res.status(404).json({ success: false, message: 'Page not found' });
    }
    // Sort sections by order
    if (page.sections && page.sections.length > 0) {
      page.sections.sort((a, b) => a.order - b.order);
    }
    res.json({ success: true, data: page });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/pages - Create page (admin)
router.post('/', protect, async (req, res) => {
  try {
    const page = await Page.create(req.body);
    res.status(201).json({ success: true, data: page });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PUT /api/pages/:slug - Update entire page (admin)
router.put('/:slug', protect, async (req, res) => {
  try {
    const page = await Page.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true, runValidators: true, upsert: true }
    );
    res.json({ success: true, data: page });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PATCH /api/pages/:slug/sections/:sectionId - Update a single section (admin)
router.patch('/:slug/sections/:sectionId', protect, async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });
    if (!page) return res.status(404).json({ success: false, message: 'Page not found' });

    const section = page.sections.id(req.params.sectionId);
    if (!section) return res.status(404).json({ success: false, message: 'Section not found' });

    Object.assign(section, req.body);
    await page.save();

    res.json({ success: true, data: page });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/pages/:slug - Delete page (admin)
router.delete('/:slug', protect, async (req, res) => {
  try {
    await Page.findOneAndDelete({ slug: req.params.slug });
    res.json({ success: true, message: 'Page deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
