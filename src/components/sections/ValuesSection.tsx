"use client";
import { motion } from "framer-motion";
import { Container, SectionTitle } from "@/components/ui";
import { values } from "@/data";
import { Shield, Users, Mountain, Truck, Heart, Target } from "lucide-react";

const icons: Record<string, any> = {
  Shield, Users, Mountain, Truck, Heart
};

export const ValuesSection = () => {
  return (
    <section id="diferenciacion" className="py-40 bg-[#f0f7f6] text-remag-blue-deep relative overflow-hidden">
      {/* Background Tech Detail */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none tactic-grid" />
      
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-24">
          <div className="max-w-3xl">
            <SectionTitle 
              subtitle="04 // Por qué Remag"
              title="No somos una sucursal. Somos Magallanes."
            />
          </div>
          <div className="max-w-md border-l-2 border-remag-teal pl-6">
            <p className="text-lg font-sans font-normal text-remag-teal leading-tight">
              Aquí no aplicamos modelos estándar.
            </p>
            <p className="text-sm font-sans font-normal text-remag-gray-text mt-2">
              Diseñamos soluciones desde el territorio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value, index) => {
            const Icon = icons[value.icon] || Target;
            return (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-white shadow-sm border border-gray-100 organic-border group hover:border-remag-teal hover:shadow-md transition-all duration-500"
              >
                <div className="mb-6 text-remag-teal group-hover:scale-110 transition-transform duration-500">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-display font-black uppercase tracking-wider text-remag-blue-deep mb-2">
                  {value.title}
                </h4>
                <div className="h-[1px] w-8 bg-remag-green mb-4 opacity-50" />
                <p className="text-xs font-sans font-normal text-remag-gray-text leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
