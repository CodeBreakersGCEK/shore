import { createRef, useEffect, useRef, useState } from "react";
import Timeline from "./Components/Timeline/Timeline";
import Loader from "./Helper/Components/Loader";

const App = () => {
  const [isLoader, setIsLoader] = useState(true);
  const body = createRef();

  useEffect(() => {
    body.current.style.display = "none";
    setTimeout(() => {
      setIsLoader(false);
    }, 3000);
    if (isLoader == false) {
      body.current.style.display = "block";
    }
  });

  return (
    <div className="bg-[#E5E5E5] min-h-screen">
      <div>
        {isLoader ? <Loader /> : ""}
        <div ref={body}>
          {/* <Profile /> */}
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default App;
