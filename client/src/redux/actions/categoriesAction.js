export const getCategoriesAC = (payload) => ({ type: 'GET_CATEGORIES', payload });

export const getCategoriesThunk = () => async (dispatch) => {
  const response = await fetch('http://localhost:3010/api/v1/doctors/categories');
  if (response.ok) {
    const data = await response.json();
    dispatch(getCategoriesAC(data));
  }
};
