import { useContext } from "react";
import ContextData from "../../Helper/Context/ContextData";

const Profile = () => {
  const userCtx = useContext(ContextData).userObject;
  const modeCtx = useContext(ContextData).modeObject;

  const clicked = () => {
    userCtx.setName();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {userCtx.name}
      <button onClick={clicked} className="text-red-500">
        click
      </button>
    </div>
  );
};

export default Profile;
