"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, SectionTitle } from "@/components/ui";
import { CheckCircle2, ChevronDown } from "lucide-react";

export const EducationSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const contents = [
    {
      question: "¿Qué diferencia hay entre Punto Limpio y Punto Verde?",
      answer: "Un Punto Verde es un contenedor sencillo para clasificar ciertos materiales (como botellas plásticas o vidrio). Un Punto Limpio es una instalación más grande y atendida por personal, diseñada para recibir una mayor variedad de residuos de forma segregada y asegurar un pre-tratamiento antes de su envío a plantas de valorización."
    },
    {
      question: "Cómo preparar vidrio, cartón, plástico y metal para reciclar",
      answer: "Aplica la regla de oro: vaciar todo el contenido, enjuagar residuos orgánicos, secar (fundamental para papeles y cartón) y aplastar para reducir el volumen de botellas, cajas y latas, optimizando el transporte logístico."
    },
    {
      question: "Qué significan los números del plástico",
      answer: "Identifican el tipo de resina plástica (del 1 al 7). Por ejemplo, el 1 es PET (botellas de bebidas), el 2 es PEAD (envases de shampoo, detergentes), el 4 es PEBD (bolsas y film), y el 6 es EPS (plumavit). Conocerlos ayuda a separarlos de forma correcta."
    },
    {
      question: "Qué residuos no deben ir a un Punto Limpio",
      answer: "No se deben depositar colillas de cigarro, servilletas o papeles sucios, envases que contuvieron sustancias tóxicas (como pinturas, aceites de motor o pesticidas), espejos, ampolletas ni plumavit, ya que contaminan los lotes limpios."
    },
    {
      question: "Qué es la trazabilidad de residuos",
      answer: "Es el registro detallado que permite seguir la ruta de un residuo desde su generación en la empresa o punto limpio, pasando por su transporte y pre-tratamiento en REMAG, hasta su destino final en una planta de reciclaje certificada."
    },
    {
      question: "Qué es la Ley REP y cómo impacta a las empresas",
      answer: "Es la Responsabilidad Extendida del Productor, que obliga a las empresas que importan o fabrican productos prioritarios (como envases y embalajes) a organizar y financiar su recolección y reciclaje, arriesgando multas severas si no cumplen las metas."
    },
    {
      question: "Qué ocurre con los residuos después de ser reciclados",
      answer: "Se procesan para transformarse en nuevas materias primas: el plástico se tritura en pellets para fabricar nuevos envases; el cartón se vuelve pulpa para nuevas cajas; y el vidrio y metal se funden infinitamente para crear nuevos productos."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="educacion" className="py-40 bg-remag-bg-complement text-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Column: Interactive Q&A Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 w-full"
          >
            <div className="grid grid-cols-1 gap-4">
              {contents.map((item, i) => {
                const isActive = activeIndex === i;
                return (
                  <div 
                    key={i}
                    onClick={() => toggleAccordion(i)}
                    className="flex flex-col p-6 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-6 w-full">
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
                        isActive ? "border-white bg-white text-remag-teal" : "border-white/20 text-white/70 group-hover:text-white group-hover:border-white/40"
                      }`}>
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-[11px] font-display font-black uppercase tracking-wider leading-tight text-left">
                        {item.question}
                      </span>
                      <ChevronDown 
                        size={20} 
                        className={`ml-auto shrink-0 transition-transform duration-300 ${
                          isActive ? "rotate-180 text-white" : "text-white/40 group-hover:text-white"
                        }`} 
                      />
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 pb-2 pl-16 text-sm font-sans font-normal text-white/80 leading-relaxed text-left">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
 
          {/* Right Column: Title and Quote */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 order-1 lg:order-2 lg:sticky lg:top-32"
          >
            <SectionTitle 
              subtitle="Conciencia Ambiental"
              title="Aprender para reciclar mejor"
              light
            />
            <p className="text-lg font-sans font-normal text-white/80 leading-relaxed">
              Una parte fundamental de nuestro trabajo es educar. Queremos que más personas, empresas y comunidades comprendan qué pasa con los residuos, cómo se clasifican y por qué es importante gestionarlos de forma responsable desde el territorio.
            </p>
            
            <div className="pt-12 border-t border-white/10">
               <blockquote className="text-2xl md:text-4xl font-display font-black italic text-white leading-none tracking-tight uppercase">
                 "Cuando entendemos el recorrido de un residuo, también entendemos el impacto de nuestras decisiones."
               </blockquote>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
