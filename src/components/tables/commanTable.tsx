import Link from "next/link";
import React from "react";
import Pagination from "../pagination/pagination";

const CommanTable = () => {
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
  const tableHeaders = [
    "Transaction Id",
    "No. of Policy",
    "Status",
    "Date",
    "Amount",
    "Action",
  ];
  const tableDatas = [
    {
      trxid: "M2024AX123",
      poilcies: "+919487345608",
      status: "success",
      date: "2024-03-31 11:36:34",
      amount: "12000",
    },
    {
      trxid: "M2024AX123",
      poilcies: "+919487345608",
      status: "success",
      date: "2024-03-31 11:36:34",
      amount: "12000",
    },
    {
      trxid: "M2024AX123",
      poilcies: "+919487345608",
      status: "success",
      date: "2024-03-31 11:36:34",
      amount: "12000",
    },
    {
      trxid: "M2024AX123",
      poilcies: "+919487345608",
      status: "success",
      date: "2024-03-31 11:36:34",
      amount: "12000",
    },
    {
      trxid: "M2024AX123",
      poilcies: "+919487345608",
      status: "success",
      date: "2024-03-31 11:36:34",
      amount: "12000",
    },
    {
      trxid: "M2024AX123",
      poilcies: "+919487345608",
      status: "success",
      date: "2024-03-31 11:36:34",
      amount: "12000",
    },
    {
      trxid: "M2024AX123",
      poilcies: "+919487345608",
      status: "success",
      date: "2024-03-31 11:36:34",
      amount: "12000",
    },
    {
      trxid: "M2024AX123",
      poilcies: "+919487345608",
      status: "success",
      date: "2024-03-31 11:36:34",
      amount: "12000",
    },
    {
      trxid: "M2024AX123",
      poilcies: "+919487345608",
      status: "success",
      date: "2024-03-31 11:36:34",
      amount: "45050",
    },
  ];

  return (
    <>
      <div className="relative overflow-x-auto shadow-md">
        <div className="py-5 flex gap-5">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-60 min-w-60 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6 focus:outline-none"
            placeholder="Search here..."
          />
          <button className="w-full min-w-60 mt-auto sm:my-auto border border-m-orange text-m-orange px-5 py-2 text-sm rounded-sm flex justify-center items-center">
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
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-main-background">
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} scope="col" className="px-6 py-3 text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableDatas.map((data, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-main-background border-y-2 border-y-gray-300"
              >
                <td className="px-6 py-4 text-center">{data.trxid}</td>
                <td className="px-6 py-4 text-center">{data.poilcies}</td>
                <td className="px-6 py-4 text-center">{data.status}</td>
                <td className="px-6 py-4 text-center">{data.date}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center items-center">
                    <i className="bi bi-currency-rupee"></i>
                    {data.amount}/-
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <Link
                    href="/partner/advisor/adv_details"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <i className="bi bi-eye-fill"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </>
  );
};

export default CommanTable;
