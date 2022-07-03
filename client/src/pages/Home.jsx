import React from "react";
import NavContainer from "../components/Home/NavContainer";
import PostContainer from "../components/Home/PostContainer";
import RightContainer from "../components/Home/RightContainer";

const Home = () => {
  return (
    <div className="flex bg-background  align-start justify-center pt-[1.5rem] w-[100]">
      <NavContainer />
      <PostContainer />
      <RightContainer />
    </div>
  );
};

export default Home;
