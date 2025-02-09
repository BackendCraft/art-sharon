"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 mt-20 text-center">
      <motion.h2
        className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About
      </motion.h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Sharon Toribio is an artist whose work explores the intersection of digital and traditional media.
        Through a unique blend of sculptures, paintings, and digital installations, she captures the essence of 
        contemporary artistic expression.
      </p>
    </section>
  );
}
