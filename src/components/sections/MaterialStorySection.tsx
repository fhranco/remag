"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";
import { CheckCircle2, XCircle, FileText, Recycle, Milk, Archive, Wine, MapPin, Truck, Factory } from "lucide-react";

const materialsData = [
  {
    id: "papel",
    label: "PAPELES Y CARTONES",
    color: "#0c0c68",
    lightBg: "bg-indigo-50",
    icon: <FileText className="w-8 h-8 md:w-10 md:h-10 mb-1 stroke-[1.5]" />,
    yes: [
      "Hojas blancas, cuadernos y fotocopias",
      "Periódicos, revistas y folletos",
      "Cajas de cartón corrugado (embalaje)",
      "Cajas de cereales, remedios (cartulina)"
    ],
    no: [
      "Papel higiénico, servilletas o absorbente",
      "Cartón manchado con aceite (cajas de pizza)",
      "Papel plastificado, encerado o fotográfico",
      "Boletas de compras (papel térmico)"
    ],
    prepSteps: [
      "Retira clips, corchetes y cintas adhesivas.",
      "Desarma las cajas para que queden planas.",
      "Apila y amarra los cartones.",
      "Asegúrate de que no estén húmedos."
    ],
    destinations: [
      { icon: <MapPin />, title: "Puntos Limpios", desc: "Contenedores azules en la ciudad." },
      { icon: <Truck />, title: "Retiro Empresas", desc: "Recolección programada en oficinas." },
      { icon: <Factory />, title: "Destino Final", desc: "Plantas papeleras para nueva celulosa." }
    ]
  },
  {
    id: "plastico",
    label: "PLÁSTICOS",
    color: "#eac114",
    lightBg: "bg-yellow-50",
    icon: <Recycle className="w-8 h-8 md:w-10 md:h-10 mb-1 stroke-[1.5]" />,
    yes: [
      "Botellas de bebidas y agua (PET 1)",
      "Envases de shampoo y lácteos (PEAD 2)",
      "Bolsas limpias, film de embalaje (PEBD 4)",
      "Tapas plásticas de botellas (PP 5)"
    ],
    no: [
      "Plásticos sucios con comida o grasa",
      "Envases de tóxicos o aceites de motor",
      "Plásticos sin número de reciclaje",
      "Plumavit (EPS 6) y cañerías PVC (3)"
    ],
    prepSteps: [
      "Vacía completamente el contenido.",
      "Enjuaga con agua si tiene restos pegajosos.",
      "Aplasta la botella para ahorrar espacio.",
      "Tápala si la tapa también es plástica."
    ],
    destinations: [
      { icon: <MapPin />, title: "Puntos Limpios", desc: "Contenedores amarillos comunitarios." },
      { icon: <Truck />, title: "Retiro Domiciliario", desc: "Suscríbete a nuestro plan de retiro." },
      { icon: <Factory />, title: "Destino Final", desc: "Triturado y pelletizado para nuevos envases." }
    ]
  },
  {
    id: "carton-liquidos",
    label: "CARTÓN LÍQUIDOS",
    color: "#cc9966",
    lightBg: "bg-orange-50",
    icon: <Milk className="w-8 h-8 md:w-10 md:h-10 mb-1 stroke-[1.5]" />,
    yes: [
      "Envases de leche y leches vegetales",
      "Envases de jugos y salsas de tomate",
      "Envases de cremas y caldos",
      "Cajas de vino formato Tetra Pak"
    ],
    no: [
      "Envases con líquidos en descomposición",
      "Bombillas de plástico sueltas (van al plástico)",
      "Envases de comida húmeda para mascotas"
    ],
    prepSteps: [
      "Levanta las pestañas superiores y la base.",
      "Corta la parte superior o ábrelo completo.",
      "Enjuaga el interior con un poco de agua.",
      "Aplástalo hasta que quede totalmente plano."
    ],
    destinations: [
      { icon: <MapPin />, title: "Puntos Limpios", desc: "Campanas café oscuro o mixtas." },
      { icon: <Truck />, title: "Retiro Domiciliario", desc: "Recolección junto a plásticos y latas." },
      { icon: <Factory />, title: "Destino Final", desc: "Hidropulpeo para papel kraft y placas PolyAl." }
    ]
  },
  {
    id: "metal",
    label: "METALES",
    color: "#a6a7a6",
    lightBg: "bg-gray-100",
    icon: <Archive className="w-8 h-8 md:w-10 md:h-10 mb-1 stroke-[1.5]" />,
    yes: [
      "Latas de bebidas y cervezas (Aluminio)",
      "Latas de conservas, atún (Hojalata)",
      "Tapas metálicas de frascos de vidrio",
      "Ollas viejas (sin mangos de plástico)"
    ],
    no: [
      "Aerosoles tóxicos, pinturas o solventes",
      "Pilas, baterías de auto o celular",
      "Tarros de pintura con restos líquidos",
      "Electrodomésticos o chatarra electrónica"
    ],
    prepSteps: [
      "Abre completamente las latas de conserva.",
      "Enjuaga con agua para remover restos.",
      "Aplasta las latas de aluminio de bebidas.",
      "Mete las tapas afiladas dentro de las latas."
    ],
    destinations: [
      { icon: <MapPin />, title: "Puntos Limpios", desc: "Contenedores grises metálicos." },
      { icon: <Truck />, title: "Servicios Horeca", desc: "Retiro especial para restaurantes." },
      { icon: <Factory />, title: "Destino Final", desc: "Fundición a alta temperatura para lingotes." }
    ]
  },
  {
    id: "vidrio",
    label: "VIDRIO",
    color: "#1d9a38",
    lightBg: "bg-green-50",
    icon: <Wine className="w-8 h-8 md:w-10 md:h-10 mb-1 stroke-[1.5]" />,
    yes: [
      "Botellas de bebidas, vinos y cervezas",
      "Frascos de conservas y mermeladas",
      "Frascos de perfumes (sin el atomizador)"
    ],
    no: [
      "Ampolletas y tubos fluorescentes",
      "Espejos, cristales de ventanas o autos",
      "Vajilla, cerámica, tazas, copas de cristal",
      "Envases de medicamentos clínicos"
    ],
    prepSteps: [
      "Quita las tapas, corchos y argollas.",
      "Enjuaga ligeramente para evitar insectos.",
      "No es necesario quitar las etiquetas.",
      "Deposítalos enteros, no rompas el vidrio."
    ],
    destinations: [
      { icon: <MapPin />, title: "Campanas Verdes", desc: "Más de 50 campanas en Magallanes." },
      { icon: <Truck />, title: "Servicios Horeca", desc: "Retiro de alto volumen para bares y hoteles." },
      { icon: <Factory />, title: "Destino Final", desc: "Molienda (calcín) para hornos de fundición." }
    ]
  }
];

