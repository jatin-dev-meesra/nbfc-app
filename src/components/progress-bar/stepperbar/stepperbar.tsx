"use client";
import React, { useState, useRef, useEffect } from "react";

const StepperBar = ({ steps, currentStep }: any) => {
  interface NewStep {
    description: string;
    completed: Boolean;
    highlighted: Boolean;
    selected: Boolean;
  }
  const [newStep, setNewStep] = useState<NewStep[]>([]);
  const stepRef = useRef();

  const updateStep = (stepNumber: any, steps: any) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          selected: true,
          completed: false,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    console.log("newSteps", newSteps);

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step: string) => {
      return Object.assign(
        {},
        {
          description: step,
          completed: false,
          selected: false,
        }
      );
    });

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displayStep = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex item-center"
        }
      >
        <div className="relative flex flex-col items-center text-gray-400">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-8 w-8 flex justify-center items-center py-1 ${
              step.selected
                ? "bg-m-orange text-white font-bold border border-m-orange"
                : ""
            } ${
              step.completed
                ? "bg-green-600 text-white font-bold border border-green-600"
                : ""
            }`}
          >
            {/* Number Display */}
            {step.completed ? (
              <span className="text-white font-bold text-xs">&#10003;</span>
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          <div
            className={`absolute top-0 text-center mt-10 sm:w-40 text-xs lg:text-sm capitalize ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {/* discription */}
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 border-dotted transition duration-500 ease-in-out  ${
            step.completed ? " border-green-600" : "border-gray-300"
          }`}
        >
          {/* display line */}
        </div>
      </div>
    );
  });

  return (
    <div className="mx-4 px-4 pt-2 flex justify-between items-center">
      {displayStep}
    </div>
  );
};

export default StepperBar;
