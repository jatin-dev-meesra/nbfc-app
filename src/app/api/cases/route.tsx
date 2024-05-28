import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const body = await req.json();
    const token = body.token;
    const userid = body.userid;
    const formdata = new FormData();
    formdata.append("token", token);
    formdata.append("user_id", userid);
    formdata.append("page_no", "0");
    formdata.append("stype", "0");
    formdata.append("from_date", "");
    formdata.append("to_date", "");
    formdata.append("quote_status", "");
    formdata.append("quote_cat", "");
    formdata.append("quote_req_type", "");
    formdata.append("quote_sub_cat", "");
    formdata.append("search_key", "");
    // console.log("formdata", formdata);

    const response = await fetch(
      "https://hero.meesra.com/web_api_v1/nbfc_auth/get_cases",
      {
        method: "POST",
        body: formdata,
      }
    );

    const responseText = await response.text();
    // console.log("....test case response........", JSON.parse(responseText));

    return NextResponse.json(
      { message: "Cases Found", body: JSON.parse(responseText) },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
