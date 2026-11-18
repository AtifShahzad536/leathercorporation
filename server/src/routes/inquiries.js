const express = require('express');
const Inquiry = require('../models/Inquiry');
const { protect } = require('../middleware/auth');

const router = express.Router();

// GET /api/inquiries - List all inquiries (admin)
router.get('/', protect, async (req, res) => {
  try {
    const { status, page = 1, limit = 50, search } = req.query;
    const filter = {};
    if (status && status !== 'all') filter.status = status;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
        { sport: { $regex: search, $options: 'i' } },
      ];
    }

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const total = await Inquiry.countDocuments(filter);
    const inquiries = await Inquiry.find(filter)
      .sort('-createdAt')
      .skip(skip)
      .limit(parseInt(limit, 10));

    const counts = {
      all: await Inquiry.countDocuments(),
      new: await Inquiry.countDocuments({ status: 'new' }),
      in_progress: await Inquiry.countDocuments({ status: 'in_progress' }),
      quoted: await Inquiry.countDocuments({ status: 'quoted' }),
      closed: await Inquiry.countDocuments({ status: 'closed' }),
    };

    res.json({
      success: true,
      data: inquiries,
      counts,
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

// GET /api/inquiries/:id - Single inquiry (admin)
router.get('/:id', protect, async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) return res.status(404).json({ success: false, message: 'Inquiry not found' });
    res.json({ success: true, data: inquiry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/inquiries - Submit inquiry (PUBLIC — called by frontend quote/contact forms & live chat)
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, sport, product, quantity, message, source } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email and message are required.' });
    }

    const inquiry = await Inquiry.create({
      name,
      email,
      phone: phone || '',
      company: company || '',
      sport: sport || 'General Sportswear',
      product: product || '',
      quantity: quantity ? parseInt(quantity, 10) : 25,
      message,
      source: source || 'website_form',
      status: 'new',
    });

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully! A production specialist will reach out within 1 hour.',
      data: inquiry,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH /api/inquiries/:id/status - Update status or notes (admin)
router.patch('/:id/status', protect, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) return res.status(404).json({ success: false, message: 'Inquiry not found' });

    if (status) inquiry.status = status;
    if (notes !== undefined) inquiry.notes = notes;
    await inquiry.save();

    res.json({ success: true, data: inquiry });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/inquiries/:id - Delete inquiry (admin)
router.delete('/:id', protect, async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Inquiry deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
