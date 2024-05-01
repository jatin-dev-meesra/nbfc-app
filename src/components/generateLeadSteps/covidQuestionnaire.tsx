import React from "react";

const CovidQuestionnaire = () => {
  return (
    <div className="bg-white border-2 px-8 py-6 border-solid rounded-lg">
      <h1 className=" text-xl uppercase font-medium">Covid-19</h1>
      <div className="py-5">
        <ul className="list-disc list-inside">
          <li className="flex items-start gap-2 flex-col lg:flex-row">
            <p className="text-sm">
              Currently or in the last 3 months have you or your family members
              been tested positive for Covid 19/Have been self isolated with
              symptoms on medical advice/ Yes No advised to undergo, repeat or
              awaiting Covid 19 test/ Do you currently or in the past 1 month
              have symptoms like persistent cough, breathlessness, fever, raised
              temperature or flu like symptoms / Been in contact with an
              individual suspected or quarantined or confirmed to have COVID-19
              or Sars cov-2/ or does your or immediate family members occupation
              require you/them to come in close contact with COVID-19 patients
              or with coronavirus contaminated material?
            </p>
            <div className="py-1 flex gap-3">
              <button
                className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm"
                onClick={() => {}}
              >
                Yes
              </button>
              <button
                className={`border border-m-orange text-center rounded-md text-m-orange px-2 py-1 text-sm`}
                onClick={() => {
                  alert("under Development :)");
                }}
              >
                No
              </button>
            </div>
          </li>
          <li className="flex items-start gap-2 flex-col lg:flex-row">
            <p className="text-sm">
              Have you or your immediate family members travelled overseas in
              the last 45 days OR plan to travel outside India during the next 6
              months? Please provide complete details in the declaration given
              below, if above question is answered Yes:
            </p>
            <div className="py-1 flex gap-3">
              <button
                className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm"
                onClick={() => {}}
              >
                Yes
              </button>
              <button
                className={`border border-m-orange text-center rounded-md text-m-orange px-2 py-1 text-sm`}
                onClick={() => {
                  alert("under Development :)");
                }}
              >
                No
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CovidQuestionnaire;
