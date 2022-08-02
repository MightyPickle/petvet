const profilesReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_PROFILES':
      return payload;

    default:
      return state;
  }
};

export default profilesReducer;
