import { createContext } from "react";

const Context = createContext({
  user: {
    name: "",
    setName: () => {},
    id: "",
    setId: () => {},
    imageUrl: "",
    setImageUrl: () => {},
    isLogging: false,
    setIsLogging: () => {},
  },
  ui: {
    sign: false,
    setSign: () => {},
  },
});

export default Context;
