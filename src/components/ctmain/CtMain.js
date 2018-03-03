import React from 'react';
import {Link} from 'react-router';
import WalkerPref from './WalkerPref';

class CtMain extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1><center>Whistle!</center></h1>
          <div className="text-center">
            <WalkerPref />
          </div>
        </div>
      </div>
    );
  }
}

export default CtMain;
