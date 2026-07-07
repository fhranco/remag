"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";
import { 
  CheckCircle2, XCircle, FileText, Recycle, Milk, Archive, Wine, ChevronRight,
  CupSoda, Droplets, Package, Ban, Skull, Box, Newspaper, Coffee, Lightbulb, 
  BatteryWarning, Cpu, Circle, FlaskConical, AlertTriangle
} from "lucide-react";

const materialsGuide = [
  {
    id: "plastico",
    name: "Plásticos",
    color: "bg-[#eac114]",
    textColor: "text-[#eac114]",
    icon: <Recycle className="w-6 h-6" />,
    yesItems: [
      { title: "Botellas (PET 1)", reason: "Ideales para reciclaje. Asegúrate de enjuagarlas y aplastarlas.", icon: <CupSoda className="w-6 h-6" /> },
      { title: "Shampoo y Lácteos", reason: "Suelen ser PEAD (2). Vacíalos por completo antes de entregar.", icon: <Droplets className="w-6 h-6" /> },
      { title: "Bolsas y Film (4)", reason: "Revisa que estén limpias y sin restos de pan o comida.", icon: <Package className="w-6 h-6" /> }
    ],
    noItems: [
      { title: "Plásticos con grasa", reason: "Potes de comida sucia manchan y arruinan todo el lote limpio.", icon: <Ban className="w-6 h-6" /> },
      { title: "Envases tóxicos", reason: "Aceites de motor o químicos requieren tratamiento distinto.", icon: <Skull className="w-6 h-6" /> },
      { title: "Plumavit (EPS 6)", reason: "Por su volumen y rentabilidad actual no lo recibimos.", icon: <Box className="w-6 h-6" /> }
    ]
  },
  {
    id: "papel",
    name: "Papeles y Cartones",
    color: "bg-[#0c0c68]",
    textColor: "text-[#0c0c68]",
    icon: <FileText className="w-6 h-6" />,
    yesItems: [
      { title: "Hojas y Cuadernos", reason: "Papel blanco o escrito. ¡Quita los espirales de metal!", icon: <FileText className="w-6 h-6" /> },
      { title: "Cartón Corrugado", reason: "Cajas de embalaje. Desármalas para que queden planas.", icon: <Package className="w-6 h-6" /> },
      { title: "Diarios y Revistas", reason: "Papel prensa y folletos publicitarios son 100% reciclables.", icon: <Newspaper className="w-6 h-6" /> }
    ],
    noItems: [
      { title: "Papel absorbente", reason: "Papel higiénico o servilletas usadas contienen carga biológica.", icon: <Ban className="w-6 h-6" /> },
      { title: "Cajas sucias", reason: "El aceite y queso de pizza empapan las fibras y las inutilizan.", icon: <Coffee className="w-6 h-6" /> },
      { title: "Boletas térmicas", reason: "El papel térmico contiene químicos que alteran la pulpa.", icon: <AlertTriangle className="w-6 h-6" /> }
    ]
  },
  {
    id: "vidrio",
    name: "Vidrio",
    color: "bg-[#1d9a38]",
    textColor: "text-[#1d9a38]",
    icon: <Wine className="w-6 h-6" />,
    yesItems: [
      { title: "Botellas", reason: "De vino, cerveza o jugos de cualquier color. ¡Perfectas!", icon: <Wine className="w-6 h-6" /> },
      { title: "Frascos", reason: "Mermeladas, colados. Solo quítales la tapa metálica.", icon: <FlaskConical className="w-6 h-6" /> },
      { title: "Perfumes", reason: "Desatornilla o rompe el atomizador plástico antes.", icon: <Droplets className="w-6 h-6" /> }
    ],
    noItems: [
      { title: "Ampolletas y tubos", reason: "Contienen gases y no se funden a la misma temperatura.", icon: <Lightbulb className="w-6 h-6" /> },
      { title: "Espejos y Ventanas", reason: "Tienen tratamientos químicos y recubrimientos.", icon: <Box className="w-6 h-6" /> },
      { title: "Vajilla o Cerámica", reason: "Una taza de cerámica puede arruinar una tonelada de vidrio.", icon: <Coffee className="w-6 h-6" /> }
    ]
  },
  {
    id: "metales",
    name: "Metales y Hojalata",
    color: "bg-[#a6a7a6]",
    textColor: "text-[#797979]",
    icon: <Archive className="w-6 h-6" />,
    yesItems: [
      { title: "Latas de Aluminio", reason: "Bebidas y cervezas. Aplástalas, el aluminio es 100% reciclable.", icon: <CupSoda className="w-6 h-6" /> },
      { title: "Latas de Conservas", reason: "Tarros de atún o leche condensada. Lávalos bien por dentro.", icon: <Archive className="w-6 h-6" /> },
      { title: "Tapas Metálicas", reason: "Tapas de frascos de mermelada o coronas de cerveza.", icon: <Circle className="w-6 h-6" /> }
    ],
    noItems: [
      { title: "Pilas y Baterías", reason: "Residuos altamente peligrosos que requieren confinamiento.", icon: <BatteryWarning className="w-6 h-6" /> },
      { title: "Tarros con tóxicos", reason: "Pinturas frescas, aerosoles o solventes inflamables.", icon: <Skull className="w-6 h-6" /> },
      { title: "Electrónica (RAEE)", reason: "Cables y electrodomésticos tienen otros circuitos.", icon: <Cpu className="w-6 h-6" /> }
    ]
  },
  {
    id: "tetra",
    name: "Cartón Líquidos",
    color: "bg-[#cc9966]",
    textColor: "text-[#cc9966]",
    icon: <Milk className="w-6 h-6" />,
    yesItems: [
      { title: "Cajas de Leche", reason: "Cajas Tetra Pak de leche animal o vegetal.", icon: <Milk className="w-6 h-6" /> },
      { title: "Cajas de Jugo", reason: "Formatos individuales o grandes. Incluye cajas de vino.", icon: <CupSoda className="w-6 h-6" /> },
      { title: "Cajas de Conservas", reason: "Puré de tomate o caldos en formato Tetra Pak.", icon: <Package className="w-6 h-6" /> }
    ],
    noItems: [
      { title: "Cajas con hongos", reason: "Envases abandonados con líquidos en putrefacción.", icon: <AlertTriangle className="w-6 h-6" /> },
      { title: "Bombillas plásticas", reason: "La bombilla suelta es plástico, recíclala como plástico.", icon: <Ban className="w-6 h-6" /> },
      { title: "Sobres de sopas", reason: "Los envases flexibles aluminizados NO son Tetra Pak.", icon: <Ban className="w-6 h-6" /> }
    ]
  }
];

