import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import toastr from 'toastr';

import MessageCard from "./MessageCard";

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: this.props.thread.messages,
            replyMessage: ""
        };

        this.handleReplyChange = this.handleReplyChange.bind(this);
        this.getMessages = this.getMessages.bind(this);
        this.send = this.send.bind(this);
        
    }

    handleReplyChange(event) {
        this.setState({replyMessage: event.target.value});
    }

    send() {
        var userIDList = Object.assign([], this.props.thread.users)
        var senderID = JSON.parse(localStorage.getItem('currUser')).id
        var message = this.state.replyMessage
        this.props.actions.sendMessage(userIDList, senderID, message)
        .then(() => this.getMessages())
        .catch(error => {
            toastr.error(error);
        }); 
        this.setState({
            replyMessage: ""
        });
        
    }

    getMessages() {
        this.setState({messages: this.props.thread.messages})
    }

    render() {
        const cardStyle = {
            padding:'7px', 
            border: '1.5px solid',
            borderRadius: '10px',
            borderColor: "#707070",
            width:"100%"
            
        };

        return (
            <div>
                <Link to={{
                    pathname: '/messaging'
                    }}>
                    <button>Back</button>
                </Link><br/>

                <center>
                    <textarea id="reply-message" value={this.state.replyMessage} onChange={this.handleReplyChange} rows="5" cols="50"></textarea><br/>
                    <button onClick={this.send}>Send</button>
                </center>

                {this.state.messages.map(mid =>
                    <div key={mid} style={cardStyle}>
                        <MessageCard 
                            mid = {mid}
                            actions = {this.props.actions}
                        />
                    </div>
                )}
            </div>
        );
    }

}

MessageList.propTypes = {
    thread: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

export default MessageList;