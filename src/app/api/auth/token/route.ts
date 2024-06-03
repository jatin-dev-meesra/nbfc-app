import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: "meesra.ebao",
      password: "Meesra@1234",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const response = await fetch(
      "https://sandbox-in-gw.insuremo.com/cas/ebao/v2/json/tickets",
      requestOptions
    );

    const result = await response.text();

    return NextResponse.json(
      { message: "TOKEN GENRATED", body: result },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
