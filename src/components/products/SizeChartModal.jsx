import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler, HelpCircle, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const mensSizeChartInches = [
  { size: 'XS', chest: '36 - 38', shoulder: '17.5', sleeve: '24.5', length: '25.0', waist: '32 - 34' },
  { size: 'S',  chest: '38 - 40', shoulder: '18.0', sleeve: '25.0', length: '25.5', waist: '34 - 36' },
  { size: 'M',  chest: '40 - 42', shoulder: '18.5', sleeve: '25.5', length: '26.0', waist: '36 - 38' },
  { size: 'L',  chest: '42 - 44', shoulder: '19.0', sleeve: '26.0', length: '26.5', waist: '38 - 40' },
  { size: 'XL', chest: '44 - 46', shoulder: '19.5', sleeve: '26.5', length: '27.0', waist: '40 - 42' },
  { size: 'XXL',chest: '46 - 48', shoulder: '20.0', sleeve: '27.0', length: '27.5', waist: '42 - 44' },
  { size: '3XL',chest: '48 - 50', shoulder: '20.5', sleeve: '27.5', length: '28.0', waist: '44 - 46' },
];

const mensSizeChartCm = [
  { size: 'XS', chest: '91 - 96', shoulder: '44.5', sleeve: '62.2', length: '63.5', waist: '81 - 86' },
  { size: 'S',  chest: '96 - 101', shoulder: '45.7', sleeve: '63.5', length: '64.8', waist: '86 - 91' },
  { size: 'M',  chest: '101 - 107', shoulder: '47.0', sleeve: '64.8', length: '66.0', waist: '91 - 96' },
  { size: 'L',  chest: '107 - 112', shoulder: '48.3', sleeve: '66.0', length: '67.3', waist: '96 - 101' },
  { size: 'XL', chest: '112 - 117', shoulder: '49.5', sleeve: '67.3', length: '68.6', waist: '101 - 107' },
  { size: 'XXL',chest: '117 - 122', shoulder: '50.8', sleeve: '68.6', length: '69.8', waist: '107 - 112' },
  { size: '3XL',chest: '122 - 127', shoulder: '52.1', sleeve: '69.8', length: '71.1', waist: '112 - 117' },
];

const womensSizeChartInches = [
  { size: 'XS', bust: '32 - 34', shoulder: '15.0', sleeve: '23.0', length: '21.5', waist: '26 - 28' },
  { size: 'S',  bust: '34 - 36', shoulder: '15.5', sleeve: '23.5', length: '22.0', waist: '28 - 30' },
  { size: 'M',  bust: '36 - 38', shoulder: '16.0', sleeve: '24.0', length: '22.5', waist: '30 - 32' },
  { size: 'L',  bust: '38 - 40', shoulder: '16.5', sleeve: '24.5', length: '23.0', waist: '32 - 34' },
  { size: 'XL', bust: '40 - 42', shoulder: '17.0', sleeve: '25.0', length: '23.5', waist: '34 - 36' },
  { size: 'XXL',bust: '42 - 44', shoulder: '17.5', sleeve: '25.5', length: '24.0', waist: '36 - 38' },
];

const womensSizeChartCm = [
  { size: 'XS', bust: '81 - 86', shoulder: '38.1', sleeve: '58.4', length: '54.6', waist: '66 - 71' },
  { size: 'S',  bust: '86 - 91', shoulder: '39.4', sleeve: '59.7', length: '55.9', waist: '71 - 76' },
  { size: 'M',  bust: '91 - 96', shoulder: '40.6', sleeve: '61.0', length: '57.2', waist: '76 - 81' },
  { size: 'L',  bust: '96 - 101', shoulder: '41.9', sleeve: '62.2', length: '58.4', waist: '81 - 86' },
  { size: 'XL', bust: '101 - 107', shoulder: '43.2', sleeve: '63.5', length: '59.7', waist: '86 - 91' },
  { size: 'XXL',bust: '107 - 112', shoulder: '44.5', sleeve: '64.8', length: '61.0', waist: '91 - 96' },
];

