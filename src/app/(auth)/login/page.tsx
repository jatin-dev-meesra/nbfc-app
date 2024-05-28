"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LogoLgImg from "@/assets/images/logo-dark.png";
import { useAppContext } from "@/lib/context";

const sendOtp = async (senderId: any) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/auth/sendotp`, {
      method: "POST",
      body: JSON.stringify({ senderId }),
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const submitOtp = async (senderId: any, auth_token: any) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/auth/submitotp`, {
      method: "POST",
      body: JSON.stringify({ senderId, auth_token }),
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Login = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState("+91");
  const [otpValue, setOtpValue] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const [statusBar, setStatusBar] = useState({
    msg: "otp sent",
    status: false,
  });
  const [showStatusBar, setShowStatusBar] = useState(false);
  const [enterOtp, setEnterOtp] = useState(false);

  const { setState } = useAppContext();

  const handelLogin = async () => {
    if (!otpValue && mobileNumber) {
      const response = await sendOtp(mobileNumber);

      if (response.body.status) {
        setShowStatusBar(true);
        setEnterOtp(true);
        setStatusBar({ msg: "OTP Sent", status: response.body.status });
      } else {
        setShowStatusBar(true);
        setStatusBar({
          msg: response.body.msg,
          status: response.body.status,
        });
      }
      return;
    }

    if (otpValue && mobileNumber && enterOtp) {
      const response = await submitOtp(mobileNumber, otpValue);
      // console.log("........SUBMIT OTP RESPONSE.......", response.body);
      if (response.body.status) {
        setStatusBar({ msg: response.body.msg, status: response.body.status });
        // sessionStatus = true;
        setState({
          sessionStatus: true,
          token: response.body.token,
          user_id: response.body.user_dt.user_id,
          userDt: response.body.user_dt,
        });
        router.push("/dashboard");
      } else {
        setStatusBar({ msg: response.body.msg, status: response.body.status });
      }
    }
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
            {showStatusBar && (
              <div
                className={`mt-7 bg-m-success ${
                  statusBar.status
                    ? "text-[#10715e] bg-[#d1f2eb]"
                    : "text-[#913341]  bg-[#fcdde2]"
                }  w-full text-center rounded-sm p-2`}
              >
                {statusBar.msg}
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
