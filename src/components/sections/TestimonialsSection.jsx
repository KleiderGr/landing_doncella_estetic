import { motion } from 'framer-motion'
import testimonialsData from '@/data/testimonials.json'
import TestimonialCard from '@/components/ui/TestimonialCard'

/**
 * Testimonials Section — luxury off-white background, massive spacing.
 */
export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-32 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs font-light uppercase tracking-[0.35em] text-brand mb-6">
            Testimonios
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Lo Que Dicen Nuestras Clientas
          </h2>
          <p className="font-sans text-base font-light text-gray-500 max-w-lg mx-auto leading-relaxed">
            Resultados reales de personas reales. Mira las experiencias de quienes ya confían en nosotras.
          </p>
          <div className="mt-8 mx-auto w-12 h-px bg-brand/30" />
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.tiktok.com/@doncellaesthetic1/video/7588631584778079500"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-light uppercase tracking-[0.2em] text-gray-400 hover:text-brand transition-colors duration-500 ease-in-out"
          >
            Ver más reseñas en Tiktok →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
