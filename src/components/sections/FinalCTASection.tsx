"use client";
import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";

export const FinalCTASection = () => {
  return (
    <section id="contacto" className="py-40 bg-remag-blue-deep relative overflow-hidden">
      {/* Cinematic Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square border-[1px] border-white/5 organic-border rotate-45 scale-150" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border-[1px] border-white/5 organic-border -rotate-12 scale-125" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="h-[2px] w-20 bg-remag-green" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.6em] text-remag-green italic">
              Compromiso Regional
            </span>
          </div>

          <h2 className="text-4xl md:text-[5rem] font-black uppercase tracking-tighter italic leading-[0.9] text-white">
            Gestiona tus residuos <br />
            con un <span className="text-remag-teal">partner real</span>
          </h2>

          <p className="text-xl md:text-2xl font-medium text-white/50 italic leading-relaxed max-w-2xl mx-auto">
            Ya seas empresa, municipio o ciudadano, REMAG es el aliado para una gestión responsable, eficiente y transparente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <Button variant="secondary" className="w-full sm:w-auto h-20 !px-12 !text-xs">Hablar con un especialista</Button>
            <Button variant="ghost" className="text-white hover:text-remag-teal !text-xs">Conocer puntos de reciclaje</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
