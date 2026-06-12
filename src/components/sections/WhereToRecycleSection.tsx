"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";
import { MapPin, Clock, Navigation, X } from "lucide-react";

const mapLocations = [
  {
    id: "punto-1",
    name: "Punto Limpio Zona Franca",
    address: "Av. Bulnes Km 3.5, Punta Arenas",
    schedule: "Lun - Dom: 10:00 a 20:00 hrs",
    materials: ["plastico", "papel", "metal", "tetra"],
    lat: 30, 
    lng: 45, 
  },
  {
    id: "punto-2",
    name: "Campana Vidrio Plaza de Armas",
    address: "Plaza Muñoz Gamero, Punta Arenas",
    schedule: "Disponible 24/7",
    materials: ["vidrio"],
    lat: 60,
    lng: 55,
  },
  {
    id: "punto-3",
    name: "Centro de Acopio REMAG",
    address: "Barrio Industrial, Manzana 4, Lote 2",
    schedule: "Lun - Vie: 09:00 a 18:00 hrs",
    materials: ["plastico", "papel", "metal", "vidrio", "tetra"],
    lat: 75,
    lng: 30,
  },
  {
    id: "punto-4",
    name: "Campana Vidrio Costanera",
    address: "Av. Costanera del Estrecho s/n (Sector Letras)",
    schedule: "Disponible 24/7",
    materials: ["vidrio"],
    lat: 50,
    lng: 75,
  },
  {
    id: "punto-5",
    name: "Punto Limpio UMAG",
    address: "Av. Bulnes 01855 (Campus UMAG)",
    schedule: "Lun - Vie: 08:00 a 20:00 hrs",
    materials: ["plastico", "papel"],
    lat: 15,
    lng: 50,
  }
];

const filterOptions = [
  { id: "todos", label: "Todos los puntos", color: "bg-remag-blue-deep" },
  { id: "vidrio", label: "Puntos para Vidrio", color: "bg-[#1d9a38]" },
  { id: "plastico", label: "Puntos para Plásticos", color: "bg-[#eac114]" },
  { id: "papel", label: "Puntos para Papel/Cartón", color: "bg-[#0c0c68]" },
  { id: "metal", label: "Puntos para Metales", color: "bg-[#a6a7a6]" },
  { id: "tetra", label: "Puntos para Tetra Pak", color: "bg-[#cc9966]" },
];

