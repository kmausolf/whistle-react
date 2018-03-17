import React from 'react';
import {Link} from 'react-router';

import MessageCard from "./messageCard";

const ThreadList = (props) => {
    const cardStyle = {
        padding:'7px', 
        border: '1.5px solid',
        borderRadius: '10px',
        borderColor: "#707070",
        width:"100%"
        
      };
  return (
    <div>
      {/* {props.threads.map(thread =>
        <div key={thread.tid} style={cardStyle}>
          <MessageCard {...thread}/>
        </div>
      )} */}

      {/* <p>{props.threads[0].tid}</p> */}
    </div>
  );

};

export default ThreadList;