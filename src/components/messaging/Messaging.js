import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as threadActions from '../../actions/threadActions';

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
  threads: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return{
    threads: state.threads
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(threadActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Messaging);