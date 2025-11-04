'use client' // Si estás usando Next.js App Router

import Navbar, { Header } from '@/components/layout/Header';
import SatisfaceSection from '@/components/layout/SatisfaceSection';
import { motion } from 'framer-motion';
import { useState } from 'react'
import React from "react";
import CircularGallery from '@/components/CircularGallery';
import { OrderBox } from '@/components/OrderBox';
import CoolkiesBanner from '@/components/layout/CoolkiesBanner';
import BannerCoolkies from '@/components/layout/BannerCoolkies';
import Banner from '@/components/layout/BannerCoolkies';
import UbicanosSection from '@/components/layout/UbicanosSection';
import Footer from '@/components/layout/Footer';
import MenuCharacters from '@/components/MenuCharacters';



export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <div className="min-h-screen">
      
      <Header />      

      {/* Náutica Pizza Section */}
      <section className="bg-sky-300 py-8 md:py-12 px-0">
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

      {/* Menu Characters Section */}
      <MenuCharacters />

      {/* Se Ve Bueno Section */}
      <section
        className="relative bg-[url('/img/bannerSeVeBueno.webp')] bg-cover bg-center bg-no-repeat py-36 px-6"
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-7xl mx-auto text-start text-white">
          <h3 className="text-5xl md:text-7xl font-extrabold leading-none drop-shadow-lg cubano">
            SE VE BUENO
          </h3>
          <p className="text-5xl md:text-7xl font-script italic mt-2 drop-shadow-lg demo-relgone">
            Y <span className="font-bold not-italic cubano">Sabe</span> Bueno
          </p>
        </div>
      </section>

      {/* Cómo Ordenar Section */}
      <section className="bg-cream px-6 py-4">
        <div className="max-w-5xl mx-auto">
          <OrderBox />          
        </div>
      </section>

      {/* Cookies Section */}
      <Banner
          backgroundImage="/img/banner.png"
          height="h-[420px]"
          overlay
          overlayOpacity="bg-opacity-40"
          images={[
            '/img/toons/full2.webp',
            '/img/cookie3.webp',
            '/img/cookie2.webp',
            '/img/cookie4.webp'
          ]}
      />

      <CoolkiesBanner />      

      {/* Satisface Section */}
      <SatisfaceSection />

      {/* Ubicanos Section */}
      <UbicanosSection
        title="Encuéntranos"
        address="Av. de la Marina 603, Ejidal Francisco Villa, 82127 Mazatlán, Sin."
        hours={[
          "Lunes a Domingo",
          "11:00 AM - 10:00 PM"
        ]}
        phone="(669) 123-4567"
        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.6575222911565!2d-106.44167168819807!3d23.255546507504736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f535649e734e1%3A0xd02627dc0e3d47a4!2sAv.%20de%20la%20Marina%20603%2C%20Ejidal%20Francisco%20Villa%2C%2082127%20Mazatl%C3%A1n%2C%20Sin.!5e0!3m2!1ses-419!2smx!4v1761849036767!5m2!1ses-419!2smx"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
