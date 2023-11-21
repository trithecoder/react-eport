import React from "react";
import "../Components/Eport.scss";
import {
  motion,
  AnimatePresence,
  animate,
  useScroll,
  transform,
  useTransform,
} from "framer-motion";

const Welcome = () => {
  return (
    <motion.div
      className="welcome"
      initial={{ opacity: 0, x: 5 }}
      whileInView={{ opacity: 1, transition: { duration: 1.2 }, x: 0 }}
    >
      <section className="welcome">
        <header>
          <h1>
            Hello I'm Triyel{" "}
            <motion.div
              animate={{
                rotate: [
                  30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16,
                  15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3,
                  4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                ],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              👋
            </motion.div>
          </h1>
        </header>
        <h3>Welcome to my Eportfolio</h3>
        <h4 className="clickme" id="click">
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9, transition: { duration: 1 } }}
          >
            Click Here!
          </motion.div>
        </h4>
      </section>
    </motion.div>
  );
};

export default Welcome;
