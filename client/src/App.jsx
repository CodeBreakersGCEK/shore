import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import { Home, NotFound, Profile } from "./pages";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
