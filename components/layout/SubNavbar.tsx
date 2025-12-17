"use client";

import * as React from "react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

/**
 * SubNavbar
 * - Left: 6 links (Inicio (no dropdown), Nosotros, Servicios, ordenar, Tienda, Contacto)
 * - Each (except Inicio) opens a shadcn/ui dropdown.
 * - Right: Social icons (Facebook, Instagram, TikTok)
 *
 * Colócalo debajo del Super Navbar.
 */
export function SubNavbar() {
  const menu = [
    { key: "inicio", label: "Inicio", href: "/" },
    
    {
      key: "menu",
      label: "Menu",
      items: [
        { label: "Pizza", href: "/menu/pizza" },
        { label: "Hamburguesas", href: "/menu/hamburguesas" },
        { label: "Ensaladas", href: "/menu/ensaladas" },
        { label: "Alitas & Boneless", href: "/menu/alitas" },
        { label: "Pa' picar", href: "/menu/para-compartir" },
        { label: "Postres & Bebidas", href: "/menu/postres" },
      ],
    },
    // {
    //   key: "ordenar",
    //   label: "Ordenar",
    //   items: [
    //     { label: "Delivery", href: "/ordenar/delivery" },
    //     { label: "Pickup", href: "/ordenar/pickup" },
    //     { label: "Reservar", href: "/ordenar/reservar" },
    //   ],
    // },
    // {
    //   key: "tienda",
    //   label: "Tienda",
    //   items: [
    //     { label: "Pizzas", href: "/tienda/pizzas" },
    //     { label: "Bebidas", href: "/tienda/bebidas" },
    //     { label: "Promos", href: "/tienda/promos" },
    //   ],
    // },
    {
      key: "contacto",
      label: "Contacto",
      href: "/contacto",
    },
  ] as const;

  return (
    <div className="w-full text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-12 flex items-center justify-between">
          {/* Left: Links */}
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

          {/* Right: Socials */}
          <div className="flex items-center gap-3">
            {/* <Link
              href="/tienda"
              className="px-4 py-2 bg-sky-500 text-white rounded-full text-sm font-medium flex items-center gap-2">
              ORDENAR
              <img src="/img/bag.png" alt="bag" className="h-5 w-auto" />
            </Link> */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-md hidden md:block hover:bg-white/10 transition-colors"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-md hidden md:block hover:bg-white/10 transition-colors"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-2 rounded-md hidden md:block hover:bg-white/10 transition-colors"
            >
              <TiktokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Brand Icons (inline SVG, sin dependencias externas) ---
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
