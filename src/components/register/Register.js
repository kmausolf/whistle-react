import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import toastr from 'toastr';
import {browserHistory} from 'react-router';
import RegisterForm from './RegisterForm'
class Register extends React.Component {
constructor(props){
    super(props);
    this.state = {
        user: {
            firstName: '', 
            lastName: '',
            email: '', 
            pass: '',
            isOwner: true
        },
        errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.ownerReg = this.ownerReg.bind(this);
    this.ctReg = this.ctReg.bind(this);
  }

  handleChange(event){
      event.preventDefault();
      //Whenever the input notices a change, update the state
      let user = Object.assign({}, this.state.user);
      user[event.target.name] = event.target.value;

      this.setState({user: user});
  }

  regFormIsValid(){
      let formIsValid = true;
      let errors = {};

      if(this.state.user.firstName.length < 1){
          errors.firstName = 'First name must not be blank.';
          formIsValid = false;
      }
      if(this.state.user.lastName.length < 1){
          errors.lastName = 'Last name must not be blank.';
          formIsValid = false;
      }
      if(this.state.user.email.length < 1){
          errors.email = 'Email must not be blank.';
          formIsValid = false;
      }
      if(this.state.user.pass.length < 1){
          errors.pass = 'Password must not be blank.';
          formIsValid = false;
      }

      this.setState({errors: errors});
      return formIsValid;
      
  }
  
  ownerReg(event){
      event.preventDefault();
      let user = Object.assign({}, this.state.user);
      user.isOwner = true;

      this.setState({user: user});
      
      this.saveUser();
  }

  ctReg(event){
      event.preventDefault();
      let user = Object.assign({}, this.state.user);
      user.isOwner = false;

      this.setState({user: user});

      this.saveUser();
  }

  saveUser(){
      if(!this.regFormIsValid()){
          return;
      }

      this.props.actions.saveUser(this.state.user)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
      });

  }

  redirect(){
      toastr.success('Registration Successful!');
      if(this.state.user.isOwner){
          browserHistory.push('/ownermain');
      }
      else{
          browserHistory.push('/ctmain');
      }
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1><center>Register</center></h1>
        </div>
        <div className="text-center">
           <RegisterForm 
            user={this.state.user}
            onChange={this.handleChange}
            ownerReg={this.ownerReg}
            ctReg={this.ctReg}
           /> 
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  actions: PropTypes.object.isRequired
};

//maps store's state to props for this page
function mapStateToProps(state, ownProps) {
    return{
        user: state.user
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
