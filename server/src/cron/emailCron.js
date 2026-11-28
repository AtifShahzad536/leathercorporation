const cron = require('node-cron');
const EmailList = require('../models/EmailList');
const EmailTemplate = require('../models/EmailTemplate');
const EmailLog = require('../models/EmailLog');
const { createTransporter, SENDER_ACCOUNTS } = require('../config/email');

// Dual Channel Quotas: 12 from Hostinger + 12 from Gmail = 24 Leads / Day
const HOSTINGER_QUOTA = parseInt(process.env.HOSTINGER_BATCH_SIZE || '12', 10);
const GMAIL_QUOTA = parseInt(process.env.GMAIL_BATCH_SIZE || '12', 10);
const TOTAL_DAILY_BATCH = HOSTINGER_QUOTA + GMAIL_QUOTA; // 24
const BATCH_SIZE = TOTAL_DAILY_BATCH;

// 10 Distinct, High-Converting Email Marketing Templates for Sports & Uniforms
const DEFAULT_TEMPLATES = [
  {
    name: 'Template 1: Free 3D Mockup & Factory Direct Pricing',
    subject: 'Free 3D Mockup & Factory Direct Pricing for {{company}} — HAMLO SPORTS',
    htmlBody: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
  <div style="background: linear-gradient(135deg, #1E1B6E 0%, #161250 100%); padding: 26px 22px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase;">HAMLO SPORTS</h1>
    <p style="color: #F26522; margin: 6px 0 0; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Pro Performance Athletic Teamwear • Factory Direct</p>
  </div>
  <div style="padding: 30px 26px; color: #334155;">
    <p style="font-size: 16px; color: #0f172a; margin-top: 0;">Hi <strong>{{name}}</strong>,</p>
    <p style="font-size: 15px; line-height: 1.65; color: #475569;">
      Are you gearing up for your team's upcoming season at <strong>{{company}}</strong>? Cut out domestic broker markups and source <strong>100% dye-sublimated, pro-spec uniforms directly from our factory floor</strong>.
    </p>

    <div style="background-color: #f8fafc; border-left: 4px solid #F26522; padding: 16px 18px; margin: 22px 0; border-radius: 0 8px 8px 0;">
      <h3 style="margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #1E1B6E; font-weight: 800;">
        Why Athletic Programs Partner With Us:
      </h3>
      <ul style="margin: 0; padding-left: 18px; font-size: 14px; line-height: 1.7; color: #334155;">
        <li><strong>ZERO Minimum Order Quantity</strong> — order 1 replacement or 500 anytime</li>
        <li><strong>Free 12-Hour 3D Digital Mockup</strong> with your team colors, logos & fonts</li>
        <li><strong>Factory Direct Turnaround</strong> — 2 to 3 weeks delivered to USA via DDP Air Cargo</li>
        <li><strong>All-Inclusive Sublimation</strong> — unlimited colors, player names, numbers & sponsors included</li>
      </ul>
    </div>

    <div style="text-align: center; margin: 28px 0 20px 0;">
      <a href="https://www.hamlosportswear.site/?utm_source=email_leads&utm_medium=template_1" style="display: inline-block; background-color: #F26522; color: #ffffff; padding: 13px 26px; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
        Explore Uniform Catalog & Products
      </a>
      <div style="margin-top: 10px;">
        <a href="https://www.hamlosportswear.site/3d-builder/" style="display: inline-block; background-color: #1E1B6E; color: #ffffff; padding: 9px 20px; text-decoration: none; font-weight: 700; font-size: 12px; border-radius: 6px; text-transform: uppercase;">
          Open 3D Uniform Studio
        </a>
      </div>
    </div>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 18px 0;" />
    <p style="font-size: 12px; color: #64748b; line-height: 1.6; margin: 0;">
      Best regards,<br>
      <strong style="color: #1E1B6E;">HAMLO SPORTS Export Desk</strong><br>
      Direct WhatsApp: +92 310 5464116 | sale@hamlosportswear.site<br>
      Website: <a href="https://www.hamlosportswear.site" style="color: #F26522;">www.hamlosportswear.site</a>
    </p>
  </div>
</div>
    `,
    isActive: true,
  },
  {
    name: 'Template 2: Custom Baseball & Softball Uniforms',
    subject: 'Pro-Grade Custom Baseball Uniforms for {{company}} — Factory Direct',
    htmlBody: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #1E1B6E 0%, #0d0a3d 100%); padding: 26px 22px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase;">HAMLO BASEBALL</h1>
    <p style="color: #F26522; margin: 6px 0 0; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Custom Sublimated Baseball & Softball Gear</p>
  </div>
  <div style="padding: 30px 26px; color: #334155;">
    <p style="font-size: 16px; color: #0f172a; margin-top: 0;">Hello Coach <strong>{{name}}</strong>,</p>
    <p style="font-size: 15px; line-height: 1.65; color: #475569;">
      Looking to upgrade your baseball uniforms for <strong>{{company}}</strong> this season? We manufacture pro-spec baseball jerseys, knicker pants, cage jackets, and dugouts that withstand intense sliding and dirt.
    </p>

    <div style="background-color: #f8fafc; border-left: 4px solid #1E1B6E; padding: 16px 18px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <h3 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; color: #1E1B6E; font-weight: 800;">
        Baseball Collection Highlights:
      </h3>
      <ul style="margin: 0; padding-left: 18px; font-size: 14px; line-height: 1.7; color: #334155;">
        <li>Full-Button & Two-Button Sublimated Baseball Jerseys</li>
        <li>Reinforced Double-Knee Knicker & Open-Bottom Pants (14oz Warp Knit)</li>
        <li>Wind Pullovers & Short-Sleeve Batting Cage Jackets</li>
        <li>Sliding Compression Shorts with 4-Way Padded Zones</li>
      </ul>
    </div>

    <div style="text-align: center; margin: 28px 0;">
      <a href="https://www.hamlosportswear.site/custom-baseball-uniforms/?utm_source=email_leads&utm_medium=baseball" style="display: inline-block; background-color: #F26522; color: #ffffff; padding: 13px 26px; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 8px; text-transform: uppercase;">
        View Custom Baseball Uniforms
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 18px 0;" />
    <p style="font-size: 12px; color: #64748b; margin: 0;">
      HAMLO SPORTS Baseball Teamwear • WhatsApp: +92 310 5464116 • <a href="https://www.hamlosportswear.site/custom-baseball-uniforms/" style="color: #F26522;">Explore Baseball</a>
    </p>
  </div>
</div>
    `,
    isActive: true,
  },
  {
    name: 'Template 3: Custom Basketball Kits & Shooting Shirts',
    subject: 'Sublimated Basketball Uniforms & Reversible Kits — {{company}}',
    htmlBody: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #1E1B6E 0%, #161250 100%); padding: 26px 22px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase;">HAMLO BASKETBALL</h1>
    <p style="color: #F26522; margin: 6px 0 0; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">High Breathability • Zero Weight Sublimation</p>
  </div>
  <div style="padding: 30px 26px; color: #334155;">
    <p style="font-size: 16px; color: #0f172a; margin-top: 0;">Hi <strong>{{name}}</strong>,</p>
    <p style="font-size: 15px; line-height: 1.65; color: #475569;">
      Give your roster at <strong>{{company}}</strong> an edge on the court with lightweight, moisture-wicking basketball uniforms engineered for rapid speed and airflow.
    </p>

    <div style="background-color: #f8fafc; border-left: 4px solid #F26522; padding: 16px 18px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <ul style="margin: 0; padding-left: 18px; font-size: 14px; line-height: 1.7; color: #334155;">
        <li>160–180 GSM Micro-Mesh & Interlock Poly fabrics</li>
        <li>Round-Neck & V-Neck pro cuts with ribbed armholes</li>
        <li>1-Layer Reversible Sublimated Practice Pinnies & Shorts</li>
        <li>Long-Sleeve & Short-Sleeve Pre-Game Shooting Shirts</li>
      </ul>
    </div>

    <div style="text-align: center; margin: 28px 0;">
      <a href="https://www.hamlosportswear.site/custom-basketball-uniforms/?utm_source=email_leads&utm_medium=basketball" style="display: inline-block; background-color: #1E1B6E; color: #ffffff; padding: 13px 26px; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 8px; text-transform: uppercase;">
        Browse Basketball Uniforms
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 18px 0;" />
    <p style="font-size: 12px; color: #64748b; margin: 0;">
      HAMLO SPORTS • Direct WhatsApp: +92 310 5464116 • <a href="https://www.hamlosportswear.site" style="color: #F26522;">www.hamlosportswear.site</a>
    </p>
  </div>
</div>
    `,
    isActive: true,
  },
  {
    name: 'Template 4: Custom Lacrosse Uniforms & Reversible Pinnies',
    subject: 'High-Performance Custom Lacrosse Pinnies & Uniforms — {{company}}',
    htmlBody: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #1E1B6E 0%, #0d0a3d 100%); padding: 26px 22px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase;">HAMLO LACROSSE</h1>
    <p style="color: #F26522; margin: 6px 0 0; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Heavy-Duty Tear-Resistant Lacrosse Gear</p>
  </div>
  <div style="padding: 30px 26px; color: #334155;">
    <p style="font-size: 16px; color: #0f172a; margin-top: 0;">Dear <strong>{{name}}</strong>,</p>
    <p style="font-size: 15px; line-height: 1.65; color: #475569;">
      Lacrosse demand gear that can take brutal stick checks and physical contact without tearing or peeling. HAMLO SPORTS manufactures reinforced lacrosse game wear for <strong>{{company}}</strong>.
    </p>

    <div style="background-color: #f8fafc; border-left: 4px solid #1E1B6E; padding: 16px 18px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <ul style="margin: 0; padding-left: 18px; font-size: 14px; line-height: 1.7; color: #334155;">
        <li>Heavyweight 220 GSM Tracing Mesh & Dazzle Poly</li>
        <li>Reversible Game & Tournament Pinnies (Zero Bleed Through)</li>
        <li>Deep-Pocket Lacrosse Shorts with Elastic Drawstrings</li>
        <li>Team Travel Backpacks, Cinch Bags & Windbreaker Jackets</li>
      </ul>
    </div>

    <div style="text-align: center; margin: 28px 0;">
      <a href="https://www.hamlosportswear.site/custom-lacrosse-uniforms/?utm_source=email_leads&utm_medium=lacrosse" style="display: inline-block; background-color: #F26522; color: #ffffff; padding: 13px 26px; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 8px; text-transform: uppercase;">
        Explore Lacrosse Collection
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 18px 0;" />
    <p style="font-size: 12px; color: #64748b; margin: 0;">
      HAMLO SPORTS Lacrosse Outfitters • WhatsApp: +92 310 5464116
    </p>
  </div>
</div>
    `,
    isActive: true,
  },
  {
    name: 'Template 5: Custom Wrestling Singlets & Compression Gear',
    subject: 'Custom Sublimated Wrestling Singlets (4-Way Stretch) — {{company}}',
    htmlBody: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #1E1B6E 0%, #161250 100%); padding: 26px 22px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase;">HAMLO WRESTLING</h1>
    <p style="color: #F26522; margin: 6px 0 0; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">NFHS & Collegiate Compliant Custom Singlets</p>
  </div>
  <div style="padding: 30px 26px; color: #334155;">
    <p style="font-size: 16px; color: #0f172a; margin-top: 0;">Hi Coach <strong>{{name}}</strong>,</p>
    <p style="font-size: 15px; line-height: 1.65; color: #475569;">
      Equip the wrestlers of <strong>{{company}}</strong> with singlets designed for maximum mobility, comfort, and zero chafing on the mat.
    </p>

    <div style="background-color: #f8fafc; border-left: 4px solid #F26522; padding: 16px 18px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <ul style="margin: 0; padding-left: 18px; font-size: 14px; line-height: 1.7; color: #334155;">
        <li>250–280 GSM Poly-Spandex with 4-Way Elastic Recovery</li>
        <li>Flatlock Anti-Chafe Heavy Seaming (Double Needle Reinforced)</li>
        <li>Silicone Leg Grippers to Prevent Riding During Matches</li>
        <li>Youth, High School, and Men's/Women's Collegiate Cuts</li>
      </ul>
    </div>

    <div style="text-align: center; margin: 28px 0;">
      <a href="https://www.hamlosportswear.site/custom-wrestling-singlets/?utm_source=email_leads&utm_medium=wrestling" style="display: inline-block; background-color: #1E1B6E; color: #ffffff; padding: 13px 26px; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 8px; text-transform: uppercase;">
        View Wrestling Singlets
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 18px 0;" />
    <p style="font-size: 12px; color: #64748b; margin: 0;">
      HAMLO SPORTS Wrestling Desk • WhatsApp: +92 310 5464116
    </p>
  </div>
</div>
    `,
    isActive: true,
  },
  {
    name: 'Template 6: Custom Soccer Kits & Training Tracksuits',
    subject: 'Custom Soccer Teamwear & Training Tracksuits — {{company}}',
    htmlBody: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #1E1B6E 0%, #0d0a3d 100%); padding: 26px 22px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase;">HAMLO SOCCER</h1>
    <p style="color: #F26522; margin: 6px 0 0; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Club Match Kits • Training Warmups • Goalkeeper Sets</p>
  </div>
  <div style="padding: 30px 26px; color: #334155;">
    <p style="font-size: 16px; color: #0f172a; margin-top: 0;">Hello <strong>{{name}}</strong>,</p>
    <p style="font-size: 15px; line-height: 1.65; color: #475569;">
      Looking to kit out your soccer club or school team at <strong>{{company}}</strong>? From European-style slim fit match jerseys to sideline rain jackets and tracksuits, we manufacture it all.
    </p>

    <div style="background-color: #f8fafc; border-left: 4px solid #1E1B6E; padding: 16px 18px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <ul style="margin: 0; padding-left: 18px; font-size: 14px; line-height: 1.7; color: #334155;">
        <li>Dye-Sublimated Match Shirts & Contrast Shorts</li>
        <li>Padded Goalkeeper Kits with Elbow and Hip Protection</li>
        <li>Poly-Fleece Slim-Fit Training Tracksuits & 1/4 Zip Tops</li>
        <li>Custom Sublimated Soccer Socks & Gear Bags</li>
      </ul>
    </div>

    <div style="text-align: center; margin: 28px 0;">
      <a href="https://www.hamlosportswear.site/custom-soccer-uniforms/?utm_source=email_leads&utm_medium=soccer" style="display: inline-block; background-color: #F26522; color: #ffffff; padding: 13px 26px; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 8px; text-transform: uppercase;">
        View Soccer Teamwear Catalog
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 18px 0;" />
    <p style="font-size: 12px; color: #64748b; margin: 0;">
      HAMLO SPORTS Soccer Division • WhatsApp: +92 310 5464116
    </p>
  </div>
</div>
    `,
    isActive: true,
  },
  {
    name: 'Template 7: $500 Team & Club Outfitter Credit',
    subject: 'Exclusive: $500 Program Credit for {{company}} Team Uniforms',
    htmlBody: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #1E1B6E 0%, #161250 100%); padding: 26px 22px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase;">HAMLO SPORTS</h1>
    <p style="color: #F26522; margin: 6px 0 0; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Special Outfitter Grant: $500 Off</p>
  </div>
  <div style="padding: 30px 26px; color: #334155;">
    <p style="font-size: 16px; color: #0f172a; margin-top: 0;">Dear <strong>{{name}}</strong>,</p>
    <p style="font-size: 15px; line-height: 1.65; color: #475569;">
      Why pay domestic distributor markups of 40–60% when you can order your program's gear directly from the manufacturing source?
    </p>
    <p style="font-size: 15px; line-height: 1.65; color: #475569;">
      For your inaugural team order over $5,000, HAMLO SPORTS is applying an <strong>instant $500 factory credit</strong> directly on your invoice for <strong>{{company}}</strong>.
    </p>

    <div style="background-color: #f1f5f9; border-left: 4px solid #1E1B6E; padding: 16px 18px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <h3 style="margin: 0 0 8px 0; font-size: 14px; color: #1E1B6E; font-weight: 800;">
        Pro-Spec Fabrics • ISO 9001 & OEKO-TEX Certified
      </h3>
      <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #475569;">
        Moisture-wicking, breathable 4-way stretch fabrics engineered specifically for Baseball, Basketball, Football, Soccer, Wrestling, Track & Volleyball.
      </p>
    </div>

    <div style="text-align: center; margin: 28px 0;">
      <a href="https://www.hamlosportswear.site/?discount=500CREDIT&utm_source=email_leads" style="display: inline-block; background-color: #1E1B6E; color: #ffffff; padding: 13px 26px; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 8px; text-transform: uppercase;">
        Browse Products & Claim $500 Credit
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 18px 0;" />
    <p style="font-size: 12px; color: #64748b; margin: 0;">
      HAMLO SPORTS Customer Desk • WhatsApp: +92 310 5464116 • sale@hamlosportswear.site
    </p>
  </div>
</div>
    `,
    isActive: true,
  },
  {
    name: 'Template 8: Zero MOQ Replacement & Late-Roster Guarantee',
    subject: 'No Minimum Re-Orders: Never Pay Late-Roster Penalties — {{company}}',
    htmlBody: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #1E1B6E 0%, #0d0a3d 100%); padding: 26px 22px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase;">ZERO MOQ POLICY</h1>
    <p style="color: #F26522; margin: 6px 0 0; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Order 1 Replacement Jersey Anytime</p>
  </div>
  <div style="padding: 30px 26px; color: #334155;">
    <p style="font-size: 16px; color: #0f172a; margin-top: 0;">Hi <strong>{{name}}</strong>,</p>
    <p style="font-size: 15px; line-height: 1.65; color: #475569;">
      Every coach knows the headache: a new student transfers in mid-season, or a uniform gets lost, and big brands demand a 12-piece minimum order just to replace 1 jersey.
    </p>
    <p style="font-size: 15px; line-height: 1.65; color: #475569;">
      At HAMLO SPORTS, <strong>we archive every client's digital sublimation artwork indefinitely</strong>. We will gladly manufacture even a single 1-off replacement jersey for <strong>{{company}}</strong> at regular factory rates!
    </p>

    <div style="text-align: center; margin: 28px 0;">
      <a href="https://www.hamlosportswear.site/about-us/?utm_source=email_leads&utm_medium=zero_moq" style="display: inline-block; background-color: #F26522; color: #ffffff; padding: 13px 26px; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 8px; text-transform: uppercase;">
        Learn About Our Zero MOQ Guarantee
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 18px 0;" />
    <p style="font-size: 12px; color: #64748b; margin: 0;">
      HAMLO SPORTS • WhatsApp: +92 310 5464116 • <a href="https://www.hamlosportswear.site" style="color: #F26522;">www.hamlosportswear.site</a>
    </p>
  </div>
</div>
    `,
    isActive: true,
  },
  {
    name: 'Template 9: 2–3 Week Fast Delivery Guarantee (DDP Air to USA)',
    subject: 'Guaranteed 2-3 Week Turnaround for {{company}} Uniforms',
    htmlBody: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #1E1B6E 0%, #161250 100%); padding: 26px 22px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase;">FAST TURNAROUND</h1>
    <p style="color: #F26522; margin: 6px 0 0; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Delivered Directly To Your USA Doorstep</p>
  </div>
  <div style="padding: 30px 26px; color: #334155;">
    <p style="font-size: 16px; color: #0f172a; margin-top: 0;">Hello <strong>{{name}}</strong>,</p>
    <p style="font-size: 15px; line-height: 1.65; color: #475569;">
      Tired of waiting 8 to 12 weeks for your team uniforms to arrive? HAMLO SPORTS operates 24/7 laser cutting and digital sublimation print production with:
    </p>

    <div style="background-color: #f8fafc; border-left: 4px solid #F26522; padding: 16px 18px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <ul style="margin: 0; padding-left: 18px; font-size: 14px; line-height: 1.7; color: #334155;">
        <li><strong>Rapid 10–14 Day Production</strong> after digital mock approval</li>
        <li><strong>Express Air Cargo via DHL / FedEx DDP</strong> (Delivered Duty Paid)</li>
        <li>Zero customs forms or surprise import duties for your school or club</li>
        <li>Live shipment tracking links delivered right to your email</li>
      </ul>
    </div>

    <div style="text-align: center; margin: 28px 0;">
      <a href="https://www.hamlosportswear.site/contact/?utm_source=email_leads&utm_medium=fast_turnaround" style="display: inline-block; background-color: #1E1B6E; color: #ffffff; padding: 13px 26px; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 8px; text-transform: uppercase;">
        Request Delivery Quote & Timeline
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 18px 0;" />
    <p style="font-size: 12px; color: #64748b; margin: 0;">
      HAMLO SPORTS Logistics • WhatsApp: +92 310 5464116
    </p>
  </div>
</div>
    `,
    isActive: true,
  },
  {
    name: 'Template 10: Athletic Directors & Club Wholesale Partnership',
    subject: 'Wholesale Factory Partnership for {{company}} Athletic Department',
    htmlBody: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #1E1B6E 0%, #0d0a3d 100%); padding: 26px 22px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase;">CLUB & VARSITY PARTNERSHIP</h1>
    <p style="color: #F26522; margin: 6px 0 0; font-weight: 700; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Dedicated Manufacturing Partner for Athletic Directors</p>
  </div>
  <div style="padding: 30px 26px; color: #334155;">
    <p style="font-size: 16px; color: #0f172a; margin-top: 0;">Dear Athletic Director <strong>{{name}}</strong>,</p>
    <p style="font-size: 15px; line-height: 1.65; color: #475569;">
      Outfit all sports under your organization at <strong>{{company}}</strong> with unified team branding, standardized Pantone color matching, and preferred tier-1 factory pricing.
    </p>

    <div style="background-color: #f8fafc; border-left: 4px solid #1E1B6E; padding: 16px 18px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <ul style="margin: 0; padding-left: 18px; font-size: 14px; line-height: 1.7; color: #334155;">
        <li>Dedicated Account Production Manager on WhatsApp</li>
        <li>Complimentary Physical Sample Fabric & Sublimation Swatch Box</li>
        <li>Customized Team Web-Store for Parents & Athletes</li>
        <li>Consolidated Season Billing & Net School Terms Available</li>
      </ul>
    </div>

    <div style="text-align: center; margin: 28px 0;">
      <a href="https://www.hamlosportswear.site/register-club/?utm_source=email_leads&utm_medium=club_partner" style="display: inline-block; background-color: #F26522; color: #ffffff; padding: 13px 26px; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 8px; text-transform: uppercase;">
        Apply for Club Wholesale Account
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 18px 0;" />
    <p style="font-size: 12px; color: #64748b; margin: 0;">
      HAMLO SPORTS Global Uniforms • Sialkot, Pakistan • WhatsApp: +92 310 5464116
    </p>
  </div>
</div>
    `,
    isActive: true,
  }
];

