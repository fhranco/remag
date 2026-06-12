"use client";

import { Container } from "@/components/ui";
import { 
  ArrowLeft, CheckCircle2, ShieldCheck, Mountain, 
  Shield, Truck, Users, Heart, MapPin, Scale 
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";

export default function QuienesSomosPage() {
  const values = [
    { title: "Conocimiento Geográfico", description: "Operamos en condiciones invernales extremas con rutas logísticas resilientes y adaptadas al territorio.", icon: <Mountain className="w-8 h-8 text-remag-teal" /> },
    { title: "Infraestructura Propia", description: "Plantas de acopio y clasificación estratégicamente ubicadas en Magallanes para responder con agilidad.", icon: <Shield className="w-8 h-8 text-remag-teal" /> },
    { title: "Certificación en Origen", description: "Cada kilo recibido se pesa, clasifica y registra de forma inmediata, aportando trazabilidad transparente.", icon: <Truck className="w-8 h-8 text-remag-teal" /> },
    { title: "Capital Humano Local", description: "Generamos empleo especializado en Magallanes, capacitándolo técnicamente en gestión ambiental.", icon: <Users className="w-8 h-8 text-remag-teal" /> },
    { title: "Socio a Largo Plazo", description: "No tercerizamos la responsabilidad legal. REMAG responde directamente ante fiscalizaciones y auditorías.", icon: <Heart className="w-8 h-8 text-remag-teal" /> }
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 bg-remag-blue-deep text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-remag-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <Container className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-display font-black uppercase text-sm mb-12 transition-colors">
            <ArrowLeft className="w-5 h-5" /> Volver al Inicio
          </Link>
          
          <div className="max-w-3xl">
            <span className="inline-block py-2 px-4 rounded-full bg-remag-teal/20 text-remag-teal font-display font-black tracking-widest uppercase text-xs mb-6 border border-remag-teal/30">
              Sobre Nosotros
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase mb-6 tracking-tight leading-[1.05]">
              Quiénes Somos y <br/><span className="text-remag-teal">Nuestro Origen</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-sans font-normal leading-relaxed max-w-2xl">
              Nacemos en el extremo sur con un propósito claro: proteger el ecosistema de Magallanes mediante infraestructura local, operaciones profesionales y trazabilidad completa.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Origen y Propósito Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
            
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative aspect-square bg-remag-blue-deep organic-border overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-remag-teal/20 via-transparent to-black/40" />
                <h3 className="text-[10rem] font-black italic text-white/5 uppercase leading-none select-none tracking-tighter">
                  PTG
                </h3>
                <div className="absolute bottom-10 left-10 right-10 p-8 glass-card">
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] text-remag-teal italic block mb-2">Base de Operaciones</span>
                  <p className="text-lg font-bold text-white uppercase italic leading-none">Punta Arenas // Magallanes</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="text-xs font-display font-black uppercase tracking-widest text-remag-teal">01 // ORIGEN Y PROPÓSITO</span>
                <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-remag-blue-deep tracking-tight">
                  Nacemos desde y para Magallanes.
                </h2>
              </div>
              
              <p className="text-lg font-sans font-bold text-remag-blue-deep leading-relaxed">
                REMAG existe porque esta región enfrenta desafíos únicos: aislamiento geográfico, condiciones climáticas extremas y uno de los ecosistemas más prístinos del planeta.
              </p>
              <p className="text-sm font-sans font-normal text-remag-gray-text leading-relaxed">
                Decidimos no esperar soluciones externas de matrices centralizadas en el norte del país. Construimos una organización con base operativa local, conocimiento real de la geografía austral y un compromiso técnico con su protección.
              </p>
              <p className="text-sm font-sans font-normal text-remag-gray-text/80 leading-relaxed">
                Trabajamos para que cada residuo industrial, municipal y domiciliario sea procesado bajo un modelo transparente, seguro y auditable, aportando directamente al desarrollo sostenible del territorio.
              </p>

              <div className="grid grid-cols-2 gap-10 pt-8 border-t border-remag-teal/20">
                <div>
                  <span className="text-4xl font-black italic text-remag-blue-deep block leading-none">100%</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-remag-teal italic">Presencia y capital magallánico</span>
                </div>
                <div>
                  <span className="text-4xl font-black italic text-remag-blue-deep block leading-none">24/7</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-remag-teal italic">Capacidad logística adaptada al clima invernal</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. Misión y Desafío Section (Fondo Oscuro) */}
      <section className="py-24 bg-remag-blue-deep text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border-[1px] border-white organic-border rotate-12" />
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 max-w-6xl mx-auto">
            {/* EL DESAFÍO */}
            <div className="p-10 md:p-16 space-y-8 bg-remag-blue-deep">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-remag-green" />
                <span className="text-[10px] font-display font-black tracking-[0.3em] text-remag-green">02 // El Desafío</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight leading-none">
                Lo que está en juego
              </h2>
              <p className="text-lg font-sans font-bold text-remag-teal italic leading-relaxed">
                Sin una gestión experta en origen, los residuos no solo saturan el territorio: degradan los ecosistemas subantárticos, afectan la salud comunitaria y exponen a las organizaciones a graves incumplimientos legales.
              </p>
              <p className="text-sm font-sans font-normal text-white/50 leading-relaxed">
                Aportamos confianza, infraestructura y operación en una industria compleja donde cada detalle importa.
              </p>
            </div>

            {/* HOY REMAG ES */}
            <div className="p-10 md:p-16 space-y-8 bg-remag-blue-deep">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-remag-teal" />
                <span className="text-[10px] font-display font-black tracking-[0.3em] text-remag-teal">Nuestra Realidad</span>
              </div>
              <h3 className="text-2xl font-display font-black uppercase tracking-tight text-white">
                Hoy REMAG es:
              </h3>
              <div className="space-y-6">
                {[
                  { title: "Gestor Autorizado Ley REP", desc: "Operamos bajo el marco de la Responsabilidad Extendida del Productor, entregando el respaldo legal que exigen las auditorías." },
                  { title: "Partner de Continuidad Operativa", desc: "Diseñamos logística de retiro a medida para empresas pesadas, constructoras e instituciones públicas." },
                  { title: "Articulador de Economía Circular", desc: "Conectamos los residuos clasificados con industrias de valorización a nivel nacional, evitando el vertedero." }
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-remag-teal/20 border border-remag-teal flex items-center justify-center text-remag-teal text-xs font-bold shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <span className="text-base font-display font-black uppercase tracking-tight text-white block">
                        {point.title}
                      </span>
                      <span className="text-xs font-sans font-normal text-white/40 mt-1 block">
                        {point.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Nuestros Valores Section */}
      <section className="py-24 bg-white relative">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-display font-black uppercase tracking-widest text-remag-teal">03 // NUESTROS VALORES</span>
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-remag-blue-deep mt-4 mb-6 tracking-tight">
                Principios que guían la operación
              </h2>
              <p className="text-remag-gray-text max-w-2xl mx-auto text-base font-sans font-normal">
                Trabajamos con excelencia operativa y compromiso regional ético para asegurar la continuidad de tu negocio y la salud de Magallanes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                <div key={idx} className="bg-remag-gray-light/50 border border-remag-blue-deep/5 p-8 rounded-3xl flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm text-remag-teal">
                      {val.icon}
                    </div>
                    <h4 className="text-lg font-display font-black uppercase text-remag-blue-deep tracking-tight">
                      {val.title}
                    </h4>
                    <p className="text-sm font-sans font-normal text-remag-gray-text leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
