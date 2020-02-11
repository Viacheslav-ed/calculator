const TERMS = ['12', '24', '36', '48', '72', '84'];

const MILEAGE = ['10000', '12000', '15000'];

const CREDIT_SCORE = ['600', '650', '700', '750', '800', '850', '900'];

const initialMainState = {
  isLoading: true,
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
    postal: 'n/a',
  },
  resultCalculation: {
    loan: 'n/a',
    lease: 'n/a',
  },
};

const initialInputState = {
  tradeIn: '0',
  downPayment: '0',
  apr: '0',
  creditScoreValue: '750',
  term: '24',
  mileage: '12000',
};

export { TERMS, MILEAGE, CREDIT_SCORE, initialMainState, initialInputState };
