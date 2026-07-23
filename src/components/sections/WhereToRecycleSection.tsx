"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";
import { MapPin, Clock, ExternalLink, Users, Scale, GlassWater, Building2, X, Navigation, Map } from "lucide-react";

type SpaceCategory = "puntos-limpios" | "campanas-vidrio";

interface LocationItem {
  id: string;
  name: string;
  comuna: string;
  address: string;
  schedule: string;
  mapsUrl: string;
  lat: number;
  lng: number;
  publicServed?: string;
  kgsCollected: string;
}

interface CityData {
  name: string;
  label: string;
  theme: {
    badge: string;
    bgButton: string;
    markerBg: string;
    cardBorder: string;
    lightBg: string;
  };
  puntosLimpios: LocationItem[];
  campanasVidrio: LocationItem[];
}

const citiesData: CityData[] = [
  {
    name: "Punta Arenas",
    label: "Punta Arenas",
    theme: {
      badge: "bg-[#154e70]/10 text-[#154e70] border-[#154e70]/20",
      bgButton: "bg-[#154e70] text-white border-[#154e70]",
      markerBg: "bg-[#154e70]",
      cardBorder: "hover:border-[#154e70]",
      lightBg: "bg-[#154e70]/5"
    },
    puntosLimpios: [
      {
        id: "pl-dinosaurios",
        name: "PL Dinosaurios",
        comuna: "Punta Arenas",
        address: "Av. Eduardo Frei Montalva con Av. Los Flamencos",
        schedule: "Lunes a Sábado de 11:00 a 19:00 hrs",
        mapsUrl: "https://maps.google.com/?q=Punto+Limpio+Dinosaurios+Punta+Arenas",
        lat: 40,
        lng: 45,
        publicServed: "+18.500 personas",
        kgsCollected: "142.000 kg"
      },
      {
        id: "pl-hornillas",
        name: "PL Hornillas",
        comuna: "Punta Arenas",
        address: "Av. Jorge Alessandri con Hornillas",
        schedule: "Lunes a Sábado de 11:00 a 19:00 hrs",
        mapsUrl: "https://maps.google.com/?q=Punto+Limpio+Hornillas+Punta+Arenas",
        lat: 55,
        lng: 58,
        publicServed: "+15.200 personas",
        kgsCollected: "118.500 kg"
      }
    ],
    campanasVidrio: [
      {
        id: "cv-punta-arenas",
        name: "Red de Campanas de Vidrio Punta Arenas",
        comuna: "Punta Arenas",
        address: "Plaza de Armas, Costanera, Av. España y Puntos Comunitarios",
        schedule: "Disponible 24/7",
        mapsUrl: "https://maps.google.com/?q=Punta+Arenas+Chile",
        lat: 48,
        lng: 50,
        kgsCollected: "310.000 kg"
      }
    ]
  },
  {
    name: "Puerto Natales",
    label: "Puerto Natales",
    theme: {
      badge: "bg-[#009999]/10 text-[#009999] border-[#009999]/20",
      bgButton: "bg-[#009999] text-white border-[#009999]",
      markerBg: "bg-[#009999]",
      cardBorder: "hover:border-[#009999]",
      lightBg: "bg-[#009999]/5"
    },
    puntosLimpios: [
      {
        id: "pl-natales",
        name: "PL Natales",
        comuna: "Puerto Natales",
        address: "Av. Ultima Esperanza con Carlos Bories",
        schedule: "Lunes a Sábado de 11:00 a 19:00 hrs",
        mapsUrl: "https://maps.google.com/?q=Punto+Limpio+Puerto+Natales",
        lat: 45,
        lng: 50,
        publicServed: "+12.000 personas",
        kgsCollected: "95.000 kg"
      }
    ],
    campanasVidrio: [
      {
        id: "cv-natales",
        name: "Red de Campanas Puerto Natales",
        comuna: "Puerto Natales",
        address: "Plaza de Armas y Borde Costero Natales",
        schedule: "Disponible 24/7",
        mapsUrl: "https://maps.google.com/?q=Puerto+Natales+Chile",
        lat: 50,
        lng: 52,
        kgsCollected: "145.000 kg"
      }
    ]
  },
  {
    name: "Torres del Paine",
    label: "Cerro Castillo / Torres del Paine",
    theme: {
      badge: "bg-[#1b9905]/10 text-[#1b9905] border-[#1b9905]/20",
      bgButton: "bg-[#1b9905] text-white border-[#1b9905]",
      markerBg: "bg-[#1b9905]",
      cardBorder: "hover:border-[#1b9905]",
      lightBg: "bg-[#1b9905]/5"
    },
    puntosLimpios: [
      {
        id: "pl-cerro-castillo",
        name: "PL Cerro Castillo",
        comuna: "Torres del Paine",
        address: "Villa Cerro Castillo s/n",
        schedule: "Lunes a Sábado de 11:00 a 19:00 hrs",
        mapsUrl: "https://maps.google.com/?q=Villa+Cerro+Castillo+Torres+del+Paine",
        lat: 46,
        lng: 48,
        publicServed: "+3.500 personas",
        kgsCollected: "28.000 kg"
      }
    ],
    campanasVidrio: [
      {
        id: "cv-torres-paine",
        name: "Campanas Torres del Paine",
        comuna: "Torres del Paine",
        address: "Cerro Castillo y Accesos Parque Nacional",
        schedule: "Disponible 24/7",
        mapsUrl: "https://maps.google.com/?q=Torres+del+Paine",
        lat: 50,
        lng: 50,
        kgsCollected: "36.000 kg"
      }
    ]
  },
  {
    name: "Puerto Williams",
    label: "Puerto Williams",
    theme: {
      badge: "bg-[#0284c7]/10 text-[#0284c7] border-[#0284c7]/20",
      bgButton: "bg-[#0284c7] text-white border-[#0284c7]",
      markerBg: "bg-[#0284c7]",
      cardBorder: "hover:border-[#0284c7]",
      lightBg: "bg-[#0284c7]/5"
    },
    puntosLimpios: [
      {
        id: "pl-williams",
        name: "PL Puerto Williams",
        comuna: "Cabo de Hornos",
        address: "Centro Urbano Puerto Williams",
        schedule: "Lunes a Sábado de 11:00 a 19:00 hrs",
        mapsUrl: "https://maps.google.com/?q=Puerto+Williams",
        lat: 48,
        lng: 52,
        publicServed: "+2.800 personas",
        kgsCollected: "22.400 kg"
      }
    ],
    campanasVidrio: [
      {
        id: "cv-williams",
        name: "Campanas de Vidrio Puerto Williams",
        comuna: "Cabo de Hornos",
        address: "Centro Urbano Puerto Williams",
        schedule: "Disponible 24/7",
        mapsUrl: "https://maps.google.com/?q=Puerto+Williams",
        lat: 52,
        lng: 54,
        kgsCollected: "18.000 kg"
      }
    ]
  }
];

