import React, { Fragment, useContext } from "react";
import { IconContext } from "react-icons";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Context from "../Context/Context";

const Navbar = () => {
  const ui = useContext(Context).ui;
  const userCtx = useContext(Context).user;

  return (
    <Fragment>
      {!userCtx.isLogging && (
        <div className=" bg-foreground fixed h-[3.2rem] w-[100vw] top-0 left-0 flex justify-between items-center px-[0.6rem]">
          <Link to={"/"}>
            <span className="text-primary text-[1.5rem]">Shore</span>
          </Link>
          {/* Input Area */}
          {!ui.sign ? (
            <div className="relative flex items-center max550:hidden">
              <input
                className="border-[1px] border-[#a3a3a3] bg-background rounded-[0.5rem] h-[2.2rem] pl-[0.4rem] w-[22rem] text-[0.83rem] poppinsText focus-within:bg-focusInput"
                type="text"
                placeholder="Search"
              />
              <button className="absolute right-[0rem] h-[1.5rem] cursor-pointer w-[1.7rem]">
                <IconContext.Provider value={{ size: "1em", color: "gray" }}>
                  <BiSearch />
                </IconContext.Provider>
              </button>
            </div>
          ) : (
            "jbhuhthbvhb"
          )}
          {/* Upload Button */}
          {!ui.sign ? (
            <button className="flex items-center justify-center bg-primary p-[0.45rem] rounded-[0.3rem]">
              <IconContext.Provider value={{ size: "1.3rem", color: "white" }}>
                <AiOutlinePlusSquare />
              </IconContext.Provider>
              <p className="text-[1rem] ml-[0.2rem] text-[white] font-medium poppinsTextmax550:hidden">
                Upload
              </p>
            </button>
          ) : (
            ""
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
