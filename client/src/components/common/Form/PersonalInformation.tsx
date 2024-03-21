import { TextField } from "@mui/material";
import { FormStyle } from "./FormStyles";
const PersonalInformation: React.FC = () => {
  return (
    <>
      <div className="flex mb-2">
        <TextField
          variant="outlined"
          placeholder="First Name"
          label="First Name"
          sx={FormStyle}
          fullWidth
          className="mr-5"
          InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
        />
        <TextField
          variant="outlined"
          placeholder="Last Name"
          label="Last Name"
          sx={FormStyle}
          fullWidth
          InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
        />
      </div>
      <div className="flex mb-2">
        <TextField
          variant="outlined"
          placeholder="Email"
          label="Email"
          sx={FormStyle}
          fullWidth
          className="mr-5"
          InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
        />
        <TextField
          variant="outlined"
          placeholder="Phone"
          label="Phone"
          sx={FormStyle}
          fullWidth
          InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
        />
      </div>
      <div className="flex mb-2">
        <TextField
          variant="outlined"
          placeholder="Country"
          label="Country"
          sx={FormStyle}
          className="mr-5"
          fullWidth
          InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
        />
        <TextField
          variant="outlined"
          placeholder="City"
          label="City"
          sx={FormStyle}
          fullWidth
          InputLabelProps={{ style: { color: "black", fontSize: "14px" } }}
        />
      </div>
    </>
  );
};

export default PersonalInformation;
