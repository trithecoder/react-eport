import React from "react";
import netfliximg from './assets/Netflix Clone.png'
import { motion, AnimatePresence, animate, useScroll, transform, useTransform } from "framer-motion";
import { BrowserView, MobileOnlyView } from "react-device-detect";

const Netflix = () => {
  return (
    <>
    <BrowserView>
    <motion.div className="project-class">
      <figure>
        <motion.img id="netflix" src={netfliximg} alt="" initial={{filter: "blur(2.5px)"}} whileHover={{transition: {ease: 'easeIn'},filter: "blur(0px)"}}/>
        <motion.div><motion.h1 className="netflix-text" initial={{opacity: 0, x: 75}} whileHover={{opacity: 1, x: 0}}>
          Netflix Clone
          <p><a href="https://netflix-clone-first-react-app.vercel.app/">https://netflix-clone-first-react-app.vercel.app/</a></p>
        </motion.h1></motion.div>
      </figure>
      <figcaption>Netflix Clone</figcaption>
    </motion.div>
    </BrowserView>
    <MobileOnlyView>
        <div className="project-class">
        <figure>
          <img id="netflix" src={netfliximg} alt=""/>
          <div><h1 className="netflix-text" >
            Netflix Clone
            <p><a href="https://netflix-clone-first-react-app.vercel.app/">https://netflix-clone-first-react-app.vercel.app/</a></p>
          </h1></div>
        </figure>
        <figcaption>Netflix Clone</figcaption>
      </div>
      </MobileOnlyView>
      </>
  );
};

export default Netflix;
