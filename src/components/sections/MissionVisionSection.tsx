"use client";
import { motion } from "framer-motion";
import { Container, SectionTitle } from "@/components/ui";

export const MissionVisionSection = () => {
  return (
    <section className="py-40 bg-remag-dark-bg text-white relative overflow-hidden">
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border-[1px] border-white organic-border rotate-12" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {/* MISIÓN */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 lg:p-24 space-y-12 bg-remag-dark-bg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-remag-green" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-remag-green italic">Nuestra Misión</span>
            </div>
            <p className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.95]">
              Impulsar la economía circular en la Región de Magallanes.
            </p>
            <p className="text-lg font-medium text-white/50 italic leading-relaxed">
              Promoviendo la gestión responsable de residuos, el reciclaje y la valorización de recursos, generando impacto positivo en las comunidades, el territorio y el medioambiente.
            </p>
          </motion.div>

          {/* VISIÓN */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-16 lg:p-24 space-y-12 bg-remag-dark-bg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-remag-teal" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-remag-teal italic">Nuestra Visión</span>
            </div>
            <p className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.95]">
              Ser un referente regional en regeneración ambiental.
            </p>
            <p className="text-lg font-medium text-white/50 italic leading-relaxed">
              Liderando la transición hacia un futuro sostenible, donde la eficiencia operativa y el impacto ambiental y social positivo sean parte del estándar de toda industria.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
