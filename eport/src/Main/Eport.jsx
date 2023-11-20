import React from "react";
import "./Components/Eport.scss";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Welcome from "./Components/Welcome";
import Header from "./Components/Header";
import WeatherApp from "./Components/Weather";
import { motion, AnimatePresence, animate, useScroll, transform, useTransform } from "framer-motion";

const Eport = () => {
  return (
    <motion.div className="container">
      <Header />
      <Welcome />
      <About />
      <Projects />
      <WeatherApp />
    </motion.div>
  );
};

export default Eport;
