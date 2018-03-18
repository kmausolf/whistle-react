import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as threadActions from '../../actions/threadActions';
import * as userActions from '../../actions/userActions';

import ThreadBoard from './ThreadBoard';

class Thread extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div>
            <div className="jumbotron">
                <h1><center>Message Thread</center></h1>
            </div>
            {console.log(this.props.location.state)}
            <ThreadBoard 
                thread = {this.props.threads[this.props.location.state.threadID]}
                actions = {this.props.actions}
            />
        </div>
    );
  }
}

Thread.propTypes = {
    actions: PropTypes.object.isRequired,
    threadID: PropTypes.number.isRequired,
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Thread);

// export default Thread;
