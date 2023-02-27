import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Pdf from "../Documents/MarinaTorelliCV.pdf";
import { AnimatePresence, motion as m } from "framer-motion/dist/framer-motion";
import { ScrollRestoration } from "react-router-dom";
// import { motion as m, transform } from 'framer-motion';
const Home = () => {
  return (
    <>
      {/* <AnimatePresence key={"home"} exitBeforeEnter={false}> */}
      {/* <m.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="home_page"
        > */}
      <div className="container_home">
        <div className="title text-purple">
          Hi, <p className="text-purple">I'm Marina Torelli</p>
        </div>
        <div className="subtitle text-dark">
          I’m a recent Computer Science and Engineering university graduate
        </div>
        <div className="desc text-dark">
          I have a passion for all things tech and design
        </div>
        <div className="links">
          {/* <div className="resume">
                <Link to="/projects">projects</Link>
              </div> */}
          <div className="resume">
            <a className="resume-a" href={Pdf} target="_blank" rel="noreferrer">
              <p className="resume-a">resume {"\0"}</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
            </a>
          </div>
        </div>
        <div className="icons">
          <a
            className="icon"
            href="https://www.linkedin.com/in/marina-torelli/"
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a className="icon" href="https://github.com/marinatorelli">
            {" "}
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a className="icon" href="mailto:marinatorelli31@gmail.com">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </div>
      {/* <ScrollRestoration /> */}
      {/* </m.div>
      </AnimatePresence> */}
    </>
  );
};
export default Home;
