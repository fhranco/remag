"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "@/data";
import { Container, Button } from "@/components/ui";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      let scrolled = false;
      
      if (target === document || target === window.document) {
        scrolled = window.scrollY > 20;
      } else if (target && target.scrollTop !== undefined) {
        scrolled = target.scrollTop > 20;
      } else {
        const mainEl = document.querySelector("main");
        scrolled = window.scrollY > 20 || (mainEl ? mainEl.scrollTop > 20 : false);
      }
      
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { capture: true, passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] py-4" 
          : "bg-transparent py-8"
      }`}
    >
      <Container className="h-full flex justify-between items-center">
        {/* LOGO AREA */}
        <motion.a 
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center group cursor-pointer"
        >
          <img 
            src="/logo-remag.png" 
            alt="REMAG" 
            className={`h-11 w-auto object-contain transition-all duration-500 ${
              isScrolled ? "" : "brightness-0 invert"
            }`}
          />
        </motion.a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`text-[10px] font-display font-black uppercase tracking-[0.25em] transition-colors ${
                isScrolled ? "text-remag-gray-text hover:text-remag-teal" : "text-white/80 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
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
              <a href="/" className="inline-block">
                <img 
                  src="/logo-remag.png" 
                  alt="REMAG" 
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </a>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {navigation.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  key={item.name} 
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-display font-black uppercase tracking-tight text-white flex items-center justify-between group"
                  >
                    {item.name} <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
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
