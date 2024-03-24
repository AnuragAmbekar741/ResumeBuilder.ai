import * as React from "react";
import Box from "@mui/material/Box";
import ResumeProgressBar from "./ResumeProgressBar";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PersonalInformation from "./Form/PersonalInformation";
import WorkExperience from "./Form/WorkExperience";
import Qualification from "./Form/Qualification";
import Skills from "./Form/Skills";
import FormRenderer from "./Form/FormRenderer";
interface Step {
  label: string;
  form: React.FC; // Define form as a React component
}

const steps = [
  {
    label: "Personal Data",
    form: PersonalInformation,
    formLable: "",
  },
  {
    label: "Qualifications",
    form: Qualification,
    formLable: "Add Education History",
  },
  {
    label: "Work experience",
    form: WorkExperience,
    formLable: "Add Employement History",
  },
  {
    label: "Skills",
    form: Skills,
    formLable: "Add a Skill",
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

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  // const handleStepClick = (step) => {
  //   setActiveStep(step);
  // };

  return (
    <>
      <div className="w-full">
        <Typography className="mb-3 text-2xl">
          Building your Resume !
        </Typography>
        <div className="pr-20">
          <ResumeProgressBar value={activeStep * 25} />
        </div>
      </div>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step
              key={step.label}
              onClick={(e) => {
                e.stopPropagation();
                setActiveStep(index);
              }}
              className="w-[600px]"
              sx={{
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "#19d14a", // circle color (COMPLETED)
                },
                "& .MuiStepLabel-root .Mui-active": {
                  color: "#FFD800", // circle color (ACTIVE)
                },
              }}
            >
              <StepLabel optional={index === 2}>
                <div className="flex w-full group">
                  <Typography className="mx-3 my-3 text-2xl font-semibold cursor-pointer hover:scale-105">
                    {step.label}
                  </Typography>
                  <EditNoteIcon className="hidden mt-3 text-4xl cursor-pointer text-slate-400 group-hover:grid" />
                </div>
              </StepLabel>
              <StepContent>
                <Box>
                  {index === 0 ? (
                    <PersonalInformation />
                  ) : (
                    <>
                      <FormRenderer
                        FormComponent={step.form}
                        label={step.formLable}
                      />
                    </>
                  )}
                  <div className="flex justify-between w-full mt-7">
                    {index >= 1 && (
                      <Button
                        variant="contained"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBack();
                        }}
                        sx={{ mt: 1, mr: 1 }}
                        className={`${
                          index === 0 ? "w-full ml-1" : "w-[265px]"
                        } py-2 font-semibold text-md rounded-xl bg-primary`}
                      >
                        {index === steps.length - 1 ? "Finish" : "Back"}
                      </Button>
                    )}
                    <Button
                      variant="outlined"
                      // disabled={index === 0}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      sx={{ mt: 1, mr: 1 }}
                      className={`${
                        index === 0 ? "w-full" : "w-[265px]"
                      } border-2 border-primary py-2 font-semibold text-black text-md rounded-xl pt-3 hover:bg-primary hover:text-white`}
                    >
                      Next
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {/* {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )} */}
      </Box>
    </>
  );
}
