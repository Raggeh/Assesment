import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-wrapper">
        <h2> My Navbar </h2>
        <div className="nav__items">
          <ul>
            <li>
              <a href="/"> Home </a>
            </li>

            <li>
              <a href="/"> Contact </a>
            </li>

            <li>
              <a href="/"> About Us </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
