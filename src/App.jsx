import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;