import React from "react";

const StepperController = ({ handleClick, currentStep, steps }: any) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          className={`border border-m-orange text-center rounded-md text-m-orange px-2 py-1 text-sm w-full disabled:cursor-not-allowed ${
            currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
          } `}
          onClick={() => handleClick()}
        >
          Previous
        </button>
        <button
          className={`bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm w-full ${
            currentStep === steps.length ? "hidden" : ""
          }`}
          onClick={() => handleClick("next")}
        >
          {currentStep === steps.length ? "Confirm" : "Next"}
        </button>
      </div>
    </>
  );
};

export default StepperController;
