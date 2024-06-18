import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import LeftSideBar from "./LeftSideBar";

const Layout = ({ children }) => {
  return (
    <div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative">
      <LeftSideBar/>
      <TopLeftImg />
      <NavBar />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
