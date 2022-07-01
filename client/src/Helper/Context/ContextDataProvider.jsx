import { useState } from "react";
import ContextData from "./ContextData";

const ContextDataProvider = (props) => {
  const [mode, setMode] = useState("dark");
  const [name, setName] = useState("Harsh");

  const setModeFn = (data) => {
    setMode(data);
  };

  const setNameFn = (data) => {
    setName(data);
  };

  const Data = {
    modeObject: {
      mode: mode,
      setMode: setModeFn,
    },
    userObject: {
      name: name,
      setName: setNameFn,
    },
  };

  return (
    <ContextData.Provider value={Data}>{props.children}</ContextData.Provider>
  );
};

export default ContextDataProvider;
