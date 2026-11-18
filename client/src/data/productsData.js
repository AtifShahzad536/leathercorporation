import { fullCatalog296 } from './fullCatalog296';

export const categories = [
  'ALL SPORTSWEAR',
  'BASEBALL',
  'BASKETBALL',
  'FOOTBALL',
  'SOCCER',
  'ESPORTS',
  'ICE HOCKEY',
  'LACROSSE',
  'RUGBY',
  'SOFTBALL',
  'VOLLEYBALL',
  'WRESTLING',
  'FLAG FOOTBALL'
];

export const fabricTypes = [
  'Pro-Cool Sublimation Polyester (220 GSM)',
  'Micro-Mesh Dri-Fit (180 GSM)',
  'Heavyweight Dazzle Cowl & Spandex',
  'Aerodyne Micro-Interlock (160 GSM)',
  'Air-Knit Sweaters & Fight Straps',
  '4-Way Stretch Poly-Elastane'
];

export const featuresList = [
  'Full Dye-Sublimation (No Color Fading)',
  'Reinforced Bar-Tack Seams & Coverstitch',
  'Anti-Bacterial & Moisture-Wicking Finish',
  'Custom Names, Numbers & Sponsor Logos Included',
  'Tackle Twill Embroidery Option',
  'Youth, Adult & Pro Athletic Sizing'
];

export const allProducts = fullCatalog296.map(p => ({
  ...p,
  colors: p.colors || ['#1E3A8A', '#C2410C', '#111827'],
  colorNames: p.colorNames || ['Navy / White', 'Athletic Orange', 'Midnight Black'],
  placeholder: p.image,
}));

export const leatherTypes = fabricTypes;
export default allProducts;
