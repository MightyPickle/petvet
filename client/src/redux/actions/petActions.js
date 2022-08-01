export const getPetAC = (data) => ({ type: 'GET_PET', payload: data });

export const getPetThunk = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3010/api/v1/pets/${id}`);
  const data = await response.json();
  // console.log(data, '<<<<<<<<<, data');
  dispatch(getPetAC(data));
};
