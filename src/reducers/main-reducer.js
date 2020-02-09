const mainReducer = (state, action) => {
  switch (action.type) {
    case 'loaded':
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    default:
      return state;
  }
};

export default mainReducer;
