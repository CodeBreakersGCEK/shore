import SpanImages from "../../Helper/Components/SpanImages";
import Profile from "./../Timeline/BodyTimeline/PostContainer/Posts/Post/PostImage/Image/Image.png";
import HomeSvg from "./../../Helper/Svgs/Navigation/Home.svg";
import MessageSvg from "./../../Helper/Svgs/Navigation/Message.svg";
import PeoplesSvg from "./../../Helper/Svgs/Navigation/Peoples.svg";

const NavigationBar = () => {
  return (
    <nav className="bg-[#155E75] flex items-center justify-between py-0 px-4 w-screen h-[3rem] fixed z-10">
      <div className="logo text-[1.7rem]">Shore</div>
      <SpanImages
        spanClass=""
        imgClass="h-[2.7rem] w-[2.7rem] object-cover rounded-[50%]"
        alt="Profile"
        url={Profile}
      />
      <div className="absolute flex items-center left-[20%]">
        <SpanImages
          spanClass="mx-[0.4rem] bg-[rgba(0,0,0,0.5) rounded-[50%] p-[0.5rem] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.5)] items-center"
          imgClass="h-[1.5rem] w-[1.5rem] "
          alt="Home"
          url={HomeSvg}
        />
        <SpanImages
          spanClass="mx-[0.4rem] bg-[rgba(0,0,0,0.5) rounded-[50%] p-[0.5rem] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.5)] items-center"
          imgClass="w-[1.7rem] h-[1.7rem]"
          alt="Message"
          url={MessageSvg}
        />
        <SpanImages
          spanClass="mx-[0.4rem] bg-[rgba(0,0,0,0.5) rounded-[50%] p-[0.5rem] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.5)] items-center"
          imgClass="h-[1.7rem] w-[1.7rem]"
          alt="Peoples"
          url={PeoplesSvg}
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
