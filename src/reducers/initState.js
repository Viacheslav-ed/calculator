const initialState = {
  isLoading: true,
  isCalculation: false,
  isLoan: true,
  data: {
    msrp: 'n/a',
    vehicle: {
      name: 'n/a',
      info: 'n/a',
    },
    dealerName: 'n/a',
    dealerPhone: 'n/a',
    dealerRating: 'n/a',
    taxes: 'n/a',
  },
  resultCalculation: {
    loan: 'n/a',
    lease: 'n/a',
  },
};

export default initialState;
