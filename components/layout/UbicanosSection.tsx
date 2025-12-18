'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface UbicanosSectionProps {
  title?: string;
  address?: string;
  hours?: string[];
  phone?: string;
  mapUrl: string;
}

const UbicanosSection: React.FC<UbicanosSectionProps> = ({
  title = "Encuéntranos",
  address = "Av. de la Marina 603, Ejidal Francisco Villa, 82127 Mazatlán, Sin.",
  hours = [
    "Lunes a Domingo",
    "1:00 PM - 10:00 PM"
  ],
  phone = "(669) 135090",
  mapUrl
}) => {
  return (
    <section id="contacto" className="py-16 lg:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Texto a la izquierda */}
          <motion.div
            className="space-y-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-orange cubano">
              {title}
            </h2>

            <div className="space-y-4 text-gray-600">
              {/* Dirección */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-orange mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                  <p className="text-base">{address}</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-orange mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Horario</h3>
                  {hours.map((hour, i) => (
                    <p key={i} className="text-base">{hour}</p>
                  ))}
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-orange mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-base hover:text-orange transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Botón opcional */}
            <motion.a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver en Google Maps
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Mapa a la derecha */}
          <motion.div
            className="w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en Google Maps"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default UbicanosSection;
