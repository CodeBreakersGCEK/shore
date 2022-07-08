import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineSetting } from "react-icons/ai";

import Context from "../../../Context/Context";
import NavLink from "./NavLink";

const NavContainer = () => {
  const UserCtx = useContext(Context).user;

  return (
    <div className="self-start w-[15rem] ml-[3vw] justify-self-start max550:hidden ">
      {/* Profile Container */}
      <Link to={`/profile`}>
        <div className="h-[5rem] bg-foreground  rounded-[0.4rem] flex  items-center overflow-hidden pl-[1.6rem] max1000:pl-[1rem] max800:pl-[0.8rem]">
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
      <ul className="bg-foreground mt-[1.7rem] rounded-[0.4rem] overflow-hidden">
        <NavLink IconName={BiHomeAlt} name={"Home"} />
        <NavLink IconName={MdOutlineExplore} name={"Explore"} />
        <NavLink IconName={VscAccount} name={"Profile"} />
        <NavLink IconName={AiOutlineSetting} name={"Settings"} />
      </ul>
    </div>
  );
};

export default NavContainer;
