import { Button } from "@mui/material";
import { MdRocketLaunch } from "react-icons/md";

const LandingPage = () => {
  return (
    <div className="grid justify-center w-full px-10">
      <div className="px-40 my-40 text-center">
        <h1 className="text-[52px] font-extralight tracking-tight">
          Unlock Your Job Potential with Gemini-Powered Intelligence. Craft a
          Resume Employers Can't Ignore in Minutes.
        </h1>
        <Button
          variant="outlined"
          className="w-1/2 py-5 my-10 text-4xl tracking-tight text-black border-2 rounded-3xl border-slate-800 hover:bg-black hover:text-slate-50 group"
        >
          Get Started
          <MdRocketLaunch className="ml-5 group-hover:rotate-45" />
          <h1></h1>
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
