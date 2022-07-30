const petReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_PET':
      return payload;
    default:
      return state;
  }
};

export default petReducer;
