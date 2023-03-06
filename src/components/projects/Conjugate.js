import React from "react";
import "./ProjectsLayout.css";
import conjugate from "../../images/conjugate-landing.png";

const ProjectConjugate = () => {
  return (
    <>
      <div className="container_project">
        <div className="title_section">
          <div className="title_project">Conjugate Spanish Verbs</div>
          <div className="description_project">
            As an avid language learner myself, I wanted to create a project
            that could help fellow language enthusiats with one of the most
            difficult parts of learning a romance language, conjugating verbs.
          </div>
        </div>
        <div className="wip-tag-page">WIP</div>
        <div className="summary">
          <p className="single_bullet">
            <p className="bold">Topics: {"\0"}</p> Full Stack Web Development
          </p>
          <p className="single_bullet">
            <p className="bold">Programmes: {"\0"}</p> Figma{" "}
          </p>
          <p className="single_bullet">
            <p className="bold">Tech: {"\0"}</p> ReactJS
          </p>
        </div>
        <img src={conjugate}></img>
      </div>
    </>
  );
};
export default ProjectConjugate;
