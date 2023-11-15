import React from "react";
import "../Components/Eport.scss"

const Header = () => {
  return (
    <div className="header">
      <nav className="main-header">
        <header></header>
        <ul>
          <a href="">
            <li>Contact</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="https://github.com/trithecoder">
            <li>Github</li>
          </a>
          <a href="#checkweather">
            <li>Check Weather</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
