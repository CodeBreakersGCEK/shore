import { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [firstName, setFirstName] = useState("Harsh");
  const [lastName, setLastName] = useState("Keshri");
  const [userName, setUserName] = useState("harsh12");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [id, setId] = useState("airbornharsh");
  const [imageUrl, setImageUrl] = useState(
    "https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
  );
  const [sign, setSign] = useState(false);
  const [isLogging, setIsLogging] = useState(false);

  const setFirstNameFn = (data) => {
    setFirstName(data);
  };

  const setLastNameFn = (data) => {
    setLastName(data);
  };

  const setUserNameFn = (data) => {
    setUserName(data);
  };

  const setEmailFn = (data) => {
    setEmail(data);
  };

  const setIdFn = (data) => {
    setId(data);
  };

  const setImageUrlFn = (data) => {
    setImageUrl(data);
  };

  const setSignFn = (data) => {
    setSign(data);
  };

  const setIsLoggingFn = (data) => {
    setIsLogging(data);
  };

  const setTokenFn = (data) => {
    setToken(data);
  };

  const ContextData = {
    user: {
      firstName: firstName,
      setFirstName: setFirstNameFn,
      lastName: lastName,
      setLastName: setLastNameFn,
      userName: userName,
      setUserName: setUserNameFn,
      email: email,
      setEmail: setEmailFn,
      id: id,
      setId: setIdFn,
      imageUrl: imageUrl,
      setImageUrl: setImageUrlFn,
      isLogging: isLogging,
      setIsLogging: setIsLoggingFn,
      token: token,
      setToken: setTokenFn,
    },
    ui: {
      sign: sign,
      setSign: setSignFn,
    },
  };

  return (
    <Context.Provider value={ContextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
