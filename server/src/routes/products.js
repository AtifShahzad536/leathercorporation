const express = require('express');
const Product = require('../models/Product');
const { protect } = require('../middleware/auth');

const router = express.Router();

// GET /api/products - List products (public, with filters)
router.get('/', async (req, res) => {
  try {
    const { sport, category, search, page = 1, limit = 50, sort = '-createdAt' } = req.query;
    const filter = { isActive: true };

    if (sport) filter.sport = { $regex: new RegExp(sport, 'i') };
    if (category) filter.category = { $regex: new RegExp(category, 'i') };
    if (search) filter.$text = { $search: search };

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const total = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit, 10));

    res.json({
      success: true,
      data: products,
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

// GET /api/products/:slug - Single product (public)
router.get('/:slug', async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) return res.status(404).json({ success: false, message: 'Not found' });

    // Increment view count
    product.viewCount = (product.viewCount || 0) + 1;
    await product.save();

    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/products - Create (admin)
router.post('/', protect, async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PUT /api/products/:id - Update (admin)
router.put('/:id', protect, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/products/:id - Delete (admin)
router.delete('/:id', protect, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/products/bulk - Bulk create (admin)
router.post('/bulk', protect, async (req, res) => {
  try {
    const products = await Product.insertMany(req.body.products, { ordered: false });
    res.status(201).json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
