import { motion } from 'framer-motion';
import { useState } from 'react'
import React from "react";

export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-[url(/img/Header.webp)] bg-cover bg-center bg-no-repeat">
        {/* Overlay opcional para mejor contraste */}
        <div className="absolute inset-0 bg-black/7"></div>
        
        {/* Imágenes decorativas con animaciones */}
        {/* Imagen izquierda-abajo */}
        <motion.img 
          src="/img/meal3.webp" 
          alt=""
          className="absolute bottom-4 -left-6 md:-left-8 lg:-left-12 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain z-5 sm:block"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* Imagen centro */}
        <motion.img 
          src="/img/meal2.webp" 
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-92 md:h-92 lg:w-140 lg:h-140 object-contain z-5 opacity-80"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        />

        {/* Imagen derecha-arriba */}
        <motion.img 
          src="/img/meal.webp" 
          alt=""
          className="absolute top-2 -right-6 md:-right-16 lg:-right-10 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-86 xl:h-86 object-contain z-5 sm:block"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        />
        
        {/* Contenido con z-index para estar sobre el overlay */}
        <div className="relative z-10">
          {/* Header con animación */}
          <motion.header 
            className="text-white py-4 px-6 flex items-center justify-between relative"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                <a href="">
              <img 
                src="/img/logo.png" 
                alt="Jimmy's Pizza" 
                className="h-10 md:h-12 lg:h-14 w-auto"
              />

                </a>
            </motion.div>

            {/* Menú Desktop */}
            <motion.nav 
              className="hidden md:flex gap-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="px-4 py-2 bg-white text-orange rounded-full text-lg font-medium cubano flex items-center gap-2">
                <span>PIDE X</span>
                <img src="/img/delivery.png" alt="Uber Eats" className="h-6 w-auto" />
              </div>
              <div className="px-4 py-2 bg-blue text-white rounded-full text-sm font-medium flex items-center gap-2">
                <span>0</span>
                RECOGER 
                <img src="/img/bag.png" alt="bag" className="h-5 w-auto" />
              </div>
            </motion.nav>

            {/* Botón Hamburguesa (Mobile) */}
            <button 
              className="md:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Menú Mobile (Overlay) con animación */}
            <motion.div 
              className="md:hidden fixed inset-0 bg-black/95 z-40"
              initial={{ x: '100%' }}
              animate={{ x: isMenuOpen ? 0 : '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="flex flex-col items-center justify-center h-full gap-6 px-6">
                <motion.div 
                  className="px-6 py-3 bg-white text-orange rounded-full text-lg font-medium cubano flex items-center gap-3"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: isMenuOpen ? 0 : 50, opacity: isMenuOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span>PIDE X</span>
                  <img src="/img/delivery.png" alt="Uber Eats" className="h-6 w-auto" />
                </motion.div>
                <motion.div 
                  className="px-6 py-3 bg-blue text-white rounded-full text-lg font-medium flex items-center gap-3"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: isMenuOpen ? 0 : 50, opacity: isMenuOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <span>0</span>
                  RECOGER 
                  <img src="/img/bag.png" alt="bag" className="h-6 w-auto" />
                </motion.div>
              </nav>
            </motion.div>
          </motion.header>

          {/* Hero Section - Churros con animaciones */}
          <section className="text-white py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
              <motion.h2 
                className="text-6xl md:text-8xl mb-4 text-shadow-lg cubano"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                TU PRÓXIMA
              </motion.h2>
              <motion.p 
                className="text-7xl md:text-9xl font-script italic text-shadow-lg demo-relgone"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                Obsesion
              </motion.p>
              <motion.div 
                className="mt-8 text-9xl md:text-[12rem] demo-relgone"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
              >
                Jimmys
              </motion.div>
            </div>
          </section>
        </div>
      </div>
  )
}

export default Header;