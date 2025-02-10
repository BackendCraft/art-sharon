"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateNavbarVisibility = () => {
      const heroHeight = window.innerHeight * 0.9; // Ajuste para que no desaparezca en "ART"
      setIsVisible(window.scrollY > heroHeight);
    };

    // Verifica la posición inicial del scroll al cargar la página
    updateNavbarVisibility();

    window.addEventListener("scroll", updateNavbarVisibility);
    return () => window.removeEventListener("scroll", updateNavbarVisibility);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false); // Cierra el menú en móvil al hacer clic
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 p-4 bg-transparent ${isVisible ? "" : "pointer-events-none"}`} // Hace que no interfiera cuando está oculto
    >
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => handleScroll("hero")} className="text-white text-xl font-bold hover:text-gray-300 transition-colors uppercase">
          SHARON TORIBIO
        </button>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {["about", "art", "portfolio", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleScroll(section)}
                  className="text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase"
                >
                  {section.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            {["about", "art", "portfolio", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleScroll(section)}
                  className="block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase"
                >
                  {section.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.div>
  );
}
