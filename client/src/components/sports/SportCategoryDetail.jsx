import React, { useMemo, memo } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../common/SEO';
import ProgressiveImage from '../common/ProgressiveImage';
import { sportsCategories, sampleSportsProducts } from '../../data/sportsCategoriesData';

const SportCategoryDetail = memo(() => {
  const { slug } = useParams();

  // Find corresponding category
  const category = useMemo(() => {
    return sportsCategories.find((cat) => cat.slug === slug || cat.id === slug);
  }, [slug]);

  // Filter relevant products
  const categoryProducts = useMemo(() => {
    if (!category) return [];
    return sampleSportsProducts.filter((p) => p.categorySlug === category.slug);
  }, [category]);

  if (!category) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-extrabold text-white mb-4">Category Not Found</h1>
        <p className="text-neutral-400 mb-8 max-w-md">
          The sports category you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-amber-500 text-neutral-950 font-bold hover:bg-amber-400 transition"
        >
          Back to Sports Catalog
        </Link>
      </div>
    );
  }

  // Schema for Category / Collection Page
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Custom ${category.name} Uniforms & Apparel`,
    description: category.description,
    url: window.location.href,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: category.subcategories.map((sub, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: sub
      }))
    }
  };

  return (
    <>
      <SEO
        title={`Custom ${category.name} Uniforms & Sublimated Team Apparel`}
        description={category.description}
        keywords={`custom ${category.name.toLowerCase()} uniforms, ${category.name.toLowerCase()} jerseys, custom team sublimation, sports apparel`}
        schemaData={schemaData}
      />

      <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-20">
        {/* Hero Banner with Progressive Image */}
        <section className="relative w-full h-96 lg:h-[460px] overflow-hidden mb-12">
          <ProgressiveImage
            src={category.image}
            placeholderSrc={category.placeholder}
            alt={category.name}
            priority={true}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-neutral-950/80" />

          <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-6 pb-12 z-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <Link to="/" className="text-neutral-400 hover:text-white text-xs font-semibold uppercase tracking-wider">
                Home
              </Link>
              <span className="text-neutral-600">/</span>
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                {category.name} Uniforms
              </span>
            </div>
            <span className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">
              {category.tagline}
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
              Custom {category.name} Uniforms
            </h1>
            <p className="max-w-2xl text-base md:text-lg text-neutral-300 leading-relaxed">
              {category.description}
            </p>
          </div>
        </section>

        {/* Content Section & Subcategory Navigator */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-wrap gap-2 pb-6 border-b border-neutral-800">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-bold self-center mr-2">
              Popular Styles:
            </span>
            {category.subcategories.map((sub, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-sm font-medium text-neutral-300 hover:border-amber-500/40 hover:text-white transition cursor-pointer"
              >
                {sub}
              </span>
            ))}
          </div>
        </section>

        {/* Products Grid or Dynamic Catalog */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Featured {category.name} Uniform Designs
              </h2>
              <p className="text-sm text-neutral-400">
                100% customizable with your team logos, colors, names & numbers
              </p>
            </div>
            <button className="px-5 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold text-sm hover:bg-amber-400 transition shadow-lg shadow-amber-500/10">
              Request Free Mockup
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.length > 0 ? (
              categoryProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="rounded-2xl bg-neutral-900/60 border border-neutral-800 overflow-hidden flex flex-col group hover:border-amber-500/40 transition duration-300"
                >
                  <div className="relative h-64 w-full">
                    <ProgressiveImage
                      src={prod.image}
                      placeholderSrc={prod.placeholder}
                      alt={prod.name}
                      containerClassName="w-full h-full"
                    />
                    <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-neutral-700">
                      MOQ: {prod.minOrderQty} pcs
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                      {prod.fabric}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                      {prod.name}
                    </h3>
                    <p className="text-sm text-amber-400 font-semibold mb-4">
                      {prod.priceRange} <span className="text-xs text-neutral-500 font-normal">/ piece</span>
                    </p>
                    <ul className="text-xs text-neutral-400 space-y-1.5 mb-6">
                      {prod.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4 border-t border-neutral-800 flex gap-3">
                      <button className="flex-1 py-2.5 rounded-xl bg-amber-500 text-neutral-950 text-xs font-bold hover:bg-amber-400 transition">
                        Get Custom Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center rounded-2xl bg-neutral-900/40 border border-neutral-800/80">
                <p className="text-neutral-300 font-semibold mb-2">
                  Ready to manufacture custom {category.name} uniforms for your team.
                </p>
                <p className="text-sm text-neutral-500 mb-6">
                  Upload your vector logos or design sketch and our factory will produce a 3D digital mockup within 24 hours.
                </p>
                <button className="px-6 py-3 rounded-xl bg-amber-500 text-neutral-950 font-bold text-sm hover:bg-amber-400 transition">
                  Contact Factory Direct
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
});

SportCategoryDetail.displayName = 'SportCategoryDetail';

export default SportCategoryDetail;

