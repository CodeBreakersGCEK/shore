import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/Context";

import { IconContext } from "react-icons";
import { GrHomeRounded } from "react-icons/gr";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineSetting } from "react-icons/ai";

const NavContainer = () => {
  const UserCtx = useContext(Context).user;
  const [homeHover, setHomeHover] = useState("black");
  const [exploreHover, setExploreHover] = useState("black");
  const [profileHover, setProfileHover] = useState("black");
  const [settingsHover, setSettingsHover] = useState("black");
  const hoverColor = "#164E63";

  const HomeHoverToggleFn = () => {
    if (homeHover === "black") {
      setHomeHover(hoverColor);
    } else {
      setHomeHover("black");
    }
  };

  const ExploreHoverToggleFn = () => {
    if (exploreHover === "black") {
      setExploreHover(hoverColor);
    } else {
      setExploreHover("black");
    }
  };

  const ProfileHoverToggleFn = () => {
    if (profileHover === "black") {
      setProfileHover(hoverColor);
    } else {
      setProfileHover("black");
    }
  };

  const SettingsHoverToggleFn = () => {
    if (settingsHover === "black") {
      setSettingsHover(hoverColor);
    } else {
      setSettingsHover("black");
    }
  };

  return (
    <div className="self-start w-[15rem] ml-[3vw] justify-self-start max500:hidden ">
      {/* Profile Container */}
      <Link to={`/profile`}>
        <div className="h-[5rem] bg-foreground  rounded-[0.4rem] flex justify-center items-center overflow-hidden">
          <img
            src={UserCtx.imageUrl}
            alt="Profile"
            className="w-[2rem] h-[2rem] object-cover rounded-[0.3rem]"
          />
          <div className="flex flex-col overflow-hidden ml-[0.5rem] text-fontPrimary2">
            <span className="text-[1rem] font-bold max:1000text-[0.8rem]">
              {UserCtx.name}
            </span>
            <span className="w-[6rem] text-[0.8rem]">@{UserCtx.id}</span>
          </div>
        </div>
      </Link>
      {/* navigating Container */}
      <ul className=" bg-foreground mt-[1.7rem]  rounded-[0.4rem] overflow-hidden">
        {/* Home component */}
        <li
          className="flex items-center hover:bg-fontSecondary p-[1.1rem]  hover:cursor-pointer hover:border-l-[3px] "
          onMouseEnter={HomeHoverToggleFn}
          onMouseLeave={HomeHoverToggleFn}
        >
          <br className="h-[100px]  bg-[#e6e6e6]" />
          <IconContext.Provider value={{ size: "1.7rem", color: homeHover }}>
            <BiHomeAlt />
          </IconContext.Provider>
          <p className={"ml-[0.7rem] text-[1rem] text-[" + homeHover + "]"}>
            Home
          </p>
        </li>
        <li className="flex justify-center">
          <hr className="h-[1px] w-[80%] bg-[#e6e6e6] border-0" />
        </li>
        {/* Explore component */}
        <li
          className="flex items-center hover:bg-fontSecondary p-[1.1rem] hover:cursor-pointer hover:border-l-[3px] "
          onMouseEnter={ExploreHoverToggleFn}
          onMouseLeave={ExploreHoverToggleFn}
        >
          <IconContext.Provider value={{ size: "1.7rem", color: exploreHover }}>
            <MdOutlineExplore />
          </IconContext.Provider>
          <p className={"ml-[0.7rem] text-[1rem] text-[" + exploreHover + "]"}>
            Explore
          </p>
        </li>
        <li className="flex justify-center">
          <hr className="h-[1px] w-[80%] bg-[#e6e6e6] border-0" />
        </li>
        {/* Profile component */}
        <li
          className="flex items-center hover:bg-fontSecondary p-[1.1rem] hover:cursor-pointer hover:border-l-[3px] "
          onMouseEnter={ProfileHoverToggleFn}
          onMouseLeave={ProfileHoverToggleFn}
        >
          <IconContext.Provider value={{ size: "1.6rem", color: profileHover }}>
            <VscAccount />
          </IconContext.Provider>
          <p className={"ml-[0.7rem] text-[1rem] text-[" + profileHover + "]"}>
            Profile
          </p>
        </li>
        <li className="flex justify-center">
          <hr className="h-[1px] w-[80%] bg-[#e6e6e6] border-0" />
        </li>
        {/* Settings component */}
        <li
          className="flex items-center hover:bg-fontSecondary p-[1.1rem] hover:cursor-pointer hover:border-l-[3px] "
          onMouseEnter={SettingsHoverToggleFn}
          onMouseLeave={SettingsHoverToggleFn}
        >
          <IconContext.Provider
            value={{ size: "1.7rem", color: settingsHover }}
          >
            <AiOutlineSetting />
          </IconContext.Provider>
          <p className={"ml-[0.7rem] text-[1rem] text-[" + settingsHover + "]"}>
            Settings
          </p>
        </li>
      </ul>
    </div>
  );
};

export default NavContainer;
