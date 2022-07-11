import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FieldLi from "./FieldLi";

const SignInContainer = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const validateForm = () => {
    return userName && password;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/login", {
        userName,
        password,
      });
      console.log(response);
      // setUserName("");
      // setPassword("");
      alert("You are Logged In");
      Navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="grow bg-foreground min-w-[25rem] w-[20vw] max-w-[35rem] mx-[1.5rem] py-[3rem] rounded-[0.8rem] flex justify-center items-center flex-col max500:min-w-[5rem]">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
          method="post"
        >
          <ul className="poppinsText px-[1.6rem] w-[100%]">
            <FieldLi
              fieldName={"userName"}
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              inputType={"text"}
            />
            <FieldLi
              fieldName={"Password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              inputType={"password"}
            />
          </ul>
          <button
            className="bg-primary text-white mt-[0.5rem] px-[0.8rem] py-[0.3rem] rounded-[0.4rem] max500:text-[0.8rem] max500:px-[0.6rem] max500:py-[0.2rem] w-[5.8rem]"
            disabled={!validateForm()}
          >
            Sign in
          </button>
        </form>
        <Link to={"/signup"} className="text-[0.7rem] m-[0.4rem]">
          Create a New Account
        </Link>
      </div>
    </div>
  );
};

export default SignInContainer;
