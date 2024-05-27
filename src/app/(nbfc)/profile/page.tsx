"use client";
import React, { useState } from "react";
import Image from "next/image";

import User1 from "@/assets/images/users/user-1.jpg";

const ProfilePage = () => {
  const [basicDetails, setBasicDetails] = useState(true);
  const [bankDetails, setBankDetails] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const handleProfile = (type: string) => {
    switch (type) {
      case "basic_details":
        setBasicDetails(true);
        setBankDetails(false);
        setChangePassword(false);
        return;
      case "bank_details":
        setBasicDetails(false);
        setBankDetails(true);
        setChangePassword(false);
        return;
      case "change_password":
        setBasicDetails(false);
        setBankDetails(false);
        setChangePassword(true);
        return;
    }
  };
  return (
    <div className="pb-5">
      <div className="bg-white p-5 rounded-md my-5 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="w-full flex gap-5 items-center">
          <div className="rounded-full w-20 h-20 flex justify-center items-center">
            <Image src={User1} alt="logo" className="rounded-md" />
          </div>
          <div className="">
            <h2 className="text-lg font-semibold capitalize">
              md Shavez Asnari
            </h2>
            <p className="text-sm">
              Phone No: <span>+919891958212</span>
            </p>
            <p className="text-sm">
              Email: <span>shavez@messra.com</span>
            </p>
            <p className="text-sm">
              Address: <span>Bristol Hotel,Gurugram, HR, 122002</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 text-m-text">
        <div className="w-3/12 p-6 bg-white rounded-md">
          <h1 className=" pb-3 font-medium text-lg">My Profile</h1>
          <ul className="w-full">
            <li className="p-2 hover:bg-gray-100 rounded">
              <button
                className="w-full text-left"
                onClick={() => {
                  handleProfile("basic_details");
                }}
              >
                <i className="bi bi-person-circle pr-3"></i>
                Basic Details
              </button>
            </li>
            <li className="p-2 hover:bg-gray-100 rounded">
              <button
                className="w-full text-left"
                onClick={() => {
                  handleProfile("bank_details");
                }}
              >
                <i className="bi bi-bank pr-3"></i>
                Bank Details
              </button>
            </li>
            <li className="p-2 hover:bg-gray-100 rounded">
              <button
                className="w-full text-left"
                onClick={() => {
                  handleProfile("change_password");
                }}
              >
                <i className="bi bi-safe2 pr-3"></i>
                Change Password
              </button>
            </li>
          </ul>
        </div>
        <div className="w-9/12 p-6 bg-white rounded-md">
          {basicDetails && (
            <div>
              <h1 className="pb-3 font-medium text-lg">Basic Details</h1>
              <div>
                <div className="w-full">
                  <label
                    htmlFor="dob"
                    className=" font-semibold text-sm text-gray-500 pb-2"
                  >
                    Photo
                  </label>
                  <input
                    id="dob"
                    type="file"
                    className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                    placeholder="date of birth"
                  />
                </div>
                <div className="flex gap-6 py-2">
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex gap-6 py-2">
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      Mobile
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      Email
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex gap-6 py-2">
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      Address
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      ZIP
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      City
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex gap-6 py-2">
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      State
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      Country
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      Age
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex gap-6 py-2">
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      DOB
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      Gender
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="py-2">
                  <button className="px-5 py-2 rounded-md bg-m-blue text-white">
                    Update
                  </button>
                </div>
              </div>
            </div>
          )}
          {bankDetails && (
            <div>
              <h1 className="pb-3 font-medium text-lg">Bank Details</h1>
              <div>
                <div className="flex gap-6 py-2">
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      Account Number
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      IFSC Code
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex gap-6 py-2">
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      Account Holder Name
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      Bank Name
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="py-2">
                  <button className="px-5 py-2 rounded-md bg-m-blue text-white">
                    Update
                  </button>
                </div>
              </div>
            </div>
          )}
          {changePassword && (
            <div>
              <h1 className="pb-3 font-medium text-lg">Change Password</h1>
              <div>
                <div className="flex gap-6 py-2">
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      Old Password
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="flex gap-6 py-2">
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      New Password
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="py-2">
                  <div className="w-full">
                    <label
                      htmlFor="dob"
                      className=" font-semibold text-sm text-gray-500 pb-2"
                    >
                      Re-Enter New Password
                    </label>
                    <input
                      id="dob"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full min-w-32 p-2 focus:outline-none"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="py-2">
                  <button className="px-5 py-2 rounded-md bg-m-blue text-white">
                    Update
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
