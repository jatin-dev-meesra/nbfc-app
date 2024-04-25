import React from "react";

const Calculator = () => {
  return (
    <div className="rounded-lg bg-white border-2 p-8 border-solid w-full">
      <div className=" flex justify-center">
        <h1 className="text-m-black text-2xl font-medium">
          <i className="bi bi-calculator pr-4"></i>Premium Calculator
        </h1>
      </div>
      <div className="py-2">
        <label htmlFor="">Loan Tenure*</label>
        <div className="flex gap-3">
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-2.5 focus:outline-none">
            <option>Year</option>
          </select>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-2.5 focus:outline-none">
            <option>Month</option>
          </select>
        </div>
      </div>
      <div className="py-2">
        <label htmlFor="">Loan Amount*</label>
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full focus:outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="Enter Your Loan Amount"
        />
      </div>
      <div className="py-2 flex gap-3">
        <div className="w-1/2">
          <label htmlFor="">DOB*</label>
          <input
            type="date"
            name="search"
            id="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-2.5 focus:outline-none"
            placeholder="Enter Your Loan Amount"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="">Age</label>
          <input
            type="text"
            name="search"
            id="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-2.5 focus:outline-none"
            placeholder="XX"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
