"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function TestModal() {
  const searchParams = useSearchParams();
  const testModal = searchParams.get("test_modal");
  const pathname = usePathname();

  return (
    <>
      <Suspense fallback={<p>Loading......</p>}>
        {testModal && (
          <dialog className="fixed left-0 top-0 w-full h-full bg-gray-500 bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
            <div className="bg-white m-2 mt-96 sm:mt-56 mb-10 w-[22rem] sm:w-[30rem] p-5 rounded-md">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold">Add Advisor</h1>
                <Link href={pathname}>
                  <button>
                    <i className="bi bi-x-lg"></i>
                  </button>
                </Link>
              </div>
              <div className="py-3 flex flex-col text-gray-500">
                <label htmlFor="photo">Photo</label>
                <input
                  id="photo"
                  type="file"
                  name="profilephoto"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                />
              </div>
              <div className="py-3 flex gap-5 justify-between text-gray-500">
                <div className="w-full">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="py-3 flex gap-5 justify-between text-gray-500">
                <div className="w-full">
                  <label htmlFor="">Mobile</label>
                  <input
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="py-3 flex gap-5 justify-between text-gray-500">
                <div className="w-full">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="Address"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="">Pincode</label>
                  <input
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="Area Pincode"
                  />
                </div>
              </div>
              <div className="py-3 flex flex-col sm:flex-row gap-5 justify-between text-gray-500">
                <div className="w-full">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="City"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="">State</label>
                  <input
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="State"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="Country"
                  />
                </div>
              </div>
              <div className="py-3 flex flex-col sm:flex-row gap-5 justify-between text-gray-500">
                <div className="w-full">
                  <label htmlFor="">DOB</label>
                  <input
                    type="date"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="dob"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="">Age</label>
                  <input
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="Age"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="">Gender</label>
                  <input
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="Gender"
                  />
                </div>
              </div>
              <div className="py-3 flex gap-5 justify-between text-gray-500">
                <div className="w-full">
                  <label htmlFor="">Commission</label>
                  <input
                    type="text"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="Address"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="">Cancelled Cheque</label>
                  <input
                    type="file"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="Area Pincode"
                  />
                </div>
              </div>
              <div className="py-3 flex gap-5 justify-between text-gray-500">
                <div className="w-full">
                  <label htmlFor="">PAN</label>
                  <input
                    type="file"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="pan"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="">Aadhar</label>
                  <input
                    type="file"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2"
                    placeholder="aadhar"
                  />
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <Link href={pathname}>
                  <button
                    type="button"
                    className=" bg-m-orange rounded-md text-white p-1 px-3"
                  >
                    Close
                  </button>
                </Link>
                <button
                  type="button"
                  className=" bg-m-blue rounded-md text-white p-1 px-3"
                >
                  Add
                </button>
              </div>
            </div>
          </dialog>
        )}
      </Suspense>
    </>
  );
}

export default TestModal;
