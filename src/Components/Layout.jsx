import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import LeftSideBar from "./LeftSideBar";
import bgSite from "../assets/site-bg.svg";
const Layout = ({ children }) => {
  return (
    <div
      className={`page text-white bg-cover bg-no-repeat font-sora relative`}
      style={{ backgroundImage: `url(${bgSite})` }}
    >
      <LeftSideBar />
      <TopLeftImg />
      <NavBar />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
