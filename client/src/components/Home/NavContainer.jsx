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
  const noHoverColor = "#a3a3a3";
  const hoverColor = "#164E63";
  const [homeHover, setHomeHover] = useState(noHoverColor);
  const [exploreHover, setExploreHover] = useState(noHoverColor);
  const [profileHover, setProfileHover] = useState(noHoverColor);
  const [settingsHover, setSettingsHover] = useState(noHoverColor);

  const HomeHoverToggleFn = () => {
    if (homeHover === noHoverColor) {
      setHomeHover(hoverColor);
    } else {
      setHomeHover(noHoverColor);
    }
  };

  const ExploreHoverToggleFn = () => {
    if (exploreHover === noHoverColor) {
      setExploreHover(hoverColor);
    } else {
      setExploreHover(noHoverColor);
    }
  };

  const ProfileHoverToggleFn = () => {
    if (profileHover === noHoverColor) {
      setProfileHover(hoverColor);
    } else {
      setProfileHover(noHoverColor);
    }
  };

  const SettingsHoverToggleFn = () => {
    if (settingsHover === noHoverColor) {
      setSettingsHover(hoverColor);
    } else {
      setSettingsHover(noHoverColor);
    }
  };

  return (
    <div className="self-start w-[15rem] ml-[3vw] justify-self-start max550:hidden ">
      {/* Profile Container */}
      <Link to={`/profile`}>
        <div className="h-[5rem] bg-foreground  rounded-[0.4rem] flex justify-center items-center overflow-hidden">
          <img
            src={UserCtx.imageUrl}
            alt="Profile"
            className="w-[2rem] h-[2rem] object-cover rounded-[0.3rem]"
          />
          <div className="flex flex-col overflow-hidden ml-[0.5rem] text-fontPrimary2 poppinsText">
            <span className="text-[0.95rem] font-bold max800:text-[0.7rem]">
              {UserCtx.name}
            </span>
            <span className="w-[6rem] text-[0.75rem] max800:text-[0.6rem] max800:w-[4rem]">
              @{UserCtx.id}
            </span>
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
          <br className="h-[10px]  bg-[#e6e6e6]" />
          <IconContext.Provider value={{ size: "1.7rem", color: homeHover }}>
            <BiHomeAlt />
          </IconContext.Provider>
          <p
            className={`ml-[0.7rem] text-[1rem] text-[${homeHover}]  poppinsText `}
          >
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
          <p
            className={`ml-[0.7rem] text-[1rem] text-[${exploreHover}] poppinsText`}
          >
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
          <p
            className={`ml-[0.7rem] text-[1rem] text-[${profileHover}] poppinsText`}
          >
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
          <p
            className={`ml-[0.7rem] text-[1rem] text-[${settingsHover}] poppinsText`}
          >
            Settings
          </p>
        </li>
      </ul>
    </div>
  );
};

export default NavContainer;
