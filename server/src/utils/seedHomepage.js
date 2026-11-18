require('dotenv').config();
const connectDB = require('../config/db');
const SiteSetting = require('../models/SiteSetting');

const defaultHome = {
  hero: {
    badge: 'CUSTOM SPORTSWEAR & ATHLETIC UNIFORMS MANUFACTURER',
    title: 'PRO-GRADE DYE-SUBLIMATED UNIFORMS & TEAM APPAREL FACTORY DIRECT',
    buttonText: 'Explore 2026 Sports Uniforms Collection',
    videoUrl: '/leaderhero.mp4',
    posterImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1920&auto=format&fit=crop',
  },
  ticker: {
    items: [
      'DYE-SUBLIMATION SPECIALISTS',
      'CUSTOM BASEBALL UNIFORMS',
      'PRO BASKETBALL KITS',
      'HEAVYWEIGHT FOOTBALL JERSEYS',
      'AERODYNE SOCCER APPAREL',
      'CUSTOM ESPORTS HOODIES',
      'ICE HOCKEY AIR-KNIT SWEATERS',
      'FACTORY DIRECT B2B WHOLESALE',
      'FREE 3D DIGITAL MOCKUPS'
    ],
  },
  categories: [
    { id: 'baseball', name: 'Baseball', image: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=1200&q=80', badge: 'PRO TACKLE TWILL' },
    { id: 'basketball', name: 'Basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80', badge: 'DRI-FIT AIR-MESH' },
    { id: 'esports', name: 'Esports', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80', badge: 'ANTI-SNAG FABRIC' },
    { id: 'flag-football', name: 'Flag Football', image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=1200&q=80', badge: 'ZERO-POCKET REGULATION' },
    { id: 'football', name: 'Football', image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=1200&q=80', badge: 'HEAVYWEIGHT INTERLOCK' },
    { id: 'ice-hockey', name: 'Ice Hockey', image: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1200&q=80', badge: 'AIR-KNIT SWEATERS' },
    { id: 'lacrosse', name: 'Lacrosse', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80', badge: 'PRO MESH PINNIES' },
    { id: 'rugby', name: 'Rugby', image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80', badge: 'TEAR-RESISTANT DRILL' },
    { id: 'soccer', name: 'Soccer', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80', badge: 'AERODYNE VENTILATION' },
    { id: 'softball', name: 'Softball', image: 'https://images.unsplash.com/photo-1593341646782-e0b495cffd6d?auto=format&fit=crop&w=1200&q=80', badge: 'FASTPITCH COMFORT' },
    { id: 'volleyball', name: 'Volleyball', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1200&q=80', badge: '4-WAY STRETCH' },
    { id: 'wrestling', name: 'Wrestling', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80', badge: 'POWER-FLEX SPANDEX' },
  ],
  goalkeeperGloves: {
    tagline: '2026 TEAM UNIFORMS & SUBLIMATION',
    heading: 'CUSTOM TEAM JERSEYS',
    description: 'Equip your roster with factory-direct pro uniforms. Featuring 220 GSM moisture-wicking interlock fabrics, precision dye-sublimation with infinite color options, and reinforced bar-tack stitching engineered for peak athlete endurance.',
    buttonText: 'See all sports uniforms',
    video1: '/leaderhero.mp4',
    video2: '/herovideo.mp4',
  },
  clothingSection: {
    tagline: 'ATHLETE UNIFORM ANATOMY',
    heading: 'PRO-CUT SPORTSWEAR SPOTLIGHT',
    description: 'Hover over the interactive hotspots to inspect fabric specifications, cuts, and custom uniform tailoring.',
    bannerImage: '/hamlo-athletes-lineup.jpg',
  },
  textSlider: {
    slides: [
      {
        quote: 'UNIFORMS ENGINEERED FOR SPEED, STRENGTH, AND CHAMPIONSHIP RESILIENCE ON EVERY DIAMOND, COURT, AND PITCH',
        author: 'HEAD OF ATHLETIC ENGINEERING, HAMLO SPORTS'
      },
      {
        quote: 'MOLECULAR DYE-SUBLIMATION ENSURES NUMBERS, CRESTS, AND TEAM COLORS NEVER CRACK, PEEL, OR FADE OVER YEARS OF WASHING',
        author: 'PRINT ATELIER DIRECTOR, HAMLO SPORTS'
      },
      {
        quote: 'SIALKOT EXPORT CRAFTSMANSHIP DIRECT TO COACHES ACROSS THE USA AND WORLDWIDE — ELIMINATING MIDDLEMAN MARKUPS',
        author: 'GLOBAL LOGISTICS DESK, HAMLO SPORTS'
      }
    ]
  },
  sustainability: {
    leftTagline: 'OEKO-TEX CERTIFIED RECYCLED POLY',
    leftHeading: 'ENVIRONMENTAL TRANSITION',
    leftImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80',
    rightTagline: 'LAB-TESTED TENSILE DURABILITY',
    rightHeading: 'TECHNICAL LAB TESTING',
    rightImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80',
  },
  footballHistory: {
    slides: [
      {
        year: '1994',
        title: 'ATHLETIC CUT & SEW',
        subtitle: 'HAMLO FOUNDATION',
        description: 'HAMLO SPORTS started as an athletic manufacturing atelier in Sialkot, Pakistan. Crafting high-tension flatlock stitched uniforms, heavy-drill training gear, and field-tested athletic apparel engineered for endurance.',
        image: '/football/select_fodbold_1947.avif'
      },
      {
        year: '2006',
        title: 'DYE-SUBLIMATION',
        subtitle: 'MOLECULAR COLOR REVOLUTION',
        description: 'Pioneered Japanese industrial dye-sublimation print engines across team uniforms. Molecularly bonding Pantone colors, custom typography, and team crests directly into technical 220 GSM micro-interlock poly with zero cracking or fading.',
        image: '/football/Select_fodbold_1951_9c89cd36-273c-4fbf-83af-98a97ae4f3af.webp'
      },
      {
        year: '2015',
        title: 'LASER TACKLE TWILL',
        subtitle: 'COLLEGIATE 3D APPLIQUÉ',
        description: 'Installed multi-head laser embroidery cutting for collegiate varsity lettering and multi-layer zigzag tackle twill, bringing authentic MLB and NCAA standard baseball and hockey jerseys to club rosters worldwide.',
        image: '/football/Select_fodbold_1962_cd927d76-7d9c-490d-82cd-8531602753e5.webp'
      },
      {
        year: '2020',
        title: 'GLOBAL AIR CORRIDORS',
        subtitle: 'DIRECT DDP USA & EU',
        description: 'Launched direct door-to-door air freight with pre-cleared customs and duties (DDP). Delivering custom sublimated uniform sets directly to US high schools, colleges, and club directors with zero customs delays.',
        image: '/football/Select_harndbold_1972.webp'
      },
      {
        year: '2024',
        title: '12H 3D MOCKUP LAB',
        subtitle: 'PRECISION DIGITAL ARTWORK',
        description: 'Revolutionized team uniform ordering with our 12-hour 3D digital mockup turnaround. Coaches inspect true-scale typography, roster numbering, and Pantone color accuracy before a single stitch is sewn.',
        image: '/football/Select_Brillant_Super_iBall_fodbold_2022_061cbe02-ff5c-4b13-b07d-6a81a0bb2298.webp'
      },
      {
        year: '2026',
        title: 'HAMLO PRO FACTORY',
        subtitle: 'COMPLETE TEAM DIRECT OUTFITTER',
        description: 'Full 12-discipline sport production spanning Baseball, Basketball, Football, Soccer, Esports, Wrestling, and Hockey. Over 296 verified performance cuts delivered factory-direct with no minimum order requirements.',
        image: '/football/Select_Brillant_Super_iBall_fodbold_2022_061cbe02-ff5c-4b13-b07d-6a81a0bb2298.webp'
      }
    ]
  }
};

async function seedHomepage() {
  try {
    await connectDB();
    console.log('🌱 Seeding homepage_content to SiteSetting...');
    const result = await SiteSetting.findOneAndUpdate(
      { key: 'homepage_content' },
      { key: 'homepage_content', value: defaultHome, description: 'Complete Homepage Dynamic CMS Content' },
      { upsert: true, new: true }
    );
    console.log('✅ homepage_content successfully seeded into MongoDB Atlas!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding homepage_content:', err.message);
    process.exit(1);
  }
}

seedHomepage();
