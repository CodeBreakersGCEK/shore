import Activites from "./Activites/Activites";
import Suggestions from "./Suggestions/Suggestions";

const NavigationContainer = () => {
  return (
    <div className=" w-1/6 mt-8 mr-4">
      <Activites />
      <Suggestions />
    </div>
  );
};

export default NavigationContainer;
