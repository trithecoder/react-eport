import "./App.css";
import Eport from './Main/Eport'
import { motion, AnimatePresence, animate, useScroll, transform, useTransform } from "framer-motion";

function App() {
  
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1} }}><Eport/></motion.div>
  );
}

export default App;
