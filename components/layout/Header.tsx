// Header.tsx
'use client';
import { motion as m } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';

export const Header: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; // Slide 1: Imagen con texto | Slide 2: Video

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      

      {/* Slide 1: Imagen con texto y decoraciones */}
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          currentSlide === 0 ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative w-full h-full bg-[url(/img/Header.webp)] bg-cover bg-center bg-no-repeat">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/7"></div>

          {/* Imágenes decorativas con animaciones */}
          <m.img
            src="/img/meal3.webp"
            alt=""
            className="absolute bottom-4 -left-6 md:-left-8 lg:-left-12 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain z-5 sm:block"
            initial={{ x: -200, opacity: 0 }}
            animate={currentSlide === 0 ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          <m.img
            src="/img/meal2.webp"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-92 md:h-92 lg:w-140 lg:h-140 object-contain z-5 opacity-80"
            initial={{ scale: 0, opacity: 0 }}
            animate={currentSlide === 0 ? { scale: 1, opacity: 0.8 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          <m.img
            src="/img/meal.webp"
            alt=""
            className="absolute top-2 -right-5 md:-right-16 lg:-right-10 w-38 h-38 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-86 xl:h-86 object-contain z-5 sm:block"
            initial={{ x: 200, opacity: 0 }}
            animate={currentSlide === 0 ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {/* Contenido */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <section className="text-white px-6">
              <div className="max-w-7xl mx-auto text-center">
                <m.h2
                  className="text-6xl md:text-8xl mb-4 text-shadow-lg cubano"
                  initial={{ y: 50, opacity: 0 }}
                  animate={currentSlide === 0 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  TU PRÓXIMA
                </m.h2>
                <m.p
                  className="text-7xl md:text-9xl font-script italic text-shadow-lg demo-relgone"
                  initial={{ y: 50, opacity: 0 }}
                  animate={currentSlide === 0 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                  Obsesion
                </m.p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Slide 2: Video */}
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          currentSlide === 1 ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative w-full h-full bg-black">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://www.pexels.com/es-es/download/video/4131833/" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
          {/* Overlay oscuro opcional sobre el video */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Indicadores de navegación (dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-yellow-300 w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Botones de navegación lateral */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="Slide anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-0 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="Siguiente slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Header;
