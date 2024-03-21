import { TextField, Typography } from "@mui/material";
import { FormStyle } from "./FormStyles";
import PickDate from "../PickDate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const Qualification: React.FC = () => {
  const [details, setDetails] = useState({
    position: "",
    employer: "",
  });

  const [collapse, setCollapse] = useState(true);

  return (
    <>
      {collapse ? (
        <div className="px-3 py-5 mt-3 border rounded-md shadow-lg border-slate-50">
          <div className="relative flex justify-start text-[#308FE8]">
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
            <KeyboardArrowDownIcon
              onClick={() => setCollapse(false)}
              className="absolute right-0 text-4xl cursor-pointer -top-3 text-slate-800"
            />
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
                setDetails({ ...details, position: e.target.value })
              }
              value={details.position}
            />
            <TextField
              variant="outlined"
              placeholder="Degree"
              label="Degree"
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
            <PickDate label="Start Date" classes="mr-3 w-3/5" />
            <PickDate label="End Date" classes=" mr-3 w-3/5" />
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
          <div className="flex text-[#2a96fb]">
            {details.position || details.employer ? (
              <>
                <Typography className="pt-2 text-xl font-medium">
                  {details.position}
                </Typography>
                <Typography className="pt-2 mx-1 text-xl font-medium">
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

export default Qualification;
