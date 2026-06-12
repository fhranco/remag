"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";
import { Trash2, Package, Network, Truck, Inbox } from "lucide-react";

const services = [
  {
    id: 0,
    title: "Gestión de Residuos",
    description: "Recolección, clasificación y disposición final de residuos, asegurando el cumplimiento de los estándares ambientales y normativos.",
    icon: <Trash2 className="w-8 h-8 stroke-[1.5]" />,
    posClass: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: 1,
    title: "Valorización de Materiales",
    description: "Transformamos los residuos en recursos a través de procesos de reciclaje y acondicionamiento para nuevas cadenas de valor.",
    icon: <Package className="w-8 h-8 stroke-[1.5]" />,
    posClass: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  },
  {
    id: 2,
    title: "Proyectos Circulares",
    description: "Diseñamos, implementamos y promovemos estrategias y soluciones para corregir las externalidades negativas y fomentamos las externalidades positivas de las empresas a múltiples partes interesadas.",
    icon: <Network className="w-8 h-8 stroke-[1.5]" />,
    posClass: "bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2",
  },
  {
    id: 3,
    title: "Logística y Transporte",
    description: "Flota especializada para el transporte seguro y eficiente de materiales, optimizando rutas y reduciendo la huella de carbono operacional.",
    icon: <Truck className="w-8 h-8 stroke-[1.5]" />,
    posClass: "bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2",
  },
  {
    id: 4,
    title: "Recepción de Materiales",
    description: "Puntos de acopio acondicionados para la recepción eficiente de materiales reciclables, con trazabilidad desde el origen.",
    icon: <Inbox className="w-8 h-8 stroke-[1.5]" />,
    posClass: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
  }
];

export const ServicesSection = () => {
  const [activeId, setActiveId] = useState(2);

  return (
    <section id="servicios" className="py-16 md:py-20 bg-white relative overflow-hidden w-full">
      {/* Background vertical subtle lines as in image */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-around">
        <div className="w-px h-full bg-black/[0.03]"></div>
        <div className="w-px h-full bg-black/[0.03]"></div>
        <div className="w-px h-full bg-black/[0.03]"></div>
        <div className="w-px h-full bg-black/[0.03]"></div>
      </div>

      <Container className="relative z-10">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-remag-blue-deep mb-4 tracking-tight">Nuestros Servicios</h2>
          <p className="text-sm font-sans font-normal uppercase tracking-[0.2em] text-remag-teal">
            Gestión Integral de Residuos
          </p>
        </div>

        {/* Orbital Layout Container */}
        <div className="relative w-full max-w-[500px] mx-auto aspect-square my-10">
          
          {/* Thin Orbit Ring */}
          <div className="absolute inset-0 rounded-full border border-black/10"></div>
          
          {/* Central Large Circle */}
          <div className="absolute inset-[18%] bg-[#f4f4f4] rounded-full shadow-[inset_0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center p-6 md:p-10 transition-all duration-500 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                {/* Active Icon Colored */}
                <div className="text-remag-teal mb-3 md:mb-4">
                  {services[activeId].icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-display font-black uppercase text-remag-blue-deep mb-2 tracking-tight">
                  {services[activeId].title}
                </h3>
                
                <p className="text-xs md:text-sm font-sans text-gray-500 leading-relaxed font-normal max-w-[280px]">
                  {services[activeId].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Orbit Nodes */}
          {services.map((service) => {
            const isActive = service.id === activeId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`absolute ${service.posClass} w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.08)] hover:scale-110 z-20 focus:outline-none focus:ring-4 focus:ring-remag-teal/30
                  ${isActive 
                    ? 'bg-remag-teal text-white' 
                    : 'bg-black text-white hover:bg-gray-900'
                  }
                `}
                aria-label={service.title}
              >
                <div className={isActive ? "scale-110 transition-transform" : "scale-100 transition-transform"}>
                  {service.icon}
                </div>
              </button>
            );
          })}

        </div>

      </Container>
    </section>
  );
};
