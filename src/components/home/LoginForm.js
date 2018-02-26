import React from 'react';
import {Link} from 'react-router';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {email: '', pass: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        //Whenever the input notices a change, update the state
        this.setState({email: event.target.email, pass: event.target.pass});
        event.preventDefault();
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
                <Link 
                    className="btn btn-primary"
                    role="button"
                    to="/ownermain"
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