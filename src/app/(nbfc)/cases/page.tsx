import HistoryDataCard from "@/components/cards/historyCard";
import CasesTable from "@/components/tables/casesTable";
import React from "react";

const CasesPage = () => {
  const selectInputs = [
    {
      id: "status_type",
      select: "Status",
      options: [
        { option: "All", value: "all" },
        { option: "Success", value: "success" },
        { option: "Pending", value: "pending" },
        { option: "Fail", value: "fail" },
      ],
    },
  ];
  return (
    <div className="mt-5">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
          <HistoryDataCard
            icon="bi-cash-coin"
            value="1,00,000/-"
            name="Pending Amount"
          />
          <HistoryDataCard
            icon="bi-cpu"
            value="29k"
            name="Pending Payment"
          />
          <HistoryDataCard
            icon="bi-x-circle"
            value="29k"
            name="Failed Payment"
          />
        </div>
      </div>
      <div className="my-3">
        <div className="py-5 flex gap-5">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-60 min-w-60 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6 focus:outline-none"
            placeholder="Search here..."
          />
          <button className="w-full min-w-60 mt-auto sm:my-auto border border-m-orange text-m-orange px-5 py-2 text-sm rounded-md flex justify-center items-center">
            Search With Date Range
          </button>
          {selectInputs.map((selectinput, index) => (
            <div key={index} className="w-full">
              <select
                id={selectinput.id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-2.5 focus:outline-none"
              >
                <option>{selectinput.select}</option>
                {selectinput.options.map((option_obj, option_index) => (
                  <option key={option_index} value={option_obj.value}>
                    {option_obj.option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <button className="w-full min-w-60 mt-auto sm:my-auto border border-m-orange bg-m-orange text-white px-5 py-2 text-sm rounded-md flex justify-center items-center">
            Pay All
          </button>
        </div>
        <CasesTable />
      </div>
    </div>
  );
};

export default CasesPage;
