import React from 'react';
<<<<<<< HEAD
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import * as threadActions from '../../actions/threadActions';
=======
>>>>>>> d01f20b2705ae88c341c155c338a66b2d7a8cce4

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
<<<<<<< HEAD
        <MessageBoard threads = {this.props.threads}/>
=======
        <MessageBoard 
          threads = {this.props.threads}
          actions = {this.props.actions}
        />
>>>>>>> d01f20b2705ae88c341c155c338a66b2d7a8cce4
      </div>
    );
  }
}

<<<<<<< HEAD
// export default Messaging;

Messaging.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return{
    threads: this.props.actions.getAllThreads()
=======
function mapStateToProps(state, ownProps) {
  return{
    threads: state.threads
>>>>>>> d01f20b2705ae88c341c155c338a66b2d7a8cce4
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(threadActions, dispatch)
  };
}

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(Messaging);
=======
export default connect(mapStateToProps,mapDispatchToProps)(Messaging);
>>>>>>> d01f20b2705ae88c341c155c338a66b2d7a8cce4
