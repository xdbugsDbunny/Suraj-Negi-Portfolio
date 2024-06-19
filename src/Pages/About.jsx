import React, { useState } from "react";
// icons
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss, SiMui, SiMongodb, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNpm, FaGitAlt, FaNode, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";
import Avatar from "../Components/Avatar";
import Circles from "../Components/Circles";
import { fadeIn } from "../Utils/variants";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Markup / Styling",
        icons: [<AiFillHtml5 color="#ED653B" />, <FaCss3Alt color="#5DADE2" />],
      },
      {
        title: "Framework",
        icons: [
          <FaBootstrap color="#7912F6" />,
          <SiTailwindcss color="#38BDF8" />,
          <SiMui color="#007FFF" />,
        ],
      },
      {
        title: "Front-end",
        icons: [
          <IoLogoJavascript color="#D4B830" />,
          <FaReact color="#38BDF8" />,
        ],
      },
      {
        title: "Package Manager",
        icons: [<FaNpm color="#CB0000" />],
      },
      {
        title: "Database",
        icons: [<SiMysql color="#3E6E93" />, <SiMongodb color="#82E0AA" />],
      },
      {
        title: "Version Control",
        icons: [<FaGitAlt color="#F14E32" />],
      },
      {
        title: "Back-end",
        icons: [<FaNode color="#56A645" />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "MERN Stack Intern at CISApp Ltd. (May 2023 - Feb 2024)",
        stage: [
          "Completed a 9-month internship at CISAPP Pvt Ltd with practical MERN Stack experience.",
          "Demonstrated strong work ethic, adaptability, and responsibility.",
          "Demonstrated proficiency in API development and bug resolution, enhancing project functionality.",
        ],
      },
      {
        title: "Doctor Appointment App (May 2024 - June 2024)",
        stage: [
          "Developed a seamless appointment booking system with user-friendly interface.",
          "Designed comprehensive doctor profiles, including specialties and patient reviews.",
          "Ensured secure and confidential management of patient data.",
        ],
      },
      {
        title: "React Chat App with Firebase (June 2024 - Present)",
        stage: [
          "Built a real-time chat application using React and Firebase.",
          "Focused on learning advanced React concepts and Firebase integration.",
          "Implemented features for sending messages, user authentication, and data persistence.",
        ],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Full Stack Developer Internship (2022-2023)",
        stage: "Dream Teach, Dehradun",
      },
      {
        title: "Master of Science in Information Technology (2020-2022)",
        stage:
          "Institute of Technology and Management - [ITM], Dehradun with CGPA - 7.4/10",
      },
      {
        title: "Bachelor of Computer Applications (2015-2018)",
        stage: "Institute of Technology and Management - [ITM], Dehradun",
        score: "CGPA - 6.0/10",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-screen bg-primary/30 py-32 md:py-28 xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[350px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center lg:flex-row gap-x-6">
        <div className="flex-1 flex-col justify-center items-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            About <span className=" text-accent ">Me</span>
          </motion.h2>
          <div className=" hidden lg:flex ">
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0"
            >
              I am a passionate{" "}
              <span className="text-accent font-extrabold  ">
                MERN Stack Developer
              </span>{" "}
              with hands-on experience from an internship at CISApp Ltd. I hold
              a Master of Science in Information Technology and am proficient in
              web development, API creation, and bug resolution.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex-1 gap-x-2 hidden lg:flex  ">
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 text-2xl ">
                <div className="text-accent font-extrabold">
                  <CountUp start={0} end={9} duration={5} /> +
                </div>
                <div className=" uppercase tracking-[1px] leading-[1.4] max-w-[175px] ">
                  Months of{" "}
                  <span className="text-accent font-extrabold  ">
                    {" "}
                    Experience{" "}
                  </span>
                </div>
              </div>
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 text-2xl ">
                <div className="text-accent font-extrabold">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className=" uppercase tracking-[1px] leading-[1.4] max-w-[175px] ">
                  Finished
                  <span className="text-accent font-extrabold  ">
                    {" "}
                    Projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full lg:max-w-[60%] xl:max-w-[48%] h-[480px] lg:h-[400px] lg:mt-[65px] xl:mt-0 "
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto mb-4 ">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-start xl:items-start">
            {index === 1 ? (
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                className=" h-full w-full xl:w-[600px] sm:h-[275px]"
              >
                {aboutData[index].info.map((item, itemIndex) => (
                  <SwiperSlide key={itemIndex}>
                    <div className="animated-border border-b-2 border-b-slate-300 border-l-2 px-2 ">
                      <div className=" text-md md:text-3xl">{item.title} -</div>
                      <ul className="mt-1 ml-5  ">
                        {item.stage.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="leading-snug md:leading-normal list-disc mb-2 text-white/60"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              aboutData[index].info.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`flex-1 flex flex-row md:flex-row max-w-max gap-x-2 items-start`}
                >
                  <div className="border-b-2 border-b-slate-300 border-l-2 px-2 ">
                    <div className=" text-md md:text-3xl">{item.title} -</div>
                    <p className="leading-snug md:leading-normal mt-2  text-white/60">
                      {item.stage}
                    </p>
                  </div>
                  <div className="flex flex-row gap-x-4">
                    {item.icons?.map((icon, iconIndex) => (
                      <div key={iconIndex} className="text-4xl">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
