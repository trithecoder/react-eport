import React from "react";
import "./Components/Eport.scss";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Welcome from "./Components/Welcome";
import Header from "./Components/Header";
import WeatherApp from "./Components/Weather";
import NavBar from "./Components/Nav Bar/Navbar";
import {BrowserView, MobileView} from 'react-device-detect';
import {
  motion,
  AnimatePresence,
  animate,
  useScroll,
  transform,
  useTransform,
} from "framer-motion";

const Eport = () => {
  return (
    
    <motion.div className="container">
      <MobileView><NavBar></NavBar></MobileView>
      <motion.div
        className="content"
        initial={{
          opacity: 0,
          y: -15,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
          y: 0,
        }}
      >
        <BrowserView><Header /></BrowserView>
      </motion.div>

      <Welcome />
      <motion.div
        className="content"
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
          x: 0,
        }}
      >
        <About />
      </motion.div>
      <Projects />
      <WeatherApp />
    </motion.div>
  );
};

export default Eport;
