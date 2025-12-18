import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jimmys.com'; // Reemplaza con tu dominio real

  // Rutas estáticas
  const routes = [
    '',
    '/menu/pizza',
    '/menu/hamburguesas',
    '/menu/ensaladas',
    '/menu/alitas',
    '/menu/para-compartir',
    '/menu/postres',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
