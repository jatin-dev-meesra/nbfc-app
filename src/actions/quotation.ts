export const getToken = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/auth/token`, {
      method: "POST",
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const genrateQuote = async (token: any, formdata: any) => {
  try {
    const loanPeriod =
      Number(formdata["year"]) * 12 + Number(formdata["month"]);
    const res = await fetch(`${process.env.BASE_URL}/api/auth/quote`, {
      method: "POST",
      body: JSON.stringify({
        token,
        age: formdata["age"],
        loanamt: formdata["loan_amount"],
        loanTenure: loanPeriod,
      }),
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
