import React from 'react';
import {Link} from 'react-router';

import MessageCard from "./messageCard";

const MessageList = (props) => {
    const cardStyle = {
        padding:'7px', 
        border: '1.5px solid',
        borderRadius: '10px',
        borderColor: "#707070",
        width:"100%"
        
      };
  return (
    <div>
      {props.messages.map(card =>
        <div key={card.key} style={cardStyle}>
          <MessageCard {...card}/>
        </div>
      )}
    </div>
  );

}

export default MessageList;