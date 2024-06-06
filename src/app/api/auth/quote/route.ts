import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const body = await req.json();
    // console.log("BODY", body);
    const token = body.token;
    const age = String(body.age);
    const loanamount = body.loanamt;
    const loantenure = String(body.loanTenure);
    const gender = body.gender;
    const loannature = String(body.loantype);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    // const raw = JSON.stringify({
    //   ProductCode: "GCPP",
    //   CarrierCode: "PRAMERICA",
    //   LoanOrg: "PINKCITY",
    //   LoanTenure: loantenure,
    //   LoanAmount: loanamount,
    //   Age: age,
    // });

    // Please pass "LoanNatureCode" for Secure/Unsecure Loan Type (UB/BL).
    const raw = JSON.stringify({
      ProductVersion: "1.0",
      ProductCode: "GCPP",
      CarrierCode: "PRAMERICA",
      LoanOrg: "PINKCITY",
      LoanTenure: loantenure,
      LoanAmount: loanamount,
      LoanNatureCode: loannature,
      PolicyCustomerList: [
        {
          Age: age,
          GenderCode: gender,
        },
      ],
      PolicyLobList: [
        {
          ProductCode: "GCPP",
          PolicyRiskList: [
            {
              ProductElementCode: "R00001",
              Age: age,
              GenderCode: gender,
              PolicyCoverageList: [
                {
                  ProductElementCode: "C0000861",
                },
              ],
            },
          ],
        },
      ],
      PolicyBeneficiaryList: [],
    });

    // console.log("RAW", raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const response = await fetch(
      // "https://sandbox-in-gw.insuremo.com/meesra/1.0/v1/calculate",
      "https://meesra-sandbox-in.insuremo.com/api/platform/quotation/v1/quotation",
      requestOptions
    );

    const result = await response.text();
    return NextResponse.json(
      { message: "Premium Calculated", body: result },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET(req: any) {
  return NextResponse.json({ message: "TEST QUOTE" }, { status: 200 });
}
