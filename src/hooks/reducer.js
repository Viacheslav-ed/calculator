const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADED_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'LOADED':
      return {
        ...state,
        isLoading: false,
      };
    case 'UPDATE_TAXES':
      return {
        ...state,
        taxes: action.taxes,
      };
    case 'CHANGE_TYPE_CALCULATOR':
      return {
        ...state,
        typeCalculator: action.newType,
        payment: `$${
          action.newType ? state.calculationResults.lease : state.calculationResults.loan
        }`,
      };
    case 'UPDATE_INPUT_VALUES':
      return {
        ...state,
        inputValues: action.inputValues,
      };
    case 'UPDATE_RESULT':
      return {
        ...state,
        calculationResults: action.result,
        payment: `$${state.typeCalculator ? action.result.lease : action.result.loan}`,
      };
    default:
      return state;
  }
};

export default reducer;
