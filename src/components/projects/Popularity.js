import React from "react";
import popularity from "../../images/popularity-landing.png";
import "./Popularity.css";
import "./ProjectsLayout.css";

const ProjectPopularity = () => {
  return (
    <>
      <div className="container_project">
        <div className="title_section">
          <div className="title_project">Popularity Contest</div>
          <div className="description_project">
            This is a personal project to work with the Spotify API and NextJS.
            The original project is showcased in the Spotify API showcase but it
            is no longer supported, so I decided to remake it.
          </div>
        </div>
        <div className="summary">
          <p className="single_bullet">
            <p className="bold">Topics: {"\0"}</p> Spotify API, Web development,
            Responsive
          </p>
          {/* <p className="single_bullet">
            <p className="bold">Programmes: {"\0"}</p> Figma, Postman{" "}
          </p> */}
          <p className="single_bullet">
            <p className="bold">Tech: {"\0"}</p> NextJS, Spotify API
          </p>
        </div>
        <img src={popularity} />
      </div>
    </>
  );
};
export default ProjectPopularity;
