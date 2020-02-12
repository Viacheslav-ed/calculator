const mainReducer = (state, action) => {
  switch (action.type) {
    case 'LOADED':
      return {
        ...state,
        isLoading: false,
        data: action.data[0],
        postal: action.data[1],
      };
    case 'CHANGE_TYPE_CULC':
      return {
        ...state,
        isLoan: !state.isLoan,
      };
    // case 'UPDATE_RESULT':
    // return {
    //   ...state,
    //   isLoan: !state.isLoan,
    // };
    case 'UPDATE_POSTAL':
      return {
        ...state,
        postal: action.postal,
      };
    default:
      return state;
  }
};

export default mainReducer;
