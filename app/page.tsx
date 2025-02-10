import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="art"><Gallery /></section>
      <section id="about"><About /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </main>
  );
}
