"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, SectionTitle } from "@/components/ui";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const FAQSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const faqData: FAQCategory[] = [
    {
      category: "Servicios y Operación",
      items: [
        {
          question: "¿Qué tipo de residuos industriales y comerciales puede recibir y procesar REMAG?",
          answer: "Procesamos residuos no peligrosos valorizables, incluyendo cartones, papeles, plásticos de embalaje (film), maderas, metales férreos y no férreos, y vidrio. No recibimos residuos peligrosos ni orgánicos domiciliarios en nuestras plantas principales."
        },
        {
          question: "¿REMAG ofrece servicio de arriendo de contenedores y bateas de gran capacidad?",
          answer: "Sí. Disponemos de bateas de 10 a 30 metros cúbicos y contenedores industriales específicos para acopio temporal en faenas de construcción, industrias y eventos masivos, coordinando frecuencias de retiro adaptadas a la operación del cliente."
        },
        {
          question: "¿Cómo aseguran la continuidad operativa del servicio bajo condiciones climáticas adversas en Magallanes?",
          answer: "Toda nuestra flota de transporte y maquinaria está acondicionada para operar bajo temperaturas extremas y nieve. Contamos con protocolos de contingencia y plantas de acopio techadas con autonomía de almacenamiento para garantizar el retiro de residuos sin interrupciones."
        }
      ]
    },
    {
      category: "Trazabilidad y Normativa (Ley REP)",
      items: [
        {
          question: "¿Cómo certifica REMAG el destino final y la trazabilidad de los residuos gestionados?",
          answer: "Cada lote de residuos se pesa en báscula calibrada y se etiqueta digitalmente en el punto de recepción. Emitimos certificados de trazabilidad firmados por nuestro equipo de ingeniería, detallando la fecha, el volumen, el tipo de material y la planta de valorización de destino."
        },
        {
          question: "¿Los informes de REMAG son válidos para declarar en el RETC (Ventanilla Única)?",
          answer: "Sí. Al ser gestores autorizados y operar con registros de pesaje validados, entregamos la documentación técnica, facturas y reportes de masa consolidados con el formato exacto requerido por el Ministerio del Medio Ambiente para la declaración anual de residuos."
        },
        {
          question: "¿Qué rol cumple REMAG en el cumplimiento de la Ley REP para envases y embalajes?",
          answer: "Operamos como un gestor técnico autorizado dentro del ecosistema de la Ley REP (20.920). Habilitamos la recolección, clasificación y pretratamiento de residuos de envases y embalajes para integrarlos a los Grandes Sistemas de Gestión (GRANSIC) autorizados en Chile."
        }
      ]
    },
    {
      category: "Soluciones Municipales y Hogar",
      items: [
        {
          question: "¿Cómo colabora REMAG con las municipalidades de la región?",
          answer: "Diseñamos y administramos la infraestructura de reciclaje comunal, incluyendo puntos limpios móviles, puntos verdes fijos y campañas educativas de segregación para disminuir los costos municipales por disposición final en vertederos."
        },
        {
          question: "¿Pueden los ciudadanos llevar sus residuos directamente a las plantas de REMAG?",
          answer: "Contamos con puntos limpios habilitados para la recepción gratuita de materiales clasificados del hogar (cartón, plásticos PET y PEAD limpios, metales y vidrio). Los residuos deben entregarse limpios, secos y aplastados."
        }
      ]
    },
    {
      category: "Cobertura y Contacto",
      items: [
        {
          question: "¿Cuál es el área geográfica de cobertura para servicios industriales de REMAG?",
          answer: "Cubrimos la logística de retiro industrial en Punta Arenas, Puerto Natales y zonas industriales conectadas por vía terrestre. Para proyectos especiales en Tierra del Fuego o áreas insulares, evaluamos soluciones logísticas bimodales a medida."
        },
        {
          question: "¿Cómo puedo solicitar una cotización o un diagnóstico técnico para mi empresa?",
          answer: "Puedes rellenar el formulario en nuestra sección de contacto o escribir directamente a operaciones@remag.cl. Un ingeniero técnico coordinará una visita diagnóstica a tus instalaciones para evaluar volumen, espacio y plan de gestión adecuado."
        }
      ]
    }
  ];

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="py-40 bg-remag-gray-light overflow-hidden">
      <Container className="max-w-4xl">
        <div className="mb-20 text-center">
          <SectionTitle 
            subtitle="Resolución de Dudas"
            title="Respuestas claras para decisiones críticas"
            align="center"
          />
        </div>

        <div className="space-y-12">
          {faqData.map((categoryGroup, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-remag-teal italic border-b border-black/5 pb-2">
                {categoryGroup.category}
              </h4>
              <div className="space-y-4">
                {categoryGroup.items.map((item, itemIdx) => {
                  const id = `${catIdx}-${itemIdx}`;
                  const isOpen = activeId === id;
                  return (
                    <div 
                      key={itemIdx} 
                      className="bg-white border border-black/5 rounded-sm overflow-hidden transition-all duration-300 hover:border-remag-teal/40"
                    >
                      <button
                        onClick={() => toggleAccordion(id)}
                        className="w-full flex items-center justify-between p-8 text-left transition-colors hover:bg-remag-gray-light/30"
                      >
                        <span className="text-[13px] font-black uppercase tracking-tighter text-remag-blue-deep italic leading-snug pr-6">
                          {item.question}
                        </span>
                        <span className="text-remag-teal shrink-0">
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-8 pb-8 pt-2 border-t border-black/5">
                              <p className="text-sm font-medium text-remag-gray-text italic leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
