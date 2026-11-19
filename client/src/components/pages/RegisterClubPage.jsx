import React, { useState } from 'react';
import { Award, Users, Check, ArrowRight, ShieldCheck, Phone, Mail } from 'lucide-react';
import TrustBar from '../common/TrustBar';
import { useCMS } from '../../context/CMSContext';

export default function RegisterClubPage({ onNavigateInquiry = () => {} }) {
  const { submitInquiry } = useCMS();
  const [formData, setFormData] = useState({
    clubName: '',
    directorName: '',
    email: '',
    phone: '',
    sport: 'Soccer',
    totalTeams: '4-8 Teams',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitInquiry({
        name: `${formData.directorName} (${formData.clubName})`,
        email: formData.email,
        phone: formData.phone,
        sport: formData.sport,
        message: `CLUB REGISTRATION REQUEST:\nClub/Org: ${formData.clubName}\nTotal Teams: ${formData.totalTeams}\nNotes: ${formData.notes}`,
        source: 'register_club_form'
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[var(--secondary)] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="w-[96%] max-w-[1400px] mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-2 block">
            PARTNER DIRECT WITH SIALKOT FACTORY
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white mb-3">
            Register Your Club & Unlock Permanent Volume Discounts
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Lock in top-tier volume pricing across all age groups, assign a dedicated uniform specialist, and get free vector archiving forever.
          </p>
        </div>
      </section>

      <TrustBar />

      <div className="w-[96%] max-w-[1200px] mx-auto my-14 sm:my-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Benefits Column */}
        <div className="space-y-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] block mb-1">
              CLUB PARTNERSHIP PERKS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] leading-tight mb-4">
              Why 500+ Sports Clubs Outfit With HAMLO SPORTS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              When your club registers with HAMLO SPORTS, every coach, player, and age division benefits from direct-from-factory pricing with zero middlemen retail markups.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {[
              {
                title: 'Cumulative League Tier Pricing',
                desc: 'Group all age divisions (U8 through U18) onto one quote. Total pieces count toward the highest discount bracket, saving families up to 35%.'
              },
              {
                title: 'Dedicated Uniform Production Specialist',
                desc: 'Direct phone, email, and WhatsApp line to an assigned production coordinator who oversees your artwork, dye batches, and delivery schedule.'
              },
              {
                title: 'Permanent Vector & Pantone Archive',
                desc: 'Your club logos, typography, and color codes are securely archived. Single-player late additions during the season are honored at your team volume rate.'
              },
              {
                title: 'Priority 12-Hour 3D Design Desk',
                desc: 'Complimentary, unlimited 3D vector proofs for home, away, alternate kits, coaching staff polos, and sideline warmups.'
              },
              {
                title: 'Net 30 School & Booster Terms',
                desc: 'Official Purchase Orders (POs) accepted from school districts, booster clubs, and municipal recreation departments.'
              }
            ].map((perk, idx) => (
              <div key={idx} className="p-4 bg-white rounded-[3px] border border-neutral-200 shadow-xs flex items-start gap-3">
                <Check size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs font-black uppercase text-[var(--secondary)] mb-1">
                    {perk.title}
                  </strong>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form Column */}
        <div className="bg-white p-6 sm:p-10 rounded-[3px] border border-neutral-200 shadow-lg">
          <div className="mb-6 pb-4 border-b border-neutral-100">
            <h3 className="text-xl font-black uppercase text-[var(--secondary)]">
              Club Partnership Registration
            </h3>
            <span className="text-[11px] text-neutral-500 font-light block mt-1">
              No contracts or hidden obligations. Your registration unlocks your team's factory volume rates immediately.
            </span>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded text-center space-y-3">
              <Award size={36} className="text-emerald-600 mx-auto" />
              <h4 className="text-base font-black uppercase text-emerald-950">
                Club Registration Received!
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Thank you, <strong>{formData.directorName}</strong>! Your assigned HAMLO SPORTS uniform specialist will reach out within 1 business hour to unlock your club's volume rate and start your 3D proofs.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">Club / Organization Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Metro United Soccer Club"
                  value={formData.clubName}
                  onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">Director / Coach Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Coach Dave Robinson"
                  value={formData.directorName}
                  onChange={(e) => setFormData({ ...formData, directorName: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="coach@club.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">Primary Sport</label>
                  <select
                    value={formData.sport}
                    onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)] bg-white"
                  >
                    {['Soccer', 'Baseball', 'Basketball', 'Football', 'Ice Hockey', 'Lacrosse', 'Softball', 'Volleyball', 'Wrestling', 'Rugby', 'Flag Football', 'Esports'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">Number of Teams</label>
                  <select
                    value={formData.totalTeams}
                    onChange={(e) => setFormData({ ...formData, totalTeams: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)] bg-white"
                  >
                    {['1-3 Teams', '4-8 Teams', '9-15 Teams', '16+ Teams (Full League)'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">Target Season & Notes</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your upcoming season dates, target in-hand date, or special color requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-[var(--accent)] hover:opacity-95 text-white text-xs font-black uppercase tracking-wider rounded-[3px] transition cursor-pointer shadow-md disabled:opacity-50"
              >
                {submitting ? 'Registering Club...' : 'Register Club & Lock Volume Discounts'}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
