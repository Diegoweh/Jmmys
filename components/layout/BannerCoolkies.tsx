'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BannerProps {
  backgroundImage?: string;
  height?: string;
  overlay?: boolean;
  overlayOpacity?: string;
  images: string[];
}

const Banner: React.FC<BannerProps> = ({ 
  backgroundImage = '/img/banner.png',
  height = 'h-96',
  overlay = true,
  overlayOpacity = 'bg-opacity-50',
  images
}) => {
  return (
    <section 
      className={`relative ${height} w-full bg-cover bg-center bg-no-repeat flex items-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay oscuro opcional */}
      {/* {overlay && (
        <div className={`absolute inset-0 bg-black ${overlayOpacity}`}></div>
      )} */}

      {/* Contenido: solo imágenes */}
      <div className="relative w-full h-full flex items-center justify-center py-8 lg:py-0">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Grid responsive para móvil/tablet */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:hidden w-full">
            {images.map((src, i) => (
              <motion.div
                key={`${src}-${i}`}
                className="w-full aspect-square overflow-hidden flex items-center justify-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={src}
                  alt={`banner-item-${i+1}`}
                  className="w-full h-full object-contain drop-shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </div>

          {/* Layout personalizado para desktop */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 relative">
            {images.map((src, i) => {
              // Diferentes tamaños y posiciones para cada imagen
              const styles = [
                // Imagen 1: Pequeña, arriba a la izquierda
                "w-40 xl:w-98 -translate-y-38",
                // Imagen 2: Grande, centrada arriba
                "w-56 xl:w-74 -translate-y-12 z-10",
                // Imagen 3: Mediana, centrada abajo
                "w-48 xl:w-99 -translate-y-18",
                // Imagen 4: Pequeña, abajo a la derecha
                "w-40 xl:w-78 -translate-y-8"
              ];

              // Diferentes direcciones de entrada para cada imagen
              const animations = [
                { x: -100, y: -50 }, // Desde izquierda arriba
                { y: -100 },          // Desde arriba
                { x: 100, y: 50 },   // Desde derecha abajo
                { x: 100, y: -50 }   // Desde derecha arriba
              ];

              return (
                <motion.div
                  key={`${src}-${i}`}
                  className={`${styles[i]} aspect-square flex items-center justify-center relative`}
                  initial={{ ...animations[i], opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: i * 0.15
                  }}
                  viewport={{ once: true }}
                >
                  <img
                    src={src}
                    alt={`banner-item-${i+1}`}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Ejemplo de uso
const ExampleUsage = () => {
  return (
    <div>
      <Banner
        backgroundImage="/img/fondo-banner.jpg"
        height="h-[420px]"
        overlay
        overlayOpacity="bg-opacity-40"
        images={[
          '/img/coolkids.png',
          '/img/cookie4.webp',
          '/img/cookie2.webp',
          '/img/cookie.webp'
        ]}
      />
    </div>
  );
};

export default Banner;
