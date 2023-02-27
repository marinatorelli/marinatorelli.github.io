import React from "react";
import { Link } from "react-router-dom";
import "./Concerts.css";
import "./ProjectsLayout.css";
import concerts_signup from "../../images/concerts_signup.png";
import concerts_landing from "../../images/concertsLanding.png";
import concerts_home from "../../images/concerts_home.png";
import concerts_single from "../../images/concerts_singleconcert.png";
import concerts_profile from "../../images/concerts_profile.png";
import concerts_recinto from "../../images/concerts_recinto.png";

import Navbar from "../Navbar";
const ProjectConcerts = () => {
  return (
    <>
      <div className="container_project">
        <div className="title_section">
          <div className="title_project">Concerts Page</div>
          <div className="description_project">
            This project was developed as coursework for my Interactive Systems
            course at university. The project follows a user centered design
            approach.
          </div>
        </div>
        <div className="summary">
          <p className="single_bullet">
            <p className="bold">Aim: {"\0"}</p> UX/UI design, Prototype, User
            Centered Design
          </p>
          <p className="single_bullet">
            <p className="bold">Programmes: {"\0"}</p> Figma
          </p>
          {/* <p className="single_bullet">
            <p className="bold">Tech: {"\0"}</p> Figma
          </p> */}
        </div>
        <div className="images">
          <img className="landing" src={concerts_landing}></img>
          {/* <img src={concerts_signup}></img> */}
          <div className="other_images">
            {/* <img src={concerts_home}></img> */}
            {/* <img src={concerts_single}></img>
            <img src={concerts_profile}></img>
            <img src={concerts_recinto}></img> */}
          </div>
        </div>
        {/* <a
          target="_blank"
          href="https://www.figma.com/proto/3Hh4uQvVGd6zx3nb1wHrLa/Entregable2?page-id=0%3A1&node-id=85%3A2175&viewport=-176%2C445%2C0.14&scaling=scale-down&starting-point-node-id=53%3A1550&show-proto-sidebar=1"
        >
          prototype
        </a> */}
      </div>
    </>
  );
};
export default ProjectConcerts;
