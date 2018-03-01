import React from 'react';
import {Link} from 'react-router';
import SettingsForm from './SettingsForm';

class Settings extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron"> 
          <h1><center>Settings</center></h1>
        </div>
        <div className="text-center">
           <SettingsForm /> 
        </div>
      </div>
    );
  }
}

export default Settings;