import ActiveFriends from "./ActiveFriends/ActiveFriends";
import NavigationContainer from "./NavigatIonContainer/NavigationContainer";
import PostContainer from "./PostContainer/PostContainer";

const BodyTimeline = () => {
    return <div className="flex flex-row w-screen justify-between items-center px-10 h-[calc(100vh-2.5rem)]">
        <NavigationContainer />
        <PostContainer />
        <ActiveFriends/>
    </div>
};

export default BodyTimeline;
