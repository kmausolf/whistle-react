import React from 'react';
import LoginForm from './LoginForm';
import * as userActions from '../../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      pass: '',
      isOwner: false
    };
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

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1><center>Whistle!</center></h1>
          <h2><center>Call for a walker?</center></h2>
        </div>
        <div className="text-center">
          <LoginForm 
          onChangeEmail={this.handleChangeEmail}
          onChangePass={this.handleChangePass}
          onSave={this.onSave} />
        </div>
      </div>
    );
  }
}
export default HomePage;

/*
function mapStateToProps(state, ownProps) {
  
  let user = this.state.user;

  return {
    user:user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}
*/


//wont render unless export default
//export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
