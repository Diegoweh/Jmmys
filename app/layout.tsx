import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Sub } from "@radix-ui/react-dropdown-menu";
import SubNavbar from "@/components/layout/SubNavbar";
import FloatingWhatsApp from "@/components/ui/FoatingWhatsApp";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jimmy's - Tu próxima obsesión",
  description: "Satisface tu antojo más grande con nuestras deliciosas pizzas, hamburguesas, alitas y más. Restaurante en Mazatlán con las mejores opciones para disfrutar.",
  keywords: ['pizzas mazatlán', 'hamburguesas mazatlán', 'alitas mazatlán', 'restaurante mazatlán', 'comida rápida', 'Jimmy\'s', 'boneless', 'postres'],
  authors: [{ name: 'Jimmy\'s Restaurant' }],
  creator: 'Jimmy\'s',
  publisher: 'Jimmy\'s',
  metadataBase: new URL('https://jimmys.com'), // Reemplaza con tu dominio real
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://jimmys.com',
    title: "Jimmy's - Tu próxima obsesión",
    description: 'Las mejores pizzas, hamburguesas y alitas en Mazatlán. ¡Ordena ahora!',
    siteName: "Jimmy's Restaurant",
    images: [
      {
        url: '/img/Header.webp', // Imagen principal del sitio
        width: 1200,
        height: 630,
        alt: "Jimmy's Restaurant - Deliciosa comida",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jimmy's - Tu próxima obsesión",
    description: 'Las mejores pizzas, hamburguesas y alitas en Mazatlán.',
    images: ['/img/Header.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Navbar - Always visible on top */}
        <div className="absolute top-0 left-0 right-0 z-30">
          <Navbar logoSrc="/img/logo.png" cartCount={0} />
          <SubNavbar />
        </div>
        {children}
        <FloatingWhatsApp />
        {/* Footer */}
      <Footer />
      </body>
    </html>
  );
}
