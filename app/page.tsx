import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-orange text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">JIMMY'S</h1>
          <span className="text-sm">Pizza</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <button className="px-4 py-2 bg-white text-orange rounded-full text-sm font-medium">
            PIDE Y YA Total
          </button>
          <button className="px-4 py-2 bg-blue text-white rounded-full text-sm font-medium">
            DISPONIBLE
          </button>
        </nav>
      </header>

      {/* Hero Section - Churros */}
      <section className="bg-orange text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold mb-4">
            TU PRÓXIMA
          </h2>
          <p className="text-5xl md:text-7xl font-script italic">Obsesión</p>
          <div className="mt-8 text-9xl md:text-[12rem] font-bold opacity-20">
            Jimmys
          </div>
        </div>
      </section>

      {/* Satisface Section */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-5xl md:text-6xl font-bold text-orange">SATISFACE</h3>
          </div>
          <p className="text-2xl md:text-3xl mb-4 text-gray-700">tu antojo más grande</p>
          <button className="bg-orange text-white px-8 py-3 rounded-full font-medium hover:bg-orange-dark transition">
            VER MENÚ
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-gray-200">
              {/* Placeholder for food image 1 */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Food Image 1
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-gray-200">
              {/* Placeholder for food image 2 */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Food Image 2
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-gray-200">
              {/* Placeholder for food image 3 */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Food Image 3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Náutica Pizza Section */}
      <section className="bg-blue py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-orange text-6xl">⚓</span>
            NÁUTICA
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="transform -rotate-6 bg-white rounded-lg shadow-2xl aspect-square overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Pizza 1
              </div>
            </div>
            <div className="transform rotate-3 bg-white rounded-lg shadow-2xl aspect-square overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Pizza 2
              </div>
            </div>
            <div className="transform -rotate-3 bg-white rounded-lg shadow-2xl aspect-square overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Pizza 3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Se Ve Bueno Section */}
      <section className="bg-black py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">
            SE VE BUENO
          </h3>
          <p className="text-4xl md:text-5xl font-script italic text-white mb-8">
            Y Sabe Bueno
          </p>

          <div className="relative h-96 rounded-2xl overflow-hidden bg-gray-800">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Pizza Hero Image
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Ordenar Section */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-yellow to-orange rounded-3xl p-12 shadow-2xl">
            <h3 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
              ¿CÓMO ORDENAR?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-orange">
                  1
                </div>
                <h4 className="font-bold text-white text-xl mb-2">CATÁLOGO DE</h4>
                <h4 className="font-bold text-white text-xl mb-2">PRODUCTOS</h4>
                <p className="text-white text-sm">
                  Explora nuestro delicioso menú y elige tus favoritos
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-orange">
                  2
                </div>
                <h4 className="font-bold text-white text-xl mb-2">ORDENAR CON</h4>
                <h4 className="font-bold text-white text-xl mb-2">NOSOTROS</h4>
                <p className="text-white text-sm">
                  Realiza tu pedido fácil y rápido
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-orange">
                  3
                </div>
                <h4 className="font-bold text-white text-xl mb-2">ENTRE</h4>
                <h4 className="font-bold text-white text-xl mb-2">30 Y 45 MINUTOS</h4>
                <p className="text-white text-sm">
                  Recibe tu pedido fresco y caliente
                </p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-orange text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-orange-dark transition shadow-lg">
                ORDENAR AHORA
              </button>
            </div>
          </div>

          {/* Pizza Box Decoration */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-orange via-red to-blue text-white py-6 px-8 inline-block rounded-lg">
              <h2 className="text-6xl md:text-7xl font-bold">JIMMY'S</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="bg-yellow py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-6xl md:text-7xl font-bold text-white mb-12 font-script italic">
            Cookies
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-full overflow-hidden shadow-xl bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Cookie {i}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 h-8 bg-white opacity-20"></div>
          <div className="grid grid-cols-8 gap-2 mt-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className={`h-8 ${i % 2 === 0 ? 'bg-yellow' : 'bg-white'}`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicanos Section */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-orange mb-4 font-script italic">
            Ubicanos
          </h3>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8">
            Lo bueno está a la vuelta de la esquina
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-orange rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">NUESTRA UBICACIÓN</h4>
              <p className="mb-2">Calle Principal #123</p>
              <p className="mb-2">Colonia Centro</p>
              <p className="mb-4">Ciudad, Estado, CP</p>
              <button className="bg-white text-orange px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                VER EN MAPA
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Store Interior Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">JIMMY'S</h2>
              <p className="text-sm">Tu próxima obsesión</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">SÍGUENOS</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-yellow transition">📘 Facebook</a>
                <a href="#" className="hover:text-yellow transition">📷 Instagram</a>
                <a href="#" className="hover:text-yellow transition">🎵 TikTok</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">ESCANEA PARA ORDENAR</h4>
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                <div className="text-orange font-bold text-xs">QR CODE</div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
            <p>&copy; 2024 Jimmy's Pizza. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
