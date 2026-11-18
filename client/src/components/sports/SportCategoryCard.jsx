import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from '../common/ProgressiveImage';

/**
 * Highly optimized, memoized category preview card
 * Uses Progressive Image loading (LQIP -> HD) & smooth micro-interactions
 */
const SportCategoryCard = memo(({ category }) => {
  return (
    <Link
      to={`/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10"
    >
      {/* Visual Image with Progressive Blur-Up */}
      <div className="relative h-72 w-full overflow-hidden">
        <ProgressiveImage
          src={category.image}
          placeholderSrc={category.placeholder}
          alt={`Custom ${category.name} Uniforms & Apparel`}
          className="group-hover:scale-108 transition-transform duration-700 ease-out"
          containerClassName="w-full h-full"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

        {/* Badge */}
        {category.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/90 text-neutral-950 backdrop-blur-sm shadow-md">
              {category.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="relative flex flex-col flex-1 p-6 z-10 -mt-6 bg-gradient-to-b from-transparent via-neutral-950/90 to-neutral-950">
        <div className="mb-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            {category.tagline}
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
            Custom {category.name}
          </h3>
        </div>

        <p className="text-sm text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
          {category.description}
        </p>

        {/* Subcategories tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
          {category.subcategories?.slice(0, 3).map((sub, i) => (
            <span
              key={i}
              className="text-[11px] font-medium text-neutral-300 bg-neutral-800/80 px-2.5 py-0.5 rounded-md border border-neutral-700/50"
            >
              {sub}
            </span>
          ))}
          {category.subcategories?.length > 3 && (
            <span className="text-[11px] text-neutral-500 self-center">
              +{category.subcategories.length - 3} more
            </span>
          )}
        </div>

        {/* CTA Link Button */}
        <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
          <span>Explore Uniforms</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
});

SportCategoryCard.displayName = 'SportCategoryCard';

export default SportCategoryCard;

