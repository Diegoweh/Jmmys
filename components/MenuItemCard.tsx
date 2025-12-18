'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from '@/lib/menu';

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuItemCard({ item, index }: MenuItemCardProps) {
  // Generar mensaje de WhatsApp
  const whatsappMessage = `Hola, quisiera ordenar *${item.name}* y también quisiera agregar...`;
  const whatsappUrl = `https://wa.me/526692135090?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
    >
      {/* Imagen del producto */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Badge de disponibilidad */}
        {item.available === false && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            No disponible
          </div>
        )}

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {item.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-orange/90 text-white px-2 py-1 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-orange cubano mb-2">
          {item.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {item.description}
        </p>

        {/* Precio */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-orange cubano">
            ${item.price}
            <span className="text-lg ml-1">{item.currency}</span>
          </span>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition-colors duration-300 inline-block"
          >
            Ordenar
          </Link>
        </div>

        {/* Opciones disponibles */}
        {item.options && item.options.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              {item.options.length} {item.options.length === 1 ? 'opción' : 'opciones'} disponibles
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
