"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Gallery() {
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
      videoUrl: "https://www.youtube.com/embed/RNSuX4KoWWQ?si=EZPaOR7atEyiDa6m",
    },
  ];

  return (
    <section id="featuredworks" className="relative py-20">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Featured Works
      </motion.h2>

      <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
              <h3 className="text-xl font-semibold text-white">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de video en pantalla completa */}
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md z-50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic en el video
          >
            {/* Botón de cierre en la esquina superior derecha */}
            <button
              className="absolute top-4 right-4 text-white text-4xl bg-black bg-opacity-50 rounded-full px-4 py-2 hover:bg-opacity-80 transition"
              onClick={() => setSelectedVideo(null)}
            >
              ✖
            </button>

            {/* Video en pantalla completa */}
            <iframe
              className="w-full h-full"
              src={selectedVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
