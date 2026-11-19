import React, { useState } from 'react';
import { Sparkles, RefreshCw, ArrowRight, Check, Award, Copy } from 'lucide-react';
import TrustBar from '../common/TrustBar';

export default function TeamNameGeneratorPage({ onNavigateInquiry = () => {} }) {
  const [selectedSport, setSelectedSport] = useState('SOCCER');
  const [selectedVibe, setSelectedVibe] = useState('FIERCE');
  const [copiedIdx, setCopiedIdx] = useState(null);

  const sports = [
    'BASEBALL', 'BASKETBALL', 'FOOTBALL', 'FLAG FOOTBALL',
    'ICE HOCKEY', 'SOCCER', 'LACROSSE', 'RUGBY',
    'SOFTBALL', 'VOLLEYBALL', 'WRESTLING', 'ESPORTS'
  ];

  const vibes = [
    { id: 'FIERCE', label: 'Fierce & Aggressive' },
    { id: 'CLASSIC', label: 'Heritage & Classic' },
    { id: 'MODERN', label: 'Modern & High-Tech' },
    { id: 'LIGHTNING', label: 'Speed & Elemental' }
  ];

  const nameDatabase = {
    FIERCE: [
      { name: 'Apex Predators', colors: 'Midnight Navy & Blaze Orange', motto: 'Unleash the Hunt' },
      { name: 'Iron Wolves', colors: 'Charcoal Grey & Crimson Red', motto: 'Strength in the Pack' },
      { name: 'Shadow Vipers', colors: 'Matte Black & Venom Green', motto: 'Strike with Precision' },
      { name: 'War Raptors', colors: 'Gunmetal & Royal Gold', motto: 'Rule the Arena' },
      { name: 'Rampage FC', colors: 'Scarlet & Stealth Obsidian', motto: 'Total Domination' },
      { name: 'Titan Marauders', colors: 'Navy & Vegas Gold', motto: 'Unstoppable Force' }
    ],
    CLASSIC: [
      { name: 'Empire Athletic', colors: 'Heritage Navy & Athletic White', motto: 'Tradition & Excellence' },
      { name: 'Royal Vanguard', colors: 'Deep Purple & Metallic Gold', motto: 'Leading the Field' },
      { name: 'Metropolitan Knights', colors: 'Cobalt Blue & Silver Metallic', motto: 'Honor & Glory' },
      { name: 'Heritage United', colors: 'Forest Green & Off-White Cream', motto: 'United in Purpose' },
      { name: 'Old Town Barons', colors: 'Burgundy & Champagne Gold', motto: 'Built on Legacy' },
      { name: 'Summit Rangers', colors: 'Pacific Blue & Snow White', motto: 'Peak Performance' }
    ],
    MODERN: [
      { name: 'Cyber Phantoms', colors: 'Neon Cyan & Void Black', motto: 'Next Generation Dominance' },
      { name: 'Nova Syndicate', colors: 'Electric Violet & Hot Pink', motto: 'Redefining the Game' },
      { name: 'Vector Velocity', colors: 'Infrared & Carbon Fiber Grey', motto: 'Speed of Innovation' },
      { name: 'Zero Gravity', colors: 'Deep Space Blue & Neon Lime', motto: 'Rising Above' },
      { name: 'Pulse Dynamo', colors: 'Solar Yellow & Midnight Black', motto: 'High Voltage Athleticism' },
      { name: 'Quantum Legion', colors: 'Stealth White & Arctic Blue', motto: 'Calculated Victory' }
    ],
    LIGHTNING: [
      { name: 'Storm Cyclones', colors: 'Sky Blue & Pure White', motto: 'Ride the Tempest' },
      { name: 'Thunder Strike', colors: 'Steel Grey & Lightning Yellow', motto: 'Feel the Impact' },
      { name: 'Solar Flares', colors: 'Blaze Orange & Flare Yellow', motto: 'Burning Intensity' },
      { name: 'Avalanche Surge', colors: 'Ice Blue & Glacier White', motto: 'Cold & Relentless' },
      { name: 'Inferno Blitz', colors: 'Molten Crimson & Flame Orange', motto: 'Fuel the Fire' },
      { name: 'Gale Force Athletics', colors: 'Teal Blue & Cloud Silver', motto: 'Speed Unleashed' }
    ]
  };

  const currentNames = nameDatabase[selectedVibe] || nameDatabase.FIERCE;

  const handleCopy = (name, idx) => {
    navigator.clipboard.writeText(name);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[var(--secondary)] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="w-[96%] max-w-[1400px] mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-2 block">
            FREE INTERACTIVE CREATIVE TOOL
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white mb-3">
            Free Team Name & Mascot Generator
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Need a fierce, memorable name for your new rec team, club, or varsity program? Pick your sport and style to generate instant concepts with custom pantone palettes.
          </p>
        </div>
      </section>

      <TrustBar />

      <div className="w-[96%] max-w-[1200px] mx-auto my-14 sm:my-20 space-y-10">
        
        {/* Generator Controls */}
        <div className="bg-white p-6 sm:p-10 rounded-[3px] border border-neutral-200 shadow-sm space-y-6">
          
          {/* 1. Sport Selector */}
          <div>
            <label className="block text-xs font-black uppercase text-neutral-800 tracking-wider mb-2">
              Step 1: Choose Your Sport
            </label>
            <div className="flex flex-wrap gap-2">
              {sports.map(s => (
                <button
                  key={s}
                  onClick={() => setSelectedSport(s)}
                  className={`px-3.5 py-1.5 rounded-[3px] text-xs font-bold uppercase transition cursor-pointer ${
                    selectedSport === s 
                      ? 'bg-[var(--secondary)] text-white' 
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Vibe Selector */}
          <div>
            <label className="block text-xs font-black uppercase text-neutral-800 tracking-wider mb-2">
              Step 2: Choose Your Team Vibe & Style
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {vibes.map(v => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVibe(v.id)}
                  className={`py-3 px-4 rounded-[3px] text-xs font-bold uppercase tracking-wider border transition cursor-pointer text-center ${
                    selectedVibe === v.id 
                      ? 'border-[var(--accent)] bg-orange-50/50 text-[var(--accent)] shadow-xs' 
                      : 'border-neutral-200 text-neutral-600 hover:border-neutral-400 bg-white'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Results Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] block">
                GENERATED CONCEPTS FOR {selectedSport}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)]">
                Pick Your Favorite Name & Get a Free 3D Proof
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentNames.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[3px] border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-[var(--accent)] transition group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-neutral-400">#{idx + 1}</span>
                    <button
                      onClick={() => handleCopy(item.name, idx)}
                      className="text-[10px] font-bold uppercase text-neutral-500 hover:text-[var(--accent)] flex items-center gap-1 cursor-pointer"
                    >
                      {copiedIdx === idx ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                      <span>{copiedIdx === idx ? 'Copied!' : 'Copy Name'}</span>
                    </button>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black uppercase text-[var(--secondary)] group-hover:text-[var(--accent)] transition mb-1 leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-neutral-500 italic block mb-4">
                    "{item.motto}"
                  </span>

                  <div className="p-3 bg-neutral-50 rounded border border-neutral-100 text-xs text-neutral-600 mb-6">
                    <strong className="block text-[10px] font-black uppercase text-neutral-400 mb-1">
                      Recommended Palette:
                    </strong>
                    <span>{item.colors}</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigateInquiry({
                    name: `${item.name} (${selectedSport})`,
                    sport: selectedSport,
                    price: `Colors: ${item.colors}`
                  })}
                  className="w-full py-2.5 bg-[var(--secondary)] group-hover:bg-[var(--accent)] text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Build This Mockup Free</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
