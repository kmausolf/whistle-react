import React from 'react';
import {Link} from 'react-router';

import MessageBoard from './messageBoard';

class Messaging extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="jumbotron">
          <h1><center>Messages</center></h1>
        </div>
        <MessageBoard/>
      </div>
    );
  }
}

export default Messaging;