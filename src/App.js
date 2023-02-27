import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Pdf from "./Documents/MarinaTorelliCV.pdf";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectGreenupApp from "./components/projects/GreenupApp";
import ProjectConcerts from "./components/projects/Concerts";
import ProjectGreenupWeb from "./components/projects/GreenupWeb";
import ProjectPopularity from "./components/projects/Popularity";
import ProjectOscars from "./components/projects/Oscars";
import ProjectPacman from "./components/projects/Pacman";

import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import { ScrollRestoration } from "react-router-dom";
import { AnimatePresence, motion as m } from "framer-motion/dist/framer-motion";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects/greenup-mobile" element={<ProjectGreenupApp />} />
        <Route path="projects/greenup-web" element={<ProjectGreenupWeb />} />
        <Route
          path="projects/popularity-contest"
          element={<ProjectPopularity />}
        />
        <Route path="projects/oscars-predictions" element={<ProjectOscars />} />
        <Route path="projects/pacman-heuristics" element={<ProjectPacman />} />
        <Route path="projects/concerts" index element={<ProjectConcerts />} />
      </Routes>
    </Router>
  );
}

export default App;
