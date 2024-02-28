import { Button } from "@mui/material";
import { BiDownload } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { noUser } from "../../redux/slice/userSlice";
import { toggleSigninForm } from "../../redux/slice/appSlice";
import { UserState } from "../../types/types";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector(
    (store: { user: UserState }) => store.user.user.token
  );
  return (
    <div className="absolute top-0 flex justify-between w-full px-10 py-5 shadow-md">
      <div className="flex transition delay-100 hover:scale-110">
        <h1 className="text-2xl font-bold tracking-wide">Free Resume</h1>
        <BiDownload className="mx-1 text-3xl" />
      </div>
      <div>
        {/* <h1 className="mt-1 text-xl">
          If you dont about data, continue without login 🙂
        </h1> */}
      </div>
      <div>
        <Button
          variant="outlined"
          className="px-3 py-2 text-sm font-medium transition delay-150 scale-110 border-black rounded-xl text-slate-900 w-28 hover:bg-black hover:text-white"
          onClick={() =>
            token ? dispatch(noUser()) : dispatch(toggleSigninForm(true))
          }
          sx={{ textTransform: "none" }}
        >
          {token ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
