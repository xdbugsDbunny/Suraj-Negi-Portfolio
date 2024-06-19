import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { RiTwitterXLine, RiMetaLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LeftSideBar = () => {
  return (
    <div className="xl:flex hidden flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className=" flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full ">
        <motion.a
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1 }}
          href={"https://www.linkedin.com/in/suraj-negi-948945141/"}
          className="social-link"
        >
          <FaLinkedin size={"2vw"} color="#0275B4" />
        </motion.a>
        <motion.a
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1 }}
          href="https://www.instagram.com/xdbugsbunny/"
          className="social-link"
        >
          <FaInstagram size={"2vw"} color="#c13584" />
        </motion.a>
        <motion.a
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1 }}
          href="https://wa.me/918077320338"
          className="social-link"
        >
          <FaWhatsapp size={"2vw"} color="#29A61A" />
        </motion.a>
        <motion.a
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1 }}
          href="https://github.com/xdbugsDbunny/xdbugsDbunny"
          className="social-link"
        >
          <FaGithub size={"2.2vw"} color="#000000" />
        </motion.a>
        <motion.a
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1 }}
          href="https://x.com/negi_negisuraj"
          className="social-link"
        >
          <RiTwitterXLine size={"2vw"} color="#000000" />
        </motion.a>
        <motion.a
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1 }}
          // href="#"
          className="social-link"
          onClick={() => toast.info("I'm sorry, but I don't use Meta.")}
        >
          <RiMetaLine size={"2vw"} color="#0081FB" />
        </motion.a>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LeftSideBar;
