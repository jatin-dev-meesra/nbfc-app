"use client";
import CovidQuestionnaire from "@/components/generateLeadSteps/covidQuestionnaire";
import Declaration from "@/components/generateLeadSteps/declaration";
import MedicalQuestionnaire from "@/components/generateLeadSteps/medicalQuestionnaire";
import PersonalDetails from "@/components/generateLeadSteps/personalDetails";
import StepperController from "@/components/progress-bar/stepperbar/stepperController";
import StepperBar from "@/components/progress-bar/stepperbar/stepperbar";
import React, { useState } from "react";
import { StepperContext } from "@/context/stepperContext";
import ShowPremiumCalculator from "@/components/calculator/showPremium";
import MassuredBanner from "@/components/massured/massuredBanner";
import CircularProgressBarComponent from "@/components/progress-bar/circular_progress_bar/circularprogress";

const GenerateLeadPage = () => {
  const [fillFormClicked, setFillFormClicked] = useState(false);
  const [calculateClicked, setCalculateClicked] = useState(false);
  const [premiumAmount, setPremiumAmount] = useState(0);

  const [radialPercentage, setRadialPercentage] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<any>("");
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Personal Details",
    "Medical Questionnaire",
    "Covid-19",
    "Declaration",
  ];

  // /////////////////////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////////////////////
  const [personalDetails, setPersonalDetails] = useState({
    policy_type: "Health",
    loan_cover: "",
    loan_type: "",
    loan_year: "",
    loan_month: "",
    loan_amount: "",
    loan_number: "",
    customer_fname: "",
    customer_lname: "",
    customer_dob: "",
    customer_age: "",
    customer_email: "",
    customer_mobile: "",
    customer_gender: "",
    customer_pincode: "",
    customer_area: "",
    customer_city: "",
    product_type: "",
    insurer: "",
    mph_location: "",
    customer_aadhaar: "",
    customer_pan: "",
    nominee: {},
  });
  // /////////////////////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////////////////////

  const displayStep = (step: any) => {
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            calculateClicked={calculateClicked}
            setCalculateClicked={setCalculateClicked}
            setPremiumAmount={setPremiumAmount}
            setFillFormClicked={setFillFormClicked}
            fillFormClicked={fillFormClicked}
            radialPercentage={radialPercentage}
            setRadialPercentage={setRadialPercentage}
            setPersonalDetails={setPersonalDetails}
            personalDetails={personalDetails}
          />
        );
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
      <section className="px-1 pt-4">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full h-fit lg:w-4/6">
            <div className="">
              <StepperBar
                steps={steps}
                currentStep={currentStep}
                radialPercentage={radialPercentage}
                setRadialPercentage={setRadialPercentage}
              />
            </div>
          </div>
          <div className="w-full lg:w-2/6 hidden lg:block">
            <div className="flex justify-center items-center h-full w-full pt-5">
              {/* <button className="bg-white rounded-full border ring-8 ring-m-orange h-14 w-14 opacity-50">
                0%
              </button> */}
              <div className="h-14 w-14">
                <CircularProgressBarComponent percentage={radialPercentage} />
              </div>
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
            <ShowPremiumCalculator
              calculateClicked={calculateClicked}
              setCalculateClicked={setCalculateClicked}
              premiumAmount={premiumAmount}
              setPremiumAmount={setPremiumAmount}
            />
            <div className="mt-3">
              <MassuredBanner />
            </div>
            <div className="mt-5 pb-2">
              {fillFormClicked && (
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
    </>
  );
};

export default GenerateLeadPage;
