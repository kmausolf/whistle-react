import React from 'react';
import {Link} from 'react-router';
import Ads from './Ads';
class Results_Walkers extends React.Component {
  
  render() {
    const searchStyle = {
      float: "right",
      width: "35%"
    };
    const searchButtonStyle = {
      float: "right"
    };
    return (
      <div>
        <div className="jumbotron">
          <h1><center>Walkers</center></h1>
          <h2> <center>Here are some available Walkers near you!</center> </h2>
        </div>

        <div>
        
          <form>
          Search for a specific name, location...
            <button style={searchButtonStyle} type="submit" onClick={Ads.loadCards} >Search</button>
            <input style={searchStyle} type="text" placeholder="Enter a tag..." />
            
          </form> 
        </div>
      </div>
    );
  }
}

export default Results_Walkers;