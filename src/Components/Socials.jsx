import React from "react";
import { Link } from "react-router-dom";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
  RiWhatsappLine 
} from "react-icons/ri";


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg ">
      <Link to={"https://www.instagram.com/xdbugsbunny/"} className="hover:text-accent transition-all duration-300 hover:scale-150 ">
        {" "}
        <RiInstagramLine />{" "}
      </Link>
      <Link to={"https://x.com/negi_negisuraj"} className="hover:text-accent transition-all duration-300 hover:scale-150 ">
        {" "}
        <RiWhatsappLine />{" "}
      </Link>
      <Link to={"https://www.linkedin.com/in/suraj-negi-948945141/"} className="hover:text-accent transition-all duration-300 hover:scale-150 ">
        {" "}
        <RiLinkedinLine />{" "}
      </Link>
      <Link to={"https://github.com/xdbugsDbunny/xdbugsDbunny"} className="hover:text-accent transition-all duration-300 hover:scale-150 ">
        {" "}
        <RiGithubLine />{" "}
      </Link>
    </div>
  );
};

export default Socials;
