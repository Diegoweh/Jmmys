'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface Character {
  id: string;
  name: string;
  image: string;
  href: string;
}

const characters: Character[] = [
  {
    id: 'pizzini',
    name: 'Pizzas',
    image: '/img/toons/pizzini.svg',
    href: '/menu/pizza'
  },
  {
    id: 'burgersini',
    name: 'Hamburguesas',
    image: '/img/toons/burgersini.svg',
    href: '/menu/hamburguesas'
  },
  {
    id: 'ensaladin',
    name: 'Ensaladas',
    image: '/img/toons/ensaladin.svg',
    href: '/menu/ensaladas'
  },
  {
    id: 'freskiboy',
    name: 'Bebidas',
    image: '/img/toons/freskiboy.svg',
    href: '/tienda/bebidas'
  },
  {
    id: 'alaladin',
    name: 'Snacks',
    image: '/img/toons/alaladin.svg',
    href: '/menu/alitas'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.8
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function MenuCharacters() {
  return (
    <>
      <style jsx>{`
        .character-svg img {
          transition: filter 0.3s ease;
        }

        .group:hover .character-svg img {
          filter: drop-shadow(0 8px 16px rgba(251, 146, 60, 0.3))
                  brightness(1.05)
                  saturate(1.1);
        }
      `}</style>

      <section className="bg-cream py-16 px-6">
        <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange cubano">
            MENÚ
          </h2>
        </motion.div>

        {/* Grid de Personajes */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {characters.map((character) => (
            <motion.div
              key={character.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: {
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.5 }
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={character.href} className="block group">
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300 group-hover:shadow-2xl">
                  {/* Imagen del personaje SVG */}
                  <div className="aspect-square relative p-4 bg-linear-to-br from-white to-cream">
                    <div className="w-full h-full relative character-svg">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                        style={{
                          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                        }}
                      />
                    </div>

                    {/* Overlay con gradiente en hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Nombre del personaje */}
                  <div className="py-4 px-3 bg-white text-center">
                    <h3 className="text-lg md:text-xl font-bold text-orange cubano tracking-wide group-hover:scale-105 transition-transform duration-300">
                      {character.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}
