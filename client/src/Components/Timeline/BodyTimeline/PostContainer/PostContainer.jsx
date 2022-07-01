import Posts from "./Posts/Posts";
import PostsUpload from "./PostUpload/PostsUpload";

const PostContainer = () => {
  return (
    <div className="bg-red-800 w-4/6 mt-[6rem] mx-4 h-[100vh] overflow-hidden">
      <PostsUpload />
      <Posts />
    </div>
  );
};

export default PostContainer;
