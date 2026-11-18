const dns = require('dns');

// Only use manual DNS overrides on local machines (Windows/ISP), never inside Vercel/AWS Lambda
if (!process.env.VERCEL) {
  try {
    dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
  } catch (e) {
    console.warn('DNS setServers warning:', e.message);
  }
}

const mongoose = require('mongoose');

const connectDB = async () => {
  // If already connected in serverless container, reuse existing connection
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!process.env.MONGODB_URI) {
    console.warn('⚠️ MONGODB_URI is not configured in environment variables');
    return null;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 15000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Error: ${error.message}`);
  }
};

module.exports = connectDB;
