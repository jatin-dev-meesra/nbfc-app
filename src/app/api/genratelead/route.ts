import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const body = await req.json();
    // console.log("........body......", body);

    const token = body.token;
    const userid = body.userid;
    const loanPeriod =
      Number(body?.formdata.year) * 12 + Number(body?.formdata.month);

    const formdata = new FormData();
    if (body) {
      formdata.append("token", token);
      formdata.append("user_id", userid);
      formdata.append("case_policy_type", body?.formdata.policy_type);
      formdata.append("case_loan_cover", body?.formdata.loan_cover);
      formdata.append("case_loan_type", body?.formdata.loan_type);
      // formdata.append("case_loan_tenure", body?.formdata.loan_year);
      formdata.append("case_loan_tenure", String(loanPeriod));
      formdata.append("case_loan_amt", body?.formdata.loan_amount);
      formdata.append("case_loan_number", body?.formdata.loan_number);
      formdata.append("case_cus_fname", body?.formdata.customer_fname);
      formdata.append("case_cus_lname", body?.formdata.customer_lname);
      formdata.append("case_cus_dob", body?.formdata.dob);
      formdata.append("case_cus_age", body?.formdata.age);
      formdata.append("case_cus_email", body?.formdata.customer_email);
      formdata.append("case_cus_mobile", body?.formdata.customer_mobile);
      formdata.append("case_cus_gender", body?.formdata.gender);
      formdata.append("case_pincode", body?.formdata.customer_pincode);
      formdata.append("case_area", body?.formdata.customer_area);
      formdata.append("case_city", body?.formdata.customer_city);
      formdata.append("case_product_type", body?.formdata.product_type);
      formdata.append("case_insurer", body?.formdata.insurer);
      formdata.append("case_mph_location", body?.formdata.mph_location);
      formdata.append("case_premium_amt", body?.formdata.premium_amt);
      formdata.append("case_premium_gst", body?.formdata.premium_gst);
      formdata.append("case_premium_total", body?.formdata.premium_total);
      formdata.append("case_aadhar_no", body?.formdata.customer_aadhaar);
      formdata.append("case_pan_no", body?.formdata.customer_pan);
      formdata.append("case_occupation", body?.formdata.occupation_type);
      formdata.append("case_nationality", body?.formdata.nationality);
      formdata.append("case_ann_income", body?.formdata.annual_income);
      formdata.append("case_height", body?.formdata.height);
      formdata.append("case_weight", body?.formdata.weight);
      formdata.append("case_delaration_status", "Yes");
      formdata.append("case_covid_que1", "Yes");
      formdata.append("case_covid_que2", "Yes");
      formdata.append("nominee_count", "1");
      formdata.append("case_nom_fname0", "Sonali");
      formdata.append("case_nom_lname0", "Bajaj");
      formdata.append("case_nom_email0", "sonali@gmail.com");
      formdata.append("case_nom_mob0", "+912342342342");
      formdata.append("case_nom_percentage0", "10");
      formdata.append("case_nom_relationship0", "Wife");
    }

    console.log("formdata", formdata);

    const response = await fetch(
      "https://hero.meesra.com/web_api_v1/nbfc_auth/add_case",
      {
        method: "POST",
        body: formdata,
      }
    );

    const responseText = await response.text();
    // console.log("....test case response........", JSON.parse(responseText));

    return NextResponse.json(
      { message: "Case Added", body: JSON.parse(responseText) },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
