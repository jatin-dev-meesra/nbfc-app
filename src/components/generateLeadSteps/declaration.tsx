import Link from "next/link";
import React, { useContext } from "react";
import { StepperContext } from "@/context/stepperContext";

const Declaration = () => {
  const { userData, setUserData }: any = useContext(StepperContext);
  const handleTestButton = () => {
    console.log(userData);
    if (typeof window !== "undefined") {
      // Check if running in the browser
      try {
        // Attempt to stringify the state as JSON before storing
        localStorage.setItem("userData", JSON.stringify(userData));
      } catch (error) {
        console.error("Error storing state in localStorage:", error);
      }
    }
  };

  return (
    <div className="bg-white border-2 px-8 py-6 border-solid rounded-lg">
      <h1 className=" text-xl font-medium">Declaration</h1>
      <div className="text-sm pt-5">
        <p>
          I, hereby declare that the information provided in this form or
          otherwise is true to the best of my knowledge and that I have not
          withheld any material information that may influence the assessment or
          acceptance or of this application. I agree that this form will
          constitute part of my application for insurance(s) and that failure to
          disclose any material fact known to me may invalidate my insurance(s).
          I understand that in case of fraud or misrepresentation by me, the
          Policy shall be cancelled immediately by paying surrender value, if
          any, subject to the same being established by the Company in
          accordance with section 45 of the Insurance Act 1938. I undertake to
          make available to the Company and or its representatives such records,
          documents etc. related as may be required in relation to this form as
          and when requested for and that the Company may share this information
          with such third parties as it may deem necessary in relation to
          processing this form and the proposed policy.
        </p>
        <p>
          I/we confirm that the person(s) named above as my/our Nominee have
          been nominated in accordance with my/our statutory right of nomination
          as contained in Section 39 of the Insurance Act, 1938. I/we hereby
          declare and warrant that all these nominations have been made with
          my/our free will and consent. I/we understand and agree that in the
          unfortunate event of my/our death before I/we have re-paid the entire
          outstanding loan amount, the outstanding loan amount as per the
          benefit schedule and subject to the limit of the Coverage Sum Assured
          will be paid to The Master Policy Holder, and any additional amount
          payable under the policy after this payment has been made, subject to
          the Coverage Sum Assured, will be payable to my/our other Nominees
          named above or to my/our legal heirs or legal representatives (as
          applicable). I/we understand and agree that no other nominee appointed
          in accordance with Section 39 of the Insurance Act, 1938 or any of
          my/our our legal heirs or legal representative will have the right to
          receive or claim the amount (in whole or in part) which becomes due to
          or payable to The Master Policy Holder, under the policy in the
          unfortunate event of my/our death before I/we have re-paid the entire
          outstanding loan amount.
        </p>
      </div>
      <div className="py-5">
        <Link href="?personal_details_modal=true">
          <button
            className="bg-m-orange text-center rounded-md w-full text-white px-2 py-1 text-sm"
            onClick={() => {
              handleTestButton();
              // handleClaculate();
              // console.log("userData", userData);
              // localStorage.setItem("userData", JSON.stringify(userData));
            }}
          >
            I Agree
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Declaration;
