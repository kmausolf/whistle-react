import React from 'react';
import {Link} from 'react-router';

class SettingsForm extends React.Component {
  render() {
    return (
    <form>
    <h3>Payment Method </h3>
    <select>
					<option value="credit">Credit/Debit Card</option>
					<option value="paypal">PayPal</option>
					<option value="venmo">Venmo</option>
					<option value="crypto">Crypto Currency</option>
		</select> <break> </break>
    <h3> Colorblind Mode: </h3> <break> </break>
				<select>
					<option value="off">Off</option>
          <option value="off">On</option>
				</select> 
        <h3>Push Notification:</h3> <break> </break>
				<select>
					<option value="off">Off</option>
					<option value="on">On</option>
				</select>
        <br /> <br />
        <input type="reset" value="Reset">
        </input>
        
        <input type="submit" value="Submit">
        </input>


			
    </form>
    );
  }
}

export default SettingsForm;