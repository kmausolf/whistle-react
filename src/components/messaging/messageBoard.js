import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import * as threadActions from '../../actions/threadActions';

import ThreadList from "./ThreadList";

class MessageBoard extends React.Component {
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
          <ThreadList threads = {this.props.threads} />
        </div>
      </div>
    );
  }
}

export default MessageBoard;

// MessageBoard.propTypes = {
//   actions: PropTypes.object.isRequired
// };

// function mapStateToProps(state, ownProps) {
//   return{
//     threads: this.props.actions.getAllThreads()
//   };
// }

// function mapDispatchToProps(dispatch){
//   return{
//     actions: bindActionCreators(threadActions, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MessageBoard);