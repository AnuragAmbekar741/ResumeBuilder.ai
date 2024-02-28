import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Home from "../components/common/Home";
import { useSelector } from "react-redux";
import { UserState } from "../types/types";

const Router = () => {
  const token = useSelector(
    (store: { user: UserState }) => store.user.user.token
  );
  console.log(token);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={token ? <Home /> : <Navigate to={"/"} />} />
    </Routes>
  );
};

export default Router;
