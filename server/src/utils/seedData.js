require('dotenv').config();
const connectDB = require('../config/db');
const Product = require('../models/Product');
const EmailTemplate = require('../models/EmailTemplate');
const { fullCatalog296 } = require('../../../client/src/data/fullCatalog296.js');

async function seedData() {
  try {
    await connectDB();

    console.log('📦 Seeding Products to MongoDB...');
    const count = await Product.countDocuments();
    if (count === 0) {
      const formatted = fullCatalog296.map(p => ({
        name: p.name,
        slug: p.slug,
        sport: p.sport || p.category || 'Athletic',
        category: p.category || p.sport || 'Uniforms',
        price: typeof p.price === 'number' ? p.price : parseFloat(p.price) || 39.99,
        images: [{ url: p.image, alt: p.name }],
        description: p.description || `${p.name} - Custom sublimated uniform manufactured factory-direct.`,
        fabric: p.fabric || '180-220 GSM Moisture-Wicking Performance Polyester',
        badge: p.badge || 'PRO SPEC',
        sizes: p.sizes || ['YS', 'YM', 'YL', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
        isActive: true,
        rating: 4.8,
      }));

      await Product.insertMany(formatted, { ordered: false });
      console.log(`✅ Successfully seeded ${formatted.length} products to MongoDB!`);
    } else {
      console.log(`ℹ️  Products already in DB: ${count} products found.`);
    }

    console.log('📧 Seeding Default Email Templates for Lead Automation...');
    const templateCount = await EmailTemplate.countDocuments();
    if (templateCount === 0) {
      const defaultTemplates = [
        {
          name: 'Template 1: Free 3D Mockup Offer',
          subject: 'Free 3D Mockup for {{company}} Uniforms — HAMLO SPORTS',
          htmlBody: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
  <div style="background-color: #1E1B6E; padding: 20px; text-align: center; border-radius: 6px 6px 0 0;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase;">HAMLO SPORTS</h1>
    <p style="color: #F26522; margin: 5px 0 0; font-weight: bold; letter-spacing: 2px;">FACTORY DIRECT UNIFORMS</p>
  </div>
  <div style="padding: 30px 20px; background-color: #ffffff;">
    <p style="font-size: 16px; color: #333333;">Hi {{name}},</p>
    <p style="font-size: 15px; color: #555555; line-height: 1.6;">
      Planning for your team's upcoming season? We manufacture <strong>pro-grade, 100% dye-sublimated athletic uniforms</strong> factory direct from Sialkot with:
    </p>
    <ul style="color: #555555; font-size: 14px; line-height: 1.8;">
      <li><strong>ZERO Minimum Order Quantity</strong> (even 1 replacement jersey)</li>
      <li><strong>Free 12-Hour 3D Digital Mockup</strong> before you pay anything</li>
      <li><strong>2–3 Weeks Factory Turnaround</strong> + DDP Doorstep US Air Cargo</li>
      <li>Sublimated names, numbers, and sponsor logos included</li>
    </ul>
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://hamlosports.com/#inquiry" style="background-color: #F26522; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: bold; font-size: 14px; border-radius: 5px; text-transform: uppercase;">
        Claim Your Free 3D Mockup
      </a>
    </div>
    <p style="font-size: 13px; color: #777777;">
      Best regards,<br>
      <strong>HAMLO SPORTS Team</strong><br>
      Direct WhatsApp: +92 300 0000000 | export@hamlosports.com
    </p>
  </div>
</div>
          `,
          isActive: true,
        },
        {
          name: 'Template 2: $500 Program Discount',
          subject: 'Exclusive: $500 Off Your First Team Uniform Order — {{company}}',
          htmlBody: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
  <div style="background-color: #1E1B6E; padding: 20px; text-align: center; border-radius: 6px 6px 0 0;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase;">HAMLO SPORTS</h1>
    <p style="color: #F26522; margin: 5px 0 0; font-weight: bold; letter-spacing: 2px;">VARSITY & CLUB OUTFITTERS</p>
  </div>
  <div style="padding: 30px 20px; background-color: #ffffff;">
    <p style="font-size: 16px; color: #333333;">Dear {{name}},</p>
    <p style="font-size: 15px; color: #555555; line-height: 1.6;">
      Cut out the domestic middleman markup. For your inaugural program order over $5,000, HAMLO SPORTS is applying an <strong>instant $500 deduction</strong> directly on your invoice.
    </p>
    <div style="background-color: #FAF9F6; border-left: 4px solid #F26522; padding: 15px; margin: 20px 0;">
      <p style="margin: 0; color: #1E1B6E; font-weight: bold; font-size: 15px;">
        Same Specs Pro Programs Demand — Delivered Direct
      </p>
      <p style="margin: 5px 0 0; font-size: 13px; color: #666666;">
        Basketball, Baseball, Football, Soccer, Wrestling, Hockey & Volleyball. All stitched under ISO 9001 and OEKO-TEX safety standards.
      </p>
    </div>
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://hamlosports.com/#inquiry" style="background-color: #1E1B6E; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: bold; font-size: 14px; border-radius: 5px; text-transform: uppercase;">
        Request Team Quote & Apply $500 Credit
      </a>
    </div>
    <p style="font-size: 13px; color: #777777;">
      Warm regards,<br>
      <strong>HAMLO SPORTS Export Desk</strong>
    </p>
  </div>
</div>
          `,
          isActive: true,
        }
      ];

      await EmailTemplate.insertMany(defaultTemplates);
      console.log('✅ Seeded 2 alternating email marketing templates!');
    } else {
      console.log(`ℹ️  Email templates already exist: ${templateCount} templates.`);
    }

    console.log('🎉 Data seeding completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding error:', err.message);
    process.exit(1);
  }
}

seedData();
