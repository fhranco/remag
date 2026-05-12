"use client";
import { motion } from "framer-motion";
import { Container, SectionTitle } from "@/components/ui";
import { services } from "@/data";
import { Recycle, Factory, ShieldCheck, LineChart, Truck, BookOpen, ArrowRight } from "lucide-react";

const icons: Record<string, any> = {
  Recycle, Factory, ShieldCheck, LineChart, Truck, BookOpen
};

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-40 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24 items-end">
          <div className="lg:col-span-8">
            <SectionTitle 
              subtitle="Soluciones"
              title="Gestión Técnica de Residuos"
            />
            <div className="mt-12 relative h-96 w-full overflow-hidden organic-border">
               <img 
                 src="/remag_truck_operation_1778584898577.png" 
                 alt="REMAG Operational Truck" 
                 className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-remag-blue-deep/60 to-transparent" />
               <div className="absolute bottom-8 left-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-remag-teal italic">Logística de Alta Precisión</span>
               </div>
            </div>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-sm font-medium text-remag-gray-text italic border-l-2 border-remag-green pl-6">
              Operamos con los estándares más altos de trazabilidad y responsabilidad ambiental en Magallanes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/5">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-12 border-r border-b border-black/5 hover:bg-remag-blue-deep transition-all duration-700 relative overflow-hidden flex flex-col min-h-[400px]"
              >
                <div className="mb-10 text-remag-teal group-hover:text-remag-green transition-colors">
                  <Icon size={48} strokeWidth={1} />
                </div>
                
                <div className="space-y-4 mb-10 flex-grow">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter text-remag-blue-deep group-hover:text-white leading-none">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-remag-gray-text italic group-hover:text-white/40 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.materials?.slice(0, 3).map(m => (
                    <span key={m} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-remag-gray-light text-remag-blue-deep italic group-hover:bg-white/10 group-hover:text-white">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-black/5 group-hover:border-white/10">
                   <span className="text-[10px] font-mono text-black/10 group-hover:text-white/10">0{index+1}_STATION</span>
                   <ArrowRight className="text-remag-teal group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
