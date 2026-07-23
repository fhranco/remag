"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";
import { Building2, Factory, ShieldCheck, Recycle, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  id: number;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  posClass: string;
  details: {
    items: {
      subtitle: string;
      text?: string;
      button?: { text: string; href: string };
    }[];
    tags?: string[];
    badges?: string[];
  };
}

const services: ServiceItem[] = [
  {
    id: 0,
    title: "Gestor Local REP",
    shortDesc: "Administración de Puntos Limpios, asesoría normativa y educación ambiental.",
    icon: <Building2 className="w-7 h-7 md:w-8 md:h-8 stroke-[1.5]" />,
    // Top position
    posClass: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    details: {
      items: [
        {
          subtitle: "Administración de Puntos Limpios y PV",
          button: { text: "Conocer más (Qué, Cómo, Dónde)", href: "#guia-reciclaje" }
        },
        {
          subtitle: "Asesor Ley REP",
          text: "Gestiona tus residuos con nosotros y cumple con la normativa vigente.",
          button: { text: "Saber + Ley REP", href: "/ley-rep" }
        },
        {
          subtitle: "Educación Ambiental",
          text: "Talleres y sensibilización para municipios y comunidades."
        }
      ]
    }
  },
  {
    id: 1,
    title: "Servicios Industriales",
    shortDesc: "Acondicionamiento en origen, logística especializada y valorización para industrias clave.",
    icon: <Factory className="w-7 h-7 md:w-8 md:h-8 stroke-[1.5]" />,
    // Right position
    posClass: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
    details: {
      items: [
        { subtitle: "Manejo de Residuos", text: "Acondicionamiento y Pretratamiento en origen." },
        { subtitle: "Transporte y Equipos de Apoyo", text: "Flota de camiones y equipos móviles adecuados a cada cliente." },
        { subtitle: "Valorización y Limpieza", text: "Limpiezas de Patios y Acopio con Disposición Final." }
      ],
      tags: [
        "Salmoneras",
        "Construcción y Demolición",
        "Comercio y Grandes Tiendas",
        "Operadores Logísticos",
        "Ganadería",
        "Hidrógeno Verde",
        "Hotelería y Turismo"
      ]
    }
  },
  {
    id: 2,
    title: "Trazabilidad y Cumplimiento",
    shortDesc: "Planta autorizada, Ventanilla Única y reportabilidad en tiempo real.",
    icon: <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 stroke-[1.5]" />,
    // Bottom position
    posClass: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    details: {
      items: [
        {
          subtitle: "Permisos y Autorizaciones",
          text: "Planta de Tratamiento Autorizada y gestor con establecimiento registrado en Ventanilla Única."
        },
        {
          subtitle: "Reportabilidad y Trazabilidad",
          text: "Plataforma interna de Monitoring con informes mensuales de gestión por cliente."
        }
      ],
      badges: ["SINADER", "REP", "Seremi MMA"]
    }
  },
  {
    id: 3,
    title: "Gestión de Residuos",
    shortDesc: "Recepción, pretratamiento y valorización de múltiples líneas de residuos.",
    icon: <Recycle className="w-7 h-7 md:w-8 md:h-8 stroke-[1.5]" />,
    // Left position
    posClass: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
    details: {
      items: [
        {
          subtitle: "Residuos Sólidos No Peligrosos",
          text: "Pretratamiento y valorización: Plásticos, Cartones y Papeles, Metales, Vidrio, Tetrapak."
        },
        {
          subtitle: "Residuos Voluminosos y Chatarra",
          text: "Boyas, Flotadores, Cabos y chatarra industrial."
        },
        {
          subtitle: "Basura con Disposición Final",
          text: "Gestión responsable de residuos finales no valorizables."
        },
        {
          subtitle: "En Proceso de Incorporación",
          text: "Residuos de Construcción y Demolición (RCD) & RESPEL."
        }
      ]
    }
  }
];

