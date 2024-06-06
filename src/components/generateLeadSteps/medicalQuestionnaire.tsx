import React, { ChangeEvent, useContext, useState } from "react";
import { StepperContext } from "@/context/stepperContext";
import { SMQ_Questions } from "@/utils/smqQuestions";

interface Selections {
  [key: number]: "Yes" | "No";
}

const MedicalQuestionnaire = () => {
  const { userData, setUserData }: any = useContext(StepperContext);
  const handleInputsChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const initialSelections: Selections = SMQ_Questions.reduce(
    (acc, _, index) => {
      acc[index] = "No";
      return acc;
    },
    {} as Selections
  );

  const [selections, setSelections] = useState<Selections>(initialSelections);
  // Function to handle button clicks
  const handleSelection = (index: any, answer: any) => {
    setSelections((prevSelections: any) => ({
      ...prevSelections,
      [index]: answer,
    }));
  };

  return (
    <div className="bg-white border-2 px-8 py-6 border-solid rounded-lg">
      <h1 className=" text-xl font-medium">
        Simplified Medical Questionnaire {`(SMQ)`}
      </h1>
      <div className="pt-3 pb-8 flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:w-1/4 py-1 lg:py-0">
          <div className="relative">
            <select
              name="occupation_type"
              id="occupation_type"
              onChange={handleInputsChange}
              value={userData["occupation_type" || ""]}
              className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2 focus:outline-none placeholder:text-xs"
            >
              <option value="">Select Occupation Type</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
            <label
              htmlFor="occupation_type"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Occupation
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/4 py-1 lg:py-0">
          <div className="relative">
            <select
              name="nationality"
              id="nationality"
              onChange={handleInputsChange}
              value={userData["nationality" || ""]}
              className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2 focus:outline-none placeholder:text-xs"
            >
              <option value="">Select Your Nationality</option>
              <option value="indian">India</option>
            </select>
            <label
              htmlFor="nationality"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Nationality
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/4 py-1 lg:py-0">
          <div className="relative">
            <input
              type="text"
              name="annual_income"
              id="annual_income"
              onChange={handleInputsChange}
              value={userData["annual_income" || ""]}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Enter Your Annual Income"
            />
            <label
              htmlFor="annual_income"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Annual Income
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/4 py-1 lg:py-0">
          <div className="flex gap-3">
            <div className="w-1/2">
              <div className="relative">
                <input
                  type="text"
                  name="height"
                  id="height"
                  onChange={handleInputsChange}
                  value={userData["height" || ""]}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none placeholder:text-xs"
                  placeholder="In Cms"
                />
                <label
                  htmlFor="height"
                  className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                >
                  Height
                </label>
              </div>
            </div>
            <div className="w-1/2">
              <div className="relative">
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  onChange={handleInputsChange}
                  value={userData["weight" || ""]}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none placeholder:text-xs"
                  placeholder="In Kgs"
                />
                <label
                  htmlFor="weight"
                  className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                >
                  Weight
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 pb-2">
        {SMQ_Questions.map((question, index) => (
          <div
            key={index}
            className={`flex justify-between gap-1 py-2 ${
              question.main ? "border-b-2 bg-smq-blue p-1" : ""
            } ${question.sub ? "ml-4" : ""}`}
          >
            <ul className="text-sm text-m-black list-disc">
              <li>{question.qes}</li>
            </ul>
            <div className="flex gap-1 justify-between">
              <div>
                <button
                  className={` text-center rounded-md px-2 py-1 text-sm 
                  ${
                    selections[index] === "Yes"
                      ? "bg-m-orange text-white"
                      : "bg-[#f9fafc] text-m-black"
                  }`}
                  onClick={() => handleSelection(index, "Yes")}
                >
                  Yes
                </button>
              </div>
              <div>
                <button
                  className={`text-center rounded-md px-2 py-1 text-sm 
                  ${
                    selections[index] === "No"
                      ? "bg-m-orange text-white"
                      : "bg-[#f9fafc] text-m-black"
                  }`}
                  onClick={() => handleSelection(index, "No")}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalQuestionnaire;
