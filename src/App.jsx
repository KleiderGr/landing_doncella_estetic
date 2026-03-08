import { lazy, Suspense } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import SEO from '@/components/seo/SEO'

/* Lazy load below-fold sections */
const EstheticianProfile = lazy(() => import('@/components/sections/EstheticianProfile'))
const CatalogSection = lazy(() => import('@/components/sections/CatalogSection'))
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection'))
const ContactSection = lazy(() => import('@/components/sections/ContactSection'))

/** Section loading fallback */
function SectionSkeleton() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-brand/30 border-t-brand rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <SEO />
      <Header />

      <main>
        <HeroSection />

        <Suspense fallback={<SectionSkeleton />}>
          <EstheticianProfile />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <CatalogSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}
