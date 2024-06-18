import React from "react";
import WorkSlider from "../Components/WorkSlider";
import Bulb from "../Components/Bulb";
import Circles from "../Components/Circles";
import { fadeIn } from "../Utils/variants";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className=" h-screen bg-primary/30  py-36 lg:py-16 xl:py-36 flex items-center ">
      {/* <Circles /> */}
      <div className=" container mx-auto ">
        <div className=" flex flex-col lg:flex-row gap-x-8 ">
          <div className=" text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 md:mb-0 xl:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h2 md:mb-0 lg:mt-12"
            >
              My Work<span className=" text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className=" mb-4 max-w-[400px] mx-auto xl:mx-0  md:mb-0 xl:mb-4"
            >
              Explore my projects, highlighting dynamic and responsive web applications built with modern technologies.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className=" w-full md:max-w-[65%] md:mx-auto "
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
