"use client";
import { motion } from "framer-motion";
import { Container, SectionTitle } from "@/components/ui";

export const PurposeSection = () => {
  return (
    <section className="py-40 bg-remag-gray-light overflow-hidden relative tactic-grid">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative aspect-square bg-remag-blue-deep organic-border overflow-hidden shadow-2xl flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-remag-teal/20 via-transparent to-black/40" />
               <h3 className="text-[12rem] font-black italic text-white/5 uppercase leading-none select-none tracking-tighter">
                 PTG
               </h3>
               <div className="absolute bottom-10 left-10 right-10 p-8 glass-card">
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] text-remag-teal italic block mb-2">Base de Operaciones</span>
                  <p className="text-lg font-bold text-white uppercase italic leading-none">Punta Arenas // Magallanes</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-10 order-1 lg:order-2"
          >
            <SectionTitle 
              subtitle="Soberanía Ambiental"
              title="Desde el fin del mundo para el futuro"
            />
            
            <p className="text-xl font-bold text-remag-blue-deep italic uppercase tracking-tighter leading-tight">
              REMAG es un compromiso táctico con el territorio austral.
            </p>
            <p className="text-base font-medium text-remag-gray-text italic leading-relaxed">
              Nacimos en Magallanes y entendemos que la gestión de residuos en climas extremos requiere ingeniería local, logística robusta y una responsabilidad inquebrantable.
            </p>

            <div className="grid grid-cols-2 gap-10 pt-8 border-t border-remag-teal/20">
               <div>
                 <span className="text-4xl font-black italic text-remag-blue-deep block leading-none">100%</span>
                 <span className="text-[9px] font-black uppercase tracking-widest text-remag-teal italic">Regional</span>
               </div>
               <div>
                 <span className="text-4xl font-black italic text-remag-blue-deep block leading-none">24/7</span>
                 <span className="text-[9px] font-black uppercase tracking-widest text-remag-teal italic">Operativo</span>
               </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
