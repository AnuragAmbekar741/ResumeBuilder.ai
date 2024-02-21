import {
  Button,
  TextField,
  FormControl,
  Typography,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

import { style } from "./Styles";

const Signin = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div
      className={`w-full h-[575px] mt-24 p-10  border-[1.25px] rounded-lg bg-white  border-[#FFD800] ${
        signUp ? "scale-105 delay-150 transition " : ""
      }`}
    >
      <h1 className="mb-6 text-4xl font-light tracking-wide text-center">
        Build and Conquer
      </h1>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Email"
          variant="outlined"
          className="w-[320px] my-2"
          InputLabelProps={{ style: { color: "black" } }}
          size="medium"
          sx={style}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="outlined"
          className="w-[320px] my-2"
          InputLabelProps={{ style: { color: "black" } }}
          size="medium"
          sx={style}
        />
        {signUp && (
          <TextField
            id="standard-basic"
            label="Confirm Password"
            variant="outlined"
            className="w-[320px] my-2"
            InputLabelProps={{ style: { color: "black" } }}
            size="medium"
            sx={style}
          />
        )}
        <div className="flex justify-end py-2 pr-4">
          <Checkbox
            className="hover:bg-[#FFD800]/20"
            style={{ color: "#FFD800" }}
          />
          <Typography className="mt-[0.6rem] text-md">Remember me?</Typography>
        </div>
        <Button
          variant="outlined"
          className="py-3 mt-5 text-lg hover:bg-black hover:text-white rounded-2xl"
          color="inherit"
          sx={{ textTransform: "none" }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          className="py-3 mt-5 text-lg hover:bg-black hover:text-white rounded-2xl"
          color="inherit"
          sx={{ textTransform: "none" }}
        >
          <FaGoogle className="mr-5 text-xl" />
          Login with Google
        </Button>
        {!signUp && (
          <Button
            className="py-3 mt-5 text-lg bg-[#FFD800]  rounded-2xl"
            color="inherit"
            sx={{ textTransform: "none" }}
            onClick={() => setSignUp(!signUp)}
          >
            Create an account
          </Button>
        )}
      </FormControl>
    </div>
  );
};

export default Signin;
