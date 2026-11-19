import React, { useState } from 'react';
import { Ruler, Check, ArrowRight, Info, ShieldCheck } from 'lucide-react';
import TrustBar from '../common/TrustBar';

export default function SizingChartPage({ onNavigateInquiry = () => {} }) {
  const [activeGender, setActiveGender] = useState('MEN');
  const [activeSport, setActiveSport] = useState('BASEBALL');

  const sports = [
    'BASEBALL', 'BASKETBALL', 'FOOTBALL', 'FLAG FOOTBALL',
    'ICE HOCKEY', 'SOCCER', 'LACROSSE', 'RUGBY',
    'SOFTBALL', 'VOLLEYBALL', 'WRESTLING', 'ESPORTS'
  ];

  return (
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[var(--secondary)] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="w-[96%] max-w-[1400px] mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-2 block">
            GUARANTEED ATHLETIC PROPORTIONS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white mb-3">
            Sports Uniform Sizing Chart & Measuring Guide
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Accurate measurements for Youth (YXS–YXL) through Adult (XS–4XL). Factory-graded athletic cuts built for padding and field agility.
          </p>
        </div>
      </section>

      <TrustBar />

      <div className="w-[96%] max-w-[1200px] mx-auto my-12 space-y-10">
        
        {/* How to Measure Section */}
        <div className="bg-white p-6 sm:p-10 rounded-[3px] border border-neutral-200 shadow-sm">
          <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-bold uppercase mb-2">
            <Ruler size={16} /> Measuring Instructions
          </div>
          <h2 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)] mb-4">
            How to Measure Your Players Correctly
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
            Use a flexible fabric measuring tape and have an assistant take measurements while the athlete stands naturally. Keep the tape comfortably snug without digging into the skin.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-neutral-700">
            <div className="p-4 bg-neutral-50 rounded border border-neutral-100">
              <strong className="block text-[var(--secondary)] text-sm font-black uppercase mb-1">1. Chest / Bust</strong>
              <p className="leading-relaxed">
                Wrap the tape around the fullest point of the chest, directly under the armpits and across the shoulder blades. Keep the tape parallel to the floor.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded border border-neutral-100">
              <strong className="block text-[var(--secondary)] text-sm font-black uppercase mb-1">2. Natural Waist</strong>
              <p className="leading-relaxed">
                Measure around the narrowest part of the waistline, typically near the belly button, keeping one finger between the tape and body for athletic ease.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded border border-neutral-100">
              <strong className="block text-[var(--secondary)] text-sm font-black uppercase mb-1">3. Hips / Seat</strong>
              <p className="leading-relaxed">
                Stand with heels together and measure around the fullest circumference of the hips and buttocks, ensuring the tape remains level.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded text-xs text-amber-950 flex items-start gap-2.5">
            <Info size={16} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
            <div>
              <strong>Rule of Thumb for Pads:</strong> For contact sports like Football, Ice Hockey, and Lacrosse, measure with body armor or select one size larger than normal street clothing.
            </div>
          </div>
        </div>

        {/* Gender / Category Selectors */}
        <div className="bg-white p-6 sm:p-10 rounded-[3px] border border-neutral-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-100">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] block">
                STEP 2: SELECT DIVISION & SPORT
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-[var(--secondary)]">
                Athletic Measurement Tables (Inches)
              </h2>
            </div>

            {/* Gender Toggle */}
            <div className="flex gap-1.5 bg-neutral-100 p-1 rounded">
              {['MEN', 'WOMEN', 'YOUTH'].map(g => (
                <button
                  key={g}
                  onClick={() => setActiveGender(g)}
                  className={`px-4 py-1.5 text-xs font-bold uppercase rounded transition cursor-pointer ${
                    activeGender === g ? 'bg-[var(--secondary)] text-white shadow-xs' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Sizing Table */}
          <div className="overflow-x-auto border border-neutral-200 rounded">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[var(--secondary)] text-white text-[11px] uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-black">Size Tag</th>
                  <th className="py-3.5 px-4 font-bold">Chest (Inches)</th>
                  <th className="py-3.5 px-4 font-bold">Waist (Inches)</th>
                  <th className="py-3.5 px-4 font-bold">Hips (Inches)</th>
                  <th className="py-3.5 px-4 font-bold">Recommended Height</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 font-medium text-neutral-800">
                {activeGender === 'MEN' && (
                  <>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">XS</td><td className="py-3 px-4">32 - 34"</td><td className="py-3 px-4">26 - 28"</td><td className="py-3 px-4">32 - 34"</td><td className="py-3 px-4">5'3" - 5'6"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">S</td><td className="py-3 px-4">35 - 37"</td><td className="py-3 px-4">29 - 31"</td><td className="py-3 px-4">35 - 37"</td><td className="py-3 px-4">5'6" - 5'9"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">M</td><td className="py-3 px-4">38 - 40"</td><td className="py-3 px-4">32 - 34"</td><td className="py-3 px-4">38 - 40"</td><td className="py-3 px-4">5'9" - 6'0"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">L</td><td className="py-3 px-4">41 - 43"</td><td className="py-3 px-4">35 - 37"</td><td className="py-3 px-4">41 - 43"</td><td className="py-3 px-4">6'0" - 6'2"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">XL</td><td className="py-3 px-4">44 - 46"</td><td className="py-3 px-4">38 - 40"</td><td className="py-3 px-4">44 - 46"</td><td className="py-3 px-4">6'2" - 6'4"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">2XL</td><td className="py-3 px-4">47 - 49"</td><td className="py-3 px-4">41 - 43"</td><td className="py-3 px-4">47 - 49"</td><td className="py-3 px-4">6'3" +</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">3XL - 4XL</td><td className="py-3 px-4">50 - 58"</td><td className="py-3 px-4">44 - 52"</td><td className="py-3 px-4">50 - 58"</td><td className="py-3 px-4">All Heights</td></tr>
                  </>
                )}
                {activeGender === 'WOMEN' && (
                  <>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">XS (0-2)</td><td className="py-3 px-4">30 - 32"</td><td className="py-3 px-4">24 - 26"</td><td className="py-3 px-4">33 - 35"</td><td className="py-3 px-4">5'0" - 5'4"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">S (4-6)</td><td className="py-3 px-4">33 - 35"</td><td className="py-3 px-4">27 - 29"</td><td className="py-3 px-4">36 - 38"</td><td className="py-3 px-4">5'4" - 5'7"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">M (8-10)</td><td className="py-3 px-4">36 - 38"</td><td className="py-3 px-4">30 - 32"</td><td className="py-3 px-4">39 - 41"</td><td className="py-3 px-4">5'6" - 5'9"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">L (12-14)</td><td className="py-3 px-4">39 - 41"</td><td className="py-3 px-4">33 - 35"</td><td className="py-3 px-4">42 - 44"</td><td className="py-3 px-4">5'8" - 5'11"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">XL (16-18)</td><td className="py-3 px-4">42 - 45"</td><td className="py-3 px-4">36 - 39"</td><td className="py-3 px-4">45 - 48"</td><td className="py-3 px-4">5'9" +</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">2XL - 3XL</td><td className="py-3 px-4">46 - 52"</td><td className="py-3 px-4">40 - 46"</td><td className="py-3 px-4">49 - 55"</td><td className="py-3 px-4">All Heights</td></tr>
                  </>
                )}
                {activeGender === 'YOUTH' && (
                  <>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">YXS (4-5)</td><td className="py-3 px-4">24 - 26"</td><td className="py-3 px-4">20 - 22"</td><td className="py-3 px-4">24 - 26"</td><td className="py-3 px-4">3'6" - 3'10"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">YS (6-8)</td><td className="py-3 px-4">26 - 28"</td><td className="py-3 px-4">22 - 24"</td><td className="py-3 px-4">26 - 28"</td><td className="py-3 px-4">3'10" - 4'3"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">YM (10-12)</td><td className="py-3 px-4">28 - 30"</td><td className="py-3 px-4">24 - 26"</td><td className="py-3 px-4">29 - 31"</td><td className="py-3 px-4">4'4" - 4'9"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">YL (14-16)</td><td className="py-3 px-4">31 - 33"</td><td className="py-3 px-4">26 - 28"</td><td className="py-3 px-4">32 - 34"</td><td className="py-3 px-4">4'10" - 5'2"</td></tr>
                    <tr className="hover:bg-neutral-50"><td className="py-3 px-4 font-black text-[var(--secondary)]">YXL (18-20)</td><td className="py-3 px-4">34 - 36"</td><td className="py-3 px-4">28 - 30"</td><td className="py-3 px-4">35 - 37"</td><td className="py-3 px-4">5'2" - 5'6"</td></tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-100">
            <span className="text-xs text-neutral-500">
              Need sample sizers sent to your booster club before ordering?
            </span>
            <button
              onClick={() => onNavigateInquiry({ name: 'Sizing Fit Kit Request', sport: 'General' })}
              className="px-6 py-2.5 bg-[var(--accent)] text-white text-xs font-black uppercase tracking-wider rounded-[3px] hover:opacity-90 transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>Request Free Fit Kit</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
