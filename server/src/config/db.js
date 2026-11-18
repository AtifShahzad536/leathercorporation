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

// In serverless, do not buffer queries when disconnected to avoid 10s function timeouts
if (process.env.VERCEL) {
  mongoose.set('bufferCommands', false);
}

const connectDB = async () => {
  // If already connected in serverless container, reuse existing connection
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  if (!process.env.MONGODB_URI) {
    console.warn('⚠️ MONGODB_URI is not configured in environment variables');
    return null;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Error: ${error.message}`);
    return null;
  }
};

module.exports = connectDB;
