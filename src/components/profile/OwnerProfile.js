import React from 'react';
import {Link} from 'react-router';

class OwnerProfile extends React.Component {
  render() {
    const borderStyle = {
      padding:'7px', 
      border: '1.5px solid',
      borderRadius: '10px',
      borderColor: "#707070",
      width:"100%"
    };
    return (
      <div>
        <div className="jumbotron">
          <h1><center>My Profile</center></h1>
      </div>
      <div style={borderStyle}>
        <form>  <center>
          Address: <input type="text" id="address" /><br />
          Phone Number: <input type="text" id="phone" /><br />
          Email Address: <input type="text" id="email" /><br/>
          ProfilePicture: <br/>
          <img id="profile_pic" src="https://i.imgur.com/jNNT4LE.png" alt="Test profile pic"/><br/>
          <input id="image-file" type="file"  />
          Personal Bio:<br/>
          <textarea rows="5" cols="50" id="personal-bio"  placeholder="Enter Bio Here..."></textarea>
              </center> </form>
      </div>
      <div style={borderStyle}>
                <h2><center> My Pets </center> </h2>
      </div>
      <div style={borderStyle}>
      <form> <center>
                <h2>Add a new pet...</h2>

				Pet Species:
				<select id="species-selector">
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="bird">Bird</option>
				</select><br/>
				Name: <input type="text" id="pet-name" placeholder="Name"/><br/>
				Breed: <input type="text" id="pet-breed" placeholder="Breed"/><br/>
				Pet insurance No.: <input type="text" id="pet-insurance" placeholder="Pet insurance No"/><br/>
				Medicines: <input type="text" id="medicines" placeholder="Medicines"/><br/>
				Medical Conditions: <input type="text" id="medical-conditions" placeholder="Medical Conditions"/><br/>
				Emergency Vet No.: <input type="text" id="emergency-vet" placeholder="Emergency Vet No."/><br/>
				Walk Frequency: <input type="text" id="walk-frequency-times" placeholder="Number of times"/>
				per <input type="text" id="walk-frequency-days" placeholder="days"/><br/>
                Any other notes: <br /> <textarea rows="5" cols="50" id="pet-bio" placeholder="Enter Bio here..."></textarea> <br />
				<button onclick="createPet()">Add Another Pet</button>
       </center> </form>        
      </div>
    </div>
    );
  }
}

export default OwnerProfile;