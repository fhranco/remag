import { Container } from "@/components/ui";
import { navigation, services } from "@/data";
import { Camera, Share2, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-remag-dark-bg text-white py-24 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* BRAND */}
          <div className="space-y-8">
            <div className="flex items-center gap-1">
              <span className="font-black text-3xl tracking-tighter text-white italic">RE</span>
              <span className="font-light text-3xl tracking-tight text-white/70 italic">MAG</span>
            </div>
            <p className="text-sm font-medium text-white/50 italic leading-relaxed">
              Gestión responsable de residuos en la Región de Magallanes. 
              Compromiso territorial, trazabilidad y educación ambiental.
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

          {/* SERVICIOS */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-remag-teal italic">Servicios</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#servicios" className="text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors italic">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NAVIGATION */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-remag-teal italic">Navegación</h4>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors italic">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-remag-teal italic">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-remag-teal shrink-0" size={20} />
                <span className="text-[11px] font-medium text-white/60 italic">[DIRECCIÓN PENDIENTE]</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-remag-teal shrink-0" size={20} />
                <span className="text-[11px] font-medium text-white/60 italic">[TELÉFONO PENDIENTE]</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-remag-teal shrink-0" size={20} />
                <span className="text-[11px] font-medium text-white/60 italic">[CORREO PENDIENTE]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="px-6 py-2 border border-remag-teal/20 bg-remag-teal/5">
             <span className="text-[8px] font-black uppercase tracking-[0.5em] text-remag-teal italic leading-none">
               CONSTRUIDO POR AGENCIA PATAGONIACOACH • ESTÁNDAR ULTRA
             </span>
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 italic">
            © 2026 REMAG PATAGONIA • TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </Container>
    </footer>
  );
};
