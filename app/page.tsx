import Navbar from "./components/navbar";  // 🔹 Importamos el menú
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />   {/* 🔹 Agregamos el menú de navegación */}
      <Hero />
      <Gallery />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
