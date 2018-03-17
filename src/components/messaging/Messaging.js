import React from 'react';

import MessageBoard from './messageBoard';
import { bindActionCreators } from 'redux';

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