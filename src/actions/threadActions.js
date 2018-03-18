import * as types from './actionTypes';
import threadApi from '../api/threadApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function getAllThreadsSuccess(threads) {
    return {type: types.GET_ALL_THREADS_SUCCESS, threads};
}

export function getThreadsByUserSuccess(threads) {
    return {type: types.GET_THREADS_BY_USER_SUCCESS, threads};
}

export function getAllThreads(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return threadApi.getAllThreads().then(threads => {
            // console.log(threads)
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
            // console.log(threads)
            dispatch(getThreadsByUserSuccess(threads));
        }).catch(error => {
            throw(error);
        });
    };
}