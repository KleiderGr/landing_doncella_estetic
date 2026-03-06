import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook that uses IntersectionObserver to detect when an element
 * enters/exits the viewport. Used primarily for video play/pause optimization.
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility ratio to trigger (0-1)
 * @param {string} options.rootMargin - Margin around root
 * @returns {[React.RefObject, boolean]} - [ref to attach, isIntersecting]
 */
export function useIntersectionObserver({
  threshold = 0.3,
  rootMargin = '0px',
} = {}) {
  const ref = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return [ref, isIntersecting]
}
