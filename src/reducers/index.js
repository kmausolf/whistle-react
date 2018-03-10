import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import initialState from './initialState';

/*
const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});
*/

const rootReducer = (state = initialState, action) => state;

export default rootReducer;
