import React from "react";
import "/Front End Work/React Eport/eport/src/Main/Components/Eport.scss"
import huddleimg from './assets/Huddle Website.png'

const Huddle = () => {
  return (
    <div className="project-class">
      <figure>
        <img id="huddle" src={huddleimg} alt="" />
      </figure>
      <figcaption>Huddle Website</figcaption>
    </div>
  );
};

export default Huddle;
