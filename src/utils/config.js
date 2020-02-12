const buttons = {
  termsLoan: ['12', '24', '36', '48', '72', '84'],
  termsLease: ['24', '36', '48'],
  mileage: ['10000', '12000', '15000'],
  creditScoreValue: ['600', '650', '700', '750', '800', '850', '900'],
};

const initialState = {
  isLoading: true,
  typeCalculator: 0,
  postal: 'n/a',
  payment: 'n/a',
  taxes: 'n/a',
  data: {
    msrp: 'n/a',
    vehicle: 'n/a',
    dealerName: 'n/a',
    dealerPhone: 'n/a',
    dealerRating: 'n/a',
  },
  calculationResults: {
    loan: 'n/a',
    lease: 'n/a',
  },
  inputValues: {
    tradeIn: '1',
    downPayment: '2',
    apr: '3',
    creditScoreValue: '750',
    termsLoan: '24',
    termsLease: '36',
    mileage: '12000',
  },
};

const itemListLabels = {
  msrp: 'MSRP',
  vehicle: '',
  payment: 'Payment',
  taxes: 'Taxes',
  dealerName: '',
  dealerPhone: 'Phone',
  dealerRating: 'Rating',
  downPayment: 'Down Payment',
  tradeIn: 'Trade-In',
  apr: 'APR',
  postal: 'Post Code',
  termsLoan: 'Terms',
  termsLease: 'Terms',
  creditScoreValue: 'Credit Store',
  mileage: 'Mileages',
};

const itemListMasks = {
  downPayment: 'dollar',
  tradeIn: 'dollar',
  apr: 'percent',
  postal: '',
};

export { buttons, initialState, itemListLabels, itemListMasks };
