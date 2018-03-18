import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import toastr from 'toastr';

class CaretakerProfile extends React.Component {
  constructor(props){
    super(props);
    

    this.changeProfilePic = this.changeProfilePic.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.currUser = JSON.parse(localStorage.getItem('currUser'));
   
    this.state = { pic: this.currUser.avatar_url};
 
  }


  updateUser() {
    
    this.props.actions.updateUser(this.currUser)
    .catch(error => {
      toastr.error(error);
    });
   
    
    let test = JSON.parse(localStorage.getItem('currUser'));
    alert(JSON.stringify(test));
  }

  changeProfilePic() {
    var picLink = prompt("Please enter the URL for your picture", "");
    
    this.setState(
     {pic:picLink}
  
    );
    this.currUser.avatar_url = this.state.pic;
    localStorage.setItem('currUser', JSON.stringify(this.currUser));
    
    this.updateUser();
    
    
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
function mapStateToProps(state, ownProps) {
  //alert("mapState to props: "+JSON.stringify(state.users));
  return{
      users: state.users
  };
}
function mapDispatchToProps(dispatch){
  return{
      actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CaretakerProfile);