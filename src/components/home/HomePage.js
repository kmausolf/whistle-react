import React from 'react';
import {Link} from 'react-router';

import LoginForm from './LoginForm';


class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userEmail: "",
      userPass: "",
      isOwner: true
    };
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1><center>Whistle!</center></h1>
          <h2><center>Call for a walker?</center></h2>
        </div>
        <div className="text-center">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default HomePage;
