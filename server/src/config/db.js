const dns = require('dns');
// Force Node.js to use public DNS servers (Google 8.8.8.8 & Cloudflare 1.1.1.1)
// This resolves the Windows / ISP querySrv ECONNREFUSED error for mongodb+srv://
try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch (e) {
  console.warn('DNS setServers warning:', e.message);
}

const mongoose = require('mongoose');

const connectDB = async () => {
  // If already connected or connecting in serverless container, reuse existing connection
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 15000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Error: ${error.message}`);
    // Do not call process.exit(1) in serverless environments
  }
};

module.exports = connectDB;
