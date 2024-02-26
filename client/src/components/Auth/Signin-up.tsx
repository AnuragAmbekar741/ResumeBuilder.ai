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
  const googleAuth = () => {
    window.open(`http://localhost:8080/auth/google/`, "_self");
  };
  return (
    <div
      className={`w-full ${
        signUp ? "h-[620px] mt-20" : "h-[555px] mt-24"
      }  p-10  border-[1.75px] rounded-lg bg-white  border-primary`}
    >
      <h1 className="mb-6 text-4xl font-light tracking-wide text-center">
        Build and Conquer !
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
            className="hover:bg-primary/20"
            style={{ color: "primary" }}
          />
          <Typography className="mt-[0.6rem] text-md">Remember me?</Typography>
        </div>
        <Button
          variant="outlined"
          className="py-3 mt-5 text-lg hover:bg-black hover:text-white rounded-2xl"
          color="inherit"
          sx={{ textTransform: "none" }}
        >
          {signUp ? "Create Account" : "Login"}
        </Button>
        <Button
          variant="outlined"
          className="py-3 mt-5 text-lg hover:bg-black hover:text-white rounded-2xl"
          color="inherit"
          sx={{ textTransform: "none" }}
          onClick={googleAuth}
        >
          <FaGoogle className="mr-5 text-xl" />
          Continue with Google
        </Button>
        <Button
          className="py-3 mt-5 text-lg bg-primary rounded-2xl"
          color="inherit"
          sx={{ textTransform: "none" }}
          onClick={() => setSignUp(!signUp)}
        >
          {signUp ? "Login into Account" : "Create an Account"}
        </Button>
      </FormControl>
    </div>
  );
};

export default Signin;
