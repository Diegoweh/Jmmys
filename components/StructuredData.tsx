import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: "Jimmy's Restaurant",
    description: 'Restaurante de pizzas, hamburguesas, alitas y más en Mazatlán',
    url: 'https://jimmys.com',
    logo: 'https://jimmys.com/img/logo.png',
    image: 'https://jimmys.com/img/Header.webp',
    telephone: '+52-669-213-5090',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. de la Marina 603',
      addressLocality: 'Mazatlán',
      addressRegion: 'Sinaloa',
      postalCode: '82127',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.255546,
      longitude: -106.441671,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '11:00',
        closes: '22:00',
      },
    ],
    servesCuisine: ['Pizza', 'Hamburguesas', 'Alitas', 'Comida Rápida'],
    priceRange: '$$',
    menu: 'https://jimmys.com/menu',
    acceptsReservations: 'False',
    sameAs: [
      // Agrega aquí tus redes sociales cuando las tengas
      // 'https://www.facebook.com/jimmys',
      // 'https://www.instagram.com/jimmys',
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
