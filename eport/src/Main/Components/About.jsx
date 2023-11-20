import React from "react";
import "../Components/Eport.scss"
import { motion, AnimatePresence, animate, useScroll, transform, useTransform } from "framer-motion";

const About = () => {
  return (
    <motion.div className="about" initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1} }}>
      <section id="about" className="about-me">
        <div>
          <header>
            <h1>About Me</h1>
          </header>
          <article>
            I am a passionate 18 year old software engineer. I love making
            unique designs and expanding on my creativity in unique ways, I also
            like challenging myself and solving said challenges!
          </article>
          <nav>
            <h4>I have knowledge in:</h4>
          <ul>
            <li>
              <p>HTML, CSS, JavaScript, Tailwind, React, Framer Motion</p>
            </li>
            <li>
            <p>FireBase</p>
            </li>
          </ul>
          </nav>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
