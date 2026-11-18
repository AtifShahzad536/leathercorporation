require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');

const connectDB = require('./config/db');
const seedAdmin = require('./utils/seedAdmin');
const { startEmailCron } = require('./cron/emailCron');

// Route imports
const authRoutes = require('./routes/auth');
const pageRoutes = require('./routes/pages');
const productRoutes = require('./routes/products');
const settingsRoutes = require('./routes/settings');
const mediaRoutes = require('./routes/media');
const emailRoutes = require('./routes/email');
const analyticsRoutes = require('./routes/analytics');
const inquiryRoutes = require('./routes/inquiries');

const app = express();
const PORT = process.env.PORT || 5000;

// ── MIDDLEWARE ──
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({
  origin: true, // Allow all origins
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static uploads directory (Only initialize filesystem storage in non-serverless local environments)
if (!process.env.VERCEL) {
  try {
    const localUploadsDir = path.join(__dirname, '../uploads/media');
    if (!fs.existsSync(localUploadsDir)) {
      fs.mkdirSync(localUploadsDir, { recursive: true });
    }
    app.use('/uploads', express.static(localUploadsDir));
  } catch (e) {
    console.warn('Local uploads dir note:', e.message);
  }
}

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  message: { success: false, message: 'Too many requests, slow down' },
});
app.use('/api/', apiLimiter);

// Middleware to ensure DB connection on serverless API calls
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.warn('DB middleware warning:', err.message);
    next();
  }
});

// ── ROOT & HEALTH CHECK ROUTES ──
app.get('/', (req, res) => {
  res.json({
    success: true,
    service: 'HAMLO SPORTS REST API',
    status: 'online',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      products: '/api/products',
      inquiries: '/api/inquiries'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'HAMLO SPORTS API running',
    timestamp: new Date().toISOString(),
    dbConnected: !!(process.env.MONGODB_URI)
  });
});

// ── API ROUTES ──
app.use('/api/auth', authRoutes);
app.use('/api/pages', pageRoutes);
app.use('/api/products', productRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/email', emailRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error',
  });
});

// Connect and seed on startup
connectDB().then(() => {
  seedAdmin().catch(e => console.warn('Seed admin:', e.message));
  if (!process.env.VERCEL) {
    try { startEmailCron(); } catch (e) {}
  }
}).catch(err => {
  console.error('Failed to connect DB on startup:', err.message);
});

// Start HTTP server locally (Vercel Serverless imports `app` directly)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log('═══════════════════════════════════════════════');
    console.log('  🏀 HAMLO SPORTS REST API Backend Ready');
    console.log(`  🌐 http://localhost:${PORT}`);
    console.log(`  📦 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log('═══════════════════════════════════════════════');
  });
}

module.exports = app;
