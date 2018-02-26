import React from 'react';
import {Link} from 'react-router';

import LoginForm from './LoginForm';


class HomePage extends React.Component {
  render() {
    const logindivStyle = {
    };
    return (
      <div>
        <div className="jumbotron">
          <h1><center>Whistle!</center></h1>
          <h2><center>Call for a walker?</center></h2>
        </div>
        <div className="container">
          <div style={this.logindivStyle}>
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
