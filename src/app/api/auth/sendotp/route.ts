import { NextResponse } from "next/server";

export async function GET(req: any) {
  return NextResponse.json({ message: "true" }, { status: 200 });
}

export async function POST(req: any) {
  console.log("Reached");
  try {
    const body = await req.json();
    const senderId = body.senderId;

    const formdata = new FormData();
    formdata.append("senderId", senderId);

    const response = await fetch(
      "https://hero.meesra.com/web_api_v1/nbfc_auth/send_otp",
      {
        method: "POST",
        body: formdata,
      }
    );

    const responseText = await response.text();

    return NextResponse.json(
      { message: "OTP SENT", body: JSON.parse(responseText) },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
