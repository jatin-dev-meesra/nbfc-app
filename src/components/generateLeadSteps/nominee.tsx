"use client";
import React, { useState, ChangeEvent } from "react";

interface FamilyMemberInterface {
  firstname: String;
  lastname: String;
  email: String;
  relation: String;
  mobile: String;
  dob?: String;
  age?: String;
  percentage: String;
}

const Nominee = () => {
  const [familyMember, setFamilyMember] = useState<FamilyMemberInterface[]>([
    {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      relation: "self",
      percentage: "",
    },
  ]);

  const addMember = () => {
    setFamilyMember([
      ...familyMember,
      {
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        relation: "self",
        percentage: "",
      },
    ]);
  };

  const removeMember = (index: any) => {
    const newFamilyMember = familyMember.slice();
    newFamilyMember.splice(index, 1);
    setFamilyMember(newFamilyMember);
  };

  const handleInputChange = (
    index: number,
    field: keyof FamilyMemberInterface,
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // console.log(
    //   `Updating family member ${index} field ${field} with value ${event.target.value}`
    // );
    const updatedFamilyMembers = [...familyMember];
    updatedFamilyMembers[index][field] = event.target.value;
    setFamilyMember(updatedFamilyMembers);
  };

  const confirmNomineeDt = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("nomineeData", JSON.stringify(familyMember));
    }
    // console.log("NOMINEES", familyMember);
  };

  return (
    <>
      <div className="flex justify-between items-center pt-4">
        {/* <h1 className=" text-xl font-medium py-8">Nominee Details</h1> */}
        {/* <div>
            <button
              className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm"
              onClick={addMember}
            >
              Add More
            </button>
          </div> */}
      </div>
      {familyMember.map((member, index) => (
        <div key={index}>
          <div className="flex justify-between items-center pt-4">
            <h1 className=" text-xl font-medium py-8">Nominee Details</h1>
            <div className="flex gap-4">
              <button
                className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm"
                onClick={removeMember}
              >
                Remove
              </button>
              {index === 0 ? (
                <button
                  className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm"
                  onClick={addMember}
                >
                  Add More
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="py-5 flex flex-col sm:flex-row gap-3">
            <div className="w-full sm:w-1/3 py-1 lg:py-0">
              <div className="relative">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={(e) => handleInputChange(index, "firstname", e)}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                  placeholder="Enter Your First Name"
                />
                <label
                  htmlFor="firstname"
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
                  name="lastname"
                  id="lastname"
                  onChange={(e) => handleInputChange(index, "lastname", e)}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                  placeholder="Enter Your Last Name"
                />
                <label
                  htmlFor="lastname"
                  className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                >
                  Last Name*
                </label>
              </div>
            </div>
            <div className="w-full sm:w-1/3 py-1 lg:py-0">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => handleInputChange(index, "email", e)}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                  placeholder="Enter Your Email"
                />
                <label
                  htmlFor="email"
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
                  name="mobile"
                  id="mobile"
                  onChange={(e) => handleInputChange(index, "mobile", e)}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                  placeholder="Enter Your Mobile Number"
                />
                <label
                  htmlFor="mobile"
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
                  name="percentage"
                  id="percentage"
                  onChange={(e) => handleInputChange(index, "percentage", e)}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full min-w-32 p-1.5 focus:outline-none placeholder:text-xs"
                  placeholder="Enter % Share of Nomination"
                />
                <label
                  htmlFor="percentage"
                  className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                >
                  Percentage
                </label>
              </div>
            </div>
            <div className="w-full sm:w-1/3 py-1 lg:py-0">
              <div className="relative">
                <select
                  name="relation"
                  id="relation"
                  onChange={(e) => handleInputChange(index, "relation", e)}
                  className="bg-white border border-gray-300 text-gray-900 text-xs rounded-lg block w-full min-w-32 p-2 focus:outline-none placeholder:text-xs"
                >
                  <option value="">Select Your Relationship</option>
                  <option value="self">Self</option>
                  <option value="husband">Husband</option>
                  <option value="wife">Wife</option>
                  <option value="mother">Mother</option>
                  <option value="father">Father</option>
                  <option value="daughter">Daughter</option>
                  <option value="son">Son</option>
                </select>
                <label
                  htmlFor="relation"
                  className="absolute px-1 text-m-black duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white"
                >
                  Relationship
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center pt-4">
        <h1></h1>
        {/* <h1 className=" text-xl font-medium py-8">Consirm Details</h1> */}
        <div>
          <button
            className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm"
            onClick={confirmNomineeDt}
          >
            Confirm Nominee Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Nominee;
