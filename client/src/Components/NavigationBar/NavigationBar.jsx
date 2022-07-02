import SpanImages from "../../Helper/Components/SpanImages";
import Profile from "./../Timeline/BodyTimeline/PostContainer/Posts/Post/PostImage/Image/Image.png";
import HomeSvg from "./../../Helper/Svgs/Navigation/Home.svg";
import MessageSvg from "./../../Helper/Svgs/Navigation/Message.svg";
import PeoplesSvg from "./../../Helper/Svgs/Navigation/Peoples.svg";

const NavigationBar = () => {
  return (
    <nav className="bg-[#155E75] flex items-center justify-between py-0 px-4 w-screen h-[3rem] fixed z-10">
      <div className="logo text-[#A5FFD6] text-[1.7rem]">Shore</div>
      <div className="flex">
        <SpanImages
          spanClass="mr-[0.5rem] hidden phone:block"
          imgClass="h-[2.7rem] w-[2.7rem] object-cover rounded-[50%]"
          alt="Profile"
          url={Profile}
        />
        <SpanImages
          spanClass="ml-[0.5rem]"
          imgClass="h-[2.7rem] w-[2.7rem] object-cover rounded-[50%]"
          alt="Profile"
          url={Profile}
        />
      </div>
      {/* It is just for pc and tablet */}
      <div className="absolute flex items-center left-[20%] phone:hidden">
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
      {/* It is for Phone */}
      <ul className="hidden fixed h-[3rem] w-[100vw] bg-[#155E75] bottom-0 left-0 phone:flex z-30 justify-around items-center">
        <li className="border-[#155E75] hover:border-t-[red] active:border-t-[red]  hover:border-[4px] w-[33.33%] h-[3rem] flex items-center justify-center ">
          <SpanImages
            spanClass=""
            imgClass="h-[1.5rem] w-[1.5rem] "
            alt="Home"
            url={HomeSvg}
          />
        </li>
        <li className="border-[#155E75] hover:border-t-[red] active:border-t-[red]   hover:border-[4px] w-[33.33%] h-[3rem] flex items-center justify-center">
          <SpanImages
            spanClass=""
            imgClass="w-[1.7rem] h-[1.7rem]"
            alt="Message"
            url={MessageSvg}
          />
        </li>
        <li className="border-[#155E75] hover:border-t-[red] active:border-t-[red]   hover:border-[4px] w-[33.33%] h-[3rem] flex items-center justify-center">
          <SpanImages
            spanClass=""
            imgClass="h-[1.7rem] w-[1.7rem]"
            alt="Peoples"
            url={PeoplesSvg}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
