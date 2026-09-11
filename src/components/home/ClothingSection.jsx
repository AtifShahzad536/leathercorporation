import { useState } from "react";

const hotspots = [
  {
    id: 1,
    left: "17.5%",
    top: "50%",
    title: "Cafe Racer Moto",
    description: "Aniline finish 1.1mm cowhide with snap tab collar, dual chest zip vents, and antique brass YKK hardware.",
    color: "Vintage Tan",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    left: "28.5%",
    top: "47%",
    title: "B3 Shearling Aviator",
    description: "Plush genuine sheepskin fleece lining with dual buckle collar straps and heavy-duty storm flap.",
    color: "Dark Brown / Cream",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    left: "39.5%",
    top: "42%",
    title: "Classic Double Rider",
    description: "Iconic asymmetrical biker jacket with diamond-quilted shoulder accents, waist belt, and CE armor pockets.",
    color: "Matte Black",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    left: "62.5%",
    top: "58%",
    title: "Goat Suede Harrington",
    description: "Velvety soft Italian goat suede overshirt with horn button placket and satin lining.",
    color: "Cognac Brown",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    left: "86%",
    top: "48%",
    title: "Women's Cropped Moto",
    description: "Supple lambskin Nappa leather with tailored anatomical silhouette and polished silver hardware.",
    color: "Midnight Black",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

export default function ClothingShowcase() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
      <div className="w-full">
        {/* Image Container — everything lives inside */}
        <div
          className="relative w-full overflow-hidden"
          style={{ paddingBottom: "49.95%" /* 999/2000 ratio */ }}
        >
          {/* Background image */}
          <img
            src="/leatherboys.png"
            alt="Leader Corporation Leather Jackets Collection"
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable={false}
          />

          {/* Branded overlay */}
          <div className="absolute inset-0 bg-[var(--secondary)]/35" />

          {/* LEATHER JACKETS heading + SEE MORE — overlaid on image top-center */}
          <div className="absolute top-[8%] left-0 right-0 flex flex-col items-center gap-[2%] z-10">
            <h1
              className="text-white font-black tracking-[0.2em] text-sm sm:text-3xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Oswald', 'Arial Black', sans-serif" }}
            >
              LEATHER JACKETS
            </h1>
            <button className="border border-white/70 bg-[var(--secondary)]/60 backdrop-blur-sm text-white px-3 py-0.5 md:px-10 md:py-2.5 text-[8px] md:text-sm tracking-widest hover:bg-[var(--accent)] hover:text-white transition-all duration-300 font-bold">
              EXPLORE COLLECTION
            </button>
          </div>

          {/* Hotspots */}
          {hotspots.map((spot) => {
            const isActive = activeId === spot.id;
            return (
              <div
                key={spot.id}
                className="absolute"
                style={{ left: spot.left, top: spot.top, transform: "translate(-50%, -50%)", zIndex: 10 }}
              >
                {/* Plus / Close Button with subtle white glow circle */}
                <button
                  onClick={() => toggle(spot.id)}
                  className={`
                    relative w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center
                    border border-white/60 bg-black/25 backdrop-blur-[2px]
                    shadow-[0_0_10px_rgba(255,255,255,0.45)]
                    hover:border-white hover:bg-white/15 hover:shadow-[0_0_16px_rgba(255,255,255,0.8)]
                    hover:scale-115 focus:outline-none cursor-pointer group transition-all duration-300
                    ${isActive ? "!border-[var(--accent)] !bg-[var(--accent)]/20 !shadow-[0_0_14px_rgba(242,101,34,0.6)] scale-110" : ""}
                  `}
                  aria-label={isActive ? "Close" : `See ${spot.title}`}
                >
                  <span
                    className={`
                      block font-bold text-xs md:text-sm leading-none select-none
                      transition-transform duration-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]
                      ${isActive
                        ? "text-[var(--accent)] rotate-45"
                        : "text-white group-hover:text-white"}
                    `}
                  >
                    +
                  </span>
                </button>

                {/* Popup */}
                {isActive && (
                  <div
                    className="absolute z-20 bg-[var(--secondary)] backdrop-blur-md border border-[var(--accent)] shadow-2xl rounded-[3px]"
                    style={{
                      ...getPopupPosition(spot),
                      width: "clamp(80px, 18vw, 240px)",
                      padding: "clamp(4px, 1vw, 16px)",
                    }}
                  >
                    {/* Arrow */}
                    <div
                      className="absolute w-[8%] h-[8%] bg-[var(--secondary)] border-l border-t border-[var(--accent)]"
                      style={getArrowStyle(spot)}
                    />

                    <p style={{ fontSize: "clamp(5px, 1vw, 10px)", letterSpacing: "0.1em" }} className="text-white/50 uppercase mb-0.5">Leader Leather</p>
                    <h3 style={{ fontSize: "clamp(7px, 1.4vw, 16px)", fontFamily: "'Oswald', sans-serif" }} className="font-black tracking-wide leading-tight mb-0.5">
                      {spot.title}
                    </h3>
                    <p style={{ fontSize: "clamp(3px, 1.1vw, 9px)" }} className=" text-white mb-1">
                      {spot.description}
                    </p>
                   
                    <div className="flex gap-px flex-wrap mb-1">
                      {spot.sizes.map((s) => (
                        <span key={s} style={{ fontSize: "clamp(5px, 0.9vw, 10px)", padding: "1px 3px" }} className="border border-white/30 text-white/70 cursor-pointer hover:border-white hover:text-white transition-colors">
                          {s}
                        </span>
                      ))}
                    </div>
                  
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }


// Position popup above/below and left/right based on spot location
function getPopupPosition(spot) {
  const leftPct = parseFloat(spot.left);
  const topPct = parseFloat(spot.top);

  const vertical = topPct > 55 ? { bottom: "calc(100% + 2.5%)", top: "auto" } : { top: "calc(100% + 2.5%)", bottom: "auto" };
  const horizontal = leftPct > 70 ? { right: "0", left: "auto" } : leftPct < 30 ? { left: "0", right: "auto" } : { left: "50%", transform: "translateX(-50%)" };

  return { ...vertical, ...horizontal };
}

function getArrowStyle(spot) {
  const leftPct = parseFloat(spot.left);
  const topPct = parseFloat(spot.top);

  const isAbove = topPct > 55;
  const v = isAbove ? { bottom: "-4%", top: "auto", transform: "rotate(225deg)" } : { top: "-4%", bottom: "auto", transform: "rotate(45deg)" };
  const h = leftPct > 70 ? { right: "12%", left: "auto" } : leftPct < 30 ? { left: "12%", right: "auto" } : { left: "50%", marginLeft: "-2%" };

  return { ...v, ...h };
}