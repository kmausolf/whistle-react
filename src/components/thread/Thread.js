import React, {PropTypes} from 'react';

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
            <ThreadBoard 
                thread = {this.props.location.state.thread}
                actions = {this.props.location.state.actions}
            />
        </div>
    );
  }
}

Thread.propTypes = {
    actions: PropTypes.object.isRequired,
    thread: PropTypes.object.isRequired
};

export default Thread;
