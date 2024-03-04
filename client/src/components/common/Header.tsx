import { Button } from "@mui/material";
import { BiDownload } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSigninForm } from "../../redux/slice/appSlice";
import { UserState } from "../../types/types";
import { noUser } from "../../redux/slice/userSlice";
// import axios from "axios";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((store: { user: UserState }) => store.user.user);

  const TOKEN = user.token ? user.token : localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(noUser());
  };
  // const logout2 = async () => {
  //   try {
  //     await axios.get("http://localhost:8080/auth/logout");
  //     // Once logout is successful, you may want to perform additional actions
  //     console.log("Logout successful");
  //   } catch (error) {
  //     console.error("Error during logout:", error);
  //   }
  // };

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
        {/* <Button
          variant="outlined"
          className="px-3 py-2 text-sm font-medium transition delay-150 scale-110 border-black rounded-xl text-slate-900 w-28 hover:bg-black hover:text-white"
          // onClick={() => (TOKEN ? logout() : dispatch(toggleSigninForm(true)))}
          onClick={logout2}
          sx={{ textTransform: "none" }}
        >
          {TOKEN ? "Logout" : "Login"}
        </Button> */}
        <Button
          variant="outlined"
          className="px-3 py-2 text-sm font-medium transition delay-150 scale-110 border-black rounded-xl text-slate-900 w-28 hover:bg-black hover:text-white"
          onClick={() => (TOKEN ? logout() : dispatch(toggleSigninForm(true)))}
          // onClick={logout2}
          sx={{ textTransform: "none" }}
        >
          {TOKEN ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
