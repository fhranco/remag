"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "@/data";
import { Container, Button } from "@/components/ui";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-8"
      }`}
    >
      <Container className="h-full flex justify-between items-center">
        {/* LOGO AREA */}
        <motion.a 
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className={`w-12 h-12 flex items-center justify-center transition-all duration-500 organic-border ${
            isScrolled ? "bg-remag-blue-deep" : "bg-white/10 backdrop-blur-md"
          }`}>
            <span className="text-white font-black italic text-xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-black italic tracking-tighter leading-none transition-colors ${
              isScrolled ? "text-remag-blue-deep" : "text-white"
            }`}>RE<span className={isScrolled ? "text-remag-green" : "text-remag-teal"}>MAG</span></span>
            <span className={`text-[8px] font-black uppercase tracking-[0.4em] italic transition-colors ${
              isScrolled ? "text-remag-teal" : "text-white/40"
            }`}>Circular_v2.0</span>
          </div>
        </motion.a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`text-[10px] font-black uppercase tracking-[0.3em] italic transition-colors ${
                isScrolled ? "text-remag-gray-text hover:text-remag-teal" : "text-white/80 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
          <Button variant={isScrolled ? "primary" : "secondary"} className="!py-3 !px-6 !text-[9px]">
            SOLICITAR ASESORÍA
          </Button>
        </nav>

        {/* MOBILE TRIGGER */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className={isScrolled ? "text-remag-blue-deep" : "text-white"} size={28} />
        </button>
      </Container>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-remag-blue-deep z-[200] p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="flex items-center gap-1">
                <span className="font-black text-2xl text-white italic">RE</span>
                <span className="font-light text-2xl text-white/70 italic">MAG</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {navigation.map((item, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  key={item.name} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black uppercase tracking-tighter text-white italic flex items-center justify-between group"
                >
                  {item.name} <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto">
              <Button className="w-full">SOLICITAR ASESORÍA</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
