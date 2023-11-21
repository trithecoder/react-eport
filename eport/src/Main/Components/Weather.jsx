import React from "react";
import WeatherApp from "./Weatherapp/Weather";
import MobileWeatherApp from "./Weatherapp/Weather";
import {
  motion,
  AnimatePresence,
  animate,
  useScroll,
  transform,
  useTransform,
} from "framer-motion";
import { BrowserView, MobileOnlyView } from "react-device-detect";

const Weather = () => {
  return (
    <>
      <BrowserView>
        <motion.div
          id="checkweather"
          initial={{ opacity: 0, y: 75, }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1 },
            transition: {
              duration: 1,
            },
            y: 0,
          }}
        >
          <WeatherApp />
        </motion.div>
      </BrowserView>
      <MobileOnlyView>
        <MobileWeatherApp />
      </MobileOnlyView>
    </>
  );
};

export default Weather;
