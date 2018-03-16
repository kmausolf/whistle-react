import React from 'react';
import {Link} from 'react-router';
import DatePickerForm from './DatePickerForm';
import SearchTypeForm from './SearchTypeForm';
import * as userActions from '../../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class OwnerMain extends React.Component {

  render() {
    
    const {user} = this.props;
    alert(JSON.stringify(user));
    return (
      <div>
      <div className="jumbotron">
        <h1><center>Whistle!</center></h1>
       
      </div>
      <h2> Welcome back</h2>
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

//maps store's state to props for this page
function mapStateToProps(state, ownProps) {
  return{
      user: state.currUser
  };
}

function mapDispatchToProps(dispatch){
  return{
      actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerMain);