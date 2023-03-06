import React from "react";
import "./GrenupApp.css";
import "./ProjectsLayout.css";
import appIsometric from "../../images/mobile-app.png";
import appSitemap from "../../images/mobile_sitemap.png";

const ProjectGreenupApp = () => {
  return (
    <>
      <div className="container_project">
        <div className="title_section">
          <div className="title_project">GreenUp Mobile App</div>
          <div className="description_project">
            The Final Project for my Bachelor's Degree in Computer Science and
            Engineering. It's an iOS mobile application for my own
            sustainability startup, entirely designed and developed by me.
          </div>
        </div>
        <div className="summary">
          <p className="single_bullet">
            <p className="bold">Topics: {"\0"}</p> Design and prototype, Mobile
            iOS app developemnt, API development
          </p>
          <p className="single_bullet">
            <p className="bold">Programmes: {"\0"}</p> Figma, Postman{" "}
          </p>
          <p className="single_bullet">
            <p className="bold">Tech: {"\0"}</p> React Native, NodeJS, MongoDB
          </p>
        </div>
        <img src={appIsometric}></img>
        {/* <img src={appSitemap}></img> */}
      </div>
    </>
  );
};
export default ProjectGreenupApp;
