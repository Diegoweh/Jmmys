// Header.tsx
'use client';
import React, { useState, useEffect, useRef } from 'react';

export const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Videos para desktop
  const desktopVideos = [
    '/video/jimmys-desktop-compressed.mp4',
    '/video/jimmys-desktop-2-compressed.mp4'
  ];

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reiniciar el video cuando cambia el índice
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log('Error al reproducir el video:', error);
      });
    }
  }, [currentVideoIndex]);

  // Funciones de navegación
  const goToPrevious = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? desktopVideos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      (prevIndex + 1) % desktopVideos.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          key={isMobile ? 'mobile' : `desktop-${currentVideoIndex}`}
        >
          {isMobile ? (
            <source src="/video/jimmys-mobile-compressed.mp4" type="video/mp4" />
          ) : (
            <source src={desktopVideos[currentVideoIndex]} type="video/mp4" />
          )}
          Tu navegador no soporta videos HTML5.
        </video>
        {/* Overlay oscuro opcional sobre el video */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Imagen centrada sobre el video */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <img
            src="/tu-proxima-obsesion.png"
            alt="Tu próxima obsesión"
            className="w-full max-w-md md:max-w-2xl lg:max-w-4xl h-auto object-contain drop-shadow-2xl"
            loading="eager"
          />
        </div>

        {/* Controles del carousel - solo en desktop */}
        {!isMobile && desktopVideos.length > 1 && (
          <>
            {/* Botones de navegación */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all"
              aria-label="Video anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all"
              aria-label="Siguiente video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores (dots) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {desktopVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentVideoIndex === index ? 'bg-yellow-300 w-8' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ir al video ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
