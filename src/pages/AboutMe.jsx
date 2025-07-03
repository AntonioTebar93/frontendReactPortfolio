import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

export const AboutMe = () => {
   return (
       <div className="min-h-screen relative flex flex-col">
         <StarBackground />
         <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
         <Footer />  {/* <-- incluye el footer aquí */}
         <a
           href="https://wa.me/34658431719"
           target="_blank"
           rel="noopener noreferrer"
           className="fixed bottom-6 right-6 z-50 bg-[#39FF14] text-white p-4 rounded-full shadow-lg transition duration-300"
           aria-label="Contactar por WhatsApp"
         >
           <FaWhatsapp className="w-10 h-10" />
         </a>
       </div>
     );
}