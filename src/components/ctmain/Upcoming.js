import React from 'react';
import {Link} from 'react-router';

const Upcoming = (props) => {
    const imgStyle = {
        borderRadius: "10px",
        width: "100px",
        height: "100px", 
        float: "left"
    };
    return(
        <div>
            <div>
                <img id="profile_pic" src={props.clientpic} alt="Test profile pic" style={imgStyle}/><br/>
            </div>
            <div className="text-center" style={{marginLeft: "20%"}}>
                <h2>{props.clientname}</h2>
                <p>Pets: {props.pets.join(", ")}</p>
                <p>Date: {props.date} at {props.time}</p>
                <p>Address: {props.clientaddress}</p>
            </div>
        </div>
    );
};

Upcoming.propTypes = {
    clientpic: React.PropTypes.string,
    clientname: React.PropTypes.string.isRequired,
    clientaddress: React.PropTypes.string.isRequired,
    pets: React.PropTypes.array.isRequired,
    date: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired
};

export default Upcoming;