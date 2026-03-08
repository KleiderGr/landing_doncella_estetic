import { motion } from 'framer-motion'

const photo = '/assets/profile.webp'

/**
 * Esthetician Profile — editorial split-screen section introducing the lead specialist.
 * Renders between Hero and Catalog sections.
 */
export default function EstheticianProfile() {
    return (
        <section
            id="especialista"
            className="bg-cream px-5 sm:px-8 lg:px-16 xl:px-24 py-28 lg:py-5"
        >
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">

                {/* ── Portrait ── */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="aspect-3/4 overflow-hidden"
                >
                    <picture className="block w-full h-full">
                        <source srcSet={photo} type="image/webp" />
                        <img
                            src={photo}
                            alt="Esteticista Principal — Doncella Estetic"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                        />
                    </picture>
                </motion.div>

                {/* ── Biography ── */}
                <div className="flex flex-col justify-center">

                    {/* Eyebrow */}
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="font-sans text-[11px] font-light uppercase tracking-[0.3em] text-brand mb-6"
                    >
                        Tu Especialista
                    </motion.p>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, delay: 0.25 }}
                        className="font-serif text-4xl md:text-5xl font-light tracking-wide text-ink leading-[1.15] mb-8"
                    >
                        Detrás de{' '}
                        <span className="italic text-brand">Doncella Estetic</span>
                    </motion.h2>

                    {/* Bio Paragraphs */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-5 mb-10"
                    >
                        <p className="font-sans font-light leading-relaxed text-ink-soft max-w-lg">
                            Con más de 8 años de experiencia en estética corporal y bienestar integral,
                            nuestra fundadora ha dedicado su carrera a perfeccionar técnicas avanzadas de
                            masoterapia, maderoterapia y reflexología.
                        </p>
                        <p className="font-sans font-light leading-relaxed text-ink-soft max-w-lg">
                            Cada tratamiento es diseñado con un enfoque personalizado, combinando
                            conocimiento profesional con una profunda pasión por realzar la belleza
                            natural y restaurar el equilibrio de cada paciente.
                        </p>
                        <p className="font-sans font-light leading-relaxed text-ink-soft max-w-lg">
                            Certificada en técnicas de última generación, su compromiso es ofrecer una
                            experiencia transformadora en un ambiente de absoluta confianza y profesionalismo.
                        </p>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, delay: 0.55 }}
                    >
                        <a
                            href="https://wa.me/584142019572?text=Hola,%20quiero%20agendar%20una%20cita"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border border-ink text-ink font-sans text-xs font-light uppercase tracking-[0.25em] px-10 py-3.5 hover:bg-ink hover:text-cream! transition-all duration-700 ease-in-out"
                        >
                            Agendar Consulta
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
