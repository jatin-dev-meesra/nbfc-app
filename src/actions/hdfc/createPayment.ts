"use server";
export const genratePayment = async () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Basic RjFGNDgzRjAxRDM0NjcwQTk3MUFDOEI1ODFBOTRG"
    );
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-merchantid", "SG362");
    myHeaders.append("x-customerid", "hdfcmaster");

    const raw = JSON.stringify({
      order_id: "00022",
      amount: "01.0",
      customer_id: "0022",
      customer_email: "jatin@meesra.com",
      customer_phone: "7703913871",
      payment_page_client_id: "hdfcmaster",
      action: "paymentPage",
      currency: "INR",
      return_url: `${process.env.BASE_URL}/`,
      description: "Complete your payment",
      first_name: "Jatin",
      last_name: "Yadav",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const response = await fetch(
      "https://smartgatewayuat.hdfcbank.com/session",
      requestOptions
    );
    const result = await response.text();

    // console.log(".............result............", result);
    return result;
  } catch (error) {
    console.log("ERROR", error);
  }
};
