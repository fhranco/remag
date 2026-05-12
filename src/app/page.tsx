import { HeroSection } from "@/components/sections/HeroSection";
import { PurposeSection } from "@/components/sections/PurposeSection";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ValueChainSection } from "@/components/sections/ValueChainSection";
import { LeyRepSection } from "@/components/sections/LeyRepSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { EducationSection } from "@/components/sections/EducationSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <main className="relative bg-white">
      {/* 🏔️ CAPA 1: IMPACTO VISUAL */}
      <HeroSection />

      {/* 🏔️ CAPA 2: IDENTIDAD Y PROPÓSITO */}
      <PurposeSection />
      
      {/* 🏔️ CAPA 3: ESTRUCTURA INSTITUCIONAL */}
      <MissionVisionSection />
      <ValuesSection />

      {/* 🏔️ CAPA 4: SOLUCIONES TÉCNICAS */}
      <ServicesSection />
      <ValueChainSection />
      <LeyRepSection />

      {/* 🏔️ CAPA 5: VINCULACIÓN Y EDUCACIÓN */}
      <CommunitySection />
      <EducationSection />

      {/* 🏔️ CAPA 6: CONVERSIÓN FINAL */}
      <FinalCTASection />
    </main>
  );
}
