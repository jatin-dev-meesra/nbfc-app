import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    // console.log("Reached submit otp");
    const body = await req.json();
    const token = body.token;
    const userid = body.userid;
    const formdata = new FormData();
    formdata.append("token", token);
    formdata.append("user_id", userid);
    formdata.append("page_no", "0");
    // console.log("formdata", formdata);

    const response = await fetch(
      "https://partner.meesra.com/web_api_v1/adv_auth/get_dash",
      {
        method: "POST",
        body: formdata,
      }
    );

    const responseText = await response.text();
    // console.log("....test dash response........", JSON.parse(responseText));

    return NextResponse.json(
      { message: "Dashboard Data", body: JSON.parse(responseText) },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
