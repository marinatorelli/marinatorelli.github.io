import React from "react";
import "./ProjectsLayout.css";
import pacman from "../../images/pacman-landing.png";

const ProjectPacman = () => {
  return (
    <>
      <div className="container_greenupapp">
        <div className="title_section">
          <div className="title_projects">Pac-Man Heuristics</div>
          <div className="description_greenupapp">
            Project developed for my Machine Learning university course. The aim
            was to make Pac-Man learn how to eat all the ghosts in the least
            amount of time and maximizing the points.
          </div>
        </div>
        <div className="summary">
          <p className="single_bullet">
            <p className="bold">Topics: {"\0"}</p> Artificial Intelligence,
            Machine Learning, Data Analysis, Reinforced Learning
          </p>
          {/* <p className="single_bullet">
            <p className="bold">Programmes: {"\0"}</p> Figma, Postman{" "}
          </p> */}
          <p className="single_bullet">
            <p className="bold">Tech: {"\0"}</p> Python
          </p>
        </div>
        <img src={pacman}></img>
        {/* <img src={appSitemap}></img> */}
      </div>
    </>
  );
};
export default ProjectPacman;
