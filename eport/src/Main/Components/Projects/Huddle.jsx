import React from "react";
import huddleimg from "./assets/Huddle Website.png";
import {
  motion,
  AnimatePresence,
  animate,
  useScroll,
  transform,
  useTransform,
} from "framer-motion";

const Huddle = () => {
  return (
    <motion.div className="project-class">
      <figure>
        <motion.div
          initial={{ opacity: 0.8 }}
          whileHover={{
            opacity: 1,
            transition: { ease: "easeIn", duration: 0.5 },
          }}
        >
          <motion.img
            id="huddle"
            src={huddleimg}
            alt=""
            initial={{ filter: "blur(2.5px)" }}
            whileHover={{ transition: { ease: "easeIn" }, filter: "blur(0px)" }}
          />
          <motion.h1 className="huddle-text" initial={{opacity: 0, x: 75}} whileHover={{opacity: 1, x: 0}}>
            Huddle Website
            <p><a href="https://huddle-website-ebon.vercel.app/">https://huddle-website-ebon.vercel.app/</a></p>
          </motion.h1>
        </motion.div>
      </figure>
      <figcaption>Huddle Website</figcaption>
    </motion.div>
  );
};

export default Huddle;