export const MaterialStorySection = () => {
  const [activeId, setActiveId] = useState(materialsData[0].id);
  const activeMaterial = materialsData.find(m => m.id === activeId) || materialsData[0];

  return (
    <section className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-remag-blue-deep mb-6 tracking-tight">El Viaje de tu Residuo</h2>
          <p className="text-remag-gray-text max-w-3xl mx-auto text-lg font-sans font-normal leading-relaxed">
            Descubre nuestra guía interactiva: <strong>qué reciclar, cómo prepararlo y dónde entregarlo</strong>. Selecciona un material para conocer su historia y ayudarnos a cerrar el ciclo.
          </p>
        </div>

        {/* Tab Menu Container */}
        <div className="w-full max-w-6xl mx-auto mb-8 relative">
           <div className="flex flex-col md:flex-row w-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden bg-white">
             {materialsData.map((mat) => {
               const isActive = activeId === mat.id;
               return (
                 <button
                   key={mat.id}
                   onClick={() => setActiveId(mat.id)}
                   style={{ backgroundColor: isActive ? mat.color : '#ffffff', color: isActive ? '#ffffff' : mat.color }}
                   className={`flex-1 flex flex-col items-center justify-center py-6 px-2 transition-all duration-300 relative border-b-4 md:border-b-0 md:border-r-2 border-gray-100 last:border-0 hover:bg-gray-50
                     ${isActive ? 'z-10 md:scale-105 shadow-2xl rounded-lg' : ''}
                   `}
                 >
                   <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-100'}`}>
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

        {/* Unified Story Content Area */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`rounded-[2rem] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-black/5 relative overflow-hidden ${activeMaterial.lightBg}`}
            >
              {/* Decorative Icon Background */}
              <div 
                className="absolute -right-10 -top-10 opacity-[0.03] scale-[4] pointer-events-none"
                style={{ color: activeMaterial.color }}
              >
                {activeMaterial.icon}
              </div>

              {/* STAGE 1: QUÉ RECICLAR */}
              <div className="mb-16 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-black text-xl shadow-lg" style={{ backgroundColor: activeMaterial.color }}>1</span>
                  <h3 className="text-3xl font-display font-black uppercase text-gray-800 tracking-tight">¿Qué Reciclar?</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 pl-2 md:pl-14">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm">
                    <h4 className="flex items-center gap-2 font-display font-black uppercase text-green-700 text-lg mb-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" /> SÍ RECIBIMOS
                    </h4>
                    <ul className="space-y-3">
                      {activeMaterial.yes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-sans font-normal text-gray-700"><span className="text-green-500 font-bold">•</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <h4 className="flex items-center gap-2 font-display font-black uppercase text-gray-600 text-lg mb-4">
                      <XCircle className="w-6 h-6 text-gray-400" /> NO RECIBIMOS
                    </h4>
                    <ul className="space-y-3">
                      {activeMaterial.no.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-sans font-normal text-gray-700"><span className="text-gray-400 font-bold">•</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* STAGE 2: CÓMO RECICLAR */}
              <div className="mb-16 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-black text-xl shadow-lg" style={{ backgroundColor: activeMaterial.color }}>2</span>
                  <h3 className="text-3xl font-display font-black uppercase text-gray-800 tracking-tight">¿Cómo Prepararlo?</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pl-2 md:pl-14">
                  {activeMaterial.prepSteps.map((step, i) => (
                    <div key={i} className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-white shadow-sm relative pt-10">
                      <div className="absolute -top-4 left-5 w-16 h-8 rounded-lg flex items-center justify-center font-display font-black text-white shadow-md text-xs" style={{ backgroundColor: activeMaterial.color }}>
                        Paso {i + 1}
                      </div>
                      <p className="text-sm font-sans font-normal text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* STAGE 3: DÓNDE RECICLAR */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-black text-xl shadow-lg" style={{ backgroundColor: activeMaterial.color }}>3</span>
                  <h3 className="text-3xl font-display font-black uppercase text-gray-800 tracking-tight">¿Dónde Entregarlo?</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-2 md:pl-14 relative">
                  {/* Connection Line */}
                  <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-0.5 bg-gray-300/50 z-0"></div>

                  {activeMaterial.destinations.map((dest, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold mb-4 shadow-lg transition-transform duration-500 group-hover:scale-110 ring-4 ring-white" style={{ backgroundColor: activeMaterial.color }}>
                        {dest.icon}
                      </div>
                      <h4 className="font-sans font-bold text-gray-800 mb-2 text-lg">{dest.title}</h4>
                      <p className="text-sm font-sans font-normal text-gray-600 px-4">{dest.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </Container>
    </section>
  );
};
