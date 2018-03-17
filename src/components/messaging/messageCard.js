import React from 'react';
import {Link} from 'react-router';

import ReplyToggle from "./ReplyToggle";

const MessageCard = (props) => {
    const imgStyle = {
        borderRadius: "10px",
        width: "100px",
        height: "100px",
        float:'left' 
    };
    return (
        <div>
            <div> <left>
                <p> From: {props.thread.tid} </p> 
            </left> </div>
        </div>
    );
}

export default MessageCard;