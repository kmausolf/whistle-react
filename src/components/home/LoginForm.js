import React,{PropTypes}  from 'react';
import {Link} from 'react-router';


const LoginForm = ({user,onChangeEmail, onChangePass, onSave}) => {
    
        const buttonStyle = {
            width: "20vw",
            marginTop: "1%"
        };
        return(
            <form>
                <label>
                    Email: <br />
                    <input type="text" name="email" value={user.email}  onChange={onChangeEmail} /><br />
                    Password: <br />
                    <input type="password" name="pass" value={user.pass}  onChange={onChangePass} /><br />
                    Don't have an account?  <Link to="/register">Register</Link>
                </label>
                <br />
                <button onClick={onSave}>Temp save button</button>
                <Link 
                    className="btn btn-primary"
                    role="button"
                    to="/ownermain"
                    onClick={onSave}
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
    
};

LoginForm.propTypes = {
    onSave: React.PropTypes.func.isRequired,
    onChangeEmail: React.PropTypes.func.isRequired,
    onChangePass: React.PropTypes.func.isRequired
  };

export default LoginForm;