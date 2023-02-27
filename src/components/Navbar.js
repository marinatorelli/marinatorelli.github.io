import { Link, NavLink } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import "./Global.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? "active-link-logo" : "nonactive-link";
          }}
        >
          <li className="initials">MT</li>
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) => {
            return isActive ? "active-link" : "nonactive-link";
          }}
        >
          <li>projects</li>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => {
            return isActive ? "active-link" : "nonactive-link";
          }}
        >
          <li>about me</li>
        </NavLink>{" "}
        {/* <Link to={"/"}>
          <li className="initials">MT</li>
        </Link>
        <Link to={"/projects"}>
          <li>projects</li>
        </Link>
        <Link to={"/about"}>
          <li>about me</li>
        </Link> */}
      </ul>
    </nav>
  );
};
export default Navbar;
