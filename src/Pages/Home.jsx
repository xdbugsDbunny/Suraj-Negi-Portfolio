import React from "react";
import ParticlesContainer from "../Components/ParticlesContainer";
import ProjectsBtn from "../Components/ProjectsBtn";
import Avatar from "../Components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../Utils/variants";

const Home = () => {
  return (
    <div className=" bg-primar/60 h-full mt-1">
      <div className=" w-full h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-md sm:text-[35px] mt-10 sm:mt-0"
            // style={{paddingTop:'6.5rem'}}
          >
             Hi, I&apos;m Suraj <br />
             <span className="text-accent">MERN Stack Developer</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:max-w-xl mx-auto xl:mx-0 xl:mb-16 sm:text-sm text-[12px]"
          >
            Hi, I'm Suraj Singh Negi, a passionate MERN Stack Developer skilled in both front-end and back-end technologies. With hands-on experience from my internship and personal projects, I excel in creating dynamic and responsive web applications. In 2024, I'm excited to expand my skills with Next.js, TypeScript, and Firebase.
          </motion.p>
          <div className=" flex justify-center xl:hidden relative ">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className=" w-full h-full absolute right-0 bottom-0 ">
        {/*w-[1200px] */}

        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
        <div>
          <ParticlesContainer/>
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
