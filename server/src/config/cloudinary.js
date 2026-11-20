const cloudinary = require('cloudinary').v2;

let cloudName = process.env.CLOUDINARY_CLOUD_NAME;
let apiKey = process.env.CLOUDINARY_API_KEY;
let apiSecret = process.env.CLOUDINARY_API_SECRET;

// Auto-parse CLOUDINARY_URL if individual env variables are not explicitly defined
if ((!cloudName || !apiKey || !apiSecret) && process.env.CLOUDINARY_URL) {
  try {
    const parsed = new URL(process.env.CLOUDINARY_URL);
    apiKey = parsed.username;
    apiSecret = parsed.password;
    cloudName = parsed.hostname;
  } catch (e) {
    // Regex fallback for cloudinary://key:secret@name
    const match = process.env.CLOUDINARY_URL.match(/cloudinary:\/\/([^:]+):([^@]+)@(.+)/);
    if (match) {
      apiKey = match[1];
      apiSecret = match[2];
      cloudName = match[3];
    }
  }
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true,
});

module.exports = cloudinary;
