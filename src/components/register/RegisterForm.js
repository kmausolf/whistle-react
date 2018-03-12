import React from 'react';
import {Link} from 'react-router';

const RegisterForm = ({onChangeEmail, onChangePass, onSave}) => {

        const buttonStyle = {
            width: "20vw",
            marginTop: "1%"
        };
        return(
            <form>
                <label>
                    Email: <br />
                    <input type="text" value={this.state.email} onChange={onChangeEmail} /><br />
                    Password: <br />
                    <input type="password" value={this.state.pass} onChange={onChangePass} /><br />
                </label>
                <br />
                <button onClick={onSave}> Test save button</button>
                <Link 
                    className="btn btn-primary"
                    role="button"
                    to="/ownermain"
                    style={buttonStyle}
                    >
                    Register an Owner Account
                </Link>
                <br />
                <Link 
                    className="btn btn-primary"
                    role="button"
                    to="/ctmain"
                    style={buttonStyle}
                    >
                    Register a Caretaker Account
                </Link>
            </form>
        );
    
}
RegisterForm.propTypes = {
    onSave: React.PropTypes.func.isRequired,
    onChangeEmail: React.PropTypes.func.isRequired,
    onChangePass: React.PropTypes.func.isRequired
  };

export default RegisterForm;