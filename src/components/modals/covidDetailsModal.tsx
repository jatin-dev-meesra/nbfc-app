"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function CovidDetailsModal() {
  const searchParams = useSearchParams();
  const testModal = searchParams.get("covid_details_modal");
  const pathname = usePathname();
  const tableHeaders = [
    "Country",
    "City",
    "Data Arrived/Arrival",
    "Date Departed OR intended duration",
  ];

  return (
    <>
      <Suspense fallback={<p>Loading......</p>}>
        {testModal && (
          <dialog className="fixed left-0 top-0 w-full h-full bg-gray-500 bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
            <div className="mt-[65rem] sm:mt-56 pb-10 bg-transparent">
              <div className="w-[60rem] h-[40rem] overflow-auto">
                <div className="bg-white border-2 px-8 py-6 border-solid rounded-lg">
                  <h1 className=" text-xl uppercase font-medium">Covid-19</h1>
                  <div className="py-5">
                    <ul className="list-disc">
                      <li className="">
                        <div className="flex items-start gap-2 flex-col lg:flex-row pb-3">
                          <p className="text-sm">
                            Currently or in the last 3 months have you or your
                            family members been tested positive for Covid
                            19/Have been self isolated with symptoms on medical
                            advice/ Yes No advised to undergo, repeat or
                            awaiting Covid 19 test/ Do you currently or in the
                            past 1 month have symptoms like persistent cough,
                            breathlessness, fever, raised temperature or flu
                            like symptoms / Been in contact with an individual
                            suspected or quarantined or confirmed to have
                            COVID-19 or Sars cov-2/ or does your or immediate
                            family members occupation require you/them to come
                            in close contact with COVID-19 patients or with
                            coronavirus contaminated material?
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
                        </div>
                        <div className="pb-3">
                          <textarea
                            name="search"
                            id="dob_input"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            placeholder="Please provide complete details if above question is answered Yes:"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start gap-2 flex-col lg:flex-row">
                          <p className="text-sm">
                            Have you or your immediate family members travelled
                            overseas in the last 45 days OR plan to travel
                            outside India during the next 6 months? Please
                            provide complete details in the declaration given
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
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-300 border border-gray-300">
                        <tr>
                          {tableHeaders.map((header, index) => (
                            <th
                              key={index}
                              scope="col"
                              className="px-6 py-3 text-center"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className=" text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className=" text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className="text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className="text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className=" text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className=" text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className="text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className="text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className=" text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className=" text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className="text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className="text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className=" text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className=" text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className="text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                          <td className="bg-white border border-gray-300">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className="text-gray-900 text-sm block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {true && (
                    <div className="py-1 pt-3 flex justify-center gap-3">
                      <Link href={pathname}>
                        <button
                          className={`border border-m-orange text-center rounded-md text-m-orange px-2 py-1 text-sm disabled:cursor-not-allowed min-w-32 disabled:opacity-50`}
                          // disabled={!calculateClicked}
                          onClick={() => {
                            // handleFillForm();
                            // alert("under Development :)");
                          }}
                        >
                          Edit
                        </button>
                      </Link>
                      <Link href="?otp_verification_modal=true">
                      <button
                        className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm min-w-32"
                        onClick={() => {
                          // handleClaculate();
                        }}
                      >
                        Confirm
                      </button>
                    </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </dialog>
        )}
      </Suspense>
    </>
  );
}

export default CovidDetailsModal;
