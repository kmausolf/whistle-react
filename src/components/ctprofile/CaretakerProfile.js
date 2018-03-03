import React from 'react';
import {Link} from 'react-router';

class CaretakerProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = { pic:"https://i.imgur.com/jNNT4LE.png"};

    this.changeProfilePic = this.changeProfilePic.bind(this);
 
  }

  changeProfilePic() {
    var picLink = prompt("Please enter the URL for your picture", "");
   
    this.setState((prevState) => ({
     pic:picLink
  
    }));
  }
  

  render() {
    const borderStyle = {
      padding:'7px', 
      border: '1.5px solid',
      borderRadius: '10px',
      borderColor: "#707070",
      width:"100%"
    }
    const imgStyle = {
      borderRadius: "10px",
      width: "150px",
      height: "150px",
      float:'left' 
    };

    return (
      <div>
        <div className="jumbotron">
          <h1><center>My Profile</center></h1>
      </div>
      <div style={borderStyle}>
      <div style={{float:'left'}}>
          <img id="profile_pic" src={this.state.pic} alt="Test profile pic" style={imgStyle}/><br/>
          <button onClick={this.changeProfilePic}  type="button" style={{float:'center'}} >Upload Image</button> <br/>
          </div>
        <form>  
          <div >
          <center>
          Address: <input type="text" id="address" /><br />
          Phone Number: <input type="text" id="phone" /><br />
          Email Address: <input type="text" id="email" /><br/>
          <br/>
          
          Personal Bio:<br/>
          <textarea rows="5" cols="50" id="personal-bio"  placeholder="Enter Bio Here..."></textarea>
              </center> </div></form>
      </div>
     
    </div>
    );
  }
}

export default CaretakerProfile;