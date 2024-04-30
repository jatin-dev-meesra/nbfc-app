"use client";
import CovidQuestionnaire from "@/components/generateLeadSteps/covidQuestionnaire";
import Declaration from "@/components/generateLeadSteps/declaration";
import MedicalQuestionnaire from "@/components/generateLeadSteps/medicalQuestionnaire";
import PersonalDetails from "@/components/generateLeadSteps/personalDetails";
import StepperController from "@/components/progress-bar/stepperbar/stepperController";
import StepperBar from "@/components/progress-bar/stepperbar/stepperbar";
import React, { useState } from "react";
import { StepperContext } from "@/context/stepperContext";
import Calculator from "@/components/calculator/calculator";
import ShowPremiumCalculator from "@/components/calculator/showPremium";

const GenerateLeadPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Personal Details",
    "Medical Questionnaire",
    "Covid-19",
    "Declaration",
  ];

  const displayStep = (step: any) => {
    switch (step) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <MedicalQuestionnaire />;
      case 3:
        return <CovidQuestionnaire />;
      case 4:
        return <Declaration />;
      default:
        return <PersonalDetails />;
    }
  };

  const handleStepsFlow = (direction: any) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <>
      <section className="px-1">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full h-fit lg:w-4/6">
            <div className="">
              <StepperBar steps={steps} currentStep={currentStep} />
            </div>
          </div>
          <div className="w-full lg:w-2/6 hidden lg:block">
            <div className="flex justify-center items-center h-full w-full pt-5">
              <button className="bg-white rounded-full border ring-8 ring-m-orange h-14 w-14 opacity-50">
                0%
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 mt-5 lg:mt-0">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full h-fit lg:w-4/6">
            <div className="">
              <div>
                <StepperContext.Provider
                  value={{ userData, setUserData, finalData, setFinalData }}
                >
                  {displayStep(currentStep)}
                </StepperContext.Provider>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/6">
            {/* <Calculator /> */}
            <ShowPremiumCalculator />
            <div className="mt-5 py-5">
              {currentStep !== steps.length && (
                <StepperController
                  handleClick={handleStepsFlow}
                  currentStep={currentStep}
                  steps={steps}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <CircularProgressBar
        selectedValue={75}
        maxValue={100}
        radius={100}
        activeStrokeColor="#0f4fff"
        withGradient
      /> */}

      {/* <div className="my-4">
        <StepperBar steps={steps} currentStep={currentStep} />
      </div> */}
      {/*  */}
      {/* <div>
        <StepperContext.Provider
          value={{ userData, setUserData, finalData, setFinalData }}
        >
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div> */}
      {/*  */}
    </>
  );
};

export default GenerateLeadPage;
