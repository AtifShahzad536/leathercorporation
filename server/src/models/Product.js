const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  sport: { type: String, required: true, index: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{
    url: { type: String, required: true },
    publicId: String,
    alt: { type: String, default: '' },
  }],
  description: String,
  fabric: String,
  badge: String,
  sizes: [String],
  colors: [String],
  features: [String],
  isActive: { type: Boolean, default: true },
  isBestseller: { type: Boolean, default: false },
  isNew: { type: Boolean, default: false },
  rating: { type: Number, default: 4.8 },
  viewCount: { type: Number, default: 0 },
}, { timestamps: true, suppressReservedKeysWarning: true });

productSchema.index({ name: 'text', description: 'text', sport: 'text' });

module.exports = mongoose.model('Product', productSchema);
