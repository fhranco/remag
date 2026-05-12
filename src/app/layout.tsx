import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "REMAG | Gestión responsable de residuos en Magallanes",
  description: "Soluciones ambientales para empresas, municipios y comunidades. Gestión de residuos, Ley REP, trazabilidad, educación ambiental y economía circular desde la Región de Magallanes.",
  keywords: "REMAG, gestión de residuos Magallanes, reciclaje Magallanes, Ley REP, economía circular, residuos industriales, trazabilidad de residuos, puntos limpios Magallanes, educación ambiental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${lato.variable} antialiased selection:bg-remag-teal selection:text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
