import { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [name, setName] = useState("Harsh Keshri");
  const [id, setId] = useState("airbornharsh");
  const [imageUrl, setImageUrl] = useState(
    "https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
  );
  const [sign, setSign] = useState(true);
  const [isLogging, setIsLogging] = useState(false);

  const setNameFn = (data) => {
    setName(data);
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

  const ContextData = {
    user: {
      name: name,
      setName: setNameFn,
      id: id,
      setId: setIdFn,
      imageUrl: imageUrl,
      setImageUrl: setImageUrlFn,
      isLogging: isLogging,
      setIsLogging: setIsLoggingFn,
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
