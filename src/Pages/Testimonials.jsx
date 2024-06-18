import React from "react";
import TestimonialSlider from "../Components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../Utils/variants";
import Circles from "../Components/Circles";

const Testimonials = () => {
  return (
    <div className=" h-screen bg-primary/30 py-32  text-center ">
      <div className=" container mx-auto h-full flex flex-col justify-center ">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h2 mb-4 lg:mb-0 "
        >
          What Clients <span className="text-accent">say.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
      <Circles/>
    </div>
  );
};

export default Testimonials;
