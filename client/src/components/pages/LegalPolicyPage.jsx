import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, RotateCcw, FileText, Lock, Check, ArrowRight } from 'lucide-react';
import TrustBar from '../common/TrustBar';

export default function LegalPolicyPage({ initialTab = 'privacy', onNavigateInquiry = () => {} }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[var(--secondary)] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="w-[96%] max-w-[1400px] mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-2 block">
            OFFICIAL B2B POLICIES & TRANSPARENCY
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white mb-3">
            {activeTab === 'privacy' && 'Privacy & Data Protection Policy'}
            {activeTab === 'terms' && 'Terms & Conditions of Sale'}
            {activeTab === 'refund' && 'Free Remake & 100% Refund Policy'}
            {activeTab === 'shipping' && 'Nationwide Shipping & Delivery Policy'}
            {activeTab === 'disclaimer' && 'Legal Disclaimer & Intellectual Property'}
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Factory-direct export manufacturing in Sialkot, Pakistan. Clear, fair, and binding guarantees for every athletic program.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Tabs Bar */}
      <div className="w-[96%] max-w-[1400px] mx-auto mt-8 mb-10">
        <div className="flex flex-wrap gap-2 justify-center border-b border-neutral-200 pb-4">
          {[
            { id: 'privacy', label: 'Privacy Policy', icon: Lock },
            { id: 'terms', label: 'Terms & Conditions', icon: FileText },
            { id: 'refund', label: 'Refund & Remake Policy', icon: RotateCcw },
            { id: 'shipping', label: 'Shipping & Delivery', icon: Truck },
            { id: 'disclaimer', label: 'Legal Disclaimer', icon: ShieldCheck }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  const pathMap = {
                    privacy: '/privacy-policy/',
                    terms: '/terms-conditions/',
                    refund: '/refund-policy/',
                    shipping: '/shipping-policy/',
                    disclaimer: '/disclaimer/'
                  };
                  window.history.pushState({}, '', pathMap[tab.id]);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-[3px] text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                  isActive 
                    ? 'bg-[var(--secondary)] text-white shadow-md' 
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-[var(--accent)]'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-[var(--accent)]' : 'text-neutral-400'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Section */}
      <section className="w-[96%] max-w-[1100px] mx-auto mb-20 bg-white p-6 sm:p-12 rounded-[3px] border border-neutral-200 shadow-sm leading-relaxed text-xs sm:text-sm text-neutral-700 space-y-6">
        
        {/* PRIVACY POLICY */}
        {activeTab === 'privacy' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">1. Information We Collect</h2>
              <p>
                At HAMLO SPORTS (hamlosports.com), we collect information provided directly by coaches, athletic directors, team managers, and club administrators. This includes contact details (full name, school/club name, email address, phone number, shipping address) and custom team artwork (vector logos, pantone colors, roster names, and numbers).
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">2. How We Use Your Information</h2>
              <p>
                Your information is used strictly to prepare free 12-hour 3D design proofs, process factory production orders, coordinate DHL/FedEx door-to-door freight, and archive your vector designs for effortless single-player reorders in future seasons. We never sell, rent, or trade your data to third-party marketing brokers.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">3. Data Security & Encryption</h2>
              <p>
                All digital communications and inquiry submissions are encrypted using 256-bit TLS/SSL protocols. Production records are stored on secure cloud databases with restricted access limited to authorized manufacturing specialists.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">4. Cookies & Analytics</h2>
              <p>
                We use privacy-conscious analytics cookies to evaluate traffic patterns, improve website navigation speeds, and remember your active sport selections. You can adjust your browser settings to decline non-essential cookies at any time.
              </p>
            </div>
          </div>
        )}

        {/* TERMS & CONDITIONS */}
        {activeTab === 'terms' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">1. Order Agreement & Production Approval</h2>
              <p>
                Nothing enters physical fabric cutting, digital dye-sublimation, or embroidery until you provide signed written approval of your multi-angle 3D digital proof and final roster breakdown (sizes, names, numbers). Once approved, changes to sizes or artwork cannot be made without incurring factory setup costs.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">2. Pricing, Volume Tiers & Invoicing</h2>
              <p>
                Published unit rates are based on cumulative roster counts per order. All 4 volume brackets (1–24, 25–50, 51–100, 101+) apply across uniform packages. Base dye-sublimated lettering, numbers, and sponsor crests are 100% included with zero setup surcharges. Optional premium tackle twill stitching is priced at +$5 per name and +$5 per number.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">3. School & University Purchase Orders (POs)</h2>
              <p>
                We gladly accept official School District, University, Booster Club, and Military Recreational Purchase Orders with standard Net 30 terms. Production commences immediately upon receipt of the official PO document and signed proof.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">4. Vector Artwork & Storage</h2>
              <p>
                We maintain vector artwork templates and color formulas permanently in our factory database. Single-player replacement jerseys or add-ons throughout the season are honored at your team's volume rate.
              </p>
            </div>
          </div>
        )}

        {/* REFUND & REMAKE POLICY */}
        {activeTab === 'refund' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">1. 100% Free Remake Guarantee</h2>
              <p>
                Because all athletic uniforms are custom-tailored with unique roster names and numbers, standard off-the-shelf returns are not possible. However, we back every shipment with our **100% Free Remake Guarantee**:
              </p>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Spelling or Number Error:</strong> If an delivered uniform differs from your approved size and roster sheet, we remake and air-freight the replacement free of charge.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Incorrect Size or Pattern:</strong> If a garment does not match our published sizing specifications beyond standard 0.5-inch athletic tolerances, it will be remade immediately.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Manufacturing Defect:</strong> Any fabric flaw, broken seam, or sublimation bleed reported within 30 days of delivery qualifies for an immediate free remake or credit.</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">2. How to File a Remake Claim</h2>
              <p>
                Simply email <strong>sale@hamlosportswear.site</strong> with your order number and clear photos showing the issue within 30 days of package receipt. Our production desk resolves claims within 24 business hours.
              </p>
            </div>
          </div>
        )}

        {/* SHIPPING & DELIVERY POLICY */}
        {activeTab === 'shipping' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">1. Turnaround Timelines</h2>
              <p>
                Standard turnaround is **2 to 3 weeks** for factory production following your final design approval, followed by **3 to 5 business days** for express international air transit directly to your doorstep.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">2. Delivered Duty Paid (DDP) for United States</h2>
              <p>
                All team shipments to the United States operate under DDP terms. All import tariffs, customs clearance paperwork, and border duties are fully managed and absorbed by HAMLO SPORTS factory operations. You will never receive an unexpected customs billing notice.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">3. Canadian & International Teams</h2>
              <p>
                We proudly supply teams, clubs, and schools throughout Canada, Europe, Australia, and worldwide via express DHL, FedEx, and UPS tracking. Tracking numbers are emailed instantaneously upon dispatch.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">4. Complimentary Rush Production</h2>
              <p>
                If your tournament or opening game day is approaching sooner than our standard 3-week window, notify our scheduling desk on your quote. When factory capacity allows, we provide expedited rush production at zero additional surcharge.
              </p>
            </div>
          </div>
        )}

        {/* DISCLAIMER */}
        {activeTab === 'disclaimer' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">1. Intellectual Property & Customer Trademarks</h2>
              <p>
                Customers submitting custom artwork, crests, collegiate marks, or sponsor logos warrant that they hold the legal authority or licensing rights to reproduce such emblems. HAMLO SPORTS disclaims liability for unauthorized trademark usage submitted by purchasing clients.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">2. Color Consistency & Screen Variations</h2>
              <p>
                Digital computer monitors and smartphone screens emit RGB light which may appear slightly brighter than physical CMYK dye-sublimation on athletic polyester textiles. If exact color matching is required, please provide specific Pantone (PMS) color codes on your quote form.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black uppercase text-[var(--secondary)] mb-2">3. Independent Factory Manufacturing</h2>
              <p>
                HAMLO SPORTS is an independent export athletic goods manufacturer located in Sialkot, Pakistan. All brand references on this website are for identification, specification, and comparative purposes.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-500 font-medium">
            Have questions regarding our policies or want to discuss your school PO?
          </span>
          <button
            onClick={() => onNavigateInquiry({ name: 'Policy Inquiry', sport: 'General' })}
            className="px-6 py-2.5 bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] hover:opacity-90 transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>Contact Legal & Sales Desk</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </section>
    </div>
  );
}
