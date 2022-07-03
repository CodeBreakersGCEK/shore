import { Routes, Route } from "react-router-dom";
import ContextProvider from "./Context/ContextProvider";
import Layout from "./Layout/index";

import { Home, NotFound, Profile } from "./pages";

const App = () => {
  return (
    <Layout>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </Layout>
  );
};

export default App;
