import React from "react";
import { Link } from "react-router-dom";
import concerts from "../images/concertsLanding.png";
import greenupApp from "../images/mobile-app.png";
import popularity from "../images/popularity-landing.png";
import greenupWeb from "../images/landing-web.png";
import conjugate from "../images/conjugate-landing.png";
import oscars from "../images/oscars-landing.jpeg";
import pacman from "../images/pacman-landing.jpeg";
import "./Projects.css";
import Navbar from "./Navbar";
import { AnimatePresence, motion as m } from "framer-motion/dist/framer-motion";
const Projects = () => {
  return (
    <>
      {/* <AnimatePresence key={"home"} exitBeforeEnter={false}>
        <m.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="projects_page"
        > */}
      {/* <AnimatePresence initial={false} key={'projects'}> */}
      <div className="container_projects">
        <div className="title_section">
          <div className="title_projects">Projects</div>
          <div className="description_projects">
            {/* I'm passionate about creating new pieces of tech or design.  */}
            I'm passionate about tech and design and creating projects from
            which I can learn. Some of the projects here are university
            coursework, for my own startup, or just for fun!
          </div>
        </div>
        <div className="row">
          <div className="project-card">
            <Link to="greenup-mobile">
              <img src={greenupApp} alt="Concerts Page thumbnail" />
              <div className="project-title">GreenUp Mobile App</div>
              <div className="project-subtitle">
                Design and Full Stack Development
              </div>
              <div className="tech-stack">
                <div className="project-tech">React Native</div>
                <div className="project-tech">NodeJS</div>
                <div className="project-tech">MongoDB</div>
              </div>
            </Link>
          </div>

          <div className="project-card">
            <Link to="greenup-web">
              <img src={greenupWeb} />
              <div className="project-title">GreenUp Landing Web</div>
              <div className="project-subtitle">Design and Development</div>
              <div className="tech-stack">
                <div className="project-tech">ReactJS</div>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="popularity-contest">
              <img src={popularity} />
              <div className="wip-tag">WIP</div>
              <div className="project-title">Popularity Contest</div>
              <div className="project-subtitle">Spotify API game</div>
              <div className="tech-stack">
                <div className="project-tech">NextJS</div>
                <div className="project-tech">ReactJS</div>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="pacman-heuristics">
              <img src={pacman} />
              <div className="project-title">Pac-Man Heuristics</div>
              <div className="project-subtitle">Machine Learning</div>
              <div className="tech-stack">
                <div className="project-tech">Python</div>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="conjugate">
              <img src={conjugate} />
              <div className="wip-tag">WIP</div>
              <div className="project-title">Conjugate Spanish Verbs</div>
              <div className="project-subtitle">Full Stack Web Development</div>
              <div className="tech-stack">
                <div className="project-tech">ReactJS</div>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="oscars-predictions">
              <img src={oscars} />
              <div className="project-title">Oscars Predictions</div>
              <div className="project-subtitle">AI classification task</div>
              <div className="tech-stack">
                <div className="project-tech">Python</div>
                <div className="project-tech">Jupiter Notebooks</div>
              </div>
            </Link>
          </div>
          <div className="project-card">
            <Link to="concerts">
              <img src={concerts} />
              <div className="project-title">Concerts Page</div>
              <div className="project-subtitle">
                UX/UI design and prototyping
              </div>
              <div className="tech-stack">
                <div className="project-tech">Figma</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* </AnimatePresence> */}
      {/* </m.div>
      </AnimatePresence> */}
    </>
  );
};
export default Projects;
