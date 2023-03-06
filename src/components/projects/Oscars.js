import React from "react";
// import "./Oscars.css";
import "./ProjectsLayout.css";
import oscars from "../../images/oscars-landing.jpeg";

const ProjectOscars = () => {
  return (
    <>
      <div className="container_project">
        <div className="title_section">
          <div className="title_project">Oscars Predictions</div>
          <div className="description_project">
            Project developed for the Artificial Intelligence at Organisations
            university course. The aim was to predict the nominees and winners
            of the main categories at the 2021 Academy Awards.
          </div>
        </div>
        <div className="summary">
          <p className="single_bullet">
            <p className="bold">Topics: {"\0"}</p> Artificial Intelligence,
            Classification, Sentiment Analysis, Web Scrapping
          </p>
          {/* <p className="single_bullet">
            <p className="bold">Programmes: {"\0"}</p> Figma, Postman{" "}
          </p> */}
          <p className="single_bullet">
            <p className="bold">Tech: {"\0"}</p> Python
          </p>
        </div>
        <img src={oscars}></img>
        {/* <img src={appSitemap}></img> */}
      </div>
    </>
  );
};
export default ProjectOscars;
