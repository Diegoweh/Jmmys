import { menuByCategory } from '@/lib/menu';
import MenuItemCard from '@/components/MenuItemCard';
import MenuNavigation from '@/components/layout/MenuNavigation';

export const metadata = {
  title: 'Promociones Especiales - Jimmy\'s Mazatlan',
  description: 'Aprovecha nuestras promociones especiales y paquetes en Jimmy\'s Mazatlan. Combos perfectos para compartir con amigos y familia.',
  keywords: ['promociones mazatlan', 'paquetes especiales', 'ofertas jimmy\'s', 'combos mazatlan'],
  openGraph: {
    title: 'Promociones Especiales - Jimmy\'s',
    description: 'Descubre nuestras promociones y paquetes especiales',
    images: ['/img/promo-superbowl.webp'],
  },
};

export default function PromocionesPage() {
  const promociones = menuByCategory['PROMOCIONES'] || [];

  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      {/* Header */}
      <section className="bg-orange py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white cubano mb-4 mt-16">
            PROMOCIONES
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Paquetes especiales para disfrutar al máximo con amigos y familia
          </p>
        </div>
      </section>

      {/* Navegacion de Menu */}
      <MenuNavigation />

      {/* Grid de productos */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {promociones.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promociones.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">
                No hay promociones disponibles en este momento
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
