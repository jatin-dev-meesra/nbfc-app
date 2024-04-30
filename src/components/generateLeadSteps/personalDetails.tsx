import React, { useContext } from "react";
import { StepperContext } from "@/context/stepperContext";

const PersonalDetails = () => {
  const { userData, setUserData }: any = useContext(StepperContext);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="bg-white border-2 p-8 border-solid rounded-lg">
      <h1 className=" text-2xl font-medium">Personal Details</h1>
      <div className="pt-3 flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="dob_input"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Life / Health / PA"
            />
            <label
              htmlFor="dob_input"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Policy Type
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="age"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Reducing / Level"
            />
            <label
              htmlFor="age"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Loan Cover
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="age"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Secured Loans"
            />
            <label
              htmlFor="age"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Loan Type
            </label>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div>
          <label htmlFor="" className=" text-sm text-m-black">
            Loan Tenure*
          </label>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="w-full sm:w-1/3 py-1 lg:py-0">
            <div className="">
              <div className="flex gap-3">
                <select className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none">
                  <option className="text-sm text-gray-500">Year</option>
                </select>
                <select className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none">
                  <option className="text-sm text-gray-500">Month</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 py-1 lg:py-0">
            <div className="relative">
              <input
                type="text"
                name="search"
                id="age"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                placeholder="Enter Your Loan Amount"
              />
              <label
                htmlFor="age"
                className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
              >
                Loan Amount*
              </label>
            </div>
          </div>
          <div className="w-full sm:w-1/3 py-1 lg:py-0">
            <div className="relative">
              <input
                type="text"
                name="search"
                id="age"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                placeholder="Enter Your Loan Number"
              />
              <label
                htmlFor="age"
                className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
              >
                Loan Number*
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="dob_input"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Enter Your First Name"
            />
            <label
              htmlFor="dob_input"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              First Name*
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="age"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Enter Your Last Name"
            />
            <label
              htmlFor="age"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Last Name*
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="flex gap-3">
            <div className="w-1/2">
              <div className="relative">
                <input
                  type="date"
                  name="search"
                  id="dob_input"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none placeholder:text-xs"
                  placeholder="Enter Your Loan Amount"
                />
                <label
                  htmlFor="dob_input"
                  className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
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
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none placeholder:text-xs"
                  placeholder="XX"
                />
                <label
                  htmlFor="age"
                  className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                >
                  Age
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="dob_input"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Enter Your Email"
            />
            <label
              htmlFor="dob_input"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Email*
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="age"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Enter Your Mobile Number"
            />
            <label
              htmlFor="age"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Mobile Number*
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="age"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Enter Your Gender"
            />
            <label
              htmlFor="age"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Gender*
            </label>
          </div>
        </div>
      </div>
      <div className="py-3 flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="dob_input"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Enter Your Pin-Code"
            />
            <label
              htmlFor="dob_input"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Customer Pin Code
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="age"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Enter Your Area"
            />
            <label
              htmlFor="age"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Area
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="age"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Enter Your City"
            />
            <label
              htmlFor="age"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              City
            </label>
          </div>
        </div>
      </div>
      <div className="py-3 flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <select
              name=""
              id=""
              className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2.5 focus:outline-none placeholder:text-xs"
            >
              <option value="">Select Your Product Type</option>
            </select>
            <label
              htmlFor="dob_input"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Product Type
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <select
              name=""
              id=""
              className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2.5 focus:outline-none placeholder:text-xs"
            >
              <option value="">Select Your Insurer</option>
            </select>
            <label
              htmlFor="dob_input"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Insurer
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/3 py-1 lg:py-0">
          <div className="relative">
            <select
              name=""
              id=""
              className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2 .5 focus:outline-none placeholder:text-xs"
            >
              <option value="" className="">
                Select Your Loaction
              </option>
            </select>
            <label
              htmlFor="dob_input"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              MPH Location*
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
