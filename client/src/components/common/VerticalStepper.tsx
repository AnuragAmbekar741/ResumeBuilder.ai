import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Form from "./Form";

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

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} className="w-[600px]">
            <StepLabel
              optional={index === 2}
              sx={{
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "red", // circle color (COMPLETED)
                },
              }}
            >
              <Typography className="my-3 text-2xl">{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Box>
                <Form />
              </Box>
              <Box sx={{ mb: 2 }}>
                <div className="flex">
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    className="w-1/2 py-2 font-semibold text-md rounded-xl bg-primary"
                  >
                    {index === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                  {index >= 1 && (
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                      className="w-1/2 py-2 font-semibold text-black text-md rounded-xl hover:bg-primary hover:text-white"
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
