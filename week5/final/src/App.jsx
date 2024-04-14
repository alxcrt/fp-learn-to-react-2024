import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";

function App() {
  return (
    // Without Layout
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/:name" element={<Profile />} />
    //   <Route path="*" element={<div>404</div>} />
    // </Routes>

    // With Layout
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":name" element={<Profile />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
