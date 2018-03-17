import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action){
    switch(action.type) {
        case types.LOAD_USERS_SUCCESS:
            return action.users;

        case types.VALIDATE_USER_SUCCESS:
            return action.response;

        case types.SET_CURR_USER:
            return action.currUser;
            /*
            return [
                ...state,
                Object.assign({}, action.currUser)
            ];*/
   
        case types.CREATE_USER_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.user)
            ];
        
        case types.UPDATE_USER_SUCCESS:
            return[
                ...state.filter(user => user.id !== action.user.id),
                Object.assign({}, action.user)
            ];

        case types.GET_USER_SUCCESS:
            return action.user;
        
        default:
            return state;
    }
}