export const HowToRecycleSection = ({ isEmbedded = false }: { isEmbedded?: boolean }) => {
  const [activeTab, setActiveTab] = useState(materialsGuide[0].id);

  const activeData = materialsGuide.find(m => m.id === activeTab) || materialsGuide[0];

  const content = (
    <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto items-center lg:items-start ${isEmbedded ? "px-8 md:px-16" : ""}`}>
      {/* Sidebar Menu */}
      <div className="w-full lg:w-[35%] flex flex-col gap-3">
        {materialsGuide.map((mat) => {
          const isActive = activeTab === mat.id;
          return (
            <button
              key={mat.id}
              onClick={() => setActiveTab(mat.id)}
              className={`flex items-center justify-between py-3.5 px-4 rounded-2xl transition-all duration-300 outline-none
                ${isActive 
                  ? 'bg-gray-50 shadow-md border border-gray-100 scale-105 z-10' 
                  : 'bg-white hover:bg-gray-50 border border-transparent text-gray-500'
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl transition-colors ${isActive ? mat.color + ' text-white shadow-lg' : 'bg-gray-100'}`}>
                  {mat.icon}
                </div>
                <span className={`font-display font-black text-lg text-left ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                  {mat.name}
                </span>
              </div>
              <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-90 lg:rotate-0 text-gray-900' : 'text-gray-300'}`} />
            </button>
          );
        })}
      </div>

      {/* Clean Content Panel */}
      <div className="w-full lg:w-[65%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Background Watermark */}
            <div className="absolute right-0 top-0 opacity-[0.02] pointer-events-none transform translate-x-1/4 -translate-y-1/4">
              <div className={`w-96 h-96 ${activeData.textColor}`}>
                {activeData.icon}
              </div>
            </div>

            <div className="mb-6 relative z-10">
              <h3 className={`text-3xl md:text-4xl font-display font-black uppercase tracking-tight mb-3 ${activeData.textColor}`}>
                {activeData.name}
              </h3>
              <div className="w-12 h-1.5 rounded-full bg-gray-200"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
              {/* SÍ RECICLAMOS */}
              <div>
                <h4 className="flex items-center gap-2 font-display font-black uppercase text-emerald-500 text-lg mb-4 tracking-tight">
                  <CheckCircle2 className="w-5 h-5" /> SÍ RECIBIMOS
                </h4>
                <ul className="space-y-4">
                  {activeData.yesItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="font-display font-black uppercase text-xs text-gray-900 mb-1">{item.title}</h5>
                        <p className="text-xs font-sans font-normal text-gray-500 leading-relaxed">{item.reason}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* NO RECICLAMOS */}
              <div>
                <h4 className="flex items-center gap-2 font-display font-black uppercase text-gray-500 text-lg mb-4 tracking-tight">
                  <XCircle className="w-5 h-5" /> NO RECIBIMOS
                </h4>
                <ul className="space-y-4">
                  {activeData.noItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="p-2 bg-gray-100 text-gray-500 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="font-display font-black uppercase text-xs text-gray-900 mb-1">{item.title}</h5>
                        <p className="text-xs font-sans font-normal text-gray-500 leading-relaxed">{item.reason}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );

  if (isEmbedded) {
    return content;
  }

  return (
    <section className="py-8 md:py-12 bg-white relative w-full">
      <Container>
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-remag-blue-deep mb-4 tracking-tight">¿Qué Reciclamos?</h2>
          <p className="text-remag-gray-text max-w-2xl mx-auto text-lg font-sans font-normal">
            Selecciona un material para conocer exactamente qué elementos recibimos y cuáles debes evitar.
          </p>
        </div>
        {content}
      </Container>
    </section>
  );
};
