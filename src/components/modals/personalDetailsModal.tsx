"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import Nominee from "../generateLeadSteps/nominee";
import ShowNominee from "../generateLeadSteps/show-nominee";

function PersonalDetailsModal() {
  const searchParams = useSearchParams();
  const testModal = searchParams.get("personal_details_modal");
  const pathname = usePathname();
  let userData: any = null;
  let nomineeData: any = null;
  if (typeof window !== "undefined") {
    userData = localStorage.getItem("userData") || null;
    userData = JSON.parse(userData);
    nomineeData = localStorage.getItem("nomineeData") || null;
    nomineeData = JSON.parse(nomineeData);
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
                          name="product_type"
                          id="product_type"
                          disabled={true}
                          value={userData["product_type" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2.5 focus:outline-none placeholder:text-xs"
                        >
                          {/* <option value="">Select Your Policy Type</option> */}
                          <option
                            value="group_credit_shield"
                            className=" uppercase"
                          >
                            Group Credit Shield
                          </option>
                        </select>
                        <label
                          htmlFor="policy_type"
                          className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                        >
                          Product Type
                        </label>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/3 py-1 lg:py-0">
                      <div className="relative">
                        <select
                          name="loan_cover"
                          id="loan_cover"
                          disabled={true}
                          value={userData["loan_cover" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2.5 focus:outline-none placeholder:text-xs"
                        >
                          {/* <option value="">Reducing / Level</option> */}
                          <option value="reducing">Reducing</option>
                          <option value="level">Level</option>
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
                          disabled={true}
                          value={userData["loan_type" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2.5 focus:outline-none placeholder:text-xs"
                        >
                          {/* <option value="">Select Loan type</option> */}
                          <option value="secured_loan">Secured Loan</option>
                          <option value="unsecured_loan">Unsecured Loan</option>
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
                    <div className="flex flex-col pt-2 sm:flex-row gap-3">
                      <div className="w-full sm:w-1/3 py-1 lg:py-0">
                        <div className="">
                          <div className="flex gap-3">
                            <div className="relative">
                              <input
                                type="text"
                                name="year"
                                id="year"
                                disabled={true}
                                value={userData["year" || ""]}
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none"
                                placeholder="year"
                              />
                              <label
                                htmlFor="year"
                                className="absolute px-1 uppercase text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                              >
                                Year*
                              </label>
                            </div>
                            <div className="relative">
                              <input
                                // type="month"
                                name="month"
                                id="month"
                                disabled={true}
                                value={userData["month" || ""]}
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none"
                                placeholder="month"
                              />
                              <label
                                htmlFor="month"
                                className="absolute px-1 uppercase text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                              >
                                Month*
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/3 py-1 lg:py-0">
                        <div className="relative">
                          <input
                            type="text"
                            name="loan_amount"
                            id="loan_amount"
                            disabled={true}
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
                            disabled={true}
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
                          disabled={true}
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
                          disabled={true}
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
                              disabled={true}
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
                              disabled={true}
                              type="text"
                              name="age"
                              id="age"
                              value={userData["age" || ""]}
                              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none placeholder:text-xs"
                              placeholder="xx"
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
                          type="email"
                          name="customer_email"
                          id="customer_email"
                          disabled={true}
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
                          disabled={true}
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
                        <select
                          name="gender"
                          id="gender"
                          disabled={true}
                          value={userData["gender" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 px-2.5 py-2 focus:outline-none placeholder:text-xs"
                        >
                          {/* <option value="">Reducing / Level</option> */}
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                        </select>
                        <label
                          htmlFor="loan_cover"
                          className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                        >
                          Gender
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
                          disabled={true}
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
                          disabled={true}
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
                          disabled={true}
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
                          name="insurer"
                          id="insurer"
                          disabled={true}
                          value={userData["insurer" || ""]}
                          className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 px-2.5 py-2 focus:outline-none placeholder:text-xs"
                        >
                          {/* <option value="">Select Your Insurer</option> */}
                          <option value="pramerica">Pramerica</option>
                          <option value="balic">Balic</option>
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
                      {/* <div className="relative">
            <select
              name="mph_location"
              id="mph_location"
              onChange={handleInputsChange}
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
          </div> */}
                    </div>
                    <div className="w-full sm:w-1/3 py-1 lg:py-0">
                      {/* <div className="relative">
            <select
              name="product_type"
              id="product_type"
              onChange={handleInputsChange}
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
          </div> */}
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
                        {/* <Nominee /> */}
                        <ShowNominee
                          nomineeData={nomineeData ? nomineeData : []}
                        />
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
