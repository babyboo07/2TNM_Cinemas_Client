import { Helmet } from "react-helmet";
import conf from "../Config";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fragment, useState } from "react";
import { StepButton } from "@mui/material";

const steps = ["Select campaign settings", "Create an ad group", "Create an ad"];

function Booking() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});
  const rows = [];

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  for (let i = 65; i <= 90; i++) {
    rows.push(<p>{String.fromCharCode(i)}</p>);
    console.log(String.fromCharCode(i));
  }
  return (
    <>
      <Helmet>
        <title>Home - {conf.SITE_NAME}</title>
      </Helmet>
      <div className="bg-white">
        <div className="container mx-auto">
          <div className="text-white">Movie Detail</div>
          <div>
            <Box sx={{ width: "100%" }}>
              <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index]}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                      {label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
              <div>
                {allStepsCompleted() ? (
                  <Fragment>
                    <Typography className="text-gray-900" sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button onClick={handleReset}>Reset</Button>
                    </Box>
                  </Fragment>
                ) : (
                  <Fragment>
                    {activeStep == 0 ? (
                      <div>
                        <Typography
                          className="text-gray-900 flex justify-center"
                          sx={{ mt: 2, mb: 1, py: 1 }}
                        >
                          People/Seat
                        </Typography>
                        {rows}
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                          <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                          >
                            Back
                          </Button>
                          <Box sx={{ flex: "1 1 auto" }} />
                          <Button onClick={handleNext} sx={{ mr: 1 }}>
                            Next
                          </Button>
                          {activeStep !== steps.length &&
                            (completed[activeStep] ? (
                              <Typography
                                className="text-gray-900"
                                variant="caption"
                                sx={{ display: "inline-block" }}
                              >
                                Step {activeStep + 1} already completed
                              </Typography>
                            ) : (
                              <Button onClick={handleComplete}>
                                {completedSteps() === totalSteps() - 1 ? "Finish" : "Complete Step"}
                              </Button>
                            ))}
                        </Box>
                      </div>
                    ) : activeStep == 1 ? (
                      <div>
                        <Typography className="text-gray-900" sx={{ mt: 2, mb: 1, py: 1 }}>
                          Step {activeStep + 1}
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                          <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                            Back
                          </Button>
                          <Box sx={{ flex: "1 1 auto" }} />
                          <Button onClick={handleNext} sx={{ mr: 1 }}>
                            Next
                          </Button>
                          {activeStep !== steps.length &&
                            (completed[activeStep] ? (
                              <Typography
                                className="text-gray-900"
                                variant="caption"
                                sx={{ display: "inline-block" }}
                              >
                                Step {activeStep + 1} already completed
                              </Typography>
                            ) : (
                              <Button onClick={handleComplete}>
                                {completedSteps() === totalSteps() - 1 ? "Finish" : "Complete Step"}
                              </Button>
                            ))}
                        </Box>
                      </div>
                    ) : activeStep == 2 ? (
                      <div>
                        <Typography className="text-gray-900" sx={{ mt: 2, mb: 1, py: 1 }}>
                          Step {activeStep + 1}
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                          <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                            Back
                          </Button>
                          <Box sx={{ flex: "1 1 auto" }} />
                          <Button onClick={handleNext} sx={{ mr: 1 }}>
                            Next
                          </Button>
                          {activeStep !== steps.length &&
                            (completed[activeStep] ? (
                              <Typography
                                className="text-gray-900"
                                variant="caption"
                                sx={{ display: "inline-block" }}
                              >
                                Step {activeStep + 1} already completed
                              </Typography>
                            ) : (
                              <Button onClick={handleComplete}>
                                {completedSteps() === totalSteps() - 1 ? "Finish" : "Complete Step"}
                              </Button>
                            ))}
                        </Box>
                      </div>
                    ) : null}
                  </Fragment>
                )}
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
