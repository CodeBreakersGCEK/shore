import Image from "./Image/Image";
import Overlay from "./Overlay/Overlay";

const PostImage = () => {
  return (
    <div className="z-0 relative">
      <p className="text-[0.9rem]">This is a Image of a Girl</p>
      <Image />
      <Overlay />
    </div>
  );
};

export default PostImage;
