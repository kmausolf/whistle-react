import React from 'react';
import {Link} from 'react-router';

import RegisterForm from './RegisterForm';
import * as userActions from '../../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Register extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      email: '',
      pass: '',
      isOwner: false
    };
    this.saveUser = this.saveUser.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
  }


handleChangeEmail(event){
  //Whenever the input notices a change, update the state
  this.setState({email: event.target.value});
  //alert(JSON.stringify(this.state.user));
  event.preventDefault();
}

handleChangePass(event){
  this.setState({pass: event.target.value});
//  alert(JSON.stringify(this.state.user));
  event.preventDefault();
}

saveUser(event) {
  event.preventDefault();
 // alert(JSON.stringify(this.state.user));
  
  
  
  this.props.actions.saveUser(this.state.user)
    .then(() => this.redirect())
    .catch(error => {
      
      this.setState({saving: false});
    }); 
}  

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1><center>Register</center></h1>
        </div>
        <div className="text-center">
        <RegisterForm 
          onChangeEmail={this.handleChangeEmail}
          onChangePass={this.handleChangePass}
          onSave={this.saveUser} />
       
        </div>
      </div>
    );
  }
}

export default Register;

/*
function mapStateToProps(state, ownProps) {
  
  let user = this.state.email;

  //we have these fields in our state, we want them mapped to props?
  return {
      email: this.state.email,
      pass: this.state.pass,
      isOwner: this.state.isOwner
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}
*/

//wont render unless export default
//export default connect(mapStateToProps, mapDispatchToProps)(Register);
