import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function threadReducer(state = initialState.thread, action){
    switch(action.type) {
        case types.GET_ALL_THREADS_SUCCESS:
            return state;
        
        default:
            return state;
    }
}