import { TextField, Typography } from "@mui/material";
import { FormStyle } from "./FormStyles";
import PickDate from "../PickDate";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

const WorkExperience: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const [details, setDetails] = useState({
    position: "",
    employer: "",
    start: startDate,
    end: endDate,
    description: "",
  });

  const [collapse, setCollapse] = useState(true);

  useEffect(
    () => setDetails({ ...details, start: startDate, end: endDate }),
    [startDate, endDate]
  );

  const handleClick = () => {
    console.log(details);
  };

  return (
    <>
      {collapse ? (
        <div className="px-3 py-5 mt-3 border rounded-md shadow-lg border-slate-50">
          <div className="relative flex justify-start text-[#2a96fb]">
            <div className="flex px-3 pb-5">
              {details.position || details.employer ? (
                <>
                  <Typography className="pt-2 text-lg font-medium">
                    {details.position}
                  </Typography>
                  <Typography className="pt-2 mx-1 text-lg font-medium">
                    {details.employer
                      ? details.position
                        ? `at ${details.employer}`
                        : `${details.employer}`
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
                onClick={() => {
                  setCollapse(false);
                  handleClick();
                }}
                className="text-[1.4rem] text-black"
              />
            </button>
          </div>
          <div className="flex justify-center mb-2">
            <TextField
              variant="outlined"
              placeholder="Job Title"
              label="Job Title"
              sx={FormStyle}
              fullWidth
              className="mr-3"
              InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
              onChange={(e) =>
                setDetails({ ...details, position: e.target.value })
              }
              value={details.position}
            />
            <TextField
              variant="outlined"
              placeholder="Employer"
              label="Employer"
              sx={FormStyle}
              fullWidth
              InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
              onChange={(e) =>
                setDetails({ ...details, employer: e.target.value })
              }
              value={details.employer}
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
          <div className="flex mb-2">
            <TextField
              variant="outlined"
              placeholder="Description"
              label="Description"
              sx={FormStyle}
              fullWidth
              rows={5}
              InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
            />
          </div>
        </div>
      ) : (
        <div className="relative flex w-full px-5 py-3 mt-3 border rounded-lg hover:shadow-md border-slate-100 hover:bg-gradient-to-r from-slate-50">
          <div className="flex text-[#2a96fb]">
            {details.position || details.employer ? (
              <>
                <Typography className="pt-2 text-xl font-semibold">
                  {details.position}
                </Typography>
                <Typography className="pt-2 mx-1 text-xl font-semibold">
                  {details.employer ? `at ${details.employer}` : ""}
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

export default WorkExperience;
