import { menuByCategory } from '@/lib/menu';
import MenuItemCard from '@/components/MenuItemCard';

export const metadata = {
  title: 'Ensaladas Frescas - Jimmy\'s Mazatlán',
  description: 'Ensaladas frescas con ingredientes premium y aderezos caseros en Mazatlán. César Style, Jimmy\'s Garden y Taco Ranch Superstar.',
  keywords: ['ensaladas mazatlán', 'ensalada césar', 'comida saludable', 'ensaladas frescas'],
  openGraph: {
    title: 'Ensaladas Frescas - Jimmy\'s',
    description: 'Ingredientes premium y aderezos caseros',
    images: ['/img/ensaladas/cesar-style.webp'],
  },
};

export default function EnsaladasPage() {
  const salads = menuByCategory['ENSALADAS'] || [];

  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      {/* Header */}
      <section className="bg-orange py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white cubano mb-4 mt-16">
            ENSALADAS
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Frescas, saludables y deliciosas con aderezos caseros
          </p>
        </div>
      </section>

      {/* Grid de productos */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {salads.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {salads.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">
                No hay ensaladas disponibles en este momento
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
