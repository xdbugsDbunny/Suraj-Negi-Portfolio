import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

import roundedText from "../assets/rounded-text.png";

const ProjectsBtn = () => {
  return (
    <div className=" mx-auto xl:mx-0 z-[1000] ">
      <Link
        to={"/work"}
        className=" relative w-[100px] h-[100px] md:w-[185px] md:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group "
      >
        <img
          src={roundedText}
          // width={141}
          // height={148}
          alt=""
          className=" animate-spin-slow w-[80px] h-[80px] md:w-full md:h-full max-w-[141px] max-h-[148px] "
        />
        <HiArrowRight className=" absolute text-4xl group-hover:translate-x-2 transition-all duration-300 " />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
