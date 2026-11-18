const Admin = require('../models/Admin');

const seedAdmin = async () => {
  try {
    const adminEmail = (process.env.ADMIN_EMAIL || 'admin@hamlosports.com').toLowerCase();
    const existingAdmin = await Admin.findOne({ email: adminEmail });

    if (!existingAdmin) {
      await Admin.create({
        email: adminEmail,
        password: process.env.ADMIN_PASSWORD || 'Atif903@',
        name: process.env.ADMIN_NAME || 'Atif Admin',
        role: 'superadmin',
      });
      console.log(`✅ Superadmin account seeded: ${adminEmail} (password: Atif903@)`);
    } else {
      console.log(`ℹ️  Admin account ready: ${adminEmail}`);
    }
  } catch (error) {
    console.error('❌ Admin seed error:', error.message);
  }
};

module.exports = seedAdmin;
