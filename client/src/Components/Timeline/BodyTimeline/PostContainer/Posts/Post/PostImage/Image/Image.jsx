import pic from "./Image.png";

const Image = () => {
  return (
    <div className="flex justify-center items-center">
      <img className="max-h-[40rem] object-cover w-[100%] rounded-[0.8rem] border-[1px] border-[black]" src={pic} alt="Post" />
    </div>
  );
};

export default Image;
