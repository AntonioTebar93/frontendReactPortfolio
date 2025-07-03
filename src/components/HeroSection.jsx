import { FaGithub, FaLinkedin } from "react-icons/fa";
import fotoPort from "../assets/photos/foto_port.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 snap-start"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Foto circular con borde */}
        <div className="mb-10 opacity-0 animate-fade-in">
          <img
            src={fotoPort} // Cambia la ruta por la correcta
            alt="Foto de Antonio Tebar"
            className="w-40 h-40 rounded-full border-4 border-primary object-cover"
          />
        </div>

        <div className="space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1"> Hola, soy</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2"> Antonio</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3"> Tebar</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-4">
            Soy Full Stack Developer. Me dedico a crear sitios web modernos, responsivos y seguros con las últimas tecnologías
          </p>

          <div className="flex justify-center gap-6 pt-4 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              Mis proyectos
            </a>
            <a href="#proyectos" className="cosmic-button">
              Presentación
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center gap-6 pt-6 opacity-0 animate-fade-in-delay-6">
            <a
              href="https://github.com/AntonioTebar93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-muted-foreground hover:text-primary transition-transform transform hover:scale-125 duration-300 ease-in-out"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/antonio-tebar-alfaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-muted-foreground hover:text-primary transition-transform transform hover:scale-125 duration-300 ease-in-out"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