// Helper to ensure all 10 templates exist in the database
const ensureDefaultTemplates = async () => {
  try {
    const existing = await EmailTemplate.find();
    const existingNames = new Set(existing.map(t => t.name));
    const missing = DEFAULT_TEMPLATES.filter(t => !existingNames.has(t.name));

    if (missing.length > 0) {
      console.log(`[EMAIL CRON] 📦 Seeding ${missing.length} missing templates to database...`);
      await EmailTemplate.insertMany(missing);
      console.log(`[EMAIL CRON] ✅ Now have at least 10 active marketing templates.`);
    }
  } catch (err) {
    console.warn('[EMAIL CRON] Template sync warning:', err.message);
  }
};

const sendDailyEmails = async () => {
  console.log(`[EMAIL CRON] 🚀 Starting dual email marketing batch (Target: ${HOSTINGER_QUOTA} Hostinger + ${GMAIL_QUOTA} Gmail = ${TOTAL_DAILY_BATCH} leads)...`);

  try {
    // 1. Find the first active list that has pending emails
    const activeList = await EmailList.findOne({ status: 'active', pendingCount: { $gt: 0 } });

    if (!activeList) {
      console.log('[EMAIL CRON] ⚠️ ALL LISTS COMPLETED OR NONE ACTIVE — SYSTEM STATUS: "NEEDS LEADS LIST"!');
      return { success: false, message: 'All email lists completed or none active. Please upload a new leads list.' };
    }

    // 2. Ensure active templates exist (at least 10)
    await ensureDefaultTemplates();
    let templates = await EmailTemplate.find({ isActive: true });

    if (templates.length === 0) {
      return { success: false, message: 'No active email templates found.' };
    }

    // 3. Pick next TOTAL_DAILY_BATCH pending emails (up to 24 leads)
    const pendingEmails = activeList.emails
      .filter(e => e.status === 'pending')
      .slice(0, TOTAL_DAILY_BATCH);

    if (pendingEmails.length === 0) {
      activeList.recalcCounts();
      await activeList.save();
      console.log(`[EMAIL CRON] List "${activeList.fileName}" has no pending emails.`);
      return { success: false, message: `List "${activeList.fileName}" has no pending leads.` };
    }

    console.log(`[EMAIL CRON] Processing dual batch of ${pendingEmails.length} leads from "${activeList.fileName}"...`);

    // 4. Create Nodemailer transporters for both Hostinger and Gmail
    const hostingerTransporter = createTransporter('hostinger');
    const gmailTransporter = createTransporter('gmail');

    let hostingerSent = 0;
    let hostingerFailed = 0;
    let gmailSent = 0;
    let gmailFailed = 0;

    // 5. Partition and send each email, rotating templates
    for (let i = 0; i < pendingEmails.length; i++) {
      const entry = pendingEmails[i];
      // Assign channel: first HOSTINGER_QUOTA (12) to Hostinger, remainder (up to 12) to Gmail
      const channel = i < HOSTINGER_QUOTA ? 'hostinger' : 'gmail';
      const senderConfig = SENDER_ACCOUNTS[channel];
      const transporter = channel === 'hostinger' ? hostingerTransporter : gmailTransporter;

      // Rotate templates so every lead across both channels receives a different template
      const template = templates[i % templates.length];

      try {
        // Validation check for Gmail App Password
        if (channel === 'gmail' && !senderConfig.pass) {
          throw new Error('Gmail App Password not configured yet in server environment. Please generate a 16-character Google App Password for hamlosportswear@gmail.com.');
        }

        let html = template.htmlBody
          .replace(/{{name}}/gi, entry.name || 'Team Director')
          .replace(/{{email}}/gi, entry.email)
          .replace(/{{company}}/gi, entry.company || 'Athletic Program');

        let subject = template.subject
          .replace(/{{name}}/gi, entry.name || 'Team Director')
          .replace(/{{company}}/gi, entry.company || 'Athletic Program');

        await transporter.sendMail({
          from: senderConfig.from,
          replyTo: senderConfig.replyTo,
          to: entry.email,
          subject,
          html,
        });

        // Update entry status
        const emailDoc = activeList.emails.id(entry._id);
        if (emailDoc) {
          emailDoc.status = 'sent';
          emailDoc.sentAt = new Date();
          emailDoc.templateUsed = template.name;
          emailDoc.senderEmail = senderConfig.user;
          emailDoc.senderChannel = channel;
        }

        // Log success
        await EmailLog.create({
          to: entry.email,
          from: senderConfig.user,
          senderChannel: channel,
          subject,
          templateId: template._id,
          templateName: template.name,
          status: 'sent',
          listId: activeList._id,
        });

        template.sendCount = (template.sendCount || 0) + 1;
        await template.save();

        if (channel === 'hostinger') {
          hostingerSent++;
        } else {
          gmailSent++;
        }

        console.log(`  ✅ [${i + 1}/${pendingEmails.length}] [${channel.toUpperCase()}] Sent to: ${entry.email} (Template: ${template.name})`);
      } catch (sendError) {
        if (channel === 'hostinger') {
          hostingerFailed++;
        } else {
          gmailFailed++;
        }

        const emailDoc = activeList.emails.id(entry._id);
        if (emailDoc) {
          emailDoc.status = 'failed';
          emailDoc.errorMessage = sendError.message;
          emailDoc.senderChannel = channel;
          emailDoc.senderEmail = senderConfig.user;
        }

        await EmailLog.create({
          to: entry.email,
          from: senderConfig.user,
          senderChannel: channel,
          subject: template.subject,
          templateId: template._id,
          templateName: template.name,
          status: 'failed',
          error: sendError.message,
          listId: activeList._id,
        });

        console.log(`  ❌ [${i + 1}/${pendingEmails.length}] [${channel.toUpperCase()}] Failed: ${entry.email} - ${sendError.message}`);
      }
    }

    // 6. Recalculate counts and save
    activeList.recalcCounts();
    await activeList.save();

    const totalSent = hostingerSent + gmailSent;
    const totalFailed = hostingerFailed + gmailFailed;

    console.log(`[EMAIL CRON] Batch complete! Status for "${activeList.fileName}": ${activeList.sentCount}/${activeList.totalEmails} total sent.`);
    console.log(`  - Hostinger (${SENDER_ACCOUNTS.hostinger.user}): ${hostingerSent} sent, ${hostingerFailed} failed`);
    console.log(`  - Gmail (${SENDER_ACCOUNTS.gmail.user}): ${gmailSent} sent, ${gmailFailed} failed`);

    // 7. Check if list is completed and if any other active list exists
    if (activeList.status === 'completed') {
      const nextActive = await EmailList.findOne({ status: 'active', pendingCount: { $gt: 0 } });
      if (!nextActive) {
        console.log('═══════════════════════════════════════════════════════');
        console.log('🚨 ALERT: ALL LEADS LISTS COMPLETED! PLEASE UPLOAD NEW LEADS LIST!');
        console.log('═══════════════════════════════════════════════════════');
      }
    }

    return {
      success: totalSent > 0,
      sent: totalSent,
      failed: totalFailed,
      total: pendingEmails.length,
      hostinger: {
        sent: hostingerSent,
        failed: hostingerFailed,
        quota: HOSTINGER_QUOTA,
        email: SENDER_ACCOUNTS.hostinger.user,
      },
      gmail: {
        sent: gmailSent,
        failed: gmailFailed,
        quota: GMAIL_QUOTA,
        email: SENDER_ACCOUNTS.gmail.user,
      },
      listName: activeList.fileName,
      message: `Dual batch processed: ${hostingerSent}/${HOSTINGER_QUOTA} sent via Hostinger (${SENDER_ACCOUNTS.hostinger.user}), ${gmailSent}/${GMAIL_QUOTA} sent via Gmail (${SENDER_ACCOUNTS.gmail.user}). Total: ${totalSent} sent, ${totalFailed} failed.`,
    };
  } catch (error) {
    console.error('[EMAIL CRON] Fatal batch error:', error.message);
    return { success: false, message: error.message };
  }
};

// Schedule: Run every day at USA Morning time (9:00 AM EST / 14:00 UTC) for persistent node environments
const startEmailCron = () => {
  cron.schedule('0 14 * * *', () => {
    sendDailyEmails();
  });
  console.log(`📧 Dual Email Marketing Cron scheduled: Daily at 9:00 AM EST (14:00 UTC) — 12 Hostinger + 12 Gmail = 24 Leads/Day`);
};

module.exports = { 
  startEmailCron, 
  sendDailyEmails, 
  ensureDefaultTemplates, 
  BATCH_SIZE, 
  HOSTINGER_QUOTA, 
  GMAIL_QUOTA, 
  TOTAL_DAILY_BATCH, 
  DEFAULT_TEMPLATES 
};
