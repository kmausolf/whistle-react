import * as types from './actionTypes';
import messageApi from '../api/mockMessaageApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function sendMessageSuccess(message) {
    return {type: types.SEND_MESSAGE_SUCCESS, message};
}

export function sendMessage(tid, usersList, senderID, messageString) {
    return function(dispatch){
        dispatch(beginAjaxCall());
        return messageApi.sendMessage(tid, usersList, senderID, messageString).then(message => {
            dispatch(sendMessageSuccess(message));
        }).catch(error => {
            throw(error);
        });
    };
}