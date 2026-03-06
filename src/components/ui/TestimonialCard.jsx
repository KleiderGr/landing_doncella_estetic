import { motion } from 'framer-motion'
import OptimizedVideo from './OptimizedVideo'
import { Star } from 'lucide-react'

/**
 * Luxury testimonial card with client video review.
 */
export default function TestimonialCard({ testimonial, index = 0 }) {
  const { client_name, review, media_url, poster_url } = testimonial

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
      className="flex flex-col bg-white border border-gray-100"
    >
      {/* Video */}
      <OptimizedVideo
        src={media_url}
        poster={poster_url}
        aspectRatio="9 / 16"
        className="max-h-[480px]"
      />

      {/* Content */}
      <div className="px-6 py-8">
        {/* Stars */}
        <div className="flex gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 fill-brand text-brand"
              strokeWidth={1}
            />
          ))}
        </div>

        <blockquote className="font-sans text-sm font-light text-gray-500 leading-relaxed italic mb-5">
          "{review}"
        </blockquote>

        <p className="font-serif text-base font-light text-gray-900 tracking-wide">
          {client_name}
        </p>
      </div>
    </motion.article>
  )
}
