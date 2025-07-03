import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { FaWhatsapp } from "react-icons/fa";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer"; 
import { Services } from "../components/Services";

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative flex flex-col">
      <StarBackground />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-grow">
        <HeroSection />
        <About />
        <Skills />
        <Services />
        <Projects isMenuOpen={isMenuOpen} />
        <Contact />
      </main>
      <Footer />  {/* <-- incluye el footer aquí */}
      <a
        href="https://wa.me/34658431719"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#39FF14] text-white p-2 rounded-full shadow-lg transition duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="w-12 h-12" />
      </a>
    </div>
  );
};
