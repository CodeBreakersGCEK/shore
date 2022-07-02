import Profile from "./profile.png";
import SpanImages from "../../../../../../../../Helper/Components/SpanImages";

const Comment = () => {
  return (
    <div className="flex my-[0.5rem] items-center">
      <SpanImages
        spanClass="h-[1.5rem] ml-[0.4rem] mr-[0.4rem] w-[1.5rem]"
        imgClass="h-[1.5rem] w-[1.5rem] rounded-[50%]"
        url={Profile}
        alt="Profile"
      />
      <div className="bg-[rgba(0,0,0,0.2)] rounded-[0.3rem] p-[0.2rem] w-[auto] max-w-[85%]">
        <p className=" text-[0.8rem] px-[0.2rem]">
          This is a Nice Photo. You look very Beautiful, You are a part of
          heaven
        </p>
      </div>
    </div>
  );
};

export default Comment;
