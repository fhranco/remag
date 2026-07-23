"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Minimize2, Trash2, Wind, Recycle, FileText, Wine, Archive, Milk, HelpCircle } from "lucide-react";

type MaterialKey = "todos" | "plastico" | "papel" | "vidrio" | "metal" | "tetra";

const materialSteps = {
  todos: [
    {
      title: "Vaciar",
      description: "Retira todo el contenido sobrante del envase. No deben quedar restos de comida ni líquidos de ningún tipo.",
      icon: <Trash2 className="w-10 h-10" />,
      color: "text-remag-teal border-remag-teal bg-[#154e70]"
    },
    {
      title: "Enjuagar",
      description: "Usa un poco de agua (idealmente reutilizada del lavado) para quitar residuos pegajosos y evitar malos olores.",
      icon: <Droplets className="w-10 h-10" />,
      color: "text-remag-green border-remag-green bg-[#154e70]"
    },
    {
      title: "Secar",
      description: "Deja estilar el envase. La humedad arruina por completo los papeles y cartones, todo debe entregarse seco.",
      icon: <Wind className="w-10 h-10" />,
      color: "text-remag-teal border-remag-teal bg-[#154e70]"
    },
    {
      title: "Aplastar",
      description: "Reduce el volumen de botellas PET, latas y cajas de cartón. Así optimizamos el transporte y la huella de carbono.",
      icon: <Minimize2 className="w-10 h-10" />,
      color: "text-remag-green border-remag-green bg-[#154e70]"
    }
  ],
  plastico: [
    {
      title: "Vaciar",
      description: "Quita restos de yogurt, bebidas o aderezos. Los residuos atraen plagas and contaminan otros plásticos.",
      icon: <Trash2 className="w-10 h-10" />,
      color: "text-remag-teal border-remag-teal bg-[#154e70]"
    },
    {
      title: "Enjuagar",
      description: "Pasa un chorro de agua fría para quitar la grasa o azúcares de botellas y envases.",
      icon: <Droplets className="w-10 h-10" />,
      color: "text-remag-green border-remag-green bg-[#154e70]"
    },
    {
      title: "Secar",
      description: "Escurre bien antes de guardar. Los plásticos húmedos pueden generar hongos y malos olores en el almacenaje.",
      icon: <Wind className="w-10 h-10" />,
      color: "text-remag-teal border-remag-teal bg-[#154e70]"
    },
    {
      title: "Aplastar y Tapar",
      description: "Aplastarlas reduce su volumen a la mitad. Vuelve a enroscar la tapa para mantenerlas comprimidas.",
      icon: <Minimize2 className="w-10 h-10" />,
      color: "text-remag-green border-remag-green bg-[#154e70]"
    }
  ],
  papel: [
    {
      title: "Limpiar",
      description: "Asegúrate de que no tengan grasa, aceite o restos de comida. Cartones sucios de pizza no sirven.",
      icon: <Trash2 className="w-10 h-10" />,
      color: "text-remag-teal border-remag-teal bg-[#154e70]"
    },
    {
      title: "Quitar extras",
      description: "Retira cintas de embalar plásticas, corchetes, clips metálicos y espirales plásticas o metálicas.",
      icon: <HelpCircle className="w-10 h-10" />,
      color: "text-remag-green border-remag-green bg-[#154e70]"
    },
    {
      title: "Secar",
      description: "El papel y cartón deben estar 100% secos. Si se mojan, sus fibras se dañan y ya no son reciclables.",
      icon: <Wind className="w-10 h-10" />,
      color: "text-remag-teal border-remag-teal bg-[#154e70]"
    },
    {
      title: "Desarmar",
      description: "Desarma y dobla todas las cajas de cartón. Al dejarlas planas, optimizas el espacio de recolección.",
      icon: <Minimize2 className="w-10 h-10" />,
      color: "text-remag-green border-remag-green bg-[#154e70]"
    }
  ],
  vidrio: [
    {
      title: "Vaciar",
      description: "Elimina restos de líquidos, mermeladas, aceites o jugos del interior de botellas y frascos.",
      icon: <Trash2 className="w-10 h-10" />,
      color: "text-remag-teal border-remag-teal bg-[#154e70]"
    },
    {
      title: "Enjuagar",
      description: "Pasa un chorrito de agua para remover jarabes u otros líquidos densos adheridos a las paredes.",
      icon: <Droplets className="w-10 h-10" />,
      color: "text-remag-green border-remag-green bg-[#154e70]"
    },
    {
      title: "Retirar Tapas",
      description: "Quita las tapas metálicas y plásticas, y los corchos. Deposítalos por separado según su material.",
      icon: <Wind className="w-10 h-10" />,
      color: "text-remag-teal border-remag-teal bg-[#154e70]"
    },
    {
      title: "Depositar con cuidado",
      description: "Lleva el vidrio a la campana verde. Deposítalo con cuidado; las botellas enteras facilitan la clasificación.",
      icon: <Minimize2 className="w-10 h-10" />,
      color: "text-remag-green border-remag-green bg-[#154e70]"
    }
  ],
  metal: [
    {
      title: "Vaciar",
      description: "Quita los residuos de conservas, atún, salsas o bebidas. No dejes cubiertos ni tapas sueltas adentro.",
      icon: <Trash2 className="w-10 h-10" />,
      color: "text-remag-teal border-remag-teal bg-[#154e70]"
    },
    {
      title: "Lavar/Enjuagar",
      description: "Las latas de conservas acumulan grasas, lávelas con agua y una gota de detergente para dejarlas limpias.",
      icon: <Droplets className="w-10 h-10" />,
      color: "text-remag-green border-remag-green bg-[#154e70]"
    },
    {
      title: "Secar",
      description: "Déjalas escurrir al aire libre. La hojalata y el aluminio secos evitan malos olores en la zona de acopio.",
      icon: <Wind className="w-10 h-10" />,
      color: "text-remag-teal border-remag-teal bg-[#154e70]"
    },
    {
      title: "Aplastar",
      description: "Aplasta las latas de bebidas de aluminio con el pie para optimizar espacio. Las latas de conserva no se aplastan.",
      icon: <Minimize2 className="w-10 h-10" />,
      color: "text-remag-green border-remag-green bg-[#154e70]"
    }
  ],
  tetra: [
    {
      title: "Vaciar",
      description: "Retira todo el remanente de leche, jugo, vino o puré de tomate para evitar putrefacción.",
      icon: <Trash2 className="w-10 h-10" />,
      color: "text-remag-teal border-remag-teal bg-[#154e70]"
    },
    {
      title: "Enjuagar",
      description: "Introduce un poco de agua en la caja, tapa la boquilla (si tiene) o dobla la abertura, agita bien y vacía.",
      icon: <Droplets className="w-10 h-10" />,
      color: "text-remag-green border-remag-green bg-[#154e70]"
    },
    {
      title: "Escurrir",
      description: "Pon los envases boca abajo para que estilen y sequen completamente por dentro.",
      icon: <Wind className="w-10 h-10" />,
      color: "text-remag-teal border-remag-teal bg-[#154e70]"
    },
    {
      title: "Desplegar y Aplastar",
      description: "Despega las pestañas de las esquinas del envase, aplástala completamente y vuelve a cerrarla con su tapa.",
      icon: <Minimize2 className="w-10 h-10" />,
      color: "text-remag-green border-remag-green bg-[#154e70]"
    }
  ]
};

