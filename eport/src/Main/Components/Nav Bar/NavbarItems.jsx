import React from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = ({ isToggled }) => {

  const Github = (
    <motion.a href="https://github.com/trithecoder">Github</motion.a>
  );
  const About = (
    <motion.a href="https://react-eport.vercel.app/#about">About</motion.a>
  );
  const Projects = (
    <motion.a href="https://react-eport.vercel.app/#projects">
      Projects
    </motion.a>
  );
  const Contact = (
    <motion.a href="https://react-eport.vercel.app/#contact">Contact</motion.a>
  );

  const items = [Github, About, Projects, Contact];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <>
      <motion.ul
        className="navList"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        {items.map((item) => (
          <motion.li className="nav-item" variants={navItem} key={item}>
            <p>{item}</p>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Navbar;
