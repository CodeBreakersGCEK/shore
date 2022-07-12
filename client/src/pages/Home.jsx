import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import NavContainer from "../components/Home/NavContainer";
import PostContainer from "../components/Home/PostContainer";
import RightContainer from "../components/Home/RightContainer";

const Home = () => {
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await axios.get("http://localhost:4000/profile", {
          id: "62cb30a51e1a35aec77033cf",
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };

    loadProfile();
  });

  return (
    <div className="flex bg-background  align-start justify-center pt-[1.5rem] w-[100]">
      <NavContainer />
      <PostContainer />
      <RightContainer />
    </div>
  );
};

export default Home;
