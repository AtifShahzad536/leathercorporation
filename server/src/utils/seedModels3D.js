const Model3D = require('../models/Model3D');

const seedModels3D = async () => {
  try {
    const count = await Model3D.countDocuments();
    if (count > 0) {
      console.log(`ℹ️  3D Models Vault ready (${count} models registered)`);
      return;
    }

    const initialModels = [
      {
        name: 'Pro Authentic Baseball Cap & Headwear',
        sport: 'baseball',
        cut: 'Structured 6-Panel Pro Cap',
        modelUrl: '/uploads/models3d/baseball_cap_poly.glb',
        isDefault: false,
        isPublished: true,
        meshes: [
          { meshId: 'mesh_cap_crown', name: 'Cap Crown & Front Panels', region: 'front_body', defaultColor: '#0A192F', allowsDecals: true },
          { meshId: 'mesh_cap_visor', name: 'Curved Visor Bill', region: 'stripes', defaultColor: '#F5A623', allowsDecals: false },
          { meshId: 'mesh_cap_eyelets', name: 'Embroidered Eyelets', region: 'cuffs', defaultColor: '#FFFFFF', allowsDecals: false }
        ]
      },
      {
        name: 'Pro Collegiate Football Impact Helmet',
        sport: 'football',
        cut: 'VSR4 Modern Polycarbonate Shell',
        modelUrl: '/uploads/models3d/football_helmet_poly.glb',
        isDefault: false,
        isPublished: true,
        meshes: [
          { meshId: 'mesh_helmet_shell', name: 'Polycarbonate Outer Shell', region: 'front_body', defaultColor: '#0A192F', allowsDecals: true },
          { meshId: 'mesh_helmet_facemask', name: 'Carbon Steel Facemask', region: 'stripes', defaultColor: '#F5A623', allowsDecals: false },
          { meshId: 'mesh_helmet_chinstrap', name: '4-Point Chinstrap Cup', region: 'collar', defaultColor: '#FFFFFF', allowsDecals: false }
        ]
      },
      {
        name: 'Hardwood Championship Basketball Court',
        sport: 'basketball',
        cut: 'Regulation Hardwood Arena',
        modelUrl: '/uploads/models3d/basketball_court_poly.glb',
        isDefault: false,
        isPublished: true,
        meshes: [
          { meshId: 'mesh_court_floor', name: 'Maple Hardwood Floor', region: 'front_body', defaultColor: '#C5B358', allowsDecals: true },
          { meshId: 'mesh_court_paint', name: 'The Key & Painted Perimeter', region: 'left_sleeve', defaultColor: '#0047AB', allowsDecals: false }
        ]
      },
      {
        name: 'FIFA Regulation Soccer Match Stadium',
        sport: 'soccer',
        cut: 'Natural Turf Pitch & Goal Nets',
        modelUrl: '/uploads/models3d/soccer_field_poly.glb',
        isDefault: false,
        isPublished: true,
        meshes: [
          { meshId: 'mesh_turf_pitch', name: 'High-Density Turf Pitch', region: 'front_body', defaultColor: '#1E4620', allowsDecals: true }
        ]
      },
      {
        name: 'Pro Esports Gaming Battle Station',
        sport: 'esports',
        cut: 'Custom Water-Cooled Tournament Rig',
        modelUrl: '/uploads/models3d/gaming_computer_rig_poly.glb',
        isDefault: false,
        isPublished: true,
        meshes: [
          { meshId: 'mesh_chassis', name: 'Anodized Aluminum Chassis', region: 'front_body', defaultColor: '#121212', allowsDecals: true }
        ]
      }
    ];

    await Model3D.insertMany(initialModels);
    console.log(`✅ Seeded ${initialModels.length} initial 3D models into MongoDB vault`);
  } catch (err) {
    console.warn('Seed 3D Models warning:', err.message);
  }
};

module.exports = seedModels3D;
