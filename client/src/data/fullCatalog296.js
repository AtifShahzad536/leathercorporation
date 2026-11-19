/**
 * Complete 296 Verified Products Catalog mapped directly from Hamco's exact URL taxonomy
 * Supporting URLs like: /custom-<sport>-uniforms/custom-<sport>-<product-slug>/
 * Hosted on Cloudinary CDN for instant, globally cached, high-fidelity transparent rendering.
 * All prices synced with official Hamco Full Price Catalog (all 4 volume tiers).
 */

export const sportSlugToCategory = {
  "custom-baseball-uniforms": "BASEBALL",
  "custom-basketball-uniforms": "BASKETBALL",
  "custom-esports-apparel": "ESPORTS",
  "custom-flag-football-uniforms": "FLAG FOOTBALL",
  "custom-football-uniforms": "FOOTBALL",
  "custom-ice-hockey-uniforms": "ICE HOCKEY",
  "custom-lacrosse-uniforms": "LACROSSE",
  "custom-rugby-uniforms": "RUGBY",
  "custom-soccer-uniforms": "SOCCER",
  "custom-softball-uniforms": "SOFTBALL",
  "custom-volleyball-uniforms": "VOLLEYBALL",
  "custom-wrestling-singlets": "WRESTLING"
};

export const categoryToSportSlug = {
  "BASEBALL": "custom-baseball-uniforms",
  "BASKETBALL": "custom-basketball-uniforms",
  "ESPORTS": "custom-esports-apparel",
  "FLAG FOOTBALL": "custom-flag-football-uniforms",
  "FOOTBALL": "custom-football-uniforms",
  "ICE HOCKEY": "custom-ice-hockey-uniforms",
  "LACROSSE": "custom-lacrosse-uniforms",
  "RUGBY": "custom-rugby-uniforms",
  "SOCCER": "custom-soccer-uniforms",
  "SOFTBALL": "custom-softball-uniforms",
  "VOLLEYBALL": "custom-volleyball-uniforms",
  "WRESTLING": "custom-wrestling-singlets"
};

export const fullCatalog296 = [
  {
    "id": 1,
    "name": "Custom Full Button Baseball Jerseys",
    "slug": "custom-full-button-baseball-jerseys",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "165 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029834/hamlosports/products/baseball/custom-full-button-baseball-jerseys.png",
    "canonical": "/custom-baseball-uniforms/custom-full-button-baseball-jerseys/",
    "rating": 4.9,
    "reviews": 39,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full button-down front placket delivering authentic varsity diamond styling",
      "Four professional embellishment options — sublimation, tackle twill, embroidery, and screen printing",
      "~165 GSM moisture-wicking polyester performance knit for doubleheaders and tournaments",
      "Sublimated names and numbers included in the per-jersey price; tackle twill is $5 per name and $5 per number, and your quote shows the price for embroidered sleeve patches",
      "Youth (YS-YXL) through adult (XS-4XL) with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on jerseys as low as $39.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom full-button baseball jerseys with a traditional button-down placket, athletic cut, and ~165 GSM moisture-wicking polyester performance knit. Each jersey is tailored to order with your sublimated team colors, logo, player names, and numbers included in the base unit rate. Every jersey is designed by our in-house team and made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the first sketch to the final stitch, with a full button-down placket. Sublimated names and numbers are included in the standard jersey pricing; tackle twill is $5 per name and $5 per number, and your quote shows the price for embroidered sleeve patches. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-full-button-baseball-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 41.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "165 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 2,
    "name": "Custom 2 Button Baseball Jerseys",
    "slug": "custom-two-button-baseball-jerseys",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029835/hamlosports/products/baseball/custom-two-button-baseball-jerseys.png",
    "canonical": "/custom-baseball-uniforms/custom-two-button-baseball-jerseys/",
    "rating": 4.9,
    "reviews": 40,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Two-Button Henley Placket, pulls over the Head, no fumbling with a row of Buttons before the Game",
      "Largest Uninterrupted Chest Area of any Jersey Style, built for Full-Front Logos and Bold Team Graphics",
      "Raglan Sleeve Construction for Unrestricted Throwing, Batting, and Fielding Motion",
      "Designed for both Baseball and Softball, one Jersey Style, two Diamonds",
      "Sublimation, Tackle Twill, Embroidery, or Screen Printing, pick your Decoration Method",
      "Youth (YS to YXL) through Adult (XS to 4XL) with Volume Pricing as Low as $34.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom 2 Button Baseball Jerseys that pull on like a T-Shirt and look like Game Day. The Two-Button Henley Placket sits at the Neckline only, no Buttons running down the Chest, giving your Team the Biggest Uninterrupted Design Area of any Baseball Jersey Style. Bigger Logos, Bolder Chest Lettering, Full-Front Sublimated Graphics with nothing breaking up the Artwork. Every Uniform we deliver is Designed by our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: just your design, made the way you approved it. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-two-button-baseball-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 41.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 3,
    "name": "Custom Baseball Pants",
    "slug": "custom-baseball-pants",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029830/hamlosports/products/baseball/custom-baseball-pants.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-pants/",
    "rating": 4.9,
    "reviews": 41,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Three Leg Cuts available, Full Length, Tapered Fit, and Open-Bottom Drape",
      "Double-Ply Reinforced Knees and Sliding Seat with Back Pockets and Snap-Zipper Fly",
      "Piping, Braiding, or Knit-In Pinstripes sewn in any Color Combination to match your Jerseys",
      "Full Sublimation prints your Design directly into the Fabric, All-Over Camo, Gradients, Patterns",
      "Pair with any HAMLO SPORTS Jersey Style for a fully Coordinated Head-to-Cleat Uniform",
      "Youth (YS to YXL) through Adult (XS to 4XL) with zero oversize upcharges"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Pants built for the Slide, the Dive, and everything in between. Double-Ply Reinforced Knees, Snap-Zipper Fly, Elastic Waistband with Belt Loops, and a Sliding Seat. Available in Full Length, Tapered, or Open-Bottom with Piping, Braiding, Pinstripes, or Full Sublimated Graphics from Waist to Ankle. Every Uniform we deliver is Designed by our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: just your design, made the way you approved it. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-pants",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 44.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 44.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 4,
    "name": "Custom Baseball Jogger Pants",
    "slug": "custom-baseball-jogger-pants",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 48.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029830/hamlosports/products/baseball/custom-baseball-jogger-pants.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-jogger-pants/",
    "rating": 4.9,
    "reviews": 42,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Full-Panel Sublimation, Tackle Twill, Embroidery, or Screen Printing — Sublimation Prints Team Colors, Logos, Names, and Numbers into the Fabric",
      "Tapered Jogger Silhouette with Ribbed Elastic Cuffs for a Clean Look Above the Cleat",
      "Zippered Lower-Leg Openings for Quick on/off over Cleats Without Unlacing",
      "Lightweight Four-Way Stretch Performance Polyester with Moisture-Wicking Properties",
      "Elastic Waistband with Internal Drawcord, Side Pockets, and Optional Zippered Back Pocket",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with No minimum order quantity required, Volume Pricing on Pants as Low as $39.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Jogger Pants That Give Your Team a Unified Sideline Look from the Bus to the Bullpen. Tapered Fit with Zippered Lower-Leg Openings so Players Can Pull Them on and off over Cleats Without Unlacing, Fully Sublimated in Your Team Colors, Logos, Player Names, and Numbers included in the base unit rate. Every Uniform We Deliver Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-jogger-pants",
    "tierPrices": {
      "tier1": 48.99,
      "tier2": 46.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 48.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 46.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 5,
    "name": "Custom Baseball Practice Jerseys",
    "slug": "custom-baseball-practice-jerseys",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029831/hamlosports/products/baseball/custom-baseball-practice-jerseys.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-practice-jerseys/",
    "rating": 4.9,
    "reviews": 43,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Pullover Crew Neck or V-Neck Cut, no Buttons, no Placket, Slips On and Off Easily",
      "Moisture-Wicking Polyester keeps Players dry through long Batting Practice and Training Sessions",
      "Match your Game Day Design or create a separate Practice-Only Look with different Colors",
      "Sublimated Names, Numbers, and Team Logos included in the Per-Jersey Price",
      "Doubles as Warmup Gear, Fan Apparel, or Coach Shirts, order Extras in any Quantity",
      "Youth (YS to YXL) through Adult (XS to 4XL) starting at $29.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Practice Jerseys built for Daily Training, Batting Practice, and Pregame Warmups. Lightweight Pullover Cut in Moisture-Wicking Polyester with your Team Name, Logo, Player Numbers, and Colors sublimated into the Fabric, cut for the Practice Field. Every Practice Jersey is made direct from our specialized Sialkot, Pakistan manufacturing facility, the same Factory as our Game Day Gear. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-practice-jerseys",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 37.99,
      "tier3": 34.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 37.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 6,
    "name": "Custom Baseball Cage Jackets",
    "slug": "custom-baseball-cage-jackets",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 48.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795024660/hamlosports/products/baseball/custom-baseball-cage-jackets.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-cage-jackets/",
    "rating": 4.9,
    "reviews": 44,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Stretch Woven Polyester Fabric with Mesh Ventilation Panels",
      "Short Sleeve and Long Sleeve Options for Seasonal Versatility",
      "Full Sublimation Printing for Unlimited Color Designs and Patterns",
      "Tackle Twill Lettering and Numbering for a Classic, Raised Look",
      "Youth and Adult Sizes with Complete Team Size Run Capability",
      "No minimum order quantity required, Volume Pricing on Jackets as Low as $39.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design Your Team's Custom Baseball Cage Jackets with.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-cage-jackets",
    "tierPrices": {
      "tier1": 48.99,
      "tier2": 46.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 48.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 46.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 7,
    "name": "Custom Baseball Crewneck Sweatshirt",
    "slug": "custom-baseball-crewneck-sweatshirts",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029830/hamlosports/products/baseball/custom-baseball-crewneck-sweatshirts.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-crewneck-sweatshirts/",
    "rating": 4.9,
    "reviews": 45,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Hoodless Crew Neck Silhouette with Flat Ribbed Collar, no Drawstrings, no Bulk, no Restrictions",
      "Fleece-Lined Interior with Ribbed Cuffs and Waistband for a Secure, Layered Fit under Jackets and Warm-Ups",
      "Full Sublimation wraps your Team Design across every Panel, Camo, Gradients, All-Over Patterns, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle Twill, Embroidery, and Screen Printing available for a Traditional Stitched or Printed Finish",
      "Works as Pregame Layering, Travel Gear, Spirit Wear for Parents and Fans, or End-of-Season Team Gifts",
      "Youth (YS to YXL) through Adult (XS to 4XL) with Affordable Team Pricing starting at $36.99/Each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Crewneck Sweatshirts with a clean Crew Collar, no Hood, and no Drawstrings. Fleece Lined Interior with Ribbed Collar, Cuffs, and Waistband. Layers flat under Dugout Jackets and meets Dress Codes that restrict Hooded Apparel. Full Sublimation for Edge to Edge Graphics or Tackle Twill and Embroidery for a Classic Collegiate Finish. Every Piece is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, then Shipped Directly to Your Team. Zero broker markups: just your design, made the way you approved it. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Built to match your game-day look:.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-crewneck-sweatshirts",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 8,
    "name": "Custom Baseball Uniforms Set",
    "slug": "custom-baseball-uniforms-set",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 92.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029834/hamlosports/products/baseball/custom-baseball-uniforms-set.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-uniforms-set/",
    "rating": 4.9,
    "reviews": 46,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Choose any Jersey Collar Style paired with any Pants Cut, your Set, your Combination, no Preset Bundles",
      "Jersey, Pants, and Socks designed in a Single File so Colors, Logos, and Piping match across every Piece",
      "Full Sublimation, Tackle Twill, Embroidery, and Screen Printing available on both Jersey and Pants",
      "Order Home Sets, Away Sets, or both, each with its own Unique Design at no Extra Design Fee",
      "Reinforced Double-Ply Knees on Pants, Moisture-Wicking Jersey Fabric, and all Hardware included",
      "Youth (YS to YXL) through Adult (XS to 4XL) with Set Pricing as Low as $79.99/Set on 101+ Sets"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$79.99/Set on 101+ Sets.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-uniforms-set",
    "tierPrices": {
      "tier1": 92.99,
      "tier2": 89.99,
      "tier3": 84.99,
      "tier4": 79.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 92.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 89.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 84.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 79.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 9,
    "name": "Custom Full Length Baseball Pants",
    "slug": "custom-full-length-baseball-pants",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029835/hamlosports/products/baseball/custom-full-length-baseball-pants.png",
    "canonical": "/custom-baseball-uniforms/custom-full-length-baseball-pants/",
    "rating": 4.9,
    "reviews": 47,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Reinforced Double-Ply Knees and Sliding Seat",
      "Open-Bottom or Tapered Leg Cut with Adjustable Inseam",
      "Custom Piping, Braiding, or Pinstripes sewn down the Leg in your Team Colors",
      "Full Sublimation, Camo, Gradients, and Color-Matched Designs available",
      "Youth (YS to YXL) through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Pairs as Low as $39.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Full Length Baseball Pants with Reinforced Double-Ply Knees, Open-Bottom or Tapered Leg, and your Team's Colors Sublimated directly into the Fabric. Ankle-Length Cut that drapes over the Cleat. Add Piping, Braiding, or Pinstripes down the Leg, or go Full Sublimation for Unlimited All-Over Graphics. Every Piece is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, then Shipped Directly to Your Team. Zero broker markups: just your design, made the way you approved it. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-full-length-baseball-pants",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 44.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 44.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 10,
    "name": "Custom Full Zip Baseball Hoodies",
    "slug": "custom-full-zip-baseball-hoodies",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029835/hamlosports/products/baseball/custom-full-zip-baseball-hoodies.png",
    "canonical": "/custom-baseball-uniforms/custom-full-zip-baseball-hoodies/",
    "rating": 4.9,
    "reviews": 48,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-Length Front Zipper for Quick Layering over Game Jerseys, no pulling over Helmet or Cap",
      "Fleece-Lined Interior with Soft Brushed Finish for Warmth from First Pitch through the Final Out",
      "Kangaroo Pocket, Ribbed Cuffs, Ribbed Waistband, and Adjustable Drawstring Hood",
      "Sublimation, Tackle Twill, Embroidery, or Screen Printing, use one Method or combine Multiple on the same Hoodie",
      "Coordinates with any HAMLO SPORTS Jersey, Pants, or Jacket for a Unified Team Look on and off the Field",
      "Youth (YS to YXL) through Adult (XS to 4XL) with Affordable Team Pricing starting at $39.99/Each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom Full Zip Baseball Hoodies for the Dugout, the Bus, and Early Morning Warmups. Full Length Zipper for easy on and off over Jerseys. Fleece Lined Interior, Kangaroo Pocket, Ribbed Cuffs and Waistband with a Drawstring Hood. Sublimation, Tackle Twill, Embroidery, or Screen Printing available. Every Uniform we deliver is Designed by our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: just your design, made the way you approved it. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Built to match your game-day look:.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-full-zip-baseball-hoodies",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 11,
    "name": "Custom Knicker Style Baseball Pants",
    "slug": "custom-knicker-style-baseball-pant",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029835/hamlosports/products/baseball/custom-knicker-style-baseball-pant.png",
    "canonical": "/custom-baseball-uniforms/custom-knicker-style-baseball-pant/",
    "rating": 4.9,
    "reviews": 49,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Elastic Cuff Hem sits just below the Knee, built to Showcase Tall Socks, Stirrups, or Solid Team Colors underneath",
      "Double-Ply Reinforced Knees and Sliding Seat on a Shorter, Lighter Frame than Full-Length Pants",
      "Snap-Zipper Fly, Elastic Waistband with Belt Loops, and two Inset Back Pockets",
      "Piping, Braiding, or Knit-In Pinstripes sewn down the Leg in any Team Color Combination",
      "Full Dye Sublimation prints your Graphics directly into the Double-Knit Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Youth (YS to YXL) through Adult (XS to 4XL), No minimum order quantity required, Volume Pricing starting at $34.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom Knicker Style Baseball Pants cut just below the Knee with an Elastic Cuff that puts your Socks and Stirrups on full Display. Double-Ply Reinforced Knees, Sliding Seat, Snap-Zipper Fly, Elastic Waistband with Belt Loops, same Heavy-Duty Build as Full-Length Pants in a Shorter Profile. Add Piping, Braiding, Pinstripes, or Full Sublimation from Waistband to Cuff. Every Uniform we deliver is Designed by our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: just your design, made the way you approved it. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-knicker-style-baseball-pant",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 41.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 12,
    "name": "Custom Performance Baseball Polos",
    "slug": "custom-performance-baseball-polos",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029835/hamlosports/products/baseball/custom-performance-baseball-polos.png",
    "canonical": "/custom-baseball-uniforms/custom-performance-baseball-polos/",
    "rating": 4.9,
    "reviews": 50,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Moisture-Wicking Polyester Fabric Pulls Sweat Away from the Body During Outdoor Games and Practices",
      "Classic Collar with a Professional Finish That Looks Right on the Bench, at Banquets, and on Recruiting Visits",
      "Full Sublimation, Tackle Twill & Embroidery, or Screen Printing for Team Logos, Staff Names, and Program Branding",
      "Men's (XS to 4XL), Women's (XS to 4XL), and Youth (YS to YXL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Polos as Low as $29.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Performance Baseball Polos in Moisture Wicking Polyester for Coaches, Staff, and Team Personnel. Classic Collar Design with a Professional Finish for the Sideline, Team Events, and Travel Days. Available with Embroidery, Full Sublimation, Tackle Twill, or Screen Printing. Every Uniform We Deliver Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Built to match your game-day look:.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-performance-baseball-polos",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 31.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 31.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 13,
    "name": "Custom Baseball Pullover Hoodies",
    "slug": "custom-baseball-pullover-hoodies",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029832/hamlosports/products/baseball/custom-baseball-pullover-hoodies.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-pullover-hoodies/",
    "rating": 4.9,
    "reviews": 51,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Fleece-Lined Pullover Hoodie with Drawstring Hood, Ribbed Cuffs, Ribbed Waistband, and Kangaroo Pocket",
      "Full Sublimation prints your Team Graphics, Camo, Gradients, or All-Over Patterns directly into the Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle Twill, Embroidery, and Screen Printing also available, mix Decoration Methods on a Single Hoodie",
      "Designed for Pregame Warm-Ups, Dugout Wear, Team Travel, and Off-Field Gear for Players, Coaches, and Fans",
      "Sublimated Designs match your HAMLO SPORTS Jerseys, Pants, and Accessories for a Head-to-Cleat Coordinated Look",
      "Youth (YS to YXL) through Adult (XS to 4XL) with Affordable Team Pricing starting at $38.99/Each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design Custom Baseball Pullover Hoodies for the Dugout, the Bus Ride, and Early Morning Warmups. Fleece Lined Interior with a Drawstring Hood, Ribbed Cuffs and Waistband, and a Front Kangaroo Pocket. Full Sublimation for All Over Graphics or Tackle Twill and Embroidery for a Classic Stitched Look, HAMLO SPORTS offers both Decoration Methods on the same Hoodie. Every Hoodie is Designed by Our In-House Team and Produced by our own Crew direct from our specialized Sialkot, Pakistan manufacturing facility, from Initial Design to Final Stitch. Zero broker markups: just your design, made the way you approved it. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Built to match your game-day look:.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-pullover-hoodies",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 14,
    "name": "Custom Baseball Quarter Zip Pullover",
    "slug": "custom-baseball-quarter-zipper-pullover",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029831/hamlosports/products/baseball/custom-baseball-quarter-zipper-pullover.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-quarter-zipper-pullover/",
    "rating": 4.9,
    "reviews": 52,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Long Sleeve and Short Sleeve Options with Lightweight Woven Polyester and Mesh Ventilation Panels at the Back and Underarms",
      "Low-Profile Collar with Zipper Garage sits flat against the Neck during Overhead Throws",
      "Full Sublimation prints your Team Design across every Panel, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle Twill, Embroidery, and Screen Printing also available, Left-Chest Logo, Back Number, or Full Custom Layout",
      "Sized for On-Field Movement with a Relaxed Athletic Cut that Layers over Compression Shirts and under Full-Zip Jackets",
      "Youth (YS to YXL) through Adult (XS to 4XL) with Affordable Team Pricing starting at $39.99/Each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Order a Custom Baseball Quarter Zip Pullover designed for Batting Practice, Cage Sessions, and Pregame Warmups. Lightweight Woven Construction with Mesh Ventilation Panels keeps Arms free without the Bulk of a Hoodie or Jacket. Available in Long Sleeve and Short Sleeve with a Low Profile Collar and Zipper Garage. Train in it, Layer it, Swing in it, Throw in it. Every Baseball Quarter Zip Pullover is built from scratch by our Production Team direct from our specialized Sialkot, Pakistan manufacturing facility. Zero broker markups: just your design, made the way you approved it. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Built to match your game-day look:.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-quarter-zipper-pullover",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 15,
    "name": "Round Neck Baseball Jerseys",
    "slug": "custom-baseball-round-neck-jerseys",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 41.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029831/hamlosports/products/baseball/custom-baseball-round-neck-jerseys.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-round-neck-jerseys/",
    "rating": 4.9,
    "reviews": 53,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Crew Neck Collar, no Buttons and no V-Cut for the Cleanest Front Panel of any Pullover Style",
      "Higher Neckline extends the Printable Surface Area across the Upper Chest and Shoulders",
      "Edge-to-Edge Sublimation wraps Collar, Sleeves, and Body as one Seamless Piece",
      "Tackle Twill, Embroidery, or Screen Printing also available for Names and Logos",
      "Youth (YS to YXL) through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Jerseys as Low as $29.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom Round Neck Baseball Jerseys with a clean Crew Collar that sits flat, feels invisible, and never gets in the way. No Buttons, no V-Cut, just a Smooth, Unbroken Neckline that wraps seamlessly into a Fully Sublimated Design. Higher Collar means more Upper Chest Coverage and a wider Print Surface across the Front Panel. Every Round Neck Jersey is Designed by Our In-House Team, then Printed and Assembled by our own Production Crew direct from our specialized Sialkot, Pakistan manufacturing facility, from your Approved Mockup to your Doorstep. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-round-neck-jerseys",
    "tierPrices": {
      "tier1": 41.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 41.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 16,
    "name": "Custom Baseball Dugout Jackets",
    "slug": "custom-baseball-dugout-jackets",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 99.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029830/hamlosports/products/baseball/custom-baseball-dugout-jackets.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-dugout-jackets/",
    "rating": 4.9,
    "reviews": 54,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Full-Zip or Full-Button Front Closure with a Woven Polyester Shell and a Quilted Lining",
      "Knit Collar, Cuffs, and Waistband in Solid or Contrast Team Colors for a Clean, Structured Finish",
      "Full Sublimation across all Panels, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle Twill, Embroidery, and Screen Printing also available for Chest Logos, Back Numbers, and Sleeve Art",
      "Youth (YS to YXL) through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Jackets as Low as $84.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Dugout Jackets built with a Woven Polyester Shell, Quilted Interior, and Knit Collar, Cuffs, and Waistband in your Team Colors. Full Zip or Full Button Front with Slash Pockets and a Relaxed Athletic Cut that fits over Jerseys. Full Sublimation across every Panel or Tackle Twill and Embroidery for a Stitched Finish. Every Uniform we deliver is Designed by our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: just your design, made the way you approved it. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Built to match your game-day look:.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-dugout-jackets",
    "tierPrices": {
      "tier1": 99.99,
      "tier2": 94.99,
      "tier3": 89.99,
      "tier4": 84.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 99.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 94.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 89.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 84.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 17,
    "name": "Custom Baseball Short Sleeve Practice T-shirts",
    "slug": "custom-baseball-short-sleeve-practice-t-shirts",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 36.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029832/hamlosports/products/baseball/custom-baseball-short-sleeve-practice-t-shirts.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-short-sleeve-practice-t-shirts/",
    "rating": 4.9,
    "reviews": 55,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Lightweight Moisture-Wicking Polyester Pulls Sweat Away from the Body During Outdoor Workouts and Indoor Cage Sessions",
      "Breathable Mesh Construction for Doubleheaders, Camps, and All-Day Tournaments",
      "Crew Neck with Athletic Fit and Tagless Interior",
      "Full Sublimation Prints Your Team Design Across Every Panel, or Go with Screen Printing or Embroidery for Logos and Numbers",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Shirts as Low as $27.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Short Sleeve Practice T-Shirts in.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-short-sleeve-practice-t-shirts",
    "tierPrices": {
      "tier1": 36.99,
      "tier2": 34.99,
      "tier3": 31.99,
      "tier4": 27.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 36.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 31.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 27.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 18,
    "name": "Sleeveless Baseball Jerseys",
    "slug": "custom-baseball-sleeveless-jerseys",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 41.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029832/hamlosports/products/baseball/custom-baseball-sleeveless-jerseys.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-sleeveless-jerseys/",
    "rating": 4.9,
    "reviews": 56,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Vest-Cut Armholes, Complete Arm Freedom through every Throw, Swing, and Dive",
      "Layer over Compression Sleeves and Undershirts, or wear Standalone in Summer Heat",
      "Full Button-Down or Pullover Front, your Team's Call",
      "Sublimation, Tackle Twill, Embroidery, or Screen Printing for Names, Numbers, and Logos",
      "Youth (YS to YXL) through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Jerseys as Low as $29.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom Sleeveless Baseball Jerseys with a Vest-Cut Build that gives Arms full, Unrestricted Range of Motion, no Fabric, no Drag, no Resistance through the Throw. Open Armholes work solo in the Heat or Layered over a Compression Sleeve. Full Button-Down or Pullover Front available depending on your Team's Preference. Every Sleeveless Jersey is built inside our dedicated factory facility Overseas from First Cut to Final Pack. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-sleeveless-jerseys",
    "tierPrices": {
      "tier1": 41.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 41.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 19,
    "name": "Custom Baseball Sliding Shorts",
    "slug": "custom-baseball-sliding-shorts",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 48.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029832/hamlosports/products/baseball/custom-baseball-sliding-shorts.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-sliding-shorts/",
    "rating": 4.9,
    "reviews": 57,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Sublimation, Screen Printing, or Embroidery Available — Sublimation Dyes Your Design Directly into the Compression Fabric",
      "Padded Hip and Thigh Panels with Lightweight EVA Foam for Slides and Dives",
      "Four-Way Stretch Compression (85% Polyester / 15% Spandex) Fits Like a Second Skin",
      "Integrated Cup Pocket Compatible with Standard Athletic Cups (Cup Sold Separately)",
      "Moisture-Wicking Quick-Dry Fabric with Mesh Ventilation Zones for All-Day Comfort",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with No minimum order quantity required, Volume Pricing on Pairs as Low as $39.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Sliding Shorts Fully Sublimated in Your Team Colors with Logos, Player Numbers, and Graphics Built into the Compression Fabric. Padded Hip and Thigh Panels Absorb Impact on Slides and Dives. HAMLO SPORTS Builds Sliding Shorts That Match Your Jerseys, Pants, and Entire Team Identity. Every Uniform We Deliver Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-sliding-shorts",
    "tierPrices": {
      "tier1": 48.99,
      "tier2": 46.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 48.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 46.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 20,
    "name": "Custom Baseball Stirrup Socks",
    "slug": "custom-baseball-stirrup-socks",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 29.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029832/hamlosports/products/baseball/custom-baseball-stirrup-socks.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-stirrup-socks/",
    "rating": 4.9,
    "reviews": 58,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Full-Color Dye Sublimation with Unlimited Colors, no Knit-Line Overlap, and no Stitching Artifacts",
      "Available in Crew, Knee-High (Over-the-Calf), and Ankle Heights with the Classic Stirrup Pattern Sublimated Directly Into the Sock",
      "Moisture-Wicking Performance Polyester That Stays Dry from the First Pitch Through Extra Innings",
      "Multiple Cut-Window Lengths from a Traditional Low Opening to a High Old-School Stirrup",
      "Pairs With Your HAMLO SPORTS Jerseys, Pants, and Warm-Ups so Your Uniform Coordinates from Cap to Cleat",
      "Youth Through Adult Sizes with No minimum order quantity required, Volume Pricing on Pairs as Low as $19.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Stirrup Socks That Give Your Team the Classic Stirrup Look Without Layering a Separate Sanitary Sock Underneath. Fully Sublimated in Your Team Colors with Logos, Player Numbers, and Custom Graphics Printed Directly into the Fabric, Unlimited Colors with no Knit-Line Limitations. Every Uniform We Deliver Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-stirrup-socks",
    "tierPrices": {
      "tier1": 29.99,
      "tier2": 24.99,
      "tier3": 22.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 29.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 24.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 22.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 21,
    "name": "Custom Baseball Team Backpacks",
    "slug": "custom-baseball-team-backpacks",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029833/hamlosports/products/baseball/custom-baseball-team-backpacks.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-team-backpacks/",
    "rating": 4.9,
    "reviews": 59,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full-Wrap Dye Sublimation Prints Your Team Colors, Logos, Player Names, and Numbers Directly into the Fabric with Unlimited Colors and Zero Upcharge",
      "Dual Bat Sleeves Hold Two Bats Securely on the Exterior so the Main Compartment Stays Open for Gloves, Helmets, and Uniforms",
      "Ventilated Bottom Cleat Compartment Keeps Dirty Cleats Separated from Clean Gear After Games and Practices",
      "Dugout Fence Hook Lets Players Hang the Bag off the Chain-Link Instead of Tossing It in the Dirt Between Innings",
      "Padded Shoulder Straps, Vented Back Panel, and Multiple Pockets",
      "No minimum order quantity required, Volume Pricing on Backpacks as Low as $64.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Team Backpacks That Carry Every Piece of Game Day Gear and Match Your Uniforms from the Parking Lot to the Dugout. Fully Sublimated in Your Team Colors with Logos, Player Names, and Numbers Built into Durable Denier Fabric. Dedicated Bat Sleeves, Ventilated Cleat Compartment, and a Fence Hook so the Bag Works as Hard as the Player Carrying It. Every Uniform We Deliver Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Design it to match your team baseball jerseys, one look from the dugout to the bus.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-team-backpacks",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 69.99,
      "tier4": 64.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 69.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 64.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 22,
    "name": "Custom Baseball Team Duffle Bags",
    "slug": "custom-baseball-team-duffle-bags",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 89.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029833/hamlosports/products/baseball/custom-baseball-team-duffle-bags.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-team-duffle-bags/",
    "rating": 4.9,
    "reviews": 60,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-Wrap Dye Sublimation Prints Your Team Colors, Logos, Player Names, and Numbers Directly into the Bag Fabric with Unlimited Colors and Zero Upcharge",
      "Side Bat Sleeves Hold Bats Securely on the Exterior so the Main Compartment Stays Open for Gloves, Helmets, and Extra Uniforms",
      "Ventilated Bottom Cleat Compartment Isolates Dirty Cleats from Clean Gear After Games, Practices, and Tournament Weekends",
      "Padded Adjustable Shoulder Strap Plus Carry Handles for Comfortable Transport from the Parking Lot to the Dugout",
      "Multiple Pockets Outside the Main Compartment",
      "No minimum order quantity required, Volume Pricing on Bags as Low as $74.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Team Duffle Bags Built to Haul a Full Game Day Loadout and Match Your Team's Look. Fully Sublimated in Your Team Colors with Logos, Player Names, and Numbers on Durable Denier Fabric. Spacious Main Compartment, Side Bat Sleeves, and a Ventilated Cleat Pocket That Keeps Dirty Cleats Away from Clean Uniforms. Every Uniform We Deliver Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Design it to match your team baseball jerseys, one look from the dugout to the bus.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-team-duffle-bags",
    "tierPrices": {
      "tier1": 89.99,
      "tier2": 84.99,
      "tier3": 79.99,
      "tier4": 74.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 89.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 84.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 79.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 74.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 23,
    "name": "Custom Baseball Traditional Bags",
    "slug": "custom-baseball-traditional-bags",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 89.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029833/hamlosports/products/baseball/custom-baseball-traditional-bags.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-traditional-bags/",
    "rating": 4.9,
    "reviews": 61,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Multiple Bat Compartments Keep Bats Separated and Protected with Quick-Access Openings for Between-Inning Swaps",
      "Dedicated Helmet Pocket for Your Batting Helmet",
      "Ventilated Cleat Compartment Isolates Dirty Cleats from Clean Uniforms, Gloves, and Personal Items",
      "Carry Handles",
      "Full-Color Dye Sublimation Prints Team Colors, Logos, Player Names, and Numbers Directly into Fabric with Unlimited Colors",
      "No minimum order quantity required, Volume Pricing on Bags as Low as $74.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Traditional Bags Built for Players Who Want a Classic Equipment Bag with Room for Bats, Helmet, Gloves, and Cleats in One Organized Carry. Fully Customizable with Sublimated Team Colors, Logos, and Player Names on Heavy-Duty Fabric Built for Dugout Use and Tournament Travel. Every Uniform We Deliver Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Design it to match your team baseball jerseys, one look from the dugout to the bus.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-traditional-bags",
    "tierPrices": {
      "tier1": 89.99,
      "tier2": 84.99,
      "tier3": 79.99,
      "tier4": 74.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 89.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 84.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 79.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 74.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 24,
    "name": "Custom Baseball Training Shorts",
    "slug": "custom-baseball-training-shorts",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029833/hamlosports/products/baseball/custom-baseball-training-shorts.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-training-shorts/",
    "rating": 4.9,
    "reviews": 62,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Direct-to-Fabric Sublimation, Screen Printing, or Embroidery Available — Sublimation Prints Your Design into the Polyester",
      "Elastic Waistband with Internal Drawcord",
      "Side Pockets for Practice, Warmups, and Travel",
      "9-11 Inch Inseam Length Scaled by Size for Optimal Mobility During Conditioning, Cage Work, and Infield Drills",
      "Coordinates with Your HAMLO SPORTS Jerseys, Pants, Hoodies, and Warm-Ups for a Complete Team Look from Batting Practice to Game Day",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with No minimum order quantity required, Volume Pricing on Pairs as Low as $29.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Training Shorts Built for Batting Practice, Cage Sessions, Pregame Warmups, Infield Drills, and Summer Conditioning. Lightweight Moisture Wicking Polyester with an Elastic Waistband, Internal Drawcord, and Functional Pockets. Every Pair Is Fully Customizable with Your Sublimated Team Colors, Logo, Player Names, and Numbers included in the base unit rate. Every Uniform We Deliver Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-training-shorts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 25,
    "name": "V-neck Baseball Jerseys",
    "slug": "custom-baseball-v-neck-jerseys",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 41.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029834/hamlosports/products/baseball/custom-baseball-v-neck-jerseys.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-v-neck-jerseys/",
    "rating": 4.9,
    "reviews": 38,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Zero Buttons, Zero Placket, the Cleanest, Most Streamlined Neckline of any Baseball Jersey Style",
      "Open V-Cut Collar with No Buttons",
      "Retro-Inspired Silhouette with Knitted Neck and Sleeve Trim Options for a Vintage Team Look",
      "Smooth, Unbroken Front Panel, ideal for Full-Chest Sublimated Designs and Oversized Logos",
      "Sublimation, Tackle Twill, Embroidery, or Screen Printing, choose your Decoration Method",
      "Youth (YS to YXL) through Adult (XS to 4XL) with Volume Pricing as Low as $29.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom V-Neck Baseball Jerseys with a clean Open Collar cut, Relaxed Athletic Fit, and Moisture-Wicking Polyester. Your Sublimated Team Colors, Logo, Player Names, and Numbers Are included in the base unit rate. The V-Neck gives you a Classic Look trusted by Rec Leagues, Co-Ed Teams, and Competitive Programs. Every V-Neck Jersey is Cut, Printed, and Stitched by our Production Team direct from our specialized Sialkot, Pakistan manufacturing facility, from Design File to Delivery Box. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-v-neck-jerseys",
    "tierPrices": {
      "tier1": 41.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 41.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 26,
    "name": "Custom Baseball Varsity Jackets",
    "slug": "custom-baseball-varsity-jackets",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 109.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029834/hamlosports/products/baseball/custom-baseball-varsity-jackets.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-varsity-jackets/",
    "rating": 4.9,
    "reviews": 39,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Satin Polyester Shell with Quilted Lining and Snap-Front Closure in any Team Color Combination",
      "Striped Rib-Knit Collar, Cuffs, and Waistband with Single, Double, or Triple Stripe Options",
      "Chenille Letter Patches, Tackle Twill, Embroidery, Screen Printing, or Full Sublimation available",
      "Slash Front Pockets",
      "Youth (YS to YXL) through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Jackets as Low as $94.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Varsity Jackets with a Satin Polyester Shell, Quilted Interior Lining, Snap Front Closure, and Striped Knit Collar, Cuffs, and Waistband in your Team Colors. Raglan Sleeves with Contrasting Body and Sleeve Panels for the Classic Two Tone Letterman Look. Decorate with Chenille Letter Patches, Tackle Twill, Embroidery, or Full Sublimation, all applied In House direct from our specialized Sialkot, Pakistan manufacturing facility. Every Uniform we deliver is Designed by our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: just your design, made the way you approved it. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Built to match your game-day look:.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-varsity-jackets",
    "tierPrices": {
      "tier1": 109.99,
      "tier2": 104.99,
      "tier3": 99.99,
      "tier4": 94.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 109.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 104.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 99.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 94.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 27,
    "name": "Custom Baseball Wind Pullovers",
    "slug": "custom-baseball-wind-pullovers",
    "categorySlug": "custom-baseball-uniforms",
    "category": "BASEBALL",
    "sport": "Baseball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029834/hamlosports/products/baseball/custom-baseball-wind-pullovers.png",
    "canonical": "/custom-baseball-uniforms/custom-baseball-wind-pullovers/",
    "rating": 4.9,
    "reviews": 40,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Water-Resistant, Wind-Resistant Woven Polyester Shell",
      "Jersey-Lined Interior with Mesh Inserts at the Gussets",
      "V-Neck Pullover or Half-Zip Neckline, choose the Collar Style that fits your Team's Look and League Rules",
      "Full Sublimation covers the entire Shell with Team Graphics, or go with Embroidery and Tackle Twill for a Traditional Finish",
      "Raglan Sleeves, Elastic Cuffs, and Side Seam Pockets with a Relaxed Fit that Layers over any Mid-Layer",
      "Youth (YS to YXL) through Adult (XS to 4XL) with Affordable Team Pricing starting at $39.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Baseball Wind Pullovers that resist Wind. Water-Resistant Polyester Shell with Jersey Lined Interior and Mesh Underarm Gussets. Available in V-Neck or Half Zip with Raglan Sleeves, Side Pockets, and Elastic Cuffs. Packable and Layers over any Warmup Top. Every order is made factory-direct in our Sialkot, Pakistan export manufacturing facility, with Zero broker markups: just your design, made the way you approved it. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Built to match your game-day look:.",
    "cloudinaryPublicId": "hamlosports/products/baseball/custom-baseball-wind-pullovers",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 28,
    "name": "Custom Basketball Joggers",
    "slug": "custom-basketball-joggers",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029836/hamlosports/products/basketball/custom-basketball-joggers.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-joggers/",
    "rating": 4.9,
    "reviews": 41,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Tapered Athletic Fit with Elastic Ankle Cuffs, the Modern Silhouette for Competitive Teams",
      "All-over dye-sublimation infuses vector artwork directly into the polyester fiber, with molecularly infused graphics that will never crack, peel, or fade",
      "Deep Zippered Side Pockets Keep Phones, Keys, and Wallets Secure During Travel",
      "Lightweight Moisture-Wicking Polyester, Warm Without the Bulk of Traditional Fleece",
      "Youth (YS to YXL) Through Adult (XS to 4XL) in the Per-Piece Price, No Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Pants as Low as $36.99/Each on 101+ Pieces",
      "Tackle Twill, Embroidery, and Screen Printing Also Available",
      "Affordable Team Pricing, zero hidden setup costs, No Hidden Costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Joggers Designed for the Pregame Tunnel Walk, Tournament Travel, and Everything in Between. Modern Tapered Fit with Elastic Ankle Cuffs, Adjustable Drawstring Waistband, and Deep Zippered Pockets. Built from Lightweight Moisture Wicking Performance Polyester that Keeps Your Squad Comfortable from Warmups Through Cool Downs. Every Basketball Jogger We Produce is Built and Printed direct from our specialized Sialkot, Pakistan manufacturing facility from Start to Finish. No generic off-the-shelf blanks, No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-joggers",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 29,
    "name": "Custom Basketball Socks",
    "slug": "custom-basketball-socks",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 22.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029839/hamlosports/products/basketball/custom-basketball-socks.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-socks/",
    "rating": 4.9,
    "reviews": 42,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Team Colors, Logo, and Design Jacquard-Knitted Directly into the Fiber, molecularly infused graphics that will never crack, peel, or fade",
      "Available in Crew and Mid-Calf Lengths with a Ribbed Cuff",
      "No minimum order quantity required, Volume Pricing on Pairs as Low as $14.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Socks That Complete Your Team's Uniform from the Court Up. Each Pair Features a Cushioned Footbed and Arch Support, with Your.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-socks",
    "tierPrices": {
      "tier1": 22.99,
      "tier2": 19.99,
      "tier3": 18.99,
      "tier4": 14.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 22.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 19.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 18.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 14.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 30,
    "name": "Custom Basketball Backpack",
    "slug": "custom-basketball-backpack",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029835/hamlosports/products/basketball/custom-basketball-backpack.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-backpack/",
    "rating": 4.9,
    "reviews": 43,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Multiple Decoration Methods — Full Sublimation for Team Colors and All-Over Graphics, Plus Tackle Twill, Embroidery, and Screen Printing for Player Names, Numbers, and Sewn Team Logos",
      "Dedicated Mesh Basketball Compartment Keeps the Ball Separated from Clean Gear",
      "Ventilated Shoe Pocket at the Base Keeps Sneakers Out of the Main Compartment",
      "Large Capacity in Heavy-Duty Polyester with Reinforced Bottom, Dual-Zip Main Compartment, and Padded Laptop Sleeve",
      "Ergonomic Padded Shoulder Straps with Cushioned Back Panel for Comfortable All-Day Carry",
      "No minimum order quantity required, Volume Pricing on Backpacks as Low as $64.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Order a Custom Basketball Backpack for the Gym and the Road. Each Large-Capacity Bag Features a Dedicated Basketball Compartment, Ventilated Shoe Pocket, and Padded Laptop Sleeve with Your Team Colors Sublimated Across the Body. Add Player Names and Logos in the Decoration Method You Choose. Every Backpack is Designed by Our In-House Team and Produced factory-direct in our Sialkot, Pakistan export manufacturing facility. Your Complete Design is Applied Across the Shell Using Sublimation, Tackle Twill, Embroidery, and Screen Printing. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Order them with your custom basketball uniforms: each set counts as one item toward your price tier, and each backpack counts as one more.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-backpack",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 69.99,
      "tier4": 64.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 69.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 64.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 31,
    "name": "Custom Basketball Arm Sleeves",
    "slug": "custom-basketball-arm-sleeves",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 22.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029835/hamlosports/products/basketball/custom-basketball-arm-sleeves.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-arm-sleeves/",
    "rating": 4.9,
    "reviews": 44,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Four-Way Stretch Compression Fabric for Full Range of Motion",
      "Wrist to Upper Bicep Coverage (~21 inches Length) with Tapered Fit at Both Ends",
      "Silicone Grip Band at the Upper Bicep Prevents Sliding During Play",
      "Full-Panel Sublimation Wraps the Entire Sleeve with Team Colors, Logo, and Numbers, with molecularly infused graphics that will never crack, peel, or fade",
      "Available in Youth Through Adult 2XL with a Tapered, Contoured Fit",
      "Sold Per Sleeve — Order 2 for a Pair, Mix Sizes Within a Single Order at No Extra Cost",
      "No minimum order quantity required, Volume Pricing on Sleeves as Low as $14.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design Custom Basketball Arm Sleeves that Match Your Team's Jerseys, Shorts, and Socks for a Coordinated Look from Wrist to Upper Bicep. Each Sleeve is Built with Four Way Stretch Compression Fabric (~21 inches Length) and a Silicone Grip Band at the Bicep that Locks in Place Through Every Play, No Sliding, No Readjusting. Every Sleeve is Produced factory-direct in our Sialkot, Pakistan export manufacturing facility Using Full-Panel Sublimation so Your Team Colors, Logo, Player Numbers, and Design Wrap the Entire Sleeve, with No Print Layer to Crack or Peel. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Order them with your custom basketball uniforms: each set counts as one item toward your price tier, and each sleeve counts as one more.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-arm-sleeves",
    "tierPrices": {
      "tier1": 22.99,
      "tier2": 19.99,
      "tier3": 18.99,
      "tier4": 14.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 22.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 19.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 18.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 14.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 32,
    "name": "Custom Basketball Compression Shorts",
    "slug": "custom-basketball-compression-shorts",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029836/hamlosports/products/basketball/custom-basketball-compression-shorts.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-compression-shorts/",
    "rating": 4.9,
    "reviews": 45,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "4-Way Stretch Polyester-Spandex Compression",
      "Full Sublimation Dyed into Spandex-Blend Fabric, Preserves Stretch, with molecularly infused graphics that will never crack, peel, or fade",
      "Team-Branded Base Layer Visible Under Game Shorts During Play",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, no Extended-Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Pairs as Low as $34.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Compression Shorts Built from 4 Way Stretch Polyester Spandex. Every Pair Is Sublimated with Your Team Colors, Logo, and Player Numbers Dyed into the Fabric, with No Print Layer to Crack or Peel. Every Pair Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility. Zero broker markups: Just Your Base Layer, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-compression-shorts",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 33,
    "name": "Custom Basketball Crewneck Sweatshirts",
    "slug": "custom-basketball-crewneck-sweatshirts",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029836/hamlosports/products/basketball/custom-basketball-crewneck-sweatshirts.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-crewneck-sweatshirts/",
    "rating": 4.9,
    "reviews": 46,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Classic Crewneck Silhouette with no Hood, Layers Flat Under Jackets and Meets School Dress Codes",
      "Available in 100% Cotton, 100% Polyester, or Cotton-Polyester Fleece Blend — Choose Your Fabric Based on Preferred Decoration Method",
      "Decoration Tailored to Your Fabric — Sublimation on Polyester, Screen Printing on Cotton, Tackle Twill and Embroidery on Either",
      "Ribbed Crewneck Collar, Cuffs, and Waistband for a Structured Fit",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, no Extended-Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Sweatshirts as Low as $36.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Crewneck Sweatshirts Built with Premium Fleece Construction and Custom Team Graphics Decorated to Your Choice — Sublimation on Polyester, Screen Printing on Cotton, or Tackle Twill and Embroidery on Either. No Hood to Bunch Under Jackets, no Zipper Splitting the Design, Just a Clean Round Neckline with Your Team Colors, Logo, Names, and Numbers Front and Back. Every Sweatshirt Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from Design to Final Stitch, no Outsourced Printing, Zero broker markups. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Designed to match your team basketball jerseys, from warm-ups to the bench.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-crewneck-sweatshirts",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 34,
    "name": "Custom Basketball Full Zip Hoodies",
    "slug": "custom-basketball-full-zip-hoodies",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029836/hamlosports/products/basketball/custom-basketball-full-zip-hoodies.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-full-zip-hoodies/",
    "rating": 4.9,
    "reviews": 47,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-Zip Front for Easy on/off During Pregame, Halftime, and Bench Rotations",
      "Available in 100% Cotton, 100% Polyester, or Cotton-Polyester Fleece Blend — Choose Your Fabric Based on Preferred Decoration Method",
      "Decoration Tailored to Your Fabric — Sublimation on Polyester, Screen Printing on Cotton, Tackle Twill and Embroidery on Either",
      "Adjustable Drawstring Hood, Front Pockets, and Ribbed Cuffs and Hem",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, no Extended-Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Hoodies as Low as $39.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Full Zip Hoodies Built for Pregame Warmups, Bench Wear, and Team Travel. Soft Fleece-Lined Interior for Warmth, with Custom Team Branding Decorated to Your Choice — Sublimation on Polyester, Screen Printing on Cotton, or Tackle Twill and Embroidery on Either. Every Hoodie Ships with Your Team Colors, Logo, Player Names, and Numbers, and Sublimated Designs on the Polyester Option Are included in the base unit rate. Every Hoodie We Deliver Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Design Sketch to the Final Stitch. Zero broker markups: Just Your Warmup Gear, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Designed to match your team basketball jerseys, from warm-ups to the bench.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-full-zip-hoodies",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 35,
    "name": "Custom Basketball Shooting Shirts",
    "slug": "custom-basketball-shooting-shirts",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029838/hamlosports/products/basketball/custom-basketball-shooting-shirts.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-shooting-shirts/",
    "rating": 4.9,
    "reviews": 48,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Long Sleeve Athletic Fit Designed to Layer Over Game Jerseys Without Restricting Shooting Motion",
      "Full Sublimation with Team Colors, Logos, Names, and Numbers, with molecularly infused graphics that will never crack, peel, or fade",
      "Moisture-Wicking Performance Polyester Pulls Sweat Away During Warmups",
      "Loose Comfortable Fit Sits Over the Game Jersey, Easy to Pull Off Quickly at Check-In",
      "Tackle Twill, Embroidery, and Screen Printing Also Available for Classic Sewn Lettering",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, No Extended-Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Shirts as Low as $26.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Shooting Shirts as the Top Layer Your Team Wears Over Game Jerseys During Pregame Shootaround, Layup Lines, and Player Introductions. Long Sleeve Moisture-Wicking Performance Fabric with Full Sublimated Team Graphics that Keeps Arms Warm Without Adding Bulk or Restricting Your Shot. Coaches Also Call Them Basketball Warm-Up Shirts. Every Shooting Shirt is Made factory-direct in our Sialkot, Pakistan export manufacturing facility, with Your Team Colors, Logo, Player Names, and Numbers Sublimated Directly into the Fabric. No Blank Shirts with a Logo Ironed On, Fully Custom from First Sketch to Final Stitch. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Designed to match your team basketball jerseys, from warm-ups to the bench.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-shooting-shirts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 36,
    "name": "Custom Basketball Performance Shorts",
    "slug": "custom-basketball-performance-shorts",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029836/hamlosports/products/basketball/custom-basketball-performance-shorts.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-performance-shorts/",
    "rating": 4.9,
    "reviews": 49,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Full Sublimation on Every Panel, Team Colors, Logos, and Numbers Dyed, with molecularly infused graphics that will never crack, peel, or fade",
      "Deep Side Pockets Included at no Extra Charge for Keys, Phone, and Mouthguard",
      "Elastic Waistband with Internal Drawstring for a Secure, Stay-in-Place Fit",
      "Moisture-Wicking Performance Mesh with Modern Above-the-Knee Athletic Length",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, no Extended-Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Pairs as Low as $29.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Performance Shorts Built for Game Day, Practice, and Pregame Warmups. Team Colors, Logo, and Player Numbers Sublimated Directly into Moisture Wicking Mesh Fabric, with No Print Layer to Crack or Peel. Deep Side Pockets Come Standard with an Elastic Waistband and Internal Drawstring. Every Pair Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility to Your Approved Mockup. Pair with Any HAMLO SPORTS Basketball Jersey for a Coordinated Uniform or Order Standalone for Replacements and Training Camps. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-performance-shorts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 34.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 37,
    "name": "Custom Basketball Polo Shirts",
    "slug": "custom-basketball-polo-shirts",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029837/hamlosports/products/basketball/custom-basketball-polo-shirts.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-polo-shirts/",
    "rating": 4.9,
    "reviews": 50,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Classic 3-Button Placket with a Structured Collar",
      "Full Sublimation with Unlimited Colors, All-Over Patterns, and Program Branding",
      "Wrinkle-Resistant Moisture-Wicking Performance Polyester for All-Day Comfort Under Arena Lighting",
      "Ideal for Coaching Staff, Athletic Directors, Booster Clubs, and Player Travel Days",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, No Extended-Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Polos as Low as $29.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Polo Shirts that Give Your Entire Program a Professional, Unified Look on the Sideline, During Team Travel, and at Banquets. Every Polo Features a Classic 3 Button Collared Design on Wrinkle Resistant Performance Polyester with Your Sublimated Team Colors, Program Logo, and Staff Names included in the base unit rate. Every Uniform We Deliver is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Designed to match your team basketball jerseys, from warm-ups to the bench.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-polo-shirts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 38,
    "name": "Custom Basketball Pullover Hoodies",
    "slug": "custom-basketball-pullover-hoodies",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029837/hamlosports/products/basketball/custom-basketball-pullover-hoodies.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-pullover-hoodies/",
    "rating": 4.9,
    "reviews": 51,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Classic Pullover Design with Uninterrupted Front Panel for Maximum Graphic Coverage",
      "Available in 100% Cotton, 100% Polyester, or Cotton-Polyester Fleece Blend — Choose Your Fabric Based on Preferred Decoration Method",
      "Kangaroo Pocket for Hand Warming",
      "Decoration Tailored to Your Fabric — Sublimation on Polyester, Screen Printing on Cotton, Tackle Twill and Embroidery on Either",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with Ribbed Cuffs and Waistband, no Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Hoodies as Low as $38.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Pullover Hoodies with a Soft Fleece-Lined Interior and Custom Team Branding Decorated to Your Choice — Sublimation on Polyester, Screen Printing on Cotton, or Tackle Twill and Embroidery on Either. Classic Pullover Silhouette with Kangaroo Pocket, Drawstring Hood, and Ribbed Cuffs for a Clean, Traditional Team Look. Every Hoodie Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from First Design to Final Stitch, Zero broker markups, no Outsourced Printing. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Designed to match your team basketball jerseys, from warm-ups to the bench.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-pullover-hoodies",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 39,
    "name": "Custom Basketball Quarter Zip Practice Jerseys",
    "slug": "custom-basketball-quarter-zip-practice-jerseys",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029837/hamlosports/products/basketball/custom-basketball-quarter-zip-practice-jerseys.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-quarter-zip-practice-jerseys/",
    "rating": 4.9,
    "reviews": 52,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Quarter-Zip Collar with Adjustable Airflow During Warmups, Drills, and Bench Time",
      "Sublimation, Screen Printing, and Embroidery Match Your Team Colors, Logos, Player Names, and Numbers",
      "Long-Sleeve Coverage with Ribbed Cuffs for Warmth During Cold-Gym Sessions",
      "Lightweight Moisture-Wicking Fabric Breathes Through Cold-Gym Practice — Take It Off Before Live Play to Avoid Overheating",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, No Extended-Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Jerseys as Low as $36.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Quarter Zip Practice Jerseys Built for Cold Gym Sessions, Early Season Outdoor Practices, and Travel Days. The Quarter Zip Collar Lets Players Adjust Airflow on the Fly, Zipping Up During Warmups and Opening Down When Drills Pick Up. Sublimated Team Colors, Logo, Names, and Numbers included in the base unit rate. Every Quarter Zip Jersey is Designed by Our In-House Team and Produced factory-direct in our Sialkot, Pakistan export manufacturing facility, from Concept Through Final Print. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Compare every cut and price on our custom basketball jerseys page.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-quarter-zip-practice-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 40,
    "name": "Custom Basketball Reversible Uniforms",
    "slug": "custom-basketball-reversible-uniforms",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 99.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029837/hamlosports/products/basketball/custom-basketball-reversible-uniforms.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-reversible-uniforms/",
    "rating": 4.9,
    "reviews": 53,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Complete Reversible Set Included. Fully Reversible Jersey AND Matching Reversible Shorts in Every Order",
      "Choose Your Neckline. Round Neck for Classic Style or V-Neck for a Modern Athletic Cut",
      "Dual-Sided Sublimation on Every Piece, Dyed Graphics, with molecularly infused graphics that will never crack, peel, or fade",
      "Double-Ply Moisture-Wicking Mesh Jersey with Its Own Design on Each Side",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, no Extended-Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Sets as Low as $89.99/Each on 101+ Sets"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$89.99/Each on 101+ Sets.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-reversible-uniforms",
    "tierPrices": {
      "tier1": 99.99,
      "tier2": 94.99,
      "tier3": 92.99,
      "tier4": 89.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 99.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 94.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 92.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 89.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 41,
    "name": "Custom Round Neck Basketball Uniforms",
    "slug": "custom-basketball-round-neck-uniforms",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 69.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029838/hamlosports/products/basketball/custom-basketball-round-neck-uniforms.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-round-neck-uniforms/",
    "rating": 4.9,
    "reviews": 54,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Classic Crew Neck (Round Neck) Cut",
      "Complete Uniform Set Included: Sublimated Jersey Paired with Matching Custom Shorts",
      "Direct-to-Fabric Sublimation, Tackle Twill, Embroidery, or Screen Printing Available",
      "Lightweight Moisture-Wicking Polyester for Full Games, Summer Tournaments, and Back-to-Back Doubleheaders",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Uniforms as Low as $59.99/Each on 101+ Uniforms",
      "Affordable Team Pricing, zero hidden setup costs, no Hidden Costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Round Neck Basketball Uniforms Built with the Classic Crew Neck Cut, Clean Neckline, Athletic Fit, Premium Moisture-Wicking Polyester. Every Uniform Ships as a Complete Set: Custom Jersey and Matching Shorts, Personalized with Your Sublimated Team Colors, Logo, Player Names, and Numbers Included in the Per-Set Price. Every Uniform We Deliver Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Compare every cut and price on our custom basketball jerseys page.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-round-neck-uniforms",
    "tierPrices": {
      "tier1": 69.99,
      "tier2": 64.99,
      "tier3": 62.99,
      "tier4": 59.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 69.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 64.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 62.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 59.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 42,
    "name": "Custom Round Neck Reversible Basketball Jerseys",
    "slug": "custom-basketball-round-neck-reversible-jerseys",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029838/hamlosports/products/basketball/custom-basketball-round-neck-reversible-jerseys.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-round-neck-reversible-jerseys/",
    "rating": 4.9,
    "reviews": 55,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Two Fully Custom Designs on One Jersey, Each Side Gets Its Own Colors, Logo, and Player Numbers",
      "Classic Crew Neck (Round Neck) Neckline on Both Sides, Maintaining a Clean Traditional Look Whether Your Team Is Wearing Light or Dark",
      "Dual-Sided Sublimation Baked Directly into Each Layer of the Fabric, with molecularly infused graphics that will never crack, peel, or fade on Either Side",
      "Double-Ply Moisture-Wicking Mesh Construction: Two Layers, Each with Its Own Design",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Jerseys as Low as $39.99/Each on 101+ Pieces",
      "Affordable Team Pricing, zero hidden setup costs, no Hidden Costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$39.99/Each on 101+ Pieces Affordable Team Pricing, no Setup Fees, no Hidden Costs.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-round-neck-reversible-jerseys",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 43,
    "name": "Custom Basketball Satin Bomber Jackets",
    "slug": "custom-basketball-satin-bomber-jackets",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 99.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029838/hamlosports/products/basketball/custom-basketball-satin-bomber-jackets.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-satin-bomber-jackets/",
    "rating": 4.9,
    "reviews": 56,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Satin Shell with Quilted Polyester Lining for Winter Travel and Cold-Weather Arrivals",
      "Embroidered Logos and Chenille Letter Patches with Tackle Twill for Authentic Varsity Style",
      "Front Zipper Closure with Side Pockets, Ribbed Bomber Collar, Cuffs, and Waistband",
      "Sublimation, Screen Printing, and Tackle Twill Also Available for Full-Color All-Over Designs and Logos",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, no Extended-Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Jackets as Low as $84.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Satin Bomber Jackets with a Satin Shell, Quilted Polyester Lining for Cold-Weather Travel, and Embroidered Logos with Chenille Patches: the Statement Jacket Your Team Wears Walking into the Arena, Riding the Team Bus, and Representing Your Program off the Court. Every Jacket Is Made factory-direct in our Sialkot, Pakistan export manufacturing facility from Pattern Cutting to Final Embroidery, no Decorated Blanks, Zero broker markups. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Designed to match your team basketball jerseys, from warm-ups to the bench.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-satin-bomber-jackets",
    "tierPrices": {
      "tier1": 99.99,
      "tier2": 94.99,
      "tier3": 89.99,
      "tier4": 84.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 99.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 94.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 89.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 84.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 44,
    "name": "Custom Basketball Shooting Jackets",
    "slug": "custom-basketball-shooting-jackets",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029838/hamlosports/products/basketball/custom-basketball-shooting-jackets.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-shooting-jackets/",
    "rating": 4.9,
    "reviews": 57,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Snap-Button Front Closure for Instant Tear-Away Removal During Player Introductions",
      "Lightweight Moisture-Wicking Fabric for Pregame Warmups",
      "Full Sublimation with Team Colors, Logos, Names, and Numbers, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle Twill, Embroidery, and Screen Printing Also Available for Classic Sewn Lettering",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, no Extended-Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Jackets as Low as $39.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Shooting Jackets Built for Pregame Warmups and Player Introductions - Lightweight Moisture-Wicking Fabric with Full Sublimated Team Graphics and a Snap-Button Front That Tears Away in One Motion When Your Name Is Called and It's Time to Play. Every Jacket Is Made factory-direct in our Sialkot, Pakistan export manufacturing facility with Your Team Colors, Logo, Names, and Numbers Sublimated Directly into the Fabric. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Designed to match your team basketball jerseys, from warm-ups to the bench.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-shooting-jackets",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 46.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 46.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 45,
    "name": "Custom Basketball Practice T-shirts",
    "slug": "custom-basketball-practice-t-shirts",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 32.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029837/hamlosports/products/basketball/custom-basketball-practice-t-shirts.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-practice-t-shirts/",
    "rating": 4.9,
    "reviews": 58,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Lightweight Moisture-Wicking Performance Polyester that Pulls Sweat Away",
      "Full Sublimation Bonds Design into Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Sublimation, Embroidery, and Screen Printing Match Your Team Colors, Logos, Player Names, and Numbers",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, No Extended-Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Shirts as Low as $24.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Practice T-Shirts Made from.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-practice-t-shirts",
    "tierPrices": {
      "tier1": 32.99,
      "tier2": 29.99,
      "tier3": 26.99,
      "tier4": 24.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 32.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 26.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 24.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 46,
    "name": "Custom Sleeveless Training T-shirts (basketball)",
    "slug": "custom-basketball-sleeveless-training-t-shirts",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 29.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029839/hamlosports/products/basketball/custom-basketball-sleeveless-training-t-shirts.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-sleeveless-training-t-shirts/",
    "rating": 4.9,
    "reviews": 59,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Open-Shoulder Muscle Cut with Reinforced Armhole Binding for Weight-Room Reps and Conditioning Drills",
      "Full Sublimation Fuses Design into Performance Polyester, with molecularly infused graphics that will never crack, peel, or fade",
      "Sublimation, Embroidery, and Screen Printing Match Your Team Colors, Logos, Player Names, and Numbers",
      "Sleeveless Silhouette with Moisture-Wicking Quick-Dry Fabric",
      "Versatile for Offseason Conditioning, Summer League, Team Camps, and Casual Team Wear",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, No Extended-Size Upcharges",
      "No minimum order quantity required, Volume Pricing on Shirts as Low as $24.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$24.99/Each on 101+ Pieces.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-sleeveless-training-t-shirts",
    "tierPrices": {
      "tier1": 29.99,
      "tier2": 27.99,
      "tier3": 25.99,
      "tier4": 24.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 29.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 27.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 25.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 24.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 47,
    "name": "Custom Basketball Team Duffle Bags",
    "slug": "custom-basketball-team-duffle-bags",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 89.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029839/hamlosports/products/basketball/custom-basketball-team-duffle-bags.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-team-duffle-bags/",
    "rating": 4.9,
    "reviews": 60,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Large Capacity with Wide-Mouth Dual-Zip Main Compartment that Opens Flat and Fits a Full Uniform Set, Sneakers, and Overnight Essentials",
      "Multiple Decoration Methods — Full Sublimation for Team Colors and All-Over Graphics, Plus Tackle Twill, Embroidery, and Screen Printing for Player Names, Numbers, and Sewn Team Logos",
      "Ventilated Shoe Compartment Keeps Sneakers Isolated from Clean Gear",
      "Heavy-Duty 600D Polyester Shell with Reinforced Bottom Panel",
      "Detachable Padded Shoulder Strap Plus Dual Carry Handles for Two Carry Options",
      "No minimum order quantity required, Volume Pricing on Bags as Low as $74.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Team Duffle Bags Built for Tournament Travel, Away Games, and Overnight Road Trips. Wide Mouth Dual Zip Opening Lays Flat for Easy Packing at Hotel Rooms and Locker Rooms. Your Team Colors, Logo, and Player Names Are Sublimated Directly into the Shell in the Per-Piece Price. Every Duffle Bag is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility to Coordinate with Your Team's Jerseys, Warm Ups, and Accessories. Your Entire Design is Sublimated, Stitched, or Printed Across the Polyester Shell from Panel to Panel. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Order them with your custom basketball uniforms: each set counts as one item toward your price tier, and each bag counts as one more.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-team-duffle-bags",
    "tierPrices": {
      "tier1": 89.99,
      "tier2": 84.99,
      "tier3": 79.99,
      "tier4": 74.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 89.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 84.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 79.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 74.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 48,
    "name": "Custom Basketball Tear Away Warmup Pants",
    "slug": "custom-basketball-tear-away-warmup-pants",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Smooth Tricot Performance Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029839/hamlosports/products/basketball/custom-basketball-tear-away-warmup-pants.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-tear-away-warmup-pants/",
    "rating": 4.9,
    "reviews": 61,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Full-Length Snap-Button Sides, Rip Off Clean Over Shoes During Intros and Substitutions",
      "Direct-to-Fabric Sublimation, Tackle Twill, Embroidery, or Screen Printing Available",
      "Brushed-Back Polyester Tricot with Elastic Waistband and Interior Drawcord",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Pants as Low as $39.99/Each on 101+ Pieces",
      "Affordable Team Pricing, zero hidden setup costs, No Hidden Costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Tear Away Basketball Pants with Full-Length Snap-Button Sides that Let Players Strip Down to Game Shorts During Intros, Subs, and Halftime. Each Pair is tailored to order with Your Sublimated Team Colors, Logo, Player Names, and Numbers included in the base unit rate. Every Pair We Deliver is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-tear-away-warmup-pants",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 46.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 46.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Smooth Tricot Performance Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 49,
    "name": "Custom V-neck Basketball Uniforms",
    "slug": "custom-basketball-v-neck-uniforms",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 69.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029839/hamlosports/products/basketball/custom-basketball-v-neck-uniforms.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-v-neck-uniforms/",
    "rating": 4.9,
    "reviews": 62,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Modern V-Neck Cut",
      "Complete Uniform Set in Every Order: Sublimated V-Neck Jersey Paired with Matching Custom Shorts",
      "Direct-to-Fabric Sublimation, Tackle Twill, Embroidery, or Screen Printing Available",
      "Lightweight Moisture-Wicking Polyester",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Uniforms as Low as $59.99/Each on 101+ Uniforms",
      "Affordable Team Pricing, zero hidden setup costs, no Hidden Costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom V-Neck Basketball Uniforms Cut with a Modern Athletic Neckline. Every Set Ships as a Complete Uniform Including a Custom Jersey and Matching Shorts, Tailored from Lightweight, Moisture-Wicking Polyester and Fully Personalized with Your Sublimated Team Colors, Crest, Player Names, and Numbers Included in the Per-Set Price. Every Uniform We Deliver Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Compare every cut and price on our custom basketball jerseys page.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-v-neck-uniforms",
    "tierPrices": {
      "tier1": 69.99,
      "tier2": 64.99,
      "tier3": 62.99,
      "tier4": 59.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 69.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 64.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 62.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 59.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 50,
    "name": "Custom V-neck Reversible Basketball Jerseys",
    "slug": "custom-basketball-v-neck-reversible-jerseys",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029839/hamlosports/products/basketball/custom-basketball-v-neck-reversible-jerseys.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-v-neck-reversible-jerseys/",
    "rating": 4.9,
    "reviews": 38,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Modern V-Neck Cut on Both Sides",
      "Two Fully Independent Designs per Jersey with Separate Colorways, Logos, and Numbers",
      "Dual-Sided Sublimation Dyed into Each of the Two Layers",
      "Double-Ply Moisture-Wicking Mesh",
      "Youth (YS to YXL) Through Adult (XS to 4XL), Same Price Across Every Size",
      "No minimum order quantity required, Volume Pricing on Jerseys as Low as $39.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom V-Neck Reversible Basketball Jerseys with Two Game-Ready Designs in One Jersey. Each Side Is Fully Sublimated with Its Own Colors, Numbers, Logos, and Graphics on Breathable Performance Mesh. Flip at Halftime, Between Tournament Games, or During Practice Scrimmages with no Second Set Needed. Every Jersey We Deliver Is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design on Both Sides, Made the Way You Approved It. No Minimum Order. Free Professional Mockup Showing Both Sides within 12 Hours. Fast US Nationwide Delivery (Duties Pre-Cleared). Compare every cut and price on our custom basketball jerseys page. Need matching shorts too? See our custom reversible basketball uniforms.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-v-neck-reversible-jerseys",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 51,
    "name": "Custom Basketball Windbreaker Jackets",
    "slug": "custom-basketball-windbreaker-jackets",
    "categorySlug": "custom-basketball-uniforms",
    "category": "BASKETBALL",
    "sport": "Basketball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029840/hamlosports/products/basketball/custom-basketball-windbreaker-jackets.png",
    "canonical": "/custom-basketball-uniforms/custom-basketball-windbreaker-jackets/",
    "rating": 4.9,
    "reviews": 39,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Wind-Resistant Shell, Lightweight Enough to Fold into a Backpack Between Games",
      "Direct-to-Fabric Sublimation, Tackle Twill, Embroidery, or Screen Printing Available",
      "Adjustable Hood, Elastic Cuffs, and Drawcord Hem Seal Out Wind During Outdoor Warmups",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Jackets as Low as $34.99/Each on 101+ Pieces",
      "Affordable Team Pricing, zero hidden setup costs, No Hidden Costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Basketball Windbreaker Jackets Built with a Wind-Resistant Shell that Blocks Gusts, Sheds Light Rain, and Packs Flat into Any Team Bag. Each Jacket is tailored to order with Your Team Colors, Logo, Player Names, and Numbers, and Your Quote Shows the Price for Each Method. Every Jacket We Deliver is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch. Zero broker markups: Just Your Design, Made the Way You Approved It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Designed to match your team basketball jerseys, from warm-ups to the bench.",
    "cloudinaryPublicId": "hamlosports/products/basketball/custom-basketball-windbreaker-jackets",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 52,
    "name": "Custom Esports Short Sleeve Jerseys",
    "slug": "custom-esports-short-sleeve-jerseys",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 32.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029843/hamlosports/products/esports/custom-esports-short-sleeve-jerseys.png",
    "canonical": "/custom-esports-apparel/custom-esports-short-sleeve-jerseys/",
    "rating": 4.9,
    "reviews": 40,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Lightweight, moisture-wicking polyester for long gaming sessions",
      "Full-panel sublimation with unlimited colors, logos, and all-over graphics at the same per-piece price",
      "Dedicated sponsor-logo placement zones on the chest, sleeves, and back for pro-level broadcast visibility",
      "Individual sublimated gamertags and player numbers included in the per-jersey price for every roster member",
      "Optional embroidered chest crest adds a raised, premium org badge over the sublimated base",
      "Relaxed athletic fit with set-in sleeves, comfortable for seated gameplay and stage appearances",
      "Youth through adult 4XL, one price for every size",
      "No minimum order quantity required; volume pricing on jerseys as low as $27.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Short sleeve esports jerseys are the all-around tournament cut: they put your team's brand on stage, on stream and on screen, fully sublimated on lightweight, moisture-wicking polyester for players who sit for hours under hot stage lights. Every jersey is dye-fused with your team logo, sponsor placements, gamertags, and player numbers at the same per-jersey price at each quantity tier, with no per-color charges, no setup fees, and no limits on design complexity. An optional embroidered chest crest adds a raised org badge for teams that want one. Compare every cut on our custom esports jerseys page. Every jersey is produced in-house overseas, direct from our Sialkot manufacturing plant, using cut-and-sew sublimation, not printed on stock blanks like print-on-demand services, so your design is fused into the fabric for colors that pop on camera, and there is no print layer to crack or peel. The short sleeve is the cut most teams run as their primary jersey — set-in sleeves and a relaxed athletic fit built for seated gameplay, on the same fabric, decoration, and pricing as our long sleeve, sleeveless, and quarter-zip cuts. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-short-sleeve-jerseys",
    "tierPrices": {
      "tier1": 32.99,
      "tier2": 31.99,
      "tier3": 29.99,
      "tier4": 27.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 32.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 31.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 27.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 53,
    "name": "Custom Esports Long Sleeve Jerseys",
    "slug": "custom-esports-long-sleeve-jerseys",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029841/hamlosports/products/esports/custom-esports-long-sleeve-jerseys.png",
    "canonical": "/custom-esports-apparel/custom-esports-long-sleeve-jerseys/",
    "rating": 4.9,
    "reviews": 41,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-length sublimated sleeves with dedicated panel zones for sponsor logos and branding from shoulder to wrist",
      "Ribbed cuff construction at both wrists",
      "Lightweight, moisture-wicking polyester for long sessions",
      "Full-panel sublimation with unlimited colors and all-over graphics at the same per-piece price",
      "Individual sublimated gamertags, player numbers, and country flags included in the per-jersey price",
      "Optional embroidered chest crest adds a raised, premium org badge over the sublimated base",
      "Youth through adult 4XL, one price for every size",
      "No minimum order quantity required; volume pricing on jerseys as low as $28.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Long sleeve esports jerseys give your team more branding space and more coverage, on stage and on stream. Full-length sleeves open up an extended design canvas from shoulder to wrist for sponsor logos, gamertag placement, and bold graphic elements that short sleeve jerseys can't deliver. The jersey is fully sublimated on lightweight, moisture-wicking polyester, with ribbed cuffs. An optional embroidered chest crest adds a raised org badge for teams that want one. Compare every cut on our custom esports jerseys page. Every jersey is produced in-house overseas, direct from our Sialkot manufacturing plant, using cut-and-sew sublimation, with your team colors, logos, sponsor branding, and player details fused into the fabric — No generic off-the-shelf blanks, no print layer to crack or peel. The long sleeve runs warmer for cool LAN and arena venues and carries the most sponsor real estate of any cut, on the same fabric, decoration, and pricing as our short sleeve, sleeveless, and quarter-zip jerseys. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-long-sleeve-jerseys",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 28.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 28.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 54,
    "name": "Custom Esports Sleeveless Jerseys",
    "slug": "custom-esports-sleeveless-jerseys",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 32.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029843/hamlosports/products/esports/custom-esports-sleeveless-jerseys.png",
    "canonical": "/custom-esports-apparel/custom-esports-sleeveless-jerseys/",
    "rating": 4.9,
    "reviews": 42,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Open-shoulder muscle cut",
      "Reinforced armhole binding for a clean, structured silhouette",
      "Full-panel sublimation covers the entire torso including the shoulder straps, with no empty print zones",
      "Lightweight, moisture-wicking polyester for long sessions on hot tournament floors",
      "Individual sublimated gamertags, player numbers, and sponsor logos included in the per-jersey price",
      "Optional embroidered chest crest adds a raised, premium org badge over the sublimated base",
      "Youth through adult 4XL, one price for every size",
      "No minimum order quantity required; volume pricing on jerseys as low as $24.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$24.99/each on 101+ pieces, no setup fees.",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-sleeveless-jerseys",
    "tierPrices": {
      "tier1": 32.99,
      "tier2": 29.99,
      "tier3": 27.99,
      "tier4": 24.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 32.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 27.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 24.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 55,
    "name": "Custom Esports Quarter Zipper Jerseys",
    "slug": "custom-esports-quarter-zipper-jerseys",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 38.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029842/hamlosports/products/esports/custom-esports-quarter-zipper-jerseys.png",
    "canonical": "/custom-esports-apparel/custom-esports-quarter-zipper-jerseys/",
    "rating": 4.9,
    "reviews": 43,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Quarter-zip collar with chin guard for instant temperature control between rounds",
      "Structured collar stand for a clean, professional silhouette on stage and on camera",
      "Full-panel sublimation across the entire jersey including the collar stand, zip placket, and sleeves",
      "Lightweight, moisture-wicking polyester with no extra bulk from the structured collar",
      "Individual sublimated gamertags, player numbers, and sponsor logos included in the per-jersey price",
      "Optional embroidered chest crest adds a raised, premium org badge over the sublimated base",
      "Youth through adult 4XL, one price for every size",
      "No minimum order quantity required; volume pricing on jerseys as low as $29.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom esports quarter zipper jerseys designed for competitive teams that want built-in temperature control and a polished stage presence beyond a standard crew neck. The quarter-zip collar with chin guard lets players zip up between rounds in cold arenas and zip down during intense matches. The jersey is lightweight, moisture-wicking polyester, and full sublimation is included in the base unit rate. An optional embroidered chest crest adds a raised org badge for teams that want one. Every jersey is produced in-house overseas, direct from our Sialkot manufacturing plant, using cut-and-sew sublimation construction, with your team logo, sponsor branding, and gamertags covering the entire panel surface including the collar stand and zip placket — No generic off-the-shelf blanks, no print layer to crack or peel. The quarter-zip is the most polished, layering-ready cut, on the same fabric, decoration, and pricing as our short sleeve, long sleeve, and sleeveless jerseys. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-quarter-zipper-jerseys",
    "tierPrices": {
      "tier1": 38.99,
      "tier2": 34.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 38.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 56,
    "name": "Custom Esports Uniforms",
    "slug": "custom-esports-uniforms",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029844/hamlosports/products/esports/custom-esports-uniforms.png",
    "canonical": "/custom-esports-apparel/custom-esports-uniforms/",
    "rating": 4.9,
    "reviews": 44,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Three pieces in one design: jersey, joggers and quarter-zip jacket",
      "Any jersey cut: short sleeve, long sleeve, sleeveless or quarter-zip",
      "Same colors, logos, sponsors and gamertags on every piece, sublimated and included",
      "Optional embroidered crest on the jersey or jacket, priced on your quote",
      "No minimum order quantity required, zero hidden setup costs, free shipping anywhere in the USA"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "760-994-3555.",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-uniforms",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 72.99,
      "tier4": 69.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 72.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 69.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 57,
    "name": "Custom Esports Full Uniforms",
    "slug": "custom-esports-full-uniforms",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 69.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029841/hamlosports/products/esports/custom-esports-full-uniforms.png",
    "canonical": "/custom-esports-apparel/custom-esports-full-uniforms/",
    "rating": 4.9,
    "reviews": 45,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Jersey and joggers in one design, printed from the same design file",
      "Any jersey cut: short sleeve, long sleeve, sleeveless or quarter-zip",
      "Sublimated gamertags, numbers, logos and sponsors included on both pieces",
      "Optional embroidered crest on the jersey chest, priced on your quote",
      "Costs less than buying the jersey and joggers separately"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "760-994-3555.",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-full-uniforms",
    "tierPrices": {
      "tier1": 69.99,
      "tier2": 64.99,
      "tier3": 62.99,
      "tier4": 59.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 69.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 64.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 62.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 59.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 58,
    "name": "Custom Esports Full Zip Hoodies",
    "slug": "custom-esports-full-zip-hoodies",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029841/hamlosports/products/esports/custom-esports-full-zip-hoodies.png",
    "canonical": "/custom-esports-apparel/custom-esports-full-zip-hoodies/",
    "rating": 4.9,
    "reviews": 46,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-length front zipper for easy on/off without disturbing headsets, earbuds, or team caps",
      "Full-panel sublimation across body, hood, sleeves, and zipper panels with seamless alignment",
      "Reinforced zipper tape and stitched zipper guard",
      "Optional embroidered chest crest adds a raised, premium org badge over the sublimated design",
      "Brushed-back fleece with a warm, soft interior, ready for full sublimation",
      "Individual sublimated gamertags, sponsor logos, and player numbers included in the per-hoodie price",
      "No minimum order quantity required; volume pricing on hoodies as low as $39.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports full zip hoodies, the gaming warm-up layer for teams that need something they can throw on and remove without pulling over headsets or disrupting gear. The full-length front zipper lets players layer over their competition jersey between rounds, during walkouts, and at venue transitions. Every hoodie is cut and sewn in-house overseas, direct from our Sialkot manufacturing plant, using full-panel sublimation that covers the body, hood, sleeves, and both zipper panels with your complete team design on brushed-back fleece. An optional embroidered chest crest adds a raised org badge. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-full-zip-hoodies",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 59,
    "name": "Custom Esports Pullover Hoodies",
    "slug": "custom-esports-pullover-hoodies",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029842/hamlosports/products/esports/custom-esports-pullover-hoodies.png",
    "canonical": "/custom-esports-apparel/custom-esports-pullover-hoodies/",
    "rating": 4.9,
    "reviews": 47,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Zipperless pullover design eliminates front hardware for comfort during extended seated gaming",
      "Full-panel sublimation across body, sleeves, hood, and kangaroo pocket with no empty print zones",
      "Uninterrupted single-panel front for seamless sponsor logos and team branding",
      "Kangaroo pocket for hand warming",
      "Ribbed cuffs and waistband seal warmth while allowing unrestricted hand movement",
      "Optional embroidered chest crest adds a raised, premium org badge over the sublimated design",
      "Brushed-back fleece with a warm, soft interior, ready for full sublimation",
      "No minimum order quantity required; volume pricing on hoodies as low as $38.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports pullover hoodies, the gaming hoodie designed for long streaming marathons, tournament practice blocks, and content-creation days where your hoodie goes on and stays on. The zipperless front means no metal hardware pressing against your desk during hours of seated play, while the continuous front panel gives sponsors and team branding an unbroken design surface. Every pullover is made in-house overseas, direct from our Sialkot manufacturing plant, using cut-and-sew sublimation that covers the body, hood, sleeves, and kangaroo pocket with your complete team design on brushed-back fleece, with no limited print zones. An optional embroidered chest crest adds a raised org badge. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-pullover-hoodies",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 60,
    "name": "Custom Esports Bomber Jackets",
    "slug": "custom-esports-bomber-jackets",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 99.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029840/hamlosports/products/esports/custom-esports-bomber-jackets.png",
    "canonical": "/custom-esports-apparel/custom-esports-bomber-jackets/",
    "rating": 4.9,
    "reviews": 48,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Classic bomber silhouette with ribbed knit collar, cuffs, and waistband for a structured, stage-ready look",
      "Full-panel sublimation across front, back, and sleeves with no empty print zones",
      "Hoodless neckline for a sharp, clean collar line that photographs well under stage lighting",
      "Optional embroidered chest crest or patch adds a raised, premium org badge",
      "Cropped bomber waist sits at the hip, framing your team jersey without covering sponsor placements",
      "Soft interior lining adds warmth for cold venue halls and convention centers",
      "No minimum order quantity required; volume pricing on jackets as low as $84.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports bomber jackets built for the moments your team is on display — stage walkouts, press appearances, media days, and travel between tournament venues. A classic bomber silhouette with a ribbed knit collar, cuffs, and waistband gives a structured, professional profile that reads clean on camera without the bulk of a hoodie or pullover. Every jacket is made in-house overseas, direct from our Sialkot manufacturing plant, using cut-and-sew sublimation that prints your complete team design across the body, sleeves, and back panel with no blank zones — No generic off-the-shelf blanks. An optional embroidered chest crest or patch adds a raised org badge. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-bomber-jackets",
    "tierPrices": {
      "tier1": 99.99,
      "tier2": 94.99,
      "tier3": 89.99,
      "tier4": 84.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 99.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 94.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 89.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 84.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 61,
    "name": "Custom Esports Track Jackets",
    "slug": "custom-esports-track-jackets",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029844/hamlosports/products/esports/custom-esports-track-jackets.png",
    "canonical": "/custom-esports-apparel/custom-esports-track-jackets/",
    "rating": 4.9,
    "reviews": 49,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Lightweight athletic shell that sits between heavy bombers and bulky hoodies",
      "Stand-up collar frames the neck and jawline on camera for sharp gamertag visibility",
      "Full-panel sublimation across body, sleeves, collar, and back with seamless branding",
      "Optional embroidered chest crest adds a raised, premium org badge over the sublimated design",
      "Tailored close-to-body fit for a clean athletic silhouette on stage",
      "Full-length front zipper for quick layering over competition jerseys between rounds",
      "No minimum order quantity required; volume pricing on jackets as low as $36.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom esports track jackets as your team's warm-up layer for walkouts, team introductions and venue travel. A lightweight athletic shell with a stand-up collar and tailored fit sits sharper on stage and camera than a hoodie or pullover, and the full-length front zipper lets players layer up or strip down to their competition jersey in seconds. Every track jacket is made in-house overseas, direct from our Sialkot manufacturing plant, using cut-and-sew sublimation that prints your complete design across the body, sleeves, collar, and back panel — No generic off-the-shelf blanks, no logo-only decoration. An optional embroidered chest crest adds a raised org badge. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-track-jackets",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 62,
    "name": "Custom Esports Short Sleeve T-shirts",
    "slug": "custom-esports-short-sleeve-t-shirts",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 32.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029843/hamlosports/products/esports/custom-esports-short-sleeve-t-shirts.png",
    "canonical": "/custom-esports-apparel/custom-esports-short-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 50,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Relaxed crew neck for practice, streaming, and content creation",
      "Three decoration options — sublimation, screen printing, and embroidery (no tackle twill)",
      "Lightweight, breathable fabric",
      "Clean crew neckline sits flat under headsets and looks natural on camera",
      "Made for practice sets, fan merch, and giveaways",
      "Youth through adult 4XL in men's, women's, and youth sizing at the same per-piece price",
      "No minimum order quantity required; volume pricing on shirts as low as $24.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports short sleeve t-shirts designed as your team's everyday practice, streaming, and fan-merchandise layer. A relaxed crew-neck delivers all-day comfort without a structured competition-jersey collar, and you can decorate with sublimation, screen printing, or embroidery to suit your design. Every t-shirt is produced in-house overseas, direct from our Sialkot manufacturing plant, with three decoration options: full-panel sublimation for all-over graphics, screen printing for bold logos, or embroidery for a premium stitched finish. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-short-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 32.99,
      "tier2": 29.99,
      "tier3": 26.99,
      "tier4": 24.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 32.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 26.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 24.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 63,
    "name": "Custom Esports Long Sleeve T-shirts",
    "slug": "custom-esports-long-sleeve-t-shirts",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029841/hamlosports/products/esports/custom-esports-long-sleeve-t-shirts.png",
    "canonical": "/custom-esports-apparel/custom-esports-long-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 51,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full-length sleeves provide wrist-to-shoulder coverage for cold LAN facilities and streaming rooms",
      "Relaxed crew-neck construction for casual all-day comfort during practice and content creation",
      "Three decoration options — sublimation, screen printing, and embroidery (no tackle twill)",
      "Extended sleeve surface adds design real estate for sponsor logos and sleeve graphics",
      "Lightweight fabric at a lower price point for practice sets, fan merch and giveaways",
      "Youth through adult 4XL in men's, women's, and youth sizing at the same per-piece price",
      "No minimum order quantity required; volume pricing on shirts as low as $26.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports long sleeve t-shirts built for teams that want full-arm coverage without the weight and cost of competition jerseys. A relaxed crew-neck keeps players comfortable in LAN halls, streaming rooms, and late-night practice sessions, and you can decorate with sublimation, screen printing, or embroidery to match your design and budget. Every long sleeve t-shirt is produced in-house overseas, direct from our Sialkot manufacturing plant, with three decoration options: full-panel sublimation for all-over graphics, screen printing for clean logo placement, or embroidery for a premium stitched finish. The full-length sleeves add extra real estate for sponsor logos and sleeve graphics. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-long-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 64,
    "name": "Custom Esports Polo Shirts",
    "slug": "custom-esports-polo-shirts",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029842/hamlosports/products/esports/custom-esports-polo-shirts.png",
    "canonical": "/custom-esports-apparel/custom-esports-polo-shirts/",
    "rating": 4.9,
    "reviews": 52,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Structured polo collar with button placket — versatile for press rooms, travel, and tournament venues",
      "Full-panel sublimation option with unlimited-color graphics matching your competition jersey's vibrancy",
      "Embroidered chest logo option for a premium stitched texture at interviews and corporate events",
      "Ideal for coaches, managers, staff, and players — everyone at the same per-piece price with no role-based upcharges",
      "100% polyester pique with a moisture-wicking finish for all-day comfort",
      "Men's and women's sizes XS to 4XL and youth sizes YS to YXL, with no extended-size surcharges",
      "No minimum order quantity required; volume pricing on polos as low as $29.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports polo shirts, the gaming polo that gives your entire organization a polished collared look for press events, sponsor meetings, team travel, and any moment where jerseys feel too casual. Structured polo collar and button placket built for players, coaches, staff, and fans who want branded team gear with a more refined fit. Every esports polo is produced in-house overseas, direct from our Sialkot manufacturing plant, with two decoration options: full-panel sublimation for edge-to-edge color graphics, or a premium embroidered chest logo for a stitched, refined finish. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-polo-shirts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 65,
    "name": "Custom Esports Performance Polo Shirts",
    "slug": "custom-esports-performance-polo-shirts",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029842/hamlosports/products/esports/custom-esports-performance-polo-shirts.png",
    "canonical": "/custom-esports-apparel/custom-esports-performance-polo-shirts/",
    "rating": 4.9,
    "reviews": 53,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Structured fold-over polo collar with button placket for business-casual polish at press events and sponsor meetings",
      "Athletic performance build with four-way stretch and moisture-wicking for a sportier fit than a classic pique polo",
      "Full-panel sublimation option with edge-to-edge graphics across body, collar, and sleeves",
      "Embroidered chest logo option for a premium dimensional finish, with names available on the back or sleeve",
      "Ideal for coaching staff, team management, and organization executives at events",
      "Men's and women's sizes XS to 4XL and youth sizes YS to YXL, all at the same per-piece price",
      "No minimum order quantity required; volume pricing on polos as low as $29.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports performance polo shirts for when your team needs to look sharp without suiting up in competition jerseys. A structured collar and button placket on an athletic performance build brings business-casual polish to press conferences, sponsor meetings, media appearances, and team travel, with full branding through full-panel sublimation or a premium embroidered chest logo. Every performance polo is produced in-house overseas, direct from our Sialkot manufacturing plant, with two decoration options: full-panel sublimation for edge-to-edge graphics, or a premium embroidered chest logo for a stitched, refined finish. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-performance-polo-shirts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 66,
    "name": "Custom Esports Shorts",
    "slug": "custom-esports-shorts",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 32.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029843/hamlosports/products/esports/custom-esports-shorts.png",
    "canonical": "/custom-esports-apparel/custom-esports-shorts/",
    "rating": 4.9,
    "reviews": 54,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Lightweight moisture-wicking performance poly without jogger bulk",
      "Full-panel sublimation across both legs and waistband",
      "Optional embroidered logo on the hip or leg for a premium raised finish",
      "Clean athletic cut with no pockets",
      "Elastic waistband with an interior drawstring",
      "Men's and women's sizes XS to 4XL and youth sizes YS to YXL, with custom sizing to your own measurements",
      "No minimum order quantity required; volume pricing on pairs as low as $26.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports shorts that complete your team's uniform with matching branded bottoms for tournament stage, LAN events, team photos, and content creation. Full-panel sublimation matches the graphics to your jerseys and outerwear. The fabric is smooth performance poly, not the open mesh of our casual classic shorts. Every pair of esports shorts is produced in-house overseas, direct from our Sialkot manufacturing plant, using full-panel sublimation for edge-to-edge graphics across both legs and the waistband, plus an optional embroidered logo for a premium raised finish. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-shorts",
    "tierPrices": {
      "tier1": 32.99,
      "tier2": 29.99,
      "tier3": 27.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 32.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 27.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 67,
    "name": "Custom Esports Classic Shorts",
    "slug": "custom-esports-classic-shorts",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029840/hamlosports/products/esports/custom-esports-classic-shorts.png",
    "canonical": "/custom-esports-apparel/custom-esports-classic-shorts/",
    "rating": 4.9,
    "reviews": 55,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Basketball-style mesh fabric with a relaxed leg opening for breathability during practice and content sessions",
      "Full-panel sublimation across both legs, waistband, and side panels, matching your jersey's vibrancy",
      "Custom side-stripe options add a retro team-identity element down each leg",
      "Optional screen-printed logos on the leg or hip",
      "Elastic waistband with an interior drawstring",
      "Made for practice sets, fan merch, and giveaways",
      "Men's and women's sizes XS to 4XL and youth sizes YS to YXL, with custom sizing to your own measurements",
      "No minimum order quantity required; volume pricing on pairs as low as $27.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports classic shorts with a basketball style mesh cut built for practice days, warmup sessions, content creation, and casual team wear. Relaxed fit with breathable mesh fabric and custom side stripe options that keep your team branding visible without the fitted feel of competition performance shorts. Every pair is produced in-house overseas, direct from our Sialkot manufacturing plant, using full-panel sublimation for graphics across both legs, the waistband, and side panels, plus optional screen-printed logos for clean, bold marks. Sublimated team colors are dyed into the open basketball-style mesh, not stitched on. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-classic-shorts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 27.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 27.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 68,
    "name": "Custom Esports Training Shorts",
    "slug": "custom-esports-training-shorts",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029844/hamlosports/products/esports/custom-esports-training-shorts.png",
    "canonical": "/custom-esports-apparel/custom-esports-training-shorts/",
    "rating": 4.9,
    "reviews": 56,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Moisture-wicking performance fabric keeps esports athletes dry during gym workouts and conditioning",
      "Built-in liner provides secure coverage without layering separate compression shorts",
      "Full-panel sublimation across both legs and waistband for visible team branding during training",
      "Optional embroidered logo on the hip or leg for a premium raised finish",
      "Athletic fit sits closer to the body for a streamlined, gym-ready silhouette",
      "Men's and women's sizes XS to 4XL and youth sizes YS to YXL, with custom sizing to your own measurements",
      "No minimum order quantity required; volume pricing on pairs as low as $26.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports training shorts built for gym sessions, physical conditioning, and warm-up routines that competitive gaming teams treat as daily practice. The athletic fit with built-in liner and moisture-wicking fabric keeps players comfortable through boot camp workouts, fitness drills, and pre-tournament stretching. Every pair is produced in-house overseas, direct from our Sialkot manufacturing plant, using full-panel sublimation for graphics across both legs and the waistband, plus an optional embroidered logo for a stitched raised finish. A built-in liner gives secure coverage without layering a separate compression short. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-training-shorts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 69,
    "name": "Custom Esports Pants",
    "slug": "custom-esports-pants",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029842/hamlosports/products/esports/custom-esports-pants.png",
    "canonical": "/custom-esports-apparel/custom-esports-pants/",
    "rating": 4.9,
    "reviews": 57,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full-length moisture-wicking fabric keeps players warm and dry in cold venues and during travel",
      "Zippered side pockets come standard for securing phones, wallets, and credentials",
      "Full-panel sublimation with edge-to-edge graphics and custom side-stripe options",
      "Optional embroidered logo on the hip or leg for a premium raised finish",
      "Elastic waistband with an interior drawstring",
      "Men's and women's sizes XS to 4XL and youth sizes YS to YXL for players, coaches and staff in one order",
      "No minimum order quantity required; volume pricing on pants as low as $36.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports pants built for team travel, cold-venue warmth, walkout entrances, and warm-up layers before stage play. The full-length athletic fit with moisture-wicking fabric and zippered side pockets gives players a coordinated branded look from arrival through departure. Every pair is produced in-house overseas, direct from our Sialkot manufacturing plant, using full-panel sublimation for full-leg graphics and side-stripe patterns, plus an optional embroidered logo for a stitched raised finish. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-pants",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 70,
    "name": "Custom Esports Jogger Pants",
    "slug": "custom-esports-jogger-pants",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029841/hamlosports/products/esports/custom-esports-jogger-pants.png",
    "canonical": "/custom-esports-apparel/custom-esports-jogger-pants/",
    "rating": 4.9,
    "reviews": 58,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Soft brushed-back fleece interior for all-day warmth during streaming sessions, cold venues, and casual team activities",
      "Zippered side pockets come standard for securing phones, wallets, and credentials",
      "Full-panel sublimation with edge-to-edge graphics and team branding from waist to ankle",
      "Optional embroidered logo on the hip or thigh for a premium raised finish",
      "Tapered leg with elastic ankle cuffs for a modern, streetwear-inspired silhouette",
      "Men's and women's sizes XS to 4XL and youth sizes YS to YXL for players, staff and fans in one order",
      "No minimum order quantity required; volume pricing on pants as low as $36.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports jogger pants with a tapered athletic fit and soft fleece interior built for streaming sessions, lounge wear, casual team days, and cold-weather comfort. The elastic ankle cuffs and zippered side pockets give players a modern fitted silhouette that looks clean on camera and during team content. Every pair is produced in-house overseas, direct from our Sialkot manufacturing plant, using full-panel sublimation for full-leg graphics and custom patterns, plus an optional embroidered logo for a stitched raised finish. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-jogger-pants",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 71,
    "name": "Custom Esports Caps",
    "slug": "custom-esports-caps",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 24.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029840/hamlosports/products/esports/custom-esports-caps.png",
    "canonical": "/custom-esports-apparel/custom-esports-caps/",
    "rating": 4.9,
    "reviews": 59,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Structured 6-panel construction holds its shape on camera and in tournament photos",
      "Embroidered team logos and gamertags for a raised, premium dimensional finish",
      "Optional full-panel sublimation with edge-to-edge graphics across all panels",
      "Adjustable snapback closure in one style, with no separate sizing runs",
      "Curved or flat brim options to match your team's brand identity",
      "Moisture-wicking sweatband for long gaming sessions",
      "No minimum order quantity required; volume pricing on caps as low as $17.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports caps with a structured 6-panel design and adjustable snapback closure built for tournament walkouts, stream appearances, content shoots, and fan merchandise. The curved or flat brim options and moisture-wicking sweatband give players a clean branded look on camera and at LAN events. Every cap is produced in-house overseas, direct from our Sialkot manufacturing plant, with your choice of decoration: embroidery for raised, dimensional logos and gamertags, or full-panel sublimation for all-over graphics across every panel. Curved or flat brim, adjustable snapback. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-caps",
    "tierPrices": {
      "tier1": 24.99,
      "tier2": 22.99,
      "tier3": 19.99,
      "tier4": 17.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 24.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 22.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 19.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 17.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 72,
    "name": "Custom Esports Backpacks",
    "slug": "custom-esports-backpacks",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029840/hamlosports/products/esports/custom-esports-backpacks.png",
    "canonical": "/custom-esports-apparel/custom-esports-backpacks/",
    "rating": 4.9,
    "reviews": 60,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Padded laptop compartment protects devices up to 15 inches for tournament and LAN travel",
      "Full-panel sublimation with edge-to-edge graphics across the entire bag, not just a front logo",
      "Optional embroidered logo or patch for a raised, premium finish",
      "Multiple storage pockets outside the main compartment",
      "Ergonomic padded shoulder straps distribute weight evenly for comfortable all-day carry",
      "No minimum order quantity required; volume pricing on backpacks as low as $64.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports backpacks with a padded laptop compartment for tournament travel, gaming events, and daily team use. One branded team bag carries the whole setup, with multiple storage pockets and shoulder straps. Every backpack is produced in-house overseas, direct from our Sialkot manufacturing plant, with full-panel sublimation for graphics across the entire bag, plus an optional embroidered logo or patch for a raised finish. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-backpacks",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 69.99,
      "tier4": 64.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 69.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 64.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 73,
    "name": "Custom Esports Arm Sleeves",
    "slug": "custom-esports-arm-sleeves",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 22.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029840/hamlosports/products/esports/custom-esports-arm-sleeves.png",
    "canonical": "/custom-esports-apparel/custom-esports-arm-sleeves/",
    "rating": 4.9,
    "reviews": 61,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Moisture-wicking fabric keeps forearms dry against the desk, eliminating sticky drag during gameplay",
      "Non-slip silicone grip at the bicep",
      "Full sublimation with edge-to-edge graphics wrapping team branding and sponsor logos wrist to bicep",
      "Sold as a matching pair for both arms — or keep one as a spare",
      "Available in youth and adult sizes for a consistent compression fit in one team order",
      "No minimum order quantity required; volume pricing on pairs as low as $14.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports arm sleeves, the gaming arm sleeves with a compression poly-spandex fit and moisture-wicking fabric, built for tournament play, streaming sessions, and daily practice. A non-slip silicone grip holds each sleeve in place. Sold as a matching pair and fully sublimated wrist to bicep. Every pair is produced in-house overseas, direct from our Sialkot manufacturing plant, with full sublimation that prints your team logos, gamertags, sponsor branding, and custom patterns directly into the compression fabric, so there is no print layer to crack or peel. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-arm-sleeves",
    "tierPrices": {
      "tier1": 22.99,
      "tier2": 19.99,
      "tier3": 16.99,
      "tier4": 14.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 22.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 19.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 16.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 14.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 74,
    "name": "Esports Jerseys",
    "slug": "custom-esports-jerseys",
    "categorySlug": "custom-esports-apparel",
    "category": "ESPORTS",
    "sport": "Esports",
    "badge": "FACTORY DIRECT",
    "price": 38.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029841/hamlosports/products/esports/custom-esports-jerseys.png",
    "canonical": "/custom-esports-apparel/custom-esports-jerseys/",
    "rating": 4.9,
    "reviews": 62,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Four cuts: short sleeve, long sleeve, sleeveless and quarter-zip",
      "Sublimated team designs, logos, gamertags and numbers included",
      "Sponsor-logo zones on the chest, back and sleeves",
      "Optional embroidered crest, priced on your quote",
      "Youth YS–YXL through adult 4XL, all at the same tier price",
      "No minimum order quantity required and zero hidden setup costs",
      "Free mockup within 12 hours, unlimited changes",
      "Free rush when production allows"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom esports jerseys for gaming orgs, clubs and school teams, with no minimum order. Every jersey carries your team design, logos, sponsor marks, gamertags and player numbers, dyed in by full sublimation and included in the price. Prices differ by cut: short-sleeve and sleeveless from $32.99, long-sleeve from $34.99 and quarter-zip from $38.99 per player for 1 to 24 pieces, and shipping anywhere in the USA is free. Every cut is lightweight moisture-wicking polyester that stays comfortable through long sessions. Send your logo or a sketch, and a free mockup comes back within 12 hours.",
    "cloudinaryPublicId": "hamlosports/products/esports/custom-esports-jerseys",
    "tierPrices": {
      "tier1": 38.99,
      "tier2": 34.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 38.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 75,
    "name": "Custom Flag Football Compression Shorts",
    "slug": "custom-flag-football-compression-shorts",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029845/hamlosports/products/flag-football/custom-flag-football-compression-shorts.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-compression-shorts/",
    "rating": 4.9,
    "reviews": 38,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "4-Way Stretch Compression Fabric, Moves with Every Cut, Route, and Sprint Without Restriction",
      "Moisture-Wicking Material Pulls Sweat Away from First Snap to Final Whistle",
      "No-Pocket Design Removes Snag Points, Pockets Available on Request",
      "Full Sublimation Printing Dyed Directly into Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Youth and Adult Sizes (YS to 4XL) Across Men's and Women's, Custom Sizing Available Between Standards",
      "9 to 11 Inch Flag Football-Appropriate Inseam",
      "Standalone Game-Day Short or Base Layer Under Athletic Shorts",
      "Sublimation and Screen Printing for Bold Marks. Tackle Twill and Embroidery Are Not Used",
      "As Low as $32.99/Pair on 101+ Pairs, zero hidden setup costs, No Hidden Charges, Free Shipping Anywhere in the USA"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom flag football compression shorts built for a clean team look on the field. 4-way stretch, moisture-wicking fabric keeps players comfortable through every sprint, cut, and flag pull. Fully sublimated with your team colors, logos, and player numbers, nothing printed on top. Wear them on their own as a flag-belt-clean game-day short, or layer them under athletic or training shorts as a base layer for hot-weather wicking. Sublimated team colors and numbers on the 4-way stretch knit. Tackle twill and embroidery are not used on a compression base layer. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-compression-shorts",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 36.99,
      "tier4": 32.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 36.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 32.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 76,
    "name": "Custom Flag Football Jerseys",
    "slug": "custom-flag-football-jerseys",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029846/hamlosports/products/flag-football/custom-flag-football-jerseys.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-jerseys/",
    "rating": 4.9,
    "reviews": 39,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Integrated Mesh Panels for Ventilation During High-Tempo 7v7 and Flag Football",
      "Lightweight Moisture-Wicking Polyester That Pulls Sweat Away Through Doubleheaders and Tournaments",
      "Send Us Your League Rules and We Design the Jersey Around Them",
      "Full Sublimation Printing Dyes Logos, Numbers, and Graphics into the Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Unlimited Free Mockup Changes, Nothing Is Made Until You Approve the Design",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with Custom Sizing Available, No Upcharge on Any Size",
      "No Minimums, Order 1 Jersey or Outfit the Entire League, Volume Pricing as Low as $39.99/Each on 101+ Pieces",
      "Sublimation, Tackle Twill, Embroidery, and Screen Printing Available to Match Any Design Style"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$39.99/Each on 101+ Pieces Sublimation, Tackle Twill, Embroidery, and Screen Printing Available to Match Any Design Style.",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-jerseys",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 77,
    "name": "Custom Flag Football Joggers",
    "slug": "custom-flag-football-joggers",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Smooth Tricot Performance Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029846/hamlosports/products/flag-football/custom-flag-football-joggers.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-joggers/",
    "rating": 4.9,
    "reviews": 40,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Tapered tricot fit with elastic ankle cuffs — a modern silhouette that looks sharp at the facility, on the bus, and on the sideline without the baggy line of traditional track pants",
      "Deep zip side pockets on both sides — phone, wallet, and keys lock in during travel days, team meals, and tournament downtime",
      "Interior drawstring waistband",
      "100% polyester tricot performance shell, lightweight and breathable for warm-weather sideline wear and all-day comfort between games",
      "All four decoration methods supported on the tricot shell — dye-sublimation, tackle twill, embroidery, and screen printing",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimums: order 1 pair or 500+, with tiered volume pricing landing at $36.99/Pair on 101+ Pairs",
      "Free US shipping — affordable team pricing, zero hidden setup costs, no hidden costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom flag football joggers built for the way teams actually move off the field — modern tapered fit, elastic ankle cuffs, deep zip side pockets, and interior drawstring waistband on a 100% polyester tricot performance shell. Each pair is tailored to order with your sublimated team colors, logo, and branding included in the base unit rate. HAMLO SPORTS designs every pair with our in-house team and makes it factory-direct in our Sialkot, Pakistan export manufacturing facility, from first sketch to final stitch. Each pair takes all four decoration methods: full sublimation across the body, tackle twill leg numbers, embroidered crest, and screen-printed sponsor marks. No minimum orders, Complimentary 12-Hour 3D Digital Design Mockups, and Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-joggers",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Smooth Tricot Performance Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 78,
    "name": "Flag Football Long Sleeve Training Shirts",
    "slug": "custom-flag-football-long-sleeve-training-shirts",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029847/hamlosports/products/flag-football/custom-flag-football-long-sleeve-training-shirts.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-long-sleeve-training-shirts/",
    "rating": 4.9,
    "reviews": 41,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Lightweight 100% polyester moisture-wicking performance fabric, pulls sweat away so players stay dry and focused through every drill",
      "Full arm coverage for outdoor conditioning and cool-weather practice",
      "Athletic crew-neck fit sits clean under a game jersey or flag-belt strap, doesn't bunch or shift during cuts and direction changes",
      "3-method decoration: sublimation across the body for team colors and graphics, embroidery for a stitched front-chest logo, and screen printing for bold opaque marks (no tackle twill)",
      "Practice-tier training top — built for daily drills, conditioning days, and outdoor cool-weather sessions so game-day jerseys stay competition-ready",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on shirts as low as $27.99/each on 101+ pieces, zero hidden setup costs, no per-color charge on sublimated designs, free shipping anywhere in the USA"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom Flag Football Long Sleeve Training Shirts Crafted for competitive play, our custom flag football long sleeve training shirts built for daily practices, conditioning days, and outdoor drills, lightweight moisture-wicking polyester, crew neck, athletic fit, full arm coverage for cooler weather. Save your game-day jerseys for competition, Each shirt is tailored to order with your sublimated team colors, logo, and branding in the per-piece price. Decorated 3-method on a 100% polyester performance fabric: full sublimation across the body for team colors and graphics, embroidery for a stitched front-chest logo, and screen printing for bold opaque marks. Tackle twill is not used on training shirts. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-long-sleeve-training-shirts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 27.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 27.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 79,
    "name": "Custom Flag Football Practice Jerseys",
    "slug": "custom-flag-football-practice-jerseys",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 38.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029847/hamlosports/products/flag-football/custom-flag-football-practice-jerseys.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-practice-jerseys/",
    "rating": 4.9,
    "reviews": 42,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Durable Performance Fabric with Reinforced Stitching at Seams and Stress Points, Built for Daily Practice and Weekly Washing",
      "Moisture-Wicking Polyester That Pulls Sweat Away Through Back-to-Back Drills and Scrimmages",
      "Full Sublimation Printing Dyed Directly into the Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Breathable Mesh Panel Ventilation for High-Intensity Training in Warm Weather and Indoor Facilities",
      "Flag-Belt-Friendly Cut That Sits Clean at the Waist, No Excess Material to Interfere During Live Reps",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with Custom Sizing Available, No Upcharge on Any Size",
      "No Minimums, Order 1 Jersey or Outfit Your Whole Roster, Volume Pricing as Low as $30.99/Each on 101+ Pieces",
      "Decorated by Sublimation Only: Training Numbers, Colors, and Logos Dyed into the Fabric (Raised Tackle-Twill Numbers Are Reserved for the Game Jersey)"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom flag football practice jerseys for the daily grind, drills, scrimmages, and preseason camps. Moisture-wicking fabric with logos, numbers, and colors sublimated into the fabric so your squad looks organized and unified in training. These are not blank pinnies — they are fully branded, custom-designed training jerseys priced so you can order extras for tryouts, new players, and mid-season replacements without breaking your budget. Team colors, numbers, and logo sublimated in. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-practice-jerseys",
    "tierPrices": {
      "tier1": 38.99,
      "tier2": 34.99,
      "tier3": 32.99,
      "tier4": 30.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 38.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 30.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 80,
    "name": "Flag Football Quarter Zip Pullover",
    "slug": "custom-flag-football-quarter-zip-pullover",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029848/hamlosports/products/flag-football/custom-flag-football-quarter-zip-pullover.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-quarter-zip-pullover/",
    "rating": 4.9,
    "reviews": 43,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Moisture-wicking performance interlock pulls sweat away during warm-up drills and between series",
      "4-way stretch construction moves in every direction without restriction, built for athletes running routes and cutting at full speed, not just standing on a sideline",
      "Full sublimation prints unlimited team colors, graphics, and logos dyed directly into the polyester fibers so there is molecularly infused graphics that will never crack, peel, or fade",
      "Embroidery available for a raised, premium chest crest or sleeve patch — stitched on the stable chest panel where minimal stretch keeps thread crisp",
      "Quarter-zip neckline with chin garage seals warmth at the throat or opens for ventilation when intensity climbs",
      "Youth (YS to YXL) through adult (XS to 4XL) with every player on your roster sized and priced the same, no upcharge on any size",
      "No minimum order quantity required; volume pricing on pullovers as low as $34.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$34.99/each on 101+ pieces.",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-quarter-zip-pullover",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 81,
    "name": "Custom Flag Football Shorts",
    "slug": "custom-flag-football-shorts",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029848/hamlosports/products/flag-football/custom-flag-football-shorts.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-shorts/",
    "rating": 4.9,
    "reviews": 44,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Pocketless Design, So Nothing Gets in the Way of a Flag Pull",
      "Elastic Waistband with Interior Drawstring",
      "Lightweight Moisture-Wicking Polyester for Back-to-Back Tournament Games",
      "Full Sublimation Printing, Colors, Logos, and Numbers Dyed into the Fabric",
      "Athletic Above-the-Knee Cut, Unrestricted Movement",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges",
      "No Minimums, Order 1 Pair or Outfit the Entire League with Volume Pricing as Low as $39.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom flag football shorts made for game day. Pocketless athletic cut, elastic drawstring waist, lightweight moisture-wicking polyester, and fully sublimated team graphics, with no print layer to crack or peel. Your sublimated colors, logo, and player numbers are included in the base unit rate. Every pair is cut to sit cleanly with flag belts. Team colors, logo, and player numbers are sublimated into the poly mesh at the per-pair price, with embroidery or screen printing available for crests and sponsor marks (no tackle twill on shorts). No minimum orders. Free mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-shorts",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 82,
    "name": "Flag Football Sleeveless Training Tank",
    "slug": "custom-flag-football-sleeveless-training-tank",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 38.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029848/hamlosports/products/flag-football/custom-flag-football-sleeveless-training-tank.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-sleeveless-training-tank/",
    "rating": 4.9,
    "reviews": 45,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Ultra-lightweight 100% polyester performance mesh for peak summer practices and indoor high-tempo conditioning",
      "Open-shoulder cut delivers full range of motion for throwing, catching, and direction changes without sleeve restriction or armhole drag",
      "Crew-neck athletic fit sits clean against the body, doesn't bunch or shift during cuts and doesn't interfere with a flag-belt strap layered on top",
      "3-method decoration: sublimation across the body, embroidery for a stitched front-chest logo, and screen printing for bold opaque marks (no tackle twill)",
      "Practice-tier training tank — built for hot-weather drills and indoor conditioning so the game-day sleeveless jersey stays competition-ready",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on tanks as low as $29.99/each on 101+ pieces, zero hidden setup costs, no per-color charge on sublimated designs, free shipping anywhere in the USA"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom Flag Football Sleeveless Training Tank Crafted for competitive play, our custom flag football sleeveless training tanks for hot practice days: lightweight moisture-wicking polyester with an open shoulder design. Each tank is tailored to order with your sublimated team colors, logo, and branding included in the base unit rate. Decorated 3-method on 100% polyester performance mesh: full sublimation across the body for team colors and graphics, embroidery for a stitched front-chest logo, and screen printing for bold opaque marks. Tackle twill is not used on training tanks. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-sleeveless-training-tank",
    "tierPrices": {
      "tier1": 38.99,
      "tier2": 36.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 38.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 83,
    "name": "Flag Football Team Jackets",
    "slug": "custom-flag-football-team-jackets",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029848/hamlosports/products/flag-football/custom-flag-football-team-jackets.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-team-jackets/",
    "rating": 4.9,
    "reviews": 46,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-length front zipper, easy on and off between warm-ups",
      "Sublimation, tackle twill, embroidery, and screen printing available for full-color body, back numbers, chest logos, and sleeve marks",
      "Ribbed cuffs for a close fit at the wrists",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "Coordinates with your existing HAMLO SPORTS jerseys, shorts, and warm-up pants for a unified team look",
      "No minimum order quantity required; volume pricing on jackets as low as $39.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom Flag Football Team Jackets Crafted for competitive play, our custom flag football team jackets for the sideline and tournament travel, with a full-length front zipper and ribbed cuffs. Each jacket is tailored to order with your sublimated team colors, logo, player names, and coaching staff details included in the base unit rate. Every flag football jacket we deliver is designed by our in-house team and made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the first sketch to the final stitch. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-team-jackets",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 84,
    "name": "Custom Flag Football Uniform Sets",
    "slug": "custom-flag-football-uniform-sets",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 89.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029848/hamlosports/products/flag-football/custom-flag-football-uniform-sets.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-uniform-sets/",
    "rating": 4.9,
    "reviews": 47,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Moisture-Wicking Performance Polyester, with Breathable Mesh Panels on the Jersey",
      "Full Sublimation Printing, Logos, Numbers, and Graphics Dyed into Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with Custom Sizing Available, No Upcharge on Any Size",
      "Volume Pricing as Low as $77.99 per Set on 101+ Sets",
      "zero hidden setup costs and No Hidden Costs",
      "Tackle Twill, Embroidery or Screen Printing When Your Design Needs It"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Flag football uniform sets from HAMLO SPORTS give each player a matching jersey and shorts, sublimated in your team colors with your logo, names and numbers. Our flag football uniform packages have no minimum order, so you can order 1 set or outfit the whole league. Your whole order is made in the same dye batch, so the jersey and shorts colors match. Sublimated team colors, logo, names and numbers are included in the per-set price. Tackle twill is +$5 per name and +$5 per number, and your quote shows the price for embroidery or screen printing. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-uniform-sets",
    "tierPrices": {
      "tier1": 89.99,
      "tier2": 84.99,
      "tier3": 82.99,
      "tier4": 77.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 89.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 84.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 82.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 77.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 85,
    "name": "Custom Flag Football Warmup Pants",
    "slug": "custom-flag-football-warmup-pants",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 48.99,
    "fabric": "180 - 220 GSM Smooth Tricot Performance Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029848/hamlosports/products/flag-football/custom-flag-football-warmup-pants.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-warmup-pants/",
    "rating": 4.9,
    "reviews": 48,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Elastic waistband with interior drawstring",
      "Zip side pockets keep phone, keys, and wallet locked in during sideline time and bus rides to tournament sites",
      "Custom side-stripe designs in your team colors add a clean visual line from waist to ankle that matches your team jacket and jerseys",
      "Open-hem or cuffed-ankle options — open hem for easy pull-on over cleats, cuffed ankles for a tapered modern look",
      "Decorated four ways: sublimation for body graphics, tackle twill for leg numbers, embroidery for a crest and screen printing for sponsor wordmarks",
      "100% polyester tricot performance fabric — lightweight, breathable, and stretch-free so the design lays flat on the leg",
      "Youth (YS-YXL) through adult (XS-4XL) at the per-pair rate with zero oversize upcharges",
      "No minimum order quantity required with volume pricing as low as $36.99/each on 101+ pieces — no setup or design fees"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom flag football warmup pants are the matched warmup bottom for the team-jacket set — 100% polyester tricot with an elastic drawstring waist, zip side pockets, custom side stripes, and your choice of open hem or cuffed ankle. Pre-game routines, sideline downtime, tournament travel, and bus rides to away games — your team colors, logo, and branding sublimated panel-for-panel with the rest of the kit. HAMLO SPORTS designs every pair with our in-house team and makes it factory-direct in our Sialkot, Pakistan export manufacturing facility, from first sketch to final stitch. Each pair takes all four decoration methods: full sublimation across the body, tackle twill leg numbers, embroidered crest, and screen-printed sponsor marks. No minimum orders, Complimentary 12-Hour 3D Digital Design Mockups, and Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-warmup-pants",
    "tierPrices": {
      "tier1": 48.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 48.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Smooth Tricot Performance Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 86,
    "name": "Flag Football Windbreaker Jackets",
    "slug": "custom-flag-football-windbreaker-jackets",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029849/hamlosports/products/flag-football/custom-flag-football-windbreaker-jackets.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-windbreaker-jackets/",
    "rating": 4.9,
    "reviews": 49,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Lightweight wind-resistant polyester shell, blocks gusts and light rain without adding bulk or restricting movement on the field",
      "Adjustable hood with drawcord, tighten it against driving wind or push it back when the sun breaks through between games",
      "Full-length front zipper for fast on-and-off, get game-ready in seconds when your team is called to the field",
      "Side pockets with secure closures, stash your phone, keys, or mouthguard without worrying about items falling out during warm-ups",
      "Sublimation, tackle twill, embroidery, and screen printing available for full-color body, back numbers, chest logos, and sponsor marks",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on jackets as low as $34.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom Flag Football Windbreaker Jackets Crafted for competitive play, our custom flag football windbreaker jackets built for outdoor tournaments and game-day weather, lightweight, packable wind-resistant polyester shell with adjustable hood, front zipper, and side pockets. Each windbreaker is tailored to order with your sublimated team colors, logo, player names, and numbers included in the base unit rate. Every flag football windbreaker jacket we deliver is designed by our in-house team and made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the first sketch to the final stitch. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-windbreaker-jackets",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 87,
    "name": "Flag Football Full Zip Hoodies",
    "slug": "custom-flag-football-full-zip-hoodies",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029845/hamlosports/products/flag-football/custom-flag-football-full-zip-hoodies.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-full-zip-hoodies/",
    "rating": 4.9,
    "reviews": 50,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full-length front zipper, goes on and off without messing up hair, headbands, or pre-game focus",
      "Fleece-lined interior, traps body heat for genuine warmth during cold-weather games and early morning tournaments",
      "Fully sublimated team graphics on brushed-back fleece, with colors and logos dyed into the fabric",
      "Personalized player details, add individual names, numbers, and custom graphics for every player on your roster",
      "Adjustable drawstring hood, pull it snug on cold mornings or leave it relaxed on the sideline",
      "Front kangaroo pocket that keeps hands warm between plays",
      "Ribbed cuffs and hem, seals in warmth at the wrists and waist with a clean, tailored finish",
      "Youth and adult sizes (YS to 4XL), men's, women's, and youth sizing with custom fit options available",
      "The ultimate flag football warmup hoodie, walk into the venue looking unified from the parking lot to the field",
      "No minimum order quantity required; volume pricing on hoodies as low as $39.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom flag football full zip hoodies built for sideline warmth, team travel, and pre-game presence. Fleece-lined interior with full-length zipper lets players layer between tournament games, ventilate during warmups, and pull on or off without disrupting gear. Fully sublimated with your team's colors, logos, and player names, dyed into the fabric, not printed on top. No minimum order, outfit your 7v7 roster, personalized hoodies for coaches, or gear up a rec league squad. Free professional design mockups, unlimited revisions, and Fast US Nationwide Delivery (Duties Pre-Cleared). Ready 2 to 3 weeks after you approve your design, then it arrives 3 to 5 days later. Need it sooner? Ask for a free rush. We'll say yes when production allows.",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-full-zip-hoodies",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 88,
    "name": "Flag Football Pullover Hoodies",
    "slug": "custom-flag-football-pullover-hoodies",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029847/hamlosports/products/flag-football/custom-flag-football-pullover-hoodies.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-pullover-hoodies/",
    "rating": 4.9,
    "reviews": 51,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Fleece-lined interior for warmth on the sideline, in a structured pullover cut",
      "Adjustable drawstring hood and front kangaroo pocket — functional details built for cool-weather sideline, travel days, and post-game recovery",
      "Ribbed cuffs and hem",
      "4-method decoration: sublimation across the fleece body for team colors and graphics, tackle twill for varsity-style sewn-on team name or back numbers, embroidery for a stitched front-chest logo, and screen printing for bold opaque marks",
      "Youth (YS to YXL) through adult (XS to 4XL) with every player, coach, and staff member covered at the same per-hoodie price",
      "Sideline-tier off-field fleece — sized to layer cleanly over a game jersey or compression base, paired across the kit for cool-weather drills, sidelines, and team travel",
      "Quarter-zip or half-zip variants available on request — let our design team know before production and we'll adjust the pattern",
      "No minimum order quantity required; volume pricing on hoodies as low as $38.99/each on 101+ pieces. zero hidden setup costs and free shipping anywhere in the USA"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom flag football pullover hoodies built for sidelines, travel days, and every moment your team shares off the field. Fleece-lined interior, adjustable drawstring hood, kangaroo pocket, and ribbed cuffs, fully customized with your sublimated team colors, logo, player names, and numbers in the per-piece price. Four decoration methods on a fleece-lined hoodie: full sublimation across the body for team colors and graphics, tackle twill for a varsity-style sewn-on team name or back numbers, embroidery for a stitched front-chest logo, and screen printing for bold opaque marks. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-pullover-hoodies",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 89,
    "name": "Custom Flag Football Sleeveless Jerseys",
    "slug": "flag-football-sleeveless-jerseys",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 38.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029849/hamlosports/products/flag-football/flag-football-sleeveless-jerseys.png",
    "canonical": "/custom-flag-football-uniforms/flag-football-sleeveless-jerseys/",
    "rating": 4.9,
    "reviews": 52,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Sleeveless Tank Cut Built for Flag Football. Full Arm Mobility on Every Throw, Catch, and Flag Pull Without Fabric Restriction",
      "Sublimation, Tackle Twill, Embroidery, and Screen Printing Available — Sublimated Colorways, Bold Twill Front and Back Numbers, Embroidered Crest, Screen-Printed Sponsors",
      "Lightweight Moisture-Wicking Polyester Engineered for Hot-Weather Play. Keeps Players Dry and Comfortable Through Doubleheaders and Tournament Weekends",
      "Reinforced Armhole Stitching Prevents Fraying from Repeated Movement",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with No Upcharge on Extended Sizes, Every Player Gets the Same Quality Regardless of Size",
      "No Minimums: Order 1 Jersey or Outfit the Whole League, Volume Pricing as Low as $31.99/Each on 101+ Pieces",
      "Sublimated Team Logo, Player Names, and Numbers Included in the Per-Jersey Price — zero hidden setup costs, No Hidden Costs, Free Shipping Anywhere in the USA"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom flag football sleeveless jerseys with open shoulders for warm weather. Every tank-style jersey is made to order with lightweight, moisture-wicking polyester for summer tournaments and league play. Sublimated team colors, logo, player names, and numbers included in the base unit rate. The sleeveless cut sits above the flag belt with zero excess fabric, so opponents grab flags, not jerseys. Your team colors, logo, player names, and numbers are built in at the per-jersey price — sublimated into the mesh, with tackle-twill numbers, an embroidered crest, or screen-printed sponsors as you choose (your quote shows their price). No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/flag-football-sleeveless-jerseys",
    "tierPrices": {
      "tier1": 38.99,
      "tier2": 36.99,
      "tier3": 34.99,
      "tier4": 31.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 38.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 31.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 90,
    "name": "Custom Flag Football 7v7 Shorts",
    "slug": "custom-flag-football-7-v-7-shorts",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029844/hamlosports/products/flag-football/custom-flag-football-7-v-7-shorts.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-7-v-7-shorts/",
    "rating": 4.9,
    "reviews": 53,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Competition-Grade Compression Fit, Engineered for 7v7 Open-Field Speed and High-Tempo Tournament Play",
      "4-Way Stretch Performance Fabric, Unrestricted Movement Through Cuts, Routes, and Direction Changes",
      "Slip-Resistant Waistband",
      "Moisture-Wicking Construction Keeps Athletes Dry and Comfortable Across Back-to-Back Tournament Games",
      "No-Pocket Design Removes Snag Points, Pockets Available on Request for Warmups",
      "Full Sublimation Printing, Bold Color Dyed into the Fabric with molecularly infused graphics that will never crack, peel, or fade",
      "Youth and Adult Sizes (YS to 4XL) for Men's, Women's, and Youth, Custom Sizing Available Between Standard Fits",
      "Standalone Game-Day Short or Paired as Part of a Complete 7v7 Uniform Package with Matching Jerseys",
      "Sublimation and Screen Printing. Tackle Twill and Embroidery Are Not Used",
      "As Low as $36.99/Pair on 101+ Pairs, No Minimums, zero hidden setup costs, No Hidden Charges, Free Shipping Anywhere in the USA"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom flag football 7v7 shorts designed for the speed and intensity of competitive 7-on-7 play. Compression-fit with premium 4-way stretch fabric and a slip-resistant waistband. Built for tournament weekends, travel circuits, and elite 7-on-7 league competition. Team colors, logos, and player numbers are sublimated into the 4-way stretch fabric, with screen printing available for bold sponsor marks. Tackle twill and embroidery are not used on a compression base layer. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-7-v-7-shorts",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 91,
    "name": "Custom Flag Football Athletic Shorts",
    "slug": "custom-flag-football-athletic-shorts",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029844/hamlosports/products/flag-football/custom-flag-football-athletic-shorts.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-athletic-shorts/",
    "rating": 4.9,
    "reviews": 54,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Relaxed Athletic Fit with Side Pockets, Built for Practice, Warm-Ups, Team Travel, and Everyday Wear",
      "Full Sublimation Printing, with molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight Moisture-Wicking Polyester for Long Sessions and Summer Practices",
      "Elastic Waistband with Interior Drawstring, Adjustable Fit",
      "Above-the-Knee Athletic Cut, Full Leg Movement for Agility Work, Sprints, and Dynamic Warm-Ups",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges",
      "No Minimums, Order 1 Pair or Outfit the Whole Roster with Volume Pricing as Low as $29.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom flag football athletic shorts built for practice, warm-ups, sideline, and team travel. Relaxed-fit with side pockets, elastic drawstring waist, and lightweight moisture-wicking fabric, fully sublimated with your team colors, logo, and numbers. Built for off-field use: practice, warm-ups, sideline, and team travel. These are the relaxed-fit, pocketed counterpart to the pocketless game-day Custom Flag Football Shorts. They pair with any HAMLO SPORTS Flag Football Jersey for a coordinated team look on and off the field. Sublimated team colors, with embroidery or screen printing available for crests and sponsor marks. No minimum orders. Free mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-athletic-shorts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 31.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 31.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 92,
    "name": "Flag Football Cinch Bag",
    "slug": "custom-flag-football-cinch-bag",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029845/hamlosports/products/flag-football/custom-flag-football-cinch-bag.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-cinch-bag/",
    "rating": 4.9,
    "reviews": 55,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Drawstring closure, cinch it shut and carry hands-free between fields",
      "Front zippered pocket, keeps phones, keys, wallets, and mouthguards separate and secure",
      "Reinforced corners and stitching, with room for cleats, bottles, and flag belts",
      "Sublimated full-panel team graphics plus embroidered front-panel logos for raised branding",
      "Lightweight and packable, folds flat inside a larger bag and takes up zero space when empty",
      "Sized to fit everything a flag football player needs for game day without being oversized or bulky",
      "No minimum order quantity required; volume pricing on bags as low as $19.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom Flag Football Cinch Bag Crafted for competitive play, our custom flag football cinch bags built for practices, tournaments, and game days, lightweight drawstring closure, front zippered pocket, reinforced bottom, and your team's full-color branding that ties back to your jerseys, shorts, and warm-ups. Every cinch bag is made to order with your sublimated team colors, logo, and design included in the base unit rate. Every flag football cinch bag we deliver is designed by our in-house team and made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the first sketch to the final stitch. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-cinch-bag",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 29.99,
      "tier3": 24.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 24.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 93,
    "name": "Custom Flag Football Compression Jerseys",
    "slug": "custom-flag-football-compression-jerseys",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029845/hamlosports/products/flag-football/custom-flag-football-compression-jerseys.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-compression-jerseys/",
    "rating": 4.9,
    "reviews": 56,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Body-Mapped Compression Fit for Flag Football, Hugs the Torso so Defenders Grab Flags Not Fabric",
      "4-Way Stretch Polyester-Spandex Blend, Moves with Every Cut, Route, and Overhead Catch",
      "Full Sublimation Printing, Graphics Stretch with the Fabric, with molecularly infused graphics that will never crack, peel, or fade — Screen Printing Available for Bold Marks",
      "Moisture-Wicking Fabric with Breathable Mesh Panels for Back-to-Back Games",
      "Youth (YS-YXL) Through Adult (XS-4XL) with zero oversize upcharges",
      "No Minimums, Order 1 Jersey or Outfit the Whole League, Volume Pricing as Low as $32.99/Each on 101+ Pieces",
      "Sublimated Team Logos, Names, and Numbers Included in the Per-Jersey Price — zero hidden setup costs, No Hidden Costs, Free Shipping Anywhere in the USA"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom flag football compression jerseys built for competitive flag football, fast cuts, contested catches, nonstop movement. The compression fit leaves less loose fabric for defenders to grab. Every jersey includes your sublimated team colors, logos, player names, and numbers in the per-jersey price. The 4-way stretch polyester-spandex blend with a moisture-wicking finish keeps players dry when intensity ramps up. Team colors, logos, names, and numbers are sublimated into the stretch fabric at the per-jersey price, with screen-printed marks available. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-compression-jerseys",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 38.99,
      "tier3": 34.99,
      "tier4": 32.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 38.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 32.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 94,
    "name": "Custom Flag Football Compression Uniforms",
    "slug": "custom-flag-football-compression-uniforms",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029845/hamlosports/products/flag-football/custom-flag-football-compression-uniforms.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-compression-uniforms/",
    "rating": 4.9,
    "reviews": 57,
    "isNew": false,
    "isBestseller": false,
    "features": [],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design complete custom flag football compression uniform sets with matching jersey and shorts. 4-way stretch poly-spandex with a moisture-wicking finish. Both pieces are sublimated together so colors and graphics align across the kit Complete compression jersey + matching compression shorts set — both pieces sublimated in one run for color alignment 84% polyester / 16% spandex 4-way stretch knit Body-mapped compression fit hugs the torso so defenders grab flags, not fabric — flag-belt-friendly waistband Moisture-wicking finish pulls sweat away through doubleheaders and tournament weekends Sublimation + screen printing decoration: sublimated team colors, numbers, and graphics, with screen-printed marks for bold sponsor logos. Tackle twill and embroidery are not used Sublimated team logo, player names, and numbers included at the per-set price — no setup fees, no hidden costs, no per-color charges Youth (YS-YXL) through adult (XS-4XL) with no upcharge on any size No minimums, order 1 set or outfit the whole league with volume pricing as low as $67.99/Set on 101+ Sets.",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-compression-uniforms",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 69.99,
      "tier4": 67.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 69.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 67.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 95,
    "name": "Custom Flag Football Hooded Jerseys",
    "slug": "custom-flag-football-hooded-jerseys",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 36.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029846/hamlosports/products/flag-football/custom-flag-football-hooded-jerseys.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-hooded-jerseys/",
    "rating": 4.9,
    "reviews": 58,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Structured hood with athletic performance cut, sets your team's identity apart from the first warm-up to the final drive",
      "Direct-to-fabric sublimation printing, your design lives inside the material, and there is molecularly infused graphics that will never crack, peel, or fade",
      "Ventilated moisture-wicking polyester, lightweight enough for back-to-back 7v7 games",
      "Youth (YS to YXL) through adult (XS to 4XL) with every size on your roster covered at the same price and zero upcharge",
      "No minimums, order 1 jersey or outfit the whole league with volume pricing as low as $29.99/each on 101+ pieces",
      "Sublimation, tackle twill, embroidery, and screen printing available, choose the decoration that fits your team's look",
      "Sublimated team logo, player names, and numbers included in the per-piece price, no hidden fees, no setup charges",
      "Free mockup in 12 hours, see your exact design before a single jersey goes into production"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom flag football hooded jerseys for 7v7 leagues, youth programs, and competitive adult teams, featuring a structured hood, athletic performance cut, and ventilated moisture-wicking polyester. Each jersey is tailored to order with your sublimated team colors, logo, player names, and numbers included in the base unit rate. Your team colors, logo, player names, and numbers are built into the jersey at the per-jersey price — sublimated into the fabric, with tackle-twill numbers, an embroidered crest, or screen-printed sponsors as you choose (your quote shows their price). Order as few as 1 jersey or outfit your entire roster, no minimum required. Your free professional design mockup is ready within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-hooded-jerseys",
    "tierPrices": {
      "tier1": 36.99,
      "tier2": 34.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 36.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 96,
    "name": "Custom Flag Football Long Sleeve Jerseys",
    "slug": "custom-flag-football-long-sleeve-jerseys",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029847/hamlosports/products/flag-football/custom-flag-football-long-sleeve-jerseys.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-long-sleeve-jerseys/",
    "rating": 4.9,
    "reviews": 59,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Full-Length Sleeves that Keep the Sun off the Arms During Day-Long Tournaments and Extended Outdoor Play",
      "Lightweight Moisture-Wicking Polyester for Cool Weather",
      "Full Sublimation Printing Across the Entire Jersey Including Sleeves, an Extended Canvas for Graphics and Team Branding",
      "Athletic Flag-Belt-Friendly Fit, No Excess Fabric at the Waist with the Same Clean Silhouette as Our Short Sleeve Jerseys",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with Custom Sizing Available, No Upcharge on Any Size",
      "No Minimums, Order 1 Jersey or Outfit the Whole League with Volume Pricing as Low as $28.99/Each on 101+ Pieces",
      "Sublimation, Tackle Twill, Embroidery, and Screen Printing Available to Match Your Preferred Decoration Method"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom flag football long sleeve jerseys built for fall seasons, evening leagues, and cooler weather tournaments. Every jersey features full arm coverage with lightweight moisture-wicking polyester and the same flag-belt-friendly athletic cut as our short sleeve jerseys, more coverage, warmth, and design space for your team's graphics. Full-length sleeves give extra canvas for stripes, patterns, sponsor logos, and custom graphics. Your team colors, logo, names, and numbers are built in at the per-jersey price — sublimated into the fabric, with tackle-twill numbers, an embroidered crest, or screen-printed sponsors as you choose (your quote shows their price). No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-long-sleeve-jerseys",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 28.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 28.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 97,
    "name": "Custom Flag Football High Tight Compression Pants",
    "slug": "custom-flag-football-high-tight-compression-pant",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029845/hamlosports/products/flag-football/custom-flag-football-high-tight-compression-pant.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-high-tight-compression-pant/",
    "rating": 4.9,
    "reviews": 60,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "High tight cut from waist to above the knee, with more thigh coverage than compression shorts",
      "High waistband sits above the hip",
      "4-way stretch compression allows full range of motion on every play",
      "Moisture-wicking fabric keeps legs cool in heat, adds a comfortable base layer in cold weather",
      "Full sublimation printing with extra leg panel space for bold, edge-to-edge graphics",
      "Youth and adult sizes (YS to 4XL), men's, women's, and youth with custom fit options available",
      "Sublimation + screen printing decoration: sublimated team colors, numbers, and graphics, with screen-printed marks for bold sponsor logos. Tackle twill and embroidery are not used",
      "As low as $37.99/pair on 101+ pairs, no minimums, zero hidden setup costs, no hidden charges, free shipping anywhere in the USA"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom flag football high tight compression pants with coverage from waist to above the knee and more design space than standard compression shorts. 4-way stretch fabric with a high waistband sits securely above the hip. Every pair is sublimated into the 4-way stretch fabric: colors, logos, and numbers dyed in, so there is no print layer to crack or peel. Tackle twill and embroidery are not used on a compression base layer; screen printing handles bold sponsor marks. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-high-tight-compression-pant",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 37.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 37.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 98,
    "name": "Flag Football Visors",
    "slug": "custom-flag-football-visors",
    "categorySlug": "custom-flag-football-uniforms",
    "category": "FLAG FOOTBALL",
    "sport": "Flag Football",
    "badge": "FACTORY DIRECT",
    "price": 29.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029848/hamlosports/products/flag-football/custom-flag-football-visors.png",
    "canonical": "/custom-flag-football-uniforms/custom-flag-football-visors/",
    "rating": 4.9,
    "reviews": 61,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "The bill shades the eyes during outdoor games, tournaments, and all-day flag football events",
      "Moisture-wicking sweatband pulls sweat away from the forehead to keep vision clear play after play",
      "One size with an adjustable hook-and-loop back closure",
      "Sublimated bill-panel team graphics plus embroidered front-bill logo for a raised finish",
      "Lightweight, breathable construction built for flag football's nonstop pace and movement demands",
      "No minimum order quantity required; volume pricing on visors as low as $19.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom Flag Football Visors Crafted for competitive play, our custom flag football visors designed for the way flag football is actually played, fast breaks in direct sunlight, outdoor tournaments, and nonstop movement between plays. Moisture-wicking sweatband and adjustable hook-and-loop closure for youth and adult players. Logo, colors, and design through embroidery, sublimation, or screen printing; sublimated designs are included in the base unit rate. Every visor we produce is made by our own team overseas, direct from our Sialkot manufacturing plant, from start to finish, never resold blanks with iron-on decals. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/flag-football/custom-flag-football-visors",
    "tierPrices": {
      "tier1": 29.99,
      "tier2": 24.99,
      "tier3": 21.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 29.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 24.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 21.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 99,
    "name": "Custom Football Game Jerseys",
    "slug": "custom-football-game-jerseys",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029850/hamlosports/products/football/custom-football-game-jerseys.png",
    "canonical": "/custom-football-uniforms/custom-football-game-jerseys/",
    "rating": 4.9,
    "reviews": 62,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "No minimum order quantity required: one jersey or a full roster",
      "From $49.99 per player at 1 to 24, down to $34.99 at 101+",
      "Shipping anywhere in the USA included",
      "Free mockup within 12 hours, with unlimited changes before you approve",
      "Your whole order is made in the same dye batch, so colors match",
      "Custom sizing available for all teams",
      "Designed in the USA, made overseas in our own factory"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "HAMLO SPORTS makes custom football game jerseys in your team colors, from $49.99 per player for 1 to 24 jerseys. US shipping is included, and there's no minimum order. Your jerseys are ready 2 to 3 weeks after you approve your design, then take 3 to 5 days to reach you. Want to see home, away and alternate styles side by side? Browse our custom football jerseys. Order game jerseys on their own, with pants, or for every team in your league. Your free mockup arrives within 12 hours.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-game-jerseys",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 100,
    "name": "Custom Football Pants",
    "slug": "custom-football-pants",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029851/hamlosports/products/football/custom-football-pants.png",
    "canonical": "/custom-football-uniforms/custom-football-pants/",
    "rating": 4.9,
    "reviews": 38,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "No minimum order quantity required: one pair or a full roster, at the same price tiers",
      "$49.99 per pair at 1 to 24, down to $39.99 at 101+, shipping included",
      "Your colors, stripes and logo, shown on your free mockup before anything is made",
      "Home and away colors on the same quote",
      "Counts toward your price tier with jerseys and other items on the same quote",
      "Custom sizing available for all teams"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "HAMLO SPORTS makes custom football pants in your team colors, from $49.99 per player at 1 to 24. Shipping anywhere in the USA is included, and there's no minimum order. Pants are ready 2 to 3 weeks after you approve your design, then 3 to 5 days to ship. Order football game pants on their own, in a full uniform set, or on the same quote as your jerseys. Your free mockup arrives within 12 hours.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-pants",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 44.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 44.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 101,
    "name": "Custom Professional Football Uniforms",
    "slug": "custom-professional-football-uniforms",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 97.98,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029853/hamlosports/products/football/custom-professional-football-uniforms.png",
    "canonical": "/custom-football-uniforms/custom-professional-football-uniforms/",
    "rating": 4.9,
    "reviews": 39,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Numbers, Sizes and Colors Laid Out on Your Free Mockup, So You Can Check Them Against Your League's Rules Before You Approve",
      "Custom Sizing Available for All Teams at No Extra Charge, Cut to Each Player on the Roster When You Submit Per-Player Measurements",
      "Full-Color Sublimation Prints Colors, Logos, and Numbers Directly Into the Fabric",
      "Tackle Twill, Embroidery, and Screen Printing Also Available for the Traditional Sewn-On Varsity-Program Look",
      "Moisture-Wicking Performance Polyester for Fourth-Quarter Drives and August Two-a-Days",
      "No minimum order quantity required, Volume Pricing as Low as $72.98/Set on 101+ Sets"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Professional Football Uniforms for Friday Night Lights, College Club Programs, Semi-Pro Squads, and Tournament Play: a Performance Polyester Jersey and Pants Set in Your Team Colors, with Custom Sizing Available for All Teams and Full-Color Sublimation Built into the Fabric, with No Print Layer to Crack or Peel. Every Professional Uniform is Produced factory-direct in our Sialkot, Pakistan export manufacturing facility from Pattern Cut to Final Print. Your Whole Order is Made in the Same Dye Batch, So Jersey and Pants Colors Match, with Custom Sizing Cut to Each Player on the Roster When You Need It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Our custom football jerseys page shows this jersey next to the away, alternate and practice styles.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-professional-football-uniforms",
    "tierPrices": {
      "tier1": 97.98,
      "tier2": 90.98,
      "tier3": 82.98,
      "tier4": 72.98
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 97.98
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 90.98
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 82.98
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 72.98
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 102,
    "name": "Custom Alternate Football Uniforms",
    "slug": "custom-alternate-football-uniforms",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 97.98,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029849/hamlosports/products/football/custom-alternate-football-uniforms.png",
    "canonical": "/custom-football-uniforms/custom-alternate-football-uniforms/",
    "rating": 4.9,
    "reviews": 40,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Numbers, Sizes and Colors Laid Out on Your Free Mockup, So You Can Check Them Against Your League's Rules Before You Approve",
      "Custom Sizing Available for All Teams at No Extra Charge, Cut to Each Player on the Roster When You Submit Per-Player Measurements",
      "Built for Statement Games: Blackouts, Color Rush Themes, Inverted Colorways, and Throwback Designs",
      "Full-Color Sublimation Bonds Bold Colorways, Gradient Patterns, and Vintage Graphics into the Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle Twill, Embroidery, and Screen Printing Also Available for Heritage Sewn-On Numbers and Sponsor Patches",
      "No minimum order quantity required, Volume Pricing as Low as $72.98/Set on 101+ Sets"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Alternate Football Uniforms That Give Your Program a Second Identity for Rivalry Games, Homecoming Nights, and Marquee Matchups. Each Set Includes Jersey and Pants Designed for Statement Looks: Blackouts, Color Rush Themes, Inverted Colorways, and Throwback Designs Customized to Your Vision. Every Alternate Uniform is Produced factory-direct in our Sialkot, Pakistan export manufacturing facility to Complement Your Primary Set So Your Program Looks Cohesive Across All Rotations. Order the Alternate Together with Your Primary or Away Sets and the Whole Order is Made in the Same Dye Batch, So the Colors Match. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Need a home or away set to go with it? See them on our custom football jerseys page.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-alternate-football-uniforms",
    "tierPrices": {
      "tier1": 97.98,
      "tier2": 90.98,
      "tier3": 82.98,
      "tier4": 72.98
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 97.98
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 90.98
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 82.98
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 72.98
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 103,
    "name": "Custom Football Uniform Sets",
    "slug": "custom-football-uniform-sets",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 97.98,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029852/hamlosports/products/football/custom-football-uniform-sets.png",
    "canonical": "/custom-football-uniforms/custom-football-uniform-sets/",
    "rating": 4.9,
    "reviews": 41,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Complete Set: Custom Jersey + Matching Pants, Made in the Same Dye Batch",
      "Reinforced Knees on the Game Pants",
      "Multiple Decoration Methods — Full Sublimation for Team Colors and Numbers, Plus Tackle Twill, Embroidery, and Screen Printing for Player Names, Sponsor Patches, and Sewn Team Logos",
      "Youth Football Uniform Packages Cost the Same as Adult Sets: YS to YXL and XS to 4XL, No Upcharge on Any Size",
      "No minimum order quantity required, Volume Pricing on Uniforms as Low as $72.98/Each on 101+ Uniforms"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Football Uniform Sets and Packages That Suit Up Your Whole Roster in One Order: Jersey and Pants Sublimated to Match in Your Team Colors, with Player Names, Numbers, and Logos Built into Performance Polyester for Friday Night Games and Tackle Play. The Game Pants Have Reinforced Knees, and the Sublimated Graphic Has No Print Layer to Crack or Peel. Every Uniform Set is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility from Pattern Cut to Final Print. Your Whole Order is Made in the Same Dye Batch, So Jersey and Pants Colors Match. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Need pants on their own, or a second pair for away games? See our custom football game pants. Adding a player mid-season? Order one custom football game jersey, priced at your team's original tier.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-uniform-sets",
    "tierPrices": {
      "tier1": 97.98,
      "tier2": 90.98,
      "tier3": 82.98,
      "tier4": 72.98
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 97.98
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 90.98
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 82.98
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 72.98
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 104,
    "name": "Custom Away Football Uniforms",
    "slug": "custom-professional-away-football-uniforms",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 97.98,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029853/hamlosports/products/football/custom-professional-away-football-uniforms.png",
    "canonical": "/custom-football-uniforms/custom-professional-away-football-uniforms/",
    "rating": 4.9,
    "reviews": 42,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Numbers, Sizes and Colors Laid Out on Your Free Mockup, So You Can Check Them Against Your League's Away-Color Rules Before You Approve",
      "Custom Sizing Available for All Teams at No Extra Charge, Cut to Each Player on the Roster When You Submit Per-Player Measurements",
      "Designed to Coordinate with Your Home Set — Same Logo Treatments, Font, and Layout in a Contrast Colorway",
      "Full-Color Sublimation Bonds Away Colors, Logos, and Numbers Into the Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle Twill, Embroidery, and Screen Printing Also Available for the Traditional Sewn-On Varsity-Program Look",
      "No minimum order quantity required, Volume Pricing as Low as $72.98/Set on 101+ Sets"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Away Football Uniforms That Carry Your Program's Identity on the Road: Contrast Colorway Jersey and Pants Made to Pair with Your Home Set. Coordinated by Our Design Team Alongside Your Primary Uniforms So Color Palette, Font Treatment, and Logo Placement Stay Connected Across the Full Rotation, with Custom Sizing Available for All Teams at No Extra Charge. Every Away Uniform is Produced factory-direct in our Sialkot, Pakistan export manufacturing facility from Pattern Cut to Final Print. Order Home and Away Together and Both Sets are Made in the Same Dye Batch, So the Colors Match. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Planning home and away looks? See the home, away and alternate sets together on our custom football jerseys page.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-professional-away-football-uniforms",
    "tierPrices": {
      "tier1": 97.98,
      "tier2": 90.98,
      "tier3": 82.98,
      "tier4": 72.98
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 97.98
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 90.98
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 82.98
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 72.98
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 105,
    "name": "Custom Football Practice Jerseys",
    "slug": "custom-football-practice-jerseys",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029851/hamlosports/products/football/custom-football-practice-jerseys.png",
    "canonical": "/custom-football-uniforms/custom-football-practice-jerseys/",
    "rating": 4.9,
    "reviews": 43,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Breathable Polyester Mesh with Quick-Dry Technology Built for Two-a-Days and Full-Pad Practice Sessions in August Heat",
      "Optional Reversible Design — Two Colors in One Jersey for Offense-vs-Defense Scrimmages Without Buying Two Sets",
      "Decorated by Sublimation Only: Team Colors, Logos, and Player Numbers Dyed into the Fabric (Tackle Twill Not Offered on Practice Mesh)",
      "Lightweight Athletic Cut Without the Bulk of a Full Game Jersey",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, No Extended-Size Upcharges",
      "Built Lighter and Priced Lower Than Game-Day Sets so Players Train Hard Without Wearing Out Primary Uniforms",
      "Optional Tear-Away Mesh Edge or Pinnie-Cut Variant for Programs that Run Position-Group Splits",
      "No minimum order quantity required, Volume Pricing on Jerseys as Low as $36.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Practice Jerseys Built for Daily Training, Scrimmages, and Conditioning Sessions. Lightweight Breathable Mesh with Quick-Dry Technology, Customized with Your Team Colors, Logos, and Player Numbers. Optional Reversible Design Available for Offense-vs-Defense Splits Without Buying Two Separate Practice Sets. Every Practice Jersey is Produced factory-direct in our Sialkot, Pakistan export manufacturing facility with the Same Attention as Our Game-Day Sets — Built Lighter and Priced Lower So Players Train Hard Without Wearing Out Primary Uniforms. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Compare our game, practice and fan jerseys and uniform sets on our custom football jerseys page.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-practice-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 106,
    "name": "Custom Football Fan Jerseys",
    "slug": "custom-football-fan-jerseys",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029850/hamlosports/products/football/custom-football-fan-jerseys.png",
    "canonical": "/custom-football-uniforms/custom-football-fan-jerseys/",
    "rating": 4.9,
    "reviews": 44,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Comfort-Fit Relaxed Cut Designed for the Bleachers — No Pads, Just a Sharp Look that Feels Great All Game",
      "Full Sublimation in Your Team's Game-Day Colors, Logos, and Design from Field to Stands",
      "Personalize with Supporter Names, Favorite Player Numbers, Booster Club Logos, or Sponsor Branding",
      "Lightweight Polyester for All-Season Comfort in the Stands — Soft, Breathable, Easy-Wash",
      "Sublimation, Embroidery, and Screen Printing Available (Tackle Twill Not Offered on Fan Jerseys — Heritage Sewn-On Numbers Stay on the Game-Day Set)",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, No Extended-Size Upcharges — So the Whole Family Can Match",
      "Perfect for Parent Groups, Booster Club Fundraisers, Senior Night Family Sets, and Alumni Reunion Orders",
      "No minimum order quantity required, Volume Pricing on Jerseys as Low as $36.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Fan Jerseys for Parents, Boosters, Alumni, and Supporters Who Want to Represent the Team on Game Night. Lightweight Comfort-Fit Replica with Sublimated Team Colors, Logos, and Graphics. Personalize with Supporter Names, Favorite Player Numbers, or Booster Club Branding. Every Fan Jersey is Produced factory-direct in our Sialkot, Pakistan export manufacturing facility with Your Team's Design and Colors, So Fans Look Like Part of the Program, Not an Afterthought. Order Fan Jerseys Together with Your Team's Game-Day Set and the Whole Order is Made in the Same Dye Batch. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Compare our game, practice and fan jerseys and uniform sets on our custom football jerseys page.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-fan-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 107,
    "name": "Custom Football Full Zip Hoodies",
    "slug": "custom-football-full-zip-hoodies",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029850/hamlosports/products/football/custom-football-full-zip-hoodies.png",
    "canonical": "/custom-football-uniforms/custom-football-full-zip-hoodies/",
    "rating": 4.9,
    "reviews": 45,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-Length Zipper with Locking Pull and Chin-Garage Tab",
      "Heavyweight Fleece Lining Traps Warmth Through Cold-Weather Games and Travel Days",
      "Two Zippered Side Pockets Keep Hands Warm During Bench Time and Travel",
      "Embroidery, Tackle Twill, and Screen Printing Available — Embroidered Team Logos, Sewn-On Tackle-Twill Numbers and Letters, Screen-Printed Program Branding",
      "Youth (YS to YXL) Through Adult (XS to 4XL) at One Price, No Extended-Size Upcharges",
      "Sideline, Travel, and Pre-Game Layer — Worn Before Pad-Up, On the Bench Between Possessions, and on the Bus to Away Games",
      "Made in Your Team's Game-Day Colors with Your Team Logos",
      "No minimum order quantity required, Volume Pricing on Hoodies as Low as $39.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Full Zip Hoodies Built for Sideline Warmth, Bench Time, Pre-Game Layering, and Team Travel Days. The Full-Length Zipper Means Players and Coaches Can Throw it On or Strip it Off Quickly Between Possessions or Before Pad-Up. Heavyweight Fleece Decorated with Embroidered Team Logos, Tackle-Twill Player Numbers, and Screen-Printed Program Branding to Match Your On-Field Identity. Every Hoodie is Produced factory-direct in our Sialkot, Pakistan export manufacturing facility. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Add it to your team's football uniform order: each set counts as one item toward your price tier, and each full zip hoodie counts as one more.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-full-zip-hoodies",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 108,
    "name": "Custom Football Pullover Hoodies",
    "slug": "custom-football-pullover-hoodies",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029851/hamlosports/products/football/custom-football-pullover-hoodies.png",
    "canonical": "/custom-football-uniforms/custom-football-pullover-hoodies/",
    "rating": 4.9,
    "reviews": 46,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Classic Pullover with Kangaroo Pocket and One Big Front Panel for a Bold Team Logo",
      "Four Decoration Methods Available: Sublimation, Tackle Twill, Embroidery, and Screen Printing — Pick the Method that Fits Each Design Element",
      "Performance Fleece Keeps Players Warm Through Cold Games and Early Morning Travel Without Heavy Jacket Bulk",
      "Adjustable Drawcord Hood Pulls Snug on Cold Sidelines and Loosens for Travel Days",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges — One Order for the Whole Program",
      "No minimum order quantity required, Volume Pricing on Hoodies as Low as $38.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Pullover Hoodies Built for Game-Day Warmth, Team Travel, and Booster Club Sales. The Over-the-Head Design with Classic Kangaroo Pocket Delivers an Unbroken Front Panel for Bold Team Logos, Mascots, and Sponsor Graphics. Performance Fleece Decorated with Sublimation, Tackle Twill, Embroidery, or Screen Printing. Every Hoodie is Produced factory-direct in our Sialkot, Pakistan export manufacturing facility with Your Team's Design and Colors. Players Wear Them Post-Game, Parents at the Booster Table, Coaches on Cold Practice Days. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Add it to your team's football uniform order: each set counts as one item toward your price tier, and each pullover hoodie counts as one more.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-pullover-hoodies",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 109,
    "name": "Custom Football Quarter Zip Pullovers",
    "slug": "custom-football-quarter-zipper-pullovers",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029851/hamlosports/products/football/custom-football-quarter-zipper-pullovers.png",
    "canonical": "/custom-football-uniforms/custom-football-quarter-zipper-pullovers/",
    "rating": 4.9,
    "reviews": 47,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Raised Collar with Quarter-Length Zipper — Adjustable Ventilation that Layers Under Sideline Jackets or Stands Alone on Cool-Weather Days",
      "Four Decoration Methods Available: Sublimation, Tackle Twill, Embroidery, and Screen Printing — Pick the Method that Fits Each Design Element",
      "Lightweight 100% Polyester with Moisture-Wicking Performance — Comfortable from Warm Pre-Season Practices to Cool Playoff Sidelines",
      "Polished Staff Silhouette Ideal for Coaches, Athletic Directors, Booster Members, and Recruiting Visits",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges — Outfit the Entire Staff in One Order",
      "No minimum order quantity required, Volume Pricing on Pullovers as Low as $34.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Quarter Zip Pullovers for Coaches, Staff, and Players Who Want a Polished Sideline Layer Without a Hoodie's Casual Look. Raised Collar and Quarter-Length Zipper Give Ventilation Control and a Clean Neckline that Reads Sharp on Camera, in the Press Box, and on the Recruiting Trail. Lightweight 100% Polyester Decorated with Sublimation, Tackle Twill, Embroidery, or Screen Printing — Your Team Colors, Logos, and Names Built In. Every Quarter Zip is Produced factory-direct in our Sialkot, Pakistan export manufacturing facility with the Same Design Files and Color-Matching as Your Game-Day Uniforms — Your Sideline Crew Matches the Players on the Field. No Minimum Order, No Hidden Logo or Artwork Fees. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Add it to your team's football uniform order: each set counts as one item toward your price tier, and each quarter zip pullover counts as one more.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-quarter-zipper-pullovers",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 110,
    "name": "Custom Football Windbreakers",
    "slug": "custom-football-windbreakers",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029853/hamlosports/products/football/custom-football-windbreakers.png",
    "canonical": "/custom-football-uniforms/custom-football-windbreakers/",
    "rating": 4.9,
    "reviews": 48,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Water-Resistant Shell with Full-Zip Front for Exposed Sidelines and Open Fields",
      "Sublimation Prints Colors, Logos, and Numbers Directly Into the Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight Packable Construction Folds Small Enough to Stash in a Helmet Bag or Duffle for Road Games and Tournaments",
      "Three Decoration Methods Available: Sublimation, Embroidery and Screen Printing. Tackle Twill Is Not Used",
      "Layers Cleanly Over Jerseys, Shoulder Pads, or Hoodies Without Adding Bulk or Restricting Arm Movement",
      "Youth (YS to YXL) Through Adult (XS to 4XL) Sizing with zero oversize upcharges, Including Custom Measurements",
      "No minimum order quantity required, Volume Pricing on Jackets as Low as $34.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Windbreakers Built for Sideline Conditions: Water-Resistant Shell, Full-Zip Front and a Packable Design that Fits Inside Any Equipment Bag. Decorated with Sublimation, Embroidery or Screen Printing. Sublimated Team Colors, Logo, Player Names, and Numbers included in the base unit rate. Every Windbreaker is Designed by Our In-House Team and Produced factory-direct in our Sialkot, Pakistan export manufacturing facility from the First Concept Sketch to the Final Stitch: Not a Plain Jacket with a Logo Added, But a Fully Custom Jacket Built from Scratch to Match Your Team's Identity. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Add it to your team's football uniform order: each set counts as one item toward your price tier, and each windbreaker counts as one more.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-windbreakers",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 111,
    "name": "Custom Football Varsity Jackets",
    "slug": "custom-football-varsity-jackets",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 109.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029852/hamlosports/products/football/custom-football-varsity-jackets.png",
    "canonical": "/custom-football-uniforms/custom-football-varsity-jackets/",
    "rating": 4.9,
    "reviews": 49,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Premium Wool Body with Genuine Leather Sleeves and Classic Snap-Button Front",
      "Custom Raised Chenille Patches for Letters, Logos, Mascots, and Championship Years — Sewn On by Hand and Included in the Price",
      "Embroidered Player Names, Jersey Numbers, Graduation Years, and Custom Details Placed Exactly Where You Want Them",
      "Quilted Satin Interior Lining for a Premium Feel that Separates a Real Varsity Jacket from a Costume-Grade Knockoff",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges, Including Custom Measurements for Hard-to-Fit Players",
      "No minimum order quantity required — Order 1 Jacket for Senior Night or 100+ for the Full Roster, Volume Pricing as Low as $94.99/Each on 101+ Pieces",
      "Wool, Leather, Chenille Patches, and Embroidery Available — zero hidden setup costs, No Hidden Costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Varsity Letterman Jackets Your Players Keep Long After the Final Whistle. Premium Wool Body, Genuine Leather Sleeves, Raised Chenille Letter Patches, Quilted Satin Lining, Snap-Button Front — All in Your Team's Exact Colors. Every Jacket Made to Order with Your School Logo, Player Name, Graduation Year, and Custom Embroidery. Every Varsity Jacket is Produced factory-direct in our Sialkot, Pakistan export manufacturing facility from First Patch Layout to Final Snap Button — Not a Blank Jacket with a Logo Ironed On, But a Fully Custom Letterman Built from Scratch for Your Football Program's Identity and Legacy. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Add it to your team's football uniform order: each set counts as one item toward your price tier, and each varsity jacket counts as one more.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-varsity-jackets",
    "tierPrices": {
      "tier1": 109.99,
      "tier2": 104.99,
      "tier3": 99.99,
      "tier4": 94.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 109.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 104.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 99.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 94.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 112,
    "name": "Custom Football Sweatpants",
    "slug": "custom-football-sweatpants",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029852/hamlosports/products/football/custom-football-sweatpants.png",
    "canonical": "/custom-football-uniforms/custom-football-sweatpants/",
    "rating": 4.9,
    "reviews": 50,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Soft Brushed Fleece Interior That Keeps Players Warm on Cold Bus Rides and Comfortable During Long Film Sessions",
      "Four Decoration Methods Available: Sublimation, Tackle Twill, Embroidery, and Screen Printing — Pick the Method that Fits Each Design Element",
      "Tapered Jogger or Straight Leg Cut Options — Your Program Picks the Style that Matches Team Identity",
      "Elastic Waistband with Internal Drawstring for an Adjustable Fit",
      "Deep Side Pockets Hold Phones, Wallets, and Keys",
      "Youth (YS to YXL) Through Adult (XS to 4XL) Sizing with zero oversize upcharges, Including Custom Measurements",
      "Coordinates with Our Custom Hoodies, Quarter Zips, and Windbreakers for a Full Sweatsuit Sideline Look",
      "No minimum order quantity required, Volume Pricing on Pairs as Low as $34.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Sweatpants Built for Sideline Warmth, Travel Days, and Cold-Weather Practice. Performance Fleece with a Soft Brushed Interior, Elastic Drawstring Waistband, and Deep Side Pockets. Tapered Jogger or Straight Leg Cut. Decorated with Sublimation, Tackle Twill, Embroidery, or Screen Printing: Your Team Colors, Logo, Player Names, and Program Branding; Tackle Twill is $5 per Name and $5 per Number. Every Football Sweatpants Pair is Designed by Our In-House Team and Produced factory-direct in our Sialkot, Pakistan export manufacturing facility: Not a Plain Sweat with a Heat-Pressed Logo, But Your Design Built into the Garment from the First Stitch. Coordinates with Our Custom Hoodies, Quarter Zips, and Windbreakers for a Full Sweatsuit Look. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Outfitting the whole program? Our football uniforms page shows the game, practice and sideline pieces in one place.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-sweatpants",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 113,
    "name": "Custom Football Short Sleeve T-shirts",
    "slug": "custom-football-short-sleeve-t-shirts",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 32.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029851/hamlosports/products/football/custom-football-short-sleeve-t-shirts.png",
    "canonical": "/custom-football-uniforms/custom-football-short-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 51,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Moisture-Wicking Performance Polyester with Quick-Dry Technology for Summer Camps and Weight Room Sessions",
      "Sublimation Prints Colors, Logos, and Numbers Directly into the Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Breathable Athletic Fit Moves with the Body During Drills, Conditioning, and Dynamic Warmups",
      "Lightweight Construction that Won't Cling During High-Intensity Outdoor Training",
      "Three Decoration Methods Available: Sublimation, Embroidery, and Screen Printing. Tackle Twill Is Not Offered on Practice T-Shirts",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with No Upcharge — Covers Players, Coaches, Parents, and Fan Gear in One Order",
      "Multi-Purpose Bulk Orders: Coaching Staff Wear, Summer Camps, Booster Fundraisers, Spirit Wear, and Parent-Group Gear",
      "No minimum order quantity required, Volume Pricing on Shirts as Low as $24.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Short Sleeve T-Shirts Built for Daily Training, Summer Camps, Spirit Wear, and Booster Fundraisers. Lightweight Moisture-Wicking Polyester with a Breathable Athletic Fit. Decorated with Sublimation, Embroidery, or Screen Printing — Your Team Colors, Logo, Player Names, and Program Branding. Every T-Shirt is Made to Order factory-direct in our Sialkot, Pakistan export manufacturing facility — Not a Blank Tee with a Screen-Printed Logo, But Your Design Built into the Garment from the First Stitch. Order for Players, Coaches, Parents, Booster Clubs, or Camp Fundraisers. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Outfitting the whole program? Our football uniforms page shows the game, practice and sideline pieces in one place.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-short-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 32.99,
      "tier2": 29.99,
      "tier3": 26.99,
      "tier4": 24.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 32.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 26.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 24.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 114,
    "name": "Custom Football Long Sleeve T-shirts",
    "slug": "custom-football-long-sleeve-t-shirts",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029851/hamlosports/products/football/custom-football-long-sleeve-t-shirts.png",
    "canonical": "/custom-football-uniforms/custom-football-long-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 52,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Long Sleeves Cover the Arms During Outdoor Summer Training and Turf Field Sessions",
      "Breathable Mesh Ventilation Panels Along the Torso, with Full-Arm Coverage",
      "Three Decoration Methods Available: Sublimation, Embroidery, and Screen Printing. Tackle Twill Is Not Offered on Practice T-Shirts",
      "Quick-Dry Moisture-Wicking Polyester for Morning Dew, Midday Heat, and Late-Night Friday Games",
      "Athletic Performance Fit with Reinforced Shoulder Seams — Worn Standalone on the Sideline or as a Cold-Weather Training Top",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Shirts as Low as $26.99/Each on 101+ Pieces",
      "Coordinates with the Full HAMLO SPORTS Football Catalog: Same Design, Colors, and Branding Across Practice, Sideline, and Game-Day Gear"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Long Sleeve T-Shirts Built for Training Sessions, Pregame Warmups, and Cold-Weather Sideline Coverage. Every Shirt Features Breathable Mesh Ventilation Panels and Quick-Dry Polyester that Keeps Players Comfortable from Early Fall Camp Through Late-Season Friday Nights. Decorated with Sublimation, Embroidery, or Screen Printing. Sublimated Team Colors, Logo, Player Names, and Numbers included in the base unit rate. Every Football Shirt is Designed by Our In-House Team and Made factory-direct in our Sialkot, Pakistan export manufacturing facility, from the First Sketch to the Final Stitch: Your Design Brought to Life Exactly How You Imagined It. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Outfitting the whole program? Our football uniforms page shows the game, practice and sideline pieces in one place.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-long-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 115,
    "name": "Custom Football Compression Shirts",
    "slug": "custom-football-compression-shirts",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 38.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029850/hamlosports/products/football/custom-football-compression-shirts.png",
    "canonical": "/custom-football-uniforms/custom-football-compression-shirts/",
    "rating": 4.9,
    "reviews": 53,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Sleeveless, Short-Sleeve, and Long-Sleeve Cuts for Under-Pad Comfort or 7v7 Game-Day Wear",
      "Sublimation Prints Colors, Logos, and Numbers Directly into the Stretch Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "4-Way Stretch Poly-Spandex Knit Fits Snug Under Shoulder Pads",
      "Moisture-Wicking Fabric Pulls Sweat Away to Keep Players Dry from Warm-Ups Through the Fourth Quarter",
      "Two Decoration Methods Available: Sublimation for Full-Color Designs and Screen Printing for Printed Logos. Tackle Twill and Embroidery Are Not Used",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Shirts as Low as $29.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Compression Shirts Designed as a Base Layer Under Shoulder Pads or as Standalone Jerseys for 7v7 and Flag Football. Form-Fitting Poly-Spandex 4-Way Stretch Knit Decorated with Sublimation or Screen Printing — Your Team Colors, Logos, and Numbers Printed Directly into the Fabric. Available in.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-compression-shirts",
    "tierPrices": {
      "tier1": 38.99,
      "tier2": 34.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 38.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 116,
    "name": "Custom Football Training Shorts",
    "slug": "custom-football-training-shorts",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029852/hamlosports/products/football/custom-football-training-shorts.png",
    "canonical": "/custom-football-uniforms/custom-football-training-shorts/",
    "rating": 4.9,
    "reviews": 54,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Lightweight Elastic Waistband with Side Pockets — Built for Conditioning Drills, Agility Work, and Weight Room Sessions",
      "Sublimation Prints Colors, Logos, and Numbers Directly Into the Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Moisture-Wicking Quick-Dry Polyester for Summer Camps, Pre-Season, and Indoor Training",
      "Three Decoration Methods Available: Sublimation, Embroidery, and Screen Printing. Tackle Twill Is Not Offered on Practice or Training Gear",
      "Reorders Welcome When New Players Join Mid-Season",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Pairs as Low as $26.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Training Shorts Built for Conditioning Sessions, Speed Work, Weight Room Days, and Off-Pad Drills. Lightweight Moisture-Wicking Polyester with an Elastic Waistband and Side Pockets. Decorated with Sublimation, Embroidery, or Screen Printing, with Your Team Colors, Logos, and Player Numbers on Every Pair. Every Football Training Shorts Pair is Produced factory-direct in our Sialkot, Pakistan export manufacturing facility Using the Same Design Files and Color-Matching Process as Your Game-Day Uniforms — Your Team Looks Cohesive from Full-Pad Practice to Summer Conditioning Camp. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Outfitting the whole program? Our football uniforms page shows the game, practice and sideline pieces in one place.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-training-shorts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 117,
    "name": "Custom Football Compression Shorts",
    "slug": "custom-football-compression-shorts",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029850/hamlosports/products/football/custom-football-compression-shorts.png",
    "canonical": "/custom-football-uniforms/custom-football-compression-shorts/",
    "rating": 4.9,
    "reviews": 55,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Compression-Fit Poly-Spandex 4-Way Stretch Knit Moves Unrestricted Through Sprints and Cuts",
      "Sublimation Prints Colors, Logos, and Numbers Directly into the Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Dual-Purpose Design Works as a Base Layer Under Game Pants or as Standalone Shorts for 7v7 and Training",
      "Two Decoration Methods Available: Sublimation for Full-Color Designs and Screen Printing for Printed Logos. Tackle Twill and Embroidery Are Not Used",
      "Youth (YS to YXL) Through Adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required, Volume Pricing on Pairs as Low as $34.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Compression Shorts Designed as a Base Layer Under Game Pants or as Standalone Shorts for 7v7 and Flag Football. Form-Fitting Poly-Spandex 4-Way Stretch Knit Decorated with Sublimation or Screen Printing: Your Team Colors, Logos, and Numbers Printed Directly into the Fabric. Every Football Compression Shorts Pair is Produced factory-direct in our Sialkot, Pakistan export manufacturing facility with the Same Design Files and Color-Matching Process as Your Game-Day Uniforms — Your Program Wears a Unified Look from Base Layer to Outer Shell. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Order it in your team colors with your custom football uniforms.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-compression-shorts",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 36.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 36.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 118,
    "name": "Custom Football Duffle Bags",
    "slug": "custom-football-duffle-bags",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 89.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029850/hamlosports/products/football/custom-football-duffle-bags.png",
    "canonical": "/custom-football-uniforms/custom-football-duffle-bags/",
    "rating": 4.9,
    "reviews": 56,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Large-Capacity Heavy-Duty 600D Polyester Build with Reinforced Bottom for Daily Hauling",
      "Spacious Main Compartment Fits Helmets, Shoulder Pads, Cleats, and a Full Change of Clothes",
      "Separate Cleat Compartment Keeps Dirty Cleats Isolated from Clean, Game-Ready Apparel",
      "Four Decoration Methods Available: Sublimation, Tackle Twill, Embroidery, and Screen Printing — Pick the Method that Fits Each Design Element",
      "Padded Adjustable Shoulder Strap with Reinforced Attachments Distributes Weight for Comfortable Carrying",
      "Zippers with Branded Pulls",
      "No minimum order quantity required, Volume Pricing on Bags as Low as $74.99/Each on 101+ Pieces",
      "Coordinates with the Full HAMLO SPORTS Football Catalog: Same Design, Colors, and Branding Across All Gear"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Duffle Bags That Carry the Full Load: Helmets, Shoulder Pads, Cleats, Gloves, and Every Layer from Bus Ride to Final Whistle. Large-Capacity Heavy-Duty Polyester Construction with Reinforced Bottom, Separate Cleat Compartment, Padded Shoulder Strap, and Branded Zipper Pulls. Decorated with Sublimation, Tackle Twill, Embroidery, or Screen Printing. Your Colors, Logo, Player Names, Numbers, and Program Branding Built In. Every Duffle Bag is Designed by Our In-House Team and Built factory-direct in our Sialkot, Pakistan export manufacturing facility to Coordinate with Our Custom Football Hoodies, Windbreakers, Sweatpants, and T-Shirts, So Travel, Sideline and Practice Gear All Match. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Need the uniforms too? See the jerseys and uniform sets on our custom football uniforms page.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-duffle-bags",
    "tierPrices": {
      "tier1": 89.99,
      "tier2": 84.99,
      "tier3": 79.99,
      "tier4": 74.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 89.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 84.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 79.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 74.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 119,
    "name": "Custom Football Gloves",
    "slug": "custom-football-gloves",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 29.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029851/hamlosports/products/football/custom-football-gloves.png",
    "canonical": "/custom-football-uniforms/custom-football-gloves/",
    "rating": 4.9,
    "reviews": 57,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "High-Tack Silicone Grip Palm for Ball Control",
      "Sublimated Polyester Backhand — Unlimited Color Graphics Fused into the Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Two Decoration Methods Available on the Backhand: Sublimation for Full-Color Designs and Screen Printing for Printed Logos. Tackle Twill and Embroidery Are Not Used on Gloves",
      "Lightweight Breathable Construction with Flexible Knuckle Gussets — Full Finger Movement Without Bulk",
      "Adjustable Hook-and-Loop Wrist Strap",
      "Youth (YS to YL) Through Adult (S to XXL) Sizing with zero oversize upcharges — Every Receiver, Back, and Linebacker on the Roster Equipped",
      "No minimum order quantity required, Volume Pricing on Pairs as Low as $19.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Gloves with High-Tack Silicone Grip Palms for Ball Control, Sublimated Polyester Backhand with Your Full Team Design, and Adjustable Hook-and-Loop Wrist Closure. Every Pair Produced with Your Sublimated Team Colors, Logo, Names, and Numbers in the Per-Piece Price. Every Custom Football Gloves Pair is Designed by Our In-House Team and Built factory-direct in our Sialkot, Pakistan export manufacturing facility: Sublimated Polyester Backhand with Unlimited Graphics Fused into the Fabric, Paired with a Silicone Performance Palm. Not Generic Gloves with a Logo Stamped On, Built from Scratch to Match Your Program's Identity. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Order it in your team colors with your custom football uniforms.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-gloves",
    "tierPrices": {
      "tier1": 29.99,
      "tier2": 26.99,
      "tier3": 22.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 29.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 26.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 22.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 120,
    "name": "Custom Football Skull Caps",
    "slug": "custom-football-skull-caps",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 24.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029852/hamlosports/products/football/custom-football-skull-caps.png",
    "canonical": "/custom-football-uniforms/custom-football-skull-caps/",
    "rating": 4.9,
    "reviews": 58,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Moisture-Wicking Poly-Spandex Compression Knit Pulls Sweat Away from the Scalp and Keeps Eyes Clear Through Every Rep",
      "Lightweight Low-Profile Construction for Wear Under Helmets",
      "Sublimation Prints Colors, Logos, and Player Names Directly Into the Fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Two Decoration Methods Available: Sublimation for Full-Color Designs and Screen Printing for Printed Logos. Tackle Twill and Embroidery Are Not Used",
      "Washable Layer Between Each Player's Head and Shared Helmet Padding",
      "Matching Skull Caps Show Your Team Colors on the Sideline When Helmets Come Off",
      "Youth (YS to YL) Through Adult (S to XL) Sizing",
      "No minimum order quantity required, Volume Pricing on Caps as Low as $16.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Skull Caps that Wick Sweat, Lock in Warmth, and Keep Your Team Looking Unified from Helmet to Sideline.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-skull-caps",
    "tierPrices": {
      "tier1": 24.99,
      "tier2": 22.99,
      "tier3": 19.99,
      "tier4": 16.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 24.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 22.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 19.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 16.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 121,
    "name": "Custom Football Cape",
    "slug": "custom-football-cape",
    "categorySlug": "custom-football-uniforms",
    "category": "FOOTBALL",
    "sport": "Football",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029849/hamlosports/products/football/custom-football-cape.png",
    "canonical": "/custom-football-uniforms/custom-football-cape/",
    "rating": 4.9,
    "reviews": 59,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Knee-Length Cut from Shoulders to Knees",
      "Four Decoration Methods Available: Sublimation, Tackle Twill, Embroidery, and Screen Printing — Pick the Method that Fits Each Design Element",
      "No minimum order quantity required, Volume Pricing on Capes as Low as $39.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Football Capes Built for the Sideline, with a Knee-Length Cut. Decorated with Sublimation, Tackle Twill, Embroidery, or Screen Printing — Your Colors, Logo, and Program Name Built in. Every Football Cape is Designed by Our In-House Team and Produced factory-direct in our Sialkot, Pakistan export manufacturing facility from First Mockup to Final Stitch. No Minimum Order. Free Professional Design Mockup within 12 Hours. Fast US Nationwide Delivery (Duties Pre-Cleared). Add it to your team's football uniform order: each set counts as one item toward your price tier, and each cape counts as one more.",
    "cloudinaryPublicId": "hamlosports/products/football/custom-football-cape",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 41.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 122,
    "name": "Custom Ice Hockey Socks",
    "slug": "custom-ice-hockey-socks",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 22.99,
    "fabric": "160 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029856/hamlosports/products/ice-hockey/custom-ice-hockey-socks.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-socks/",
    "rating": 4.9,
    "reviews": 60,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "160 GSM polyester mesh, the same type of mesh as our hockey jerseys in a lighter sock weight, so socks and jerseys come out of sublimation in the same shade",
      "Fully dye-sublimated, so any customization is possible: stripes, team colors, logos, player names and numbers are dyed into the mesh, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Open tube with no foot: players wear their own skate socks underneath and pull the hockey sock on over the shin guards, held up with a garter or sock tape",
      "Long and short lengths at the same price, and you can mix both lengths in one order",
      "Sized by shin guard, not jersey size: Youth 20\", Junior 24\", Intermediate 27\", Senior 30\" and Senior XL 32\" (see the size guide below)",
      "Socks and jerseys on one quote count together toward your price tier, so adding socks can lower the price of both",
      "No minimum order quantity required; from $22.99 a pair at 1 to 24 down to $14.99 a pair at 101+, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "fees.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-socks",
    "tierPrices": {
      "tier1": 22.99,
      "tier2": 19.99,
      "tier3": 18.99,
      "tier4": 14.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 22.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 19.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 18.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 14.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 123,
    "name": "Custom Ice Hockey Game Day Home Jerseys",
    "slug": "custom-ice-hockey-game-day-home-jersey",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029854/hamlosports/products/ice-hockey/custom-ice-hockey-game-day-home-jersey.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-game-day-home-jersey/",
    "rating": 4.9,
    "reviews": 61,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "180 GSM polyester mesh body with moisture-wicking finish keeps players dry from first shift to overtime through hot rinks, away tournaments, and back-to-back weekend ice times",
      "Four professional embellishment options — sublimation builds the team colorway and side panels, tackle twill anchors the back nameplate and player number, embroidery delivers the chest crest, and screen printing handles optional sponsor patches",
      "Single-layer mesh from collar to hem, shoulders and elbows included — no heavy overlay panels, so the jersey stays light through every shift",
      "Pad-compatible athletic cut fits over shoulder pads, elbow pads, and rib pads without restricting the shot, stride, check, or save motion",
      "Fight strap sewn into the back hem on request (check your league rules), built to stay secured through scrums and engagements",
      "Youth through adult sizing with goalie cut available — same body construction across the roster from youngest mites to varsity captains and league-rec adult skaters",
      "Sold as the home jersey only — no socks, no pants — perfect for midseason replacements, alternate captains, or pairing against an existing matching home colorway",
      "No minimum order quantity required; volume pricing on jerseys as low as $39.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design custom ice hockey game day home jerseys built on single-layer 180 GSM polyester mesh with a fight strap sewn into the back hem on request and a pad-compatible athletic cut that fits over shoulder pads, elbow pads, and rib protection without restricting the shot, stride, or check. Sublimated team colorway and side panels, tackle twill back nameplate and player number, embroidered chest crest, and optional screen-printed sponsor patches available; tackle twill is $5 per name and $5 per number, and other methods are priced on your quote — no setup fees. HAMLO SPORTS builds each home jersey direct from our specialized Sialkot, Pakistan manufacturing facility to the same game-ready standard as the full uniform package, with the same single-layer 180 GSM polyester mesh body and pad-compatible cut, with a fight strap on request. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). For the away jersey and the rest of the set, see our custom ice hockey jerseys. Pull our compression base layer on under the hockey pads before the jersey goes on.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-game-day-home-jersey",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 124,
    "name": "Custom Ice Hockey Game Day Away Jerseys",
    "slug": "custom-ice-hockey-game-day-away-jerseys",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029854/hamlosports/products/ice-hockey/custom-ice-hockey-game-day-away-jerseys.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-game-day-away-jerseys/",
    "rating": 4.9,
    "reviews": 62,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "180 GSM polyester mesh body with moisture-wicking finish in your team away colorway — keeps players dry from opening faceoff through bus rides to the bench in cold visitor locker rooms",
      "Four professional embellishment options — sublimation builds the contrasting away colorway and side panels, tackle twill anchors the back nameplate and player number, embroidery delivers the chest crest, and screen printing handles optional sponsor patches",
      "One layer of mesh throughout, shoulders and elbows included, so the jersey packs light in the road bag and stays breathable from warm-up to the final buzzer",
      "Pad-compatible athletic cut fits over shoulder pads, elbow pads, and rib pads while clearing the shot motion, stride, and stick handling without binding",
      "Fight strap sewn into the back hem on request (check your league rules), built to stay secured through scrums, board engagements, and faceoff battles in opposing barns",
      "Youth through adult sizing with goalie cut available — same body construction across the roster",
      "Sold as the away jersey only, with no socks or pants: for replacing road jerseys or adding tournament call-ups",
      "No minimum order quantity required; volume pricing on jerseys as low as $39.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design custom ice hockey game day away jerseys built on single-layer 180 GSM polyester mesh with a fight strap sewn into the back hem on request and a pad-compatible athletic cut over shoulder pads, elbow pads, and rib protection. Sublimated contrasting away colorway and side panels, tackle twill back nameplate and player number, embroidered chest crest, and optional screen-printed sponsor patches available; tackle twill is $5 per name and $5 per number, and other methods are priced on your quote — built so the visiting bench reads instantly from across the bowl. HAMLO SPORTS builds the away jersey direct from our specialized Sialkot, Pakistan manufacturing facility from the same single-layer 180 GSM polyester mesh body and pad-compatible cut as the home jersey, with a fight strap on request. Same build, in your contrasting away colorway. When ordered together with the home set, the home and away runs are produced from the same dye batch so the colors match across both jerseys, and the away crest placement, back numbering, and sleeve striping all coordinate with the home look. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Choose the home version and every other style from our custom ice hockey jerseys.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-game-day-away-jerseys",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 125,
    "name": "Custom Ice Hockey Practice Jerseys",
    "slug": "custom-ice-hockey-practice-jerseys",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029855/hamlosports/products/ice-hockey/custom-ice-hockey-practice-jerseys.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-practice-jerseys/",
    "rating": 4.9,
    "reviews": 38,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Single-layer polyester mesh for high-rep drills, conditioning skates, and 3 to 5 practices a week",
      "Decorated by sublimation only: sublimation builds the team colors, any color blocking, and player numbers; tackle twill is reserved for our game-day jerseys",
      "Quick-dry moisture-wicking polyester finish built for daily practice and washing",
      "Youth (YS-YXL) through adult (XS-4XL) sizing with goalie cut available at no upcharge — wider chest and arms to accommodate goalie pads even during practice",
      "Built for practice, not league games; for games, see our Custom Ice Hockey Game Day Home and Away Jerseys",
      "NOT reversible — single design on one side; for shirts-vs-skins scrimmage rotation, see our Custom Ice Hockey Reversible Jerseys with two complete designs on one jersey",
      "No minimum order quantity required; volume pricing on jerseys as low as $39.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey practice jerseys built for daily training rotation on a lightweight single-layer polyester mesh body with quick-dry moisture wicking. Made for high-rep drills, conditioning skates, and 3 to 5 practices a week. Sublimated team logo, colors, and player numbers are included in the standard jersey pricing. HAMLO SPORTS produces the practice jersey direct from our specialized Sialkot, Pakistan manufacturing facility as a daily-rotation training jersey, at the same per-jersey price tier as our Custom Ice Hockey Game Day Home and Away Jerseys. For shirts-vs-skins scrimmage rotation, see our reversible hockey jerseys instead (single jersey with two complete designs). Need game socks to go with them? Add our custom hockey socks to the same quote. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Practice jerseys pair with the game day styles in our custom hockey jerseys. Carry practice jerseys to the rink in our custom hockey bags.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-practice-jerseys",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 126,
    "name": "Custom Ice Hockey Reversible Jerseys",
    "slug": "custom-ice-hockey-reversible-jerseys",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 89.99,
    "fabric": "160 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029856/hamlosports/products/ice-hockey/custom-ice-hockey-reversible-jerseys.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-reversible-jerseys/",
    "rating": 4.9,
    "reviews": 39,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Two complete sublimated designs on one jersey: flip it inside-out to split teams for shirts-vs-skins scrimmages, drill rotations, and rec-league practice",
      "Direct-to-fabric sublimation on both faces dye-fuses the color into the polyester knit, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Moisture-wicking polyester, ~160 GSM per layer, keeps players dry regardless of which side is worn, with the same breathable feel",
      "Numbers, team logos, and player names included on both sides at the per-jersey price; same number can repeat on both faces, or each face can carry a different number",
      "Youth (YS-YXL) through adult (XS-4XL) sizing with goalie cut available at no upcharge — same body construction across the roster",
      "Sublimation on both faces, no sewn-on decoration",
      "No minimum order quantity required; volume pricing on jerseys as low as $79.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey reversible jerseys with two complete sublimated designs on one jersey. Flip it inside-out to switch colors during scrimmages, shirts-vs-skins drills, practice rotations, and rec league play. The two ~160 GSM polyester layers take full-panel sublimation, one design per layer, so each side is its own complete team look (team-color base with sleeve stripes, numbers, and crest dyed into the fabric), and there is no print layer to crack or peel. HAMLO SPORTS builds each reversible jersey from two ~160 GSM polyester layers sewn together, with separate full-panel sublimation on each face. Two complete designs on one jersey; perfect for coaches running shirts-vs-skins scrimmages or rec-league rotations where players swap sides mid-session. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Compare this reversible jersey with the other styles in our custom hockey jerseys. Next to the reversibles, our hockey shells give the bench another option.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-reversible-jerseys",
    "tierPrices": {
      "tier1": 89.99,
      "tier2": 84.99,
      "tier3": 82.99,
      "tier4": 79.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 89.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 84.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 82.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 79.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 127,
    "name": "Custom Ice Hockey Two-tone Jerseys",
    "slug": "custom-ice-hockey-two-tone-jerseys",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029857/hamlosports/products/ice-hockey/custom-ice-hockey-two-tone-jerseys.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-two-tone-jerseys/",
    "rating": 4.9,
    "reviews": 40,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Two-tone color-block design with distinct body and sleeve zones — a modern alternative to single-color jerseys, with placements including contrasting yokes, sleeve-vs-body splits, vertical front splits, and chest-band splits",
      "Four professional embellishment options — sublimation builds the two-tone color blocking and side panels, tackle twill anchors the back nameplate and player number, embroidery delivers the chest crest, and screen printing handles optional sponsor patches",
      "Single-layer polyester mesh body with a moisture-wicking finish — a real game jersey for competitive play, not just for looks",
      "Pad-compatible athletic cut fits over shoulder pads, elbow pads, and rib protection without restricting shooting, skating, or stick handling",
      "Fight strap sewn into the back hem on request (check your league rules), built to stay secured through scrums and engagements",
      "Color blocking is built into the sublimation file (not stitched on as separate fabric panels)",
      "Youth (YS-YXL) through adult (XS-4XL) sizing with goalie cut available at no upcharge — same two-tone design scales across the roster from mites to varsity captains",
      "No minimum order quantity required; volume pricing on jerseys as low as $39.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "third/alternate jersey alongside an existing home + away set. Color blocking is built into the sublimation file, not stitched on as panels. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Before you settle on two-tone, look at our custom sublimated hockey jerseys as well. Order our custom hockey shells on the same quote as the two-tone jerseys.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-two-tone-jerseys",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 128,
    "name": "Custom Ice Hockey Home Uniforms",
    "slug": "custom-ice-hockey-home-uniforms",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 70.99,
    "fabric": "180 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029854/hamlosports/products/ice-hockey/custom-ice-hockey-home-uniforms.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-home-uniforms/",
    "rating": 4.9,
    "reviews": 41,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Complete jersey + matching socks package — coordinated design and colors for a unified look from helmet to skate boots, ordered as one set at the per-set price",
      "Jersey decoration uses four methods — sublimation builds the home colorway and side panels, tackle twill anchors the back nameplate and player number, embroidery delivers the chest crest, and screen printing handles optional sponsor patches",
      "Sock decoration uses two methods — full sublimation matches the jersey team striping and color-blocking on 160 GSM polyester mesh, with optional screen-printed sponsor or league marks",
      "180 GSM polyester mesh jersey body in a single layer from collar to hem, light and breathable over shoulder pads from warm-up to the final buzzer",
      "Pad-compatible athletic jersey cut layers over shoulder pads, elbow pads, and rib protection without restricting shooting, skating, or stick handling — and fight strap sewn into the back hem on request",
      "Open-tube hockey socks in 160 GSM polyester mesh, no foot, with the same sublimated team design as the jersey — no generic solid-color commodity socks clashing with the team identity",
      "Youth through adult sizing with goalie cut jersey available — wider chest and arms to accommodate goalie pads, same sock design for the netminder",
      "No minimum order quantity required; volume pricing on uniform sets as low as $52.99/each on 101+ sets, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey home uniforms as a complete jersey + matching socks package — one order, one price, one coordinated colorway. The jersey is built on single-layer 180 GSM polyester mesh with a fight strap sewn into the back hem on request and a pad-compatible athletic cut over shoulder pads, elbow pads, and rib protection. The matching socks are 160 GSM polyester mesh, an open tube with no foot, sublimated with the same team striping and color-blocking as the jersey, so the visible game-day uniform reads as one head-to-skate identity rather than a jersey paired with mismatched commodity hosiery. HAMLO SPORTS produces the jersey + sock set direct from our specialized Sialkot, Pakistan manufacturing facility, all in the same dye batch, so the jersey trim, sock stripes and team-color base match on the ice. Hockey pants and breezer shells stay neutral team colors and aren't included in the set (we sell those separately as the hockey shell); the home uniform set is the player-visible identity. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Your away set and practice styles are with the rest of our custom hockey jerseys.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-home-uniforms",
    "tierPrices": {
      "tier1": 70.99,
      "tier2": 62.99,
      "tier3": 59.99,
      "tier4": 52.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 70.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 62.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 59.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 52.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 129,
    "name": "Custom Ice Hockey Away Uniforms",
    "slug": "custom-ice-hockey-away-uniforms",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 70.99,
    "fabric": "180 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029853/hamlosports/products/ice-hockey/custom-ice-hockey-away-uniforms.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-away-uniforms/",
    "rating": 4.9,
    "reviews": 42,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Complete away jersey + matching socks package — coordinated contrasting design that complements the home set, ordered as one set at the per-set price",
      "Jersey decoration uses four methods — sublimation builds the away colorway and side panels, tackle twill anchors the back nameplate and player number, embroidery delivers the chest crest, and screen printing handles optional sponsor patches",
      "Sock decoration uses two methods — full sublimation matches the jersey team striping and away colorway on 160 GSM polyester mesh, with optional screen-printed sponsor or league marks",
      "180 GSM polyester mesh jersey body, one layer throughout, that packs light for weeks of bus travel and road tournaments",
      "Pad-compatible athletic jersey cut layers over shoulder pads, elbow pads, and rib protection without restricting shooting, skating, or stick handling — and fight strap sewn into the back hem on request",
      "Open-tube hockey socks in 160 GSM polyester mesh, no foot, with the same sublimated team design as the jersey, pulled on over the shin guards and held up with a garter or sock tape",
      "Youth through adult sizing with goalie cut jersey available — wider chest and arms to accommodate goalie pads, same sock design for the netminder so the away identity is consistent across the roster",
      "No minimum order quantity required; volume pricing on uniform sets as low as $52.99/each on 101+ sets, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey away uniforms as a complete jersey + matching socks package built to represent your program on any sheet of ice in a contrasting away colorway. The jersey is built on single-layer 180 GSM polyester mesh with a fight strap sewn into the back hem on request and a pad-compatible athletic cut over shoulder pads, elbow pads, and rib protection. The matching socks are 160 GSM polyester mesh, an open tube with no foot, sublimated in the same away team striping and color-blocking as the jersey, so the visiting bench reads as one head-to-skate identity from across the bowl. HAMLO SPORTS produces the away jersey + sock set direct from our specialized Sialkot, Pakistan manufacturing facility and, when both sets are ordered together, in the same dye batch as the home set: same crest, same identity, contrasting team-color base. Hockey pants and breezer shells stay neutral team colors and aren't included (we sell those separately as the hockey shell); the away set is the player-visible road identity. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). To plan home and away together, start with our custom hockey jerseys.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-away-uniforms",
    "tierPrices": {
      "tier1": 70.99,
      "tier2": 62.99,
      "tier3": 59.99,
      "tier4": 52.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 70.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 62.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 59.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 52.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 130,
    "name": "Custom Ice Hockey Shells",
    "slug": "custom-ice-hockey-shells",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029856/hamlosports/products/ice-hockey/custom-ice-hockey-shells.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-shells/",
    "rating": 4.9,
    "reviews": 43,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Lightweight open-mesh polyester worn over shoulder pads for drills and conditioning",
      "Two decoration methods available: sublimation dye-fuses team colors and logo into the mesh; screen printing handles large identification numbers. Tackle twill and embroidery are not used",
      "Oversized fit pulls on and off over full shoulder pads between drills",
      "Sublimated team logo, colors, and large player numbers included in the per-piece price",
      "Youth (YS to YXL) through adult (XS to 4XL) with goalie cut available at no upcharge",
      "Order multiple shell colors for split-team scrimmages and station drills",
      "No minimum order quantity required; volume pricing on shells as low as $36.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey shells: lightweight open-mesh practice pinnies that pull on over shoulder pads. Each shell is tailored to order with your sublimated team colors, logo, and large player numbers included. Use them to sort lines, split groups, and identify teams during drills and scrimmages. HAMLO SPORTS designs each shell with our in-house team and produces it factory-direct in our Sialkot, Pakistan export manufacturing facility. It is decorated by sublimation and screen printing only. No add-on charges: your team color, logo, and numbers are sublimated into the mesh at the per-shell price. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). See the full lineup of our custom hockey jerseys on the hockey page.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-shells",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 131,
    "name": "Custom Ice Hockey Track Jackets",
    "slug": "custom-ice-hockey-track-jackets",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029856/hamlosports/products/ice-hockey/custom-ice-hockey-track-jackets.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-track-jackets/",
    "rating": 4.9,
    "reviews": 44,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-zip front with a structured athletic fit — the same smooth warm-up silhouette worn by travel clubs and varsity programs at every level",
      "Four professional embellishment options — sublimation dye-fuses the team colorway into the poly tricot, embroidery for a chest and back crest, tackle twill for a sewn-on team name, and screen printing for player names and staff titles",
      "Lightweight polyester tricot with a breathable mesh lining that stays comfortable from parking lot to bench to post-game, layers over gear without bulk",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges — coaches and players in one order",
      "Coordinates with the full HAMLO SPORTS ice hockey sideline line: pair with the team track pants for a complete tracksuit, or with the fleece hoodies and joggers",
      "No minimum order quantity required; volume pricing on jackets as low as $36.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey track jackets on a lightweight polyester tricot shell with a breathable mesh lining and a full-zip front: the smooth warm-up silhouette for rink warm-ups, team travel, and arena arrivals, layering over gear without adding bulk. Each jacket is tailored to order with your sublimated team colors, crest, player names, and coach details included in the base unit rate. The smooth poly tricot takes full sublimation, so the jacket carries the same dye-fused team colorway as the jersey and hoodies, logo and all. Pair it with the team track pants for a complete tracksuit in one coordinated colorway. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Track jackets cover the trip to the rink, and the game look starts with our custom hockey team jerseys.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-track-jackets",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 132,
    "name": "Custom Ice Hockey Pullover Hoodies",
    "slug": "custom-ice-hockey-pullover-hoodies",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029855/hamlosports/products/ice-hockey/custom-ice-hockey-pullover-hoodies.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-pullover-hoodies/",
    "rating": 4.9,
    "reviews": 45,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Classic pullover silhouette with kangaroo pocket and adjustable drawstring hood — the hockey hoodie every rink recognizes",
      "Soft brushed fleece interior stays warm through cold rink lobbies and early-morning tournament rinks",
      "Four decoration methods available: sublimation dye-fuses the team colorway into the fleece, embroidery for a dimensional crest, tackle twill for a sewn-on team name, and screen printing for player names and sponsor marks",
      "Unbroken front panel gives your team crest a clean centered canvas with no zipper splitting the design",
      "Youth (YS to YXL) through adult (XS to 4XL) so players, coaches, parents, and boosters all match",
      "Perfect for spirit wear, booster fundraisers, end-of-season gifts, and everyday team identity beyond the rink",
      "Coordinates with the full HAMLO SPORTS ice hockey sideline line: matching full-zip hoodies, quarter-zip pullovers, jogger pants, and track suits",
      "No minimum order quantity required; volume pricing on hoodies as low as $38.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey pullover hoodies on a performance fleece with a soft brushed interior, kangaroo pocket, and fully sublimated team graphics that match your on-ice uniform. Every hoodie carries your team crest, colors, player names, numbers, and sponsor logos on an unbroken front panel. It is the classic team hoodie your whole program wears from the rink to the bus and everywhere in between. The fleece takes full sublimation, so the pullover wears the same dye-fused team colorway as the jersey. The unbroken front panel (no zipper splitting the design) gives the crest a clean centered canvas. Pick the pullover for that classic look, or the full-zip for fast on/off. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Keep this hoodie for the stands and pick game wear from our team hockey jerseys. On cold travel days, add our hockey bomber jackets to the order.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-pullover-hoodies",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 133,
    "name": "Custom Ice Hockey Full Zip Hoodies",
    "slug": "custom-ice-hockey-full-zip-hoodies",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029854/hamlosports/products/ice-hockey/custom-ice-hockey-full-zip-hoodies.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-full-zip-hoodies/",
    "rating": 4.9,
    "reviews": 46,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full zip front with adjustable drawstring hood and side pockets, easier on and off than pullover styles in cramped locker rooms",
      "Soft brushed fleece interior keeps players warm in cold rinks from warmup through the final horn",
      "Four decoration methods available: sublimation dyes the team colorway into the fleece, embroidery for a dimensional crest, tackle twill for a chest team name, and screen printing for player names and sponsor marks",
      "Fully sublimated to match your on-ice jerseys with coordinated colors, crest placement, and team design language",
      "Youth (YS to YXL) through adult (XS to 4XL) so players, coaches, parents, and fans all wear the same team look",
      "Order for the full roster or the entire program — players, staff, families, and boosters in one coordinated run",
      "Coordinates with the full HAMLO SPORTS ice hockey sideline line: matching pullover hoodies, quarter-zip pullovers, jogger pants, and track suits",
      "No minimum order quantity required; volume pricing on hoodies as low as $39.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey full zip hoodies on a performance fleece with a soft brushed interior and fully sublimated team graphics that match your on-ice uniform. Every hoodie includes your sublimated team crest, colors, player names, numbers, and sponsor logos. It is the off-ice layer your entire program wears from the parking lot to the bench and back. The fleece takes full sublimation, so the hoodie carries the same sublimated team colorway as the jersey. A full-zip front layers on and off over a base layer in cramped locker rooms without messing up hair or a cap. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Put the full zip hoodie on the same quote as your custom hockey team jerseys. Coaches and parents can pick from our hockey quarter-zip pullovers too.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-full-zip-hoodies",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 134,
    "name": "Custom Ice Hockey Bomber Jackets",
    "slug": "custom-ice-hockey-bomber-jackets",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 99.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029854/hamlosports/products/ice-hockey/custom-ice-hockey-bomber-jackets.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-bomber-jackets/",
    "rating": 4.9,
    "reviews": 47,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Classic bomber silhouette with ribbed knit collar, cuffs, and hem, the retro team look that never goes out of style",
      "Wool blend body with full satin interior lining for warmth, structure, and a premium hand feel inside and out",
      "Chenille patches, tackle twill, and embroidery on chest, back, and sleeves — the classic varsity decoration set (wool will not take sublimation, and screen printing does not hold on a structured wool shell)",
      "Full-zip front with side pockets",
      "Youth (YS to YXL) through adult (XS to 4XL) with no upcharge on extended sizes",
      "No minimums, order 1 jacket or 500 with volume pricing as low as $84.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey bomber jackets that give your program the varsity-level presence it deserves, from arena arrivals to team dinners to postgame walkouts.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-bomber-jackets",
    "tierPrices": {
      "tier1": 99.99,
      "tier2": 94.99,
      "tier3": 89.99,
      "tier4": 84.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 99.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 94.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 89.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 84.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 135,
    "name": "Custom Ice Hockey Parka Winter Jackets",
    "slug": "custom-ice-hockey-parka-winter-jackets",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 69.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029855/hamlosports/products/ice-hockey/custom-ice-hockey-parka-winter-jackets.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-parka-winter-jackets/",
    "rating": 4.9,
    "reviews": 48,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Insulated quilted fill through the body, hood, and sleeves",
      "Adjustable hood with a drawcord",
      "Embroidery, tackle twill, and woven/heat-applied patches put your crest, names, and sponsors on the shell (the insulated shell will not take sublimation or screen printing)",
      "Youth (YS to YXL) through adult (XS to 4XL) with no upcharge on extended sizes",
      "No minimums, order 1 parka or 500 with volume pricing as low as $60/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey parka winter jackets made for cold rinks, outdoor ponds, and winter sidelines. Insulated quilted fill and an adjustable hood, for coaches, players, and parents. Each parka is tailored to order with your team colors, crest, names, and sponsors, and your quote shows the decoration price. Your team colors, crest, names, and sponsors are embroidered, twilled, and patched onto the shell, and your quote shows the decoration price. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). The parka is one part of our custom hockey jerseys and team apparel, so the whole club can wear your colors.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-parka-winter-jackets",
    "tierPrices": {
      "tier1": 69.99,
      "tier2": 64.99,
      "tier3": 62.99,
      "tier4": 62.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 69.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 64.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 62.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 62.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 136,
    "name": "Custom Ice Hockey Track Pants",
    "slug": "custom-ice-hockey-track-pants",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Smooth Tricot Performance Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029856/hamlosports/products/ice-hockey/custom-ice-hockey-track-pants.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-track-pants/",
    "rating": 4.9,
    "reviews": 49,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Zippered ankle openings slide on and off over skates or shoes without catching or bunching",
      "Elastic waistband with internal drawstring holds secure over compression layers, no belt needed",
      "Four professional embellishment options — sublimation dye-fuses the team colorway and side stripes into the poly tricot, embroidery for a hip crest, tackle twill for a leg team name, and screen printing for player names and sponsor marks",
      "Deep zippered side pockets keep phones, keys, and tape locked in place during warm-ups",
      "Side stripe detailing designed to match your jersey and track jacket for a fully coordinated game-day look",
      "Youth (YS to YXL) through adult (XS to 4XL) with no size upcharges — outfit players and coaches in one order",
      "Coordinates with the full HAMLO SPORTS ice hockey sideline line: pair with the team track jacket for a complete tracksuit",
      "No minimum order quantity required; volume pricing on pants as low as $36.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey track pants built for the walk from the parking lot to the bench, elastic waistband with internal drawstring, zippered ankle openings that slide over skates without catching, and side stripe detailing matched to your jersey's color scheme. Each pair is tailored to order with your sublimated team colors, logo, and optional player names included in the base unit rate. The smooth polyester tricot takes full sublimation, so the side stripes and team color match the jersey and the track jacket, with no add-on stripe. Pair them with the team track jacket for a complete tracksuit in one coordinated colorway. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Add track pants for travel days after you choose your hockey team uniforms. Wear the track pants with a custom hockey bomber jacket on the way to the rink.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-track-pants",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Smooth Tricot Performance Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 137,
    "name": "Custom Ice Hockey Short Sleeve T-shirts",
    "slug": "custom-ice-hockey-short-sleeve-t-shirts",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 32.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029856/hamlosports/products/ice-hockey/custom-ice-hockey-short-sleeve-t-shirts.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-short-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 50,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Soft jersey knit",
      "Sublimated team colors plus optional embroidery & screen printing",
      "Soft, breathable three-season team tee",
      "Regular, athletic, or relaxed fit",
      "Coordinates with your on-ice jersey colorway",
      "Youth and adult sizes — No minimum order quantity required"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design custom ice hockey short sleeve t-shirts in a soft jersey knit. Sublimated team colors with optional embroidery and screen printing for a comfortable, three-season team tee Built as everyday spirit wear and warm-weather team apparel for players, coaches, parents, and fans. The knit takes full sublimation and stays soft and comfortable off the ice. Ordered with the rest of your kit, it is made in the same dye batch, so the colors match. Give players a short sleeve tee for practice weeks and dress them for games in our hockey team uniforms. Over a tee on a cold bench, wear our quarter-zip hockey pullover.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-short-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 32.99,
      "tier2": 29.99,
      "tier3": 26.99,
      "tier4": 24.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 32.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 26.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 24.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 138,
    "name": "Custom Ice Hockey Long Sleeve T-shirts",
    "slug": "custom-ice-hockey-long-sleeve-t-shirts",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029855/hamlosports/products/ice-hockey/custom-ice-hockey-long-sleeve-t-shirts.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-long-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 51,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Soft jersey knit with a relaxed athletic fit, comfortable enough for all-day wear at the rink and off it",
      "Three decoration methods available: sublimation dyes the team colorway and graphics into the knit, embroidery delivers a clean left-chest crest, and screen printing handles team names and player info",
      "Extended sleeve coverage bridges the gap between a basic tee and heavier outerwear for fall practices, spring training, and cool arena nights",
      "Works as a base layer under jerseys and jackets or a standalone team tee for travel days, pregame warmups, and team events",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "Coordinates with the full HAMLO SPORTS ice hockey line: match it with the short sleeve tee, compression base layer, and sideline hoodies",
      "No minimum order quantity required; volume pricing on shirts as low as $26.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey long sleeve t-shirts that give your program three-season coverage from early fall skates through spring tournaments. A soft jersey knit with extended sleeve coverage and a relaxed athletic fit that works as a standalone tee or a base layer when rink temperatures drop. Made to order with sublimated team colors, crest, names, numbers, and sponsors included in the base unit rate. The tee takes full sublimation, so the team colorway and graphics dye into the fabric instead of a logo added later. Sublimation, embroidery and screen printing all carry on the lightweight knit. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Long sleeve tees are for the off-ice days, and the season kit starts with our custom hockey uniforms. For under the gear, look at our hockey compression base layers.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-long-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 139,
    "name": "Custom Ice Hockey Quarter Zip Pullovers",
    "slug": "custom-ice-hockey-quarter-zipper-pullovers",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029855/hamlosports/products/ice-hockey/custom-ice-hockey-quarter-zipper-pullovers.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-quarter-zipper-pullovers/",
    "rating": 4.9,
    "reviews": 52,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Quarter-zip stand-up collar opens for ventilation or closes for warmth — a clean, professional, no-bulk silhouette",
      "Lightweight polyester performance knit for coaches who pace the bench (lighter than the team fleece hoodies)",
      "Four professional embellishment options — sublimation dye-fuses the team colorway into the poly knit, embroidery for a left-chest crest and staff titles, tackle twill for a sewn-on team name, and screen printing for player names and sponsor marks",
      "Athletic fit provides unrestricted range of motion for stretching, warm-ups, and 60 minutes of behind-the-bench movement",
      "Youth (YS to YXL) through adult (XS to 4XL) so coaching staff, parents, and players all coordinate",
      "Layers under a jacket at outdoor rinks or over a dress shirt for team banquets — the most versatile off-ice piece",
      "Coordinates with the full HAMLO SPORTS ice hockey sideline line: matching full-zip hoodies, pullover hoodies, jogger pants, and track suits",
      "No minimum order quantity required; volume pricing on pullovers as low as $34.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey quarter zip pullovers in lightweight moisture-wicking performance fabric with an athletic fit and stand-up collar. Every pullover includes your sublimated team crest, colors, and custom graphics, the polished sideline layer your coaching staff, players, and program leadership wear behind the bench, at team events, and on tournament travel days. Lighter than the team fleece hoodies, the quarter-zip is the breathable performance layer coaches and staff live in behind the bench. It's fully custom, sublimated to coordinate with your on-ice uniform and off-ice hoodies in one cohesive program look. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). The quarter-zip pullover works for coaches and parents, and players start with our team hockey jerseys.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-quarter-zipper-pullovers",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 140,
    "name": "Custom Ice Hockey Training Shorts",
    "slug": "custom-ice-hockey-training-shorts",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029856/hamlosports/products/ice-hockey/custom-ice-hockey-training-shorts.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-training-shorts/",
    "rating": 4.9,
    "reviews": 53,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Lightweight moisture-wicking polyester for dryland sessions, summer camps, and indoor conditioning",
      "Elastic waistband with internal drawstring, locks in place through sprints, agility drills, and plyometrics",
      "Sublimation, screen printing, or embroidery for full-coverage team branding from waistband to hem (no tackle twill on training shorts)",
      "Side pockets secure phones, keys, and wallets during gym sessions and team travel days",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimums, order 1 pair or 500 with volume pricing as low as $26.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey training shorts built for every off-ice session, dryland conditioning, summer agility work, gym training, plyometrics, and camp circuits. Lightweight moisture-wicking fabric, elastic waistband with drawstring, side pockets, and a breathable open-leg cut that lets players move without restriction. Made to order with sublimated team colors, crest, player names, and logos included in the base unit rate. Sublimated team colors, crest, player names, and logos are included in the standard unit rate, with no setup fees and no hidden costs. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Training shorts are for dryland work, and for game night you can see our custom hockey uniforms.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-training-shorts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 141,
    "name": "Custom Ice Hockey Jogger Pants",
    "slug": "custom-ice-hockey-jogger-pants",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029855/hamlosports/products/ice-hockey/custom-ice-hockey-jogger-pants.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-jogger-pants/",
    "rating": 4.9,
    "reviews": 54,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Tapered athletic cut with ribbed elastic ankle cuffs — the modern team silhouette that replaces bulky straight-leg warm-ups",
      "Brushed fleece interior keeps players warm during early-morning rink arrivals and cold arena benches",
      "Four decoration methods available: sublimation dyes the team colorway into the fleece, embroidery for a hip or thigh crest, tackle twill for a leg team name, and screen printing for player names and sponsor marks",
      "Zippered side pockets and a rear pocket keep phones, keys, and wallets secure during team travel",
      "Youth (YS to YXL) through adult (XS to 4XL) with no upcharge on extended sizes",
      "Coordinates with the full HAMLO SPORTS ice hockey sideline line: pair with the team full-zip or pullover hoodies for a complete sweatsuit",
      "No minimum order quantity required; volume pricing on pants as low as $36.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey jogger pants in a performance fleece your team can wear from the rink to the street. Tapered leg, ribbed elastic ankle cuffs, soft brushed fleece interior, and an elastic drawstring waist built for comfort during team travel, pre-game arrivals, and post-practice cooldowns. Each pair is tailored to order with your sublimated team colors, logo, player names, and numbers included in the base unit rate. The fleece takes full sublimation, so the joggers carry the same sublimated team colorway as the jersey and hoodies. Pair them with the team full-zip or pullover hoodies for a complete sideline sweatsuit in one coordinated colorway. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Joggers are for the bus and the warmup, and our team hockey jerseys are for the game. On the coldest game nights, throw our hockey parka over the joggers.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-jogger-pants",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 142,
    "name": "Custom Ice Hockey Compression Base Layers",
    "slug": "custom-ice-hockey-compression-base-layers",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 38.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029854/hamlosports/products/ice-hockey/custom-ice-hockey-compression-base-layers.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-compression-base-layers/",
    "rating": 4.9,
    "reviews": 55,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Four-way stretch compression knit moves with every stride, shot, and check without restricting range of motion",
      "Moisture-wicking construction pulls sweat away from skin through three periods and overtime",
      "Fits under shoulder pads, elbow pads, rib pads, breezers, and shin guards",
      "Two decoration methods available: sublimation dyes team colors, logos, names, and numbers into the knit; screen printing handles sponsor or league marks. Tackle twill and embroidery are not used",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges — same per-shirt price across the roster",
      "No minimum order quantity required; volume pricing on shirts as low as $29.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey compression base layers engineered to sit against skin under every pad, shoulder to shin. The four-way stretch knit with a moisture-wicking finish goes under shoulder pads, elbow pads, rib pads, and breezers. Made to order with team colors, crest, and numbers sublimated into the fabric in the per-piece price, with sublimation and screen printing only. Every base layer is designed by our in-house team, then printed and sewn factory-direct in our Sialkot, Pakistan export manufacturing facility, so your team crest is sublimated into the knit. Ordered with the rest of your team order, it is made in the same dye batch, so colors match. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Base layers go under the gear, so plan them together with your custom hockey uniforms.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-compression-base-layers",
    "tierPrices": {
      "tier1": 38.99,
      "tier2": 34.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 38.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 143,
    "name": "Custom Ice Hockey Beanies",
    "slug": "custom-ice-hockey-beanies",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 28.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029853/hamlosports/products/ice-hockey/custom-ice-hockey-beanies.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-beanies/",
    "rating": 4.9,
    "reviews": 56,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Soft knit acrylic with optional fleece lining, warm without bulk through cold arenas and tournament travel",
      "Custom team colorways built from scratch in your program colors",
      "Embroidery or a woven patch for a crisp crest (acrylic knit does not take sublimation, and tackle twill is not used on beanies)",
      "Cuffed, uncuffed, pom-pom, and slouch styles for players, coaches, parents, and fans",
      "One-size-fits-all with youth and adult options, no upcharge on any size",
      "No minimums, order 1 beanie or 500 with volume pricing as low as $19.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey beanies that put your program's crest on every head in the arena, players, coaches, parents, and fans. Soft knit acrylic construction, optional fleece lining, and custom team colorways built from scratch in your program's colors. Made to order with your embroidered crest, team name, and sponsor logos, and your quote shows the price. Your embroidered crest, team name, and sponsor logos are built in your program colors, and your quote shows the embroidery price. No setup fees, no minimums. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Pick your beanies after your players are set in our hockey team uniforms. For cold rink days, pair the beanie with one of our custom hockey jackets.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-beanies",
    "tierPrices": {
      "tier1": 28.99,
      "tier2": 26.99,
      "tier3": 24.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 28.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 26.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 24.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 144,
    "name": "Custom Ice Hockey Equipment Bags",
    "slug": "custom-ice-hockey-equipment-bags",
    "categorySlug": "custom-ice-hockey-uniforms",
    "category": "ICE HOCKEY",
    "sport": "Ice Hockey",
    "badge": "FACTORY DIRECT",
    "price": 89.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029854/hamlosports/products/ice-hockey/custom-ice-hockey-equipment-bags.png",
    "canonical": "/custom-ice-hockey-uniforms/custom-ice-hockey-equipment-bags/",
    "rating": 4.9,
    "reviews": 57,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Heavy-duty 600D polyester shell with reinforced stitching, made for the locker room and tournament travel",
      "Reinforced bottom",
      "Large main compartment plus a dedicated skate compartment, ventilated wet-gear sections, and zippered side compartments keep a full set of gear organized",
      "Four professional embellishment options — sublimation for full-coverage team color, embroidery for a dimensional crest, tackle twill for a large team name, and screen printing for individual player names",
      "Junior, senior, goalie, and coach sizes available with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on bags as low as $74.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom ice hockey equipment bags that carry a full set of gear and put your program's brand on display. Spacious main compartment fits skates, pads, helmet, gloves, and jerseys with skate pockets, ventilated sections, and a reinforced bottom. Made to order with sublimated team colors, crest, names, numbers, and sponsors in the per-piece price. Every equipment bag is custom-branded to order: your team color, crest, and player names are built into the bag with no setup fees, and sublimated designs are included in the per-bag price. Junior, senior, goalie, and coach sizes are all available so the whole program carries a matching look from the youngest player to the bench staff. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). When you order bags for the club, look through the rest of our custom hockey jerseys and team apparel too.",
    "cloudinaryPublicId": "hamlosports/products/ice-hockey/custom-ice-hockey-equipment-bags",
    "tierPrices": {
      "tier1": 89.99,
      "tier2": 84.99,
      "tier3": 79.99,
      "tier4": 74.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 89.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 84.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 79.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 74.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 145,
    "name": "Custom Lacrosse Standard Jerseys",
    "slug": "custom-lacrosse-standard-jerseys",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "150 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029860/hamlosports/products/lacrosse/custom-lacrosse-standard-jerseys.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-standard-jerseys/",
    "rating": 4.9,
    "reviews": 58,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Standalone game-day jersey sold individually — the flexible option for replacing tops or adding home/away colorways without re-buying shorts",
      "Four professional embellishment options — sublimation builds the team colorway and side panels, tackle twill anchors the front and back numbers, embroidery delivers the chest crest, and screen printing handles optional sponsor patches",
      "~150 GSM 100% polyester sublimated pro-mesh with moisture-wicking finish",
      "Relaxed athletic cut sized to wear over shoulder pads and arm guards, with sleeves cut to clear arm-pad bulk through the cradle and shot",
      "Front and back numbers in a contrasting color, sized to your league's rules; sublimated numbers are included, and tackle twill is $5 per name and $5 per number",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on jerseys as low as $36.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom lacrosse standard jerseys as standalone game-day tops — fully sublimated ~150 GSM polyester pro-mesh, moisture-wicking, with a relaxed athletic cut sized to wear over shoulder pads and arm guards without binding the cradle, shot, or check. Sublimated team colors, side panels, crest, player names, and numbers are included in the standard jersey pricing — no setup fees. HAMLO SPORTS builds each jersey direct from our specialized Sialkot, Pakistan manufacturing facility to the same game-ready standard as the full uniform package. Front and back numbers are sized to your league's rules. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Building a full kit with shorts, pinnies or girls' kilts? See all our custom lacrosse jerseys and uniforms.",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-standard-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 146,
    "name": "Custom Lacrosse Full Sleeve Jerseys",
    "slug": "custom-lacrosse-full-sleeve-jerseys",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 38.99,
    "fabric": "150 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029858/hamlosports/products/lacrosse/custom-lacrosse-full-sleeve-jerseys.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-full-sleeve-jerseys/",
    "rating": 4.9,
    "reviews": 59,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full wrist-to-wrist sleeve coverage for box lacrosse, early-spring field play, and fall tournaments",
      "Four professional embellishment options — sublimation builds the team colorway and side panels across body and sleeves, tackle twill anchors the front and back numbers, embroidery delivers the chest crest, and screen printing handles optional sponsor patches",
      "~150 GSM 100% polyester sublimated pro-mesh with moisture-wicking finish; full sleeves cover the arms during outdoor field play",
      "Relaxed athletic cut sized to wear over shoulder pads and arm guards, with sleeves cut to clear arm-pad bulk through the cradle and shot",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on jerseys as low as $32.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design custom lacrosse full sleeve jerseys built for box lacrosse and cold-weather field play: fully sublimated ~150 GSM polyester pro-mesh with full wrist-to-wrist sleeve coverage, in a relaxed cut sized to wear over shoulder pads and arm guards. Your sublimated team colors, side panels, crest, names, and numbers cover every inch from collar to cuff at the per-jersey price, with no setup fees. HAMLO SPORTS builds each long-sleeve jersey direct from our specialized Sialkot, Pakistan manufacturing facility to the same game-ready standard as the full uniform package, so it goes with your short-sleeve tops and uniform sets. Front and back numbers are sized to your league's rules. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-full-sleeve-jerseys",
    "tierPrices": {
      "tier1": 38.99,
      "tier2": 36.99,
      "tier3": 34.99,
      "tier4": 32.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 38.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 32.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 147,
    "name": "Custom Lacrosse Sleeveless Jerseys",
    "slug": "custom-lacrosse-sleeveless-jerseys",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "150 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029860/hamlosports/products/lacrosse/custom-lacrosse-sleeveless-jerseys.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-sleeveless-jerseys/",
    "rating": 4.9,
    "reviews": 60,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Sleeveless athletic cut for unrestricted shooting, passing, and cradling in peak-season heat",
      "Four professional embellishment options — sublimation builds the team colorway and side panels, tackle twill anchors the front and back numbers, embroidery delivers the chest crest, and screen printing handles optional sponsor patches",
      "~150 GSM 100% polyester sublimated pro-mesh with moisture-wicking finish and open shoulders for summer tournaments",
      "Sized to wear over shoulder pads with arms free; pairs with players' own compression sleeves when arm coverage is wanted",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on jerseys as low as $32.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design custom lacrosse sleeveless jerseys for hot-weather game days: fully sublimated ~150 GSM polyester pro-mesh, moisture-wicking, in a sleeveless athletic cut sized to wear over shoulder pads with arms free for unrestricted shooting, passing, and cradling. Sublimated team colors, side panels, crest, player names, and numbers are included in the standard jersey pricing — no setup fees. HAMLO SPORTS builds each sleeveless jersey direct from our specialized Sialkot, Pakistan manufacturing facility to the same game-ready standard as the full uniform package, so it goes with your sleeved tops and uniform sets. Front and back numbers are sized to your league's rules. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-sleeveless-jerseys",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 34.99,
      "tier4": 32.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 32.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 148,
    "name": "Custom Lacrosse Reversible Pinnies",
    "slug": "custom-lacrosse-reversible-pinnies",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029859/hamlosports/products/lacrosse/custom-lacrosse-reversible-pinnies.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-reversible-pinnies/",
    "rating": 4.9,
    "reviews": 61,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Flip sides instantly to split squads by color for drills, tryouts, and showcases",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on pinnies as low as $39.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$39.99/each on 101+ pieces, no setup fees Get My Free Quote Call 760-994-3555.",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-reversible-pinnies",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 46.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 46.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 149,
    "name": "Custom Lacrosse Raceback Tank Tops",
    "slug": "custom-lacrosse-raceback-tank-tops",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "150 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029859/hamlosports/products/lacrosse/custom-lacrosse-raceback-tank-tops.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-raceback-tank-tops/",
    "rating": 4.9,
    "reviews": 62,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "True racerback cut with open back panel for full shoulder rotation through cradles, draw controls, and overhead shooting",
      "Four professional embellishment options — sublimation builds the team colorway, tackle twill anchors numbers, embroidery delivers the chest crest, and screen printing handles optional sponsor patches",
      "~150 GSM 100% polyester moisture-wicking knit pulls sweat off skin through doubleheaders and summer showcases",
      "Fitted athletic women's cut, worn directly and not over shoulder pads, from Youth YS through Adult 4XL with zero upcharge on any size",
      "Doubles as a training tank or a numbered game top, with front and back numbers sized to your league's rules",
      "No minimum order quantity required; volume pricing on tanks as low as $26.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$26.99/each on 101+ pieces, no setup fees.",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-raceback-tank-tops",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 150,
    "name": "Custom Lacrosse Standard Uniforms",
    "slug": "custom-lacrosse-standard-uniforms",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "150 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029860/hamlosports/products/lacrosse/custom-lacrosse-standard-uniforms.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-standard-uniforms/",
    "rating": 4.9,
    "reviews": 38,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Complete jersey-and-shorts package with coordinated design — the game-day set that defines your program's identity on the field",
      "Four professional embellishment options — sublimation builds the colorway across jersey and shorts, tackle twill anchors the jersey numbers, embroidery delivers the chest crest, and screen printing handles optional sponsor patches",
      "~150 GSM 100% polyester sublimated pro-mesh, moisture-wicking, for four quarters of full-field play",
      "Jersey cut to wear over shoulder pads and arm guards; matching shorts with elastic waist and drawcord",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing as low as $69.99/set on 101+ sets, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom lacrosse standard uniforms as a complete game-day package — a fully sublimated ~150 GSM polyester pro-mesh jersey and matching shorts built to coordinate, moisture-wicking, with the jersey cut to wear over shoulder pads and arm guards. Sublimated team colors, side panels, crest, player names, and numbers are included in the per-set price — no setup fees. HAMLO SPORTS makes each set in its own factory overseas, with the jersey and shorts in the same dye batch, so the colors match. Front and back numbers are sized to your league's rules. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-standard-uniforms",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 76.99,
      "tier3": 74.99,
      "tier4": 69.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 76.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 74.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 69.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 151,
    "name": "Custom Lacrosse Women Uniforms",
    "slug": "custom-lacrosse-women-uniforms",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 72.99,
    "fabric": "150 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029861/hamlosports/products/lacrosse/custom-lacrosse-women-uniforms.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-women-uniforms/",
    "rating": 4.9,
    "reviews": 39,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Complete top-and-bottom package with coordinated design — the game-day set built specifically for women's and girls' programs",
      "Four decoration methods available: sublimation for the colorway on both pieces, tackle twill for sewn numbers ($5 per name, $5 per number), embroidery for the chest crest, and screen printing for sponsor patches. Your quote shows the price for embroidery and screen printing.",
      "~150 GSM 100% polyester sublimated moisture-wicking knit for fast-paced play and all-day tournaments",
      "Choose your bottom — skort with built-in compression short, traditional kilt, or athletic shorts; top available in racerback or short-sleeve cut",
      "Women's-specific sizing from Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required: $72.99 per set at 1 to 24, down to $57.99 at 101+. zero hidden setup costs."
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "fees.",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-women-uniforms",
    "tierPrices": {
      "tier1": 72.99,
      "tier2": 67.99,
      "tier3": 62.99,
      "tier4": 57.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 72.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 67.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 62.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 57.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 152,
    "name": "Custom Lacrosse Shorts",
    "slug": "custom-lacrosse-shorts",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "150 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029860/hamlosports/products/lacrosse/custom-lacrosse-shorts.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-shorts/",
    "rating": 4.9,
    "reviews": 40,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Standalone game-day and practice shorts sold individually — the flexible option for replacing bottoms or building mix-and-match kits",
      "Three decoration methods available — sublimation for team colors and side stripes, screen printing for logos, and embroidery for a small hip logo",
      "~150 GSM 100% polyester moisture-wicking fabric with elastic waistband and internal drawcord, with a pocketless game cut",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on pairs as low as $32.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design custom lacrosse shorts on fully sublimated ~150 GSM polyester with a lightweight moisture-wicking build, an elastic waistband and internal drawcord, and a pocketless game cut for men's and boys' field and box lacrosse at every level from youth to collegiate. Sublimated team colors, side stripes, and logos are included at the per-pair price, no setup fees. HAMLO SPORTS builds each pair direct from our specialized Sialkot, Pakistan manufacturing facility from your team design file, so practice shorts and game bottoms share one design across the roster. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-shorts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 34.99,
      "tier4": 32.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 32.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 153,
    "name": "Custom Lacrosse Skorts",
    "slug": "custom-lacrosse-skorts",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "150 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029860/hamlosports/products/lacrosse/custom-lacrosse-skorts.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-skorts/",
    "rating": 4.9,
    "reviews": 41,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Two-in-one design with an outer skirt over a built-in compression short for full coverage and confidence on game day",
      "Three decoration methods available — sublimation for unlimited team colors and side graphics, screen printing for crisp logos, and embroidery for a small hip logo",
      "~150 GSM 100% polyester moisture-wicking outer skirt with an elastic waistband, over a stretch poly-spandex compression liner for a secure athletic fit",
      "Youth girls' YS through adult women's 2X with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on skorts as low as $36.99/each on 101+ pieces — zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design custom lacrosse skorts with a fully sublimated outer skirt over a built-in compression short — one game-day piece on ~150 GSM moisture-wicking polyester with an elastic waistband, built for girls' and women's lacrosse at every level. Your sublimated team colors, crest, and side graphics are included at the per-skort price, no setup fees. HAMLO SPORTS builds each skort direct from our specialized Sialkot, Pakistan manufacturing facility with the compression short included at no extra charge, made to go with any of our women's lacrosse tops. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-skorts",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 154,
    "name": "Custom Lacrosse Kilt Skirts",
    "slug": "custom-lacrosse-kilt-skirts",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "150 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029858/hamlosports/products/lacrosse/custom-lacrosse-kilt-skirts.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-kilt-skirts/",
    "rating": 4.9,
    "reviews": 42,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Traditional pleated kilt design with side vents — the classic women's lacrosse look trusted by programs at every level",
      "Three decoration methods available — sublimation for unlimited colors, plaid patterns, and gradient designs, screen printing for crisp logos, and embroidery for a small hip logo",
      "~150 GSM 100% polyester moisture-wicking fabric with an elastic waistband and side vents for a secure, comfortable athletic fit",
      "Worn with a separate compression short (sold separately) — the kilt itself is the pleated outer skirt",
      "Youth girls' YS through adult women's 2X with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on skirts as low as $32.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design custom lacrosse kilt skirts with traditional pleated styling and full sublimation — the classic women's lacrosse game-day bottom in your team colors, plaids, and crest, built on ~150 GSM moisture-wicking polyester with an elastic waistband and side vents for unrestricted movement. Worn with a separate compression short. Sublimated team colors and graphics are included at the per-skirt price, no setup fees. HAMLO SPORTS builds each kilt direct from our specialized Sialkot, Pakistan manufacturing facility through the final pleat, made to go with any of our women's lacrosse tops. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-kilt-skirts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 34.99,
      "tier4": 32.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 32.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 155,
    "name": "Custom Lacrosse Compression Shorts",
    "slug": "custom-lacrosse-compression-shorts",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029858/hamlosports/products/lacrosse/custom-lacrosse-compression-shorts.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-compression-shorts/",
    "rating": 4.9,
    "reviews": 43,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Poly-spandex four-way-stretch knit moves with every dodge, ground ball, and defensive slide",
      "Sublimation prints your team colors, logo, and branding directly into the fabric, with screen-printed logos available",
      "Moisture-wicking fabric pulls sweat away from the skin under pads and outer layers",
      "Youth YS through adult 4XL with zero oversize upcharges; No minimum order quantity required, volume pricing as low as $29.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom lacrosse compression shorts designed as the base layer under your game shorts, skorts, or kilts. Every pair is built on a poly-spandex four-way-stretch knit with full dye sublimation so your team colors and logo are printed directly into the material in the per-piece price, no setup fees. HAMLO SPORTS builds each pair direct from our specialized Sialkot, Pakistan manufacturing facility, made to go with your game shorts, skort, or kilt. Sublimation and screen printing are the decoration methods on this base layer. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-compression-shorts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 156,
    "name": "Custom Lacrosse Training Shorts",
    "slug": "custom-lacrosse-training-shorts",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "150 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029861/hamlosports/products/lacrosse/custom-lacrosse-training-shorts.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-training-shorts/",
    "rating": 4.9,
    "reviews": 44,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "~150 GSM lightweight moisture-wicking polyester for two-a-days, summer camps, and indoor training sessions",
      "Elastic waistband with internal drawcord",
      "Side pockets for walkthroughs, conditioning, and off-field travel",
      "Three decoration methods available — sublimation prints colors and graphics directly into the fabric, plus screen printing and embroidery for logos",
      "Youth YS through adult 4XL with zero oversize upcharges; No minimum order quantity required, volume pricing as low as $26.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom lacrosse training shorts for daily practice, conditioning sessions, and tournament warm-ups. Every pair features lightweight ~150 GSM moisture-wicking polyester, an elastic waistband with internal drawcord, side pockets, and breathable mesh panels, all made to order with your team colors, logo, and branding included at the per-pair price, no setup fees. HAMLO SPORTS builds each pair direct from our specialized Sialkot, Pakistan manufacturing facility from your team design file, so practice and game-day gear share one design across the roster. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-training-shorts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 157,
    "name": "Custom Lacrosse Short Sleeve T-shirts",
    "slug": "custom-lacrosse-short-sleeve-t-shirts",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 32.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029860/hamlosports/products/lacrosse/custom-lacrosse-short-sleeve-t-shirts.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-short-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 45,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "The shirt your entire program wears — players, coaches, parents, and fans all repping the same design from practice to the bleachers",
      "Three decoration methods: sublimation, screen printing, and embroidery",
      "Crew neck with relaxed or athletic fit options, easy to order across every body type in your program",
      "Perfect for practices, camps, fundraisers, spirit-wear sales, tournament giveaways, and end-of-season gifts",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on shirts as low as $24.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom lacrosse short sleeve t-shirts that your entire program wears: players at practice, coaches at camps, parents in the stands, and teams at fundraiser tables. Each shirt is tailored to order with your team colors, logo, and player names. HAMLO SPORTS builds each shirt to order, and the design is sublimated into the fabric, so there is no print layer to crack or peel. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-short-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 32.99,
      "tier2": 29.99,
      "tier3": 26.99,
      "tier4": 24.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 32.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 26.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 24.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 158,
    "name": "Custom Lacrosse Long Sleeve T-shirts",
    "slug": "custom-lacrosse-long-sleeve-t-shirts",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029859/hamlosports/products/lacrosse/custom-lacrosse-long-sleeve-t-shirts.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-long-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 46,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-length sleeves that protect arms during cold fall practices, early spring training, and outdoor conditioning",
      "Lightweight enough to layer under pads and jerseys on game day without bulk or restricted movement",
      "Three decoration methods: sublimation, screen printing, and embroidery",
      "Crew neck with relaxed or athletic fit, works as a standalone training shirt or base layer under equipment",
      "The cold-weather training layer that bridges the gap between a short sleeve tee and a heavy hoodie",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on shirts as low as $26.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom lacrosse long sleeve t-shirts built for cold-weather training and game-day layering, the shirt players pull on for fall practices, wear under pads during cold spring games, and train in when short sleeves aren't enough but a hoodie is too much. Each shirt is tailored to order with your team colors, logo, player names, and numbers, and sublimated designs are included in the base unit rate. HAMLO SPORTS builds each shirt to order, and the design is sublimated into the fabric, so there is no print layer to crack or peel. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-long-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 159,
    "name": "Custom Lacrosse Shooting Shirts",
    "slug": "custom-lacrosse-shooting-shirts",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "150 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029859/hamlosports/products/lacrosse/custom-lacrosse-shooting-shirts.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-shooting-shirts/",
    "rating": 4.9,
    "reviews": 47,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "About 150 GSM athletic-fit moisture-wicking performance polyester",
      "Three decoration methods: sublimation for the full team design, plus screen printing and embroidery for logos",
      "Crew or V-neck neckline options to coordinate with your jersey collar",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on shirts as low as $26.99/each on 101+ pieces",
      "Built in our own factory overseas from the same artwork as your jerseys"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom lacrosse shooting shirts in your team colors, worn for pregame warmups, practice sessions, and post-game when your team still needs to look unified. Every shooter shirt is made to order with your sublimated team colors, logo, player names, and numbers included in the base unit rate. HAMLO SPORTS builds each shooting shirt direct from our specialized Sialkot, Pakistan manufacturing facility from the same artwork as your game jerseys. The graphics are sublimated directly into the fabric, not pressed on top. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-shooting-shirts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 160,
    "name": "Custom Lacrosse Sweatpants",
    "slug": "custom-lacrosse-sweatpants",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029860/hamlosports/products/lacrosse/custom-lacrosse-sweatpants.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-sweatpants/",
    "rating": 4.9,
    "reviews": 48,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Fleece with a soft brushed interior that keeps players warm through cold practices, bus rides, and post-game cool-downs",
      "Elastic waistband with adjustable drawstring, fits comfortably over compression shorts and base layers",
      "Tapered jogger or classic straight-leg silhouette, your call",
      "Four decoration methods — sublimation, tackle twill, embroidery, and screen printing (team name down the leg, hip logos, full color blocking)",
      "Deep side pockets for phone, keys, and wallet, stays organized during travel and tournament downtime",
      "Warm enough for sideline use during cold spring nights, comfortable enough for preseason conditioning",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on pairs as low as $34.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom lacrosse sweatpants built for everything off the field, cold-weather training, bus rides to away games, post-game recovery, and tournament bonding. Every pair features soft fleece interior, elastic waistband with drawstring, and side pockets, made to order with your sublimated team colors, logo, player names, and numbers in the per-piece price. HAMLO SPORTS builds each pair direct from our specialized Sialkot, Pakistan manufacturing facility. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-sweatpants",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 161,
    "name": "Custom Lacrosse Jogger Pants",
    "slug": "custom-lacrosse-jogger-pants",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029858/hamlosports/products/lacrosse/custom-lacrosse-jogger-pants.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-jogger-pants/",
    "rating": 4.9,
    "reviews": 49,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Modern tapered fit with ankle cuffs, a streamlined athletic silhouette for pregame, travel, and appearances",
      "Lightweight moisture-wicking performance poly-blend for training and warmups, not heavy cotton",
      "Zippered side pockets keep phone, keys, and valuables locked in during movement",
      "Three decoration methods — sublimation, screen printing, and embroidery for logos, names, and side stripes",
      "Elastic waistband with adjustable drawstring",
      "The performance pant that goes everywhere — training fields, tournaments, team dinners — without looking like loungewear",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on pairs as low as $36.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom lacrosse jogger pants built for the way athletes actually move, tapered fit, ankle cuffs, lightweight moisture-wicking fabric that performs during training and looks sharp for team dinners, tournament lobbies, and school hallways. Each pair is tailored to order with your sublimated team colors, logo, player names, and numbers included in the base unit rate. HAMLO SPORTS builds each jogger direct from our specialized Sialkot, Pakistan manufacturing facility on a performance poly-blend, so your design is sublimated into the fabric, and there is no print layer to crack or peel. Pairs with any of our lacrosse hoodies, quarter-zips, or track jackets. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-jogger-pants",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 162,
    "name": "Custom Lacrosse Quarter Zipper Pullovers",
    "slug": "custom-lacrosse-quarter-zipper-pullovers",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029859/hamlosports/products/lacrosse/custom-lacrosse-quarter-zipper-pullovers.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-quarter-zipper-pullovers/",
    "rating": 4.9,
    "reviews": 50,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Quarter-zip stand-up collar with thumbhole sleeves that secure the cuffs and add a little ventilation control",
      "Three decoration methods — sublimation, embroidery, and screen printing for logos, names, numbers, and sponsors",
      "Lightweight performance polyester with a moisture-wicking finish, an athletic fit that layers cleanly over jerseys and polos for warmups and moderate-weather practices",
      "Youth YS through adult 4XL with zero oversize upcharges — players, coaches, and staff in one order",
      "No minimum order quantity required; volume pricing on pullovers as low as $34.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$34.99/each on 101+ pieces.",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-quarter-zipper-pullovers",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 163,
    "name": "Custom Lacrosse Pullover Hoodies",
    "slug": "custom-lacrosse-pullover-hoodies",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029859/hamlosports/products/lacrosse/custom-lacrosse-pullover-hoodies.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-pullover-hoodies/",
    "rating": 4.9,
    "reviews": 51,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Classic pullover cut with kangaroo pocket, drawstring hood, and ribbed cuffs and waistband for a snug athletic fit",
      "Four decoration methods — sublimation, tackle twill, embroidery, and screen printing for logos, names, numbers, and sponsors",
      "Performance fleece with a soft brushed interior for warmth on cold sidelines, early-spring practices, and tournament travel days",
      "Youth YS through adult 4XL with zero oversize upcharges — players, coaches, parents, and fans in one order",
      "No minimum order quantity required; volume pricing on hoodies as low as $38.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design custom lacrosse pullover hoodies with soft fleece lining, kangaroo pocket, and edge-to-edge team graphics, the classic over-the-head hoodie that players wear to school on game day, parents rock in the stands, and the whole program orders together as one. HAMLO SPORTS builds each hoodie direct from our specialized Sialkot, Pakistan manufacturing facility. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-pullover-hoodies",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 164,
    "name": "Custom Lacrosse Full Zip Hoodies",
    "slug": "custom-lacrosse-full-zip-hoodies",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029858/hamlosports/products/lacrosse/custom-lacrosse-full-zip-hoodies.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-full-zip-hoodies/",
    "rating": 4.9,
    "reviews": 52,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Performance fleece with full front zipper, drawstring hood, ribbed cuffs, and ribbed waistband for sealed-in warmth on cold sidelines",
      "Four decoration methods — sublimation, tackle twill, embroidery, and screen printing for logos, player names, numbers, and sponsor graphics",
      "Side kangaroo pockets plus an interior media pocket",
      "Youth YS through adult 4XL with zero oversize upcharges — players, coaches, and parents in one order",
      "No minimum order quantity required; volume pricing on hoodies as low as $39.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Design custom lacrosse full zip hoodies with fleece-lined warmth, full front zipper, and your team's colors, crest, and player details, a sideline layer that zips on over game jerseys and pads without pulling over helmets, goggles, or ponytails. HAMLO SPORTS builds each hoodie direct from our specialized Sialkot, Pakistan manufacturing facility. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-full-zip-hoodies",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 165,
    "name": "Custom Lacrosse Track Jackets",
    "slug": "custom-lacrosse-track-jackets",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029861/hamlosports/products/lacrosse/custom-lacrosse-track-jackets.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-track-jackets/",
    "rating": 4.9,
    "reviews": 53,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full-zip front closure with athletic track silhouette — the arrival piece your team wears walking into every facility together",
      "Four decoration methods — sublimation, tackle twill (varsity-style sewn-on letters), embroidery, and screen printing",
      "Moisture-wicking performance polyester that keeps players warm during pregame and stays light for active warmups",
      "Ribbed cuffs and waistband lock in warmth",
      "Side pockets for the sideline between games",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on jackets as low as $36.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom lacrosse track jackets designed for pregame warmups, sideline layering, and team travel, full-zip front, athletic cut, lightweight moisture-wicking polyester with ribbed cuffs and waistband. Each jacket is tailored to order with your sublimated team colors, logo, player names, and numbers included in the base unit rate. HAMLO SPORTS builds each jacket direct from our specialized Sialkot, Pakistan manufacturing facility. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-track-jackets",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 166,
    "name": "Custom Lacrosse Windbreaker Jackets",
    "slug": "custom-lacrosse-windbreaker-jackets",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029861/hamlosports/products/lacrosse/custom-lacrosse-windbreaker-jackets.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-windbreaker-jackets/",
    "rating": 4.9,
    "reviews": 54,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Wind-resistant polyester shell for gusty sideline conditions",
      "Lightweight packable design that stuffs into any lacrosse bag and comes out game-ready — no wrinkles, no bulk",
      "Adjustable drawstring hood for coverage when light rain rolls in, folds flat when the weather clears",
      "Three decoration methods: sublimation dyed into the shell, plus screen printing and embroidery for logos (your design is part of the jacket, not stuck on top)",
      "Full-zip front closure for fast on-off layering over jerseys and pads between quarters and during warmups",
      "Side pockets for the sideline between tournament games",
      "Youth YS through adult 4XL with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on windbreakers as low as $34.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom lacrosse windbreaker jackets built for the weather lacrosse actually happens in — wind-resistant and water-resistant against light rain, mist, and gusty sidelines, and lightweight enough to pack into a gear bag and pull out when spring conditions turn. Full-zip front, adjustable drawstring hood, and side pockets, made to order with your sublimated team colors, logo, player names, and numbers in the per-piece price. HAMLO SPORTS builds each windbreaker direct from our specialized Sialkot, Pakistan manufacturing facility on a polyester shell, so your design is sublimated directly into the fabric, and there is no print layer to crack or peel. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-windbreaker-jackets",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 167,
    "name": "Custom Lacrosse Backpacks",
    "slug": "custom-lacrosse-backpacks",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029857/hamlosports/products/lacrosse/custom-lacrosse-backpacks.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-backpacks/",
    "rating": 4.9,
    "reviews": 55,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Heavy-duty 600D polyester shell",
      "Dedicated stick holders carry the stick on the outside of the bag for quick access at practice, games, and tournaments",
      "Isolated shoe compartment keeps dirty cleats and turf shoes away from clean jerseys, pads, and personal items",
      "Full-panel sublimation prints team colors, logos, player names, and numbers directly into every panel, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Padded shoulder straps and back panel for comfortable carry across campus, through airports, and between tournament fields all weekend",
      "No minimum order quantity required; volume pricing on backpacks as low as $64.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom lacrosse backpacks that match your team's uniforms and give your program a unified look from the parking lot to the sideline. Every bag is built on a heavy-duty 600D polyester shell with dedicated stick holders, an isolated shoe compartment, padded laptop sleeve, and ergonomic shoulder straps — full sublimation prints your team colors, logo, and player names directly into the panels at the per-bag price. The 600D polyester shell takes full sublimation across every panel, embroidery for a raised front-panel logo, and screen printing for bold opaque marks, plus tackle twill names and numbers at $5 per name and $5 per number. Bags are one-size, so there is no sizing chart to worry about. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-backpacks",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 69.99,
      "tier4": 64.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 69.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 64.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 168,
    "name": "Custom Lacrosse Cinch Bag",
    "slug": "custom-lacrosse-cinch-bag",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029857/hamlosports/products/lacrosse/custom-lacrosse-cinch-bag.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-cinch-bag/",
    "rating": 4.9,
    "reviews": 56,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Drawstring closure opens and closes in seconds — no zippers, no buckles, no fumbling between practice and the car",
      "Lightweight polyester folds flat inside any team backpack when not in use",
      "Full sublimation prints team colors, logos, and player names directly into the polyester face, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Reinforced corners anchor the full-length drawstring shoulder straps",
      "Built for team giveaways, summer-camp handouts, tournament swag, fundraiser items, and locker-room day-trip carry",
      "No minimum order quantity required; volume pricing on bags as low as $19.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "s Crafted for competitive play, our custom lacrosse cinch bags for practice days, summer camps, tournament giveaways, and team spirit gear. Every bag is a lightweight polyester drawstring sack with reinforced corners and full-length drawstring shoulder straps. Full sublimation prints team colors, logos, and branding directly into the fabric at the per-bag price. The polyester drawstring sack takes full sublimation across both faces, embroidery for a stitched front-panel logo, and screen printing for bold opaque marks, plus tackle twill names and numbers at $5 per name and $5 per number. Cinch bags are one-size, so there is no sizing chart to worry about. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-cinch-bag",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 29.99,
      "tier3": 24.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 24.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 169,
    "name": "Custom Lacrosse Bucket Hats",
    "slug": "custom-lacrosse-bucket-hats",
    "categorySlug": "custom-lacrosse-uniforms",
    "category": "LACROSSE",
    "sport": "Lacrosse",
    "badge": "FACTORY DIRECT",
    "price": 28.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029857/hamlosports/products/lacrosse/custom-lacrosse-bucket-hats.png",
    "canonical": "/custom-lacrosse-uniforms/custom-lacrosse-bucket-hats/",
    "rating": 4.9,
    "reviews": 57,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Wide brim shades the face, ears, and neck during full-day outdoor tournaments and summer camps — the areas a standard cap leaves exposed",
      "Lightweight breathable polyester with moisture-wicking properties for hot turf sidelines",
      "Full-panel sublimation prints team colors, logo, and player names into the polyester (molecularly infused graphics that will never crack, peel, or fade); an embroidered logo can sit on the front crown for a dimensional finish",
      "Unstructured, relaxed crown",
      "Crushable construction folds flat inside a backpack or cinch bag and pops back into shape on arrival",
      "Decorated two ways: sublimation and embroidery. Tackle twill and screen printing are not used on this soft, curved-crown hat",
      "One size with an adjustable interior sweatband; no size chart needed",
      "No minimum order quantity required with volume pricing as low as $19.99/each on 101+ pieces — no setup or design fees"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom lacrosse bucket hats keep your team protected and unified on tournament sidelines, summer practice fields, and travel days. The wide brim shades the face, ears, and neck — the areas a standard cap leaves exposed during full-day outdoor events. Full sublimation prints your team colors, logo, and branding directly into the polyester, so there is no print layer to crack or peel, and an embroidered front logo adds a structured raised mark. HAMLO SPORTS designs every bucket hat with our in-house team and produces it factory-direct in our Sialkot, Pakistan export manufacturing facility, from first design to final stitch, with a free professional mockup before anything goes into production. No minimum orders. Free design mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/lacrosse/custom-lacrosse-bucket-hats",
    "tierPrices": {
      "tier1": 28.99,
      "tier2": 26.99,
      "tier3": 22.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 28.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 26.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 22.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 170,
    "name": "Custom Rugby Round Neck Classic Jerseys",
    "slug": "custom-rugby-round-neck-classic-jerseys",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029864/hamlosports/products/rugby/custom-rugby-round-neck-classic-jerseys.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-round-neck-classic-jerseys/",
    "rating": 4.9,
    "reviews": 58,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Round neck collar sits clean and flat",
      "Reinforced double-stitched seams at shoulders, side panels, and sleeves",
      "Four decoration methods — full sublimation for hoops and full-panel designs, embroidery for the club crest, tackle twill for numbers, and screen printing for sponsors",
      "Moisture-wicking polyester keeps players dry through 80 minutes and sheds water weight in wet conditions",
      "Standalone jersey: order tops separately to replace worn kits, outfit new recruits, or pair with shorts your club already owns",
      "Youth through adult sizing (YS to 4XL); volume pricing on jerseys as low as $34.99/each on 101+ pieces, sublimated names, numbers and logos included"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby round neck classic jerseys built for match-day contact and designed to carry your club's identity on the pitch. The round neck is a clean, lightweight neckline with no fold-down collar and a sharp, no-nonsense look. Pair it with hoops, quartered panels, or any custom design, sublimated into the fabric. Every jersey has reinforced double-stitched seams. Names, numbers and sponsors in sublimation are included in the price, and your quote shows the price of the embroidered club crest. No minimum orders. Free design mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-round-neck-classic-jerseys",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 36.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 36.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 171,
    "name": "Custom Rugby V-neck Jerseys",
    "slug": "custom-rugby-v-neck-jerseys",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029866/hamlosports/products/rugby/custom-rugby-v-neck-jerseys.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-v-neck-jerseys/",
    "rating": 4.9,
    "reviews": 59,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Clean, modern V-neck neckline",
      "Reinforced double-stitched seams at the shoulders, side panels, and sleeves",
      "Four decoration methods — full sublimation for full designs, embroidery for the club crest, tackle twill for numbers, and screen printing for sponsors",
      "Moisture-wicking fabric pulls sweat away during play and sheds water weight in wet conditions",
      "Standalone jersey: order tops only for replacements, away kits, or when you already own shorts; volume pricing as low as $36.99/each on 101+ pieces",
      "Youth through adult sizing (YS to 4XL) with sublimated names, numbers and logos included in the price"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby v-neck jerseys when your club needs tops without the full uniform package. The v-neck gives players a clean, modern neckline with no fold-down collar. Every jersey is built from moisture-wicking polyester with reinforced double-stitched seams at the stress points that take the most punishment in contact. Standalone jerseys are the right call when your club already owns shorts, needs mid-season replacements, or wants a dedicated away design. Every jersey has reinforced double-stitched seams; names, numbers and sponsors in sublimation are included in the price, and your quote shows the price of the embroidered crest. No minimum orders. Free design mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-v-neck-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 172,
    "name": "Custom Rugby Traditional Button Collar Jerseys",
    "slug": "custom-rugby-traditional-button-collar-jerseys",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029865/hamlosports/products/rugby/custom-rugby-traditional-button-collar-jerseys.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-traditional-button-collar-jerseys/",
    "rating": 4.9,
    "reviews": 60,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Traditional button placket collar gives your side the heritage rugby union neckline",
      "Sublimated heavyweight polyester delivers the classic collar on moisture-wicking performance fabric",
      "Four decoration methods — full sublimation for crests, hoops, and full designs, embroidery for the club crest, tackle twill for numbers, and screen printing for sponsors",
      "Reinforced double-stitched seams at shoulders, collar join, and side panels",
      "Standalone jersey for touring kits, social jerseys, alumni pieces, or replacing worn match shirts; volume pricing as low as $36.99/each on 101+ pieces",
      "Youth through adult sizing (YS to 4XL) with sublimated names, numbers, logos, and sponsors included in the per-piece price, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby traditional button collar jerseys that carry your club's identity. The button placket collar is the traditional rugby union neckline. HAMLO SPORTS builds that classic collar on modern sublimated polyester so you get the authentic look without the weight, slow drying, and fading of cotton. Sublimation prints your crest, hoops, sponsors, numbers, and names directly into the moisture-wicking shell, so there is no print layer to crack or peel, and every seam is reinforced and double-stitched. The heritage collar, the modern fabric. No minimum orders. Free design mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-traditional-button-collar-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 173,
    "name": "Custom Rugby Traditional 2-button Collar Jerseys",
    "slug": "custom-rugby-traditional-2-button-collar-jerseys",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029865/hamlosports/products/rugby/custom-rugby-traditional-2-button-collar-jerseys.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-traditional-2-button-collar-jerseys/",
    "rating": 4.9,
    "reviews": 61,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Traditional fold-down collar with 2-button placket, the heritage rugby union neckline",
      "Sublimated polyester delivers the authentic collar look on moisture-wicking fabric",
      "Reinforced double-stitched seams at the shoulders, collar join, and side panels",
      "Four decoration methods — full sublimation for crests, hoops, and full designs, embroidery for the club crest, tackle twill for numbers, and screen printing for sponsors",
      "Standalone jersey for match kits, touring sides, social jerseys, or commemorative orders; volume pricing as low as $36.99/each on 101+ pieces",
      "Youth through adult sizing (YS to 4XL) with sublimated names, numbers, logos, and sponsors included in the per-piece price, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby traditional 2-button collar jerseys with a fold-down collar and 2-button placket. HAMLO SPORTS builds that authentic placket on sublimated polyester so your club gets the heritage collar without the weight, slow drying, and fading of cotton. Sublimation prints your crest, hoops, sponsors, numbers, and names directly into the shell, and the collar join has reinforced double-stitched seams. The heritage collar, the modern fabric. No minimum orders. Free design mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-traditional-2-button-collar-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 174,
    "name": "Custom Rugby Practice Jerseys",
    "slug": "custom-rugby-practice-jerseys",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "150 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029863/hamlosports/products/rugby/custom-rugby-practice-jerseys.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-practice-jerseys/",
    "rating": 4.9,
    "reviews": 62,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Made for conditioning, contact drills and full-pitch scrimmages",
      "Full sublimation prints club crest, colors, and squad numbers directly into the fabric, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Reversible design option lets you split squads for scrimmages without ordering a second set",
      "Reinforced stitching at shoulders, side seams, and collar",
      "Built for high-volume preseason and weekly training orders; volume pricing on jerseys as low as $34.99/each on 101+ pieces",
      "Youth (YS to YXL) through adult (XS to 4XL) with sublimated customization included in the per-piece price"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby practice jerseys built for daily training sessions, not just match day. A lighter fabric of about 150 GSM, reinforced stitching at every stress point, and full sublimation that prints your club crest, colors, and squad numbers directly into the fabric. Each jersey is tailored to order with reversible options available for splitting squads during scrimmages. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-practice-jerseys",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 36.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 36.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 175,
    "name": "Custom Rugby Standard Uniforms",
    "slug": "custom-rugby-standard-uniforms",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 83.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029864/hamlosports/products/rugby/custom-rugby-standard-uniforms.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-standard-uniforms/",
    "rating": 4.9,
    "reviews": 38,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Complete jersey + shorts set designed as one coordinated kit, matching colors, graphics, and branding across both pieces at one set price",
      "Reinforced double-stitched seams on the jersey and shorts",
      "Full sublimation locks club crest, player names, numbers, and sponsor logos into the fabric, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Moisture-wicking polyester pulls sweat away through a full match and long tournament days",
      "Youth through adult sizing (YS to 4XL) with zero oversize upcharges, and custom sizing at no extra charge",
      "No minimum order quantity required and zero hidden setup costs; volume pricing as low as $67.99/set on 101+ sets, including design, sublimated customization, production, and delivery"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby standard uniforms built for the demands of full-contact play. Every set includes a matching jersey and shorts designed as one coordinated kit with reinforced double-stitched seams. Full sublimation prints your club colors, crest, names, and numbers directly into the fabric, so there is no print layer to crack or peel. The jersey and shorts are made in the same dye batch, so the colors match across both pieces. Sublimated names, numbers, crests and sponsor marks are included in the per-uniform price. No minimum orders. Free design mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-standard-uniforms",
    "tierPrices": {
      "tier1": 83.99,
      "tier2": 77.99,
      "tier3": 71.99,
      "tier4": 67.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 83.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 77.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 71.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 67.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 176,
    "name": "Custom Rugby V-neck Uniforms",
    "slug": "custom-rugby-v-neck-uniforms",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 85.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029866/hamlosports/products/rugby/custom-rugby-v-neck-uniforms.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-v-neck-uniforms/",
    "rating": 4.9,
    "reviews": 39,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Complete jersey and shorts set with coordinated sublimated design for a unified squad look",
      "Reinforced double-stitched seams on the jersey and shorts",
      "Four decoration methods: full sublimation across jersey and shorts, embroidery for the club crest, tackle twill for numbers, and screen printing for sponsors, color-matched across the kit",
      "Moisture-wicking fabric pulls sweat away through a full match",
      "Youth through adult sizing (YS to 4XL) with zero oversize upcharges; outfit your entire club from minis to first XV, volume pricing as low as $69.99/set on 101+ sets"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby v-neck uniforms built for match-day contact. The v-neck collar gives players a clean, modern neckline. Every set includes a fully sublimated jersey and matching shorts in moisture-wicking polyester with reinforced double-stitched seams. The V-neck jersey and matching shorts are made in the same dye batch, so the colors match across both pieces. Sublimated names, numbers, crests and sponsor marks are included in the per-uniform price. No minimum orders. Free design mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-v-neck-uniforms",
    "tierPrices": {
      "tier1": 85.99,
      "tier2": 80.99,
      "tier3": 74.99,
      "tier4": 69.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 85.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 80.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 74.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 69.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 177,
    "name": "Custom Rugby Classic Shorts",
    "slug": "custom-rugby-classic-shorts",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "210 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029862/hamlosports/products/rugby/custom-rugby-classic-shorts.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-classic-shorts/",
    "rating": 4.9,
    "reviews": 40,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Heavyweight durable fabric built for match-day scrums, rucks, and tackles, not lightweight training material",
      "Three decoration methods: full sublimation for club colors and panels, embroidery for the club crest, and screen printing for sponsors (no tackle twill on shorts)",
      "Elastic waistband with internal drawstring",
      "Reinforced double-stitched seams at inseam, outseam, and waistband junction",
      "Standalone match bottoms to pair with any jersey or replace worn shorts mid-season; volume pricing as low as $34.99/each on 101+ pieces",
      "Youth (YS to YXL) through adult (XS to 4XL) with sublimated customization included in the per-piece price"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom rugby classic shorts designed for match-day contact, not weekend training. Every seam is reinforced and double-stitched. Each pair has an elastic waistband with an internal drawstring. Every pair is sublimated with your club colors, crest, and sponsor logos, printed into the fabric, not on top of it. These are match-day shorts, not lightweight training kit. The shell weighs about 210 GSM, and the design is sublimated into the fabric, with no print layer to crack or peel. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-classic-shorts",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 36.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 36.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "210 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 178,
    "name": "Custom Rugby Striped Band Shorts",
    "slug": "custom-rugby-striped-band-shorts",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029864/hamlosports/products/rugby/custom-rugby-striped-band-shorts.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-striped-band-shorts/",
    "rating": 4.9,
    "reviews": 41,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Distinctive striped side bands in your club colors, the visual identity detail that makes your kit unmistakable from kickoff to the final whistle",
      "Reinforced double-stitched seams at the inseam, outseam, and waistband",
      "Elastic waistband with drawstring",
      "Three decoration methods: full sublimation for the body and stripe bands, embroidery for the club crest, and screen printing for sponsors (no tackle twill on shorts)",
      "Short above-the-knee cut, roughly a 5 to 7 inch inseam by size, with the leg length adjustable at no extra charge during design",
      "Youth (YS to YXL) through adult (XS to 4XL) with every player on the roster sized and priced the same, no upcharge on any size",
      "No minimum order quantity required; volume pricing on pairs as low as $32.99/each on 101+ pieces, the per-pair price covering design, sublimated decoration, production, and delivery"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom rugby striped band shorts designed for match-day competition, distinctive striped side bands in your club colors, reinforced double-stitched seams, elastic waistband with drawstring, and full sublimation with your team logo and graphics included in the base unit rate. The striped side bands are sublimated into the woven shell — not stitched on. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-striped-band-shorts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 34.99,
      "tier4": 32.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 32.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 179,
    "name": "Custom Rugby Two Tone Shorts",
    "slug": "custom-rugby-two-tone-shorts",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029865/hamlosports/products/rugby/custom-rugby-two-tone-shorts.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-two-tone-shorts/",
    "rating": 4.9,
    "reviews": 42,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Contrasting side panels create a two-tone design that visually ties your shorts to hooped, quartered, or striped jersey patterns",
      "Three decoration methods: full sublimation for the two-tone body and panels, embroidery for the club crest, and screen printing for sponsors (no tackle twill on shorts)",
      "Durable multi-panel construction with reinforced stitching at every seam junction built for match-day scrums and tackles",
      "Elastic waistband with internal drawstring keeps shorts locked through contact without restricting movement at the hips",
      "Standalone match bottoms to pair with any jersey in the range or replace worn shorts; volume pricing as low as $26.99/each on 101+ pieces",
      "Youth (YS to YXL) through adult (XS to 4XL) with sublimated customization included in the per-piece price"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby two-tone shorts with contrasting side panels. The two-tone construction pairs with hooped, quartered, or striped jerseys far better than a plain solid short. Each pair is tailored to order with your club colors, crest, and sponsors sublimated directly into the fabric. The contrasting panels are sublimated into the woven shell — not stitched on as separate fabric. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-two-tone-shorts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 180,
    "name": "Custom Rugby Training Shorts",
    "slug": "custom-rugby-training-shorts",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029865/hamlosports/products/rugby/custom-rugby-training-shorts.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-training-shorts/",
    "rating": 4.9,
    "reviews": 43,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Lightweight moisture-wicking polyester pulls sweat away during back-to-back conditioning sets and contact drills",
      "Elastic waistband with internal drawstring",
      "Side pockets built in as standard for training days and warmups",
      "Two decoration methods — full sublimation fuses team colors and panels into the fabric, and screen printing lays down a bold logo",
      "Youth (YS to YXL) through adult (XS to 4XL) at the same per-piece price with no size upcharge",
      "No minimum order quantity required; volume pricing on pairs as low as $26.99/each on 101+ pieces, covering design, sublimated customization, production, and delivery"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby training shorts built for practice days, conditioning blocks, contact drills, and pre-season grind. Lightweight moisture-wicking fabric, elastic waistband with drawstring, and side pockets designed for real training scenarios. Sublimated team colors, logo, and player numbers included in the base unit rate. This is the off-pitch short — lighter than the woven match shorts, with side pockets for the weight room, conditioning, and warmups. For the contact short worn in matches, see the classic or two-tone rugby shorts. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-training-shorts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 181,
    "name": "Custom Rugby Compression Shorts",
    "slug": "custom-rugby-compression-shorts",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029862/hamlosports/products/rugby/custom-rugby-compression-shorts.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-compression-shorts/",
    "rating": 4.9,
    "reviews": 44,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "4-way stretch polyester-spandex delivers full range of motion so the base layer never restricts movement through contact and footwork",
      "Reinforced double-stitched seams",
      "Moisture-wicking fabric pulls sweat away and keeps players dry from kickoff through final whistle",
      "Two decoration methods: full sublimation dye-fuses team colors and panels into the stretch knit, and screen printing adds a logo. Tackle twill and embroidery are not used",
      "Youth (YS to YXL) through adult (XS to 4XL) at the same per-piece price with no size upcharge",
      "No minimum order quantity required; volume pricing on pairs as low as $32.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby compression shorts engineered for contact sport, 4-way stretch fabric that moves with every tackle, reinforced double-stitched seams, and a snug compression fit through scrums, sprints, and breakdowns. Made to order in your team colors and logo so the squad suits up as a unit right down to the base layer — not generic black shorts under a custom jersey. The colorway is sublimated into the stretch knit, so there is no print layer to crack or peel. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-compression-shorts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 34.99,
      "tier4": 32.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 32.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 182,
    "name": "Custom Rugby Full-zip Hoodies",
    "slug": "custom-rugby-full-zip-hoodies",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029862/hamlosports/products/rugby/custom-rugby-full-zip-hoodies.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-full-zip-hoodies/",
    "rating": 4.9,
    "reviews": 45,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full front zipper opens completely over jerseys and gear, on and off without disturbing layers underneath",
      "Soft fleece interior traps warmth on cold sidelines, early-morning training, and overnight tournament travel",
      "Four decoration methods: full sublimation for the club colorway, embroidery for the crest, tackle twill for names and numbers, and screen printing for sponsors, all on the same fleece",
      "Adjustable drawcord hood and front pockets for sideline warmth between substitutions and during halftime",
      "Standalone sideline piece for players, coaches, and staff in one consistent design; volume pricing as low as $39.99/each on 101+ pieces",
      "Youth (YS to YXL) through adult (XS to 4XL) with sublimated customization included in the per-piece price"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby full-zip hoodies that open completely over jerseys and gear without the over-the-head struggle of a pullover. Soft fleece interior, full zipper, drawstring hood, and front pockets keep players, coaches, and staff warm on cold sidelines and travel days, every hoodie made to order with your club colors and graphics sublimated directly into the fabric. The club crest can be embroidered. Outfit players, coaches, and staff in one consistent sideline look. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-full-zip-hoodies",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 183,
    "name": "Custom Rugby Pullover Hoodies",
    "slug": "custom-rugby-pullover-hoodies",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029863/hamlosports/products/rugby/custom-rugby-pullover-hoodies.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-pullover-hoodies/",
    "rating": 4.9,
    "reviews": 46,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Zipperless pullover design creates the largest uninterrupted front panel for club crests, sponsor logos, and full-chest sublimation",
      "Soft fleece interior traps warmth on cold sidelines, early-morning training, and overnight tournament travel",
      "Four decoration methods: full sublimation for the club colorway, embroidery for the crest, tackle twill for names and numbers, and screen printing for sponsors, all on the same fleece",
      "Front kangaroo pocket and adjustable drawcord hood for hands-free warmth between substitutions and during halftime",
      "Team lifestyle piece players, coaches, and supporters keep wearing off the field; volume pricing as low as $38.99/each on 101+ pieces",
      "Youth (YS to YXL) through adult (XS to 4XL) with sublimated customization included in the per-piece price"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby pullover hoodies with a clean zipperless front that gives your crest, sponsors, and designs the largest uninterrupted surface of any hoodie style. Soft fleece interior, kangaroo pocket, and drawstring hood keep players warm on cold sidelines, travel days, and post-match, every hoodie made to order with your club colors sublimated directly into the fabric. The zipperless front is the cleanest canvas in the sideline range. No zipper splits the chest, so a full sublimated club design or large crest runs uninterrupted. Made from the same fleece as the full-zip; pick the pullover for the cleaner front. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-pullover-hoodies",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 184,
    "name": "Custom Rugby Quarter-zipper Pullovers",
    "slug": "custom-rugby-quarter-zipper-pullovers",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029864/hamlosports/products/rugby/custom-rugby-quarter-zipper-pullovers.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-quarter-zipper-pullovers/",
    "rating": 4.9,
    "reviews": 47,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Sublimation, embroidery, and screen printing — sublimated logos, names, and numbers bond into the knit with molecularly infused graphics that will never crack, peel, or fade, plus an embroidered chest crest and screen-printed sponsor marks",
      "Lightweight 4-way stretch poly performance knit moves with players from the first warmup rep to the final whistle without restricting or bunching",
      "Moisture-wicking performance fabric",
      "Quarter-zip collar with a clean club silhouette worn by competitive rugby clubs from college to national competition",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimums with volume pricing as low as $34.99/each on 101+ pullovers",
      "The per-piece price covers sublimated team colors, sponsor logos, player names, numbers, and design assistance"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$34.99/each on 101+ pullovers The per-piece price covers sublimated team colors, sponsor logos, player names, numbers, and design assistance.",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-quarter-zipper-pullovers",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 185,
    "name": "Custom Rugby Rain Jackets",
    "slug": "custom-rugby-rain-jackets",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029864/hamlosports/products/rugby/custom-rugby-rain-jackets.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-rain-jackets/",
    "rating": 4.9,
    "reviews": 48,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Water-resistant, wind-resistant polyester shell for cold, wet pitches",
      "Sublimation, embroidery, and screen printing — sublimated team colors edge to edge, an embroidered chest crest, and screen-printed sponsor marks",
      "Full zip front with adjustable hood designed for fast layering over jerseys before and after the match",
      "Youth (YS to YXL) through adult (XS to 4XL), whole squad sizing in one order, no upcharge on any size",
      "No minimums with volume pricing as low as $34.99/each on 101+ jackets",
      "The per-piece price covers sublimated team colors, sponsor logos, player names, and design assistance"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby rain jackets built for wet match days, cold sidelines, and long tour travel. Water-resistant shell, packable build, full-zip closure, adjustable hood, and complete custom branding in your team colors from hood to hem. The per-jacket price covers design, sublimated player names and logos, and production. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-rain-jackets",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 186,
    "name": "Custom Rugby Track Jackets",
    "slug": "custom-rugby-track-jackets",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029865/hamlosports/products/rugby/custom-rugby-track-jackets.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-track-jackets/",
    "rating": 4.9,
    "reviews": 49,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full-zip athletic cut with elastic cuffs and waistband, structured for team travel, flexible for warmup, and professional for any club function",
      "Full sublimation bonds team colors, logos, names, and numbers directly into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight shell for outdoor warmups and travel days",
      "Side pockets built in as standard, practical for sideline use",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges across the full squad",
      "No minimums with volume pricing as low as $36.99/each on 101+ jackets",
      "All four decoration methods available — sublimation, tackle twill, embroidery, and screen printing; tackle twill is $5 per name and $5 per number, and other methods are priced on your quote to the per-jacket price"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby track jackets that represent your club from the moment your team steps off the bus. Full-zip athletic cut, lightweight shell, elastic cuffs and waistband, and side pockets built for matchday use. This is the jacket your players are seen in, so it should look exactly like your club. Sublimated team colors, logo, player names, and numbers included in the per-jacket price. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-track-jackets",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 187,
    "name": "Custom Rugby Track Pants",
    "slug": "custom-rugby-track-pants",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029865/hamlosports/products/rugby/custom-rugby-track-pants.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-track-pants/",
    "rating": 4.9,
    "reviews": 50,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full sublimation from waistband to hem, every inch customized, graphics fused into the fabric, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight moisture wicking 100% polyester, breathable enough for pre match warm ups and comfortable on long travel days",
      "Elastic waistband with adjustable drawstring",
      "Dual side pockets provide functional storage for gear day essentials without adding unwanted bulk to the silhouette",
      "Side stripe customization lets you add team stripes, color blocks, or sponsor panels in any combination",
      "Youth (YS to YXL) through adult (XS to 4XL) at no size upcharge, one order covers your full roster regardless of age group or size",
      "No minimums with volume pricing as low as $36.99/each on 101+ pants",
      "Designed alongside your jersey and track jacket in one free mockup"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby track pants built for warmups, travel days, and sideline walk-ins where your team shows up as one. Fully sublimated from waistband to cuff with your colors, logo, and side stripes locked into the fabric. The per-piece price covers the sublimated design. Ordered with your jerseys and track jackets, the pants are made in the same dye batch, so the colors match. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-track-pants",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 188,
    "name": "Custom Rugby Jogger Pants",
    "slug": "custom-rugby-jogger-pants",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029862/hamlosports/products/rugby/custom-rugby-jogger-pants.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-jogger-pants/",
    "rating": 4.9,
    "reviews": 51,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Tapered fit with elastic ankle cuffs, from the warmup tunnel to the team bus",
      "Soft fleece interior delivers warmth for cold sidelines and long travel days without adding bulk or restricting movement",
      "Full sublimation locks team colors, logos, player names, and sponsor graphics into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Secure zippered pockets keep phone, keys, and valuables in place through every away trip",
      "Youth (YS to YXL) through adult (XS to 4XL) at the same price at every size with no upcharge",
      "No minimums with volume pricing as low as $36.99/each on 101+ joggers",
      "The per-piece price covers design, sublimated names, numbers and logos, production, and free shipping anywhere in the USA"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby jogger pants built for travel days, warmup laps, and post-match walks, tapered athletic fit, soft fleece interior, secure zippered pockets, and your team's full identity printed directly into the fabric. Built for club teams, college programs, and youth squads who take the whole kit seriously, not just the jersey. Same per-pair price from Youth YS through Adult 4XL, so the whole squad — players, coaches, supporters — wears one consistent jogger. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-jogger-pants",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 189,
    "name": "Custom Rugby Short Sleeve T-shirts",
    "slug": "custom-rugby-short-sleeve-t-shirts",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 32.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029864/hamlosports/products/rugby/custom-rugby-short-sleeve-t-shirts.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-short-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 52,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Soft knit, comfortable enough for training and sharp enough to represent your club anywhere",
      "Full sublimation, embroidery, and screen printing available so you can pick the method that suits your design",
      "Sublimated team colors, logo, player names, and numbers included in the per-piece price",
      "Relaxed crew neck fit ideal for warmups, travel days, tours, and post match wear without restricting movement",
      "Youth (YS to YXL) through adult (XS to 4XL), size the whole club with zero oversize upcharges",
      "No minimums with volume pricing as low as $24.99/each on 101+ shirts",
      "Free 12 hour professional mockup lets you see your full design before a single shirt goes into production",
      "The per-shirt price covers sublimated team colors, sponsor logos, player names, and design assistance"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby short sleeve t-shirts built for club life on and off the pitch. Soft knit fabric, relaxed crew neck fit, and full customization with your sublimated team colors, logo, player names, and numbers in the per-piece price. Perfect for training days, team tours, post-match socials, and fan gear that actually looks like it belongs together. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-short-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 32.99,
      "tier2": 29.99,
      "tier3": 26.99,
      "tier4": 24.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 32.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 26.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 24.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 190,
    "name": "Custom Rugby Long Sleeve T-shirts",
    "slug": "custom-rugby-long-sleeve-t-shirts",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029862/hamlosports/products/rugby/custom-rugby-long-sleeve-t-shirts.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-long-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 53,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Crew neck long sleeve construction with a relaxed athletic fit built for layering under training gear or wearing on its own",
      "Full color direct to fabric sublimation makes designs part of the shirt, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Embroidery delivers raised, stitched logos, chest crests, and sleeve patches",
      "Comfortable knit fabric, breathable and warm, the right weight for cold weather training, travel days, and pre match warmups",
      "Youth (YS to YXL) through adult (XS to 4XL), every size in the same order, same price, no upcharge for any size",
      "No minimums with volume pricing as low as $26.99/each on 101+ shirts",
      "Sublimated player names, numbers, and logos included in your per-shirt price"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom rugby long sleeve t-shirts built for cold-morning practice, long bus rides to away matches, and casual team wear between seasons. Crew neck construction, a comfortable soft knit, and full customization with your sublimated colors, logo, player names, and numbers all at the same per-piece price. Production only starts after you approve the final design — no surprises at delivery. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-long-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 191,
    "name": "Rugby Polo Shirts",
    "slug": "custom-rugby-polo-shirts",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029863/hamlosports/products/rugby/custom-rugby-polo-shirts.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-polo-shirts/",
    "rating": 4.9,
    "reviews": 54,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Pique knit with a polo collar and three-button placket, the standard club polo for rugby program identity and off-pitch wear",
      "Full-color sublimation dye-fuses team colors, color-blocking, and gradient graphics into the pique, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Embroidery for the chest crest, sleeve sponsor patches, and program badges, the standard club-polo dimensional finish (no tackle twill)",
      "Side-vent hem and athletic-fit cut sits clean tucked into trousers for post-match functions or worn loose for sideline and travel days",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges — the per-piece price covers the full club roster from youth league to varsity",
      "No minimum order quantity required; volume pricing on polos as low as $29.99/each on 101+ pieces, zero hidden setup costs, no per-color charge on sublimated designs",
      "Free professional design mockup within 12 hours with unlimited revisions before production — free shipping anywhere in the USA"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom Rugby Polo Shirts Crafted for competitive play, our custom rugby polo shirts built for sideline sessions, team travel days, post-match functions, and club events. Structured pique fabric, a polo collar, and a three-button placket carry your team colors, logo, and identity in one clean, polished garment. Made to order for clubs and programs at every level. Decorated 3-method on the pique: full sublimation for team colors and color-blocking across the body, embroidery for the chest crest and sleeve sponsors (the standard club-polo finish), and screen printing for bold opaque marks. We don't use tackle twill on the polo. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-polo-shirts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 192,
    "name": "Custom Rugby Duffle Bags",
    "slug": "custom-rugby-duffle-bags",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 89.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029862/hamlosports/products/rugby/custom-rugby-duffle-bags.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-duffle-bags/",
    "rating": 4.9,
    "reviews": 55,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Full-panel sublimation saturates team colors and logo across the entire bag surface, not just an embroidered crest on a generic black body",
      "Spacious main compartment with multiple exterior pockets holds a complete match kit, recovery gear, and accessories without cramming",
      "Separate ventilated boot compartment keeps cleats and muddy boots isolated from clean kit during match days and post-tour travel",
      "600D polyester shell, made for back-of-coach travel",
      "Adjustable padded shoulder strap and dual carry handles for one-shoulder or hand carry, depending on distance and load",
      "Sublimated player names included at no extra charge so every bag is personalized — no mix-up in the locker room or on the road",
      "Decorated 4-method (sublimation + embroidery + screen printing + tackle twill names and numbers at $5 per name and $5 per number)",
      "No minimum order quantity required with volume pricing as low as $74.99/each on 101+ pieces — no setup or design fees"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom rugby duffle bags are built to carry the full match kit from the parking lot to the pitch — spacious enough for jersey, shorts, boots, and recovery gear, on a 600D polyester shell that holds your team colors, logo, player name, and sponsor marks across every panel. Whether a weekend home fixture or a multi-week club tour, this is the bag that travels with your identity intact. HAMLO SPORTS designs every bag with our in-house team and makes it at our own overseas facility, from first design to finished product. The 600D shell takes full sublimation, embroidery, and screen printing, plus tackle twill names and numbers at $5 per name and $5 per number. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-duffle-bags",
    "tierPrices": {
      "tier1": 89.99,
      "tier2": 84.99,
      "tier3": 79.99,
      "tier4": 74.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 89.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 84.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 79.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 74.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 193,
    "name": "Custom Rugby Cinch Bags",
    "slug": "custom-rugby-cinch-bags",
    "categorySlug": "custom-rugby-uniforms",
    "category": "RUGBY",
    "sport": "Rugby",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029861/hamlosports/products/rugby/custom-rugby-cinch-bags.png",
    "canonical": "/custom-rugby-uniforms/custom-rugby-cinch-bags/",
    "rating": 4.9,
    "reviews": 56,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Lightweight polyester drawstring sack",
      "Full-panel sublimation prints team colors, crest, and design into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Dual drawstring cords that double as shoulder straps",
      "Front pocket separate from the main compartment",
      "Sublimated player names included at no extra charge so every bag is personalized — no mix-up from first training to final fixture",
      "Decorated 4-method (sublimation + embroidery + screen printing + tackle twill names and numbers at $5 per name and $5 per number)",
      "One-size sack, with no setup or design fees and volume pricing as low as $19.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom rugby cinch bags are the grab-and-go training-day bag — a lightweight polyester drawstring sack with your team's full color design sublimated across every panel. The right bag for training mornings, school-to-pitch carry, and every youth player who needs kit-ready gear without a heavy carry. HAMLO SPORTS produces every bag at our own overseas facility, with sublimated player names included as standard and no setup or design fees. The poly shell takes full sublimation, embroidery, and screen printing, plus tackle twill names and numbers at $5 per name and $5 per number. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/rugby/custom-rugby-cinch-bags",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 29.99,
      "tier3": 24.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 24.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 194,
    "name": "Custom Soccer Standard Uniforms",
    "slug": "custom-soccer-standard-uniforms",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "160 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029870/hamlosports/products/soccer/custom-soccer-standard-uniforms.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-standard-uniforms/",
    "rating": 4.9,
    "reviews": 57,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Complete jersey and shorts set at one set price, both pieces designed together so your squad steps onto the pitch looking like a program",
      "Full color sublimation prints team colors, club crest, sponsor logos, and gradient patterns into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight moisture-wicking polyester pulls sweat away during 90-minute matches, back-to-back tournament days, and summer training sessions",
      "Athletic performance fit from youth YS through adult 4XL with no size upcharge across the full roster",
      "Sublimated player names, numbers, and sponsor logos included in the per-set price; your quote shows the price for tackle twill, embroidery and screen printing",
      "No minimum order quantity required; volume pricing on sets as low as $69.99/each on 101+ sets, complete jersey + shorts pricing per set",
      "Free professional mockup within 12 hours with unlimited revisions until every detail is right"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer standard uniforms built as a complete kit, matching jersey and shorts designed, sublimated, and priced together at the per-set cost. Sublimated team colors, club crest, sponsor logos, player names, and numbers included. Every uniform is designed by our in-house team and produced entirely direct from our specialized Sialkot, Pakistan manufacturing facility, with no surprise line items. Built on ~160 GSM polyester knit jersey + polyester shorts with a moisture-wicking finish. For the flippable home/away alternative compare against our reversible soccer uniforms, and pair with matching soccer socks and compression shorts for the complete match-day kit. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Before you choose this standard set, see the other cuts in our custom soccer jerseys. After the final whistle, players can change into our custom soccer joggers.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-standard-uniforms",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 72.99,
      "tier4": 69.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 72.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 69.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 195,
    "name": "Custom Soccer Collared Uniforms",
    "slug": "custom-soccer-standard-collared-uniforms",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "160 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029870/hamlosports/products/soccer/custom-soccer-standard-collared-uniforms.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-standard-collared-uniforms/",
    "rating": 4.9,
    "reviews": 58,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Structured placket or full-button collar — the traditional soccer silhouette in your team colors and crest.",
      "Sublimation, tackle twill, embroidery, or screen printing — picked per design element on jersey and shorts.",
      "100% polyester knit, ~160 GSM, with mesh-back ventilation for 90-minute match performance.",
      "Men's athletic, women's tapered, and youth fits all at the per-set price.",
      "Goalkeeper jerseys ship in a contrasting color.",
      "No minimum order quantity required; volume pricing on sets as low as $67.99/each on 101+ sets."
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer collared uniforms for teams that want the structured, traditional silhouette of the world's game — a full-button or placket collar jersey with matching shorts, built around your sublimated team colors, crest, player names, and numbers at the per-set price. Each set is tailored to order with sublimated team colors, crests, and player details included in the per-set price. Home and away kits ordered together are made in the same dye batch; goalkeeper jerseys ship in a contrasting color. Men's athletic, women's tapered, and youth fits are all covered at the same price. Matching bench jackets and training shirts coordinate from the same color palette. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). For other cuts and colors, look at the rest of our custom soccer kits.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-standard-collared-uniforms",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 76.99,
      "tier3": 72.99,
      "tier4": 67.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 76.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 72.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 67.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 196,
    "name": "Custom Soccer V-neck Uniforms",
    "slug": "custom-soccer-v-neck-uniforms",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "160 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029870/hamlosports/products/soccer/custom-soccer-v-neck-uniforms.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-v-neck-uniforms/",
    "rating": 4.9,
    "reviews": 59,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "V neck collar with open chest panel delivers the competitive club silhouette that gives crests and sponsor logos maximum visual impact",
      "Full color sublimation on jersey and shorts offers unlimited colors, gradients, and graphics fused into the fabric, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight moisture wicking polyester keeps players dry through 90 minute matches and back to back tournament days",
      "Youth (YS to YXL) through adult (XS to 4XL) at zero size upcharge; the per-piece price covers the full roster across all fits and age groups",
      "Sublimated names, numbers, and sponsor logos included with no per-placement fees",
      "No minimum order quantity required; volume pricing on sets as low as $69.99/each on 101+ sets, complete v-neck jersey + shorts pricing per set"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom soccer V-neck uniforms for teams that have already decided how they want to look, the clean open neckline, the professional silhouette, and a fully sublimated jersey-and-shorts set built around your team colors, crest, player names, and numbers in the per-set price. Every set is made direct from our specialized Sialkot, Pakistan manufacturing facility, with no hidden charges on your quote. Built on ~160 GSM polyester knit jersey with the deeper v-neck collar opening up the chest panel for maximum crest and sponsor logo visibility, paired with polyester shorts. For the crew-collar standard uniform set compare against our soccer standard uniforms, for the flippable home/away version see our soccer reversible uniforms, and pair with matching soccer socks and compression shorts for the complete match-day kit. Free mockup in 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared). Line up the V-neck set against the other cuts in our custom soccer kits. For a more formal look, compare it with our collared soccer uniform set.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-v-neck-uniforms",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 72.99,
      "tier4": 69.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 72.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 69.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 197,
    "name": "Custom Soccer Reversible Uniforms",
    "slug": "custom-soccer-reversible-uniforms",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 109.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029869/hamlosports/products/soccer/custom-soccer-reversible-uniforms.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-reversible-uniforms/",
    "rating": 4.9,
    "reviews": 60,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Fully sublimated on both sides with two complete designs, not a plain color flip, so your home and away looks are equally sharp",
      "One set price covers both your home and away designs",
      "Lightweight moisture-wicking polyester with a full design on each side",
      "Youth (YS to YXL) through adult (XS to 4XL) at zero size upcharge; the per-piece price covers every fit across the full roster",
      "Sublimated names, numbers, and sponsor logos included on both sides with no per placement fees",
      "No minimum order quantity required; volume pricing on sets as low as $96.99/each on 101+ sets, one order, two complete kits, zero hidden setup costs or design charges"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom soccer reversible uniforms for teams that need home and away covered in one order, a fully sublimated jersey with two complete designs, one on each side, matched with coordinating shorts and built around your team colors, crest, player names, and numbers at the per-set price. Every set is made direct from our specialized Sialkot, Pakistan manufacturing facility, with no hidden charges on your quote. The jersey and the shorts each carry a complete sublimated design on both sides, so one set gives you a home kit and an away kit. Full sublimation is the only decoration method on reversibles. Tackle twill and embroidery aren't offered. For the top alone see our soccer reversible jerseys, or for a single-side game-day kit with tackle twill and embroidery support see the standard soccer uniforms; for a lightweight scrimmage-only marker we also offer soccer warmup bibs. Free mockup shows both sides in 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared). If you want a one-sided game jersey instead, see our custom soccer jerseys.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-reversible-uniforms",
    "tierPrices": {
      "tier1": 109.99,
      "tier2": 104.99,
      "tier3": 99.99,
      "tier4": 96.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 109.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 104.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 99.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 96.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 198,
    "name": "Custom Soccer Round Neck Jerseys",
    "slug": "custom-soccer-round-neck-jerseys",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "160 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029869/hamlosports/products/soccer/custom-soccer-round-neck-jerseys.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-round-neck-jerseys/",
    "rating": 4.9,
    "reviews": 61,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Crew neck collar with a clean structured fit",
      "Direct to fabric sublimation printing offers unlimited colors, with molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight moisture wicking polyester with ventilated mesh panels for full length matches and back to back tournament days",
      "Sublimated team colors, logos, player names, numbers, and sponsor logos included in the per-piece price",
      "Youth (YS to YXL) through adult (XS to 4XL), every size, zero upcharge, same jersey, same quality across the entire roster",
      "No minimum orders. Outfit 1 player or a full club program with the same pricing structure and the same free-remake promise",
      "No minimum order quantity required; volume pricing on jerseys as low as $34.99/each on 101+ pieces, affordable team pricing with zero hidden setup costs, no hidden costs, no design charges"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer round neck jerseys built for club identity, clean crew neckline, athletic cut, and premium moisture-wicking polyester that holds up from first whistle to final minute. Sublimated team colors, logos, player names, and numbers included in the base unit rate, with no setup fees. Every kit is designed by our in-house team and made factory-direct in our Sialkot, Pakistan export manufacturing facility. Built on ~160 GSM polyester knit with a structured crew collar, athletic taper, and ventilated mesh-back panels for full-length match performance. For the deeper-cut warm-weather alternative see our soccer v-neck jerseys, or for the coach/staff button-placket identity layer see our soccer polo style jerseys. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Browse all our custom soccer jerseys before you lock in the round neck style.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-round-neck-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 199,
    "name": "Custom Soccer V-neck Jerseys",
    "slug": "custom-soccer-v-neck-jerseys",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "160 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029870/hamlosports/products/soccer/custom-soccer-v-neck-jerseys.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-v-neck-jerseys/",
    "rating": 4.9,
    "reviews": 62,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Open V neck collar creates a sharper, more athletic look on the pitch than closed collar styles",
      "Direct to fabric sublimation printing offers unlimited colors, with molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight moisture wicking polyester with breathable mesh construction",
      "Clean chest canvas for crests, sponsor logos, and custom graphics, the V neckline keeps your branding front and center without visual clutter",
      "Sublimated team colors, player names, numbers, and logos included in the per-piece price, and your quote shows the price for sponsor patches",
      "Youth (YS to YXL) through adult (XS to 4XL), every size in one order, no upcharge, same quality across the full roster",
      "No minimum order quantity required; volume pricing on jerseys as low as $34.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer V-neck jerseys for teams that want sharper performance and a cleaner look on the pitch. The open V-collar delivers a modern athletic silhouette, and gives your crest, logo, or sponsor placement maximum chest real estate. Sublimated colors, names, and numbers included in the base unit rate. Each jersey runs 100% polyester knit at ~160 GSM with mesh-back ventilation. The open V-collar frames the crest with a sharper athletic silhouette than a closed neckline. Pair with matching soccer shorts for a complete kit, or compare against round-neck jerseys for a more traditional collar profile. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). If you are still choosing a neckline, look through our custom soccer jerseys.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-v-neck-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 200,
    "name": "Custom Soccer Polo Style Jerseys",
    "slug": "custom-soccer-polo-style-jerseys",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "160 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029868/hamlosports/products/soccer/custom-soccer-polo-style-jerseys.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-polo-style-jerseys/",
    "rating": 4.9,
    "reviews": 38,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Structured polo collar with button placket delivers the refined look that separates competitive club programs from the rest of the field",
      "Custom collar stripe and trim detailing places club colors, contrast piping, and crest placement exactly to your specifications",
      "Direct-to-fabric sublimation with unlimited colors embedded into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight moisture-wicking polyester built for match performance so the polo silhouette never sacrifices on-field comfort",
      "Sublimated team colors, logos, player names, and numbers included in the per-piece price, and your quote shows the price for sponsor patches",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges across the full squad",
      "No minimum order quantity required; volume pricing on jerseys as low as $34.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer polo style jerseys for clubs that take their image as seriously as their game. The structured polo collar, button placket, and tailored athletic cut set this jersey apart from standard matchday kits on the pitch, in warmups, and every time your team walks into a venue together. Sublimated colors, logos, collar stripe details, player names, and numbers included in the base unit rate. Each jersey runs 100% polyester knit at ~160 GSM with a mesh-back ventilation panel and a structured polo collar with button placket. For the v-neck and round-neck alternatives compare against our v-neck soccer jerseys or round-neck soccer jerseys on the same fabric base. Coach and staff can wear the polo cut off the pitch with team chinos for tournament check-ins. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). If a polo collar isn't the look you want, compare the styles in our custom soccer jerseys. If you like the polo look for the whole kit, see our collared soccer uniforms.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-polo-style-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 201,
    "name": "Custom Soccer Reversible Jerseys",
    "slug": "custom-soccer-reversible-jerseys",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029869/hamlosports/products/soccer/custom-soccer-reversible-jerseys.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-reversible-jerseys/",
    "rating": 4.9,
    "reviews": 39,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Two fully sublimated designs in one jersey, not just two colors, two complete custom kits with your team branding on both sides",
      "Full customization on both sides with team colors, logos, player names, and numbers included on each side in the base price",
      "Lightweight moisture-wicking polyester with a full design on each side",
      "Built for game day and training, flip for scrimmages to avoid color conflicts without ordering a second set of practice pinnies",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges across the full roster",
      "No minimum order quantity required; volume pricing on jerseys as low as $69.99/each on 101+ pieces, one order, two complete kits, zero hidden setup costs or design charges"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer reversible jerseys that solve two uniform problems in one order, a fully designed home side and a fully designed away side, both sublimated with your team colors, logos, and player numbers. Flip it for scrimmages, away matches, or color conflicts. One jersey, every situation covered, one price for both sides. Every reversible jersey is built and printed direct from our specialized Sialkot, Pakistan manufacturing facility. Each side carries its own complete sublimated design, so one jersey gives you a home kit and an away kit. Full sublimation is the only decoration method used on reversibles. Both sides are dye-fused, so tackle twill and embroidery aren't offered on this product. For the matching set with two-side shorts compare our soccer reversible uniforms, or for a single-side game-day kit see the standard soccer uniforms; for a lightweight scrimmage-over-kit alternative we also offer soccer warmup bibs. No minimum order. Free professional mockup for both sides within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared). Use the reversibles for scrimmages and pick game day kits from our custom soccer jerseys.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-reversible-jerseys",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 72.99,
      "tier4": 69.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 72.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 69.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 202,
    "name": "Custom Soccer Goalkeeper Jerseys",
    "slug": "custom-soccer-goalkeeper-jerseys",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029867/hamlosports/products/soccer/custom-soccer-goalkeeper-jerseys.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-goalkeeper-jerseys/",
    "rating": 4.9,
    "reviews": 40,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Choose long sleeves or short sleeves for your keeper, at the same per-player price",
      "Full body sublimation creates bold high-contrast designs that fulfill the mandatory visual distinction requirement, with molecularly infused graphics that will never crack, peel, or fade",
      "Kit coordination included so goalkeeper colors contrast with your outfield kit without clashing, keeping the full team looking unified",
      "Team colors, player name, number, crest and sponsor marks sublimated and included in the price, with zero hidden setup costs. Tackle twill names or numbers are $5 each per jersey.",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on jerseys as low as $39.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer goalkeeper jerseys that set your keeper apart from both teams and the referee. Each goalie jersey is sublimated in a high-contrast color you choose, with your crest, player name and number included in the price. Law 4 of the Laws of the Game says goalkeepers must wear colors that set them apart from the other players and the match officials, so pick a colorway that contrasts with your outfield uniform set, and add matching padded shorts. Prefer sewn tackle twill? It's $5 per name and $5 per number, per jersey. Every jersey is designed by our in-house team and made factory-direct in our Sialkot, Pakistan export manufacturing facility. No minimum order: $49.99 each for 1 to 24, down to $39.99 for 101 or more. Free mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared). Order the keeper's jersey with the field players' kits from our custom team soccer jerseys.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-goalkeeper-jerseys",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 203,
    "name": "Custom Soccer Shorts",
    "slug": "custom-soccer-shorts",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "150 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029869/hamlosports/products/soccer/custom-soccer-shorts.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-shorts/",
    "rating": 4.9,
    "reviews": 41,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full body sublimation embeds team colors, side panel designs, logos, and player numbers into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Designed with your jersey in one free mockup: your colors, patterns and branding carried from the waist down",
      "Lightweight moisture-wicking polyester moves with the player through 90 minutes without bunching, clinging, or holding sweat against the body",
      "Elastic waistband with internal drawstring",
      "Custom inseam length at no extra charge, standard soccer cut or adjusted to your team's preference for both youth and adult players",
      "Youth (YS to YXL) through adult (XS to 4XL) in one order with zero oversize upcharges across the full roster",
      "No minimum order quantity required; volume pricing on pairs as low as $34.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer shorts that finish the job the jersey starts. Team colors, side panel designs, logos, and optional player numbers printed directly into the fabric in the per-piece price. Order them on their own or with your jerseys. Each pair runs 100% polyester shell at ~150 GSM with a moisture-wicking finish and pinpoint mesh ventilation that breathes through 90 minutes plus stoppage. The lightweight build moves with sprints and slide tackles without bunching at the seam, and the elastic waistband with internal drawstring keeps the silhouette locked through every set piece. Pair with matching round-neck jerseys for a complete kit, or wear over compression shorts. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Pick the jerseys to go with these shorts from our soccer uniforms.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-shorts",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 36.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 36.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 204,
    "name": "Custom Soccer Goalkeeper Padded Shorts",
    "slug": "custom-soccer-goalkeep-padded-shorts",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029867/hamlosports/products/soccer/custom-soccer-goalkeep-padded-shorts.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-goalkeep-padded-shorts/",
    "rating": 4.9,
    "reviews": 42,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Strategically placed hip and thigh padding mapped to exact contact zones flexes with movement on lateral dives and sliding saves rather than resisting it",
      "Full body sublimation embeds team colors, logos, and keeper number into the fabric and padding panels with nothing to crack or peel",
      "Designed with your goalkeeper jersey in one free mockup, so you approve both pieces together",
      "Lightweight moisture-wicking polyester with double layer build breathes through full match intensity without adding bulk or restricting lateral range",
      "Elastic waistband with internal drawstring",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on pairs as low as $38.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$38.99/each on 101+ pieces.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-goalkeep-padded-shorts",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 205,
    "name": "Custom Soccer Socks",
    "slug": "custom-soccer-socks",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 22.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029869/hamlosports/products/soccer/custom-soccer-socks.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-socks/",
    "rating": 4.9,
    "reviews": 43,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Knee-high length with shin guard coverage keeps socks in place above the shin pad through the entire match",
      "Cushioned sole with built-in arch support absorbs impact on hard turf and grass while keeping feet stable through 90 minutes",
      "Full sublimation with custom stripe patterns offers unlimited color combinations and team logo placement to coordinate with your full kit",
      "Moisture-wicking fabric pulls sweat away from the foot from warmup through final whistle",
      "Ankle, crew, and knee-high height options available in the same team order",
      "No minimum order quantity required; volume pricing on pairs as low as $14.99/each on 101+ pieces, team colors, sublimated logo, and custom stripe design all included at no extra cost"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer socks in your exact team colors and stripe pattern, knee-high to cover shin guards, with a cushioned sole and arch support. Socks are sublimated in the same process as your jerseys and shorts. Order them together and your whole order is made in the same dye batch, so the colors match. Your team colors, stripes and logo are included in the price, with no setup fees. Every pair is designed by our in-house team and made factory-direct in our Sialkot, Pakistan export manufacturing facility. Pair them with a soccer uniform set and compression shorts for match day, or training shorts for practice. No minimum order: $22.99 a pair for 1 to 24, down to $14.99 for 101 or more. Free mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared). Add socks to the quote when you pick your soccer uniforms.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-socks",
    "tierPrices": {
      "tier1": 22.99,
      "tier2": 19.99,
      "tier3": 18.99,
      "tier4": 14.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 22.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 19.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 18.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 14.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 206,
    "name": "Custom Soccer Warmup Bibs",
    "slug": "custom-soccer-warmup-bib",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029871/hamlosports/products/soccer/custom-soccer-warmup-bib.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-warmup-bib/",
    "rating": 4.9,
    "reviews": 44,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Reversible two-color option: flip the pinnie to switch teams mid-drill, both sides sublimated in your colors.",
      "Sublimation puts logos, numbers and patterns into the fabric, so they don't crack or peel.",
      "Lightweight, breathable mesh that stays comfortable through back-to-back training sessions.",
      "Full size range included from Youth S through XL and Adult XS through 4XL, no upcharge on any size",
      "No minimum order quantity required. Per pinnie: $39.99 (1 to 24), $36.99 (25 to 50), $32.99 (51 to 100), $29.99 (101+). Sublimated crest, numbers and colors included, zero hidden setup costs.",
      "No minimum order quantity required. Order 1 pinnie for a tryout or a full set for your club; the price per pinnie drops as the quantity grows.",
      "Free design mockup within 12 hours, with unlimited changes. Nothing is made until you approve it."
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "it.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-warmup-bib",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 207,
    "name": "Custom Soccer Full Zip Hoodie",
    "slug": "custom-soccer-full-zip-hoodie",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029867/hamlosports/products/soccer/custom-soccer-full-zip-hoodie.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-full-zip-hoodie/",
    "rating": 4.9,
    "reviews": 45,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full zip front closure goes on and off without disrupting warmup gear underneath with adjustable ventilation between sets",
      "Full body sublimation embeds team colors, logos, names, and numbers into the outer fabric with nothing to crack or peel",
      "Soft fleece-lined interior retains warmth during cold weather warmups and sideline sessions without adding bulk when the zip comes off at kickoff",
      "Adjustable drawstring hood with custom color cording coordinates hood trim, zipper pull, and pocket detailing to your team's design system",
      "Front pockets keep hands warm during sideline stretches",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges across the full squad",
      "No minimum order quantity required; volume pricing on hoodies as low as $39.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "s Crafted for competitive play, our custom soccer full zip hoodies built for every hour around the match, not just the 90 minutes inside it. Players wear the jersey once the whistle blows. They wear the hoodie through warmups, halftime, bench time, the walk back to the bus, and every travel day in between. It carries your team's colors, logos, and identity when the jersey is still in the bag. Each hoodie runs performance fleece with a soft brushed interior, ribbed cuffs and hem, and a full-length zipper with chin garage that strips off in seconds when the whistle blows. Compare against our pullover hoodies for a closed-front silhouette, or pair with matching crewneck sweatshirts for the no-hood off-pitch identity piece. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Quote the full zip hoodie together with your custom soccer uniforms in one request.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-full-zip-hoodie",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 208,
    "name": "Custom Soccer Pullover Hoodies",
    "slug": "custom-soccer-pullover-hoodies",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029868/hamlosports/products/soccer/custom-soccer-pullover-hoodies.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-pullover-hoodies/",
    "rating": 4.9,
    "reviews": 46,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Unbroken front canvas with no zipper splitting the design gives crests, wordmarks, and graphics the full chest surface to run edge to edge as one complete piece",
      "Full body sublimation embeds team colors, logos, names, and numbers into the fabric with nothing to crack or peel",
      "Soft fleece-lined interior with no zipper gap means warmer coverage during cold weather warmups, sideline sessions, and early morning tournament days",
      "Kangaroo front pocket keeps hands warm during stretches, with pocket trim in your team colors",
      "Adjustable drawstring hood with cording and trim customized in team colors so the full garment reads as one cohesive design top to bottom",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges across the full squad",
      "No minimum order quantity required; volume pricing on hoodies as low as $38.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer pullover hoodies built for teams who want their design to land as one complete piece. No zipper running down the center means the full front is yours, crest placement, graphic wraps, wordmarks, and color blocks all print uninterrupted from shoulder to hem. Each hoodie runs performance fleece with a soft brushed interior, ribbed cuffs and hem, and an unbroken front panel that gives the team design the full chest surface to land as one complete piece. Compare against our full-zip hoodies for an open-front silhouette with adjustable ventilation, or pair with matching crewneck sweatshirts for the no-hood off-pitch identity piece. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Hoodies are for the cold sideline, and for the players' kit you can see our soccer uniforms for teams.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-pullover-hoodies",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 209,
    "name": "Custom Soccer Bench Jackets",
    "slug": "custom-soccer-bench-jackets",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 54.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029866/hamlosports/products/soccer/custom-soccer-bench-jackets.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-bench-jackets/",
    "rating": 4.9,
    "reviews": 47,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Insulated, Quilted Lining Keeps Substitutes and Staff Warm Through a Long, Cold Wait on the Bench",
      "Full-Body Sublimation on the Outer Shell Embeds Team Colors, Crests, Sponsor Logos, and Numbers",
      "Full-Zip Front with Stand-Up Collar for Easy On and Off the Moment a Number Is Called — Collar Seals Against Sideline Wind Chill",
      "Youth (YS to YXL) Through Adult (XS to 4XL) — Full Squad and Coaching Staff in One Order, No Upcharge on Any Size",
      "No minimum order quantity required, Volume Pricing on Jackets as Low as $46.99/Each on 101+ Pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom Soccer Bench Jackets Made for the Player Who Isn't Moving Yet. Substitutes Sit in Cold Weather for 60 Minutes and Get 90 Seconds to Be Ready. Decorated with Sublimation, Embroidery, or Screen Printing in Your Team's Colors, Crests, and Numbers. Each Jacket is tailored to order with Sublimated Team Colors, Crests, and Player Details Included in the Per-Jacket Price. Designed by Our In-House Team, Built and Printed factory-direct in our Sialkot, Pakistan export manufacturing facility, from First Sketch to Final Stitch. No Minimum Order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Bench jackets are for the sideline, and our club soccer uniforms are for the field.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-bench-jackets",
    "tierPrices": {
      "tier1": 54.99,
      "tier2": 52.99,
      "tier3": 49.99,
      "tier4": 46.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 54.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 52.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 49.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 46.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 210,
    "name": "Custom Soccer Lightweight Rain Jackets",
    "slug": "custom-soccer-lightweight-rain-jackets",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029868/hamlosports/products/soccer/custom-soccer-lightweight-rain-jackets.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-lightweight-rain-jackets/",
    "rating": 4.9,
    "reviews": 48,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Lightweight water-resistant shell repels rain and cuts wind in a single packable layer",
      "Full body sublimation across the entire shell embeds team colors, crests, sponsor logos, and player details, with molecularly infused graphics that will never crack, peel, or fade",
      "Adjustable drawstring hood closes fully in driving rain and rolls back cleanly in dry conditions without disrupting the jacket's silhouette",
      "Full zip front closure offers easy on and off for players rotating off the pitch and coaches moving the length of the sideline",
      "Side pockets with pocket panels in the jacket's team colors",
      "Youth (YS to YXL) through adult (XS to 4XL), players, coaching staff, and managers in one order, no upcharge on any size",
      "No minimum order quantity required; volume pricing on jackets as low as $34.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer lightweight rain jackets built for programs that don't let weather change the plan. Water-resistant shell, adjustable hood, and full sublimation with your team colors, crests, and player details in the per-piece price. The same layer that sheds rain also cuts wind on cold February mornings. Each jacket is a 100% polyester, water-resistant shell. The whole jacket folds down and fits inside a kit bag for travel days. On the coldest sidelines, layer a bench jacket over the rain shell; for warmer conditions where only wind needs cutting, compare against our track jackets. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Bring rain jackets for wet training nights and see our club soccer uniforms for game day.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-lightweight-rain-jackets",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 211,
    "name": "Custom Soccer Track Jackets",
    "slug": "custom-soccer-track-jackets",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029870/hamlosports/products/soccer/custom-soccer-track-jackets.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-track-jackets/",
    "rating": 4.9,
    "reviews": 49,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Structured outer shell for a sharp look before kickoff",
      "Full body sublimation embeds team colors, crests, panel designs, and player details with edge-to-edge coverage",
      "Full zip front with stand-up collar for clean warmup removal and wind protection on exposed pitches",
      "Side pockets with pocket panels in your team colors",
      "Lightweight moisture-wicking polyester structured without bulk, breathable through extended warmup",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on jackets as low as $36.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer jackets for warm-ups, travel days and the walk to the pitch before kickoff: full-zip team warm-up jackets with a stand-up collar and side pockets, sublimated in your club colors. Your colors, crest and player details are sublimated into the polyester shell and included in the price, with no setup fees. Embroidered crests and screen-printed sponsor marks are available too; your quote shows the price. Every jacket is designed by our in-house team and made factory-direct in our Sialkot, Pakistan export manufacturing facility. For wet-weather sidelines compare our lightweight rain jackets, or see our soccer full-zip hoodies for a warmer layer. No minimum order: $49.99 each for 1 to 24, down to $36.99 for 101 or more. Free mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared). The track jacket goes on before kickoff and comes off for our custom soccer uniforms.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-track-jackets",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 212,
    "name": "Custom Soccer Track Pants",
    "slug": "custom-soccer-track-pants",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029870/hamlosports/products/soccer/custom-soccer-track-pants.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-track-pants/",
    "rating": 4.9,
    "reviews": 50,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Slim leg with ankle zips",
      "Elastic waistband and side pockets",
      "Soccer training pants in your team colors, with any custom pattern printed edge to edge",
      "Soccer warm up pants with your crest, names and numbers sublimated and included",
      "Youth sizes cost the same as adult sizes, and no size costs extra",
      "Free mockup within 12 hours, with unlimited changes",
      "Your total quantity sets your tier, down to $36.99 a pair at 101+"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "HAMLO SPORTS makes custom soccer track pants for team warm-ups and training, with a slim leg and ankle zips. They start at $44.99 a pair at 1 to 24, with no minimum order and free US shipping. Your colors, crest, names and numbers are sublimated and included in the price, with no setup fees. Your quote shows the price for embroidery or screen printing. For elastic cuffs at the ankle, see our soccer jogger pants. Add a matching soccer track jacket to the same quote and both count toward your price tier. Every pair is designed by our in-house team, made factory-direct in our Sialkot, Pakistan export manufacturing facility.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-track-pants",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 213,
    "name": "Custom Soccer Jogger Pants",
    "slug": "custom-soccer-jogger-pants",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029867/hamlosports/products/soccer/custom-soccer-jogger-pants.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-jogger-pants/",
    "rating": 4.9,
    "reviews": 51,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full body sublimation embeds team colors, side panel designs, logos, and stripes",
      "Tapered athletic fit with elastic ankle cuffs looks sharp at tournament check-ins and travels clean without bunching over cleats or training shoes",
      "Elastic waistband with internal drawstring",
      "Zippered side pockets provide secure storage for phone, keys, and essentials during travel days and pre-match routines",
      "Lightweight moisture-wicking polyester breathable enough for active warmup and comfortable enough for long travel days between matches",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges across the full squad",
      "No minimum order quantity required; volume pricing on pairs as low as $36.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer jogger pants that carry the team's design system all the way down. A custom track jacket over generic black joggers tells everyone the program invested in the top and stopped there. Full sublimation, tapered athletic fit, elastic waistband with drawstring, and zippered pockets all at the same per-piece price. Each pair runs 100% polyester with a tapered athletic fit, elastic ankle cuffs that sit clean over cleats and training shoes, an elastic waistband with internal drawstring, and zippered side pockets for phone and keys on travel days. Pair with matching track jackets for a warmup suit, or with crewneck sweatshirts for the no-hood off-pitch identity piece. For a slim leg with ankle zips, see our soccer track pants. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Joggers cover warmups and travel, and the game kit is in our soccer team uniforms.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-jogger-pants",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 214,
    "name": "Custom Soccer Crewneck Sweatshirts",
    "slug": "custom-soccer-crewneck-sweatshirts",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029867/hamlosports/products/soccer/custom-soccer-crewneck-sweatshirts.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-crewneck-sweatshirts/",
    "rating": 4.9,
    "reviews": 52,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Clean crewneck collar with no hood, no zipper, and no athletic hardware makes this the piece of team kit that travels furthest from the training ground",
      "Full body sublimation embeds team colors, crest, logos, names, and numbers into the fabric with nothing to crack or peel",
      "Soft fleece-lined interior delivers warmth without bulk, comfortable layered under a jacket or worn solo through cold weather training days and early tournament arrivals",
      "Ribbed cuffs and hem give the crewneck the clean silhouette that works beyond athletic contexts",
      "Relaxed athletic fit for on-pitch and off-pitch wear",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges across the full squad including coaching staff",
      "No minimum order quantity required; volume pricing on sweatshirts as low as $36.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer crewneck sweatshirts built for the places your team shows up when the jersey stays in the bag. No hood, no zipper, just a clean silhouette carrying your club colors, crest, and identity into every room the full kit never reaches. School hallways, post-game meals, travel days, sponsor events, team photos. Each sweatshirt runs performance fleece with a soft brushed interior, ribbed cuffs and hem, and a relaxed athletic fit. Wear it under a bench jacket on the coldest sidelines, or on its own for cool-weather training. The no-hood silhouette puts the club crest and player name on display without an athletic hardware look. It suits the off-pitch moments where pullover hoodies read too casual. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Crewnecks suit the bench and the stands, and players take the field in our soccer team uniforms.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-crewneck-sweatshirts",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 215,
    "name": "Custom Soccer Long Sleeve Training Shirts",
    "slug": "custom-soccer-long-sleeve-training-shirts",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "150 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029868/hamlosports/products/soccer/custom-soccer-long-sleeve-training-shirts.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-long-sleeve-training-shirts/",
    "rating": 4.9,
    "reviews": 53,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Long sleeve athletic cut delivers full arm coverage and total mobility so players aren't layering bulky sweatshirts over their kit",
      "Direct-to-fabric sublimation dyes colors into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight moisture-wicking polyester pulls sweat away during high-intensity drills and scrimmages",
      "Sublimation, embroidery, and screen printing available depending on your design (tackle twill not offered on this shirt)",
      "Full size range from YS to 4XL outfits every player from youth travel teams to adult rec leagues in one order with no size upcharges",
      "Free professional mockup within 12 hours so you see exactly how your training shirt looks before a single piece is cut or printed",
      "No minimum order quantity required; volume pricing on shirts as low as $32.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer long sleeve training shirts built for cold-field mornings, preseason camps, and late-fall sessions where a short sleeve won't cut it. Lightweight moisture-wicking polyester, full sublimation with your team colors, logo, player names, and numbers, sized from youth (YS) through adult (4XL). Each shirt runs 100% polyester at ~150 GSM with a moisture-wicking finish and a long-sleeve cut that covers the forearms during preseason drills, late-fall scrimmages, and cold-field morning sessions. Pair with matching short-sleeve training shirts for warmer-weather sessions, or layer under a crewneck sweatshirt when the temperature drops further. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Long sleeve training shirts are for cold practices, and for games you can choose from our custom team soccer jerseys.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-long-sleeve-training-shirts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 34.99,
      "tier4": 32.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 32.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 216,
    "name": "Custom Soccer Short Sleeve Training Shirts",
    "slug": "custom-soccer-short-sleeve-training-shirts",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 36.99,
    "fabric": "150 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029869/hamlosports/products/soccer/custom-soccer-short-sleeve-training-shirts.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-short-sleeve-training-shirts/",
    "rating": 4.9,
    "reviews": 54,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Full body sublimation embeds colors, logos, and numbers into fabric",
      "Lightweight moisture wicking polyester pulls sweat away during high intensity drills, stays dry and breathable from first whistle to last",
      "Athletic performance fit delivers unrestricted movement through sprints, change of direction work, and technical drills",
      "Crew neck collar clean and low profile with no hardware to irritate during headers or contact",
      "Can carry the same design as your match jerseys",
      "Youth (YS to YXL) through adult (XS to 4XL), no upcharge on any size",
      "No minimum order quantity required; volume pricing on shirts as low as $29.99/each on 101+ pieces, one replacement or a full program kit at the same affordable team rates"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer short sleeve training shirts built for the part of the week that demands the most, daily sessions. Every shirt made to order with your sublimated team colors, logos, and player numbers in the per-piece price. Every order is designed by our in-house team and made factory-direct in our Sialkot, Pakistan export manufacturing facility, from first design to final stitch. Built on ~150 GSM moisture-wicking polyester with athletic-fit crew collar, the same fabric weight as our long-sleeve training sibling. For cold-weather sessions players layer the long-sleeve training shirt underneath or pull the quarter-zip training top over for the warmup window. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Training shirts handle the weekday sessions, and our custom team soccer jerseys handle game day.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-short-sleeve-training-shirts",
    "tierPrices": {
      "tier1": 36.99,
      "tier2": 34.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 36.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 217,
    "name": "Quarter Zipper Training Top",
    "slug": "custom-soccer-quarter-zip-training-top",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "150 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029869/hamlosports/products/soccer/custom-soccer-quarter-zip-training-top.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-quarter-zip-training-top/",
    "rating": 4.9,
    "reviews": 55,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Quarter-zip stand collar opens and closes during warmup without removing the layer",
      "Full body sublimation embeds team colors, logos, player names, and numbers into the fabric with nothing to crack or peel",
      "Lightweight moisture-wicking polyester stays dry and breathable without adding bulk",
      "Stand-up collar closes fully against wind and cold at the start of session and protects the neck during outdoor training without the bulk of a hood",
      "Athletic tapered fit layers cleanly over a training jersey without restricting movement through dynamic warmup drills, sprints, and stretching sequences",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges across the full squad and coaching staff",
      "No minimum order quantity required; volume pricing on tops as low as $39.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$39.99/each on 101+ pieces.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-quarter-zip-training-top",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 218,
    "name": "Custom Soccer Training Shorts",
    "slug": "custom-soccer-training-shorts",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "150 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029870/hamlosports/products/soccer/custom-soccer-training-shorts.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-training-shorts/",
    "rating": 4.9,
    "reviews": 56,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full sublimation fuses colors, logos, and numbers into the fabric",
      "Elastic waistband with internal drawstring",
      "Lightweight moisture-wicking fabric pulls sweat away and engineered to maintain optimal player thermoregulation from first whistle to last rep",
      "Custom inseam length at no extra cost, standard 9 to 11 inch soccer cut or request longer or shorter for your squad's preference",
      "Youth S through adult 4XL with every size priced the same and no upcharges",
      "No minimum order quantity required; volume pricing on pairs as low as $26.99/each on 101+ pieces, sublimated team logo, player numbers, and custom colors included",
      "No minimums, kit out a single new player or a full 100-player club at the same affordable team rates"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer training shorts built for the daily grind of practice, lightweight performance fabric, full sublimation in your team's exact colors, elastic waistband with internal drawstring, and a fit engineered for quick cuts, sprints, and set piece repetition. Made for youth clubs, high school programs, academies, and travel teams that train hard. Made factory-direct in our Sialkot, Pakistan export manufacturing facility: every pair is produced in-house with sublimated team colors, logos, and player numbers included in the standard unit rate. No setup fees, no hidden charges, no sizing surprises. Built on ~150 GSM moisture-wicking polyester with elastic waistband, internal drawstring, and 9 to 11 inch soccer inseam (custom inseam available at no extra cost). For match-day use see our custom soccer shorts, layer over our soccer compression shorts for cold-day sessions, or pair with the matching soccer short sleeve training shirts for training days. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Wear training shorts for drills and save game day for our soccer team uniforms. For the walk to the field, players pull on our soccer jogger pants.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-training-shorts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 219,
    "name": "Custom Soccer Compression Shorts",
    "slug": "custom-soccer-compression-shorts",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 38.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029866/hamlosports/products/soccer/custom-soccer-compression-shorts.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-compression-shorts/",
    "rating": 4.9,
    "reviews": 57,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Four-way stretch compression fit moves with the body horizontally and vertically so players never feel restricted during sprints, lunges, or sliding challenges",
      "Direct-to-fabric sublimation heat-fuses team colors, logo, and player numbers into the material, with molecularly infused graphics that will never crack, peel, or fade",
      "Moisture-wicking fabric pulls sweat away deep into the second half",
      "Youth S through adult 4XL with every size at the same team price and no upcharges",
      "No minimum order quantity required; volume pricing on pairs as low as $32.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer compression shorts for the full 90 minutes, with four-way stretch fabric that moves with every sprint and direction change, and moisture-wicking construction from kickoff through stoppage time. Each pair runs poly-spandex 4-way stretch knit. The 7 to 9 inch mid-cut wears as a base layer under match shorts or standalone as a training tight for conditioning and warm-ups. You can order them in your home and away colors. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Compression shorts go under the kit, so add them when you order your soccer uniforms.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-compression-shorts",
    "tierPrices": {
      "tier1": 38.99,
      "tier2": 36.99,
      "tier3": 34.99,
      "tier4": 32.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 38.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 32.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 220,
    "name": "Custom Soccer Duffle Bags",
    "slug": "custom-soccer-duffle-bags",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 89.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029867/hamlosports/products/soccer/custom-soccer-duffle-bags.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-duffle-bags/",
    "rating": 4.9,
    "reviews": 58,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Isolated shoe pocket keeps dirty cleats and boots apart from uniforms and personal items",
      "Large main compartment fits a full match kit, training gear, shin guards, water bottles, and tournament day essentials without overpacking",
      "Full panel sublimation prints team colors, logo, and player name directly into the fabric",
      "Reinforced stitching built for sideline loading",
      "Adjustable padded shoulder strap distributes weight comfortably for players carrying a full load from the bus to the field and back",
      "No minimum order quantity required; volume pricing on bags as low as $74.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer duffle bags built for travel teams, large main compartment for a full kit, isolated shoe pocket that keeps cleats and wet boots completely separate, reinforced stitching, and full sublimation in your team's colors and logo. Each large-capacity polyester bag has a reinforced bottom, padded adjustable shoulder strap, and a dedicated ventilated cleat compartment that isolates dirty boots from the clean kit inside. Full-panel sublimation carries your team design. Order it with your uniform set. For smaller school and practice carries, pair it with our soccer backpacks. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared). Pack the duffle for away games and outfit the squad from our soccer uniforms for teams.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-duffle-bags",
    "tierPrices": {
      "tier1": 89.99,
      "tier2": 84.99,
      "tier3": 79.99,
      "tier4": 74.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 89.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 84.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 79.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 74.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 221,
    "name": "Custom Soccer Backpacks",
    "slug": "custom-soccer-backpacks",
    "categorySlug": "custom-soccer-uniforms",
    "category": "SOCCER",
    "sport": "Soccer",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029866/hamlosports/products/soccer/custom-soccer-backpacks.png",
    "canonical": "/custom-soccer-uniforms/custom-soccer-backpacks/",
    "rating": 4.9,
    "reviews": 59,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Dedicated Size-5 Soccer Ball Compartment Built to Regulation Dimensions — Loads and Unloads Cleanly Without Forcing or Stretching the Bag",
      "Isolated Ventilated Cleat Pocket Keeps Dirty Cleats and Wet Boots Away from Uniforms, Laptops, and Gear in a Separate Compartment",
      "Four Decoration Methods Available: Sublimation, Tackle Twill, Embroidery, and Screen Printing",
      "Water-Resistant Construction with Reinforced Zippers Protects Gear from Rain, Wet Sidelines, and Early-Morning Dew",
      "Padded Laptop Sleeve and Ergonomic Shoulder Straps Built for Student Athletes Going Straight from School to Training",
      "30-Liter Organized Capacity — Main Gear Section, Water Bottle Pockets, and a Quick-Access Top Pocket",
      "No minimum order quantity required. $79.99 each for 1 to 24, down to $64.99 for 101 or more. Sublimated logo and player names included, zero hidden setup costs."
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom soccer backpacks in your team colors with your logo, built to carry everything for match day: a size-5 ball compartment, a separate ventilated cleat pocket and a padded laptop sleeve for players heading straight from school to training. Your logo, colors and player names are sublimated and included in the price, with no setup fees. Tackle twill, embroidery and screen printing are available too; your quote shows the price. Ordered with your jerseys and shorts, the backpacks are made in the same dye batch, so the colors match. Every backpack is designed by our in-house team and made factory-direct in our Sialkot, Pakistan export manufacturing facility. No minimum order: $79.99 each for 1 to 24, down to $64.99 for 101 or more. Free mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared). Backpacks carry the gear, and the game look comes from our soccer team uniforms.",
    "cloudinaryPublicId": "hamlosports/products/soccer/custom-soccer-backpacks",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 69.99,
      "tier4": 64.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 69.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 64.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 222,
    "name": "Custom Softball Racerback Uniforms",
    "slug": "custom-softball-racerback-uniforms",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 89.99,
    "fabric": "160 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029873/hamlosports/products/softball/custom-softball-racerback-uniforms.png",
    "canonical": "/custom-softball-uniforms/custom-softball-racerback-uniforms/",
    "rating": 4.9,
    "reviews": 60,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Complete uniform set: racerback jersey AND matching pants shipped together in one order",
      "Open-back racerback cut keeps the upper back panel fabric-free across the shoulder blades — the fastpitch silhouette favored when programs want a coordinated kit with the open-shoulder aesthetic",
      "Player names and numbers included when sublimated; tackle twill is $5 per name and $5 per number",
      "Full panel-to-panel sublimation on both jersey and pants with unlimited colors and patterns dyed into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle twill and embroidery available for sewn-on player names, numbers, and team logos with a raised, dimensional finish; screen printing carried for opaque sponsor marks",
      "Moisture-wicking fabric on both pieces (140 to 160 GSM jersey knit, 220 GSM performance polyester pants)",
      "Youth (YS to YXL) through adult (XS to 4XL) — every size in one order at the per-uniform rate, no upcharge on any cut",
      "No minimum order quantity required; volume pricing on uniforms as low as $67.99/each on 101+ uniforms, zero hidden setup costs, free 12-hour design mockup, approval before production"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "The racerback softball uniform is a complete kit: a racerback jersey AND matching pants shipped together in one order, both pieces made in the same dye batch so the colors match across jersey and pants. The racerback cut is an open-back pullover that keeps the upper back panel fabric-free across the shoulder blades, a fastpitch silhouette favored when programs want a coordinated kit with the open-shoulder aesthetic. Sublimated team colors, logos, player names, and numbers are included in the per-uniform price covering both pieces. HAMLO SPORTS builds each uniform set from scratch at our own overseas production facility on 140 to 160 GSM moisture-wicking polyester knit jerseys (160 to 180 GSM on tackle twill jerseys) with 220 GSM performance polyester pants, with full panel-to-panel sublimation on both jersey and pants, tackle twill names and numbers on the jersey back panel, and embroidered crests where you want them, with sublimated lettering included in the per-uniform price; tackle twill is $5 per name and $5 per number, and other methods are priced on your quote. Both pieces are made direct from our specialized Sialkot, Pakistan manufacturing facility from one design file. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-racerback-uniforms",
    "tierPrices": {
      "tier1": 89.99,
      "tier2": 85.99,
      "tier3": 80.99,
      "tier4": 67.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 89.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 85.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 80.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 67.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 223,
    "name": "Custom Softball V-neck Uniforms",
    "slug": "custom-softball-v-neck-uniforms",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 89.99,
    "fabric": "160 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029874/hamlosports/products/softball/custom-softball-v-neck-uniforms.png",
    "canonical": "/custom-softball-uniforms/custom-softball-v-neck-uniforms/",
    "rating": 4.9,
    "reviews": 61,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Complete uniform set: v-neck jersey AND matching pants shipped together in one order",
      "Notched v-collar pullover silhouette — closed-back jersey (vs the open-back racerback alternative), the slightly more feminine and traditional fastpitch look",
      "The jersey comes in a men's cut and a women's cut; order both in one team order at the same per-uniform price. The women's cut is shaped through the bust line, waist and shoulder for full range of motion on the swing, the throw and the slide — not a unisex pattern adjusted down",
      "Player names and numbers included when sublimated; tackle twill is $5 per name and $5 per number",
      "Full panel-to-panel sublimation on both jersey and pants with unlimited colors and patterns dye-fused into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle twill and embroidery available for sewn-on player names, numbers, and team logos; screen printing carried for opaque sponsor marks",
      "Youth (YS to YXL) through adult (XS to 4XL) — every size in one order at the per-uniform rate, no upcharge on any cut",
      "No minimum order quantity required; volume pricing on uniforms as low as $67.99/each on 101+ uniforms, zero hidden setup costs, free 12-hour design mockup, approval before production"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "The v-neck softball uniform is a complete kit: a v-neck jersey AND matching pants shipped together in one order, both pieces made in the same dye batch so the colors match across jersey and pants. The v-neck cut is a notched-collar pullover, a slightly more feminine silhouette than the smooth crew round-neck, for a coordinated kit with a closed-back jersey rather than the open-back racerback. Sublimated team colors, logos, player names, and numbers are included in the per-uniform price covering both pieces. HAMLO SPORTS builds each uniform set from scratch at our own overseas production facility on 140 to 160 GSM moisture-wicking polyester knit jerseys (160 to 180 GSM on tackle twill jerseys) with 220 GSM performance polyester pants, with full panel-to-panel sublimation on both jersey and pants, tackle twill names and numbers on the jersey back panel, and embroidered crests where you want them, with sublimated lettering included in the per-uniform price; tackle twill is $5 per name and $5 per number, and other methods are priced on your quote. Both pieces are made direct from our specialized Sialkot, Pakistan manufacturing facility from one design file. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-v-neck-uniforms",
    "tierPrices": {
      "tier1": 89.99,
      "tier2": 85.99,
      "tier3": 80.99,
      "tier4": 67.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 89.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 85.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 80.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 67.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 224,
    "name": "Custom Softball Round-neck Jerseys",
    "slug": "custom-softball-round-neck-jerseys",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 41.99,
    "fabric": "160 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029873/hamlosports/products/softball/custom-softball-round-neck-jerseys.png",
    "canonical": "/custom-softball-uniforms/custom-softball-round-neck-jerseys/",
    "rating": 4.9,
    "reviews": 62,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Smooth crew neckline with no front-button placket — the cleanest sublimation canvas across our jersey line, ideal for gradient, photo-realistic, or panel-wide sublimated front graphics that wrap uninterrupted across the chest",
      "Entry-level price tier across our softball jersey line — simpler construction (no placket tape, no buttons, no reinforced placket back) lets us price below the placketed full-button and 2-button cuts at the same fabric weight",
      "Choose a men's cut or a women's cut, or both on one order at the same per-player price. The women's cut fits through the bust line, waist and shoulder, proportioned for the swing, the throw and the slide — not a unisex pattern adjusted down.",
      "Direct-to-fabric sublimation with unlimited colors, pinstripes, and color blocking dyed into the 140 to 160 GSM polyester knit, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle twill and embroidery available for sewn-on player names, numbers, and team logos with a raised, dimensional finish",
      "Screen printing carried for opaque sponsor marks and secondary placements on top of the sublimated base",
      "Youth (YS to YXL) through adult (XS to 4XL) — every size in one order at the per-jersey rate, no upcharge on any cut",
      "No minimum order quantity required; volume pricing on jerseys as low as $29.99/each on 101+ pieces, zero hidden setup costs, free 12-hour design mockup, approval before production"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "The round-neck jersey is the simplest pullover cut in our softball line: a smooth crew neckline with no front-button placket, which gives sublimated front-panel graphics the cleanest possible canvas to wrap across the chest without a structural seam-break. It is also the entry-level price tier across our softball jerseys: the simpler construction (no placket tape, no buttons to set, no reinforced placket back) lets us price the round-neck below the placketed full-button and 2-button cuts, while running on the exact same 140 to 160 GSM moisture-wicking polyester knit (160 to 180 GSM on tackle twill jerseys) with the exact same decoration capability. HAMLO SPORTS builds each jersey from scratch at our own overseas production facility on the same 140 to 160 GSM moisture-wicking polyester knit (160 to 180 GSM on tackle twill jerseys) used across our full softball jersey line, with full panel-to-panel sublimation, tackle twill names and numbers, embroidered crests, and screen-printed sponsor marks, with sublimated lettering included in the standard jersey pricing; tackle twill is $5 per name and $5 per number, and other methods are priced on your quote. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-round-neck-jerseys",
    "tierPrices": {
      "tier1": 41.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 41.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 225,
    "name": "Custom Softball V-neck Jerseys",
    "slug": "custom-softball-v-neck-jerseys",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 41.99,
    "fabric": "160 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029874/hamlosports/products/softball/custom-softball-v-neck-jerseys.png",
    "canonical": "/custom-softball-uniforms/custom-softball-v-neck-jerseys/",
    "rating": 4.9,
    "reviews": 38,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Notched v-collar instead of the smooth crew on the round-neck",
      "Same price as the round-neck: both are no-placket pullover cuts that price below the placketed full-button and 2-button construction",
      "Available in a men's cut and a women's cut; order both in one team order at the same per-player price. The women's cut is shaped through the bust line, waist and shoulder for full range of motion on the swing, the throw and the slide — not a unisex pattern adjusted down.",
      "Direct-to-fabric sublimation with unlimited colors, pinstripes, and color blocking dye-fused into the 140–160 GSM polyester knit, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle twill and embroidery available for sewn-on player names, numbers, and team logos with a raised, dimensional finish",
      "Screen printing carried for opaque sponsor marks and secondary placements on top of the sublimated base",
      "Youth (YS to YXL) through adult (XS to 4XL) — every size in one order at the per-jersey rate, no upcharge on any cut",
      "No minimum order quantity required; volume pricing on jerseys as low as $29.99/each on 101+ pieces, zero hidden setup costs, free 12-hour design mockup, approval before production"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "The v-neck jersey is the aesthetic counterpart to the round-neck: same 140 to 160 GSM moisture-wicking polyester knit (160 to 180 GSM on tackle twill jerseys), same no-placket pullover construction, the same men's and women's cuts, same per-jersey price tiers. The only difference is the neckline: a notched v-collar instead of a smooth crew. Sublimated team colors, logos, player names, and numbers included in the standard jersey pricing. HAMLO SPORTS builds each jersey from scratch at our own overseas production facility on the same 140 to 160 GSM moisture-wicking polyester knit (160 to 180 GSM on tackle twill jerseys) used across our full softball jersey line, with full panel-to-panel sublimation, tackle twill names and numbers, embroidered crests, and screen-printed sponsor marks, with sublimated lettering included in the standard jersey pricing; tackle twill is $5 per name and $5 per number, and other methods are priced on your quote. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-v-neck-jerseys",
    "tierPrices": {
      "tier1": 41.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 41.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 226,
    "name": "Custom Softball Sleeveless Jerseys",
    "slug": "custom-softball-sleeveless-jerseys",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 41.99,
    "fabric": "160 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029874/hamlosports/products/softball/custom-softball-sleeveless-jerseys.png",
    "canonical": "/custom-softball-uniforms/custom-softball-sleeveless-jerseys/",
    "rating": 4.9,
    "reviews": 39,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Open armhole pullover cut — the slowpitch, rec-league, and warm-weather aesthetic in our softball jersey line; some windmill pitchers also prefer the extra clearance at the release point",
      "Entry-level price tier shared with the round-neck and v-neck (all three no-placket pullover cuts) — placketed full-button and 2-button cuts sit in the upper tier",
      "Made in a men's cut and a women's cut, each with the open armhole sized for full swing-and-throw range of motion; mix both on one order at the same per-player price. The women's cut is shaped through the bust line, waist and shoulder — not a unisex pattern adjusted down.",
      "Direct-to-fabric sublimation with unlimited colors, pinstripes, and color blocking dyed into the 140 to 160 GSM polyester knit, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle twill and embroidery available for sewn-on player names, numbers, and team logos with a raised, dimensional finish",
      "Screen printing carried for opaque sponsor marks and secondary placements on top of the sublimated base",
      "Youth (YS to YXL) through adult (XS to 4XL) — every size in one order at the per-jersey rate, no upcharge on any cut",
      "No minimum order quantity required; volume pricing on jerseys as low as $29.99/each on 101+ pieces, zero hidden setup costs, free 12-hour design mockup, approval before production"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "The sleeveless jersey is the slowpitch and warm-weather cut in our softball line: an open armhole pullover with a smooth crew neckline, the same 140 to 160 GSM moisture-wicking polyester knit (160 to 180 GSM on tackle twill jerseys) as the rest of the jersey family, and the same entry-level price tier shared with the round-neck and v-neck. Pick it for the relaxed warm-weather look, or for a pitcher who wants no sleeve on the pitching arm. HAMLO SPORTS builds each jersey from scratch at our own overseas production facility on the same 140 to 160 GSM moisture-wicking polyester knit (160 to 180 GSM on tackle twill jerseys) used across our full softball jersey line, with full panel-to-panel sublimation, tackle twill names and numbers, embroidered crests, and screen-printed sponsor marks, with sublimated lettering included in the standard jersey pricing; tackle twill is $5 per name and $5 per number, and other methods are priced on your quote. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-sleeveless-jerseys",
    "tierPrices": {
      "tier1": 41.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 41.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 227,
    "name": "Custom Softball Full-button Jerseys",
    "slug": "custom-softball-full-button-jerseys",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "160 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029871/hamlosports/products/softball/custom-softball-full-button-jerseys.png",
    "canonical": "/custom-softball-uniforms/custom-softball-full-button-jerseys/",
    "rating": 4.9,
    "reviews": 40,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full front-button placket with a tailored fit through the chest and shoulders",
      "Available in a men's cut and a women's cut, both with full range of motion through the swing, the throw and the slide. The women's cut is shaped for female athletes, not adapted from a generic unisex template. Order both cuts in one team order at the same per-player price.",
      "Direct-to-fabric sublimation with unlimited colors, pinstripe options, and graphic complexity dyed into the 140 to 160 GSM polyester knit, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle twill and embroidery available for sewn-on player names, numbers, and team logos with a raised, dimensional finish",
      "Screen printing carried for opaque sponsor marks and secondary placements on top of the sublimated base",
      "Youth (YS to YXL) through adult (XS to 4XL) — every size in one order at the per-jersey rate, no upcharge on any cut",
      "No minimum order quantity required; volume pricing on jerseys as low as $34.99/each on 101+ pieces, zero hidden setup costs",
      "Free design mockup within 12 hours and approval before production on every order. Free rush on request, when production allows."
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "The full-button placket gives your team the classic buttoned jersey look. Men's and women's cuts with full range of motion, premium moisture-wicking polyester, and sublimated team colors, logos, names, and numbers included in the standard jersey pricing. HAMLO SPORTS builds each jersey from scratch at our own overseas production facility on 140 to 160 GSM moisture-wicking polyester knit (160 to 180 GSM on tackle twill jerseys) with a reinforced front-button placket tape, full panel-to-panel sublimation, and sublimated player names and numbers included at no extra cost. Order a single sample or scale to a full 25-player fastpitch roster. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-full-button-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 41.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 228,
    "name": "Custom Softball 2-button Jerseys",
    "slug": "custom-softball-2-button-jerseys",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "160 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029871/hamlosports/products/softball/custom-softball-2-button-jerseys.png",
    "canonical": "/custom-softball-uniforms/custom-softball-2-button-jerseys/",
    "rating": 4.9,
    "reviews": 41,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "2-button henley collar opening slips on and off easily between innings",
      "Available in a men's cut and a women's cut, both slightly looser through the chest than the tailored full-button, for a casual on-field look that still reads competition-ready. Order both cuts in one team order at the same per-player price.",
      "Direct-to-fabric sublimation with unlimited colors, pinstripes, and graphic complexity dyed into the 140 to 160 GSM polyester knit, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle twill and embroidery available for sewn-on player names, numbers, and team logos with a raised, dimensional finish",
      "Screen printing carried for opaque sponsor marks and secondary placements on top of the sublimated base",
      "Youth (YS to YXL) through adult (XS to 4XL) — every size in one order at the per-jersey rate, no upcharge on any cut",
      "No minimum order quantity required; volume pricing on jerseys as low as $34.99/each on 101+ pieces, zero hidden setup costs",
      "Free design mockup within 12 hours and approval before production on every order. Free rush on request, when production allows."
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "The 2-button henley jersey is a pullover cut with a 2-button collar opening that slips on and off easily between innings. It sits slightly looser through the chest than a tailored full-button, with a casual, league-friendly silhouette that still reads as a real team uniform on the field. Made to order with your sublimated team colors, logos, player names, and numbers included in the standard jersey pricing. HAMLO SPORTS builds each jersey from scratch at our own overseas production facility on the same 140 to 160 GSM moisture-wicking polyester knit (160 to 180 GSM on tackle twill jerseys) used across our full softball jersey line, with full panel-to-panel sublimation that wraps cleanly around the 2-button placket and sublimated player names and numbers included at no extra cost. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-2-button-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 41.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 229,
    "name": "Custom Softball Long-sleeve Jerseys",
    "slug": "custom-softball-long-sleeve-jerseys",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "160 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029872/hamlosports/products/softball/custom-softball-long-sleeve-jerseys.png",
    "canonical": "/custom-softball-uniforms/custom-softball-long-sleeve-jerseys/",
    "rating": 4.9,
    "reviews": 42,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-sleeve coverage: the sleeved version of our sleeveless cut, for cool weather and players who want their arms covered",
      "Extra sublimation canvas: the team colorway, pinstripes and graphics run down both full sleeves, so sleeve stripes, panel-wide graphics and sleeve color blocks all work",
      "Offered in a men's cut and a women's cut, with sleeves sized for full throw-and-swing range of motion; one team order can include both at the same per-player price. The women's cut is shaped through the bust line, waist and shoulder — not a unisex pattern adjusted down.",
      "Direct-to-fabric sublimation with unlimited colors, pinstripes, and color blocking dyed into the 140 to 160 GSM polyester knit, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle twill and embroidery available for sewn-on player names, numbers, and team logos with a raised, dimensional finish",
      "Screen printing carried for opaque sponsor marks and secondary placements on top of the sublimated base",
      "Youth (YS to YXL) through adult (XS to 4XL) — every size in one order at the per-jersey rate, no upcharge on any cut",
      "No minimum order quantity required; volume pricing on jerseys as low as $29.99/each on 101+ pieces, zero hidden setup costs, free 12-hour design mockup, approval before production"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Full sleeves for the cold early-season mornings, late-fall weekends and night games that cool off after first pitch, and for long days in the sun. Same 140 to 160 GSM moisture-wicking polyester knit (160 to 180 GSM on tackle twill jerseys) as the rest of our softball jerseys, in men's and women's cuts. Sublimated team colors, logos, names and numbers are in the per-jersey price. HAMLO SPORTS builds each jersey from scratch at our own overseas production facility on the same 140 to 160 GSM moisture-wicking polyester knit (160 to 180 GSM on tackle twill jerseys) used across our full softball jersey line, with full panel-to-panel sublimation that extends across both sleeves, tackle twill names and numbers on the back panel, embroidered crests, and screen-printed sponsor marks, with sublimated lettering included in the standard jersey pricing; tackle twill is $5 per name and $5 per number, and other methods are priced on your quote. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-long-sleeve-jerseys",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 37.99,
      "tier3": 34.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 37.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 230,
    "name": "Custom Softball Performance Tank Tops",
    "slug": "custom-softball-performance-tank-tops",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 41.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029872/hamlosports/products/softball/custom-softball-performance-tank-tops.png",
    "canonical": "/custom-softball-uniforms/custom-softball-performance-tank-tops/",
    "rating": 4.9,
    "reviews": 43,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Sleeveless athletic cut engineered for softball delivers unrestricted arm movement through every pitch, swing, and diving catch",
      "Full-panel sublimation dyed into the high-polyester fabric — colors and logos, with molecularly infused graphics that will never crack, peel, or fade",
      "Embroidery and screen printing also available for a stitched logo or bold opaque mark (no tackle twill on the tank)",
      "Lightweight moisture-wicking performance polyester pulls sweat away on hot game days",
      "Youth (YS to YXL) through adult (XS to 4XL), every size at the same price",
      "The warm-weather training and warm-up top — pairs with the team for practice, conditioning, and casual team wear",
      "No minimum order quantity required with volume pricing as low as $29.99/each on 101+ pieces — no setup or design fees"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball performance tank tops are the warm-weather training and warm-up top: sleeveless and athletic-cut for summer tournaments, back-to-back games, and every practice in between. Lightweight moisture-wicking performance polyester, with your sublimated team colors, logo, player names, and numbers included in the base unit rate. HAMLO SPORTS designs every tank with our in-house team and makes it factory-direct in our Sialkot, Pakistan export manufacturing facility. It comes in men's, women's and youth cuts; the women's cut is shaped for female athletes, not resized from a unisex template. Because it is a high-polyester performance fabric, it takes full dye-sublimation across every panel, plus embroidery and screen printing. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-performance-tank-tops",
    "tierPrices": {
      "tier1": 41.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 41.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 231,
    "name": "Custom Softball Standard Pants",
    "slug": "custom-softball-standard-pant",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029874/hamlosports/products/softball/custom-softball-standard-pant.png",
    "canonical": "/custom-softball-uniforms/custom-softball-standard-pant/",
    "rating": 4.9,
    "reviews": 44,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Matching team pants in your colors, with custom side piping",
      "Sublimated colors, pinstripes and panels included in the per-pair price",
      "220 GSM performance polyester with double-knee reinforcement for slides and dives",
      "Elastic waistband with belt loops",
      "Open or closed hem, chosen per player",
      "Youth YS–YXL through adult XS–4XL on one order, same tier price",
      "Embroidered or screen-printed leg logo available, priced on your quote"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "ET).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-standard-pant",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 44.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 44.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 232,
    "name": "Custom Softball Standard Knickers",
    "slug": "custom-softball-standard-knickers",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029874/hamlosports/products/softball/custom-softball-standard-knickers.png",
    "canonical": "/custom-softball-uniforms/custom-softball-standard-knickers/",
    "rating": 4.9,
    "reviews": 45,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Knee-length knicker cut worn with high socks or stirrups for the traditional baseball-heritage look",
      "Double-knee reinforcement at the panels that take the most punishment — slides, dives, and infield contact — without wearing through mid-season",
      "Elastic or button cuff at no extra cost, both available in the same team order to accommodate every player's preference",
      "Custom side piping in your team colors, sublimated into the knicker",
      "Sublimation locks colorway, pinstripes, panels, and piping into the 220 GSM performance polyester shell, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Youth (YS to YXL) through adult (XS to 4XL) — every size in one order at the per-pair rate; No minimum order quantity required, volume pricing as low as $34.99/each on 101+ pairs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "The standard softball knicker is the knee-length game-day bottom cut to be worn with high socks or stirrups, for the traditional baseball-heritage look. Built on the same 220 GSM performance polyester shell as our full-length standard pant, with double-knee reinforcement, elastic or button cuff options, custom side piping, and sublimation in your team colors all included in the standard unit rate. HAMLO SPORTS builds each knicker from scratch at our own overseas production facility, with custom piping, team colors, and sublimated panels included in the standard unit rate. Design proof ready within 12 hours and production begins only after you sign off on every detail. No minimums, no setup fees, no size upcharges. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-standard-knickers",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 41.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 233,
    "name": "Custom Softball Full-length Pants",
    "slug": "custom-softball-full-length-pants",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029872/hamlosports/products/softball/custom-softball-full-length-pants.png",
    "canonical": "/custom-softball-uniforms/custom-softball-full-length-pants/",
    "rating": 4.9,
    "reviews": 46,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Elastic drawstring waistband — no belt needed, quick to adjust and secure through slides, sprints, and full-game wear; the pull-on convenience that suits youth and rec rosters where belt management is a hassle",
      "Double-knee reinforcement at the contact panels, built into the 220 GSM performance polyester shell — the same construction used on our belted standard pant",
      "Custom side piping in your team colors, sublimated into the pant",
      "Direct-to-fabric sublimation: colorway, pinstripes, panels, and piping locked in, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Open or closed bottom selectable per player at no extra cost so each player matches their sock or stirrup preference",
      "Youth (YS to YXL) through adult (XS to 4XL) — every size in one order at the per-pair rate; No minimum order quantity required, volume pricing as low as $39.99/each on 101+ pairs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "$39.99/each on 101+ pairs Prefer a belted pant? Our custom softball pants have belt loops, at the same tier prices.",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-full-length-pants",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 44.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 44.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 234,
    "name": "Custom Softball Shorts",
    "slug": "custom-softball-shorts",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029873/hamlosports/products/softball/custom-softball-shorts.png",
    "canonical": "/custom-softball-uniforms/custom-softball-shorts/",
    "rating": 4.9,
    "reviews": 47,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full-panel sublimation prints team colors, patterns, and logo into the knit",
      "Moisture-wicking polyester athletic knit keeps players dry through back-to-back games, long practices, and warm-weather tournament days",
      "Elastic waistband with an adjustable drawstring",
      "Athletic cut in men's, women's and youth sizes, with enough coverage at all positions without restricting stride or lateral range",
      "Optional player number sublimated or screen-printed on the hip or leg",
      "Youth (YS to YXL) through adult (XS to 4XL) — every size in one order at the per-pair rate; No minimum order quantity required, volume pricing as low as $26.99/each on 101+ pairs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball shorts are the warm-weather and slowpitch bottom: a moisture-wicking polyester athletic knit with an elastic waistband and adjustable drawstring. Sublimated in your team colors and pattern. HAMLO SPORTS builds each pair from scratch at our own overseas production facility, with sublimated team colors, logos, and optional player numbers included in the standard unit rate. Design proof arrives within 12 hours and production begins only after you approve it. No minimums, no setup fees. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-shorts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 235,
    "name": "Custom Softball Socks",
    "slug": "custom-softball-socks",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 22.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029874/hamlosports/products/softball/custom-softball-socks.png",
    "canonical": "/custom-softball-uniforms/custom-softball-socks/",
    "rating": 4.9,
    "reviews": 48,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Crew and knee-high lengths available so you can match your uniform and league preference, with full sublimation on both",
      "Full-panel sublimation dyes team colors, stripe patterns, logos, and player numbers into the knit, with molecularly infused graphics that will never crack, peel, or fade",
      "Screen-printed logos also available for a bold opaque mark. Tackle twill and embroidery are not used on these socks",
      "Moisture-wicking knit keeps feet dry and comfortable through doubleheaders, back-to-back tournament games, and long practice days",
      "Cushioned sole with arch support for extended play, from warm-ups to the final out",
      "Youth and adult sizes at the same price per pair",
      "No minimum order quantity required with volume pricing as low as $14.99/each on 101+ pieces — no setup or design fees"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball socks are the finishing detail that locks the whole uniform together — crew or knee-high lengths with your team colors, stripe patterns, logo, and player numbers sublimated into a moisture-wicking knit that holds its color from the first pitch to the final out. HAMLO SPORTS produces every pair at our own overseas facility with no setup fees and no hidden costs. The knit takes full dye-sublimation for the team colorway and stripes, plus screen-printed logos; sewn-on tackle twill and embroidery are skipped on a stretchy knit sock. No minimum orders, free design mockup within 12 hours, and Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-socks",
    "tierPrices": {
      "tier1": 22.99,
      "tier2": 19.99,
      "tier3": 18.99,
      "tier4": 14.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 22.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 19.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 18.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 14.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 236,
    "name": "Custom Softball Full-zip Hoodies",
    "slug": "custom-softball-full-zip-hoodies",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029872/hamlosports/products/softball/custom-softball-full-zip-hoodies.png",
    "canonical": "/custom-softball-uniforms/custom-softball-full-zip-hoodies/",
    "rating": 4.9,
    "reviews": 49,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Full-length front zipper with a chin garage — zips on and off over a cap, visor, or bun without pulling anything over the head, the layer swap a pullover can't do",
      "Cotton-poly fleece-lined interior for dugout warmth on cold game days and travel mornings",
      "Wears open or closed, vented when warm and zipped when cold",
      "Decorated with screen printing, embroidery, and classic tackle twill lettering — the durable methods built for cotton-poly fleece (sublimation is reserved for our high-polyester jerseys and bags); designs are placed to work around the front zip",
      "Split hand pockets at the front and an adjustable drawstring hood",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges; No minimum order quantity required, volume pricing as low as $39.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball full-zip hoodies are built for the one moment a pullover can't handle — the between-innings layer swap when a player has a cap on or her hair in a bun and needs to zip on and off without pulling anything over her head. A cotton-poly fleece hoodie with a full-length front zipper, chin garage, and hand pockets, made to order with your team colors, logos, and player names, and your quote shows the decoration price. HAMLO SPORTS designs each hoodie with our in-house team and builds it factory-direct in our Sialkot, Pakistan export manufacturing facility, from the first sketch to the final stitch. Note that cotton-poly fleece is decorated with screen printing, embroidery, and tackle twill rather than dye-sublimation (which needs a high-polyester fabric); we will steer your design to the method that reads best on fleece and works around the front zip. No minimums, Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-full-zip-hoodies",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 237,
    "name": "Custom Softball Pullover Hoodies",
    "slug": "custom-softball-pullover-hoodies",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029873/hamlosports/products/softball/custom-softball-pullover-hoodies.png",
    "canonical": "/custom-softball-uniforms/custom-softball-pullover-hoodies/",
    "rating": 4.9,
    "reviews": 50,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Classic pullover silhouette, with no zipper to snag or fail",
      "Cotton-poly fleece-lined interior for genuine warmth on cold game days, travel mornings, and late-season tournament weekends",
      "Adjustable drawstring hood and kangaroo front pocket for hand warmth and a relaxed, layerable fit",
      "Decorated with screen printing, embroidery, and classic tackle twill lettering — the durable methods built for cotton-poly fleece (sublimation is reserved for our high-polyester jerseys and bags)",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on hoodies as low as $38.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball pullover hoodies are the clean, zipper-free team layer — nothing to snag, nothing to fail, just a classic cotton-poly fleece silhouette with your team colors, logos, and player names. Fleece-lined interior, adjustable drawstring hood, and kangaroo front pocket included in the base unit rate. Decorated with screen printing, embroidery, and tackle twill. HAMLO SPORTS designs each hoodie with our in-house team and builds it factory-direct in our Sialkot, Pakistan export manufacturing facility, from the first sketch to the final stitch. Note that cotton-poly fleece is decorated with screen printing, embroidery, and tackle twill rather than dye-sublimation (which needs a high-polyester fabric); we will steer your design to the method that reads best on fleece. No minimums, Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-pullover-hoodies",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 238,
    "name": "Custom Softball Crewneck Sweatshirts",
    "slug": "custom-softball-crewneck-sweatshirts",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029871/hamlosports/products/softball/custom-softball-crewneck-sweatshirts.png",
    "canonical": "/custom-softball-uniforms/custom-softball-crewneck-sweatshirts/",
    "rating": 4.9,
    "reviews": 51,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Hood-free crewneck cut with no bulk behind the neck",
      "Mid-weight cotton-poly fleece interior traps heat through cold practice mornings, night games, and late-season tournament weekends",
      "Ribbed collar, cuffs, and waistband hold the structured silhouette in place",
      "Decorated with screen printing, embroidery, and classic tackle twill lettering — the durable decoration methods built for cotton-poly fleece (sublimation is reserved for our high-polyester jerseys and bags)",
      "Sized for the whole roster, youth through adult 4XL, every size at the same price with no upcharge",
      "No minimum order quantity required; volume pricing on sweatshirts as low as $36.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball crewneck sweatshirts have no hood bulk behind the neck and no zipper breaking the chest line, just a structured cotton-poly fleece silhouette with your team colors, logos, and player names. Ribbed collar, cuffs, and waistband lock the fit in place from the first warm-up to the post-game bus ride. Decorated with screen printing, embroidery, and classic tackle twill lettering. HAMLO SPORTS designs each sweatshirt with our in-house team and builds it factory-direct in our Sialkot, Pakistan export manufacturing facility, from the first design draft to the finished garment. Note that cotton-poly fleece is decorated with screen printing, embroidery, and tackle twill rather than dye-sublimation (which needs a high-polyester fabric); we will steer your design to the method that reads best on fleece. No minimums, Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-crewneck-sweatshirts",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 239,
    "name": "Custom Softball Dugout Jackets",
    "slug": "custom-softball-dugout-jackets",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 99.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029871/hamlosports/products/softball/custom-softball-dugout-jackets.png",
    "canonical": "/custom-softball-uniforms/custom-softball-dugout-jackets/",
    "rating": 4.9,
    "reviews": 52,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "For the coldest tournament mornings and late-season night games when a fleece is not enough",
      "Quilted interior lining traps sustained bench warmth; a poly shell over the quilting blocks wind and light rain",
      "Full-zip closure with snap placket for easy on and off between at-bats without disrupting the warm layers underneath",
      "Poly shell carries the full decoration toolkit — sublimated colorway and panels, tackle twill names and numbers, embroidered crests, and screen-printed logos",
      "Hand pockets, plus a choice of stand-up or fold-down collar",
      "Youth (YS to YXL) through adult (XS to 4XL) at the same per-jacket rate; No minimum order quantity required, volume pricing as low as $84.99/each on 101+ jackets"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball dugout jackets are for the coldest tournament days: coaches on the bench and players between at-bats when a fleece stops being enough. Quilted insulation for sustained warmth, a poly shell that takes your team colors and logos, and hand pockets. HAMLO SPORTS designs each jacket with our in-house team and builds it factory-direct in our Sialkot, Pakistan export manufacturing facility, from first design draft to finished garment. The poly shell carries the full decoration toolkit: sublimated team colorway and panels, tackle twill team names and player numbers, embroidered crests, and screen-printed logos. No minimums, Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-dugout-jackets",
    "tierPrices": {
      "tier1": 99.99,
      "tier2": 94.99,
      "tier3": 89.99,
      "tier4": 84.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 99.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 94.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 89.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 84.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 240,
    "name": "Custom Softball Varsity Jackets",
    "slug": "custom-softball-varsity-jackets",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 109.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029875/hamlosports/products/softball/custom-softball-varsity-jackets.png",
    "canonical": "/custom-softball-uniforms/custom-softball-varsity-jackets/",
    "rating": 4.9,
    "reviews": 53,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Two-tone snap-front construction — a custom body color and contrasting sleeves built to your exact program color scheme, the classic letterman silhouette",
      "Chenille patches and embroidered logos sewn directly onto the jacket — the raised, dimensional finish that print and sublimation cannot replicate",
      "Player name and number placement on the back and sleeve for individual personalization across the full roster",
      "Quilted interior lining for genuine warmth on cold-weather travel days, award nights, and post-season events",
      "Ribbed knit collar, cuffs, and waistband hold the classic letterman silhouette",
      "Youth (YS to YXL) through adult (XS to 4XL) at the same per-jacket rate; No minimum order quantity required, volume pricing as low as $94.99/each on 101+ jackets"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball varsity jackets are the keepsake piece — the one item in the kit players take to school, wear on the bus, and keep for years after the final out.",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-varsity-jackets",
    "tierPrices": {
      "tier1": 109.99,
      "tier2": 104.99,
      "tier3": 99.99,
      "tier4": 94.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 109.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 104.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 99.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 94.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 241,
    "name": "Custom Softball Windbreakers",
    "slug": "custom-softball-windbreakers",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029875/hamlosports/products/softball/custom-softball-windbreakers.png",
    "canonical": "/custom-softball-uniforms/custom-softball-windbreakers/",
    "rating": 4.9,
    "reviews": 54,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Water-resistant polyester outer shell blocks wind and light rain without the bulk of a heavier outerwear piece — note it is water-resistant, not fully waterproof, built for showers and wind rather than a downpour",
      "Breathable mesh lining for pre-game warm-ups, so players stay comfortable moving, not just sitting",
      "Full-zip front closure for easy on and off between warm-ups and game time without disrupting the layers underneath",
      "Polyester shell takes full-panel sublimation dyed directly into the fabric, so there is molecularly infused graphics that will never crack, peel, or fade; embroidery and screen printing also available for logos",
      "Available with or without a hood; sized youth through adult 4XL at the same price with no upcharge",
      "No minimum order quantity required; volume pricing on windbreakers as low as $34.99/each on 101+ pieces, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball windbreakers are the light wind-and-rain shell, not a warmth layer: a water-resistant polyester shell that blocks wind and light rain, a breathable mesh lining, and a full-zip front. Light enough to move in and pack down small. Because the shell is polyester, it takes full-panel sublimation in your team colors, logos, and player names. HAMLO SPORTS designs each windbreaker with our in-house team and builds it factory-direct in our Sialkot, Pakistan export manufacturing facility, from first design draft to finished jacket. The polyester shell accepts full dye-sublimation across every panel, plus embroidery and screen printing for logos; tackle twill is not used on the windbreaker. No minimums, Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-windbreakers",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 242,
    "name": "Custom Softball Quarter-zip Pullovers",
    "slug": "custom-softball-quarter-zip-pullovers",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029873/hamlosports/products/softball/custom-softball-quarter-zip-pullovers.png",
    "canonical": "/custom-softball-uniforms/custom-softball-quarter-zip-pullovers/",
    "rating": 4.9,
    "reviews": 55,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Quarter-zip stand-up collar — four inches of on-field temperature control without removing a layer; crack it open when warm, seal it up when cold",
      "Wind-resistant stand-up collar seals the neckline on open outdoor fields and cold tournament mornings",
      "Moisture-wicking performance-polyester fabric pulls sweat away during warm-ups and between-inning movement",
      "High-polyester performance fabric takes full-panel sublimation dyed directly into the cloth — colors and logos locked in, plus tackle twill, embroidery, and screen printing all available",
      "Color-block paneling and custom piping options available to match or contrast the rest of the uniform kit",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges; No minimum order quantity required, volume pricing as low as $34.99/each on 101+ pullovers"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball quarter-zip pullovers suit the stop-start rhythm of the game: crack the zip open between at-bats, seal it up in the dugout, never stop moving. A wind-resistant stand-up collar blocks the breeze on open outdoor fields, the moisture-wicking performance-polyester fabric pulls sweat away during warm-ups, and because it is a high-polyester performance fabric (not cotton fleece), it takes full sublimation across every panel: colors, logos, and player names included in the base unit rate. HAMLO SPORTS designs each pullover with our in-house team and builds it factory-direct in our Sialkot, Pakistan export manufacturing facility, from first design to finished garment. The performance-polyester fabric is the bridge between our sublimated jerseys and our cotton-fleece sideline layers: it accepts full dye-sublimation like the jerseys, plus tackle twill, embroidery, and screen printing. No minimums, Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-quarter-zip-pullovers",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 243,
    "name": "Custom Softball Jogger Pants",
    "slug": "custom-softball-jogger-pants",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029872/hamlosports/products/softball/custom-softball-jogger-pants.png",
    "canonical": "/custom-softball-uniforms/custom-softball-jogger-pants/",
    "rating": 4.9,
    "reviews": 56,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Tapered leg cut with ribbed ankle cuffs — a clean modern silhouette that stays off the ground and moves with the athlete",
      "Elastic waistband with an interior drawstring, so no belt is needed",
      "Zippered side and back pockets keep phones, keys, and tournament essentials secured during warm-ups and travel",
      "Mid-weight cotton-poly fleece interior for genuine warmth on cold game mornings, travel days, and late-season tournament weekends",
      "Decorated with screen printing, embroidery, and classic tackle twill lettering — the durable methods built for cotton-poly fleece (sublimation is reserved for our high-polyester jerseys and bags)",
      "The matching sweatsuit bottom for the team fleece line. Pairs with the crewneck sweatshirt and pullover or full-zip hoodie",
      "Men's, women's and youth cuts, sized youth (YS-YXL) through adult (XS-4XL)",
      "No minimum order quantity required with volume pricing as low as $36.99/each on 101+ pieces — zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball jogger pants are the matching sweatsuit bottom for the whole program — a tapered cotton-poly fleece silhouette with ribbed ankle cuffs that stays off the ground and moves with the athlete from the parking lot to the dugout. Elastic drawstring waist, zippered side and back pockets, and your team colors, logos, and player names built in. The warm-up, cool-down, and travel pant that pairs with the team crewneck and hoodie. HAMLO SPORTS designs each pair with our in-house team and builds it factory-direct in our Sialkot, Pakistan export manufacturing facility, from the first design draft to the finished garment. Offered in men's, women's and youth cuts, with the women's pair patterned for female athletes instead of a resized unisex template. Note that cotton-poly fleece is decorated with screen printing, embroidery, and tackle twill rather than dye-sublimation (which needs a high-polyester fabric); we will steer your design to the method that reads best on fleece. No minimums, Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-jogger-pants",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 244,
    "name": "Custom Softball Short Sleeve T-shirts",
    "slug": "custom-softball-short-sleeve-t-shirts",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 32.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029873/hamlosports/products/softball/custom-softball-short-sleeve-t-shirts.png",
    "canonical": "/custom-softball-uniforms/custom-softball-short-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 57,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Moisture-wicking performance polyester pulls sweat away from the skin through full practice sessions and conditioning drills",
      "Men's, women's and youth cuts: the women's cut is fitted through the shoulder and torso, not a boxy unisex tee resized down",
      "Full-panel sublimation dyed into the high-polyester fabric, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Embroidery and screen printing also available for a stitched logo or bold opaque mark (no tackle twill on the tee)",
      "Sized from youth (YS-YXL) through adult (XS-4XL) — every size at the same price with no upcharge on any roster spot",
      "The sleeved training top — the everyday companion to the sleeveless performance tank and the team sideline layers",
      "No minimum order quantity required with volume pricing as low as $24.99/each on 101+ pieces, with zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom softball short sleeve t-shirts for every practice, conditioning session and recovery day, on moisture-wicking performance polyester in men's, women's and youth cuts, sublimated in your team colors, logos, and player names from collar to hem. Our sleeved training top, and the lowest-priced top in our softball line. HAMLO SPORTS makes every shirt from scratch for your team direct from our specialized Sialkot, Pakistan manufacturing facility. It comes in men's, women's and youth cuts, with a women's cut that's fitted for female athletes rather than resized from a unisex template. Because it is a high-polyester performance fabric, it takes full dye-sublimation across every panel, plus embroidery and screen printing. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-short-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 32.99,
      "tier2": 29.99,
      "tier3": 26.99,
      "tier4": 24.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 32.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 26.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 24.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 245,
    "name": "Custom Softball Training Shorts",
    "slug": "custom-softball-training-shorts",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029874/hamlosports/products/softball/custom-softball-training-shorts.png",
    "canonical": "/custom-softball-uniforms/custom-softball-training-shorts/",
    "rating": 4.9,
    "reviews": 58,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Moisture-wicking polyester athletic knit (the same lighter knit as our game softball shorts) keeps players dry through every conditioning drill and back-to-back practice session",
      "Direct-to-fabric sublimation with full-color team designs dyed into the fabric, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Embroidery and screen printing also available so you can pick the decoration method that fits your team's design",
      "Elastic waistband with adjustable drawstring, cut in men's, women's and youth proportions",
      "Multiple inseam length options selected during production at no extra cost so every player gets the right cut for their preference",
      "Youth (YS to YXL) through adult (XS to 4XL) with no size upcharge; the per-piece price covers your full roster from youngest player to coaching staff",
      "No minimum order quantity required; volume pricing as low as $26.99/each on 101+ pairs, zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball training shorts are the practice and conditioning short — built for the daily work, not game-day coordination. A moisture-wicking polyester athletic knit with an elastic waistband and drawstring, in your team colors and logo, made for practices, conditioning drills, and off-season training. Multiple inseam options so every player gets the cut they prefer. HAMLO SPORTS builds each pair from scratch at our own overseas production facility, with no hidden costs. Free professional design mockup within 12 hours, no minimum order, and approval before production on every order. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-training-shorts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 246,
    "name": "Custom Softball Backpacks",
    "slug": "custom-softball-backpacks",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029871/hamlosports/products/softball/custom-softball-backpacks.png",
    "canonical": "/custom-softball-uniforms/custom-softball-backpacks/",
    "rating": 4.9,
    "reviews": 59,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Dedicated bat sleeve holds bats securely along the side, with no loose equipment rattling around between games or during travel",
      "Isolated bottom shoe compartment keeps cleats and dirty gear separated from uniforms, gloves, and personal items",
      "Full-coverage sublimation prints team colors, logos, and player names directly into the 600D polyester shell, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Embroidery and screen printing also available for raised stitched logos and bold opaque marks, plus tackle twill names and numbers at $5 per name and $5 per number",
      "Reinforced stitching at every stress point, padded ergonomic shoulder straps, and a padded back panel built for daily use",
      "Multiple compartments — main gear pocket, accessory pockets, and side water bottle holders — keep everything organized",
      "No minimum order quantity required; volume pricing on backpacks as low as $64.99/each on 101+ pieces, zero hidden setup costs",
      "One simple per-bag price covers design, sublimated decoration, production, and delivery — zero hidden setup costs, no design charges, no hidden costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball backpacks carry every piece of a player's gear — a dedicated bat sleeve, an isolated shoe compartment, and water bottle pockets — with your team's colors, logo, and player names sublimated across a heavy-duty 600D polyester shell. HAMLO SPORTS produces each bag entirely in-house at our own overseas facility, with affordable team pricing. Your mockup is in your inbox within 12 hours, and there is no minimum order. The 600D polyester shell takes full sublimation, embroidery, and screen printing; bags are one-size, so there is no sizing chart to worry about. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-backpacks",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 69.99,
      "tier4": 64.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 69.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 64.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 247,
    "name": "Custom Softball Cinch Bags",
    "slug": "custom-softball-cinch-bags",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029871/hamlosports/products/softball/custom-softball-cinch-bags.png",
    "canonical": "/custom-softball-uniforms/custom-softball-cinch-bags/",
    "rating": 4.9,
    "reviews": 60,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Lightweight drawstring cinch design — easy to grab, easy to carry, and comfortable over one shoulder for school, warm-ups, and travel days",
      "Full-coverage sublimation prints team colors, logos, and player names directly into the polyester fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Embroidery and screen printing also available for a stitched logo or bold opaque mark on simpler designs, plus tackle twill names and numbers at $5 per name and $5 per number",
      "Reinforced corners and durable polyester construction for daily tossing and dragging",
      "Spacious main compartment fits cleats, a water bottle, practice gear, and personal items with room to spare",
      "Custom player names available on every bag make identification easy in the dugout and double as an end-of-season keepsake",
      "No minimum order quantity required; volume pricing on bags as low as $19.99/each on 101+ pieces, zero hidden setup costs",
      "The per-bag price covers design, sublimated printing, and delivery — zero hidden setup costs, no design charges, no unexpected costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball cinch bags are the grab-and-go day-trip essential — a lightweight polyester drawstring sack with reinforced corners and your team's colors, logo, and player names sublimated across the whole bag. Lighter and simpler than the structured backpack, it is the bag a player slings over one shoulder from the last class period to the practice field, or carries as a second bag for cleats and a water bottle. HAMLO SPORTS makes each bag start to finish on our own production floor overseas, with the per-bag price covering design, sublimated printing, and delivery. No setup fee, no hidden charges, and your mockup in your inbox within 12 hours. The polyester fabric takes sublimation, embroidery, and screen printing; cinch bags are one-size, so there is no sizing chart. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-cinch-bags",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 29.99,
      "tier3": 24.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 24.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 248,
    "name": "Custom Softball Wheeled Bags",
    "slug": "custom-softball-wheeled-bags",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 109.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029875/hamlosports/products/softball/custom-softball-wheeled-bags.png",
    "canonical": "/custom-softball-uniforms/custom-softball-wheeled-bags/",
    "rating": 4.9,
    "reviews": 61,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Full-coverage sublimation prints team colors, logos, and player names into the 600D polyester shell, with molecularly infused graphics that will never crack, peel, or fade",
      "Embroidery and screen printing also available for a stitched logo or bold opaque mark, plus tackle twill names and numbers at $5 per name and $5 per number",
      "Dedicated bat compartments keep bats secure and separated from helmets, uniforms, and personal gear during transport",
      "Multiple organized compartments: main gear bay, shoe pocket, accessory pockets, and side water bottle storage",
      "Reinforced stitching at every high-stress point",
      "No minimum order quantity required; volume pricing on bags as low as $94.99/each on 101+ pieces, zero hidden setup costs",
      "The per-bag price covers design, sublimated decoration, production, and US delivery, with zero hidden setup costs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball wheeled bags are the heavy-hauler for everything a travel team rolls from the hotel lobby to the tournament diamond. A telescoping handle, wheels, dedicated bat compartments, and helmet space on a heavy-duty 600D polyester shell, with your team's colors, logo, and player names sublimated across the bag. When a player or coach has more gear than a backpack can hold, this is the bag that rolls it instead of carrying it. HAMLO SPORTS designs each bag in-house, and our dedicated factory facility overseas makes it to your approved mockup. The 600D polyester shell takes full sublimation, embroidery, and screen printing; wheeled bags are one-size, so there is no sizing chart. No minimums, Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-wheeled-bags",
    "tierPrices": {
      "tier1": 109.99,
      "tier2": 104.99,
      "tier3": 99.99,
      "tier4": 94.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 109.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 104.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 99.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 94.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 249,
    "name": "Custom Softball Visors",
    "slug": "custom-softball-visors",
    "categorySlug": "custom-softball-uniforms",
    "category": "SOFTBALL",
    "sport": "Softball",
    "badge": "FACTORY DIRECT",
    "price": 29.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029875/hamlosports/products/softball/custom-softball-visors.png",
    "canonical": "/custom-softball-uniforms/custom-softball-visors/",
    "rating": 4.9,
    "reviews": 62,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Sublimation and embroidery both available in your jersey, pants and sock colors",
      "Full-panel sublimation dyes the team colorway into the performance-poly panel; an embroidered logo sits on the structured front (tackle twill and screen printing are skipped on a curved headwear panel)",
      "Moisture-wicking sweatband for sun-baked afternoon games and all-day tournament schedules",
      "Adjustable hook-and-loop or snapback closure",
      "Curved sun brim shields eyes during day games, late-afternoon sun angles, and weekend tournament doubleheaders",
      "Team logo, team name, and optional player-number placement means every head in the dugout carries your brand",
      "Youth and adult sizing in one order covers your full roster from the youngest player to the coaching staff",
      "No minimum order quantity required with volume pricing as low as $19.99/each on 101+ pieces — the per-visor price covers design, sublimated decoration, production, and delivery"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom softball visors with your team's colors, logo, and player numbers, sublimated and embroidered for every player and coach. HAMLO SPORTS builds every visor at our own overseas facility with no setup or design fees. The performance-poly panel takes full dye-sublimation for the team colorway, and the structured front takes an embroidered logo; sewn-on tackle twill and a screen-printed curved brim are skipped on headwear. No minimum orders, Complimentary 12-Hour 3D Digital Design Mockups, and Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/softball/custom-softball-visors",
    "tierPrices": {
      "tier1": 29.99,
      "tier2": 24.99,
      "tier3": 21.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 29.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 24.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 21.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 250,
    "name": "Custom Volleyball Uniforms (uniform Sets)",
    "slug": "custom-volleyball-uniform-sets",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 85.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029879/hamlosports/products/volleyball/custom-volleyball-uniform-sets.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-uniform-sets/",
    "rating": 4.9,
    "reviews": 38,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Complete jersey and shorts set in one order. Your whole order is made in the same dye batch, so colors, patterns and logos match across both pieces",
      "Full sublimation on both jersey and shorts: unlimited colors and sharp graphics, dyed into the fabric so they can't crack or peel off",
      "Athletic cut built for volleyball movement, shaped for jumps, lateral cuts, and floor work without pulling, bunching, or restricting range",
      "Moisture wicking performance fabric pulls sweat away from the skin so players stay dry and focused from the opening serve to the final point",
      "Sublimated player names, numbers and team logos are included. Tackle twill is $5 per name and $5 per number.",
      "Youth and adult sizes in one order, at the same per-set tier price.",
      "No minimum order quantity required: $85.99 per set at 1 to 24, down to $72.99 at 101+.",
      "Free mockup within 12 hours, free rush on request when production allows, and a free remake if we made the mistake (report it within 30 days of delivery)."
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "delivery).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-uniform-sets",
    "tierPrices": {
      "tier1": 85.99,
      "tier2": 80.99,
      "tier3": 75.99,
      "tier4": 72.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 85.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 80.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 75.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 72.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 251,
    "name": "Custom Volleyball Short Sleeve Jerseys",
    "slug": "custom-volleyball-short-sleeve-jerseys",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029878/hamlosports/products/volleyball/custom-volleyball-short-sleeve-jerseys.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-short-sleeve-jerseys/",
    "rating": 4.9,
    "reviews": 39,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Short sleeve athletic cut fits men's, women's, and youth rosters, the universally accepted style that works across co ed leagues, school programs, and competitive clubs",
      "Full sublimation printed into the fabric delivers team colors, logos, gradients, and player numbers with molecularly infused graphics that will never crack, peel, or fade",
      "Performance moisture wicking fabric pulls sweat away from the body",
      "Sublimated player names and numbers included on every jersey with no add-on fees, personalized in the per-piece price",
      "Free rush on request when production allows; never guaranteed, and never a fee",
      "Youth and adult sizing in a single order covers every player across every age group on your roster at one consistent price",
      "No minimum order quantity required; volume pricing on jerseys as low as $37.99/each on 101+ pieces. Every order, from one jersey to a full club program, follows the same process. A player added mid-season is priced at the same tier as your team's original order",
      "Free design mockup within 12 hours, designed in the USA and made overseas in our own factory"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom volleyball short sleeve jerseys with your team's colors, logos, and player numbers sublimated into performance fabric, the reliable, versatile cut that works for men's, women's, youth, and co-ed programs without the style debate, ordered in any quantity from a single jersey to a full club run. Every jersey comes from our own production floor overseas, on performance polyester fabric, with a free design mockup within 12 hours of your request and no minimum standing between you and your order. Need it sooner? Ask for a free rush; we do it when production allows, and it is never guaranteed. The libero jersey comes in a contrasting color in the same order as the team. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-short-sleeve-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 37.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 37.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 252,
    "name": "Custom Volleyball Cap Sleeved Uniforms",
    "slug": "custom-volleyball-cap-sleeved-uniforms",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 85.99,
    "fabric": "160 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029876/hamlosports/products/volleyball/custom-volleyball-cap-sleeved-uniforms.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-cap-sleeved-uniforms/",
    "rating": 4.9,
    "reviews": 40,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Cap sleeve cut with fitted athletic silhouette, open at the shoulder for full arm swing on attacks and serves, without the bare look of a sleeveless jersey",
      "Complete jersey and shorts set with both pieces fully sublimated so your design depth is identical top to bottom, no partial coverage on the shorts",
      "Full sublimation on every inch offers unlimited colors, sharp graphics, and logos dye fused into the fabric, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Moisture wicking performance fabric keeps players dry through long rally exchanges, tournament warmups, and back to back match days",
      "Sublimated player names, numbers, and team logos on every set with no add on cost, no extra step, included from the start",
      "Youth and adult sizes in one order, all at the same per-set price",
      "No minimum order quantity required; volume pricing on sets as low as $72.99/each on 101+ sets, affordable team pricing with no hidden markups",
      "Free professional mockup within 12 hours lets you see the full jersey and shorts together before a single item goes into production"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom volleyball cap sleeved uniforms with matching shorts in a fitted cut, sublimated in your team's colors, logos, and numbers and made as a complete set in our own production facility overseas. Built on ~160 GSM polyester knit jersey with fitted cap-sleeve cut and ~150 GSM matching shorts, both moisture-wicking. No setup fees, no design charges, no minimum order. Free mockup in your inbox within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared). One order covers the whole roster from your libero to your outside hitter.",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-cap-sleeved-uniforms",
    "tierPrices": {
      "tier1": 85.99,
      "tier2": 80.99,
      "tier3": 75.99,
      "tier4": 72.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 85.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 80.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 75.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 72.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 253,
    "name": "Custom Volleyball Long Sleeve Jerseys",
    "slug": "custom-volleyball-long-sleeve-jerseys",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 48.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029877/hamlosports/products/volleyball/custom-volleyball-long-sleeve-jerseys.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-long-sleeve-jerseys/",
    "rating": 4.9,
    "reviews": 41,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-length sleeve with 4-way stretch moves through every dig, dive, and overhead swing without pulling or bunching at the elbow",
      "Libero-ready: design the libero jersey in a contrasting colorway and add it to the same order",
      "Full sublimation from collar to cuff with unlimited colors and designs dye-fused into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Moisture-wicking performance fabric manages heat and perspiration through long match days, back-to-back sets, and cold-gym warmups",
      "Sublimated player names, numbers, and team logos included in the per-piece price with no itemized add-on charges",
      "Youth and adult sizes in one order, one price for every size",
      "No minimum order quantity required; volume pricing on jerseys as low as $39.99/each on 101+ pieces, zero hidden setup costs",
      "Free design mockup within 12 hours, free rush on request when production allows, and a free remake if we make a mistake (reported within 30 days of delivery)"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom volleyball long sleeve jerseys built for the players who need full arm coverage, liberos reading the floor on every point, indoor programs playing in cold gyms, and athletes who want unrestricted stretch from shoulder to wrist without a jersey that holds them back. Full sublimation across every inch on performance polyester fabric, and a free design mockup back to you within 12 hours. There is no minimum, so you can add a single libero jersey in a contrasting color to a team order of any size. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-long-sleeve-jerseys",
    "tierPrices": {
      "tier1": 48.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 48.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 254,
    "name": "Custom Volleyball Crewneck Cap Sleeve Jerseys",
    "slug": "custom-volleyball-crewneck-cap-sleeve-jerseys",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "160 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029876/hamlosports/products/volleyball/custom-volleyball-crewneck-cap-sleeve-jerseys.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-crewneck-cap-sleeve-jerseys/",
    "rating": 4.9,
    "reviews": 42,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Round crewneck collar with no V opening",
      "Cap sleeve adds a tailored athletic silhouette with light shoulder coverage",
      "Full sublimation across every panel with unlimited colors and patterns embedded directly into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "4-way stretch moisture-wicking fabric keeps players dry through tournament rounds, intense gym sessions, and warmups on crowded courts",
      "Sublimated player names, numbers, and team logos included in the per-jersey price with no add-on fees, no setup charges, and no surprises on the final invoice",
      "Youth and adult sizes made together in one order, from youth club through varsity",
      "No minimum order quantity required; volume pricing on jerseys as low as $37.99/each on 101+ pieces, zero hidden setup costs",
      "Design proof in your inbox within 12 hours, free rush on request when production allows, and a free remake if we make a mistake (reported within 30 days of delivery)"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "A round crewneck collar with no V opening and a cap sleeve with light shoulder coverage, fully sublimated in your team colors. HAMLO SPORTS makes each jersey entirely direct from our specialized Sialkot, Pakistan manufacturing facility with full sublimation on every panel, ~160 GSM 4-way stretch polyester performance fabric, and a cap sleeve silhouette that adds polish without restricting arm movement. Design proof turned around within 12 hours and zero setup fees from any order size. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-crewneck-cap-sleeve-jerseys",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 37.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 37.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 255,
    "name": "Custom Volleyball Racerback Tank Top Jerseys",
    "slug": "custom-volleyball-racerback-tanktop-jerseys",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029878/hamlosports/products/volleyball/custom-volleyball-racerback-tanktop-jerseys.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-racerback-tanktop-jerseys/",
    "rating": 4.9,
    "reviews": 43,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Y-back racerback strap pulls toward the spine, clearing the shoulder blade entirely for unrestricted arm swing on attacks and serves",
      "Full sublimation from neckline to hem with unlimited colors, logos, and patterns dye-fused into the fabric, so there is molecularly infused graphics that will never crack, peel, or fade",
      "4-way stretch performance fabric",
      "Moisture-wicking fabric pulls sweat away from the skin through tournament days and outdoor beach sessions",
      "Sublimated player names, numbers, and team logos are included in the per-jersey price, with no itemized add-ons and no setup charges",
      "Youth and adult sizes in a single order, from your youngest club players to varsity starters",
      "No minimum order quantity required; volume pricing on jerseys as low as $36.99/each on 101+ pieces, zero hidden setup costs",
      "Free professional design mockup within 12 hours, free rush on request when production allows, and a free remake if we make a mistake (reported within 30 days of delivery)"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "The racerback isn't a variation of the standard sleeveless jersey, it's a different cut entirely, built for players who want the shoulder blade completely clear of fabric during every attack, set, and beach dig. HAMLO SPORTS produces each jersey direct from our specialized Sialkot, Pakistan manufacturing facility with full sublimation across every panel, performance polyester fabric, and a free design mockup back in your inbox within 12 hours. Need a libero jersey? We make the racerback in a contrasting color in the same order. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-racerback-tanktop-jerseys",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 256,
    "name": "Custom Volleyball Sleeveless Jerseys",
    "slug": "custom-volleyball-sleeveless-jerseys",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "160 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029878/hamlosports/products/volleyball/custom-volleyball-sleeveless-jerseys.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-sleeveless-jerseys/",
    "rating": 4.9,
    "reviews": 44,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Open armhole cut for attacks, serves, and lateral saves, with no seam pulling against the swing",
      "Arm-sleeve compatible fit: players can layer their own compression sleeves underneath",
      "Full panel-to-panel sublimation with colors, logos, and patterns dyed into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight moisture-wicking fabric pulls sweat away through long tournament days and back-to-back gym sessions",
      "Sublimated player names, numbers, and team logos included in the per-piece price with no add-on fees, no setup charges, and no surprises on your invoice",
      "Youth and adult sizes come in one order, all produced in our own factory overseas",
      "No minimum order quantity required; volume pricing on jerseys as low as $36.99/each on 101+ pieces, zero hidden setup costs",
      "Free design mockup within 12 hours, free rush on request when production allows, and a free remake if we make a mistake (reported within 30 days of delivery)"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "The sleeveless jersey is the standard uniform cut in competitive volleyball, the style club directors default to, high school programs reorder every fall, and players expect when the uniform bag opens on the first day of the season. HAMLO SPORTS builds each jersey from scratch at our own overseas production facility on ~160 GSM polyester knit with 4-way stretch performance fabric, full panel-to-panel sublimation, and sublimated player names and numbers included at no extra cost. Libero contrast color available alongside the team colorway. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-sleeveless-jerseys",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "160 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 257,
    "name": "Custom Volleyball Competition Shorts",
    "slug": "custom-volleyball-competition-shorts",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "150 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029876/hamlosports/products/volleyball/custom-volleyball-competition-shorts.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-competition-shorts/",
    "rating": 4.9,
    "reviews": 45,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full sublimation panel to panel with colors, logos, and patterns dye-fused into the fabric, and replacement pairs are made from your saved design file",
      "4-way stretch athletic construction moves in every direction through lunges, lateral cuts, dives, and floor saves without bunching or pulling at the waistband",
      "Moisture-wicking performance fabric pulls sweat away through long tournament days and gym double-headers",
      "Elastic waistband and a mid-length match-day cut",
      "Sublimated team logos and player numbers included in the per-pair price, with No minimum order quantity required, so a single replacement pair is welcome",
      "Youth and adult sizes in one order, with no extra charge for any size",
      "No minimum order quantity required; volume pricing on pairs as low as $37.99/each on 101+ pieces, zero hidden setup costs",
      "Free design mockup within 12 hours, free rush on request when production allows, and a free remake if we make a mistake (reported within 30 days of delivery)"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom volleyball competition shorts for a full roster, for new players, for mid-season replacements, or on their own if you already have jerseys. HAMLO SPORTS makes every pair direct from our specialized Sialkot, Pakistan manufacturing facility with full sublimation across every panel. Built on ~150 GSM polyester knit with 4-way stretch performance fabric, elastic competition-fit waistband, and mid-length 9 to 11 inch volleyball inseam. No minimum order, and the price per pair is on the page before you ask for your quote. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-competition-shorts",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 37.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 37.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 258,
    "name": "Custom Volleyball Poly-spandex Shorts",
    "slug": "custom-volleyball-poly-spandex-shorts",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029877/hamlosports/products/volleyball/custom-volleyball-poly-spandex-shorts.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-poly-spandex-shorts/",
    "rating": 4.9,
    "reviews": 46,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Poly-spandex compression blend in a fitted cut",
      "Full sublimation from waistband to hem: unlimited colors dyed into the fabric, so they can't crack or peel off",
      "4-way stretch moves with the athlete in every direction and snaps back without distortion",
      "Wide elastic waistband stays securely at the natural waist without folding or rolling mid-match",
      "Moisture-wicking poly-spandex pulls sweat away and dries quickly through long tournament sessions",
      "Youth through adult sizes, the same price for every size.",
      "No minimum order quantity required and zero hidden setup costs: $42.99 per pair at 1 to 24, down to $36.99 at 101+.",
      "Free mockup within 12 hours, free rush on request when production allows, and a free remake if we make a mistake (reported within 30 days)"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom volleyball shorts in poly-spandex: the fitted compression cut volleyball players know. They're sublimated in your team colors from waistband to hem. We make each pair direct from our specialized Sialkot, Pakistan manufacturing facility on poly-spandex with 4-way stretch and a wide elastic waistband. Wearing them under looser shorts? We can make them in one plain, solid color for the whole roster; check your league's rule book for undergarment colors. No minimum order. Free mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-poly-spandex-shorts",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 259,
    "name": "Custom Volleyball Athletic Shorts",
    "slug": "custom-volleyball-athletic-shorts",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 38.99,
    "fabric": "150 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029875/hamlosports/products/volleyball/custom-volleyball-athletic-shorts.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-athletic-shorts/",
    "rating": 4.9,
    "reviews": 47,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Loose athletic cut gives full range of motion without compression fit, preferred for men's programs, co-ed leagues, and youth athletes wanting additional coverage",
      "Deep side pockets secure a phone, keys, or mouthguard during warmups without an extra bag at the bench",
      "Elastic waistband with adjustable drawstring",
      "Full sublimation, panel to panel, dyes colors, logos, and player numbers into the fabric",
      "Lightweight moisture-wicking fabric pulls sweat away through two-hour practices, tournament warmups, and back-to-back training blocks",
      "Youth and adult sizing in one order outfits mixed-age club programs from a single production run at one consistent price per pair",
      "No minimum order quantity required; volume pricing on pairs as low as $29.99/each on 101+ pieces, no setup charges",
      "Design approval before production and a free remake if we make a mistake, reported within 30 days"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Not every player on your roster reaches for a compression cut, and not every program should order one. The custom volleyball athletic short is the loose-fit, pocket-ready option that covers men's programs, co-ed leagues, youth teams, and any player who wants real coverage and a drawstring fit from warmup through the final buzzer. HAMLO SPORTS builds each pair direct from our specialized Sialkot, Pakistan manufacturing facility on ~150 GSM moisture-wicking polyester with elastic waistband, internal drawstring, deep side pockets, and the standard 9 to 11 inch volleyball inseam. Fully sublimated in your team's exact colors and logos, with a complimentary design mockup delivered within 12 hours of your request. No setup charges. No minimum order. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-athletic-shorts",
    "tierPrices": {
      "tier1": 38.99,
      "tier2": 34.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 38.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "150 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 260,
    "name": "Custom Volleyball Full-zip Hoodies",
    "slug": "custom-volleyball-full-zip-hoodies",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029876/hamlosports/products/volleyball/custom-volleyball-full-zip-hoodies.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-full-zip-hoodies/",
    "rating": 4.9,
    "reviews": 48,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Full-zip front with a zipper for quick on and off between sets",
      "Soft fleece lining built for cold gyms, early tournament mornings, and long travel days",
      "Direct-to-fabric sublimation locks in your colors, logos, and design, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Tackle twill and embroidery available for player names, numbers, and a dimensional finish",
      "Youth (YS to YXL) through adult (XS to 4XL) at the same per-piece price, with no size upcharges on any end",
      "No minimum order quantity required; volume pricing on hoodies as low as $39.99/each on 101+ pieces",
      "Affordable team pricing with zero setup fees and zero design fees"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom volleyball full-zip hoodies that keep your team looking unified from the first warmup to the last bus ride home, soft fleece lining, durable full-zip front, and your team colors, logo, and player names built into every hoodie. Designed for club programs, high school teams, and competitive leagues that want a polished look everywhere they compete. Every hoodie is designed by our in-house team and produced factory-direct in our Sialkot, Pakistan export manufacturing facility, from your first design sketch to the finished product shipped to your door. No hidden charges. Made from fleece with a brushed interior, ribbed cuffs and hem, and full-zip front. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-full-zip-hoodies",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 261,
    "name": "Custom Volleyball Pullover Hoodies",
    "slug": "custom-volleyball-pullover-hoodies",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029877/hamlosports/products/volleyball/custom-volleyball-pullover-hoodies.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-pullover-hoodies/",
    "rating": 4.9,
    "reviews": 49,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Classic pullover silhouette with zero hardware interrupting your team design, leaving the full front yours",
      "Soft fleece lining with structured drawstring hood, built for benches, hallways, and cold-gym warmups",
      "Direct-to-fabric sublimation fuses your colors and graphics into every thread, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Screen printing and tackle twill embroidery available for player names, numbers, and a raised finish",
      "Youth (YS to YXL) through adult (XS to 4XL) with no size upcharges across the full range",
      "No minimum order quantity required; volume pricing on hoodies as low as $38.99/each on 101+ pieces, zero hidden setup costs",
      "Every order includes design and production in one transparent price with no hidden line items, and your quote shows the price for player names and numbers"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom volleyball pullover hoodies with one clean, uninterrupted front panel built for bold team designs. Your logo, colors, and player names print directly into the fabric from collar to hem — no zipper splitting the artwork. Ideal for club programs, high school squads, and travel teams that want their identity to show up everywhere they compete, not just on the court. Every hoodie is made completely direct from our specialized Sialkot, Pakistan manufacturing facility, from pattern cutting through final stitch, so you get consistent sizing, consistent color, and a finished product that matches the mockup you approved. Made from fleece with a soft brushed interior lining, structured drawstring hood, ribbed cuffs and hem, and the closed pullover front that keeps the team design uninterrupted from collar to hem. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-pullover-hoodies",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 262,
    "name": "Custom Volleyball Warmup Jackets",
    "slug": "custom-volleyball-warmup-jackets",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029879/hamlosports/products/volleyball/custom-volleyball-warmup-jackets.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-warmup-jackets/",
    "rating": 4.9,
    "reviews": 50,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-zip front with a clean stand collar that strips off in seconds between warmup drills and court entry",
      "Lightweight performance shell fabric that blocks gym-floor cold without adding bulk or restricting shoulder movement",
      "Sublimation dyes your team colors, logo and design into every panel, so there is molecularly infused graphics that will never crack, peel, or fade.",
      "Side pockets on both panels keep hands warm on the bench",
      "Tackle twill names and numbers ($5 per name, $5 per number) and embroidered crests for a raised finish. Your quote shows the embroidery price.",
      "Youth (YS to YXL) through adult (XS to 4XL), the same price for every size.",
      "No minimum order quantity required: $49.99 per jacket at 1 to 24, down to $39.99 at 101+."
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "101+.",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-warmup-jackets",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 46.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 46.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 263,
    "name": "Custom Volleyball Quarter-zip Pullovers",
    "slug": "custom-volleyball-quarter-zipper-pullovers",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "240 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029877/hamlosports/products/volleyball/custom-volleyball-quarter-zipper-pullovers.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-quarter-zipper-pullovers/",
    "rating": 4.9,
    "reviews": 51,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Quarter-zip collar with smooth adjustable pull that opens for ventilation mid-warmup and seals tight when the gym runs cold",
      "Direct-to-fabric sublimation bonds your team colors, logo, and graphics into every fiber with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle twill and embroidery available for player names, numbers, and any elements where a raised finish matters",
      "Youth (YS–YXL) through adult (XS–4XL) sized consistently across every order with zero oversize upcharges on either end",
      "No minimum order quantity required; volume pricing on pullovers as low as $34.99/each on 101+ pieces, zero hidden setup costs",
      "The per-piece price covers design, sublimated names, numbers and logos, and production with no line items added after you approve"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom volleyball quarter-zip pullovers for the warmup window, moisture-wicking performance fabric, athletic-cut construction, and a collar zip for temperature control from bench to whistle. Team colors, logo, and player names are built into the fabric, not printed on top, so there is no print layer to crack or peel. Everything is produced factory-direct in our Sialkot, Pakistan export manufacturing facility from first approved mockup to final stitch. Built on ~240 GSM poly-cotton fleece blend (lighter than a full hoodie, warmer than a training tee), athletic cut, structured shoulder line, and the quarter-zip collar that opens for ventilation during dynamic warmups and seals tight for cold-gym bench rotations. No surprise charges. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-quarter-zipper-pullovers",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "240 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 264,
    "name": "Custom Volleyball Jogger Pants",
    "slug": "custom-volleyball-jogger-pants",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029877/hamlosports/products/volleyball/custom-volleyball-jogger-pants.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-jogger-pants/",
    "rating": 4.9,
    "reviews": 52,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Modern tapered leg narrows cleanly from hip to ankle with a sharp silhouette whether athletes are on the bench or walking through the venue",
      "Stretch fleece fabric with moisture-wicking finish stays light and breathable through active warmup drills without the stiff shell feel of traditional warmup pants",
      "Ankle zip opens wide enough to pull the jogger over volleyball shoes without removing them, straight path to the court with no untying and no sitting down",
      "Elastic waistband with drawstring secures the fit across the full size run from youth YS through adult 4XL with no upcharge at either end",
      "Zippered side pockets on both legs keep phones, keys, and valuables locked in during travel and sideline sessions without breaking the tapered profile",
      "Direct-to-fabric sublimation fuses your racing stripe, team logo, and colorway into every panel with molecularly infused graphics that will never crack, peel, or fade",
      "No minimum order quantity required; volume pricing on pairs as low as $36.99/each on 101+ pieces, no setup charges"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom volleyball jogger pants with a modern tapered fit, sublimated team colors, logo, and player names built into stretch fleece fabric that moves with athletes without adding bulk. The style-forward alternative to traditional warmup pants built for club programs and high school squads that want every piece of gear to look designed, not just purchased. Every pair is produced direct from our specialized Sialkot, Pakistan manufacturing facility, cut and sewn by our own team, so taper, color match, and sizing stay consistent across every athlete in the order. Built in a stretch polyester fleece with a tapered leg, ankle zip wide enough to clear volleyball shoes, elastic waistband with drawstring, and zippered side pockets on both legs. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-jogger-pants",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 265,
    "name": "Custom Volleyball Warmup Pants",
    "slug": "custom-volleyball-warmup-pants",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029879/hamlosports/products/volleyball/custom-volleyball-warmup-pants.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-warmup-pants/",
    "rating": 4.9,
    "reviews": 53,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Athletic-fit cut with full-length inseam that moves freely through dynamic stretches, court entries, and pre-match drill sequences without bunching or restriction",
      "Elastic waistband with adjustable drawstring secures the fit across every body type, from youth YS through adult 4XL, at the same per-piece price",
      "Lightweight performance polyester shell for warmups",
      "Direct-to-fabric sublimation bonds your team colors, side stripe, logo, and any design element into the fabric, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Side zip pockets on both legs hold phones and keys secure during transit without adding visual bulk to the clean sublimated panels",
      "Tackle twill and embroidery available for player names, numbers, or any raised-finish branding detail on the waistband or leg",
      "No minimum order quantity required; volume pricing on pairs as low as $34.99/each on 101+ pieces. Order a single pair or outfit every squad in your program, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom volleyball warm-up pants that complete the set, sublimated team colors, logo, and player names printed from waistband to ankle, built to match your jacket or hoodie as a locked-in program look. Designed for club directors and coaches who outfit full rosters across multiple squads and need every athlete dressed top to bottom in a consistent, coordinated design. Every pair is made factory-direct in our Sialkot, Pakistan export manufacturing facility from cut to final stitch, with consistent sizing across the order and color matched to your approved mockup. Built on a woven performance shell to match the warmup jacket's fabric and color file. No hidden charges. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-warmup-pants",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 266,
    "name": "Custom Volleyball Sweat Pants",
    "slug": "custom-volleyball-sweat-pants",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029878/hamlosports/products/volleyball/custom-volleyball-sweat-pants.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-sweat-pants/",
    "rating": 4.9,
    "reviews": 54,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Soft fleece lining with a relaxed athletic cut",
      "Elastic waistband with adjustable drawstring keeps every size locked in through warmups, bench sessions, and team travel without needing to re-tie",
      "Ribbed ankle cuffs hold the hem in place whether players are wearing court shoes or sneakers",
      "Direct-to-fabric sublimation infuses your team colors, side stripe, and logo into every panel",
      "Screen printing and tackle twill embroidery available for player names, numbers, and any raised-finish detail your program requires",
      "Youth (YS to YXL) through adult (XS to 4XL) at the same per-piece price with no size upcharge at either end and consistent fit across every roster",
      "No minimum order quantity required; volume pricing on pairs as low as $34.99/each on 101+ pieces. Order a single pair or stock your entire club program, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom volleyball sweat pants built for the long tournament day, soft fleece lining, relaxed athletic fit, and your team's colors, logo, and player names sublimated directly into the fabric. Wear them for sideline recovery, travel days and the hours between matches. Every pair is produced entirely direct from our specialized Sialkot, Pakistan manufacturing facility, from fabric cut through final stitch, so your color and sizing stay consistent across every player in the order. Made from fleece with a brushed interior lining, classic straight-leg silhouette, elastic waistband with drawstring, and ribbed ankle cuffs. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-sweat-pants",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 267,
    "name": "Custom Volleyball Short Sleeve T-shirts",
    "slug": "custom-volleyball-short-sleeve-t-shirts",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 32.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029878/hamlosports/products/volleyball/custom-volleyball-short-sleeve-t-shirts.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-short-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 55,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Lightweight practice tee with a relaxed crew neck, breathable enough for back-to-back practice rotations and comfortable enough to wear straight through to the parking lot",
      "Sublimation available for all-over team colors, bold graphics, and player names",
      "Screen printing available for printed logos and mascots",
      "Tackle twill and embroidery available for player names, numbers, or a premium raised-logo finish on the chest",
      "Youth (YS to YXL) through adult (XS to 4XL), the same price for every size.",
      "No minimum order quantity required and zero hidden setup costs: $32.99 per shirt at 1 to 24, down to $24.99 at 101+.",
      "Tackle twill is $5 per name and $5 per number, and your quote shows the price for screen printing and embroidery. Your quoted price doesn't change when you approve your mockup."
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Custom volleyball team shirts for players, parents and fans: short-sleeve tees in your team colors, with your logo, mascot and player names. Wear them at practice, camps, tournament weekends and in the parents' section. No minimum order: one shirt or the whole club, from $32.99 per shirt at 1 to 24, down to $24.99 at 101+. Roster tees and parent and fan shirts on the same order count toward the same price tier. We make every shirt direct from our specialized Sialkot, Pakistan manufacturing facility, and your whole order is made in the same dye batch, so the colors match. Cut with a relaxed crew neck, an athletic shoulder line and a clean hem. No setup fees. Free mockup within 12 hours. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-short-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 32.99,
      "tier2": 29.99,
      "tier3": 26.99,
      "tier4": 24.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 32.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 26.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 24.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 268,
    "name": "Custom Volleyball Long Sleeve T-shirts",
    "slug": "custom-volleyball-long-sleeve-t-shirts",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029877/hamlosports/products/volleyball/custom-volleyball-long-sleeve-t-shirts.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-long-sleeve-t-shirts/",
    "rating": 4.9,
    "reviews": 56,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Lightweight long sleeve practice tee, warm enough for cold gyms and thin enough to layer cleanly under any game-day jersey without bulk at the shoulders",
      "Athletic crew neck sits flat against the collar whether worn solo or underneath a jersey, quarter-zip, or warmup jacket",
      "Direct-to-fabric sublimation covers the full sleeve and body with team colors, graphics, and player names, with molecularly infused graphics that will never crack, peel, or fade",
      "Screen printing available for printed logos",
      "Tackle twill and embroidery available for player names, numbers, or a raised chest logo finish on any order size",
      "Youth (YS–YXL) through adult (XS–4XL) at the same per-piece price with no upcharges at either end and consistent sizing across every age group in the club",
      "No minimum order quantity required; volume pricing on shirts as low as $26.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom volleyball long sleeve t-shirts that pull double duty, a standalone practice shirt for cold-gym training days and a fitted base layer worn under the jersey on competition day. Lightweight practice tee, full-arm coverage, and your team colors, logo, and player names sublimated directly into every shirt. Every shirt is produced entirely direct from our specialized Sialkot, Pakistan manufacturing facility, no dealer network. You approve the mockup, and we make and ship it. Athletic crew neck, full sleeve and body coverage, and a cleanly tailored hem. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-long-sleeve-t-shirts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 269,
    "name": "Custom Volleyball Backpacks",
    "slug": "custom-volleyball-backpacks",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029876/hamlosports/products/volleyball/custom-volleyball-backpacks.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-backpacks/",
    "rating": 4.9,
    "reviews": 57,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Heavy-duty polyester shell with reinforced stitching at every stress point holds a full uniform, shoes, knee pads, and water bottle",
      "Full sublimation prints team colors, logo, and player names across every panel, with molecularly infused graphics that will never crack, peel, or fade",
      "Dedicated bottom shoe compartment keeps court shoes separated from clean gear on every travel day and tournament morning",
      "Padded shoulder straps with ergonomic back panel distribute weight evenly across long carry days without cutting into shoulders",
      "Side water bottle pockets on both panels keep hydration accessible during warmups without opening the main compartment",
      "Embroidery available for a raised logo finish on the front panel, ideal for programs that want a dimensional team-identity look",
      "No minimum order quantity required; volume pricing on backpacks as low as $64.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom volleyball backpacks that carry your team's identity into every venue before the first serve, sublimated team colors, logo, and player names across every panel of heavy-duty polyester construction, built to hold a full kit for twice-weekly practices and weekend tournament runs. The bag every player grabs at the door is the first thing anyone sees walking in. Make it count. Every backpack is made factory-direct in our Sialkot, Pakistan export manufacturing facility, from pattern cut to final stitch. Built on heavy-duty 600D polyester shell with bartack-reinforced stress points, large capacity, dedicated bottom shoe compartment for court shoes, padded ergonomic back panel, and side water bottle pockets on both panels. Transparent pricing. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-backpacks",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 69.99,
      "tier4": 64.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 69.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 64.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 270,
    "name": "Custom Volleyball Cinch Bags",
    "slug": "custom-volleyball-cinch-bags",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029876/hamlosports/products/volleyball/custom-volleyball-cinch-bags.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-cinch-bags/",
    "rating": 4.9,
    "reviews": 58,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Lightweight polyester with reinforced corner stitching holds shoes, a change of clothes, and practice gear",
      "Full-panel sublimation wraps team colors, logo, and player names across the entire bag, not just a small front print zone",
      "Dual-cord drawstring cinches tight and stays closed whether slung over one shoulder or dropped courtside",
      "Front pocket outside the main compartment",
      "Screen printing available for logos",
      "No minimum order quantity required; volume pricing on bags as low as $19.99/each on 101+ pieces",
      "Pricing includes design, sublimated player names and logo, and production with zero hidden setup costs, no per-color charges, and nothing added after mockup approval"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom volleyball cinch bags with your team logo, colors, and player names on lightweight polyester with full sublimation across every panel. It's the piece club directors order for every player on every squad without a second thought about cost. Every bag is produced factory-direct in our Sialkot, Pakistan export manufacturing facility from cut to final stitch with no print-area restrictions, and no front-panel-only limitations. Built on lightweight polyester with reinforced corner stitching, a dual-cord drawstring and a front pocket. No minimum order. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-cinch-bags",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 29.99,
      "tier3": 24.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 24.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 271,
    "name": "Custom Volleyball Knee Pads",
    "slug": "custom-volleyball-knee-pads",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 28.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029877/hamlosports/products/volleyball/custom-volleyball-knee-pads.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-knee-pads/",
    "rating": 4.9,
    "reviews": 59,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "High-density foam absorbs repeated court impact during dives, slides, and defensive digs",
      "Moisture-wicking stretch fabric pulls sweat away and allows full bend-and-extend range of motion without the pad shifting or bunching mid-play",
      "Non-slip interior grip band keeps each pad locked in position through the entire match with no stopping mid-rally to pull them back up",
      "Direct-to-fabric sublimation prints team colors, logo, and design into the sleeve, with molecularly infused graphics that will never crack, peel, or fade",
      "Screen printing available for logos",
      "Youth through adult sizing at the same per-piece price with no upcharge at either end of the size run",
      "No minimum order quantity required; volume pricing on pairs as low as $19.99/each on 101+ pieces, no setup charges"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom volleyball knee pads that complete the uniform color story all the way to the floor, high-density foam impact protection wrapped in moisture-wicking stretch fabric, sublimated in your exact team colors and logo so every player on the court matches from jersey to knee pad. Everything is made direct from our specialized Sialkot, Pakistan manufacturing facility with zero minimums, no 200-piece order wall to clear before you can get matching knee pads for a single squad. Built with high-density EVA foam padding wrapped in a moisture-wicking polyester-spandex stretch sleeve, non-slip interior grip band, and sublimated decoration across the full sleeve face. Knee pads ship as the floor-level finishing detail of the matching team kit — the piece that completes the team color story all the way down to the court. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-knee-pads",
    "tierPrices": {
      "tier1": 28.99,
      "tier2": 24.99,
      "tier3": 22.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 28.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 24.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 22.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 272,
    "name": "Custom Volleyball Socks",
    "slug": "custom-volleyball-socks",
    "categorySlug": "custom-volleyball-uniforms",
    "category": "VOLLEYBALL",
    "sport": "Volleyball",
    "badge": "FACTORY DIRECT",
    "price": 22.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029878/hamlosports/products/volleyball/custom-volleyball-socks.png",
    "canonical": "/custom-volleyball-uniforms/custom-volleyball-socks/",
    "rating": 4.9,
    "reviews": 60,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Crew, knee-high, and ankle lengths available so you can pick the height that matches your program's style or mix across a single order for different squads",
      "Moisture-wicking performance fabric pulls sweat away from the foot during long tournament days and back-to-back match rotations",
      "Cushioned sole absorbs repeated impact from jumping, landing, and court movement",
      "Full sublimation prints your team colors, logo, and player numbers into the fabric with no surface ink to crack or peel",
      "Screen printing available for printed logos",
      "Youth through adult sizing at the same per-piece price with consistent fit across every age group in the program and no upcharge at either end",
      "No minimum order quantity required; volume pricing on pairs as low as $14.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom volleyball socks in your team colors, produced direct from our specialized Sialkot, Pakistan manufacturing facility, by the same team, using the same color files as your jerseys, knee pads, and warmups. Available in crew, knee-high, and ankle lengths with a moisture-wicking knit and a cushioned sole. Sublimated team colors and screen-printed sponsor marks carry on the flat panel above the foot. No minimums. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/volleyball/custom-volleyball-socks",
    "tierPrices": {
      "tier1": 22.99,
      "tier2": 19.99,
      "tier3": 18.99,
      "tier4": 14.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 22.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 19.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 18.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 14.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 273,
    "name": "Custom Wrestling Team Singlets",
    "slug": "custom-wrestling-team-singlets",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 54.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029882/hamlosports/products/wrestling/custom-wrestling-team-singlets.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-team-singlets/",
    "rating": 4.9,
    "reviews": 61,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full size run from Youth Small through Adult 4XL, with every size made to our size chart",
      "Poly-spandex knit with flatlock seams",
      "Flatlock seam construction eliminates raised interior ridges that dig into skin during ground work and extended mat time",
      "Sublimation builds team colors, school logo, and athlete numbers into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight polyester-spandex blend for intense match sequences, without adding bulk",
      "No minimum order quantity required; volume pricing on singlets as low as $46.99/each on 101+ pieces. Order a single singlet for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling singlets for every weight class on your roster, with flatlock seams and sublimated graphics. Each singlet is tailored to order, and the sublimated team colors, school logo and athlete numbers are included in the base unit rate. Every singlet is produced direct from our specialized Sialkot, Pakistan manufacturing facility from pattern cut to flatlock seam to final stitch. When the team orders matching warmup jackets and warmup pants alongside the singlet, all three pieces are made direct from our specialized Sialkot, Pakistan manufacturing facility from one design file. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-team-singlets",
    "tierPrices": {
      "tier1": 54.99,
      "tier2": 52.99,
      "tier3": 49.99,
      "tier4": 46.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 54.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 52.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 49.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 46.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 274,
    "name": "Custom Wrestling Board Shorts",
    "slug": "custom-wrestling-board-shorts",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 48.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029879/hamlosports/products/wrestling/custom-wrestling-board-shorts.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-board-shorts/",
    "rating": 4.9,
    "reviews": 62,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "MMA-style board short silhouette provides knee-length coverage and relaxed-fit mobility that compression shorts and singlets can't cover during open mat, lifting, and team travel",
      "Hook-and-loop closure in place of a rigid waistband",
      "Stretch panels at the hip and inner thigh open the full width needed for deep shots, high crotch finishes, and lateral mat movement without the fabric pulling tight mid-sequence",
      "Full sublimation bonds team colors, logo, and athlete numbers into the fabric",
      "Screen printing available for school logos",
      "Youth through adult at the same per-piece price with no upcharge, every wrestler sized and priced consistently",
      "No minimum order quantity required; volume pricing on pairs as low as $39.99/each on 101+ pieces. Order a single pair for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling shorts in a board-short cut that cross every environment in a wrestler's week, mat sessions, strength training, travel days, and warmup walkouts, without changing out of your team's colors. MMA-style board short construction with hook-and-loop closure, stretch panels at the hip and crotch for full shot range, and your program's logo and colors sublimated from waistband to hem. One piece that works everywhere without looking like it was built for only one place. Every pair is cut and sublimated direct from our specialized Sialkot, Pakistan manufacturing facility on the same production line as the team singlet. Order both together and they are made in the same dye batch, so the colors match. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-board-shorts",
    "tierPrices": {
      "tier1": 48.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 48.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 275,
    "name": "Custom Wrestling Cinch Bags",
    "slug": "custom-wrestling-cinch-bags",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029879/hamlosports/products/wrestling/custom-wrestling-cinch-bags.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-cinch-bags/",
    "rating": 4.9,
    "reviews": 38,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Drawstring closure, quick access to shoes, headgear, and essentials without fumbling with zippers",
      "Full-color sublimation printed edge to edge, your team design becomes part of the fabric, so there is molecularly infused graphics that will never crack, peel, or fade",
      "Lightweight polyester construction, folds flat inside a gear bag for tournaments and weighs almost nothing on the walk from the bus to the mat",
      "Order the bags with your singlets and the whole order is made in the same dye batch, so the colors match",
      "No minimum order quantity required; volume pricing on bags as low as $19.99/each on 101+ pieces. Order a single bag for an individual wrestler or outfit every weight class on your roster, same process either way",
      "Sublimated names, numbers and logos are included in the per-bag price, with zero hidden setup costs and no per-color charges"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling cinch bags in your team colors. Lightweight drawstring construction with reinforced corners, durable polyester, and full-color sublimation that puts your team logo, colors, and player names on every bag. The per-piece price covers the sublimated design. Every cinch bag is made factory-direct in our Sialkot, Pakistan export manufacturing facility. The folds-flat profile slides inside the wrestler's duffle bag for travel days and unpacks into a same-day shoe + headgear carrier at the venue. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-cinch-bags",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 29.99,
      "tier3": 24.99,
      "tier4": 19.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 29.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 24.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 19.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 276,
    "name": "Custom Wrestling Compression Shorts",
    "slug": "custom-wrestling-compression-shorts",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 44.99,
    "fabric": "180 - 220 GSM 4-Way Stretch Poly-Spandex",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029879/hamlosports/products/wrestling/custom-wrestling-compression-shorts.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-compression-shorts/",
    "rating": 4.9,
    "reviews": 39,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "4-way stretch polyester-spandex moves with every shot, stance transition, and sprawl without pulling, bunching, or restricting hip rotation",
      "Moisture-wicking fabric pulls sweat through intense match sequences and back-to-back tournament rounds without adding weight or clinging to skin",
      "Compression-fit waistband keeps the short in place through scrambles and stance changes",
      "Full sublimation prints team colors, logo, and athlete numbers into the fabric, matched to your singlet design. Order them together and they're made in the same dye batch, so colors match",
      "Youth through adult sizing at the same per-piece price with no upcharge at either end of the size run",
      "No minimum order quantity required; volume pricing on pairs as low as $36.99/each on 101+ pieces. Order a single pair for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling compression shorts made to match your team singlet, worn under it in competition or on their own at weigh-ins and warmups. HAMLO SPORTS produces compression shorts and singlets in the same facility overseas from the same color files, so team colors, stripe placement, and logo position align across both pieces without a second vendor, a second quote, or a color-matching guessing game. Every pair is made factory-direct in our Sialkot, Pakistan export manufacturing facility to match the team singlet. The compression short carries the same look into weigh-ins, warmup runs, and post-match recovery so the wrestler stays in team colors from arrival to bracket-out. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-compression-shorts",
    "tierPrices": {
      "tier1": 44.99,
      "tier2": 42.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 44.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 42.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "4-Way Stretch Poly-Spandex",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 277,
    "name": "Custom Wrestling Crewneck Sweatshirts",
    "slug": "custom-wrestling-crewneck-sweatshirts",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 42.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029879/hamlosports/products/wrestling/custom-wrestling-crewneck-sweatshirts.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-crewneck-sweatshirts/",
    "rating": 4.9,
    "reviews": 40,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Soft fleece-lined interior delivers warmth for cold gym hallways, bus rides, and weigh-in mornings without the bulk of a full jacket",
      "Raglan sleeve construction keeps shoulder movement unrestricted during warmup drills and pre-match stretching",
      "Full sublimation bonds team colors, logo, and athlete names into the fabric, matched to your singlet color files for a unified program kit",
      "Ribbed cuffs and hem",
      "Tackle twill, embroidery, and screen printing all run alongside sublimation on this fleece: raised letter numbers across the back, embroidered crest on the chest, screen-printed school name, with sublimated decoration included in the per-sweatshirt price",
      "Youth (YS to YXL) through adult (XS to 4XL) at the same per-piece price with no upcharge at either end of the size run",
      "No minimum order quantity required; volume pricing on sweatshirts as low as $36.99/each on 101+ pieces. Order a single sweatshirt for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling crewneck sweatshirts built for every moment the singlet can't follow, weigh-ins, bus rides, hallway walk-ins on meet day, and the post-match hour when the program's identity still needs to show up. Soft fleece lining, raglan sleeve construction, and full sublimation in your exact team colors with player names and numbers included in the base unit rate. Every crewneck is made factory-direct in our Sialkot, Pakistan export manufacturing facility to match the team singlet, warmup jacket, and warmup pants. No generic off-the-shelf blanks, no generic shells with a logo dropped on the chest. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-crewneck-sweatshirts",
    "tierPrices": {
      "tier1": 42.99,
      "tier2": 39.99,
      "tier3": 37.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 42.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 39.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 37.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 278,
    "name": "Custom Wrestling Duffle Bags",
    "slug": "custom-wrestling-duffle-bags",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 89.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029880/hamlosports/products/wrestling/custom-wrestling-duffle-bags.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-duffle-bags/",
    "rating": 4.9,
    "reviews": 41,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Large main compartment for the full tournament-weekend kit: singlets, warmup top and pants, wrestling shoes, headgear, knee pad, mouthguard case, towel, and a change of clothes for post-match",
      "Separate ventilated shoe compartment keeps sweaty wrestling shoes apart from the singlets, warmups and the rest of your clean gear",
      "Reinforced stitching and bartack-stitched strap anchors built for weekly tournament travel",
      "600D polyester exterior",
      "Four decoration methods on the 600D polyester body: sublimation matched to your singlet and warmup color files, plus tackle twill for raised letter numbers, embroidery for chest crest or initials, and screen printing for logos. Sublimated names, numbers and logos are included in the per-bag price",
      "No minimum order quantity required; volume pricing on bags as low as $74.99/each on 101+ pieces. Order a single bag for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling duffle bags for a wrestler's full kit, with a large main compartment, multiple organized pockets, reinforced bottom and stitching, and full sublimation matched to your singlet and warmup color files included in the base unit rate. Every duffle is made factory-direct in our Sialkot, Pakistan export manufacturing facility to match the team singlet, warmup jacket, warmup pants, and cinch bag. The large main compartment, ventilated shoe compartment, and bartack-stitched strap anchors are built for weekly tournament travel. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-duffle-bags",
    "tierPrices": {
      "tier1": 89.99,
      "tier2": 84.99,
      "tier3": 79.99,
      "tier4": 74.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 89.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 84.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 79.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 74.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 279,
    "name": "Custom Wrestling Fight Shorts",
    "slug": "custom-wrestling-fight-shorts",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 48.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029880/hamlosports/products/wrestling/custom-wrestling-fight-shorts.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-fight-shorts/",
    "rating": 4.9,
    "reviews": 42,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Split leg construction opens the full range of hip width needed for explosive shot setups, level changes, and defensive scrambles without the short pulling or riding inward",
      "Flexible elastic waistband with internal drawstring cinches securely through every sequence without digging into the hip during ground work",
      "Moisture-wicking performance polyester for back-to-back rounds",
      "Full sublimation builds team colors, logo, and wrestler numbers into the fabric",
      "Screen printing available for school logos",
      "Youth through adult at the same per-piece price with no upcharge at either end of the size run",
      "No minimum order quantity required; volume pricing on pairs as low as $39.99/each on 101+ pieces. Order a single pair for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom fight shorts for wrestling, BJJ and MMA teams. Split-leg design for full stance width on every shot, with your team colors, logo, and athlete numbers sublimated into the fabric. Produced overseas in the same facility as your singlets. Ordered together, they are made in the same dye batch, so the colors match. Every pair is made factory-direct in our Sialkot, Pakistan export manufacturing facility to match the team singlet. The split-leg construction opens for explosive shot setups and full hip-extension; the woven 100% polyester shell holds the sublimated graphics. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-fight-shorts",
    "tierPrices": {
      "tier1": 48.99,
      "tier2": 44.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 48.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 280,
    "name": "Custom Wrestling Full Length Warmup Pants",
    "slug": "custom-wrestling-full-length-warmup-pants",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029880/hamlosports/products/wrestling/custom-wrestling-full-length-warmup-pants.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-full-length-warmup-pants/",
    "rating": 4.9,
    "reviews": 43,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Four decoration methods on the stable woven shell: sublimation builds full team colorway + side stripes + graphics dye-fused into the fabric (matched to your singlet color files), tackle twill anchors raised letter numbers on the leg panel, embroidery delivers a dimensional crest on the hip, and screen printing adds printed logos. Sublimated names, numbers and logos are included in the per-pair price",
      "Moisture-wicking polyester keeps wrestlers comfortable through warmup drills and mat-side waiting",
      "Elastic waistband with internal drawstring locks the fit from warm-up room to scorer's table without adjusting between rounds",
      "Side pockets on both legs keep essentials secured during travel and pre-match routines without breaking the clean silhouette",
      "Youth (YS to YXL) through adult (XS to 4XL) at the same per-piece price with no upcharge at either end",
      "No minimum order quantity required; volume pricing on pairs as low as $34.99/each on 101+ pieces. Order a single pair for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling full length warmup pants built for the mat entrance, full sublimation from waistband to ankle with custom side stripes, team logo, and player names produced from the same color files as your singlets. Elastic waistband, moisture-wicking polyester, and side pockets included in the base unit rate. Every pair is made factory-direct in our Sialkot, Pakistan export manufacturing facility to match the team warmup jacket and singlet. The same woven shell construction carries from pant to jacket so the top and bottom read as one matched set when the team walks into the venue. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-full-length-warmup-pants",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 281,
    "name": "Custom Wrestling Full Zip Hoodies",
    "slug": "custom-wrestling-full-zip-hoodies",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029880/hamlosports/products/wrestling/custom-wrestling-full-zip-hoodies.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-full-zip-hoodies/",
    "rating": 4.9,
    "reviews": 44,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Full-length zipper removes in seconds at mat side with no pulling over the head before a match",
      "Raglan sleeve construction keeps full shoulder range open through warmup drills and pre-match movement",
      "Soft fleece interior retains warmth on cold gym floors and between-round recovery without adding bulk over a singlet",
      "Sublimation bonds team colors, logo, and athlete name using the same color files as your singlets",
      "Kangaroo front pocket for warm hands at the bench",
      "Tackle twill, embroidery, and screen printing all run alongside sublimation on this fleece: raised letter numbers across the back, embroidered crest on the chest, screen-printed school name, with sublimated decoration included in the per-hoodie price",
      "Youth YS to YXL through adult XS to 4XL with no size upcharge across the full roster",
      "No minimum order quantity required; volume pricing on hoodies as low as $39.99/each on 101+ pieces. Order a single hoodie for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling full zip hoodies built around the 60 seconds before a match starts, full-length zipper that comes off at mat side without pulling over the head, raglan sleeve construction that keeps shoulder range open through every warmup drill, and sublimation matched to the same color files as your singlets so the full program kit reads as one unified look. Every hoodie is made factory-direct in our Sialkot, Pakistan export manufacturing facility to match the team crewneck, pullover hoodie, warmup jacket, warmup pants, and singlet. The fleece takes full sublimation and stays soft, so the hoodie feels like a quality varsity piece. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-full-zip-hoodies",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 47.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 47.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 282,
    "name": "Custom Wrestling Full Zip Warmup Jackets",
    "slug": "custom-wrestling-full-zip-warmup-jackets",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029881/hamlosports/products/wrestling/custom-wrestling-full-zip-warmup-jackets.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-full-zip-warmup-jackets/",
    "rating": 4.9,
    "reviews": 45,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full-length zipper removes in seconds at mat side with no pulling over the head before a match",
      "Raglan sleeve construction keeps shoulder range open for warmup drills and pre-match movement",
      "Durable polyester built for travel and weekly washing",
      "Athletic cut that fits over a singlet or compression layer",
      "Four decoration methods: sublimation dyes the full team colorway and graphics into the fabric (matched to your singlet color files), tackle twill anchors raised letter numbers across the back, embroidery delivers a dimensional crest on the chest, and screen printing handles bold single-color sponsor marks. Sublimated names, numbers and logos are included in the per-jacket price",
      "Youth YS to YXL through adult XS to 4XL, no size upcharge",
      "No minimum order quantity required; volume pricing on jackets as low as $39.99/each on 101+ pieces. Order a single jacket for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling full zip warmup jackets that represent the program from the bus ride to the mat entrance, the most visible piece of team identity that isn't the singlet. Durable polyester, athletic cut over a singlet or compression layer, full-length zipper for quick removal at mat side, and your team colors sublimated across every panel from collar to hem. Every jacket is made factory-direct in our Sialkot, Pakistan export manufacturing facility to match the team warmup pant and singlet. The same woven shell construction carries from jacket to pant so the two read as one unified set when the team walks into the venue. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-full-zip-warmup-jackets",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 46.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 46.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 283,
    "name": "Custom Wrestling Gear Bags",
    "slug": "custom-wrestling-gear-bags",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 79.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029881/hamlosports/products/wrestling/custom-wrestling-gear-bags.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-gear-bags/",
    "rating": 4.9,
    "reviews": 46,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Ventilated mesh construction keeps gear fresh between daily practice sessions",
      "Multiple compartments organized for shoes, headgear, tape, and water bottle",
      "Adjustable padded shoulder strap built for the daily commute from car to mat",
      "Four decoration methods on the solid body panels: sublimation matched to your singlet and warmup color files, plus tackle twill for raised letter numbers, embroidery for a chest crest, and screen printing for logos. Sublimated names, numbers and logos are included in the per-bag price",
      "No minimum order quantity required; volume pricing on bags as low as $64.99/each on 101+ pieces. Order a single bag for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling gear bags built for the daily locker-to-mat carry, ventilated mesh construction, multiple compartments for shoes, headgear, and practice essentials, and full sublimation matched to your singlet and warmup color files included in the base unit rate. Every gear bag is made factory-direct in our Sialkot, Pakistan export manufacturing facility to match the team singlet, warmup kit, and cinch bag. The ventilated mesh side panels dry sweaty wrestling shoes and headgear between daily practice sessions; the mid-size body sits between the day-of-tournament cinch bag and the full-weekend duffle. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-gear-bags",
    "tierPrices": {
      "tier1": 79.99,
      "tier2": 74.99,
      "tier3": 69.99,
      "tier4": 64.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 79.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 74.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 69.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 64.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 284,
    "name": "Custom Wrestling Lightweight Track Jackets",
    "slug": "custom-wrestling-lightweight-track-jackets",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029881/hamlosports/products/wrestling/custom-wrestling-lightweight-track-jackets.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-lightweight-track-jackets/",
    "rating": 4.9,
    "reviews": 47,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Wind-resistant woven polyester shell blocks cold without the bulk of a full warmup jacket",
      "Breathable mesh lining for walkouts and outdoor pre-match prep",
      "Full-zip front layers cleanly over a compression shirt or singlet, on or off in seconds",
      "Three decoration methods on the lightweight shell: sublimation bonds team colors and logo into every panel, embroidery delivers a dimensional chest crest with the mesh lining hiding the backing, and screen printing handles program logos; no tackle twill on the track jacket",
      "Youth YS to YXL through adult XS to 4XL, no size upcharge",
      "No minimum order quantity required; volume pricing on jackets as low as $36.99/each on 101+ pieces. Order a single jacket for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling lightweight track jackets, the packable, wind-resistant layer that travels in a backpack, stays on during outdoor weigh-in walks, and represents the program everywhere a heavier warmup jacket gets left in the locker room. Woven polyester shell, breathable mesh lining, full-zip front, side pockets, team colors sublimated across every panel. Every jacket is made factory-direct in our Sialkot, Pakistan export manufacturing facility to match the team singlet and warmup kit. The packable wind-shell stuffs into a backpack for travel days and outdoor weigh-in walks where the heavier woven warmup jacket gets left in the locker room — the lightweight program-identity layer that goes everywhere. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-lightweight-track-jackets",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 44.99,
      "tier3": 39.99,
      "tier4": 36.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 39.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 36.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 285,
    "name": "Custom Wrestling Long Sleeve Compression Shirts",
    "slug": "custom-wrestling-long-sleeve-compression-shirts",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029881/hamlosports/products/wrestling/custom-wrestling-long-sleeve-compression-shirts.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-long-sleeve-compression-shirts/",
    "rating": 4.9,
    "reviews": 48,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full sublimation from collar to cuff bonds team colors, sleeve stripes, and logo, with molecularly infused graphics that will never crack, peel, or fade",
      "Youth (YS to YXL) through adult (XS to 4XL) sizing"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Coming soon Custom wrestling long sleeve compression shirts are coming soon, with full sublimation in your team colors for cold-gym training and conditioning. A long-sleeve training base layer to wear with your singlet. It isn't available to order yet; questions about it go to our team.",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-long-sleeve-compression-shirts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 34.99,
      "tier3": 34.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 286,
    "name": "Custom Wrestling Long Sleeve Performance Shirts",
    "slug": "custom-wrestling-long-sleeve-performance-shirts",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029881/hamlosports/products/wrestling/custom-wrestling-long-sleeve-performance-shirts.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-long-sleeve-performance-shirts/",
    "rating": 4.9,
    "reviews": 49,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Lightweight moisture-wicking polyester pulls sweat away through back-to-back drilling sessions and full camp weeks without clinging to skin",
      "Relaxed athletic fit built for unrestricted movement through shots, live goes, and conditioning blocks without pulling at the shoulder or restricting hip rotation",
      "Full sublimation from collar to cuff bonds team colors, sleeve graphics, and logo, with molecularly infused graphics that will never crack, peel, or fade",
      "Three decoration methods on the lightweight performance knit: sublimation in your team colors, screen printing for logos, and embroidery for a dimensional chest crest; no tackle twill on this shirt",
      "Youth (YS to YXL) through adult (XS to 4XL) at the same per-piece price with no upcharge at either end of the size run",
      "No minimum order quantity required; volume pricing on shirts as low as $32.99/each on 101+ pieces. Order a single shirt for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Order long sleeve wrestling team shirts for the practice room, drilling sessions, and wrestling camps, lightweight moisture-wicking fabric, relaxed athletic fit, and full sublimation in your team colors at the same per-piece price. The shirt your team wears more than anything else — now fully branded to match the rest of the program kit. Made factory-direct in our Sialkot, Pakistan export manufacturing facility to match your singlet and warmup kit. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-long-sleeve-performance-shirts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 34.99,
      "tier4": 32.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 32.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 287,
    "name": "Custom Wrestling Performance Polo Shirts",
    "slug": "custom-wrestling-performance-polo-shirts",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029881/hamlosports/products/wrestling/custom-wrestling-performance-polo-shirts.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-performance-polo-shirts/",
    "rating": 4.9,
    "reviews": 50,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Moisture-wicking performance fabric keeps coaches comfortable through full tournament days",
      "Classic button placket with a clean athletic fit built for the sideline and beyond",
      "Four decoration methods on the pique knit: embroidery for the classic chest crest and staff name/title, sublimation in your team colors, tackle twill for raised lettering, and screen printing for logos; sublimated names, numbers and logos are included in the per-polo price",
      "Anti-wrinkle fabric travels well from dual meets to away tournament weekends",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on polos as low as $29.99/each on 101+ pieces. Order a single polo for one coach or outfit the entire staff, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling performance polo shirts built for coaches and staff who want the bench to look as unified as the mat, moisture-wicking performance fabric, classic button placket, and full sublimation in your team colors included in the base unit rate. Made factory-direct in our Sialkot, Pakistan export manufacturing facility. Order polos with the team singlets and warmups and the whole order is made in the same dye batch, so the colors match. Embroider each coach's name and title (Head Coach, Assistant, Athletic Trainer) for a clean staff-identification look at duals and tournaments. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-performance-polo-shirts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 288,
    "name": "Custom Wrestling Practice Shorts",
    "slug": "custom-wrestling-practice-shorts",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 39.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029881/hamlosports/products/wrestling/custom-wrestling-practice-shorts.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-practice-shorts/",
    "rating": 4.9,
    "reviews": 51,
    "isNew": true,
    "isBestseller": true,
    "features": [
      "Lightweight quick-dry polyester for back-to-back drilling sessions",
      "Breathable mesh side panels at the hip crease and inner thigh",
      "Elastic waistband with internal drawstring",
      "Sublimation bonds team colors, logo, and athlete numbers into the fabric with molecularly infused graphics that will never crack, peel, or fade",
      "Screen printing available for school logos",
      "Youth through adult at the same per-piece price, every size in the room from the lightest freshman to the heavyweight senior priced the same with no upcharge",
      "No minimum order quantity required; volume pricing on pairs as low as $32.99/each on 101+ pieces. Order a single pair for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling practice shorts that hold up to the reality of a wrestling room, daily double sessions, and repeated single-leg sprawls.",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-practice-shorts",
    "tierPrices": {
      "tier1": 39.99,
      "tier2": 36.99,
      "tier3": 34.99,
      "tier4": 32.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 39.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 36.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 32.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 289,
    "name": "Custom Wrestling Pullover Hoodies",
    "slug": "custom-wrestling-pullover-hoodies",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 46.99,
    "fabric": "180 - 220 GSM Brushed Thermal Poly-Fleece",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029882/hamlosports/products/wrestling/custom-wrestling-pullover-hoodies.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-pullover-hoodies/",
    "rating": 4.9,
    "reviews": 52,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Uninterrupted front canvas with no zipper splitting the design gives your crest, school name, and graphics the full chest surface to run edge to edge",
      "Soft fleece interior retains warmth through cold-gym practice days and recovery sessions without the gap a full-zip leaves at the chest",
      "No zipper, so there is nothing to break, snag, or jam mid-season",
      "Raglan sleeve construction keeps shoulder range fully open through warmup drills and pre-match movement",
      "Sublimation bonds team colors, logo, and athlete name into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Tackle twill, embroidery, and screen printing all run alongside sublimation on this fleece: raised letter numbers across the back, embroidered crest on the chest, screen-printed school name, with sublimated decoration included in the per-hoodie price",
      "Youth YS to YXL through adult XS to 4XL with no size upcharge across the full roster",
      "No minimum order quantity required; volume pricing on hoodies as low as $38.99/each on 101+ pieces. Order a single hoodie for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling pullover hoodies built for every moment away from the mat, travel days, cold-gym sessions, and team photos where the program's identity shows up as one uninterrupted piece. No zipper splitting the front graphic in half, just your sublimated school name, crest, and team colors running edge to edge in the per-piece price. Every hoodie is made factory-direct in our Sialkot, Pakistan export manufacturing facility to match the team crewneck, full-zip hoodie, warmup kit, and singlet. The fleece takes full sublimation and stays soft, so the hoodie feels like a quality varsity piece. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-pullover-hoodies",
    "tierPrices": {
      "tier1": 46.99,
      "tier2": 44.99,
      "tier3": 41.99,
      "tier4": 38.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 46.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 44.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 41.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 38.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Brushed Thermal Poly-Fleece",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 290,
    "name": "Custom Wrestling Quarter Zip Warmup Jackets",
    "slug": "custom-wrestling-quarter-zipper-warmup-jackets",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029882/hamlosports/products/wrestling/custom-wrestling-quarter-zipper-warmup-jackets.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-quarter-zipper-warmup-jackets/",
    "rating": 4.9,
    "reviews": 53,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Quarter-zip collar adjusts ventilation on the fly between rounds without removing the jacket",
      "Stays on through warmup drills where a full-zip would gape open or need to be stripped off",
      "Moisture-wicking polyester moves sweat away during high-intensity pre-match prep",
      "Raglan sleeve keeps full shoulder range for dynamic stretching and shadow wrestling",
      "Sublimation bonds team colors and logo, matched to your singlet color files",
      "Four decoration methods on the stable woven shell: sublimation matched to your singlet color files, tackle twill for raised letter numbers across the back, embroidery for a chest crest, and screen printing for printed logos; sublimated names, numbers and logos are included in the per-jacket price",
      "Youth YS–YXL through adult XS–4XL, no size upcharge",
      "No minimum order quantity required; volume pricing on jackets as low as $39.99/each on 101+ pieces. Order a single jacket for an individual wrestler or outfit every weight class on your roster, same process either way"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling quarter zip warmup jackets for the warmup room, the layer that stays on through stretching, shadow drilling, and mat-side prep without flying open or getting in the way. Quarter-zip collar dials ventilation up or down between drills; moisture-wicking polyester shell; team colors and logo sublimated across every panel. Every jacket is made factory-direct in our Sialkot, Pakistan export manufacturing facility to match the team warmup pant and singlet. The quarter-zip pulls over the head. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-quarter-zipper-warmup-jackets",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 46.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 46.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 291,
    "name": "Custom Wrestling Short Sleeve Compression Shirts",
    "slug": "custom-wrestling-short-sleeve-compression-shirts",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029882/hamlosports/products/wrestling/custom-wrestling-short-sleeve-compression-shirts.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-short-sleeve-compression-shirts/",
    "rating": 4.9,
    "reviews": 54,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Full sublimation from collar to sleeve hem bonds team colors, sleeve graphics, and logo, with molecularly infused graphics that will never crack, peel, or fade",
      "A short sleeve cut for warm practice rooms and summer wrestling camps",
      "Youth (YS to YXL) through adult (XS to 4XL) sizing"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Coming soon Custom wrestling short sleeve compression shirts are coming soon, with full sublimation in your team colors for warm gyms and summer camps. A short-sleeve training base layer. Wear it under the singlet or on its own for warm-gym training. It isn't available to order yet; questions about it go to our team.",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-short-sleeve-compression-shirts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 34.99,
      "tier3": 34.99,
      "tier4": 34.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 34.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 34.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 292,
    "name": "Custom Wrestling Short Sleeve Performance Shirts",
    "slug": "custom-wrestling-short-sleeve-performance-shirts",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 38.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029882/hamlosports/products/wrestling/custom-wrestling-short-sleeve-performance-shirts.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-short-sleeve-performance-shirts/",
    "rating": 4.9,
    "reviews": 55,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Lightweight moisture-wicking polyester pulls sweat away through long practice sessions",
      "Relaxed athletic fit built for unrestricted movement during drilling and live goes",
      "Three decoration methods: full sublimation matched to your singlet and warmup color files, plus embroidery and screen printing for a simpler chest mark",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on shirts as low as $29.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling shirts for daily practice: short sleeve performance shirts built for high-rep drilling sessions, and full camp weeks, lightweight moisture-wicking fabric, relaxed athletic fit, and full sublimation matched to your singlet and warmup color files included in the base unit rate. The loose-fit shirt your wrestlers reach for more than anything else in the bag — daily drilling, conditioning, and camp weeks. Sublimate it to match the singlet and warmups for a coordinated program look, or run embroidery and screen print for a simpler chest mark. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-short-sleeve-performance-shirts",
    "tierPrices": {
      "tier1": 38.99,
      "tier2": 34.99,
      "tier3": 32.99,
      "tier4": 29.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 38.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 34.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 32.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 29.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 293,
    "name": "Custom Wrestling Socks",
    "slug": "custom-wrestling-socks",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 22.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029882/hamlosports/products/wrestling/custom-wrestling-socks.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-socks/",
    "rating": 4.9,
    "reviews": 56,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Cushioned sole for takedowns, mat work, and tournament days",
      "Two decoration methods — sublimation for full-color allover designs and screen printing for bold logos and stripes, both suited to the stretch knit",
      "Low-profile construction fits inside wrestling shoes without bunching, thick enough for cushion but thin enough for ground feel",
      "Youth (YS to YXL) through adult (XS to 4XL) in crew, knee-high, or ankle lengths with zero oversize upcharges",
      "No minimum order quantity required; volume pricing as low as $14.99/pair on 101+ pairs"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling socks with a cushioned sole, moisture-wicking fabric and a low-profile fit. Each pair is tailored to order with your team colors, logo, player names, and design sublimated directly into the fabric, so there is no print layer to crack or peel. Available in crew, knee-high, and ankle lengths in youth and adult sizes. Sublimate the team colorway and logo edge to edge, or screen print a bold mark and stripes. Either way the socks go with the rest of the program kit. The roster add-on that finishes the look from singlet to shoe. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-socks",
    "tierPrices": {
      "tier1": 22.99,
      "tier2": 19.99,
      "tier3": 18.99,
      "tier4": 14.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 22.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 19.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 18.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 14.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 294,
    "name": "Custom Wrestling Tear Away Warmup Pants",
    "slug": "custom-wrestling-tear-away-warmup-pants",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 54.99,
    "fabric": "180 - 220 GSM Performance Poly Interlock",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029883/hamlosports/products/wrestling/custom-wrestling-tear-away-warmup-pants.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-tear-away-warmup-pants/",
    "rating": 4.9,
    "reviews": 57,
    "isNew": true,
    "isBestseller": false,
    "features": [
      "Snap button breakaway runs the full leg seam for instant mat-side removal without bending, untying, or interrupting pre-match focus",
      "Full sublimation bonds team colors, side stripes, and logo into the fabric, matched to your singlet color files for a unified program look",
      "Moisture-wicking polyester stays comfortable through warmup drills and corridor walks",
      "Elastic waistband with internal drawstring locks the fit securely from walkout to removal without adjusting between rounds",
      "Four decoration methods (sublimation, tackle twill, embroidery, and screen printing) all run on the stable woven shell for raised leg lettering, a dimensional crest, or printed logos",
      "Youth (YS to YXL) through adult (XS to 4XL) at the same per-piece price with no upcharge at either end",
      "No minimum order quantity required; volume pricing on pants as low as $42.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling tear away warmup pants built for the second before the match starts, snap button breakaway down the full leg seam, sublimated team colors, side stripes, and logo matched to your singlet color files in the per-piece price. No untying, no sitting down, no delay between the walkout and the mat. Built on the same woven shell as the team warmup jacket. The snap-button breakaway is the wrestling-specific detail a jogger or track pant can't match — they come off in one pull at the edge of the mat without sitting down to pull them over shoes. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-tear-away-warmup-pants",
    "tierPrices": {
      "tier1": 54.99,
      "tier2": 52.99,
      "tier3": 49.99,
      "tier4": 42.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 54.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 52.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 49.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 42.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Poly Interlock",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 295,
    "name": "Custom Wrestling Training Shorts",
    "slug": "custom-wrestling-training-shorts",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 34.99,
    "fabric": "180 - 220 GSM Breathable Poly Athletic Mesh",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029883/hamlosports/products/wrestling/custom-wrestling-training-shorts.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-training-shorts/",
    "rating": 4.9,
    "reviews": 58,
    "isNew": false,
    "isBestseller": false,
    "features": [
      "Lightweight quick-dry fabric built for high-output drilling and conditioning sessions",
      "Breathable mesh construction for long practice days",
      "Elastic waistband with drawstring",
      "Two decoration methods: full sublimation waistband to hem, plus screen printing for logos",
      "Youth (YS to YXL) through adult (XS to 4XL) with zero oversize upcharges",
      "No minimum order quantity required; volume pricing on pairs as low as $26.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling training shorts for the practice room, conditioning blocks, and full camp weeks, lightweight quick-dry fabric, elastic waistband with drawstring, and full sublimation in your team colors included in the base unit rate. Want a board-short cut for travel and warm-ups? See our custom wrestling shorts. The off-mat conditioning short: loose quick-dry knit with mesh panels for running, lifting, and camp-week dryland, worn over the compression shorts. Sublimate the team colorway or screen print a bold logo. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-training-shorts",
    "tierPrices": {
      "tier1": 34.99,
      "tier2": 32.99,
      "tier3": 29.99,
      "tier4": 26.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 34.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 32.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 29.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 26.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Breathable Poly Athletic Mesh",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  },
  {
    "id": 296,
    "name": "Custom Wrestling Warmup Pants",
    "slug": "custom-wrestling-warmup-pants",
    "categorySlug": "custom-wrestling-singlets",
    "category": "WRESTLING",
    "sport": "Wrestling",
    "badge": "FACTORY DIRECT",
    "price": 49.99,
    "fabric": "180 - 220 GSM Performance Polyester Knit",
    "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
    "image": "https://res.cloudinary.com/xt0lhjd4/image/upload/v1795029883/hamlosports/products/wrestling/custom-wrestling-warmup-pants.png",
    "canonical": "/custom-wrestling-singlets/custom-wrestling-warmup-pants/",
    "rating": 4.9,
    "reviews": 59,
    "isNew": false,
    "isBestseller": true,
    "features": [
      "Modern tapered jogger cut narrows cleanly from hip to cuffed ankle for a sharp silhouette on the bus, in the venue, and on the mat",
      "Full sublimation bonds team colors, side panel designs, and logo into the fabric, with molecularly infused graphics that will never crack, peel, or fade",
      "Elastic waistband with internal drawstring",
      "Zippered side pockets keep phone, keys, and essentials secure during travel days and pre-match routines",
      "Three decoration methods — full sublimation for the team colorway and side panels, plus embroidery and screen printing for a clean hip or thigh mark on the soft knit",
      "Moisture-wicking polyester stays light and breathable through active warmup without the stiff shell feel of traditional warmup pants",
      "Youth (YS to YXL) through adult (XS to 4XL) at the same per-piece price with no upcharge at either end",
      "No minimum order quantity required; volume pricing on pants as low as $39.99/each on 101+ pieces"
    ],
    "sizes": [
      "YS",
      "YM",
      "YL",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "description": "Crafted for competitive play, our custom wrestling warmup pants built with a modern tapered jogger cut, cuffed ankles, full sublimation, and your team colors, logo, and player names locked into the fabric in the per-piece price. The style-forward alternative to traditional straight-leg warmup pants for programs that want every piece of their kit to look designed, not just functional. The travel-and-lifestyle bottom of the sideline kit — softer and lighter than the structured woven tear-away and full-length warmup pants, with a tapered jogger cut and zippered pockets for the bus, the hotel, and pre-match downtime. Sublimate it to match the singlet and warmups, or run embroidery and screen print for a clean program mark. No minimum orders. Complimentary 12-Hour 3D Digital Design Mockups. Fast US Nationwide Delivery (Duties Pre-Cleared).",
    "cloudinaryPublicId": "hamlosports/products/wrestling/custom-wrestling-warmup-pants",
    "tierPrices": {
      "tier1": 49.99,
      "tier2": 46.99,
      "tier3": 42.99,
      "tier4": 39.99
    },
    "volumeTiers": [
      {
        "minQty": 1,
        "maxQty": 24,
        "label": "1 to 24",
        "price": 49.99
      },
      {
        "minQty": 25,
        "maxQty": 50,
        "label": "25 to 50",
        "price": 46.99
      },
      {
        "minQty": 51,
        "maxQty": 100,
        "label": "51 to 100",
        "price": 42.99
      },
      {
        "minQty": 101,
        "maxQty": 99999,
        "label": "101+",
        "price": 39.99
      }
    ],
    "fabricSpecs": {
      "fabric": "Performance Polyester Knit",
      "weight": "180 - 220 GSM",
      "stitch": "4-Thread Reinforced Flat-Lock",
      "care": "Machine Wash Cold, Hang Dry"
    }
  }
];

export default fullCatalog296;
