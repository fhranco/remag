"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";
import { FileText, Recycle, Milk, Archive, Wine } from "lucide-react";

const materials = [
  {
    id: "papel",
    label: "PAPELES Y CARTONES",
    color: "#0c0c68",
    icon: <FileText className="w-8 h-8 md:w-10 md:h-10 mb-2 stroke-[1.5]" />,
    cycle: [
      { step: 1, title: "Recolección", desc: "Recopilación segregada en origen, evitando la contaminación cruzada con líquidos o restos orgánicos." },
      { step: 2, title: "Clasificación", desc: "Separación detallada por gramaje, tipo de fibra y limpieza del material." },
      { step: 3, title: "Compactación", desc: "Enfardado en bloques de alta densidad para optimizar su transporte hacia las plantas." },
      { step: 4, title: "Reciclaje", desc: "Proceso de hidropulpeo para crear nueva materia prima papelera o de cartón corrugado." }
    ]
  },
  {
    id: "plastico",
    label: "PLÁSTICOS",
    color: "#eac114",
    icon: <Recycle className="w-8 h-8 md:w-10 md:h-10 mb-2 stroke-[1.5]" />,
    cycle: [
      { step: 1, title: "Recolección", desc: "Acopio de envases plásticos provenientes de industrias y puntos limpios." },
      { step: 2, title: "Separación", desc: "Clasificación por tipo de resina (PET, PEAD, PEBD) y color." },
      { step: 3, title: "Triturado", desc: "Limpieza intensiva y trituración mecánica para obtener hojuelas limpias." },
      { step: 4, title: "Pelletizado", desc: "Extrusión y creación de nuevos pellets listos para inyección de nuevos productos." }
    ]
  },
  {
    id: "carton-liquidos",
    label: "CARTÓN LÍQUIDOS",
    color: "#cc9966",
    icon: <Milk className="w-8 h-8 md:w-10 md:h-10 mb-2 stroke-[1.5]" />,
    cycle: [
      { step: 1, title: "Recolección", desc: "Acopio de envases tipo Tetra Pak vacíos, enjuagados y aplastados." },
      { step: 2, title: "Hidropulpeo", desc: "Agitación en agua para separar la fibra de celulosa de las otras capas." },
      { step: 3, title: "Recuperación", desc: "Extracción del 75% de cartón para ser reciclado como papel kraft." },
      { step: 4, title: "PolyAl", desc: "El plástico y aluminio restantes se transforman en placas o mobiliario." }
    ]
  },
  {
    id: "metal",
    label: "METALES",
    color: "#a6a7a6",
    icon: <Archive className="w-8 h-8 md:w-10 md:h-10 mb-2 stroke-[1.5]" />,
    cycle: [
      { step: 1, title: "Recolección", desc: "Acopio de latas de aluminio, envases de hojalata y chatarra ferrosa." },
      { step: 2, title: "Separación", desc: "Uso de separación magnética y corrientes de Foucault para dividir los metales." },
      { step: 3, title: "Fundición", desc: "Derretido del material a altísimas temperaturas para formar lingotes." },
      { step: 4, title: "Laminado", desc: "Transformación en nuevas láminas metálicas para la industria automotriz y envasado." }
    ]
  },
  {
    id: "vidrio",
    label: "VIDRIO",
    color: "#1d9a38",
    icon: <Wine className="w-8 h-8 md:w-10 md:h-10 mb-2 stroke-[1.5]" />,
    cycle: [
      { step: 1, title: "Recolección", desc: "Acopio masivo en campanas específicas y directamente de industrias." },
      { step: 2, title: "Clasificación", desc: "Separación estricta por color (transparente, ámbar, verde) y extracción de tapas." },
      { step: 3, title: "Molienda", desc: "Trituración controlada para obtener 'calcín', el vidrio molido listo para hornos." },
      { step: 4, title: "Nuevos Envases", desc: "Fundición infinita para crear nuevas botellas, sin perder calidad ni pureza." }
    ]
  }
];

export const MaterialsCycleSection = () => {
  const [activeId, setActiveId] = useState(materials[0].id);
  const activeMaterial = materials.find(m => m.id === activeId) || materials[0];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-remag-blue-deep mb-4 tracking-tight">Ciclo de Vida por Material</h2>
          <p className="text-remag-gray-text max-w-2xl mx-auto font-sans font-normal">
            Selecciona un material en las pestañas para descubrir cómo gestionamos su ciclo, asegurando su correcta reincorporación a la economía circular.
          </p>
        </div>

        {/* Tab Menu Container */}
        <div className="w-full max-w-6xl mx-auto mb-16 relative">
           <div className="flex flex-col md:flex-row w-full shadow-lg rounded-xl overflow-hidden bg-gray-100">
             {materials.map((mat) => {
               const isActive = activeId === mat.id;
               return (
                 <button
                   key={mat.id}
                   onClick={() => setActiveId(mat.id)}
                   style={{ backgroundColor: isActive ? mat.color : `${mat.color}dd` }}
                   className={`flex-1 flex flex-col items-center justify-center py-6 px-2 transition-all duration-300 relative text-white border-b-4 md:border-b-0 md:border-r-2 border-black/10 last:border-0
                     ${isActive ? 'z-10 md:scale-110 shadow-2xl rounded-lg' : 'hover:bg-opacity-100'}
                   `}
                 >
                   {/* Triangle Pointer for active tab */}
                   {isActive && (
                     <div 
                       className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px]"
                       style={{ borderTopColor: mat.color }}
                     ></div>
                   )}
                   
                   <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                     {mat.icon}
                   </div>
                   <span className="text-[10px] lg:text-xs font-display font-black text-center leading-tight tracking-wider mt-2 px-1">
                     {mat.label}
                   </span>
                 </button>
               );
             })}
           </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-16 min-h-[350px] shadow-sm border border-black/5 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h3 
                className="text-2xl md:text-3xl font-display font-black uppercase mb-12 text-center" 
                style={{ color: activeMaterial.color }}
              >
                El ciclo del material: {activeMaterial.label}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
                {/* Horizontal Connection Line (Desktop) */}
                <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-0.5 bg-gray-300 z-0"></div>

                {activeMaterial.cycle.map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-black text-lg mb-6 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:shadow-lg ring-4 ring-gray-50"
                      style={{ backgroundColor: activeMaterial.color }}
                    >
                      {step.step}
                    </div>
                    <h4 className="font-sans font-bold text-gray-800 mb-3 text-lg">{step.title}</h4>
                    <p className="text-sm font-sans font-normal text-gray-500 leading-relaxed px-2">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </Container>
    </section>
  );
};
