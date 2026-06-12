"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui";
import { navigation, services } from "@/data";
import { Camera, Share2, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <footer id="contacto" className="w-full">
      
      {/* 1. SECCIÓN DE CONTACTO (Fondo Blanco - Alto Contraste) */}
      <div className="bg-white py-24 border-t border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch max-w-7xl mx-auto">
            
            {/* Información de Contacto */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
              <div>
                <span className="inline-block py-2 px-4 rounded-full bg-remag-teal/10 text-remag-teal font-display font-black tracking-widest uppercase text-xs mb-6 border border-remag-teal/20">
                  Contacto Comercial
                </span>
                <h3 className="text-4xl md:text-5xl font-display font-black uppercase text-remag-blue-deep mb-6 tracking-tight leading-none">
                  Conéctate <br />con nosotros
                </h3>
                <p className="text-base text-remag-gray-text font-sans font-normal leading-relaxed max-w-md">
                  Estamos listos para asesorar a tu empresa, industria o municipio en Magallanes. Escríbenos para coordinar retiros, cotizar servicios o resolver dudas sobre la Ley REP.
                </p>
              </div>

              <div className="space-y-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-remag-gray-light rounded-xl text-remag-teal shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h5 className="font-display font-black text-xs uppercase text-remag-blue-deep tracking-wider mb-1">Dirección Planta</h5>
                    <p className="text-sm font-sans font-normal text-remag-gray-text">Barrio Industrial, Manzana 4, Lote 2, Punta Arenas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-remag-gray-light rounded-xl text-remag-teal shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h5 className="font-display font-black text-xs uppercase text-remag-blue-deep tracking-wider mb-1">Teléfono</h5>
                    <p className="text-sm font-sans font-normal text-remag-gray-text">+56 61 224 4000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-remag-gray-light rounded-xl text-remag-teal shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h5 className="font-display font-black text-xs uppercase text-remag-blue-deep tracking-wider mb-1">Correo Electrónico</h5>
                    <a href="mailto:contacto@remag.cl" className="text-sm font-sans font-normal text-remag-teal hover:underline">contacto@remag.cl</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="lg:col-span-7 bg-remag-gray-light/50 border border-remag-blue-deep/5 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center shadow-sm">
              <h4 className="text-2xl font-display font-black uppercase text-remag-blue-deep mb-6 tracking-tight">Escríbenos un Mensaje</h4>
              
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-remag-green shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display font-black uppercase text-sm text-gray-900 mb-1">¡Mensaje Recibido!</h5>
                    <p className="text-xs font-sans font-normal text-gray-600 leading-relaxed">
                      Muchas gracias por escribirnos. Nuestro equipo en Punta Arenas se pondrá en contacto contigo a la brevedad.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-display font-black uppercase text-remag-blue-deep tracking-wider mb-2">Nombre</label>
                      <input 
                        type="text" 
                        placeholder="Ej. Juan Pérez"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-remag-teal transition-colors text-sm font-sans font-normal"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-display font-black uppercase text-remag-blue-deep tracking-wider mb-2">Email</label>
                      <input 
                        type="email" 
                        placeholder="Ej. juan@empresa.cl"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-remag-teal transition-colors text-sm font-sans font-normal"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-display font-black uppercase text-remag-blue-deep tracking-wider mb-2">Mensaje o Consulta</label>
                    <textarea 
                      placeholder="Detalla aquí tu requerimiento..."
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-remag-teal transition-colors text-sm resize-none font-sans font-normal"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-remag-blue-deep hover:bg-remag-teal disabled:opacity-50 text-white font-display font-black uppercase text-xs tracking-wider py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Enviando..." : (
                      <>
                        <Send className="w-4 h-4" /> Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </Container>
      </div>

      {/* 2. MAPA A TODO ANCHO (100% Viewport Width) */}
      <div className="w-full h-[450px] relative overflow-hidden border-t border-b border-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9894.24941982705!2d-70.9207043810143!3d-53.13220464619374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdbb24a9195b4cc7%3A0x8e8334460f1dc7d4!2sBarrio%20Industrial%2C%20Punta%20Arenas%2C%20Magallanes%20y%20la%20Ant%C3%A1rtica%20Chilena!5e0!3m2!1ses!2scl!4v1718200000000!5m2!1ses!2scl" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(20%) contrast(105%) brightness(98%)' }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* 3. ENLACES Y COPYRIGHT (Fondo Azul Profundo Corporativo) */}
      <div className="bg-remag-blue-deep text-white py-20 relative overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-remag-teal/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 translate-x-1/3"></div>
        
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            
            {/* BRAND Column */}
            <div className="space-y-6">
              <a href="/" className="inline-block">
                <img 
                  src="/logo-remag.png" 
                  alt="REMAG" 
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </a>
              <p className="text-sm font-sans font-normal text-white/50 leading-relaxed max-w-xs">
                Gestión responsable de residuos en la Región de Magallanes. Compromiso territorial, trazabilidad y educación ambiental.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-remag-teal transition-colors">
                  <Camera size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-remag-teal transition-colors">
                  <Share2 size={18} />
                </a>
              </div>
            </div>

            {/* SERVICIOS Column */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-remag-teal">Servicios</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link href="/#servicios" className="text-[11px] font-display font-black uppercase tracking-wider text-white/40 hover:text-white transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* NAVEGACIÓN Column */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-remag-teal">Navegación</h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-[11px] font-display font-black uppercase tracking-wider text-white/40 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* PLANTA INFO Column */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-remag-teal">Contacto Rápido</h4>
              <p className="text-[11px] font-sans font-normal text-white/60 leading-relaxed">
                Planta REMAG: Barrio Industrial, Manzana 4, Lote 2, Punta Arenas. <br/>
                Lunes a Viernes de 09:00 a 18:00 hrs.
              </p>
              <a href="mailto:contacto@remag.cl" className="inline-block text-[11px] font-sans font-bold text-remag-teal hover:underline">
                contacto@remag.cl
              </a>
            </div>

          </div>

          {/* COPYRIGHT & CREDITS */}
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="px-6 py-2 border border-remag-teal/20 bg-remag-teal/5">
              <span className="text-[8px] font-display font-black uppercase tracking-[0.3em] text-remag-teal leading-none">
                CONSTRUIDO POR AGENCIA PATAGONIACOACH • ESTÁNDAR ULTRA
              </span>
            </div>
            <p className="text-[9px] font-display font-black uppercase tracking-[0.3em] text-white/20">
              © 2026 REMAG PATAGONIA • TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
          
        </Container>
      </div>

    </footer>
  );
};
