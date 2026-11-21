import React, { memo } from 'react';
import SEO from '../common/SEO';
import SportCategoryCard from '../sports/SportCategoryCard';
import { sportsCategories } from '../../data/sportsCategoriesData';

const SportsCatalogHome = memo(() => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Custom Sportswear Pro',
    url: window.location.origin,
    logo: `${window.location.origin}/logo_silverstar.png`,
    description: 'Custom athletic sports uniforms, sublimation jerseys, team apparel manufacturer for Baseball, Basketball, Soccer, Football, Esports, and more.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['English']
    }
  };

  return (
    <>
      <SEO
        title="Custom Sports Uniforms & Sublimation Team Apparel Manufacturer"
        description="Factory-direct custom athletic team uniforms for Baseball, Basketball, Esports, Football, Ice Hockey, Soccer, Volleyball, and Wrestling. Free mockups & worldwide shipping."
        keywords="custom sports uniforms, sublimation team jerseys, custom baseball uniforms, custom basketball uniforms, sportswear manufacturer"
        canonical="/styles/"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-neutral-950 text-white">
        {/* Dynamic Hero Section */}
        <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            OEM & ODM Direct Custom Sportswear Manufacturer
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
            Engineered For The Game. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              Custom Sports Uniforms.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed font-normal">
            Equip your club, academy, or high school league with high-performance dye-sublimated jerseys, pro tackle twill embroidery, and durable technical fabrics.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#categories"
              className="px-8 py-4 rounded-xl bg-amber-500 text-neutral-950 font-bold text-base hover:bg-amber-400 transition shadow-xl shadow-amber-500/20"
            >
              Explore 12 Sports Categories
            </a>
            <button className="px-8 py-4 rounded-xl bg-neutral-900 text-white border border-neutral-800 font-bold text-base hover:border-neutral-700 hover:bg-neutral-800/60 transition">
              Request Team Price List
            </button>
          </div>
        </section>

        {/* Categories Grid (12 Core Sports from Hamco Reference) */}
        <section id="categories" className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Sport Disciplines
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-1">
                Custom Team Uniforms By Sport
              </h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-md mt-4 md:mt-0">
              Select your sport to view customizable cuts, fabrics, specifications, and request immediate factory quotes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sportsCategories.map((category) => (
              <SportCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
});

SportsCatalogHome.displayName = 'SportsCatalogHome';

export default SportsCatalogHome;

