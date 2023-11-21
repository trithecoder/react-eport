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
import {BrowserView, MobileView} from 'react-device-detect';

const Header = () => {
  return (
    <BrowserView>
    <motion.div
      className="header"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
    >
      <nav className="main-header">
        <header></header>
        <ul>
          <motion.a href="https://github.com/trithecoder" whileHover={{scale: 0.9}}>
            <li>Github</li>
          </motion.a>
          <motion.a href="#about" whileHover={{scale: 0.9}}>
            <li>About</li>
          </motion.a>
          <motion.a href="#projects" whileHover={{scale: 0.9}}>
            <li>Projects</li>
          </motion.a>
          <motion.a href="" whileHover={{scale: 0.9}}>
            <li>Contact</li>
          </motion.a>
          <motion.a href="#checkweather" whileHover={{scale: 0.9}}>
            <li>Check Weather</li>
          </motion.a>
        </ul>
      </nav>
    </motion.div>
    </BrowserView>
  );
};

export default Header;
