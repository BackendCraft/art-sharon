"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">About the Artist</h2>
          <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
            <p>
              Sharon Toribio is a contemporary visual artist whose work explores the intricate relationship between
              humanity and the digital realm. With a career spanning over a decade, Sharon's art seamlessly blends
              traditional techniques with cutting-edge technology, creating pieces that challenge perceptions and evoke
              deep emotional responses.
            </p>
            <p>
              Inspired by the ever-evolving landscape of human interaction in the digital age, Sharon's work often
              features abstract representations of data flows, neural networks, and the ephemeral nature of online
              identities. Her unique style, characterized by bold color contrasts and intricate patterns, has garnered
              international acclaim and has been featured in prestigious galleries across Europe and North America.
            </p>
            <p>
              Sharon's artistic process is a reflection of her subject matter – a harmonious blend of traditional
              painting techniques and digital manipulation. This approach not only showcases her versatility as an
              artist but also serves as a commentary on the integration of technology in modern artistic expression.
            </p>
            <p>
              Through her art, Sharon invites viewers to contemplate their own relationship with the digital world,
              encouraging a dialogue about connectivity, privacy, and the future of human interaction in an increasingly
              virtual landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

