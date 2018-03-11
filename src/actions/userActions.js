import userApi from '../api/mockUserApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function updateUserSuccess(user) {
    return {type: types.UPDATE_USER_SUCCESS, user};
}

export function createUserSuccess(user) {
    return {type: types.CREATE_USER_SUCCESS, user};
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

