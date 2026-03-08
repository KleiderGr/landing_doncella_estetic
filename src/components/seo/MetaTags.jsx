import { Helmet } from 'react-helmet-async'

/**
 * Injects dynamic <head> meta tags for SEO and social sharing.
 */
export default function MetaTags() {
  const title = 'Doncella Estetic — Centro de Estética Especializada en Caracas'
  const description =
    'Masajes relajantes, reflexología, piedras volcánicas y tratamientos corporales. Agenda tu cita hoy en el centro de estética más exclusivo de Caracas, Venezuela.'
  const url = 'https://doncella-estetic.vercel.app'
  const image = 'https://doncella-estetic.vercel.app/assets/logo.webp'

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="estética, masajes, Caracas, reflexología, piedras volcánicas, ventosas, bienestar, spa, Venezuela" />
      <meta name="author" content="Doncella Estetic" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
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
    </Helmet>
  )
}
