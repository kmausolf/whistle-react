import React from 'react';
import {Link} from 'react-router';
import Ads from './Ads';
class Results_Sitters extends React.Component {
 

  render() {
   
    return (
      <div>
        <div className="jumbotron">
          <h1><center>Sitters</center></h1>
          <h2> <center>Here are some available Sitters near you!</center> </h2>
        </div>

        <div>
       
        <Ads /> 
        </div>
      </div>
    );
  }
}

export default Results_Sitters;