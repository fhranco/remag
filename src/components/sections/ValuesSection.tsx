"use client";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { values } from "@/data";
import { Target, Eye, Shield, Users, Leaf } from "lucide-react";

const icons: Record<string, any> = {
  Target, Eye, Shield, Users, Leaf
};

export const ValuesSection = () => {
  return (
    <section className="py-32 bg-remag-blue-deep relative overflow-hidden">
      {/* Background Tech Detail */}
      <div className="absolute inset-0 opacity-5 pointer-events-none tactic-grid" />
      
      <Container>
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
                className="flex flex-col items-center text-center p-8 glass-card organic-border group hover:border-remag-teal transition-all duration-500"
              >
                <div className="mb-6 text-remag-teal group-hover:scale-110 transition-transform duration-500">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest text-white mb-2 italic">
                  {value.title}
                </h4>
                <div className="h-[1px] w-8 bg-remag-green mb-4 opacity-50" />
                <p className="text-[10px] font-medium text-white/40 italic leading-relaxed uppercase tracking-tighter">
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
