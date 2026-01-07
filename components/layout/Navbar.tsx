'use client';

// Navbar.tsx - Banner informativo
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  logoSrc?: string;
  onDeliveryClick?: () => void;
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

// Simple SVG icons
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
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`text-white py-4 px-6 flex items-center justify-between relative transition-colors duration-300 ${
        isScrolled ? "bg-orange" : "bg-transparent"
      }`}
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
          <img src={logoSrc} alt="Jimmy's Pizza" className="h-10 md:h-12 lg:h-12 w-auto" />
        </a>
      </motion.div>

      {/* Info Desktop */}
      <motion.nav
        className="hidden md:flex items-center gap-6"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {/* Información */}
        <div className="flex items-center gap-6 pr-2 mr-2 border-r border-white/20">
          <InfoItem icon={<ClockIcon />} label="Horario" value="1 – 10 PM" />
          <InfoItem icon={<PhoneIcon />} label="Llámanos" value="+52 669 213 9090" />
          <InfoItem icon={<PinIcon />} label="Dirección" value="Av. Carlos Canseco 603" />
        </div>

        {/* Botón WhatsApp */}
        <button
          onClick={onDeliveryClick}
          className="px-4 py-2 bg-white text-orange rounded-full text-lg font-medium cubano flex items-center gap-2"
        >
          <span>PIDE POR WHATSAPP</span>
        </button>
      </motion.nav>
    </motion.header>
  );
};
