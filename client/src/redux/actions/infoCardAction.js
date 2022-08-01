import { GET_INFO } from '../constants/constants';

export const getInfoCardAC = (payload) => ({ type: GET_INFO, payload });

export const getInfoCardThunk = (id) => async (dispatch) => {
  console.log('im in thunk');
  const infoAPI = `http://localhost:3010/api/v1/doctors/${id}`;
  const response = await fetch(infoAPI);
  const result = await response.json();
  // console.log(result);
  dispatch(getInfoCardAC(result));
};
