import React from "react";
import netfliximg from './assets/Netflix Clone.png'
import { motion, AnimatePresence, animate, useScroll, transform, useTransform } from "framer-motion";

const Netflix = () => {
  return (
    <div className="project-class">
      <figure>
        <motion.img id="netflix" src={netfliximg} alt="" initial={{filter: {blur: ('100%')}}} />
      </figure>
      <figcaption>Netflix Clone</figcaption>
    </div>
  );
};

export default Netflix;
