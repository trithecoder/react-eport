import React, { useEffect, useState } from "react";
import "../Components/Eport.scss";
import Huddle from "./Projects/Huddle";
import Netflix from "./Projects/Netflix";
import { motion, AnimatePresence, animate, useScroll, transform, useTransform } from "framer-motion";

const Projects = () => {

  return (
    <motion.div className="projects" initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1} }}>
      <section id="projects" className="project-sect">
        <div className="content-wrapper">
          <div>
            <header>
              <h1>Projects</h1>
            </header>
            <nav>
              <div className="project-class">
                <figure>
                  <Netflix/>
                </figure>
              </div>
              <div className="project-class">
                <figure>
                  <Huddle />
                </figure>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
