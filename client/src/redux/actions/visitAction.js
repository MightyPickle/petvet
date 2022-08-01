export const addVisitAC = () => ({ type: 'ADD_VISIT' });

export const addVisitThunk = (form) => async (dispatch) => {
  const response = await fetch('http://localhost:3010/visits', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(form),
  });
};
