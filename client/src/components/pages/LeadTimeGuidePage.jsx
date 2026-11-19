import React from 'react';
import { Clock, Check, ArrowRight, ShieldCheck, AlertCircle, Calendar, Truck } from 'lucide-react';
import SEO from '../common/SEO';
import TrustBar from '../common/TrustBar';

export default function LeadTimeGuidePage({ onNavigateInquiry = () => {} }) {
  return (
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">
      <SEO
        title="How Long Do Custom Team Uniforms Take? (8-12 Day Turnaround Guide)"
        description="Comprehensive turnaround time breakdown for custom sports team uniforms. Why US brokers take 4–6 weeks while Hamlo Sports Wear builds and ships factory-direct in 8–12 days."
        canonical="https://hamlosportswear.site/how-long-do-custom-uniforms-take/"
        keywords="how long do custom uniforms take, custom jersey turnaround time, sports uniform production lead time, fast custom team uniforms, rush uniform manufacturing"
      />

      <section className="bg-[var(--secondary)] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="w-[96%] max-w-[1200px] mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
            B2B ATHLETIC UNIFORM LOGISTICS & PLANNING
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            HOW LONG DO CUSTOM UNIFORMS TAKE TO MAKE?
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl font-light leading-relaxed mb-6">
            The definitive guide to custom sports uniform production lead times. Learn why domestic US brokers take 4 to 6 weeks, and how factory-direct manufacturing delivers in just 8 to 12 working days.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[11px] font-semibold text-white/80">
            <span className="px-3 py-1 rounded bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Clock size={14} className="text-[var(--accent)]" /> 12h Free 3D Proof
            </span>
            <span className="px-3 py-1 rounded bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Check size={14} className="text-[var(--accent)]" /> 8–12 Days Factory Production
            </span>
            <span className="px-3 py-1 rounded bg-white/10 border border-white/15 flex items-center gap-1.5">
              <Truck size={14} className="text-[var(--accent)]" /> 3–5 Days Doorstep Air Shipping
            </span>
          </div>
        </div>
      </section>

      <TrustBar />

      <article className="w-[96%] max-w-[1000px] mx-auto my-14 sm:my-20 bg-white p-8 sm:p-14 rounded-[5px] border border-[var(--secondary)]/15 shadow-sm space-y-10 text-neutral-700 leading-relaxed text-sm">
        
        {/* Intro Executive Summary */}
        <div className="p-5 bg-neutral-50 rounded border-l-4 border-l-[var(--accent)] text-xs sm:text-sm space-y-2">
          <strong className="block font-black text-sm uppercase text-[var(--secondary)]">
            Quick Answer for Coaches & Athletic Directors:
          </strong>
          <p>
            Standard custom sublimated team uniforms take <strong>2 to 3 weeks in total</strong> from signed design proof to your doorstep. At Hamlo Sports Wear, actual factory production takes <strong>8 to 12 business days</strong>, followed by <strong>3 to 5 business days</strong> of express DHL/FedEx air transit with pre-cleared US customs (DDP).
          </p>
        </div>

        {/* Breakdown of 4 Steps */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black uppercase text-[var(--secondary)]">
            The 4 Stages of Custom Uniform Manufacturing
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded border border-neutral-200">
              <h3 className="font-black text-base text-[var(--secondary)] mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center text-xs">1</span>
                Stage 1: Digital 3D Mockup & Art Approval (12 to 24 Hours)
              </h3>
              <p className="text-xs text-neutral-600">
                You submit your team colors, vector crest, and sponsor logos. Our Sialkot design desk drafts a comprehensive 3D vector proof within 12 hours. Any adjustments to font, sleeve striping, or color codes are handled same-day until you give final approval.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded border border-neutral-200">
              <h3 className="font-black text-base text-[var(--secondary)] mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center text-xs">2</span>
                Stage 2: Digital Sublimation Printing & Heat Calendering (3 to 4 Days)
              </h3>
              <p className="text-xs text-neutral-600">
                Your approved artwork is printed onto industrial Japanese dye-transfer paper and fused into moisture-wicking polyester rolls under high-temperature pneumatic heat rollers (400°F). The ink molecularly bonds into the yarn, ensuring zero cracking or peeling.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded border border-neutral-200">
              <h3 className="font-black text-base text-[var(--secondary)] mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center text-xs">3</span>
                Stage 3: Laser Cutting, Tackle Twill Stitching & Assembly (4 to 6 Days)
              </h3>
              <p className="text-xs text-neutral-600">
                Automated laser cutters cut panels with sub-millimeter precision. If tackle-twill names and numbers or 3D embroidered crests were selected, master needleworkers zigzag-stitch the twill onto the jerseys before flat-lock overedge seam assembly.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded border border-neutral-200">
              <h3 className="font-black text-base text-[var(--secondary)] mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center text-xs">4</span>
                Stage 4: Quality Inspection, Sorting & Express DDP Air Shipping (3 to 5 Days)
              </h3>
              <p className="text-xs text-neutral-600">
                Every jersey is inspected against your roster size sheet for correct spelling, number placement, and seam tensile strength. Kits are individually bagged by player name and shipped via express air with Delivered Duty Paid (DDP) clearance to your doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison: Broker vs Factory Direct */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black uppercase text-[var(--secondary)]">
            Why US Dealers Take 5–6 Weeks While Hamlo Delivers in 2–3 Weeks
          </h2>

          <div className="overflow-x-auto border border-neutral-200 rounded">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[var(--secondary)] text-white uppercase text-[11px]">
                  <th className="p-3 w-1/3">Stage</th>
                  <th className="p-3 w-1/3">Typical US Middleman / Dealer</th>
                  <th className="p-3 w-1/3 bg-[var(--accent)] text-white font-bold">Hamlo Sports Wear (Factory Direct)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold">Art Proofing</td>
                  <td className="p-3 text-neutral-500">3 to 5 days (sales rep queues to graphic department)</td>
                  <td className="p-3 font-semibold text-emerald-800">12 hours (direct to export art desk)</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-3 font-bold">Factory Queue</td>
                  <td className="p-3 text-neutral-500">7 to 10 days (dealer waits to batch orders)</td>
                  <td className="p-3 font-semibold text-emerald-800">0 days (fabric cut within 24h of signed roster)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Manufacturing</td>
                  <td className="p-3 text-neutral-500">14 to 20 days</td>
                  <td className="p-3 font-semibold text-emerald-800">8 to 12 business days</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-3 font-bold">Customs & Delivery</td>
                  <td className="p-3 text-neutral-500">7 to 12 days (clears via dealer hub, then reshipped)</td>
                  <td className="p-3 font-semibold text-emerald-800">3 to 5 days (direct factory air courier to coach)</td>
                </tr>
                <tr className="font-black bg-neutral-100">
                  <td className="p-3 uppercase">Total Turnaround</td>
                  <td className="p-3 text-red-700">31 to 47 Days (5 to 7 Weeks)</td>
                  <td className="p-3 text-emerald-700 text-sm">14 to 18 Days Total (2 to 2.5 Weeks)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Planning Calendar Advice */}
        <div className="space-y-3">
          <h2 className="text-xl font-black uppercase text-[var(--secondary)]">
            When Should You Place Your Team Order?
          </h2>
          <p className="text-xs text-neutral-600 leading-relaxed">
            We recommend approving your 3D digital proof at least <strong>25 to 30 days before your season opener or first tournament weekend</strong>. This provides a generous 1-week safety buffer for roster changes, sizing swaps, or unexpected weather shipping delays.
          </p>
        </div>

        {/* CTA */}
        <div className="p-6 bg-gradient-to-r from-[var(--secondary)] to-[#15124b] text-white rounded text-center space-y-3">
          <h3 className="text-lg font-black uppercase">Need Uniforms Fast for Opening Day?</h3>
          <p className="text-xs text-white/80 max-w-md mx-auto">
            Free rush production is available for qualifying teams when factory schedule permits. Send your roster today for a free 12-hour 3D proof.
          </p>
          <button
            onClick={() => onNavigateInquiry('Rush Order Uniform Request')}
            className="px-6 py-3 bg-[var(--accent)] text-white text-xs font-black uppercase tracking-wider rounded hover:opacity-90 transition cursor-pointer"
          >
            Request Free 12-Hour 3D Proof & Timeline &rarr;
          </button>
        </div>

      </article>
    </div>
  );
}
