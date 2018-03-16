import userApi from '../api/mockUserApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import CourseApi from '../api/mockCourseApi';

export function validateUserSuccess(response) {
    return {type: types.VALIDATE_USER_SUCCESS, response};
}

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}

export function updateUserSuccess(user) {
    return {type: types.UPDATE_USER_SUCCESS, user};
}

export function createUserSuccess(user) {
    return {type: types.CREATE_USER_SUCCESS, user};
}


export function setCurrUser(currUser){
    return {type: types.SET_CURR_USER, currUser}; 
}
//will set currUser when user logs in. currUser field is now set in the store.

export function loadUsers(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return userApi.getAllUsers().then(users => {
            dispatch(loadUsersSuccess(users));
        }).catch(error => {
            throw(error);
        });
    };
}

export function validateUser(user){

    return function(dispatch){
        return userApi.validateUser(user).then(response => {
            dispatch(validateUserSuccess(response));
            dispatch(setCurrUser(user));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveUser(user) {
    
    return function(dispatch, getState) {
        dispatch(beginAjaxCall());
        return userApi.saveUser(user).then(user => {
            //If the user already exists, update it, otherwise, create new
            user.id ? dispatch(updateUserSuccess(user)) :
                dispatch(createUserSuccess(user));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

