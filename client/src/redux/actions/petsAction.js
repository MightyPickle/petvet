export const getPetsAC = (payload) => ({ type: 'GET_PETS', payload });

export const getPetsThunk = () => async (dispatch) => {
  const response = await fetch('http://localhost:3010/api/v1/users/patients/pets', {
    credentials: 'include',
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    dispatch(getPetsAC(data));
  }
};
