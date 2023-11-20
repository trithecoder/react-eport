import React from "react";
import "../Components/Eport.scss";
import { motion, AnimatePresence, animate, useScroll, transform, useTransform } from "framer-motion";

const Welcome = () => {

  return (
    <motion.div
      className="welcome"
      initial={{ opacity: 0, transform: [-20] }}
      whileInView={{ opacity: 1, transition: { duration: 1.2 }, transform: [100] }}
    >
      <section className="welcome">
        <header>
          <h1>Hello I'm Triyel 👋</h1>
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
