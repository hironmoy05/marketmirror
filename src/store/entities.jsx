import {combineReducers} from 'redux';
import bugsReducer from './bugs';
import forgotReducer from './forgot';
import verifyEmailReducer from './verifyEmailApi';

export default combineReducers({
  bugs: bugsReducer,
  forgot: forgotReducer,
  verifyEmail: verifyEmailReducer,
});
