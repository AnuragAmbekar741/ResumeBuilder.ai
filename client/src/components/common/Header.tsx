import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleSigninForm } from "../../store/appSlice";

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="absolute top-0 flex justify-between w-full px-10 py-5 shadow-md">
      <div>
        <h1 className="text-2xl font-bold tracking-tight transition delay-100 hover:scale-110">
          Free Resume Download !
        </h1>
      </div>
      <div>
        {/* <h1 className="mt-1 text-xl">
          If you dont about data, continue without login 🙂
        </h1> */}
      </div>
      <div>
        <Button
          variant="outlined"
          className="px-3 py-2 text-sm font-medium transition delay-150 scale-110 border-black rounded-2xl text-slate-900 w-28 hover:bg-black hover:text-white"
          onClick={() => dispatch(toggleSigninForm(true))}
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
};
