import { motion } from 'framer-motion'
import OptimizedImage from './OptimizedImage'
import OptimizedVideo from './OptimizedVideo'

/**
 * Luxury service card — portrait aspect-ratio, editorial typography,
 * minimalist text-link CTA, clean sans-serif price.
 */
export default function ServiceCard({ service, index = 0 }) {
  const { title, duration, price_usd, description, media_type, media_url, poster_url } = service

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
      className="group flex flex-col bg-white border border-gray-100 hover:-translate-y-2 transition-all duration-500 ease-in-out"
    >
      {/* Media — portrait aspect ratio */}
      <div className="relative overflow-hidden aspect-4/5">
        {media_type === 'video' ? (
          <OptimizedVideo
            src={media_url}
            poster={poster_url}
            aspectRatio="4 / 5"
          />
        ) : (
          <OptimizedImage
            src={media_url}
            alt={title}
            width={450}
            height={563}
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 py-8">
        {/* Title */}
        <h3 className="font-serif text-xl font-light text-gray-900 leading-snug mb-2">
          {title}
        </h3>

        {/* Duration & Price — clean inline */}
        <div className="flex items-center gap-3 mb-4">
          {duration !== 'N/A' && (
            <span className="font-sans text-xs font-light uppercase tracking-[0.2em] text-gray-400">
              {duration}
            </span>
          )}
          {duration !== 'N/A' && price_usd && (
            <span className="text-gray-200">·</span>
          )}
          {price_usd && (
            <span className="font-sans text-sm font-light text-gray-500">
              ${price_usd} USD
            </span>
          )}
        </div>

        {/* Description */}
        <p className="font-sans text-sm font-light text-gray-500 leading-relaxed flex-1 mb-6">
          {description}
        </p>

        {/* CTA — minimalist text link */}
        <a
          href={`https://wa.me/584142019572?text=Hola,%20quiero%20agendar%20${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs font-light uppercase tracking-[0.25em] text-gray-900 underline underline-offset-4 decoration-brand/40 hover:decoration-brand transition-all duration-500 ease-in-out"
        >
          Agendar Cita
        </a>
      </div>
    </motion.article>
  )
}
