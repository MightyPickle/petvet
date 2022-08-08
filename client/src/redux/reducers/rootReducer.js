import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import infoCardReduser from './infoCardReducer';
import userReducer from './userReducer';
import petReducer from './petReducer';
import scheduleReducer from './scheduleReducer';
import categoriesReducer from './categoriesReducer';
import profilesReducer from './profilesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  vetinfo: infoCardReduser,
  categories: categoriesReducer,
  profiles: profilesReducer,
  pet: petReducer,
  schedule: scheduleReducer,

});

export default rootReducer;
