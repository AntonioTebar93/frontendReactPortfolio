import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // <-- importar Link
import { cn } from "../lib/utils";

const navItems = [
  { name: "Inicio", to: "/" },
  { name: "Sobre mí", to: "/about" },
  { name: "Habilidades", to: "/skills" },
  { name: "Proyectos", to: "/projects" },
  { name: "Contacto", to: "/contact" },
];

export const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.to}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link
            className="text-xl font-bold text-primary flex items-center"
            to="/"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Antonio</span> DevFolio
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <Link
                key={key}
                to={item.to}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-foreground focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};
