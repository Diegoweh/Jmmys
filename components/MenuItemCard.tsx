'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MenuItem } from '@/lib/menu';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuItemCard({ item, index }: MenuItemCardProps) {
  const { addItem, openCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(item, 1);
    setJustAdded(true);

    // Mostrar feedback por 2 segundos
    setTimeout(() => {
      setJustAdded(false);
    }, 2000);
  };

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

        {/* Precio y acciones */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-3xl font-bold text-orange cubano">
            ${item.price}
            <span className="text-lg ml-1">{item.currency}</span>
          </span>

          <motion.button
            onClick={handleAddToCart}
            disabled={item.available === false}
            whileHover={{ scale: item.available !== false ? 1.05 : 1 }}
            whileTap={{ scale: item.available !== false ? 0.95 : 1 }}
            className={`
              ${justAdded
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-orange hover:bg-orange-600'
              }
              ${item.available === false ? 'opacity-50 cursor-not-allowed' : ''}
              text-white px-6 py-2 rounded-full font-bold transition-all duration-300 inline-flex items-center gap-2
            `}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Agregado</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Agregar</span>
              </>
            )}
          </motion.button>
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
