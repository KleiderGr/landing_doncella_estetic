import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const logo = '/assets/logo.webp'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_20px_rgb(0,0,0,0.04)]'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Doncella Estetic"
            width={40}
            height={40}
            className={`mix-blend-multiply group-hover:scale-125 transition-all duration-500 ease-in-out rounded-full `}
          />
          <div className={`transition-all duration-500 ease-in-out ${scrolled ? 'opacity-100 lg:opacity-100' : 'opacity-0 lg:opacity-100'}`}>
            <span className="font-serif text-lg font-light tracking-widest uppercase text-gray-900">
              Doncella
            </span>
            <span className="block text-[9px] text-brand uppercase tracking-[0.3em] font-sans font-light">
              Esthetic
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-sans text-xs font-light uppercase tracking-[0.2em] text-gray-500 hover:text-brand pb-2 border-b-0 border-b-brand transition-colors hover:border-b duration-500 ease-in-out"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/584142019572"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand text-brand text-xs font-sans font-light uppercase tracking-[0.25em] px-6 py-2.5 hover:bg-brand hover:text-white! transition-all duration-500 ease-in-out"
            >
              Reservar
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-brand transition-colors duration-500"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X className="w-5 h-5" strokeWidth={1} /> : <Menu className="w-5 h-5" strokeWidth={1} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <ul className="flex flex-col items-center gap-6 py-10">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={handleNavClick}
                    className="font-sans text-xs font-light uppercase tracking-[0.2em] text-gray-500 hover:text-brand transition-colors duration-500"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/584142019572"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="border border-brand text-brand text-xs font-sans font-light uppercase tracking-[0.25em] px-8 py-3 hover:bg-brand hover:text-white! transition-all duration-500 ease-in-out"
                >
                  Reservar Cita
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
