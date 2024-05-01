import React from "react";

const Declaration = () => {
  return (
    <div className="bg-white border-2 px-8 py-6 border-solid rounded-lg">
      <h1 className=" text-xl font-medium">Declaration</h1>
      <div className="text-sm pt-5">
        <p>
          I here by declare that the information provided in the above
          questionnaire is true to the best of my knowledge. I confirm that the
          answers I have given are, to the best of my knowledge, true, and that
          have not withheld any material information that may influence the
          assessment or acceptance of this application. I agree that this form
          will constitute part of my application for insurance (s) and that
          failure to disclose any material fact know to me may invalidate my
          insurance(s).
        </p>
        <br />
        <p>
          I/We fully understand that any personal information collected or held
          by the Bajaj Allianz Life Insurance Company Limited {`("Company")`}
          (whether contained in this application or otherwise obtained) may be
          held, used and disclosed by the Company to reinsurance companies,
          claims investigation agencies, credit/claim/fraud bureaus or service
          providers or repositories and relevant industry
          associations/federations for the purpose of underwriting or claims
          processing or for any analysis.
        </p>
        <br />
        <p>
          I/We am/are aware that the policy shall be governed by the Terms &
          Conditions of the policy issued by BAJAJ ALLIANZ LIFE INSURANCE CO.
          LTD. Pursuant to the proposal for insurance made by us. I/We have
          independently verified the information before making my/our decision.
        </p>
        <br />
        <p>
          I/We am/are aware that the GCPP policy taken by me/us, is issued and
          underwritten by BAJAJ ALLIANZ LIFE INSURANCE CO. LTD., and that all
          claims will be settled BAJAJ ALLIANZ LIFE INSURANCE CO. LTD., as per
          the terms and conditions of the policy.
        </p>
        <br />
        <p>
          I/We hereby confirm that I/We have agreed to subscribe to the policy
          purely on a voluntary basis after taking my/our independent
          professional advise and liable for any liability for loss or damage of
          whatsoever nature, which may be attributable to payment of claims
          under the policy of Insurance.
        </p>
        <br />
        <p>
          The above declaration and other details are true to best of my
          knowledge. I have been explained the rules of the scheme and have
          understood them.
        </p>
      </div>
      <div className="py-5">
        <button
          className="bg-m-orange text-center rounded-md w-full text-white px-2 py-1 text-sm"
          onClick={() => {
            // handleClaculate();
          }}
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default Declaration;
