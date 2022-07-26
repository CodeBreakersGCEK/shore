import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import FieldLi from "./FieldLi";
import { FcGoogle } from "react-icons/fc";
import { SiMicrosoft } from "react-icons/si";
import { HiArrowNarrowRight } from "react-icons/hi";

const SignInContainer = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const UserCtx = useContext(Context).user;

  useEffect(() => {
    UserCtx.setIsLogging(true);
  }, []);

  const Navigate = useNavigate();

  const validateForm = () => {
    return userName && password;
  };

  const setData = (response) => {
    window.sessionStorage.setItem("token_social", response.data.token);
    window.sessionStorage.setItem(
      "firstName_social",
      response.data.user.firstName
    );
    window.sessionStorage.setItem(
      "lastName_social",
      response.data.user.lastName
    );
    window.sessionStorage.setItem("id_social", response.data.user._id);
    window.sessionStorage.setItem("email_social", response.data.user.email);
    window.sessionStorage.setItem(
      "userName_social",
      response.data.user.userName
    );
    window.sessionStorage.setItem("login_social", true);

    UserCtx.setToken(response.data.token);
    UserCtx.setFirstName(response.data.user.firstName);
    UserCtx.setLastName(response.data.user.lastName);
    UserCtx.setId(response.data.user._id);
    UserCtx.setUserName(response.data.user.userName);
    UserCtx.setEmail(response.data.user.email);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        {
          userName,
          password,
        }
      );

      console.log(response);
      setData(response);
      alert("You are Logged In");
      Navigate("/");
    } catch (e) {
      console.log(e);
      console.log("error");
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="grow bg-foreground min-w-[25rem] w-[20vw] max-w-[35rem] mx-[1.5rem] py-[3rem] rounded-[0.3rem] flex justify-center items-center flex-col max500:min-w-[5rem] shadow-2xl">
        <div className="flex justify-between w-[20vw] px-[3rem] mb-6">
          <span className="flex items-center justify-center p-2 px-3 font-semibold bg-white rounded shadow-lg w-[45%] cursor-pointer">
            <FcGoogle className="mr-3" size={"1.3rem"} />
            <h3 className="text-[1.05rem]">Google</h3>
          </span>
          <span className="flex items-center justify-center p-2 px-3 font-semibold bg-white rounded shadow-lg w-[45%] cursor-pointer">
            <SiMicrosoft className="mr-3" size={"1.3rem"} />
            <h3 className="text-[1.05rem]">Microsoft</h3>
          </span>
        </div>
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
            className="bg-primary text-white mt-[0.5rem] px-[0.8rem] py-[0.3rem] rounded-[0.4rem] max500:text-[0.8rem] max500:px-[0.6rem] max500:py-[0.2rem] flex justify-center items-center shadow-primary shadow-lg mb-3"
            disabled={!validateForm()}
          >
            <HiArrowNarrowRight size={"1.7rem"} color={"#E5E7EB"} />
          </button>
        </form>
        <p className="text-[0.7rem]">
          You Don't Have an account
          <Link to={"/signup"} className="m-[0.4rem] text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInContainer;
