import { useState } from "react";
import { useCMS } from "../../context/CMSContext";

const defaultHotspots = [
  {
    id: 1,
    left: "9%",
    top: "35%",
    title: "Pro Soccer Sublimated Kit",
    description: "160 GSM lightweight micro-interlock fabric with underarm ventilation airflow panels.",
    color: "Navy / Flame Orange",
    sizes: ["YS", "YM", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 2,
    left: "21%",
    top: "38%",
    title: "Fastpitch Softball Pro Jersey",
    description: "Two-button moisture-wicking jersey with stretch fit pant and reinforced knee slide protection.",
    color: "Navy / White / Gold Accent",
    sizes: ["YS", "YM", "YL", "S", "M", "L", "XL"],
  },
  {
    id: 3,
    left: "29%",
    top: "36%",
    title: "Lacrosse Match Pinnacle & Kilt",
    description: "Ultra-breathable micro-mesh sleeveless racerback with athletic flatlock compression.",
    color: "Navy / Orange Trim",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    left: "40%",
    top: "34%",
    title: "Vortex Basketball Game Set",
    description: "Moisture-wicking micro-mesh reversible tank with reinforced neck ribbing and pocketless regulation shorts.",
    color: "Stealth Navy / Orange",
    sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 5,
    left: "50%",
    top: "48%",
    title: "Youth Flag Football Uniform",
    description: "4-way performance stretch fitted jersey with quick-release integrated belt loops.",
    color: "Navy / Orange Flag Set",
    sizes: ["YXS", "YS", "YM", "YL"],
  },
  {
    id: 6,
    left: "61%",
    top: "35%",
    title: "Rugby Combat Pro Kit",
    description: "Heavyweight 280 GSM tear-resistant poly-spandex with grip-lock chest panel and reinforced collar.",
    color: "Navy / High-Vis Orange",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: 7,
    left: "73%",
    top: "38%",
    title: "Elite Wrestling Compression Singlet",
    description: "240 GSM anti-chafing poly-spandex with flatlock seam reinforcement and silicone leg grippers.",
    color: "Navy / Orange Accent",
    sizes: ["YS", "YM", "S", "M", "L", "XL"],
  },
  {
    id: 8,
    left: "89%",
    top: "35%",
    title: "Pro Ice Hockey Sublimated Sweater",
    description: "Pro-weight knit polyester with reinforced elbows, tackle twill crest, and fight-strap compatibility.",
    color: "Navy / White / Orange Bands",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
];

export default function ClothingSection({ onExplore = () => {} }) {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const { homeContent } = useCMS();
  const clothingData = homeContent?.clothingSection || {};

  const bannerImage = clothingData.bannerImage || "/hamlo-athletes-lineup.png";
  const tagline = clothingData.tagline || "ATHLETE UNIFORM ANATOMY";
  const heading = clothingData.heading || "PRO-CUT SPORTSWEAR SPOTLIGHT";
  const description = clothingData.description || "Hover over the interactive hotspots to inspect fabric specifications, cuts, and custom uniform tailoring.";

  return (
    <section className="w-full mx-auto my-8 sm:my-16">
      {/* Section Header */}
      <div className="w-[96%] max-w-[1800px] mx-auto mb-6 md:mb-8 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <span className="text-[var(--accent)] font-bold text-xs uppercase tracking-widest">
            {tagline}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--secondary)] uppercase tracking-tight mt-1">
            {heading}
          </h2>
        </div>
        <p className="text-xs md:text-sm text-[var(--secondary)]/70 max-w-md mt-2 md:mt-0 font-light">
          {description}
        </p>
      </div>

      {/* Full-bleed Full-width Banner Container */}
      <div className="relative w-full aspect-[16/9] max-h-[760px] overflow-hidden bg-black border-none rounded-none shadow-none">
        <img
          src={bannerImage}
          alt="Custom Team Sportswear Lineup - HAMLO SPORTS Athletes"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center filter brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Hotspots */}
        {defaultHotspots.map((spot) => {
          const isHovered = activeHotspot?.id === spot.id;

          return (
            <div
              key={spot.id}
              style={{ left: spot.left, top: spot.top }}
              onMouseEnter={() => setActiveHotspot(spot)}
              onMouseLeave={() => setActiveHotspot(null)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group"
            >
              {/* Hotspot Toggle Button (+ / -) */}
              <button
                onClick={() => setActiveHotspot(isHovered ? null : spot)}
                className={`relative flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full text-white font-black text-sm sm:text-base shadow-xl transition-all duration-300 cursor-pointer ${
                  isHovered 
                    ? 'bg-[var(--secondary)] scale-110 ring-2 ring-white' 
                    : 'bg-[var(--accent)] hover:scale-125'
                }`}
                aria-label={isHovered ? "Close details" : "Open details"}
              >
                {!isHovered && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 pointer-events-none" />
                )}
                <span className="leading-none transition-transform duration-200">
                  {isHovered ? "−" : "+"}
                </span>
              </button>

              {/* Popup Tooltip */}
              {isHovered && (
                <div 
                  className={`absolute bottom-full mb-3 w-64 sm:w-72 bg-white text-[var(--secondary)] p-4 rounded-xl shadow-2xl z-30 border border-neutral-200 transition-all duration-200 ${
                    spot.id === 1 || spot.id === 2
                      ? "left-0 translate-x-0"
                      : spot.id === 7 || spot.id === 8
                      ? "right-0 translate-x-0"
                      : "left-1/2 -translate-x-1/2"
                  }`}
                >
                  <h3 className="font-black text-sm uppercase text-[var(--secondary)] mb-1">
                    {spot.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mb-2 leading-relaxed">
                    {spot.description}
                  </p>
                  <div className="text-[10px] font-bold text-[var(--accent)] uppercase mb-3">
                    Color: {spot.color}
                  </div>
                  <button
                    onClick={() => onExplore(spot.title)}
                    className="w-full py-1.5 rounded-lg bg-[var(--secondary)] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[var(--accent)] transition cursor-pointer"
                  >
                    Request Sizing & Pricing
                  </button>
                </div>
              )}
            </div>
          );
        })}

      </div>
    </section>
  );
}
