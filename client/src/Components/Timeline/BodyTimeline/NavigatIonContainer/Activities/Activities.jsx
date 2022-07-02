import { useContext } from "react";
import Profile from "./../../PostContainer/Posts/Post/PostImage/Image/Image.png";
import SpanImages from "../../../../../Helper/Components/SpanImages";
import ContextData from "../../../../../Helper/Context/ContextData";
import Activity from "./Activity/Activity";

import GroupsSvg from "./../../../../../Helper/Svgs/Activities/Groups.svg";
import SavedSvg from "./../../../../../Helper/Svgs/Activities/Saved.svg";
import PagesSvg from "./../../../../../Helper/Svgs/Activities/Pages.svg";
import RecentActivitiesSvg from "./../../../../../Helper/Svgs/Activities/RecentActivities.svg";

const Activities = () => {
  const userCtx = useContext(ContextData).userObject;

  return (
    <div className="bg-[#FCFDFD] mb-[2rem]">
      <div className="flex pt-[0.4rem] pl-[0.5rem] hover:cursor-pointer pb-[0.6rem]">
        <SpanImages
          spanClass="mr-[0.3rem] "
          imgClass="h-[2rem] min-w-[2rem] object-cover rounded-[50%] aspect-square"
          url={Profile}
          alt="Profile"
        />
        <div>
          <p className="text-[0.8rem] w-[70%] h-[1rem] overflow-hidden">
            {userCtx.name}
          </p>
          <p className="text-[0.6rem]">{userCtx.username}</p>
        </div>
      </div>
      <ul>
        <Activity name="Groups" url={GroupsSvg} alt="Groups" />
        <Activity name="Saved" url={SavedSvg} alt="Saved" />
        <Activity name="Pages" url={PagesSvg} alt="Pages" />
        <Activity
          name="Recent Activities"
          url={RecentActivitiesSvg}
          alt="Recent Activities"
        />
      </ul>
    </div>
  );
};

export default Activities;
