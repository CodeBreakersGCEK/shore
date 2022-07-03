import React from "react";
import { AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { IconContext } from "react-icons/lib/esm/iconContext";

const Post = (props) => {
  return (
    <li className="bg-foreground mb-[2rem] rounded-[0.4rem] p-[0.5rem] flex flex-col ">
      <div>
        <div className="flex">
          <img
            src={props.profileImageUrl}
            alt="Profile"
            className="w-[2rem] h-[2rem] object-cover rounded-[0.3rem]"
          />
          <div className="flex flex-col overflow-hidden ml-[0.5rem] text-fontPrimary2">
            <span className="text-[0.8rem] font-bold">{props.name}</span>
            <span className="w-[6rem] text-[0.6rem]">@{ props.userName}</span>
          </div>
        </div>
        <p className="text-[0.8rem] mb-[0.2rem]">{props.description}</p>
      </div>
      <div className="flex flex-col justify-center">
        <img
          src={props.postContentUrl}
          className="rounded-[0.3rem]"
          alt="Post Image"
        />
        <div className="flex justify-around h-[3rem] border-b-[2px] border-background text-[0.7rem] font-semibold">
          <div className="flex items-center justify-center">
            <IconContext.Provider value={{ size: "1rem" }}>
              <AiOutlineHeart />
            </IconContext.Provider>
            <p className="ml-[0.2rem]">{props.likes} Likes</p>
          </div>
          <div className="flex items-center justify-center">
            <IconContext.Provider value={{ size: "1rem" }}>
              <BiComment />
            </IconContext.Provider>
            <p className="ml-[0.2rem]">{props.comments} Comments</p>
          </div>
        </div>
      </div>
      <div className="flex mt-[0.5rem]">
        <input
          className="bg-background w-[100%] mr-[0.4rem] rounded-[0.3rem] text-[0.8rem] pl-[0.4rem] focus-within:bg-focusInput"
          type="text"
          placeholder="Comment!"
        />
        <button className="flex items-center justify-center bg-primary p-[0.45rem] px-[0.7rem] rounded-[0.3rem]">
          <IconContext.Provider value={{ size: "1.2rem", color: "white" }}>
            <AiOutlineSend />
          </IconContext.Provider>
        </button>
      </div>
    </li>
  );
};

export default Post;
