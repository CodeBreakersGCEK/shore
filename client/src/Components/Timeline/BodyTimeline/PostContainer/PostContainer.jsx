import Posts from "./Posts/Posts";
import PostUpload from "./PostUpload/PostUpload";

const PostContainer = () => {
  return (
    <div className="self-start flex flex-col justify-start items-center w-[calc(70%-1rem)] mt-[7rem] ml-[4rem] overflow-hidden">
      <PostUpload />
      <Posts />
    </div>
  );
};

export default PostContainer;
