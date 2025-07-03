import { FaCode, FaBriefcase, FaShieldAlt } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about" className="py-25 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mí</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>Desarrollador Full Stack y Hacker Ético</h3>

            <p>
              1 año de experiencia en el desarrollo web, me especializo en crear sitios responsivos, accesibles y que rinden con las tecnologías más modernas.
            </p>

            <p>
              Me centro en el diseño de soluciones a problemas complejos, utilizando las mejores prácticas en cuanto a desarrollo y seguridad se refiere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Descubre más sobre mí
              </a>

              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/30 transition-colors duration-300"
              >
                Descarga mi CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full text-primary text-4xl">
                  <FaCode aria-hidden="true" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo Web</h4>
                  <p className="text-muted-foreground">
                    Creación de páginas y aplicaciones web con frameworks modernos
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full text-primary text-4xl">
                  <FaBriefcase aria-hidden="true" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Profesionalidad</h4>
                  <p className="text-muted-foreground">Trabajo eficiente, rápido y profesional</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full text-primary text-4xl">
                  <FaShieldAlt aria-hidden="true" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Seguridad</h4>
                  <p className="text-muted-foreground">
                    La seguridad en las aplicaciones web no es negociable, es un estándar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
