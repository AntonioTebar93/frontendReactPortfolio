import { FaLaptopCode, FaMobileAlt, FaServer, FaPalette, FaTools } from 'react-icons/fa';

export const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-primary text-4xl" />,
      title: 'Desarrollo de Páginas Web Personalizadas',
      description:
        'Diseño y desarrollo de sitios web completamente adaptados a tus necesidades. Desde páginas estáticas hasta portales corporativos y tiendas online. Me aseguro de que cada sitio sea moderno, responsive y optimizado para SEO y rendimiento.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Symfony', 'PHP'],
    },
    {
      icon: <FaMobileAlt className="text-primary text-4xl" />,
      title: 'Aplicaciones Web SPA (Single Page Applications)',
      description:
        'Construcción de interfaces dinámicas y fluidas que no requieren recarga de página. Ideal para plataformas interactivas como dashboards, gestores de contenido o aplicaciones empresariales con una experiencia de usuario superior.',
      tags: ['React', 'Redux', 'Framer Motion', 'Vite'],
    },
    {
      icon: <FaServer className="text-primary text-4xl" />,
      title: 'Desarrollo Backend y APIs REST',
      description:
        'Diseño y programación de lógica de servidor robusta, segura y escalable. Desarrollo de APIs RESTful para conectar interfaces frontend con bases de datos, servicios de terceros y sistemas internos.',
      tags: ['Symfony', 'Node.js', 'Express', 'PHP', 'MySQL', 'SQLite', 'JWT'],
    },
    {
      icon: <FaPalette className="text-primary text-4xl" />,
      title: 'Diseño UI/UX y Prototipado',
      description:
        'Diseño de interfaces atractivas y funcionales centradas en la experiencia del usuario. Trabajo desde bocetos hasta prototipos interactivos utilizando herramientas como Figma para garantizar un flujo intuitivo y coherente.',
      tags: ['Figma', 'UX Research', 'Wireframing', 'Diseño Responsivo'],
    },
    {
      icon: <FaTools className="text-primary text-4xl" />,
      title: 'Optimización, Mantenimiento y Mejora Continua',
      description:
        'Auditorías de rendimiento, refactorización de código, mejora de la accesibilidad y mantenimiento técnico para asegurar que tu proyecto evolucione con calidad y estabilidad en el tiempo.',
      tags: ['SEO', 'Lighthouse', 'Testing', 'Refactor', 'Accesibilidad'],
    },
  ];

  return (
    <section id="services" className="relative z-10 py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Servicios <span className="text-primary">Profesionales</span>
        </h2>

        <div className="space-y-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white/10 hover:bg-white/20 p-6 rounded-xl shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0">{service.icon}</div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-white mb-3 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
