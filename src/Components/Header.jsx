import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2> CA204 </h2>
            <hr style={{marginTop: '15px'}} />
      <div className="header__items">
        <ul>
          <li>
            <a href="/"> Home </a>
          </li>

          <li>
            <a href="/"> Find Work </a>
          </li>

          <li>
            <a href="/"> Careeer Opp</a>
          </li>

          <li>
            <a href="/"> About </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
