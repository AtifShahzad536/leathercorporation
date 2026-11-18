const mongoose = require('mongoose');

const mediaModelSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
  publicId: { type: String, required: true },
  type: { type: String, enum: ['image', 'video'], default: 'image' },
  folder: { type: String, default: 'hamlo-sports' },
  size: Number,
  width: Number,
  height: Number,
  format: String,
}, { timestamps: true });

module.exports = mongoose.model('Media', mediaModelSchema);
