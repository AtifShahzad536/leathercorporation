import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Reusable SEO Manager for Meta Tags & Structured Schema
 * Boosts SERP ranking, OpenGraph preview on socials, and rich snippets.
 */
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
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const canonicalUrl = canonical || currentUrl;

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
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

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

