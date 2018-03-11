import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as userActions from '../../actions/userActions';
import {bindActionCreators} from 'redux';

export class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {email: '', pass: '', user: '', isOwner:true}; //changes depending on button pressed

        this.saveUser = this.saveUser.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
    }

    handleChangeEmail(event){
        //Whenever the input notices a change, update the state
        let user = {email: event.target.value, pass: this.state.pass};
        this.setState({email: event.target.value, user:user});
       
        event.preventDefault();
    }

    handleChangePass(event){
        let user = {email: this.state.email, pass: event.target.value};
        this.setState({pass: event.target.value, user:user});
        
        event.preventDefault();
    }

    saveUser(event) {
        event.preventDefault();
        alert(JSON.stringify(this.state.user));
        if (!this.courseFormIsValid()) {
          return;
        }
        
        this.props.actions.saveUser(this.state.user)
          .then(() => this.redirect())
          .catch(error => {
            
            this.setState({saving: false});
          });
      }

    render(){
        const buttonStyle = {
            width: "20vw",
            marginTop: "1%"
        };
        return(
            <form>
                <label>
                    Email: <br />
                    <input type="text" value={this.state.email} onChange={this.handleChangeEmail} /><br />
                    Password: <br />
                    <input type="password" value={this.state.pass} onChange={this.handleChangePass} /><br />
                    Don't have an account?  <Link to="/register">Register</Link>
                </label>
                <br />
                <button onClick={this.saveUser} > ffffffff</button>
                <Link 
                    className="btn btn-primary"
                    role="button"
                    to="/ownermain"
                    onClick={this.state.saveUser}
                    style={buttonStyle}
                    >
                    Login as Owner
                </Link>
                <br />
                <Link 
                    className="btn btn-primary"
                    role="button"
                    to="/ctmain"
                    style={buttonStyle}
                    >
                    Login as Caretaker
                </Link>
            </form>
        );
    }
}


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
  
export default LoginForm;
  //export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);