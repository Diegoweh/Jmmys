import { motion } from "framer-motion";
import React from "react";

export default function CoolkiesBanner({
  className = "",
  title = "Coolkies",
  subtitle = "Las galletas más cool",
}: {
  className?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className={`relative bg-linear-to-br from-yellow-600 via-yellow-700 to-amber-800 py-20 md:py-32 px-6 overflow-hidden ${className}`}>
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 relative z-10">
        {/* Título mejorado con efectos */}
        <motion.div 
          className="text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight"
            style={{ 
              textShadow: "0 8px 16px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)",
              fontFamily: "'Cubano', 'Fredoka', system-ui, sans-serif"
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="mt-4 text-yellow-100 text-xl md:text-2xl lg:text-3xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Área de imágenes con composición mejorada */}
        <div className="relative w-full max-w-6xl">
          {/* Efecto de brillo detrás de las imágenes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full max-w-4xl bg-linear-to-r from-yellow-400/20 via-amber-300/30 to-yellow-400/20 rounded-full blur-3xl" />
          </div>

          {/* Container principal de imágenes */}
          <div className="relative">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-end justify-center gap-8 lg:gap-12">
              {/* Cookie izquierda */}
              <motion.div
                className="relative"
                initial={{ x: -100, opacity: 0, rotate: -15 }}
                animate={{ x: 0, opacity: 1, rotate: -8 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                <motion.img
                  src="/img/cookie3.webp"
                  alt="Cookie 3"
                  className="w-56 lg:w-72 drop-shadow-2xl"
                  whileHover={{ 
                    rotate: -12,
                    scale: 1.1,
                    y: -10
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent rounded-full blur-xl" />
              </motion.div>

              {/* Logo central (elevado) */}
              <motion.div
                className="relative z-20 -mb-8 lg:-mb-12"
                initial={{ y: -100, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              >
                <motion.img
                  src="/img/toons/full2.webp"
                  alt="Coolkids logo"
                  className="w-64 lg:w-80 drop-shadow-2xl"
                  whileHover={{
                    scale: 1.15,
                    y: -15,
                    rotate: [0, -5, 5, -5, 0]
                  }}
                  transition={{
                    scale: { type: "spring", stiffness: 200 },
                    y: { type: "spring", stiffness: 200 },
                    rotate: { duration: 0.5, ease: "easeInOut" }
                  }}
                />
                {/* Brillo especial para el logo */}
                <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl animate-pulse" />
              </motion.div>

              {/* Cookie derecha */}
              <motion.div
                className="relative"
                initial={{ x: 100, opacity: 0, rotate: 15 }}
                animate={{ x: 0, opacity: 1, rotate: 8 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              >
                <motion.img
                  src="/img/cookie2.webp"
                  alt="Cookie 2"
                  className="w-56 lg:w-72 drop-shadow-2xl"
                  whileHover={{ 
                    rotate: 12,
                    scale: 1.1,
                    y: -10
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent rounded-full blur-xl" />
              </motion.div>
            </div>

            {/* Cookie principal (abajo) - Desktop */}
            <motion.div
              className="hidden md:flex justify-center mt-8 lg:mt-12"
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            >
              <motion.img
                src="/img/cookie4.webp"
                alt="Cookie principal"
                className="w-72 lg:w-96 drop-shadow-2xl relative z-10"
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  scale: { type: "spring", stiffness: 150 },
                  y: { type: "spring", stiffness: 150 },
                  rotate: { duration: 0.4, ease: "easeInOut" }
                }}
              />
            </motion.div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center gap-8">
              {/* Logo primero en mobile */}
              <motion.img
                src="/img/toons/full2.webp"
                alt="Coolkids logo"
                className="w-48 sm:w-56 drop-shadow-2xl"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.1 }}
              />

              {/* Grid de cookies en mobile */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <motion.img
                  src="/img/cookie3.webp"
                  alt="Cookie 3"
                  className="w-36 sm:w-44 drop-shadow-2xl"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  whileHover={{ scale: 1.05, rotate: -5 }}
                />
                <motion.img
                  src="/img/cookie2.webp"
                  alt="Cookie 2"
                  className="w-36 sm:w-44 drop-shadow-2xl"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                />
              </div>

              {/* Cookie principal en mobile */}
              <motion.img
                src="/img/cookie4.webp"
                alt="Cookie principal"
                className="w-52 sm:w-64 drop-shadow-2xl hidden"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </div>

          {/* Partículas decorativas animadas */}
          <motion.div
            className="absolute top-10 left-10 w-4 h-4 bg-yellow-300 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-6 h-6 bg-amber-300 rounded-full"
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-20 w-3 h-3 bg-orange-300 rounded-full"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>
      </div>
    </section>
  );
}