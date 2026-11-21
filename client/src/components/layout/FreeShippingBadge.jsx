import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Truck, Check, ShieldCheck, Clock, Plane, MapPin, 
  X, ArrowRight, MessageSquare, Calendar, Sparkles, AlertCircle, ChevronRight
} from 'lucide-react';

/**
 * FreeShippingBadge Component
 * Premium HAMLO SPORTS Animated Free US Shipping Banner
 * Unique characteristics:
 * - Placement: Docked on the LEFT EDGE (opposite of chat widget, uncluttered viewport)
 * - Shape: Asymmetric sports emblem with rounded-r-2xl and electric emerald neon border
 * - Continuous Multi-Layer Animations:
 *   1. Animated driving truck with suspension bounce and speed-trail
 *   2. Periodic luxury diagonal shimmer sweep
 *   3. Pulsing radar beacon dot (● LIVE DDP AIR)
 *   4. Rotating micro-benefit ticker (Zero Tariffs -> 3–5 Days Air -> Direct to Door)
 * - Interactive slide-over Flyout Guarantee Drawer with lead time estimator & WhatsApp trigger
 */
export default function FreeShippingBadge({ onNavigateInquiry = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tournamentWeeks, setTournamentWeeks] = useState(6);
  const [benefitIdx, setBenefitIdx] = useState(0);

  // Cycling micro-benefit ticker
  const rotatingBenefits = [
    'ZERO TARIFFS',
    '3–5 DAYS AIR',
    'FREE 3D PROOF',
    'FACTORY DIRECT'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBenefitIdx((prev) => (prev + 1) % rotatingBenefits.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [rotatingBenefits.length]);

  // Dynamic delivery date calculation based on user timeline
  const today = new Date();
  const targetDate = new Date(today.getTime() + tournamentWeeks * 7 * 24 * 60 * 60 * 1000);
  const deadlineDate = new Date(targetDate.getTime() - 33 * 24 * 60 * 60 * 1000);

  const formatDate = (d) => {
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const whatsAppNumber = '923105464116';
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
    'Hello HAMLO SPORTS! I saw your Free US DDP Shipping offer. Can you confirm the delivery timeline and shipping terms for our team order?'
  )}`;

  return (
    <>
      {/* ── 1. LEFT-PINNED ANIMATED LUXURY EMBLEM (CHANGED POSITION & CUSTOM HAMLO IDENTITY) ── */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
        className="fixed left-0 top-[48%] -translate-y-1/2 z-[100] select-none"
        aria-label="Free US Shipping Guarantee"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex flex-col items-center justify-between bg-gradient-to-br from-[#0B132B] via-[#092B24] to-[#044736] text-white w-[82px] sm:w-[94px] py-4 px-2 rounded-r-2xl shadow-[0_12px_40px_rgba(4,71,54,0.55)] hover:shadow-[0_15px_50px_rgba(16,185,129,0.7)] transition-all duration-300 hover:translate-x-1.5 cursor-pointer border-t-2 border-b-2 border-r-2 border-emerald-400/70 overflow-hidden"
          title="Click to view Free US Shipping & Delivery Guarantee"
        >
          {/* Animated luxury diagonal shimmer sweep */}
          <motion.div
            initial={{ x: '-150%' }}
            animate={{ x: '250%' }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              repeatDelay: 2.2,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 w-2/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-20 pointer-events-none"
          />

          {/* Ambient emerald neon glow */}
          <span className="absolute -inset-0.5 rounded-r-2xl bg-emerald-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-300 animate-pulse pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center w-full">
            
            {/* Animated Delivery Truck with motion and speed dash */}
            <div className="relative w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-1 group-hover:bg-emerald-500/30 transition-all duration-300">
              <motion.div
                animate={{
                  x: [0, 3, -1, 2, 0],
                  y: [0, -1.5, 0, -1, 0]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Truck size={23} className="text-emerald-400 drop-shadow-[0_2px_8px_rgba(52,211,153,0.8)]" />
              </motion.div>
            </div>

            {/* Pulsing Live Beacon Indicator */}
            <div className="flex items-center gap-1 my-0.5 bg-emerald-950/70 px-1.5 py-0.5 rounded-full border border-emerald-500/40">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
              </span>
              <span className="text-[7.5px] font-black uppercase tracking-wider text-emerald-300">
                DDP AIR
              </span>
            </div>

            {/* Bold Branded Typography */}
            <div className="text-center font-black uppercase tracking-tight leading-[1.08] my-1 text-white">
              <span className="block text-[10.5px] sm:text-[11.5px] font-black tracking-wide text-white">
                FREE US
              </span>
              <span className="block text-[12px] sm:text-[13px] font-black tracking-wider text-emerald-400 drop-shadow-sm">
                SHIPPING
              </span>
              <span className="block text-[8.5px] sm:text-[9.5px] font-bold text-white/90 tracking-widest mt-0.5">
                INCLUDED
              </span>
            </div>

            {/* Cycling Micro-Benefit Pill with AnimatePresence */}
            <div className="w-full my-1 h-4 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingBenefits[benefitIdx]}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[7.5px] font-bold uppercase tracking-widest text-emerald-200 text-center truncate block bg-white/10 px-1.5 py-0.5 rounded"
                >
                  {rotatingBenefits[benefitIdx]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Green Neon Checkmark Badge */}
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.8)] mt-0.5 group-hover:scale-110 transition-transform duration-200">
              <Check size={12} strokeWidth={3.5} />
            </div>
          </div>

          {/* Micro interaction prompt */}
          <div className="relative z-10 mt-1.5 flex items-center gap-0.5 text-[7px] font-bold uppercase tracking-widest text-emerald-300/80 group-hover:text-emerald-200 transition-colors">
            <span>Details</span>
            <ChevronRight size={9} />
          </div>
        </button>
      </motion.aside>

      {/* ── 2. INTERACTIVE FLYOUT MODAL / DRAWER (EXPANDS FROM LEFT ON CLICK) ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[130] flex items-center justify-start">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
            />

            {/* Slide-over Card from the LEFT */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative z-10 w-full max-w-md sm:max-w-lg h-full sm:h-auto sm:max-h-[92vh] sm:my-auto sm:ml-4 bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header Banner */}
              <div className="bg-gradient-to-r from-[#0B132B] via-[#092B24] to-[#044736] text-white p-5 sm:p-6 relative border-b-2 border-emerald-400/50">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center shadow-inner">
                    <Truck size={28} className="text-emerald-400 drop-shadow-[0_2px_8px_rgba(52,211,153,0.8)]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300 block">
                      HAMLO SPORTS FACTORY DIRECT GUARANTEE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-none">
                      FREE US SHIPPING INCLUDED
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-emerald-100/90 leading-relaxed font-light mt-1">
                  Every team uniform order ships via expedited air cargo with <strong>pre-cleared US Customs (DDP)</strong>. Zero surprise tariffs, zero broker fees.
                </p>
              </div>

              {/* Body Content */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4 bg-neutral-50/50 flex-1">
                {/* 3 Pillar Guarantee Cards */}
                <div className="space-y-2.5">
                  <div className="p-3.5 bg-white rounded-lg border border-emerald-100 shadow-xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase text-[var(--secondary)]">
                        DDP Delivery (Duties Pre-Paid)
                      </h4>
                      <p className="text-[11px] text-neutral-600 leading-relaxed mt-0.5">
                        HAMLO SPORTS handles 100% of the customs clearance, port paperwork, and import tariffs. The quote you receive is your guaranteed landed price.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white rounded-lg border border-emerald-100 shadow-xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Plane size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase text-[var(--secondary)]">
                        3 to 5 Days Express Air Transit
                      </h4>
                      <p className="text-[11px] text-neutral-600 leading-relaxed mt-0.5">
                        Direct air transit from Sialkot, Pakistan to your facility door via DHL Express & FedEx Priority Air with live tracking updates.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white rounded-lg border border-emerald-100 shadow-xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase text-[var(--secondary)]">
                        Complimentary 12-Hour 3D Digital Mockup
                      </h4>
                      <p className="text-[11px] text-neutral-600 leading-relaxed mt-0.5">
                        Unlimited digital revisions before cutting fabric. Nothing enters production until your athletic director or coach signs off on the proof.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Tournament Timeline Calculator */}
                <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[var(--accent)] flex items-center gap-1.5">
                      <Calendar size={13} /> Target Date Estimator
                    </span>
                    <span className="text-[10px] font-bold text-neutral-500">
                      Standard Lead Time: 33 Days
                    </span>
                  </div>

                  <label className="block text-xs font-bold text-[var(--secondary)] mb-1">
                    When is your first match or tournament?
                  </label>
                  <select
                    value={tournamentWeeks}
                    onChange={(e) => setTournamentWeeks(Number(e.target.value))}
                    className="w-full text-xs font-medium p-2.5 bg-neutral-50 border border-neutral-300 rounded cursor-pointer mb-3"
                  >
                    <option value={4}>In 4 Weeks (Rush Window - Requires Fast Approval)</option>
                    <option value={6}>In 6 Weeks (Standard Safe Roster Buffer)</option>
                    <option value={8}>In 8 Weeks (Ideal Pre-Season Planning)</option>
                    <option value={12}>In 12 Weeks (Early Season / League Package)</option>
                  </select>

                  <div className="p-3 bg-emerald-50 rounded border border-emerald-200 text-xs">
                    <div className="flex justify-between items-center text-neutral-700 mb-1">
                      <span>Target Match Date:</span>
                      <strong className="text-[var(--secondary)]">{formatDate(targetDate)}</strong>
                    </div>
                    <div className="flex justify-between items-center text-emerald-800 font-bold border-t border-emerald-200 pt-1">
                      <span>Approve Design Proof By:</span>
                      <strong className="text-emerald-700">{formatDate(deadlineDate)}</strong>
                    </div>
                  </div>
                </div>

                {/* Worldwide Note */}
                <p className="text-[10.5px] text-neutral-500 text-center leading-relaxed">
                  🌍 <em>Shipping to Canada, UK, Europe, or Australia? We provide DDP worldwide shipping with pre-cleared customs as well.</em>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="p-4 sm:p-5 bg-white border-t border-neutral-200 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onNavigateInquiry({ name: 'Free US DDP Shipping Order Inquiry' });
                  }}
                  className="flex-1 py-3 px-4 bg-[var(--accent)] text-white font-black text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 hover:opacity-95 transition cursor-pointer shadow-md"
                >
                  <span>Request Free 3D Proof</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 transition cursor-pointer shadow-md flex-shrink-0"
                >
                  <MessageSquare size={15} />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
