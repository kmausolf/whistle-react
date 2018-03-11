import React from 'react';
import LoginForm from './LoginForm';
import * as userActions from '../../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userEmail: "",
      userPass: "",
      isOwner: true
    };
    this.saveUser = this.saveUser.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
  }

  handleChangeEmail(event){
    //Whenever the input notices a change, update the state
    let user = {email: event.target.value, pass: this.state.pass};
    this.setState({email: event.target.value, user:user});
  //  alert(JSON.stringify(this.state.user));
    event.preventDefault();
}

handleChangePass(event){
    let user = {email: this.state.email, pass: event.target.value};
    this.setState({pass: event.target.value, user:user});
  //  alert(JSON.stringify(this.state.user));
    event.preventDefault();
}

saveUser(event) {
    event.preventDefault();
   // alert(JSON.stringify(this.state.user));
    if (!this.courseFormIsValid()) {
      return;
    }
    
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
