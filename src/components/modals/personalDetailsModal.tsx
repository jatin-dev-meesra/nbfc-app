"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function PersonalDetailsModal() {
  const searchParams = useSearchParams();
  const testModal = searchParams.get("personal_details_modal");
  const pathname = usePathname();

  return (
    <>
      <Suspense fallback={<p>Loading......</p>}>
        {testModal && (
          <dialog className="fixed left-0 top-0 w-full h-full bg-gray-500 bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
            <div className="mt-[65rem] sm:mt-56 pb-10 bg-transparent">
              <div className="bg-white border-2 px-8 py-6 border-solid rounded-lg">
                <h1 className=" text-xl font-medium">Personal Details</h1>
                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <div className="w-full sm:w-1/3 py-1 lg:py-0">
                    <div className="relative">
                      <input
                        type="text"
                        name="search"
                        id="dob_input"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                        placeholder="Life / Health / PA"
                      />
                      <label
                        htmlFor="dob_input"
                        className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                      >
                        Policy Type
                      </label>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 py-1 lg:py-0">
                    <div className="relative">
                      <input
                        type="text"
                        name="search"
                        id="age"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                        placeholder="Reducing / Level"
                      />
                      <label
                        htmlFor="age"
                        className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                      >
                        Loan Cover
                      </label>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 py-1 lg:py-0">
                    <div className="relative">
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
                    </div>
                  </div>
                </div>
                <div className="py-3">
                  <div>
                    <label htmlFor="" className=" text-sm text-m-black">
                      Loan Tenure*
                    </label>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="w-full sm:w-1/3 py-1 lg:py-0">
                      <div className="">
                        <div className="flex gap-3">
                          <select className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none">
                            <option className="text-sm text-gray-500">
                              Year
                            </option>
                          </select>
                          <select className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none">
                            <option className="text-sm text-gray-500">
                              Month
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/3 py-1 lg:py-0">
                      <div className="relative">
                        <input
                          type="text"
                          name="search"
                          id="age"
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                          placeholder="Enter Your Loan Amount"
                        />
                        <label
                          htmlFor="age"
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
                          name="search"
                          id="age"
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                          placeholder="Enter Your Loan Number"
                        />
                        <label
                          htmlFor="age"
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
                        name="search"
                        id="dob_input"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                        placeholder="Enter Your First Name"
                      />
                      <label
                        htmlFor="dob_input"
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
                        name="search"
                        id="age"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                        placeholder="Enter Your Last Name"
                      />
                      <label
                        htmlFor="age"
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
                            name="search"
                            id="dob_input"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none placeholder:text-xs"
                            placeholder="Enter Your Loan Amount"
                          />
                          <label
                            htmlFor="dob_input"
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
                            name="search"
                            id="age"
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 focus:outline-none placeholder:text-xs"
                            placeholder="XX"
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
                        type="text"
                        name="search"
                        id="dob_input"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                        placeholder="Enter Your Email"
                      />
                      <label
                        htmlFor="dob_input"
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
                        name="search"
                        id="age"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                        placeholder="Enter Your Mobile Number"
                      />
                      <label
                        htmlFor="age"
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
                        name="search"
                        id="age"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                        placeholder="Enter Your Gender"
                      />
                      <label
                        htmlFor="age"
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
                        name="search"
                        id="dob_input"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                        placeholder="Enter Your Pin-Code"
                      />
                      <label
                        htmlFor="dob_input"
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
                        name="search"
                        id="age"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                        placeholder="Enter Your Area"
                      />
                      <label
                        htmlFor="age"
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
                        name="search"
                        id="age"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                        placeholder="Enter Your City"
                      />
                      <label
                        htmlFor="age"
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
                        name=""
                        id=""
                        className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2.5 focus:outline-none placeholder:text-xs"
                      >
                        <option value="">Select Your Product Type</option>
                      </select>
                      <label
                        htmlFor="dob_input"
                        className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                      >
                        Product Type
                      </label>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 py-1 lg:py-0">
                    <div className="relative">
                      <select
                        name=""
                        id=""
                        className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2.5 focus:outline-none placeholder:text-xs"
                      >
                        <option value="">Select Your Insurer</option>
                      </select>
                      <label
                        htmlFor="dob_input"
                        className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                      >
                        Insurer
                      </label>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 py-1 lg:py-0">
                    <div className="relative">
                      <select
                        name=""
                        id=""
                        className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2 .5 focus:outline-none placeholder:text-xs"
                      >
                        <option value="" className="">
                          Select Your Loaction
                        </option>
                      </select>
                      <label
                        htmlFor="dob_input"
                        className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                      >
                        MPH Location*
                      </label>
                    </div>
                  </div>
                </div>
                {true && (
                  <div>
                    <h1 className=" text-xl font-medium">KYC</h1>
                    <div className="pt-3 flex flex-col sm:flex-row gap-3">
                      <div className="w-full sm:w-1/3 py-1 lg:py-0">
                        <div className="relative">
                          <input
                            type="text"
                            name="search"
                            id="dob_input"
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
                            name="search"
                            id="age"
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
                      <div className="flex justify-between items-center pt-4">
                        <h1 className=" text-xl font-medium">
                          Nominee Details
                        </h1>
                        <div>
                          {/* <button
                            className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm"
                            onClick={() => {
                              alert("Under Development :)");
                            }}
                          >
                            Add More
                          </button> */}
                        </div>
                      </div>
                      <div className="py-5 flex flex-col sm:flex-row gap-3">
                        <div className="w-full sm:w-1/3 py-1 lg:py-0">
                          <div className="relative">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                              placeholder="Enter Your First Name"
                            />
                            <label
                              htmlFor="dob_input"
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
                              name="search"
                              id="age"
                              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                              placeholder="Enter Your Last Name"
                            />
                            <label
                              htmlFor="age"
                              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                            >
                              Last Name*
                            </label>
                          </div>
                        </div>
                        <div className="w-full sm:w-1/3 py-1 lg:py-0">
                          <div className="relative">
                            <input
                              type="text"
                              name="search"
                              id="age"
                              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                              placeholder="Enter Your Email"
                            />
                            <label
                              htmlFor="age"
                              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                            >
                              Email*
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="py-5 flex flex-col sm:flex-row gap-3">
                        <div className="w-full sm:w-1/3 py-1 lg:py-0">
                          <div className="relative">
                            <input
                              type="text"
                              name="search"
                              id="dob_input"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                              placeholder="Enter Your Mobile Number"
                            />
                            <label
                              htmlFor="dob_input"
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
                              name="search"
                              id="age"
                              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                              placeholder="Enter % Share of Nomination"
                            />
                            <label
                              htmlFor="age"
                              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                            >
                              Percentage
                            </label>
                          </div>
                        </div>
                        <div className="w-full sm:w-1/3 py-1 lg:py-0">
                          <div className="relative">
                            <select
                              name=""
                              id=""
                              className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2 focus:outline-none placeholder:text-xs"
                            >
                              <option value="">Select Your Relationship</option>
                            </select>
                            <label
                              htmlFor="age"
                              className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                            >
                              Relationship
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                )}
                {true && (
                  <div className="py-1 flex justify-center gap-3">
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
                    {/* <Link href="?otp_verification_modal=true">
                      <button
                        className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm min-w-32"
                        onClick={() => {
                          // handleClaculate();
                        }}
                      >
                        Confirm
                      </button>
                    </Link> */}
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
          </dialog>
        )}
      </Suspense>
    </>
  );
}

export default PersonalDetailsModal;
