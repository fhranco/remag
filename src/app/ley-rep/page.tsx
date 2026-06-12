"use client";

import { Container } from "@/components/ui";
import { 
  Scale, Target, AlertTriangle, ArrowLeft, CheckCircle2, 
  Package, Battery, Cpu, Droplets, CircleDashed, BatteryWarning,
  Building2, Users, Recycle, FileSpreadsheet, ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";

export default function LeyRepPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-remag-blue-deep text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-remag-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <Container className="relative z-10">
          <Link href="/#ley-rep" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-display font-black uppercase text-sm mb-12 transition-colors">
            <ArrowLeft className="w-5 h-5" /> Volver al Inicio
          </Link>
          
          <div className="max-w-3xl">
            <span className="inline-block py-2 px-4 rounded-full bg-remag-green/20 text-remag-green font-display font-black tracking-widest uppercase text-xs mb-6 border border-remag-green/30">
              Marco Regulatorio Chileno
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase mb-6 tracking-tight leading-[1.05]">
              Ley REP y <br/><span className="text-remag-green">Decreto 12</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-sans font-normal leading-relaxed max-w-2xl">
              La Ley de Responsabilidad Extendida del Productor (Ley 20.920) cambia las reglas del juego: el que contamina, paga. Descubre cómo afecta a tu empresa y cómo cumplir con la normativa de Envases y Embalajes.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-24">

            {/* 1. ¿Qué es la Ley REP? */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-blue-100 rounded-2xl text-remag-blue-deep">
                  <Scale className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-remag-blue-deep tracking-tight">¿Qué es la Ley REP?</h2>
              </div>
              <div className="text-gray-600 max-w-none font-sans font-normal text-base md:text-lg leading-relaxed space-y-6">
                <p>
                  Promulgada en 2016, la <strong className="font-sans font-bold">Ley N° 20.920</strong> establece el marco para la gestión de residuos, la Responsabilidad Extendida del Productor y el fomento al reciclaje en Chile.
                </p>
                <p className="text-xl font-sans font-bold italic text-gray-800 border-l-4 border-remag-green pl-6 my-8 py-2 leading-relaxed">
                  Obliga a las empresas que introducen "Productos Prioritarios" al mercado nacional a organizar y financiar la gestión de los residuos que derivan de ellos una vez terminada su vida útil.
                </p>
                <p>
                  El objetivo principal es transitar desde una economía lineal (extraer, producir, desechar) hacia una <strong className="font-sans font-bold italic">Economía Circular</strong>, disminuyendo la generación de basura en vertederos y protegiendo el medio ambiente de Magallanes y de todo el país.
                </p>
              </div>
            </div>

            {/* 2. Productos Prioritarios */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-remag-blue-deep tracking-tight mb-4">Los 6 Productos Prioritarios</h2>
                <p className="text-lg text-gray-500 font-sans font-normal">
                  La ley identificó seis productos de consumo masivo y volumen significativo para regularlos mediante decretos supremos.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { icon: <Package className="w-8 h-8" />, name: "Envases y Embalajes" },
                  { icon: <CircleDashed className="w-8 h-8" />, name: "Neumáticos" },
                  { icon: <Droplets className="w-8 h-8" />, name: "Aceites Lubricantes" },
                  { icon: <Battery className="w-8 h-8" />, name: "Pilas" },
                  { icon: <BatteryWarning className="w-8 h-8" />, name: "Baterías" },
                  { icon: <Cpu className="w-8 h-8" />, name: "Aparatos Electrónicos" }
                ].map((prod, i) => (
                  <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-remag-green mb-4">{prod.icon}</div>
                    <span className="font-display font-black uppercase text-sm text-gray-800">{prod.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Decreto 12: Envases y Embalajes */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/3">
                  <div className="p-4 bg-emerald-50 rounded-2xl text-remag-green inline-block mb-6">
                    <Target className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-display font-black uppercase text-remag-blue-deep tracking-tight mb-4">Decreto Supremo 12</h2>
                  <p className="text-gray-500 font-sans font-normal text-sm md:text-base leading-relaxed">
                    Establece las metas de recolección y valorización específicas para la categoría de <strong className="font-sans font-bold">Envases y Embalajes (EyE)</strong>, vigentes desde septiembre de 2023.
                  </p>
                </div>
                
                <div className="w-full md:w-2/3 space-y-8">
                  <div>
                    <h3 className="font-display font-black uppercase text-lg text-gray-800 mb-4 border-b border-gray-100 pb-2">Subcategorías Reguladas</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-5 rounded-2xl">
                        <span className="block text-xs font-display font-black text-remag-green uppercase tracking-widest mb-2">Domiciliarios</span>
                        <p className="text-gray-600 font-sans font-normal text-sm leading-relaxed">Residuos generados en hogares o que tienen características similares (ej. botellas plásticas, cajas de cereal).</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-2xl">
                        <span className="block text-xs font-display font-black text-remag-blue-deep uppercase tracking-widest mb-2">No Domiciliarios</span>
                        <p className="text-gray-600 font-sans font-normal text-sm leading-relaxed">Residuos generados exclusivamente en procesos industriales o comerciales (ej. stretch film de pallets, tambores).</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-black uppercase text-lg text-gray-800 mb-4 border-b border-gray-100 pb-2">Materiales Afectos</h3>
                    <div className="flex flex-wrap gap-3">
                      {["Papel y Cartón", "Plástico", "Vidrio", "Metal", "Cartón para Líquidos"].map((mat, i) => (
                        <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-display font-black uppercase text-gray-700 shadow-sm">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. ¿Cómo funciona el Ecosistema REP? */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-remag-blue-deep tracking-tight mb-12 text-center">¿Cómo funciona el Ecosistema REP?</h2>
              
              <div className="relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative">
                    <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                      <Building2 className="w-7 h-7 text-gray-600" />
                    </div>
                    <span className="absolute -top-3 -left-3 w-8 h-8 bg-remag-blue-deep text-white rounded-full flex items-center justify-center font-display font-black text-xs">1</span>
                    <h4 className="font-display font-black uppercase text-sm text-gray-900 mb-2">Productor</h4>
                    <p className="text-xs font-sans font-normal text-gray-500 leading-relaxed">Introduce el producto envasado al mercado y financia al Sistema de Gestión.</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative">
                    <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                      <Users className="w-7 h-7 text-gray-600" />
                    </div>
                    <span className="absolute -top-3 -left-3 w-8 h-8 bg-remag-blue-deep text-white rounded-full flex items-center justify-center font-display font-black text-xs">2</span>
                    <h4 className="font-display font-black uppercase text-sm text-gray-900 mb-2">Consumidor</h4>
                    <p className="text-xs font-sans font-normal text-gray-500 leading-relaxed">Consume el producto y separa el envase limpio para su reciclaje.</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-remag-green text-center relative transform md:-translate-y-4">
                    <div className="w-16 h-16 mx-auto bg-remag-green/10 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                      <Recycle className="w-7 h-7 text-remag-green" />
                    </div>
                    <span className="absolute -top-3 -left-3 w-8 h-8 bg-remag-green text-white rounded-full flex items-center justify-center font-display font-black text-xs">3</span>
                    <h4 className="font-display font-black uppercase text-sm text-gray-900 mb-2">Gestor (REMAG)</h4>
                    <p className="text-xs font-sans font-normal text-gray-500 leading-relaxed">Recolecta, pre-trata y asegura la trazabilidad y valorización del residuo.</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative">
                    <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                      <FileSpreadsheet className="w-7 h-7 text-gray-600" />
                    </div>
                    <span className="absolute -top-3 -left-3 w-8 h-8 bg-remag-blue-deep text-white rounded-full flex items-center justify-center font-display font-black text-xs">4</span>
                    <h4 className="font-display font-black uppercase text-sm text-gray-900 mb-2">Sistema de Gestión</h4>
                    <p className="text-xs font-sans font-normal text-gray-500 leading-relaxed">Consolida la información del Gestor y reporta el cumplimiento al Ministerio.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Fiscalización y Multas */}
            <div className="bg-remag-gray-light rounded-[2rem] p-8 md:p-12 border border-remag-blue-deep/10 flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/3">
                <div className="w-20 h-20 bg-white rounded-2xl text-remag-blue-deep shadow-sm flex items-center justify-center mb-6">
                  <AlertTriangle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-display font-black uppercase text-remag-blue-deep leading-[1.15] mb-4">Fiscalización<br/>y Multas</h2>
                <p className="text-remag-gray-text font-sans font-normal text-sm leading-relaxed">
                  La Superintendencia del Medio Ambiente (SMA) es la entidad encargada de fiscalizar el cumplimiento.
                </p>
              </div>
              <div className="md:w-2/3 w-full space-y-3">
                <div className="bg-white p-5 rounded-2xl flex items-center gap-4 justify-between border border-remag-blue-deep/10">
                  <span className="font-display font-black uppercase text-xs md:text-sm text-remag-blue-deep">Infracción Leve</span>
                  <span className="text-remag-gray-text font-sans font-normal text-sm text-right">Hasta <strong className="font-sans font-bold text-remag-blue-deep">1.000 UTA</strong><br/><span className="text-xs font-normal opacity-70">(~$760 millones CLP)</span></span>
                </div>
                <div className="bg-white p-5 rounded-2xl flex items-center gap-4 justify-between border border-remag-blue-deep/20">
                  <span className="font-display font-black uppercase text-xs md:text-sm text-remag-blue-deep">Infracción Grave</span>
                  <span className="text-remag-gray-text font-sans font-normal text-sm text-right">Hasta <strong className="font-sans font-bold text-remag-blue-deep">5.000 UTA</strong><br/><span className="text-xs font-normal opacity-70">(~$3.800 millones CLP)</span></span>
                </div>
                <div className="bg-white p-5 rounded-2xl flex items-center gap-4 justify-between shadow-md border-l-4 border-l-remag-teal">
                  <span className="font-display font-black uppercase text-xs md:text-sm text-remag-blue-deep">Infracción Gravísima</span>
                  <span className="text-remag-gray-text font-sans font-normal text-sm text-right">Hasta <strong className="font-sans font-bold text-remag-blue-deep">10.000 UTA</strong><br/><span className="text-xs font-normal opacity-70">(~$7.600 millones CLP)</span></span>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center py-10">
              <h3 className="text-2xl md:text-3xl font-display font-black uppercase text-remag-blue-deep mb-6">¿Buscas un Gestor Autorizado para el cumplimiento REP?</h3>
              <p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto font-sans font-normal leading-relaxed">
                En REMAG ofrecemos trazabilidad completa, plataformas tecnológicas y certificados de disposición final visados para que tus auditorías ambientales sean impecables.
              </p>
              <Link href="/#contacto" className="inline-flex items-center justify-center bg-remag-green hover:bg-[#73a23d] text-white font-display font-black uppercase py-5 px-12 rounded-full transition-all shadow-[0_10px_30px_rgba(132,181,71,0.3)] hover:shadow-[0_15px_40px_rgba(132,181,71,0.4)] hover:-translate-y-1 duration-300 text-base md:text-lg tracking-wider">
                CONTACTAR A REMAG
              </Link>
            </div>

          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
