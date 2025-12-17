'use client';

import { MessageCircle } from 'lucide-react';


export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5213318635199?text=Hola%2C%20quiero%20hacer%20un%20pedido."
      className="fixed right-6 bottom-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      target="_blank"
      rel="noopener noreferrer"
      title="Contactar por WhatsApp"
      id="whatsapp-floating-button"
      
    >
      <MessageCircle className="w-6 h-6" />

      {/* Tooltip que aparece al hacer hover */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Ordena Aquí
      </span>

      {/* Animación de pulso */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
    </a>
  );
}
