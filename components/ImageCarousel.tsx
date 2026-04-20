'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

export type CarouselImage = {
  src: string;
  alt: string;
  title?: string;
};

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlayMs?: number;
  className?: string;
  accentColor?: string;
}

export default function ImageCarousel({
  images,
  autoPlayMs = 4000,
  className = '',
  accentColor = '#ff6b35',
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const count = images.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (isPaused || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), autoPlayMs);
    return () => clearInterval(id);
  }, [isPaused, count, autoPlayMs]);

  if (count === 0) return null;

  const current = images[index];

  return (
    <div
      className={`relative w-full max-w-md md:max-w-2xl mx-auto ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl bg-black/5">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
          />
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center shadow-md transition"
            >
              <span aria-hidden>‹</span>
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center shadow-md transition"
            >
              <span aria-hidden>›</span>
            </button>
          </>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={current.title ?? current.alt}
          className="text-center text-lg md:text-xl font-bold cubano mt-4"
          style={{ color: accentColor }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
        >
          {current.title ?? current.alt}
        </motion.p>
      </AnimatePresence>

      {count > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Imagen ${i + 1}`}
              onClick={() => setIndex(i)}
              className="h-2.5 rounded-full transition-all"
              style={{
                width: i === index ? 24 : 10,
                backgroundColor: i === index ? accentColor : 'rgba(0,0,0,0.25)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
