import React from "react";

const MedicalQuestionnaire = () => {
  return (
    <div className="bg-white border-2 px-8 py-6 border-solid rounded-lg">
      <h1 className=" text-xl font-medium">
        Simplified Medical Questionnaire {`(SMQ)`}
      </h1>
      <div className="pt-3 pb-8 flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:w-1/4 py-1 lg:py-0">
          <div className="relative">
            <select
              name=""
              id=""
              className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2 focus:outline-none placeholder:text-xs"
            >
              <option value="">Enter Your Occupation</option>
            </select>
            <label
              htmlFor="dob_input"
              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
            >
              Occupation
            </label>
          </div>
        </div>
        <div className="w-full sm:w-1/4 py-1 lg:py-0">
          <div className="relative">
            <select
              name=""
              id=""
              className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2 focus:outline-none placeholder:text-xs"
            >
              <option value="">Enter Your Nationality</option>
            </select>
            <label
              htmlFor="age"
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
              name="search"
              id="age"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
              placeholder="Enter Your Annual Income"
            />
            <label
              htmlFor="age"
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
                  name="search"
                  id="dob_input"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none placeholder:text-xs"
                  placeholder="In Cms"
                />
                <label
                  htmlFor="dob_input"
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
                  name="search"
                  id="age"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none placeholder:text-xs"
                  placeholder="In Kgs"
                />
                <label
                  htmlFor="age"
                  className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                >
                  Weight
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 pb-2 border-b-2">
        <div className="flex">
          <ul className="text-sm text-m-black list-disc">
            <li>
              Has there been any variation in weight of more than 5 kg in the
              past 6 months (other than weight loss programme)?
            </li>
          </ul>
          <div className="flex gap-1 justify-between">
            <div>
              <button
                className="bg-[#f9fafc] text-center rounded-md text-m-black px-2 py-1 text-sm"
                onClick={() => {
                  alert("Under Development :)");
                }}
              >
                Yes
              </button>
            </div>
            <div>
              <button
                className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm"
                onClick={() => {
                  alert("Under Development :)");
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 pb-2">
        <div className="flex py-2">
          <ul className="text-sm text-m-black list-disc">
            <li>
              Do you have any form of physical deformity, disability, accident
              history, injury, fractures, congenital diseases, external or
              internal body defect which may or may not restrict your day today
              activities?
            </li>
          </ul>
          <div className="flex gap-1 justify-between">
            <div>
              <button
                className="bg-[#f9fafc] text-center rounded-md text-m-black px-2 py-1 text-sm"
                onClick={() => {
                  alert("Under Development :)");
                }}
              >
                Yes
              </button>
            </div>
            <div>
              <button
                className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm"
                onClick={() => {
                  alert("Under Development :)");
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-1 py-2">
          <ul className="text-sm text-m-black list-disc">
            <li>
              High Blood Pressure, cholesterol, Chest pain/discomfort, Heart
              Attack, irregular or fast heart rate or any other disorder of
              heart or blood vessel, Stroke, Epilepsy, Paralysis in any form, or
              any other Cerebrovascular Disease;
            </li>
          </ul>
          <div className="flex gap-1 justify-between">
            <div>
              <button
                className="bg-[#f9fafc] text-center rounded-md text-m-black px-2 py-1 text-sm"
                onClick={() => {
                  alert("Under Development :)");
                }}
              >
                Yes
              </button>
            </div>
            <div>
              <button
                className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm"
                onClick={() => {
                  alert("Under Development :)");
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-1 py-2">
          <ul className="text-sm text-m-black list-disc">
            <li>
              Diabetes, sugar in urine, thyroid disease or any other Endocrinal
              Disease, or Kidney, prostate or genitourinary disease like blood
              or albumin in urine, sexually transmitted or venereal diseases,
              etc.
            </li>
          </ul>
          <div className="flex gap-1 justify-between">
            <div>
              <button
                className="bg-[#f9fafc] text-center rounded-md text-m-black px-2 py-1 text-sm"
                onClick={() => {
                  alert("Under Development :)");
                }}
              >
                Yes
              </button>
            </div>
            <div>
              <button
                className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm"
                onClick={() => {
                  alert("Under Development :)");
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalQuestionnaire;
