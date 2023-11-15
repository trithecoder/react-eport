import React from "react";
import "/Front End Work/React Eport/eport/src/Main/Components/Eport.scss"
import netfliximg from './assets/Netflix Clone.png'

const Netflix = () => {
  return (
    <div className="project-class">
      <figure>
        <img id="netflix" src={netfliximg} alt="" />
      </figure>
      <figcaption>Netflix Clone</figcaption>
    </div>
  );
};

export default Netflix;
