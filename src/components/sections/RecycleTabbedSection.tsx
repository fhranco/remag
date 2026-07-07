"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HowToRecycleSection } from "./HowToRecycleSection";
import { PreparationStepsSection } from "./PreparationStepsSection";
import { WhereToRecycleSection } from "./WhereToRecycleSection";
import { Recycle, HelpCircle, MapPin } from "lucide-react";

type TabType = "que" | "como" | "donde";

export const RecycleTabbedSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("que");

  const tabs = [
    {
      id: "que" as TabType,
      label: "¿Qué reciclamos?",
      icon: <Recycle className="w-5 h-5" />,
      component: <HowToRecycleSection isEmbedded={true} />,
    },
    {
      id: "como" as TabType,
      label: "¿Cómo reciclar?",
      icon: <HelpCircle className="w-5 h-5" />,
      component: <PreparationStepsSection isEmbedded={true} />,
    },
    {
      id: "donde" as TabType,
      label: "¿Dónde reciclar?",
      icon: <MapPin className="w-5 h-5" />,
      component: <WhereToRecycleSection isEmbedded={true} />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative w-full min-h-[100dvh] flex flex-col justify-start overflow-x-hidden">
      <div className="w-full flex-grow flex flex-col">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 w-full">
          {/* Main Section Header */}
          <div className="text-center mb-10 md:mb-12">
            <span className="text-remag-teal font-display font-black uppercase tracking-widest text-xs">
              Guía de Reciclaje Magallanes
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-remag-blue-deep mt-2 mb-4 tracking-tight">
              El cuidado del medio ambiente parte por casa
            </h2>
            <p className="text-remag-gray-text max-w-2xl mx-auto text-base md:text-lg font-sans font-normal">
              Aprende qué materiales recibimos, los pasos para prepararlos y los puntos de acopio en nuestra región.
            </p>
          </div>

          {/* Premium Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex p-1.5 bg-gray-100/80 backdrop-blur-md rounded-2xl md:rounded-3xl border border-gray-200/50 shadow-sm max-w-full overflow-x-auto no-scrollbar">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 md:gap-3 py-3 px-5 md:px-7 rounded-xl md:rounded-2xl transition-all duration-300 relative outline-none whitespace-nowrap text-xs md:text-sm font-display font-black uppercase tracking-wider
                      ${isActive ? "text-white" : "text-gray-500 hover:text-remag-blue-deep"}
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeRecycleTab"
                        className="absolute inset-0 bg-remag-blue-deep rounded-xl md:rounded-2xl shadow-md z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 shrink-0">{tab.icon}</span>
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content Panel */}
        <div className="w-full flex-grow relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full"
            >
              {tabs.find((t) => t.id === activeTab)?.component}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
