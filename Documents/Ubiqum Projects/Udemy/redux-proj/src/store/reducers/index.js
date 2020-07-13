import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

export default combineReducers({
  //State setter
  log: logReducer,
  tech: techReducer,
});
