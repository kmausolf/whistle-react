import React, {PropTypes} from 'react';

class Thread extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

  }

  render() {
    return (
        <div>
            <div className="jumbotron">
                <h1><center>Message Thread</center></h1>
            </div>
        </div>
    );
  }
}

export default Thread;
