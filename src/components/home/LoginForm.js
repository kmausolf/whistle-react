import React from 'react';
import {Link} from 'react-router';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {email: '', pass: ''}; //changes depending on button pressed

        this.saveUser = this.saveUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        //Whenever the input notices a change, update the state
        /*
        let user;
        user.email = event.target.email;
        user.pass = event.target.pass;
        */
        this.setState({email: event.target.email, pass: event.target.pass});
       
        event.preventDefault();
        alert((this.state.email));
    }

    saveUser(event) {
        event.preventDefault();
        alert(JSON.stringify(this.state.email));
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
                    <input type="text" value={this.state.email} onChange={this.handleChange} /><br />
                    Password: <br />
                    <input type="password" value={this.state.pass} onChange={this.handleChange} /><br />
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

export default LoginForm;