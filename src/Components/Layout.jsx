import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import LeftSideBar from "./LeftSideBar";
import site from '../assets/site.svg';

const Layout = ({ children }) => {
  return (
    <div className="page text-white bg-cover bg-no-repeat font-sora relative" style={{backgroundImage: `url(${site})`}}>
      <LeftSideBar />
      <TopLeftImg />
      <NavBar />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
