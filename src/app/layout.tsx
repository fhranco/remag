import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-remag-teal selection:text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
