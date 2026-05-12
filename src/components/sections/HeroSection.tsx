"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { Container, Button } from "@/components/ui";

const CircularFlowScene = dynamic(
  () => import("@/components/three/CircularFlowScene"),
  { ssr: false }
);

export const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[700px] bg-remag-dark-bg overflow-hidden tactic-grid flex flex-col justify-center">
      {/* 🏔️ IMAGE DEPTH LAYER */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]), scale: 1.1 }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <img 
          src="/remag_landscape_patagonia_1778584883663.png" 
          alt="Patagonia Industrial Landscape" 
          className="w-full h-full object-cover grayscale-[0.5] contrast-[1.2]"
        />
      </motion.div>

      {/* 🏔️ 3D LAYER */}
      <div className="absolute inset-0 z-[1]">
        <CircularFlowScene />
      </div>

      {/* 🏔️ GRADIENT VIGNETTE - Stronger for contrast */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-remag-dark-bg/90 via-remag-dark-bg/40 to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-remag-dark-bg via-transparent to-remag-dark-bg/60 opacity-100" />

      <Container className="relative z-10">
        <motion.div 
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-remag-teal" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-remag-teal italic">
              Magallanes // Chile
            </span>
          </div>

          <h1 className="text-title-xl text-white mb-12 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            RE<span className="text-remag-green">MAG</span><br />
            <span className="mask-text">CIRCULAR</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <p className="text-xl md:text-2xl font-medium text-white/80 italic leading-tight uppercase tracking-tighter drop-shadow-md">
                Ingeniería táctica para la gestión de residuos y economía circular en el territorio austral.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-4">
              <Button variant="primary" className="h-14 !px-10">SOLICITAR OPERACIÓN</Button>
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                System Status: Ready // Location: PUQ_ALPHA
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
