import Activities from "./Activities/Activities";
import Suggestions from "./Suggestions/Suggestions";

const NavigationContainer = () => {
  return (
    <div className="self-start w-[calc(18vw-1rem)] top-[6rem] overflow-auto h-[calc(100vh-6rem)] fixed left-[3rem]">
      <Activities />
      <Suggestions />
    </div>
  );
};

export default NavigationContainer;
