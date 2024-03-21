import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface PickDateProps {
  label: string;
  classes: string;
}

export default function PickDate({ label, classes }: PickDateProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          sx={{
            ".MuiOutlinedInput-root": {
              borderRadius: 4,
            },
          }}
          label={label}
          className={classes}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
