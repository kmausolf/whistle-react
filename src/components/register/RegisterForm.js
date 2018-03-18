import React, {PropTypes} from 'react';

const RegisterForm = ({user, onChange, ownerReg, ctReg, onSave}) => {

    const buttonStyle = {
        width: "20vw",
        marginTop: "1%"
    };
    return(
        <form>
            <label>
                First Name: <br />
                <input type="text" name="firstName" value={user.firstName} onChange={onChange} /><br />
                Last Name: <br />
                <input type="text" name="lastName" value={user.lastName} onChange={onChange} /><br />
                Email: <br />
                <input type="text" name="email" value={user.email} onChange={onChange} /><br />
                Password: <br />
                <input type="password" name="pass" value={user.pass} onChange={onChange} /><br />
            </label>
            <br />
            <form>
                <div className="radio">
                <label>
                    <input type="radio" value="option1" name="acctType" onClick={ownerReg}/>
                    Register as Pet Owner
                </label>
                </div>
                <div className="radio">
                <label>
                    <input type="radio" value="option2" name="acctType" onClick={ctReg}/>
                    Register as Caretaker
                </label> 
                </div>
                </form>
           
            <button className="btn btn-primary" onClick={onSave}>Register!</button><br />
        </form>
    );
}
RegisterForm.propTypes = {
    onSave: React.PropTypes.func.isRequired,
    onChangeEmail: React.PropTypes.func.isRequired,
    onChangePass: React.PropTypes.func.isRequired
  };

export default RegisterForm;
