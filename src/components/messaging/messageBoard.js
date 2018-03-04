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
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleReveiverChange = this.handleReveiverChange.bind(this);
  }

  sendMessage() {
    var newArray = this.state.messages.slice();
    var newKey = newArray.length;
  
    newArray.push({
      key:      newKey,
      sender:   "admin",
      receiver: this.state.receiver,
      message:  this.state.content
    });

    this.setState((prevState) => ({messages:newArray}));
    this.setState({showing: false});
  }

  showReplyArea(){
    this.setState({showing: true});
  }

  handleMessageChange(event) {
    this.setState({content: event.target.value});
  }

  handleReveiverChange(event) {
    this.setState({receiver: event.target.value});
  }

  render(){
    const borderStyle = {
      padding:'7px', 
      border: '1.5px solid',
      borderRadius: '10px',
      borderColor: "#707070",
      width:"100%"
    }

    const { showing } = this.state;

    let newMessageButton = null
    let receiverText = null
    let messageText = null

    if(!showing){
        newMessageButton = <button onClick={this.showReplyArea}>New Message</button>;
        messageText = null;
        receiverText = null;
    }
    else{
        newMessageButton = <button onClick={this.sendMessage}>Send</button>;
        messageText = <textarea rows="5" cols="50" placeholder="Enter message here..." value={this.state.content} onChange={this.handleMessageChange}></textarea>;
        receiverText = <input type="text" id="receiverText" placeholder="Receiver" value={this.state.receiver} onChange={this.handleReveiverChange}/>;
    }

    return(
      <div>
        {receiverText}
        <br/>
        {messageText}
        <br/>
        {newMessageButton}
        <div style={borderStyle}>
          <MessageList messages = {this.state.messages} />
        </div>
      </div>
    );
  }
}
export default MessageBoard;