'use client';

// Navbar.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';

interface NavbarProps {
  logoSrc?: string;
  onDeliveryClick?: () => void;
  onPickupClick?: () => void;
  cartCount?: number;
}

const InfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({
  icon,
  label,
  value,
}) => (
  <div className="flex items-center gap-2 text-xs md:text-sm">
    <span className="shrink-0">{icon}</span>
    <div className="leading-tight">
      <span className="block uppercase opacity-70 tracking-wider">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  </div>
);

// Simple SVG icons (sin dependencias)
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-90">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-90">
    <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.2 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L7.1 8.46a16 16 0 0 0 6 6l1.1-1.11a2 2 0 0 1 2.1-.46c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-90">
    <path d="M12 22s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12Z" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

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
        className="hidden md:flex items-center gap-6"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {/* === NUEVA FILA DE INFO (no clic) === */}
        <div className="flex items-center gap-6 pr-2 mr-2 border-r border-white/20">
          <InfoItem icon={<ClockIcon />} label="Horario" value="1 – 10 PM" />
          <InfoItem icon={<PhoneIcon />} label="Llámanos" value="+52 669 213 5090" />
          <InfoItem icon={<PinIcon />} label="Dirección" value="Av. Carlos Canseco 603" />
        </div>

        {/* Botones existentes */}
        <button
          onClick={onDeliveryClick}
          className="px-4 py-2 bg-white text-orange rounded-full text-lg font-medium cubano flex items-center gap-2"
        >
          <span>PIDE X</span>
          <img src="/img/delivery.png" alt="Uber Eats" className="h-6 w-auto" />
        </button>
        {/* <Link
          href="/tienda"
          className="px-4 py-2 bg-sky-500 text-white rounded-full text-sm font-medium flex items-center gap-2">
          ORDENAR
          <img src="/img/bag.png" alt="bag" className="h-5 w-auto" />
        </Link>  */}
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
        className="md:hidden fixed inset-0 bg-sky-500/95 z-40 overflow-y-auto"
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <nav className="flex flex-col items-center py-20 px-6 gap-6">
          {/* === INFO EN MÓVIL (no clic) === */}
          <div className="w-full max-w-sm grid grid-cols-1 gap-4 text-white mb-4">
            <div className="flex items-center gap-3">
              <ClockIcon />
              <div className="leading-tight">
                <span className="block uppercase text-xs opacity-70 tracking-wider">Horario</span>
                <span className="text-base font-medium">01:00 PM – 10:00 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon />
              <div className="leading-tight">
                <span className="block uppercase text-xs opacity-70 tracking-wider">Llámanos</span>
                <span className="text-base font-medium">+52 6692 135 090</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PinIcon />
              <div className="leading-tight">
                <span className="block uppercase text-xs opacity-70 tracking-wider">Dirección</span>
                <span className="text-base font-medium">Av. Carlos Canseco 603</span>
              </div>
            </div>
          </div>

          {/* === NAVIGATION LINKS (from SubNavbar) === */}
          <div className="w-full max-w-sm space-y-2 text-white mb-4">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </MobileNavLink>
            <MobileNavAccordion title="Menú">
              <MobileNavSubLink href="/menu/pizza" onClick={() => setIsMenuOpen(false)}>Pizza</MobileNavSubLink>
              <MobileNavSubLink href="/menu/hamburguesas" onClick={() => setIsMenuOpen(false)}>Hamburguesas</MobileNavSubLink>
              <MobileNavSubLink href="/menu/ensaladas" onClick={() => setIsMenuOpen(false)}>Ensaladas</MobileNavSubLink>
              <MobileNavSubLink href="/menu/alitas" onClick={() => setIsMenuOpen(false)}>Alitas & Boneless</MobileNavSubLink>
              <MobileNavSubLink href="/menu/para-compartir" onClick={() => setIsMenuOpen(false)}>Pa' Picar</MobileNavSubLink>
              <MobileNavSubLink href="/menu/postres" onClick={() => setIsMenuOpen(false)}>Postres & Bebidas</MobileNavSubLink>
            </MobileNavAccordion>
            {/* <MobileNavAccordion title="Ordenar">
              <MobileNavSubLink href="/ordenar/delivery" onClick={() => setIsMenuOpen(false)}>Delivery</MobileNavSubLink>
              <MobileNavSubLink href="/ordenar/pickup" onClick={() => setIsMenuOpen(false)}>Pickup</MobileNavSubLink>
              <MobileNavSubLink href="/ordenar/reservar" onClick={() => setIsMenuOpen(false)}>Reservar</MobileNavSubLink>
            </MobileNavAccordion> */}
            {/* <MobileNavAccordion title="Tienda">
              <MobileNavSubLink href="/tienda/pizzas" onClick={() => setIsMenuOpen(false)}>Pizzas</MobileNavSubLink>
              <MobileNavSubLink href="/tienda/bebidas" onClick={() => setIsMenuOpen(false)}>Bebidas</MobileNavSubLink>
              <MobileNavSubLink href="/tienda/promos" onClick={() => setIsMenuOpen(false)}>Promos</MobileNavSubLink>
            </MobileNavAccordion> */}
            <MobileNavLink href="/#contacti" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </MobileNavLink>
          </div>

          {/* === SOCIAL ICONS === */}
          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-white/10 transition-colors text-white"
            >
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-white/10 transition-colors text-white"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-white/10 transition-colors text-white"
            >
              <TiktokIcon className="h-6 w-6" />
            </a>
          </div>

          {/* === ACTION BUTTONS === */}
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

          {/* <motion.a
            href="/tienda"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-3 bg-orange text-white rounded-full text-lg font-medium flex items-center gap-3"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: isMenuOpen ? 0 : 50, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            ORDENAR
            <img src="/img/bag.png" alt="bag" className="h-6 w-auto" />
          </motion.a> */}
        </nav>
      </motion.div>
    </motion.header>
  );
};

// === Mobile Navigation Components ===
const MobileNavLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium text-lg"
  >
    {children}
  </a>
);

const MobileNavAccordion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium hover:bg-white/10 transition-colors rounded-lg"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pl-4 pb-2 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

const MobileNavSubLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-4 py-2 text-base rounded-lg hover:bg-white/10 transition-colors text-white/80"
  >
    {children}
  </a>
);

// === Social Media Icons ===
function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.9 3.77-3.9 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.75-.9a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
    </svg>
  );
}

function TiktokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.5 2h2.2c.3 1.7 1.5 3.1 3.1 3.7v2.2c-1.3-.03-2.5-.44-3.6-1.1v6.9a6.9 6.9 0 1 1-6.9-6.9c.5 0 1 .05 1.5.16v2.4a4.49 4.49 0 1 0 3.1 4.28V2Z" />
    </svg>
  );
}
