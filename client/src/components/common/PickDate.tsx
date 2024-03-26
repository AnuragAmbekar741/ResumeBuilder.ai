import { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
interface PickDateProps {
  label: string;
  classes: string;
}

export default function PickDate({ label, classes }: PickDateProps) {
  const [value, setValue] = useState<Dayjs | null>(null);

  useEffect(() => {
    console.log(value);
  }, [value, setValue]);

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
          value={value}
          onChange={(newDate) => setValue(newDate)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
