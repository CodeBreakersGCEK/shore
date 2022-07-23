import { createContext } from "react";

const Context = createContext({
  user: {
    firstName: "",
    setFirstName: () => {},
    lastName: "",
    setLastName: () => {},
    userName: "",
    setUserName: () => {},
    email: "",
    setEmail: () => {},
    id: "",
    setId: () => {},
    imageUrl: "",
    setImageUrl: () => {},
    isLogging: false,
    setIsLogging: () => {},
    token: "",
    setToken: () => {},
  },
  ui: {
    sign: false,
    setSign: () => {},
  },
});

export default Context;
