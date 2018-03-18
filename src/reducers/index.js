import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import users from './userReducer';
import thread from './threadReducer';
import message from './messageReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import initialState from './initialState';

const rootReducer = combineReducers({
  courses,
  authors,
  users,
  thread,
  ajaxCallsInProgress
});

export default rootReducer;
