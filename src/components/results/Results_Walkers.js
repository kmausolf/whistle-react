import React from 'react';
import {Link} from 'react-router';
import Ads from './Ads';
class Results_Walkers extends React.Component {
  
  render() {
    
    return (
      <div>
        <div className="jumbotron">
          <h1><center>Walkers</center></h1>
          <h2><center>Here are some available Walkers near you!</center></h2>
        </div>

        <div>
        
         <Ads />
        </div>
      </div>
    );
  }
}

export default Results_Walkers;