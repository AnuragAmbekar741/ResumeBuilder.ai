import {
  Button,
  TextField,
  FormControl,
  Typography,
  Checkbox,
} from "@mui/material";
import { FaGoogle } from "react-icons/fa";

const style = {
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
    "& fieldset": {
      borderColor: "black",
      borderRadius: 4,
    },
  },
};

const Signin = () => {
  return (
    <div className="w-full p-10 mt-28 border rounded-lg h-[550px] bg-white  border-[#FFD800] ">
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
        <div className="flex justify-end py-2 pr-4">
          <Checkbox
            className="hover:bg-[#FFD800]/20"
            style={{ color: "#FFD800" }}
          />
          <Typography className="mt-[0.6rem] text-md">Remeber me?</Typography>
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
        <Button
          className="py-3 mt-5 text-lg bg-[#FFD800] hover:bg-white rounded-2xl"
          color="inherit"
          sx={{
            textTransform: "none",
            "&:hover": {
              backgroundColor: "white",
              border: "1px solid #FFD800",
            },
            "&:focus": {
              border: "1rem solid #FFD800",
              outline: "none",
            },
          }}
        >
          Create an account
        </Button>
      </FormControl>
    </div>
  );
};

export default Signin;
