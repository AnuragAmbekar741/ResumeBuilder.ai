import { Button } from "@mui/material";
import { MdRocketLaunch } from "react-icons/md";
import { useSelector } from "react-redux";
import { AppState } from "../../types/types";
import Signin from "../Auth/Signin-up";

const Pov: React.FC = () => {
  const isSignInOpen = useSelector(
    (state: { app: AppState }) => state.app.isSigninSignup
  );
  console.log(isSignInOpen);
  return (
    <div className={`flex justify-center w-full px-10`}>
      <div
        className={`${
          isSignInOpen ? "mt-32 pl-12 pr-24 w-2/3" : "my-40 px-40 w-full"
        } text-center delay-100 transition`}
      >
        <h1 className="text-[52px] font-extralight tracking-normal">
          Unlock Your Job Potential with Gemini-Powered Intelligence. Craft a
          Resume Employers Can't Ignore, in Minutes.
        </h1>
        <Button
          variant="outlined"
          className={`${
            isSignInOpen ? "w-[325px]" : "w-1/3"
          } w-1/3 py-5 my-10 text-4xl tracking-wide text-black bg-primary border-none shadow-md rounded-3xl hover:bg-[#FFD800] hover:text-slate-50 group`}
          sx={{ textTransform: "none" }}
        >
          Get Started
          <MdRocketLaunch className="ml-5 group-hover:rotate-45" />
        </Button>
      </div>
      {isSignInOpen && (
        <div className="w-1/3 pr-12">
          <Signin />
        </div>
      )}
    </div>
  );
};

export default Pov;
