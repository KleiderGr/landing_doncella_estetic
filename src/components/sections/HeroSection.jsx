import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const logo = '/assets/logo.webp'

/**
 * Hero Section — full screen, centered serif typography, luxury aesthetic.
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background — luxury warm gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(176,123,107,0.08), transparent),
            radial-gradient(ellipse 50% 40% at 80% 100%, rgba(176,123,107,0.05), transparent),
            linear-gradient(180deg, #FDFBF7 0%, #FAF6F2 60%, #FDFBF7 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-3xl">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Doncella Estetic"
          width={120}
          height={120}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-10 mix-blend-multiply"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-xs font-light uppercase tracking-[0.35em] text-brand mb-8"
        >
          Centro de Estética Premium — Caracas
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] mb-8"
        >
          Tu Belleza,{' '}
          <span className="italic text-brand">
            Nuestra Pasión
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-sans text-base font-light text-gray-500 leading-relaxed max-w-lg mb-12"
        >
          Descubre nuestros tratamientos de masajes, reflexología y terapias corporales
          diseñados para renovar tu cuerpo y restaurar tu bienestar.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <a
            href="https://wa.me/584142019572?text=Hola,%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-brand text-brand font-sans text-xs font-light uppercase tracking-[0.25em] px-10 py-3.5 hover:bg-brand hover:text-white! transition-all duration-500 ease-in-out"
          >
            Agendar Cita
          </a>
          <a
            href="#servicios"
            className="font-sans text-xs font-light uppercase tracking-[0.2em] text-gray-400 hover:text-brand transition-colors duration-500 ease-in-out flex items-center gap-1.5"
          >
            Ver Servicios
            <ChevronDown className="w-3.5 h-3.5" strokeWidth={1} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-gray-300" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  )
}
