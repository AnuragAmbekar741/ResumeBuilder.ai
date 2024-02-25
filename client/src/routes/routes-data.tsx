import { routerType } from "../types/router";
import LandingPage from "../pages/LandingPage";
import Home from "../components/common/Home";

const pagesData: routerType[] = [
  {
    path: "/",
    element: <LandingPage />,
    title: "LandingPage",
  },
  {
    path: "/Home",
    element: <Home />,
    title: "Home",
  },
];

export default pagesData;
