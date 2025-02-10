"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para hacer scroll suave a la sección seleccionada
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:py-6 md:px-6 bg-transparent">
        {/* Nombre del artista con tamaño más pequeño en móviles */}
        <h1 className="text-white font-bold tracking-widest uppercase text-xs sm:text-sm md:text-2xl">
          Sharon Toribio
        </h1>

        {/* Menú de navegación reducido en móviles */}
        <ul className="flex space-x-3 sm:space-x-5 md:space-x-8">
          {[
            { name: "Art", id: "featuredworks" },
            { name: "About", id: "about" }, // Apunta a la sección de Featured Works
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-white text-xs sm:text-sm md:text-lg font-medium tracking-widest uppercase transition duration-300 hover:text-gray-400"
              >
                {item.name}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
