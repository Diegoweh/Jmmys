import { menuByCategory } from '@/lib/menu';
import MenuItemCard from '@/components/MenuItemCard';

export const metadata = {
  title: 'Hamburguesas Gourmet - Jimmy\'s Mazatlán',
  description: 'Hamburguesas 100% Top Sirloin en Mazatlán. Desde la Original Cheeseburger hasta La Bestia Ruffles. Ingredientes premium y sabores únicos.',
  keywords: ['hamburguesas mazatlán', 'burger gourmet', 'top sirloin', 'hamburguesas a domicilio'],
  openGraph: {
    title: 'Hamburguesas Gourmet - Jimmy\'s',
    description: '100% Top Sirloin con ingredientes premium',
    images: ['/img/burgers/original-cheeseburger.webp'],
  },
};

export default function HamburguesasPage() {
  const burgers = menuByCategory['BURGERS'] || [];

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-orange py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white cubano mb-4 mt-16">
            HAMBURGUESAS
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            100% Top Sirloin con los mejores ingredientes y combinaciones únicas
          </p>
        </div>
      </section>

      {/* Grid de productos */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {burgers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {burgers.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">
                No hay hamburguesas disponibles en este momento
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
