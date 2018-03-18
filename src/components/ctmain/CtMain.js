import React from 'react';
import {Link} from 'react-router';
import WalkerPref from './WalkerPref';
import UpcomingList from './UpcomingList';

class CtMain extends React.Component {
  constructor(props){
    super(props);
    this.state = { jobs: [] };
    
    this.loadJobs = this.loadJobs.bind(this);
  }

  loadJobs(){
    this.setState({
      jobs: [
        {
          key: 0,
          clientname: "Don Swisher",
          clientaddress: "7777 Redwood Ct., Wonderland, CA, 97777",
          clientpic: "https://i.imgur.com/LbDUJDk.jpg",
          pets: ["Paco", "Grimm"],
          date: "05-20-2018",
          time: "1300"
        }
      ]
    });
  }

  render() {
    let currUser = JSON.parse(localStorage.getItem('currUser'));
    
    //alert(JSON.stringify(currUser));
    return (
      <div>
        <div className="jumbotron">
          <h1><center>Whistle!</center></h1>
          <div className="text-center">
            <WalkerPref />
          </div>
        </div>
        <div className="text-center">
          <h4>Upcoming Jobs</h4>
          <button onClick={this.loadJobs}>Load Dummy Data</button>
        </div>
        <UpcomingList jobs={this.state.jobs} />
      </div>
    );
  }
}

export default CtMain;
