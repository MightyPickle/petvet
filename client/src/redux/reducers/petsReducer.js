const petsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_PETS':
      return payload;

    default:
      return state;
  }
};

export default petsReducer;
