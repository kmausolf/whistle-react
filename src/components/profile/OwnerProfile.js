import React from 'react';
import {Link} from 'react-router';
import MyPets from "./MyPets";
class OwnerProfile extends React.Component {
  
  render() {
    const borderStyle = {
      padding:'7px', 
      border: '1.5px solid',
      borderRadius: '10px',
      borderColor: "#707070",
      width:"100%"
    }

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
      <MyPets />
    </div>
    );
  }
}

export default OwnerProfile;