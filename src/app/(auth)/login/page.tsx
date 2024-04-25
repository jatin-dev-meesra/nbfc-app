"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import LogoLgImg from "@/assets/images/logo-dark.png";

const Login = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState("+91");
  const [otpValue, setOtpValue] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const [otpSent, setOtpSent] = useState(false);
  const [otpAuthentication, setOtpAuthentication] = useState(false);
  const [enterOtp, setEnterOtp] = useState(false);

  const handelLogin = () => {
    if (!otpValue && !otpSent) {
      setOtpSent(true);
      setEnterOtp(true);
      return;
    }
    if (otpSent && !otpValue) {
      setOtpSent(false);
      setOtpAuthentication(true);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <>
      <main className=" bg-m-blue h-screen w-full">
        <div className="flex flex-col justify-between items-center h-full p-3 text-[#98a6ad]">
          <div className="bg-white w-full sm:max-w-96 py-4 px-8 rounded-lg flex flex-col items-center mt-12">
            <div className="w-24 py-7">
              <Image src={LogoLgImg} alt="logo" />
            </div>
            <p className="px-10 text-center text-sm">
              Enter your Mobile number and one time password to access your
              panel.
            </p>
            {otpSent && (
              <div className="mt-7 bg-m-success text-[#10715e] bg-[#d1f2eb] w-full text-center rounded-sm p-2">
                Otp Sent
              </div>
            )}
            {otpAuthentication && (
              <div className="mt-7 bg-m-success text-[#913341] bg-[#fcdde2] w-full text-center rounded-sm p-2">
                Authentication Failed
              </div>
            )}
            <div id="inputgroups" className="w-full py-7 flex flex-col">
              <label
                htmlFor="mobile"
                className=" font-semibold text-sm text-gray-500 pb-2"
              >
                Mobile Number
              </label>
              <input
                id="mobile"
                type="text"
                className="border border-gray-300 rounded-sm py-2 px-4 outline-none placeholder:text-sm text-gray-500"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
              />
              {enterOtp && (
                <>
                  <label
                    htmlFor="otp"
                    className=" font-semibold text-sm text-gray-500 mt-7 pb-2"
                  >
                    Otp
                  </label>
                  <input
                    id="otp"
                    type="number"
                    className="border border-gray-300 rounded-sm py-2 px-4 outline-none placeholder:text-sm text-gray-500"
                    placeholder="000000"
                    value={otpValue}
                    onChange={(e) => {
                      setOtpValue(e.target.value);
                    }}
                  />
                </>
              )}
              <div className="pt-3 flex item-center">
                <input
                  type="checkbox"
                  className=" accent-m-blue h-4 w-4 cursor-pointer rounded-sm"
                  name="checked"
                  id="checked"
                  checked={rememberMe}
                  onChange={() => {
                    setRememberMe(!rememberMe);
                  }}
                />
                <label
                  htmlFor="checked"
                  className=" font-semibold text-sm text-gray-500 pl-4"
                >
                  Remember me
                </label>
              </div>

              <button
                className="mt-4 p-1 rounded-sm text-white bg-m-blue w-full"
                onClick={() => {
                  handelLogin();
                }}
              >
                Log In
              </button>
            </div>
          </div>
          <p className="p-5 pb-0 text-sm">Meesra.com</p>
        </div>
      </main>
    </>
  );
};

export default Login;
