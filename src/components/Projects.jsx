import { FaGithub, FaYoutube, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import proyecto1 from '../assets/photos/projects/proyecto_1.png';
import proyecto2 from '../assets/photos/projects/proyecto_2.png';
import proyecto3 from '../assets/photos/projects/proyecto_3.png';

const projects = [
  {
    title: 'Videojuego Sackboy and the Eternal Halloween Village',
    image: proyecto1,
    description: 'Proyecto Final de grado en Desarrollo de videojuegos, videojuego tipo plataformas',
    technologies: ['Unity', 'C#', 'Autodesk Maya 3D'],
    githubLink: 'https://github.com/yourusername/project1',
    demoLink: 'https://yourwebsite.com/project1',
  },
  {
    title: 'Portafolio Antonio Tebar',
    image: proyecto2,
    description: 'Portafolio donde enseño mis progresos y proyectos realizados y contacto',
    technologies: ['React', 'Tailwind', 'Symfony', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    githubLink: 'https://github.com/yourusername/project2',
    demoLink: 'https://yourwebsite.com/project2',
  },
  {
    title: 'Proyecto Spectral',
    image: proyecto3,
    description: 'Aplicación de cifrado-descifrado y transferencia de archivos utilizando AES-256',
    technologies: ['Java', 'SQLite'],
    githubLink: 'https://github.com/yourusername/project3',
    demoLink: 'https://yourwebsite.com/project3',
  },
  {
    title: 'Portafolio Antonio Tebar',
    image: proyecto2,
    description: 'Portafolio donde enseño mis progresos y proyectos realizados y contacto',
    technologies: ['React', 'Tailwind', 'Symfony', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    githubLink: 'https://github.com/yourusername/project2',
    demoLink: 'https://yourwebsite.com/project2',
  }, {
    title: 'Videojuego Sackboy and the Eternal Halloween Village',
    image: proyecto1,
    description: 'Proyecto Final de grado en Desarrollo de videojuegos, videojuego tipo plataformas',
    technologies: ['Unity', 'C#', 'Autodesk Maya 3D'],
    githubLink: 'https://github.com/yourusername/project1',
    demoLink: 'https://yourwebsite.com/project1',
  },
];

export const Projects = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
      setCurrentPage(0);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));

  const paginatedProjects = projects.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section id="projects" className="py-30 px-4 relative bg-secondary/30">
      <div className="pt-8 pb-40 container mx-auto max-w-6xl">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mis <span className="text-primary">Proyectos</span>
        </motion.h2>

        <div className="relative flex justify-center items-center">
          {currentPage > 0 && (
            <motion.button
              onClick={handlePrev}
              aria-label="Página anterior"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[180%] ml-6 z-40 cursor-pointer transition-opacity duration-300"
            >
              <ChevronLeft className="h-10 w-10 text-primary hover:drop-shadow-[0_0_6px_#00ff88]" />
            </motion.button>
          )}

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
            initial="initial"
            animate="animate"
          >
            {paginatedProjects.map((project, index) => (
              <motion.article
                key={project.title + index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 sm:p-6 rounded-lg shadow-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-600">
                      Imagen no disponible
                    </div>
                  )}
                </div>
                <motion.h3
                  className="text-lg sm:text-xl font-semibold mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-white mb-4 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  className="flex flex-col sm:flex-row sm:justify-between justify-center items-center gap-3 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="h-5 w-5" />
                    <span className="text-sm sm:text-base">Código</span>
                  </motion.a>

                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaYoutube className="h-5 w-5" />
                    <span className="text-sm sm:text-base">Demo</span>
                  </motion.a>

                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaBookOpen className="h-5 w-5" />
                    <span className="text-sm sm:text-base">+ Info</span>
                  </motion.a>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>

          {currentPage < totalPages - 1 && (
            <motion.button
              onClick={handleNext}
              aria-label="Página siguiente"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-[180%] mr-6 z-40 cursor-pointer transition-opacity duration-300"
            >
              <ChevronRight className="h-10 w-10 text-primary hover:drop-shadow-[0_0_6px_#00ff88]" />
            </motion.button>
          )}
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentPage ? 'bg-primary shadow-[0_0_8px_#00ff88]' : 'bg-primary/20'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
