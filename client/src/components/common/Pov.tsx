import { Button } from "@mui/material";
import { MdRocketLaunch } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../../types/appState";

const Pov: React.FC = () => {
  const isSignInOpen = useSelector(
    (store: RootState) => store.app.isSigninSignup
  );
  console.log(isSignInOpen);
  return (
    <div className="flex justify-center w-full px-10">
      <div className="px-40 my-40 text-center">
        <h1 className="text-[52px] font-extralight tracking-tight">
          Unlock Your Job Potential with Gemini-Powered Intelligence. Craft a
          Resume Employers Can't Ignore, in Minutes.
        </h1>
        <Button
          variant="outlined"
          className="w-1/2 py-5 my-10 text-3xl tracking-tight text-white  rounded-3xl bg-gradient-to-r from-[#C2FFD8] to-[#465EFB] border-[1px] border-[#C2FFD8] shadow-md hover:bg-black hover:text-slate-50 group"
        >
          Get Started
          <MdRocketLaunch className="ml-5 group-hover:rotate-45" />
        </Button>
      </div>
    </div>
  );
};

export default Pov;
