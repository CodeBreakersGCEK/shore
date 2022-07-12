import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Context from "../../Context/Context";
import FieldLi from "./FieldLi";

const SignUpContainer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userCtx = useContext(Context).user;
  const Navigate = useNavigate();

  userCtx.setIsLogging(true);

  const validateForm = () => {
    return firstName && lastName && userName && email && password;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/register", {
        firstName,
        lastName,
        userName,
        email,
        password,
      });
      console.log(response);
      alert("You are Registered");
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
              fieldName={"First Name"}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              inputType={"text"}
            />
            <FieldLi
              fieldName={"Last Name"}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              inputType={"text"}
            />
            <FieldLi
              fieldName={"UserName"}
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              inputType={"text"}
            />
            <FieldLi
              fieldName={"Email Id"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              inputType={"email"}
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
            Sign Up
          </button>
        </form>
        <Link to={"/signin"} className="text-[0.7rem] m-[0.4rem]">
          Oops! I have a Account
        </Link>
      </div>
    </div>
  );
};

export default SignUpContainer;