export default function SizeChartModal({ isOpen, onClose, onNavigateBespoke = () => {} }) {
  const [activeTab, setActiveTab] = useState('mens'); // 'mens' | 'womens' | 'guide'
  const [unit, setUnit] = useState('inches'); // 'inches' | 'cm'

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[320] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-[3px] max-w-2xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col relative"
        >
          {/* Header */}
          <div className="p-5 border-b border-[var(--secondary)]/10 flex items-center justify-between bg-gray-50/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[3px] bg-[var(--secondary)] text-white flex items-center justify-center">
                <Ruler size={16} />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-[var(--secondary)]">
                  Leader Leather Size & Fit Guide
                </h3>
                <span className="text-[10px] sm:text-[11px] text-[var(--secondary)]/60 font-medium">
                  Standard Body Dimensions & Precision Measurement Guide
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-[3px] hover:bg-gray-200 text-[var(--secondary)] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Controls: Tabs & Units */}
          <div className="px-5 pt-4 pb-2 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 bg-white">
            {/* Gender / Guide Tabs */}
            <div className="flex gap-1 bg-gray-100 p-1 rounded-[3px]">
              <button
                onClick={() => setActiveTab('mens')}
                className={`px-3 py-1.5 rounded-[2px] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'mens'
                    ? 'bg-[var(--secondary)] text-white shadow-sm'
                    : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
                }`}
              >
                Men's Jackets
              </button>
              <button
                onClick={() => setActiveTab('womens')}
                className={`px-3 py-1.5 rounded-[2px] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'womens'
                    ? 'bg-[var(--secondary)] text-white shadow-sm'
                    : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
                }`}
              >
                Women's Jackets
              </button>
              <button
                onClick={() => setActiveTab('guide')}
                className={`px-3 py-1.5 rounded-[2px] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'guide'
                    ? 'bg-[var(--secondary)] text-white shadow-sm'
                    : 'text-[var(--secondary)]/70 hover:text-[var(--secondary)]'
                }`}
              >
                How to Measure
              </button>
            </div>

            {/* Unit Toggle (Inches vs CM) */}
            {activeTab !== 'guide' && (
              <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--secondary)]/70">
                <span className="text-[10px] uppercase tracking-wider">Unit:</span>
                <div className="flex border border-gray-200 rounded-[3px] overflow-hidden bg-gray-50">
                  <button
                    onClick={() => setUnit('inches')}
                    className={`px-2.5 py-1 text-[11px] font-bold cursor-pointer ${
                      unit === 'inches' ? 'bg-[var(--secondary)] text-white' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    IN
                  </button>
                  <button
                    onClick={() => setUnit('cm')}
                    className={`px-2.5 py-1 text-[11px] font-bold cursor-pointer ${
                      unit === 'cm' ? 'bg-[var(--secondary)] text-white' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    CM
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Table / Content Body */}
          <div className="p-5 overflow-y-auto flex-1 thin-scrollbar space-y-4">
            
            {/* Tab 1: Men's Size Table */}
            {activeTab === 'mens' && (
              <div className="space-y-4">
                <div className="overflow-x-auto no-scrollbar border border-[var(--secondary)]/15 rounded-[3px]">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[var(--secondary)] text-white text-[10.5px] font-black uppercase tracking-wider">
                        <th className="p-2.5 sm:p-3 border-r border-white/10">Size</th>
                        <th className="p-2.5 sm:p-3 border-r border-white/10">Chest ({unit === 'inches' ? 'in' : 'cm'})</th>
                        <th className="p-2.5 sm:p-3 border-r border-white/10">Shoulder</th>
                        <th className="p-2.5 sm:p-3 border-r border-white/10">Sleeve</th>
                        <th className="p-2.5 sm:p-3 border-r border-white/10">Back Length</th>
                        <th className="p-2.5 sm:p-3">Waist</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 font-medium text-[var(--secondary)]/85">
                      {(unit === 'inches' ? mensSizeChartInches : mensSizeChartCm).map((row, idx) => (
                        <tr key={row.size} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                          <td className="p-2.5 sm:p-3 font-black text-[var(--secondary)] border-r border-gray-100">{row.size}</td>
                          <td className="p-2.5 sm:p-3 font-semibold text-[var(--accent)] border-r border-gray-100">{row.chest}</td>
                          <td className="p-2.5 sm:p-3 border-r border-gray-100">{row.shoulder}</td>
                          <td className="p-2.5 sm:p-3 border-r border-gray-100">{row.sleeve}</td>
                          <td className="p-2.5 sm:p-3 border-r border-gray-100">{row.length}</td>
                          <td className="p-2.5 sm:p-3">{row.waist}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-[3px] text-[11px] text-amber-900 leading-relaxed">
                  <strong>Fit Tip:</strong> If you plan to wear thick hoodies or winter sweaters underneath your leather jacket, we recommend sizing up by one size.
                </div>
              </div>
            )}

            {/* Tab 2: Women's Size Table */}
            {activeTab === 'womens' && (
              <div className="space-y-4">
                <div className="overflow-x-auto no-scrollbar border border-[var(--secondary)]/15 rounded-[3px]">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[var(--secondary)] text-white text-[10.5px] font-black uppercase tracking-wider">
                        <th className="p-2.5 sm:p-3 border-r border-white/10">Size</th>
                        <th className="p-2.5 sm:p-3 border-r border-white/10">Bust ({unit === 'inches' ? 'in' : 'cm'})</th>
                        <th className="p-2.5 sm:p-3 border-r border-white/10">Shoulder</th>
                        <th className="p-2.5 sm:p-3 border-r border-white/10">Sleeve</th>
                        <th className="p-2.5 sm:p-3 border-r border-white/10">Back Length</th>
                        <th className="p-2.5 sm:p-3">Waist</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 font-medium text-[var(--secondary)]/85">
                      {(unit === 'inches' ? womensSizeChartInches : womensSizeChartCm).map((row, idx) => (
                        <tr key={row.size} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                          <td className="p-2.5 sm:p-3 font-black text-[var(--secondary)] border-r border-gray-100">{row.size}</td>
                          <td className="p-2.5 sm:p-3 font-semibold text-[var(--accent)] border-r border-gray-100">{row.bust}</td>
                          <td className="p-2.5 sm:p-3 border-r border-gray-100">{row.shoulder}</td>
                          <td className="p-2.5 sm:p-3 border-r border-gray-100">{row.sleeve}</td>
                          <td className="p-2.5 sm:p-3 border-r border-gray-100">{row.length}</td>
                          <td className="p-2.5 sm:p-3">{row.waist}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-[3px] text-[11px] text-amber-900 leading-relaxed">
                  <strong>Tailoring Fit:</strong> Women's cropped moto and aviator jackets feature anatomically tapered waistlines for a contoured silhouette.
                </div>
              </div>
            )}

            {/* Tab 3: How to Measure Guide */}
            {activeTab === 'guide' && (
              <div className="space-y-3 text-xs text-[var(--secondary)]/85">
                <div className="p-3 bg-gray-50 rounded-[3px] border border-gray-200 space-y-1">
                  <h4 className="font-black text-[var(--secondary)] uppercase text-xs flex items-center gap-1.5">
                    <Check size={14} className="text-[var(--accent)]" /> 1. Chest / Bust Circumference
                  </h4>
                  <p className="text-[11px] text-gray-600 pl-5">
                    Wrap the measuring tape horizontally around the fullest part of your chest/bust under your armpits, keeping the tape level and relaxed.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-[3px] border border-gray-200 space-y-1">
                  <h4 className="font-black text-[var(--secondary)] uppercase text-xs flex items-center gap-1.5">
                    <Check size={14} className="text-[var(--accent)]" /> 2. Shoulder Breadth
                  </h4>
                  <p className="text-[11px] text-gray-600 pl-5">
                    Measure straight across the upper back from the tip of the left shoulder bone to the tip of the right shoulder bone.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-[3px] border border-gray-200 space-y-1">
                  <h4 className="font-black text-[var(--secondary)] uppercase text-xs flex items-center gap-1.5">
                    <Check size={14} className="text-[var(--accent)]" /> 3. Sleeve Length
                  </h4>
                  <p className="text-[11px] text-gray-600 pl-5">
                    With your arm slightly bent at the elbow, measure from the shoulder seam point down to your wrist bone.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-[3px] border border-gray-200 space-y-1">
                  <h4 className="font-black text-[var(--secondary)] uppercase text-xs flex items-center gap-1.5">
                    <Check size={14} className="text-[var(--accent)]" /> 4. Back Torso Length
                  </h4>
                  <p className="text-[11px] text-gray-600 pl-5">
                    Measure down the center of your back from the base of the collar to the bottom hemline where you want the jacket to rest.
                  </p>
                </div>
              </div>
            )}

            {/* Custom Made-to-Measure Callout */}
            <div className="p-4 bg-gradient-to-r from-[var(--secondary)] to-[#2d2894] rounded-[3px] text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
              <div>
                <div className="flex items-center gap-1.5 text-[9.5px] font-bold text-[var(--accent)] uppercase tracking-wider">
                  <Sparkles size={12} /> BESPOKE ATELIER SERVICE
                </div>
                <h5 className="text-xs font-black uppercase">Need a 100% Custom 12-Point Fit?</h5>
                <p className="text-[10px] text-white/75">
                  We hand-tailor jackets to your exact measurements with zero off-the-rack compromises.
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onNavigateBespoke();
                }}
                className="px-4 py-2 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold text-[10px] uppercase tracking-wider rounded-[3px] transition-all whitespace-nowrap cursor-pointer flex-shrink-0"
              >
                Inquire Bespoke Fit &rarr;
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
