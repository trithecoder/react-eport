import React from 'react'
import WeatherApp from './Weatherapp/Weather'
import { motion, AnimatePresence, animate, useScroll, transform, useTransform } from "framer-motion";

const Weather = () => {
  return (
    <motion.div id='checkweather' initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1} }}><WeatherApp/></motion.div>
    
  )
}

export default Weather