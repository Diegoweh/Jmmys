"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const menuCategories = [
  { label: "Pizza", href: "/menu/pizza" },
  { label: "Hamburguesas", href: "/menu/hamburguesas" },
  { label: "Ensaladas", href: "/menu/ensaladas" },
  { label: "Alitas & Boneless", href: "/menu/alitas" },
  { label: "Pa' Picar", href: "/menu/para-compartir" },
  { label: "Postres & Bebidas", href: "/menu/postres" },
];

export function MenuNavigation() {
  const pathname = usePathname();
  const currentCategory = menuCategories.find(cat => cat.href === pathname);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Dropdown */}
        <div className="md:hidden py-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full px-4 py-2.5 bg-orange text-white rounded-lg font-medium inline-flex items-center justify-between outline-none">
              <span>{currentCategory?.label || "Menú"}</span>
              <ChevronDown className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[calc(100vw-2rem)]">
              {menuCategories.map((category) => (
                <DropdownMenuItem key={category.href} asChild>
                  <Link
                    href={category.href}
                    className={`w-full ${pathname === category.href ? 'bg-orange/10 text-orange font-semibold' : ''}`}
                  >
                    {category.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop: Horizontal buttons */}
        <div className="hidden md:flex items-center gap-2 py-3">
          {menuCategories.map((category) => {
            const isActive = pathname === category.href;
            return (
              <Link
                key={category.href}
                href={category.href}
                className={`
                  px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-orange text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                {category.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default MenuNavigation;
