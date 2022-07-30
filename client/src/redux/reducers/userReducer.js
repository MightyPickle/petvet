const userReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'USER_LOG_IN':
      return { ...payload };
    case 'USER_LOG_OUT':
      return {};
    default:
      return state;
  }
};

export default userReducer;
