import { Fragment } from "react";
import Profile from "./Components/Profile/Profile";
import Timeline from "./Components/Timeline/Timeline";
import ContextDataProvider from "./Helper/Context/ContextDataProvider";

const App = () => {
  return (
    <div className="bg-cyan-900 min-h-screen">
      {/* <Profile /> */}
      <Timeline/>
    </div>
  );
};

export default App;
