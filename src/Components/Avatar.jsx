import React from "react";
import avatar from "../assets/avatar.png";

const Avatar = () => {
  return (
    <div className=" hidden xl:flex xl:max-w-none ">
      <img
        src={avatar}
        width={737}
        height={678}
        alt=""
        className=" translate-z-0 w-full h-full "
      />
    </div>
  );
};

export default Avatar;
