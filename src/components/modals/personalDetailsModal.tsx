"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import Nominee from "../generateLeadSteps/nominee";

function PersonalDetailsModal() {
  const searchParams = useSearchParams();
  const testModal = searchParams.get("personal_details_modal");
  const pathname = usePathname();
  let userData: any = null;
  if (typeof window !== "undefined") {
    userData = localStorage.getItem("userData") || null;
    userData = JSON.parse(userData);
  }
  return (
    <>
      <Suspense fallback={<p>Loading......</p>}>
        {testModal && (
          <dialog className="fixed left-0 top-0 w-full h-full bg-gray-500 bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
            <div className="mt-[65rem] sm:mt-56 pb-10 bg-transparent">
              <div className="w-[60rem] h-[40rem] overflow-auto">
                <div className="bg-white border-2 px-8 py-6 border-solid rounded-lg">
                  <h1 className=" text-xl font-medium">Personal Details</h1>
                  <div className=" pt-8 flex flex-col sm:flex-row gap-3">
                    <div className="w-full sm:w-1/3 py-1 lg:py-0">
                      <div className="relative">
                        <select
                          name="policy_type"
                          id="policy_type"
                          value={userData["policy_type" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2.5 focus:outline-none placeholder:text-xs"
                        >
                          <option value="">Select Your Policy Type</option>
                          <option value="Health">Health</option>
                          <option value="Life">Life</option>
                          <option value="Motor">Motor</option>
                        </select>
                        <label
                          htmlFor="policy_type"
                          className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                        >
                          Policy Type
                        </label>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/3 py-1 lg:py-0">
                      <div className="relative">
                        <select
                          name="loan_cover"
                          id="loan_cover"
                          value={userData["loan_cover" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2.5 focus:outline-none placeholder:text-xs"
                        >
                          <option value="">Reducing / Level</option>
                          <option value="Reducing">Reducing</option>
                          <option value="Level">Level</option>
                        </select>
                        <label
                          htmlFor="loan_cover"
                          className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                        >
                          Loan Cover
                        </label>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/3 py-1 lg:py-0">
                      <div className="relative">
                        <select
                          name="loan_type"
                          id="loan_type"
                          value={userData["loan_type" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2.5 focus:outline-none placeholder:text-xs"
                        >
                          <option value="">Select Loan type</option>
                          <option value="term_loan">Term Loan</option>
                          <option value="home_loan">Home Loan</option>
                        </select>
                        <label
                          htmlFor="loan_type"
                          className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                        >
                          Loan Type
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="py-3">
                    <div>
                      <label
                        htmlFor="loan_year"
                        className=" text-sm text-m-black"
                      >
                        Loan Tenure*
                      </label>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="w-full sm:w-1/3 py-1 lg:py-0">
                        <div className="">
                          <div className="flex gap-3">
                            <select
                              name="loan_year"
                              id="loan_year"
                              value={userData["loan_year" || ""]}
                              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none"
                            >
                              <option className="text-sm text-gray-500">
                                Year
                              </option>
                              <option className="text-sm text-gray-500">
                                2024
                              </option>
                            </select>
                            <select
                              name="loan_month"
                              id="loan_month"
                              value={userData["loan_month" || ""]}
                              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none"
                            >
                              <option className="text-sm text-gray-500">
                                Month
                              </option>
                              <option className="text-sm text-gray-500">
                                January
                              </option>
                              <option className="text-sm text-gray-500">
                                February
                              </option>
                              <option className="text-sm text-gray-500">
                                March
                              </option>
                              <option className="text-sm text-gray-500">
                                April
                              </option>
                              <option className="text-sm text-gray-500">
                                May
                              </option>
                              <option className="text-sm text-gray-500">
                                June
                              </option>
                              <option className="text-sm text-gray-500">
                                July
                              </option>
                              <option className="text-sm text-gray-500">
                                August
                              </option>
                              <option className="text-sm text-gray-500">
                                September
                              </option>
                              <option className="text-sm text-gray-500">
                                October
                              </option>
                              <option className="text-sm text-gray-500">
                                November
                              </option>
                              <option className="text-sm text-gray-500">
                                December
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/3 py-1 lg:py-0">
                        <div className="relative">
                          <input
                            type="text"
                            name="loan_amount"
                            id="loan_amount"
                            value={userData["loan_amount" || ""]}
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            placeholder="Enter Your Loan Amount"
                          />
                          <label
                            htmlFor="loan_amount"
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
                            name="loan_number"
                            id="loan_number"
                            value={userData["loan_number" || ""]}
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                            placeholder="Enter Your Loan Number"
                          />
                          <label
                            htmlFor="loan_number"
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
                          name="customer_fname"
                          id="customer_fname"
                          value={userData["customer_fname" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                          placeholder="Enter Your First Name"
                        />
                        <label
                          htmlFor="customer_fname"
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
                          name="customer_lname"
                          id="customer_lname"
                          value={userData["customer_lname" || ""]}
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                          placeholder="Enter Your Last Name"
                        />
                        <label
                          htmlFor="customer_lname"
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
                              name="customer_dob"
                              id="customer_dob"
                              value={userData["customer_dob" || ""]}
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none placeholder:text-xs"
                              placeholder="Enter Your Loan Amount"
                            />
                            <label
                              htmlFor="customer_dob"
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
                              name="customer_age"
                              id="customer_age"
                              value={userData["customer_age" || ""]}
                              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none placeholder:text-xs"
                              placeholder="xx"
                            />
                            <label
                              htmlFor="customer_age"
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
                          type="email"
                          name="customer_email"
                          id="customer_email"
                          value={userData["customer_email" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                          placeholder="Enter Your Email"
                        />
                        <label
                          htmlFor="customer_email"
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
                          name="customer_mobile"
                          id="customer_mobile"
                          value={userData["customer_mobile" || ""]}
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                          placeholder="Enter Your Mobile Number"
                        />
                        <label
                          htmlFor="customer_mobile"
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
                          name="customer_gender"
                          id="customer_gender"
                          value={userData["customer_gender" || ""]}
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                          placeholder="Enter Your Gender"
                        />
                        <label
                          htmlFor="customer_gender"
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
                          name="customer_pincode"
                          id="customer_pincode"
                          value={userData["customer_pincode" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                          placeholder="Enter Your Pin-Code"
                        />
                        <label
                          htmlFor="customer_pincode"
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
                          name="customer_area"
                          id="customer_area"
                          value={userData["customer_area" || ""]}
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                          placeholder="Enter Your Area"
                        />
                        <label
                          htmlFor="customer_area"
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
                          name="customer_city"
                          id="customer_city"
                          value={userData["customer_city" || ""]}
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                          placeholder="Enter Your City"
                        />
                        <label
                          htmlFor="customer_city"
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
                          name="product_type"
                          id="product_type"
                          value={userData["product_type" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2.5 focus:outline-none placeholder:text-xs"
                        >
                          <option value="">Select Your Product Type</option>
                          <option value="Term">Term</option>
                          <option value="Home">Home</option>
                        </select>
                        <label
                          htmlFor="product_type"
                          className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                        >
                          Product Type
                        </label>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/3 py-1 lg:py-0">
                      <div className="relative">
                        <select
                          name="insurer"
                          id="insurer"
                          value={userData["insurer" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2.5 focus:outline-none placeholder:text-xs"
                        >
                          <option value="">Select Your Insurer</option>
                          <option value="Pramerica">Pramerica</option>
                          <option value="Balic">Balic</option>
                        </select>
                        <label
                          htmlFor="insurer"
                          className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                        >
                          Insurer
                        </label>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/3 py-1 lg:py-0">
                      <div className="relative">
                        <select
                          name="mph_location"
                          id="mph_location"
                          value={userData["mph_location" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2 .5 focus:outline-none placeholder:text-xs"
                        >
                          <option value="" className="">
                            Select Your Loaction
                          </option>
                          <option value="Jaipur" className="">
                            Jaipur
                          </option>
                        </select>
                        <label
                          htmlFor="mph_location"
                          className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                        >
                          MPH Location*
                        </label>
                      </div>
                    </div>
                  </div>
                  {true && (
                    <div>
                      <h1 className=" text-xl font-medium py-8">KYC</h1>
                      <div className="pt-3 flex flex-col sm:flex-row gap-3">
                        <div className="w-full sm:w-1/3 py-1 lg:py-0">
                          <div className="relative">
                            <input
                              type="text"
                              name="customer_aadhaar"
                              id="customer_aadhaar"
                              value={userData["customer_aadhaar" || ""]}
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                              placeholder="xxxx-xxxx-xxxx"
                            />
                            <label
                              htmlFor="dob_input"
                              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                            >
                              Aadhaar Card
                            </label>
                          </div>
                        </div>
                        <div className="w-full sm:w-1/3 py-1 lg:py-0">
                          <div className="relative">
                            <input
                              type="text"
                              name="customer_pan"
                              id="customer_pan"
                              value={userData["customer_pan" || ""]}
                              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                              placeholder="PAN Number"
                            />
                            <label
                              htmlFor="age"
                              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                            >
                              PAN Card
                            </label>
                          </div>
                        </div>
                        <div className="w-full sm:w-1/3 py-1 lg:py-0">
                          {/* <div className="relative">
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
              </div> */}
                        </div>
                      </div>
                      {/* Nominee Details */}
                      <>
                        <Nominee nomineeDt={userData.nomineeDetails} />
                      </>
                    </div>
                  )}
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
                      <Link href="?smq_details_modal=true">
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

export default PersonalDetailsModal;
