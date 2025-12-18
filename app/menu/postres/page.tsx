import { menuByCategory } from '@/lib/menu';
import MenuItemCard from '@/components/MenuItemCard';

export const metadata = {
  title: 'Postres y Bebidas - Jimmy\'s Mazatlán',
  description: 'Deliciosos postres caseros y bebidas refrescantes en Mazatlán. Coolkie Skillets, cafés helados Rooky y bebidas Juzzy. ¡Endulza tu día!',
  keywords: ['postres mazatlán', 'cafés helados', 'galletas', 'bebidas frías mazatlán'],
  openGraph: {
    title: 'Postres y Bebidas - Jimmy\'s',
    description: 'Dulces tentaciones y bebidas refrescantes',
    images: ['/img/postres/coolkie-chocochips.webp'],
  },
};

export default function PostresPage() {
  const desserts = menuByCategory['POSTRES'] || [];

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-orange py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white cubano mb-4 mt-16">
            POSTRES & BEBIDAS
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Dulces tentaciones y refrescantes bebidas hechas en casa para cerrar con broche de oro
          </p>
        </div>
      </section>

      {/* Grid de productos */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {desserts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {desserts.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">
                No hay postres disponibles en este momento
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
