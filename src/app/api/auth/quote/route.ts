import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const body = await req.json();
    const token = body.token;
    const age = body.age;
    const loanamount = body.loanamt;
    const loantenure = body.loanTenure;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      ProductCode: "GCPP",
      CarrierCode: "PRAMERICA",
      LoanOrg: "PINKCITY",
      LoanTenure: loantenure,
      LoanAmount: loanamount,
      Age: age,
    });

    console.log("RAW", raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const response = await fetch(
      "https://sandbox-in-gw.insuremo.com/meesra/1.0/v1/calculate",
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
