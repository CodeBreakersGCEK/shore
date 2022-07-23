import React, { useContext, useState } from "react";
import Context from "../Context/Context";

const Profile = () => {
  const UserCtx = useContext(Context).user;

  return (
    <div className="flex items-center justify-around h-[100%] w-screen">
      <ul>
        <li className="flex ">
          {UserCtx.firstName} {UserCtx.lastName}
        </li>
        <li>{UserCtx.userName}</li>
      </ul>
    </div>
  );
};

export default Profile;
