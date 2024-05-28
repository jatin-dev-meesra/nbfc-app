import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tickets = "await Ticket.find()";
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// =========================================================================================//

{
  /*

const sendOtp = async (number: any) => {
  try {
    const formdata = new FormData();
    formdata.append("senderId", number);

    const requestOptions: any = {
      method: "POST",
      body: formdata,
      // mode: "no-cors",
    };
    console.log(".............test.............");

    const res = await fetch(
      "https://partner.meesra.com/web_api_v1/adv_auth/send_otp",
      requestOptions
    );

    console.log("smnfuihsu", res);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const submitOtp = async (number: any, otp: any) => {
  try {
    const formdata = new FormData();
    formdata.append("senderId", number);
    formdata.append("auth_token", otp);

    const requestOptions: any = {
      method: "POST",
      body: formdata,
      // mode: "no-cors",
    };
    const res = await fetch(
      "https://partner.meesra.com/web_api_v1/adv_auth/submit_otp",
      requestOptions
    );
    console.log(".............test.............");
    console.log("smnfuihsu", res);

    return res;
  } catch (error) {
    console.log(error);
  }
};
*/
}
