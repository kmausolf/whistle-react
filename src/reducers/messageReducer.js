import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function messageReducer(state = initialState.message, action){
    switch(action.type) {
        // case types.GET_ALL_THREADS_SUCCESS:
        //     return action.threads

        default:
            return state;
    }
}