'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface PromoPopupProps {
  imageSrc: string
  imageAlt?: string
  link?: string
}

export default function PromoPopup({ imageSrc, imageAlt = 'Promoción mensual', link }: PromoPopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup today
    const lastShown = localStorage.getItem('promoPopupLastShown')
    const today = new Date().toDateString()

    if (lastShown !== today) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem('promoPopupLastShown', today)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Cerrar"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Promotion Image */}
              <div className="relative">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto object-contain"
                />

                {/* Call to Action Button */}
                {link && (
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                    <Link
                      href={link}
                      onClick={handleClose}
                      className="px-4 py-2 md:px-10 md:py-4 bg-orange text-white rounded-3xl text-xl md:text-2xl font-bold cubano shadow-2xl hover:shadow-orange/50 hover:scale-110 transition-all duration-300 flex items-center gap-3"
                    >
                      <span>VER PROMOCIÓN</span>
                      <svg
                        className="w-6 h-6 animate-caret-blink hover:animate-none"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
