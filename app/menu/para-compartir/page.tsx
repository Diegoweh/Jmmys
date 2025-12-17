import { menuByCategory } from '@/lib/menu';
import MenuItemCard from '@/components/MenuItemCard';

export const metadata = {
  title: 'Pa\'picar y Compartir - Jimmy\'s',
  description: 'Deliciosos platillos para compartir con amigos y familia',
};

export default function ParaCompartirPage() {
  const items = menuByCategory['PA_PICAR_Y_COMPARTIR'] || [];

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-orange py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white cubano mb-4 mt-16">
            PA&apos;PICAR Y COMPARTIR
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Deliciosos snacks y platillos perfectos para compartir
          </p>
        </div>
      </section>

      {/* Grid de productos */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">
                No hay productos disponibles en este momento
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
