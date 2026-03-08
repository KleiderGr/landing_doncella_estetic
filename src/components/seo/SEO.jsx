import { Helmet } from 'react-helmet-async'

const DEFAULTS = {
  title: 'Doncella Estetic — Centro de Estética Premium en Caracas',
  description:
    'Masajes relajantes, reflexología, piedras volcánicas y tratamientos corporales. Agenda tu cita hoy en el centro de estética más exclusivo de Caracas, Venezuela.',
  url: 'https://doncellaesteticve.vercel.app',
  image: 'https://doncellaesteticve.vercel.app/assets/logo.webp',
}

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Doncella Estetic',
  image: DEFAULTS.image,
  url: DEFAULTS.url,
  telephone: '+58-414-2019572',
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
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '09:00',
    closes: '19:00',
  },
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Mobile Payment',
  sameAs: ['https://instagram.com/doncellae'],
}

/**
 * Unified SEO component — injects meta tags, Open Graph, Twitter Cards,
 * and HealthAndBeautyBusiness JSON-LD structured data.
 *
 * @param {object}  props
 * @param {string}  [props.title]        Page title
 * @param {string}  [props.description]  Meta description
 * @param {string}  [props.canonicalUrl] Canonical URL
 * @param {string}  [props.image]        Social share image (absolute URL)
 * @param {string}  [props.type]         og:type (default "website")
 */
export default function SEO({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  canonicalUrl = DEFAULTS.url,
  image = DEFAULTS.image,
  type = 'website',
} = {}) {
  return (
    <>
      <Helmet>
        {/* HTML language */}
        <html lang="es-VE" />

        {/* Primary */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="estética, masajes, Caracas, reflexología, piedras volcánicas, ventosas, bienestar, spa, Venezuela"
        />
        <meta name="author" content="Doncella Estetic" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content="es_VE" />
        <meta property="og:site_name" content="Doncella Estetic" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Geo */}
        <meta name="geo.region" content="VE-DC" />
        <meta name="geo.placename" content="Caracas" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>
    </>
  )
}
