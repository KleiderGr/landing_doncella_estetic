import { useRef, useEffect } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

/**
 * Optimized video component:
 * - muted, loop, playsinline, preload="metadata"
 * - Mandatory poster to prevent black screens
 * - Viewport-aware play/pause via IntersectionObserver
 */
export default function OptimizedVideo({
  src,
  poster,
  className = '',
  aspectRatio = '9 / 16',
}) {
  const videoRef = useRef(null)
  const [observerRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.3,
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isIntersecting) {
      video.play().catch(() => {
        /* Autoplay blocked silently */
      })
    } else {
      video.pause()
    }
  }, [isIntersecting])

  return (
    <div
      ref={observerRef}
      className={`relative overflow-hidden bg-ink ${className}`}
      style={{ aspectRatio }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
    </div>
  )
}
