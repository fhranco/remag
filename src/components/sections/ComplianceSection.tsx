"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { ShieldCheck, HeartPulse, Leaf, Award, CheckCircle2 } from "lucide-react";

export const ComplianceSection = () => {
  const certifications = [
    {
      icon: <HeartPulse className="w-10 h-10" />,
      title: "Salud",
      subtitle: "Ministerio de Salud",
      description: "Contamos con Resoluciones Sanitarias vigentes para el manejo, transporte y acopio de residuos.",
      color: "text-remag-teal",
      bg: "bg-[#f0f7f6]"
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "MMA",
      subtitle: "Medio Ambiente",
      description: "Operamos bajo el Sistema Ventanilla Única (RETC) y declaramos en SINADER, asegurando total transparencia.",
      color: "text-remag-green",
      bg: "bg-emerald-50"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Actor Ley REP",
      subtitle: "Gestor Autorizado",
      description: "Estamos inscritos y validados como Gestores de Residuos, garantizando el cumplimiento de las metas del Decreto 12.",
      color: "text-remag-blue-deep",
      bg: "bg-blue-50"
    }
  ];

  return (
    <section id="normativa" className="h-[100dvh] w-full snap-start snap-always shrink-0 flex items-center justify-center relative bg-white overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col h-full justify-center max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-50 text-remag-blue-deep font-sans font-normal tracking-widest uppercase text-sm mb-6 border border-blue-100"
            >
              <ShieldCheck className="w-5 h-5" /> Garantía de Operación
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-black uppercase text-remag-blue-deep mb-6 tracking-tight"
            >
              Cumplimos con la <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-remag-green to-remag-blue-deep">normativa vigente</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 font-sans font-normal leading-relaxed max-w-2xl mx-auto"
            >
              Nuestros procesos están validados por las principales entidades reguladoras del país, otorgando seguridad y respaldo legal a tu empresa.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle hover background sweep */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${cert.bg}`} />
                
                <div className={`w-20 h-20 rounded-2xl ${cert.bg} ${cert.color} flex items-center justify-center mb-8 shadow-sm`}>
                  {cert.icon}
                </div>
                
                <h3 className="text-2xl font-display font-black uppercase text-remag-blue-deep mb-2">{cert.title}</h3>
                <p className={`font-sans font-normal text-sm uppercase tracking-widest mb-6 ${cert.color}`}>
                  {cert.subtitle}
                </p>
                
                <p className="text-gray-500 leading-relaxed font-sans font-normal mb-6">
                  {cert.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-sans font-normal text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-remag-green" /> 100% Validado
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
