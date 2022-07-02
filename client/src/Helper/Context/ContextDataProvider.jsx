import { useState } from "react";
import ContextData from "./ContextData";

const ContextDataProvider = (props) => {
  const [mode, setMode] = useState("dark");
  const [name, setName] = useState("Harsh Keshri jbsfjjksjrushuh");
  const [username, setUsername] = useState("__airborn");

  const setModeFn = (data) => {
    setMode(data);
  };

  const setNameFn = (data) => {
    setName(data);
  };

  const setUsernameFn = (data) => {
    setUsername(data);
  };

  const Data = {
    modeObject: {
      mode: mode,
      setMode: setModeFn,
    },
    userObject: {
      name: name,
      setName: setNameFn,
      username: username,
      setUsername: setUsernameFn,
    },
  };

  return (
    <ContextData.Provider value={Data}>{props.children}</ContextData.Provider>
  );
};

export default ContextDataProvider;
