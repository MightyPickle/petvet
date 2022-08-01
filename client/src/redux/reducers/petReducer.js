const petReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'PET_GET_ALL':
      return [payload];
    case 'PET_GET_ONE':
      return [payload];
    case 'PET_ADD':
      return [...state, payload];
    default:
      return state;
  }
};

export default petReducer;
