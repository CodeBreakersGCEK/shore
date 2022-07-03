import React from "react";
import { IconContext } from "react-icons";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className=" bg-foreground fixed h-[3rem] w-[100vw] top-0 left-0 flex justify-between items-center px-[0.6rem]">
      <span className="text-primary text-[1.5rem]">Shore</span>
      {/* Input Area */}
      <div className="relative flex items-center max500:hidden">
        <input
          className="border-[1px] border-[black] bg-background rounded-[0.2rem] h-[2.2rem] pl-[0.4rem] w-[22rem] text-[0.83rem] focus-within:bg-focusInput"
          type="text"
          placeholder="Search"
        />
        <button className="absolute right-[0rem] h-[1.5rem] cursor-pointer w-[1.7rem]">
          <IconContext.Provider value={{ size: "1em", color: "gray" }}>
            <BiSearch />
          </IconContext.Provider>
        </button>
      </div>
      {/* Upload Button */}
      <button className="flex items-center justify-center bg-primary p-[0.45rem] rounded-[0.3rem]">
        <IconContext.Provider value={{ size: "1.3rem", color: "white" }}>
          <AiOutlinePlusSquare />
        </IconContext.Provider>
        <p className="text-[1rem] ml-[0.2rem] text-[white] font-semibold max500:hidden">
          Upload
        </p>
      </button>
    </div>
  );
};

export default Navbar;
