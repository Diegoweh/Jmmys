// Navbar.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';

interface NavbarProps {
  logoSrc?: string;
  onDeliveryClick?: () => void;
  onPickupClick?: () => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  logoSrc = "/img/logo.png",
  onDeliveryClick,
  onPickupClick,
  cartCount = 0,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="text-white py-4 px-6 flex items-center justify-between relative z-20"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <a href="/">
          <img src={logoSrc} alt="Jimmy's Pizza" className="h-10 md:h-12 lg:h-14 w-auto" />
        </a>
      </motion.div>

      {/* Menú Desktop */}
      <motion.nav
        className="hidden md:flex gap-6"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <button
          onClick={onDeliveryClick}
          className="px-4 py-2 bg-white text-orange rounded-full text-lg font-medium cubano flex items-center gap-2"
        >
          <span>PIDE X</span>
          <img src="/img/delivery.png" alt="Uber Eats" className="h-6 w-auto" />
        </button>
        <button
          onClick={onPickupClick}
          className="px-4 py-2 bg-blue text-white rounded-full text-sm font-medium flex items-center gap-2"
        >
          <span>{cartCount}</span>
          RECOGER
          <img src="/img/bag.png" alt="bag" className="h-5 w-auto" />
        </button>
      </motion.nav>

      {/* Botón Hamburguesa (Mobile) */}
      <button
        className="md:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Menú Mobile (Overlay) con animación */}
      <motion.div
        id="mobile-menu"
        className="md:hidden fixed inset-0 bg-black/95 z-40"
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6 px-6">
          <motion.button
            onClick={() => { onDeliveryClick?.(); setIsMenuOpen(false); }}
            className="px-6 py-3 bg-white text-orange rounded-full text-lg font-medium cubano flex items-center gap-3"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: isMenuOpen ? 0 : 50, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span>PIDE X</span>
            <img src="/img/delivery.png" alt="Uber Eats" className="h-6 w-auto" />
          </motion.button>

          <motion.button
            onClick={() => { onPickupClick?.(); setIsMenuOpen(false); }}
            className="px-6 py-3 bg-blue text-white rounded-full text-lg font-medium flex items-center gap-3"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: isMenuOpen ? 0 : 50, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span>{cartCount}</span>
            RECOGER
            <img src="/img/bag.png" alt="bag" className="h-6 w-auto" />
          </motion.button>
        </nav>
      </motion.div>
    </motion.header>
  );
};

