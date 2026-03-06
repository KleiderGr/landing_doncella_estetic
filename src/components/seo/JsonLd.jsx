import { Helmet } from 'react-helmet-async'

/**
 * Injects HealthAndBeautyBusiness JSON-LD structured data for local SEO.
 */
export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Doncella Estetic',
    image: 'https://doncella-estetic.vercel.app/src/assets/logo.webp',
    url: 'https://doncella-estetic.vercel.app',
    telephone: '+58-412-1234567',
    email: 'info@doncellaestetic.com',
    description:
      'Centro de estética premium en Caracas especializado en masajes relajantes, reflexología, piedras volcánicas, terapia de ventosas y tratamientos corporales.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dirección exacta del local',
      addressLocality: 'Caracas',
      addressRegion: 'Distrito Capital',
      postalCode: '1010',
      addressCountry: 'VE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.4806,
      longitude: -66.9036,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    priceRange: '$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Mobile Payment',
    sameAs: [
      'https://instagram.com/doncellae',
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
