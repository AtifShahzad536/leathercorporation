import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, Download, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';

const sizeCharts = {
  baseball: {
    title: 'Baseball Uniforms',
    tagline: 'Jerseys, Pants & Compression Base Layers',
    measurements: [
      { size: 'YS', chest: '26 - 28', waist: '22 - 24', length: '22.0', hip: '26 - 28' },
      { size: 'YM', chest: '28 - 30', waist: '24 - 26', length: '23.5', hip: '28 - 30' },
      { size: 'YL', chest: '30 - 32', waist: '26 - 28', length: '25.0', hip: '30 - 32' },
      { size: 'YXL', chest: '32 - 34', waist: '28 - 30', length: '26.5', hip: '32 - 34' },
      { size: 'AS', chest: '34 - 36', waist: '28 - 30', length: '28.0', hip: '34 - 36' },
      { size: 'AM', chest: '38 - 40', waist: '32 - 34', length: '29.5', hip: '38 - 40' },
      { size: 'AL', chest: '42 - 44', waist: '36 - 38', length: '30.5', hip: '42 - 44' },
      { size: 'AXL', chest: '46 - 48', waist: '40 - 42', length: '31.5', hip: '46 - 48' },
      { size: 'A2XL', chest: '50 - 52', waist: '44 - 46', length: '32.5', hip: '50 - 52' },
      { size: 'A3XL', chest: '54 - 56', waist: '48 - 50', length: '33.5', hip: '54 - 56' },
    ]
  },
  basketball: {
    title: 'Basketball Uniforms',
    tagline: 'Singlets, Sleeveless Reversibles & Game Shorts',
    measurements: [
      { size: 'YS', chest: '26 - 28', waist: '20 - 22', length: '23.0', inseam: '7.0' },
      { size: 'YM', chest: '28 - 30', waist: '22 - 24', length: '24.5', inseam: '7.5' },
      { size: 'YL', chest: '30 - 32', waist: '24 - 26', length: '26.0', inseam: '8.0' },
      { size: 'YXL', chest: '32 - 34', waist: '26 - 28', length: '27.5', inseam: '8.5' },
      { size: 'AS', chest: '36 - 38', waist: '28 - 30', length: '29.0', inseam: '9.0' },
      { size: 'AM', chest: '40 - 42', waist: '32 - 34', length: '30.5', inseam: '9.5' },
      { size: 'AL', chest: '44 - 46', waist: '36 - 38', length: '32.0', inseam: '10.0' },
      { size: 'AXL', chest: '48 - 50', waist: '40 - 42', length: '33.5', inseam: '10.5' },
      { size: 'A2XL', chest: '52 - 54', waist: '44 - 46', length: '34.5', inseam: '11.0' },
      { size: 'A3XL', chest: '56 - 58', waist: '48 - 50', length: '35.5', inseam: '11.5' },
    ]
  },
  football: {
    title: 'Football / Flag Football',
    tagline: 'Pad-Fit Elasticated Game Jerseys & Integrated Pants',
    measurements: [
      { size: 'YS', chest: '28 - 30', waist: '22 - 24', length: '24.0', sleeve: '13.0' },
      { size: 'YM', chest: '30 - 32', waist: '24 - 26', length: '25.5', sleeve: '14.0' },
      { size: 'YL', chest: '32 - 34', waist: '26 - 28', length: '27.0', sleeve: '15.0' },
      { size: 'YXL', chest: '34 - 36', waist: '28 - 30', length: '28.5', sleeve: '16.0' },
      { size: 'AS', chest: '38 - 40', waist: '30 - 32', length: '30.0', sleeve: '17.0' },
      { size: 'AM', chest: '42 - 44', waist: '34 - 36', length: '31.5', sleeve: '18.0' },
      { size: 'AL', chest: '46 - 48', waist: '38 - 40', length: '32.5', sleeve: '19.0' },
      { size: 'AXL', chest: '50 - 52', waist: '42 - 44', length: '33.5', sleeve: '20.0' },
      { size: 'A2XL', chest: '54 - 56', waist: '46 - 48', length: '34.5', sleeve: '21.0' },
      { size: 'A3XL', chest: '58 - 60', waist: '50 - 52', length: '35.5', sleeve: '22.0' },
    ]
  },
  soccer: {
    title: 'Soccer / Rugby Kits',
    tagline: 'Athletic-Fit Match Jerseys & Ergonomic Shorts',
    measurements: [
      { size: 'YS', chest: '26 - 28', waist: '20 - 22', length: '21.5', hip: '26 - 28' },
      { size: 'YM', chest: '28 - 30', waist: '22 - 24', length: '23.0', hip: '28 - 30' },
      { size: 'YL', chest: '30 - 32', waist: '24 - 26', length: '24.5', hip: '30 - 32' },
      { size: 'YXL', chest: '32 - 34', waist: '26 - 28', length: '26.0', hip: '32 - 34' },
      { size: 'AS', chest: '36 - 38', waist: '28 - 30', length: '28.0', hip: '36 - 38' },
      { size: 'AM', chest: '39 - 41', waist: '32 - 34', length: '29.0', hip: '39 - 41' },
      { size: 'AL', chest: '42 - 44', waist: '35 - 37', length: '30.0', hip: '42 - 44' },
      { size: 'AXL', chest: '45 - 47', waist: '38 - 40', length: '31.0', hip: '45 - 47' },
      { size: 'A2XL', chest: '48 - 50', waist: '41 - 43', length: '32.0', hip: '48 - 50' },
      { size: 'A3XL', chest: '51 - 53', waist: '44 - 46', length: '33.0', hip: '51 - 53' },
    ]
  }
};

