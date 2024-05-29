import Link from "next/link";
import React from "react";
import Pagination from "../pagination/pagination";

interface CasesRecords {
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

function createNew(arr: any) {
  return arr.map((item: any) => {
    return {
      caseDataPoints: {
        application_no: `MSRMTR041724${item.case_id}`,
        date: item.case_cre_datetime,
        customername: item.case_cus_fname + " " + item.case_cus_lname,
        number: item.case_cus_mobile,
        amount: item.case_premium_amt,
        borrowerLocation: item.case_city,
        loanTenure: item.case_loan_tenure,
        loanAmount: item.case_loan_amt,
        status: "pending",
      },
    };
  });
}

const CasesTable = ({ records }: any) => {
  console.log("........records..........", records);

  const tableHeaders = [
    "Application No.",
    "Login Date/Time",
    "Customer Name",
    "Mobile Number",
    "Premium Amount",
    "Borrower Location",
    "Loan Tenure",
    "Loan Amount",
    "Status",
  ];
  // const tableDatas = createNew(records);

  const tableDatas = [
    {
      applicationNumber: "M2024AX123",
      date: "2024-03-31 11:36:34",
      customername: "Ajay Biswas",
      number: "+919487345608",
      amount: "12000",
      borrowerLocation: "Tagore Garden",
      loanTenure: "3",
      loanAmount: "5,00,000",
      status: "Issued",
    },
    {
      applicationNumber: "M2024AX123",
      date: "2024-03-31 11:36:34",
      customername: "Ajay Biswas",
      number: "+919487345608",
      amount: "12000",
      borrowerLocation: "Tagore Garden",
      loanTenure: "3",
      loanAmount: "5,00,000",
      status: "Issued",
    },
    {
      applicationNumber: "M2024AX123",
      date: "2024-03-31 11:36:34",
      customername: "Ajay Biswas",
      number: "+919487345608",
      amount: "12000",
      borrowerLocation: "Tagore Garden",
      loanTenure: "3",
      loanAmount: "5,00,000",
      status: "Issued",
    },
    {
      applicationNumber: "M2024AX123",
      date: "2024-03-31 11:36:34",
      customername: "Ajay Biswas",
      number: "+919487345608",
      amount: "12000",
      borrowerLocation: "Tagore Garden",
      loanTenure: "3",
      loanAmount: "5,00,000",
      status: "Issued",
    },
    {
      applicationNumber: "M2024AX123",
      date: "2024-03-31 11:36:34",
      customername: "Ajay Biswas",
      number: "+919487345608",
      amount: "12000",
      borrowerLocation: "Tagore Garden",
      loanTenure: "3",
      loanAmount: "5,00,000",
      status: "Issued",
    },
    {
      applicationNumber: "M2024AX123",
      date: "2024-03-31 11:36:34",
      customername: "Ajay Biswas",
      number: "+919487345608",
      amount: "12000",
      borrowerLocation: "Tagore Garden",
      loanTenure: "3",
      loanAmount: "5,00,000",
      status: "Issued",
    },
    {
      applicationNumber: "M2024AX123",
      date: "2024-03-31 11:36:34",
      customername: "Ajay Biswas",
      number: "+919487345608",
      amount: "12000",
      borrowerLocation: "Tagore Garden",
      loanTenure: "3",
      loanAmount: "5,00,000",
      status: "Issued",
    },
  ];

  return (
    <>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-main-background">
            <tr>
              <th className="px-6 py-3 text-center">
                <input type="checkbox" name="" id="" />
              </th>
              {tableHeaders.map((header, index) => (
                <th key={index} scope="col" className="px-6 py-3 text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records
              ? records.map((data: any, index: any) => (
                  <tr
                    key={index}
                    className="odd:bg-white even:bg-main-background border-y-2 border-y-gray-300"
                  >
                    <td className="px-6 py-4 text-center">
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      MX0GGN000{data.case_id}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {data.case_cre_datetime}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {data.case_cus_fname + ` ` + data.case_cus_lname}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {data.case_cus_mobile}
                    </td>
                    <td className="px-6 py-4 text-center w-full">
                      ₹{data.case_premium_amt}/-
                    </td>
                    <td className="px-6 py-4 text-center">{data.case_city}</td>
                    <td className="px-6 py-4 text-center">
                      {data.case_loan_tenure}Yrs
                    </td>
                    <td className="px-6 py-4 text-center">
                      ₹{data.case_premium_amt}/-
                    </td>
                    <td className="px-6 py-4 text-center">
                      {data.case_status}
                    </td>
                  </tr>
                ))
              : ""}
            {/* {tableDatas.map((data, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-main-background border-y-2 border-y-gray-300"
              >
                <td className="px-6 py-4 text-center">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-6 py-4 text-center">
                  {data.applicationNumber}
                </td>
                <td className="px-6 py-4 text-center">{data.date}</td>
                <td className="px-6 py-4 text-center">{data.customername}</td>
                <td className="px-6 py-4 text-center">{data.number}</td>
                <td className="px-6 py-4 text-center w-full">
                  ₹{data.amount}/-
                </td>
                <td className="px-6 py-4 text-center">
                  {data.borrowerLocation}
                </td>
                <td className="px-6 py-4 text-center">{data.loanTenure}Yrs</td>
                <td className="px-6 py-4 text-center">₹{data.loanAmount}/-</td>
                <td className="px-6 py-4 text-center">{data.status}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
        <Pagination />
      </div>
    </>
  );
};

export default CasesTable;
