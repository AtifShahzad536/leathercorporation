import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Reusable SEO Manager for Meta Tags & Structured Schema
 * Boosts SERP ranking, OpenGraph preview on socials, and rich snippets.
 */
const CANONICAL_BASE = 'https://www.hamlosportswear.site';

function resolveCanonical(input) {
  if (!input) {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.replace(/\/+$/, '') || '';
      return p ? `${CANONICAL_BASE}${p}/` : `${CANONICAL_BASE}/`;
    }
    return `${CANONICAL_BASE}/`;
  }
  try {
    if (input.startsWith('http')) {
      const url = input.replace('https://hamlosportswear.site', CANONICAL_BASE).replace('http://hamlosportswear.site', CANONICAL_BASE);
      const parsed = new URL(url);
      const p = parsed.pathname.replace(/\/+$/, '') || '';
      return p ? `${CANONICAL_BASE}${p}/` : `${CANONICAL_BASE}/`;
    }
  } catch {
    // fallback
  }
  const cleanPath = input.replace(/^\/+/, '').replace(/\/+$/, '');
  return cleanPath ? `${CANONICAL_BASE}/${cleanPath}/` : `${CANONICAL_BASE}/`;
}

function resolveImageUrl(img) {
  if (!img) return `${CANONICAL_BASE}/favicon.svg`;
  if (img.startsWith('http')) return img;
  const clean = img.replace(/^\/+/, '');
  return `${CANONICAL_BASE}/${clean}`;
}

const SEO = memo(({
  title = 'Custom Sports Uniforms & Team Apparel Manufacturer',
  description = 'Factory direct custom team sports uniforms and sublimated athletic apparel manufactured in Sialkot, Pakistan. 12-hour free 3D mockups, low MOQs, and door-to-door DDP shipping.',
  canonical,
  keywords = 'custom sports uniforms, custom baseball jerseys, basketball uniforms, soccer kits, sublimation sportswear, athletic wear manufacturer Sialkot',
  ogImage = '/favicon.svg',
  ogType = 'website',
  schemaData = null
}) => {
  const siteTitle = title.includes('HAMLO') ? title : `${title} | HAMLO SPORTS`;
  const canonicalUrl = resolveCanonical(canonical);
  const fullOgImage = resolveImageUrl(ogImage);

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph / Facebook */}
      <meta property="og:site_name" content="HAMLO SPORTS" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Schema (JSON-LD) */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
});

SEO.displayName = 'SEO';

export default SEO;

