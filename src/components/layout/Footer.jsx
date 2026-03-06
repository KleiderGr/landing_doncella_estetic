import { SOCIAL_LINKS } from '@/utils/constanst'
import { MapPin } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            
            <div className="text-center sm:text-left">
              <span className="font-serif text-lg font-light tracking-widest uppercase text-white/80">
                Doncella Estetic
              </span>
              <p className="font-sans text-xs font-light uppercase tracking-[0.3em] text-white/30 mt-1">
                Centro de Estética Premium
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center sm:items-end gap-6">
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 border border-white/10 text-white/40 hover:border-brand hover:text-brand transition-all duration-500 ease-in-out"
                >
                  <Icon className="w-4 h-4" strokeWidth={1} />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-white/30 font-sans text-xs font-light">
              <MapPin className="w-3 h-3" strokeWidth={1} />
              <span>Caracas, Venezuela</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs font-light tracking-widest uppercase text-white/20">
            © {new Date().getFullYear()} Doncella Estetic
          </p>
          <p className="font-sans text-xs font-light tracking-wider text-white/20">
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
