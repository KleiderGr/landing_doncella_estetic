import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Instagram, Clock, ArrowUpRight } from 'lucide-react'

const CONTACT_INFO = {
  phone: '+ 58 414-2019572',
  whatsapp: 'https://wa.me/584142019572',
  instagram: 'https://instagram.com/doncellae',
  address: 'Caracas, Distrito Capital, Venezuela',
  hours: 'Lunes a Sábado: 9:00 AM — 7:00 PM',
  mapsUrl: 'https://www.google.com/maps/search/Doncella+Estetic+Caracas+Venezuela',
}

/**
 * Contact Section — luxury spacing, brand-accent outline buttons.
 */
export default function ContactSection() {
  return (
    <section id="contacto" className="py-32 bg-cream">
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
            Encuéntranos
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Contacto & Ubicación
          </h2>
          <p className="font-sans text-base font-light text-gray-500 max-w-lg mx-auto leading-relaxed">
            Estamos aquí para atenderte. Agenda tu cita o visítanos directamente.
          </p>
          <div className="mt-8 mx-auto w-12 h-px bg-brand/30" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {/* Address */}
            <div className="flex items-start gap-5">
              <MapPin className="w-5 h-5 text-brand mt-0.5 shrink-0" strokeWidth={1} />
              <div>
                <h3 className="font-serif text-base font-light text-gray-900 mb-1">Dirección</h3>
                <p className="font-sans text-sm font-light text-gray-500">{CONTACT_INFO.address}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-5">
              <Clock className="w-5 h-5 text-brand mt-0.5 shrink-0" strokeWidth={1} />
              <div>
                <h3 className="font-serif text-base font-light text-gray-900 mb-1">Horario</h3>
                <p className="font-sans text-sm font-light text-gray-500">{CONTACT_INFO.hours}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <Phone className="w-5 h-5 text-brand mt-0.5 shrink-0" strokeWidth={1} />
              <div>
                <h3 className="font-serif text-base font-light text-gray-900 mb-1">Teléfono</h3>
                <p className="font-sans text-sm font-light text-gray-500">{CONTACT_INFO.phone}</p>
              </div>
            </div>
          </motion.div>

          {/* CTA column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {/* WhatsApp */}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 border border-[#25D366] text-[#25D366] font-sans text-xs font-light uppercase tracking-[0.25em] hover:bg-[#25D366] hover:text-white! transition-all duration-500 ease-in-out"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1} />
              WhatsApp
            </a>

            {/* Instagram */}
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 border border-brand text-brand font-sans text-xs font-light uppercase tracking-[0.25em] hover:bg-brand hover:text-white! transition-all duration-500 ease-in-out"
            >
              <Instagram className="w-4 h-4" strokeWidth={1} />
              Instagram
            </a>

            {/* Google Maps */}
            <a
              href={CONTACT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 border border-gray-200 text-gray-500 font-sans text-xs font-light uppercase tracking-[0.25em] hover:border-brand hover:text-brand transition-all duration-500 ease-in-out"
            >
              <ArrowUpRight className="w-4 h-4" strokeWidth={1} />
              Ver en Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
