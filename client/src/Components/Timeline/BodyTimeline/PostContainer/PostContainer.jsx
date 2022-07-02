import Posts from "./Posts/Posts";
import PostUpload from "./PostUpload/PostUpload";

const PostContainer = () => {
  return (
    <div className="self-start flex flex-col justify-start items-center w-[70rem] mt-[7rem] ml-[15rem] overflow-hidden pc1600:w-[60rem] phone:ml-[0] phone:mt-[1.5rem]">
      <PostUpload />
      <Posts />
    </div>
  );
};

export default PostContainer;