export default function SizeChartSection({ onNavigateInquiry = () => {} }) {
  const [activeSport, setActiveSport] = useState('baseball');
  const [unit, setUnit] = useState('inches'); // 'inches' | 'cm'

  const currentCategory = sizeCharts[activeSport];

  // Helper to convert inches string to cm
  const formatVal = (val) => {
    if (unit === 'inches') return val;
    if (!val) return '-';
    if (val.includes('-')) {
      const parts = val.split('-').map(p => Math.round(parseFloat(p.trim()) * 2.54));
      return `${parts[0]} - ${parts[1]}`;
    }
    const num = parseFloat(val);
    return isNaN(num) ? val : Math.round(num * 2.54).toString();
  };

  return (
    <section className="w-full bg-[var(--primary)] text-[var(--secondary)] py-16 sm:py-24 border-b border-[var(--secondary)]/10 select-none">
      <div className="w-[96%] max-w-[1800px] mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[var(--secondary)]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
              <Ruler size={16} />
              <span>OFFICIAL ATHLETIC FIT & SIZING CHART</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--secondary)] leading-none">
              TEAM SIZING SPECIFICATIONS
            </h2>
            <p className="text-xs sm:text-sm text-[var(--secondary)]/70 font-normal mt-3 max-w-xl">
              Precision measurements across youth and adult cuts. Zero size upcharge fees for youth to 4XL, with custom bespoke sizing tailored directly to player roster sheets.
            </p>
          </div>

          {/* Unit Toggle & CTA */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-white rounded-[5px] p-1 border border-[var(--secondary)]/15 flex items-center shadow-xs">
              <button
                onClick={() => setUnit('inches')}
                className={`px-3.5 py-1.5 rounded-[3px] text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  unit === 'inches'
                    ? 'bg-[var(--accent)] text-white shadow-xs'
                    : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
                }`}
              >
                Inches (IN)
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-3.5 py-1.5 rounded-[3px] text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  unit === 'cm'
                    ? 'bg-[var(--accent)] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[var(--secondary)]'
                }`}
              >
                Centimeters (CM)
              </button>
            </div>

            <button
              onClick={() => onNavigateInquiry('Custom Roster Sizing')}
              className="bg-[var(--secondary)] hover:bg-[var(--accent)] text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-[5px] transition-colors cursor-pointer shadow-sm flex items-center gap-2"
            >
              <span>Download Sizing Guide PDF</span>
              <Download size={14} />
            </button>
          </div>
        </div>

        {/* Sport Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {Object.entries(sizeCharts).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveSport(key)}
              className={`px-6 py-3 rounded-[5px] font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap border ${
                activeSport === key
                  ? 'bg-[var(--secondary)] text-white border-[var(--secondary)] shadow-md'
                  : 'bg-white text-slate-700 border-[var(--secondary)]/15 hover:border-[var(--accent)] hover:text-[var(--secondary)]'
              }`}
            >
              {data.title}
            </button>
          ))}
        </div>

        {/* Table & Spec Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Size Table (8 cols on lg) */}
          <div className="lg:col-span-8 bg-white rounded-[5px] border border-[var(--secondary)]/12 shadow-lg overflow-hidden">
            <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
              <div>
                <h3 className="font-black text-sm uppercase tracking-wider text-[var(--secondary)]">
                  {currentCategory.title} Standard Size Grid
                </h3>
                <span className="text-[11px] text-slate-600 font-semibold">
                  {currentCategory.tagline} • ({unit.toUpperCase()})
                </span>
              </div>
              <span className="text-[10px] font-black uppercase px-2.5 py-1 bg-green-100 text-green-800 rounded-[3px]">
                NCAA / NFHS Compliant
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[var(--secondary)] text-white text-[11px] font-black uppercase tracking-wider">
                    <th className="p-3.5 sm:px-6">Size</th>
                    <th className="p-3.5 sm:px-6">Chest ({unit === 'inches' ? 'in' : 'cm'})</th>
                    <th className="p-3.5 sm:px-6">Waist ({unit === 'inches' ? 'in' : 'cm'})</th>
                    <th className="p-3.5 sm:px-6">Length ({unit === 'inches' ? 'in' : 'cm'})</th>
                    <th className="p-3.5 sm:px-6">Hip / Inseam</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm font-semibold text-[var(--secondary)]">
                  {currentCategory.measurements.map((row, idx) => (
                    <tr 
                      key={row.size}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-neutral-50/80 transition-colors' : 'bg-neutral-50/50 hover:bg-neutral-50 transition-colors'}
                    >
                      <td className="p-3.5 sm:px-6 font-black font-mono text-[var(--accent)]">
                        {row.size}
                      </td>
                      <td className="p-3.5 sm:px-6 font-mono">{formatVal(row.chest)}</td>
                      <td className="p-3.5 sm:px-6 font-mono">{formatVal(row.waist)}</td>
                      <td className="p-3.5 sm:px-6 font-mono">{formatVal(row.length)}</td>
                      <td className="p-3.5 sm:px-6 font-mono">{formatVal(row.hip || row.inseam || row.sleeve || '-')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[var(--secondary)]/70 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-600 flex-shrink-0" />
                <span>All measurements allow +/- 0.5 inch (+/- 1.2 cm) athletic manufacturing tolerance.</span>
              </div>
              <span className="font-bold text-[var(--secondary)]">Custom lengths & sleeves available upon request.</span>
            </div>
          </div>

          {/* Measuring Instructions & Custom Fit Guarantee (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* How to Measure Card */}
            <div className="bg-white rounded-[5px] border border-[var(--secondary)]/12 p-6 shadow-md">
              <h3 className="font-black text-sm uppercase tracking-wider text-[var(--secondary)] mb-4 flex items-center gap-2">
                <HelpCircle size={16} className="text-[var(--accent)]" />
                <span>How To Measure Your Athletes</span>
              </h3>

              <div className="space-y-4 text-xs text-[var(--secondary)]/80 leading-relaxed">
                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-white text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-[var(--secondary)] uppercase block font-black text-[11px]">Chest / Bust</strong>
                    Measure around the fullest part of the chest, keeping tape horizontal under the arms across shoulder blades.
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-white text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-[var(--secondary)] uppercase block font-black text-[11px]">Waist Circumference</strong>
                    Measure around the natural waistline where athletes typically wear their game pants or shorts.
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-white text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-[var(--secondary)] uppercase block font-black text-[11px]">Body Length</strong>
                    Measure from the highest point of the shoulder down to the desired hem length.
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Sizing Banner */}
            <div className="bg-[var(--secondary)] text-white rounded-[5px] p-6 shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-block px-2.5 py-1 bg-[var(--accent)] text-white text-[9px] font-black uppercase tracking-wider rounded-[3px] mb-3">
                  Zero Upcharge
                </div>
                <h3 className="font-black text-base uppercase tracking-tight mb-2">
                  Outside The Standard Chart?
                </h3>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  Send us your roster measurements sheet. Our pattern engineers cut custom garments with customized torso length, inseam, or armhole taper at zero added fees.
                </p>
                <button
                  onClick={() => onNavigateInquiry('Custom Roster Spec Sheet')}
                  className="w-full bg-[var(--accent)] hover:bg-white hover:text-[var(--secondary)] text-white font-black text-xs uppercase tracking-wider py-3 rounded-[5px] transition-colors cursor-pointer shadow flex items-center justify-center gap-2"
                >
                  <span>Submit Roster Sizing Sheet</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

