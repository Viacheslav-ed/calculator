const calculate = state => {
  const msrp = Number(state.data.msrp.substr(1));
  const tradeIn = Number(state.inputValues.tradeIn);
  const downPayment = Number(state.inputValues.downPayment);
  const creditScore = Number(state.inputValues.creditScoreValue);
  let coef;
  if (creditScore < 640) {
    coef = 1.2;
  } else if (creditScore < 700) {
    coef = 1.05;
  } else if (creditScore < 750) {
    coef = 1;
  } else {
    coef = 0.95;
  }
  const creditScoreValue = coef;
  const apr = Number(state.inputValues.apr) / 100;
  const termsLoan = Number(state.inputValues.termsLoan);
  const termsLease = Number(state.inputValues.termsLease);
  const mileage = Number(state.inputValues.mileage);
  const res = {};
  res.loan = (((msrp - tradeIn - downPayment) * (1 + creditScoreValue * apr)) / termsLoan)
    .toFixed(2)
    .toString();
  res.lease = (
    ((msrp - tradeIn - downPayment) * (1 + (10000 / mileage) * creditScoreValue)) /
    termsLease
  )
    .toFixed(2)
    .toString();
  return Promise.resolve(res);
};

export default calculate;
