"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function FloatingMenu() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setIsVisible(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold hover:text-gray-300 transition-colors uppercase">
          SHARON TORIBIO
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#art"
                className="text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase"
              >
                ART
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase"
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                href="#get-in-touch"
                className="text-white hover:text-gray-300 transition-colors text-xl font-bold uppercase"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4"
        >
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                href="#art"
                className="block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ART
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                href="#get-in-touch"
                className="block text-white hover:text-gray-300 transition-colors py-2 text-xl font-bold uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.div>
  )
}

