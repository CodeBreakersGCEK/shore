import Activities from "./Activities/Activities";
import Suggestions from "./Suggestions/Suggestions";

const NavigationContainer = () => {
  return (
    <div className="self-start w-[15rem] top-[6rem] overflow-auto h-[calc(100vh-6rem)] fixed left-[3rem] phone:hidden max800:w-[12rem]">
      <Activities />
      <Suggestions />
    </div>
  );
};

export default NavigationContainer;
