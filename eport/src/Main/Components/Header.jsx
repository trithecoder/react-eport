import React from "react";
import "../Components/Eport.scss";
import {
  motion,
  AnimatePresence,
  animate,
  useScroll,
  transform,
  useTransform,
} from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="header"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
    >
      <nav className="main-header">
        <header></header>
        <ul>
          <a href="https://github.com/trithecoder">
            <li>Github</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="">
            <li>Contact</li>
          </a>
          <a href="#checkweather">
            <li>Check Weather</li>
          </a>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Header;
