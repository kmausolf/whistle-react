import React, {PropTypes} from 'react';

import ThreadList from "./ThreadList";

class MessageBoard extends React.Component {
  constructor(props, context) {
    super(props, context);
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
          <ThreadList 
            threads = {this.props.threads} 
            actions = {this.props.actions}
          />
        </div>
      </div>
    );
  }
}


MessageBoard.propTypes = {
  threads: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default MessageBoard;