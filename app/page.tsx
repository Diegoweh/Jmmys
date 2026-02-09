'use client' // Si estás usando Next.js App Router

import Navbar, { Header } from '@/components/layout/Header';
import SatisfaceSection from '@/components/layout/SatisfaceSection';
import { motion } from 'framer-motion';
import { useState } from 'react'

import CircularGallery from '@/components/CircularGallery';
import { OrderBox } from '@/components/OrderBox';

import Banner from '@/components/layout/BannerCoolkies';
import UbicanosSection from '@/components/layout/UbicanosSection';

import MenuCharacters from '@/components/MenuCharacters';
import SnackGallery from '@/components/layout/SnackGallery';
import DipsGallery from '@/components/layout/DipsGallery';
import PromoPopup from '@/components/PromoPopup';



export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* Monthly Promotion Popup */}
      {/* <PromoPopup
        imageSrc="/img/promo-superbowl.webp"
        imageAlt="Promoción del mes"
        link="/menu/promociones"
      /> */}

      <Header />

      {/* H1 para SEO - visualmente oculto */}
      <h1 className="sr-only">La auténtica Pizza Detroit Cheese Crust en Mazatlán</h1>

      {/* Menu Characters Section */}
      <MenuCharacters />      

      {/* Náutica Pizza Section */}
      <section className="bg-sky-300 py-8 md:py-12 px-0 overflow-hidden">
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
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>

        {/* Botón Ordenar */}
        <div className="flex justify-center mt-8">
          <motion.a
            href="/menu/pizza"            
            rel="noopener noreferrer"
            className="px-8 py-4 bg-orange text-white rounded-full text-xl font-bold cubano shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span>ORDENAR AHORA</span>
            {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg> */}
          </motion.a>
        </div>
      </section>      

      {/* SnacksGallery */}
      <section className="bg-orange py-8 md:py-12 px-0 overflow-hidden">
        <div className="flex items-center gap-4 mb-2 sm:mb-3 text-center justify-center">
          <motion.h3
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-300 tracking-tight cubano"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nuestras Burgers
          </motion.h3>
        </div>
        <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] relative">
          <SnackGallery bend={-3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>

        {/* Botón Ordenar */}
        <div className="flex justify-center mt-8">
          <motion.a
            href="/menu/hamburguesas"            
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-orange rounded-full text-xl font-bold cubano shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span>ORDENAR AHORA</span>
            {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg> */}
          </motion.a>
        </div>
      </section>      

      {/* Alitas y Boneless Section */}
      <section className="bg-orange-100 py-12 md:py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Título */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange mb-6 cubano">
              ALITAS Y BONELESS
            </h3>

            {/* Texto */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Crujientes por fuera, jugosas por dentro. Al estilo JIMMYS.
            </p>

            {/* Imagen */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src="/img/boneless.webp"
                alt="Alitas y Boneless"
                className="w-full max-w-md md:max-w-full mx-auto h-auto rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Botón */}
            <a
              href="/menu/alitas"
              className="inline-block px-8 py-4 bg-orange text-white rounded-full text-xl font-bold cubano shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              ORDENAR AHORA
            </a>
          </motion.div>
        </div>
      </section>

      {/* Salsas Gallery */}
      <section className="bg-white py-8 md:py-12 px-0 overflow-hidden">
        <div className="flex items-center gap-4 mb-2 sm:mb-3 text-center justify-center">
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange tracking-tight cubano"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nuestras Salsas
          </motion.h3>
        </div>
        <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] relative">
          <DipsGallery bend={0} textColor="#ff6b35" borderRadius={0.05} scrollEase={0.02}/>
        </div>

        {/* Texto descriptivo de salsas */}
        <motion.div
          className="max-w-3xl mx-auto text-center mt-8 px-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Todas nuestras salsas son preparadas en casa con ingredientes frescos y recetas únicas que hacen de cada bocado una experiencia inolvidable.
          </p> */}
        </motion.div>
      </section>

      {/* Ensaladas Section */}
      <section className="bg-green-100 py-12 md:py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Título */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-600 mb-6 cubano">
              ENSALADAS
            </h3>

            {/* Texto */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Frescas y bien preparadas. Una opción ligera para acompañar tu comida o elegir algo más fresco, sin salir del estilo JIMMYS.
            </p>

            {/* Imagen */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src="/img/ensaladas/cesar-style.webp"
                alt="Ensaladas Frescas"
                className="w-full max-w-md md:max-w-full mx-auto h-auto rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Botón */}
            <a
              href="/menu/ensaladas"
              className="inline-block px-8 py-4 bg-green-600 text-white rounded-full text-xl font-bold cubano shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              VER MENÚ DE ENSALADAS
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bebidas Section */}
      <section className="bg-blue-100 py-12 md:py-20 px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Título Principal */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-violet-700 mb-8 cubano">
              BEBIDAS
            </h3>

            {/* Rookys */}
            <h4 className="text-2xl md:text-3xl font-bold mb-4 cubano">
              ROOKYS
            </h4>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Intensas, cremosas y bien balanceadas.
            </p>

            {/* Juzzys */}
            <h4 className="text-2xl md:text-3xl font-bold mb-4 cubano">
              JUZZYS
            </h4>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Refrescantes, frutales y llenas de sabor.
            </p>

            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Agrégalas a tu combo y refresca tu experiencia JIMMYS.
            </p>

            {/* Imagen */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Imagen Mobile */}
              <img
                src="/img/vasos_celular.webp"
                alt="Bebidas Refrescantes"
                className="md:hidden w-full max-w-md mx-auto h-auto rounded-3xl"
              />
              {/* Imagen Desktop */}
              <img
                src="/img/vasos_escritorio.webp"
                alt="Bebidas Refrescantes"
                className="hidden md:block w-full mx-auto h-auto rounded-3xl"
              />
            </motion.div>

            {/* Botón */}
            <a
              href="/menu/postres"
              className="inline-block px-8 py-4 bg-violet-700 text-white rounded-full text-xl font-bold cubano shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              VER MENÚ DE BEBIDAS
            </a>
          </motion.div>
        </div>
      </section>

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

      {/* Calidad Jimmy's Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange mb-8 cubano">
              Lo Hacemos con Pasión
            </h3>

            <div className="space-y-6 mb-10">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                En Jimmy's nos encanta lo que hacemos. Por eso seleccionamos cuidadosamente cada ingrediente,
                trabajamos con productos frescos de la mejor calidad y seguimos procesos que garantizan
                que cada platillo sea una experiencia única.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Nuestro equipo prepara todo con dedicación y amor, porque sabemos que cuando comes con nosotros,
                no solo disfrutas una comida deliciosa, sino momentos especiales que mereces recordar.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Cada pizza, cada burger, cada alita... todo se hace pensando en ti y en darte la mejor experiencia posible.
              </p>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-6">
                ¿Quieres saber más sobre nosotros?
              </p>
              <a
                href="/faqs"
                className="inline-block px-10 py-5 bg-orange text-white rounded-full text-xl font-bold cubano shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Haz clic aquí
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cómo Ordenar Section */}
      <section className="bg-orange-50 px-6 py-4">
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
            '/img/coockie2.webp',
            
          ]}
      />

      {/* Satisface Section */}
      <SatisfaceSection />
      

      {/* Ubicanos Section */}
      <UbicanosSection
        title="Encuéntranos"
        address="Av. Carlos Canseco 603 - Mazatlán, Sin."
        hours={[
          "Miércoles a Lunes",
          "01:00 PM - 10:00 PM"
        ]}
        phone="(669) 213 9090"
        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.6575222911565!2d-106.44167168819807!3d23.255546507504736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f535649e734e1%3A0xd02627dc0e3d47a4!2sAv.%20de%20la%20Marina%20603%2C%20Ejidal%20Francisco%20Villa%2C%2082127%20Mazatl%C3%A1n%2C%20Sin.!5e0!3m2!1ses-419!2smx!4v1761849036767!5m2!1ses-419!2smx"
      />

      
    </div>
  );
}
