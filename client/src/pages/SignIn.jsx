import React from "react";
import SignInContainer from "../components/Sign/SignInContainer";
import Graphic from "../utils/Svgs/Graphic.svg";

const SignIn = () => {
  return (
    <div className="h-[90vh] flex justify-around items-center ">
      <SignInContainer />
      <div>
        <img src={Graphic} alt="Graphic" />
      </div>
    </div>
  );
};

export default SignIn;
