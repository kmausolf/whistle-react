import React, {PropTypes} from 'react';
import { Link } from 'react-router';

import ThreadCard from "./ThreadCard";

class ThreadList extends React.Component {
    constructor(props) {
      super(props);
    //   this.newMessage = this.send.newMessage(this);
    }

    // newMessage() {

    // }

    render() {
        const cardStyle = {
            padding:'7px', 
            border: '1.5px solid',
            borderRadius: '10px',
            borderColor: "#707070",
            width:"100%"
            
        };
        if(this.props.threads.length == 0) {
            return (
                <div>
                    <p>You have no messages!</p>
                </div>
            )
        }
        else {
            return (
                <div>
                    {/* <button onClick={this.newMessage}>Send New Message</button> */}
                    {this.props.threads.map(thread =>
                        <div key={thread.tid} style={cardStyle}>
                            <ThreadCard 
                                thread = {thread}
                                actions = {this.props.actions}
                            />
                        </div>
                    )}
                </div>
            );
        }
    }

};

ThreadList.propTypes = {
    threads: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

export default ThreadList;