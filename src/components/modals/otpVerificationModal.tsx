"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";

import EnterOTP from "@/assets/images/enter_otp_panal.svg";

function OtpVerificationModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("otp_verification_modal");
  const pathname = usePathname();

  return (
    <>
      <Suspense fallback={<p>Loading......</p>}>
        {modal && (
          <dialog className="fixed left-0 top-0 w-full h-full bg-gray-500 bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
            <div className="mt-56 sm:mt-24 pb-10 bg-transparent">
              <div className="bg-white p-8 w-full h-full rounded-md flex flex-col justify-center">
                <div className="flex justify-end">
                  <Link href="?personal_details_modal=true">
                    <div className="w-4 h-4 border border-gray-300 text-gray-300 flex justify-center items-center">
                      x
                    </div>
                  </Link>
                </div>
                <Image src={EnterOTP} alt="enter otp" />
                <h1 className="uppercase text-m-orange font-bold text-center">
                  otp verification
                </h1>
                <p className="text-sm text-[#555555] text-center">
                  please enter the OTP send to your mobile number
                </p>
                <div className="flex justify-between py-2 px-8">
                  <div className=" h-12 w-12 border-2 border-gray-300 rounded-md"></div>
                  <div className=" h-12 w-12 border-2 border-gray-300 rounded-md"></div>
                  <div className=" h-12 w-12 border-2 border-gray-300 rounded-md"></div>
                  <div className=" h-12 w-12 border-2 border-gray-300 rounded-md"></div>
                </div>
                <p className="text-sm text-[#555555] text-center">
                  Didn’t receive the OTP?
                </p>
                <button className="text-m-orange py-1 font-semibold text-sm text-center">
                  Resend OTP
                </button>
                <div className="flex justify-between py-2 px-12 w-full">
                  <Link href='?otp_successfull_modal=true' className="w-full">
                    <button
                      className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm w-full"
                      onClick={() => {
                        // handleClaculate();
                      }}
                    >
                      Verify & Proceed
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </dialog>
        )}
      </Suspense>
    </>
  );
}

export default OtpVerificationModal;
