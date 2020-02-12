const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADED_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'LOADED_POSTAL':
      return {
        ...state,
        isLoading: false,
        postal: action.postal,
        taxes: action.taxes,
      };
    case 'CHANGE_TYPE_CALCULATOR':
      return {
        ...state,
        typeCalculator: action.newType,
      };
    // case 'UPDATE_RESULT':
    // return {
    //   ...state,
    //   isLoan: !state.isLoan,
    // };
    // case 'UPDATE_POSTAL':
    //   return {
    //     ...state,
    //     postal: action.postal,
    //   };
    default:
      return state;
  }
};

export default reducer;
