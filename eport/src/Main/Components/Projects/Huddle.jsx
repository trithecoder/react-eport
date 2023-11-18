import React from "react";
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
