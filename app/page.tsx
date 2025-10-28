'use client' // Si estás usando Next.js App Router

import Navbar, { Header } from '@/components/layout/Header';
import SatisfaceSection from '@/components/layout/SatisfaceSection';
import { motion } from 'framer-motion';
import { useState } from 'react'
import React from "react";
import CircularGallery from '@/components/CircularGallery';



export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <div className="min-h-screen">
      
      <Header />

      {/* Satisface Section */}
      <SatisfaceSection />

      {/* Náutica Pizza Section */}
      <section className="bg-blue py-8 md:py-12 px-0">
        <div className="flex items-center gap-4 mb-2 sm:mb-3 text-center justify-center">
          <motion.h3
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange tracking-tight cubano"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nuestras Pizzas
          </motion.h3>
        </div>
        <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] relative">
          <CircularGallery bend={5} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
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
