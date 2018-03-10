import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import users from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import initialState from './initialState';

const rootReducer = combineReducers({
  courses,
  authors,
  users,
  ajaxCallsInProgress
});

export default rootReducer;
