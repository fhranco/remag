"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { Scale, ShieldCheck, ArrowRight, BookOpen, Target, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const LeyRepSection = () => {
  return (
    <section id="ley-rep" className="py-20 bg-remag-blue-deep text-white relative overflow-hidden h-full flex flex-col justify-center">
      {/* Decorative Background Element */}
      <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[120%] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Context & Law */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-remag-green/20 rounded-xl">
                  <Scale className="w-6 h-6 text-remag-green" />
                </div>
                <span className="text-sm font-display font-black tracking-[0.2em] text-remag-green">
                  Marco Legal
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 leading-[1.1] tracking-tight">
                Ley REP.
              </h2>

              <div className="space-y-8">
                {/* Norma */}
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-display font-black uppercase mb-3 text-white/90">
                    <BookOpen className="w-5 h-5 text-remag-teal" /> La Norma
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed font-sans font-normal">
                    La Ley 20.920 establece que toda empresa que introduce ciertos productos al mercado (Productores) debe organizar y financiar la recolección y valorización de los residuos derivados de estos.
                  </p>
                </div>

                {/* Por qué existe */}
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-display font-black uppercase mb-3 text-white/90">
                    <Target className="w-5 h-5 text-remag-teal" /> ¿Por qué existe?
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed font-sans font-normal">
                    Para transitar desde una economía lineal hacia una <strong className="text-white font-sans font-bold italic">Economía Circular</strong>, disminuir drásticamente los residuos en vertederos y proteger los ecosistemas de Magallanes y el mundo.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Products & CTA */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-display font-black uppercase mb-6 flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-remag-green" />
                Productos Prioritarios
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {[
                  "Envases y Embalajes",
                  "Neumáticos",
                  "Aceites Lubricantes",
                  "Pilas",
                  "Baterías",
                  "Aparatos Eléctricos y Electrónicos"
                ].map((product, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/80 font-sans font-normal">
                    <div className="w-1.5 h-1.5 rounded-full bg-remag-green" />
                    {product}
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-white/10">
                <h4 className="text-3xl font-display font-black uppercase mb-4 tracking-tight">¿Tu empresa cumple?</h4>
                <p className="text-white/60 mb-8 font-sans font-normal">
                  Asegura la trazabilidad y evita multas. Conoce los detalles de las metas de recolección, cumplimiento y plazos.
                </p>
                
                <Link 
                  href="/ley-rep"
                  className="inline-flex items-center justify-center gap-3 bg-remag-green hover:bg-remag-green/90 text-white font-display font-black py-4 px-8 rounded-full transition-colors w-full sm:w-auto uppercase tracking-wider text-sm"
                >
                  SABER MÁS <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};
