import React from "react";
import ServiceSlider from "../Components/ServiceSlider";
import Bulb from "../Components/Bulb";
import Circles from "../Components/Circles";
import { fadeIn } from "../Utils/variants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className=" h-screen bg-primary/30  py-40 flex items-center ">
      <Circles />
      <div className=" container mx-auto ">
        <div className=" flex flex-col xl:flex-row gap-x-8 ">
          <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 mt-10 md:mt-0 md:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h2"
            >
              My Services<span className=" text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className=" mb-2 sm:mb-4 max-w-[400px] mx-auto lg:mx-0 flex md:hidden xl:flex "
            >
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
              I provide full stack web development, responsive design, API integration, UI/UX design, and database management.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className=" w-full xl:max-w-[65%] "
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