const materialSelector = [
  { id: "todos" as MaterialKey, name: "General", icon: <Recycle className="w-4 h-4" />, activeColor: "bg-remag-teal text-white", bgColor: "bg-[#154e70]", isDark: true },
  { id: "papel" as MaterialKey, name: "Papeles/Cartón", icon: <FileText className="w-4 h-4" />, activeColor: "bg-white text-[#0c0c68]", bgColor: "bg-[#0c0c68]", isDark: true },
  { id: "plastico" as MaterialKey, name: "Plásticos", icon: <Recycle className="w-4 h-4" />, activeColor: "bg-gray-900 text-white", bgColor: "bg-[#eac114]", isDark: false },
  { id: "tetra" as MaterialKey, name: "Cartón para Líquidos", icon: <Milk className="w-4 h-4" />, activeColor: "bg-gray-900 text-white", bgColor: "bg-[#cc9966]", isDark: true },
  { id: "metal" as MaterialKey, name: "Metales", icon: <Archive className="w-4 h-4" />, activeColor: "bg-white text-gray-900", bgColor: "bg-[#6b7280]", isDark: true },
  { id: "vidrio" as MaterialKey, name: "Vidrio", icon: <Wine className="w-4 h-4" />, activeColor: "bg-white text-[#1d9a38]", bgColor: "bg-[#1d9a38]", isDark: true },
];

