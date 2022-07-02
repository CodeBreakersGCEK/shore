import NavigationContainer from "./NavigatIonContainer/NavigationContainer";
import PostContainer from "./PostContainer/PostContainer";

const BodyTimeline = () => {
    return <div className="flex  w-[100vw] justify-center items-center px-10 ">
        <NavigationContainer />
        <PostContainer />
    </div>
};

export default BodyTimeline;
