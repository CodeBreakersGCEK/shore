import React, { useContext } from "react";
import Context from "./../../Context/Context";
import { IconContext } from "react-icons";
import Post from "../Post/Post";
import { BsArrowUpSquare } from "react-icons/bs";

const PostContainer = () => {
  const UserCtx = useContext(Context).user;

  return (
    <div className="grow self-start min-w-[25rem] max-w-[75rem]  max-m-[3rem] min-m-[1rem] mx-[1.5vw] ">
      {/* For Uploading the Content */}
      <div className="h-[3rem] bg-foreground mx-[1rem] rounded-[0.4rem] flex justify-center items-center px-[0.5rem]">
        <img
          src={UserCtx.imageUrl}
          alt="Profile"
          className="w-[2rem] h-[2rem] object-cover rounded-[0.3rem]"
        />
        <input
          type="Search"
          className="bg-background grow h-[2.15rem] mx-[0.5rem] rounded-[0.3rem] text-[0.8rem] p-[0.5rem] focus-within:bg-focusInput"
          placeholder="What's Up, Harsh"
        />
        <button className="flex items-center justify-center bg-primary p-[0.45rem] rounded-[0.3rem]">
          <IconContext.Provider value={{ size: "1.3rem", color: "white" }}>
            <BsArrowUpSquare />
          </IconContext.Provider>
          <p className="text-[0.8rem] ml-[0.3rem] text-[white] font-semibold">
            Post it
          </p>
        </button>
      </div>
      {/* Timeline for The Post */}
      <ul className="h-[calc(100vh-8rem)] bg-background m-[1rem] overflow-auto">
        <Post
          id="1"
          name="Vegeta"
          userName="noob"
          profileImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJ68cLJ6XrUvP1no78hIeZWfanz4wduJHaw&usqp=CAU"
          postContentUrl="https://wallpaperaccess.com/full/388294.jpg"
          likes="69"
          comments="99"
          description="Ohh! Goku You are a God and far Superior Being than Me"
        />
        <Post
          id="2"
          name="Itachi"
          userName="kingofuchiha"
          profileImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzB8zxJa0VHEXR4tai0myYwtRRLNl_ATR4Sg&usqp=CAU"
          postContentUrl="https://wallpapers.com/images/high/bright-moon-itachi-uchiha-1n947evb23w2q7um.jpg"
          likes="69"
          comments="99"
          description="mangekyou sharingan"
        />
      </ul>
    </div>
  );
};

export default PostContainer;