export const ServicesSection = () => {
  const [activeId, setActiveId] = useState(0);
  const activeService = services[activeId];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white relative overflow-hidden w-full min-h-screen flex flex-col justify-center">
      {/* Background vertical subtle lines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-around">
        <div className="w-px h-full bg-black/[0.03]"></div>
        <div className="w-px h-full bg-black/[0.03]"></div>
        <div className="w-px h-full bg-black/[0.03]"></div>
        <div className="w-px h-full bg-black/[0.03]"></div>
      </div>

      <Container className="relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-remag-blue-deep mb-3 tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-xs md:text-sm font-sans font-bold uppercase tracking-[0.2em] text-remag-teal mb-4">
            Gestión Integral de Residuos
          </p>
          <p className="text-sm md:text-base font-sans font-normal text-remag-gray-text max-w-4xl mx-auto leading-relaxed">
            REMAG es un actor local en la región de Magallanes que busca ser un partner estratégico<br className="hidden md:inline" />{" "}
            en la gestión integral de residuos con los municipios, industrias y con la comunidad.
          </p>
        </div>

        {/* Main Grid: Orbit + Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Orbital Selector (Left / Top on mobile) */}
          <div className="lg:col-span-5 flex justify-center py-6">
            <div className="relative w-[260px] xs:w-[300px] sm:w-[360px] md:w-[400px] aspect-square">
              
              {/* Thin Orbit Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-remag-teal/20 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-6 rounded-full border border-black/5"></div>
              
              {/* Central Active Service Overview */}
              <div className="absolute inset-[16%] bg-remag-gray-light rounded-full shadow-[inset_0_2px_12px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center text-center p-6 border border-remag-teal/10">
                <div className="p-3 rounded-full bg-remag-teal/10 text-remag-teal mb-3">
                  {activeService.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-display font-black uppercase text-remag-blue-deep mb-2 tracking-tight leading-tight">
                  {activeService.title}
                </h3>
                <p className="text-xs text-remag-gray-text font-sans line-clamp-3 leading-snug">
                  {activeService.shortDesc}
                </p>
              </div>

              {/* 4 Orbit Nodes (N, E, S, W) */}
              {services.map((service) => {
                const isActive = service.id === activeId;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveId(service.id)}
                    className={`absolute ${service.posClass} w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-md hover:scale-110 z-20 focus:outline-none focus:ring-4 focus:ring-remag-teal/30 group
                      ${isActive 
                        ? 'bg-remag-teal text-white ring-4 ring-remag-teal/20 scale-105' 
                        : 'bg-remag-blue-deep text-white/80 hover:bg-remag-blue-deep/90 hover:text-white'
                      }
                    `}
                    aria-label={service.title}
                  >
                    <div className={isActive ? "scale-110 transition-transform" : "scale-100 group-hover:scale-105 transition-transform"}>
                      {service.icon}
                    </div>
                    <span className="text-[9px] font-sans font-bold uppercase tracking-wider mt-1 opacity-90 hidden sm:block max-w-[60px] truncate">
                      {service.title.split(' ')[0]}
                    </span>
                  </button>
                );
              })}

            </div>
          </div>

          {/* Interactive Details Panel (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-remag-gray-light/60 backdrop-blur-sm border border-remag-teal/15 rounded-3xl p-6 md:p-8 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* Header info */}
                  <div className="flex items-center gap-3 border-b border-black/10 pb-4">
                    <div className="p-3 rounded-xl bg-remag-blue-deep text-white">
                      {activeService.icon}
                    </div>
                    <div>
                      <span className="text-xs font-sans font-bold uppercase tracking-widest text-remag-teal">
                        Servicio 0{activeService.id + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-black uppercase text-remag-blue-deep leading-tight">
                        {activeService.title}
                      </h3>
                    </div>
                  </div>

                  {/* List of sub-services */}
                  <div className="space-y-4">
                    {activeService.details.items.map((item, idx) => (
                      <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-black/5 hover:border-remag-teal/30 transition-colors">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-remag-teal shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-display font-bold text-base text-remag-blue-deep uppercase">
                              {item.subtitle}
                            </h4>
                            {item.text && (
                              <p className="text-sm text-remag-gray-text font-sans mt-1 leading-relaxed">
                                {item.text}
                              </p>
                            )}
                            {item.button && (
                              <Link
                                href={item.button.href}
                                className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-remag-teal/10 hover:bg-remag-teal hover:text-white text-remag-teal text-xs font-sans font-bold rounded-xl transition-all group"
                              >
                                <span>{item.button.text}</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Industry Tags if present */}
                  {activeService.details.tags && (
                    <div className="pt-2">
                      <p className="text-xs font-sans font-bold uppercase tracking-wider text-remag-blue-deep mb-2">
                        Sectores Atendidos:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {activeService.details.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 bg-remag-blue-deep/5 text-remag-blue-deep text-xs font-sans font-semibold rounded-full border border-remag-blue-deep/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Badges if present */}
                  {activeService.details.badges && (
                    <div className="pt-2">
                      <p className="text-xs font-sans font-bold uppercase tracking-wider text-remag-blue-deep mb-2">
                        Registros y Certificaciones:
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {activeService.details.badges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="px-4 py-2 bg-remag-green/10 text-remag-green text-xs font-display font-black uppercase tracking-wider rounded-xl border border-remag-green/20 flex items-center gap-1.5"
                          >
                            <ShieldCheck className="w-4 h-4" /> {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};
