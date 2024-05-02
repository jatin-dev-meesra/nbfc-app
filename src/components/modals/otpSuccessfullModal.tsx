"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";

import OTPSuccessfullVerified from "@/assets/images/otp_verified.svg";

function OtpSuccessfullModal() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const modal = searchParams.get("otp_successfull_modal");
  const pathname = usePathname();

  const handleProceed = () => {
    // router.reload();
    // router.push("/generatelead");
    window.location.href = "/generatelead";
  };
  return (
    <>
      <Suspense fallback={<p>Loading......</p>}>
        {modal && (
          <dialog className="fixed left-0 top-0 w-full h-full bg-gray-500 bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
            <div className="mt-56 sm:mt-24 pb-10 bg-transparent">
              <div className="bg-white p-8 w-96 h-full rounded-md flex flex-col justify-center">
                {/* <div className="flex justify-end">
                  <Link href="?personal_details_modal=true">
                    <div className="w-4 h-4 border border-gray-300 text-gray-300 flex justify-center items-center">
                      x
                    </div>
                  </Link>
                </div> */}
                <Image src={OTPSuccessfullVerified} alt="otp verified" />
                <h1 className="uppercase text-m-orange font-bold text-center">
                  Successful
                </h1>
                <p className="text-sm text-[#555555] text-center">
                  your form have been successfully submitted & your application
                  is under review
                </p>
                <div className="flex justify-between py-2 px-12 w-full">
                  {/* <Link href='/generatelead' className="w-full"> */}
                  <button
                    className="bg-m-orange text-center rounded-md text-white px-2 py-1 text-sm w-full"
                    onClick={() => {
                      handleProceed();
                    }}
                  >
                    Proceed
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </dialog>
        )}
      </Suspense>
    </>
  );
}

export default OtpSuccessfullModal;
