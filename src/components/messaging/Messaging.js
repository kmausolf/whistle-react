import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
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
        <MessageBoard threads = {this.props.threads}/>
      </div>
    );
  }
}

// export default Messaging;

Messaging.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return{
    threads: this.props.actions.getAllThreads()
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(threadActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messaging);