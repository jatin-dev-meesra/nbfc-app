"use client";
import HistoryDataCard from "@/components/cards/historyCard";
import CasesTable from "@/components/tables/casesTable";
import { useAppContext } from "@/lib/context";
import React, { useEffect, useState } from "react";

const getCases = async (token: any, userid: any) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/cases`, {
      method: "POST",
      body: JSON.stringify({ token, userid }),
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

interface CaseDataInterface {
  total_pen_amount: string;
  total_pen_payments: string;
  total_failed_payments: string;
  records: [
    {
      case_id: string;
      case_cre_datetime: string;
      case_cus_fname: string;
      case_cus_lname: string;
      case_cus_mobile: string;
      case_premium_amt: string;
      case_city: string;
      case_loan_tenure: string;
      case_loan_amt: string;
      case_status: string;
    }
  ];
}

const CasesPage = () => {
  const { state } = useAppContext();
  const token = state.token;
  const userId = state.user_id;
  const [casesData, setCasesData] = useState<CaseDataInterface | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCases(token, userId);
        // console.log("Cases res body", response.body);
        setCasesData(response.body);
      } catch (error) {
        console.error("Error fetching Cases data:", error);
      }
    };
    fetchData();
  }, [token, userId]);

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
            value={casesData ? casesData?.total_pen_amount : "0"}
            name="Pending Amount"
          />
          <HistoryDataCard
            icon="bi-cpu"
            value={casesData ? casesData?.total_pen_payments : "0"}
            name="Pending Payment"
          />
          <HistoryDataCard
            icon="bi-x-circle"
            value={casesData ? casesData?.total_failed_payments : "0"}
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
        <CasesTable records={casesData?.records} />
      </div>
    </div>
  );
};

export default CasesPage;
