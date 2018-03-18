import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function threadReducer(state = initialState.thread, action){
    switch(action.type) {
        case types.GET_ALL_THREADS_SUCCESS:
            return action.threads

        case types.GET_THREADS_BY_USER_SUCCESS:
            return action.threads

        
        default:
            return state;
    }
}