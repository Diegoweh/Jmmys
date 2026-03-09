'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ShoppingCart } from 'lucide-react';
import { MenuItem } from '@/lib/menu';
import { CartItem } from '@/contexts/CartContext';

interface OptionsModalProps {
  item: MenuItem;
  onClose: () => void;
  onConfirm: (selectedOptions: CartItem['selectedOptions']) => void;
}

export default function OptionsModal({ item, onClose, onConfirm }: OptionsModalProps) {
  const [selected, setSelected] = useState<Record<string, string | string[]>>({});

  const allRequiredSelected = (item.options ?? [])
    .filter(g => g.required)
    .every(g => {
      const val = selected[g.id];
      return g.type === 'single' ? !!val : Array.isArray(val) && val.length > 0;
    });

  const handleSingleSelect = (groupId: string, optionId: string) => {
    setSelected(prev => ({ ...prev, [groupId]: optionId }));
  };

  const handleMultiSelect = (groupId: string, optionId: string) => {
    setSelected(prev => {
      const current = (prev[groupId] as string[]) ?? [];
      const next = current.includes(optionId)
        ? current.filter(id => id !== optionId)
        : [...current, optionId];
      return { ...prev, [groupId]: next };
    });
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto pointer-events-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Hero image */}
          <div className="relative h-44 bg-gray-100 rounded-t-2xl overflow-hidden shrink-0">
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              className="object-cover"
              sizes="448px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5 hover:bg-white transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4 text-gray-700" />
            </button>
            <div className="absolute bottom-3 left-4 right-12">
              <h2 className="text-white font-extrabold cubano text-xl leading-tight">{item.name}</h2>
              <p className="text-orange font-bold text-lg cubano">${item.price} MXN</p>
            </div>
          </div>

          {/* Option groups */}
          <div className="p-5 space-y-5">
            {(item.options ?? []).map(group => (
              <div key={group.id}>
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  {group.title}
                  {group.required && (
                    <span className="text-xs bg-orange text-white rounded-full px-2 py-0.5">
                      requerido
                    </span>
                  )}
                </h3>

                <div className="space-y-2">
                  {group.items.map(opt => {
                    const isSelected =
                      group.type === 'single'
                        ? selected[group.id] === opt.id
                        : ((selected[group.id] as string[]) ?? []).includes(opt.id);

                    return (
                      <button
                        key={opt.id}
                        onClick={() =>
                          group.type === 'single'
                            ? handleSingleSelect(group.id, opt.id)
                            : handleMultiSelect(group.id, opt.id)
                        }
                        className={`w-full text-left px-4 py-2.5 rounded-xl border-2 transition-all text-sm font-medium flex items-center gap-3 ${
                          isSelected
                            ? 'border-orange bg-orange/10 text-orange'
                            : 'border-gray-200 text-gray-700 hover:border-orange/40'
                        }`}
                      >
                        <span
                          className={`shrink-0 w-4 h-4 border-2 transition-colors flex items-center justify-center ${
                            group.type === 'single' ? 'rounded-full' : 'rounded'
                          } ${isSelected ? 'border-orange bg-orange' : 'border-gray-300'}`}
                        >
                          {isSelected && (
                            <span className="block w-2 h-2 bg-white rounded-full" />
                          )}
                        </span>
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="px-5 pb-5">
            <button
              onClick={() => {
                if (!allRequiredSelected) return;
                onConfirm(selected);
              }}
              disabled={!allRequiredSelected}
              className={`w-full py-3 rounded-full font-bold text-white cubano text-lg transition-all flex items-center justify-center gap-2 ${
                allRequiredSelected
                  ? 'bg-orange hover:bg-orange-dark shadow-lg'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              Agregar al carrito
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
