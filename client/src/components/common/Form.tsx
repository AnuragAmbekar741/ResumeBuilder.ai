import { TextField } from "@mui/material";
import React from "react";

export const style = {
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
    "&.MuiFormHelperText-root.Mui-error": {
      color: "red",
    },
  },
};

const Form = () => {
  return (
    <>
      <div className="flex mb-2">
        <TextField
          variant="outlined"
          placeholder="First Name"
          label="First Name"
          sx={style}
          className="w-1/2 mr-5"
        />
        <TextField
          variant="outlined"
          placeholder="Last Name"
          label="Last Name"
          sx={style}
          className="w-1/2"
        />
      </div>
      <div className="flex mb-2">
        <TextField
          variant="outlined"
          placeholder="Full Name"
          label="Full Name"
          sx={style}
          className="w-1/2 mr-5"
        />
        <TextField
          variant="outlined"
          placeholder="Email"
          label="Email"
          sx={style}
          className="w-1/2"
        />
      </div>
    </>
  );
};

export default Form;
