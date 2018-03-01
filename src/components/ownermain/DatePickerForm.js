import React from 'react';
import {Link} from 'react-router';
//import {DatePicker} from 'react-datepicker'; //had issues with DatePicker... will check back later
//probably didn't install dependencies like Moment correctly. 

//Do we even need DatePicker? html default seems okay...
class DatePickerForm extends React.Component {
  render() {
  
    return (
     <form>
      Day:
      <input type="date" name="day" /><br />
      Time:
      <input type="time" name="tod" />
     </form>
    );
  }
}

export default DatePickerForm;
