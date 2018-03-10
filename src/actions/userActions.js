import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function addUserSuccess(user) {
    return {type: types.ADD_USER_SUCCESS, user};
}