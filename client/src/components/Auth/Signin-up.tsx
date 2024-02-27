import {
  Button,
  TextField,
  FormControl,
  Typography,
  Checkbox,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { style } from "./Styles";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string | null;
}

const Signin = () => {
  const [signUp, setSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setLoading(true);
      const params = signUp ? "signup" : "login";
      const response = await axios.post(
        `http://localhost:8080/user/${params}`,
        data
      );
      console.log("Response:", response.data);
      if (response.data.token) {
        setLoading(false);
        toast.success(response.data.message);
        navigate("/home");
        localStorage.setItem("token", response.data.token);
      }
      if (!response.data.token) {
        toast.error(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className={`w-full ${
        signUp ? "h-[680px] mt-8" : "h-[595px] mt-24"
      }  p-10  border-[1.75px] rounded-lg bg-white  border-primary`}
    >
      <h1 className="mb-6 text-4xl font-light tracking-wide text-center">
        Build and Conquer !
      </h1>
      <FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="outlined"
            className="w-[320px] my-2"
            InputLabelProps={{ style: { color: "black" } }}
            size="medium"
            sx={style}
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email address",
              },
            })}
            helperText={
              <Typography sx={{ color: "red", fontSize: 12, fontWeight: 200 }}>
                {errors.email?.message}
              </Typography>
            }
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="outlined"
            className="w-[320px] my-2"
            InputLabelProps={{ style: { color: "black" } }}
            size="medium"
            sx={style}
            type="password"
            {...register("password", {
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 16,
                message: "Password should not exceed 16 characters",
              },
            })}
            helperText={
              <Typography sx={{ color: "red", fontSize: 12, fontWeight: 200 }}>
                {errors.password?.message}
              </Typography>
            }
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
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => {
                  if (!signUp) return true;
                  return (
                    value === watch("password") || "Passwords do not match"
                  );
                },
              })}
              helperText={
                <Typography
                  sx={{ color: "red", fontSize: 12, fontWeight: 200 }}
                >
                  {errors.confirmPassword?.message}
                </Typography>
              }
            />
          )}
          <div className="flex justify-end py-2 pr-4">
            <Checkbox
              className="hover:bg-primary/20"
              style={{ color: "primary" }}
            />
            <Typography className="mt-[0.6rem] text-md">
              Remember me?
            </Typography>
          </div>
          <Button
            variant="outlined"
            className="py-3 mt-5 text-lg hover:bg-black hover:text-white rounded-2xl"
            color="inherit"
            sx={{ textTransform: "none" }}
            type="submit"
            fullWidth
            // onClick={handleSubmit}
          >
            {signUp ? "Create Account" : "Login"}
          </Button>
          <Button
            variant="outlined"
            className="py-3 mt-5 text-lg hover:bg-black hover:text-white rounded-2xl"
            color="inherit"
            sx={{ textTransform: "none" }}
            fullWidth
            // onClick={}
          >
            <FaGoogle className="mr-5 text-xl" />
            Continue with Google
          </Button>
          <Button
            className="py-3 mt-5 text-lg bg-primary rounded-2xl hover:text-white"
            color="inherit"
            sx={{ textTransform: "none" }}
            onClick={() => setSignUp(!signUp)}
            fullWidth
          >
            {signUp ? "Login into Account" : "Create an Account"}
          </Button>
        </form>
      </FormControl>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default Signin;
