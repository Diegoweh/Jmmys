"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

/**
 * SubNavbar
 * - Sticky navigation bar que cambia de color al hacer scroll
 * - Desktop: Links con dropdowns + redes sociales
 * - Mobile: Botón hamburguesa que abre menú completo
 */
export function SubNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { key: "inicio", label: "Inicio", href: "/" },
    {
      key: "menu",
      label: "Menú",
      items: [
        { label: "Pizza", href: "/menu/pizza" },
        { label: "Hamburguesas", href: "/menu/hamburguesas" },
        { label: "Ensaladas", href: "/menu/ensaladas" },
        { label: "Alitas & Boneless", href: "/menu/alitas" },
        { label: "Pa' picar", href: "/menu/para-compartir" },
        { label: "Postres & Bebidas", href: "/menu/postres" },
      ],
    },
    {
      key: "faqs",
      label: "FAQs",
      href: "/faqs",
    },
    {
      key: "contacto",
      label: "Contacto",
      href: "/#contacto",
    },
  ] as const;

  return (
    <>
      <div
        className={`w-full text-white border-t border-white/10 transition-colors duration-300 ${
          isScrolled ? "bg-orange" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-12 flex items-center justify-between">
            {/* Left: Links Desktop */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-4 text-sm">
              {menu.map((item) => {
                if ("href" in item) {
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <DropdownMenu key={item.key}>
                    <DropdownMenuTrigger className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors font-medium inline-flex items-center gap-1 outline-none">
                      {item.label}
                      <ChevronDown className="h-4 w-4 opacity-80" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-44">
                      {item.items!.map((sub) => (
                        <DropdownMenuItem key={sub.href} asChild>
                          <Link href={sub.href} className="w-full">
                            {sub.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              })}
            </nav>

            {/* Right: Socials + Hamburger */}
            <div className="flex items-center gap-3 ml-auto">
              {/* Social Icons - Desktop only */}
              <a
                href="https://facebook.com/jimmysmzt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-md hidden md:block hover:bg-white/10 transition-colors"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/jimmysmzt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-md hidden md:block hover:bg-white/10 transition-colors"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@jimmysmzt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2 rounded-md hidden md:block hover:bg-white/10 transition-colors"
              >
                <TiktokIcon className="h-5 w-5" />
              </a>

              {/* Botón Hamburguesa - Mobile only */}
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
            </div>
          </div>
        </div>
      </div>

      {/* Menú Mobile (Dropdown desde arriba) */}
      <motion.div
        id="mobile-menu"
        className="md:hidden fixed left-0 right-0 bg-black/95 shadow-2xl z-40 overflow-y-auto max-h-[85vh]"
        style={{ top: isScrolled ? '3rem' : '7.5rem' }} // Ajusta según la altura del navbar
        initial={{ y: '-100%', opacity: 0 }}
        animate={{
          y: isMenuOpen ? 0 : '-100%',
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <nav className="flex flex-col items-center py-6 px-6 gap-3">
          {/* === INFO EN MÓVIL === */}
          <div className="w-full max-w-sm grid grid-cols-1 gap-3 text-white mb-2">
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
                <span className="text-base font-medium">+52 669 213 9090</span>
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

          {/* === NAVIGATION LINKS === */}
          <div className="w-full max-w-sm space-y-1 text-white mb-2">
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
            <MobileNavLink href="/faqs" onClick={() => setIsMenuOpen(false)}>
              FAQs
            </MobileNavLink>
            <MobileNavLink href="/#contacto" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </MobileNavLink>
          </div>

          {/* === SOCIAL ICONS === */}
          <div className="flex items-center gap-4 mb-3">
            <a
              href="https://facebook.com/jimmysmzt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-white/10 transition-colors text-white"
            >
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/jimmysmzt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-white/10 transition-colors text-white"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a
              href="https://tiktok.com/@jimmysmzt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-white/10 transition-colors text-white"
            >
              <TiktokIcon className="h-6 w-6" />
            </a>
          </div>

          {/* === ACTION BUTTONS === */}
          <motion.a
            href="https://wa.me/526692139090"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="px-5 py-2.5 bg-white text-orange rounded-full text-base font-medium cubano flex items-center gap-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isMenuOpen ? 0 : 30, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span>PIDE X WHATSAPP</span>
          </motion.a>
        </nav>
      </motion.div>
    </>
  );
}

// === Mobile Navigation Components ===
const MobileNavLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium text-base"
  >
    {children}
  </a>
);

const MobileNavAccordion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 text-base font-medium hover:bg-white/10 transition-colors rounded-lg"
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

// === Info Icons for Mobile ===
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

export default SubNavbar;
