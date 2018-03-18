import React from 'react';
import {Link} from 'react-router';
import DatePickerForm from './DatePickerForm';
import SearchTypeForm from './SearchTypeForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import toastr from 'toastr';
import {browserHistory} from 'react-router';


class OwnerMain extends React.Component {

  render() {

    // make sure user is logged in
    var currUser = JSON.parse(localStorage.getItem('currUser'))
    if(currUser == null) {
        toastr.error("Please log in first");
        browserHistory.push('/');
    }
    
   // alert(JSON.stringify(currUser));
    return (
      <div>
      <div className="jumbotron">
        <h1><center>Whistle!</center></h1>
       
      </div>
      <h2><center>Welcome {currUser.firstName}! </center></h2>
      <h2><center>When do you need a caretaker?</center></h2>
      <div className="ownerChoice">
           <center>
           <DatePickerForm /> 
           <br />
           <SearchTypeForm />
           </center>
      </div>
    </div>
    );
  }
}
export default OwnerMain;
/*
function mapStateToProps(state, ownProps) {
  return{
      user: state.user
  };
}

function mapDispatchToProps(dispatch){
  return{
      actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerMain); */
