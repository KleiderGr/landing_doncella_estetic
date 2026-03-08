import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Pause, Play } from 'lucide-react';
import { useState } from 'react';
import { useEffect, useRef } from 'react';

export const MediaButtonContainer = ({ children }) => {
  return (
    <span className="absolute bottom-4 right-4 flex gap-2">
      {children}
    </span>
  )
}

export const MediaButton = ({ children, onClick }) => {
  return (
    <button className="cursor-pointer p-2 rounded-full bg-white/80" onClick={onClick}>
      {children}
    </button>
  )
}

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
  controls = false,
  initFromSec = 0,
}) {
  const [isVideoPaused, setIsVideoPaused] = useState(true);
  const videoRef = useRef(null)
  const [observerRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.3,
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isIntersecting && !controls) {
      video.play().catch(() => {
        /* Autoplay blocked silently */
      })
    } else {
      video.pause()
    }
  }, [isIntersecting, controls])

  const handleVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = videoRef.current.currentTime == 0 ? initFromSec : videoRef.current.currentTime
    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
    setIsVideoPaused(videoRef.current.paused)
  }

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
        muted={!controls}
        loop={!controls}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      {controls ? <MediaButtonContainer>
        <MediaButton onClick={handleVideo}>
          {isVideoPaused ? <Play /> : <Pause />}
        </MediaButton>
      </MediaButtonContainer> : null}
    </div>
  )
}
