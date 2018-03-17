import React from 'react';
import LoginForm from './LoginForm';
import * as userActions from '../../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import {browserHistory} from 'react-router';
class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        email: '', 
        pass: '',
        isOwner: ''
      }, 
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.ownerLogin = this.ownerLogin.bind(this);
    this.ctLogin = this.ctLogin.bind(this);
  }

handleChange(event){
  event.preventDefault();
  //Whenever the input notices a change, update the state
  let user = Object.assign({}, this.state.user);
  user[event.target.name] = event.target.value;
  
  this.setState({user: user});
}


ownerLogin(event){
  event.preventDefault();
  let user = Object.assign({}, this.state.user);
  user.isOwner = true;
  this.setState({user: user}); 
  this.loginUser(event);
}

ctLogin(event){
  event.preventDefault();
  let user2 = Object.assign({}, this.state.user);
  user2.isOwner = false;

  this.setState({user: user2});
  this.loginUser(event);
}


loginUser(event){
  event.preventDefault();
  alert(JSON.stringify(this.state.user));
  
  /*
  if(!this.regFormIsValid()){
      return;
  }*/
  
  this.props.actions.validateUser(this.state.user)
  .then(() => this.redirect())   //redirects when finished. rejections won't call redirect?
  .catch(error => {
    toastr.error(error);
  }); 

}

redirect(){
  toastr.success('Login Successful!');
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
          <h1><center>Whistle!</center></h1>
          <h2><center>Call for a walker?</center></h2>
        </div>
        <div className="text-center">
          <LoginForm 
          user={this.state.user}
          onChangeEmail={this.handleChange}
          onChangePass={this.handleChange}
          ownerLogin={this.ownerLogin}
          ctLogin={this.ctLogin} />
        </div>
      </div>
    );
  }
}
//export default HomePage;

//state is what is returned by the reducer? ownProps is props of HOmepage?
//in this case, a boolean is returned.
function mapStateToProps(state, ownProps) {
   let currUser = ownProps.user;
  //we have these fields in our state, we want them mapped to props?
  return {
    response: state.response,
    user: currUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
