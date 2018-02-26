import React from 'react';
import {Link} from 'react-router';

import RegisterForm from './RegisterForm';

class Register extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1><center>Register</center></h1>
        </div>
        <div className="text-center">
           <RegisterForm /> 
        </div>
      </div>
    );
  }
}

export default Register;
