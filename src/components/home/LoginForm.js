import React,{PropTypes}  from 'react';
import {Link} from 'react-router';


const LoginForm = ({user,onChangeEmail, onChangePass, onLogin}) => {
    
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
                
                <button className="btn btn-primary" style={buttonStyle} onClick={onLogin}>Login</button><br />
                
            </form>
        );
    
};

/*
LoginForm.propTypes = {
    onChangeEmail: React.PropTypes.func.isRequired,
    onChangePass: React.PropTypes.func.isRequired
  };
*/
export default LoginForm;