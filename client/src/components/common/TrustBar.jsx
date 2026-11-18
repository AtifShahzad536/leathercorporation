import React from 'react';
import { Clock, Award, Users, CheckCircle, Shield, Truck, RefreshCw, Factory } from 'lucide-react';

export default function TrustBar() {
  const points = [
    { icon: Clock, title: '1-Hour Response', sub: 'During business hours' },
    { icon: Factory, title: 'Sialkot Factory Direct', sub: 'OEM Manufacturer' },
    { icon: Users, title: '500+ Clubs & Academies', sub: 'Worldwide clients' },
    { icon: CheckCircle, title: 'Free 3D Mockup', sub: 'Within 12 hours' },
    { icon: Truck, title: 'Worldwide Shipping', sub: 'Duties pre-cleared' },
    { icon: RefreshCw, title: 'Free Remake Policy', sub: 'If we make an error' },
    { icon: Shield, title: 'OEKO-TEX Inks', sub: 'Non-toxic, vivid' }
  ];

  return (
    <section className="w-full bg-[var(--secondary)] border-y border-white/10 py-6 sm:py-8 text-white">
      <div className="w-[96%] max-w-[1800px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-6 text-center">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex flex-col items-center">
                <Icon size={20} className="text-[var(--accent)] mb-2" />
                <span className="text-[11px] font-black uppercase tracking-wider text-white">
                  {p.title}
                </span>
                <span className="text-[9px] text-white/60 font-light mt-0.5">
                  {p.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

