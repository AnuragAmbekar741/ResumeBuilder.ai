import { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { formatDate } from "../../lib/general";
interface PickDateProps {
  label: string;
  classes: string;
  setDate: (val: string) => void;
}

export default function PickDate({
  label,
  classes,
  setDate,
}: // setDetails,
PickDateProps) {
  const [value, setValue] = useState<Dayjs | null>(null);

  useEffect(() => {
    const formattedDate = formatDate(JSON.stringify(value));
    setDate(formattedDate);
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-In">
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
          format="DD-MM-YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
