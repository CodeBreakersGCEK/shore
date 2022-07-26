import React from "react";
import SignUpContainer from "../components/Sign/SignUpContainer";
import Graphic from "../utils/Svgs/Graphic.svg";


const SignUp = () => {
  return (
    <div className="h-[90vh] flex justify-around items-center ">
      <SignUpContainer />
      <div>
        <img src={Graphic} alt="Graphic" />
      </div>
    </div>
  );
};

export default SignUp;
