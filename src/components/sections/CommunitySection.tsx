"use client";
import { motion } from "framer-motion";
import { Container, SectionTitle, Button } from "@/components/ui";
import { Info, MapPin, CheckCircle2 } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section id="comunidad" className="py-40 bg-white relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-remag-blue-deep organic-border overflow-hidden group shadow-2xl"
          >
             <img 
               src="/remag_people_community_1778584918810.png" 
               alt="Community Engagement" 
               className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-remag-blue-deep/60 to-transparent opacity-60" />
             <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-remag-teal italic">Factor Humano // Educación</span>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <SectionTitle 
              subtitle="Participación Activa"
              title="Reciclar también parte por casa"
            />
            <p className="text-lg font-medium text-remag-gray-text italic leading-relaxed">
              El reciclaje no depende solo de las empresas o instituciones. También comienza con las decisiones cotidianas de cada persona. Queremos acercar la gestión de residuos a la comunidad, entregando información clara.
            </p>

            <div className="space-y-8">
               <h4 className="text-xl font-black uppercase italic tracking-tighter text-remag-blue-deep">Recomendaciones:</h4>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Lleva materiales limpios y secos.",
                    "No dejes basura fuera de contenedores.",
                    "Revisa qué residuos recibe cada punto.",
                    "Separa correctamente antes de reciclar."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm font-medium text-remag-gray-text italic">
                       <CheckCircle2 className="text-remag-green shrink-0" size={18} />
                       {text}
                    </li>
                  ))}
               </ul>
            </div>

            <Button variant="outline">CONOCE DÓNDE RECICLAR</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

import { Users } from "lucide-react";
