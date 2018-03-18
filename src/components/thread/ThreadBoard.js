import React, {PropTypes} from 'react';

import MessageList from "./MessageList";

class ThreadBoard extends React.Component {
  constructor(props) {
    super(props);
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
            <MessageList 
                thread = {this.props.thread} 
                actions = {this.props.actions}
            />
        </div>
      </div>
    );
  }
}


ThreadBoard.propTypes = {
  thread: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default ThreadBoard;
