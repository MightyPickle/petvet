import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import petsReducer from './petsReducer';
import infoCardReduser from './infoCardReducer';
import userReducer from './userReducer';
import petReducer from './petReducer';

const rootReducer = combineReducers({
  user: userReducer,
  pets: petsReducer,
  error: errorReducer,
  vetinfo: infoCardReduser,
  pet: petReducer,
});

export default rootReducer;
