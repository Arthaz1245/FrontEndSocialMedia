import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Layout from "./components/Layout/Layout";
import Posts from "./components/Posts/Posts";
import Login from "./components/Login/Login";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