export const WhereToRecycleSection = ({ isEmbedded = false }: { isEmbedded?: boolean }) => {
  const [activeCategory, setActiveCategory] = useState<SpaceCategory>("puntos-limpios");
  const [selectedCityName, setSelectedCityName] = useState<string>("Punta Arenas");
  const [selectedLocation, setSelectedLocation] = useState<LocationItem | null>(null);

  const activeCity = citiesData.find(c => c.name === selectedCityName) || citiesData[0];
  const cityLocations = activeCategory === "puntos-limpios" ? activeCity.puntosLimpios : activeCity.campanasVidrio;

  const handleCategorySwitch = (cat: SpaceCategory) => {
    setActiveCategory(cat);
    setSelectedLocation(null);
  };

  const handleCitySelect = (cityName: string) => {
    setSelectedCityName(cityName);
    setSelectedLocation(null);
  };

  const content = (
    <div className={`${isEmbedded ? "max-w-7xl mx-auto px-8 md:px-16" : "max-w-7xl mx-auto"}`}>
      
      {/* 1. Selector Superior de Tipo de Infraestructura */}
      <div className="flex justify-center mb-8">
        <div className="flex p-1.5 bg-gray-100 border border-gray-200/80 rounded-2xl">
          <button
            onClick={() => handleCategorySwitch("puntos-limpios")}
            className={`flex items-center gap-2 py-3 px-6 rounded-xl font-display font-black uppercase text-xs md:text-sm tracking-wider transition-all ${
              activeCategory === "puntos-limpios"
                ? "bg-remag-blue-deep text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Building2 className="w-4 h-4" />
            Puntos Limpios
          </button>
          <button
            onClick={() => handleCategorySwitch("campanas-vidrio")}
            className={`flex items-center gap-2 py-3 px-6 rounded-xl font-display font-black uppercase text-xs md:text-sm tracking-wider transition-all ${
              activeCategory === "campanas-vidrio"
                ? "bg-remag-green text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <GlassWater className="w-4 h-4" />
            Campanas de Vidrio
          </button>
        </div>
      </div>

      {/* 2. Selector de Ciudad / Comuna */}
      <div className="flex justify-center flex-wrap gap-2.5 mb-8">
        {citiesData.map((city) => {
          const isSelected = city.name === selectedCityName;
          const locationsCount = activeCategory === "puntos-limpios" ? city.puntosLimpios.length : city.campanasVidrio.length;
          
          if (locationsCount === 0) return null; // Oculta ciudad si no tiene esa infraestructura

          return (
            <button
              key={city.name}
              onClick={() => handleCitySelect(city.name)}
              className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-display font-black uppercase tracking-wider transition-all border flex items-center gap-2.5 ${
                isSelected
                  ? `${city.theme.bgButton} shadow-md scale-105`
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-2xs'
              }`}
            >
              <MapPin className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
              <span>{city.name}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
              }`}>
                {locationsCount}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Panel de Mapa Específico de la Ciudad + Listado de Puntos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Mapa Específico de la Ciudad (lg:col-span-7) */}
        <div className="lg:col-span-7 relative h-[420px] md:h-[500px] bg-[#f1f5f9] rounded-3xl overflow-hidden border border-gray-200 shadow-inner flex flex-col justify-between p-6">
          {/* Map Grid Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

          {/* Map Header Overlay */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-gray-200 shadow-xs flex items-center gap-2">
              <Map className="w-4 h-4 text-remag-teal" />
              <span className="text-xs font-display font-black uppercase tracking-wider text-gray-800">
                Mapa de {selectedCityName}
              </span>
            </div>
            <span className={`text-xs font-sans font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border ${activeCity.theme.badge}`}>
              {cityLocations.length} Ubicación(es)
            </span>
          </div>

          {/* Pins de la Ciudad Seleccionada */}
          <div className="absolute inset-0 z-0">
            {cityLocations.map((loc) => {
              const isSelected = selectedLocation?.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc)}
                  style={{ top: `${loc.lat}%`, left: `${loc.lng}%` }}
                  className="absolute -translate-x-1/2 -translate-y-full transition-all duration-300 group cursor-pointer hover:scale-125 z-20"
                >
                  <div className={`p-3 rounded-full shadow-xl text-white transition-all ${
                    isSelected
                      ? 'bg-gray-900 ring-4 ring-gray-900/30 scale-110'
                      : activeCity.theme.markerBg
                  }`}>
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-3 py-1 bg-gray-900 text-white rounded-lg text-xs font-sans font-bold whitespace-nowrap shadow-md">
                    {loc.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Map Footer Note */}
          <div className="relative z-10 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-gray-200 text-xs font-sans text-gray-600">
            📍 Haz clic en un marcador para desplegar los detalles completos de {selectedCityName}.
          </div>
        </div>

        {/* Listado de Tarjetas de Puntos Limpios de la Ciudad (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <h3 className="font-display font-black uppercase text-base text-remag-blue-deep tracking-wide mb-1">
            Puntos Disponibles en {selectedCityName}
          </h3>

          {cityLocations.map((loc) => {
            const isSelected = selectedLocation?.id === loc.id;
            return (
              <div
                key={loc.id}
                onClick={() => setSelectedLocation(loc)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                  isSelected 
                    ? `${activeCity.theme.lightBg} border-gray-900 shadow-md` 
                    : `bg-white border-gray-200/80 ${activeCity.theme.cardBorder} shadow-2xs hover:shadow-sm`
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className={`text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${activeCity.theme.badge} inline-block mb-1.5`}>
                      {loc.comuna}
                    </span>
                    <h4 className="font-display font-black text-xl text-remag-blue-deep uppercase leading-tight">
                      {loc.name}
                    </h4>
                  </div>
                  <button className={`px-3.5 py-1.5 rounded-xl text-xs font-sans font-bold transition-colors ${activeCity.theme.bgButton}`}>
                    Ver Info
                  </button>
                </div>

                <div className="space-y-2 text-xs font-sans text-gray-600 mb-4">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-remag-teal shrink-0" />
                    <span>{loc.schedule}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-remag-teal shrink-0" />
                    <span className="truncate">{loc.address}</span>
                  </p>
                </div>

                {/* Métricas breves */}
                <div className="flex gap-4 pt-3 border-t border-gray-100 text-xs">
                  {loc.publicServed && (
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Público:</span>
                      <strong className="text-gray-900 font-display font-black">{loc.publicServed}</strong>
                    </div>
                  )}
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase block">Recolectado:</span>
                    <strong className="text-emerald-700 font-display font-black">{loc.kgsCollected}</strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* POPUP MODAL COMPLETO AL SELECCIONAR UN PUNTO */}
      <AnimatePresence>
        {selectedLocation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/50 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={() => setSelectedLocation(null)}></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10"
            >
              {/* Header Modal */}
              <div className={`p-6 md:p-8 text-white relative ${activeCity.theme.markerBg}`}>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="text-xs font-sans font-bold uppercase tracking-widest text-white/80 mb-1 block">
                  Comuna de {selectedLocation.comuna}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-black uppercase text-white tracking-tight leading-tight pr-8">
                  {selectedLocation.name}
                </h3>
              </div>

              {/* Body Modal */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-remag-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-display font-black uppercase text-gray-400 tracking-wider">
                        Horario de Atención
                      </strong>
                      <span className="text-sm font-sans font-medium text-gray-800">
                        {selectedLocation.schedule}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-remag-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-display font-black uppercase text-gray-400 tracking-wider">
                        Ubicación / Dirección
                      </strong>
                      <span className="text-sm font-sans font-medium text-gray-800">
                        {selectedLocation.address}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedLocation.publicServed && (
                    <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center gap-3.5">
                      <div className="p-2.5 bg-blue-600 text-white rounded-xl">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-sans font-bold uppercase tracking-wider text-blue-700">
                          Público Atendido
                        </span>
                        <strong className="text-base md:text-lg font-display font-black text-blue-950">
                          {selectedLocation.publicServed}
                        </strong>
                      </div>
                    </div>
                  )}

                  <div className={`p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-center gap-3.5 ${
                    !selectedLocation.publicServed ? 'col-span-2' : ''
                  }`}>
                    <div className="p-2.5 bg-emerald-600 text-white rounded-xl">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-sans font-bold uppercase tracking-wider text-emerald-800">
                        Kgs Recolectados
                      </span>
                      <strong className="text-base md:text-lg font-display font-black text-emerald-950">
                        {selectedLocation.kgsCollected}
                      </strong>
                    </div>
                  </div>
                </div>

                <a
                  href={selectedLocation.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-gray-900 hover:bg-black text-white font-display font-black uppercase text-xs tracking-wider rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <Navigation className="w-4 h-4 text-remag-teal" />
                  <span>Ver en Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );

  if (isEmbedded) {
    return content;
  }

  return (
    <section id="donde-reciclar" className="py-24 bg-white relative">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-remag-blue-deep mb-4 tracking-tight">¿Dónde Reciclar?</h2>
          <p className="text-remag-gray-text max-w-2xl mx-auto text-lg font-sans font-normal leading-relaxed">
            Selecciona tu ciudad y consulta sus puntos limpios con horarios, mapa interactivo y kilos recolectados.
          </p>
        </div>
        {content}
      </Container>
    </section>
  );
};
