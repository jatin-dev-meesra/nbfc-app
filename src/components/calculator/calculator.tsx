"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Calculator = () => {
  const router = useRouter();
  const [claculateBtnDisplay, setClaculateBtnDisplay] = useState(true);
  const [showPremium, setShowPremium] = useState(false);
  const [premiumAmount, setPremiumAmount] = useState(20000);
  const [premiumAmountGst, setPremiumAmountGst] = useState(
    (premiumAmount * 18) / 100
  );
  const [totalAmount, setTotalAmount] = useState(
    premiumAmount + premiumAmountGst
  );
  const handleClaculate = () => {
    setClaculateBtnDisplay(false);
    setShowPremium(true);
  };
  const handleReEvaluate = () => {
    setClaculateBtnDisplay(true);
    setShowPremium(false);
  };

  const handleFillForm = () => {
    router.push("/generatelead");
  };
  return (
    <div className="rounded-lg bg-white border-2 p-8 border-solid w-full">
      <div className=" flex justify-center">
        <h1 className="text-m-black text-2xl font-medium">
          <i className="bi bi-calculator pr-4"></i>Premium Calculator
        </h1>
      </div>
      <div className="py-2">
        <label htmlFor="" className=" text-sm text-gray-500">
          Loan Tenure*
        </label>
        <div className="flex gap-3">
          <select className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-2.5 focus:outline-none">
            <option className="text-sm text-gray-500">Year</option>
          </select>
          <select className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-2.5 focus:outline-none">
            <option className="text-sm text-gray-500">Month</option>
          </select>
        </div>
      </div>
      <div className="py-2">
        <div className="relative">
          <input
            type="text"
            name="search"
            id="loan_amount"
            className="block w-full focus:outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Enter Your Loan Amount"
          />
          <label
            htmlFor="loan_amount"
            className="absolute px-1 uppercase text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
          >
            Loan Amount*
          </label>
        </div>
      </div>
      <div className="py-2 flex gap-3">
        <div className="w-1/2">
          <div className="relative">
            <input
              type="date"
              name="search"
              id="dob_input"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-2.5 focus:outline-none"
              placeholder="Enter Your Loan Amount"
            />
            <label
              htmlFor="dob_input"
              className="absolute px-1 uppercase text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              DOB*
            </label>
          </div>
        </div>
        <div className="w-1/2">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="age"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-2.5 focus:outline-none"
              placeholder="XX"
            />
            <label
              htmlFor="age"
              className="absolute px-1 uppercase text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Age
            </label>
          </div>
        </div>
      </div>
      <div className={`py-1 ${claculateBtnDisplay ? "block" : "hidden"}`}>
        <button
          className="bg-m-orange text-center rounded-md text-white p-2 w-full"
          onClick={() => {
            handleClaculate();
          }}
        >
          Calculate
        </button>
      </div>
      <div className={`py-2 ${showPremium ? "block" : "hidden"}`}>
        <p className="text-m-black p-2 flex justify-between items-center border-b-2 border-gray-100">
          <span>Premium Amount</span>
          <span>
            <i className="bi bi-currency-rupee"></i>
            {premiumAmount}
          </span>
        </p>
        <p className="text-m-black p-2 flex justify-between items-center border-b-2 border-dotted border-gray-400">
          <span>GST {`(18%)`}</span>
          <span>
            <i className="bi bi-currency-rupee"></i>
            {premiumAmountGst}
          </span>
        </p>
        <p className="text-m-black font-semibold p-2 flex justify-between items-center">
          <span>Total Amount</span>
          <span>
            <i className="bi bi-currency-rupee"></i>
            {totalAmount}
          </span>
        </p>
        <div className="pt-2 flex gap-2 justify-center items-center">
          <button
            className="bg-gray-200 text-center rounded-md text-gray-500 p-2 w-full hover:shadow-xl"
            onClick={() => {
              handleReEvaluate();
            }}
          >
            Re-Evaluate
          </button>
          <button
            className="bg-m-orange text-center rounded-md text-white p-2 w-full hover:shadow-xl"
            onClick={() => {
              handleFillForm();
            }}
          >
            Fill Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
