import { createContext } from "react";

const Context = createContext({
  user: {
    name: "",
    setName: () => {},
    id: "",
    setId: () => {},
    imageUrl: "",
    setImageUrl: () => {},
  },
});

export default Context;
