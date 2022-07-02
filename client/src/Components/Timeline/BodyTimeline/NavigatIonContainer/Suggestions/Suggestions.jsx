import SpanImages from "../../../../../Helper/Components/SpanImages";
import FriendSuggestionsSvg from "./../../../../../Helper/Svgs/Suggestions/FriendSuggestions.svg";
import Friend from "./../../PostContainer/Posts/Post/PostImage/Image/Image.png";
import Suggestion from "./Suggestion/Suggestion";

const Suggestions = () => {
  return (
    <div className="bg-[#FCFDFD]  max-h-[20rem] mt-[2rem] ">
      <div className="flex items-center pt-[0.4rem] pl-[0.5rem] hover:cursor-pointer pb-[0.6rem]">
        <SpanImages
          spanClass="mr-[0.4rem] "
          imgClass="h-[2rem] min-w-[2rem]"
          alt="Friend Suggestions"
          url={FriendSuggestionsSvg}
        />
        <p className="font-[500] text-[0.8rem] w-[70%] h-[1rem] overflow-hidden">
          Friend Suggestions
        </p>
      </div>
      <ul className="overflow-auto max-h-[17rem]">
        <Suggestion url={Friend} alt="EveryBody" FriendName="EveryBody" />
        <Suggestion url={Friend} alt="EveryBody" FriendName="EveryBody" />
        <Suggestion url={Friend} alt="EveryBody" FriendName="EveryBody" />
        <Suggestion url={Friend} alt="EveryBody" FriendName="EveryBody" />
        <Suggestion url={Friend} alt="EveryBody" FriendName="EveryBody" />
        <Suggestion url={Friend} alt="EveryBody" FriendName="EveryBody" />
        <Suggestion url={Friend} alt="EveryBody" FriendName="EveryBody" />
      </ul>
    </div>
  );
};

export default Suggestions;
