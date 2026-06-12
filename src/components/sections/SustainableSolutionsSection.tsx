"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { Scale, MapPin, GraduationCap, Leaf } from "lucide-react";

const metrics = [
  {
    id: 1,
    icon: <Scale className="w-12 h-12 stroke-[1.5]" />,
    value: "+55.000",
    unit: "Tn",
    label: "TONELADAS RECUPERADAS",
  },
  {
    id: 2,
    icon: <MapPin className="w-12 h-12 stroke-[1.5]" />,
    value: "+10",
    unit: "comunas",
    label: "COMUNAS OPERANDO",
  },
  {
    id: 3,
    icon: <GraduationCap className="w-12 h-12 stroke-[1.5]" />,
    value: "+500",
    unit: "actividades",
    label: "ACTIVIDADES Y TALLERES",
  },
  {
    id: 4,
    icon: <Leaf className="w-12 h-12 stroke-[1.5]" />,
    value: "+82.000",
    unit: "árboles",
    label: "BIOEQUIVALENCIA (CO2 COMPENSADO)",
  }
];

export const SustainableSolutionsSection = () => {
  return (
    <section id="impacto" className="relative py-24 md:py-32 overflow-hidden flex flex-col justify-center min-h-[70vh]">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-right"
        style={{ backgroundImage: "url('/impacto%20de%20nuestra%20gestion.webp')" }}
      />
      
      {/* Dark Gradient Overlays for Readability and Depth */}
      <div className="absolute inset-0 z-[1] bg-black/45" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-transparent to-black/80" />
      
      {/* Subtle Grid Lines (Optional, based on reference showing some grid structure) */}
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
 
      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Area */}
          <div className="mb-20 md:mb-28 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase text-white mb-6 tracking-tight">
                Impacto de Nuestra Gestión
              </h2>
              
              <p className="text-base md:text-lg font-sans text-white/80 leading-relaxed font-normal max-w-3xl mx-auto">
                Trabajamos cada día para regenerar ecosistemas y reducir la huella de nuestros clientes y aliados.
              </p>
            </motion.div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center group"
              >
                {/* Brand Teal Icon */}
                <div className="mb-6 text-remag-teal transition-transform duration-500 group-hover:scale-110">
                  {metric.icon}
                </div>
                
                {/* Number and Unit */}
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-xl md:text-2xl font-sans font-normal text-white/70">
                    {metric.unit}
                  </span>
                </div>
                
                {/* Small Uppercase Label */}
                <span className="text-[10px] md:text-xs font-display font-black uppercase tracking-[0.2em] text-white/70 mt-1">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
