'use client';

import { useCart } from '@/contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingCart, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    isOpen,
    closeCart,
  } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    // Generar mensaje para WhatsApp
    let message = '*🍕 PEDIDO JIMMY\'S 🍔*\n\n';

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* x${item.quantity}\n`;
      message += `   💲 $${item.price} c/u = $${item.price * item.quantity}\n`;
      if (item.description) {
        message += `   📝 ${item.description.substring(0, 60)}...\n`;
      }
      message += '\n';
    });

    message += `━━━━━━━━━━━━━━━\n`;
    message += `*Total de productos:* ${getTotalItems()}\n`;
    message += `*TOTAL A PAGAR: $${getTotalPrice().toFixed(2)} MXN*\n\n`;
    message += `_¿Podrían confirmar mi pedido?_ 🙏`;

    const whatsappUrl = `https://wa.me/526692139090?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-orange px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white cubano">
                  MI CARRITO
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-orange-dark rounded-full transition-colors"
                aria-label="Cerrar carrito"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart className="w-24 h-24 text-gray-300 mb-4" />
                  <p className="text-xl text-gray-500 font-medium">
                    Tu carrito está vacío
                  </p>
                  <p className="text-gray-400 mt-2">
                    Agrega productos desde el menú
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="bg-cream rounded-xl p-4 shadow-sm"
                    >
                      <div className="flex gap-4">
                        {/* Imagen */}
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-orange text-lg leading-tight mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            ${item.price} {item.currency}
                          </p>

                          {/* Controles de cantidad */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 shadow-sm">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="p-1 hover:bg-orange-50 rounded-full transition-colors"
                                aria-label="Disminuir cantidad"
                              >
                                <Minus className="w-4 h-4 text-orange" />
                              </button>
                              <span className="font-bold text-orange w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="p-1 hover:bg-orange-50 rounded-full transition-colors"
                                aria-label="Aumentar cantidad"
                              >
                                <Plus className="w-4 h-4 text-orange" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 hover:bg-red-50 rounded-full transition-colors"
                              aria-label="Eliminar producto"
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Subtotal del item */}
                      <div className="mt-3 pt-3 border-t border-orange-200 flex justify-between items-center">
                        <span className="text-sm text-gray-600">Subtotal:</span>
                        <span className="font-bold text-orange">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Botón para limpiar carrito */}
                  {items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="w-full py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium text-sm"
                    >
                      Vaciar carrito
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Footer - Total y Checkout */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 bg-white px-6 py-4 space-y-4">
                {/* Resumen */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Total de productos:</span>
                    <span className="font-semibold">{getTotalItems()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">TOTAL:</span>
                    <span className="text-3xl font-bold text-orange cubano">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Botón de WhatsApp */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-bold text-lg cubano shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  ENVIAR PEDIDO
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
