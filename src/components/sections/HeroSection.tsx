"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Button } from "@/components/ui";

const SLIDES = [
  {
    id: 0,
    title: "Gestión Responsable de Residuos y Reciclaje",
    description: "Cuidado del Medio Ambiente.",
    bgImage: "/Gestion%20responsable.webp",
    thumbLabel: "Reciclaje",
    thumbText: "Dónde reciclar",
    primaryCta: "Dónde reciclar",
    primaryCtaLink: "#donde-reciclar",
    secondaryCta: "",
  },
  {
    id: 1,
    title: "Partner Estratégico",
    description: "Municipio - Industria - Comunidad.",
    bgImage: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=2000",
    thumbLabel: "Servicios",
    thumbText: "Nuestros Servicios",
    primaryCta: "Nuestros Servicios",
    primaryCtaLink: "#servicios",
    secondaryCta: "",
  },
  {
    id: 2,
    title: "Empresa 100% Regional",
    description: "Compromiso con la región y su gente.",
    bgImage: "/Empresa%20regional.webp",
    thumbLabel: "Región",
    thumbText: "Red de Gestión",
    primaryCta: "Red de Gestión",
    primaryCtaLink: "#alianzas",
    secondaryCta: "",
  }
];

const AUTOPLAY_DURATION = 6000;

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_DURATION);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black">
      {/* BACKGROUNDS */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SLIDES[currentSlide].bgImage})` }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/90 via-black/50 to-black/20" />

      {/* MAIN CONTENT */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center">
        <Container className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase leading-tight mb-6 tracking-tight drop-shadow-lg">
                {SLIDES[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl font-sans text-white/80 mb-8 leading-relaxed font-normal">
                {SLIDES[currentSlide].description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {SLIDES[currentSlide].primaryCta && (
                  <a href={SLIDES[currentSlide].primaryCtaLink} className="inline-block">
                    <Button variant="primary" className="h-14 px-8 text-base">
                      {SLIDES[currentSlide].primaryCta}
                    </Button>
                  </a>
                )}
                {SLIDES[currentSlide].secondaryCta && (
                  <Button variant="outline" className="h-14 px-8 text-base text-white border-white/30 hover:bg-white/10">
                    {SLIDES[currentSlide].secondaryCta}
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>

      {/* THUMBNAILS NAVIGATION */}
      <div className="absolute bottom-6 md:bottom-12 left-0 w-full z-20">
        <Container>
          <div className="flex gap-4 md:gap-6 max-w-4xl overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`
                    group relative flex-1 min-w-[200px] flex items-center gap-4 p-3 rounded-xl text-left transition-all duration-300 overflow-hidden
                    ${isActive ? 'bg-white/20 shadow-lg' : 'bg-white/5 hover:bg-white/10'}
                    backdrop-blur-md border border-white/10
                  `}
                >
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-cover bg-center shrink-0"
                    style={{ backgroundImage: `url(${slide.bgImage})` }}
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-display font-black uppercase tracking-widest text-remag-teal mb-1">
                      {slide.thumbLabel}
                    </span>
                    <span className="text-sm md:text-base font-display font-black text-white">
                      {slide.thumbText}
                    </span>
                  </div>

                  {/* ACTIVE PROGRESS BAR */}
                  {isActive && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTOPLAY_DURATION / 1000, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-1 bg-remag-teal"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
};
