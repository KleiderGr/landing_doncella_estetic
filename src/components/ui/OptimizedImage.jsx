import { useState } from 'react'

/**
 * Optimized image — lazy loading, CLS prevention, fade-in.
 */
export default function OptimizedImage({
  src,
  alt,
  width = 600,
  height = 800,
  className = '',
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
        loaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    />
  )
}
