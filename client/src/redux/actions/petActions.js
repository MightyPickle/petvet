export const getPetAC = (data) => ({ type: 'GET_PET', payload: data });

export const getPetThunk = (id) => async (dispatch) => {
  const response = await fetch(`https://localhost:3000/api/v1/pets/${id}`);
  const data = await response.json();
  dispatch(getPetAC(data));
};
