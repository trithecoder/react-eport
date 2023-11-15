import React from "react";
import "../Components/Eport.scss"
import Huddle from "./Projects/Huddle";
import Netflix from "./Projects/Netflix";

const Projects = () => {
  return (
    <div className="projects">
      <section id="projects" className="projects">
        <div>
          <header>
            <h1>Projects</h1>
          </header>
          <nav>
            <div className="project-class">
              <figure>
                <Netflix />
              </figure>
            </div>
            <div className="project-class">
              <figure>
                <Huddle />
              </figure>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Projects;
