import { createContext } from "react";

const ContextData = createContext({
  modeObject: {
    mode: "dark",
    setName: () => {},
  },
  userObject: {
    name: "Harsh",
    setName: () => {},
    username: "__airborn",
    setUsername: () => {},
  },
});

export default ContextData;
