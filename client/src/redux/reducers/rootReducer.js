import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import petsReducer from './petsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  pets: petsReducer,
  error: errorReducer,
});

export default rootReducer;
