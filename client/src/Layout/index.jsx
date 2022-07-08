import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-[3rem] h-[100vh] overflow-hidden bg-background">{children}</div>
    </div>
  );
};

export default Layout;
