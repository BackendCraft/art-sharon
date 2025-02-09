"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const images = [
    {
      src: "/image1.png?height=600&width=400",
      alt: "Art piece 1",
      title: "Ethereal Dreams",
      videoUrl: "https://player.vimeo.com/video/445711302?h=6b75b11433",
    },
    {
      src: "/image2.png?height=600&width=400",
      alt: "Art piece 2",
      title: "Urban Symphony",
      videoUrl: "https://player.vimeo.com/video/12856975?h=5251c2315e",
    },
    {
      src: "/image3.png?height=600&width=400",
      alt: "Art piece 3",
      title: "Digital Nostalgia",
      videoUrl: "https://player.vimeo.com/video/12284032?h=72595b1417",
    },
    {
      src: "/image4.png?height=600&width=400",
      alt: "Art piece 4",
      title: "Abstract Reality",
      videoUrl: "https://player.vimeo.com/video/412979474?h=5d0154c0b4",
    },
  ];

  return (
    <section className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Works
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => {
                if (image.videoUrl) {
                  setSelectedVideo(image.videoUrl);
                }
              }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal para mostrar el video en pantalla completa con botón de cierre */}
      {selectedVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={() => setSelectedVideo(null)} // Cierra el modal al hacer clic fuera del video
        >
          <div
            className="relative bg-black w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre si haces clic en el video
          >
            {/* Botón de cierre en la esquina superior derecha */}
            <button
              className="absolute top-5 right-5 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full px-4 py-2 hover:bg-opacity-80 transition"
              onClick={() => setSelectedVideo(null)}
            >
              ✖
            </button>

            <iframe
              className="w-full h-full"
              src={selectedVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
