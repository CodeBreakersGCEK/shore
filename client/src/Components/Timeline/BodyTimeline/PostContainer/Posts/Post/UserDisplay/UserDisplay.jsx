import url from "./../Comments/Comment/profile.png";

const UserDisplay = (props) => {
  return (
    <div className="flex py-[0.5rem]">
      <span className="mr-[0.5rem]">
        <img className="h-[2.5rem] w-[2.5rem] rounded-[50%]" src={url} alt="" />
      </span>
      <div>
              <span className="text-[0.8rem]">__airborn</span>
              <p className="text-[0.7rem]">11/11/2021</p>
      </div>
    </div>
  );
};

export default UserDisplay;
