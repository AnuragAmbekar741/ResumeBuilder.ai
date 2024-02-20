import { routerType } from "../types/router";
import LandingPage from "../pages/LandingPage";

const pagesData: routerType[] = [
  {
    path: "/",
    element: <LandingPage />,
    title: "LandingPage",
  },
];

export default pagesData;
