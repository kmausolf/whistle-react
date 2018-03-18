import React, {PropTypes} from 'react';

import MessageCard from "./MessageCard";

class MessageList extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        const cardStyle = {
            padding:'7px', 
            border: '1.5px solid',
            borderRadius: '10px',
            borderColor: "#707070",
            width:"100%"
            
        };

        var i = 0

        return (
            <div>
                {this.props.thread.messages.map(mid =>
                    <div key={mid} style={cardStyle}>
                        <MessageCard 
                            mid = {mid}
                            actions = {this.props.actions}
                            side = {i++}
                        />
                    </div>
                )}
            </div>
        );
    }

};

MessageList.propTypes = {
    thread: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

export default MessageList;