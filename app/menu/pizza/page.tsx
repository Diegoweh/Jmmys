import { menuByCategory } from '@/lib/menu';
import MenuItemCard from '@/components/MenuItemCard';

export const metadata = {
  title: 'Pizzas con CheeseCrust - Jimmy\'s Mazatlán',
  description: 'Las mejores pizzas en Mazatlán con base CheeseCrust crujiente. Desde La Pepperonísima hasta Truffalo Chica Wow. ¡Ordena ahora por WhatsApp!',
  keywords: ['pizzas mazatlán', 'pizza cheesecrust', 'pepperoni pizza', 'pizza a domicilio mazatlán'],
  openGraph: {
    title: 'Pizzas con CheeseCrust - Jimmy\'s',
    description: 'Las mejores pizzas en Mazatlán con ingredientes premium',
    images: ['/img/pizzas/pepperonisima.webp'],
  },
};

export default function PizzasPage() {
  const pizzas = menuByCategory['PIZZAS'] || [];

  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      {/* Header */}
      <section className="bg-orange py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white cubano mb-4 mt-16">
            PIZZAS
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Nuestras pizzas con base CheeseCrust crujiente y los mejores ingredientes
          </p>
        </div>
      </section>

      {/* Grid de productos */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {pizzas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pizzas.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">
                No hay pizzas disponibles en este momento
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
