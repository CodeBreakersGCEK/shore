import axios from "axios";
import React, { useContext, useState } from "react";
import ChangeFieldValue from "../components/Profile/ChangeFieldValue";
import Context from "../Context/Context";

const Profile = () => {
  const [firstName, setFirstName] = useState(
    window.sessionStorage.getItem("firstName_social")
  );
  const [lastName, setLastName] = useState(
    window.sessionStorage.getItem("lastName_social")
  );
  const [userName, setUserName] = useState(
    window.sessionStorage.getItem("userName_social")
  );
  const [email, setEmail] = useState(
    window.sessionStorage.getItem("email_social")
  );
  const UserCtx = useContext(Context).user;

  const submitFirstNameChangeHandler = async (event) => {
    event.preventDefault();

    if (!firstName) {
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:4000/api/user/account/${UserCtx.id}`,
        {
          firstName: firstName,
        },
        {
          headers: {
            "auth-token": UserCtx.token,
          },
        }
      );
      console.log(response);
    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  };

  const submitLastNameChangeHandler = async (event) => {
    event.preventDefault();

    if (!lastName) {
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:4000/api/user/account/${UserCtx.id}`,
        {
          lastName: lastName,
        },
        {
          headers: {
            "auth-token": UserCtx.token,
          },
        }
      );
      console.log(response);
    } catch (e) {
      alert(e.message);
    }
  };

  const submitEmailChangeHandler = async (event) => {
    event.preventDefault();

    if (!email) {
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:4000/api/user/account/${UserCtx.id}`,
        {
          email: email,
        },
        {
          headers: {
            "auth-token": UserCtx.token,
          },
        }
      );
      console.log(response);
    } catch (e) {
      alert(e.message);
    }
  };

  const submitUserNameChangeHandler = async (event) => {
    event.preventDefault();

    if (!userName) {
      return;
    }

    console.log(UserCtx.token);

    try {
      const response = await axios.patch(
        `http://localhost:4000/api/user/account/${UserCtx.id}`,
        {
          userName: userName,
        },
        {
          headers: {
            "auth-token": UserCtx.token,
          },
        }
      );
      console.log(response);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="flex items-center justify-around h-[100%] w-screen">
      {/* <ul>
        <li className="flex ">
          {UserCtx.firstName} {UserCtx.lastName}
        </li>
        <li>{UserCtx.userName}</li>
      </ul> */}
      {/*<div className="flex flex-col items-center justify-center">
       <div className="mb-4">
          <FieldLi
            fieldName={"First Name"}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            inputType={"text"}
          />
          <button
            className="p-2 py-1 bg-white rounded-md text-[0.9rem]"
            onClick={submitFirstNameChangeHandler}
          >
            Change First Name
          </button>
        </div>
        <form onSubmit={submitLastNameChangeHandler} className="mb-4">
          <FieldLi
            fieldName={"Last Name"}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            inputType={"text"}
          />
          <button className="p-2 py-1 bg-white rounded-md text-[0.9rem]">
            Change Last Name
          </button>
        </form>
        <form onSubmit={submitUserNameChangeHandler} className="mb-4">
          <FieldLi
            fieldName={"UserName"}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            inputType={"text"}
          />
          <button className="p-2 py-1 bg-white rounded-md text-[0.9rem]">
            Change UserName
          </button>
        </form>
        <form onSubmit={submitEmailChangeHandler} className="mb-4">
          <FieldLi
            fieldName={"Email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            inputType={"text"}
          />
          <button className="p-2 py-1 bg-white rounded-md text-[0.9rem]">
            Change Email
          </button>
        </form>
      </div> */}
      <div className="bg-white px-2 py-4 rounded-md">
        <ChangeFieldValue
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          fieldName="First Name"
          inputType="text"
          onClick={submitFirstNameChangeHandler}
        />
        <ChangeFieldValue
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          fieldName="Last Name"
          inputType="text"
          onClick={submitLastNameChangeHandler}
        />
        <ChangeFieldValue
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          fieldName="Email"
          inputType="email"
          onClick={submitEmailChangeHandler}
        />
        <ChangeFieldValue
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          fieldName="User Name"
          inputType="text"
          onClick={submitUserNameChangeHandler}
        />
      </div>
    </div>
  );
};

export default Profile;
