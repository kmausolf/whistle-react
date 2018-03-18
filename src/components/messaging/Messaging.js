import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as threadActions from '../../actions/threadActions';
import * as userActions from '../../actions/userActions';

import MessageBoard from './messageBoard';

class Messaging extends React.Component{
  constructor(props){
    super(props);
    if (localStorage.getItem('currUser') !== null) {
      this.props.actions.getThreadsByUser(JSON.parse(localStorage.getItem('currUser')).id)
    }
    
  }

  render(){
    return(
      <div>
        <div className="jumbotron">
          <h1><center>Messages</center></h1>
        </div>
        <MessageBoard 
          threads = {this.props.threads}
          actions = {this.props.actions}
        />
      </div>
    );
  }
}

Messaging.propTypes = {
  actions: PropTypes.object.isRequired,
  threads: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  return{
    threads: state.thread
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(Object.assign({}, threadActions, userActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messaging);
