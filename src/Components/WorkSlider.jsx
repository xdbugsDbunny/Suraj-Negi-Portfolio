import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { BsArrowRight } from "react-icons/bs";

import { Pagination } from "swiper";
import apple from "../assets/apple.jpg";
import healthify from "../assets/Doctor.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import rentV from "../assets/RentV.jpg";
import sundown from "../assets/Sundown.jpg";
import techlocker from "../assets/Techlocker.jpg";
import portfolio1 from "../assets/portfolio.gif";
import thumb1 from "../assets/thumb1.jpg";
import { Link } from "react-router-dom";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Apple clone UI",
          path: apple,
          link: "https://github.com/xdbugsDbunny/Apple-India-Clone",
        },
        {
          title: "Doctor Appointment App",
          path: healthify,
          link: "https://github.com/xdbugsDbunny/Healthify",
        },
        {
          title: "Portfolio 2.0",
          path: portfolio2,
          link: "/",
        },
        {
          title: "Rent Vahan",
          path: rentV,
          link: "https://github.com/xdbugsDbunny/Rent-Vahan",
        },
      ],
    },
    {
      images: [
        {
          title: "Sundown UI Clone",
          path: sundown,
          link: "https://github.com/xdbugsDbunny/Sundown-Studio",
        },
        {
          title: "Techlocker",
          path: techlocker,
          link: "https://github.com/xdbugsDbunny/TechClockers",
        },
        {
          title: "Portfolio",
          path: portfolio1,
          link:"https://github.com/xdbugsDbunny/Portfolio/tree/main/Portfolio"
        },
        {
          title: "Youtube Back-end Features Clone ",
          path: thumb1,
          link: "https://github.com/xdbugsDbunny/Youtube-Clone"
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      // className="h-[280px] xl:h-[480px] "
    >
      {workSlides.slides?.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link
                    className=" relative rounded-lg overflow-hidden flex items-center justify-center group "
                    key={index}
                    // onClick={() =>
                    //   (window.location.href = "https://github.com/xdbugsDbunny")
                    // }
                    to={image.link}
                  >
                    <div className=" flex items-center justify-center relative overflow-hidden group">
                      <img src={image.path} width={500} height={300} alt="" />
                      <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 ">
                        <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                          <div className=" flex flex-col items-center gap-x-2 text-[13px] tracking-[0.2rem] ">
                            <div className=" delay-100 text-2xl text-black font-extrabold text-center ">
                              {image.title}
                            </div>
                            <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">
                              Github
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200  ">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
