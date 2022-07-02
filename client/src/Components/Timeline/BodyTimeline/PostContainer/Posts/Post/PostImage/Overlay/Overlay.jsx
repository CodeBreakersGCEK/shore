import Stats from "./Stats/Stats";
import CommmentSvg from "./../../../../../../../../Helper/Svgs/Stats/Comment.svg";
import BookmarkSvg from "./../../../../../../../../Helper/Svgs/Stats/Bookmark.svg";
import FavouriteSvg from "./../../../../../../../../Helper/Svgs/Stats/Favourite.svg";

const Overlay = () => {
  return (
    <div className="flex justify-around items-center absolute bottom-[1rem] translate-x-[-50%] left-[50%]  bg-[rgba(0,0,0,0.5)] rounded-[0.2rem] backdrop-blur-[0.1rem] text-white ">
      <Stats url={FavouriteSvg} value={100} />
      <Stats url={CommmentSvg} value={200} />
      <Stats url={BookmarkSvg} value={300} />
    </div>
  );
};

export default Overlay;
