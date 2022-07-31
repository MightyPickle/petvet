import { useDispatch } from 'react-redux';
import { errorShowAC } from '../redux/actions/errorAction';

const postPetForm = async (form) => {
  const response = await fetch('http://localhost:3010/api/v1/pets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(form),
  });
  if (response.ok) {
    const pet = await response.json();
    return pet;
  }
  const { errorMessage } = await response.json();
  const dispatch = useDispatch();
  dispatch(errorShowAC(errorMessage));
  return false;
};

export default postPetForm;
