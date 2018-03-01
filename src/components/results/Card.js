import React from 'react';
import {Link} from 'react-router';

//A single card with a user profile pic and blurb
const Card = (props) => {
    const cardStyle = {
        padding:'7px', 
        border: '1.5px solid',
        borderRadius: '10px',
        borderColor: "#707070",
        width:"100%"
        
      };

      const imgStyle = {
        borderRadius: '10px',
        width: "100",
        height: "100", 
        float: 'left'
      }
    return (
        <div style={cardStyle}>
            <img src={props.avatar_url} style={imgStyle} />
            <div > <center>
                <div> <h2> {props.name}  </h2></div>
                <div><h4> {props.title} </h4> </div>
                <div><p> {props.bio} </p> </div> 
                <button type="button">Contact</button>
                </center></div> 
                <br />
        </div>
    );
};

export default Card;