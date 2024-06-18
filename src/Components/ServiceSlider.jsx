import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";
import { FaDatabase, FaProjectDiagram  } from "react-icons/fa";

import { SiBmcsoftware } from "react-icons/si";

const serviceData = [
  {
    icon: <RxCrop />,
    title: "Full Stack Web Development",
    description: "I specialize in developing comprehensive web applications using the MERN Stack.",
  },
  {
    icon: <RxPencil2 />,
    title: "Responsive Web Design",
    description: "Create fully responsive websites for optimal user experience across all devices.",
  },
  {
    icon: <RxDesktop />,
    title: "API Development and Integration",
    description: "Develop and integrate secure, efficient APIs for web applications.",
  },
  {
    icon: <RxReader />,
    title: "UI/UX Design",
    description: "Design visually appealing, user-friendly interfaces with modern UI frameworks.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description: "Manage and secure both NoSQL (MongoDB) and SQL (MySQL) databases.",
  },
  {
    icon: <FaProjectDiagram  />,
    title: "Project Customization and Optimization",
    description: "Customize and optimize web applications to enhance performance and scalability.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] md:h-[340px] "
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.150)] h-full md:h-[300px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-3 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
              <div className="text-4xl text-accent">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] text-sm md:text-xl leading-normal ">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
