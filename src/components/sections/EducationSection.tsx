"use client";
import { motion } from "framer-motion";
import { Container, SectionTitle } from "@/components/ui";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

export const EducationSection = () => {
  const contents = [
    "¿Qué diferencia hay entre Punto Limpio y Punto Verde?",
    "Cómo preparar vidrio, cartón, plástico y metal para reciclar",
    "Qué significan los números del plástico",
    "Qué residuos no deben ir a un Punto Limpio",
    "Qué es la trazabilidad de residuos",
    "Qué es la Ley REP y cómo impacta a las empresas",
    "Qué ocurre con los residuos después de ser reciclados"
  ];

  return (
    <section id="educacion" className="py-40 bg-remag-gray-light overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-1 gap-4">
              {contents.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-white hover:bg-remag-teal hover:text-white transition-all duration-500 cursor-default group"
                >
                  <div className="w-10 h-10 rounded-full border border-remag-teal/20 flex items-center justify-center text-remag-teal group-hover:text-white group-hover:border-white/20 transition-colors">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest italic leading-tight">
                    {item}
                  </span>
                  <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 order-1 lg:order-2"
          >
            <SectionTitle 
              subtitle="Conciencia Ambiental"
              title="Aprender para reciclar mejor"
            />
            <p className="text-lg font-medium text-remag-gray-text italic leading-relaxed">
              Una parte fundamental de nuestro trabajo es educar. Queremos que más personas, empresas y comunidades comprendan qué pasa con los residuos, cómo se clasifican y por qué es importante gestionarlos de forma responsable.
            </p>
            
            <div className="pt-12 border-t border-remag-teal/20">
               <blockquote className="text-2xl md:text-4xl font-black italic text-remag-blue-deep leading-none tracking-tighter uppercase">
                 "Cuando entendemos el recorrido de un residuo, también entendemos el impacto de nuestras decisiones."
               </blockquote>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
