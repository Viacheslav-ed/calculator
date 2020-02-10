const mainReducer = (state, action) => {
  switch (action.type) {
    case 'LOADED':
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case 'CHANGE_TYPE_CULC':
      return {
        ...state,
        isLoan: !state.isLoan,
      };
    default:
      return state;
  }
};

export default mainReducer;
