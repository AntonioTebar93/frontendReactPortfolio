import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPhp,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiSymfony, SiSqlite } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { useState } from "react";
import { cn } from "../lib/utils";

const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  SiJavascript: SiJavascript,
  FaReact: FaReact,
  FaJava: FaJava,
  FaPhp: FaPhp,
  SiSymfony: SiSymfony,
  GrMysql: GrMysql,
  SiSqlite: SiSqlite,
  FaDocker: FaDocker,
  FaGithub: FaGithub,
};

const skills = [
  { name: "HTML5", level: 70, category: "Frontend", icon: "FaHtml5" },
  { name: "CSS", level: 50, category: "Frontend", icon: "FaCss3Alt" },
  { name: "Javascript", level: 70, category: "Frontend", icon: "SiJavascript" },
  { name: "React", level: 70, category: "Frontend", icon: "FaReact" },
  { name: "Java", level: 70, category: "Backend", icon: "FaJava" },
  { name: "PHP", level: 70, category: "Backend", icon: "FaPhp" },
  { name: "Symfony", level: 70, category: "Backend", icon: "SiSymfony" },
  { name: "MySQL", level: 70, category: "Base de Datos", icon: "GrMysql" },
  { name: "SQLite", level: 70, category: "Base de Datos", icon: "SiSqlite" },
  { name: "Docker", level: 70, category: "DevOps", icon: "FaDocker" },
  { name: "GitHub", level: 50, category: "DevOps", icon: "FaGithub" },
];

const categories = ["Todas", "Frontend", "Backend", "Base de Datos", "DevOps"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");

  // Ordenar para mostrar primero las que sí se deben ver
  const orderedSkills = [...skills].sort((a, b) => {
    const aVisible = activeCategory === "Todas" || a.category === activeCategory;
    const bVisible = activeCategory === "Todas" || b.category === activeCategory;
    return aVisible === bVisible ? 0 : aVisible ? -1 : 1;
  });

  return (
    <section id="skills" className="py-25 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mis <span className="text-primary">Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full font-semibold transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-primary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orderedSkills.map((skill, key) => {
            const IconComponent = iconMap[skill.icon];
            const isVisible =
              activeCategory === "Todas" || skill.category === activeCategory;

            return (
              <div
                key={key}
                className={cn(
                  "bg-gray-500/30 p-6 rounded-lg shadow-none flex flex-col items-center transition-opacity duration-300",
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none h-0 overflow-hidden"
                )}
              >
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                {IconComponent && (
                  <IconComponent className="text-primary mb-4" size={60} />
                )}
                <div className="w-full bg-secondary/50 h-6 rounded-full overflow-hidden flex items-center">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                  <span className="ml-3 text-sm font-medium text-primary">
                    {skill.level}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
