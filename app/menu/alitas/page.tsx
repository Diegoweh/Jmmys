import { menuByCategory } from '@/lib/menu';
import MenuItemCard from '@/components/MenuItemCard';

export const metadata = {
  title: 'Alitas y Boneless - Jimmy\'s Mazatlán',
  description: 'Las mejores alitas y boneless en Mazatlán. Buffalo Classic, Hot Honey, Truffalo Supreme y más. Salsas artesanales únicas. ¡Ordena ya!',
  keywords: ['alitas mazatlán', 'boneless mazatlán', 'buffalo wings', 'alitas a domicilio'],
  openGraph: {
    title: 'Alitas y Boneless - Jimmy\'s',
    description: 'Salsas artesanales únicas y sabores increíbles',
    images: ['/img/alitas/buffalo-classic.webp'],
  },
};

export default function AlitasPage() {
  const alitas = menuByCategory['ALITAS'] || [];
  const boneless = menuByCategory['BONELESS'] || [];
  const allItems = [...alitas, ...boneless];

  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      {/* Header */}
      <section className="bg-orange py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white cubano mb-4 mt-16">
            ALITAS & BONELESS
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Las mejores alitas y boneless con salsas artesanales únicas
          </p>
        </div>
      </section>

      {/* Grid de productos */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {allItems.length > 0 ? (
            <>
              {/* Alitas */}
              {alitas.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-orange cubano mb-8">
                    ALITAS
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {alitas.map((item, index) => (
                      <MenuItemCard key={item.id} item={item} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Boneless */}
              {boneless.length > 0 && (
                <div>
                  <h2 className="text-4xl font-bold text-orange cubano mb-8">
                    BONELESS
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {boneless.map((item, index) => (
                      <MenuItemCard key={item.id} item={item} index={index} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">
                No hay alitas disponibles en este momento
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
