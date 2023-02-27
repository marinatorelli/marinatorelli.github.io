import React from "react";
import { Link } from "react-router-dom";
import concerts from "../images/concertsLanding.png";
import greenupApp from "../images/mobile-app.png";
import popularity from "../images/popularity-landing.png";
import "./AboutMe.css";
import portrait from "../images/portrait.JPEG";
import Navbar from "./Navbar";
const AboutMe = () => {
  return (
    <>
      <div className="container_about">
        <div className="title_section">
          <div className="title_about">About me</div>
          <div className="description_about">
            I just graduated from university in Computer Science and Engineering
            and I'm looking for a graduate or junior role!
          </div>
        </div>
        <div className="middle-section">
          {" "}
          <img src={portrait} />{" "}
          <div className="about-info">
            <p>
              I'm interested in all things tech and design.
              <p>
                During the final years of my univeristy degree I've specialised
                in AI, ML, data and computation.
              </p>
            </p>
            <p>
              I'm also really into UI/UX design and web, mobile and API
              development.
            </p>
            <p>
              During this last year, I've become more and more interested in
              enterpreneurship and sustainability. Since January 2022, I'm the
              co-founder and CTO of GreenUp Cities, a startup project I started
              with some friends that approaches urban sustainability through
              vertical gardens and citizen participation.
            </p>
            <p>
              For my Degree's Final Project I developed a Full Stack iOS mobile
              app for my own sustainability startup.
            </p>
          </div>
        </div>

        <div className="contact">
          <div className="email text">
            <a
              className="text"
              target="_blank"
              href="https://www.linkedin.com/in/marina-torelli/"
            >
              linkedin.com/in/marina-torelli
            </a>
          </div>
          <div className="email text">
            <a
              className="text"
              target="_blank"
              href="mailto:marinatorelli31@gmail.com"
            >
              marinatorelli31@gmail.com
            </a>
          </div>
          <div className="email text">
            <a
              className="text"
              target="_blank"
              href="https://github.com/marinatorelli"
            >
              github.com/marinatorelli
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
