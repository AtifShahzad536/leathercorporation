import React, { useState, useEffect, memo } from 'react';

/**
 * Optimized Progressive Image Component
 * Loads a low-resolution blurred placeholder first (LQIP)
 * Once the high-res image is downloaded in the background, smoothly fades in.
 * Prevents Cumulative Layout Shift (CLS) and enhances Core Web Vitals / PageSpeed.
 */
const ProgressiveImage = memo(({
  src,
  placeholderSrc,
  alt = '',
  className = '',
  containerClassName = '',
  width,
  height,
  priority = false, // If true, eager loads without lazy loading
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc || src);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If priority or already high-res, load immediately
    setLoading(true);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setLoading(false);
    };
    img.onerror = () => {
      setLoading(false);
    };
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-neutral-900/40 ${containerClassName}`}
      style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}
    >
      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          loading ? 'blur-md scale-105' : 'blur-0 scale-100'
        } ${className}`}
        {...props}
      />
      {loading && (
        <div className="absolute inset-0 bg-neutral-800/20 backdrop-blur-[2px] pointer-events-none" />
      )}
    </div>
  );
});

ProgressiveImage.displayName = 'ProgressiveImage';

export default ProgressiveImage;

