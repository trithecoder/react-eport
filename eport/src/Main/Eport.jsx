import React from "react";
import "./Components/Eport.scss";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Welcome from "./Components/Welcome";
import Header from "./Components/Header";
import WeatherApp from "./Components/Weather";

const Eport = () => {
  return (
    <div className="container">
      <Header />
      <Welcome />
      <About />
      <Projects />
      <WeatherApp />
    </div>
  );
};

export default Eport;
