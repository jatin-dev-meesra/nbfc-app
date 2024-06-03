"use client";
import { getToken, genrateQuote } from "@/actions/quotation";
import { calculateAge } from "@/utils/ageCalculator";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const Calculator = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({});
  const [quote, setQuote] = useState<any>({});
  const [claculateBtnDisplay, setClaculateBtnDisplay] = useState(true);
  const [showPremium, setShowPremium] = useState(false);
  // const [premiumAmount, setPremiumAmount] = useState(0);
  // const [premiumAmountGst, setPremiumAmountGst] = useState(
  //   (premiumAmount * 18) / 100
  // );
  // const [totalAmount, setTotalAmount] = useState(
  //   premiumAmount + premiumAmountGst
  // );
  const handleClaculate = async () => {
    const response = await getToken();
    const tokenBody = JSON.parse(response.body);
    if (tokenBody?.authResult) {
      // console.log("::::RES:::", JSON.parse(response.body));
      const res = await genrateQuote(tokenBody?.access_token, formData);
      setQuote(await JSON.parse(res.body));
      // console.log("[[[[[[[[[[[QUOTE RESPONSE]]]]]]]]]", JSON.parse(res.body));
    } else {
      console.log("didn't get token");
    }

    // console.log("quote", quote);
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "dob_input") {
      const age = calculateAge(new Date(value));
      setFormData({ ...formData, ["age"]: age });
    }
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
          {/* <select className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-2.5 focus:outline-none">
            <option className="text-sm text-gray-500">Year</option>
          </select>
          <select className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-2.5 focus:outline-none">
            <option className="text-sm text-gray-500">Month</option>
          </select> */}
          <div className="py-2">
            <div className="relative">
              <input
                type="text"
                name="year"
                id="year"
                onChange={handleChange}
                value={formData["year" || ""]}
                className="block w-full focus:outline-none rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="year"
              />
              <label
                htmlFor="year"
                className="absolute px-1 uppercase text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
              >
                Year*
              </label>
            </div>
          </div>
          <div className="py-2">
            <div className="relative">
              <input
                type="text"
                name="month"
                id="month"
                onChange={handleChange}
                value={formData["month" || ""]}
                className="block w-full focus:outline-none rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="month"
              />
              <label
                htmlFor="month"
                className="absolute px-1 uppercase text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
              >
                Month*
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="relative">
          <input
            type="text"
            name="loan_amount"
            id="loan_amount"
            onChange={handleChange}
            value={formData["loan_amount" || ""]}
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
              name="dob_input"
              id="dob_input"
              onChange={handleChange}
              value={formData["dob_input" || ""]}
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
              name="age"
              id="age"
              value={formData["age" || ""]}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-2.5 focus:outline-none"
              placeholder="xx"
              disabled
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
            {quote?.GrossPremium}
            {/* {premiumAmount} */}
          </span>
        </p>
        <p className="text-m-black p-2 flex justify-between items-center border-b-2 border-dotted border-gray-400">
          <span>GST {`(18%)`}</span>
          <span>
            <i className="bi bi-currency-rupee"></i>
            {Math.round((quote?.GrossPremium * 18) / 100)}
          </span>
        </p>
        <p className="text-m-black font-semibold p-2 flex justify-between items-center">
          <span>Total Amount</span>
          <span>
            <i className="bi bi-currency-rupee"></i>
            {Math.round((quote?.GrossPremium * 118) / 100)}
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
