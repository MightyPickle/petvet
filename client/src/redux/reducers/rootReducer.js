import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import infoCardReduser from './infoCardReducer';
import userReducer from './userReducer';
import petReducer from './petReducer';
import scheduleReducer from './scheduleReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // pets: petsReducer,
  error: errorReducer,
  vetinfo: infoCardReduser,
  pet: petReducer,
  schedule: scheduleReducer,
});

export default rootReducer;
