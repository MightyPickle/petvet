const errorReducer = (state = { isError: false, errorText: '' }, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ERROR_SHOW':
      return { isError: true, errorText: payload };
    case 'ERROR_HIDE':
      return { isError: false, errorText: '' };
    default:
      return state;
  }
};

export default errorReducer;
