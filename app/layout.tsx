import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Sub } from "@radix-ui/react-dropdown-menu";
import SubNavbar from "@/components/layout/SubNavbar";
import FloatingWhatsApp from "@/components/ui/FoatingWhatsApp";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import FloatingCartButton from "@/components/cart/FloatingCartButton";
import { PromoDevTools } from "@/components/PromoDevTools";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jimmys | Pizza Estilo Detroit, Burgers, Alitas y Boneless",
  description: "Prueba la mejor pizza estilo Detroit en Mazatlán. En Jimmys servimos pizzas crujientes, burgers premium, alitas y boneless y más. ¡Satisface tu antojo hoy mismo!",
  keywords: ['pizzas mazatlán', 'hamburguesas mazatlán', 'alitas mazatlán', 'restaurante mazatlán', 'comida rápida', 'Jimmys', 'boneless', 'postres', 'servicio a domicilio', 'delivery'],
  authors: [{ name: 'Jimmys Restaurant' }],
  creator: 'Jimmys',
  publisher: 'Jimmys',
  metadataBase: new URL('https://jimmysmzt.com'), // Reemplaza con tu dominio real
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://jimmysmzt.com',
    title: "Jimmys - Tu próxima obsesión",
    description: 'Las mejores pizzas, hamburguesas y alitas en Mazatlán. ¡Ordena ahora!',
    siteName: "Jimmys Restaurant",
    images: [
      {
        url: '/img/meals/J.png', // Imagen principal del sitio
        width: 1200,
        height: 530,
        alt: "Jimmys Restaurant - Deliciosa comida",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jimmys - Tu próxima obsesión",
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
    <html lang="es" className="m-0 p-0 w-full h-full">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 w-full min-h-screen`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NG7VWR0K6D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NG7VWR0K6D');
          `}
        </Script>        

        <CartProvider>
          <PromoDevTools />
          {/* Header - Fixed Navigation over video */}
          <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
            <div className="pointer-events-auto">
              <Navbar logoSrc="/img/logo.png" />
              <SubNavbar />
            </div>
          </div>
          {children}
          <FloatingWhatsApp />
          <FloatingCartButton />
          <CartDrawer />
          {/* Footer */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
