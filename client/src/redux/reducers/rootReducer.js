import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import infoCardReduser from './infoCardReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  info: infoCardReduser,
});

export default rootReducer;
