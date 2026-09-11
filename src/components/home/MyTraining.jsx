import React from 'react';
import { motion } from 'framer-motion';

const MyTraining = () => {
  return (
    <section className="w-full py-6">
      <div className="w-[92%] mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-5">
          {/* Left — Image */}
          <div className="w-full md:w-1/2 relative overflow-hidden min-h-[400px] rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=900&q=80"
              alt="Bespoke Leather Craftsmanship - Master Artisan at work"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>

          {/* Right — Midnight Blue Content Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full md:w-1/2 bg-[var(--secondary)] text-white flex items-center justify-center px-12 py-16 rounded-2xl"
          >
            <div className="text-center">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-8">
                BESPOKE TAILORING
              </h2>

              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Our Master Tailoring service crafts each leather jacket to exact anatomical measurements. From hand-selected 1.2mm full-grain hides and heavy-gauge bonded threads to antique brass hardware and quilted silk linings, experience outerwear built for a lifetime of distinction.
              </p>

              {/* Bold Tagline */}
              <p className="text-sm font-black mb-10">
                LEADER CORPORATION is the bespoke choice – trusted by international fashion brands, motorcycle clubs, and luxury retailers worldwide.
              </p>

              {/* Radiant Orange CTA Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold text-sm tracking-wide py-4 px-8 transition-colors duration-200"
              >
                Discover Bespoke & OEM Leather Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyTraining;
