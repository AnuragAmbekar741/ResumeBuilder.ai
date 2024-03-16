import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Home from "../components/common/Home";
import { useSelector } from "react-redux";
import { UserState } from "../types/types";

const Router = () => {
  const user = useSelector((store: { user: UserState }) => store.user.user);

  const TOKEN = user.token ? user.token : localStorage.getItem("token");

  // console.log(TOKEN);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={TOKEN ? <Home /> : <Navigate to={"/"} />} />
      {/* <Route path="/home" element={<Home />} /> */}
    </Routes>
  );
};

export default Router;
