import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SustainableSolutionsSection } from "@/components/sections/SustainableSolutionsSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { RecycleTabbedSection } from "@/components/sections/RecycleTabbedSection";
import { LeyRepSection } from "@/components/sections/LeyRepSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { EducationSection } from "@/components/sections/EducationSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative bg-white h-[100dvh] w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* 1. Hero */}
      <div className="snap-start snap-always min-h-[100dvh] w-full flex flex-col justify-center">
        <HeroSection />
      </div>

      {/* 2. Nuestros Servicios */}
      <div className="snap-start snap-always min-h-[100dvh] w-full flex flex-col justify-center">
        <ServicesSection />
      </div>

      {/* 3. Impacto de Nuestra Gestión */}
      <div className="snap-start snap-always min-h-[100dvh] w-full flex flex-col justify-center">
        <SustainableSolutionsSection />
      </div>

      {/* 5. Nuestros Valores */}
      <div className="snap-start snap-always min-h-[100dvh] w-full flex flex-col justify-center">
        <ValuesSection />
      </div>

      {/* 6. Guía de Reciclaje (Qué, Cómo y Dónde) */}
      <div className="snap-start snap-always min-h-[100dvh] w-full flex flex-col justify-center">
        <RecycleTabbedSection />
      </div>

      {/* 7. Ley REP */}
      <div className="snap-start snap-always min-h-[100dvh] w-full flex flex-col justify-center">
        <LeyRepSection />
      </div>

      {/* 8. REMAG: Cumplimos con la normativa vigente */}
      <div className="snap-start snap-always min-h-[100dvh] w-full flex flex-col justify-center">
        <ComplianceSection />
      </div>

      {/* 9. Confían en Nosotros */}
      <div className="snap-start snap-always min-h-[100dvh] w-full flex flex-col justify-center">
        <TrustedBySection />
      </div>

      {/* 10. Aprende */}
      <div className="snap-start snap-always min-h-[100dvh] w-full flex flex-col justify-center">
        <EducationSection />
      </div>

      {/* 11. Footer (Sección de Contacto y Mapa) */}
      <div className="snap-start snap-always w-full">
        <Footer />
      </div>
    </main>
  );
}
