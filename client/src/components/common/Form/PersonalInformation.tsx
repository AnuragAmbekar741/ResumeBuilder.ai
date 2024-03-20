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
          fullWidth
          className="mr-5"
          InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
        />
        <TextField
          variant="outlined"
          placeholder="Last Name"
          label="Last Name"
          sx={style}
          fullWidth
          InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
        />
      </div>
      <div className="flex mb-2">
        <TextField
          variant="outlined"
          placeholder="Email"
          label="Email"
          sx={style}
          fullWidth
          className="mr-5"
          InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
        />
        <TextField
          variant="outlined"
          placeholder="Phone"
          label="Phone"
          sx={style}
          fullWidth
          InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
        />
      </div>
      <div className="flex mb-2">
        <TextField
          variant="outlined"
          placeholder="Country"
          label="Country"
          sx={style}
          className="mr-5"
          fullWidth
          InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
        />
        <TextField
          variant="outlined"
          placeholder="City"
          label="City"
          sx={style}
          fullWidth
          InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
        />
      </div>
    </>
  );
};

export default Form;
