import SpanImages from "../../../../../Helper/Components/SpanImages";
import CameraSvg from "./../../../../../Helper/Svgs/PostUpload/Camera.svg";
import FeelingSvg from "./../../../../../Helper/Svgs/PostUpload/Feeling.svg";
import TagFriendsSvg from "./../../../../../Helper/Svgs/PostUpload/TagFriends.svg";
import profile from "./../Posts/Post/PostImage/Image/Image.png";
import Media from "./Media/Media";

const PostUpload = () => {
  return (
    <div className="bg-[#FCFDFD] px-[0.78rem] w-[90%] h-[auto] flex items-center ">
      <SpanImages
        spanClass="self-start pt-[0.9rem]"
        imgClass="h-[2.2rem] w-[2.2rem] object-cover rounded-[50%] aspect-square"
        url={profile}
        alt="Profile"
      />
      <div className="self-start pt-[0.9rem] ml-[1.5rem] pb-[1rem]">
        <input
          type="text"
          name="PostText"
          className="bg-slate-100 border-[1px] border-[black] w-[40vw] h-[2.2rem] p-[0.3rem]"
          placeholder="Type Here..."
        />
        <ul className="flex text-[0.75rem] mt-[0.7rem] justify-around font-[600]">
          <Media url={CameraSvg} p="Photos/Videos" />
          <Media url={FeelingSvg} p="Feeling/Activity" />
          <Media url={TagFriendsSvg} p="Tag Friends" />
        </ul>
      </div>
    </div>
  );
};

export default PostUpload;
