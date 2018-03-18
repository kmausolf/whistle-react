import * as types from './actionTypes';
import threadApi from '../api/threadApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function getAllThreadsSuccess(threads) {
    return {type: types.GET_ALL_THREADS_SUCCESS, threads};
}

export function getThreadsByUserSuccess(threads) {
    return {type: types.GET_THREADS_BY_USER_SUCCESS, threads};
}

export function getLastMessageId(mid) {
    return {type: types.GET_LAST_MESSAGE_ID_SUCCESS, mid};
}

export function getAllThreads(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return threadApi.getAllThreads().then(threads => {
            dispatch(getAllThreadsSuccess(threads));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getThreadsByUser(userId){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return threadApi.getThreadsByUser(userId).then(threads => {
            dispatch(getThreadsByUserSuccess(threads));
        }).catch(error => {
            throw(error);
        });
    };
}