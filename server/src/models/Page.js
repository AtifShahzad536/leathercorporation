const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  type: { type: String, enum: ['image', 'video'], default: 'image' },
  url: { type: String, required: true },
  publicId: String,
  alt: { type: String, default: '' },
}, { _id: false });

const sectionItemSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  year: String,
  price: String,
  badge: String,
  image: String,
  link: String,
  tags: [String],
  items: [mongoose.Schema.Types.Mixed],
}, { _id: true });

const sectionSchema = new mongoose.Schema({
  sectionKey: { type: String, required: true },
  order: { type: Number, default: 0 },
  isVisible: { type: Boolean, default: true },
  heading: String,
  subheading: String,
  content: String,
  items: [sectionItemSchema],
  media: [mediaSchema],
  ctaText: String,
  ctaLink: String,
  extraData: mongoose.Schema.Types.Mixed,
}, { _id: true });

const pageSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true },
  metaTitle: String,
  metaDescription: String,
  sections: [sectionSchema],
}, { timestamps: true });

module.exports = mongoose.model('Page', pageSchema);
