import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    // console.log("Reached submit otp");
    const body = await req.json();
    const senderId = body.senderId;
    const otp = body.auth_token;
    const formdata = new FormData();
    formdata.append("senderId", senderId);
    formdata.append("auth_token", otp);

    const response = await fetch(
      "https://hero.meesra.com/web_api_v1/nbfc_auth/submit_otp",
      {
        method: "POST",
        body: formdata,
      }
    );

    const responseText = await response.text();
    // console.log("....test log........", JSON.parse(responseText));

    return NextResponse.json(
      { message: "OTP Submited", body: JSON.parse(responseText) },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
