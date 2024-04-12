import { TextField, Typography } from "@mui/material";
import { FormStyle } from "./FormStyles";
import PickDate from "../PickDate";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";

const Qualification: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");

  const [endDate, setEndDate] = useState<string>("");

  const [details, setDetails] = useState({
    school: "",
    degree: "",
    startDate: startDate,
    endDate: endDate,
  });

  const [collapse, setCollapse] = useState(true);

  return (
    <>
      {collapse ? (
        <div className="px-3 py-5 mt-3 border rounded-md shadow-lg border-slate-50">
          <div className="relative flex justify-start text-[#3e89de]">
            <div className="flex px-3 pb-5">
              {details.school || details.degree ? (
                <>
                  <Typography className="pt-2 text-lg font-medium">
                    {details.degree}
                  </Typography>
                  <Typography className="pt-2 mx-1 text-lg font-medium">
                    {details.school
                      ? details.degree
                        ? `at ${details.school}`
                        : `${details.school}`
                      : ""}
                  </Typography>
                </>
              ) : (
                <Typography className="pt-2 font-medium text-md">
                  ( Not Specified )
                </Typography>
              )}
            </div>
            <button className="right-0 absolute cursor-pointer bg-slate-100 -top-[0.4rem] rounded-lg p-2">
              <DoneIcon
                onClick={() => setCollapse(false)}
                className="text-[1.4rem] text-black"
              />
            </button>
          </div>
          <div className="flex justify-center mb-2">
            <TextField
              variant="outlined"
              placeholder="School"
              label="School"
              sx={FormStyle}
              fullWidth
              className="mr-3"
              InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
              onChange={(e) =>
                setDetails({ ...details, school: e.target.value })
              }
              value={details.school}
            />
            <TextField
              variant="outlined"
              placeholder="Degree"
              label="Degree"
              sx={FormStyle}
              fullWidth
              InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
              onChange={(e) =>
                setDetails({ ...details, degree: e.target.value })
              }
              value={details.degree}
            />
          </div>
          <div className="flex py-2 mb-2">
            <PickDate
              setDate={setStartDate}
              label="Start Date"
              classes="mr-3 w-3/5"
            />
            <PickDate
              setDate={setEndDate}
              label="End Date"
              classes=" mr-3 w-3/5"
            />
            <TextField
              variant="outlined"
              placeholder="Location"
              label="Location"
              sx={FormStyle}
              fullWidth
              className="w-1/5 mt-2"
              InputLabelProps={{ style: { color: "black", fontSize: "16px" } }}
            />
          </div>
        </div>
      ) : (
        <div className="relative flex w-full px-5 py-3 mt-3 border rounded-lg hover:shadow-md border-slate-100 hover:bg-gradient-to-r from-slate-50">
          <div className="flex text-[#3e89de]">
            {details.school || details.degree ? (
              <>
                <Typography className="pt-2 text-xl font-semibold">
                  {details.degree}
                </Typography>
                <Typography className="pt-2 mx-1 text-xl font-semibold">
                  {details.school ? `at ${details.school}` : ""}
                </Typography>
              </>
            ) : (
              <Typography className="pt-2 text-lg">(Not Specified)</Typography>
            )}
          </div>
          <KeyboardArrowUpIcon
            onClick={() => setCollapse(true)}
            className="absolute text-4xl cursor-pointer right-2 top-2 text-slate-500"
          />
        </div>
      )}
    </>
  );
};

export default Qualification;