export const PreparationStepsSection = ({ isEmbedded = false }: { isEmbedded?: boolean }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialKey>("todos");

  const activeSteps = materialSteps[selectedMaterial];
  const activeMaterialConfig = materialSelector.find(m => m.id === selectedMaterial) || materialSelector[0];

  const isDark = activeMaterialConfig.isDark;

  const content = (
    <div className={`${isEmbedded ? "max-w-7xl mx-auto" : ""}`}>
      {!isEmbedded && (
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-5xl font-display font-black uppercase mb-6 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            ¿Cómo Reciclar?
          </h2>
          <p className={`max-w-2xl mx-auto text-lg font-sans font-normal leading-relaxed ${isDark ? 'text-white/80' : 'text-gray-900/80'}`}>
            El éxito del reciclaje y del trabajo de los recicladores de base comienza en casa. Aplica nuestra <strong>regla de oro de 4 pasos</strong> antes de separar tus residuos.
          </p>
        </div>
      )}

      {/* Sub-selector de Materiales */}
      <div className="flex justify-center mb-10 overflow-x-auto no-scrollbar py-2">
        <div className={`flex gap-2 p-1.5 rounded-2xl max-w-full backdrop-blur-md border ${isDark ? 'bg-black/20 border-white/20' : 'bg-black/10 border-black/10'}`}>
          {materialSelector.map((mat) => {
            const isActive = selectedMaterial === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat.id)}
                className={`flex items-center gap-2 py-2.5 px-4 rounded-xl transition-all duration-300 outline-none whitespace-nowrap text-xs font-display font-black uppercase tracking-wider
                  ${isActive 
                    ? `${mat.activeColor} shadow-lg scale-105` 
                    : isDark 
                      ? "text-white/70 hover:text-white hover:bg-white/10" 
                      : "text-gray-900/70 hover:text-gray-900 hover:bg-black/10"
                  }
                `}
              >
                <span>{mat.icon}</span>
                <span>{mat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative pt-4">
        {/* Connector Line for Desktop */}
        <div className={`hidden lg:block absolute top-[4.5rem] left-[12%] right-[12%] h-0.5 z-0 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/20'}`}></div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedMaterial}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-7xl mx-auto"
          >
            {activeSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Circle Seal Container */}
                <div className={`w-28 h-28 rounded-full flex items-center justify-center shadow-xl mb-8 border-4 bg-white transition-transform duration-500 group-hover:scale-110 relative z-20 ${step.color.replace('bg-[#154e70]', 'bg-white')}`}>
                  {step.icon}
                </div>
                
                <div className={`border backdrop-blur-md shadow-lg transition-all px-6 pb-6 pt-6 rounded-3xl w-full flex-grow min-h-[180px] flex flex-col justify-start ${
                  isDark 
                    ? 'bg-black/20 border-white/15 text-white' 
                    : 'bg-white/40 border-black/15 text-gray-900'
                }`}>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shadow-md shrink-0 ${
                      isDark ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
                    }`}>
                      {idx + 1}
                    </span>
                    <h3 className={`font-display font-black uppercase text-lg tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className={`text-xs md:text-sm leading-relaxed font-sans font-normal ${isDark ? 'text-white/80' : 'text-gray-900/80'}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );

  if (isEmbedded) {
    return (
      <div className={`mx-8 md:mx-16 ${activeMaterialConfig.bgColor} rounded-[2rem] p-10 md:p-16 overflow-hidden relative shadow-xl transition-colors duration-500`}>
        {content}
      </div>
    );
  }

  return (
    <section className={`py-24 ${activeMaterialConfig.bgColor} relative overflow-hidden transition-colors duration-500`}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 w-full">
        {content}
      </div>
    </section>
  );
};
