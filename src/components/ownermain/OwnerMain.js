import React from 'react';
import {Link} from 'react-router';
import DatePickerForm from './DatePickerForm';
import SearchTypeForm from './SearchTypeForm';


class OwnerMain extends React.Component {
  render() {
    return (
      <div>
      <div className="jumbotron">
        <h1><center>Whistle!</center></h1>
       
      </div>
      <h2><center>When do you need a caretaker?</center></h2>
      <div className="ownerChoice">
    
           <DatePickerForm /> 
           <br />
           <SearchTypeForm />
        
      </div>
    </div>
    );
  }
}

export default OwnerMain;
