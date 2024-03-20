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

interface Field {
  label: string;
  placeholder: string;
  width?: string; // New property to specify width
}

interface Section {
  label: string;
  fields: Field[];
}

interface FormProps {
  sections: Section[];
}

const Form: React.FC<FormProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-wrap w-[500px] justify-evenly mb-2"
        >
          {section.fields.map((field, idx) => (
            <TextField
              key={idx}
              variant="outlined"
              placeholder={field.placeholder}
              className={`${field.width ?? "w-1/2"} mb-2`}
              label={field.label}
              sx={style}
              fullWidth
              InputLabelProps={{
                style: {
                  color: "black",
                  fontSize: "14px",
                },
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Form;
