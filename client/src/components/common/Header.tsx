import { Button } from "@mui/material";
import { BiDownload } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSigninForm } from "../../store/appSlice";
import { UserState } from "../../types/types";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: { user: UserState }) => state.user.user);
  console.log(user);
  const logout = async () => {
    await fetch("http://localhost:8080/auth/logout/");
  };

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
          onClick={() => {
            dispatch(toggleSigninForm(true));
            logout();
          }}
          sx={{ textTransform: "none" }}
        >
          {user.name !== "" ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
