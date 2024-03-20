import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PersonalInformation from "./Form/PersonalInformation";
const steps = [
  {
    label: "Personal Data",
  },
  {
    label: "Skills and Qualifications",
  },
  {
    label: "Work experience",
  },
];

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // const handleStepClick = (step) => {
  //   setActiveStep(step);
  // };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step
            key={step.label}
            onClick={(e) => {
              e.stopPropagation();
              setActiveStep(index);
            }}
            className="w-[600px] hover:scale-110 hover:mx-3"
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: "#3ee743", // circle color (COMPLETED)
              },
              "& .MuiStepLabel-root .Mui-active": {
                color: "#FFD800", // circle color (ACTIVE)
              },
            }}
          >
            <StepLabel optional={index === 2}>
              <Typography className="mx-3 my-3 text-2xl font-semibold hover:scale-105">
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent>
              <Box>
                <PersonalInformation />
                <div className="flex justify-between w-full">
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    sx={{ mt: 1, mr: 1 }}
                    className="w-[265px] py-2 font-semibold text-md rounded-xl bg-primary"
                  >
                    {index === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                  {index >= 1 && (
                    <Button
                      variant="outlined"
                      disabled={index === 0}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBack();
                      }}
                      sx={{ mt: 1, mr: 1 }}
                      className="w-[265px] border-2 border-primary py-2 font-semibold text-black text-md rounded-xl hover:bg-primary hover:text-white"
                    >
                      Back
                    </Button>
                  )}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