export const WhereToRecycleSection = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [hoveredPinId, setHoveredPinId] = useState<string | null>(null);

  const materialColors: Record<string, string> = {
    plastico: "bg-[#eac114]",
    papel: "bg-[#0c0c68]",
    vidrio: "bg-[#1d9a38]",
    metal: "bg-[#a6a7a6]",
    tetra: "bg-[#cc9966]"
  };

  return (
    <section id="donde-reciclar" className="py-24 md:py-32 bg-white relative">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-remag-blue-deep mb-6 tracking-tight">¿Dónde Reciclar?</h2>
          <p className="text-remag-gray-text max-w-2xl mx-auto text-lg font-sans font-normal leading-relaxed">
            Encuentra tu punto verde más cercano en el mapa interactivo. Selecciona el material que deseas reciclar y te mostraremos dónde llevarlo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* Sidebar Filters */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-display font-black uppercase tracking-wider text-gray-800 text-sm mb-3 px-2">Filtrar por Material</h3>
            {filterOptions.map(filter => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setSelectedLocation(null);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border-2 text-left
                    ${isActive 
                      ? 'border-transparent shadow-xl text-white ' + filter.color
                      : 'border-gray-100 bg-gray-50 hover:border-gray-300 text-gray-600 hover:shadow-sm'
                    }
                  `}
                >
                  <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-white' : filter.color}`}></div>
                  <span className="font-display font-black uppercase text-xs tracking-wider">{filter.label}</span>
                </button>
              )
            })}
          </div>

          {/* Interactive Map Area */}
          <div className="lg:col-span-9 relative h-[500px] md:h-[650px] bg-[#f8fafc] rounded-[2rem] overflow-hidden border border-black/5 shadow-inner">
            {/* Map Grid Pattern Background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
            
            {/* Abstract Geography (Water / Land illusion) */}
            <div className="absolute right-0 top-0 w-2/5 h-full bg-blue-100/40 rounded-l-[100px] blur-3xl pointer-events-none"></div>
            <div className="absolute left-0 bottom-0 w-3/5 h-3/5 bg-emerald-50/40 rounded-tr-[200px] blur-3xl pointer-events-none"></div>

            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full text-xs font-display font-black text-gray-400 uppercase tracking-widest shadow-sm pointer-events-none z-10 border border-gray-100">
              Mapa Red de Reciclaje
            </div>

            {/* Interactive Pins */}
            {mapLocations.map(loc => {
              const isVisible = activeFilter === "todos" || loc.materials.includes(activeFilter);
              const isSelected = selectedLocation?.id === loc.id;
              const isHovered = hoveredPinId === loc.id;
              
              if (!isVisible) return null;

              // Determine color class based on material on hover or selection
              let bgClass = "bg-remag-blue-deep";
              if (isSelected || isHovered) {
                if (activeFilter !== "todos") {
                  bgClass = materialColors[activeFilter] || "bg-remag-teal";
                } else if (loc.materials.length === 1) {
                  bgClass = materialColors[loc.materials[0]] || "bg-remag-teal";
                } else {
                  bgClass = "bg-remag-teal";
                }
              }

              return (
                <motion.button
                  key={loc.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: isSelected ? 1.2 : 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => setSelectedLocation(loc)}
                  onMouseEnter={() => setHoveredPinId(loc.id)}
                  onMouseLeave={() => setHoveredPinId(null)}
                  className={`absolute z-20 flex flex-col items-center -translate-x-1/2 -translate-y-full group cursor-pointer`}
                  style={{ top: `${loc.lat}%`, left: `${loc.lng}%` }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl text-white mb-1.5 transition-colors duration-300
                    ${bgClass} ${isSelected ? 'ring-4 ring-remag-teal/30' : ''}
                  `}>
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className={`w-2.5 h-2.5 rounded-full shadow-md transition-colors duration-300 ${bgClass}`}></div>
                </motion.button>
              )
            })}

            {/* Overlay Location Details Card */}
            <AnimatePresence>
              {selectedLocation && (
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 md:w-[420px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden z-30 border border-gray-100"
                >
                  <div className="bg-remag-blue-deep p-7 relative">
                    <button 
                      onClick={() => setSelectedLocation(null)}
                      className="absolute top-5 right-5 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <h4 className="text-white font-display font-black text-2xl pr-10 leading-tight uppercase tracking-tight">{selectedLocation.name}</h4>
                  </div>
                  
                  <div className="p-7">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="p-2 bg-blue-50 rounded-lg text-remag-blue-deep">
                        <Navigation className="w-5 h-5" />
                      </div>
                      <div className="mt-1">
                        <p className="text-xs font-display font-black text-gray-400 uppercase tracking-wider mb-1">Dirección</p>
                        <p className="text-gray-800 font-sans font-normal">{selectedLocation.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 mb-7">
                      <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="mt-1">
                        <p className="text-xs font-display font-black text-gray-400 uppercase tracking-wider mb-1">Horario</p>
                        <p className="text-gray-800 font-sans font-normal">{selectedLocation.schedule}</p>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-5">
                      <p className="text-xs font-display font-black text-gray-400 uppercase tracking-wider mb-3">Recibe los siguientes materiales:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedLocation.materials.map((mat: string) => {
                          const filterInfo = filterOptions.find(f => f.id === mat);
                          if (!filterInfo) return null;
                          return (
                            <span key={mat} className={`px-3 py-1.5 rounded-lg text-[11px] font-display font-black uppercase text-white shadow-sm tracking-wider ${filterInfo.color}`}>
                              {filterInfo.label.replace('Puntos para ', '')}
                            </span>
                          )
                        })}
                      </div>
                    </div>

                    <button className="w-full mt-8 bg-gray-900 hover:bg-black text-white font-display font-black uppercase tracking-wider text-xs py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                      <Navigation className="w-4 h-4" />
                      Trazar ruta en Maps
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </Container>
    </section>
  );
};
