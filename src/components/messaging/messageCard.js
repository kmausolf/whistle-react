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
            <img src="https://i.imgur.com/jNNT4LE.png" style={imgStyle} />
            <div> <left>
                <p> From: {props.sender} </p> 
                <p> {props.message} </p><br/>
            </left> </div>
            <center> <ReplyToggle/> </center>
        </div>
    );
}

export default MessageCard;