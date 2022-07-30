import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import petReducer from './petReducer';

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  pet: petReducer,
});

export default rootReducer;
