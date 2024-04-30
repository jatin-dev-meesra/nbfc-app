import React from "react";
import "./stepper.css";

const Stepper = () => {
  const steps = ["step1", "step2", "step3"];
  return (
    <div className="flex justify-between">
      {steps?.map((step, i) => (
        <div key={i} className="step-item">
          <p>{i + 1}</p>
          {step}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
