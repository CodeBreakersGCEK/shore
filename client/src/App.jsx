import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Context from "./Context/Context";
import Layout from "./Layout/index";

import { Home, NotFound, Profile, SignUp, SignIn } from "./pages";

const App = () => {
  const UserCtx = useContext(Context).user;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path={`/${UserCtx.userName}`} element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
