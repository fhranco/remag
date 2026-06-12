"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { Droplets, Minimize2, Trash2, Wind } from "lucide-react";

const prepSteps = [
  {
    title: "Vaciar",
    description: "Retira todo el contenido sobrante del envase. No deben quedar restos de comida ni líquidos de ningún tipo.",
    icon: <Trash2 className="w-10 h-10" />,
    color: "text-remag-teal border-remag-teal/20 bg-remag-teal/10"
  },
  {
    title: "Enjuagar",
    description: "Usa un poco de agua (idealmente reutilizada del lavado) para quitar residuos pegajosos y evitar malos olores.",
    icon: <Droplets className="w-10 h-10" />,
    color: "text-remag-green border-remag-green/20 bg-remag-green/10"
  },
  {
    title: "Secar",
    description: "Deja estilar el envase. La humedad arruina por completo los papeles y cartones, todo debe entregarse seco.",
    icon: <Wind className="w-10 h-10" />,
    color: "text-remag-teal border-remag-teal/20 bg-remag-teal/10"
  },
  {
    title: "Aplastar",
    description: "Reduce el volumen de botellas PET, latas y cajas de cartón. Así optimizamos el transporte y la huella de carbono.",
    icon: <Minimize2 className="w-10 h-10" />,
    color: "text-remag-green border-remag-green/20 bg-remag-green/10"
  }
];

export const PreparationStepsSection = () => {
  return (
    <section className="py-24 bg-remag-blue-deep text-white relative overflow-hidden">
      <Container>
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white mb-6 tracking-tight">¿Cómo Reciclar?</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg font-sans font-normal leading-relaxed">
            El éxito del reciclaje y del trabajo de los recicladores de base comienza en casa. Aplica nuestra <strong>regla de oro de 4 pasos</strong> antes de separar tus residuos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-7xl mx-auto relative pt-8">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[12%] right-[12%] h-0.5 bg-white/10 z-0 rounded-full"></div>

          {prepSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className={`w-28 h-28 rounded-full flex items-center justify-center shadow-xl mb-8 border-4 transition-transform duration-500 group-hover:scale-110 ${step.color}`}>
                {step.icon}
              </div>
              
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm px-6 pb-6 pt-6 rounded-3xl w-full">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-white text-remag-blue-deep text-sm font-bold flex items-center justify-center shadow-md">
                    {idx + 1}
                  </span>
                  <h3 className="font-display font-black uppercase text-xl text-white tracking-tight">{step.title}</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed font-sans font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
