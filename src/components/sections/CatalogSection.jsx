import ServiceCard from '@/components/ui/ServiceCard'
import catalogData from '@/data/catalog.json'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

/**
 * Catalog Section — Container component.
 * Massive luxury spacing, responsive grid with large gaps.
 */
export default function CatalogSection() {
  const [sortBy, setSortBy] = useState('price-desc')

  const sortedCatalogData = useMemo(() => catalogData.filter(x => !x.isHidden).sort((a, b) => sortBy === 'price-desc' ? b.price_usd - a.price_usd : a.price_usd - b.price_usd), [sortBy])

  return (
    <section id="servicios" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-sm font-light uppercase tracking-[0.35em] text-brand mb-6">
            Nuestro Menú
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Servicios & Tratamientos
          </h2>
          <p className="font-sans text-base font-light text-gray-500 max-w-lg mx-auto leading-relaxed">
            Cada sesión está diseñada para ofrecerte una experiencia de bienestar única y resultados visibles.
          </p>
          {/* Decorative line */}
          <div className="mt-8 mx-auto w-12 h-px bg-brand/30" />
        </motion.div>

        {/* Grid — massive gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* SortBy */}
          <div className="mb-12 col-span-full ml-auto">
            <p className="font-sans text-sm font-light uppercase tracking-[0.35em] text-brand mb-6">Ordenar por</p>
            <select className="bg-white text-gray-900 border border-gray-200 rounded-md px-6 py-2 cursor-pointer" onChange={(e) => setSortBy(e.target.value)}>
              <option value="price-desc">Precio más alto</option>
              <option value="price-asc">Precio más bajo</option>
            </select>
          </div>

          {sortedCatalogData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
