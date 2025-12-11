import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Sub } from "@radix-ui/react-dropdown-menu";
import SubNavbar from "@/components/layout/SubNavbar";

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
  description: "Satisface tu antojo más grande con nuestras deliciosas pizzas, churros y cookies. Lo bueno está a la vuelta de la esquina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Navbar - Always visible on top */}
        <div className="absolute top-0 left-0 right-0 z-30">
          <Navbar logoSrc="/img/logo.png" cartCount={0} />
          <SubNavbar />
        </div>
        {children}
      </body>
    </html>
  );
}
