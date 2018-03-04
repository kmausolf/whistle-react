import React from 'react';
import {Link} from 'react-router';

import MessageList from "./messageList";

class MessageBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages :  [
        {
            key: 0,
            sender: "Bob",
            receiver: "Amanda",
            message: "Hello!"
        },
        {
            key: 1,
            sender: "David",
            receiver: "Sam",
            message: "Bye!"
        }],
      showing: false
    };

    this.sendMessage = this.sendMessage.bind(this);
    this.showReplyArea = this.showReplyArea.bind(this);
    this.hideReplyArea = this.hideReplyArea.bind(this);
  }

  sendMessage() {
    var newArray = this.state.messages.slice();
    var newKey = newArray.length;
  
    newArray.push({
      key:      newKey,
      sender:   "admin",
      receiver: this.state.receiver,
      message:  this.state.message
    });

    this.setState((prevState) => ({messages:newArray}));
  }

  showReplyArea(){
    this.setState({showing: true});
  }

  hideReplyArea(){
    this.setState({showing: false});
  }

  render(){
    const borderStyle = {
      padding:'7px', 
      border: '1.5px solid',
      borderRadius: '10px',
      borderColor: "#707070",
      width:"100%"
    }

    return(
      <div>
        <div style={borderStyle}>
          <MessageList messages = {this.state.messages} />
        </div>
      </div>
    );
  }
}
export default MessageBoard;