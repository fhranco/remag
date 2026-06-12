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

        {/* 🏔️ CONCEPTO EMOCIONAL */}
        <div className="mt-40 pt-20 border-t border-remag-blue-deep/10 text-center max-w-4xl mx-auto space-y-8">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-remag-teal italic block">
            Cómo lo explicamos fácil
          </span>
          <blockquote className="text-3xl md:text-5xl font-black italic text-remag-blue-deep leading-none tracking-tighter uppercase">
             "Somos el capitán de un equipo que cuida la tierra."
          </blockquote>
          <p className="text-lg font-medium text-remag-gray-text italic leading-relaxed">
            No lo hacemos solos. Es una cadena donde cada persona cumple un rol. Nuestro trabajo es facilitar, educar y acompañar para que juntos protejamos el único lugar que tenemos.
          </p>
        </div>

        {/* 🏔️ CULTURA Y VISIÓN */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 pt-20 border-t border-remag-blue-deep/10">
          {/* CULTURA */}
          <div className="space-y-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-remag-green italic block">
              Quiénes somos
            </span>
            <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-remag-blue-deep leading-none">
              Nuestra Cultura
            </h3>
            <p className="text-sm font-medium text-remag-gray-text italic">
              Un equipo que lidera con conocimiento, compromiso y sentido de propósito. REMAG es:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Cercano", desc: "pero técnico" },
                { title: "Directo", desc: "pero colaborativo" },
                { title: "Experto", desc: "pero en constante aprendizaje" },
                { title: "Orgullosamente", desc: "magallánico" }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white border border-black/5 hover:border-remag-green transition-all duration-300">
                  <span className="text-lg font-black uppercase italic tracking-tighter text-remag-blue-deep block">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-remag-teal italic">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* VISIÓN */}
          <div className="space-y-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-remag-teal italic block">
              Hacia dónde vamos
            </span>
            <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-remag-blue-deep leading-none">
              Nuestra Visión
            </h3>
            <p className="text-base font-bold text-remag-blue-deep italic uppercase tracking-tighter leading-snug">
              Queremos que Magallanes sea un referente global en sostenibilidad.
            </p>
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-remag-green italic block border-b border-black/5 pb-2">
                En 10 años buscamos:
              </span>
              <ul className="space-y-4">
                {[
                  "Una cultura ambiental activa en toda la región",
                  "Un sistema de economía circular consolidado",
                  "Una comunidad consciente y comprometida"
                ].map((goal, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-remag-gray-text italic">
                    <span className="w-1.5 h-1.5 bg-remag-teal rounded-full shrink-0" />
                    {goal}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-medium text-remag-gray-text/70 italic border-l-2 border-remag-green pl-4 pt-2">
                Trabajamos para que el concepto de “basura” desaparezca y sea reemplazado por “recurso”.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
