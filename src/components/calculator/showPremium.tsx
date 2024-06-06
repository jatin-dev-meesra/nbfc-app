"use client";
import React, { useState } from "react";

const ShowPremiumCalculator = ({
  calculateClicked,
  setCalculateClicked,
  premiumAmount,
  setPremiumAmount,
}: any) => {
  const [showPremium, setShowPremium] = useState(true);
  const handleReEvaluate = () => {
    setCalculateClicked(false);
    setPremiumAmount(0);
  };
  return (
    <div className="rounded-lg bg-white border-2 px-8 py-6 border-solid w-full">
      <div className=" flex justify-center">
        <h1 className="text-m-black text-2xl font-medium">
          <i className="bi bi-calculator pr-4"></i>Premium Calculator
        </h1>
      </div>
      <div className={`py-2 ${showPremium ? "block" : "hidden"}`}>
        <p className="text-m-black p-2 flex justify-between items-center border-b-2 border-gray-100">
          <span>Premium Amount</span>
          <span>
            <i className="bi bi-currency-rupee"></i>
            {Math.round(premiumAmount)}
          </span>
        </p>
        <p className="text-m-black p-2 flex justify-between items-center border-b-2 border-dotted border-gray-400">
          <span>GST {`(18%)`}</span>
          <span>
            <i className="bi bi-currency-rupee"></i>
            {Math.round((premiumAmount * 18) / 100)}
          </span>
        </p>
        <p className="text-m-black font-semibold p-2 flex justify-between items-center">
          <span>Total Amount</span>
          <span>
            <i className="bi bi-currency-rupee"></i>
            {Math.round((premiumAmount * 118) / 100)}
          </span>
        </p>
        {/* {calculateClicked && (
          <div className="pt-2 flex gap-2 justify-center items-center">
            <button
              className="bg-gray-100 text-center rounded-md text-gray-400 p-2 hover:shadow-xl"
              onClick={() => {
                handleReEvaluate();
              }}
            >
              Re-Evaluate
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ShowPremiumCalculator;
