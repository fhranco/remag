"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { Building2, Landmark, ShieldCheck } from "lucide-react";

const companies = [
  "Concremag", "Australis", "AISLAPOL", "Aquachile", "Antartica XXI", 
  "ASMAR", "Ultramar", "Methanex", "Bravo Izquierdo", "SalfaCorp"
];

const entities = [
  "RESIMPLE", "Seremi de Medio Ambiente", "Agrupación"
];

const municipalities = [
  "Punta Arenas", "Natales", "Torres del Paine", "Cabo de Hornos", "San Gregorio"
];

const MarqueeRow = ({ items, icon, speed = 40, direction = "left" }: { items: string[], icon: React.ReactNode, speed?: number, direction?: "left" | "right" }) => {
  return (
    <div className="relative flex overflow-x-hidden group py-4">
      <div 
        className="flex whitespace-nowrap gap-6"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: direction === "left" ? "normal" : "reverse"
        }}
      >
        {/* We duplicate the items 3 times to ensure a smooth infinite scroll */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-6 shrink-0 pr-6">
            {items.map((item, idx) => (
              <div 
                key={`${i}-${idx}`} 
                className="flex items-center gap-3 bg-white px-8 py-5 rounded-2xl shadow-sm border border-gray-100 shrink-0 text-gray-700 font-display font-black uppercase hover:shadow-md hover:border-remag-green/50 transition-all cursor-default"
              >
                <div className="text-remag-teal opacity-60">{icon}</div>
                <span className="text-sm tracking-wider">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const TrustedBySection = () => {
  return (
    <section id="alianzas" className="h-[100dvh] w-full snap-start snap-always shrink-0 flex items-center justify-center relative overflow-hidden bg-gray-50">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
      `}} />
      
      <Container className="w-full max-w-none px-0">
        <div className="text-center mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-display font-black uppercase text-remag-blue-deep mb-4 tracking-tight"
          >
            Confían en <span className="text-remag-green">Nosotros</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-sans font-normal max-w-2xl mx-auto"
          >
            Empresas, entidades y municipalidades que ya son parte del cambio hacia una economía circular en Magallanes.
          </motion.p>
        </div>

        <div className="w-full flex flex-col gap-2 overflow-hidden mask-edges">
          <style dangerouslySetInnerHTML={{__html: `
            .mask-edges {
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
          `}} />
          
          <MarqueeRow items={companies} icon={<Building2 className="w-6 h-6" />} speed={50} direction="left" />
          <MarqueeRow items={municipalities} icon={<Landmark className="w-6 h-6" />} speed={40} direction="right" />
          <MarqueeRow items={entities} icon={<ShieldCheck className="w-6 h-6" />} speed={35} direction="left" />
        </div>
      </Container>
    </section>
  );
};
