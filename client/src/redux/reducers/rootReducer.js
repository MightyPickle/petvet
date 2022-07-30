import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import infoCardReduser from './infoCardReducer';
import userReducer from './userReducer';
import petReducer from './petReducer';

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  info: infoCardReduser,
  pet: petReducer,
});

export default rootReducer;
