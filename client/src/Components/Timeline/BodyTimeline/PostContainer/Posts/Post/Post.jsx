import Comments from "./Comments/Comments";
import PostImage from "./PostImage/PostImage";
import UserDisplay from "./UserDisplay/UserDisplay";

const Post = () => {
  return (
    <div className="bg-[#FCFDFD] h-[auto] px-[2.5%] mb-[2rem] w-[100%]">
      <UserDisplay />
      <PostImage />
      <Comments />
    </div>
  );
};

export default Post;
