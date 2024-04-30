import React from "react";

const StepperController = ({ handleClick, currentStep, steps }: any) => {
  return (
    <div className="flex justify-between items-center">
      <button
        className={`bg-m-orange text-white ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handleClick()}
      >
        Back
      </button>
      <button
        className={`bg-m-orange text-white`}
        onClick={() => handleClick("next")}
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default StepperController;
