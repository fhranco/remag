"use client";
import { motion } from "framer-motion";
import { Container, SectionTitle, Button } from "@/components/ui";
import { priorityProducts } from "@/data";
import { Info, ShieldCheck, ArrowRight } from "lucide-react";

export const LeyRepSection = () => {
  return (
    <section id="ley-rep" className="py-40 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <SectionTitle 
              subtitle="Marco Normativo"
              title="¿Qué es la Ley REP?"
            />
            <div className="space-y-8 text-lg font-medium text-remag-gray-text italic leading-relaxed">
              <p>
                La Ley REP, o Responsabilidad Extendida del Productor, establece que las empresas que introducen ciertos productos al mercado deben hacerse responsables de su gestión una vez que terminan su vida útil.
              </p>
              <p>
                Esta normativa busca reducir el impacto ambiental de los residuos y promover una economía circular, donde los materiales puedan recuperarse, reciclarse o valorizarse correctamente.
              </p>
            </div>

            <div className="p-10 bg-remag-gray-light organic-border border-l-8 border-remag-teal">
              <h4 className="text-xl font-black uppercase italic tracking-tighter text-remag-blue-deep mb-4">¿Cómo puede ayudarte REMAG?</h4>
              <p className="text-sm font-medium text-remag-gray-text italic mb-8">
                Apoyamos a empresas que necesitan gestionar residuos de manera responsable, trazable y alineada con la normativa vigente. Te ayudamos a entender tus obligaciones ambientales.
              </p>
              <Button variant="primary" className="!py-3 !px-6">SOLICITAR ORIENTACIÓN</Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-remag-teal italic">Productos Prioritarios</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {priorityProducts.map((product, i) => (
                <motion.div 
                  key={product}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-8 bg-remag-blue-deep text-white group hover:bg-remag-teal transition-all duration-500 flex flex-col justify-between aspect-square sm:aspect-auto"
                >
                  <div className="mb-8">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                      <ShieldCheck size={20} className="text-remag-green" />
                    </div>
                    <span className="text-lg font-black uppercase italic tracking-tighter leading-tight">
                      {product}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[8px] font-black tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                    GESTIÓN TRAZABLE <ArrowRight size={10} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
