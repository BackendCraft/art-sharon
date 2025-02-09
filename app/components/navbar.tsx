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
      <div className="container mx-auto flex justify-between items-center py-6 px-6 bg-transparent">
        <h1 className="text-white text-2xl font-bold tracking-widest uppercase">
          Sharon Toribio
        </h1>
        <ul className="flex space-x-8">
          {[
            { name: "Art", id: "featuredworks" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-white text-lg font-medium tracking-widest uppercase transition duration-300 hover:text-gray-400"
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
