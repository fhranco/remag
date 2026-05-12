"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Container, SectionTitle } from "@/components/ui";
import { valueChain } from "@/data";

export const ValueChainSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-40 bg-remag-gray-light relative overflow-hidden" ref={containerRef}>
      <Container>
        <div className="mb-32 text-center">
          <SectionTitle 
            subtitle="El Ciclo Remag"
            title="De la generación del residuo a una nueva oportunidad"
            align="center"
          />
          <p className="mt-8 text-xl font-medium text-remag-gray-text italic max-w-2xl mx-auto">
            En REMAG entendemos la gestión de residuos como una cadena donde cada etapa importa. No solo movemos residuos, activamos procesos sostenibles.
          </p>
        </div>

        {/* TIMELINE DESKTOP */}
        <div className="hidden lg:block relative py-20">
          {/* Progress Bar Background */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-remag-blue-deep/10 -translate-y-1/2" />
          {/* Animated Progress Bar */}
          <motion.div 
            style={{ scaleX }}
            className="absolute top-1/2 left-0 w-full h-[2px] bg-remag-teal -translate-y-1/2 origin-left"
          />

          <div className="grid grid-cols-5 gap-12 relative z-10">
            {valueChain.map((item, index) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-8 text-center"
              >
                <div className="w-16 h-16 bg-white border-2 border-remag-teal rounded-full mx-auto flex items-center justify-center text-remag-teal font-black text-xl italic group-hover:bg-remag-teal group-hover:text-white transition-all duration-500">
                  {item.step}
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-black uppercase italic tracking-tighter text-remag-blue-deep">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-remag-gray-text italic leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TIMELINE MOBILE */}
        <div className="lg:hidden space-y-16">
          {valueChain.map((item, index) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-8 items-start"
            >
              <div className="shrink-0 w-12 h-12 bg-white border-2 border-remag-teal rounded-full flex items-center justify-center text-remag-teal font-black italic">
                {item.step}
              </div>
              <div className="space-y-2 pt-2">
                <h4 className="text-xl font-black uppercase italic tracking-tighter text-remag-blue-deep">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-remag-gray-text italic leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 pt-20 border-t border-remag-blue-deep/5 text-center">
          <blockquote className="text-3xl md:text-5xl font-black italic text-remag-blue-deep leading-none tracking-tighter uppercase max-w-4xl mx-auto">
             "No solo movemos residuos. Activamos procesos que ayudan a construir una región más sostenible."
          </blockquote>
        </div>
      </Container>
    </section>
  );
};
