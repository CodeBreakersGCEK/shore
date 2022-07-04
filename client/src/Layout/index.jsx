import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-[2.4rem] h-[100vh] overflow-hidden ">{children}</div>
    </div>
  );
};

export default Layout;
