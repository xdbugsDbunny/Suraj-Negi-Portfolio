import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import logo from "../assets/logo_white.png";
// import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className=" absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className=" container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-2 ">
          <Link to={"/"}>
            <img src={logo} width={220} height={48} alt="" className=" w-[240px] h-[68px] " />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
