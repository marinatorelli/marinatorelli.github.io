import React from "react";
import greenupWeb from "../../images/landing-web.png";
import "./GreenupWeb.css";
import "./ProjectsLayout.css";

const ProjectGreenupWeb = () => {
  return (
    <>
      <div className="container_project">
        <div className="title_section">
          <div className="title_project">GreenUp Landing Web</div>
          <div className="description_project">
            As a way to position ourselves and have an online presence, I
            developed the landing website for my own sustainability startup,
            GreenUp Cities.
          </div>
        </div>
        <div className="summary">
          <p className="single_bullet">
            <p className="bold">Topics: {"\0"}</p> Design, Web Development,
            Responsive
          </p>
          <p className="single_bullet">
            <p className="bold">Programmes: {"\0"}</p> Figma
          </p>
          <p className="single_bullet">
            <p className="bold">Tech: {"\0"}</p> ReactJS
          </p>
        </div>
        <div>
          <img src={greenupWeb}></img>
          <a
            className="link-web"
            target="_blank"
            href="https://greenupcities.com/"
          >
            greenupcities.com
          </a>
        </div>
      </div>
    </>
  );
};
export default ProjectGreenupWeb;
