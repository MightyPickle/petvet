export const getProfilesAC = (payload) => ({ type: 'GET_PROFILES', payload });

export const getProfilesThunk = () => async (dispatch) => {
  const response = await fetch('http://localhost:3010/api/v1/doctors/profiles');
  if (response.ok) {
    const data = await response.json();
    dispatch(getProfilesAC(data));
  }
};
